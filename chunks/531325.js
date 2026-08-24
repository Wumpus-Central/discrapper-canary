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
                    ? function (e, n, o) {
                          return (r.index = o), e + t.call(r, n);
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
    function n(e, t, r, n, o, i, a) {
        (this.r1 = e), (this.r2 = t), (this.g1 = r), (this.g2 = n), (this.b1 = o), (this.b2 = i), (this.histo = a);
    }
    function o() {
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
                        o,
                        i,
                        a = 0;
                    for (n = this.r1; n <= this.r2; n++)
                        for (o = this.g1; o <= this.g2; o++)
                            for (i = this.b1; i <= this.b2; i++) a += r[e(n, o, i)] || 0;
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
                        o,
                        i,
                        a,
                        s = 0,
                        l = 0,
                        u = 0,
                        c = 0;
                    for (o = this.r1; o <= this.r2; o++)
                        for (i = this.g1; i <= this.g2; i++)
                            for (a = this.b1; a <= this.b2; a++)
                                (s += n = r[e(o, i, a)] || 0),
                                    (l += n * (o + 0.5) * 8),
                                    (u += n * (i + 0.5) * 8),
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
        (o.prototype = {
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
                for (var t, r, n, o = this.vboxes, i = 0; i < o.size(); i++)
                    ((r = Math.sqrt(
                        Math.pow(e[0] - o.peek(i).color[0], 2) +
                            Math.pow(e[1] - o.peek(i).color[1], 2) +
                            Math.pow(e[2] - o.peek(i).color[2], 2),
                    )) < t ||
                        void 0 === t) &&
                        ((t = r), (n = o.peek(i).color));
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
                    o = e[n].color;
                o[0] > 251 && o[1] > 251 && o[2] > 251 && (e[n].color = [255, 255, 255]);
            },
        }),
        {
            quantize: function (i, a) {
                if (!i.length || a < 2 || a > 256) return !1;
                var s,
                    l,
                    u,
                    c,
                    f,
                    p,
                    d,
                    h,
                    m,
                    v,
                    y,
                    g,
                    b =
                        ((u = Array(32768)),
                        i.forEach(function (t) {
                            (l = t[0] >> 3), (u[(s = e(l, t[1] >> 3, t[2] >> 3))] = (u[s] || 0) + 1);
                        }),
                        u),
                    w = 0;
                b.forEach(function () {
                    w++;
                });
                var _ =
                        ((d = 1e6),
                        (h = 0),
                        (m = 1e6),
                        (v = 0),
                        (y = 1e6),
                        (g = 0),
                        i.forEach(function (e) {
                            (c = e[0] >> 3),
                                (f = e[1] >> 3),
                                (p = e[2] >> 3),
                                c < d ? (d = c) : c > h && (h = c),
                                f < m ? (m = f) : f > v && (v = f),
                                p < y ? (y = p) : p > g && (g = p);
                        }),
                        new n(d, h, m, v, y, g, b)),
                    S = new r(function (e, r) {
                        return t.naturalOrder(e.count(), r.count());
                    });
                function x(r, n) {
                    for (var o, i = 1, a = 0; a < 1e3; ) {
                        if (!(o = r.pop()).count()) {
                            r.push(o), a++;
                            continue;
                        }
                        var s = (function (r, n) {
                                if (n.count()) {
                                    var o = n.r2 - n.r1 + 1,
                                        i = n.g2 - n.g1 + 1,
                                        a = n.b2 - n.b1 + 1,
                                        s = t.max([o, i, a]);
                                    if (1 == n.count()) return [n.copy()];
                                    var l,
                                        u,
                                        c,
                                        f,
                                        p = 0,
                                        d = [],
                                        h = [];
                                    if (s == o)
                                        for (l = n.r1; l <= n.r2; l++) {
                                            for (f = 0, u = n.g1; u <= n.g2; u++)
                                                for (c = n.b1; c <= n.b2; c++) f += r[e(l, u, c)] || 0;
                                            (p += f), (d[l] = p);
                                        }
                                    else if (s == i)
                                        for (l = n.g1; l <= n.g2; l++) {
                                            for (f = 0, u = n.r1; u <= n.r2; u++)
                                                for (c = n.b1; c <= n.b2; c++) f += r[e(u, l, c)] || 0;
                                            (p += f), (d[l] = p);
                                        }
                                    else
                                        for (l = n.b1; l <= n.b2; l++) {
                                            for (f = 0, u = n.r1; u <= n.r2; u++)
                                                for (c = n.g1; c <= n.g2; c++) f += r[e(u, c, l)] || 0;
                                            (p += f), (d[l] = p);
                                        }
                                    return (
                                        d.forEach(function (e, t) {
                                            h[t] = p - e;
                                        }),
                                        (function (e) {
                                            var t,
                                                r,
                                                o,
                                                i,
                                                a,
                                                s = e + "1",
                                                u = e + "2",
                                                c = 0;
                                            for (l = n[s]; l <= n[u]; l++)
                                                if (d[l] > p / 2) {
                                                    for (
                                                        o = n.copy(),
                                                            i = n.copy(),
                                                            a =
                                                                (t = l - n[s]) <= (r = n[u] - l)
                                                                    ? Math.min(n[u] - 1, ~~(l + r / 2))
                                                                    : Math.max(n[s], ~~(l - 1 - t / 2));
                                                        !d[a];
                                                    )
                                                        a++;
                                                    for (c = h[a]; !c && d[a - 1]; ) c = h[--a];
                                                    return (o[u] = a), (i[s] = o[u] + 1), [o, i];
                                                }
                                        })(s == o ? "r" : s == i ? "g" : "b")
                                    );
                                }
                            })(b, o),
                            l = s[0],
                            u = s[1];
                        if (!l || (r.push(l), u && (r.push(u), i++), i >= n || a++ > 1e3)) return;
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
                for (var k = new o(); E.size(); ) k.push(E.pop());
                return k;
            },
        }
    );
})().quantize;
