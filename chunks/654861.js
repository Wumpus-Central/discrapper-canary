e = n.nmd(e);
var r = (function (e) {
    var t = 10000000,
        n = 7,
        i = 9007199254740992,
        a = _(9007199254740992),
        o = '0123456789abcdefghijklmnopqrstuvwxyz',
        s = 'function' == typeof BigInt;
    function l(e, t, n, r) {
        return void 0 === e ? l[0] : void 0 !== t && (10 != +t || n) ? J(e, t, n, r) : ea(e);
    }
    function c(e, t) {
        (this.value = e), (this.sign = t), (this.isSmall = !1);
    }
    function u(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function d(e) {
        this.value = e;
    }
    function f(e) {
        return -i < e && e < i;
    }
    function _(e) {
        return e < 10000000 ? [e] : e < 100000000000000 ? [e % 10000000, Math.floor(e / 10000000)] : [e % 10000000, Math.floor(e / 10000000) % 10000000, Math.floor(e / 100000000000000)];
    }
    function p(e) {
        h(e);
        var n = e.length;
        if (n < 4 && 0 > k(e, a))
            switch (n) {
                case 0:
                    return 0;
                case 1:
                    return e[0];
                case 2:
                    return e[0] + e[1] * t;
                default:
                    return e[0] + (e[1] + e[2] * t) * t;
            }
        return e;
    }
    function h(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function m(e) {
        for (var t = Array(e), n = -1; ++n < e; ) t[n] = 0;
        return t;
    }
    function g(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function E(e, n) {
        var r,
            i,
            a = e.length,
            o = n.length,
            s = Array(a),
            l = 0,
            c = t;
        for (i = 0; i < o; i++) (l = +((r = e[i] + n[i] + l) >= c)), (s[i] = r - l * c);
        for (; i < a; ) (l = +((r = e[i] + l) === c)), (s[i++] = r - l * c);
        return l > 0 && s.push(l), s;
    }
    function b(e, t) {
        return e.length >= t.length ? E(e, t) : E(t, e);
    }
    function y(e, n) {
        var r,
            i,
            a = e.length,
            o = Array(a),
            s = t;
        for (i = 0; i < a; i++) (n = Math.floor((r = e[i] - s + n) / s)), (o[i] = r - n * s), (n += 1);
        for (; n > 0; ) (o[i++] = n % s), (n = Math.floor(n / s));
        return o;
    }
    function O(e, n) {
        var r,
            i,
            a = e.length,
            o = n.length,
            s = Array(a),
            l = 0,
            c = t;
        for (r = 0; r < o; r++) (i = e[r] - l - n[r]) < 0 ? ((i += c), (l = 1)) : (l = 0), (s[r] = i);
        for (r = o; r < a; r++) {
            if ((i = e[r] - l) < 0) i += c;
            else {
                s[r++] = i;
                break;
            }
            s[r] = i;
        }
        for (; r < a; r++) s[r] = e[r];
        return h(s), s;
    }
    function v(e, t, n) {
        var r;
        return (k(e, t) >= 0 ? (r = O(e, t)) : ((r = O(t, e)), (n = !n)), 'number' == typeof (r = p(r))) ? (n && (r = -r), new u(r)) : new c(r, n);
    }
    function I(e, n, r) {
        var i,
            a,
            o = e.length,
            s = Array(o),
            l = -n,
            d = t;
        for (i = 0; i < o; i++) (l = Math.floor((a = e[i] + l) / d)), (a %= d), (s[i] = a < 0 ? a + d : a);
        return 'number' == typeof (s = p(s)) ? (r && (s = -s), new u(s)) : new c(s, r);
    }
    function T(e, n) {
        var r,
            i,
            a,
            o,
            s = e.length,
            l = n.length,
            c = m(s + l),
            u = t;
        for (a = 0; a < s; ++a) {
            o = e[a];
            for (var d = 0; d < l; ++d) (i = Math.floor((r = o * n[d] + c[a + d]) / u)), (c[a + d] = r - i * u), (c[a + d + 1] += i);
        }
        return h(c), c;
    }
    function S(e, n) {
        var r,
            i,
            a = e.length,
            o = Array(a),
            s = t,
            l = 0;
        for (i = 0; i < a; i++) (l = Math.floor((r = e[i] * n + l) / s)), (o[i] = r - l * s);
        for (; l > 0; ) (o[i++] = l % s), (l = Math.floor(l / s));
        return o;
    }
    function A(e, t) {
        for (var n = []; t-- > 0; ) n.push(0);
        return n.concat(e);
    }
    function N(e, t) {
        var n = Math.max(e.length, t.length);
        if (n <= 30) return T(e, t);
        n = Math.ceil(n / 2);
        var r = e.slice(n),
            i = e.slice(0, n),
            a = t.slice(n),
            o = t.slice(0, n),
            s = N(i, o),
            l = N(r, a),
            c = N(b(i, r), b(o, a)),
            u = b(b(s, A(O(O(c, s), l), n)), A(l, 2 * n));
        return h(u), u;
    }
    function C(e, t) {
        return -0.012 * e - 0.012 * t + 0.000015 * e * t > 0;
    }
    function R(e, n, r) {
        return e < t ? new c(S(n, e), r) : new c(T(n, _(e)), r);
    }
    function P(e) {
        var n,
            r,
            i,
            a,
            o = e.length,
            s = m(o + o),
            l = t;
        for (i = 0; i < o; i++) {
            r = 0 - (a = e[i]) * a;
            for (var c = i; c < o; c++) (r = Math.floor((n = a * e[c] * 2 + s[i + c] + r) / l)), (s[i + c] = n - r * l);
            s[i + o] = r;
        }
        return h(s), s;
    }
    function w(e, n) {
        var r,
            i,
            a,
            o,
            s,
            l,
            c,
            u = e.length,
            d = n.length,
            f = t,
            _ = m(n.length),
            h = n[d - 1],
            g = Math.ceil(f / (2 * h)),
            E = S(e, g),
            b = S(n, g);
        for (E.length <= u && E.push(0), b.push(0), h = b[d - 1], i = u - d; i >= 0; i--) {
            for (r = f - 1, E[i + d] !== h && (r = Math.floor((E[i + d] * f + E[i + d - 1]) / h)), a = 0, o = 0, l = b.length, s = 0; s < l; s++) (a += r * b[s]), (c = Math.floor(a / f)), (o += E[i + s] - (a - c * f)), (a = c), o < 0 ? ((E[i + s] = o + f), (o = -1)) : ((E[i + s] = o), (o = 0));
            for (; 0 !== o; ) {
                for (r -= 1, a = 0, s = 0; s < l; s++) (a += E[i + s] - f + b[s]) < 0 ? ((E[i + s] = a + f), (a = 0)) : ((E[i + s] = a), (a = 1));
                o += a;
            }
            _[i] = r;
        }
        return (E = L(E, g)[0]), [p(_), p(E)];
    }
    function D(e, n) {
        for (var r, i, a, o, s, l = e.length, c = n.length, u = [], d = [], f = t; l; ) {
            if ((d.unshift(e[--l]), h(d), 0 > k(d, n))) {
                u.push(0);
                continue;
            }
            (i = d.length), (a = d[i - 1] * f + d[i - 2]), (o = n[c - 1] * f + n[c - 2]), i > c && (a = (a + 1) * f), (r = Math.ceil(a / o));
            do {
                if (0 >= k((s = S(n, r)), d)) break;
                r--;
            } while (r);
            u.push(r), (d = O(d, s));
        }
        return u.reverse(), [p(u), p(d)];
    }
    function L(e, n) {
        var r,
            i,
            a,
            o,
            s = e.length,
            l = m(s),
            c = t;
        for (a = 0, r = s - 1; r >= 0; --r) (i = g((o = a * c + e[r]) / n)), (a = o - i * n), (l[r] = 0 | i);
        return [l, 0 | a];
    }
    function x(e, n) {
        var r,
            i,
            a = ea(n);
        if (s) return [new d(e.value / a.value), new d(e.value % a.value)];
        var o = e.value,
            f = a.value;
        if (0 === f) throw Error('Cannot divide by zero');
        if (e.isSmall) return a.isSmall ? [new u(g(o / f)), new u(o % f)] : [l[0], e];
        if (a.isSmall) {
            if (1 === f) return [e, l[0]];
            if (-1 == f) return [e.negate(), l[0]];
            var h = Math.abs(f);
            if (h < t) {
                r = p((i = L(o, h))[0]);
                var m = i[1];
                return (e.sign && (m = -m), 'number' == typeof r) ? (e.sign !== a.sign && (r = -r), [new u(r), new u(m)]) : [new c(r, e.sign !== a.sign), new u(m)];
            }
            f = _(h);
        }
        var E = k(o, f);
        if (-1 === E) return [l[0], e];
        if (0 === E) return [l[e.sign === a.sign ? 1 : -1], l[0]];
        r = (i = o.length + f.length <= 200 ? w(o, f) : D(o, f))[0];
        var b = e.sign !== a.sign,
            y = i[1],
            O = e.sign;
        return 'number' == typeof r ? (b && (r = -r), (r = new u(r))) : (r = new c(r, b)), 'number' == typeof y ? (O && (y = -y), (y = new u(y))) : (y = new c(y, O)), [r, y];
    }
    function k(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var n = e.length - 1; n >= 0; n--) if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0;
    }
    function M(e) {
        var t = e.abs();
        return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)));
    }
    function j(e, t) {
        for (var n, i, a, o = e.prev(), s = o, l = 0; s.isEven(); ) (s = s.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((a = r(t[i]).modPow(s, e)).isUnit() || a.equals(o))) {
                for (n = l - 1; 0 != n && !(a = a.square().mod(e)).isUnit(); n--) if (a.equals(o)) continue t;
                return !1;
            }
        return !0;
    }
    (c.prototype = Object.create(l.prototype)),
        (u.prototype = Object.create(l.prototype)),
        (d.prototype = Object.create(l.prototype)),
        (c.prototype.add = function (e) {
            var t = ea(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? new c(y(n, Math.abs(r)), this.sign) : new c(b(n, r), this.sign);
        }),
        (c.prototype.plus = c.prototype.add),
        (u.prototype.add = function (e) {
            var t = ea(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.subtract(t.negate());
            var r = t.value;
            if (t.isSmall) {
                if (f(n + r)) return new u(n + r);
                r = _(Math.abs(r));
            }
            return new c(y(r, Math.abs(n)), n < 0);
        }),
        (u.prototype.plus = u.prototype.add),
        (d.prototype.add = function (e) {
            return new d(this.value + ea(e).value);
        }),
        (d.prototype.plus = d.prototype.add),
        (c.prototype.subtract = function (e) {
            var t = ea(e);
            if (this.sign !== t.sign) return this.add(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? I(n, Math.abs(r), this.sign) : v(n, r, this.sign);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (u.prototype.subtract = function (e) {
            var t = ea(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.add(t.negate());
            var r = t.value;
            return t.isSmall ? new u(n - r) : I(r, Math.abs(n), n >= 0);
        }),
        (u.prototype.minus = u.prototype.subtract),
        (d.prototype.subtract = function (e) {
            return new d(this.value - ea(e).value);
        }),
        (d.prototype.minus = d.prototype.subtract),
        (c.prototype.negate = function () {
            return new c(this.value, !this.sign);
        }),
        (u.prototype.negate = function () {
            var e = this.sign,
                t = new u(-this.value);
            return (t.sign = !e), t;
        }),
        (d.prototype.negate = function () {
            return new d(-this.value);
        }),
        (c.prototype.abs = function () {
            return new c(this.value, !1);
        }),
        (u.prototype.abs = function () {
            return new u(Math.abs(this.value));
        }),
        (d.prototype.abs = function () {
            return new d(this.value >= 0 ? this.value : -this.value);
        }),
        (c.prototype.multiply = function (e) {
            var n,
                r = ea(e),
                i = this.value,
                a = r.value,
                o = this.sign !== r.sign;
            if (r.isSmall) {
                if (0 === a) return l[0];
                if (1 === a) return this;
                if (-1 === a) return this.negate();
                if ((n = Math.abs(a)) < t) return new c(S(i, n), o);
                a = _(n);
            }
            return C(i.length, a.length) ? new c(N(i, a), o) : new c(T(i, a), o);
        }),
        (c.prototype.times = c.prototype.multiply),
        (u.prototype._multiplyBySmall = function (e) {
            return f(e.value * this.value) ? new u(e.value * this.value) : R(Math.abs(e.value), _(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (c.prototype._multiplyBySmall = function (e) {
            return 0 === e.value ? l[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : R(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (u.prototype.multiply = function (e) {
            return ea(e)._multiplyBySmall(this);
        }),
        (u.prototype.times = u.prototype.multiply),
        (d.prototype.multiply = function (e) {
            return new d(this.value * ea(e).value);
        }),
        (d.prototype.times = d.prototype.multiply),
        (c.prototype.square = function () {
            return new c(P(this.value), !1);
        }),
        (u.prototype.square = function () {
            var e = this.value * this.value;
            return f(e) ? new u(e) : new c(P(_(Math.abs(this.value))), !1);
        }),
        (d.prototype.square = function (e) {
            return new d(this.value * this.value);
        }),
        (c.prototype.divmod = function (e) {
            var t = x(this, e);
            return {
                quotient: t[0],
                remainder: t[1]
            };
        }),
        (d.prototype.divmod = u.prototype.divmod = c.prototype.divmod),
        (c.prototype.divide = function (e) {
            return x(this, e)[0];
        }),
        (d.prototype.over = d.prototype.divide =
            function (e) {
                return new d(this.value / ea(e).value);
            }),
        (u.prototype.over = u.prototype.divide = c.prototype.over = c.prototype.divide),
        (c.prototype.mod = function (e) {
            return x(this, e)[1];
        }),
        (d.prototype.mod = d.prototype.remainder =
            function (e) {
                return new d(this.value % ea(e).value);
            }),
        (u.prototype.remainder = u.prototype.mod = c.prototype.remainder = c.prototype.mod),
        (c.prototype.pow = function (e) {
            var t,
                n,
                r,
                i = ea(e),
                a = this.value,
                o = i.value;
            if (0 === o) return l[1];
            if (0 === a) return l[0];
            if (1 === a) return l[1];
            if (-1 === a) return i.isEven() ? l[1] : l[-1];
            if (i.sign) return l[0];
            if (!i.isSmall) throw Error('The exponent ' + i.toString() + ' is too large.');
            if (this.isSmall && f((t = Math.pow(a, o)))) return new u(g(t));
            for (n = this, r = l[1]; !0 & o && ((r = r.times(n)), --o), 0 !== o; ) (o /= 2), (n = n.square());
            return r;
        }),
        (u.prototype.pow = c.prototype.pow),
        (d.prototype.pow = function (e) {
            var t = ea(e),
                n = this.value,
                r = t.value,
                i = BigInt(0),
                a = BigInt(1),
                o = BigInt(2);
            if (r === i) return l[1];
            if (n === i) return l[0];
            if (n === a) return l[1];
            if (n === BigInt(-1)) return t.isEven() ? l[1] : l[-1];
            if (t.isNegative()) return new d(i);
            for (var s = this, c = l[1]; (r & a) === a && ((c = c.times(s)), --r), r !== i; ) (r /= o), (s = s.square());
            return c;
        }),
        (c.prototype.modPow = function (e, t) {
            if (((e = ea(e)), (t = ea(t)).isZero())) throw Error('Cannot take modPow with modulus 0');
            var n = l[1],
                r = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(l[-1])), (r = r.modInv(t))); e.isPositive(); ) {
                if (r.isZero()) return l[0];
                e.isOdd() && (n = n.multiply(r).mod(t)), (e = e.divide(2)), (r = r.square().mod(t));
            }
            return n;
        }),
        (d.prototype.modPow = u.prototype.modPow = c.prototype.modPow),
        (c.prototype.compareAbs = function (e) {
            var t = ea(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? 1 : k(n, r);
        }),
        (u.prototype.compareAbs = function (e) {
            var t = ea(e),
                n = Math.abs(this.value),
                r = t.value;
            return t.isSmall ? (n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1) : -1;
        }),
        (d.prototype.compareAbs = function (e) {
            var t = this.value,
                n = ea(e).value;
            return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1;
        }),
        (c.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = ea(e),
                n = this.value,
                r = t.value;
            return this.sign !== t.sign ? (t.sign ? 1 : -1) : t.isSmall ? (this.sign ? -1 : 1) : k(n, r) * (this.sign ? -1 : 1);
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (u.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = ea(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? (n == r ? 0 : n > r ? 1 : -1) : n < 0 !== t.sign ? (n < 0 ? -1 : 1) : n < 0 ? 1 : -1;
        }),
        (u.prototype.compareTo = u.prototype.compare),
        (d.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                n = ea(e).value;
            return t === n ? 0 : t > n ? 1 : -1;
        }),
        (d.prototype.compareTo = d.prototype.compare),
        (c.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (d.prototype.eq = d.prototype.equals = u.prototype.eq = u.prototype.equals = c.prototype.eq = c.prototype.equals),
        (c.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (d.prototype.neq = d.prototype.notEquals = u.prototype.neq = u.prototype.notEquals = c.prototype.neq = c.prototype.notEquals),
        (c.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (d.prototype.gt = d.prototype.greater = u.prototype.gt = u.prototype.greater = c.prototype.gt = c.prototype.greater),
        (c.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (d.prototype.lt = d.prototype.lesser = u.prototype.lt = u.prototype.lesser = c.prototype.lt = c.prototype.lesser),
        (c.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (d.prototype.geq = d.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals = c.prototype.geq = c.prototype.greaterOrEquals),
        (c.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (d.prototype.leq = d.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals = c.prototype.leq = c.prototype.lesserOrEquals),
        (c.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (u.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (d.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (c.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (u.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (d.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (c.prototype.isPositive = function () {
            return !this.sign;
        }),
        (u.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (d.prototype.isPositive = u.prototype.isPositive),
        (c.prototype.isNegative = function () {
            return this.sign;
        }),
        (u.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (d.prototype.isNegative = u.prototype.isNegative),
        (c.prototype.isUnit = function () {
            return !1;
        }),
        (u.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (d.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (c.prototype.isZero = function () {
            return !1;
        }),
        (u.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (d.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (c.prototype.isDivisibleBy = function (e) {
            var t = ea(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (d.prototype.isDivisibleBy = u.prototype.isDivisibleBy = c.prototype.isDivisibleBy),
        (c.prototype.isPrime = function (e) {
            var t = M(this);
            if (void 0 !== t) return t;
            var n = this.abs(),
                i = n.bitLength();
            if (i <= 64) return j(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var a = Math.log(2) * i.toJSNumber(), o = Math.ceil(!0 === e ? 2 * Math.pow(a, 2) : a), s = [], l = 0; l < o; l++) s.push(r(l + 2));
            return j(n, s);
        }),
        (d.prototype.isPrime = u.prototype.isPrime = c.prototype.isPrime),
        (c.prototype.isProbablePrime = function (t, n) {
            var i = M(this);
            if (void 0 !== i) return i;
            for (var a = this.abs(), o = e === t ? 5 : t, s = [], l = 0; l < o; l++) s.push(r.randBetween(2, a.minus(2), n));
            return j(a, s);
        }),
        (d.prototype.isProbablePrime = u.prototype.isProbablePrime = c.prototype.isProbablePrime),
        (c.prototype.modInv = function (e) {
            for (var t, n, i, a = r.zero, o = r.one, s = ea(e), l = this.abs(); !l.isZero(); ) (t = s.divide(l)), (n = a), (i = s), (a = o), (s = l), (o = n.subtract(t.multiply(o))), (l = i.subtract(t.multiply(l)));
            if (!s.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
            return (-1 === a.compare(0) && (a = a.add(e)), this.isNegative()) ? a.negate() : a;
        }),
        (d.prototype.modInv = u.prototype.modInv = c.prototype.modInv),
        (c.prototype.next = function () {
            var e = this.value;
            return this.sign ? I(e, 1, this.sign) : new c(y(e, 1), this.sign);
        }),
        (u.prototype.next = function () {
            var e = this.value;
            return e + 1 < i ? new u(e + 1) : new c(a, !1);
        }),
        (d.prototype.next = function () {
            return new d(this.value + BigInt(1));
        }),
        (c.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new c(y(e, 1), !0) : I(e, 1, this.sign);
        }),
        (u.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -i ? new u(e - 1) : new c(a, !0);
        }),
        (d.prototype.prev = function () {
            return new d(this.value - BigInt(1));
        });
    for (var U = [1]; 2 * U[U.length - 1] <= t; ) U.push(2 * U[U.length - 1]);
    var G = U.length,
        B = U[G - 1];
    function F(e) {
        return Math.abs(e) <= t;
    }
    function V(e, t, n) {
        t = ea(t);
        for (var i = e.isNegative(), a = t.isNegative(), o = i ? e.not() : e, s = a ? t.not() : t, l = 0, c = 0, u = null, d = null, f = []; !o.isZero() || !s.isZero(); ) (l = (u = x(o, B))[1].toJSNumber()), i && (l = B - 1 - l), (c = (d = x(s, B))[1].toJSNumber()), a && (c = B - 1 - c), (o = u[0]), (s = d[0]), f.push(n(l, c));
        for (var _ = 0 !== n(+!!i, +!!a) ? r(-1) : r(0), p = f.length - 1; p >= 0; p -= 1) _ = _.multiply(B).add(r(f[p]));
        return _;
    }
    (c.prototype.shiftLeft = function (e) {
        var t = ea(e).toJSNumber();
        if (!F(t)) throw Error(String(t) + ' is too large for shifting.');
        if (t < 0) return this.shiftRight(-t);
        var n = this;
        if (n.isZero()) return n;
        for (; t >= G; ) (n = n.multiply(B)), (t -= G - 1);
        return n.multiply(U[t]);
    }),
        (d.prototype.shiftLeft = u.prototype.shiftLeft = c.prototype.shiftLeft),
        (c.prototype.shiftRight = function (e) {
            var t,
                n = ea(e).toJSNumber();
            if (!F(n)) throw Error(String(n) + ' is too large for shifting.');
            if (n < 0) return this.shiftLeft(-n);
            for (var r = this; n >= G; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (t = x(r, B))[1].isNegative() ? t[0].prev() : t[0]), (n -= G - 1);
            }
            return (t = x(r, U[n]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (d.prototype.shiftRight = u.prototype.shiftRight = c.prototype.shiftRight),
        (c.prototype.not = function () {
            return this.negate().prev();
        }),
        (d.prototype.not = u.prototype.not = c.prototype.not),
        (c.prototype.and = function (e) {
            return V(this, e, function (e, t) {
                return e & t;
            });
        }),
        (d.prototype.and = u.prototype.and = c.prototype.and),
        (c.prototype.or = function (e) {
            return V(this, e, function (e, t) {
                return e | t;
            });
        }),
        (d.prototype.or = u.prototype.or = c.prototype.or),
        (c.prototype.xor = function (e) {
            return V(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (d.prototype.xor = u.prototype.xor = c.prototype.xor);
    var Z = 1073741824,
        H = ((t & -t) * (t & -t)) | 1073741824;
    function Y(e) {
        var n = e.value,
            r = 'number' == typeof n ? n | Z : 'bigint' == typeof n ? n | BigInt(Z) : (n[0] + n[1] * t) | H;
        return r & -r;
    }
    function W(e, t) {
        if (0 >= t.compareTo(e)) {
            var n = W(e, t.square(t)),
                i = n.p,
                a = n.e,
                o = i.multiply(t);
            return 0 >= o.compareTo(e)
                ? {
                      p: o,
                      e: 2 * a + 1
                  }
                : {
                      p: i,
                      e: 2 * a
                  };
        }
        return {
            p: r(1),
            e: 0
        };
    }
    function K(e, t) {
        return (e = ea(e)), (t = ea(t)), e.greater(t) ? e : t;
    }
    function z(e, t) {
        return (e = ea(e)), (t = ea(t)), e.lesser(t) ? e : t;
    }
    function q(e, t) {
        if (((e = ea(e).abs()), (t = ea(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var n, r, i = l[1]; e.isEven() && t.isEven(); ) (n = z(Y(e), Y(t))), (e = e.divide(n)), (t = t.divide(n)), (i = i.multiply(n));
        for (; e.isEven(); ) e = e.divide(Y(e));
        do {
            for (; t.isEven(); ) t = t.divide(Y(t));
            e.greater(t) && ((r = t), (t = e), (e = r)), (t = t.subtract(e));
        } while (!t.isZero());
        return i.isUnit() ? e : e.multiply(i);
    }
    function X(e, t) {
        return (e = ea(e).abs()), (t = ea(t).abs()), e.divide(q(e, t)).multiply(t);
    }
    function Q(e, n, r) {
        e = ea(e);
        var i = r || Math.random,
            a = z(e, (n = ea(n))),
            o = K(e, n).subtract(a).add(1);
        if (o.isSmall) return a.add(Math.floor(i() * o));
        for (var s = et(o, t).value, c = [], u = !0, d = 0; d < s.length; d++) {
            var f = u ? s[d] : t,
                _ = g(i() * f);
            c.push(_), _ < f && (u = !1);
        }
        return a.add(l.fromArray(c, t, !1));
    }
    (c.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0))) ? r(0) : r(W(e, r(2)).e).add(r(1));
    }),
        (d.prototype.bitLength = u.prototype.bitLength = c.prototype.bitLength);
    var J = function (e, t, n, r) {
        (n = n || o), (e = String(e)), r || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var i,
            a = e.length,
            s = Math.abs(t),
            l = {};
        for (i = 0; i < n.length; i++) l[n[i]] = i;
        for (i = 0; i < a; i++) {
            var c = e[i];
            if ('-' !== c && c in l && l[c] >= s) {
                if ('1' === c && 1 === s) continue;
                throw Error(c + ' is not a valid digit in base ' + t + '.');
            }
        }
        t = ea(t);
        var u = [],
            d = '-' === e[0];
        for (i = +!!d; i < e.length; i++) {
            var c = e[i];
            if (c in l) u.push(ea(l[c]));
            else if ('<' === c) {
                var f = i;
                do i++;
                while ('>' !== e[i] && i < e.length);
                u.push(ea(e.slice(f + 1, i)));
            } else throw Error(c + ' is not a valid character');
        }
        return $(u, t, d);
    };
    function $(e, t, n) {
        var r,
            i = l[0],
            a = l[1];
        for (r = e.length - 1; r >= 0; r--) (i = i.add(e[r].times(a))), (a = a.times(t));
        return n ? i.negate() : i;
    }
    function ee(e, t) {
        return e < (t = t || o).length ? t[e] : '<' + e + '>';
    }
    function et(e, t) {
        if ((t = r(t)).isZero()) {
            if (e.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            throw Error('Cannot convert nonzero numbers to base 0.');
        }
        if (t.equals(-1)) {
            if (e.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            if (e.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                    isNegative: !1
                };
            var n = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return (
                n.unshift([1]),
                {
                    value: [].concat.apply([], n),
                    isNegative: !1
                }
            );
        }
        var i = !1;
        if ((e.isNegative() && t.isPositive() && ((i = !0), (e = e.abs())), t.isUnit()))
            return e.isZero()
                ? {
                      value: [0],
                      isNegative: !1
                  }
                : {
                      value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
                      isNegative: i
                  };
        for (var a, o = [], s = e; s.isNegative() || s.compareAbs(t) >= 0; ) {
            s = (a = s.divmod(t)).quotient;
            var l = a.remainder;
            l.isNegative() && ((l = t.minus(l).abs()), (s = s.next())), o.push(l.toJSNumber());
        }
        return (
            o.push(s.toJSNumber()),
            {
                value: o.reverse(),
                isNegative: i
            }
        );
    }
    function en(e, t, n) {
        var r = et(e, t);
        return (
            (r.isNegative ? '-' : '') +
            r.value
                .map(function (e) {
                    return ee(e, n);
                })
                .join('')
        );
    }
    function er(e) {
        if (f(+e)) {
            var t = +e;
            if (t === g(t)) return s ? new d(BigInt(t)) : new u(t);
            throw Error('Invalid integer: ' + e);
        }
        var r = '-' === e[0];
        r && (e = e.slice(1));
        var i = e.split(/e/i);
        if (i.length > 2) throw Error('Invalid integer: ' + i.join('e'));
        if (2 === i.length) {
            var a = i[1];
            if (('+' === a[0] && (a = a.slice(1)), (a *= 1) !== g(a) || !f(a))) throw Error('Invalid integer: ' + a + ' is not a valid exponent.');
            var o = i[0],
                l = o.indexOf('.');
            if ((l >= 0 && ((a -= o.length - l - 1), (o = o.slice(0, l) + o.slice(l + 1))), a < 0)) throw Error('Cannot include negative exponent part for integers');
            (o += Array(a + 1).join('0')), (e = o);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error('Invalid integer: ' + e);
        if (s) return new d(BigInt(r ? '-' + e : e));
        for (var _ = [], p = e.length, m = n, E = p - m; p > 0; ) _.push(+e.slice(E, p)), (E -= m) < 0 && (E = 0), (p -= m);
        return h(_), new c(_, r);
    }
    function ei(e) {
        if (s) return new d(BigInt(e));
        if (f(e)) {
            if (e !== g(e)) throw Error(e + ' is not an integer.');
            return new u(e);
        }
        return er(e.toString());
    }
    function ea(e) {
        return 'number' == typeof e ? ei(e) : 'string' == typeof e ? er(e) : 'bigint' == typeof e ? new d(e) : e;
    }
    (c.prototype.toArray = function (e) {
        return et(this, e);
    }),
        (u.prototype.toArray = function (e) {
            return et(this, e);
        }),
        (d.prototype.toArray = function (e) {
            return et(this, e);
        }),
        (c.prototype.toString = function (t, n) {
            if ((e === t && (t = 10), 10 !== t)) return en(this, t, n);
            for (var r, i = this.value, a = i.length, o = String(i[--a]), s = '0000000'; --a >= 0; ) o += s.slice((r = String(i[a])).length) + r;
            return (this.sign ? '-' : '') + o;
        }),
        (u.prototype.toString = function (t, n) {
            return (e === t && (t = 10), 10 != t) ? en(this, t, n) : String(this.value);
        }),
        (d.prototype.toString = u.prototype.toString),
        (d.prototype.toJSON =
            c.prototype.toJSON =
            u.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (c.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (c.prototype.toJSNumber = c.prototype.valueOf),
        (u.prototype.valueOf = function () {
            return this.value;
        }),
        (u.prototype.toJSNumber = u.prototype.valueOf),
        (d.prototype.valueOf = d.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var eo = 0; eo < 1000; eo++) (l[eo] = ea(eo)), eo > 0 && (l[-eo] = ea(-eo));
    return (
        (l.one = l[1]),
        (l.zero = l[0]),
        (l.minusOne = l[-1]),
        (l.max = K),
        (l.min = z),
        (l.gcd = q),
        (l.lcm = X),
        (l.isInstance = function (e) {
            return e instanceof c || e instanceof u || e instanceof d;
        }),
        (l.randBetween = Q),
        (l.fromArray = function (e, t, n) {
            return $(e.map(ea), ea(t || 10), n);
        }),
        l
    );
})();
e.hasOwnProperty('exports') && (e.exports = r),
    'function' == typeof define &&
        define.amd &&
        define(function () {
            return r;
        });
