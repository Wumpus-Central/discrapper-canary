"use strict";
r.d(t, {
    BT: () => eB,
    Wt: () => eU,
    bf: () => eF,
    xC: () =>
        function e(t) {
            if ("number" == typeof t) return new eL(t);
            if ("bigint" == typeof t) return new eL(t.toString());
            if (((0, eP.V1)("symbol" != typeof t, "Symbol is not supported", TypeError), void 0 === t))
                return new eL(NaN);
            if (null === t || 0 === t) return eI;
            if (!0 === t) return new eL(1);
            if ("string" == typeof t)
                try {
                    return new eL(t);
                } catch {
                    return new eL(NaN);
                }
            (0, eP.V1)("object" == typeof t, "object expected", TypeError);
            let r = (function (e, t) {
                if ("object" == typeof e && null != e) {
                    let r,
                        n = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                    if (void 0 !== n) {
                        void 0 === t
                            ? (r = "default")
                            : "string" === t
                              ? (r = "string")
                              : ((0, eP.V1)("number" === t, 'preferredType must be "string" or "number"'),
                                (r = "number"));
                        let a = n.call(e, r);
                        if ("object" != typeof a) return a;
                        throw TypeError("Cannot convert exotic object to primitive.");
                    }
                    for (let r of (void 0 === t && (t = "number"),
                    "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                        let t = e[r];
                        if (eY(t)) {
                            let r = t.call(e);
                            if ("object" != typeof r) return r;
                        }
                    }
                    throw TypeError("Cannot convert object to primitive value");
                }
                return e;
            })(t, "number");
            return (0, eP.V1)("object" != typeof r, "object expected", TypeError), e(r);
        },
});
var n,
    a,
    s = "0123456789abcdef",
    i =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    o =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    l = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    u = !0,
    c = "[DecimalError] ",
    d = c + "Invalid argument: ",
    f = c + "Precision limit exceeded",
    p = c + "crypto unavailable",
    h = "[object Decimal]",
    m = Math.floor,
    _ = Math.pow,
    g = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    v = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    b = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    y = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    E = i.length - 1,
    S = o.length - 1,
    T = { toStringTag: h };
function x(e) {
    var t,
        r,
        n,
        a = e.length - 1,
        s = "",
        i = e[0];
    if (a > 0) {
        for (s += i, t = 1; t < a; t++) (r = 7 - (n = e[t] + "").length) && (s += I(r)), (s += n);
        (r = 7 - (n = (i = e[t]) + "").length) && (s += I(r));
    } else if (0 === i) return "0";
    for (; i % 10 == 0; ) i /= 10;
    return s + i;
}
function w(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(d + e);
}
function C(e, t, r, n) {
    var a, s, i, o;
    for (s = e[0]; s >= 10; s /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (a = 0)) : ((a = Math.ceil((t + 1) / 7)), (t %= 7)),
        (s = _(10, 7 - t)),
        (o = (e[a] % s) | 0),
        null == n
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (i = (r < 4 && 99999 == o) || (r > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (i =
                      (((r < 4 && o + 1 == s) || (r > 3 && o + 1 == s / 2)) &&
                          ((e[a + 1] / s / 100) | 0) == _(10, t - 2) - 1) ||
                      ((o == s / 2 || 0 == o) && ((e[a + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (i = ((n || r < 4) && 9999 == o) || (!n && r > 3 && 4999 == o)))
              : (i =
                    (((n || r < 4) && o + 1 == s) || (!n && r > 3 && o + 1 == s / 2)) &&
                    ((e[a + 1] / s / 1e3) | 0) == _(10, t - 3) - 1),
        i
    );
}
function D(e, t, r) {
    for (var n, a, i = [0], o = 0, l = e.length; o < l; ) {
        for (a = i.length; a--; ) i[a] *= t;
        for (i[0] += s.indexOf(e.charAt(o++)), n = 0; n < i.length; n++)
            i[n] > r - 1 && (void 0 === i[n + 1] && (i[n + 1] = 0), (i[n + 1] += (i[n] / r) | 0), (i[n] %= r));
    }
    return i.reverse();
}
(T.absoluteValue = T.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), A(e);
    }),
    (T.ceil = function () {
        return A(new this.constructor(this), this.e + 1, 2);
    }),
    (T.clampedTo = T.clamp =
        function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s)) return new r(NaN);
            if (e.gt(t)) throw Error(d + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
        }),
    (T.comparedTo = T.cmp =
        function (e) {
            var t,
                r,
                n,
                a,
                s = this.d,
                i = (e = new this.constructor(e)).d,
                o = this.s,
                l = e.s;
            if (!s || !i) return o && l ? (o !== l ? o : s === i ? 0 : !s ^ (o < 0) ? 1 : -1) : NaN;
            if (!s[0] || !i[0]) return s[0] ? o : i[0] ? -l : 0;
            if (o !== l) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (t = 0, r = (n = s.length) < (a = i.length) ? n : a; t < r; ++t)
                if (s[t] !== i[t]) return (s[t] > i[t]) ^ (o < 0) ? 1 : -1;
            return n === a ? 0 : (n > a) ^ (o < 0) ? 1 : -1;
        }),
    (T.cosine = T.cos =
        function () {
            var e,
                t,
                r = this,
                n = r.constructor;
            return r.d
                ? r.d[0]
                    ? ((e = n.precision),
                      (t = n.rounding),
                      (n.precision = e + Math.max(r.e, r.sd()) + 7),
                      (n.rounding = 1),
                      (r = (function (e, t) {
                          var r, n, a;
                          if (t.isZero()) return t;
                          (n = t.d.length) < 32
                              ? (a = (1 / G(4, (r = Math.ceil(n / 3)))).toString())
                              : ((r = 16), (a = "2.3283064365386962890625e-10")),
                              (e.precision += r),
                              (t = H(e, 1, t.times(a), new e(1)));
                          for (var s = r; s--; ) {
                              var i = t.times(t);
                              t = i.times(i).minus(i).times(8).plus(1);
                          }
                          return (e.precision -= r), t;
                      })(n, z(n, r))),
                      (n.precision = e),
                      (n.rounding = t),
                      A(2 == a || 3 == a ? r.neg() : r, e, t, !0))
                    : new n(1)
                : new n(NaN);
        }),
    (T.cubeRoot = T.cbrt =
        function () {
            var e,
                t,
                r,
                n,
                a,
                s,
                i,
                o,
                l,
                c,
                d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
                u = !1,
                    (s = this.s * _(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                        ? (n = new d(s.toString()))
                        : ((r = x(this.d)),
                          (s = ((e = this.e) - r.length + 1) % 3) && (r += 1 == s || -2 == s ? "0" : "00"),
                          (s = _(r, 1 / 3)),
                          (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((n = new d(
                              (r = s == 1 / 0 ? "5e" + e : (r = s.toExponential()).slice(0, r.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    i = (e = d.precision) + 3;
                ;
            )
                if (
                    ((n = O((c = (l = (o = n).times(o).times(o)).plus(this)).plus(this).times(o), c.plus(l), i + 2, 1)),
                    x(o.d).slice(0, i) === (r = x(n.d)).slice(0, i))
                ) {
                    if ("9999" != (r = r.slice(i - 3, i + 1)) && (a || "4999" != r)) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                            (A(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
                        break;
                    }
                    if (!a && (A(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        n = o;
                        break;
                    }
                    (i += 4), (a = 1);
                }
            return (u = !0), A(n, e, d.rounding, t);
        }),
    (T.decimalPlaces = T.dp =
        function () {
            var e,
                t = this.d,
                r = NaN;
            if (t) {
                if (((r = ((e = t.length - 1) - m(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) r--;
                r < 0 && (r = 0);
            }
            return r;
        }),
    (T.dividedBy = T.div =
        function (e) {
            return O(this, new this.constructor(e));
        }),
    (T.dividedToIntegerBy = T.divToInt =
        function (e) {
            var t = this.constructor;
            return A(O(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (T.equals = T.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (T.floor = function () {
        return A(new this.constructor(this), this.e + 1, 3);
    }),
    (T.greaterThan = T.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (T.greaterThanOrEqualTo = T.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (T.hyperbolicCosine = T.cosh =
        function () {
            var e,
                t,
                r,
                n,
                a,
                s = this,
                i = s.constructor,
                o = new i(1);
            if (!s.isFinite()) return new i(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return o;
            (r = i.precision),
                (n = i.rounding),
                (i.precision = r + Math.max(s.e, s.sd()) + 4),
                (i.rounding = 1),
                (a = s.d.length) < 32
                    ? (t = (1 / G(4, (e = Math.ceil(a / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (s = H(i, 1, s.times(t), new i(1), !0));
            for (var l, u = e, c = new i(8); u--; ) (l = s.times(s)), (s = o.minus(l.times(c.minus(l.times(c)))));
            return A(s, (i.precision = r), (i.rounding = n), !0);
        }),
    (T.hyperbolicSine = T.sinh =
        function () {
            var e,
                t,
                r,
                n,
                a = this,
                s = a.constructor;
            if (!a.isFinite() || a.isZero()) return new s(a);
            if (
                ((t = s.precision),
                (r = s.rounding),
                (s.precision = t + Math.max(a.e, a.sd()) + 4),
                (s.rounding = 1),
                (n = a.d.length) < 3)
            )
                a = H(s, 2, a, a, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e), (a = H(s, 2, (a = a.times(1 / G(5, e))), a, !0));
                for (var i, o = new s(5), l = new s(16), u = new s(20); e--; )
                    (i = a.times(a)), (a = a.times(o.plus(i.times(l.times(i).plus(u)))));
            }
            return (s.precision = t), (s.rounding = r), A(a, t, r, !0);
        }),
    (T.hyperbolicTangent = T.tanh =
        function () {
            var e,
                t,
                r = this.constructor;
            return this.isFinite()
                ? this.isZero()
                    ? new r(this)
                    : ((e = r.precision),
                      (t = r.rounding),
                      (r.precision = e + 7),
                      (r.rounding = 1),
                      O(this.sinh(), this.cosh(), (r.precision = e), (r.rounding = t)))
                : new r(this.s);
        }),
    (T.inverseCosine = T.acos =
        function () {
            var e = this,
                t = e.constructor,
                r = e.abs().cmp(1),
                n = t.precision,
                a = t.rounding;
            return -1 !== r
                ? 0 === r
                    ? e.isNeg()
                        ? N(t, n, a)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? N(t, n + 4, a).times(0.5)
                  : ((t.precision = n + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = n),
                    (t.rounding = a),
                    e.times(2));
        }),
    (T.inverseHyperbolicCosine = T.acosh =
        function () {
            var e,
                t,
                r = this,
                n = r.constructor;
            return r.lte(1)
                ? new n(r.eq(1) ? 0 : NaN)
                : r.isFinite()
                  ? ((e = n.precision),
                    (t = n.rounding),
                    (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                    (n.rounding = 1),
                    (u = !1),
                    (r = r.times(r).minus(1).sqrt().plus(r)),
                    (u = !0),
                    (n.precision = e),
                    (n.rounding = t),
                    r.ln())
                  : new n(r);
        }),
    (T.inverseHyperbolicSine = T.asinh =
        function () {
            var e,
                t,
                r = this,
                n = r.constructor;
            return !r.isFinite() || r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                  (n.rounding = 1),
                  (u = !1),
                  (r = r.times(r).plus(1).sqrt().plus(r)),
                  (u = !0),
                  (n.precision = e),
                  (n.rounding = t),
                  r.ln());
        }),
    (T.inverseHyperbolicTangent = T.atanh =
        function () {
            var e,
                t,
                r,
                n,
                a = this,
                s = a.constructor;
            return a.isFinite()
                ? a.e >= 0
                    ? new s(a.abs().eq(1) ? a.s / 0 : a.isZero() ? a : NaN)
                    : ((e = s.precision), (t = s.rounding), Math.max((n = a.sd()), e) < -(2 * a.e) - 1)
                      ? A(new s(a), e, t, !0)
                      : ((s.precision = r = n - a.e),
                        (a = O(a.plus(1), new s(1).minus(a), r + e, 1)),
                        (s.precision = e + 4),
                        (s.rounding = 1),
                        (a = a.ln()),
                        (s.precision = e),
                        (s.rounding = t),
                        a.times(0.5))
                : new s(NaN);
        }),
    (T.inverseSine = T.asin =
        function () {
            var e,
                t,
                r,
                n,
                a = this,
                s = a.constructor;
            return a.isZero()
                ? new s(a)
                : ((t = a.abs().cmp(1)), (r = s.precision), (n = s.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = N(s, r + 4, n).times(0.5)).s = a.s), e)
                      : new s(NaN)
                  : ((s.precision = r + 6),
                    (s.rounding = 1),
                    (a = a.div(new s(1).minus(a.times(a)).sqrt().plus(1)).atan()),
                    (s.precision = r),
                    (s.rounding = n),
                    a.times(2));
        }),
    (T.inverseTangent = T.atan =
        function () {
            var e,
                t,
                r,
                n,
                a,
                s,
                i,
                o,
                l,
                c = this,
                d = c.constructor,
                f = d.precision,
                p = d.rounding;
            if (c.isFinite()) {
                if (c.isZero()) return new d(c);
                else if (c.abs().eq(1) && f + 4 <= S) return ((i = N(d, f + 4, p).times(0.25)).s = c.s), i;
            } else {
                if (!c.s) return new d(NaN);
                if (f + 4 <= S) return ((i = N(d, f + 4, p).times(0.5)).s = c.s), i;
            }
            for (d.precision = o = f + 10, d.rounding = 1, e = r = Math.min(28, (o / 7 + 2) | 0); e; --e)
                c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (u = !1, t = Math.ceil(o / 7), n = 1, l = c.times(c), i = new d(c), a = c; -1 !== e; )
                if (
                    ((a = a.times(l)),
                    (s = i.minus(a.div((n += 2)))),
                    (a = a.times(l)),
                    void 0 !== (i = s.plus(a.div((n += 2)))).d[t])
                )
                    for (e = t; i.d[e] === s.d[e] && e--; );
            return r && (i = i.times(2 << (r - 1))), (u = !0), A(i, (d.precision = f), (d.rounding = p), !0);
        }),
    (T.isFinite = function () {
        return !!this.d;
    }),
    (T.isInteger = T.isInt =
        function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
        }),
    (T.isNaN = function () {
        return !this.s;
    }),
    (T.isNegative = T.isNeg =
        function () {
            return this.s < 0;
        }),
    (T.isPositive = T.isPos =
        function () {
            return this.s > 0;
        }),
    (T.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (T.lessThan = T.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (T.lessThanOrEqualTo = T.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (T.logarithm = T.log =
        function (e) {
            var t,
                r,
                n,
                a,
                s,
                i,
                o,
                l = this.constructor,
                c = l.precision,
                d = l.rounding;
            if (null == e) (e = new l(10)), (t = !0);
            else {
                if (((r = (e = new l(e)).d), e.s < 0 || !r || !r[0] || e.eq(1))) return new l(NaN);
                t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
                return new l(r && !r[0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0);
            if (t)
                if (r.length > 1) a = !0;
                else {
                    for (n = r[0]; n % 10 == 0; ) n /= 10;
                    a = 1 !== n;
                }
            if (((u = !1), C((o = O((s = U(this, (i = c + 5))), t ? k(l, i + 10) : U(e, i), i, 1)).d, (n = c), d)))
                do
                    if (((i += 10), (o = O((s = U(this, i)), t ? k(l, i + 10) : U(e, i), i, 1)), !a)) {
                        +x(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = A(o, c + 1, 0));
                        break;
                    }
                while (C(o.d, (n += 10), d));
            return (u = !0), A(o, c, d);
        }),
    (T.minus = T.sub =
        function (e) {
            var t,
                r,
                n,
                a,
                s,
                i,
                o,
                l,
                c,
                d,
                f,
                p,
                h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
                return (
                    this.s && e.s
                        ? this.d
                            ? (e.s = -e.s)
                            : (e = new h(e.d || this.s !== e.s ? this : NaN))
                        : (e = new h(NaN)),
                    e
                );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (((c = this.d), (p = e.d), (o = h.precision), (l = h.rounding), !c[0] || !p[0])) {
                if (p[0]) e.s = -e.s;
                else {
                    if (!c[0]) return new h(3 === l ? -0 : 0);
                    e = new h(this);
                }
                return u ? A(e, o, l) : e;
            }
            if (((r = m(e.e / 7)), (d = m(this.e / 7)), (c = c.slice()), (s = d - r))) {
                for (
                    (f = s < 0) ? ((t = c), (s = -s), (i = p.length)) : ((t = p), (r = d), (i = c.length)),
                        s > (n = Math.max(Math.ceil(o / 7), i) + 2) && ((s = n), (t.length = 1)),
                        t.reverse(),
                        n = s;
                    n--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((f = (n = c.length) < (i = p.length)) && (i = n), n = 0; n < i; n++)
                    if (c[n] != p[n]) {
                        f = c[n] < p[n];
                        break;
                    }
                s = 0;
            }
            for (f && ((t = c), (c = p), (p = t), (e.s = -e.s)), i = c.length, n = p.length - i; n > 0; --n) c[i++] = 0;
            for (n = p.length; n > s; ) {
                if (c[--n] < p[n]) {
                    for (a = n; a && 0 === c[--a]; ) c[a] = 1e7 - 1;
                    --c[a], (c[n] += 1e7);
                }
                c[n] -= p[n];
            }
            for (; 0 === c[--i]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --r;
            return c[0] ? ((e.d = c), (e.e = R(c, r)), u ? A(e, o, l) : e) : new h(3 === l ? -0 : 0);
        }),
    (T.modulo = T.mod =
        function (e) {
            var t,
                r = this.constructor;
            return ((e = new r(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((u = !1),
                      9 == r.modulo
                          ? ((t = O(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = O(this, e, 0, r.modulo, 1)),
                      (t = t.times(e)),
                      (u = !0),
                      this.minus(t))
                    : A(new r(this), r.precision, r.rounding)
                : new r(NaN);
        }),
    (T.naturalExponential = T.exp =
        function () {
            return Y(this);
        }),
    (T.naturalLogarithm = T.ln =
        function () {
            return U(this);
        }),
    (T.negated = T.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), A(e);
        }),
    (T.plus = T.add =
        function (e) {
            var t,
                r,
                n,
                a,
                s,
                i,
                o,
                l,
                c,
                d,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN)) : (e = new f(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((c = this.d), (d = e.d), (o = f.precision), (l = f.rounding), !c[0] || !d[0]))
                return d[0] || (e = new f(this)), u ? A(e, o, l) : e;
            if (((s = m(this.e / 7)), (n = m(e.e / 7)), (c = c.slice()), (a = s - n))) {
                for (
                    a < 0 ? ((r = c), (a = -a), (i = d.length)) : ((r = d), (n = s), (i = c.length)),
                        a > (i = (s = Math.ceil(o / 7)) > i ? s + 1 : i + 1) && ((a = i), (r.length = 1)),
                        r.reverse();
                    a--;
                )
                    r.push(0);
                r.reverse();
            }
            for ((i = c.length) - (a = d.length) < 0 && ((a = i), (r = d), (d = c), (c = r)), t = 0; a; )
                (t = ((c[--a] = c[a] + d[a] + t) / 1e7) | 0), (c[a] %= 1e7);
            for (t && (c.unshift(t), ++n), i = c.length; 0 == c[--i]; ) c.pop();
            return (e.d = c), (e.e = R(c, n)), u ? A(e, o, l) : e;
        }),
    (T.precision = T.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(d + e);
            return this.d ? ((t = L(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (T.round = function () {
        var e = this.constructor;
        return A(new e(this), this.e + 1, e.rounding);
    }),
    (T.sine = T.sin =
        function () {
            var e,
                t,
                r = this,
                n = r.constructor;
            return r.isFinite()
                ? r.isZero()
                    ? new n(r)
                    : ((e = n.precision),
                      (t = n.rounding),
                      (n.precision = e + Math.max(r.e, r.sd()) + 7),
                      (n.rounding = 1),
                      (r = (function (e, t) {
                          var r,
                              n = t.d.length;
                          if (n < 3) return t.isZero() ? t : H(e, 2, t, t);
                          (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                              (t = H(e, 2, (t = t.times(1 / G(5, r))), t));
                          for (var a, s = new e(5), i = new e(16), o = new e(20); r--; )
                              (a = t.times(t)), (t = t.times(s.plus(a.times(i.times(a).minus(o)))));
                          return t;
                      })(n, z(n, r))),
                      (n.precision = e),
                      (n.rounding = t),
                      A(a > 2 ? r.neg() : r, e, t, !0))
                : new n(NaN);
        }),
    (T.squareRoot = T.sqrt =
        function () {
            var e,
                t,
                r,
                n,
                a,
                s,
                i = this.d,
                o = this.e,
                l = this.s,
                c = this.constructor;
            if (1 !== l || !i || !i[0]) return new c(!l || (l < 0 && (!i || i[0])) ? NaN : i ? this : 1 / 0);
            for (
                u = !1,
                    0 == (l = Math.sqrt(+this)) || l == 1 / 0
                        ? (((t = x(i)).length + o) % 2 == 0 && (t += "0"),
                          (l = Math.sqrt(t)),
                          (o = m((o + 1) / 2) - (o < 0 || o % 2)),
                          (n = new c(
                              (t = l == 1 / 0 ? "5e" + o : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (n = new c(l.toString())),
                    r = (o = c.precision) + 3;
                ;
            )
                if (
                    ((n = (s = n).plus(O(this, s, r + 2, 1)).times(0.5)),
                    x(s.d).slice(0, r) === (t = x(n.d)).slice(0, r))
                ) {
                    if ("9999" != (t = t.slice(r - 3, r + 1)) && (a || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (A(n, o + 1, 1), (e = !n.times(n).eq(this)));
                        break;
                    }
                    if (!a && (A(s, o + 1, 0), s.times(s).eq(this))) {
                        n = s;
                        break;
                    }
                    (r += 4), (a = 1);
                }
            return (u = !0), A(n, o, c.rounding, e);
        }),
    (T.tangent = T.tan =
        function () {
            var e,
                t,
                r = this,
                n = r.constructor;
            return r.isFinite()
                ? r.isZero()
                    ? new n(r)
                    : ((e = n.precision),
                      (t = n.rounding),
                      (n.precision = e + 10),
                      (n.rounding = 1),
                      ((r = r.sin()).s = 1),
                      (r = O(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                      (n.precision = e),
                      (n.rounding = t),
                      A(2 == a || 4 == a ? r.neg() : r, e, t, !0))
                : new n(NaN);
        }),
    (T.times = T.mul =
        function (e) {
            var t,
                r,
                n,
                a,
                s,
                i,
                o,
                l,
                c,
                d = this.constructor,
                f = this.d,
                p = (e = new d(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !p || !p[0]))
                return new d(!e.s || (f && !f[0] && !p) || (p && !p[0] && !f) ? NaN : !f || !p ? e.s / 0 : 0 * e.s);
            for (
                r = m(this.e / 7) + m(e.e / 7),
                    (l = f.length) < (c = p.length) && ((s = f), (f = p), (p = s), (i = l), (l = c), (c = i)),
                    s = [],
                    n = i = l + c;
                n--;
            )
                s.push(0);
            for (n = c; --n >= 0; ) {
                for (t = 0, a = l + n; a > n; )
                    (o = s[a] + p[n] * f[a - n - 1] + t), (s[a--] = (o % 1e7) | 0), (t = (o / 1e7) | 0);
                s[a] = ((s[a] + t) % 1e7) | 0;
            }
            for (; !s[--i]; ) s.pop();
            return t ? ++r : s.shift(), (e.d = s), (e.e = R(s, r)), u ? A(e, d.precision, d.rounding) : e;
        }),
    (T.toBinary = function (e, t) {
        return W(this, 2, e, t);
    }),
    (T.toDecimalPlaces = T.toDP =
        function (e, t) {
            var r = this,
                n = r.constructor;
            return ((r = new n(r)), void 0 === e)
                ? r
                : (w(e, 0, 1e9), void 0 === t ? (t = n.rounding) : w(t, 0, 8), A(r, e + r.e + 1, t));
        }),
    (T.toExponential = function (e, t) {
        var r,
            n = this,
            a = n.constructor;
        return (
            void 0 === e
                ? (r = M(n, !0))
                : (w(e, 0, 1e9),
                  void 0 === t ? (t = a.rounding) : w(t, 0, 8),
                  (r = M((n = A(new a(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? "-" + r : r
        );
    }),
    (T.toFixed = function (e, t) {
        var r,
            n,
            a = this.constructor;
        return (
            void 0 === e
                ? (r = M(this))
                : (w(e, 0, 1e9),
                  void 0 === t ? (t = a.rounding) : w(t, 0, 8),
                  (r = M((n = A(new a(this), e + this.e + 1, t)), !1, e + n.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + r : r
        );
    }),
    (T.toFraction = function (e) {
        var t,
            r,
            n,
            a,
            s,
            i,
            o,
            l,
            c,
            f,
            p,
            h,
            m = this.d,
            g = this.constructor;
        if (!m) return new g(this);
        if (
            ((c = r = new g(1)),
            (n = l = new g(0)),
            (i = (s = (t = new g(n)).e = L(m) - this.e - 1) % 7),
            (t.d[0] = _(10, i < 0 ? 7 + i : i)),
            null == e)
        )
            e = s > 0 ? t : c;
        else {
            if (!(o = new g(e)).isInt() || o.lt(c)) throw Error(d + o);
            e = o.gt(t) ? (s > 0 ? t : c) : o;
        }
        for (
            u = !1, o = new g(x(m)), f = g.precision, g.precision = s = 7 * m.length * 2;
            (p = O(o, t, 0, 1, 1)), 1 != (a = r.plus(p.times(n))).cmp(e);
        )
            (r = n), (n = a), (a = c), (c = l.plus(p.times(a))), (l = a), (a = t), (t = o.minus(p.times(a))), (o = a);
        return (
            (a = O(e.minus(r), n, 0, 1, 1)),
            (l = l.plus(a.times(c))),
            (r = r.plus(a.times(n))),
            (l.s = c.s = this.s),
            (h =
                1 >
                O(c, n, s, 1)
                    .minus(this)
                    .abs()
                    .cmp(O(l, r, s, 1).minus(this).abs())
                    ? [c, n]
                    : [l, r]),
            (g.precision = f),
            (u = !0),
            h
        );
    }),
    (T.toHexadecimal = T.toHex =
        function (e, t) {
            return W(this, 16, e, t);
        }),
    (T.toNearest = function (e, t) {
        var r = this,
            n = r.constructor;
        if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
        } else {
            if (((e = new n(e)), void 0 === t ? (t = n.rounding) : w(t, 0, 8), !r.d)) return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
        }
        return e.d[0] ? ((u = !1), (r = O(r, e, 0, t, 1).times(e)), (u = !0), A(r)) : ((e.s = r.s), (r = e)), r;
    }),
    (T.toNumber = function () {
        return +this;
    }),
    (T.toOctal = function (e, t) {
        return W(this, 8, e, t);
    }),
    (T.toPower = T.pow =
        function (e) {
            var t,
                r,
                n,
                a,
                s,
                i,
                o = this,
                l = o.constructor,
                c = +(e = new l(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new l(_(+o, c));
            if ((o = new l(o)).eq(1)) return o;
            if (((n = l.precision), (s = l.rounding), e.eq(1))) return A(o, n, s);
            if ((t = m(e.e / 7)) >= e.d.length - 1 && (r = c < 0 ? -c : c) <= 0x1fffffffffffff)
                return (a = P(l, o, r, n)), e.s < 0 ? new l(1).div(a) : A(a, n, s);
            if ((i = o.s) < 0) {
                if (t < e.d.length - 1) return new l(NaN);
                if (((1 & e.d[t]) == 0 && (i = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = i), o;
            }
            return (t =
                0 != (r = _(+o, c)) && isFinite(r)
                    ? new l(r + "").e
                    : m(c * (Math.log("0." + x(o.d)) / Math.LN10 + o.e + 1))) >
                l.maxE + 1 || t < l.minE - 1
                ? new l(t > 0 ? i / 0 : 0)
                : ((u = !1),
                  (l.rounding = o.s = 1),
                  (r = Math.min(12, (t + "").length)),
                  (a = Y(e.times(U(o, n + r)), n)).d &&
                      C((a = A(a, n + 5, 1)).d, n, s) &&
                      ((t = n + 10),
                      +x((a = A(Y(e.times(U(o, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 &&
                          (a = A(a, n + 1, 0))),
                  (a.s = i),
                  (u = !0),
                  (l.rounding = s),
                  A(a, n, s));
        }),
    (T.toPrecision = function (e, t) {
        var r,
            n = this,
            a = n.constructor;
        return (
            void 0 === e
                ? (r = M(n, n.e <= a.toExpNeg || n.e >= a.toExpPos))
                : (w(e, 1, 1e9),
                  void 0 === t ? (t = a.rounding) : w(t, 0, 8),
                  (r = M((n = A(new a(n), e, t)), e <= n.e || n.e <= a.toExpNeg, e))),
            n.isNeg() && !n.isZero() ? "-" + r : r
        );
    }),
    (T.toSignificantDigits = T.toSD =
        function (e, t) {
            var r = this.constructor;
            return (
                void 0 === e
                    ? ((e = r.precision), (t = r.rounding))
                    : (w(e, 1, 1e9), void 0 === t ? (t = r.rounding) : w(t, 0, 8)),
                A(new r(this), e, t)
            );
        }),
    (T.toString = function () {
        var e = this.constructor,
            t = M(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (T.truncated = T.trunc =
        function () {
            return A(new this.constructor(this), this.e + 1, 1);
        }),
    (T.valueOf = T.toJSON =
        function () {
            var e = this.constructor,
                t = M(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var O = (function () {
    function e(e, t, r) {
        var n,
            a = 0,
            s = e.length;
        for (e = e.slice(); s--; ) (n = e[s] * t + a), (e[s] = (n % r) | 0), (a = (n / r) | 0);
        return a && e.unshift(a), e;
    }
    function t(e, t, r, n) {
        var a, s;
        if (r != n) s = r > n ? 1 : -1;
        else
            for (a = s = 0; a < r; a++)
                if (e[a] != t[a]) {
                    s = e[a] > t[a] ? 1 : -1;
                    break;
                }
        return s;
    }
    function r(e, t, r, n) {
        for (var a = 0; r--; ) (e[r] -= a), (a = +(e[r] < t[r])), (e[r] = a * n + e[r] - t[r]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (a, s, i, o, l, u) {
        var c,
            d,
            f,
            p,
            h,
            _,
            g,
            v,
            b,
            y,
            E,
            S,
            T,
            x,
            w,
            C,
            D,
            O,
            M,
            R,
            k = a.constructor,
            N = a.s == s.s ? 1 : -1,
            L = a.d,
            I = s.d;
        if (!L || !L[0] || !I || !I[0])
            return new k(!a.s || !s.s || (L ? I && L[0] == I[0] : !I) ? NaN : (L && 0 == L[0]) || !I ? 0 * N : N / 0);
        for (
            u ? ((h = 1), (d = a.e - s.e)) : ((u = 1e7), (h = 7), (d = m(a.e / h) - m(s.e / h))),
                M = I.length,
                D = L.length,
                y = (b = new k(N)).d = [],
                f = 0;
            I[f] == (L[f] || 0);
            f++
        );
        if (
            (I[f] > (L[f] || 0) && d--,
            null == i ? ((x = i = k.precision), (o = k.rounding)) : (x = l ? i + (a.e - s.e) + 1 : i),
            x < 0)
        )
            y.push(1), (_ = !0);
        else {
            if (((x = (x / h + 2) | 0), (f = 0), 1 == M)) {
                for (p = 0, I = I[0], x++; (f < D || p) && x--; f++)
                    (w = p * u + (L[f] || 0)), (y[f] = (w / I) | 0), (p = (w % I) | 0);
                _ = p || f < D;
            } else {
                for (
                    (p = (u / (I[0] + 1)) | 0) > 1 &&
                        ((I = e(I, p, u)), (L = e(L, p, u)), (M = I.length), (D = L.length)),
                        C = M,
                        S = (E = L.slice(0, M)).length;
                    S < M;
                )
                    E[S++] = 0;
                (R = I.slice()).unshift(0), (O = I[0]), I[1] >= u / 2 && ++O;
                do
                    (p = 0),
                        (c = t(I, E, M, S)) < 0
                            ? ((T = E[0]),
                              M != S && (T = T * u + (E[1] || 0)),
                              (p = (T / O) | 0) > 1
                                  ? (p >= u && (p = u - 1),
                                    (v = (g = e(I, p, u)).length),
                                    (S = E.length),
                                    1 == (c = t(g, E, v, S)) && (p--, r(g, M < v ? R : I, v, u)))
                                  : (0 == p && (c = p = 1), (g = I.slice())),
                              (v = g.length) < S && g.unshift(0),
                              r(E, g, S, u),
                              -1 == c && ((S = E.length), (c = t(I, E, M, S)) < 1 && (p++, r(E, M < S ? R : I, S, u))),
                              (S = E.length))
                            : 0 === c && (p++, (E = [0])),
                        (y[f++] = p),
                        c && E[0] ? (E[S++] = L[C] || 0) : ((E = [L[C]]), (S = 1));
                while ((C++ < D || void 0 !== E[0]) && x--);
                _ = void 0 !== E[0];
            }
            y[0] || y.shift();
        }
        if (1 == h) (b.e = d), (n = _);
        else {
            for (f = 1, p = y[0]; p >= 10; p /= 10) f++;
            (b.e = f + d * h - 1), A(b, l ? i + b.e + 1 : i, o, _);
        }
        return b;
    };
})();
function A(e, t, r, n) {
    var a,
        s,
        i,
        o,
        l,
        c,
        d,
        f,
        p,
        h = e.constructor;
    l: if (null != t) {
        if (!(f = e.d)) return e;
        for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
        if ((s = t - a) < 0) (s += 7), (i = t), (l = (((d = f[(p = 0)]) / _(10, a - i - 1)) % 10) | 0);
        else if ((p = Math.ceil((s + 1) / 7)) >= (o = f.length))
            if (n) {
                for (; o++ <= p; ) f.push(0);
                (d = l = 0), (a = 1), (s %= 7), (i = s - 7 + 1);
            } else break l;
        else {
            for (a = 1, d = o = f[p]; o >= 10; o /= 10) a++;
            (s %= 7), (l = (i = s - 7 + a) < 0 ? 0 : ((d / _(10, a - i - 1)) % 10) | 0);
        }
        if (
            ((n = n || t < 0 || void 0 !== f[p + 1] || (i < 0 ? d : d % _(10, a - i - 1))),
            (c =
                r < 4
                    ? (l || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                    : l > 5 ||
                      (5 == l &&
                          (4 == r ||
                              n ||
                              (6 == r && ((s > 0 ? (i > 0 ? d / _(10, a - i) : 0) : f[p - 1]) % 10) & 1) ||
                              r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
        )
            return (
                (f.length = 0),
                c ? ((t -= e.e + 1), (f[0] = _(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == s
                ? ((f.length = p), (o = 1), p--)
                : ((f.length = p + 1),
                  (o = _(10, 7 - s)),
                  (f[p] = i > 0 ? (((d / _(10, a - i)) % _(10, i)) | 0) * o : 0)),
            c)
        )
            for (;;)
                if (0 == p) {
                    for (s = 1, i = f[0]; i >= 10; i /= 10) s++;
                    for (i = f[0] += o, o = 1; i >= 10; i /= 10) o++;
                    s != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                    break;
                } else {
                    if (((f[p] += o), 1e7 != f[p])) break;
                    (f[p--] = 0), (o = 1);
                }
        for (s = f.length; 0 === f[--s]; ) f.pop();
    }
    return u && (e.e > h.maxE ? ((e.d = null), (e.e = NaN)) : e.e < h.minE && ((e.e = 0), (e.d = [0]))), e;
}
function M(e, t, r) {
    if (!e.isFinite()) return j(e);
    var n,
        a = e.e,
        s = x(e.d),
        i = s.length;
    return (
        t
            ? (r && (n = r - i) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + I(n))
                  : i > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : a < 0
              ? ((s = "0." + I(-a - 1) + s), r && (n = r - i) > 0 && (s += I(n)))
              : a >= i
                ? ((s += I(a + 1 - i)), r && (n = r - a - 1) > 0 && (s = s + "." + I(n)))
                : ((n = a + 1) < i && (s = s.slice(0, n) + "." + s.slice(n)),
                  r && (n = r - i) > 0 && (a + 1 === i && (s += "."), (s += I(n)))),
        s
    );
}
function R(e, t) {
    var r = e[0];
    for (t *= 7; r >= 10; r /= 10) t++;
    return t;
}
function k(e, t, r) {
    if (t > E) throw ((u = !0), r && (e.precision = r), Error(f));
    return A(new e(i), t, 1, !0);
}
function N(e, t, r) {
    if (t > S) throw Error(f);
    return A(new e(o), t, r, !0);
}
function L(e) {
    var t = e.length - 1,
        r = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) r--;
        for (t = e[0]; t >= 10; t /= 10) r++;
    }
    return r;
}
function I(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function P(e, t, r, n) {
    var a,
        s = new e(1),
        i = Math.ceil(n / 7 + 4);
    for (u = !1; ; ) {
        if ((r % 2 && q((s = s.times(t)).d, i) && (a = !0), 0 === (r = m(r / 2)))) {
            (r = s.d.length - 1), a && 0 === s.d[r] && ++s.d[r];
            break;
        }
        q((t = t.times(t)).d, i);
    }
    return (u = !0), s;
}
function F(e) {
    return 1 & e.d[e.d.length - 1];
}
function B(e, t, r) {
    for (var n, a, s = new e(t[0]), i = 0; ++i < t.length; ) {
        if (!(a = new e(t[i])).s) {
            s = a;
            break;
        }
        ((n = s.cmp(a)) === r || (0 === n && s.s === r)) && (s = a);
    }
    return s;
}
function Y(e, t) {
    var r,
        n,
        a,
        s,
        i,
        o,
        l,
        c = 0,
        d = 0,
        f = 0,
        p = e.constructor,
        h = p.rounding,
        m = p.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new p(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((u = !1), (l = m)) : (l = t), o = new p(0.03125); e.e > -2; ) (e = e.times(o)), (f += 5);
    for (l += n = ((Math.log(_(2, f)) / Math.LN10) * 2 + 5) | 0, r = s = i = new p(1), p.precision = l; ; ) {
        if (
            ((s = A(s.times(e), l, 1)),
            (r = r.times(++d)),
            x((o = i.plus(O(s, r, l, 1))).d).slice(0, l) === x(i.d).slice(0, l))
        ) {
            for (a = f; a--; ) i = A(i.times(i), l, 1);
            if (null != t) return (p.precision = m), i;
            if (!(c < 3 && C(i.d, l - n, h, c))) return A(i, (p.precision = m), h, (u = !0));
            (p.precision = l += 10), (r = s = o = new p(1)), (d = 0), c++;
        }
        i = o;
    }
}
function U(e, t) {
    var r,
        n,
        a,
        s,
        i,
        o,
        l,
        c,
        d,
        f,
        p,
        h = 1,
        m = e,
        _ = m.d,
        g = m.constructor,
        v = g.rounding,
        b = g.precision;
    if (m.s < 0 || !_ || !_[0] || (!m.e && 1 == _[0] && 1 == _.length))
        return new g(_ && !_[0] ? -1 / 0 : 1 != m.s ? NaN : _ ? 0 : m);
    if (
        (null == t ? ((u = !1), (d = b)) : (d = t),
        (g.precision = d += 10),
        (n = (r = x(_)).charAt(0)),
        !(15e14 > Math.abs((s = m.e))))
    )
        return (
            (c = k(g, d + 2, b).times(s + "")),
            (m = U(new g(n + "." + r.slice(1)), d - 10).plus(c)),
            (g.precision = b),
            null == t ? A(m, b, v, (u = !0)) : m
        );
    for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); ) (n = (r = x((m = m.times(e)).d)).charAt(0)), h++;
    for (
        s = m.e,
            n > 1 ? ((m = new g("0." + r)), s++) : (m = new g(n + "." + r.slice(1))),
            f = m,
            l = i = m = O(m.minus(1), m.plus(1), d, 1),
            p = A(m.times(m), d, 1),
            a = 3;
        ;
    ) {
        if (((i = A(i.times(p), d, 1)), x((c = l.plus(O(i, new g(a), d, 1))).d).slice(0, d) === x(l.d).slice(0, d))) {
            if (
                ((l = l.times(2)),
                0 !== s && (l = l.plus(k(g, d + 2, b).times(s + ""))),
                (l = O(l, new g(h), d, 1)),
                null != t)
            )
                return (g.precision = b), l;
            if (!C(l.d, d - 10, v, o)) return A(l, (g.precision = b), v, (u = !0));
            (g.precision = d += 10),
                (c = i = m = O(f.minus(1), f.plus(1), d, 1)),
                (p = A(m.times(m), d, 1)),
                (a = o = 1);
        }
        (l = c), (a += 2);
    }
}
function j(e) {
    return String((e.s * e.s) / 0);
}
function V(e, t) {
    var r, n, a;
    for (
        (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
                ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
                : r < 0 && (r = t.length),
            n = 0;
        48 === t.charCodeAt(n);
        n++
    );
    for (a = t.length; 48 === t.charCodeAt(a - 1); --a);
    if ((t = t.slice(n, a))) {
        if (((a -= n), (e.e = r = r - n - 1), (e.d = []), (n = (r + 1) % 7), r < 0 && (n += 7), n < a)) {
            for (n && e.d.push(+t.slice(0, n)), a -= 7; n < a; ) e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
        } else n -= a;
        for (; n--; ) t += "0";
        e.d.push(+t),
            u &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function H(e, t, r, n, a) {
    var s,
        i,
        o,
        l,
        c = e.precision,
        d = Math.ceil(c / 7);
    for (u = !1, l = r.times(r), o = new e(n); ; ) {
        if (
            ((i = O(o.times(l), new e(t++ * t++), c, 1)),
            (o = a ? n.plus(i) : n.minus(i)),
            (n = O(i.times(l), new e(t++ * t++), c, 1)),
            void 0 !== (i = o.plus(n)).d[d])
        ) {
            for (s = d; i.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
        }
        (s = o), (o = n), (n = i), (i = s);
    }
    return (u = !0), (i.d.length = d + 1), i;
}
function G(e, t) {
    for (var r = e; --t; ) r *= e;
    return r;
}
function z(e, t) {
    var r,
        n = t.s < 0,
        s = N(e, e.precision, 1),
        i = s.times(0.5);
    if ((t = t.abs()).lte(i)) return (a = n ? 4 : 1), t;
    if ((r = t.divToInt(s)).isZero()) a = n ? 3 : 2;
    else {
        if ((t = t.minus(r.times(s))).lte(i)) return (a = F(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
        a = F(r) ? (n ? 1 : 4) : n ? 3 : 2;
    }
    return t.minus(s).abs();
}
function W(e, t, r, a) {
    var i,
        o,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m = e.constructor,
        _ = void 0 !== r;
    if (
        (_ ? (w(r, 1, 1e9), void 0 === a ? (a = m.rounding) : w(a, 0, 8)) : ((r = m.precision), (a = m.rounding)),
        e.isFinite())
    ) {
        for (
            l = (f = M(e)).indexOf("."),
                _ ? ((i = 2), 16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2)) : (i = t),
                l >= 0 &&
                    ((f = f.replace(".", "")),
                    ((h = new m(1)).e = f.length - l),
                    (h.d = D(M(h), 10, i)),
                    (h.e = h.d.length)),
                o = c = (p = D(f, 10, i)).length;
            0 == p[--c];
        )
            p.pop();
        if (p[0]) {
            if (
                (l < 0
                    ? o--
                    : (((e = new m(e)).d = p), (e.e = o), (p = (e = O(e, h, r, a, 0, i)).d), (o = e.e), (d = n)),
                (l = p[r]),
                (u = i / 2),
                (d = d || void 0 !== p[r + 1]),
                (d =
                    a < 4
                        ? (void 0 !== l || d) && (0 === a || a === (e.s < 0 ? 3 : 2))
                        : l > u || (l === u && (4 === a || d || (6 === a && 1 & p[r - 1]) || a === (e.s < 0 ? 8 : 7)))),
                (p.length = r),
                d)
            )
                for (; ++p[--r] > i - 1; ) (p[r] = 0), r || (++o, p.unshift(1));
            for (c = p.length; !p[c - 1]; --c);
            for (l = 0, f = ""; l < c; l++) f += s.charAt(p[l]);
            if (_) {
                if (c > 1)
                    if (16 == t || 8 == t) {
                        for (l = 16 == t ? 4 : 3, --c; c % l; c++) f += "0";
                        for (c = (p = D(f, i, t)).length; !p[c - 1]; --c);
                        for (l = 1, f = "1."; l < c; l++) f += s.charAt(p[l]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o; ) f = "0" + f;
                f = "0." + f;
            } else if (++o > c) for (o -= c; o--; ) f += "0";
            else o < c && (f = f.slice(0, o) + "." + f.slice(o));
        } else f = _ ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    } else f = j(e);
    return e.s < 0 ? "-" + f : f;
}
function q(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function $(e) {
    return new this(e).abs();
}
function K(e) {
    return new this(e).acos();
}
function Q(e) {
    return new this(e).acosh();
}
function X(e, t) {
    return new this(e).plus(t);
}
function Z(e) {
    return new this(e).asin();
}
function J(e) {
    return new this(e).asinh();
}
function ee(e) {
    return new this(e).atan();
}
function et(e) {
    return new this(e).atanh();
}
function er(e, t) {
    (e = new this(e)), (t = new this(t));
    var r,
        n = this.precision,
        a = this.rounding,
        s = n + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((r = t.s < 0 ? N(this, n, a) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((r = N(this, s, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = s),
                          (this.rounding = 1),
                          (r = this.atan(O(e, t, s, 1))),
                          (t = N(this, s, 1)),
                          (this.precision = n),
                          (this.rounding = a),
                          (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                        : (r = this.atan(O(e, t, s, 1)))
                : ((r = N(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(NaN)),
        r
    );
}
function en(e) {
    return new this(e).cbrt();
}
function ea(e) {
    return A((e = new this(e)), e.e + 1, 2);
}
function es(e, t, r) {
    return new this(e).clamp(t, r);
}
function ei(e) {
    if (!e || "object" != typeof e) throw Error(c + "Object expected");
    var t,
        r,
        n,
        a = !0 === e.defaults,
        s = [
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
    for (t = 0; t < s.length; t += 3)
        if (((r = s[t]), a && (this[r] = l[r]), void 0 !== (n = e[r])))
            if (m(n) === n && n >= s[t + 1] && n <= s[t + 2]) this[r] = n;
            else throw Error(d + r + ": " + n);
    if (((r = "crypto"), a && (this[r] = l[r]), void 0 !== (n = e[r])))
        if (!0 === n || !1 === n || 0 === n || 1 === n)
            if (n)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
                else throw Error(p);
            else this[r] = !1;
        else throw Error(d + r + ": " + n);
    return this;
}
function eo(e) {
    return new this(e).cos();
}
function el(e) {
    return new this(e).cosh();
}
function eu(e, t) {
    return new this(e).div(t);
}
function ec(e) {
    return new this(e).exp();
}
function ed(e) {
    return A((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        t,
        r = new this(0);
    for (e = 0, u = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
        else {
            if (t.s) return (u = !0), new this(1 / 0);
            r = t;
        }
    return (u = !0), r.sqrt();
}
function ep(e) {
    return e instanceof eL || (e && e.toStringTag === h) || !1;
}
function eh(e) {
    return new this(e).ln();
}
function em(e, t) {
    return new this(e).log(t);
}
function e_(e) {
    return new this(e).log(2);
}
function eg(e) {
    return new this(e).log(10);
}
function ev() {
    return B(this, arguments, -1);
}
function eb() {
    return B(this, arguments, 1);
}
function ey(e, t) {
    return new this(e).mod(t);
}
function eE(e, t) {
    return new this(e).mul(t);
}
function eS(e, t) {
    return new this(e).pow(t);
}
function eT(e) {
    var t,
        r,
        n,
        a,
        s = 0,
        i = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : w(e, 1, 1e9), (n = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); s < n; )
                (a = t[s]) >= 429e7 ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[s++] = a % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((n *= 4)); s < n; )
                (a = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, s)
                    : (o.push(a % 1e7), (s += 4));
            s = n / 4;
        } else throw Error(p);
    else for (; s < n; ) o[s++] = (1e7 * Math.random()) | 0;
    for (n = o[--s], e %= 7, n && e && ((a = _(10, 7 - e)), (o[s] = ((n / a) | 0) * a)); 0 === o[s]; s--) o.pop();
    if (s < 0) (r = 0), (o = [0]);
    else {
        for (r = -1; 0 === o[0]; r -= 7) o.shift();
        for (n = 1, a = o[0]; a >= 10; a /= 10) n++;
        n < 7 && (r -= 7 - n);
    }
    return (i.e = r), (i.d = o), i;
}
function ex(e) {
    return A((e = new this(e)), e.e + 1, this.rounding);
}
function ew(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eC(e) {
    return new this(e).sin();
}
function eD(e) {
    return new this(e).sinh();
}
function eO(e) {
    return new this(e).sqrt();
}
function eA(e, t) {
    return new this(e).sub(t);
}
function eM() {
    var e = 0,
        t = arguments,
        r = new this(t[0]);
    for (u = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
    return (u = !0), A(r, this.precision, this.rounding);
}
function eR(e) {
    return new this(e).tan();
}
function ek(e) {
    return new this(e).tanh();
}
function eN(e) {
    return A((e = new this(e)), e.e + 1, 1);
}
(T[Symbol.for("nodejs.util.inspect.custom")] = T.toString), (T[Symbol.toStringTag] = "Decimal");
var eL = (T.constructor = (function e(t) {
    var r, n, a;
    function s(e) {
        var t, r, n;
        if (!(this instanceof s)) return new s(e);
        if (((this.constructor = s), ep(e))) {
            (this.s = e.s),
                u
                    ? !e.d || e.e > s.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : e.e < s.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = e.e), (this.d = e.d.slice()))
                    : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
        }
        if ("number" == (n = typeof e)) {
            if (0 === e) {
                (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, r = e; r >= 10; r /= 10) t++;
                u
                    ? t > s.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : t < s.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = t), (this.d = [e]))
                    : ((this.e = t), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                e || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
            }
            return V(this, e.toString());
        }
        if ("string" === n)
            return (
                45 === (r = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === r && (e = e.slice(1)), (this.s = 1)),
                y.test(e)
                    ? V(this, e)
                    : (function (e, t) {
                          var r, n, a, s, i, o, l, c, f;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), y.test(t))) return V(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (v.test(t)) (r = 16), (t = t.toLowerCase());
                          else if (g.test(t)) r = 2;
                          else if (b.test(t)) r = 8;
                          else throw Error(d + t);
                          for (
                              (s = t.search(/p/i)) > 0
                                  ? ((l = +t.slice(s + 1)), (t = t.substring(2, s)))
                                  : (t = t.slice(2)),
                                  i = (s = t.indexOf(".")) >= 0,
                                  n = e.constructor,
                                  i &&
                                      ((s = (o = (t = t.replace(".", "")).length) - s), (a = P(n, new n(r), s, 2 * s))),
                                  s = f = (c = D(t, r, 1e7)).length - 1;
                              0 === c[s];
                              --s
                          )
                              c.pop();
                          return s < 0
                              ? new n(0 * e.s)
                              : ((e.e = R(c, f)),
                                (e.d = c),
                                (u = !1),
                                i && (e = O(e, a, 4 * o)),
                                l && (e = e.times(54 > Math.abs(l) ? _(2, l) : eL.pow(2, l))),
                                (u = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === n) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), V(this, e.toString());
        throw Error(d + e);
    }
    if (
        ((s.prototype = T),
        (s.ROUND_UP = 0),
        (s.ROUND_DOWN = 1),
        (s.ROUND_CEIL = 2),
        (s.ROUND_FLOOR = 3),
        (s.ROUND_HALF_UP = 4),
        (s.ROUND_HALF_DOWN = 5),
        (s.ROUND_HALF_EVEN = 6),
        (s.ROUND_HALF_CEIL = 7),
        (s.ROUND_HALF_FLOOR = 8),
        (s.EUCLID = 9),
        (s.config = s.set = ei),
        (s.clone = e),
        (s.isDecimal = ep),
        (s.abs = $),
        (s.acos = K),
        (s.acosh = Q),
        (s.add = X),
        (s.asin = Z),
        (s.asinh = J),
        (s.atan = ee),
        (s.atanh = et),
        (s.atan2 = er),
        (s.cbrt = en),
        (s.ceil = ea),
        (s.clamp = es),
        (s.cos = eo),
        (s.cosh = el),
        (s.div = eu),
        (s.exp = ec),
        (s.floor = ed),
        (s.hypot = ef),
        (s.ln = eh),
        (s.log = em),
        (s.log10 = eg),
        (s.log2 = e_),
        (s.max = ev),
        (s.min = eb),
        (s.mod = ey),
        (s.mul = eE),
        (s.pow = eS),
        (s.random = eT),
        (s.round = ex),
        (s.sign = ew),
        (s.sin = eC),
        (s.sinh = eD),
        (s.sqrt = eO),
        (s.sub = eA),
        (s.sum = eM),
        (s.tan = eR),
        (s.tanh = ek),
        (s.trunc = eN),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            r = 0, a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            r < a.length;
        )
            t.hasOwnProperty((n = a[r++])) || (t[n] = this[n]);
    return s.config(t), s;
})(l));
(i = new eL(i)), (o = new eL(o)), new eL(10);
let eI = new eL(0);
new eL(-0);
var eP = r(243399);
function eF(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
}
function eB(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function eY(e) {
    return "function" == typeof e;
}
function eU(e, t, r) {
    if (!eY(e)) return !1;
    if (r?.boundTargetFunction) return t instanceof r?.boundTargetFunction;
    if ("object" != typeof t) return !1;
    let n = e.prototype;
    if ("object" != typeof n)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(n, t);
}
