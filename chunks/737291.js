!(function (t) {
    "use strict";
    var n,
        r = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        i = !0,
        s = "[DecimalError] ",
        a = s + "Invalid argument: ",
        o = s + "Exponent out of range: ",
        l = Math.floor,
        u = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        c = l(1286742750677284.5),
        _ = {};
    function f(e, t) {
        var n,
            r,
            s,
            a,
            o,
            l,
            u,
            d,
            c = e.constructor,
            _ = c.precision;
        if (!e.s || !t.s) return t.s || (t = new c(e)), i ? y(t, _) : t;
        if (((u = e.d), (d = t.d), (o = e.e), (s = t.e), (u = u.slice()), (a = o - s))) {
            for (
                a < 0 ? ((r = u), (a = -a), (l = d.length)) : ((r = d), (s = o), (l = u.length)),
                    a > (l = (o = Math.ceil(_ / 7)) > l ? o + 1 : l + 1) && ((a = l), (r.length = 1)),
                    r.reverse();
                a--;
            )
                r.push(0);
            r.reverse();
        }
        for ((l = u.length) - (a = d.length) < 0 && ((a = l), (r = d), (d = u), (u = r)), n = 0; a; )
            (n = ((u[--a] = u[a] + d[a] + n) / 1e7) | 0), (u[a] %= 1e7);
        for (n && (u.unshift(n), ++s), l = u.length; 0 == u[--l]; ) u.pop();
        return (t.d = u), (t.e = s), i ? y(t, _) : t;
    }
    function E(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(a + e);
    }
    function h(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            s = "",
            a = e[0];
        if (i > 0) {
            for (s += a, t = 1; t < i; t++) (n = 7 - (r = e[t] + "").length) && (s += I(n)), (s += r);
            (n = 7 - (r = (a = e[t]) + "").length) && (s += I(n));
        } else if (0 === a) return "0";
        for (; a % 10 == 0; ) a /= 10;
        return s + a;
    }
    (_.absoluteValue = _.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (_.comparedTo = _.cmp =
            function (e) {
                var t, n, r, i;
                if (((e = new this.constructor(e)), this.s !== e.s)) return this.s || -e.s;
                if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
                for (t = 0, n = (r = this.d.length) < (i = e.d.length) ? r : i; t < n; ++t)
                    if (this.d[t] !== e.d[t]) return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
                return r === i ? 0 : (r > i) ^ (this.s < 0) ? 1 : -1;
            }),
        (_.decimalPlaces = _.dp =
            function () {
                var e = this.d.length - 1,
                    t = (e - this.e) * 7;
                if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
                return t < 0 ? 0 : t;
            }),
        (_.dividedBy = _.div =
            function (e) {
                return p(this, new this.constructor(e));
            }),
        (_.dividedToIntegerBy = _.idiv =
            function (e) {
                var t = this.constructor;
                return y(p(this, new t(e), 0, 1), t.precision);
            }),
        (_.equals = _.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (_.exponent = function () {
            return g(this);
        }),
        (_.greaterThan = _.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (_.greaterThanOrEqualTo = _.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (_.isInteger = _.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (_.isNegative = _.isneg =
            function () {
                return this.s < 0;
            }),
        (_.isPositive = _.ispos =
            function () {
                return this.s > 0;
            }),
        (_.isZero = function () {
            return 0 === this.s;
        }),
        (_.lessThan = _.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (_.lessThanOrEqualTo = _.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (_.logarithm = _.log =
            function (e) {
                var t,
                    r = this.constructor,
                    a = r.precision,
                    o = a + 5;
                if (void 0 === e) e = new r(10);
                else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(s + "NaN");
                if (this.s < 1) throw Error(s + (this.s ? "NaN" : "-Infinity"));
                return this.eq(n) ? new r(0) : ((i = !1), (t = p(T(this, o), T(e, o), o)), (i = !0), y(t, a));
            }),
        (_.minus = _.sub =
            function (e) {
                return (e = new this.constructor(e)), this.s == e.s ? N(this, e) : f(this, ((e.s = -e.s), e));
            }),
        (_.modulo = _.mod =
            function (e) {
                var t,
                    n = this.constructor,
                    r = n.precision;
                if (!(e = new n(e)).s) throw Error(s + "NaN");
                return this.s
                    ? ((i = !1), (t = p(this, e, 0, 1).times(e)), (i = !0), this.minus(t))
                    : y(new n(this), r);
            }),
        (_.naturalExponential = _.exp =
            function () {
                return m(this);
            }),
        (_.naturalLogarithm = _.ln =
            function () {
                return T(this);
            }),
        (_.negated = _.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (_.plus = _.add =
            function (e) {
                return (e = new this.constructor(e)), this.s == e.s ? f(this, e) : N(this, ((e.s = -e.s), e));
            }),
        (_.precision = _.sd =
            function (e) {
                var t, n, r;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(a + e);
                if (((t = g(this) + 1), (n = 7 * (r = this.d.length - 1) + 1), (r = this.d[r]))) {
                    for (; r % 10 == 0; r /= 10) n--;
                    for (r = this.d[0]; r >= 10; r /= 10) n++;
                }
                return e && t > n ? t : n;
            }),
        (_.squareRoot = _.sqrt =
            function () {
                var e,
                    t,
                    n,
                    r,
                    a,
                    o,
                    u,
                    d = this.constructor;
                if (this.s < 1) {
                    if (!this.s) return new d(0);
                    throw Error(s + "NaN");
                }
                for (
                    e = g(this),
                        i = !1,
                        0 == (a = Math.sqrt(+this)) || a == 1 / 0
                            ? (((t = h(this.d)).length + e) % 2 == 0 && (t += "0"),
                              (a = Math.sqrt(t)),
                              (e = l((e + 1) / 2) - (e < 0 || e % 2)),
                              (r = new d(
                                  (t =
                                      a == 1 / 0 ? "1e" + e : (t = a.toExponential()).slice(0, t.indexOf("e") + 1) + e),
                              )))
                            : (r = new d(a.toString())),
                        a = u = (n = d.precision) + 3;
                    ;
                )
                    if (
                        ((r = (o = r).plus(p(this, o, u + 2)).times(0.5)),
                        h(o.d).slice(0, u) === (t = h(r.d)).slice(0, u))
                    ) {
                        if (((t = t.slice(u - 3, u + 1)), a == u && "4999" == t)) {
                            if ((y(o, n + 1, 0), o.times(o).eq(this))) {
                                r = o;
                                break;
                            }
                        } else if ("9999" != t) break;
                        u += 4;
                    }
                return (i = !0), y(r, n);
            }),
        (_.times = _.mul =
            function (e) {
                var t,
                    n,
                    r,
                    s,
                    a,
                    o,
                    l,
                    u,
                    d,
                    c = this.constructor,
                    _ = this.d,
                    f = (e = new c(e)).d;
                if (!this.s || !e.s) return new c(0);
                for (
                    e.s *= this.s,
                        n = this.e + e.e,
                        (u = _.length) < (d = f.length) && ((a = _), (_ = f), (f = a), (o = u), (u = d), (d = o)),
                        a = [],
                        r = o = u + d;
                    r--;
                )
                    a.push(0);
                for (r = d; --r >= 0; ) {
                    for (t = 0, s = u + r; s > r; )
                        (l = a[s] + f[r] * _[s - r - 1] + t), (a[s--] = (l % 1e7) | 0), (t = (l / 1e7) | 0);
                    a[s] = ((a[s] + t) % 1e7) | 0;
                }
                for (; !a[--o]; ) a.pop();
                return t ? ++n : a.shift(), (e.d = a), (e.e = n), i ? y(e, c.precision) : e;
            }),
        (_.toDecimalPlaces = _.todp =
            function (e, t) {
                var n = this,
                    r = n.constructor;
                return ((n = new r(n)), void 0 === e)
                    ? n
                    : (E(e, 0, 1e9), void 0 === t ? (t = r.rounding) : E(t, 0, 8), y(n, e + g(n) + 1, t));
            }),
        (_.toExponential = function (e, t) {
            var n,
                r = this,
                i = r.constructor;
            return (
                void 0 === e
                    ? (n = O(r, !0))
                    : (E(e, 0, 1e9),
                      void 0 === t ? (t = i.rounding) : E(t, 0, 8),
                      (n = O((r = y(new i(r), e + 1, t)), !0, e + 1))),
                n
            );
        }),
        (_.toFixed = function (e, t) {
            var n,
                r,
                i = this.constructor;
            return void 0 === e
                ? O(this)
                : (E(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : E(t, 0, 8),
                  (n = O((r = y(new i(this), e + g(this) + 1, t)).abs(), !1, e + g(r) + 1)),
                  this.isneg() && !this.isZero() ? "-" + n : n);
        }),
        (_.toInteger = _.toint =
            function () {
                var e = this.constructor;
                return y(new e(this), g(this) + 1, e.rounding);
            }),
        (_.toNumber = function () {
            return +this;
        }),
        (_.toPower = _.pow =
            function (e) {
                var t,
                    r,
                    a,
                    o,
                    u,
                    d,
                    c = this,
                    _ = c.constructor,
                    f = +(e = new _(e));
                if (!e.s) return new _(n);
                if (!(c = new _(c)).s) {
                    if (e.s < 1) throw Error(s + "Infinity");
                    return c;
                }
                if (c.eq(n)) return c;
                if (((a = _.precision), e.eq(n))) return y(c, a);
                if (((d = (t = e.e) >= (r = e.d.length - 1)), (u = c.s), d)) {
                    if ((r = f < 0 ? -f : f) <= 0x1fffffffffffff) {
                        for (
                            o = new _(n), t = Math.ceil(a / 7 + 4), i = !1;
                            r % 2 && R((o = o.times(c)).d, t), 0 !== (r = l(r / 2));
                        )
                            R((c = c.times(c)).d, t);
                        return (i = !0), e.s < 0 ? new _(n).div(o) : y(o, a);
                    }
                } else if (u < 0) throw Error(s + "NaN");
                return (
                    (u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
                    (c.s = 1),
                    (i = !1),
                    (o = e.times(T(c, a + 12))),
                    (i = !0),
                    ((o = m(o)).s = u),
                    o
                );
            }),
        (_.toPrecision = function (e, t) {
            var n,
                r,
                i = this,
                s = i.constructor;
            return (
                void 0 === e
                    ? ((n = g(i)), (r = O(i, n <= s.toExpNeg || n >= s.toExpPos)))
                    : (E(e, 1, 1e9),
                      void 0 === t ? (t = s.rounding) : E(t, 0, 8),
                      (n = g((i = y(new s(i), e, t)))),
                      (r = O(i, e <= n || n <= s.toExpNeg, e))),
                r
            );
        }),
        (_.toSignificantDigits = _.tosd =
            function (e, t) {
                var n = this.constructor;
                return (
                    void 0 === e
                        ? ((e = n.precision), (t = n.rounding))
                        : (E(e, 1, 1e9), void 0 === t ? (t = n.rounding) : E(t, 0, 8)),
                    y(new n(this), e, t)
                );
            }),
        (_.toString =
            _.valueOf =
            _.val =
            _.toJSON =
                function () {
                    var e = g(this),
                        t = this.constructor;
                    return O(this, e <= t.toExpNeg || e >= t.toExpPos);
                });
    var p = (function () {
        function e(e, t) {
            var n,
                r = 0,
                i = e.length;
            for (e = e.slice(); i--; ) (n = e[i] * t + r), (e[i] = (n % 1e7) | 0), (r = (n / 1e7) | 0);
            return r && e.unshift(r), e;
        }
        function t(e, t, n, r) {
            var i, s;
            if (n != r) s = n > r ? 1 : -1;
            else
                for (i = s = 0; i < n; i++)
                    if (e[i] != t[i]) {
                        s = e[i] > t[i] ? 1 : -1;
                        break;
                    }
            return s;
        }
        function n(e, t, n) {
            for (var r = 0; n--; ) (e[n] -= r), (r = +(e[n] < t[n])), (e[n] = 1e7 * r + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, a, o) {
            var l,
                u,
                d,
                c,
                _,
                f,
                E,
                h,
                p,
                m,
                A,
                I,
                T,
                S,
                N,
                O,
                R,
                v,
                C = r.constructor,
                b = r.s == i.s ? 1 : -1,
                D = r.d,
                L = i.d;
            if (!r.s) return new C(r);
            if (!i.s) throw Error(s + "Division by zero");
            for (d = 0, u = r.e - i.e, R = L.length, N = D.length, h = (E = new C(b)).d = []; L[d] == (D[d] || 0); )
                ++d;
            if ((L[d] > (D[d] || 0) && --u, (I = null == a ? (a = C.precision) : o ? a + (g(r) - g(i)) + 1 : a) < 0))
                return new C(0);
            if (((I = (I / 7 + 2) | 0), (d = 0), 1 == R))
                for (c = 0, L = L[0], I++; (d < N || c) && I--; d++)
                    (T = 1e7 * c + (D[d] || 0)), (h[d] = (T / L) | 0), (c = (T % L) | 0);
            else {
                for (
                    (c = (1e7 / (L[0] + 1)) | 0) > 1 && ((L = e(L, c)), (D = e(D, c)), (R = L.length), (N = D.length)),
                        S = R,
                        m = (p = D.slice(0, R)).length;
                    m < R;
                )
                    p[m++] = 0;
                (v = L.slice()).unshift(0), (O = L[0]), L[1] >= 1e7 / 2 && ++O;
                do
                    (c = 0),
                        (l = t(L, p, R, m)) < 0
                            ? ((A = p[0]),
                              R != m && (A = 1e7 * A + (p[1] || 0)),
                              (c = (A / O) | 0) > 1
                                  ? (c >= 1e7 && (c = 1e7 - 1),
                                    (f = (_ = e(L, c)).length),
                                    (m = p.length),
                                    1 == (l = t(_, p, f, m)) && (c--, n(_, R < f ? v : L, f)))
                                  : (0 == c && (l = c = 1), (_ = L.slice())),
                              (f = _.length) < m && _.unshift(0),
                              n(p, _, m),
                              -1 == l && ((m = p.length), (l = t(L, p, R, m)) < 1 && (c++, n(p, R < m ? v : L, m))),
                              (m = p.length))
                            : 0 === l && (c++, (p = [0])),
                        (h[d++] = c),
                        l && p[0] ? (p[m++] = D[S] || 0) : ((p = [D[S]]), (m = 1));
                while ((S++ < N || void 0 !== p[0]) && I--);
            }
            return h[0] || h.shift(), (E.e = u), y(E, o ? a + g(E) + 1 : a);
        };
    })();
    function m(e, t) {
        var r,
            s,
            a,
            l,
            d,
            c = 0,
            _ = 0,
            f = e.constructor,
            E = f.precision;
        if (g(e) > 16) throw Error(o + g(e));
        if (!e.s) return new f(n);
        for (null == t ? ((i = !1), (d = E)) : (d = t), l = new f(0.03125); e.abs().gte(0.1); )
            (e = e.times(l)), (_ += 5);
        for (d += ((Math.log(u(2, _)) / Math.LN10) * 2 + 5) | 0, r = s = a = new f(n), f.precision = d; ; ) {
            if (
                ((s = y(s.times(e), d)),
                (r = r.times(++c)),
                h((l = a.plus(p(s, r, d))).d).slice(0, d) === h(a.d).slice(0, d))
            ) {
                for (; _--; ) a = y(a.times(a), d);
                return (f.precision = E), null == t ? ((i = !0), y(a, E)) : a;
            }
            a = l;
        }
    }
    function g(e) {
        for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function A(e, t, n) {
        if (t > e.LN10.sd()) throw ((i = !0), n && (e.precision = n), Error(s + "LN10 precision limit exceeded"));
        return y(new e(e.LN10), t);
    }
    function I(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
    }
    function T(e, t) {
        var r,
            a,
            o,
            l,
            u,
            d,
            c,
            _,
            f,
            E = 1,
            m = e,
            I = m.d,
            S = m.constructor,
            N = S.precision;
        if (m.s < 1) throw Error(s + (m.s ? "NaN" : "-Infinity"));
        if (m.eq(n)) return new S(0);
        if ((null == t ? ((i = !1), (_ = N)) : (_ = t), m.eq(10))) return null == t && (i = !0), A(S, _);
        if (((S.precision = _ += 10), (a = (r = h(I)).charAt(0)), !(15e14 > Math.abs((l = g(m))))))
            return (
                (c = A(S, _ + 2, N).times(l + "")),
                (m = T(new S(a + "." + r.slice(1)), _ - 10).plus(c)),
                (S.precision = N),
                null == t ? ((i = !0), y(m, N)) : m
            );
        for (; (a < 7 && 1 != a) || (1 == a && r.charAt(1) > 3); ) (a = (r = h((m = m.times(e)).d)).charAt(0)), E++;
        for (
            l = g(m),
                a > 1 ? ((m = new S("0." + r)), l++) : (m = new S(a + "." + r.slice(1))),
                d = u = m = p(m.minus(n), m.plus(n), _),
                f = y(m.times(m), _),
                o = 3;
            ;
        ) {
            if (((u = y(u.times(f), _)), h((c = d.plus(p(u, new S(o), _))).d).slice(0, _) === h(d.d).slice(0, _)))
                return (
                    (d = d.times(2)),
                    0 !== l && (d = d.plus(A(S, _ + 2, N).times(l + ""))),
                    (d = p(d, new S(E), _)),
                    (S.precision = N),
                    null == t ? ((i = !0), y(d, N)) : d
                );
            (d = c), (o += 2);
        }
    }
    function S(e, t) {
        var n, r, s;
        for (
            (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
                (r = t.search(/e/i)) > 0
                    ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
                    : n < 0 && (n = t.length),
                r = 0;
            48 === t.charCodeAt(r);
        )
            ++r;
        for (s = t.length; 48 === t.charCodeAt(s - 1); ) --s;
        if ((t = t.slice(r, s))) {
            if (((s -= r), (e.e = l((n = n - r - 1) / 7)), (e.d = []), (r = (n + 1) % 7), n < 0 && (r += 7), r < s)) {
                for (r && e.d.push(+t.slice(0, r)), s -= 7; r < s; ) e.d.push(+t.slice(r, (r += 7)));
                r = 7 - (t = t.slice(r)).length;
            } else r -= s;
            for (; r--; ) t += "0";
            if ((e.d.push(+t), i && (e.e > c || e.e < -c))) throw Error(o + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function y(e, t, n) {
        var r,
            s,
            a,
            d,
            _,
            f,
            E,
            h,
            p = e.d;
        for (d = 1, a = p[0]; a >= 10; a /= 10) d++;
        if ((r = t - d) < 0) (r += 7), (s = t), (E = p[(h = 0)]);
        else {
            if ((h = Math.ceil((r + 1) / 7)) >= (a = p.length)) return e;
            for (d = 1, E = a = p[h]; a >= 10; a /= 10) d++;
            (r %= 7), (s = r - 7 + d);
        }
        if (
            (void 0 !== n &&
                ((_ = ((E / (a = u(10, d - s - 1))) % 10) | 0),
                (f = t < 0 || void 0 !== p[h + 1] || E % a),
                (f =
                    n < 4
                        ? (_ || f) && (0 == n || n == (e.s < 0 ? 3 : 2))
                        : _ > 5 ||
                          (5 == _ &&
                              (4 == n ||
                                  f ||
                                  (6 == n && ((r > 0 ? (s > 0 ? E / u(10, d - s) : 0) : p[h - 1]) % 10) & 1) ||
                                  n == (e.s < 0 ? 8 : 7))))),
            t < 1 || !p[0])
        )
            return (
                f
                    ? ((a = g(e)),
                      (p.length = 1),
                      (t = t - a - 1),
                      (p[0] = u(10, (7 - (t % 7)) % 7)),
                      (e.e = l(-t / 7) || 0))
                    : ((p.length = 1), (p[0] = e.e = e.s = 0)),
                e
            );
        if (
            (0 == r
                ? ((p.length = h), (a = 1), h--)
                : ((p.length = h + 1),
                  (a = u(10, 7 - r)),
                  (p[h] = s > 0 ? (((E / u(10, d - s)) % u(10, s)) | 0) * a : 0)),
            f)
        )
            for (;;)
                if (0 == h) {
                    1e7 == (p[0] += a) && ((p[0] = 1), ++e.e);
                    break;
                } else {
                    if (((p[h] += a), 1e7 != p[h])) break;
                    (p[h--] = 0), (a = 1);
                }
        for (r = p.length; 0 === p[--r]; ) p.pop();
        if (i && (e.e > c || e.e < -c)) throw Error(o + g(e));
        return e;
    }
    function N(e, t) {
        var n,
            r,
            s,
            a,
            o,
            l,
            u,
            d,
            c,
            _,
            f = e.constructor,
            E = f.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new f(e)), i ? y(t, E) : t;
        if (((u = e.d), (_ = t.d), (r = t.e), (d = e.e), (u = u.slice()), (o = d - r))) {
            for (
                (c = o < 0) ? ((n = u), (o = -o), (l = _.length)) : ((n = _), (r = d), (l = u.length)),
                    o > (s = Math.max(Math.ceil(E / 7), l) + 2) && ((o = s), (n.length = 1)),
                    n.reverse(),
                    s = o;
                s--;
            )
                n.push(0);
            n.reverse();
        } else {
            for ((c = (s = u.length) < (l = _.length)) && (l = s), s = 0; s < l; s++)
                if (u[s] != _[s]) {
                    c = u[s] < _[s];
                    break;
                }
            o = 0;
        }
        for (c && ((n = u), (u = _), (_ = n), (t.s = -t.s)), l = u.length, s = _.length - l; s > 0; --s) u[l++] = 0;
        for (s = _.length; s > o; ) {
            if (u[--s] < _[s]) {
                for (a = s; a && 0 === u[--a]; ) u[a] = 1e7 - 1;
                --u[a], (u[s] += 1e7);
            }
            u[s] -= _[s];
        }
        for (; 0 === u[--l]; ) u.pop();
        for (; 0 === u[0]; u.shift()) --r;
        return u[0] ? ((t.d = u), (t.e = r), i ? y(t, E) : t) : new f(0);
    }
    function O(e, t, n) {
        var r,
            i = g(e),
            s = h(e.d),
            a = s.length;
        return (
            t
                ? (n && (r = n - a) > 0
                      ? (s = s.charAt(0) + "." + s.slice(1) + I(r))
                      : a > 1 && (s = s.charAt(0) + "." + s.slice(1)),
                  (s = s + (i < 0 ? "e" : "e+") + i))
                : i < 0
                  ? ((s = "0." + I(-i - 1) + s), n && (r = n - a) > 0 && (s += I(r)))
                  : i >= a
                    ? ((s += I(i + 1 - a)), n && (r = n - i - 1) > 0 && (s = s + "." + I(r)))
                    : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)),
                      n && (r = n - a) > 0 && (i + 1 === a && (s += "."), (s += I(r)))),
            e.s < 0 ? "-" + s : s
        );
    }
    function R(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function v(e) {
        if (!e || "object" != typeof e) throw Error(s + "Object expected");
        var t,
            n,
            r,
            i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (t = 0; t < i.length; t += 3)
            if (void 0 !== (r = e[(n = i[t])]))
                if (l(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
                else throw Error(a + n + ": " + r);
        if (void 0 !== (r = e[(n = "LN10")]))
            if (r == Math.LN10) this[n] = new this(r);
            else throw Error(a + n + ": " + r);
        return this;
    }
    ((r = (function e(t) {
        var n, r, i;
        function s(e) {
            if (!(this instanceof s)) return new s(e);
            if (((this.constructor = s), e instanceof s)) {
                (this.s = e.s), (this.e = e.e), (this.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ("number" == typeof e) {
                if (0 * e != 0) throw Error(a + e);
                if (e > 0) this.s = 1;
                else if (e < 0) (e = -e), (this.s = -1);
                else {
                    (this.s = 0), (this.e = 0), (this.d = [0]);
                    return;
                }
                if (e === ~~e && e < 1e7) {
                    (this.e = 0), (this.d = [e]);
                    return;
                }
                return S(this, e.toString());
            }
            if ("string" != typeof e) throw Error(a + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (this.s = -1)) : (this.s = 1), d.test(e))) S(this, e);
            else throw Error(a + e);
        }
        if (
            ((s.prototype = _),
            (s.ROUND_UP = 0),
            (s.ROUND_DOWN = 1),
            (s.ROUND_CEIL = 2),
            (s.ROUND_FLOOR = 3),
            (s.ROUND_HALF_UP = 4),
            (s.ROUND_HALF_DOWN = 5),
            (s.ROUND_HALF_EVEN = 6),
            (s.ROUND_HALF_CEIL = 7),
            (s.ROUND_HALF_FLOOR = 8),
            (s.clone = e),
            (s.config = s.set = v),
            void 0 === t && (t = {}),
            t)
        )
            for (n = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; n < i.length; )
                t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
        return s.config(t), s;
    })(r)).default = r.Decimal =
        r),
        (n = new r(1)),
        "function" == typeof define && define.amd
            ? define(function () {
                  return r;
              })
            : e.exports
              ? (e.exports = r)
              : (t || (t = "u" > typeof self && self && self.self == self ? self : Function("return this")()),
                (t.Decimal = r));
})(this);
