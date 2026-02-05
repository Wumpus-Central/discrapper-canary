!(function (t) {
    "use strict";
    var n,
        r = 1e9,
        i = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        a = !0,
        s = "[DecimalError] ",
        o = s + "Invalid argument: ",
        l = s + "Exponent out of range: ",
        u = Math.floor,
        c = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        _ = 1e7,
        f = 7,
        p = 0x1fffffffffffff,
        h = u(1286742750677284.5),
        m = {};
    function g(e, t) {
        var n,
            r,
            i,
            s,
            o,
            l,
            u,
            c,
            d = e.constructor,
            p = d.precision;
        if (!e.s || !t.s) return t.s || (t = new d(e)), a ? N(t, p) : t;
        if (((u = e.d), (c = t.d), (o = e.e), (i = t.e), (u = u.slice()), (s = o - i))) {
            for (
                s < 0 ? ((r = u), (s = -s), (l = c.length)) : ((r = c), (i = o), (l = u.length)),
                    s > (l = (o = Math.ceil(p / f)) > l ? o + 1 : l + 1) && ((s = l), (r.length = 1)),
                    r.reverse();
                s--;
            )
                r.push(0);
            r.reverse();
        }
        for ((l = u.length) - (s = c.length) < 0 && ((s = l), (r = c), (c = u), (u = r)), n = 0; s; )
            (n = ((u[--s] = u[s] + c[s] + n) / _) | 0), (u[s] %= _);
        for (n && (u.unshift(n), ++i), l = u.length; 0 == u[--l]; ) u.pop();
        return (t.d = u), (t.e = i), a ? N(t, p) : t;
    }
    function E(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(o + e);
    }
    function A(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            a = "",
            s = e[0];
        if (i > 0) {
            for (a += s, t = 1; t < i; t++) (n = f - (r = e[t] + "").length) && (a += v(n)), (a += r);
            (n = f - (r = (s = e[t]) + "").length) && (a += v(n));
        } else if (0 === s) return "0";
        for (; s % 10 == 0; ) s /= 10;
        return a + s;
    }
    (m.absoluteValue = m.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (m.comparedTo = m.cmp =
            function (e) {
                var t,
                    n,
                    r,
                    i,
                    a = this;
                if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
                if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
                for (t = 0, n = (r = a.d.length) < (i = e.d.length) ? r : i; t < n; ++t)
                    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
                return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
            }),
        (m.decimalPlaces = m.dp =
            function () {
                var e = this,
                    t = e.d.length - 1,
                    n = (t - e.e) * f;
                if ((t = e.d[t])) for (; t % 10 == 0; t /= 10) n--;
                return n < 0 ? 0 : n;
            }),
        (m.dividedBy = m.div =
            function (e) {
                return I(this, new this.constructor(e));
            }),
        (m.dividedToIntegerBy = m.idiv =
            function (e) {
                var t = this,
                    n = t.constructor;
                return N(I(t, new n(e), 0, 1), n.precision);
            }),
        (m.equals = m.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (m.exponent = function () {
            return y(this);
        }),
        (m.greaterThan = m.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (m.greaterThanOrEqualTo = m.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (m.isInteger = m.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (m.isNegative = m.isneg =
            function () {
                return this.s < 0;
            }),
        (m.isPositive = m.ispos =
            function () {
                return this.s > 0;
            }),
        (m.isZero = function () {
            return 0 === this.s;
        }),
        (m.lessThan = m.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (m.lessThanOrEqualTo = m.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (m.logarithm = m.log =
            function (e) {
                var t,
                    r = this,
                    i = r.constructor,
                    o = i.precision,
                    l = o + 5;
                if (void 0 === e) e = new i(10);
                else if ((e = new i(e)).s < 1 || e.eq(n)) throw Error(s + "NaN");
                if (r.s < 1) throw Error(s + (r.s ? "NaN" : "-Infinity"));
                return r.eq(n) ? new i(0) : ((a = !1), (t = I(C(r, l), C(e, l), l)), (a = !0), N(t, o));
            }),
        (m.minus = m.sub =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? R(t, e) : g(t, ((e.s = -e.s), e));
            }),
        (m.modulo = m.mod =
            function (e) {
                var t,
                    n = this,
                    r = n.constructor,
                    i = r.precision;
                if (!(e = new r(e)).s) throw Error(s + "NaN");
                return n.s ? ((a = !1), (t = I(n, e, 0, 1).times(e)), (a = !0), n.minus(t)) : N(new r(n), i);
            }),
        (m.naturalExponential = m.exp =
            function () {
                return T(this);
            }),
        (m.naturalLogarithm = m.ln =
            function () {
                return C(this);
            }),
        (m.negated = m.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (m.plus = m.add =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? g(t, e) : R(t, ((e.s = -e.s), e));
            }),
        (m.precision = m.sd =
            function (e) {
                var t,
                    n,
                    r,
                    i = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(o + e);
                if (((t = y(i) + 1), (n = (r = i.d.length - 1) * f + 1), (r = i.d[r]))) {
                    for (; r % 10 == 0; r /= 10) n--;
                    for (r = i.d[0]; r >= 10; r /= 10) n++;
                }
                return e && t > n ? t : n;
            }),
        (m.squareRoot = m.sqrt =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    l,
                    c = this,
                    d = c.constructor;
                if (c.s < 1) {
                    if (!c.s) return new d(0);
                    throw Error(s + "NaN");
                }
                for (
                    e = y(c),
                        a = !1,
                        0 == (i = Math.sqrt(+c)) || i == 1 / 0
                            ? (((t = A(c.d)).length + e) % 2 == 0 && (t += "0"),
                              (i = Math.sqrt(t)),
                              (e = u((e + 1) / 2) - (e < 0 || e % 2)),
                              (r = new d(
                                  (t =
                                      i == 1 / 0 ? "1e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e),
                              )))
                            : (r = new d(i.toString())),
                        i = l = (n = d.precision) + 3;
                    ;
                )
                    if (
                        ((r = (o = r).plus(I(c, o, l + 2)).times(0.5)), A(o.d).slice(0, l) === (t = A(r.d)).slice(0, l))
                    ) {
                        if (((t = t.slice(l - 3, l + 1)), i == l && "4999" == t)) {
                            if ((N(o, n + 1, 0), o.times(o).eq(c))) {
                                r = o;
                                break;
                            }
                        } else if ("9999" != t) break;
                        l += 4;
                    }
                return (a = !0), N(r, n);
            }),
        (m.times = m.mul =
            function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = this,
                    f = d.constructor,
                    p = d.d,
                    h = (e = new f(e)).d;
                if (!d.s || !e.s) return new f(0);
                for (
                    e.s *= d.s,
                        n = d.e + e.e,
                        (u = p.length) < (c = h.length) && ((s = p), (p = h), (h = s), (o = u), (u = c), (c = o)),
                        s = [],
                        r = o = u + c;
                    r--;
                )
                    s.push(0);
                for (r = c; --r >= 0; ) {
                    for (t = 0, i = u + r; i > r; )
                        (l = s[i] + h[r] * p[i - r - 1] + t), (s[i--] = (l % _) | 0), (t = (l / _) | 0);
                    s[i] = ((s[i] + t) % _) | 0;
                }
                for (; !s[--o]; ) s.pop();
                return t ? ++n : s.shift(), (e.d = s), (e.e = n), a ? N(e, f.precision) : e;
            }),
        (m.toDecimalPlaces = m.todp =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return ((n = new i(n)), void 0 === e)
                    ? n
                    : (E(e, 0, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8), N(n, e + y(n) + 1, t));
            }),
        (m.toExponential = function (e, t) {
            var n,
                i = this,
                a = i.constructor;
            return (
                void 0 === e
                    ? (n = O(i, !0))
                    : (E(e, 0, r),
                      void 0 === t ? (t = a.rounding) : E(t, 0, 8),
                      (n = O((i = N(new a(i), e + 1, t)), !0, e + 1))),
                n
            );
        }),
        (m.toFixed = function (e, t) {
            var n,
                i,
                a = this,
                s = a.constructor;
            return void 0 === e
                ? O(a)
                : (E(e, 0, r),
                  void 0 === t ? (t = s.rounding) : E(t, 0, 8),
                  (n = O((i = N(new s(a), e + y(a) + 1, t)).abs(), !1, e + y(i) + 1)),
                  a.isneg() && !a.isZero() ? "-" + n : n);
        }),
        (m.toInteger = m.toint =
            function () {
                var e = this,
                    t = e.constructor;
                return N(new t(e), y(e) + 1, t.rounding);
            }),
        (m.toNumber = function () {
            return +this;
        }),
        (m.toPower = m.pow =
            function (e) {
                var t,
                    r,
                    i,
                    o,
                    l,
                    c,
                    d = this,
                    _ = d.constructor,
                    h = 12,
                    m = +(e = new _(e));
                if (!e.s) return new _(n);
                if (!(d = new _(d)).s) {
                    if (e.s < 1) throw Error(s + "Infinity");
                    return d;
                }
                if (d.eq(n)) return d;
                if (((i = _.precision), e.eq(n))) return N(d, i);
                if (((c = (t = e.e) >= (r = e.d.length - 1)), (l = d.s), c)) {
                    if ((r = m < 0 ? -m : m) <= p) {
                        for (
                            o = new _(n), t = Math.ceil(i / f + 4), a = !1;
                            r % 2 && D((o = o.times(d)).d, t), 0 !== (r = u(r / 2));
                        )
                            D((d = d.times(d)).d, t);
                        return (a = !0), e.s < 0 ? new _(n).div(o) : N(o, i);
                    }
                } else if (l < 0) throw Error(s + "NaN");
                return (
                    (l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
                    (d.s = 1),
                    (a = !1),
                    (o = e.times(C(d, i + h))),
                    (a = !0),
                    ((o = T(o)).s = l),
                    o
                );
            }),
        (m.toPrecision = function (e, t) {
            var n,
                i,
                a = this,
                s = a.constructor;
            return (
                void 0 === e
                    ? ((n = y(a)), (i = O(a, n <= s.toExpNeg || n >= s.toExpPos)))
                    : (E(e, 1, r),
                      void 0 === t ? (t = s.rounding) : E(t, 0, 8),
                      (n = y((a = N(new s(a), e, t)))),
                      (i = O(a, e <= n || n <= s.toExpNeg, e))),
                i
            );
        }),
        (m.toSignificantDigits = m.tosd =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return (
                    void 0 === e
                        ? ((e = i.precision), (t = i.rounding))
                        : (E(e, 1, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8)),
                    N(new i(n), e, t)
                );
            }),
        (m.toString =
            m.valueOf =
            m.val =
            m.toJSON =
                function () {
                    var e = this,
                        t = y(e),
                        n = e.constructor;
                    return O(e, t <= n.toExpNeg || t >= n.toExpPos);
                });
    var I = (function () {
        function e(e, t) {
            var n,
                r = 0,
                i = e.length;
            for (e = e.slice(); i--; ) (n = e[i] * t + r), (e[i] = (n % _) | 0), (r = (n / _) | 0);
            return r && e.unshift(r), e;
        }
        function t(e, t, n, r) {
            var i, a;
            if (n != r) a = n > r ? 1 : -1;
            else
                for (i = a = 0; i < n; i++)
                    if (e[i] != t[i]) {
                        a = e[i] > t[i] ? 1 : -1;
                        break;
                    }
            return a;
        }
        function n(e, t, n) {
            for (var r = 0; n--; ) (e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * _ + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, a, o) {
            var l,
                u,
                c,
                d,
                p,
                h,
                m,
                g,
                E,
                A,
                I,
                T,
                S,
                v,
                C,
                b,
                R,
                O,
                D = r.constructor,
                L = r.s == i.s ? 1 : -1,
                w = r.d,
                x = i.d;
            if (!r.s) return new D(r);
            if (!i.s) throw Error(s + "Division by zero");
            for (c = 0, u = r.e - i.e, R = x.length, C = w.length, g = (m = new D(L)).d = []; x[c] == (w[c] || 0); )
                ++c;
            if ((x[c] > (w[c] || 0) && --u, (T = null == a ? (a = D.precision) : o ? a + (y(r) - y(i)) + 1 : a) < 0))
                return new D(0);
            if (((T = (T / f + 2) | 0), (c = 0), 1 == R))
                for (d = 0, x = x[0], T++; (c < C || d) && T--; c++)
                    (S = d * _ + (w[c] || 0)), (g[c] = (S / x) | 0), (d = (S % x) | 0);
            else {
                for (
                    (d = (_ / (x[0] + 1)) | 0) > 1 && ((x = e(x, d)), (w = e(w, d)), (R = x.length), (C = w.length)),
                        v = R,
                        A = (E = w.slice(0, R)).length;
                    A < R;
                )
                    E[A++] = 0;
                (O = x.slice()).unshift(0), (b = x[0]), x[1] >= _ / 2 && ++b;
                do
                    (d = 0),
                        (l = t(x, E, R, A)) < 0
                            ? ((I = E[0]),
                              R != A && (I = I * _ + (E[1] || 0)),
                              (d = (I / b) | 0) > 1
                                  ? (d >= _ && (d = _ - 1),
                                    (h = (p = e(x, d)).length),
                                    (A = E.length),
                                    1 == (l = t(p, E, h, A)) && (d--, n(p, R < h ? O : x, h)))
                                  : (0 == d && (l = d = 1), (p = x.slice())),
                              (h = p.length) < A && p.unshift(0),
                              n(E, p, A),
                              -1 == l && ((A = E.length), (l = t(x, E, R, A)) < 1 && (d++, n(E, R < A ? O : x, A))),
                              (A = E.length))
                            : 0 === l && (d++, (E = [0])),
                        (g[c++] = d),
                        l && E[0] ? (E[A++] = w[v] || 0) : ((E = [w[v]]), (A = 1));
                while ((v++ < C || void 0 !== E[0]) && T--);
            }
            return g[0] || g.shift(), (m.e = u), N(m, o ? a + y(m) + 1 : a);
        };
    })();
    function T(e, t) {
        var r,
            i,
            s,
            o,
            u,
            d = 0,
            _ = 0,
            f = e.constructor,
            p = f.precision;
        if (y(e) > 16) throw Error(l + y(e));
        if (!e.s) return new f(n);
        for (null == t ? ((a = !1), (u = p)) : (u = t), o = new f(0.03125); e.abs().gte(0.1); )
            (e = e.times(o)), (_ += 5);
        for (u += ((Math.log(c(2, _)) / Math.LN10) * 2 + 5) | 0, r = i = s = new f(n), f.precision = u; ; ) {
            if (
                ((i = N(i.times(e), u)),
                (r = r.times(++d)),
                A((o = s.plus(I(i, r, u))).d).slice(0, u) === A(s.d).slice(0, u))
            ) {
                for (; _--; ) s = N(s.times(s), u);
                return (f.precision = p), null == t ? ((a = !0), N(s, p)) : s;
            }
            s = o;
        }
    }
    function y(e) {
        for (var t = e.e * f, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function S(e, t, n) {
        if (t > e.LN10.sd()) throw ((a = !0), n && (e.precision = n), Error(s + "LN10 precision limit exceeded"));
        return N(new e(e.LN10), t);
    }
    function v(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
    }
    function C(e, t) {
        var r,
            i,
            o,
            l,
            u,
            c,
            d,
            _,
            f,
            p = 1,
            h = 10,
            m = e,
            g = m.d,
            E = m.constructor,
            T = E.precision;
        if (m.s < 1) throw Error(s + (m.s ? "NaN" : "-Infinity"));
        if (m.eq(n)) return new E(0);
        if ((null == t ? ((a = !1), (_ = T)) : (_ = t), m.eq(10))) return null == t && (a = !0), S(E, _);
        if (((E.precision = _ += h), (i = (r = A(g)).charAt(0)), !(15e14 > Math.abs((l = y(m))))))
            return (
                (d = S(E, _ + 2, T).times(l + "")),
                (m = C(new E(i + "." + r.slice(1)), _ - h).plus(d)),
                (E.precision = T),
                null == t ? ((a = !0), N(m, T)) : m
            );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); ) (i = (r = A((m = m.times(e)).d)).charAt(0)), p++;
        for (
            l = y(m),
                i > 1 ? ((m = new E("0." + r)), l++) : (m = new E(i + "." + r.slice(1))),
                c = u = m = I(m.minus(n), m.plus(n), _),
                f = N(m.times(m), _),
                o = 3;
            ;
        ) {
            if (((u = N(u.times(f), _)), A((d = c.plus(I(u, new E(o), _))).d).slice(0, _) === A(c.d).slice(0, _)))
                return (
                    (c = c.times(2)),
                    0 !== l && (c = c.plus(S(E, _ + 2, T).times(l + ""))),
                    (c = I(c, new E(p), _)),
                    (E.precision = T),
                    null == t ? ((a = !0), N(c, T)) : c
                );
            (c = d), (o += 2);
        }
    }
    function b(e, t) {
        var n, r, i;
        for (
            (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
                (r = t.search(/e/i)) > 0
                    ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
                    : n < 0 && (n = t.length),
                r = 0;
            48 === t.charCodeAt(r);
        )
            ++r;
        for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
        if ((t = t.slice(r, i))) {
            if (((i -= r), (e.e = u((n = n - r - 1) / f)), (e.d = []), (r = (n + 1) % f), n < 0 && (r += f), r < i)) {
                for (r && e.d.push(+t.slice(0, r)), i -= f; r < i; ) e.d.push(+t.slice(r, (r += f)));
                r = f - (t = t.slice(r)).length;
            } else r -= i;
            for (; r--; ) t += "0";
            if ((e.d.push(+t), a && (e.e > h || e.e < -h))) throw Error(l + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function N(e, t, n) {
        var r,
            i,
            s,
            o,
            d,
            p,
            m,
            g,
            E = e.d;
        for (o = 1, s = E[0]; s >= 10; s /= 10) o++;
        if ((r = t - o) < 0) (r += f), (i = t), (m = E[(g = 0)]);
        else {
            if ((g = Math.ceil((r + 1) / f)) >= (s = E.length)) return e;
            for (o = 1, m = s = E[g]; s >= 10; s /= 10) o++;
            (r %= f), (i = r - f + o);
        }
        if (
            (void 0 !== n &&
                ((d = ((m / (s = c(10, o - i - 1))) % 10) | 0),
                (p = t < 0 || void 0 !== E[g + 1] || m % s),
                (p =
                    n < 4
                        ? (d || p) && (0 == n || n == (e.s < 0 ? 3 : 2))
                        : d > 5 ||
                          (5 == d &&
                              (4 == n ||
                                  p ||
                                  (6 == n && ((r > 0 ? (i > 0 ? m / c(10, o - i) : 0) : E[g - 1]) % 10) & 1) ||
                                  n == (e.s < 0 ? 8 : 7))))),
            t < 1 || !E[0])
        )
            return (
                p
                    ? ((s = y(e)),
                      (E.length = 1),
                      (t = t - s - 1),
                      (E[0] = c(10, (f - (t % f)) % f)),
                      (e.e = u(-t / f) || 0))
                    : ((E.length = 1), (E[0] = e.e = e.s = 0)),
                e
            );
        if (
            (0 == r
                ? ((E.length = g), (s = 1), g--)
                : ((E.length = g + 1),
                  (s = c(10, f - r)),
                  (E[g] = i > 0 ? (((m / c(10, o - i)) % c(10, i)) | 0) * s : 0)),
            p)
        )
            for (;;)
                if (0 == g) {
                    (E[0] += s) == _ && ((E[0] = 1), ++e.e);
                    break;
                } else {
                    if (((E[g] += s), E[g] != _)) break;
                    (E[g--] = 0), (s = 1);
                }
        for (r = E.length; 0 === E[--r]; ) E.pop();
        if (a && (e.e > h || e.e < -h)) throw Error(l + y(e));
        return e;
    }
    function R(e, t) {
        var n,
            r,
            i,
            s,
            o,
            l,
            u,
            c,
            d,
            p,
            h = e.constructor,
            m = h.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), a ? N(t, m) : t;
        if (((u = e.d), (p = t.d), (r = t.e), (c = e.e), (u = u.slice()), (o = c - r))) {
            for (
                (d = o < 0) ? ((n = u), (o = -o), (l = p.length)) : ((n = p), (r = c), (l = u.length)),
                    o > (i = Math.max(Math.ceil(m / f), l) + 2) && ((o = i), (n.length = 1)),
                    n.reverse(),
                    i = o;
                i--;
            )
                n.push(0);
            n.reverse();
        } else {
            for ((d = (i = u.length) < (l = p.length)) && (l = i), i = 0; i < l; i++)
                if (u[i] != p[i]) {
                    d = u[i] < p[i];
                    break;
                }
            o = 0;
        }
        for (d && ((n = u), (u = p), (p = n), (t.s = -t.s)), l = u.length, i = p.length - l; i > 0; --i) u[l++] = 0;
        for (i = p.length; i > o; ) {
            if (u[--i] < p[i]) {
                for (s = i; s && 0 === u[--s]; ) u[s] = _ - 1;
                --u[s], (u[i] += _);
            }
            u[i] -= p[i];
        }
        for (; 0 === u[--l]; ) u.pop();
        for (; 0 === u[0]; u.shift()) --r;
        return u[0] ? ((t.d = u), (t.e = r), a ? N(t, m) : t) : new h(0);
    }
    function O(e, t, n) {
        var r,
            i = y(e),
            a = A(e.d),
            s = a.length;
        return (
            t
                ? (n && (r = n - s) > 0
                      ? (a = a.charAt(0) + "." + a.slice(1) + v(r))
                      : s > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                  (a = a + (i < 0 ? "e" : "e+") + i))
                : i < 0
                  ? ((a = "0." + v(-i - 1) + a), n && (r = n - s) > 0 && (a += v(r)))
                  : i >= s
                    ? ((a += v(i + 1 - s)), n && (r = n - i - 1) > 0 && (a = a + "." + v(r)))
                    : ((r = i + 1) < s && (a = a.slice(0, r) + "." + a.slice(r)),
                      n && (r = n - s) > 0 && (i + 1 === s && (a += "."), (a += v(r)))),
            e.s < 0 ? "-" + a : a
        );
    }
    function D(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function L(e) {
        var t, n, r;
        function i(e) {
            var t = this;
            if (!(t instanceof i)) return new i(e);
            if (((t.constructor = i), e instanceof i)) {
                (t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ("number" == typeof e) {
                if (0 * e != 0) throw Error(o + e);
                if (e > 0) t.s = 1;
                else if (e < 0) (e = -e), (t.s = -1);
                else {
                    (t.s = 0), (t.e = 0), (t.d = [0]);
                    return;
                }
                if (e === ~~e && e < 1e7) {
                    (t.e = 0), (t.d = [e]);
                    return;
                }
                return b(t, e.toString());
            }
            if ("string" != typeof e) throw Error(o + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1), d.test(e))) b(t, e);
            else throw Error(o + e);
        }
        if (
            ((i.prototype = m),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = L),
            (i.config = i.set = w),
            void 0 === e && (e = {}),
            e)
        )
            for (t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; t < r.length; )
                e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return i.config(e), i;
    }
    function w(e) {
        if (!e || "object" != typeof e) throw Error(s + "Object expected");
        var t,
            n,
            i,
            a = ["precision", 1, r, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (t = 0; t < a.length; t += 3)
            if (void 0 !== (i = e[(n = a[t])]))
                if (u(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
                else throw Error(o + n + ": " + i);
        if (void 0 !== (i = e[(n = "LN10")]))
            if (i == Math.LN10) this[n] = new this(i);
            else throw Error(o + n + ": " + i);
        return this;
    }
    ((i = L(i)).default = i.Decimal = i),
        (n = new i(1)),
        "function" == typeof define && define.amd
            ? define(function () {
                  return i;
              })
            : e.exports
              ? (e.exports = i)
              : (t || (t = "u" > typeof self && self && self.self == self ? self : Function("return this")()),
                (t.Decimal = i));
})(this);
