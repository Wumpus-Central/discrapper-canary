!(function (t) {
    var n,
        r = 1000000000,
        i = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        a = !0,
        o = "[DecimalError] ",
        s = o + "Invalid argument: ",
        l = o + "Exponent out of range: ",
        c = Math.floor,
        u = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        f = 10000000,
        p = 7,
        _ = 9007199254740991,
        m = c(1286742750677284.5),
        h = {};
    function g(e, t) {
        var n,
            r,
            i,
            o,
            s,
            l,
            c,
            u,
            d = e.constructor,
            _ = d.precision;
        if (!e.s || !t.s) return t.s || (t = new d(e)), a ? C(t, _) : t;
        if (((c = e.d), (u = t.d), (s = e.e), (i = t.e), (c = c.slice()), (o = s - i))) {
            for (
                o < 0 ? ((r = c), (o = -o), (l = u.length)) : ((r = u), (i = s), (l = c.length)),
                    o > (l = (s = Math.ceil(_ / p)) > l ? s + 1 : l + 1) && ((o = l), (r.length = 1)),
                    r.reverse();
                o--;
            )
                r.push(0);
            r.reverse();
        }
        for ((l = c.length) - (o = u.length) < 0 && ((o = l), (r = u), (u = c), (c = r)), n = 0; o; )
            (n = ((c[--o] = c[o] + u[o] + n) / f) | 0), (c[o] %= f);
        for (n && (c.unshift(n), ++i), l = c.length; 0 == c[--l]; ) c.pop();
        return (t.d = c), (t.e = i), a ? C(t, _) : t;
    }
    function E(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(s + e);
    }
    function b(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            a = "",
            o = e[0];
        if (i > 0) {
            for (a += o, t = 1; t < i; t++) (n = p - (r = e[t] + "").length) && (a += I(n)), (a += r);
            (n = p - (r = (o = e[t]) + "").length) && (a += I(n));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return a + o;
    }
    (h.absoluteValue = h.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (h.comparedTo = h.cmp =
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
        (h.decimalPlaces = h.dp =
            function () {
                var e = this,
                    t = e.d.length - 1,
                    n = (t - e.e) * p;
                if ((t = e.d[t])) for (; t % 10 == 0; t /= 10) n--;
                return n < 0 ? 0 : n;
            }),
        (h.dividedBy = h.div =
            function (e) {
                return y(this, new this.constructor(e));
            }),
        (h.dividedToIntegerBy = h.idiv =
            function (e) {
                var t = this,
                    n = t.constructor;
                return C(y(t, new n(e), 0, 1), n.precision);
            }),
        (h.equals = h.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (h.exponent = function () {
            return v(this);
        }),
        (h.greaterThan = h.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (h.greaterThanOrEqualTo = h.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (h.isInteger = h.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (h.isNegative = h.isneg =
            function () {
                return this.s < 0;
            }),
        (h.isPositive = h.ispos =
            function () {
                return this.s > 0;
            }),
        (h.isZero = function () {
            return 0 === this.s;
        }),
        (h.lessThan = h.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (h.lessThanOrEqualTo = h.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (h.logarithm = h.log =
            function (e) {
                var t,
                    r = this,
                    i = r.constructor,
                    s = i.precision,
                    l = s + 5;
                if (void 0 === e) e = new i(10);
                else if ((e = new i(e)).s < 1 || e.eq(n)) throw Error(o + "NaN");
                if (r.s < 1) throw Error(o + (r.s ? "NaN" : "-Infinity"));
                return r.eq(n) ? new i(0) : ((a = !1), (t = y(T(r, l), T(e, l), l)), (a = !0), C(t, s));
            }),
        (h.minus = h.sub =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? N(t, e) : g(t, ((e.s = -e.s), e));
            }),
        (h.modulo = h.mod =
            function (e) {
                var t,
                    n = this,
                    r = n.constructor,
                    i = r.precision;
                if (!(e = new r(e)).s) throw Error(o + "NaN");
                return n.s ? ((a = !1), (t = y(n, e, 0, 1).times(e)), (a = !0), n.minus(t)) : C(new r(n), i);
            }),
        (h.naturalExponential = h.exp =
            function () {
                return O(this);
            }),
        (h.naturalLogarithm = h.ln =
            function () {
                return T(this);
            }),
        (h.negated = h.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (h.plus = h.add =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? g(t, e) : N(t, ((e.s = -e.s), e));
            }),
        (h.precision = h.sd =
            function (e) {
                var t,
                    n,
                    r,
                    i = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(s + e);
                if (((t = v(i) + 1), (n = (r = i.d.length - 1) * p + 1), (r = i.d[r]))) {
                    for (; r % 10 == 0; r /= 10) n--;
                    for (r = i.d[0]; r >= 10; r /= 10) n++;
                }
                return e && t > n ? t : n;
            }),
        (h.squareRoot = h.sqrt =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    l,
                    u = this,
                    d = u.constructor;
                if (u.s < 1) {
                    if (!u.s) return new d(0);
                    throw Error(o + "NaN");
                }
                for (
                    e = v(u),
                        a = !1,
                        0 == (i = Math.sqrt(+u)) || i == 1 / 0
                            ? (((t = b(u.d)).length + e) % 2 == 0 && (t += "0"),
                              (i = Math.sqrt(t)),
                              (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                              (r = new d(
                                  (t =
                                      i == 1 / 0 ? "1e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e),
                              )))
                            : (r = new d(i.toString())),
                        i = l = (n = d.precision) + 3;
                    ;
                )
                    if (
                        ((r = (s = r).plus(y(u, s, l + 2)).times(0.5)), b(s.d).slice(0, l) === (t = b(r.d)).slice(0, l))
                    ) {
                        if (((t = t.slice(l - 3, l + 1)), i == l && "4999" == t)) {
                            if ((C(s, n + 1, 0), s.times(s).eq(u))) {
                                r = s;
                                break;
                            }
                        } else if ("9999" != t) break;
                        l += 4;
                    }
                return (a = !0), C(r, n);
            }),
        (h.times = h.mul =
            function (e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    l,
                    c,
                    u,
                    d = this,
                    p = d.constructor,
                    _ = d.d,
                    m = (e = new p(e)).d;
                if (!d.s || !e.s) return new p(0);
                for (
                    e.s *= d.s,
                        n = d.e + e.e,
                        (c = _.length) < (u = m.length) && ((o = _), (_ = m), (m = o), (s = c), (c = u), (u = s)),
                        o = [],
                        r = s = c + u;
                    r--;
                )
                    o.push(0);
                for (r = u; --r >= 0; ) {
                    for (t = 0, i = c + r; i > r; )
                        (l = o[i] + m[r] * _[i - r - 1] + t), (o[i--] = (l % f) | 0), (t = (l / f) | 0);
                    o[i] = ((o[i] + t) % f) | 0;
                }
                for (; !o[--s]; ) o.pop();
                return t ? ++n : o.shift(), (e.d = o), (e.e = n), a ? C(e, p.precision) : e;
            }),
        (h.toDecimalPlaces = h.todp =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return ((n = new i(n)), void 0 === e)
                    ? n
                    : (E(e, 0, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8), C(n, e + v(n) + 1, t));
            }),
        (h.toExponential = function (e, t) {
            var n,
                i = this,
                a = i.constructor;
            return (
                void 0 === e
                    ? (n = P(i, !0))
                    : (E(e, 0, r),
                      void 0 === t ? (t = a.rounding) : E(t, 0, 8),
                      (n = P((i = C(new a(i), e + 1, t)), !0, e + 1))),
                n
            );
        }),
        (h.toFixed = function (e, t) {
            var n,
                i,
                a = this,
                o = a.constructor;
            return void 0 === e
                ? P(a)
                : (E(e, 0, r),
                  void 0 === t ? (t = o.rounding) : E(t, 0, 8),
                  (n = P((i = C(new o(a), e + v(a) + 1, t)).abs(), !1, e + v(i) + 1)),
                  a.isneg() && !a.isZero() ? "-" + n : n);
        }),
        (h.toInteger = h.toint =
            function () {
                var e = this,
                    t = e.constructor;
                return C(new t(e), v(e) + 1, t.rounding);
            }),
        (h.toNumber = function () {
            return +this;
        }),
        (h.toPower = h.pow =
            function (e) {
                var t,
                    r,
                    i,
                    s,
                    l,
                    u,
                    d = this,
                    f = d.constructor,
                    m = 12,
                    h = +(e = new f(e));
                if (!e.s) return new f(n);
                if (!(d = new f(d)).s) {
                    if (e.s < 1) throw Error(o + "Infinity");
                    return d;
                }
                if (d.eq(n)) return d;
                if (((i = f.precision), e.eq(n))) return C(d, i);
                if (((u = (t = e.e) >= (r = e.d.length - 1)), (l = d.s), u)) {
                    if ((r = h < 0 ? -h : h) <= _) {
                        for (
                            s = new f(n), t = Math.ceil(i / p + 4), a = !1;
                            r % 2 && R((s = s.times(d)).d, t), 0 !== (r = c(r / 2));
                        )
                            R((d = d.times(d)).d, t);
                        return (a = !0), e.s < 0 ? new f(n).div(s) : C(s, i);
                    }
                } else if (l < 0) throw Error(o + "NaN");
                return (
                    (l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
                    (d.s = 1),
                    (a = !1),
                    (s = e.times(T(d, i + m))),
                    (a = !0),
                    ((s = O(s)).s = l),
                    s
                );
            }),
        (h.toPrecision = function (e, t) {
            var n,
                i,
                a = this,
                o = a.constructor;
            return (
                void 0 === e
                    ? ((n = v(a)), (i = P(a, n <= o.toExpNeg || n >= o.toExpPos)))
                    : (E(e, 1, r),
                      void 0 === t ? (t = o.rounding) : E(t, 0, 8),
                      (n = v((a = C(new o(a), e, t)))),
                      (i = P(a, e <= n || n <= o.toExpNeg, e))),
                i
            );
        }),
        (h.toSignificantDigits = h.tosd =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return (
                    void 0 === e
                        ? ((e = i.precision), (t = i.rounding))
                        : (E(e, 1, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8)),
                    C(new i(n), e, t)
                );
            }),
        (h.toString =
            h.valueOf =
            h.val =
            h.toJSON =
                function () {
                    var e = this,
                        t = v(e),
                        n = e.constructor;
                    return P(e, t <= n.toExpNeg || t >= n.toExpPos);
                });
    var y = (function () {
        function e(e, t) {
            var n,
                r = 0,
                i = e.length;
            for (e = e.slice(); i--; ) (n = e[i] * t + r), (e[i] = (n % f) | 0), (r = (n / f) | 0);
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
            for (var r = 0; n--; ) (e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * f + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, a, s) {
            var l,
                c,
                u,
                d,
                _,
                m,
                h,
                g,
                E,
                b,
                y,
                O,
                S,
                I,
                T,
                A,
                N,
                P,
                R = r.constructor,
                D = r.s == i.s ? 1 : -1,
                w = r.d,
                x = i.d;
            if (!r.s) return new R(r);
            if (!i.s) throw Error(o + "Division by zero");
            for (u = 0, c = r.e - i.e, N = x.length, T = w.length, g = (h = new R(D)).d = []; x[u] == (w[u] || 0); )
                ++u;
            if ((x[u] > (w[u] || 0) && --c, (O = null == a ? (a = R.precision) : s ? a + (v(r) - v(i)) + 1 : a) < 0))
                return new R(0);
            if (((O = (O / p + 2) | 0), (u = 0), 1 == N))
                for (d = 0, x = x[0], O++; (u < T || d) && O--; u++)
                    (S = d * f + (w[u] || 0)), (g[u] = (S / x) | 0), (d = (S % x) | 0);
            else {
                for (
                    (d = (f / (x[0] + 1)) | 0) > 1 && ((x = e(x, d)), (w = e(w, d)), (N = x.length), (T = w.length)),
                        I = N,
                        b = (E = w.slice(0, N)).length;
                    b < N;
                )
                    E[b++] = 0;
                (P = x.slice()).unshift(0), (A = x[0]), x[1] >= f / 2 && ++A;
                do
                    (d = 0),
                        (l = t(x, E, N, b)) < 0
                            ? ((y = E[0]),
                              N != b && (y = y * f + (E[1] || 0)),
                              (d = (y / A) | 0) > 1
                                  ? (d >= f && (d = f - 1),
                                    (m = (_ = e(x, d)).length),
                                    (b = E.length),
                                    1 == (l = t(_, E, m, b)) && (d--, n(_, N < m ? P : x, m)))
                                  : (0 == d && (l = d = 1), (_ = x.slice())),
                              (m = _.length) < b && _.unshift(0),
                              n(E, _, b),
                              -1 == l && ((b = E.length), (l = t(x, E, N, b)) < 1 && (d++, n(E, N < b ? P : x, b))),
                              (b = E.length))
                            : 0 === l && (d++, (E = [0])),
                        (g[u++] = d),
                        l && E[0] ? (E[b++] = w[I] || 0) : ((E = [w[I]]), (b = 1));
                while ((I++ < T || void 0 !== E[0]) && O--);
            }
            return g[0] || g.shift(), (h.e = c), C(h, s ? a + v(h) + 1 : a);
        };
    })();
    function O(e, t) {
        var r,
            i,
            o,
            s,
            c,
            d = 0,
            f = 0,
            p = e.constructor,
            _ = p.precision;
        if (v(e) > 16) throw Error(l + v(e));
        if (!e.s) return new p(n);
        for (null == t ? ((a = !1), (c = _)) : (c = t), s = new p(0.03125); e.abs().gte(0.1); )
            (e = e.times(s)), (f += 5);
        for (c += ((Math.log(u(2, f)) / Math.LN10) * 2 + 5) | 0, r = i = o = new p(n), p.precision = c; ; ) {
            if (
                ((i = C(i.times(e), c)),
                (r = r.times(++d)),
                b((s = o.plus(y(i, r, c))).d).slice(0, c) === b(o.d).slice(0, c))
            ) {
                for (; f--; ) o = C(o.times(o), c);
                return (p.precision = _), null == t ? ((a = !0), C(o, _)) : o;
            }
            o = s;
        }
    }
    function v(e) {
        for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function S(e, t, n) {
        if (t > e.LN10.sd()) throw ((a = !0), n && (e.precision = n), Error(o + "LN10 precision limit exceeded"));
        return C(new e(e.LN10), t);
    }
    function I(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
    }
    function T(e, t) {
        var r,
            i,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            _ = 1,
            m = 10,
            h = e,
            g = h.d,
            E = h.constructor,
            O = E.precision;
        if (h.s < 1) throw Error(o + (h.s ? "NaN" : "-Infinity"));
        if (h.eq(n)) return new E(0);
        if ((null == t ? ((a = !1), (f = O)) : (f = t), h.eq(10))) return null == t && (a = !0), S(E, f);
        if (((E.precision = f += m), (i = (r = b(g)).charAt(0)), !(1500000000000000 > Math.abs((l = v(h))))))
            return (
                (d = S(E, f + 2, O).times(l + "")),
                (h = T(new E(i + "." + r.slice(1)), f - m).plus(d)),
                (E.precision = O),
                null == t ? ((a = !0), C(h, O)) : h
            );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); ) (i = (r = b((h = h.times(e)).d)).charAt(0)), _++;
        for (
            l = v(h),
                i > 1 ? ((h = new E("0." + r)), l++) : (h = new E(i + "." + r.slice(1))),
                u = c = h = y(h.minus(n), h.plus(n), f),
                p = C(h.times(h), f),
                s = 3;
            ;
        ) {
            if (((c = C(c.times(p), f)), b((d = u.plus(y(c, new E(s), f))).d).slice(0, f) === b(u.d).slice(0, f)))
                return (
                    (u = u.times(2)),
                    0 !== l && (u = u.plus(S(E, f + 2, O).times(l + ""))),
                    (u = y(u, new E(_), f)),
                    (E.precision = O),
                    null == t ? ((a = !0), C(u, O)) : u
                );
            (u = d), (s += 2);
        }
    }
    function A(e, t) {
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
            if (((i -= r), (e.e = c((n = n - r - 1) / p)), (e.d = []), (r = (n + 1) % p), n < 0 && (r += p), r < i)) {
                for (r && e.d.push(+t.slice(0, r)), i -= p; r < i; ) e.d.push(+t.slice(r, (r += p)));
                r = p - (t = t.slice(r)).length;
            } else r -= i;
            for (; r--; ) t += "0";
            if ((e.d.push(+t), a && (e.e > m || e.e < -m))) throw Error(l + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function C(e, t, n) {
        var r,
            i,
            o,
            s,
            d,
            _,
            h,
            g,
            E = e.d;
        for (s = 1, o = E[0]; o >= 10; o /= 10) s++;
        if ((r = t - s) < 0) (r += p), (i = t), (h = E[(g = 0)]);
        else {
            if ((g = Math.ceil((r + 1) / p)) >= (o = E.length)) return e;
            for (s = 1, h = o = E[g]; o >= 10; o /= 10) s++;
            (r %= p), (i = r - p + s);
        }
        if (
            (void 0 !== n &&
                ((d = ((h / (o = u(10, s - i - 1))) % 10) | 0),
                (_ = t < 0 || void 0 !== E[g + 1] || h % o),
                (_ =
                    n < 4
                        ? (d || _) && (0 == n || n == (e.s < 0 ? 3 : 2))
                        : d > 5 ||
                          (5 == d &&
                              (4 == n ||
                                  _ ||
                                  (6 == n && ((r > 0 ? (i > 0 ? h / u(10, s - i) : 0) : E[g - 1]) % 10) & 1) ||
                                  n == (e.s < 0 ? 8 : 7))))),
            t < 1 || !E[0])
        )
            return (
                _
                    ? ((o = v(e)),
                      (E.length = 1),
                      (t = t - o - 1),
                      (E[0] = u(10, (p - (t % p)) % p)),
                      (e.e = c(-t / p) || 0))
                    : ((E.length = 1), (E[0] = e.e = e.s = 0)),
                e
            );
        if (
            (0 == r
                ? ((E.length = g), (o = 1), g--)
                : ((E.length = g + 1),
                  (o = u(10, p - r)),
                  (E[g] = i > 0 ? (((h / u(10, s - i)) % u(10, i)) | 0) * o : 0)),
            _)
        )
            for (;;)
                if (0 == g) {
                    (E[0] += o) == f && ((E[0] = 1), ++e.e);
                    break;
                } else {
                    if (((E[g] += o), E[g] != f)) break;
                    (E[g--] = 0), (o = 1);
                }
        for (r = E.length; 0 === E[--r]; ) E.pop();
        if (a && (e.e > m || e.e < -m)) throw Error(l + v(e));
        return e;
    }
    function N(e, t) {
        var n,
            r,
            i,
            o,
            s,
            l,
            c,
            u,
            d,
            _,
            m = e.constructor,
            h = m.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new m(e)), a ? C(t, h) : t;
        if (((c = e.d), (_ = t.d), (r = t.e), (u = e.e), (c = c.slice()), (s = u - r))) {
            for (
                (d = s < 0) ? ((n = c), (s = -s), (l = _.length)) : ((n = _), (r = u), (l = c.length)),
                    s > (i = Math.max(Math.ceil(h / p), l) + 2) && ((s = i), (n.length = 1)),
                    n.reverse(),
                    i = s;
                i--;
            )
                n.push(0);
            n.reverse();
        } else {
            for ((d = (i = c.length) < (l = _.length)) && (l = i), i = 0; i < l; i++)
                if (c[i] != _[i]) {
                    d = c[i] < _[i];
                    break;
                }
            s = 0;
        }
        for (d && ((n = c), (c = _), (_ = n), (t.s = -t.s)), l = c.length, i = _.length - l; i > 0; --i) c[l++] = 0;
        for (i = _.length; i > s; ) {
            if (c[--i] < _[i]) {
                for (o = i; o && 0 === c[--o]; ) c[o] = f - 1;
                --c[o], (c[i] += f);
            }
            c[i] -= _[i];
        }
        for (; 0 === c[--l]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --r;
        return c[0] ? ((t.d = c), (t.e = r), a ? C(t, h) : t) : new m(0);
    }
    function P(e, t, n) {
        var r,
            i = v(e),
            a = b(e.d),
            o = a.length;
        return (
            t
                ? (n && (r = n - o) > 0
                      ? (a = a.charAt(0) + "." + a.slice(1) + I(r))
                      : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                  (a = a + (i < 0 ? "e" : "e+") + i))
                : i < 0
                  ? ((a = "0." + I(-i - 1) + a), n && (r = n - o) > 0 && (a += I(r)))
                  : i >= o
                    ? ((a += I(i + 1 - o)), n && (r = n - i - 1) > 0 && (a = a + "." + I(r)))
                    : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)),
                      n && (r = n - o) > 0 && (i + 1 === o && (a += "."), (a += I(r)))),
            e.s < 0 ? "-" + a : a
        );
    }
    function R(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function D(e) {
        var t, n, r;
        function i(e) {
            var t = this;
            if (!(t instanceof i)) return new i(e);
            if (((t.constructor = i), e instanceof i)) {
                (t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ("number" == typeof e) {
                if (0 * e != 0) throw Error(s + e);
                if (e > 0) t.s = 1;
                else if (e < 0) (e = -e), (t.s = -1);
                else {
                    (t.s = 0), (t.e = 0), (t.d = [0]);
                    return;
                }
                if (e === ~~e && e < 10000000) {
                    (t.e = 0), (t.d = [e]);
                    return;
                }
                return A(t, e.toString());
            }
            if ("string" != typeof e) throw Error(s + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1), d.test(e))) A(t, e);
            else throw Error(s + e);
        }
        if (
            ((i.prototype = h),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = D),
            (i.config = i.set = w),
            void 0 === e && (e = {}),
            e)
        )
            for (t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; t < r.length; )
                e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return i.config(e), i;
    }
    function w(e) {
        if (!e || "object" != typeof e) throw Error(o + "Object expected");
        var t,
            n,
            i,
            a = ["precision", 1, r, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (t = 0; t < a.length; t += 3)
            if (void 0 !== (i = e[(n = a[t])]))
                if (c(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
                else throw Error(s + n + ": " + i);
        if (void 0 !== (i = e[(n = "LN10")]))
            if (i == Math.LN10) this[n] = new this(i);
            else throw Error(s + n + ": " + i);
        return this;
    }
    ((i = D(i)).default = i.Decimal = i),
        (n = new i(1)),
        "function" == typeof define && define.amd
            ? define(function () {
                  return i;
              })
            : e.exports
              ? (e.exports = i)
              : (t || (t = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()),
                (t.Decimal = i));
})(this);
