if (!t)
    var t = {
        map: function (e, t) {
            var n = {};
            return t
                ? e.map(function (e, i) {
                      return (n.index = i), t.call(n, e);
                  })
                : e.slice();
        },
        naturalOrder: function (e, t) {
            return e < t ? -1 : +(e > t);
        },
        sum: function (e, t) {
            var n = {};
            return e.reduce(
                t
                    ? function (e, i, r) {
                          return (n.index = r), e + t.call(n, i);
                      }
                    : function (e, t) {
                          return e + t;
                      },
                0,
            );
        },
        max: function (e, n) {
            return Math.max.apply(null, n ? t.map(e, n) : e);
        },
    };
e.exports = (function () {
    function e(e, t, n) {
        return (e << 10) + (t << 5) + n;
    }
    function n(e) {
        var t = [],
            n = !1;
        function i() {
            t.sort(e), (n = !0);
        }
        return {
            push: function (e) {
                t.push(e), (n = !1);
            },
            peek: function (e) {
                return n || i(), void 0 === e && (e = t.length - 1), t[e];
            },
            pop: function () {
                return n || i(), t.pop();
            },
            size: function () {
                return t.length;
            },
            map: function (e) {
                return t.map(e);
            },
            debug: function () {
                return n || i(), t;
            },
        };
    }
    function i(e, t, n, i, r, s, a) {
        (this.r1 = e), (this.r2 = t), (this.g1 = n), (this.g2 = i), (this.b1 = r), (this.b2 = s), (this.histo = a);
    }
    function r() {
        this.vboxes = new n(function (e, n) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    return (
        (i.prototype = {
            volume: function (e) {
                return (
                    (!this._volume || e) &&
                        (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)),
                    this._volume
                );
            },
            count: function (t) {
                var n = this.histo;
                if (!this._count_set || t) {
                    var i,
                        r,
                        s,
                        a = 0;
                    for (i = this.r1; i <= this.r2; i++)
                        for (r = this.g1; r <= this.g2; r++)
                            for (s = this.b1; s <= this.b2; s++) a += n[e(i, r, s)] || 0;
                    (this._count = a), (this._count_set = !0);
                }
                return this._count;
            },
            copy: function () {
                return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
            },
            avg: function (t) {
                var n = this.histo;
                if (!this._avg || t) {
                    var i,
                        r,
                        s,
                        a,
                        o = 0,
                        l = 0,
                        u = 0,
                        c = 0;
                    for (r = this.r1; r <= this.r2; r++)
                        for (s = this.g1; s <= this.g2; s++)
                            for (a = this.b1; a <= this.b2; a++)
                                (o += i = n[e(r, s, a)] || 0),
                                    (l += i * (r + 0.5) * 8),
                                    (u += i * (s + 0.5) * 8),
                                    (c += i * (a + 0.5) * 8);
                    o
                        ? (this._avg = [~~(l / o), ~~(u / o), ~~(c / o)])
                        : (this._avg = [
                              ~~((8 * (this.r1 + this.r2 + 1)) / 2),
                              ~~((8 * (this.g1 + this.g2 + 1)) / 2),
                              ~~((8 * (this.b1 + this.b2 + 1)) / 2),
                          ]);
                }
                return this._avg;
            },
            contains: function (e) {
                var t = e[0] >> 3;
                return (
                    (gval = e[1] >> 3),
                    (bval = e[2] >> 3),
                    t >= this.r1 &&
                        t <= this.r2 &&
                        gval >= this.g1 &&
                        gval <= this.g2 &&
                        bval >= this.b1 &&
                        bval <= this.b2
                );
            },
        }),
        (r.prototype = {
            push: function (e) {
                this.vboxes.push({ vbox: e, color: e.avg() });
            },
            palette: function () {
                return this.vboxes.map(function (e) {
                    return e.color;
                });
            },
            size: function () {
                return this.vboxes.size();
            },
            map: function (e) {
                for (var t = this.vboxes, n = 0; n < t.size(); n++)
                    if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                return this.nearest(e);
            },
            nearest: function (e) {
                for (var t, n, i, r = this.vboxes, s = 0; s < r.size(); s++)
                    ((n = Math.sqrt(
                        Math.pow(e[0] - r.peek(s).color[0], 2) +
                            Math.pow(e[1] - r.peek(s).color[1], 2) +
                            Math.pow(e[2] - r.peek(s).color[2], 2),
                    )) < t ||
                        void 0 === t) &&
                        ((t = n), (i = r.peek(s).color));
                return i;
            },
            forcebw: function () {
                var e = this.vboxes;
                e.sort(function (e, n) {
                    return t.naturalOrder(t.sum(e.color), t.sum(n.color));
                });
                var n = e[0].color;
                n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                var i = e.length - 1,
                    r = e[i].color;
                r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[i].color = [255, 255, 255]);
            },
        }),
        {
            quantize: function (s, a) {
                if (!s.length || a < 2 || a > 256) return !1;
                var o,
                    l,
                    u,
                    c,
                    d,
                    _,
                    h,
                    f,
                    p,
                    E,
                    m,
                    g,
                    A =
                        ((u = Array(32768)),
                        s.forEach(function (t) {
                            (l = t[0] >> 3), (u[(o = e(l, t[1] >> 3, t[2] >> 3))] = (u[o] || 0) + 1);
                        }),
                        u),
                    I = 0;
                A.forEach(function () {
                    I++;
                });
                var T =
                        ((h = 1e6),
                        (f = 0),
                        (p = 1e6),
                        (E = 0),
                        (m = 1e6),
                        (g = 0),
                        s.forEach(function (e) {
                            (c = e[0] >> 3),
                                (d = e[1] >> 3),
                                (_ = e[2] >> 3),
                                c < h ? (h = c) : c > f && (f = c),
                                d < p ? (p = d) : d > E && (E = d),
                                _ < m ? (m = _) : _ > g && (g = _);
                        }),
                        new i(h, f, p, E, m, g, A)),
                    S = new n(function (e, n) {
                        return t.naturalOrder(e.count(), n.count());
                    });
                function y(n, i) {
                    for (var r, s = 1, a = 0; a < 1e3; ) {
                        if (!(r = n.pop()).count()) {
                            n.push(r), a++;
                            continue;
                        }
                        var o = (function (n, i) {
                                if (i.count()) {
                                    var r = i.r2 - i.r1 + 1,
                                        s = i.g2 - i.g1 + 1,
                                        a = i.b2 - i.b1 + 1,
                                        o = t.max([r, s, a]);
                                    if (1 == i.count()) return [i.copy()];
                                    var l,
                                        u,
                                        c,
                                        d,
                                        _ = 0,
                                        h = [],
                                        f = [];
                                    if (o == r)
                                        for (l = i.r1; l <= i.r2; l++) {
                                            for (d = 0, u = i.g1; u <= i.g2; u++)
                                                for (c = i.b1; c <= i.b2; c++) d += n[e(l, u, c)] || 0;
                                            (_ += d), (h[l] = _);
                                        }
                                    else if (o == s)
                                        for (l = i.g1; l <= i.g2; l++) {
                                            for (d = 0, u = i.r1; u <= i.r2; u++)
                                                for (c = i.b1; c <= i.b2; c++) d += n[e(u, l, c)] || 0;
                                            (_ += d), (h[l] = _);
                                        }
                                    else
                                        for (l = i.b1; l <= i.b2; l++) {
                                            for (d = 0, u = i.r1; u <= i.r2; u++)
                                                for (c = i.g1; c <= i.g2; c++) d += n[e(u, c, l)] || 0;
                                            (_ += d), (h[l] = _);
                                        }
                                    return (
                                        h.forEach(function (e, t) {
                                            f[t] = _ - e;
                                        }),
                                        (function (e) {
                                            var t,
                                                n,
                                                r,
                                                s,
                                                a,
                                                o = e + "1",
                                                u = e + "2",
                                                c = 0;
                                            for (l = i[o]; l <= i[u]; l++)
                                                if (h[l] > _ / 2) {
                                                    for (
                                                        r = i.copy(),
                                                            s = i.copy(),
                                                            a =
                                                                (t = l - i[o]) <= (n = i[u] - l)
                                                                    ? Math.min(i[u] - 1, ~~(l + n / 2))
                                                                    : Math.max(i[o], ~~(l - 1 - t / 2));
                                                        !h[a];
                                                    )
                                                        a++;
                                                    for (c = f[a]; !c && h[a - 1]; ) c = f[--a];
                                                    return (r[u] = a), (s[o] = r[u] + 1), [r, s];
                                                }
                                        })(o == r ? "r" : o == s ? "g" : "b")
                                    );
                                }
                            })(A, r),
                            l = o[0],
                            u = o[1];
                        if (!l || (n.push(l), u && (n.push(u), s++), s >= i || a++ > 1e3)) return;
                    }
                }
                S.push(T), y(S, 0.75 * a);
                for (
                    var C = new n(function (e, n) {
                        return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume());
                    });
                    S.size();
                )
                    C.push(S.pop());
                y(C, a - C.size());
                for (var N = new r(); C.size(); ) N.push(C.pop());
                return N;
            },
        }
    );
})().quantize;
