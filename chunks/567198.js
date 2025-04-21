!(function (t) {
    var n,
        r = 1000000000,
        i = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        a = !0,
        o = '[DecimalError] ',
        s = o + 'Invalid argument: ',
        l = o + 'Exponent out of range: ',
        c = Math.floor,
        u = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        f = 10000000,
        _ = 7,
        p = 9007199254740991,
        h = c(1286742750677284.5),
        m = {};
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
            p = d.precision;
        if (!e.s || !t.s) return t.s || (t = new d(e)), a ? N(t, p) : t;
        if (((c = e.d), (u = t.d), (s = e.e), (i = t.e), (c = c.slice()), (o = s - i))) {
            for (o < 0 ? ((r = c), (o = -o), (l = u.length)) : ((r = u), (i = s), (l = c.length)), o > (l = (s = Math.ceil(p / _)) > l ? s + 1 : l + 1) && ((o = l), (r.length = 1)), r.reverse(); o--; ) r.push(0);
            r.reverse();
        }
        for ((l = c.length) - (o = u.length) < 0 && ((o = l), (r = u), (u = c), (c = r)), n = 0; o; ) (n = ((c[--o] = c[o] + u[o] + n) / f) | 0), (c[o] %= f);
        for (n && (c.unshift(n), ++i), l = c.length; 0 == c[--l]; ) c.pop();
        return (t.d = c), (t.e = i), a ? N(t, p) : t;
    }
    function E(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(s + e);
    }
    function b(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            a = '',
            o = e[0];
        if (i > 0) {
            for (a += o, t = 1; t < i; t++) (n = _ - (r = e[t] + '').length) && (a += S(n)), (a += r);
            (n = _ - (r = (o = e[t]) + '').length) && (a += S(n));
        } else if (0 === o) return '0';
        for (; o % 10 == 0; ) o /= 10;
        return a + o;
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
                for (t = 0, n = (r = a.d.length) < (i = e.d.length) ? r : i; t < n; ++t) if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
                return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
            }),
        (m.decimalPlaces = m.dp =
            function () {
                var e = this,
                    t = e.d.length - 1,
                    n = (t - e.e) * _;
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
                return N(y(t, new n(e), 0, 1), n.precision);
            }),
        (m.equals = m.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (m.exponent = function () {
            return O(this);
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
                    s = i.precision,
                    l = s + 5;
                if (void 0 === e) e = new i(10);
                else if ((e = new i(e)).s < 1 || e.eq(n)) throw Error(o + 'NaN');
                if (r.s < 1) throw Error(o + (r.s ? 'NaN' : '-Infinity'));
                return r.eq(n) ? new i(0) : ((a = !1), (t = y(T(r, l), T(e, l), l)), (a = !0), N(t, s));
            }),
        (m.minus = m.sub =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? C(t, e) : g(t, ((e.s = -e.s), e));
            }),
        (m.modulo = m.mod =
            function (e) {
                var t,
                    n = this,
                    r = n.constructor,
                    i = r.precision;
                if (!(e = new r(e)).s) throw Error(o + 'NaN');
                return n.s ? ((a = !1), (t = y(n, e, 0, 1).times(e)), (a = !0), n.minus(t)) : N(new r(n), i);
            }),
        (m.naturalExponential = m.exp =
            function () {
                return v(this);
            }),
        (m.naturalLogarithm = m.ln =
            function () {
                return T(this);
            }),
        (m.negated = m.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (m.plus = m.add =
            function (e) {
                var t = this;
                return (e = new t.constructor(e)), t.s == e.s ? g(t, e) : C(t, ((e.s = -e.s), e));
            }),
        (m.precision = m.sd =
            function (e) {
                var t,
                    n,
                    r,
                    i = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(s + e);
                if (((t = O(i) + 1), (n = (r = i.d.length - 1) * _ + 1), (r = i.d[r]))) {
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
                    s,
                    l,
                    u = this,
                    d = u.constructor;
                if (u.s < 1) {
                    if (!u.s) return new d(0);
                    throw Error(o + 'NaN');
                }
                for (e = O(u), a = !1, 0 == (i = Math.sqrt(+u)) || i == 1 / 0 ? (((t = b(u.d)).length + e) % 2 == 0 && (t += '0'), (i = Math.sqrt(t)), (e = c((e + 1) / 2) - (e < 0 || e % 2)), (r = new d((t = i == 1 / 0 ? '1e' + e : (t = i.toExponential()).slice(0, t.indexOf('e') + 1) + e)))) : (r = new d(i.toString())), i = l = (n = d.precision) + 3; ; )
                    if (((r = (s = r).plus(y(u, s, l + 2)).times(0.5)), b(s.d).slice(0, l) === (t = b(r.d)).slice(0, l))) {
                        if (((t = t.slice(l - 3, l + 1)), i == l && '4999' == t)) {
                            if ((N(s, n + 1, 0), s.times(s).eq(u))) {
                                r = s;
                                break;
                            }
                        } else if ('9999' != t) break;
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
                    o,
                    s,
                    l,
                    c,
                    u,
                    d = this,
                    _ = d.constructor,
                    p = d.d,
                    h = (e = new _(e)).d;
                if (!d.s || !e.s) return new _(0);
                for (e.s *= d.s, n = d.e + e.e, (c = p.length) < (u = h.length) && ((o = p), (p = h), (h = o), (s = c), (c = u), (u = s)), o = [], r = s = c + u; r--; ) o.push(0);
                for (r = u; --r >= 0; ) {
                    for (t = 0, i = c + r; i > r; ) (l = o[i] + h[r] * p[i - r - 1] + t), (o[i--] = l % f | 0), (t = (l / f) | 0);
                    o[i] = (o[i] + t) % f | 0;
                }
                for (; !o[--s]; ) o.pop();
                return t ? ++n : o.shift(), (e.d = o), (e.e = n), a ? N(e, _.precision) : e;
            }),
        (m.toDecimalPlaces = m.todp =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return ((n = new i(n)), void 0 === e) ? n : (E(e, 0, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8), N(n, e + O(n) + 1, t));
            }),
        (m.toExponential = function (e, t) {
            var n,
                i = this,
                a = i.constructor;
            return void 0 === e ? (n = R(i, !0)) : (E(e, 0, r), void 0 === t ? (t = a.rounding) : E(t, 0, 8), (n = R((i = N(new a(i), e + 1, t)), !0, e + 1))), n;
        }),
        (m.toFixed = function (e, t) {
            var n,
                i,
                a = this,
                o = a.constructor;
            return void 0 === e ? R(a) : (E(e, 0, r), void 0 === t ? (t = o.rounding) : E(t, 0, 8), (n = R((i = N(new o(a), e + O(a) + 1, t)).abs(), !1, e + O(i) + 1)), a.isneg() && !a.isZero() ? '-' + n : n);
        }),
        (m.toInteger = m.toint =
            function () {
                var e = this,
                    t = e.constructor;
                return N(new t(e), O(e) + 1, t.rounding);
            }),
        (m.toNumber = function () {
            return +this;
        }),
        (m.toPower = m.pow =
            function (e) {
                var t,
                    r,
                    i,
                    s,
                    l,
                    u,
                    d = this,
                    f = d.constructor,
                    h = 12,
                    m = +(e = new f(e));
                if (!e.s) return new f(n);
                if (!(d = new f(d)).s) {
                    if (e.s < 1) throw Error(o + 'Infinity');
                    return d;
                }
                if (d.eq(n)) return d;
                if (((i = f.precision), e.eq(n))) return N(d, i);
                if (((u = (t = e.e) >= (r = e.d.length - 1)), (l = d.s), u)) {
                    if ((r = m < 0 ? -m : m) <= p) {
                        for (s = new f(n), t = Math.ceil(i / _ + 4), a = !1; r % 2 && P((s = s.times(d)).d, t), 0 !== (r = c(r / 2)); ) P((d = d.times(d)).d, t);
                        return (a = !0), e.s < 0 ? new f(n).div(s) : N(s, i);
                    }
                } else if (l < 0) throw Error(o + 'NaN');
                return (l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1), (d.s = 1), (a = !1), (s = e.times(T(d, i + h))), (a = !0), ((s = v(s)).s = l), s;
            }),
        (m.toPrecision = function (e, t) {
            var n,
                i,
                a = this,
                o = a.constructor;
            return void 0 === e ? ((n = O(a)), (i = R(a, n <= o.toExpNeg || n >= o.toExpPos))) : (E(e, 1, r), void 0 === t ? (t = o.rounding) : E(t, 0, 8), (n = O((a = N(new o(a), e, t)))), (i = R(a, e <= n || n <= o.toExpNeg, e))), i;
        }),
        (m.toSignificantDigits = m.tosd =
            function (e, t) {
                var n = this,
                    i = n.constructor;
                return void 0 === e ? ((e = i.precision), (t = i.rounding)) : (E(e, 1, r), void 0 === t ? (t = i.rounding) : E(t, 0, 8)), N(new i(n), e, t);
            }),
        (m.toString =
            m.valueOf =
            m.val =
            m.toJSON =
                function () {
                    var e = this,
                        t = O(e),
                        n = e.constructor;
                    return R(e, t <= n.toExpNeg || t >= n.toExpPos);
                });
    var y = (function () {
        function e(e, t) {
            var n,
                r = 0,
                i = e.length;
            for (e = e.slice(); i--; ) (n = e[i] * t + r), (e[i] = n % f | 0), (r = (n / f) | 0);
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
                p,
                h,
                m,
                g,
                E,
                b,
                y,
                v,
                I,
                S,
                T,
                A,
                C,
                R,
                P = r.constructor,
                w = r.s == i.s ? 1 : -1,
                D = r.d,
                L = i.d;
            if (!r.s) return new P(r);
            if (!i.s) throw Error(o + 'Division by zero');
            for (u = 0, c = r.e - i.e, C = L.length, T = D.length, g = (m = new P(w)).d = []; L[u] == (D[u] || 0); ) ++u;
            if ((L[u] > (D[u] || 0) && --c, (v = null == a ? (a = P.precision) : s ? a + (O(r) - O(i)) + 1 : a) < 0)) return new P(0);
            if (((v = (v / _ + 2) | 0), (u = 0), 1 == C)) for (d = 0, L = L[0], v++; (u < T || d) && v--; u++) (I = d * f + (D[u] || 0)), (g[u] = (I / L) | 0), (d = I % L | 0);
            else {
                for ((d = (f / (L[0] + 1)) | 0) > 1 && ((L = e(L, d)), (D = e(D, d)), (C = L.length), (T = D.length)), S = C, b = (E = D.slice(0, C)).length; b < C; ) E[b++] = 0;
                (R = L.slice()).unshift(0), (A = L[0]), L[1] >= f / 2 && ++A;
                do (d = 0), (l = t(L, E, C, b)) < 0 ? ((y = E[0]), C != b && (y = y * f + (E[1] || 0)), (d = (y / A) | 0) > 1 ? (d >= f && (d = f - 1), (h = (p = e(L, d)).length), (b = E.length), 1 == (l = t(p, E, h, b)) && (d--, n(p, C < h ? R : L, h))) : (0 == d && (l = d = 1), (p = L.slice())), (h = p.length) < b && p.unshift(0), n(E, p, b), -1 == l && ((b = E.length), (l = t(L, E, C, b)) < 1 && (d++, n(E, C < b ? R : L, b))), (b = E.length)) : 0 === l && (d++, (E = [0])), (g[u++] = d), l && E[0] ? (E[b++] = D[S] || 0) : ((E = [D[S]]), (b = 1));
                while ((S++ < T || void 0 !== E[0]) && v--);
            }
            return g[0] || g.shift(), (m.e = c), N(m, s ? a + O(m) + 1 : a);
        };
    })();
    function v(e, t) {
        var r,
            i,
            o,
            s,
            c,
            d = 0,
            f = 0,
            _ = e.constructor,
            p = _.precision;
        if (O(e) > 16) throw Error(l + O(e));
        if (!e.s) return new _(n);
        for (null == t ? ((a = !1), (c = p)) : (c = t), s = new _(0.03125); e.abs().gte(0.1); ) (e = e.times(s)), (f += 5);
        for (c += ((Math.log(u(2, f)) / Math.LN10) * 2 + 5) | 0, r = i = o = new _(n), _.precision = c; ; ) {
            if (((i = N(i.times(e), c)), (r = r.times(++d)), b((s = o.plus(y(i, r, c))).d).slice(0, c) === b(o.d).slice(0, c))) {
                for (; f--; ) o = N(o.times(o), c);
                return (_.precision = p), null == t ? ((a = !0), N(o, p)) : o;
            }
            o = s;
        }
    }
    function O(e) {
        for (var t = e.e * _, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function I(e, t, n) {
        if (t > e.LN10.sd()) throw ((a = !0), n && (e.precision = n), Error(o + 'LN10 precision limit exceeded'));
        return N(new e(e.LN10), t);
    }
    function S(e) {
        for (var t = ''; e--; ) t += '0';
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
            _,
            p = 1,
            h = 10,
            m = e,
            g = m.d,
            E = m.constructor,
            v = E.precision;
        if (m.s < 1) throw Error(o + (m.s ? 'NaN' : '-Infinity'));
        if (m.eq(n)) return new E(0);
        if ((null == t ? ((a = !1), (f = v)) : (f = t), m.eq(10))) return null == t && (a = !0), I(E, f);
        if (((E.precision = f += h), (i = (r = b(g)).charAt(0)), !(1500000000000000 > Math.abs((l = O(m)))))) return (d = I(E, f + 2, v).times(l + '')), (m = T(new E(i + '.' + r.slice(1)), f - h).plus(d)), (E.precision = v), null == t ? ((a = !0), N(m, v)) : m;
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); ) (i = (r = b((m = m.times(e)).d)).charAt(0)), p++;
        for (l = O(m), i > 1 ? ((m = new E('0.' + r)), l++) : (m = new E(i + '.' + r.slice(1))), u = c = m = y(m.minus(n), m.plus(n), f), _ = N(m.times(m), f), s = 3; ; ) {
            if (((c = N(c.times(_), f)), b((d = u.plus(y(c, new E(s), f))).d).slice(0, f) === b(u.d).slice(0, f))) return (u = u.times(2)), 0 !== l && (u = u.plus(I(E, f + 2, v).times(l + ''))), (u = y(u, new E(p), f)), (E.precision = v), null == t ? ((a = !0), N(u, v)) : u;
            (u = d), (s += 2);
        }
    }
    function A(e, t) {
        var n, r, i;
        for ((n = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r))) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); ) ++r;
        for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
        if ((t = t.slice(r, i))) {
            if (((i -= r), (e.e = c((n = n - r - 1) / _)), (e.d = []), (r = (n + 1) % _), n < 0 && (r += _), r < i)) {
                for (r && e.d.push(+t.slice(0, r)), i -= _; r < i; ) e.d.push(+t.slice(r, (r += _)));
                r = _ - (t = t.slice(r)).length;
            } else r -= i;
            for (; r--; ) t += '0';
            if ((e.d.push(+t), a && (e.e > h || e.e < -h))) throw Error(l + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function N(e, t, n) {
        var r,
            i,
            o,
            s,
            d,
            p,
            m,
            g,
            E = e.d;
        for (s = 1, o = E[0]; o >= 10; o /= 10) s++;
        if ((r = t - s) < 0) (r += _), (i = t), (m = E[(g = 0)]);
        else {
            if ((g = Math.ceil((r + 1) / _)) >= (o = E.length)) return e;
            for (s = 1, m = o = E[g]; o >= 10; o /= 10) s++;
            (r %= _), (i = r - _ + s);
        }
        if ((void 0 !== n && ((d = (m / (o = u(10, s - i - 1))) % 10 | 0), (p = t < 0 || void 0 !== E[g + 1] || m % o), (p = n < 4 ? (d || p) && (0 == n || n == (e.s < 0 ? 3 : 2)) : d > 5 || (5 == d && (4 == n || p || (6 == n && (r > 0 ? (i > 0 ? m / u(10, s - i) : 0) : E[g - 1]) % 10 & 1) || n == (e.s < 0 ? 8 : 7))))), t < 1 || !E[0])) return p ? ((o = O(e)), (E.length = 1), (t = t - o - 1), (E[0] = u(10, (_ - (t % _)) % _)), (e.e = c(-t / _) || 0)) : ((E.length = 1), (E[0] = e.e = e.s = 0)), e;
        if ((0 == r ? ((E.length = g), (o = 1), g--) : ((E.length = g + 1), (o = u(10, _ - r)), (E[g] = i > 0 ? ((m / u(10, s - i)) % u(10, i) | 0) * o : 0)), p))
            for (;;)
                if (0 == g) {
                    (E[0] += o) == f && ((E[0] = 1), ++e.e);
                    break;
                } else {
                    if (((E[g] += o), E[g] != f)) break;
                    (E[g--] = 0), (o = 1);
                }
        for (r = E.length; 0 === E[--r]; ) E.pop();
        if (a && (e.e > h || e.e < -h)) throw Error(l + O(e));
        return e;
    }
    function C(e, t) {
        var n,
            r,
            i,
            o,
            s,
            l,
            c,
            u,
            d,
            p,
            h = e.constructor,
            m = h.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), a ? N(t, m) : t;
        if (((c = e.d), (p = t.d), (r = t.e), (u = e.e), (c = c.slice()), (s = u - r))) {
            for ((d = s < 0) ? ((n = c), (s = -s), (l = p.length)) : ((n = p), (r = u), (l = c.length)), s > (i = Math.max(Math.ceil(m / _), l) + 2) && ((s = i), (n.length = 1)), n.reverse(), i = s; i--; ) n.push(0);
            n.reverse();
        } else {
            for ((d = (i = c.length) < (l = p.length)) && (l = i), i = 0; i < l; i++)
                if (c[i] != p[i]) {
                    d = c[i] < p[i];
                    break;
                }
            s = 0;
        }
        for (d && ((n = c), (c = p), (p = n), (t.s = -t.s)), l = c.length, i = p.length - l; i > 0; --i) c[l++] = 0;
        for (i = p.length; i > s; ) {
            if (c[--i] < p[i]) {
                for (o = i; o && 0 === c[--o]; ) c[o] = f - 1;
                --c[o], (c[i] += f);
            }
            c[i] -= p[i];
        }
        for (; 0 === c[--l]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --r;
        return c[0] ? ((t.d = c), (t.e = r), a ? N(t, m) : t) : new h(0);
    }
    function R(e, t, n) {
        var r,
            i = O(e),
            a = b(e.d),
            o = a.length;
        return t ? (n && (r = n - o) > 0 ? (a = a.charAt(0) + '.' + a.slice(1) + S(r)) : o > 1 && (a = a.charAt(0) + '.' + a.slice(1)), (a = a + (i < 0 ? 'e' : 'e+') + i)) : i < 0 ? ((a = '0.' + S(-i - 1) + a), n && (r = n - o) > 0 && (a += S(r))) : i >= o ? ((a += S(i + 1 - o)), n && (r = n - i - 1) > 0 && (a = a + '.' + S(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + '.' + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += '.'), (a += S(r)))), e.s < 0 ? '-' + a : a;
    }
    function P(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function w(e) {
        var t, n, r;
        function i(e) {
            var t = this;
            if (!(t instanceof i)) return new i(e);
            if (((t.constructor = i), e instanceof i)) {
                (t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ('number' == typeof e) {
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
            if ('string' != typeof e) throw Error(s + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1), d.test(e))) A(t, e);
            else throw Error(s + e);
        }
        if (((i.prototype = m), (i.ROUND_UP = 0), (i.ROUND_DOWN = 1), (i.ROUND_CEIL = 2), (i.ROUND_FLOOR = 3), (i.ROUND_HALF_UP = 4), (i.ROUND_HALF_DOWN = 5), (i.ROUND_HALF_EVEN = 6), (i.ROUND_HALF_CEIL = 7), (i.ROUND_HALF_FLOOR = 8), (i.clone = w), (i.config = i.set = D), void 0 === e && (e = {}), e)) for (t = 0, r = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10']; t < r.length; ) e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return i.config(e), i;
    }
    function D(e) {
        if (!e || 'object' != typeof e) throw Error(o + 'Object expected');
        var t,
            n,
            i,
            a = ['precision', 1, r, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0, 'toExpPos', 0, 1 / 0];
        for (t = 0; t < a.length; t += 3)
            if (void 0 !== (i = e[(n = a[t])]))
                if (c(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
                else throw Error(s + n + ': ' + i);
        if (void 0 !== (i = e[(n = 'LN10')]))
            if (i == Math.LN10) this[n] = new this(i);
            else throw Error(s + n + ': ' + i);
        return this;
    }
    ((i = w(i)).default = i.Decimal = i),
        (n = new i(1)),
        'function' == typeof define && define.amd
            ? define(function () {
                  return i;
              })
            : e.exports
              ? (e.exports = i)
              : (t || (t = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), (t.Decimal = i));
})(this);
