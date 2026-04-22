if (!t)
    var t = {
        map: function (e, t) {
            var n = {};
            return t
                ? e.map(function (e, r) {
                      return (n.index = r), t.call(n, e);
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
                    ? function (e, r, i) {
                          return (n.index = i), e + t.call(n, r);
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
        function r() {
            t.sort(e), (n = !0);
        }
        return {
            push: function (e) {
                t.push(e), (n = !1);
            },
            peek: function (e) {
                return n || r(), void 0 === e && (e = t.length - 1), t[e];
            },
            pop: function () {
                return n || r(), t.pop();
            },
            size: function () {
                return t.length;
            },
            map: function (e) {
                return t.map(e);
            },
            debug: function () {
                return n || r(), t;
            },
        };
    }
    function r(e, t, n, r, i, s, a) {
        (this.r1 = e), (this.r2 = t), (this.g1 = n), (this.g2 = r), (this.b1 = i), (this.b2 = s), (this.histo = a);
    }
    function i() {
        this.vboxes = new n(function (e, n) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    return (
        (r.prototype = {
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
                    var r,
                        i,
                        s,
                        a = 0;
                    for (r = this.r1; r <= this.r2; r++)
                        for (i = this.g1; i <= this.g2; i++)
                            for (s = this.b1; s <= this.b2; s++) a += n[e(r, i, s)] || 0;
                    (this._count = a), (this._count_set = !0);
                }
                return this._count;
            },
            copy: function () {
                return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
            },
            avg: function (t) {
                var n = this.histo;
                if (!this._avg || t) {
                    var r,
                        i,
                        s,
                        a,
                        o = 0,
                        l = 0,
                        u = 0,
                        d = 0;
                    for (i = this.r1; i <= this.r2; i++)
                        for (s = this.g1; s <= this.g2; s++)
                            for (a = this.b1; a <= this.b2; a++)
                                (o += r = n[e(i, s, a)] || 0),
                                    (l += r * (i + 0.5) * 8),
                                    (u += r * (s + 0.5) * 8),
                                    (d += r * (a + 0.5) * 8);
                    o
                        ? (this._avg = [~~(l / o), ~~(u / o), ~~(d / o)])
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
        (i.prototype = {
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
                for (var t, n, r, i = this.vboxes, s = 0; s < i.size(); s++)
                    ((n = Math.sqrt(
                        Math.pow(e[0] - i.peek(s).color[0], 2) +
                            Math.pow(e[1] - i.peek(s).color[1], 2) +
                            Math.pow(e[2] - i.peek(s).color[2], 2),
                    )) < t ||
                        void 0 === t) &&
                        ((t = n), (r = i.peek(s).color));
                return r;
            },
            forcebw: function () {
                var e = this.vboxes;
                e.sort(function (e, n) {
                    return t.naturalOrder(t.sum(e.color), t.sum(n.color));
                });
                var n = e[0].color;
                n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                var r = e.length - 1,
                    i = e[r].color;
                i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255]);
            },
        }),
        {
            quantize: function (s, a) {
                if (!s.length || a < 2 || a > 256) return !1;
                var o,
                    l,
                    u,
                    d,
                    c,
                    _,
                    f,
                    E,
                    h,
                    p,
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
                        ((f = 1e6),
                        (E = 0),
                        (h = 1e6),
                        (p = 0),
                        (m = 1e6),
                        (g = 0),
                        s.forEach(function (e) {
                            (d = e[0] >> 3),
                                (c = e[1] >> 3),
                                (_ = e[2] >> 3),
                                d < f ? (f = d) : d > E && (E = d),
                                c < h ? (h = c) : c > p && (p = c),
                                _ < m ? (m = _) : _ > g && (g = _);
                        }),
                        new r(f, E, h, p, m, g, A)),
                    S = new n(function (e, n) {
                        return t.naturalOrder(e.count(), n.count());
                    });
                function y(n, r) {
                    for (var i, s = 1, a = 0; a < 1e3; ) {
                        if (!(i = n.pop()).count()) {
                            n.push(i), a++;
                            continue;
                        }
                        var o = (function (n, r) {
                                if (r.count()) {
                                    var i = r.r2 - r.r1 + 1,
                                        s = r.g2 - r.g1 + 1,
                                        a = r.b2 - r.b1 + 1,
                                        o = t.max([i, s, a]);
                                    if (1 == r.count()) return [r.copy()];
                                    var l,
                                        u,
                                        d,
                                        c,
                                        _ = 0,
                                        f = [],
                                        E = [];
                                    if (o == i)
                                        for (l = r.r1; l <= r.r2; l++) {
                                            for (c = 0, u = r.g1; u <= r.g2; u++)
                                                for (d = r.b1; d <= r.b2; d++) c += n[e(l, u, d)] || 0;
                                            (_ += c), (f[l] = _);
                                        }
                                    else if (o == s)
                                        for (l = r.g1; l <= r.g2; l++) {
                                            for (c = 0, u = r.r1; u <= r.r2; u++)
                                                for (d = r.b1; d <= r.b2; d++) c += n[e(u, l, d)] || 0;
                                            (_ += c), (f[l] = _);
                                        }
                                    else
                                        for (l = r.b1; l <= r.b2; l++) {
                                            for (c = 0, u = r.r1; u <= r.r2; u++)
                                                for (d = r.g1; d <= r.g2; d++) c += n[e(u, d, l)] || 0;
                                            (_ += c), (f[l] = _);
                                        }
                                    return (
                                        f.forEach(function (e, t) {
                                            E[t] = _ - e;
                                        }),
                                        (function (e) {
                                            var t,
                                                n,
                                                i,
                                                s,
                                                a,
                                                o = e + "1",
                                                u = e + "2",
                                                d = 0;
                                            for (l = r[o]; l <= r[u]; l++)
                                                if (f[l] > _ / 2) {
                                                    for (
                                                        i = r.copy(),
                                                            s = r.copy(),
                                                            a =
                                                                (t = l - r[o]) <= (n = r[u] - l)
                                                                    ? Math.min(r[u] - 1, ~~(l + n / 2))
                                                                    : Math.max(r[o], ~~(l - 1 - t / 2));
                                                        !f[a];
                                                    )
                                                        a++;
                                                    for (d = E[a]; !d && f[a - 1]; ) d = E[--a];
                                                    return (i[u] = a), (s[o] = i[u] + 1), [i, s];
                                                }
                                        })(o == i ? "r" : o == s ? "g" : "b")
                                    );
                                }
                            })(A, i),
                            l = o[0],
                            u = o[1];
                        if (!l || (n.push(l), u && (n.push(u), s++), s >= r || a++ > 1e3)) return;
                    }
                }
                S.push(T), y(S, 0.75 * a);
                for (
                    var N = new n(function (e, n) {
                        return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume());
                    });
                    S.size();
                )
                    N.push(S.pop());
                y(N, a - N.size());
                for (var O = new i(); N.size(); ) O.push(N.pop());
                return O;
            },
        }
    );
})().quantize;
