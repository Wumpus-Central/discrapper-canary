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
        s = "[DecimalError] ",
        o = s + "Invalid argument: ",
        l = s + "Exponent out of range: ",
        c = Math.floor,
        u = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        f = 10000000,
        p = 7,
        _ = 9007199254740991,
        h = c(1286742750677284.5),
        m = {};
    function g(e, t) {
        var n,
            r,
            i,
            s,
            o,
            l,
            c,
            u,
            d = e.constructor,
            _ = d.precision;
        if (!e.s || !t.s) return t.s || (t = new d(e)), a ? C(t, _) : t;
        if (((c = e.d), (u = t.d), (o = e.e), (i = t.e), (c = c.slice()), (s = o - i))) {
            for (
                s < 0 ? ((r = c), (s = -s), (l = u.length)) : ((r = u), (i = o), (l = c.length)),
                    s > (l = (o = Math.ceil(_ / p)) > l ? o + 1 : l + 1) && ((s = l), (r.length = 1)),
                    r.reverse();
                s--;
            )
                r.push(0);
            r.reverse();
        }
        for ((l = c.length) - (s = u.length) < 0 && ((s = l), (r = u), (u = c), (c = r)), n = 0; s; )
            (n = ((c[--s] = c[s] + u[s] + n) / f) | 0), (c[s] %= f);
        for (n && (c.unshift(n), ++i), l = c.length; 0 == c[--l]; ) c.pop();
        return (t.d = c), (t.e = i), a ? C(t, _) : t;
    }
    function E(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(o + e);
    }
    function b(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            a = "",
            s = e[0];
        if (i > 0) {
            for (a += s, t = 1; t < i; t++) (n = p - (r = e[t] + "").length) && (a += S(n)), (a += r);
            (n = p - (r = (s = e[t]) + "").length) && (a += S(n));
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
                    n = (t - e.e) * p;
                if ((t = e.d[t])) for (; t % 10 == 0; t /= 10) n--;
                return n < 0 ? 0 : n;
            }),
        (m.dividedBy = m.div =
            function (e) {
                return y(this, new this.constructor(e));
            }),
        (m.dividedToIntegerBy = m.idiv =
            function (e) {
                var t = this,
                    n = t.constructor;
                return C(y(t, new n(e), 0, 1), n.precision);
            }),
        (m.equals = m.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (m.exponent = function () {
            return A(this);
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
                return r.eq(n) ? new i(0) : ((a = !1), (t = y(I(r, l), I(e, l), l)), (a = !0), C(t, o));
            }),
        (m.minus = m.sub =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? N(t, e) : g(t, ((e.s = -e.s), e));
            }),
        (m.modulo = m.mod =
            function (e) {
                var t,
                    n = this,
                    r = n.constructor,
                    i = r.precision;
                if (!(e = new r(e)).s) throw Error(s + "NaN");
                return n.s ? ((a = !1), (t = y(n, e, 0, 1).times(e)), (a = !0), n.minus(t)) : C(new r(n), i);
            }),
        (m.naturalExponential = m.exp =
            function () {
                return O(this);
            }),
        (m.naturalLogarithm = m.ln =
            function () {
                return I(this);
            }),
        (m.negated = m.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (m.plus = m.add =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? g(t, e) : N(t, ((e.s = -e.s), e));
            }),
        (m.precision = m.sd =
            function (e) {
                var t,
                    n,
                    r,
                    i = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(o + e);
                if (((t = A(i) + 1), (n = (r = i.d.length - 1) * p + 1), (r = i.d[r]))) {
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
                    u = this,
                    d = u.constructor;
                if (u.s < 1) {
                    if (!u.s) return new d(0);
                    throw Error(s + "NaN");
                }
                for (
                    e = A(u),
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
                        ((r = (o = r).plus(y(u, o, l + 2)).times(0.5)), b(o.d).slice(0, l) === (t = b(r.d)).slice(0, l))
                    ) {
                        if (((t = t.slice(l - 3, l + 1)), i == l && "4999" == t)) {
                            if ((C(o, n + 1, 0), o.times(o).eq(u))) {
                                r = o;
                                break;
                            }
                        } else if ("9999" != t) break;
                        l += 4;
                    }
                return (a = !0), C(r, n);
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
                    c,
                    u,
                    d = this,
                    p = d.constructor,
                    _ = d.d,
                    h = (e = new p(e)).d;
                if (!d.s || !e.s) return new p(0);
                for (
                    e.s *= d.s,
                        n = d.e + e.e,
                        (c = _.length) < (u = h.length) && ((s = _), (_ = h), (h = s), (o = c), (c = u), (u = o)),
                        s = [],
                        r = o = c + u;
                    r--;
                )
                    s.push(0);
                for (r = u; --r >= 0; ) {
                    for (t = 0, i = c + r; i > r; )
                        (l = s[i] + h[r] * _[i - r - 1] + t), (s[i--] = (l % f) | 0), (t = (l / f) | 0);
                    s[i] = ((s[i] + t) % f) | 0;
                }
                for (; !s[--o]; ) s.pop();
                return t ? ++n : s.shift(), (e.d = s), (e.e = n), a ? C(e, p.precision) : e;
            }),
        (m.toDecimalPlaces = m.todp =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return ((n = new i(n)), void 0 === e)
                    ? n
                    : (E(e, 0, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8), C(n, e + A(n) + 1, t));
            }),
        (m.toExponential = function (e, t) {
            var n,
                i = this,
                a = i.constructor;
            return (
                void 0 === e
                    ? (n = R(i, !0))
                    : (E(e, 0, r),
                      void 0 === t ? (t = a.rounding) : E(t, 0, 8),
                      (n = R((i = C(new a(i), e + 1, t)), !0, e + 1))),
                n
            );
        }),
        (m.toFixed = function (e, t) {
            var n,
                i,
                a = this,
                s = a.constructor;
            return void 0 === e
                ? R(a)
                : (E(e, 0, r),
                  void 0 === t ? (t = s.rounding) : E(t, 0, 8),
                  (n = R((i = C(new s(a), e + A(a) + 1, t)).abs(), !1, e + A(i) + 1)),
                  a.isneg() && !a.isZero() ? "-" + n : n);
        }),
        (m.toInteger = m.toint =
            function () {
                var e = this,
                    t = e.constructor;
                return C(new t(e), A(e) + 1, t.rounding);
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
                    u,
                    d = this,
                    f = d.constructor,
                    h = 12,
                    m = +(e = new f(e));
                if (!e.s) return new f(n);
                if (!(d = new f(d)).s) {
                    if (e.s < 1) throw Error(s + "Infinity");
                    return d;
                }
                if (d.eq(n)) return d;
                if (((i = f.precision), e.eq(n))) return C(d, i);
                if (((u = (t = e.e) >= (r = e.d.length - 1)), (l = d.s), u)) {
                    if ((r = m < 0 ? -m : m) <= _) {
                        for (
                            o = new f(n), t = Math.ceil(i / p + 4), a = !1;
                            r % 2 && w((o = o.times(d)).d, t), 0 !== (r = c(r / 2));
                        )
                            w((d = d.times(d)).d, t);
                        return (a = !0), e.s < 0 ? new f(n).div(o) : C(o, i);
                    }
                } else if (l < 0) throw Error(s + "NaN");
                return (
                    (l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
                    (d.s = 1),
                    (a = !1),
                    (o = e.times(I(d, i + h))),
                    (a = !0),
                    ((o = O(o)).s = l),
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
                    ? ((n = A(a)), (i = R(a, n <= s.toExpNeg || n >= s.toExpPos)))
                    : (E(e, 1, r),
                      void 0 === t ? (t = s.rounding) : E(t, 0, 8),
                      (n = A((a = C(new s(a), e, t)))),
                      (i = R(a, e <= n || n <= s.toExpNeg, e))),
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
                    C(new i(n), e, t)
                );
            }),
        (m.toString =
            m.valueOf =
            m.val =
            m.toJSON =
                function () {
                    var e = this,
                        t = A(e),
                        n = e.constructor;
                    return R(e, t <= n.toExpNeg || t >= n.toExpPos);
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
        return function (r, i, a, o) {
            var l,
                c,
                u,
                d,
                _,
                h,
                m,
                g,
                E,
                b,
                y,
                O,
                v,
                S,
                I,
                T,
                N,
                R,
                w = r.constructor,
                P = r.s == i.s ? 1 : -1,
                D = r.d,
                x = i.d;
            if (!r.s) return new w(r);
            if (!i.s) throw Error(s + "Division by zero");
            for (u = 0, c = r.e - i.e, N = x.length, I = D.length, g = (m = new w(P)).d = []; x[u] == (D[u] || 0); )
                ++u;
            if ((x[u] > (D[u] || 0) && --c, (O = null == a ? (a = w.precision) : o ? a + (A(r) - A(i)) + 1 : a) < 0))
                return new w(0);
            if (((O = (O / p + 2) | 0), (u = 0), 1 == N))
                for (d = 0, x = x[0], O++; (u < I || d) && O--; u++)
                    (v = d * f + (D[u] || 0)), (g[u] = (v / x) | 0), (d = (v % x) | 0);
            else {
                for (
                    (d = (f / (x[0] + 1)) | 0) > 1 && ((x = e(x, d)), (D = e(D, d)), (N = x.length), (I = D.length)),
                        S = N,
                        b = (E = D.slice(0, N)).length;
                    b < N;
                )
                    E[b++] = 0;
                (R = x.slice()).unshift(0), (T = x[0]), x[1] >= f / 2 && ++T;
                do
                    (d = 0),
                        (l = t(x, E, N, b)) < 0
                            ? ((y = E[0]),
                              N != b && (y = y * f + (E[1] || 0)),
                              (d = (y / T) | 0) > 1
                                  ? (d >= f && (d = f - 1),
                                    (h = (_ = e(x, d)).length),
                                    (b = E.length),
                                    1 == (l = t(_, E, h, b)) && (d--, n(_, N < h ? R : x, h)))
                                  : (0 == d && (l = d = 1), (_ = x.slice())),
                              (h = _.length) < b && _.unshift(0),
                              n(E, _, b),
                              -1 == l && ((b = E.length), (l = t(x, E, N, b)) < 1 && (d++, n(E, N < b ? R : x, b))),
                              (b = E.length))
                            : 0 === l && (d++, (E = [0])),
                        (g[u++] = d),
                        l && E[0] ? (E[b++] = D[S] || 0) : ((E = [D[S]]), (b = 1));
                while ((S++ < I || void 0 !== E[0]) && O--);
            }
            return g[0] || g.shift(), (m.e = c), C(m, o ? a + A(m) + 1 : a);
        };
    })();
    function O(e, t) {
        var r,
            i,
            s,
            o,
            c,
            d = 0,
            f = 0,
            p = e.constructor,
            _ = p.precision;
        if (A(e) > 16) throw Error(l + A(e));
        if (!e.s) return new p(n);
        for (null == t ? ((a = !1), (c = _)) : (c = t), o = new p(0.03125); e.abs().gte(0.1); )
            (e = e.times(o)), (f += 5);
        for (c += ((Math.log(u(2, f)) / Math.LN10) * 2 + 5) | 0, r = i = s = new p(n), p.precision = c; ; ) {
            if (
                ((i = C(i.times(e), c)),
                (r = r.times(++d)),
                b((o = s.plus(y(i, r, c))).d).slice(0, c) === b(s.d).slice(0, c))
            ) {
                for (; f--; ) s = C(s.times(s), c);
                return (p.precision = _), null == t ? ((a = !0), C(s, _)) : s;
            }
            s = o;
        }
    }
    function A(e) {
        for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function v(e, t, n) {
        if (t > e.LN10.sd()) throw ((a = !0), n && (e.precision = n), Error(s + "LN10 precision limit exceeded"));
        return C(new e(e.LN10), t);
    }
    function S(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
    }
    function I(e, t) {
        var r,
            i,
            o,
            l,
            c,
            u,
            d,
            f,
            p,
            _ = 1,
            h = 10,
            m = e,
            g = m.d,
            E = m.constructor,
            O = E.precision;
        if (m.s < 1) throw Error(s + (m.s ? "NaN" : "-Infinity"));
        if (m.eq(n)) return new E(0);
        if ((null == t ? ((a = !1), (f = O)) : (f = t), m.eq(10))) return null == t && (a = !0), v(E, f);
        if (((E.precision = f += h), (i = (r = b(g)).charAt(0)), !(1500000000000000 > Math.abs((l = A(m))))))
            return (
                (d = v(E, f + 2, O).times(l + "")),
                (m = I(new E(i + "." + r.slice(1)), f - h).plus(d)),
                (E.precision = O),
                null == t ? ((a = !0), C(m, O)) : m
            );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); ) (i = (r = b((m = m.times(e)).d)).charAt(0)), _++;
        for (
            l = A(m),
                i > 1 ? ((m = new E("0." + r)), l++) : (m = new E(i + "." + r.slice(1))),
                u = c = m = y(m.minus(n), m.plus(n), f),
                p = C(m.times(m), f),
                o = 3;
            ;
        ) {
            if (((c = C(c.times(p), f)), b((d = u.plus(y(c, new E(o), f))).d).slice(0, f) === b(u.d).slice(0, f)))
                return (
                    (u = u.times(2)),
                    0 !== l && (u = u.plus(v(E, f + 2, O).times(l + ""))),
                    (u = y(u, new E(_), f)),
                    (E.precision = O),
                    null == t ? ((a = !0), C(u, O)) : u
                );
            (u = d), (o += 2);
        }
    }
    function T(e, t) {
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
            if ((e.d.push(+t), a && (e.e > h || e.e < -h))) throw Error(l + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function C(e, t, n) {
        var r,
            i,
            s,
            o,
            d,
            _,
            m,
            g,
            E = e.d;
        for (o = 1, s = E[0]; s >= 10; s /= 10) o++;
        if ((r = t - o) < 0) (r += p), (i = t), (m = E[(g = 0)]);
        else {
            if ((g = Math.ceil((r + 1) / p)) >= (s = E.length)) return e;
            for (o = 1, m = s = E[g]; s >= 10; s /= 10) o++;
            (r %= p), (i = r - p + o);
        }
        if (
            (void 0 !== n &&
                ((d = ((m / (s = u(10, o - i - 1))) % 10) | 0),
                (_ = t < 0 || void 0 !== E[g + 1] || m % s),
                (_ =
                    n < 4
                        ? (d || _) && (0 == n || n == (e.s < 0 ? 3 : 2))
                        : d > 5 ||
                          (5 == d &&
                              (4 == n ||
                                  _ ||
                                  (6 == n && ((r > 0 ? (i > 0 ? m / u(10, o - i) : 0) : E[g - 1]) % 10) & 1) ||
                                  n == (e.s < 0 ? 8 : 7))))),
            t < 1 || !E[0])
        )
            return (
                _
                    ? ((s = A(e)),
                      (E.length = 1),
                      (t = t - s - 1),
                      (E[0] = u(10, (p - (t % p)) % p)),
                      (e.e = c(-t / p) || 0))
                    : ((E.length = 1), (E[0] = e.e = e.s = 0)),
                e
            );
        if (
            (0 == r
                ? ((E.length = g), (s = 1), g--)
                : ((E.length = g + 1),
                  (s = u(10, p - r)),
                  (E[g] = i > 0 ? (((m / u(10, o - i)) % u(10, i)) | 0) * s : 0)),
            _)
        )
            for (;;)
                if (0 == g) {
                    (E[0] += s) == f && ((E[0] = 1), ++e.e);
                    break;
                } else {
                    if (((E[g] += s), E[g] != f)) break;
                    (E[g--] = 0), (s = 1);
                }
        for (r = E.length; 0 === E[--r]; ) E.pop();
        if (a && (e.e > h || e.e < -h)) throw Error(l + A(e));
        return e;
    }
    function N(e, t) {
        var n,
            r,
            i,
            s,
            o,
            l,
            c,
            u,
            d,
            _,
            h = e.constructor,
            m = h.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), a ? C(t, m) : t;
        if (((c = e.d), (_ = t.d), (r = t.e), (u = e.e), (c = c.slice()), (o = u - r))) {
            for (
                (d = o < 0) ? ((n = c), (o = -o), (l = _.length)) : ((n = _), (r = u), (l = c.length)),
                    o > (i = Math.max(Math.ceil(m / p), l) + 2) && ((o = i), (n.length = 1)),
                    n.reverse(),
                    i = o;
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
            o = 0;
        }
        for (d && ((n = c), (c = _), (_ = n), (t.s = -t.s)), l = c.length, i = _.length - l; i > 0; --i) c[l++] = 0;
        for (i = _.length; i > o; ) {
            if (c[--i] < _[i]) {
                for (s = i; s && 0 === c[--s]; ) c[s] = f - 1;
                --c[s], (c[i] += f);
            }
            c[i] -= _[i];
        }
        for (; 0 === c[--l]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --r;
        return c[0] ? ((t.d = c), (t.e = r), a ? C(t, m) : t) : new h(0);
    }
    function R(e, t, n) {
        var r,
            i = A(e),
            a = b(e.d),
            s = a.length;
        return (
            t
                ? (n && (r = n - s) > 0
                      ? (a = a.charAt(0) + "." + a.slice(1) + S(r))
                      : s > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                  (a = a + (i < 0 ? "e" : "e+") + i))
                : i < 0
                  ? ((a = "0." + S(-i - 1) + a), n && (r = n - s) > 0 && (a += S(r)))
                  : i >= s
                    ? ((a += S(i + 1 - s)), n && (r = n - i - 1) > 0 && (a = a + "." + S(r)))
                    : ((r = i + 1) < s && (a = a.slice(0, r) + "." + a.slice(r)),
                      n && (r = n - s) > 0 && (i + 1 === s && (a += "."), (a += S(r)))),
            e.s < 0 ? "-" + a : a
        );
    }
    function w(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function P(e) {
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
                if (e === ~~e && e < 10000000) {
                    (t.e = 0), (t.d = [e]);
                    return;
                }
                return T(t, e.toString());
            }
            if ("string" != typeof e) throw Error(o + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1), d.test(e))) T(t, e);
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
            (i.clone = P),
            (i.config = i.set = D),
            void 0 === e && (e = {}),
            e)
        )
            for (t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; t < r.length; )
                e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return i.config(e), i;
    }
    function D(e) {
        if (!e || "object" != typeof e) throw Error(s + "Object expected");
        var t,
            n,
            i,
            a = ["precision", 1, r, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (t = 0; t < a.length; t += 3)
            if (void 0 !== (i = e[(n = a[t])]))
                if (c(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
                else throw Error(o + n + ": " + i);
        if (void 0 !== (i = e[(n = "LN10")]))
            if (i == Math.LN10) this[n] = new this(i);
            else throw Error(o + n + ": " + i);
        return this;
    }
    ((i = P(i)).default = i.Decimal = i),
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
