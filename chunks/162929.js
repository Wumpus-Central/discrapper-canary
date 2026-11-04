var r,
    a,
    i = "0123456789abcdef",
    s =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    o =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    u = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    l = !0,
    d = "[DecimalError] ",
    c = d + "Invalid argument: ",
    f = d + "Precision limit exceeded",
    _ = d + "crypto unavailable",
    h = "[object Decimal]",
    p = Math.floor,
    m = Math.pow,
    y = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    w = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    v = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    b = s.length - 1,
    S = o.length - 1,
    z = { toStringTag: h };
function k(e) {
    var n,
        t,
        r,
        a = e.length - 1,
        i = "",
        s = e[0];
    if (a > 0) {
        for (i += s, n = 1; n < a; n++) ((t = 7 - (r = e[n] + "").length) && (i += P(t)), (i += r));
        (t = 7 - (r = (s = e[n]) + "").length) && (i += P(t));
    } else if (0 === s) return "0";
    for (; s % 10 == 0;) s /= 10;
    return i + s;
}
function E(e, n, t) {
    if (e !== ~~e || e < n || e > t) throw Error(c + e);
}
function T(e, n, t, r) {
    var a, i, s, o;
    for (i = e[0]; i >= 10; i /= 10) --n;
    return (
        --n < 0 ? ((n += 7), (a = 0)) : ((a = Math.ceil((n + 1) / 7)), (n %= 7)),
        (i = m(10, 7 - n)),
        (o = (e[a] % i) | 0),
        null == r
            ? n < 3
                ? (0 == n ? (o = (o / 100) | 0) : 1 == n && (o = (o / 10) | 0),
                  (s = (t < 4 && 99999 == o) || (t > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (s =
                      (((t < 4 && o + 1 == i) || (t > 3 && o + 1 == i / 2)) &&
                          ((e[a + 1] / i / 100) | 0) == m(10, n - 2) - 1) ||
                      ((o == i / 2 || 0 == o) && ((e[a + 1] / i / 100) | 0) == 0))
            : n < 4
              ? (0 == n ? (o = (o / 1e3) | 0) : 1 == n ? (o = (o / 100) | 0) : 2 == n && (o = (o / 10) | 0),
                (s = ((r || t < 4) && 9999 == o) || (!r && t > 3 && 4999 == o)))
              : (s =
                    (((r || t < 4) && o + 1 == i) || (!r && t > 3 && o + 1 == i / 2)) &&
                    ((e[a + 1] / i / 1e3) | 0) == m(10, n - 3) - 1),
        s
    );
}
function A(e, n, t) {
    for (var r, a, s = [0], o = 0, u = e.length; o < u;) {
        for (a = s.length; a--;) s[a] *= n;
        for (s[0] += i.indexOf(e.charAt(o++)), r = 0; r < s.length; r++)
            s[r] > t - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), (s[r + 1] += (s[r] / t) | 0), (s[r] %= t));
    }
    return s.reverse();
}
((z.absoluteValue = z.abs =
    function () {
        var e = new this.constructor(this);
        return (e.s < 0 && (e.s = 1), O(e));
    }),
    (z.ceil = function () {
        return O(new this.constructor(this), this.e + 1, 2);
    }),
    (z.clampedTo = z.clamp =
        function (e, n) {
            var t = this.constructor;
            if (((e = new t(e)), (n = new t(n)), !e.s || !n.s)) return new t(0 / 0);
            if (e.gt(n)) throw Error(c + n);
            return 0 > this.cmp(e) ? e : this.cmp(n) > 0 ? n : new t(this);
        }),
    (z.comparedTo = z.cmp =
        function (e) {
            var n,
                t,
                r,
                a,
                i = this.d,
                s = (e = new this.constructor(e)).d,
                o = this.s,
                u = e.s;
            if (!i || !s) return o && u ? (o !== u ? o : i === s ? 0 : !i ^ (o < 0) ? 1 : -1) : 0 / 0;
            if (!i[0] || !s[0]) return i[0] ? o : s[0] ? -u : 0;
            if (o !== u) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (r = i.length, n = 0, t = r < (a = s.length) ? r : a; n < t; ++n)
                if (i[n] !== s[n]) return (i[n] > s[n]) ^ (o < 0) ? 1 : -1;
            return r === a ? 0 : (r > a) ^ (o < 0) ? 1 : -1;
        }),
    (z.cosine = z.cos =
        function () {
            var e,
                n,
                t = this,
                r = t.constructor;
            return t.d
                ? t.d[0]
                    ? ((e = r.precision),
                      (n = r.rounding),
                      (r.precision = e + Math.max(t.e, t.sd()) + 7),
                      (r.rounding = 1),
                      (t = (function (e, n) {
                          var t, r, a;
                          if (n.isZero()) return n;
                          ((r = n.d.length) < 32
                              ? (a = (1 / U(4, (t = Math.ceil(r / 3)))).toString())
                              : ((t = 16), (a = "2.3283064365386962890625e-10")),
                              (e.precision += t),
                              (n = B(e, 1, n.times(a), new e(1))));
                          for (var i = t; i--;) {
                              var s = n.times(n);
                              n = s.times(s).minus(s).times(8).plus(1);
                          }
                          return ((e.precision -= t), n);
                      })(r, q(r, t))),
                      (r.precision = e),
                      (r.rounding = n),
                      O(2 == a || 3 == a ? t.neg() : t, e, n, !0))
                    : new r(1)
                : new r(0 / 0);
        }),
    (z.cubeRoot = z.cbrt =
        function () {
            var e,
                n,
                t,
                r,
                a,
                i,
                s,
                o,
                u,
                d,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                l = !1,
                    (i = this.s * m(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(i)
                        ? (r = new c(i.toString()))
                        : ((t = k(this.d)),
                          (i = ((e = this.e) - t.length + 1) % 3) && (t += 1 == i || -2 == i ? "0" : "00"),
                          (i = m(t, 1 / 3)),
                          (e = p((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new c(
                              (t = 1 / 0 == i ? "5e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    s = (e = c.precision) + 3;
                ;
            )
                if (
                    ((r = M((d = (u = (o = r).times(o).times(o)).plus(this)).plus(this).times(o), d.plus(u), s + 2, 1)),
                    k(o.d).slice(0, s) === (t = k(r.d)).slice(0, s))
                ) {
                    if ("9999" != (t = t.slice(s - 3, s + 1)) && (a || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (O(r, e + 1, 1), (n = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!a && (O(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        r = o;
                        break;
                    }
                    ((s += 4), (a = 1));
                }
            return ((l = !0), O(r, e, c.rounding, n));
        }),
    (z.decimalPlaces = z.dp =
        function () {
            var e,
                n = this.d,
                t = 0 / 0;
            if (n) {
                if (((t = ((e = n.length - 1) - p(this.e / 7)) * 7), (e = n[e]))) for (; e % 10 == 0; e /= 10) t--;
                t < 0 && (t = 0);
            }
            return t;
        }),
    (z.dividedBy = z.div =
        function (e) {
            return M(this, new this.constructor(e));
        }),
    (z.dividedToIntegerBy = z.divToInt =
        function (e) {
            var n = this.constructor;
            return O(M(this, new n(e), 0, 1, 1), n.precision, n.rounding);
        }),
    (z.equals = z.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (z.floor = function () {
        return O(new this.constructor(this), this.e + 1, 3);
    }),
    (z.greaterThan = z.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (z.greaterThanOrEqualTo = z.gte =
        function (e) {
            var n = this.cmp(e);
            return 1 == n || 0 === n;
        }),
    (z.hyperbolicCosine = z.cosh =
        function () {
            var e,
                n,
                t,
                r,
                a,
                i = this,
                s = i.constructor,
                o = new s(1);
            if (!i.isFinite()) return new s(i.s ? 1 / 0 : 0 / 0);
            if (i.isZero()) return o;
            ((t = s.precision),
                (r = s.rounding),
                (s.precision = t + Math.max(i.e, i.sd()) + 4),
                (s.rounding = 1),
                (a = i.d.length) < 32
                    ? (n = (1 / U(4, (e = Math.ceil(a / 3)))).toString())
                    : ((e = 16), (n = "2.3283064365386962890625e-10")),
                (i = B(s, 1, i.times(n), new s(1), !0)));
            for (var u, l = e, d = new s(8); l--;) ((u = i.times(i)), (i = o.minus(u.times(d.minus(u.times(d))))));
            return O(i, (s.precision = t), (s.rounding = r), !0);
        }),
    (z.hyperbolicSine = z.sinh =
        function () {
            var e,
                n,
                t,
                r,
                a = this,
                i = a.constructor;
            if (!a.isFinite() || a.isZero()) return new i(a);
            if (
                ((n = i.precision),
                (t = i.rounding),
                (i.precision = n + Math.max(a.e, a.sd()) + 4),
                (i.rounding = 1),
                (r = a.d.length) < 3)
            )
                a = B(i, 2, a, a, !0);
            else {
                ((e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (a = B(i, 2, (a = a.times(1 / U(5, e))), a, !0)));
                for (var s, o = new i(5), u = new i(16), l = new i(20); e--;)
                    ((s = a.times(a)), (a = a.times(o.plus(s.times(u.times(s).plus(l))))));
            }
            return ((i.precision = n), (i.rounding = t), O(a, n, t, !0));
        }),
    (z.hyperbolicTangent = z.tanh =
        function () {
            var e,
                n,
                t = this.constructor;
            return this.isFinite()
                ? this.isZero()
                    ? new t(this)
                    : ((e = t.precision),
                      (n = t.rounding),
                      (t.precision = e + 7),
                      (t.rounding = 1),
                      M(this.sinh(), this.cosh(), (t.precision = e), (t.rounding = n)))
                : new t(this.s);
        }),
    (z.inverseCosine = z.acos =
        function () {
            var e = this,
                n = e.constructor,
                t = e.abs().cmp(1),
                r = n.precision,
                a = n.rounding;
            return -1 !== t
                ? 0 === t
                    ? e.isNeg()
                        ? x(n, r, a)
                        : new n(0)
                    : new n(0 / 0)
                : e.isZero()
                  ? x(n, r + 4, a).times(0.5)
                  : ((n.precision = r + 6),
                    (n.rounding = 1),
                    (e = new n(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (n.precision = r),
                    (n.rounding = a),
                    e.times(2));
        }),
    (z.inverseHyperbolicCosine = z.acosh =
        function () {
            var e,
                n,
                t = this,
                r = t.constructor;
            return t.lte(1)
                ? new r(t.eq(1) ? 0 : 0 / 0)
                : t.isFinite()
                  ? ((e = r.precision),
                    (n = r.rounding),
                    (r.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4),
                    (r.rounding = 1),
                    (l = !1),
                    (t = t.times(t).minus(1).sqrt().plus(t)),
                    (l = !0),
                    (r.precision = e),
                    (r.rounding = n),
                    t.ln())
                  : new r(t);
        }),
    (z.inverseHyperbolicSine = z.asinh =
        function () {
            var e,
                n,
                t = this,
                r = t.constructor;
            return !t.isFinite() || t.isZero()
                ? new r(t)
                : ((e = r.precision),
                  (n = r.rounding),
                  (r.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6),
                  (r.rounding = 1),
                  (l = !1),
                  (t = t.times(t).plus(1).sqrt().plus(t)),
                  (l = !0),
                  (r.precision = e),
                  (r.rounding = n),
                  t.ln());
        }),
    (z.inverseHyperbolicTangent = z.atanh =
        function () {
            var e,
                n,
                t,
                r,
                a = this,
                i = a.constructor;
            return a.isFinite()
                ? a.e >= 0
                    ? new i(a.abs().eq(1) ? a.s / 0 : a.isZero() ? a : 0 / 0)
                    : ((e = i.precision), (n = i.rounding), Math.max((r = a.sd()), e) < -(2 * a.e) - 1)
                      ? O(new i(a), e, n, !0)
                      : ((i.precision = t = r - a.e),
                        (a = M(a.plus(1), new i(1).minus(a), t + e, 1)),
                        (i.precision = e + 4),
                        (i.rounding = 1),
                        (a = a.ln()),
                        (i.precision = e),
                        (i.rounding = n),
                        a.times(0.5))
                : new i(0 / 0);
        }),
    (z.inverseSine = z.asin =
        function () {
            var e,
                n,
                t,
                r,
                a = this,
                i = a.constructor;
            return a.isZero()
                ? new i(a)
                : ((n = a.abs().cmp(1)), (t = i.precision), (r = i.rounding), -1 !== n)
                  ? 0 === n
                      ? (((e = x(i, t + 4, r).times(0.5)).s = a.s), e)
                      : new i(0 / 0)
                  : ((i.precision = t + 6),
                    (i.rounding = 1),
                    (a = a.div(new i(1).minus(a.times(a)).sqrt().plus(1)).atan()),
                    (i.precision = t),
                    (i.rounding = r),
                    a.times(2));
        }),
    (z.inverseTangent = z.atan =
        function () {
            var e,
                n,
                t,
                r,
                a,
                i,
                s,
                o,
                u,
                d = this,
                c = d.constructor,
                f = c.precision,
                _ = c.rounding;
            if (d.isFinite()) {
                if (d.isZero()) return new c(d);
                else if (d.abs().eq(1) && f + 4 <= S) return (((s = x(c, f + 4, _).times(0.25)).s = d.s), s);
            } else {
                if (!d.s) return new c(0 / 0);
                if (f + 4 <= S) return (((s = x(c, f + 4, _).times(0.5)).s = d.s), s);
            }
            for (c.precision = o = f + 10, c.rounding = 1, e = t = Math.min(28, (o / 7 + 2) | 0); e; --e)
                d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (l = !1, n = Math.ceil(o / 7), r = 1, u = d.times(d), s = new c(d), a = d; -1 !== e;)
                if (
                    ((a = a.times(u)),
                    (i = s.minus(a.div((r += 2)))),
                    (a = a.times(u)),
                    void 0 !== (s = i.plus(a.div((r += 2)))).d[n])
                )
                    for (e = n; s.d[e] === i.d[e] && e--;);
            return (t && (s = s.times(2 << (t - 1))), (l = !0), O(s, (c.precision = f), (c.rounding = _), !0));
        }),
    (z.isFinite = function () {
        return !!this.d;
    }),
    (z.isInteger = z.isInt =
        function () {
            return !!this.d && p(this.e / 7) > this.d.length - 2;
        }),
    (z.isNaN = function () {
        return !this.s;
    }),
    (z.isNegative = z.isNeg =
        function () {
            return this.s < 0;
        }),
    (z.isPositive = z.isPos =
        function () {
            return this.s > 0;
        }),
    (z.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (z.lessThan = z.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (z.lessThanOrEqualTo = z.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (z.logarithm = z.log =
        function (e) {
            var n,
                t,
                r,
                a,
                i,
                s,
                o,
                u = this.constructor,
                d = u.precision,
                c = u.rounding;
            if (null == e) ((e = new u(10)), (n = !0));
            else {
                if (((t = (e = new u(e)).d), e.s < 0 || !t || !t[0] || e.eq(1))) return new u(0 / 0);
                n = e.eq(10);
            }
            if (((t = this.d), this.s < 0 || !t || !t[0] || this.eq(1)))
                return new u(t && !t[0] ? -1 / 0 : 1 != this.s ? 0 / 0 : t ? 0 : 1 / 0);
            if (n)
                if (t.length > 1) a = !0;
                else {
                    for (r = t[0]; r % 10 == 0;) r /= 10;
                    a = 1 !== r;
                }
            if (((l = !1), T((o = M((i = R(this, (s = d + 5))), n ? N(u, s + 10) : R(e, s), s, 1)).d, (r = d), c)))
                do
                    if (((s += 10), (o = M((i = R(this, s)), n ? N(u, s + 10) : R(e, s), s, 1)), !a)) {
                        +k(o.d).slice(r + 1, r + 15) + 1 == 1e14 && (o = O(o, d + 1, 0));
                        break;
                    }
                while (T(o.d, (r += 10), c));
            return ((l = !0), O(o, d, c));
        }),
    (z.minus = z.sub =
        function (e) {
            var n,
                t,
                r,
                a,
                i,
                s,
                o,
                u,
                d,
                c,
                f,
                _,
                h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
                return (
                    this.s && e.s
                        ? this.d
                            ? (e.s = -e.s)
                            : (e = new h(e.d || this.s !== e.s ? this : 0 / 0))
                        : (e = new h(0 / 0)),
                    e
                );
            if (this.s != e.s) return ((e.s = -e.s), this.plus(e));
            if (((d = this.d), (_ = e.d), (o = h.precision), (u = h.rounding), !d[0] || !_[0])) {
                if (_[0]) e.s = -e.s;
                else {
                    if (!d[0]) return new h(3 === u ? -0 : 0);
                    e = new h(this);
                }
                return l ? O(e, o, u) : e;
            }
            if (((t = p(e.e / 7)), (c = p(this.e / 7)), (d = d.slice()), (i = c - t))) {
                for (
                    (f = i < 0) ? ((n = d), (i = -i), (s = _.length)) : ((n = _), (t = c), (s = d.length)),
                        i > (r = Math.max(Math.ceil(o / 7), s) + 2) && ((i = r), (n.length = 1)),
                        n.reverse(),
                        r = i;
                    r--;
                )
                    n.push(0);
                n.reverse();
            } else {
                for ((f = (r = d.length) < (s = _.length)) && (s = r), r = 0; r < s; r++)
                    if (d[r] != _[r]) {
                        f = d[r] < _[r];
                        break;
                    }
                i = 0;
            }
            for (f && ((n = d), (d = _), (_ = n), (e.s = -e.s)), s = d.length, r = _.length - s; r > 0; --r) d[s++] = 0;
            for (r = _.length; r > i;) {
                if (d[--r] < _[r]) {
                    for (a = r; a && 0 === d[--a];) d[a] = 1e7 - 1;
                    (--d[a], (d[r] += 1e7));
                }
                d[r] -= _[r];
            }
            for (; 0 === d[--s];) d.pop();
            for (; 0 === d[0]; d.shift()) --t;
            return d[0] ? ((e.d = d), (e.e = C(d, t)), l ? O(e, o, u) : e) : new h(3 === u ? -0 : 0);
        }),
    (z.modulo = z.mod =
        function (e) {
            var n,
                t = this.constructor;
            return ((e = new t(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((l = !1),
                      9 == t.modulo
                          ? ((n = M(this, e.abs(), 0, 3, 1)), (n.s *= e.s))
                          : (n = M(this, e, 0, t.modulo, 1)),
                      (n = n.times(e)),
                      (l = !0),
                      this.minus(n))
                    : O(new t(this), t.precision, t.rounding)
                : new t(0 / 0);
        }),
    (z.naturalExponential = z.exp =
        function () {
            return G(this);
        }),
    (z.naturalLogarithm = z.ln =
        function () {
            return R(this);
        }),
    (z.negated = z.neg =
        function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s), O(e));
        }),
    (z.plus = z.add =
        function (e) {
            var n,
                t,
                r,
                a,
                i,
                s,
                o,
                u,
                d,
                c,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return (
                    this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : 0 / 0)) : (e = new f(0 / 0)), e
                );
            if (this.s != e.s) return ((e.s = -e.s), this.minus(e));
            if (((d = this.d), (c = e.d), (o = f.precision), (u = f.rounding), !d[0] || !c[0]))
                return (c[0] || (e = new f(this)), l ? O(e, o, u) : e);
            if (((i = p(this.e / 7)), (r = p(e.e / 7)), (d = d.slice()), (a = i - r))) {
                for (
                    a < 0 ? ((t = d), (a = -a), (s = c.length)) : ((t = c), (r = i), (s = d.length)),
                        a > (s = (i = Math.ceil(o / 7)) > s ? i + 1 : s + 1) && ((a = s), (t.length = 1)),
                        t.reverse();
                    a--;
                )
                    t.push(0);
                t.reverse();
            }
            for ((s = d.length) - (a = c.length) < 0 && ((a = s), (t = c), (c = d), (d = t)), n = 0; a;)
                ((n = ((d[--a] = d[a] + c[a] + n) / 1e7) | 0), (d[a] %= 1e7));
            for (n && (d.unshift(n), ++r), s = d.length; 0 == d[--s];) d.pop();
            return ((e.d = d), (e.e = C(d, r)), l ? O(e, o, u) : e);
        }),
    (z.precision = z.sd =
        function (e) {
            var n;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
            return (this.d ? ((n = D(this.d)), e && this.e + 1 > n && (n = this.e + 1)) : (n = 0 / 0), n);
        }),
    (z.round = function () {
        var e = this.constructor;
        return O(new e(this), this.e + 1, e.rounding);
    }),
    (z.sine = z.sin =
        function () {
            var e,
                n,
                t = this,
                r = t.constructor;
            return t.isFinite()
                ? t.isZero()
                    ? new r(t)
                    : ((e = r.precision),
                      (n = r.rounding),
                      (r.precision = e + Math.max(t.e, t.sd()) + 7),
                      (r.rounding = 1),
                      (t = (function (e, n) {
                          var t,
                              r = n.d.length;
                          if (r < 3) return n.isZero() ? n : B(e, 2, n, n);
                          ((t = (t = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | t),
                              (n = B(e, 2, (n = n.times(1 / U(5, t))), n)));
                          for (var a, i = new e(5), s = new e(16), o = new e(20); t--;)
                              ((a = n.times(n)), (n = n.times(i.plus(a.times(s.times(a).minus(o))))));
                          return n;
                      })(r, q(r, t))),
                      (r.precision = e),
                      (r.rounding = n),
                      O(a > 2 ? t.neg() : t, e, n, !0))
                : new r(0 / 0);
        }),
    (z.squareRoot = z.sqrt =
        function () {
            var e,
                n,
                t,
                r,
                a,
                i,
                s = this.d,
                o = this.e,
                u = this.s,
                d = this.constructor;
            if (1 !== u || !s || !s[0]) return new d(!u || (u < 0 && (!s || s[0])) ? 0 / 0 : s ? this : 1 / 0);
            for (
                l = !1,
                    0 == (u = Math.sqrt(+this)) || 1 / 0 == u
                        ? (((n = k(s)).length + o) % 2 == 0 && (n += "0"),
                          (u = Math.sqrt(n)),
                          (o = p((o + 1) / 2) - (o < 0 || o % 2)),
                          (r = new d(
                              (n = 1 / 0 == u ? "5e" + o : (n = u.toExponential()).slice(0, n.indexOf("e") + 1) + o),
                          )))
                        : (r = new d(u.toString())),
                    t = (o = d.precision) + 3;
                ;
            )
                if (
                    ((r = (i = r).plus(M(this, i, t + 2, 1)).times(0.5)),
                    k(i.d).slice(0, t) === (n = k(r.d)).slice(0, t))
                ) {
                    if ("9999" != (n = n.slice(t - 3, t + 1)) && (a || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) || (O(r, o + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!a && (O(i, o + 1, 0), i.times(i).eq(this))) {
                        r = i;
                        break;
                    }
                    ((t += 4), (a = 1));
                }
            return ((l = !0), O(r, o, d.rounding, e));
        }),
    (z.tangent = z.tan =
        function () {
            var e,
                n,
                t = this,
                r = t.constructor;
            return t.isFinite()
                ? t.isZero()
                    ? new r(t)
                    : ((e = r.precision),
                      (n = r.rounding),
                      (r.precision = e + 10),
                      (r.rounding = 1),
                      ((t = t.sin()).s = 1),
                      (t = M(t, new r(1).minus(t.times(t)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = n),
                      O(2 == a || 4 == a ? t.neg() : t, e, n, !0))
                : new r(0 / 0);
        }),
    (z.times = z.mul =
        function (e) {
            var n,
                t,
                r,
                a,
                i,
                s,
                o,
                u,
                d,
                c = this.constructor,
                f = this.d,
                _ = (e = new c(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !_ || !_[0]))
                return new c(!e.s || (f && !f[0] && !_) || (_ && !_[0] && !f) ? 0 / 0 : !f || !_ ? e.s / 0 : 0 * e.s);
            for (
                t = p(this.e / 7) + p(e.e / 7),
                    (u = f.length) < (d = _.length) && ((i = f), (f = _), (_ = i), (s = u), (u = d), (d = s)),
                    i = [],
                    r = s = u + d;
                r--;
            )
                i.push(0);
            for (r = d; --r >= 0;) {
                for (n = 0, a = u + r; a > r;)
                    ((o = i[a] + _[r] * f[a - r - 1] + n), (i[a--] = (o % 1e7) | 0), (n = (o / 1e7) | 0));
                i[a] = ((i[a] + n) % 1e7) | 0;
            }
            for (; !i[--s];) i.pop();
            return (n ? ++t : i.shift(), (e.d = i), (e.e = C(i, t)), l ? O(e, c.precision, c.rounding) : e);
        }),
    (z.toBinary = function (e, n) {
        return H(this, 2, e, n);
    }),
    (z.toDecimalPlaces = z.toDP =
        function (e, n) {
            var t = this,
                r = t.constructor;
            return ((t = new r(t)), void 0 === e)
                ? t
                : (E(e, 0, 1e9), void 0 === n ? (n = r.rounding) : E(n, 0, 8), O(t, e + t.e + 1, n));
        }),
    (z.toExponential = function (e, n) {
        var t,
            r = this,
            a = r.constructor;
        return (
            void 0 === e
                ? (t = L(r, !0))
                : (E(e, 0, 1e9),
                  void 0 === n ? (n = a.rounding) : E(n, 0, 8),
                  (t = L((r = O(new a(r), e + 1, n)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + t : t
        );
    }),
    (z.toFixed = function (e, n) {
        var t,
            r,
            a = this.constructor;
        return (
            void 0 === e
                ? (t = L(this))
                : (E(e, 0, 1e9),
                  void 0 === n ? (n = a.rounding) : E(n, 0, 8),
                  (t = L((r = O(new a(this), e + this.e + 1, n)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + t : t
        );
    }),
    (z.toFraction = function (e) {
        var n,
            t,
            r,
            a,
            i,
            s,
            o,
            u,
            d,
            f,
            _,
            h,
            p = this.d,
            y = this.constructor;
        if (!p) return new y(this);
        if (
            ((d = t = new y(1)),
            (r = u = new y(0)),
            (s = (i = (n = new y(r)).e = D(p) - this.e - 1) % 7),
            (n.d[0] = m(10, s < 0 ? 7 + s : s)),
            null == e)
        )
            e = i > 0 ? n : d;
        else {
            if (!(o = new y(e)).isInt() || o.lt(d)) throw Error(c + o);
            e = o.gt(n) ? (i > 0 ? n : d) : o;
        }
        for (
            l = !1, o = new y(k(p)), f = y.precision, y.precision = i = 7 * p.length * 2;
            (_ = M(o, n, 0, 1, 1)), 1 != (a = t.plus(_.times(r))).cmp(e);
        )
            ((t = r), (r = a), (a = d), (d = u.plus(_.times(a))), (u = a), (a = n), (n = o.minus(_.times(a))), (o = a));
        return (
            (a = M(e.minus(t), r, 0, 1, 1)),
            (u = u.plus(a.times(d))),
            (t = t.plus(a.times(r))),
            (u.s = d.s = this.s),
            (h =
                1 >
                M(d, r, i, 1)
                    .minus(this)
                    .abs()
                    .cmp(M(u, t, i, 1).minus(this).abs())
                    ? [d, r]
                    : [u, t]),
            (y.precision = f),
            (l = !0),
            h
        );
    }),
    (z.toHexadecimal = z.toHex =
        function (e, n) {
            return H(this, 16, e, n);
        }),
    (z.toNearest = function (e, n) {
        var t = this,
            r = t.constructor;
        if (((t = new r(t)), null == e)) {
            if (!t.d) return t;
            ((e = new r(1)), (n = r.rounding));
        } else {
            if (((e = new r(e)), void 0 === n ? (n = r.rounding) : E(n, 0, 8), !t.d)) return e.s ? t : e;
            if (!e.d) return (e.s && (e.s = t.s), e);
        }
        return (e.d[0] ? ((l = !1), (t = M(t, e, 0, n, 1).times(e)), (l = !0), O(t)) : ((e.s = t.s), (t = e)), t);
    }),
    (z.toNumber = function () {
        return +this;
    }),
    (z.toOctal = function (e, n) {
        return H(this, 8, e, n);
    }),
    (z.toPower = z.pow =
        function (e) {
            var n,
                t,
                r,
                a,
                i,
                s,
                o = this,
                u = o.constructor,
                d = +(e = new u(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(m(+o, d));
            if ((o = new u(o)).eq(1)) return o;
            if (((r = u.precision), (i = u.rounding), e.eq(1))) return O(o, r, i);
            if ((n = p(e.e / 7)) >= e.d.length - 1 && (t = d < 0 ? -d : d) <= 0x1fffffffffffff)
                return ((a = I(u, o, t, r)), e.s < 0 ? new u(1).div(a) : O(a, r, i));
            if ((s = o.s) < 0) {
                if (n < e.d.length - 1) return new u(0 / 0);
                if (((1 & e.d[n]) == 0 && (s = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return ((o.s = s), o);
            }
            return (n =
                0 != (t = m(+o, d)) && isFinite(t)
                    ? new u(t + "").e
                    : p(d * (Math.log("0." + k(o.d)) / Math.LN10 + o.e + 1))) >
                u.maxE + 1 || n < u.minE - 1
                ? new u(n > 0 ? s / 0 : 0)
                : ((l = !1),
                  (u.rounding = o.s = 1),
                  (t = Math.min(12, (n + "").length)),
                  (a = G(e.times(R(o, r + t)), r)).d &&
                      T((a = O(a, r + 5, 1)).d, r, i) &&
                      ((n = r + 10),
                      +k((a = O(G(e.times(R(o, n + t)), n), n + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (a = O(a, r + 1, 0))),
                  (a.s = s),
                  (l = !0),
                  (u.rounding = i),
                  O(a, r, i));
        }),
    (z.toPrecision = function (e, n) {
        var t,
            r = this,
            a = r.constructor;
        return (
            void 0 === e
                ? (t = L(r, r.e <= a.toExpNeg || r.e >= a.toExpPos))
                : (E(e, 1, 1e9),
                  void 0 === n ? (n = a.rounding) : E(n, 0, 8),
                  (t = L((r = O(new a(r), e, n)), e <= r.e || r.e <= a.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + t : t
        );
    }),
    (z.toSignificantDigits = z.toSD =
        function (e, n) {
            var t = this.constructor;
            return (
                void 0 === e
                    ? ((e = t.precision), (n = t.rounding))
                    : (E(e, 1, 1e9), void 0 === n ? (n = t.rounding) : E(n, 0, 8)),
                O(new t(this), e, n)
            );
        }),
    (z.toString = function () {
        var e = this.constructor,
            n = L(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + n : n;
    }),
    (z.truncated = z.trunc =
        function () {
            return O(new this.constructor(this), this.e + 1, 1);
        }),
    (z.valueOf = z.toJSON =
        function () {
            var e = this.constructor,
                n = L(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + n : n;
        }));
var M = (function () {
    function e(e, n, t) {
        var r,
            a = 0,
            i = e.length;
        for (e = e.slice(); i--;) ((r = e[i] * n + a), (e[i] = (r % t) | 0), (a = (r / t) | 0));
        return (a && e.unshift(a), e);
    }
    function n(e, n, t, r) {
        var a, i;
        if (t != r) i = t > r ? 1 : -1;
        else
            for (a = i = 0; a < t; a++)
                if (e[a] != n[a]) {
                    i = e[a] > n[a] ? 1 : -1;
                    break;
                }
        return i;
    }
    function t(e, n, t, r) {
        for (var a = 0; t--;) ((e[t] -= a), (a = +(e[t] < n[t])), (e[t] = a * r + e[t] - n[t]));
        for (; !e[0] && e.length > 1;) e.shift();
    }
    return function (a, i, s, o, u, l) {
        var d,
            c,
            f,
            _,
            h,
            m,
            y,
            g,
            w,
            v,
            b,
            S,
            z,
            k,
            E,
            T,
            A,
            M,
            L,
            C,
            N = a.constructor,
            x = a.s == i.s ? 1 : -1,
            D = a.d,
            P = i.d;
        if (!D || !D[0] || !P || !P[0])
            return new N(!a.s || !i.s || (D ? P && D[0] == P[0] : !P) ? 0 / 0 : (D && 0 == D[0]) || !P ? 0 * x : x / 0);
        for (
            l ? ((h = 1), (c = a.e - i.e)) : ((l = 1e7), (h = 7), (c = p(a.e / h) - p(i.e / h))),
                L = P.length,
                A = D.length,
                v = (w = new N(x)).d = [],
                f = 0;
            P[f] == (D[f] || 0);
            f++
        );
        if (
            (P[f] > (D[f] || 0) && c--,
            null == s ? ((k = s = N.precision), (o = N.rounding)) : (k = u ? s + (a.e - i.e) + 1 : s),
            k < 0)
        )
            (v.push(1), (m = !0));
        else {
            if (((k = (k / h + 2) | 0), (f = 0), 1 == L)) {
                for (_ = 0, P = P[0], k++; (f < A || _) && k--; f++)
                    ((E = _ * l + (D[f] || 0)), (v[f] = (E / P) | 0), (_ = (E % P) | 0));
                m = _ || f < A;
            } else {
                for (
                    (_ = (l / (P[0] + 1)) | 0) > 1 &&
                        ((P = e(P, _, l)), (D = e(D, _, l)), (L = P.length), (A = D.length)),
                        T = L,
                        S = (b = D.slice(0, L)).length;
                    S < L;
                )
                    b[S++] = 0;
                ((C = P.slice()).unshift(0), (M = P[0]), P[1] >= l / 2 && ++M);
                do
                    ((_ = 0),
                        (d = n(P, b, L, S)) < 0
                            ? ((z = b[0]),
                              L != S && (z = z * l + (b[1] || 0)),
                              (_ = (z / M) | 0) > 1
                                  ? (_ >= l && (_ = l - 1),
                                    (g = (y = e(P, _, l)).length),
                                    (S = b.length),
                                    1 == (d = n(y, b, g, S)) && (_--, t(y, L < g ? C : P, g, l)))
                                  : (0 == _ && (d = _ = 1), (y = P.slice())),
                              (g = y.length) < S && y.unshift(0),
                              t(b, y, S, l),
                              -1 == d && ((S = b.length), (d = n(P, b, L, S)) < 1 && (_++, t(b, L < S ? C : P, S, l))),
                              (S = b.length))
                            : 0 === d && (_++, (b = [0])),
                        (v[f++] = _),
                        d && b[0] ? (b[S++] = D[T] || 0) : ((b = [D[T]]), (S = 1)));
                while ((T++ < A || void 0 !== b[0]) && k--);
                m = void 0 !== b[0];
            }
            v[0] || v.shift();
        }
        if (1 == h) ((w.e = c), (r = m));
        else {
            for (f = 1, _ = v[0]; _ >= 10; _ /= 10) f++;
            ((w.e = f + c * h - 1), O(w, u ? s + w.e + 1 : s, o, m));
        }
        return w;
    };
})();
function O(e, n, t, r) {
    var a,
        i,
        s,
        o,
        u,
        d,
        c,
        f,
        _,
        h = e.constructor;
    e: if (null != n) {
        if (!(f = e.d)) return e;
        for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
        if ((i = n - a) < 0) ((i += 7), (s = n), (u = (((c = f[(_ = 0)]) / m(10, a - s - 1)) % 10) | 0));
        else if ((_ = Math.ceil((i + 1) / 7)) >= (o = f.length))
            if (r) {
                for (; o++ <= _;) f.push(0);
                ((c = u = 0), (a = 1), (i %= 7), (s = i - 7 + 1));
            } else break e;
        else {
            for (c = o = f[_], a = 1; o >= 10; o /= 10) a++;
            ((i %= 7), (u = (s = i - 7 + a) < 0 ? 0 : ((c / m(10, a - s - 1)) % 10) | 0));
        }
        if (
            ((r = r || n < 0 || void 0 !== f[_ + 1] || (s < 0 ? c : c % m(10, a - s - 1))),
            (d =
                t < 4
                    ? (u || r) && (0 == t || t == (e.s < 0 ? 3 : 2))
                    : u > 5 ||
                      (5 == u &&
                          (4 == t ||
                              r ||
                              (6 == t && ((i > 0 ? (s > 0 ? c / m(10, a - s) : 0) : f[_ - 1]) % 10) & 1) ||
                              t == (e.s < 0 ? 8 : 7)))),
            n < 1 || !f[0])
        )
            return (
                (f.length = 0),
                d ? ((n -= e.e + 1), (f[0] = m(10, (7 - (n % 7)) % 7)), (e.e = -n || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == i
                ? ((f.length = _), (o = 1), _--)
                : ((f.length = _ + 1),
                  (o = m(10, 7 - i)),
                  (f[_] = s > 0 ? (((c / m(10, a - s)) % m(10, s)) | 0) * o : 0)),
            d)
        )
            for (;;)
                if (0 == _) {
                    for (i = 1, s = f[0]; s >= 10; s /= 10) i++;
                    for (s = f[0] += o, o = 1; s >= 10; s /= 10) o++;
                    i != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                    break;
                } else {
                    if (((f[_] += o), 1e7 != f[_])) break;
                    ((f[_--] = 0), (o = 1));
                }
        for (i = f.length; 0 === f[--i];) f.pop();
    }
    return (l && (e.e > h.maxE ? ((e.d = null), (e.e = 0 / 0)) : e.e < h.minE && ((e.e = 0), (e.d = [0]))), e);
}
function L(e, n, t) {
    if (!e.isFinite()) return F(e);
    var r,
        a = e.e,
        i = k(e.d),
        s = i.length;
    return (
        n
            ? (t && (r = t - s) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + P(r))
                  : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
              (i = i + (e.e < 0 ? "e" : "e+") + e.e))
            : a < 0
              ? ((i = "0." + P(-a - 1) + i), t && (r = t - s) > 0 && (i += P(r)))
              : a >= s
                ? ((i += P(a + 1 - s)), t && (r = t - a - 1) > 0 && (i = i + "." + P(r)))
                : ((r = a + 1) < s && (i = i.slice(0, r) + "." + i.slice(r)),
                  t && (r = t - s) > 0 && (a + 1 === s && (i += "."), (i += P(r)))),
        i
    );
}
function C(e, n) {
    var t = e[0];
    for (n *= 7; t >= 10; t /= 10) n++;
    return n;
}
function N(e, n, t) {
    if (n > b) throw ((l = !0), t && (e.precision = t), Error(f));
    return O(new e(s), n, 1, !0);
}
function x(e, n, t) {
    if (n > S) throw Error(f);
    return O(new e(o), n, t, !0);
}
function D(e) {
    var n = e.length - 1,
        t = 7 * n + 1;
    if ((n = e[n])) {
        for (; n % 10 == 0; n /= 10) t--;
        for (n = e[0]; n >= 10; n /= 10) t++;
    }
    return t;
}
function P(e) {
    for (var n = ""; e--;) n += "0";
    return n;
}
function I(e, n, t, r) {
    var a,
        i = new e(1),
        s = Math.ceil(r / 7 + 4);
    for (l = !1; ;) {
        if ((t % 2 && K((i = i.times(n)).d, s) && (a = !0), 0 === (t = p(t / 2)))) {
            ((t = i.d.length - 1), a && 0 === i.d[t] && ++i.d[t]);
            break;
        }
        K((n = n.times(n)).d, s);
    }
    return ((l = !0), i);
}
function Z(e) {
    return 1 & e.d[e.d.length - 1];
}
function $(e, n, t) {
    for (var r, a, i = new e(n[0]), s = 0; ++s < n.length;) {
        if (!(a = new e(n[s])).s) {
            i = a;
            break;
        }
        ((r = i.cmp(a)) === t || (0 === r && i.s === t)) && (i = a);
    }
    return i;
}
function G(e, n) {
    var t,
        r,
        a,
        i,
        s,
        o,
        u,
        d = 0,
        c = 0,
        f = 0,
        _ = e.constructor,
        h = _.rounding,
        p = _.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new _(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == n ? ((l = !1), (u = p)) : (u = n), o = new _(0.03125); e.e > -2;) ((e = e.times(o)), (f += 5));
    for (u += r = ((Math.log(m(2, f)) / Math.LN10) * 2 + 5) | 0, t = i = s = new _(1), _.precision = u; ;) {
        if (
            ((i = O(i.times(e), u, 1)),
            (t = t.times(++c)),
            k((o = s.plus(M(i, t, u, 1))).d).slice(0, u) === k(s.d).slice(0, u))
        ) {
            for (a = f; a--;) s = O(s.times(s), u, 1);
            if (null != n) return ((_.precision = p), s);
            if (!(d < 3 && T(s.d, u - r, h, d))) return O(s, (_.precision = p), h, (l = !0));
            ((_.precision = u += 10), (t = i = o = new _(1)), (c = 0), d++);
        }
        s = o;
    }
}
function R(e, n) {
    var t,
        r,
        a,
        i,
        s,
        o,
        u,
        d,
        c,
        f,
        _,
        h = 1,
        p = e,
        m = p.d,
        y = p.constructor,
        g = y.rounding,
        w = y.precision;
    if (p.s < 0 || !m || !m[0] || (!p.e && 1 == m[0] && 1 == m.length))
        return new y(m && !m[0] ? -1 / 0 : 1 != p.s ? 0 / 0 : m ? 0 : p);
    if (
        (null == n ? ((l = !1), (c = w)) : (c = n),
        (y.precision = c += 10),
        (r = (t = k(m)).charAt(0)),
        !(15e14 > Math.abs((i = p.e))))
    )
        return (
            (d = N(y, c + 2, w).times(i + "")),
            (p = R(new y(r + "." + t.slice(1)), c - 10).plus(d)),
            (y.precision = w),
            null == n ? O(p, w, g, (l = !0)) : p
        );
    for (; (r < 7 && 1 != r) || (1 == r && t.charAt(1) > 3);) ((r = (t = k((p = p.times(e)).d)).charAt(0)), h++);
    for (
        i = p.e,
            r > 1 ? ((p = new y("0." + t)), i++) : (p = new y(r + "." + t.slice(1))),
            f = p,
            u = s = p = M(p.minus(1), p.plus(1), c, 1),
            _ = O(p.times(p), c, 1),
            a = 3;
        ;
    ) {
        if (((s = O(s.times(_), c, 1)), k((d = u.plus(M(s, new y(a), c, 1))).d).slice(0, c) === k(u.d).slice(0, c))) {
            if (
                ((u = u.times(2)),
                0 !== i && (u = u.plus(N(y, c + 2, w).times(i + ""))),
                (u = M(u, new y(h), c, 1)),
                null != n)
            )
                return ((y.precision = w), u);
            if (!T(u.d, c - 10, g, o)) return O(u, (y.precision = w), g, (l = !0));
            ((y.precision = c += 10),
                (d = s = p = M(f.minus(1), f.plus(1), c, 1)),
                (_ = O(p.times(p), c, 1)),
                (a = o = 1));
        }
        ((u = d), (a += 2));
    }
}
function F(e) {
    return String((e.s * e.s) / 0);
}
function j(e, n) {
    var t, r, a;
    for (
        (t = n.indexOf(".")) > -1 && (n = n.replace(".", "")),
            (r = n.search(/e/i)) > 0
                ? (t < 0 && (t = r), (t += +n.slice(r + 1)), (n = n.substring(0, r)))
                : t < 0 && (t = n.length),
            r = 0;
        48 === n.charCodeAt(r);
        r++
    );
    for (a = n.length; 48 === n.charCodeAt(a - 1); --a);
    if ((n = n.slice(r, a))) {
        if (((a -= r), (e.e = t = t - r - 1), (e.d = []), (r = (t + 1) % 7), t < 0 && (r += 7), r < a)) {
            for (r && e.d.push(+n.slice(0, r)), a -= 7; r < a;) e.d.push(+n.slice(r, (r += 7)));
            r = 7 - (n = n.slice(r)).length;
        } else r -= a;
        for (; r--;) n += "0";
        (e.d.push(+n),
            l &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = 0 / 0))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0]))));
    } else ((e.e = 0), (e.d = [0]));
    return e;
}
function B(e, n, t, r, a) {
    var i,
        s,
        o,
        u,
        d = e.precision,
        c = Math.ceil(d / 7);
    for (l = !1, u = t.times(t), o = new e(r); ;) {
        if (
            ((s = M(o.times(u), new e(n++ * n++), d, 1)),
            (o = a ? r.plus(s) : r.minus(s)),
            (r = M(s.times(u), new e(n++ * n++), d, 1)),
            void 0 !== (s = o.plus(r)).d[c])
        ) {
            for (i = c; s.d[i] === o.d[i] && i--;);
            if (-1 == i) break;
        }
        ((i = o), (o = r), (r = s), (s = i));
    }
    return ((l = !0), (s.d.length = c + 1), s);
}
function U(e, n) {
    for (var t = e; --n;) t *= e;
    return t;
}
function q(e, n) {
    var t,
        r = n.s < 0,
        i = x(e, e.precision, 1),
        s = i.times(0.5);
    if ((n = n.abs()).lte(s)) return ((a = r ? 4 : 1), n);
    if ((t = n.divToInt(i)).isZero()) a = r ? 3 : 2;
    else {
        if ((n = n.minus(t.times(i))).lte(s)) return ((a = Z(t) ? (r ? 2 : 3) : r ? 4 : 1), n);
        a = Z(t) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return n.minus(i).abs();
}
function H(e, n, t, a) {
    var s,
        o,
        u,
        l,
        d,
        c,
        f,
        _,
        h,
        p = e.constructor,
        m = void 0 !== t;
    if (
        (m ? (E(t, 1, 1e9), void 0 === a ? (a = p.rounding) : E(a, 0, 8)) : ((t = p.precision), (a = p.rounding)),
        e.isFinite())
    ) {
        for (
            u = (f = L(e)).indexOf("."),
                m ? ((s = 2), 16 == n ? (t = 4 * t - 3) : 8 == n && (t = 3 * t - 2)) : (s = n),
                u >= 0 &&
                    ((f = f.replace(".", "")),
                    ((h = new p(1)).e = f.length - u),
                    (h.d = A(L(h), 10, s)),
                    (h.e = h.d.length)),
                o = d = (_ = A(f, 10, s)).length;
            0 == _[--d];
        )
            _.pop();
        if (_[0]) {
            if (
                (u < 0
                    ? o--
                    : (((e = new p(e)).d = _), (e.e = o), (_ = (e = M(e, h, t, a, 0, s)).d), (o = e.e), (c = r)),
                (u = _[t]),
                (l = s / 2),
                (c = c || void 0 !== _[t + 1]),
                (c =
                    a < 4
                        ? (void 0 !== u || c) && (0 === a || a === (e.s < 0 ? 3 : 2))
                        : u > l || (u === l && (4 === a || c || (6 === a && 1 & _[t - 1]) || a === (e.s < 0 ? 8 : 7)))),
                (_.length = t),
                c)
            )
                for (; ++_[--t] > s - 1;) ((_[t] = 0), t || (++o, _.unshift(1)));
            for (d = _.length; !_[d - 1]; --d);
            for (u = 0, f = ""; u < d; u++) f += i.charAt(_[u]);
            if (m) {
                if (d > 1)
                    if (16 == n || 8 == n) {
                        for (u = 16 == n ? 4 : 3, --d; d % u; d++) f += "0";
                        for (d = (_ = A(f, s, n)).length; !_[d - 1]; --d);
                        for (u = 1, f = "1."; u < d; u++) f += i.charAt(_[u]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o;) f = "0" + f;
                f = "0." + f;
            } else if (++o > d) for (o -= d; o--;) f += "0";
            else o < d && (f = f.slice(0, o) + "." + f.slice(o));
        } else f = m ? "0p+0" : "0";
        f = (16 == n ? "0x" : 2 == n ? "0b" : 8 == n ? "0o" : "") + f;
    } else f = F(e);
    return e.s < 0 ? "-" + f : f;
}
function K(e, n) {
    if (e.length > n) return ((e.length = n), !0);
}
function J(e) {
    return new this(e).abs();
}
function V(e) {
    return new this(e).acos();
}
function W(e) {
    return new this(e).acosh();
}
function Y(e, n) {
    return new this(e).plus(n);
}
function Q(e) {
    return new this(e).asin();
}
function X(e) {
    return new this(e).asinh();
}
function ee(e) {
    return new this(e).atan();
}
function en(e) {
    return new this(e).atanh();
}
function et(e, n) {
    ((e = new this(e)), (n = new this(n)));
    var t,
        r = this.precision,
        a = this.rounding,
        i = r + 4;
    return (
        e.s && n.s
            ? e.d || n.d
                ? !n.d || e.isZero()
                    ? ((t = n.s < 0 ? x(this, r, a) : new this(0)).s = e.s)
                    : !e.d || n.isZero()
                      ? ((t = x(this, i, 1).times(0.5)).s = e.s)
                      : n.s < 0
                        ? ((this.precision = i),
                          (this.rounding = 1),
                          (t = this.atan(M(e, n, i, 1))),
                          (n = x(this, i, 1)),
                          (this.precision = r),
                          (this.rounding = a),
                          (t = e.s < 0 ? t.minus(n) : t.plus(n)))
                        : (t = this.atan(M(e, n, i, 1)))
                : ((t = x(this, i, 1).times(n.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (t = new this(0 / 0)),
        t
    );
}
function er(e) {
    return new this(e).cbrt();
}
function ea(e) {
    return O((e = new this(e)), e.e + 1, 2);
}
function ei(e, n, t) {
    return new this(e).clamp(n, t);
}
function es(e) {
    if (!e || "object" != typeof e) throw Error(d + "Object expected");
    var n,
        t,
        r,
        a = !0 === e.defaults,
        i = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
        ];
    for (n = 0; n < i.length; n += 3)
        if (((t = i[n]), a && (this[t] = u[t]), void 0 !== (r = e[t])))
            if (p(r) === r && r >= i[n + 1] && r <= i[n + 2]) this[t] = r;
            else throw Error(c + t + ": " + r);
    if (((t = "crypto"), a && (this[t] = u[t]), void 0 !== (r = e[t])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = !0;
                else throw Error(_);
            else this[t] = !1;
        else throw Error(c + t + ": " + r);
    return this;
}
function eo(e) {
    return new this(e).cos();
}
function eu(e) {
    return new this(e).cosh();
}
function el(e, n) {
    return new this(e).div(n);
}
function ed(e) {
    return new this(e).exp();
}
function ec(e) {
    return O((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        n,
        t = new this(0);
    for (e = 0, l = !1; e < arguments.length;)
        if (((n = new this(arguments[e++])), n.d)) t.d && (t = t.plus(n.times(n)));
        else {
            if (n.s) return ((l = !0), new this(1 / 0));
            t = n;
        }
    return ((l = !0), t.sqrt());
}
function e_(e) {
    return e instanceof eD || (e && e.toStringTag === h) || !1;
}
function eh(e) {
    return new this(e).ln();
}
function ep(e, n) {
    return new this(e).log(n);
}
function em(e) {
    return new this(e).log(2);
}
function ey(e) {
    return new this(e).log(10);
}
function eg() {
    return $(this, arguments, -1);
}
function ew() {
    return $(this, arguments, 1);
}
function ev(e, n) {
    return new this(e).mod(n);
}
function eb(e, n) {
    return new this(e).mul(n);
}
function eS(e, n) {
    return new this(e).pow(n);
}
function ez(e) {
    var n,
        t,
        r,
        a,
        i = 0,
        s = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : E(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (n = crypto.getRandomValues(new Uint32Array(r)); i < r;)
                (a = n[i]) >= 429e7 ? (n[i] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[i++] = a % 1e7);
        else if (crypto.randomBytes) {
            for (n = crypto.randomBytes((r *= 4)); i < r;)
                (a = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((127 & n[i + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(n, i)
                    : (o.push(a % 1e7), (i += 4));
            i = r / 4;
        } else throw Error(_);
    else for (; i < r;) o[i++] = (1e7 * Math.random()) | 0;
    for (r = o[--i], e %= 7, r && e && ((a = m(10, 7 - e)), (o[i] = ((r / a) | 0) * a)); 0 === o[i]; i--) o.pop();
    if (i < 0) ((t = 0), (o = [0]));
    else {
        for (t = -1; 0 === o[0]; t -= 7) o.shift();
        for (r = 1, a = o[0]; a >= 10; a /= 10) r++;
        r < 7 && (t -= 7 - r);
    }
    return ((s.e = t), (s.d = o), s);
}
function ek(e) {
    return O((e = new this(e)), e.e + 1, this.rounding);
}
function eE(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || 0 / 0;
}
function eT(e) {
    return new this(e).sin();
}
function eA(e) {
    return new this(e).sinh();
}
function eM(e) {
    return new this(e).sqrt();
}
function eO(e, n) {
    return new this(e).sub(n);
}
function eL() {
    var e = 0,
        n = arguments,
        t = new this(n[0]);
    for (l = !1; t.s && ++e < n.length;) t = t.plus(n[e]);
    return ((l = !0), O(t, this.precision, this.rounding));
}
function eC(e) {
    return new this(e).tan();
}
function eN(e) {
    return new this(e).tanh();
}
function ex(e) {
    return O((e = new this(e)), e.e + 1, 1);
}
((z[Symbol.for("nodejs.util.inspect.custom")] = z.toString), (z[Symbol.toStringTag] = "Decimal"));
var eD = (z.constructor = (function e(n) {
    var t, r, a;
    function i(e) {
        var n, t, r;
        if (!(this instanceof i)) return new i(e);
        if (((this.constructor = i), e_(e))) {
            ((this.s = e.s),
                l
                    ? !e.d || e.e > i.maxE
                        ? ((this.e = 0 / 0), (this.d = null))
                        : e.e < i.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = e.e), (this.d = e.d.slice()))
                    : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d)));
            return;
        }
        if ("number" == (r = typeof e)) {
            if (0 === e) {
                ((this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]));
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (n = 0, t = e; t >= 10; t /= 10) n++;
                l
                    ? n > i.maxE
                        ? ((this.e = 0 / 0), (this.d = null))
                        : n < i.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = n), (this.d = [e]))
                    : ((this.e = n), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                (e || (this.s = 0 / 0), (this.e = 0 / 0), (this.d = null));
                return;
            }
            return j(this, e.toString());
        }
        if ("string" === r)
            return (
                45 === (t = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === t && (e = e.slice(1)), (this.s = 1)),
                v.test(e)
                    ? j(this, e)
                    : (function (e, n) {
                          var t, r, a, i, s, o, u, d, f;
                          if (n.indexOf("_") > -1) {
                              if (((n = n.replace(/(\d)_(?=\d)/g, "$1")), v.test(n))) return j(e, n);
                          } else if ("Infinity" === n || "NaN" === n)
                              return (+n || (e.s = 0 / 0), (e.e = 0 / 0), (e.d = null), e);
                          if (g.test(n)) ((t = 16), (n = n.toLowerCase()));
                          else if (y.test(n)) t = 2;
                          else if (w.test(n)) t = 8;
                          else throw Error(c + n);
                          for (
                              (i = n.search(/p/i)) > 0
                                  ? ((u = +n.slice(i + 1)), (n = n.substring(2, i)))
                                  : (n = n.slice(2)),
                                  s = (i = n.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  s &&
                                      ((i = (o = (n = n.replace(".", "")).length) - i), (a = I(r, new r(t), i, 2 * i))),
                                  i = f = (d = A(n, t, 1e7)).length - 1;
                              0 === d[i];
                              --i
                          )
                              d.pop();
                          return i < 0
                              ? new r(0 * e.s)
                              : ((e.e = C(d, f)),
                                (e.d = d),
                                (l = !1),
                                s && (e = M(e, a, 4 * o)),
                                u && (e = e.times(54 > Math.abs(u) ? m(2, u) : eD.pow(2, u))),
                                (l = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), j(this, e.toString()));
        throw Error(c + e);
    }
    if (
        ((i.prototype = z),
        (i.ROUND_UP = 0),
        (i.ROUND_DOWN = 1),
        (i.ROUND_CEIL = 2),
        (i.ROUND_FLOOR = 3),
        (i.ROUND_HALF_UP = 4),
        (i.ROUND_HALF_DOWN = 5),
        (i.ROUND_HALF_EVEN = 6),
        (i.ROUND_HALF_CEIL = 7),
        (i.ROUND_HALF_FLOOR = 8),
        (i.EUCLID = 9),
        (i.config = i.set = es),
        (i.clone = e),
        (i.isDecimal = e_),
        (i.abs = J),
        (i.acos = V),
        (i.acosh = W),
        (i.add = Y),
        (i.asin = Q),
        (i.asinh = X),
        (i.atan = ee),
        (i.atanh = en),
        (i.atan2 = et),
        (i.cbrt = er),
        (i.ceil = ea),
        (i.clamp = ei),
        (i.cos = eo),
        (i.cosh = eu),
        (i.div = el),
        (i.exp = ed),
        (i.floor = ec),
        (i.hypot = ef),
        (i.ln = eh),
        (i.log = ep),
        (i.log10 = ey),
        (i.log2 = em),
        (i.max = eg),
        (i.min = ew),
        (i.mod = ev),
        (i.mul = eb),
        (i.pow = eS),
        (i.random = ez),
        (i.round = ek),
        (i.sign = eE),
        (i.sin = eT),
        (i.sinh = eA),
        (i.sqrt = eM),
        (i.sub = eO),
        (i.sum = eL),
        (i.tan = eC),
        (i.tanh = eN),
        (i.trunc = ex),
        void 0 === n && (n = {}),
        n && !0 !== n.defaults)
    )
        for (
            t = 0, a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            t < a.length;
        )
            n.hasOwnProperty((r = a[t++])) || (n[r] = this[r]);
    return (i.config(n), i);
})(u));
((s = new eD(s)), (o = new eD(o)), t.d(n, {}, { W: eD }));
