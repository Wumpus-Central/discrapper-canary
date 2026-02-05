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
    var e = 5,
        n = 3,
        r = 1e3,
        i = 0.75;
    function a(t, n, r) {
        return (t << (2 * e)) + (n << e) + r;
    }
    function s(e) {
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
    function o(e, t, n, r, i, a, s) {
        var o = this;
        (o.r1 = e), (o.r2 = t), (o.g1 = n), (o.g2 = r), (o.b1 = i), (o.b2 = a), (o.histo = s);
    }
    function l() {
        this.vboxes = new s(function (e, n) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    function u(t) {
        var r,
            i,
            s = Array(1 << (3 * e));
        return (
            t.forEach(function (e) {
                (i = e[0] >> n), (s[(r = a(i, e[1] >> n, e[2] >> n))] = (s[r] || 0) + 1);
            }),
            s
        );
    }
    function c(e, t) {
        var r,
            i,
            a,
            s = 1e6,
            l = 0,
            u = 1e6,
            c = 0,
            d = 1e6,
            _ = 0;
        return (
            e.forEach(function (e) {
                (r = e[0] >> n),
                    (i = e[1] >> n),
                    (a = e[2] >> n),
                    r < s ? (s = r) : r > l && (l = r),
                    i < u ? (u = i) : i > c && (c = i),
                    a < d ? (d = a) : a > _ && (_ = a);
            }),
            new o(s, l, u, c, d, _, t)
        );
    }
    function d(e, n) {
        if (n.count()) {
            var r = n.r2 - n.r1 + 1,
                i = n.g2 - n.g1 + 1,
                s = n.b2 - n.b1 + 1,
                o = t.max([r, i, s]);
            if (1 == n.count()) return [n.copy()];
            var l,
                u,
                c,
                d,
                _,
                f = 0,
                p = [],
                h = [];
            if (o == r)
                for (l = n.r1; l <= n.r2; l++) {
                    for (d = 0, u = n.g1; u <= n.g2; u++) for (c = n.b1; c <= n.b2; c++) d += e[(_ = a(l, u, c))] || 0;
                    (f += d), (p[l] = f);
                }
            else if (o == i)
                for (l = n.g1; l <= n.g2; l++) {
                    for (d = 0, u = n.r1; u <= n.r2; u++) for (c = n.b1; c <= n.b2; c++) d += e[(_ = a(u, l, c))] || 0;
                    (f += d), (p[l] = f);
                }
            else
                for (l = n.b1; l <= n.b2; l++) {
                    for (d = 0, u = n.r1; u <= n.r2; u++) for (c = n.g1; c <= n.g2; c++) d += e[(_ = a(u, c, l))] || 0;
                    (f += d), (p[l] = f);
                }
            return (
                p.forEach(function (e, t) {
                    h[t] = f - e;
                }),
                m(o == r ? "r" : o == i ? "g" : "b")
            );
        }
        function m(e) {
            var t,
                r,
                i,
                a,
                s,
                o = e + "1",
                u = e + "2",
                c = 0;
            for (l = n[o]; l <= n[u]; l++)
                if (p[l] > f / 2) {
                    for (
                        i = n.copy(),
                            a = n.copy(),
                            s =
                                (t = l - n[o]) <= (r = n[u] - l)
                                    ? Math.min(n[u] - 1, ~~(l + r / 2))
                                    : Math.max(n[o], ~~(l - 1 - t / 2));
                        !p[s];
                    )
                        s++;
                    for (c = h[s]; !c && p[s - 1]; ) c = h[--s];
                    return (i[u] = s), (a[o] = i[u] + 1), [i, a];
                }
        }
    }
    return (
        (o.prototype = {
            volume: function (e) {
                var t = this;
                return (
                    (!t._volume || e) && (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1)),
                    t._volume
                );
            },
            count: function (e) {
                var t = this,
                    n = t.histo;
                if (!t._count_set || e) {
                    var r,
                        i,
                        s,
                        o = 0;
                    for (r = t.r1; r <= t.r2; r++)
                        for (i = t.g1; i <= t.g2; i++) for (s = t.b1; s <= t.b2; s++) o += n[a(r, i, s)] || 0;
                    (t._count = o), (t._count_set = !0);
                }
                return t._count;
            },
            copy: function () {
                var e = this;
                return new o(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo);
            },
            avg: function (t) {
                var n = this,
                    r = n.histo;
                if (!n._avg || t) {
                    var i,
                        s,
                        o,
                        l,
                        u = 0,
                        c = 1 << (8 - e),
                        d = 0,
                        _ = 0,
                        f = 0;
                    for (s = n.r1; s <= n.r2; s++)
                        for (o = n.g1; o <= n.g2; o++)
                            for (l = n.b1; l <= n.b2; l++)
                                (u += i = r[a(s, o, l)] || 0),
                                    (d += i * (s + 0.5) * c),
                                    (_ += i * (o + 0.5) * c),
                                    (f += i * (l + 0.5) * c);
                    u
                        ? (n._avg = [~~(d / u), ~~(_ / u), ~~(f / u)])
                        : (n._avg = [
                              ~~((c * (n.r1 + n.r2 + 1)) / 2),
                              ~~((c * (n.g1 + n.g2 + 1)) / 2),
                              ~~((c * (n.b1 + n.b2 + 1)) / 2),
                          ]);
                }
                return n._avg;
            },
            contains: function (e) {
                var t = this,
                    r = e[0] >> n;
                return (
                    (gval = e[1] >> n),
                    (bval = e[2] >> n),
                    r >= t.r1 && r <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                );
            },
        }),
        (l.prototype = {
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
                for (var t, n, r, i = this.vboxes, a = 0; a < i.size(); a++)
                    ((n = Math.sqrt(
                        Math.pow(e[0] - i.peek(a).color[0], 2) +
                            Math.pow(e[1] - i.peek(a).color[1], 2) +
                            Math.pow(e[2] - i.peek(a).color[2], 2),
                    )) < t ||
                        void 0 === t) &&
                        ((t = n), (r = i.peek(a).color));
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
            quantize: function (e, n) {
                if (!e.length || n < 2 || n > 256) return !1;
                var a = u(e),
                    o = 0;
                a.forEach(function () {
                    o++;
                });
                var _ = c(e, a),
                    f = new s(function (e, n) {
                        return t.naturalOrder(e.count(), n.count());
                    });
                function p(e, t) {
                    for (var n, i = 1, s = 0; s < r; ) {
                        if (!(n = e.pop()).count()) {
                            e.push(n), s++;
                            continue;
                        }
                        var o = d(a, n),
                            l = o[0],
                            u = o[1];
                        if (!l || (e.push(l), u && (e.push(u), i++), i >= t || s++ > r)) return;
                    }
                }
                f.push(_), p(f, i * n);
                for (
                    var h = new s(function (e, n) {
                        return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume());
                    });
                    f.size();
                )
                    h.push(f.pop());
                p(h, n - h.size());
                for (var m = new l(); h.size(); ) m.push(h.pop());
                return m;
            },
        }
    );
})().quantize;
