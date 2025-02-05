t = a.nmd(t);
var r = (function (t) {
    var e = E(9007199254740992),
        a = '0123456789abcdefghijklmnopqrstuvwxyz',
        n = 'function' == typeof BigInt;
    function o(t, e, a, r) {
        return void 0 === t ? o[0] : void 0 !== e && (10 != +e || a) ? Y(t, e, a, r) : F(t);
    }
    function _(t, e) {
        (this.value = t), (this.sign = e), (this.isSmall = !1);
    }
    function i(t) {
        (this.value = t), (this.sign = t < 0), (this.isSmall = !0);
    }
    function c(t) {
        this.value = t;
    }
    function s(t) {
        return -9007199254740992 < t && t < 9007199254740992;
    }
    function E(t) {
        return t < 10000000 ? [t] : t < 100000000000000 ? [t % 10000000, Math.floor(t / 10000000)] : [t % 10000000, Math.floor(t / 10000000) % 10000000, Math.floor(t / 100000000000000)];
    }
    function l(t) {
        u(t);
        var a = t.length;
        if (a < 4 && 0 > y(t, e))
            switch (a) {
                case 0:
                    return 0;
                case 1:
                    return t[0];
                case 2:
                    return t[0] + 10000000 * t[1];
                default:
                    return t[0] + (t[1] + 10000000 * t[2]) * 10000000;
            }
        return t;
    }
    function u(t) {
        for (var e = t.length; 0 === t[--e]; );
        t.length = e + 1;
    }
    function I(t) {
        for (var e = Array(t), a = -1; ++a < t; ) e[a] = 0;
        return e;
    }
    function R(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
    }
    function d(t, e) {
        var a,
            r,
            n = t.length,
            o = e.length,
            _ = Array(n),
            i = 0;
        for (r = 0; r < o; r++) (i = (a = t[r] + e[r] + i) >= 10000000 ? 1 : 0), (_[r] = a - 10000000 * i);
        for (; r < n; ) (i = 10000000 === (a = t[r] + i) ? 1 : 0), (_[r++] = a - 10000000 * i);
        return i > 0 && _.push(i), _;
    }
    function A(t, e) {
        return t.length >= e.length ? d(t, e) : d(e, t);
    }
    function f(t, e) {
        var a,
            r,
            n = t.length,
            o = Array(n);
        for (r = 0; r < n; r++) (e = Math.floor((a = t[r] - 10000000 + e) / 10000000)), (o[r] = a - 10000000 * e), (e += 1);
        for (; e > 0; ) (o[r++] = e % 10000000), (e = Math.floor(e / 10000000));
        return o;
    }
    function p(t, e) {
        var a,
            r,
            n = t.length,
            o = e.length,
            _ = Array(n),
            i = 0;
        for (a = 0; a < o; a++) (r = t[a] - i - e[a]) < 0 ? ((r += 10000000), (i = 1)) : (i = 0), (_[a] = r);
        for (a = o; a < n; a++) {
            if ((r = t[a] - i) < 0) r += 10000000;
            else {
                _[a++] = r;
                break;
            }
            _[a] = r;
        }
        for (; a < n; a++) _[a] = t[a];
        return u(_), _;
    }
    function T(t, e, a) {
        var r,
            n,
            o = t.length,
            c = Array(o),
            s = -e;
        for (r = 0; r < o; r++) (s = Math.floor((n = t[r] + s) / 10000000)), (n %= 10000000), (c[r] = n < 0 ? n + 10000000 : n);
        return 'number' == typeof (c = l(c)) ? (a && (c = -c), new i(c)) : new _(c, a);
    }
    function N(t, e) {
        var a,
            r,
            n,
            o,
            _ = t.length,
            i = e.length,
            c = I(_ + i);
        for (n = 0; n < _; ++n) {
            o = t[n];
            for (var s = 0; s < i; ++s) (r = Math.floor((a = o * e[s] + c[n + s]) / 10000000)), (c[n + s] = a - 10000000 * r), (c[n + s + 1] += r);
        }
        return u(c), c;
    }
    function L(t, e) {
        var a,
            r,
            n = t.length,
            o = Array(n),
            _ = 0;
        for (r = 0; r < n; r++) (_ = Math.floor((a = t[r] * e + _) / 10000000)), (o[r] = a - 10000000 * _);
        for (; _ > 0; ) (o[r++] = _ % 10000000), (_ = Math.floor(_ / 10000000));
        return o;
    }
    function h(t, e) {
        for (var a = []; e-- > 0; ) a.push(0);
        return a.concat(t);
    }
    function O(t, e, a) {
        return t < 10000000 ? new _(L(e, t), a) : new _(N(e, E(t)), a);
    }
    function D(t) {
        var e,
            a,
            r,
            n,
            o = t.length,
            _ = I(o + o);
        for (r = 0; r < o; r++) {
            a = 0 - (n = t[r]) * n;
            for (var i = r; i < o; i++) (a = Math.floor((e = n * t[i] * 2 + _[r + i] + a) / 10000000)), (_[r + i] = e - 10000000 * a);
            _[r + o] = a;
        }
        return u(_), _;
    }
    function g(t, e) {
        var a,
            r,
            n,
            o,
            _ = t.length,
            i = I(_);
        for (n = 0, a = _ - 1; a >= 0; --a) (r = R((o = 10000000 * n + t[a]) / e)), (n = o - r * e), (i[a] = 0 | r);
        return [i, 0 | n];
    }
    function m(t, e) {
        var a,
            r,
            s = F(e);
        if (n) return [new c(t.value / s.value), new c(t.value % s.value)];
        var d = t.value,
            A = s.value;
        if (0 === A) throw Error('Cannot divide by zero');
        if (t.isSmall) return s.isSmall ? [new i(R(d / A)), new i(d % A)] : [o[0], t];
        if (s.isSmall) {
            if (1 === A) return [t, o[0]];
            if (-1 == A) return [t.negate(), o[0]];
            var f = Math.abs(A);
            if (f < 10000000) {
                a = l((r = g(d, f))[0]);
                var T = r[1];
                return (t.sign && (T = -T), 'number' == typeof a) ? (t.sign !== s.sign && (a = -a), [new i(a), new i(T)]) : [new _(a, t.sign !== s.sign), new i(T)];
            }
            A = E(f);
        }
        var N = y(d, A);
        if (-1 === N) return [o[0], t];
        if (0 === N) return [o[t.sign === s.sign ? 1 : -1], o[0]];
        a = (r =
            d.length + A.length <= 200
                ? (function (t, e) {
                      var a,
                          r,
                          n,
                          o,
                          _,
                          i,
                          c,
                          s = t.length,
                          E = e.length,
                          u = I(e.length),
                          R = e[E - 1],
                          d = Math.ceil(10000000 / (2 * R)),
                          A = L(t, d),
                          f = L(e, d);
                      for (A.length <= s && A.push(0), f.push(0), R = f[E - 1], r = s - E; r >= 0; r--) {
                          for (a = 10000000 - 1, A[r + E] !== R && (a = Math.floor((10000000 * A[r + E] + A[r + E - 1]) / R)), n = 0, o = 0, i = f.length, _ = 0; _ < i; _++) (n += a * f[_]), (c = Math.floor(n / 10000000)), (o += A[r + _] - (n - 10000000 * c)), (n = c), o < 0 ? ((A[r + _] = o + 10000000), (o = -1)) : ((A[r + _] = o), (o = 0));
                          for (; 0 !== o; ) {
                              for (a -= 1, n = 0, _ = 0; _ < i; _++) (n += A[r + _] - 10000000 + f[_]) < 0 ? ((A[r + _] = n + 10000000), (n = 0)) : ((A[r + _] = n), (n = 1));
                              o += n;
                          }
                          u[r] = a;
                      }
                      return (A = g(A, d)[0]), [l(u), l(A)];
                  })(d, A)
                : (function (t, e) {
                      for (var a, r, n, o, _, i = t.length, c = e.length, s = [], E = []; i; ) {
                          if ((E.unshift(t[--i]), u(E), 0 > y(E, e))) {
                              s.push(0);
                              continue;
                          }
                          (r = E.length), (n = 10000000 * E[r - 1] + E[r - 2]), (o = 10000000 * e[c - 1] + e[c - 2]), r > c && (n = (n + 1) * 10000000), (a = Math.ceil(n / o));
                          do {
                              if (0 >= y((_ = L(e, a)), E)) break;
                              a--;
                          } while (a);
                          s.push(a), (E = p(E, _));
                      }
                      return s.reverse(), [l(s), l(E)];
                  })(d, A))[0];
        var h = t.sign !== s.sign,
            O = r[1],
            D = t.sign;
        return 'number' == typeof a ? (h && (a = -a), (a = new i(a))) : (a = new _(a, h)), 'number' == typeof O ? (D && (O = -O), (O = new i(O))) : (O = new _(O, D)), [a, O];
    }
    function y(t, e) {
        if (t.length !== e.length) return t.length > e.length ? 1 : -1;
        for (var a = t.length - 1; a >= 0; a--) if (t[a] !== e[a]) return t[a] > e[a] ? 1 : -1;
        return 0;
    }
    function P(t) {
        var e = t.abs();
        return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || (!(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0)));
    }
    function v(t, e) {
        for (var a, n, o, _ = t.prev(), i = _, c = 0; i.isEven(); ) (i = i.divide(2)), c++;
        t: for (n = 0; n < e.length; n++)
            if (!t.lesser(e[n]) && !((o = r(e[n]).modPow(i, t)).isUnit() || o.equals(_))) {
                for (a = c - 1; 0 != a && !(o = o.square().mod(t)).isUnit(); a--) if (o.equals(_)) continue t;
                return !1;
            }
        return !0;
    }
    (_.prototype = Object.create(o.prototype)),
        (i.prototype = Object.create(o.prototype)),
        (c.prototype = Object.create(o.prototype)),
        (_.prototype.add = function (t) {
            var e = F(t);
            if (this.sign !== e.sign) return this.subtract(e.negate());
            var a = this.value,
                r = e.value;
            return e.isSmall ? new _(f(a, Math.abs(r)), this.sign) : new _(A(a, r), this.sign);
        }),
        (_.prototype.plus = _.prototype.add),
        (i.prototype.add = function (t) {
            var e = F(t),
                a = this.value;
            if (a < 0 !== e.sign) return this.subtract(e.negate());
            var r = e.value;
            if (e.isSmall) {
                if (s(a + r)) return new i(a + r);
                r = E(Math.abs(r));
            }
            return new _(f(r, Math.abs(a)), a < 0);
        }),
        (i.prototype.plus = i.prototype.add),
        (c.prototype.add = function (t) {
            return new c(this.value + F(t).value);
        }),
        (c.prototype.plus = c.prototype.add),
        (_.prototype.subtract = function (t) {
            var e,
                a,
                r = F(t);
            if (this.sign !== r.sign) return this.add(r.negate());
            var n = this.value,
                o = r.value;
            return r.isSmall ? T(n, Math.abs(o), this.sign) : ((e = this.sign), (y(n, o) >= 0 ? (a = p(n, o)) : ((a = p(o, n)), (e = !e)), 'number' == typeof (a = l(a))) ? (e && (a = -a), new i(a)) : new _(a, e));
        }),
        (_.prototype.minus = _.prototype.subtract),
        (i.prototype.subtract = function (t) {
            var e = F(t),
                a = this.value;
            if (a < 0 !== e.sign) return this.add(e.negate());
            var r = e.value;
            return e.isSmall ? new i(a - r) : T(r, Math.abs(a), a >= 0);
        }),
        (i.prototype.minus = i.prototype.subtract),
        (c.prototype.subtract = function (t) {
            return new c(this.value - F(t).value);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (_.prototype.negate = function () {
            return new _(this.value, !this.sign);
        }),
        (i.prototype.negate = function () {
            var t = this.sign,
                e = new i(-this.value);
            return (e.sign = !t), e;
        }),
        (c.prototype.negate = function () {
            return new c(-this.value);
        }),
        (_.prototype.abs = function () {
            return new _(this.value, !1);
        }),
        (i.prototype.abs = function () {
            return new i(Math.abs(this.value));
        }),
        (c.prototype.abs = function () {
            return new c(this.value >= 0 ? this.value : -this.value);
        }),
        (_.prototype.multiply = function (t) {
            var e,
                a,
                r,
                n = F(t),
                i = this.value,
                c = n.value,
                s = this.sign !== n.sign;
            if (n.isSmall) {
                if (0 === c) return o[0];
                if (1 === c) return this;
                if (-1 === c) return this.negate();
                if ((r = Math.abs(c)) < 10000000) return new _(L(i, r), s);
                c = E(r);
            }
            return -0.012 * (e = i.length) - 0.012 * (a = c.length) + 0.000015 * e * a > 0
                ? new _(
                      (function t(e, a) {
                          var r = Math.max(e.length, a.length);
                          if (r <= 30) return N(e, a);
                          r = Math.ceil(r / 2);
                          var n = e.slice(r),
                              o = e.slice(0, r),
                              _ = a.slice(r),
                              i = a.slice(0, r),
                              c = t(o, i),
                              s = t(n, _),
                              E = t(A(o, n), A(i, _)),
                              l = A(A(c, h(p(p(E, c), s), r)), h(s, 2 * r));
                          return u(l), l;
                      })(i, c),
                      s
                  )
                : new _(N(i, c), s);
        }),
        (_.prototype.times = _.prototype.multiply),
        (i.prototype._multiplyBySmall = function (t) {
            return s(t.value * this.value) ? new i(t.value * this.value) : O(Math.abs(t.value), E(Math.abs(this.value)), this.sign !== t.sign);
        }),
        (_.prototype._multiplyBySmall = function (t) {
            return 0 === t.value ? o[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : O(Math.abs(t.value), this.value, this.sign !== t.sign);
        }),
        (i.prototype.multiply = function (t) {
            return F(t)._multiplyBySmall(this);
        }),
        (i.prototype.times = i.prototype.multiply),
        (c.prototype.multiply = function (t) {
            return new c(this.value * F(t).value);
        }),
        (c.prototype.times = c.prototype.multiply),
        (_.prototype.square = function () {
            return new _(D(this.value), !1);
        }),
        (i.prototype.square = function () {
            var t = this.value * this.value;
            return s(t) ? new i(t) : new _(D(E(Math.abs(this.value))), !1);
        }),
        (c.prototype.square = function (t) {
            return new c(this.value * this.value);
        }),
        (_.prototype.divmod = function (t) {
            var e = m(this, t);
            return {
                quotient: e[0],
                remainder: e[1]
            };
        }),
        (c.prototype.divmod = i.prototype.divmod = _.prototype.divmod),
        (_.prototype.divide = function (t) {
            return m(this, t)[0];
        }),
        (c.prototype.over = c.prototype.divide =
            function (t) {
                return new c(this.value / F(t).value);
            }),
        (i.prototype.over = i.prototype.divide = _.prototype.over = _.prototype.divide),
        (_.prototype.mod = function (t) {
            return m(this, t)[1];
        }),
        (c.prototype.mod = c.prototype.remainder =
            function (t) {
                return new c(this.value % F(t).value);
            }),
        (i.prototype.remainder = i.prototype.mod = _.prototype.remainder = _.prototype.mod),
        (_.prototype.pow = function (t) {
            var e,
                a,
                r,
                n = F(t),
                _ = this.value,
                c = n.value;
            if (0 === c) return o[1];
            if (0 === _) return o[0];
            if (1 === _) return o[1];
            if (-1 === _) return n.isEven() ? o[1] : o[-1];
            if (n.sign) return o[0];
            if (!n.isSmall) throw Error('The exponent ' + n.toString() + ' is too large.');
            if (this.isSmall && s((e = Math.pow(_, c)))) return new i(R(e));
            for (a = this, r = o[1]; !0 & c && ((r = r.times(a)), --c), 0 !== c; ) (c /= 2), (a = a.square());
            return r;
        }),
        (i.prototype.pow = _.prototype.pow),
        (c.prototype.pow = function (t) {
            var e = F(t),
                a = this.value,
                r = e.value,
                n = BigInt(0),
                _ = BigInt(1),
                i = BigInt(2);
            if (r === n) return o[1];
            if (a === n) return o[0];
            if (a === _) return o[1];
            if (a === BigInt(-1)) return e.isEven() ? o[1] : o[-1];
            if (e.isNegative()) return new c(n);
            for (var s = this, E = o[1]; (r & _) === _ && ((E = E.times(s)), --r), r !== n; ) (r /= i), (s = s.square());
            return E;
        }),
        (_.prototype.modPow = function (t, e) {
            if (((t = F(t)), (e = F(e)).isZero())) throw Error('Cannot take modPow with modulus 0');
            var a = o[1],
                r = this.mod(e);
            for (t.isNegative() && ((t = t.multiply(o[-1])), (r = r.modInv(e))); t.isPositive(); ) {
                if (r.isZero()) return o[0];
                t.isOdd() && (a = a.multiply(r).mod(e)), (t = t.divide(2)), (r = r.square().mod(e));
            }
            return a;
        }),
        (c.prototype.modPow = i.prototype.modPow = _.prototype.modPow),
        (_.prototype.compareAbs = function (t) {
            var e = F(t),
                a = this.value,
                r = e.value;
            return e.isSmall ? 1 : y(a, r);
        }),
        (i.prototype.compareAbs = function (t) {
            var e = F(t),
                a = Math.abs(this.value),
                r = e.value;
            return e.isSmall ? (a === (r = Math.abs(r)) ? 0 : a > r ? 1 : -1) : -1;
        }),
        (c.prototype.compareAbs = function (t) {
            var e = this.value,
                a = F(t).value;
            return (e = e >= 0 ? e : -e) === (a = a >= 0 ? a : -a) ? 0 : e > a ? 1 : -1;
        }),
        (_.prototype.compare = function (t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = F(t),
                a = this.value,
                r = e.value;
            return this.sign !== e.sign ? (e.sign ? 1 : -1) : e.isSmall ? (this.sign ? -1 : 1) : y(a, r) * (this.sign ? -1 : 1);
        }),
        (_.prototype.compareTo = _.prototype.compare),
        (i.prototype.compare = function (t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = F(t),
                a = this.value,
                r = e.value;
            return e.isSmall ? (a == r ? 0 : a > r ? 1 : -1) : a < 0 !== e.sign ? (a < 0 ? -1 : 1) : a < 0 ? 1 : -1;
        }),
        (i.prototype.compareTo = i.prototype.compare),
        (c.prototype.compare = function (t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = this.value,
                a = F(t).value;
            return e === a ? 0 : e > a ? 1 : -1;
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (_.prototype.equals = function (t) {
            return 0 === this.compare(t);
        }),
        (c.prototype.eq = c.prototype.equals = i.prototype.eq = i.prototype.equals = _.prototype.eq = _.prototype.equals),
        (_.prototype.notEquals = function (t) {
            return 0 !== this.compare(t);
        }),
        (c.prototype.neq = c.prototype.notEquals = i.prototype.neq = i.prototype.notEquals = _.prototype.neq = _.prototype.notEquals),
        (_.prototype.greater = function (t) {
            return this.compare(t) > 0;
        }),
        (c.prototype.gt = c.prototype.greater = i.prototype.gt = i.prototype.greater = _.prototype.gt = _.prototype.greater),
        (_.prototype.lesser = function (t) {
            return 0 > this.compare(t);
        }),
        (c.prototype.lt = c.prototype.lesser = i.prototype.lt = i.prototype.lesser = _.prototype.lt = _.prototype.lesser),
        (_.prototype.greaterOrEquals = function (t) {
            return this.compare(t) >= 0;
        }),
        (c.prototype.geq = c.prototype.greaterOrEquals = i.prototype.geq = i.prototype.greaterOrEquals = _.prototype.geq = _.prototype.greaterOrEquals),
        (_.prototype.lesserOrEquals = function (t) {
            return 0 >= this.compare(t);
        }),
        (c.prototype.leq = c.prototype.lesserOrEquals = i.prototype.leq = i.prototype.lesserOrEquals = _.prototype.leq = _.prototype.lesserOrEquals),
        (_.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (i.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (c.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (_.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (i.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (c.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (_.prototype.isPositive = function () {
            return !this.sign;
        }),
        (i.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (c.prototype.isPositive = i.prototype.isPositive),
        (_.prototype.isNegative = function () {
            return this.sign;
        }),
        (i.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (c.prototype.isNegative = i.prototype.isNegative),
        (_.prototype.isUnit = function () {
            return !1;
        }),
        (i.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (c.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (_.prototype.isZero = function () {
            return !1;
        }),
        (i.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (c.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (_.prototype.isDivisibleBy = function (t) {
            var e = F(t);
            return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()));
        }),
        (c.prototype.isDivisibleBy = i.prototype.isDivisibleBy = _.prototype.isDivisibleBy),
        (_.prototype.isPrime = function (t) {
            var e = P(this);
            if (void 0 !== e) return e;
            var a = this.abs(),
                n = a.bitLength();
            if (n <= 64) return v(a, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var o = Math.log(2) * n.toJSNumber(), _ = Math.ceil(!0 === t ? 2 * Math.pow(o, 2) : o), i = [], c = 0; c < _; c++) i.push(r(c + 2));
            return v(a, i);
        }),
        (c.prototype.isPrime = i.prototype.isPrime = _.prototype.isPrime),
        (_.prototype.isProbablePrime = function (e, a) {
            var n = P(this);
            if (void 0 !== n) return n;
            for (var o = this.abs(), _ = t === e ? 5 : e, i = [], c = 0; c < _; c++) i.push(r.randBetween(2, o.minus(2), a));
            return v(o, i);
        }),
        (c.prototype.isProbablePrime = i.prototype.isProbablePrime = _.prototype.isProbablePrime),
        (_.prototype.modInv = function (t) {
            for (var e, a, n, o = r.zero, _ = r.one, i = F(t), c = this.abs(); !c.isZero(); ) (e = i.divide(c)), (a = o), (n = i), (o = _), (i = c), (_ = a.subtract(e.multiply(_))), (c = n.subtract(e.multiply(c)));
            if (!i.isUnit()) throw Error(this.toString() + ' and ' + t.toString() + ' are not co-prime');
            return (-1 === o.compare(0) && (o = o.add(t)), this.isNegative()) ? o.negate() : o;
        }),
        (c.prototype.modInv = i.prototype.modInv = _.prototype.modInv),
        (_.prototype.next = function () {
            var t = this.value;
            return this.sign ? T(t, 1, this.sign) : new _(f(t, 1), this.sign);
        }),
        (i.prototype.next = function () {
            var t = this.value;
            return t + 1 < 9007199254740992 ? new i(t + 1) : new _(e, !1);
        }),
        (c.prototype.next = function () {
            return new c(this.value + BigInt(1));
        }),
        (_.prototype.prev = function () {
            var t = this.value;
            return this.sign ? new _(f(t, 1), !0) : T(t, 1, this.sign);
        }),
        (i.prototype.prev = function () {
            var t = this.value;
            return t - 1 > -9007199254740992 ? new i(t - 1) : new _(e, !0);
        }),
        (c.prototype.prev = function () {
            return new c(this.value - BigInt(1));
        });
    for (var C = [1]; 2 * C[C.length - 1] <= 10000000; ) C.push(2 * C[C.length - 1]);
    var S = C.length,
        G = C[S - 1];
    function M(t) {
        return 10000000 >= Math.abs(t);
    }
    function b(t, e, a) {
        e = F(e);
        for (var n = t.isNegative(), o = e.isNegative(), _ = n ? t.not() : t, i = o ? e.not() : e, c = 0, s = 0, E = null, l = null, u = []; !_.isZero() || !i.isZero(); ) (c = (E = m(_, G))[1].toJSNumber()), n && (c = G - 1 - c), (s = (l = m(i, G))[1].toJSNumber()), o && (s = G - 1 - s), (_ = E[0]), (i = l[0]), u.push(a(c, s));
        for (var I = 0 !== a(n ? 1 : 0, o ? 1 : 0) ? r(-1) : r(0), R = u.length - 1; R >= 0; R -= 1) I = I.multiply(G).add(r(u[R]));
        return I;
    }
    (_.prototype.shiftLeft = function (t) {
        var e = F(t).toJSNumber();
        if (!M(e)) throw Error(String(e) + ' is too large for shifting.');
        if (e < 0) return this.shiftRight(-e);
        var a = this;
        if (a.isZero()) return a;
        for (; e >= S; ) (a = a.multiply(G)), (e -= S - 1);
        return a.multiply(C[e]);
    }),
        (c.prototype.shiftLeft = i.prototype.shiftLeft = _.prototype.shiftLeft),
        (_.prototype.shiftRight = function (t) {
            var e,
                a = F(t).toJSNumber();
            if (!M(a)) throw Error(String(a) + ' is too large for shifting.');
            if (a < 0) return this.shiftLeft(-a);
            for (var r = this; a >= S; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (e = m(r, G))[1].isNegative() ? e[0].prev() : e[0]), (a -= S - 1);
            }
            return (e = m(r, C[a]))[1].isNegative() ? e[0].prev() : e[0];
        }),
        (c.prototype.shiftRight = i.prototype.shiftRight = _.prototype.shiftRight),
        (_.prototype.not = function () {
            return this.negate().prev();
        }),
        (c.prototype.not = i.prototype.not = _.prototype.not),
        (_.prototype.and = function (t) {
            return b(this, t, function (t, e) {
                return t & e;
            });
        }),
        (c.prototype.and = i.prototype.and = _.prototype.and),
        (_.prototype.or = function (t) {
            return b(this, t, function (t, e) {
                return t | e;
            });
        }),
        (c.prototype.or = i.prototype.or = _.prototype.or),
        (_.prototype.xor = function (t) {
            return b(this, t, function (t, e) {
                return t ^ e;
            });
        }),
        (c.prototype.xor = i.prototype.xor = _.prototype.xor);
    function U(t) {
        var e = t.value,
            a = 'number' == typeof e ? 1073741824 | e : 'bigint' == typeof e ? e | BigInt(1073741824) : (e[0] + 10000000 * e[1]) | 1073758208;
        return a & -a;
    }
    function w(t, e) {
        return (t = F(t)), (e = F(e)), t.greater(e) ? t : e;
    }
    function B(t, e) {
        return (t = F(t)), (e = F(e)), t.lesser(e) ? t : e;
    }
    function W(t, e) {
        if (((t = F(t).abs()), (e = F(e).abs()), t.equals(e))) return t;
        if (t.isZero()) return e;
        if (e.isZero()) return t;
        for (var a, r, n = o[1]; t.isEven() && e.isEven(); ) (a = B(U(t), U(e))), (t = t.divide(a)), (e = e.divide(a)), (n = n.multiply(a));
        for (; t.isEven(); ) t = t.divide(U(t));
        do {
            for (; e.isEven(); ) e = e.divide(U(e));
            t.greater(e) && ((r = e), (e = t), (t = r)), (e = e.subtract(t));
        } while (!e.isZero());
        return n.isUnit() ? t : t.multiply(n);
    }
    (_.prototype.bitLength = function () {
        var t = this;
        return (0 > t.compareTo(r(0)) && (t = t.negate().subtract(r(1))), 0 === t.compareTo(r(0)))
            ? r(0)
            : r(
                  (function t(e, a) {
                      if (0 >= a.compareTo(e)) {
                          var n = t(e, a.square(a)),
                              o = n.p,
                              _ = n.e,
                              i = o.multiply(a);
                          return 0 >= i.compareTo(e)
                              ? {
                                    p: i,
                                    e: 2 * _ + 1
                                }
                              : {
                                    p: o,
                                    e: 2 * _
                                };
                      }
                      return {
                          p: r(1),
                          e: 0
                      };
                  })(t, r(2)).e
              ).add(r(1));
    }),
        (c.prototype.bitLength = i.prototype.bitLength = _.prototype.bitLength);
    var Y = function (t, e, r, n) {
        (r = r || a), (t = String(t)), n || ((t = t.toLowerCase()), (r = r.toLowerCase()));
        var o,
            _ = t.length,
            i = Math.abs(e),
            c = {};
        for (o = 0; o < r.length; o++) c[r[o]] = o;
        for (o = 0; o < _; o++) {
            var s = t[o];
            if ('-' !== s && s in c && c[s] >= i) {
                if ('1' === s && 1 === i) continue;
                throw Error(s + ' is not a valid digit in base ' + e + '.');
            }
        }
        e = F(e);
        var E = [],
            l = '-' === t[0];
        for (o = l ? 1 : 0; o < t.length; o++) {
            var s = t[o];
            if (s in c) E.push(F(c[s]));
            else if ('<' === s) {
                var u = o;
                do o++;
                while ('>' !== t[o] && o < t.length);
                E.push(F(t.slice(u + 1, o)));
            } else throw Error(s + ' is not a valid character');
        }
        return H(E, e, l);
    };
    function H(t, e, a) {
        var r,
            n = o[0],
            _ = o[1];
        for (r = t.length - 1; r >= 0; r--) (n = n.add(t[r].times(_))), (_ = _.times(e));
        return a ? n.negate() : n;
    }
    function K(t, e) {
        if ((e = r(e)).isZero()) {
            if (t.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            throw Error('Cannot convert nonzero numbers to base 0.');
        }
        if (e.equals(-1)) {
            if (t.isZero())
                return {
                    value: [0],
                    isNegative: !1
                };
            if (t.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                    isNegative: !1
                };
            var a = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return (
                a.unshift([1]),
                {
                    value: [].concat.apply([], a),
                    isNegative: !1
                }
            );
        }
        var n = !1;
        if ((t.isNegative() && e.isPositive() && ((n = !0), (t = t.abs())), e.isUnit()))
            return t.isZero()
                ? {
                      value: [0],
                      isNegative: !1
                  }
                : {
                      value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                      isNegative: n
                  };
        for (var o, _ = [], i = t; i.isNegative() || i.compareAbs(e) >= 0; ) {
            i = (o = i.divmod(e)).quotient;
            var c = o.remainder;
            c.isNegative() && ((c = e.minus(c).abs()), (i = i.next())), _.push(c.toJSNumber());
        }
        return (
            _.push(i.toJSNumber()),
            {
                value: _.reverse(),
                isNegative: n
            }
        );
    }
    function k(t, e, r) {
        var n = K(t, e);
        return (
            (n.isNegative ? '-' : '') +
            n.value
                .map(function (t) {
                    var e;
                    return t < (e = (e = r) || a).length ? e[t] : '<' + t + '>';
                })
                .join('')
        );
    }
    function x(t) {
        if (s(+t)) {
            var e = +t;
            if (e === R(e)) return n ? new c(BigInt(e)) : new i(e);
            throw Error('Invalid integer: ' + t);
        }
        var a = '-' === t[0];
        a && (t = t.slice(1));
        var r = t.split(/e/i);
        if (r.length > 2) throw Error('Invalid integer: ' + r.join('e'));
        if (2 === r.length) {
            var o = r[1];
            if (('+' === o[0] && (o = o.slice(1)), (o = +o) !== R(o) || !s(o))) throw Error('Invalid integer: ' + o + ' is not a valid exponent.');
            var E = r[0],
                l = E.indexOf('.');
            if ((l >= 0 && ((o -= E.length - l - 1), (E = E.slice(0, l) + E.slice(l + 1))), o < 0)) throw Error('Cannot include negative exponent part for integers');
            (E += Array(o + 1).join('0')), (t = E);
        }
        if (!/^([0-9][0-9]*)$/.test(t)) throw Error('Invalid integer: ' + t);
        if (n) return new c(BigInt(a ? '-' + t : t));
        for (var I = [], d = t.length, A = d - 7; d > 0; ) I.push(+t.slice(A, d)), (A -= 7) < 0 && (A = 0), (d -= 7);
        return u(I), new _(I, a);
    }
    function F(t) {
        return 'number' == typeof t
            ? (function (t) {
                  if (n) return new c(BigInt(t));
                  if (s(t)) {
                      if (t !== R(t)) throw Error(t + ' is not an integer.');
                      return new i(t);
                  }
                  return x(t.toString());
              })(t)
            : 'string' == typeof t
              ? x(t)
              : 'bigint' == typeof t
                ? new c(t)
                : t;
    }
    (_.prototype.toArray = function (t) {
        return K(this, t);
    }),
        (i.prototype.toArray = function (t) {
            return K(this, t);
        }),
        (c.prototype.toArray = function (t) {
            return K(this, t);
        }),
        (_.prototype.toString = function (e, a) {
            if ((t === e && (e = 10), 10 !== e)) return k(this, e, a);
            for (var r, n = this.value, o = n.length, _ = String(n[--o]); --o >= 0; ) (r = String(n[o])), (_ += '0000000'.slice(r.length) + r);
            return (this.sign ? '-' : '') + _;
        }),
        (i.prototype.toString = function (e, a) {
            return (t === e && (e = 10), 10 != e) ? k(this, e, a) : String(this.value);
        }),
        (c.prototype.toString = i.prototype.toString),
        (c.prototype.toJSON =
            _.prototype.toJSON =
            i.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (_.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (_.prototype.toJSNumber = _.prototype.valueOf),
        (i.prototype.valueOf = function () {
            return this.value;
        }),
        (i.prototype.toJSNumber = i.prototype.valueOf),
        (c.prototype.valueOf = c.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var V = 0; V < 1000; V++) (o[V] = F(V)), V > 0 && (o[-V] = F(-V));
    return (
        (o.one = o[1]),
        (o.zero = o[0]),
        (o.minusOne = o[-1]),
        (o.max = w),
        (o.min = B),
        (o.gcd = W),
        (o.lcm = function (t, e) {
            return (t = F(t).abs()), (e = F(e).abs()), t.divide(W(t, e)).multiply(e);
        }),
        (o.isInstance = function (t) {
            return t instanceof _ || t instanceof i || t instanceof c;
        }),
        (o.randBetween = function (t, e, a) {
            t = F(t);
            var r = a || Math.random,
                n = B(t, (e = F(e))),
                _ = w(t, e).subtract(n).add(1);
            if (_.isSmall) return n.add(Math.floor(r() * _));
            for (var i = K(_, 10000000).value, c = [], s = !0, E = 0; E < i.length; E++) {
                var l = s ? i[E] : 10000000,
                    u = R(r() * l);
                c.push(u), u < l && (s = !1);
            }
            return n.add(o.fromArray(c, 10000000, !1));
        }),
        (o.fromArray = function (t, e, a) {
            return H(t.map(F), F(e || 10), a);
        }),
        o
    );
})();
t.hasOwnProperty('exports') && (t.exports = r),
    'function' == typeof define &&
        define.amd &&
        define(function () {
            return r;
        });
