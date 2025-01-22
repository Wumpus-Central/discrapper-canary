!(function (n) {
    var r,
        i = 1000000000,
        a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        o = !0,
        s = '[DecimalError] ',
        l = s + 'Invalid argument: ',
        u = s + 'Exponent out of range: ',
        c = Math.floor,
        d = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        p = 10000000,
        h = 7,
        _ = 9007199254740991,
        m = c(1286742750677284.5),
        g = {};
    function E(e, n) {
        var r,
            i,
            a,
            s,
            l,
            u,
            c,
            d,
            f = e.constructor,
            _ = f.precision;
        if (!e.s || !n.s) return !n.s && (n = new f(e)), o ? R(n, _) : n;
        if (((c = e.d), (d = n.d), (l = e.e), (a = n.e), (c = c.slice()), (s = l - a))) {
            for (s < 0 ? ((i = c), (s = -s), (u = d.length)) : ((i = d), (a = l), (u = c.length)), s > (u = (l = Math.ceil(_ / h)) > u ? l + 1 : u + 1) && ((s = u), (i.length = 1)), i.reverse(); s--; ) i.push(0);
            i.reverse();
        }
        for (u = c.length, u - (s = d.length) < 0 && ((s = u), (i = d), (d = c), (c = i)), r = 0; s; ) (r = ((c[--s] = c[s] + d[s] + r) / p) | 0), (c[s] %= p);
        for (r && (c.unshift(r), ++a), u = c.length; 0 == c[--u]; ) c.pop();
        return (n.d = c), (n.e = a), o ? R(n, _) : n;
    }
    function v(e, n, r) {
        if (e !== ~~e || e < n || e > r) throw Error(l + e);
    }
    function y(e) {
        var n,
            r,
            i,
            a = e.length - 1,
            o = '',
            s = e[0];
        if (a > 0) {
            for (o += s, n = 1; n < a; n++) (r = h - (i = e[n] + '').length) && (o += A(r)), (o += i);
            (r = h - (i = (s = e[n]) + '').length) && (o += A(r));
        } else if (0 === s) return '0';
        for (; s % 10 == 0; ) s /= 10;
        return o + s;
    }
    (g.absoluteValue = g.abs =
        function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
        }),
        (g.comparedTo = g.cmp =
            function (e) {
                var n,
                    r,
                    i,
                    a,
                    o = this;
                if (((e = new o.constructor(e)), o.s !== e.s)) return o.s || -e.s;
                if (o.e !== e.e) return (o.e > e.e) ^ (o.s < 0) ? 1 : -1;
                for (n = 0, i = o.d.length, r = i < (a = e.d.length) ? i : a; n < r; ++n) if (o.d[n] !== e.d[n]) return (o.d[n] > e.d[n]) ^ (o.s < 0) ? 1 : -1;
                return i === a ? 0 : (i > a) ^ (o.s < 0) ? 1 : -1;
            }),
        (g.decimalPlaces = g.dp =
            function () {
                var e = this,
                    n = e.d.length - 1,
                    r = (n - e.e) * h;
                if ((n = e.d[n])) for (; n % 10 == 0; n /= 10) r--;
                return r < 0 ? 0 : r;
            }),
        (g.dividedBy = g.div =
            function (e) {
                return b(this, new this.constructor(e));
            }),
        (g.dividedToIntegerBy = g.idiv =
            function (e) {
                var n = this,
                    r = n.constructor;
                return R(b(n, new r(e), 0, 1), r.precision);
            }),
        (g.equals = g.eq =
            function (e) {
                return !this.cmp(e);
            }),
        (g.exponent = function () {
            return T(this);
        }),
        (g.greaterThan = g.gt =
            function (e) {
                return this.cmp(e) > 0;
            }),
        (g.greaterThanOrEqualTo = g.gte =
            function (e) {
                return this.cmp(e) >= 0;
            }),
        (g.isInteger = g.isint =
            function () {
                return this.e > this.d.length - 2;
            }),
        (g.isNegative = g.isneg =
            function () {
                return this.s < 0;
            }),
        (g.isPositive = g.ispos =
            function () {
                return this.s > 0;
            }),
        (g.isZero = function () {
            return 0 === this.s;
        }),
        (g.lessThan = g.lt =
            function (e) {
                return 0 > this.cmp(e);
            }),
        (g.lessThanOrEqualTo = g.lte =
            function (e) {
                return 1 > this.cmp(e);
            }),
        (g.logarithm = g.log =
            function (e) {
                var n,
                    i = this,
                    a = i.constructor,
                    l = a.precision,
                    u = l + 5;
                if (void 0 === e) e = new a(10);
                else if ((e = new a(e)).s < 1 || e.eq(r)) throw Error(s + 'NaN');
                if (i.s < 1) throw Error(s + (i.s ? 'NaN' : '-Infinity'));
                return i.eq(r) ? new a(0) : ((o = !1), (n = b(C(i, u), C(e, u), u)), (o = !0), R(n, l));
            }),
        (g.minus = g.sub =
            function (e) {
                var n = this;
                return (e = new n.constructor(e)), n.s == e.s ? O(n, e) : E(n, ((e.s = -e.s), e));
            }),
        (g.modulo = g.mod =
            function (e) {
                var n,
                    r = this,
                    i = r.constructor,
                    a = i.precision;
                if (!(e = new i(e)).s) throw Error(s + 'NaN');
                return r.s ? ((o = !1), (n = b(r, e, 0, 1).times(e)), (o = !0), r.minus(n)) : R(new i(r), a);
            }),
        (g.naturalExponential = g.exp =
            function () {
                return I(this);
            }),
        (g.naturalLogarithm = g.ln =
            function () {
                return C(this);
            }),
        (g.negated = g.neg =
            function () {
                var e = new this.constructor(this);
                return (e.s = -e.s || 0), e;
            }),
        (g.plus = g.add =
            function (e) {
                var n = this;
                return (e = new n.constructor(e)), n.s == e.s ? E(n, e) : O(n, ((e.s = -e.s), e));
            }),
        (g.precision = g.sd =
            function (e) {
                var n,
                    r,
                    i,
                    a = this;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(l + e);
                if (((n = T(a) + 1), (r = (i = a.d.length - 1) * h + 1), (i = a.d[i]))) {
                    for (; i % 10 == 0; i /= 10) r--;
                    for (i = a.d[0]; i >= 10; i /= 10) r++;
                }
                return e && n > r ? n : r;
            }),
        (g.squareRoot = g.sqrt =
            function () {
                var e,
                    n,
                    r,
                    i,
                    a,
                    l,
                    u,
                    d = this,
                    f = d.constructor;
                if (d.s < 1) {
                    if (!d.s) return new f(0);
                    throw Error(s + 'NaN');
                }
                for (e = T(d), o = !1, 0 == (a = Math.sqrt(+d)) || a == 1 / 0 ? (((n = y(d.d)).length + e) % 2 == 0 && (n += '0'), (a = Math.sqrt(n)), (e = c((e + 1) / 2) - (e < 0 || e % 2)), (i = new f((n = a == 1 / 0 ? '1e' + e : (n = a.toExponential()).slice(0, n.indexOf('e') + 1) + e)))) : (i = new f(a.toString())), a = u = (r = f.precision) + 3; ; )
                    if (((i = (l = i).plus(b(d, l, u + 2)).times(0.5)), y(l.d).slice(0, u) === (n = y(i.d)).slice(0, u))) {
                        if (((n = n.slice(u - 3, u + 1)), a == u && '4999' == n)) {
                            if ((R(l, r + 1, 0), l.times(l).eq(d))) {
                                i = l;
                                break;
                            }
                        } else if ('9999' != n) break;
                        u += 4;
                    }
                return (o = !0), R(i, r);
            }),
        (g.times = g.mul =
            function (e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f = this,
                    h = f.constructor,
                    _ = f.d,
                    m = (e = new h(e)).d;
                if (!f.s || !e.s) return new h(0);
                for (e.s *= f.s, r = f.e + e.e, c = _.length, c < (d = m.length) && ((s = _), (_ = m), (m = s), (l = c), (c = d), (d = l)), s = [], i = l = c + d; i--; ) s.push(0);
                for (i = d; --i >= 0; ) {
                    for (n = 0, a = c + i; a > i; ) (u = s[a] + m[i] * _[a - i - 1] + n), (s[a--] = u % p | 0), (n = (u / p) | 0);
                    s[a] = (s[a] + n) % p | 0;
                }
                for (; !s[--l]; ) s.pop();
                return n ? ++r : s.shift(), (e.d = s), (e.e = r), o ? R(e, h.precision) : e;
            }),
        (g.toDecimalPlaces = g.todp =
            function (e, n) {
                var r = this,
                    a = r.constructor;
                return ((r = new a(r)), void 0 === e) ? r : (v(e, 0, i), void 0 === n ? (n = a.rounding) : v(n, 0, 8), R(r, e + T(r) + 1, n));
            }),
        (g.toExponential = function (e, n) {
            var r,
                a = this,
                o = a.constructor;
            return void 0 === e ? (r = D(a, !0)) : (v(e, 0, i), void 0 === n ? (n = o.rounding) : v(n, 0, 8), (r = D((a = R(new o(a), e + 1, n)), !0, e + 1))), r;
        }),
        (g.toFixed = function (e, n) {
            var r,
                a,
                o = this,
                s = o.constructor;
            return void 0 === e ? D(o) : (v(e, 0, i), void 0 === n ? (n = s.rounding) : v(n, 0, 8), (r = D((a = R(new s(o), e + T(o) + 1, n)).abs(), !1, e + T(a) + 1)), o.isneg() && !o.isZero() ? '-' + r : r);
        }),
        (g.toInteger = g.toint =
            function () {
                var e = this,
                    n = e.constructor;
                return R(new n(e), T(e) + 1, n.rounding);
            }),
        (g.toNumber = function () {
            return +this;
        }),
        (g.toPower = g.pow =
            function (e) {
                var n,
                    i,
                    a,
                    l,
                    u,
                    d,
                    f = this,
                    p = f.constructor,
                    m = 12,
                    g = +(e = new p(e));
                if (!e.s) return new p(r);
                if (!(f = new p(f)).s) {
                    if (e.s < 1) throw Error(s + 'Infinity');
                    return f;
                }
                if (f.eq(r)) return f;
                if (((a = p.precision), e.eq(r))) return R(f, a);
                if (((n = e.e), (d = n >= (i = e.d.length - 1)), (u = f.s), d)) {
                    if ((i = g < 0 ? -g : g) <= _) {
                        for (l = new p(r), n = Math.ceil(a / h + 4), o = !1; i % 2 && x((l = l.times(f)).d, n), 0 !== (i = c(i / 2)); ) {
                            x((f = f.times(f)).d, n);
                        }
                        return (o = !0), e.s < 0 ? new p(r).div(l) : R(l, a);
                    }
                } else if (u < 0) throw Error(s + 'NaN');
                return (u = u < 0 && 1 & e.d[Math.max(n, i)] ? -1 : 1), (f.s = 1), (o = !1), (l = e.times(C(f, a + m))), (o = !0), ((l = I(l)).s = u), l;
            }),
        (g.toPrecision = function (e, n) {
            var r,
                a,
                o = this,
                s = o.constructor;
            return void 0 === e ? ((r = T(o)), (a = D(o, r <= s.toExpNeg || r >= s.toExpPos))) : (v(e, 1, i), void 0 === n ? (n = s.rounding) : v(n, 0, 8), (r = T((o = R(new s(o), e, n)))), (a = D(o, e <= r || r <= s.toExpNeg, e))), a;
        }),
        (g.toSignificantDigits = g.tosd =
            function (e, n) {
                var r = this,
                    a = r.constructor;
                return void 0 === e ? ((e = a.precision), (n = a.rounding)) : (v(e, 1, i), void 0 === n ? (n = a.rounding) : v(n, 0, 8)), R(new a(r), e, n);
            }),
        (g.toString =
            g.valueOf =
            g.val =
            g.toJSON =
                function () {
                    var e = this,
                        n = T(e),
                        r = e.constructor;
                    return D(e, n <= r.toExpNeg || n >= r.toExpPos);
                });
    var b = (function () {
        function e(e, n) {
            var r,
                i = 0,
                a = e.length;
            for (e = e.slice(); a--; ) (r = e[a] * n + i), (e[a] = r % p | 0), (i = (r / p) | 0);
            return i && e.unshift(i), e;
        }
        function n(e, n, r, i) {
            var a, o;
            if (r != i) o = r > i ? 1 : -1;
            else
                for (a = o = 0; a < r; a++)
                    if (e[a] != n[a]) {
                        o = e[a] > n[a] ? 1 : -1;
                        break;
                    }
            return o;
        }
        function r(e, n, r) {
            for (var i = 0; r--; ) (e[r] -= i), (i = e[r] < n[r] ? 1 : 0), (e[r] = i * p + e[r] - n[r]);
            for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, a, o, l) {
            var u,
                c,
                d,
                f,
                _,
                m,
                g,
                E,
                v,
                y,
                b,
                I,
                S,
                A,
                C,
                N,
                O,
                D,
                x = i.constructor,
                L = i.s == a.s ? 1 : -1,
                w = i.d,
                P = a.d;
            if (!i.s) return new x(i);
            if (!a.s) throw Error(s + 'Division by zero');
            for (d = 0, c = i.e - a.e, O = P.length, C = w.length, E = (g = new x(L)).d = []; P[d] == (w[d] || 0); ) ++d;
            if ((P[d] > (w[d] || 0) && --c, (I = null == o ? (o = x.precision) : l ? o + (T(i) - T(a)) + 1 : o) < 0)) return new x(0);
            if (((I = (I / h + 2) | 0), (d = 0), 1 == O)) for (f = 0, P = P[0], I++; (d < C || f) && I--; d++) (S = f * p + (w[d] || 0)), (E[d] = (S / P) | 0), (f = S % P | 0);
            else {
                for ((f = (p / (P[0] + 1)) | 0) > 1 && ((P = e(P, f)), (w = e(w, f)), (O = P.length), (C = w.length)), A = O, y = (v = w.slice(0, O)).length; y < O; ) v[y++] = 0;
                (D = P.slice()).unshift(0), (N = P[0]), P[1] >= p / 2 && ++N;
                do (f = 0), (u = n(P, v, O, y)) < 0 ? ((b = v[0]), O != y && (b = b * p + (v[1] || 0)), (f = (b / N) | 0) > 1 ? (f >= p && (f = p - 1), (m = (_ = e(P, f)).length), (y = v.length), 1 == (u = n(_, v, m, y)) && (f--, r(_, O < m ? D : P, m))) : (0 == f && (u = f = 1), (_ = P.slice())), (m = _.length) < y && _.unshift(0), r(v, _, y), -1 == u && ((y = v.length), (u = n(P, v, O, y)) < 1 && (f++, r(v, O < y ? D : P, y))), (y = v.length)) : 0 === u && (f++, (v = [0])), (E[d++] = f), u && v[0] ? (v[y++] = w[A] || 0) : ((v = [w[A]]), (y = 1));
                while ((A++ < C || void 0 !== v[0]) && I--);
            }
            return !E[0] && E.shift(), (g.e = c), R(g, l ? o + T(g) + 1 : o);
        };
    })();
    function I(e, n) {
        var i,
            a,
            s,
            l,
            c,
            f = 0,
            p = 0,
            h = e.constructor,
            _ = h.precision;
        if (T(e) > 16) throw Error(u + T(e));
        if (!e.s) return new h(r);
        for (null == n ? ((o = !1), (c = _)) : (c = n), l = new h(0.03125); e.abs().gte(0.1); ) (e = e.times(l)), (p += 5);
        for (c += ((Math.log(d(2, p)) / Math.LN10) * 2 + 5) | 0, i = a = s = new h(r), h.precision = c; ; ) {
            if (((a = R(a.times(e), c)), (i = i.times(++f)), y((l = s.plus(b(a, i, c))).d).slice(0, c) === y(s.d).slice(0, c))) {
                for (; p--; ) s = R(s.times(s), c);
                return (h.precision = _), null == n ? ((o = !0), R(s, _)) : s;
            }
            s = l;
        }
    }
    function T(e) {
        for (var n = e.e * h, r = e.d[0]; r >= 10; r /= 10) n++;
        return n;
    }
    function S(e, n, r) {
        if (n > e.LN10.sd()) throw ((o = !0), r && (e.precision = r), Error(s + 'LN10 precision limit exceeded'));
        return R(new e(e.LN10), n);
    }
    function A(e) {
        for (var n = ''; e--; ) n += '0';
        return n;
    }
    function C(e, n) {
        var i,
            a,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            _ = 1,
            m = 10,
            g = e,
            E = g.d,
            v = g.constructor,
            I = v.precision;
        if (g.s < 1) throw Error(s + (g.s ? 'NaN' : '-Infinity'));
        if (g.eq(r)) return new v(0);
        if ((null == n ? ((o = !1), (p = I)) : (p = n), g.eq(10))) return null == n && (o = !0), S(v, p);
        if (((p += m), (v.precision = p), (a = (i = y(E)).charAt(0)), !(1500000000000000 > Math.abs((u = T(g)))))) return (f = S(v, p + 2, I).times(u + '')), (g = C(new v(a + '.' + i.slice(1)), p - m).plus(f)), (v.precision = I), null == n ? ((o = !0), R(g, I)) : g;
        for (; (a < 7 && 1 != a) || (1 == a && i.charAt(1) > 3); ) (a = (i = y((g = g.times(e)).d)).charAt(0)), _++;
        (u = T(g)), a > 1 ? ((g = new v('0.' + i)), u++) : (g = new v(a + '.' + i.slice(1)));
        for (d = c = g = b(g.minus(r), g.plus(r), p), h = R(g.times(g), p), l = 3; ; ) {
            if (((c = R(c.times(h), p)), y((f = d.plus(b(c, new v(l), p))).d).slice(0, p) === y(d.d).slice(0, p))) return (d = d.times(2)), 0 !== u && (d = d.plus(S(v, p + 2, I).times(u + ''))), (d = b(d, new v(_), p)), (v.precision = I), null == n ? ((o = !0), R(d, I)) : d;
            (d = f), (l += 2);
        }
    }
    function N(e, n) {
        var r, i, a;
        for ((r = n.indexOf('.')) > -1 && (n = n.replace('.', '')), (i = n.search(/e/i)) > 0 ? (r < 0 && (r = i), (r += +n.slice(i + 1)), (n = n.substring(0, i))) : r < 0 && (r = n.length), i = 0; 48 === n.charCodeAt(i); ) ++i;
        for (a = n.length; 48 === n.charCodeAt(a - 1); ) --a;
        if ((n = n.slice(i, a))) {
            if (((a -= i), (r = r - i - 1), (e.e = c(r / h)), (e.d = []), (i = (r + 1) % h), r < 0 && (i += h), i < a)) {
                for (i && e.d.push(+n.slice(0, i)), a -= h; i < a; ) e.d.push(+n.slice(i, (i += h)));
                i = h - (n = n.slice(i)).length;
            } else i -= a;
            for (; i--; ) n += '0';
            if ((e.d.push(+n), o && (e.e > m || e.e < -m))) throw Error(u + r);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
    }
    function R(e, n, r) {
        var i,
            a,
            s,
            l,
            f,
            _,
            g,
            E,
            v = e.d;
        for (l = 1, s = v[0]; s >= 10; s /= 10) l++;
        if ((i = n - l) < 0) (i += h), (a = n), (g = v[(E = 0)]);
        else {
            if ((E = Math.ceil((i + 1) / h)) >= (s = v.length)) return e;
            for (l = 1, g = s = v[E]; s >= 10; s /= 10) l++;
            (i %= h), (a = i - h + l);
        }
        if ((void 0 !== r && ((f = (g / (s = d(10, l - a - 1))) % 10 | 0), (_ = n < 0 || void 0 !== v[E + 1] || g % s), (_ = r < 4 ? (f || _) && (0 == r || r == (e.s < 0 ? 3 : 2)) : f > 5 || (5 == f && (4 == r || _ || (6 == r && (i > 0 ? (a > 0 ? g / d(10, l - a) : 0) : v[E - 1]) % 10 & 1) || r == (e.s < 0 ? 8 : 7))))), n < 1 || !v[0])) return _ ? ((s = T(e)), (v.length = 1), (n = n - s - 1), (v[0] = d(10, (h - (n % h)) % h)), (e.e = c(-n / h) || 0)) : ((v.length = 1), (v[0] = e.e = e.s = 0)), e;
        if ((0 == i ? ((v.length = E), (s = 1), E--) : ((v.length = E + 1), (s = d(10, h - i)), (v[E] = a > 0 ? ((g / d(10, l - a)) % d(10, a) | 0) * s : 0)), _))
            for (;;) {
                if (0 == E) {
                    (v[0] += s) == p && ((v[0] = 1), ++e.e);
                    break;
                }
                if (((v[E] += s), v[E] != p)) break;
                (v[E--] = 0), (s = 1);
            }
        for (i = v.length; 0 === v[--i]; ) v.pop();
        if (o && (e.e > m || e.e < -m)) throw Error(u + T(e));
        return e;
    }
    function O(e, n) {
        var r,
            i,
            a,
            s,
            l,
            u,
            c,
            d,
            f,
            _,
            m = e.constructor,
            g = m.precision;
        if (!e.s || !n.s) return n.s ? (n.s = -n.s) : (n = new m(e)), o ? R(n, g) : n;
        if (((c = e.d), (_ = n.d), (i = n.e), (d = e.e), (c = c.slice()), (l = d - i))) {
            for ((f = l < 0) ? ((r = c), (l = -l), (u = _.length)) : ((r = _), (i = d), (u = c.length)), l > (a = Math.max(Math.ceil(g / h), u) + 2) && ((l = a), (r.length = 1)), r.reverse(), a = l; a--; ) r.push(0);
            r.reverse();
        } else {
            for (a = c.length, (f = a < (u = _.length)) && (u = a), a = 0; a < u; a++)
                if (c[a] != _[a]) {
                    f = c[a] < _[a];
                    break;
                }
            l = 0;
        }
        for (f && ((r = c), (c = _), (_ = r), (n.s = -n.s)), u = c.length, a = _.length - u; a > 0; --a) c[u++] = 0;
        for (a = _.length; a > l; ) {
            if (c[--a] < _[a]) {
                for (s = a; s && 0 === c[--s]; ) c[s] = p - 1;
                --c[s], (c[a] += p);
            }
            c[a] -= _[a];
        }
        for (; 0 === c[--u]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --i;
        return c[0] ? ((n.d = c), (n.e = i), o ? R(n, g) : n) : new m(0);
    }
    function D(e, n, r) {
        var i,
            a = T(e),
            o = y(e.d),
            s = o.length;
        return n ? (r && (i = r - s) > 0 ? (o = o.charAt(0) + '.' + o.slice(1) + A(i)) : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)), (o = o + (a < 0 ? 'e' : 'e+') + a)) : a < 0 ? ((o = '0.' + A(-a - 1) + o), r && (i = r - s) > 0 && (o += A(i))) : a >= s ? ((o += A(a + 1 - s)), r && (i = r - a - 1) > 0 && (o = o + '.' + A(i))) : ((i = a + 1) < s && (o = o.slice(0, i) + '.' + o.slice(i)), r && (i = r - s) > 0 && (a + 1 === s && (o += '.'), (o += A(i)))), e.s < 0 ? '-' + o : o;
    }
    function x(e, n) {
        if (e.length > n) return (e.length = n), !0;
    }
    function L(e) {
        var n, r, i;
        function a(e) {
            var n = this;
            if (!(n instanceof a)) return new a(e);
            if (((n.constructor = a), e instanceof a)) {
                (n.s = e.s), (n.e = e.e), (n.d = (e = e.d) ? e.slice() : e);
                return;
            }
            if ('number' == typeof e) {
                if (0 * e != 0) throw Error(l + e);
                if (e > 0) n.s = 1;
                else if (e < 0) (e = -e), (n.s = -1);
                else {
                    (n.s = 0), (n.e = 0), (n.d = [0]);
                    return;
                }
                if (e === ~~e && e < 10000000) {
                    (n.e = 0), (n.d = [e]);
                    return;
                }
                return N(n, e.toString());
            }
            if ('string' != typeof e) throw Error(l + e);
            if ((45 === e.charCodeAt(0) ? ((e = e.slice(1)), (n.s = -1)) : (n.s = 1), f.test(e))) N(n, e);
            else throw Error(l + e);
        }
        if (((a.prototype = g), (a.ROUND_UP = 0), (a.ROUND_DOWN = 1), (a.ROUND_CEIL = 2), (a.ROUND_FLOOR = 3), (a.ROUND_HALF_UP = 4), (a.ROUND_HALF_DOWN = 5), (a.ROUND_HALF_EVEN = 6), (a.ROUND_HALF_CEIL = 7), (a.ROUND_HALF_FLOOR = 8), (a.clone = L), (a.config = a.set = w), void 0 === e && (e = {}), e)) for (n = 0, i = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10']; n < i.length; ) !e.hasOwnProperty((r = i[n++])) && (e[r] = this[r]);
        return a.config(e), a;
    }
    function w(e) {
        if (!e || 'object' != typeof e) throw Error(s + 'Object expected');
        var n,
            r,
            a,
            o = ['precision', 1, i, 'rounding', 0, 8, 'toExpNeg', -Infinity, 0, 'toExpPos', 0, 1 / 0];
        for (n = 0; n < o.length; n += 3)
            if (void 0 !== (a = e[(r = o[n])])) {
                if (c(a) === a && a >= o[n + 1] && a <= o[n + 2]) this[r] = a;
                else throw Error(l + r + ': ' + a);
            }
        if (void 0 !== (a = e[(r = 'LN10')])) {
            if (a == Math.LN10) this[r] = new this(a);
            else throw Error(l + r + ': ' + a);
        }
        return this;
    }
    ((a = L(a)).default = a.Decimal = a),
        (r = new a(1)),
        'function' == typeof define && define.amd
            ? define(function () {
                  return a;
              })
            : e.exports
              ? (e.exports = a)
              : (!n && (n = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), (n.Decimal = a));
})(this);
