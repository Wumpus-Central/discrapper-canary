e = n.nmd(e);
var r = (function (e) {
    var t = 10000000,
        n = 7,
        i = 9007199254740992,
        o = _(9007199254740992),
        a = '0123456789abcdefghijklmnopqrstuvwxyz',
        s = 'function' == typeof BigInt;
    function l(e, t, n, r) {
        return void 0 === e ? l[0] : void 0 !== t && (10 != +t || n) ? J(e, t, n, r) : eo(e);
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
        if (n < 4 && 0 > k(e, o))
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
            o = e.length,
            a = n.length,
            s = Array(o),
            l = 0,
            c = t;
        for (i = 0; i < a; i++) (l = +((r = e[i] + n[i] + l) >= c)), (s[i] = r - l * c);
        for (; i < o; ) (l = +((r = e[i] + l) === c)), (s[i++] = r - l * c);
        return l > 0 && s.push(l), s;
    }
    function b(e, t) {
        return e.length >= t.length ? E(e, t) : E(t, e);
    }
    function y(e, n) {
        var r,
            i,
            o = e.length,
            a = Array(o),
            s = t;
        for (i = 0; i < o; i++) (n = Math.floor((r = e[i] - s + n) / s)), (a[i] = r - n * s), (n += 1);
        for (; n > 0; ) (a[i++] = n % s), (n = Math.floor(n / s));
        return a;
    }
    function O(e, n) {
        var r,
            i,
            o = e.length,
            a = n.length,
            s = Array(o),
            l = 0,
            c = t;
        for (r = 0; r < a; r++) (i = e[r] - l - n[r]) < 0 ? ((i += c), (l = 1)) : (l = 0), (s[r] = i);
        for (r = a; r < o; r++) {
            if ((i = e[r] - l) < 0) i += c;
            else {
                s[r++] = i;
                break;
            }
            s[r] = i;
        }
        for (; r < o; r++) s[r] = e[r];
        return h(s), s;
    }
    function v(e, t, n) {
        var r;
        return (k(e, t) >= 0 ? (r = O(e, t)) : ((r = O(t, e)), (n = !n)), 'number' == typeof (r = p(r))) ? (n && (r = -r), new u(r)) : new c(r, n);
    }
    function I(e, n, r) {
        var i,
            o,
            a = e.length,
            s = Array(a),
            l = -n,
            d = t;
        for (i = 0; i < a; i++) (l = Math.floor((o = e[i] + l) / d)), (o %= d), (s[i] = o < 0 ? o + d : o);
        return 'number' == typeof (s = p(s)) ? (r && (s = -s), new u(s)) : new c(s, r);
    }
    function S(e, n) {
        var r,
            i,
            o,
            a,
            s = e.length,
            l = n.length,
            c = m(s + l),
            u = t;
        for (o = 0; o < s; ++o) {
            a = e[o];
            for (var d = 0; d < l; ++d) (i = Math.floor((r = a * n[d] + c[o + d]) / u)), (c[o + d] = r - i * u), (c[o + d + 1] += i);
        }
        return h(c), c;
    }
    function T(e, n) {
        var r,
            i,
            o = e.length,
            a = Array(o),
            s = t,
            l = 0;
        for (i = 0; i < o; i++) (l = Math.floor((r = e[i] * n + l) / s)), (a[i] = r - l * s);
        for (; l > 0; ) (a[i++] = l % s), (l = Math.floor(l / s));
        return a;
    }
    function A(e, t) {
        for (var n = []; t-- > 0; ) n.push(0);
        return n.concat(e);
    }
    function N(e, t) {
        var n = Math.max(e.length, t.length);
        if (n <= 30) return S(e, t);
        n = Math.ceil(n / 2);
        var r = e.slice(n),
            i = e.slice(0, n),
            o = t.slice(n),
            a = t.slice(0, n),
            s = N(i, a),
            l = N(r, o),
            c = N(b(i, r), b(a, o)),
            u = b(b(s, A(O(O(c, s), l), n)), A(l, 2 * n));
        return h(u), u;
    }
    function C(e, t) {
        return -0.012 * e - 0.012 * t + 0.000015 * e * t > 0;
    }
    function P(e, n, r) {
        return e < t ? new c(T(n, e), r) : new c(S(n, _(e)), r);
    }
    function R(e) {
        var n,
            r,
            i,
            o,
            a = e.length,
            s = m(a + a),
            l = t;
        for (i = 0; i < a; i++) {
            r = 0 - (o = e[i]) * o;
            for (var c = i; c < a; c++) (r = Math.floor((n = o * e[c] * 2 + s[i + c] + r) / l)), (s[i + c] = n - r * l);
            s[i + a] = r;
        }
        return h(s), s;
    }
    function w(e, n) {
        var r,
            i,
            o,
            a,
            s,
            l,
            c,
            u = e.length,
            d = n.length,
            f = t,
            _ = m(n.length),
            h = n[d - 1],
            g = Math.ceil(f / (2 * h)),
            E = T(e, g),
            b = T(n, g);
        for (E.length <= u && E.push(0), b.push(0), h = b[d - 1], i = u - d; i >= 0; i--) {
            for (r = f - 1, E[i + d] !== h && (r = Math.floor((E[i + d] * f + E[i + d - 1]) / h)), o = 0, a = 0, l = b.length, s = 0; s < l; s++) (o += r * b[s]), (c = Math.floor(o / f)), (a += E[i + s] - (o - c * f)), (o = c), a < 0 ? ((E[i + s] = a + f), (a = -1)) : ((E[i + s] = a), (a = 0));
            for (; 0 !== a; ) {
                for (r -= 1, o = 0, s = 0; s < l; s++) (o += E[i + s] - f + b[s]) < 0 ? ((E[i + s] = o + f), (o = 0)) : ((E[i + s] = o), (o = 1));
                a += o;
            }
            _[i] = r;
        }
        return (E = L(E, g)[0]), [p(_), p(E)];
    }
    function D(e, n) {
        for (var r, i, o, a, s, l = e.length, c = n.length, u = [], d = [], f = t; l; ) {
            if ((d.unshift(e[--l]), h(d), 0 > k(d, n))) {
                u.push(0);
                continue;
            }
            (i = d.length), (o = d[i - 1] * f + d[i - 2]), (a = n[c - 1] * f + n[c - 2]), i > c && (o = (o + 1) * f), (r = Math.ceil(o / a));
            do {
                if (0 >= k((s = T(n, r)), d)) break;
                r--;
            } while (r);
            u.push(r), (d = O(d, s));
        }
        return u.reverse(), [p(u), p(d)];
    }
    function L(e, n) {
        var r,
            i,
            o,
            a,
            s = e.length,
            l = m(s),
            c = t;
        for (o = 0, r = s - 1; r >= 0; --r) (i = g((a = o * c + e[r]) / n)), (o = a - i * n), (l[r] = 0 | i);
        return [l, 0 | o];
    }
    function x(e, n) {
        var r,
            i,
            o = eo(n);
        if (s) return [new d(e.value / o.value), new d(e.value % o.value)];
        var a = e.value,
            f = o.value;
        if (0 === f) throw Error('Cannot divide by zero');
        if (e.isSmall) return o.isSmall ? [new u(g(a / f)), new u(a % f)] : [l[0], e];
        if (o.isSmall) {
            if (1 === f) return [e, l[0]];
            if (-1 == f) return [e.negate(), l[0]];
            var h = Math.abs(f);
            if (h < t) {
                r = p((i = L(a, h))[0]);
                var m = i[1];
                return (e.sign && (m = -m), 'number' == typeof r) ? (e.sign !== o.sign && (r = -r), [new u(r), new u(m)]) : [new c(r, e.sign !== o.sign), new u(m)];
            }
            f = _(h);
        }
        var E = k(a, f);
        if (-1 === E) return [l[0], e];
        if (0 === E) return [l[e.sign === o.sign ? 1 : -1], l[0]];
        r = (i = a.length + f.length <= 200 ? w(a, f) : D(a, f))[0];
        var b = e.sign !== o.sign,
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
        for (var n, i, o, a = e.prev(), s = a, l = 0; s.isEven(); ) (s = s.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((o = r(t[i]).modPow(s, e)).isUnit() || o.equals(a))) {
                for (n = l - 1; 0 != n && !(o = o.square().mod(e)).isUnit(); n--) if (o.equals(a)) continue t;
                return !1;
            }
        return !0;
    }
    (c.prototype = Object.create(l.prototype)),
        (u.prototype = Object.create(l.prototype)),
        (d.prototype = Object.create(l.prototype)),
        (c.prototype.add = function (e) {
            var t = eo(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? new c(y(n, Math.abs(r)), this.sign) : new c(b(n, r), this.sign);
        }),
        (c.prototype.plus = c.prototype.add),
        (u.prototype.add = function (e) {
            var t = eo(e),
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
            return new d(this.value + eo(e).value);
        }),
        (d.prototype.plus = d.prototype.add),
        (c.prototype.subtract = function (e) {
            var t = eo(e);
            if (this.sign !== t.sign) return this.add(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? I(n, Math.abs(r), this.sign) : v(n, r, this.sign);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (u.prototype.subtract = function (e) {
            var t = eo(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.add(t.negate());
            var r = t.value;
            return t.isSmall ? new u(n - r) : I(r, Math.abs(n), n >= 0);
        }),
        (u.prototype.minus = u.prototype.subtract),
        (d.prototype.subtract = function (e) {
            return new d(this.value - eo(e).value);
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
                r = eo(e),
                i = this.value,
                o = r.value,
                a = this.sign !== r.sign;
            if (r.isSmall) {
                if (0 === o) return l[0];
                if (1 === o) return this;
                if (-1 === o) return this.negate();
                if ((n = Math.abs(o)) < t) return new c(T(i, n), a);
                o = _(n);
            }
            return C(i.length, o.length) ? new c(N(i, o), a) : new c(S(i, o), a);
        }),
        (c.prototype.times = c.prototype.multiply),
        (u.prototype._multiplyBySmall = function (e) {
            return f(e.value * this.value) ? new u(e.value * this.value) : P(Math.abs(e.value), _(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (c.prototype._multiplyBySmall = function (e) {
            return 0 === e.value ? l[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : P(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (u.prototype.multiply = function (e) {
            return eo(e)._multiplyBySmall(this);
        }),
        (u.prototype.times = u.prototype.multiply),
        (d.prototype.multiply = function (e) {
            return new d(this.value * eo(e).value);
        }),
        (d.prototype.times = d.prototype.multiply),
        (c.prototype.square = function () {
            return new c(R(this.value), !1);
        }),
        (u.prototype.square = function () {
            var e = this.value * this.value;
            return f(e) ? new u(e) : new c(R(_(Math.abs(this.value))), !1);
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
                return new d(this.value / eo(e).value);
            }),
        (u.prototype.over = u.prototype.divide = c.prototype.over = c.prototype.divide),
        (c.prototype.mod = function (e) {
            return x(this, e)[1];
        }),
        (d.prototype.mod = d.prototype.remainder =
            function (e) {
                return new d(this.value % eo(e).value);
            }),
        (u.prototype.remainder = u.prototype.mod = c.prototype.remainder = c.prototype.mod),
        (c.prototype.pow = function (e) {
            var t,
                n,
                r,
                i = eo(e),
                o = this.value,
                a = i.value;
            if (0 === a) return l[1];
            if (0 === o) return l[0];
            if (1 === o) return l[1];
            if (-1 === o) return i.isEven() ? l[1] : l[-1];
            if (i.sign) return l[0];
            if (!i.isSmall) throw Error('The exponent ' + i.toString() + ' is too large.');
            if (this.isSmall && f((t = Math.pow(o, a)))) return new u(g(t));
            for (n = this, r = l[1]; !0 & a && ((r = r.times(n)), --a), 0 !== a; ) (a /= 2), (n = n.square());
            return r;
        }),
        (u.prototype.pow = c.prototype.pow),
        (d.prototype.pow = function (e) {
            var t = eo(e),
                n = this.value,
                r = t.value,
                i = BigInt(0),
                o = BigInt(1),
                a = BigInt(2);
            if (r === i) return l[1];
            if (n === i) return l[0];
            if (n === o) return l[1];
            if (n === BigInt(-1)) return t.isEven() ? l[1] : l[-1];
            if (t.isNegative()) return new d(i);
            for (var s = this, c = l[1]; (r & o) === o && ((c = c.times(s)), --r), r !== i; ) (r /= a), (s = s.square());
            return c;
        }),
        (c.prototype.modPow = function (e, t) {
            if (((e = eo(e)), (t = eo(t)).isZero())) throw Error('Cannot take modPow with modulus 0');
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
            var t = eo(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? 1 : k(n, r);
        }),
        (u.prototype.compareAbs = function (e) {
            var t = eo(e),
                n = Math.abs(this.value),
                r = t.value;
            return t.isSmall ? (n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1) : -1;
        }),
        (d.prototype.compareAbs = function (e) {
            var t = this.value,
                n = eo(e).value;
            return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1;
        }),
        (c.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = eo(e),
                n = this.value,
                r = t.value;
            return this.sign !== t.sign ? (t.sign ? 1 : -1) : t.isSmall ? (this.sign ? -1 : 1) : k(n, r) * (this.sign ? -1 : 1);
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (u.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = eo(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? (n == r ? 0 : n > r ? 1 : -1) : n < 0 !== t.sign ? (n < 0 ? -1 : 1) : n < 0 ? 1 : -1;
        }),
        (u.prototype.compareTo = u.prototype.compare),
        (d.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                n = eo(e).value;
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
            var t = eo(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (d.prototype.isDivisibleBy = u.prototype.isDivisibleBy = c.prototype.isDivisibleBy),
        (c.prototype.isPrime = function (e) {
            var t = M(this);
            if (void 0 !== t) return t;
            var n = this.abs(),
                i = n.bitLength();
            if (i <= 64) return j(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var o = Math.log(2) * i.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(o, 2) : o), s = [], l = 0; l < a; l++) s.push(r(l + 2));
            return j(n, s);
        }),
        (d.prototype.isPrime = u.prototype.isPrime = c.prototype.isPrime),
        (c.prototype.isProbablePrime = function (t, n) {
            var i = M(this);
            if (void 0 !== i) return i;
            for (var o = this.abs(), a = e === t ? 5 : t, s = [], l = 0; l < a; l++) s.push(r.randBetween(2, o.minus(2), n));
            return j(o, s);
        }),
        (d.prototype.isProbablePrime = u.prototype.isProbablePrime = c.prototype.isProbablePrime),
        (c.prototype.modInv = function (e) {
            for (var t, n, i, o = r.zero, a = r.one, s = eo(e), l = this.abs(); !l.isZero(); ) (t = s.divide(l)), (n = o), (i = s), (o = a), (s = l), (a = n.subtract(t.multiply(a))), (l = i.subtract(t.multiply(l)));
            if (!s.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
            return (-1 === o.compare(0) && (o = o.add(e)), this.isNegative()) ? o.negate() : o;
        }),
        (d.prototype.modInv = u.prototype.modInv = c.prototype.modInv),
        (c.prototype.next = function () {
            var e = this.value;
            return this.sign ? I(e, 1, this.sign) : new c(y(e, 1), this.sign);
        }),
        (u.prototype.next = function () {
            var e = this.value;
            return e + 1 < i ? new u(e + 1) : new c(o, !1);
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
            return e - 1 > -i ? new u(e - 1) : new c(o, !0);
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
        t = eo(t);
        for (var i = e.isNegative(), o = t.isNegative(), a = i ? e.not() : e, s = o ? t.not() : t, l = 0, c = 0, u = null, d = null, f = []; !a.isZero() || !s.isZero(); ) (l = (u = x(a, B))[1].toJSNumber()), i && (l = B - 1 - l), (c = (d = x(s, B))[1].toJSNumber()), o && (c = B - 1 - c), (a = u[0]), (s = d[0]), f.push(n(l, c));
        for (var _ = 0 !== n(+!!i, +!!o) ? r(-1) : r(0), p = f.length - 1; p >= 0; p -= 1) _ = _.multiply(B).add(r(f[p]));
        return _;
    }
    (c.prototype.shiftLeft = function (e) {
        var t = eo(e).toJSNumber();
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
                n = eo(e).toJSNumber();
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
                o = n.e,
                a = i.multiply(t);
            return 0 >= a.compareTo(e)
                ? {
                      p: a,
                      e: 2 * o + 1
                  }
                : {
                      p: i,
                      e: 2 * o
                  };
        }
        return {
            p: r(1),
            e: 0
        };
    }
    function K(e, t) {
        return (e = eo(e)), (t = eo(t)), e.greater(t) ? e : t;
    }
    function z(e, t) {
        return (e = eo(e)), (t = eo(t)), e.lesser(t) ? e : t;
    }
    function q(e, t) {
        if (((e = eo(e).abs()), (t = eo(t).abs()), e.equals(t))) return e;
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
    function Q(e, t) {
        return (e = eo(e).abs()), (t = eo(t).abs()), e.divide(q(e, t)).multiply(t);
    }
    function X(e, n, r) {
        e = eo(e);
        var i = r || Math.random,
            o = z(e, (n = eo(n))),
            a = K(e, n).subtract(o).add(1);
        if (a.isSmall) return o.add(Math.floor(i() * a));
        for (var s = et(a, t).value, c = [], u = !0, d = 0; d < s.length; d++) {
            var f = u ? s[d] : t,
                _ = g(i() * f);
            c.push(_), _ < f && (u = !1);
        }
        return o.add(l.fromArray(c, t, !1));
    }
    (c.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0))) ? r(0) : r(W(e, r(2)).e).add(r(1));
    }),
        (d.prototype.bitLength = u.prototype.bitLength = c.prototype.bitLength);
    var J = function (e, t, n, r) {
        (n = n || a), (e = String(e)), r || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var i,
            o = e.length,
            s = Math.abs(t),
            l = {};
        for (i = 0; i < n.length; i++) l[n[i]] = i;
        for (i = 0; i < o; i++) {
            var c = e[i];
            if ('-' !== c && c in l && l[c] >= s) {
                if ('1' === c && 1 === s) continue;
                throw Error(c + ' is not a valid digit in base ' + t + '.');
            }
        }
        t = eo(t);
        var u = [],
            d = '-' === e[0];
        for (i = +!!d; i < e.length; i++) {
            var c = e[i];
            if (c in l) u.push(eo(l[c]));
            else if ('<' === c) {
                var f = i;
                do i++;
                while ('>' !== e[i] && i < e.length);
                u.push(eo(e.slice(f + 1, i)));
            } else throw Error(c + ' is not a valid character');
        }
        return $(u, t, d);
    };
    function $(e, t, n) {
        var r,
            i = l[0],
            o = l[1];
        for (r = e.length - 1; r >= 0; r--) (i = i.add(e[r].times(o))), (o = o.times(t));
        return n ? i.negate() : i;
    }
    function ee(e, t) {
        return e < (t = t || a).length ? t[e] : '<' + e + '>';
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
        for (var o, a = [], s = e; s.isNegative() || s.compareAbs(t) >= 0; ) {
            s = (o = s.divmod(t)).quotient;
            var l = o.remainder;
            l.isNegative() && ((l = t.minus(l).abs()), (s = s.next())), a.push(l.toJSNumber());
        }
        return (
            a.push(s.toJSNumber()),
            {
                value: a.reverse(),
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
            var o = i[1];
            if (('+' === o[0] && (o = o.slice(1)), (o *= 1) !== g(o) || !f(o))) throw Error('Invalid integer: ' + o + ' is not a valid exponent.');
            var a = i[0],
                l = a.indexOf('.');
            if ((l >= 0 && ((o -= a.length - l - 1), (a = a.slice(0, l) + a.slice(l + 1))), o < 0)) throw Error('Cannot include negative exponent part for integers');
            (a += Array(o + 1).join('0')), (e = a);
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
    function eo(e) {
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
            for (var r, i = this.value, o = i.length, a = String(i[--o]), s = '0000000'; --o >= 0; ) a += s.slice((r = String(i[o])).length) + r;
            return (this.sign ? '-' : '') + a;
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
    for (var ea = 0; ea < 1000; ea++) (l[ea] = eo(ea)), ea > 0 && (l[-ea] = eo(-ea));
    return (
        (l.one = l[1]),
        (l.zero = l[0]),
        (l.minusOne = l[-1]),
        (l.max = K),
        (l.min = z),
        (l.gcd = q),
        (l.lcm = Q),
        (l.isInstance = function (e) {
            return e instanceof c || e instanceof u || e instanceof d;
        }),
        (l.randBetween = X),
        (l.fromArray = function (e, t, n) {
            return $(e.map(eo), eo(t || 10), n);
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
