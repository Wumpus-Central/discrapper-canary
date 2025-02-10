!(function (t) {
    var n,
        i = 1000000000,
        r = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        a = !0,
        s = '[DecimalError] ',
        o = s + 'Invalid argument: ',
        l = s + 'Exponent out of range: ',
        u = Math.floor,
        c = Math.pow,
        d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        f = 10000000,
        _ = 7,
        p = 9007199254740991,
        h = u(1286742750677284.5),
        m = {};
    function g(e, t) {
        var n,
            i,
            r,
            s,
            o,
            l,
            u,
            c,
            d = e.constructor,
            p = d.precision;
        if (!e.s || !t.s) return t.s || (t = new d(e)), a ? C(t, p) : t;
        if (((u = e.d), (c = t.d), (o = e.e), (r = t.e), (u = u.slice()), (s = o - r))) {
            for (s < 0 ? ((i = u), (s = -s), (l = c.length)) : ((i = c), (r = o), (l = u.length)), s > (l = (o = Math.ceil(p / _)) > l ? o + 1 : l + 1) && ((s = l), (i.length = 1)), i.reverse(); s--; ) i.push(0);
            i.reverse();
        }
        for ((l = u.length) - (s = c.length) < 0 && ((s = l), (i = c), (c = u), (u = i)), n = 0; s; ) (n = ((u[--s] = u[s] + c[s] + n) / f) | 0), (u[s] %= f);
        for (n && (u.unshift(n), ++r), l = u.length; 0 == u[--l]; ) u.pop();
        return (t.d = u), (t.e = r), a ? C(t, p) : t;
    }
    function E(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(o + e);
    }
    function v(e) {
        var t,
            n,
            i,
            r = e.length - 1,
            a = '',
            s = e[0];
        if (r > 0) {
            for (a += s, t = 1; t < r; t++) (n = _ - (i = e[t] + '').length) && (a += S(n)), (a += i);
            (n = _ - (i = (s = e[t]) + '').length) && (a += S(n));
        } else if (0 === s) return '0';
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
                    i,
                    r,
                    a = this;
                if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
                if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
                for (t = 0, n = (i = a.d.length) < (r = e.d.length) ? i : r; t < n; ++t) if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
                return i === r ? 0 : (i > r) ^ (a.s < 0) ? 1 : -1;
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
                return C(y(t, new n(e), 0, 1), n.precision);
            }),
        (m.equals = m.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (m.exponent = function () {
            return T(this);
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
                    i = this,
                    r = i.constructor,
                    o = r.precision,
                    l = o + 5;
                if (void 0 === e) e = new r(10);
                else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(s + 'NaN');
                if (i.s < 1) throw Error(s + (i.s ? 'NaN' : '-Infinity'));
                return i.eq(n) ? new r(0) : ((a = !1), (t = y(A(i, l), A(e, l), l)), (a = !0), C(t, o));
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
                    i = n.constructor,
                    r = i.precision;
                if (!(e = new i(e)).s) throw Error(s + 'NaN');
                return n.s ? ((a = !1), (t = y(n, e, 0, 1).times(e)), (a = !0), n.minus(t)) : C(new i(n), r);
            }),
        (m.naturalExponential = m.exp =
            function () {
                return I(this);
            }),
        (m.naturalLogarithm = m.ln =
            function () {
                return A(this);
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
                    i,
                    r = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(o + e);
                if (((t = T(r) + 1), (n = (i = r.d.length - 1) * _ + 1), (i = r.d[i]))) {
                    for (; i % 10 == 0; i /= 10) n--;
                    for (i = r.d[0]; i >= 10; i /= 10) n++;
                }
                return e && t > n ? t : n;
            }),
        (m.squareRoot = m.sqrt =
            function () {
                var e,
                    t,
                    n,
                    i,
                    r,
                    o,
                    l,
                    c = this,
                    d = c.constructor;
                if (c.s < 1) {
                    if (!c.s) return new d(0);
                    throw Error(s + 'NaN');
                }
                for (e = T(c), a = !1, 0 == (r = Math.sqrt(+c)) || r == 1 / 0 ? (((t = v(c.d)).length + e) % 2 == 0 && (t += '0'), (r = Math.sqrt(t)), (e = u((e + 1) / 2) - (e < 0 || e % 2)), (i = new d((t = r == 1 / 0 ? '1e' + e : (t = r.toExponential()).slice(0, t.indexOf('e') + 1) + e)))) : (i = new d(r.toString())), r = l = (n = d.precision) + 3; ; )
                    if (((i = (o = i).plus(y(c, o, l + 2)).times(0.5)), v(o.d).slice(0, l) === (t = v(i.d)).slice(0, l))) {
                        if (((t = t.slice(l - 3, l + 1)), r == l && '4999' == t)) {
                            if ((C(o, n + 1, 0), o.times(o).eq(c))) {
                                i = o;
                                break;
                            }
                        } else if ('9999' != t) break;
                        l += 4;
                    }
                return (a = !0), C(i, n);
            }),
        (m.times = m.mul =
            function (e) {
                var t,
                    n,
                    i,
                    r,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = this,
                    _ = d.constructor,
                    p = d.d,
                    h = (e = new _(e)).d;
                if (!d.s || !e.s) return new _(0);
                for (e.s *= d.s, n = d.e + e.e, (u = p.length) < (c = h.length) && ((s = p), (p = h), (h = s), (o = u), (u = c), (c = o)), s = [], i = o = u + c; i--; ) s.push(0);
                for (i = c; --i >= 0; ) {
                    for (t = 0, r = u + i; r > i; ) (l = s[r] + h[i] * p[r - i - 1] + t), (s[r--] = l % f | 0), (t = (l / f) | 0);
                    s[r] = (s[r] + t) % f | 0;
                }
                for (; !s[--o]; ) s.pop();
                return t ? ++n : s.shift(), (e.d = s), (e.e = n), a ? C(e, _.precision) : e;
            }),
        (m.toDecimalPlaces = m.todp =
            function (e, t) {
                var n = this,
                    r = n.constructor;
                return ((n = new r(n)), void 0 === e) ? n : (E(e, 0, i), void 0 === t ? (t = r.rounding) : E(t, 0, 8), C(n, e + T(n) + 1, t));
            }),
        (m.toExponential = function (e, t) {
            var n,
                r = this,
                a = r.constructor;
            return void 0 === e ? (n = O(r, !0)) : (E(e, 0, i), void 0 === t ? (t = a.rounding) : E(t, 0, 8), (n = O((r = C(new a(r), e + 1, t)), !0, e + 1))), n;
        }),
        (m.toFixed = function (e, t) {
            var n,
                r,
                a = this,
                s = a.constructor;
            return void 0 === e ? O(a) : (E(e, 0, i), void 0 === t ? (t = s.rounding) : E(t, 0, 8), (n = O((r = C(new s(a), e + T(a) + 1, t)).abs(), !1, e + T(r) + 1)), a.isneg() && !a.isZero() ? '-' + n : n);
        }),
        (m.toInteger = m.toint =
            function () {
                var e = this,
                    t = e.constructor;
                return C(new t(e), T(e) + 1, t.rounding);
            }),
        (m.toNumber = function () {
            return +this;
        }),
        (m.toPower = m.pow =
            function (e) {
                var t,
                    i,
                    r,
                    o,
                    l,
                    c,
                    d = this,
                    f = d.constructor,
                    h = 12,
                    m = +(e = new f(e));
                if (!e.s) return new f(n);
                if (!(d = new f(d)).s) {
                    if (e.s < 1) throw Error(s + 'Infinity');
                    return d;
                }
                if (d.eq(n)) return d;
                if (((r = f.precision), e.eq(n))) return C(d, r);
                if (((c = (t = e.e) >= (i = e.d.length - 1)), (l = d.s), c)) {
                    if ((i = m < 0 ? -m : m) <= p) {
                        for (o = new f(n), t = Math.ceil(r / _ + 4), a = !1; i % 2 && D((o = o.times(d)).d, t), 0 !== (i = u(i / 2)); ) D((d = d.times(d)).d, t);
                        return (a = !0), e.s < 0 ? new f(n).div(o) : C(o, r);
                    }
                } else if (l < 0) throw Error(s + 'NaN');
                return (l = l < 0 && 1 & e.d[Math.max(t, i)] ? -1 : 1), (d.s = 1), (a = !1), (o = e.times(A(d, r + h))), (a = !0), ((o = I(o)).s = l), o;
            }),
        (m.toPrecision = function (e, t) {
            var n,
                r,
                a = this,
                s = a.constructor;
            return void 0 === e ? ((n = T(a)), (r = O(a, n <= s.toExpNeg || n >= s.toExpPos))) : (E(e, 1, i), void 0 === t ? (t = s.rounding) : E(t, 0, 8), (n = T((a = C(new s(a), e, t)))), (r = O(a, e <= n || n <= s.toExpNeg, e))), r;
        }),
        (m.toSignificantDigits = m.tosd =
            function (e, t) {
                var n = this,
                    r = n.constructor;
                return void 0 === e ? ((e = r.precision), (t = r.rounding)) : (E(e, 1, i), void 0 === t ? (t = r.rounding) : E(t, 0, 8)), C(new r(n), e, t);
            }),
        (m.toString =
            m.valueOf =
            m.val =
            m.toJSON =
                function () {
                    var e = this,
                        t = T(e),
                        n = e.constructor;
                    return O(e, t <= n.toExpNeg || t >= n.toExpPos);
                });
    var y = (function () {
        function e(e, t) {
            var n,
                i = 0,
                r = e.length;
            for (e = e.slice(); r--; ) (n = e[r] * t + i), (e[r] = n % f | 0), (i = (n / f) | 0);
            return i && e.unshift(i), e;
        }
        function t(e, t, n, i) {
            var r, a;
            if (n != i) a = n > i ? 1 : -1;
            else
                for (r = a = 0; r < n; r++)
                    if (e[r] != t[r]) {
                        a = e[r] > t[r] ? 1 : -1;
                        break;
                    }
            return a;
        }
        function n(e, t, n) {
            for (var i = 0; n--; ) (e[n] -= i), (i = e[n] < t[n] ? 1 : 0), (e[n] = i * f + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, r, a, o) {
            var l,
                u,
                c,
                d,
                p,
                h,
                m,
                g,
                E,
                v,
                y,
                I,
                b,
                S,
                A,
                N,
                R,
                O,
                D = i.constructor,
                L = i.s == r.s ? 1 : -1,
                x = i.d,
                P = r.d;
            if (!i.s) return new D(i);
            if (!r.s) throw Error(s + 'Division by zero');
            for (c = 0, u = i.e - r.e, R = P.length, A = x.length, g = (m = new D(L)).d = []; P[c] == (x[c] || 0); ) ++c;
            if ((P[c] > (x[c] || 0) && --u, (I = null == a ? (a = D.precision) : o ? a + (T(i) - T(r)) + 1 : a) < 0)) return new D(0);
            if (((I = (I / _ + 2) | 0), (c = 0), 1 == R)) for (d = 0, P = P[0], I++; (c < A || d) && I--; c++) (b = d * f + (x[c] || 0)), (g[c] = (b / P) | 0), (d = b % P | 0);
            else {
                for ((d = (f / (P[0] + 1)) | 0) > 1 && ((P = e(P, d)), (x = e(x, d)), (R = P.length), (A = x.length)), S = R, v = (E = x.slice(0, R)).length; v < R; ) E[v++] = 0;
                (O = P.slice()).unshift(0), (N = P[0]), P[1] >= f / 2 && ++N;
                do (d = 0), (l = t(P, E, R, v)) < 0 ? ((y = E[0]), R != v && (y = y * f + (E[1] || 0)), (d = (y / N) | 0) > 1 ? (d >= f && (d = f - 1), (h = (p = e(P, d)).length), (v = E.length), 1 == (l = t(p, E, h, v)) && (d--, n(p, R < h ? O : P, h))) : (0 == d && (l = d = 1), (p = P.slice())), (h = p.length) < v && p.unshift(0), n(E, p, v), -1 == l && ((v = E.length), (l = t(P, E, R, v)) < 1 && (d++, n(E, R < v ? O : P, v))), (v = E.length)) : 0 === l && (d++, (E = [0])), (g[c++] = d), l && E[0] ? (E[v++] = x[S] || 0) : ((E = [x[S]]), (v = 1));
                while ((S++ < A || void 0 !== E[0]) && I--);
            }
            return g[0] || g.shift(), (m.e = u), C(m, o ? a + T(m) + 1 : a);
        };
    })();
    function I(e, t) {
        var i,
            r,
            s,
            o,
            u,
            d = 0,
            f = 0,
            _ = e.constructor,
            p = _.precision;
        if (T(e) > 16) throw Error(l + T(e));
        if (!e.s) return new _(n);
        for (null == t ? ((a = !1), (u = p)) : (u = t), o = new _(0.03125); e.abs().gte(0.1); ) (e = e.times(o)), (f += 5);
        for (u += ((Math.log(c(2, f)) / Math.LN10) * 2 + 5) | 0, i = r = s = new _(n), _.precision = u; ; ) {
            if (((r = C(r.times(e), u)), (i = i.times(++d)), v((o = s.plus(y(r, i, u))).d).slice(0, u) === v(s.d).slice(0, u))) {
                for (; f--; ) s = C(s.times(s), u);
                return (_.precision = p), null == t ? ((a = !0), C(s, p)) : s;
            }
            s = o;
        }
    }
    function T(e) {
        for (var t = e.e * _, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
    }
    function b(e, t, n) {
        if (t > e.LN10.sd()) throw ((a = !0), n && (e.precision = n), Error(s + 'LN10 precision limit exceeded'));
        return C(new e(e.LN10), t);
    }
    function S(e) {
        for (var t = ''; e--; ) t += '0';
        return t;
    }
    function A(e, t) {
        var i,
            r,
            o,
            l,
            u,
            c,
            d,
            f,
            _,
            p = 1,
            h = 10,
            m = e,
            g = m.d,
            E = m.constructor,
            I = E.precision;
        if (m.s < 1) throw Error(s + (m.s ? 'NaN' : '-Infinity'));
        if (m.eq(n)) return new E(0);
        if ((null == t ? ((a = !1), (f = I)) : (f = t), m.eq(10))) return null == t && (a = !0), b(E, f);
        if (((f += h), (E.precision = f), (r = (i = v(g)).charAt(0)), !(1500000000000000 > Math.abs((l = T(m)))))) return (d = b(E, f + 2, I).times(l + '')), (m = A(new E(r + '.' + i.slice(1)), f - h).plus(d)), (E.precision = I), null == t ? ((a = !0), C(m, I)) : m;
        for (; (r < 7 && 1 != r) || (1 == r && i.charAt(1) > 3); ) (r = (i = v((m = m.times(e)).d)).charAt(0)), p++;
        for (l = T(m), r > 1 ? ((m = new E('0.' + i)), l++) : (m = new E(r + '.' + i.slice(1))), c = u = m = y(m.minus(n), m.plus(n), f), _ = C(m.times(m), f), o = 3; ; ) {
            if (((u = C(u.times(_), f)), v((d = c.plus(y(u, new E(o), f))).d).slice(0, f) === v(c.d).slice(0, f))) return (c = c.times(2)), 0 !== l && (c = c.plus(b(E, f + 2, I).times(l + ''))), (c = y(c, new E(p), f)), (E.precision = I), null == t ? ((a = !0), C(c, I)) : c;
            (c = d), (o += 2);
        }
    }
    function N(e, t) {
        var n, i, r;
        for ((n = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), (n += +t.slice(i + 1)), (t = t.substring(0, i))) : n < 0 && (n = t.length), i = 0; 48 === t.charCodeAt(i); ) ++i;
        for (r = t.length; 48 === t.charCodeAt(r - 1); ) --r;
        if ((t = t.slice(i, r))) {
            if (((r -= i), (n = n - i - 1), (e.e = u(n / _)), (e.d = []), (i = (n + 1) % _), n < 0 && (i += _), i < r)) {
                for (i && e.d.push(+t.slice(0, i)), r -= _; i < r; ) e.d.push(+t.slice(i, (i += _)));
                i = _ - (t = t.slice(i)).length;
            } else i -= r;
            for (; i--; ) t += '0';
            if ((e.d.push(+t), a && (e.e > h || e.e < -h))) throw Error(l + n);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function C(e, t, n) {
        var i,
            r,
            s,
            o,
            d,
            p,
            m,
            g,
            E = e.d;
        for (o = 1, s = E[0]; s >= 10; s /= 10) o++;
        if ((i = t - o) < 0) (i += _), (r = t), (m = E[(g = 0)]);
        else {
            if ((g = Math.ceil((i + 1) / _)) >= (s = E.length)) return e;
            for (o = 1, m = s = E[g]; s >= 10; s /= 10) o++;
            (i %= _), (r = i - _ + o);
        }
        if ((void 0 !== n && ((d = (m / (s = c(10, o - r - 1))) % 10 | 0), (p = t < 0 || void 0 !== E[g + 1] || m % s), (p = n < 4 ? (d || p) && (0 == n || n == (e.s < 0 ? 3 : 2)) : d > 5 || (5 == d && (4 == n || p || (6 == n && (i > 0 ? (r > 0 ? m / c(10, o - r) : 0) : E[g - 1]) % 10 & 1) || n == (e.s < 0 ? 8 : 7))))), t < 1 || !E[0])) return p ? ((s = T(e)), (E.length = 1), (t = t - s - 1), (E[0] = c(10, (_ - (t % _)) % _)), (e.e = u(-t / _) || 0)) : ((E.length = 1), (E[0] = e.e = e.s = 0)), e;
        if ((0 == i ? ((E.length = g), (s = 1), g--) : ((E.length = g + 1), (s = c(10, _ - i)), (E[g] = r > 0 ? ((m / c(10, o - r)) % c(10, r) | 0) * s : 0)), p))
            for (;;) {
                if (0 == g) {
                    (E[0] += s) == f && ((E[0] = 1), ++e.e);
                    break;
                }
                if (((E[g] += s), E[g] != f)) break;
                (E[g--] = 0), (s = 1);
            }
        for (i = E.length; 0 === E[--i]; ) E.pop();
        if (a && (e.e > h || e.e < -h)) throw Error(l + T(e));
        return e;
    }
    function R(e, t) {
        var n,
            i,
            r,
            s,
            o,
            l,
            u,
            c,
            d,
            p,
            h = e.constructor,
            m = h.precision;
        if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), a ? C(t, m) : t;
        if (((u = e.d), (p = t.d), (i = t.e), (c = e.e), (u = u.slice()), (o = c - i))) {
            for ((d = o < 0) ? ((n = u), (o = -o), (l = p.length)) : ((n = p), (i = c), (l = u.length)), o > (r = Math.max(Math.ceil(m / _), l) + 2) && ((o = r), (n.length = 1)), n.reverse(), r = o; r--; ) n.push(0);
            n.reverse();
        } else {
            for ((d = (r = u.length) < (l = p.length)) && (l = r), r = 0; r < l; r++)
                if (u[r] != p[r]) {
                    d = u[r] < p[r];
                    break;
                }
            o = 0;
        }
        for (d && ((n = u), (u = p), (p = n), (t.s = -t.s)), l = u.length, r = p.length - l; r > 0; --r) u[l++] = 0;
        for (r = p.length; r > o; ) {
            if (u[--r] < p[r]) {
                for (s = r; s && 0 === u[--s]; ) u[s] = f - 1;
                --u[s], (u[r] += f);
            }
            u[r] -= p[r];
        }
        for (; 0 === u[--l]; ) u.pop();
        for (; 0 === u[0]; u.shift()) --i;
        return u[0] ? ((t.d = u), (t.e = i), a ? C(t, m) : t) : new h(0);
    }
    function O(e, t, n) {
        var i,
            r = T(e),
            a = v(e.d),
            s = a.length;
        return t ? (n && (i = n - s) > 0 ? (a = a.charAt(0) + '.' + a.slice(1) + S(i)) : s > 1 && (a = a.charAt(0) + '.' + a.slice(1)), (a = a + (r < 0 ? 'e' : 'e+') + r)) : r < 0 ? ((a = '0.' + S(-r - 1) + a), n && (i = n - s) > 0 && (a += S(i))) : r >= s ? ((a += S(r + 1 - s)), n && (i = n - r - 1) > 0 && (a = a + '.' + S(i))) : ((i = r + 1) < s && (a = a.slice(0, i) + '.' + a.slice(i)), n && (i = n - s) > 0 && (r + 1 === s && (a += '.'), (a += S(i)))), e.s < 0 ? '-' + a : a;
    }
    function D(e, t) {
        if (e.length > t) return (e.length = t), !0;
    }
    function L(e) {
        var t, n, i;
        function r(e) {
            var t = this;
            if (!(t instanceof r)) return new r(e);
            if (((t.constructor = r), e instanceof r)) {
                (t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ('number' == typeof e) {
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
                return N(t, e.toString());
            }
            if ('string' != typeof e) throw Error(o + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1), d.test(e))) N(t, e);
            else throw Error(o + e);
        }
        if (((r.prototype = m), (r.ROUND_UP = 0), (r.ROUND_DOWN = 1), (r.ROUND_CEIL = 2), (r.ROUND_FLOOR = 3), (r.ROUND_HALF_UP = 4), (r.ROUND_HALF_DOWN = 5), (r.ROUND_HALF_EVEN = 6), (r.ROUND_HALF_CEIL = 7), (r.ROUND_HALF_FLOOR = 8), (r.clone = L), (r.config = r.set = x), void 0 === e && (e = {}), e)) for (t = 0, i = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10']; t < i.length; ) e.hasOwnProperty((n = i[t++])) || (e[n] = this[n]);
        return r.config(e), r;
    }
    function x(e) {
        if (!e || 'object' != typeof e) throw Error(s + 'Object expected');
        var t,
            n,
            r,
            a = ['precision', 1, i, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0, 'toExpPos', 0, 1 / 0];
        for (t = 0; t < a.length; t += 3)
            if (void 0 !== (r = e[(n = a[t])])) {
                if (u(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
                else throw Error(o + n + ': ' + r);
            }
        if (void 0 !== (r = e[(n = 'LN10')])) {
            if (r == Math.LN10) this[n] = new this(r);
            else throw Error(o + n + ': ' + r);
        }
        return this;
    }
    ((r = L(r)).default = r.Decimal = r),
        (n = new r(1)),
        'function' == typeof define && define.amd
            ? define(function () {
                  return r;
              })
            : e.exports
              ? (e.exports = r)
              : (t || (t = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), (t.Decimal = r));
})(this);
