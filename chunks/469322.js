"use strict";
n.d(t, {
    BT: () => eL,
    Wt: () => ej,
    bf: () => eN,
    xC: () =>
        function e(t) {
            if ("number" == typeof t) return new eS(t);
            if ("bigint" == typeof t) return new eS(t.toString());
            if (((0, eM.V1)("symbol" != typeof t, "Symbol is not supported", TypeError), void 0 === t))
                return new eS(NaN);
            if (null === t || 0 === t) return eR;
            if (!0 === t) return new eS(1);
            if ("string" == typeof t)
                try {
                    return new eS(t);
                } catch {
                    return new eS(NaN);
                }
            (0, eM.V1)("object" == typeof t, "object expected", TypeError);
            let n = (function (e, t) {
                if ("object" == typeof e && null != e) {
                    let n,
                        r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                    if (void 0 !== r) {
                        void 0 === t
                            ? (n = "default")
                            : "string" === t
                              ? (n = "string")
                              : ((0, eM.V1)("number" === t, 'preferredType must be "string" or "number"'),
                                (n = "number"));
                        let i = r.call(e, n);
                        if ("object" != typeof i) return i;
                        throw TypeError("Cannot convert exotic object to primitive.");
                    }
                    for (let n of (void 0 === t && (t = "number"),
                    "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                        let t = e[n];
                        if (eI(t)) {
                            let n = t.call(e);
                            if ("object" != typeof n) return n;
                        }
                    }
                    throw TypeError("Cannot convert object to primitive value");
                }
                return e;
            })(t, "number");
            return (0, eM.V1)("object" != typeof n, "object expected", TypeError), e(n);
        },
});
var r,
    i,
    a = "0123456789abcdef",
    u =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    o =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    s = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    l = !0,
    d = "[DecimalError] ",
    c = d + "Invalid argument: ",
    f = d + "Precision limit exceeded",
    h = d + "crypto unavailable",
    p = "[object Decimal]",
    m = Math.floor,
    _ = Math.pow,
    v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    y = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    D = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    b = u.length - 1,
    C = o.length - 1,
    E = { toStringTag: p };
function w(e) {
    var t,
        n,
        r,
        i = e.length - 1,
        a = "",
        u = e[0];
    if (i > 0) {
        for (a += u, t = 1; t < i; t++) (n = 7 - (r = e[t] + "").length) && (a += R(n)), (a += r);
        (n = 7 - (r = (u = e[t]) + "").length) && (a += R(n));
    } else if (0 === u) return "0";
    for (; u % 10 == 0; ) u /= 10;
    return a + u;
}
function A(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(c + e);
}
function B(e, t, n, r) {
    var i, a, u, o;
    for (a = e[0]; a >= 10; a /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (i = 0)) : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
        (a = _(10, 7 - t)),
        (o = (e[i] % a) | 0),
        null == r
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (u = (n < 4 && 99999 == o) || (n > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (u =
                      (((n < 4 && o + 1 == a) || (n > 3 && o + 1 == a / 2)) &&
                          ((e[i + 1] / a / 100) | 0) == _(10, t - 2) - 1) ||
                      ((o == a / 2 || 0 == o) && ((e[i + 1] / a / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (u = ((r || n < 4) && 9999 == o) || (!r && n > 3 && 4999 == o)))
              : (u =
                    (((r || n < 4) && o + 1 == a) || (!r && n > 3 && o + 1 == a / 2)) &&
                    ((e[i + 1] / a / 1e3) | 0) == _(10, t - 3) - 1),
        u
    );
}
function F(e, t, n) {
    for (var r, i, u = [0], o = 0, s = e.length; o < s; ) {
        for (i = u.length; i--; ) u[i] *= t;
        for (u[0] += a.indexOf(e.charAt(o++)), r = 0; r < u.length; r++)
            u[r] > n - 1 && (void 0 === u[r + 1] && (u[r + 1] = 0), (u[r + 1] += (u[r] / n) | 0), (u[r] %= n));
    }
    return u.reverse();
}
(E.absoluteValue = E.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), T(e);
    }),
    (E.ceil = function () {
        return T(new this.constructor(this), this.e + 1, 2);
    }),
    (E.clampedTo = E.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(c + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (E.comparedTo = E.cmp =
        function (e) {
            var t,
                n,
                r,
                i,
                a = this.d,
                u = (e = new this.constructor(e)).d,
                o = this.s,
                s = e.s;
            if (!a || !u) return o && s ? (o !== s ? o : a === u ? 0 : !a ^ (o < 0) ? 1 : -1) : NaN;
            if (!a[0] || !u[0]) return a[0] ? o : u[0] ? -s : 0;
            if (o !== s) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (t = 0, n = (r = a.length) < (i = u.length) ? r : i; t < n; ++t)
                if (a[t] !== u[t]) return (a[t] > u[t]) ^ (o < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (o < 0) ? 1 : -1;
        }),
    (E.cosine = E.cos =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return n.d
                ? n.d[0]
                    ? ((e = r.precision),
                      (t = r.rounding),
                      (r.precision = e + Math.max(n.e, n.sd()) + 7),
                      (r.rounding = 1),
                      (n = (function (e, t) {
                          var n, r, i;
                          if (t.isZero()) return t;
                          (r = t.d.length) < 32
                              ? (i = (1 / U(4, (n = Math.ceil(r / 3)))).toString())
                              : ((n = 16), (i = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = K(e, 1, t.times(i), new e(1)));
                          for (var a = n; a--; ) {
                              var u = t.times(t);
                              t = u.times(u).minus(u).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(r, H(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      T(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(NaN);
        }),
    (E.cubeRoot = E.cbrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a,
                u,
                o,
                s,
                d,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                l = !1,
                    (a = this.s * _(this.s * this, 1 / 3)) && Math.abs(a) != 1 / 0
                        ? (r = new c(a.toString()))
                        : ((n = w(this.d)),
                          (a = ((e = this.e) - n.length + 1) % 3) && (n += 1 == a || -2 == a ? "0" : "00"),
                          (a = _(n, 1 / 3)),
                          (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new c(
                              (n = a == 1 / 0 ? "5e" + e : (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    u = (e = c.precision) + 3;
                ;
            )
                if (
                    ((r = V((d = (s = (o = r).times(o).times(o)).plus(this)).plus(this).times(o), d.plus(s), u + 2, 1)),
                    w(o.d).slice(0, u) === (n = w(r.d)).slice(0, u))
                ) {
                    if ("9999" != (n = n.slice(u - 3, u + 1)) && (i || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (T(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!i && (T(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        r = o;
                        break;
                    }
                    (u += 4), (i = 1);
                }
            return (l = !0), T(r, e, c.rounding, t);
        }),
    (E.decimalPlaces = E.dp =
        function () {
            var e,
                t = this.d,
                n = NaN;
            if (t) {
                if (((n = ((e = t.length - 1) - m(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (E.dividedBy = E.div =
        function (e) {
            return V(this, new this.constructor(e));
        }),
    (E.dividedToIntegerBy = E.divToInt =
        function (e) {
            var t = this.constructor;
            return T(V(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (E.equals = E.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (E.floor = function () {
        return T(new this.constructor(this), this.e + 1, 3);
    }),
    (E.greaterThan = E.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (E.greaterThanOrEqualTo = E.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (E.hyperbolicCosine = E.cosh =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a = this,
                u = a.constructor,
                o = new u(1);
            if (!a.isFinite()) return new u(a.s ? 1 / 0 : NaN);
            if (a.isZero()) return o;
            (n = u.precision),
                (r = u.rounding),
                (u.precision = n + Math.max(a.e, a.sd()) + 4),
                (u.rounding = 1),
                (i = a.d.length) < 32
                    ? (t = (1 / U(4, (e = Math.ceil(i / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (a = K(u, 1, a.times(t), new u(1), !0));
            for (var s, l = e, d = new u(8); l--; ) (s = a.times(a)), (a = o.minus(s.times(d.minus(s.times(d)))));
            return T(a, (u.precision = n), (u.rounding = r), !0);
        }),
    (E.hyperbolicSine = E.sinh =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                a = i.constructor;
            if (!i.isFinite() || i.isZero()) return new a(i);
            if (
                ((t = a.precision),
                (n = a.rounding),
                (a.precision = t + Math.max(i.e, i.sd()) + 4),
                (a.rounding = 1),
                (r = i.d.length) < 3)
            )
                i = K(a, 2, i, i, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (i = K(a, 2, (i = i.times(1 / U(5, e))), i, !0));
                for (var u, o = new a(5), s = new a(16), l = new a(20); e--; )
                    (u = i.times(i)), (i = i.times(o.plus(u.times(s.times(u).plus(l)))));
            }
            return (a.precision = t), (a.rounding = n), T(i, t, n, !0);
        }),
    (E.hyperbolicTangent = E.tanh =
        function () {
            var e,
                t,
                n = this.constructor;
            return this.isFinite()
                ? this.isZero()
                    ? new n(this)
                    : ((e = n.precision),
                      (t = n.rounding),
                      (n.precision = e + 7),
                      (n.rounding = 1),
                      V(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (E.inverseCosine = E.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                r = t.precision,
                i = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? O(t, r, i)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? O(t, r + 4, i).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = i),
                    e.times(2));
        }),
    (E.inverseHyperbolicCosine = E.acosh =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return n.lte(1)
                ? new r(n.eq(1) ? 0 : NaN)
                : n.isFinite()
                  ? ((e = r.precision),
                    (t = r.rounding),
                    (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                    (r.rounding = 1),
                    (l = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (l = !0),
                    (r.precision = e),
                    (r.rounding = t),
                    n.ln())
                  : new r(n);
        }),
    (E.inverseHyperbolicSine = E.asinh =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return !n.isFinite() || n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                  (r.rounding = 1),
                  (l = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (l = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln());
        }),
    (E.inverseHyperbolicTangent = E.atanh =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                a = i.constructor;
            return i.isFinite()
                ? i.e >= 0
                    ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                    : ((e = a.precision), (t = a.rounding), Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                      ? T(new a(i), e, t, !0)
                      : ((a.precision = n = r - i.e),
                        (i = V(i.plus(1), new a(1).minus(i), n + e, 1)),
                        (a.precision = e + 4),
                        (a.rounding = 1),
                        (i = i.ln()),
                        (a.precision = e),
                        (a.rounding = t),
                        i.times(0.5))
                : new a(NaN);
        }),
    (E.inverseSine = E.asin =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                a = i.constructor;
            return i.isZero()
                ? new a(i)
                : ((t = i.abs().cmp(1)), (n = a.precision), (r = a.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = O(a, n + 4, r).times(0.5)).s = i.s), e)
                      : new a(NaN)
                  : ((a.precision = n + 6),
                    (a.rounding = 1),
                    (i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                    (a.precision = n),
                    (a.rounding = r),
                    i.times(2));
        }),
    (E.inverseTangent = E.atan =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a,
                u,
                o,
                s,
                d = this,
                c = d.constructor,
                f = c.precision,
                h = c.rounding;
            if (d.isFinite()) {
                if (d.isZero()) return new c(d);
                else if (d.abs().eq(1) && f + 4 <= C) return ((u = O(c, f + 4, h).times(0.25)).s = d.s), u;
            } else {
                if (!d.s) return new c(NaN);
                if (f + 4 <= C) return ((u = O(c, f + 4, h).times(0.5)).s = d.s), u;
            }
            for (c.precision = o = f + 10, c.rounding = 1, e = n = Math.min(28, (o / 7 + 2) | 0); e; --e)
                d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (l = !1, t = Math.ceil(o / 7), r = 1, s = d.times(d), u = new c(d), i = d; -1 !== e; )
                if (
                    ((i = i.times(s)),
                    (a = u.minus(i.div((r += 2)))),
                    (i = i.times(s)),
                    void 0 !== (u = a.plus(i.div((r += 2)))).d[t])
                )
                    for (e = t; u.d[e] === a.d[e] && e--; );
            return n && (u = u.times(2 << (n - 1))), (l = !0), T(u, (c.precision = f), (c.rounding = h), !0);
        }),
    (E.isFinite = function () {
        return !!this.d;
    }),
    (E.isInteger = E.isInt =
        function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
        }),
    (E.isNaN = function () {
        return !this.s;
    }),
    (E.isNegative = E.isNeg =
        function () {
            return this.s < 0;
        }),
    (E.isPositive = E.isPos =
        function () {
            return this.s > 0;
        }),
    (E.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (E.lessThan = E.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (E.lessThanOrEqualTo = E.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (E.logarithm = E.log =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                u,
                o,
                s = this.constructor,
                d = s.precision,
                c = s.rounding;
            if (null == e) (e = new s(10)), (t = !0);
            else {
                if (((n = (e = new s(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new s(NaN);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new s(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) i = !0;
                else {
                    for (r = n[0]; r % 10 == 0; ) r /= 10;
                    i = 1 !== r;
                }
            if (((l = !1), B((o = V((a = j(this, (u = d + 5))), t ? P(s, u + 10) : j(e, u), u, 1)).d, (r = d), c)))
                do
                    if (((u += 10), (o = V((a = j(this, u)), t ? P(s, u + 10) : j(e, u), u, 1)), !i)) {
                        +w(o.d).slice(r + 1, r + 15) + 1 == 1e14 && (o = T(o, d + 1, 0));
                        break;
                    }
                while (B(o.d, (r += 10), c));
            return (l = !0), T(o, d, c);
        }),
    (E.minus = E.sub =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                u,
                o,
                s,
                d,
                c,
                f,
                h,
                p = this.constructor;
            if (((e = new p(e)), !this.d || !e.d))
                return (
                    this.s && e.s
                        ? this.d
                            ? (e.s = -e.s)
                            : (e = new p(e.d || this.s !== e.s ? this : NaN))
                        : (e = new p(NaN)),
                    e
                );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (((d = this.d), (h = e.d), (o = p.precision), (s = p.rounding), !d[0] || !h[0])) {
                if (h[0]) e.s = -e.s;
                else {
                    if (!d[0]) return new p(3 === s ? -0 : 0);
                    e = new p(this);
                }
                return l ? T(e, o, s) : e;
            }
            if (((n = m(e.e / 7)), (c = m(this.e / 7)), (d = d.slice()), (a = c - n))) {
                for (
                    (f = a < 0) ? ((t = d), (a = -a), (u = h.length)) : ((t = h), (n = c), (u = d.length)),
                        a > (r = Math.max(Math.ceil(o / 7), u) + 2) && ((a = r), (t.length = 1)),
                        t.reverse(),
                        r = a;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((f = (r = d.length) < (u = h.length)) && (u = r), r = 0; r < u; r++)
                    if (d[r] != h[r]) {
                        f = d[r] < h[r];
                        break;
                    }
                a = 0;
            }
            for (f && ((t = d), (d = h), (h = t), (e.s = -e.s)), u = d.length, r = h.length - u; r > 0; --r) d[u++] = 0;
            for (r = h.length; r > a; ) {
                if (d[--r] < h[r]) {
                    for (i = r; i && 0 === d[--i]; ) d[i] = 1e7 - 1;
                    --d[i], (d[r] += 1e7);
                }
                d[r] -= h[r];
            }
            for (; 0 === d[--u]; ) d.pop();
            for (; 0 === d[0]; d.shift()) --n;
            return d[0] ? ((e.d = d), (e.e = x(d, n)), l ? T(e, o, s) : e) : new p(3 === s ? -0 : 0);
        }),
    (E.modulo = E.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((l = !1),
                      9 == n.modulo
                          ? ((t = V(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = V(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (l = !0),
                      this.minus(t))
                    : T(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (E.naturalExponential = E.exp =
        function () {
            return I(this);
        }),
    (E.naturalLogarithm = E.ln =
        function () {
            return j(this);
        }),
    (E.negated = E.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), T(e);
        }),
    (E.plus = E.add =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                u,
                o,
                s,
                d,
                c,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN)) : (e = new f(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((d = this.d), (c = e.d), (o = f.precision), (s = f.rounding), !d[0] || !c[0]))
                return c[0] || (e = new f(this)), l ? T(e, o, s) : e;
            if (((a = m(this.e / 7)), (r = m(e.e / 7)), (d = d.slice()), (i = a - r))) {
                for (
                    i < 0 ? ((n = d), (i = -i), (u = c.length)) : ((n = c), (r = a), (u = d.length)),
                        i > (u = (a = Math.ceil(o / 7)) > u ? a + 1 : u + 1) && ((i = u), (n.length = 1)),
                        n.reverse();
                    i--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((u = d.length) - (i = c.length) < 0 && ((i = u), (n = c), (c = d), (d = n)), t = 0; i; )
                (t = ((d[--i] = d[i] + c[i] + t) / 1e7) | 0), (d[i] %= 1e7);
            for (t && (d.unshift(t), ++r), u = d.length; 0 == d[--u]; ) d.pop();
            return (e.d = d), (e.e = x(d, r)), l ? T(e, o, s) : e;
        }),
    (E.precision = E.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
            return this.d ? ((t = S(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (E.round = function () {
        var e = this.constructor;
        return T(new e(this), this.e + 1, e.rounding);
    }),
    (E.sine = E.sin =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return n.isFinite()
                ? n.isZero()
                    ? new r(n)
                    : ((e = r.precision),
                      (t = r.rounding),
                      (r.precision = e + Math.max(n.e, n.sd()) + 7),
                      (r.rounding = 1),
                      (n = (function (e, t) {
                          var n,
                              r = t.d.length;
                          if (r < 3) return t.isZero() ? t : K(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                              (t = K(e, 2, (t = t.times(1 / U(5, n))), t));
                          for (var i, a = new e(5), u = new e(16), o = new e(20); n--; )
                              (i = t.times(t)), (t = t.times(a.plus(i.times(u.times(i).minus(o)))));
                          return t;
                      })(r, H(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      T(i > 2 ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (E.squareRoot = E.sqrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a,
                u = this.d,
                o = this.e,
                s = this.s,
                d = this.constructor;
            if (1 !== s || !u || !u[0]) return new d(!s || (s < 0 && (!u || u[0])) ? NaN : u ? this : 1 / 0);
            for (
                l = !1,
                    0 == (s = Math.sqrt(+this)) || s == 1 / 0
                        ? (((t = w(u)).length + o) % 2 == 0 && (t += "0"),
                          (s = Math.sqrt(t)),
                          (o = m((o + 1) / 2) - (o < 0 || o % 2)),
                          (r = new d(
                              (t = s == 1 / 0 ? "5e" + o : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (r = new d(s.toString())),
                    n = (o = d.precision) + 3;
                ;
            )
                if (
                    ((r = (a = r).plus(V(this, a, n + 2, 1)).times(0.5)),
                    w(a.d).slice(0, n) === (t = w(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (T(r, o + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!i && (T(a, o + 1, 0), a.times(a).eq(this))) {
                        r = a;
                        break;
                    }
                    (n += 4), (i = 1);
                }
            return (l = !0), T(r, o, d.rounding, e);
        }),
    (E.tangent = E.tan =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return n.isFinite()
                ? n.isZero()
                    ? new r(n)
                    : ((e = r.precision),
                      (t = r.rounding),
                      (r.precision = e + 10),
                      (r.rounding = 1),
                      ((n = n.sin()).s = 1),
                      (n = V(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      T(2 == i || 4 == i ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (E.times = E.mul =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                u,
                o,
                s,
                d,
                c = this.constructor,
                f = this.d,
                h = (e = new c(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !h || !h[0]))
                return new c(!e.s || (f && !f[0] && !h) || (h && !h[0] && !f) ? NaN : !f || !h ? e.s / 0 : 0 * e.s);
            for (
                n = m(this.e / 7) + m(e.e / 7),
                    (s = f.length) < (d = h.length) && ((a = f), (f = h), (h = a), (u = s), (s = d), (d = u)),
                    a = [],
                    r = u = s + d;
                r--;
            )
                a.push(0);
            for (r = d; --r >= 0; ) {
                for (t = 0, i = s + r; i > r; )
                    (o = a[i] + h[r] * f[i - r - 1] + t), (a[i--] = (o % 1e7) | 0), (t = (o / 1e7) | 0);
                a[i] = ((a[i] + t) % 1e7) | 0;
            }
            for (; !a[--u]; ) a.pop();
            return t ? ++n : a.shift(), (e.d = a), (e.e = x(a, n)), l ? T(e, c.precision, c.rounding) : e;
        }),
    (E.toBinary = function (e, t) {
        return q(this, 2, e, t);
    }),
    (E.toDecimalPlaces = E.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (A(e, 0, 1e9), void 0 === t ? (t = r.rounding) : A(t, 0, 8), T(n, e + n.e + 1, t));
        }),
    (E.toExponential = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = k(r, !0))
                : (A(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                  (n = k((r = T(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (E.toFixed = function (e, t) {
        var n,
            r,
            i = this.constructor;
        return (
            void 0 === e
                ? (n = k(this))
                : (A(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                  (n = k((r = T(new i(this), e + this.e + 1, t)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (E.toFraction = function (e) {
        var t,
            n,
            r,
            i,
            a,
            u,
            o,
            s,
            d,
            f,
            h,
            p,
            m = this.d,
            v = this.constructor;
        if (!m) return new v(this);
        if (
            ((d = n = new v(1)),
            (r = s = new v(0)),
            (u = (a = (t = new v(r)).e = S(m) - this.e - 1) % 7),
            (t.d[0] = _(10, u < 0 ? 7 + u : u)),
            null == e)
        )
            e = a > 0 ? t : d;
        else {
            if (!(o = new v(e)).isInt() || o.lt(d)) throw Error(c + o);
            e = o.gt(t) ? (a > 0 ? t : d) : o;
        }
        for (
            l = !1, o = new v(w(m)), f = v.precision, v.precision = a = 7 * m.length * 2;
            (h = V(o, t, 0, 1, 1)), 1 != (i = n.plus(h.times(r))).cmp(e);
        )
            (n = r), (r = i), (i = d), (d = s.plus(h.times(i))), (s = i), (i = t), (t = o.minus(h.times(i))), (o = i);
        return (
            (i = V(e.minus(n), r, 0, 1, 1)),
            (s = s.plus(i.times(d))),
            (n = n.plus(i.times(r))),
            (s.s = d.s = this.s),
            (p =
                1 >
                V(d, r, a, 1)
                    .minus(this)
                    .abs()
                    .cmp(V(s, n, a, 1).minus(this).abs())
                    ? [d, r]
                    : [s, n]),
            (v.precision = f),
            (l = !0),
            p
        );
    }),
    (E.toHexadecimal = E.toHex =
        function (e, t) {
            return q(this, 16, e, t);
        }),
    (E.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : A(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((l = !1), (n = V(n, e, 0, t, 1).times(e)), (l = !0), T(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (E.toNumber = function () {
        return +this;
    }),
    (E.toOctal = function (e, t) {
        return q(this, 8, e, t);
    }),
    (E.toPower = E.pow =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                u,
                o = this,
                s = o.constructor,
                d = +(e = new s(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new s(_(+o, d));
            if ((o = new s(o)).eq(1)) return o;
            if (((r = s.precision), (a = s.rounding), e.eq(1))) return T(o, r, a);
            if ((t = m(e.e / 7)) >= e.d.length - 1 && (n = d < 0 ? -d : d) <= 0x1fffffffffffff)
                return (i = M(s, o, n, r)), e.s < 0 ? new s(1).div(i) : T(i, r, a);
            if ((u = o.s) < 0) {
                if (t < e.d.length - 1) return new s(NaN);
                if (((1 & e.d[t]) == 0 && (u = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = u), o;
            }
            return (t =
                0 != (n = _(+o, d)) && isFinite(n)
                    ? new s(n + "").e
                    : m(d * (Math.log("0." + w(o.d)) / Math.LN10 + o.e + 1))) >
                s.maxE + 1 || t < s.minE - 1
                ? new s(t > 0 ? u / 0 : 0)
                : ((l = !1),
                  (s.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (i = I(e.times(j(o, r + n)), r)).d &&
                      B((i = T(i, r + 5, 1)).d, r, a) &&
                      ((t = r + 10),
                      +w((i = T(I(e.times(j(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (i = T(i, r + 1, 0))),
                  (i.s = u),
                  (l = !0),
                  (s.rounding = a),
                  T(i, r, a));
        }),
    (E.toPrecision = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = k(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
                : (A(e, 1, 1e9),
                  void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                  (n = k((r = T(new i(r), e, t)), e <= r.e || r.e <= i.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (E.toSignificantDigits = E.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (A(e, 1, 1e9), void 0 === t ? (t = n.rounding) : A(t, 0, 8)),
                T(new n(this), e, t)
            );
        }),
    (E.toString = function () {
        var e = this.constructor,
            t = k(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (E.truncated = E.trunc =
        function () {
            return T(new this.constructor(this), this.e + 1, 1);
        }),
    (E.valueOf = E.toJSON =
        function () {
            var e = this.constructor,
                t = k(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var V = (function () {
    function e(e, t, n) {
        var r,
            i = 0,
            a = e.length;
        for (e = e.slice(); a--; ) (r = e[a] * t + i), (e[a] = (r % n) | 0), (i = (r / n) | 0);
        return i && e.unshift(i), e;
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
    function n(e, t, n, r) {
        for (var i = 0; n--; ) (e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (i, a, u, o, s, l) {
        var d,
            c,
            f,
            h,
            p,
            _,
            v,
            g,
            y,
            D,
            b,
            C,
            E,
            w,
            A,
            B,
            F,
            V,
            k,
            x,
            P = i.constructor,
            O = i.s == a.s ? 1 : -1,
            S = i.d,
            R = a.d;
        if (!S || !S[0] || !R || !R[0])
            return new P(!i.s || !a.s || (S ? R && S[0] == R[0] : !R) ? NaN : (S && 0 == S[0]) || !R ? 0 * O : O / 0);
        for (
            l ? ((p = 1), (c = i.e - a.e)) : ((l = 1e7), (p = 7), (c = m(i.e / p) - m(a.e / p))),
                k = R.length,
                F = S.length,
                D = (y = new P(O)).d = [],
                f = 0;
            R[f] == (S[f] || 0);
            f++
        );
        if (
            (R[f] > (S[f] || 0) && c--,
            null == u ? ((w = u = P.precision), (o = P.rounding)) : (w = s ? u + (i.e - a.e) + 1 : u),
            w < 0)
        )
            D.push(1), (_ = !0);
        else {
            if (((w = (w / p + 2) | 0), (f = 0), 1 == k)) {
                for (h = 0, R = R[0], w++; (f < F || h) && w--; f++)
                    (A = h * l + (S[f] || 0)), (D[f] = (A / R) | 0), (h = (A % R) | 0);
                _ = h || f < F;
            } else {
                for (
                    (h = (l / (R[0] + 1)) | 0) > 1 &&
                        ((R = e(R, h, l)), (S = e(S, h, l)), (k = R.length), (F = S.length)),
                        B = k,
                        C = (b = S.slice(0, k)).length;
                    C < k;
                )
                    b[C++] = 0;
                (x = R.slice()).unshift(0), (V = R[0]), R[1] >= l / 2 && ++V;
                do
                    (h = 0),
                        (d = t(R, b, k, C)) < 0
                            ? ((E = b[0]),
                              k != C && (E = E * l + (b[1] || 0)),
                              (h = (E / V) | 0) > 1
                                  ? (h >= l && (h = l - 1),
                                    (g = (v = e(R, h, l)).length),
                                    (C = b.length),
                                    1 == (d = t(v, b, g, C)) && (h--, n(v, k < g ? x : R, g, l)))
                                  : (0 == h && (d = h = 1), (v = R.slice())),
                              (g = v.length) < C && v.unshift(0),
                              n(b, v, C, l),
                              -1 == d && ((C = b.length), (d = t(R, b, k, C)) < 1 && (h++, n(b, k < C ? x : R, C, l))),
                              (C = b.length))
                            : 0 === d && (h++, (b = [0])),
                        (D[f++] = h),
                        d && b[0] ? (b[C++] = S[B] || 0) : ((b = [S[B]]), (C = 1));
                while ((B++ < F || void 0 !== b[0]) && w--);
                _ = void 0 !== b[0];
            }
            D[0] || D.shift();
        }
        if (1 == p) (y.e = c), (r = _);
        else {
            for (f = 1, h = D[0]; h >= 10; h /= 10) f++;
            (y.e = f + c * p - 1), T(y, s ? u + y.e + 1 : u, o, _);
        }
        return y;
    };
})();
function T(e, t, n, r) {
    var i,
        a,
        u,
        o,
        s,
        d,
        c,
        f,
        h,
        p = e.constructor;
    e: if (null != t) {
        if (!(f = e.d)) return e;
        for (i = 1, o = f[0]; o >= 10; o /= 10) i++;
        if ((a = t - i) < 0) (a += 7), (u = t), (s = (((c = f[(h = 0)]) / _(10, i - u - 1)) % 10) | 0);
        else if ((h = Math.ceil((a + 1) / 7)) >= (o = f.length))
            if (r) {
                for (; o++ <= h; ) f.push(0);
                (c = s = 0), (i = 1), (a %= 7), (u = a - 7 + 1);
            } else break e;
        else {
            for (i = 1, c = o = f[h]; o >= 10; o /= 10) i++;
            (a %= 7), (s = (u = a - 7 + i) < 0 ? 0 : ((c / _(10, i - u - 1)) % 10) | 0);
        }
        if (
            ((r = r || t < 0 || void 0 !== f[h + 1] || (u < 0 ? c : c % _(10, i - u - 1))),
            (d =
                n < 4
                    ? (s || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : s > 5 ||
                      (5 == s &&
                          (4 == n ||
                              r ||
                              (6 == n && ((a > 0 ? (u > 0 ? c / _(10, i - u) : 0) : f[h - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
        )
            return (
                (f.length = 0),
                d ? ((t -= e.e + 1), (f[0] = _(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == a
                ? ((f.length = h), (o = 1), h--)
                : ((f.length = h + 1),
                  (o = _(10, 7 - a)),
                  (f[h] = u > 0 ? (((c / _(10, i - u)) % _(10, u)) | 0) * o : 0)),
            d)
        )
            for (;;)
                if (0 == h) {
                    for (a = 1, u = f[0]; u >= 10; u /= 10) a++;
                    for (u = f[0] += o, o = 1; u >= 10; u /= 10) o++;
                    a != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                    break;
                } else {
                    if (((f[h] += o), 1e7 != f[h])) break;
                    (f[h--] = 0), (o = 1);
                }
        for (a = f.length; 0 === f[--a]; ) f.pop();
    }
    return l && (e.e > p.maxE ? ((e.d = null), (e.e = NaN)) : e.e < p.minE && ((e.e = 0), (e.d = [0]))), e;
}
function k(e, t, n) {
    if (!e.isFinite()) return G(e);
    var r,
        i = e.e,
        a = w(e.d),
        u = a.length;
    return (
        t
            ? (n && (r = n - u) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + R(r))
                  : u > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((a = "0." + R(-i - 1) + a), n && (r = n - u) > 0 && (a += R(r)))
              : i >= u
                ? ((a += R(i + 1 - u)), n && (r = n - i - 1) > 0 && (a = a + "." + R(r)))
                : ((r = i + 1) < u && (a = a.slice(0, r) + "." + a.slice(r)),
                  n && (r = n - u) > 0 && (i + 1 === u && (a += "."), (a += R(r)))),
        a
    );
}
function x(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function P(e, t, n) {
    if (t > b) throw ((l = !0), n && (e.precision = n), Error(f));
    return T(new e(u), t, 1, !0);
}
function O(e, t, n) {
    if (t > C) throw Error(f);
    return T(new e(o), t, n, !0);
}
function S(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function R(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function M(e, t, n, r) {
    var i,
        a = new e(1),
        u = Math.ceil(r / 7 + 4);
    for (l = !1; ; ) {
        if ((n % 2 && z((a = a.times(t)).d, u) && (i = !0), 0 === (n = m(n / 2)))) {
            (n = a.d.length - 1), i && 0 === a.d[n] && ++a.d[n];
            break;
        }
        z((t = t.times(t)).d, u);
    }
    return (l = !0), a;
}
function N(e) {
    return 1 & e.d[e.d.length - 1];
}
function L(e, t, n) {
    for (var r, i, a = new e(t[0]), u = 0; ++u < t.length; ) {
        if (!(i = new e(t[u])).s) {
            a = i;
            break;
        }
        ((r = a.cmp(i)) === n || (0 === r && a.s === n)) && (a = i);
    }
    return a;
}
function I(e, t) {
    var n,
        r,
        i,
        a,
        u,
        o,
        s,
        d = 0,
        c = 0,
        f = 0,
        h = e.constructor,
        p = h.rounding,
        m = h.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new h(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((l = !1), (s = m)) : (s = t), o = new h(0.03125); e.e > -2; ) (e = e.times(o)), (f += 5);
    for (s += r = ((Math.log(_(2, f)) / Math.LN10) * 2 + 5) | 0, n = a = u = new h(1), h.precision = s; ; ) {
        if (
            ((a = T(a.times(e), s, 1)),
            (n = n.times(++c)),
            w((o = u.plus(V(a, n, s, 1))).d).slice(0, s) === w(u.d).slice(0, s))
        ) {
            for (i = f; i--; ) u = T(u.times(u), s, 1);
            if (null != t) return (h.precision = m), u;
            if (!(d < 3 && B(u.d, s - r, p, d))) return T(u, (h.precision = m), p, (l = !0));
            (h.precision = s += 10), (n = a = o = new h(1)), (c = 0), d++;
        }
        u = o;
    }
}
function j(e, t) {
    var n,
        r,
        i,
        a,
        u,
        o,
        s,
        d,
        c,
        f,
        h,
        p = 1,
        m = e,
        _ = m.d,
        v = m.constructor,
        g = v.rounding,
        y = v.precision;
    if (m.s < 0 || !_ || !_[0] || (!m.e && 1 == _[0] && 1 == _.length))
        return new v(_ && !_[0] ? -1 / 0 : 1 != m.s ? NaN : _ ? 0 : m);
    if (
        (null == t ? ((l = !1), (c = y)) : (c = t),
        (v.precision = c += 10),
        (r = (n = w(_)).charAt(0)),
        !(15e14 > Math.abs((a = m.e))))
    )
        return (
            (d = P(v, c + 2, y).times(a + "")),
            (m = j(new v(r + "." + n.slice(1)), c - 10).plus(d)),
            (v.precision = y),
            null == t ? T(m, y, g, (l = !0)) : m
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); ) (r = (n = w((m = m.times(e)).d)).charAt(0)), p++;
    for (
        a = m.e,
            r > 1 ? ((m = new v("0." + n)), a++) : (m = new v(r + "." + n.slice(1))),
            f = m,
            s = u = m = V(m.minus(1), m.plus(1), c, 1),
            h = T(m.times(m), c, 1),
            i = 3;
        ;
    ) {
        if (((u = T(u.times(h), c, 1)), w((d = s.plus(V(u, new v(i), c, 1))).d).slice(0, c) === w(s.d).slice(0, c))) {
            if (
                ((s = s.times(2)),
                0 !== a && (s = s.plus(P(v, c + 2, y).times(a + ""))),
                (s = V(s, new v(p), c, 1)),
                null != t)
            )
                return (v.precision = y), s;
            if (!B(s.d, c - 10, g, o)) return T(s, (v.precision = y), g, (l = !0));
            (v.precision = c += 10),
                (d = u = m = V(f.minus(1), f.plus(1), c, 1)),
                (h = T(m.times(m), c, 1)),
                (i = o = 1);
        }
        (s = d), (i += 2);
    }
}
function G(e) {
    return String((e.s * e.s) / 0);
}
function W(e, t) {
    var n, r, i;
    for (
        (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
                ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
                : n < 0 && (n = t.length),
            r = 0;
        48 === t.charCodeAt(r);
        r++
    );
    for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
    if ((t = t.slice(r, i))) {
        if (((i -= r), (e.e = n = n - r - 1), (e.d = []), (r = (n + 1) % 7), n < 0 && (r += 7), r < i)) {
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; ) e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
        } else r -= i;
        for (; r--; ) t += "0";
        e.d.push(+t),
            l &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function K(e, t, n, r, i) {
    var a,
        u,
        o,
        s,
        d = e.precision,
        c = Math.ceil(d / 7);
    for (l = !1, s = n.times(n), o = new e(r); ; ) {
        if (
            ((u = V(o.times(s), new e(t++ * t++), d, 1)),
            (o = i ? r.plus(u) : r.minus(u)),
            (r = V(u.times(s), new e(t++ * t++), d, 1)),
            void 0 !== (u = o.plus(r)).d[c])
        ) {
            for (a = c; u.d[a] === o.d[a] && a--; );
            if (-1 == a) break;
        }
        (a = o), (o = r), (r = u), (u = a);
    }
    return (l = !0), (u.d.length = c + 1), u;
}
function U(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function H(e, t) {
    var n,
        r = t.s < 0,
        a = O(e, e.precision, 1),
        u = a.times(0.5);
    if ((t = t.abs()).lte(u)) return (i = r ? 4 : 1), t;
    if ((n = t.divToInt(a)).isZero()) i = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(a))).lte(u)) return (i = N(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
        i = N(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(a).abs();
}
function q(e, t, n, i) {
    var u,
        o,
        s,
        l,
        d,
        c,
        f,
        h,
        p,
        m = e.constructor,
        _ = void 0 !== n;
    if (
        (_ ? (A(n, 1, 1e9), void 0 === i ? (i = m.rounding) : A(i, 0, 8)) : ((n = m.precision), (i = m.rounding)),
        e.isFinite())
    ) {
        for (
            s = (f = k(e)).indexOf("."),
                _ ? ((u = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (u = t),
                s >= 0 &&
                    ((f = f.replace(".", "")),
                    ((p = new m(1)).e = f.length - s),
                    (p.d = F(k(p), 10, u)),
                    (p.e = p.d.length)),
                o = d = (h = F(f, 10, u)).length;
            0 == h[--d];
        )
            h.pop();
        if (h[0]) {
            if (
                (s < 0
                    ? o--
                    : (((e = new m(e)).d = h), (e.e = o), (h = (e = V(e, p, n, i, 0, u)).d), (o = e.e), (c = r)),
                (s = h[n]),
                (l = u / 2),
                (c = c || void 0 !== h[n + 1]),
                (c =
                    i < 4
                        ? (void 0 !== s || c) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : s > l || (s === l && (4 === i || c || (6 === i && 1 & h[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (h.length = n),
                c)
            )
                for (; ++h[--n] > u - 1; ) (h[n] = 0), n || (++o, h.unshift(1));
            for (d = h.length; !h[d - 1]; --d);
            for (s = 0, f = ""; s < d; s++) f += a.charAt(h[s]);
            if (_) {
                if (d > 1)
                    if (16 == t || 8 == t) {
                        for (s = 16 == t ? 4 : 3, --d; d % s; d++) f += "0";
                        for (d = (h = F(f, u, t)).length; !h[d - 1]; --d);
                        for (s = 1, f = "1."; s < d; s++) f += a.charAt(h[s]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o; ) f = "0" + f;
                f = "0." + f;
            } else if (++o > d) for (o -= d; o--; ) f += "0";
            else o < d && (f = f.slice(0, o) + "." + f.slice(o));
        } else f = _ ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    } else f = G(e);
    return e.s < 0 ? "-" + f : f;
}
function z(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function X(e) {
    return new this(e).abs();
}
function Q(e) {
    return new this(e).acos();
}
function Z(e) {
    return new this(e).acosh();
}
function Y(e, t) {
    return new this(e).plus(t);
}
function J(e) {
    return new this(e).asin();
}
function $(e) {
    return new this(e).asinh();
}
function ee(e) {
    return new this(e).atan();
}
function et(e) {
    return new this(e).atanh();
}
function en(e, t) {
    (e = new this(e)), (t = new this(t));
    var n,
        r = this.precision,
        i = this.rounding,
        a = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? O(this, r, i) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = O(this, a, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = a),
                          (this.rounding = 1),
                          (n = this.atan(V(e, t, a, 1))),
                          (t = O(this, a, 1)),
                          (this.precision = r),
                          (this.rounding = i),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(V(e, t, a, 1)))
                : ((n = O(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function er(e) {
    return new this(e).cbrt();
}
function ei(e) {
    return T((e = new this(e)), e.e + 1, 2);
}
function ea(e, t, n) {
    return new this(e).clamp(t, n);
}
function eu(e) {
    if (!e || "object" != typeof e) throw Error(d + "Object expected");
    var t,
        n,
        r,
        i = !0 === e.defaults,
        a = [
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
    for (t = 0; t < a.length; t += 3)
        if (((n = a[t]), i && (this[n] = s[n]), void 0 !== (r = e[n])))
            if (m(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
            else throw Error(c + n + ": " + r);
    if (((n = "crypto"), i && (this[n] = s[n]), void 0 !== (r = e[n])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(h);
            else this[n] = !1;
        else throw Error(c + n + ": " + r);
    return this;
}
function eo(e) {
    return new this(e).cos();
}
function es(e) {
    return new this(e).cosh();
}
function el(e, t) {
    return new this(e).div(t);
}
function ed(e) {
    return new this(e).exp();
}
function ec(e) {
    return T((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        t,
        n = new this(0);
    for (e = 0, l = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return (l = !0), new this(1 / 0);
            n = t;
        }
    return (l = !0), n.sqrt();
}
function eh(e) {
    return e instanceof eS || (e && e.toStringTag === p) || !1;
}
function ep(e) {
    return new this(e).ln();
}
function em(e, t) {
    return new this(e).log(t);
}
function e_(e) {
    return new this(e).log(2);
}
function ev(e) {
    return new this(e).log(10);
}
function eg() {
    return L(this, arguments, -1);
}
function ey() {
    return L(this, arguments, 1);
}
function eD(e, t) {
    return new this(e).mod(t);
}
function eb(e, t) {
    return new this(e).mul(t);
}
function eC(e, t) {
    return new this(e).pow(t);
}
function eE(e) {
    var t,
        n,
        r,
        i,
        a = 0,
        u = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : A(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); a < r; )
                (i = t[a]) >= 429e7 ? (t[a] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[a++] = i % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); a < r; )
                (i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, a)
                    : (o.push(i % 1e7), (a += 4));
            a = r / 4;
        } else throw Error(h);
    else for (; a < r; ) o[a++] = (1e7 * Math.random()) | 0;
    for (r = o[--a], e %= 7, r && e && ((i = _(10, 7 - e)), (o[a] = ((r / i) | 0) * i)); 0 === o[a]; a--) o.pop();
    if (a < 0) (n = 0), (o = [0]);
    else {
        for (n = -1; 0 === o[0]; n -= 7) o.shift();
        for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
        r < 7 && (n -= 7 - r);
    }
    return (u.e = n), (u.d = o), u;
}
function ew(e) {
    return T((e = new this(e)), e.e + 1, this.rounding);
}
function eA(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eB(e) {
    return new this(e).sin();
}
function eF(e) {
    return new this(e).sinh();
}
function eV(e) {
    return new this(e).sqrt();
}
function eT(e, t) {
    return new this(e).sub(t);
}
function ek() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (l = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (l = !0), T(n, this.precision, this.rounding);
}
function ex(e) {
    return new this(e).tan();
}
function eP(e) {
    return new this(e).tanh();
}
function eO(e) {
    return T((e = new this(e)), e.e + 1, 1);
}
(E[Symbol.for("nodejs.util.inspect.custom")] = E.toString), (E[Symbol.toStringTag] = "Decimal");
var eS = (E.constructor = (function e(t) {
    var n, r, i;
    function a(e) {
        var t, n, r;
        if (!(this instanceof a)) return new a(e);
        if (((this.constructor = a), eh(e))) {
            (this.s = e.s),
                l
                    ? !e.d || e.e > a.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : e.e < a.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = e.e), (this.d = e.d.slice()))
                    : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
        }
        if ("number" == (r = typeof e)) {
            if (0 === e) {
                (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
                l
                    ? t > a.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : t < a.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = t), (this.d = [e]))
                    : ((this.e = t), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                e || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
            }
            return W(this, e.toString());
        }
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                D.test(e)
                    ? W(this, e)
                    : (function (e, t) {
                          var n, r, i, a, u, o, s, d, f;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), D.test(t))) return W(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (g.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (v.test(t)) n = 2;
                          else if (y.test(t)) n = 8;
                          else throw Error(c + t);
                          for (
                              (a = t.search(/p/i)) > 0
                                  ? ((s = +t.slice(a + 1)), (t = t.substring(2, a)))
                                  : (t = t.slice(2)),
                                  u = (a = t.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  u &&
                                      ((a = (o = (t = t.replace(".", "")).length) - a), (i = M(r, new r(n), a, 2 * a))),
                                  a = f = (d = F(t, n, 1e7)).length - 1;
                              0 === d[a];
                              --a
                          )
                              d.pop();
                          return a < 0
                              ? new r(0 * e.s)
                              : ((e.e = x(d, f)),
                                (e.d = d),
                                (l = !1),
                                u && (e = V(e, i, 4 * o)),
                                s && (e = e.times(54 > Math.abs(s) ? _(2, s) : eS.pow(2, s))),
                                (l = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), W(this, e.toString());
        throw Error(c + e);
    }
    if (
        ((a.prototype = E),
        (a.ROUND_UP = 0),
        (a.ROUND_DOWN = 1),
        (a.ROUND_CEIL = 2),
        (a.ROUND_FLOOR = 3),
        (a.ROUND_HALF_UP = 4),
        (a.ROUND_HALF_DOWN = 5),
        (a.ROUND_HALF_EVEN = 6),
        (a.ROUND_HALF_CEIL = 7),
        (a.ROUND_HALF_FLOOR = 8),
        (a.EUCLID = 9),
        (a.config = a.set = eu),
        (a.clone = e),
        (a.isDecimal = eh),
        (a.abs = X),
        (a.acos = Q),
        (a.acosh = Z),
        (a.add = Y),
        (a.asin = J),
        (a.asinh = $),
        (a.atan = ee),
        (a.atanh = et),
        (a.atan2 = en),
        (a.cbrt = er),
        (a.ceil = ei),
        (a.clamp = ea),
        (a.cos = eo),
        (a.cosh = es),
        (a.div = el),
        (a.exp = ed),
        (a.floor = ec),
        (a.hypot = ef),
        (a.ln = ep),
        (a.log = em),
        (a.log10 = ev),
        (a.log2 = e_),
        (a.max = eg),
        (a.min = ey),
        (a.mod = eD),
        (a.mul = eb),
        (a.pow = eC),
        (a.random = eE),
        (a.round = ew),
        (a.sign = eA),
        (a.sin = eB),
        (a.sinh = eF),
        (a.sqrt = eV),
        (a.sub = eT),
        (a.sum = ek),
        (a.tan = ex),
        (a.tanh = eP),
        (a.trunc = eO),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < i.length;
        )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
    return a.config(t), a;
})(s));
(u = new eS(u)), (o = new eS(o)), new eS(10);
let eR = new eS(0);
new eS(-0);
var eM = n(243399);
function eN(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
}
function eL(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function eI(e) {
    return "function" == typeof e;
}
function ej(e, t, n) {
    if (!eI(e)) return !1;
    if (n?.boundTargetFunction) return t instanceof n?.boundTargetFunction;
    if ("object" != typeof t) return !1;
    let r = e.prototype;
    if ("object" != typeof r)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(r, t);
}
