if (!t)
    var t = {
        map: function (e, t) {
            var r = {};
            return t
                ? e.map(function (e, n) {
                      return (r.index = n), t.call(r, e);
                  })
                : e.slice();
        },
        naturalOrder: function (e, t) {
            return e < t ? -1 : +(e > t);
        },
        sum: function (e, t) {
            var r = {};
            return e.reduce(
                t
                    ? function (e, n, i) {
                          return (r.index = i), e + t.call(r, n);
                      }
                    : function (e, t) {
                          return e + t;
                      },
                0,
            );
        },
        max: function (e, r) {
            return Math.max.apply(null, r ? t.map(e, r) : e);
        },
    };
e.exports = (function () {
    function e(e, t, r) {
        return (e << 10) + (t << 5) + r;
    }
    function r(e) {
        var t = [],
            r = !1;
        function n() {
            t.sort(e), (r = !0);
        }
        return {
            push: function (e) {
                t.push(e), (r = !1);
            },
            peek: function (e) {
                return r || n(), void 0 === e && (e = t.length - 1), t[e];
            },
            pop: function () {
                return r || n(), t.pop();
            },
            size: function () {
                return t.length;
            },
            map: function (e) {
                return t.map(e);
            },
            debug: function () {
                return r || n(), t;
            },
        };
    }
    function n(e, t, r, n, i, o, a) {
        (this.r1 = e), (this.r2 = t), (this.g1 = r), (this.g2 = n), (this.b1 = i), (this.b2 = o), (this.histo = a);
    }
    function i() {
        this.vboxes = new r(function (e, r) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), r.vbox.count() * r.vbox.volume());
        });
    }
    return (
        (n.prototype = {
            volume: function (e) {
                return (
                    (!this._volume || e) &&
                        (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)),
                    this._volume
                );
            },
            count: function (t) {
                var r = this.histo;
                if (!this._count_set || t) {
                    var n,
                        i,
                        o,
                        a = 0;
                    for (n = this.r1; n <= this.r2; n++)
                        for (i = this.g1; i <= this.g2; i++)
                            for (o = this.b1; o <= this.b2; o++) a += r[e(n, i, o)] || 0;
                    (this._count = a), (this._count_set = !0);
                }
                return this._count;
            },
            copy: function () {
                return new n(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
            },
            avg: function (t) {
                var r = this.histo;
                if (!this._avg || t) {
                    var n,
                        i,
                        o,
                        a,
                        s = 0,
                        l = 0,
                        u = 0,
                        c = 0;
                    for (i = this.r1; i <= this.r2; i++)
                        for (o = this.g1; o <= this.g2; o++)
                            for (a = this.b1; a <= this.b2; a++)
                                (s += n = r[e(i, o, a)] || 0),
                                    (l += n * (i + 0.5) * 8),
                                    (u += n * (o + 0.5) * 8),
                                    (c += n * (a + 0.5) * 8);
                    s
                        ? (this._avg = [~~(l / s), ~~(u / s), ~~(c / s)])
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
                for (var t = this.vboxes, r = 0; r < t.size(); r++)
                    if (t.peek(r).vbox.contains(e)) return t.peek(r).color;
                return this.nearest(e);
            },
            nearest: function (e) {
                for (var t, r, n, i = this.vboxes, o = 0; o < i.size(); o++)
                    ((r = Math.sqrt(
                        Math.pow(e[0] - i.peek(o).color[0], 2) +
                            Math.pow(e[1] - i.peek(o).color[1], 2) +
                            Math.pow(e[2] - i.peek(o).color[2], 2),
                    )) < t ||
                        void 0 === t) &&
                        ((t = r), (n = i.peek(o).color));
                return n;
            },
            forcebw: function () {
                var e = this.vboxes;
                e.sort(function (e, r) {
                    return t.naturalOrder(t.sum(e.color), t.sum(r.color));
                });
                var r = e[0].color;
                r[0] < 5 && r[1] < 5 && r[2] < 5 && (e[0].color = [0, 0, 0]);
                var n = e.length - 1,
                    i = e[n].color;
                i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255]);
            },
        }),
        {
            quantize: function (o, a) {
                if (!o.length || a < 2 || a > 256) return !1;
                var s,
                    l,
                    u,
                    c,
                    f,
                    d,
                    p,
                    h,
                    m,
                    v,
                    y,
                    g,
                    b =
                        ((u = Array(32768)),
                        o.forEach(function (t) {
                            (l = t[0] >> 3), (u[(s = e(l, t[1] >> 3, t[2] >> 3))] = (u[s] || 0) + 1);
                        }),
                        u),
                    w = 0;
                b.forEach(function () {
                    w++;
                });
                var _ =
                        ((p = 1e6),
                        (h = 0),
                        (m = 1e6),
                        (v = 0),
                        (y = 1e6),
                        (g = 0),
                        o.forEach(function (e) {
                            (c = e[0] >> 3),
                                (f = e[1] >> 3),
                                (d = e[2] >> 3),
                                c < p ? (p = c) : c > h && (h = c),
                                f < m ? (m = f) : f > v && (v = f),
                                d < y ? (y = d) : d > g && (g = d);
                        }),
                        new n(p, h, m, v, y, g, b)),
                    S = new r(function (e, r) {
                        return t.naturalOrder(e.count(), r.count());
                    });
                function x(r, n) {
                    for (var i, o = 1, a = 0; a < 1e3; ) {
                        if (!(i = r.pop()).count()) {
                            r.push(i), a++;
                            continue;
                        }
                        var s = (function (r, n) {
                                if (n.count()) {
                                    var i = n.r2 - n.r1 + 1,
                                        o = n.g2 - n.g1 + 1,
                                        a = n.b2 - n.b1 + 1,
                                        s = t.max([i, o, a]);
                                    if (1 == n.count()) return [n.copy()];
                                    var l,
                                        u,
                                        c,
                                        f,
                                        d = 0,
                                        p = [],
                                        h = [];
                                    if (s == i)
                                        for (l = n.r1; l <= n.r2; l++) {
                                            for (f = 0, u = n.g1; u <= n.g2; u++)
                                                for (c = n.b1; c <= n.b2; c++) f += r[e(l, u, c)] || 0;
                                            (d += f), (p[l] = d);
                                        }
                                    else if (s == o)
                                        for (l = n.g1; l <= n.g2; l++) {
                                            for (f = 0, u = n.r1; u <= n.r2; u++)
                                                for (c = n.b1; c <= n.b2; c++) f += r[e(u, l, c)] || 0;
                                            (d += f), (p[l] = d);
                                        }
                                    else
                                        for (l = n.b1; l <= n.b2; l++) {
                                            for (f = 0, u = n.r1; u <= n.r2; u++)
                                                for (c = n.g1; c <= n.g2; c++) f += r[e(u, c, l)] || 0;
                                            (d += f), (p[l] = d);
                                        }
                                    return (
                                        p.forEach(function (e, t) {
                                            h[t] = d - e;
                                        }),
                                        (function (e) {
                                            var t,
                                                r,
                                                i,
                                                o,
                                                a,
                                                s = e + "1",
                                                u = e + "2",
                                                c = 0;
                                            for (l = n[s]; l <= n[u]; l++)
                                                if (p[l] > d / 2) {
                                                    for (
                                                        i = n.copy(),
                                                            o = n.copy(),
                                                            a =
                                                                (t = l - n[s]) <= (r = n[u] - l)
                                                                    ? Math.min(n[u] - 1, ~~(l + r / 2))
                                                                    : Math.max(n[s], ~~(l - 1 - t / 2));
                                                        !p[a];
                                                    )
                                                        a++;
                                                    for (c = h[a]; !c && p[a - 1]; ) c = h[--a];
                                                    return (i[u] = a), (o[s] = i[u] + 1), [i, o];
                                                }
                                        })(s == i ? "r" : s == o ? "g" : "b")
                                    );
                                }
                            })(b, i),
                            l = s[0],
                            u = s[1];
                        if (!l || (r.push(l), u && (r.push(u), o++), o >= n || a++ > 1e3)) return;
                    }
                }
                S.push(_), x(S, 0.75 * a);
                for (
                    var E = new r(function (e, r) {
                        return t.naturalOrder(e.count() * e.volume(), r.count() * r.volume());
                    });
                    S.size();
                )
                    E.push(S.pop());
                x(E, a - E.size());
                for (var k = new i(); E.size(); ) k.push(E.pop());
                return k;
            },
        }
    );
})().quantize;
