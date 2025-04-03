t = a.nmd(t);
var r = (function (t) {
    var e = E(9007199254740992),
        a = '0123456789abcdefghijklmnopqrstuvwxyz',
        n = 'function' == typeof BigInt;
    function _(t, e, a, r) {
        return void 0 === t ? _[0] : void 0 !== e && (10 != +e || a) ? Y(t, e, a, r) : V(t);
    }
    function o(t, e) {
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
        if (a < 4 && 0 > m(t, e))
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
            _ = e.length,
            o = Array(n),
            i = 0;
        for (r = 0; r < _; r++) (i = +((a = t[r] + e[r] + i) >= 10000000)), (o[r] = a - 10000000 * i);
        for (; r < n; ) (i = +(10000000 === (a = t[r] + i))), (o[r++] = a - 10000000 * i);
        return i > 0 && o.push(i), o;
    }
    function A(t, e) {
        return t.length >= e.length ? d(t, e) : d(e, t);
    }
    function f(t, e) {
        var a,
            r,
            n = t.length,
            _ = Array(n);
        for (r = 0; r < n; r++) (e = Math.floor((a = t[r] - 10000000 + e) / 10000000)), (_[r] = a - 10000000 * e), (e += 1);
        for (; e > 0; ) (_[r++] = e % 10000000), (e = Math.floor(e / 10000000));
        return _;
    }
    function p(t, e) {
        var a,
            r,
            n = t.length,
            _ = e.length,
            o = Array(n),
            i = 0;
        for (a = 0; a < _; a++) (r = t[a] - i - e[a]) < 0 ? ((r += 10000000), (i = 1)) : (i = 0), (o[a] = r);
        for (a = _; a < n; a++) {
            if ((r = t[a] - i) < 0) r += 10000000;
            else {
                o[a++] = r;
                break;
            }
            o[a] = r;
        }
        for (; a < n; a++) o[a] = t[a];
        return u(o), o;
    }
    function N(t, e, a) {
        var r,
            n,
            _ = t.length,
            c = Array(_),
            s = -e;
        for (r = 0; r < _; r++) (s = Math.floor((n = t[r] + s) / 10000000)), (n %= 10000000), (c[r] = n < 0 ? n + 10000000 : n);
        return 'number' == typeof (c = l(c)) ? (a && (c = -c), new i(c)) : new o(c, a);
    }
    function T(t, e) {
        var a,
            r,
            n,
            _,
            o = t.length,
            i = e.length,
            c = I(o + i);
        for (n = 0; n < o; ++n) {
            _ = t[n];
            for (var s = 0; s < i; ++s) (r = Math.floor((a = _ * e[s] + c[n + s]) / 10000000)), (c[n + s] = a - 10000000 * r), (c[n + s + 1] += r);
        }
        return u(c), c;
    }
    function L(t, e) {
        var a,
            r,
            n = t.length,
            _ = Array(n),
            o = 0;
        for (r = 0; r < n; r++) (o = Math.floor((a = t[r] * e + o) / 10000000)), (_[r] = a - 10000000 * o);
        for (; o > 0; ) (_[r++] = o % 10000000), (o = Math.floor(o / 10000000));
        return _;
    }
    function h(t, e) {
        for (var a = []; e-- > 0; ) a.push(0);
        return a.concat(t);
    }
    function O(t, e, a) {
        return t < 10000000 ? new o(L(e, t), a) : new o(T(e, E(t)), a);
    }
    function D(t) {
        var e,
            a,
            r,
            n,
            _ = t.length,
            o = I(_ + _);
        for (r = 0; r < _; r++) {
            a = 0 - (n = t[r]) * n;
            for (var i = r; i < _; i++) (a = Math.floor((e = n * t[i] * 2 + o[r + i] + a) / 10000000)), (o[r + i] = e - 10000000 * a);
            o[r + _] = a;
        }
        return u(o), o;
    }
    function g(t, e) {
        var a,
            r,
            n,
            _,
            o = t.length,
            i = I(o);
        for (n = 0, a = o - 1; a >= 0; --a) (r = R((_ = 10000000 * n + t[a]) / e)), (n = _ - r * e), (i[a] = 0 | r);
        return [i, 0 | n];
    }
    function P(t, e) {
        var a,
            r,
            s = V(e);
        if (n) return [new c(t.value / s.value), new c(t.value % s.value)];
        var d = t.value,
            A = s.value;
        if (0 === A) throw Error('Cannot divide by zero');
        if (t.isSmall) return s.isSmall ? [new i(R(d / A)), new i(d % A)] : [_[0], t];
        if (s.isSmall) {
            if (1 === A) return [t, _[0]];
            if (-1 == A) return [t.negate(), _[0]];
            var f = Math.abs(A);
            if (f < 10000000) {
                a = l((r = g(d, f))[0]);
                var N = r[1];
                return (t.sign && (N = -N), 'number' == typeof a) ? (t.sign !== s.sign && (a = -a), [new i(a), new i(N)]) : [new o(a, t.sign !== s.sign), new i(N)];
            }
            A = E(f);
        }
        var T = m(d, A);
        if (-1 === T) return [_[0], t];
        if (0 === T) return [_[t.sign === s.sign ? 1 : -1], _[0]];
        a = (r =
            d.length + A.length <= 200
                ? (function (t, e) {
                      var a,
                          r,
                          n,
                          _,
                          o,
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
                          for (a = 10000000 - 1, A[r + E] !== R && (a = Math.floor((10000000 * A[r + E] + A[r + E - 1]) / R)), n = 0, _ = 0, i = f.length, o = 0; o < i; o++) (n += a * f[o]), (c = Math.floor(n / 10000000)), (_ += A[r + o] - (n - 10000000 * c)), (n = c), _ < 0 ? ((A[r + o] = _ + 10000000), (_ = -1)) : ((A[r + o] = _), (_ = 0));
                          for (; 0 !== _; ) {
                              for (a -= 1, n = 0, o = 0; o < i; o++) (n += A[r + o] - 10000000 + f[o]) < 0 ? ((A[r + o] = n + 10000000), (n = 0)) : ((A[r + o] = n), (n = 1));
                              _ += n;
                          }
                          u[r] = a;
                      }
                      return (A = g(A, d)[0]), [l(u), l(A)];
                  })(d, A)
                : (function (t, e) {
                      for (var a, r, n, _, o, i = t.length, c = e.length, s = [], E = []; i; ) {
                          if ((E.unshift(t[--i]), u(E), 0 > m(E, e))) {
                              s.push(0);
                              continue;
                          }
                          (r = E.length), (n = 10000000 * E[r - 1] + E[r - 2]), (_ = 10000000 * e[c - 1] + e[c - 2]), r > c && (n = (n + 1) * 10000000), (a = Math.ceil(n / _));
                          do {
                              if (0 >= m((o = L(e, a)), E)) break;
                              a--;
                          } while (a);
                          s.push(a), (E = p(E, o));
                      }
                      return s.reverse(), [l(s), l(E)];
                  })(d, A))[0];
        var h = t.sign !== s.sign,
            O = r[1],
            D = t.sign;
        return 'number' == typeof a ? (h && (a = -a), (a = new i(a))) : (a = new o(a, h)), 'number' == typeof O ? (D && (O = -O), (O = new i(O))) : (O = new o(O, D)), [a, O];
    }
    function m(t, e) {
        if (t.length !== e.length) return t.length > e.length ? 1 : -1;
        for (var a = t.length - 1; a >= 0; a--) if (t[a] !== e[a]) return t[a] > e[a] ? 1 : -1;
        return 0;
    }
    function y(t) {
        var e = t.abs();
        return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || (!(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0)));
    }
    function v(t, e) {
        for (var a, n, _, o = t.prev(), i = o, c = 0; i.isEven(); ) (i = i.divide(2)), c++;
        t: for (n = 0; n < e.length; n++)
            if (!t.lesser(e[n]) && !((_ = r(e[n]).modPow(i, t)).isUnit() || _.equals(o))) {
                for (a = c - 1; 0 != a && !(_ = _.square().mod(t)).isUnit(); a--) if (_.equals(o)) continue t;
                return !1;
            }
        return !0;
    }
    (o.prototype = Object.create(_.prototype)),
        (i.prototype = Object.create(_.prototype)),
        (c.prototype = Object.create(_.prototype)),
        (o.prototype.add = function (t) {
            var e = V(t);
            if (this.sign !== e.sign) return this.subtract(e.negate());
            var a = this.value,
                r = e.value;
            return e.isSmall ? new o(f(a, Math.abs(r)), this.sign) : new o(A(a, r), this.sign);
        }),
        (o.prototype.plus = o.prototype.add),
        (i.prototype.add = function (t) {
            var e = V(t),
                a = this.value;
            if (a < 0 !== e.sign) return this.subtract(e.negate());
            var r = e.value;
            if (e.isSmall) {
                if (s(a + r)) return new i(a + r);
                r = E(Math.abs(r));
            }
            return new o(f(r, Math.abs(a)), a < 0);
        }),
        (i.prototype.plus = i.prototype.add),
        (c.prototype.add = function (t) {
            return new c(this.value + V(t).value);
        }),
        (c.prototype.plus = c.prototype.add),
        (o.prototype.subtract = function (t) {
            var e,
                a,
                r = V(t);
            if (this.sign !== r.sign) return this.add(r.negate());
            var n = this.value,
                _ = r.value;
            return r.isSmall ? N(n, Math.abs(_), this.sign) : ((e = this.sign), (m(n, _) >= 0 ? (a = p(n, _)) : ((a = p(_, n)), (e = !e)), 'number' == typeof (a = l(a))) ? (e && (a = -a), new i(a)) : new o(a, e));
        }),
        (o.prototype.minus = o.prototype.subtract),
        (i.prototype.subtract = function (t) {
            var e = V(t),
                a = this.value;
            if (a < 0 !== e.sign) return this.add(e.negate());
            var r = e.value;
            return e.isSmall ? new i(a - r) : N(r, Math.abs(a), a >= 0);
        }),
        (i.prototype.minus = i.prototype.subtract),
        (c.prototype.subtract = function (t) {
            return new c(this.value - V(t).value);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (o.prototype.negate = function () {
            return new o(this.value, !this.sign);
        }),
        (i.prototype.negate = function () {
            var t = this.sign,
                e = new i(-this.value);
            return (e.sign = !t), e;
        }),
        (c.prototype.negate = function () {
            return new c(-this.value);
        }),
        (o.prototype.abs = function () {
            return new o(this.value, !1);
        }),
        (i.prototype.abs = function () {
            return new i(Math.abs(this.value));
        }),
        (c.prototype.abs = function () {
            return new c(this.value >= 0 ? this.value : -this.value);
        }),
        (o.prototype.multiply = function (t) {
            var e,
                a,
                r,
                n = V(t),
                i = this.value,
                c = n.value,
                s = this.sign !== n.sign;
            if (n.isSmall) {
                if (0 === c) return _[0];
                if (1 === c) return this;
                if (-1 === c) return this.negate();
                if ((r = Math.abs(c)) < 10000000) return new o(L(i, r), s);
                c = E(r);
            }
            return -0.012 * (e = i.length) - 0.012 * (a = c.length) + 0.000015 * e * a > 0
                ? new o(
                      (function t(e, a) {
                          var r = Math.max(e.length, a.length);
                          if (r <= 30) return T(e, a);
                          r = Math.ceil(r / 2);
                          var n = e.slice(r),
                              _ = e.slice(0, r),
                              o = a.slice(r),
                              i = a.slice(0, r),
                              c = t(_, i),
                              s = t(n, o),
                              E = t(A(_, n), A(i, o)),
                              l = A(A(c, h(p(p(E, c), s), r)), h(s, 2 * r));
                          return u(l), l;
                      })(i, c),
                      s
                  )
                : new o(T(i, c), s);
        }),
        (o.prototype.times = o.prototype.multiply),
        (i.prototype._multiplyBySmall = function (t) {
            return s(t.value * this.value) ? new i(t.value * this.value) : O(Math.abs(t.value), E(Math.abs(this.value)), this.sign !== t.sign);
        }),
        (o.prototype._multiplyBySmall = function (t) {
            return 0 === t.value ? _[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : O(Math.abs(t.value), this.value, this.sign !== t.sign);
        }),
        (i.prototype.multiply = function (t) {
            return V(t)._multiplyBySmall(this);
        }),
        (i.prototype.times = i.prototype.multiply),
        (c.prototype.multiply = function (t) {
            return new c(this.value * V(t).value);
        }),
        (c.prototype.times = c.prototype.multiply),
        (o.prototype.square = function () {
            return new o(D(this.value), !1);
        }),
        (i.prototype.square = function () {
            var t = this.value * this.value;
            return s(t) ? new i(t) : new o(D(E(Math.abs(this.value))), !1);
        }),
        (c.prototype.square = function (t) {
            return new c(this.value * this.value);
        }),
        (o.prototype.divmod = function (t) {
            var e = P(this, t);
            return {
                quotient: e[0],
                remainder: e[1]
            };
        }),
        (c.prototype.divmod = i.prototype.divmod = o.prototype.divmod),
        (o.prototype.divide = function (t) {
            return P(this, t)[0];
        }),
        (c.prototype.over = c.prototype.divide =
            function (t) {
                return new c(this.value / V(t).value);
            }),
        (i.prototype.over = i.prototype.divide = o.prototype.over = o.prototype.divide),
        (o.prototype.mod = function (t) {
            return P(this, t)[1];
        }),
        (c.prototype.mod = c.prototype.remainder =
            function (t) {
                return new c(this.value % V(t).value);
            }),
        (i.prototype.remainder = i.prototype.mod = o.prototype.remainder = o.prototype.mod),
        (o.prototype.pow = function (t) {
            var e,
                a,
                r,
                n = V(t),
                o = this.value,
                c = n.value;
            if (0 === c) return _[1];
            if (0 === o) return _[0];
            if (1 === o) return _[1];
            if (-1 === o) return n.isEven() ? _[1] : _[-1];
            if (n.sign) return _[0];
            if (!n.isSmall) throw Error('The exponent ' + n.toString() + ' is too large.');
            if (this.isSmall && s((e = Math.pow(o, c)))) return new i(R(e));
            for (a = this, r = _[1]; !0 & c && ((r = r.times(a)), --c), 0 !== c; ) (c /= 2), (a = a.square());
            return r;
        }),
        (i.prototype.pow = o.prototype.pow),
        (c.prototype.pow = function (t) {
            var e = V(t),
                a = this.value,
                r = e.value,
                n = BigInt(0),
                o = BigInt(1),
                i = BigInt(2);
            if (r === n) return _[1];
            if (a === n) return _[0];
            if (a === o) return _[1];
            if (a === BigInt(-1)) return e.isEven() ? _[1] : _[-1];
            if (e.isNegative()) return new c(n);
            for (var s = this, E = _[1]; (r & o) === o && ((E = E.times(s)), --r), r !== n; ) (r /= i), (s = s.square());
            return E;
        }),
        (o.prototype.modPow = function (t, e) {
            if (((t = V(t)), (e = V(e)).isZero())) throw Error('Cannot take modPow with modulus 0');
            var a = _[1],
                r = this.mod(e);
            for (t.isNegative() && ((t = t.multiply(_[-1])), (r = r.modInv(e))); t.isPositive(); ) {
                if (r.isZero()) return _[0];
                t.isOdd() && (a = a.multiply(r).mod(e)), (t = t.divide(2)), (r = r.square().mod(e));
            }
            return a;
        }),
        (c.prototype.modPow = i.prototype.modPow = o.prototype.modPow),
        (o.prototype.compareAbs = function (t) {
            var e = V(t),
                a = this.value,
                r = e.value;
            return e.isSmall ? 1 : m(a, r);
        }),
        (i.prototype.compareAbs = function (t) {
            var e = V(t),
                a = Math.abs(this.value),
                r = e.value;
            return e.isSmall ? (a === (r = Math.abs(r)) ? 0 : a > r ? 1 : -1) : -1;
        }),
        (c.prototype.compareAbs = function (t) {
            var e = this.value,
                a = V(t).value;
            return (e = e >= 0 ? e : -e) === (a = a >= 0 ? a : -a) ? 0 : e > a ? 1 : -1;
        }),
        (o.prototype.compare = function (t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = V(t),
                a = this.value,
                r = e.value;
            return this.sign !== e.sign ? (e.sign ? 1 : -1) : e.isSmall ? (this.sign ? -1 : 1) : m(a, r) * (this.sign ? -1 : 1);
        }),
        (o.prototype.compareTo = o.prototype.compare),
        (i.prototype.compare = function (t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = V(t),
                a = this.value,
                r = e.value;
            return e.isSmall ? (a == r ? 0 : a > r ? 1 : -1) : a < 0 !== e.sign ? (a < 0 ? -1 : 1) : a < 0 ? 1 : -1;
        }),
        (i.prototype.compareTo = i.prototype.compare),
        (c.prototype.compare = function (t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = this.value,
                a = V(t).value;
            return e === a ? 0 : e > a ? 1 : -1;
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (o.prototype.equals = function (t) {
            return 0 === this.compare(t);
        }),
        (c.prototype.eq = c.prototype.equals = i.prototype.eq = i.prototype.equals = o.prototype.eq = o.prototype.equals),
        (o.prototype.notEquals = function (t) {
            return 0 !== this.compare(t);
        }),
        (c.prototype.neq = c.prototype.notEquals = i.prototype.neq = i.prototype.notEquals = o.prototype.neq = o.prototype.notEquals),
        (o.prototype.greater = function (t) {
            return this.compare(t) > 0;
        }),
        (c.prototype.gt = c.prototype.greater = i.prototype.gt = i.prototype.greater = o.prototype.gt = o.prototype.greater),
        (o.prototype.lesser = function (t) {
            return 0 > this.compare(t);
        }),
        (c.prototype.lt = c.prototype.lesser = i.prototype.lt = i.prototype.lesser = o.prototype.lt = o.prototype.lesser),
        (o.prototype.greaterOrEquals = function (t) {
            return this.compare(t) >= 0;
        }),
        (c.prototype.geq = c.prototype.greaterOrEquals = i.prototype.geq = i.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals),
        (o.prototype.lesserOrEquals = function (t) {
            return 0 >= this.compare(t);
        }),
        (c.prototype.leq = c.prototype.lesserOrEquals = i.prototype.leq = i.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals),
        (o.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (i.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (c.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (o.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (i.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (c.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (o.prototype.isPositive = function () {
            return !this.sign;
        }),
        (i.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (c.prototype.isPositive = i.prototype.isPositive),
        (o.prototype.isNegative = function () {
            return this.sign;
        }),
        (i.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (c.prototype.isNegative = i.prototype.isNegative),
        (o.prototype.isUnit = function () {
            return !1;
        }),
        (i.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (c.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (o.prototype.isZero = function () {
            return !1;
        }),
        (i.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (c.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (o.prototype.isDivisibleBy = function (t) {
            var e = V(t);
            return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()));
        }),
        (c.prototype.isDivisibleBy = i.prototype.isDivisibleBy = o.prototype.isDivisibleBy),
        (o.prototype.isPrime = function (t) {
            var e = y(this);
            if (void 0 !== e) return e;
            var a = this.abs(),
                n = a.bitLength();
            if (n <= 64) return v(a, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var _ = Math.log(2) * n.toJSNumber(), o = Math.ceil(!0 === t ? 2 * Math.pow(_, 2) : _), i = [], c = 0; c < o; c++) i.push(r(c + 2));
            return v(a, i);
        }),
        (c.prototype.isPrime = i.prototype.isPrime = o.prototype.isPrime),
        (o.prototype.isProbablePrime = function (e, a) {
            var n = y(this);
            if (void 0 !== n) return n;
            for (var _ = this.abs(), o = t === e ? 5 : e, i = [], c = 0; c < o; c++) i.push(r.randBetween(2, _.minus(2), a));
            return v(_, i);
        }),
        (c.prototype.isProbablePrime = i.prototype.isProbablePrime = o.prototype.isProbablePrime),
        (o.prototype.modInv = function (t) {
            for (var e, a, n, _ = r.zero, o = r.one, i = V(t), c = this.abs(); !c.isZero(); ) (e = i.divide(c)), (a = _), (n = i), (_ = o), (i = c), (o = a.subtract(e.multiply(o))), (c = n.subtract(e.multiply(c)));
            if (!i.isUnit()) throw Error(this.toString() + ' and ' + t.toString() + ' are not co-prime');
            return (-1 === _.compare(0) && (_ = _.add(t)), this.isNegative()) ? _.negate() : _;
        }),
        (c.prototype.modInv = i.prototype.modInv = o.prototype.modInv),
        (o.prototype.next = function () {
            var t = this.value;
            return this.sign ? N(t, 1, this.sign) : new o(f(t, 1), this.sign);
        }),
        (i.prototype.next = function () {
            var t = this.value;
            return t + 1 < 9007199254740992 ? new i(t + 1) : new o(e, !1);
        }),
        (c.prototype.next = function () {
            return new c(this.value + BigInt(1));
        }),
        (o.prototype.prev = function () {
            var t = this.value;
            return this.sign ? new o(f(t, 1), !0) : N(t, 1, this.sign);
        }),
        (i.prototype.prev = function () {
            var t = this.value;
            return t - 1 > -9007199254740992 ? new i(t - 1) : new o(e, !0);
        }),
        (c.prototype.prev = function () {
            return new c(this.value - BigInt(1));
        });
    for (var C = [1]; 2 * C[C.length - 1] <= 10000000; ) C.push(2 * C[C.length - 1]);
    var S = C.length,
        G = C[S - 1];
    function b(t) {
        return 10000000 >= Math.abs(t);
    }
    function M(t, e, a) {
        e = V(e);
        for (var n = t.isNegative(), _ = e.isNegative(), o = n ? t.not() : t, i = _ ? e.not() : e, c = 0, s = 0, E = null, l = null, u = []; !o.isZero() || !i.isZero(); ) (c = (E = P(o, G))[1].toJSNumber()), n && (c = G - 1 - c), (s = (l = P(i, G))[1].toJSNumber()), _ && (s = G - 1 - s), (o = E[0]), (i = l[0]), u.push(a(c, s));
        for (var I = 0 !== a(+!!n, +!!_) ? r(-1) : r(0), R = u.length - 1; R >= 0; R -= 1) I = I.multiply(G).add(r(u[R]));
        return I;
    }
    (o.prototype.shiftLeft = function (t) {
        var e = V(t).toJSNumber();
        if (!b(e)) throw Error(String(e) + ' is too large for shifting.');
        if (e < 0) return this.shiftRight(-e);
        var a = this;
        if (a.isZero()) return a;
        for (; e >= S; ) (a = a.multiply(G)), (e -= S - 1);
        return a.multiply(C[e]);
    }),
        (c.prototype.shiftLeft = i.prototype.shiftLeft = o.prototype.shiftLeft),
        (o.prototype.shiftRight = function (t) {
            var e,
                a = V(t).toJSNumber();
            if (!b(a)) throw Error(String(a) + ' is too large for shifting.');
            if (a < 0) return this.shiftLeft(-a);
            for (var r = this; a >= S; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (e = P(r, G))[1].isNegative() ? e[0].prev() : e[0]), (a -= S - 1);
            }
            return (e = P(r, C[a]))[1].isNegative() ? e[0].prev() : e[0];
        }),
        (c.prototype.shiftRight = i.prototype.shiftRight = o.prototype.shiftRight),
        (o.prototype.not = function () {
            return this.negate().prev();
        }),
        (c.prototype.not = i.prototype.not = o.prototype.not),
        (o.prototype.and = function (t) {
            return M(this, t, function (t, e) {
                return t & e;
            });
        }),
        (c.prototype.and = i.prototype.and = o.prototype.and),
        (o.prototype.or = function (t) {
            return M(this, t, function (t, e) {
                return t | e;
            });
        }),
        (c.prototype.or = i.prototype.or = o.prototype.or),
        (o.prototype.xor = function (t) {
            return M(this, t, function (t, e) {
                return t ^ e;
            });
        }),
        (c.prototype.xor = i.prototype.xor = o.prototype.xor);
    function U(t) {
        var e = t.value,
            a = 'number' == typeof e ? 1073741824 | e : 'bigint' == typeof e ? e | BigInt(1073741824) : (e[0] + 10000000 * e[1]) | 1073758208;
        return a & -a;
    }
    function w(t, e) {
        return (t = V(t)), (e = V(e)), t.greater(e) ? t : e;
    }
    function B(t, e) {
        return (t = V(t)), (e = V(e)), t.lesser(e) ? t : e;
    }
    function W(t, e) {
        if (((t = V(t).abs()), (e = V(e).abs()), t.equals(e))) return t;
        if (t.isZero()) return e;
        if (e.isZero()) return t;
        for (var a, r, n = _[1]; t.isEven() && e.isEven(); ) (a = B(U(t), U(e))), (t = t.divide(a)), (e = e.divide(a)), (n = n.multiply(a));
        for (; t.isEven(); ) t = t.divide(U(t));
        do {
            for (; e.isEven(); ) e = e.divide(U(e));
            t.greater(e) && ((r = e), (e = t), (t = r)), (e = e.subtract(t));
        } while (!e.isZero());
        return n.isUnit() ? t : t.multiply(n);
    }
    (o.prototype.bitLength = function () {
        var t = this;
        return (0 > t.compareTo(r(0)) && (t = t.negate().subtract(r(1))), 0 === t.compareTo(r(0)))
            ? r(0)
            : r(
                  (function t(e, a) {
                      if (0 >= a.compareTo(e)) {
                          var n = t(e, a.square(a)),
                              _ = n.p,
                              o = n.e,
                              i = _.multiply(a);
                          return 0 >= i.compareTo(e)
                              ? {
                                    p: i,
                                    e: 2 * o + 1
                                }
                              : {
                                    p: _,
                                    e: 2 * o
                                };
                      }
                      return {
                          p: r(1),
                          e: 0
                      };
                  })(t, r(2)).e
              ).add(r(1));
    }),
        (c.prototype.bitLength = i.prototype.bitLength = o.prototype.bitLength);
    var Y = function (t, e, r, n) {
        (r = r || a), (t = String(t)), n || ((t = t.toLowerCase()), (r = r.toLowerCase()));
        var _,
            o = t.length,
            i = Math.abs(e),
            c = {};
        for (_ = 0; _ < r.length; _++) c[r[_]] = _;
        for (_ = 0; _ < o; _++) {
            var s = t[_];
            if ('-' !== s && s in c && c[s] >= i) {
                if ('1' === s && 1 === i) continue;
                throw Error(s + ' is not a valid digit in base ' + e + '.');
            }
        }
        e = V(e);
        var E = [],
            l = '-' === t[0];
        for (_ = +!!l; _ < t.length; _++) {
            var s = t[_];
            if (s in c) E.push(V(c[s]));
            else if ('<' === s) {
                var u = _;
                do _++;
                while ('>' !== t[_] && _ < t.length);
                E.push(V(t.slice(u + 1, _)));
            } else throw Error(s + ' is not a valid character');
        }
        return H(E, e, l);
    };
    function H(t, e, a) {
        var r,
            n = _[0],
            o = _[1];
        for (r = t.length - 1; r >= 0; r--) (n = n.add(t[r].times(o))), (o = o.times(e));
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
        for (var _, o = [], i = t; i.isNegative() || i.compareAbs(e) >= 0; ) {
            i = (_ = i.divmod(e)).quotient;
            var c = _.remainder;
            c.isNegative() && ((c = e.minus(c).abs()), (i = i.next())), o.push(c.toJSNumber());
        }
        return (
            o.push(i.toJSNumber()),
            {
                value: o.reverse(),
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
            var _ = r[1];
            if (('+' === _[0] && (_ = _.slice(1)), (_ *= 1) !== R(_) || !s(_))) throw Error('Invalid integer: ' + _ + ' is not a valid exponent.');
            var E = r[0],
                l = E.indexOf('.');
            if ((l >= 0 && ((_ -= E.length - l - 1), (E = E.slice(0, l) + E.slice(l + 1))), _ < 0)) throw Error('Cannot include negative exponent part for integers');
            (E += Array(_ + 1).join('0')), (t = E);
        }
        if (!/^([0-9][0-9]*)$/.test(t)) throw Error('Invalid integer: ' + t);
        if (n) return new c(BigInt(a ? '-' + t : t));
        for (var I = [], d = t.length, A = d - 7; d > 0; ) I.push(+t.slice(A, d)), (A -= 7) < 0 && (A = 0), (d -= 7);
        return u(I), new o(I, a);
    }
    function V(t) {
        if ('number' == typeof t) {
            if (n) return new c(BigInt(t));
            if (s(t)) {
                if (t !== R(t)) throw Error(t + ' is not an integer.');
                return new i(t);
            }
            return x(t.toString());
        }
        return 'string' == typeof t ? x(t) : 'bigint' == typeof t ? new c(t) : t;
    }
    (o.prototype.toArray = function (t) {
        return K(this, t);
    }),
        (i.prototype.toArray = function (t) {
            return K(this, t);
        }),
        (c.prototype.toArray = function (t) {
            return K(this, t);
        }),
        (o.prototype.toString = function (e, a) {
            if ((t === e && (e = 10), 10 !== e)) return k(this, e, a);
            for (var r, n = this.value, _ = n.length, o = String(n[--_]); --_ >= 0; ) (r = String(n[_])), (o += '0000000'.slice(r.length) + r);
            return (this.sign ? '-' : '') + o;
        }),
        (i.prototype.toString = function (e, a) {
            return (t === e && (e = 10), 10 != e) ? k(this, e, a) : String(this.value);
        }),
        (c.prototype.toString = i.prototype.toString),
        (c.prototype.toJSON =
            o.prototype.toJSON =
            i.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (o.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (o.prototype.toJSNumber = o.prototype.valueOf),
        (i.prototype.valueOf = function () {
            return this.value;
        }),
        (i.prototype.toJSNumber = i.prototype.valueOf),
        (c.prototype.valueOf = c.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var F = 0; F < 1000; F++) (_[F] = V(F)), F > 0 && (_[-F] = V(-F));
    return (
        (_.one = _[1]),
        (_.zero = _[0]),
        (_.minusOne = _[-1]),
        (_.max = w),
        (_.min = B),
        (_.gcd = W),
        (_.lcm = function (t, e) {
            return (t = V(t).abs()), (e = V(e).abs()), t.divide(W(t, e)).multiply(e);
        }),
        (_.isInstance = function (t) {
            return t instanceof o || t instanceof i || t instanceof c;
        }),
        (_.randBetween = function (t, e, a) {
            t = V(t);
            var r = a || Math.random,
                n = B(t, (e = V(e))),
                o = w(t, e).subtract(n).add(1);
            if (o.isSmall) return n.add(Math.floor(r() * o));
            for (var i = K(o, 10000000).value, c = [], s = !0, E = 0; E < i.length; E++) {
                var l = s ? i[E] : 10000000,
                    u = R(r() * l);
                c.push(u), u < l && (s = !1);
            }
            return n.add(_.fromArray(c, 10000000, !1));
        }),
        (_.fromArray = function (t, e, a) {
            return H(t.map(V), V(e || 10), a);
        }),
        _
    );
})();
t.hasOwnProperty('exports') && (t.exports = r),
    'function' == typeof define &&
        define.amd &&
        define(function () {
            return r;
        });
