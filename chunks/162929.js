"use strict";
n.d(t, { W: () => eP });
var i,
    r,
    o = "0123456789abcdef",
    s =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    a =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    u = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    c = !0,
    l = "[DecimalError] ",
    d = l + "Invalid argument: ",
    f = l + "Precision limit exceeded",
    p = l + "crypto unavailable",
    h = "[object Decimal]",
    m = Math.floor,
    g = Math.pow,
    v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    _ = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    y = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    w = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    z = s.length - 1,
    b = a.length - 1,
    k = { toStringTag: h };
function Z(e) {
    var t,
        n,
        i,
        r = e.length - 1,
        o = "",
        s = e[0];
    if (r > 0) {
        for (o += s, t = 1; t < r; t++) (n = 7 - (i = e[t] + "").length) && (o += j(n)), (o += i);
        (n = 7 - (i = (s = e[t]) + "").length) && (o += j(n));
    } else if (0 === s) return "0";
    for (; s % 10 == 0; ) s /= 10;
    return o + s;
}
function $(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(d + e);
}
function S(e, t, n, i) {
    var r, o, s, a;
    for (o = e[0]; o >= 10; o /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (r = 0)) : ((r = Math.ceil((t + 1) / 7)), (t %= 7)),
        (o = g(10, 7 - t)),
        (a = (e[r] % o) | 0),
        null == i
            ? t < 3
                ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                  (s = (n < 4 && 99999 == a) || (n > 3 && 49999 == a) || 5e4 == a || 0 == a))
                : (s =
                      (((n < 4 && a + 1 == o) || (n > 3 && a + 1 == o / 2)) &&
                          ((e[r + 1] / o / 100) | 0) == g(10, t - 2) - 1) ||
                      ((a == o / 2 || 0 == a) && ((e[r + 1] / o / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (a = (a / 1e3) | 0) : 1 == t ? (a = (a / 100) | 0) : 2 == t && (a = (a / 10) | 0),
                (s = ((i || n < 4) && 9999 == a) || (!i && n > 3 && 4999 == a)))
              : (s =
                    (((i || n < 4) && a + 1 == o) || (!i && n > 3 && a + 1 == o / 2)) &&
                    ((e[r + 1] / o / 1e3) | 0) == g(10, t - 3) - 1),
        s
    );
}
function x(e, t, n) {
    for (var i, r, s = [0], a = 0, u = e.length; a < u; ) {
        for (r = s.length; r--; ) s[r] *= t;
        for (s[0] += o.indexOf(e.charAt(a++)), i = 0; i < s.length; i++)
            s[i] > n - 1 && (void 0 === s[i + 1] && (s[i + 1] = 0), (s[i + 1] += (s[i] / n) | 0), (s[i] %= n));
    }
    return s.reverse();
}
(k.absoluteValue = k.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), O(e);
    }),
    (k.ceil = function () {
        return O(new this.constructor(this), this.e + 1, 2);
    }),
    (k.clampedTo = k.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(d + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (k.comparedTo = k.cmp =
        function (e) {
            var t,
                n,
                i,
                r,
                o = this.d,
                s = (e = new this.constructor(e)).d,
                a = this.s,
                u = e.s;
            if (!o || !s) return a && u ? (a !== u ? a : o === s ? 0 : !o ^ (a < 0) ? 1 : -1) : NaN;
            if (!o[0] || !s[0]) return o[0] ? a : s[0] ? -u : 0;
            if (a !== u) return a;
            if (this.e !== e.e) return (this.e > e.e) ^ (a < 0) ? 1 : -1;
            for (t = 0, n = (i = o.length) < (r = s.length) ? i : r; t < n; ++t)
                if (o[t] !== s[t]) return (o[t] > s[t]) ^ (a < 0) ? 1 : -1;
            return i === r ? 0 : (i > r) ^ (a < 0) ? 1 : -1;
        }),
    (k.cosine = k.cos =
        function () {
            var e,
                t,
                n = this,
                i = n.constructor;
            return n.d
                ? n.d[0]
                    ? ((e = i.precision),
                      (t = i.rounding),
                      (i.precision = e + Math.max(n.e, n.sd()) + 7),
                      (i.rounding = 1),
                      (n = (function (e, t) {
                          var n, i, r;
                          if (t.isZero()) return t;
                          (i = t.d.length) < 32
                              ? (r = (1 / V(4, (n = Math.ceil(i / 3)))).toString())
                              : ((n = 16), (r = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = L(e, 1, t.times(r), new e(1)));
                          for (var o = n; o--; ) {
                              var s = t.times(t);
                              t = s.times(s).minus(s).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(i, B(i, n))),
                      (i.precision = e),
                      (i.rounding = t),
                      O(2 == r || 3 == r ? n.neg() : n, e, t, !0))
                    : new i(1)
                : new i(NaN);
        }),
    (k.cubeRoot = k.cbrt =
        function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l,
                d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
                c = !1,
                    (o = this.s * g(this.s * this, 1 / 3)) && Math.abs(o) != 1 / 0
                        ? (i = new d(o.toString()))
                        : ((n = Z(this.d)),
                          (o = ((e = this.e) - n.length + 1) % 3) && (n += 1 == o || -2 == o ? "0" : "00"),
                          (o = g(n, 1 / 3)),
                          (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((i = new d(
                              (n = o == 1 / 0 ? "5e" + e : (n = o.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    s = (e = d.precision) + 3;
                ;
            )
                if (
                    ((i = N((l = (u = (a = i).times(a).times(a)).plus(this)).plus(this).times(a), l.plus(u), s + 2, 1)),
                    Z(a.d).slice(0, s) === (n = Z(i.d)).slice(0, s))
                ) {
                    if ("9999" != (n = n.slice(s - 3, s + 1)) && (r || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (O(i, e + 1, 1), (t = !i.times(i).times(i).eq(this)));
                        break;
                    }
                    if (!r && (O(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                        i = a;
                        break;
                    }
                    (s += 4), (r = 1);
                }
            return (c = !0), O(i, e, d.rounding, t);
        }),
    (k.decimalPlaces = k.dp =
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
    (k.dividedBy = k.div =
        function (e) {
            return N(this, new this.constructor(e));
        }),
    (k.dividedToIntegerBy = k.divToInt =
        function (e) {
            var t = this.constructor;
            return O(N(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (k.equals = k.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (k.floor = function () {
        return O(new this.constructor(this), this.e + 1, 3);
    }),
    (k.greaterThan = k.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (k.greaterThanOrEqualTo = k.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (k.hyperbolicCosine = k.cosh =
        function () {
            var e,
                t,
                n,
                i,
                r,
                o = this,
                s = o.constructor,
                a = new s(1);
            if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
            if (o.isZero()) return a;
            (n = s.precision),
                (i = s.rounding),
                (s.precision = n + Math.max(o.e, o.sd()) + 4),
                (s.rounding = 1),
                (r = o.d.length) < 32
                    ? (t = (1 / V(4, (e = Math.ceil(r / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (o = L(s, 1, o.times(t), new s(1), !0));
            for (var u, c = e, l = new s(8); c--; ) (u = o.times(o)), (o = a.minus(u.times(l.minus(u.times(l)))));
            return O(o, (s.precision = n), (s.rounding = i), !0);
        }),
    (k.hyperbolicSine = k.sinh =
        function () {
            var e,
                t,
                n,
                i,
                r = this,
                o = r.constructor;
            if (!r.isFinite() || r.isZero()) return new o(r);
            if (
                ((t = o.precision),
                (n = o.rounding),
                (o.precision = t + Math.max(r.e, r.sd()) + 4),
                (o.rounding = 1),
                (i = r.d.length) < 3)
            )
                r = L(o, 2, r, r, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e), (r = L(o, 2, (r = r.times(1 / V(5, e))), r, !0));
                for (var s, a = new o(5), u = new o(16), c = new o(20); e--; )
                    (s = r.times(r)), (r = r.times(a.plus(s.times(u.times(s).plus(c)))));
            }
            return (o.precision = t), (o.rounding = n), O(r, t, n, !0);
        }),
    (k.hyperbolicTangent = k.tanh =
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
                      N(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (k.inverseCosine = k.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                i = t.precision,
                r = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? I(t, i, r)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? I(t, i + 4, r).times(0.5)
                  : ((t.precision = i + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = i),
                    (t.rounding = r),
                    e.times(2));
        }),
    (k.inverseHyperbolicCosine = k.acosh =
        function () {
            var e,
                t,
                n = this,
                i = n.constructor;
            return n.lte(1)
                ? new i(n.eq(1) ? 0 : NaN)
                : n.isFinite()
                  ? ((e = i.precision),
                    (t = i.rounding),
                    (i.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                    (i.rounding = 1),
                    (c = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (c = !0),
                    (i.precision = e),
                    (i.rounding = t),
                    n.ln())
                  : new i(n);
        }),
    (k.inverseHyperbolicSine = k.asinh =
        function () {
            var e,
                t,
                n = this,
                i = n.constructor;
            return !n.isFinite() || n.isZero()
                ? new i(n)
                : ((e = i.precision),
                  (t = i.rounding),
                  (i.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                  (i.rounding = 1),
                  (c = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (c = !0),
                  (i.precision = e),
                  (i.rounding = t),
                  n.ln());
        }),
    (k.inverseHyperbolicTangent = k.atanh =
        function () {
            var e,
                t,
                n,
                i,
                r = this,
                o = r.constructor;
            return r.isFinite()
                ? r.e >= 0
                    ? new o(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
                    : ((e = o.precision), (t = o.rounding), Math.max((i = r.sd()), e) < -(2 * r.e) - 1)
                      ? O(new o(r), e, t, !0)
                      : ((o.precision = n = i - r.e),
                        (r = N(r.plus(1), new o(1).minus(r), n + e, 1)),
                        (o.precision = e + 4),
                        (o.rounding = 1),
                        (r = r.ln()),
                        (o.precision = e),
                        (o.rounding = t),
                        r.times(0.5))
                : new o(NaN);
        }),
    (k.inverseSine = k.asin =
        function () {
            var e,
                t,
                n,
                i,
                r = this,
                o = r.constructor;
            return r.isZero()
                ? new o(r)
                : ((t = r.abs().cmp(1)), (n = o.precision), (i = o.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = I(o, n + 4, i).times(0.5)).s = r.s), e)
                      : new o(NaN)
                  : ((o.precision = n + 6),
                    (o.rounding = 1),
                    (r = r.div(new o(1).minus(r.times(r)).sqrt().plus(1)).atan()),
                    (o.precision = n),
                    (o.rounding = i),
                    r.times(2));
        }),
    (k.inverseTangent = k.atan =
        function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l = this,
                d = l.constructor,
                f = d.precision,
                p = d.rounding;
            if (l.isFinite()) {
                if (l.isZero()) return new d(l);
                else if (l.abs().eq(1) && f + 4 <= b) return ((s = I(d, f + 4, p).times(0.25)).s = l.s), s;
            } else {
                if (!l.s) return new d(NaN);
                if (f + 4 <= b) return ((s = I(d, f + 4, p).times(0.5)).s = l.s), s;
            }
            for (d.precision = a = f + 10, d.rounding = 1, e = n = Math.min(28, (a / 7 + 2) | 0); e; --e)
                l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (c = !1, t = Math.ceil(a / 7), i = 1, u = l.times(l), s = new d(l), r = l; -1 !== e; )
                if (
                    ((r = r.times(u)),
                    (o = s.minus(r.div((i += 2)))),
                    (r = r.times(u)),
                    void 0 !== (s = o.plus(r.div((i += 2)))).d[t])
                )
                    for (e = t; s.d[e] === o.d[e] && e--; );
            return n && (s = s.times(2 << (n - 1))), (c = !0), O(s, (d.precision = f), (d.rounding = p), !0);
        }),
    (k.isFinite = function () {
        return !!this.d;
    }),
    (k.isInteger = k.isInt =
        function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
        }),
    (k.isNaN = function () {
        return !this.s;
    }),
    (k.isNegative = k.isNeg =
        function () {
            return this.s < 0;
        }),
    (k.isPositive = k.isPos =
        function () {
            return this.s > 0;
        }),
    (k.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (k.lessThan = k.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (k.lessThanOrEqualTo = k.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (k.logarithm = k.log =
        function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a,
                u = this.constructor,
                l = u.precision,
                d = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
                if (((n = (e = new u(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new u(NaN);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new u(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) r = !0;
                else {
                    for (i = n[0]; i % 10 == 0; ) i /= 10;
                    r = 1 !== i;
                }
            if (((c = !1), S((a = N((o = U(this, (s = l + 5))), t ? A(u, s + 10) : U(e, s), s, 1)).d, (i = l), d)))
                do
                    if (((s += 10), (a = N((o = U(this, s)), t ? A(u, s + 10) : U(e, s), s, 1)), !r)) {
                        +Z(a.d).slice(i + 1, i + 15) + 1 == 1e14 && (a = O(a, l + 1, 0));
                        break;
                    }
                while (S(a.d, (i += 10), d));
            return (c = !0), O(a, l, d);
        }),
    (k.minus = k.sub =
        function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l,
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
            if (((l = this.d), (p = e.d), (a = h.precision), (u = h.rounding), !l[0] || !p[0])) {
                if (p[0]) e.s = -e.s;
                else {
                    if (!l[0]) return new h(3 === u ? -0 : 0);
                    e = new h(this);
                }
                return c ? O(e, a, u) : e;
            }
            if (((n = m(e.e / 7)), (d = m(this.e / 7)), (l = l.slice()), (o = d - n))) {
                for (
                    (f = o < 0) ? ((t = l), (o = -o), (s = p.length)) : ((t = p), (n = d), (s = l.length)),
                        o > (i = Math.max(Math.ceil(a / 7), s) + 2) && ((o = i), (t.length = 1)),
                        t.reverse(),
                        i = o;
                    i--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((f = (i = l.length) < (s = p.length)) && (s = i), i = 0; i < s; i++)
                    if (l[i] != p[i]) {
                        f = l[i] < p[i];
                        break;
                    }
                o = 0;
            }
            for (f && ((t = l), (l = p), (p = t), (e.s = -e.s)), s = l.length, i = p.length - s; i > 0; --i) l[s++] = 0;
            for (i = p.length; i > o; ) {
                if (l[--i] < p[i]) {
                    for (r = i; r && 0 === l[--r]; ) l[r] = 1e7 - 1;
                    --l[r], (l[i] += 1e7);
                }
                l[i] -= p[i];
            }
            for (; 0 === l[--s]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --n;
            return l[0] ? ((e.d = l), (e.e = T(l, n)), c ? O(e, a, u) : e) : new h(3 === u ? -0 : 0);
        }),
    (k.modulo = k.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((c = !1),
                      9 == n.modulo
                          ? ((t = N(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = N(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (c = !0),
                      this.minus(t))
                    : O(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (k.naturalExponential = k.exp =
        function () {
            return C(this);
        }),
    (k.naturalLogarithm = k.ln =
        function () {
            return U(this);
        }),
    (k.negated = k.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), O(e);
        }),
    (k.plus = k.add =
        function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l,
                d,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN)) : (e = new f(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((l = this.d), (d = e.d), (a = f.precision), (u = f.rounding), !l[0] || !d[0]))
                return d[0] || (e = new f(this)), c ? O(e, a, u) : e;
            if (((o = m(this.e / 7)), (i = m(e.e / 7)), (l = l.slice()), (r = o - i))) {
                for (
                    r < 0 ? ((n = l), (r = -r), (s = d.length)) : ((n = d), (i = o), (s = l.length)),
                        r > (s = (o = Math.ceil(a / 7)) > s ? o + 1 : s + 1) && ((r = s), (n.length = 1)),
                        n.reverse();
                    r--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((s = l.length) - (r = d.length) < 0 && ((r = s), (n = d), (d = l), (l = n)), t = 0; r; )
                (t = ((l[--r] = l[r] + d[r] + t) / 1e7) | 0), (l[r] %= 1e7);
            for (t && (l.unshift(t), ++i), s = l.length; 0 == l[--s]; ) l.pop();
            return (e.d = l), (e.e = T(l, i)), c ? O(e, a, u) : e;
        }),
    (k.precision = k.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(d + e);
            return this.d ? ((t = P(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (k.round = function () {
        var e = this.constructor;
        return O(new e(this), this.e + 1, e.rounding);
    }),
    (k.sine = k.sin =
        function () {
            var e,
                t,
                n = this,
                i = n.constructor;
            return n.isFinite()
                ? n.isZero()
                    ? new i(n)
                    : ((e = i.precision),
                      (t = i.rounding),
                      (i.precision = e + Math.max(n.e, n.sd()) + 7),
                      (i.rounding = 1),
                      (n = (function (e, t) {
                          var n,
                              i = t.d.length;
                          if (i < 3) return t.isZero() ? t : L(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n),
                              (t = L(e, 2, (t = t.times(1 / V(5, n))), t));
                          for (var r, o = new e(5), s = new e(16), a = new e(20); n--; )
                              (r = t.times(t)), (t = t.times(o.plus(r.times(s.times(r).minus(a)))));
                          return t;
                      })(i, B(i, n))),
                      (i.precision = e),
                      (i.rounding = t),
                      O(r > 2 ? n.neg() : n, e, t, !0))
                : new i(NaN);
        }),
    (k.squareRoot = k.sqrt =
        function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                s = this.d,
                a = this.e,
                u = this.s,
                l = this.constructor;
            if (1 !== u || !s || !s[0]) return new l(!u || (u < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0);
            for (
                c = !1,
                    0 == (u = Math.sqrt(+this)) || u == 1 / 0
                        ? (((t = Z(s)).length + a) % 2 == 0 && (t += "0"),
                          (u = Math.sqrt(t)),
                          (a = m((a + 1) / 2) - (a < 0 || a % 2)),
                          (i = new l(
                              (t = u == 1 / 0 ? "5e" + a : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + a),
                          )))
                        : (i = new l(u.toString())),
                    n = (a = l.precision) + 3;
                ;
            )
                if (
                    ((i = (o = i).plus(N(this, o, n + 2, 1)).times(0.5)),
                    Z(o.d).slice(0, n) === (t = Z(i.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (r || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (O(i, a + 1, 1), (e = !i.times(i).eq(this)));
                        break;
                    }
                    if (!r && (O(o, a + 1, 0), o.times(o).eq(this))) {
                        i = o;
                        break;
                    }
                    (n += 4), (r = 1);
                }
            return (c = !0), O(i, a, l.rounding, e);
        }),
    (k.tangent = k.tan =
        function () {
            var e,
                t,
                n = this,
                i = n.constructor;
            return n.isFinite()
                ? n.isZero()
                    ? new i(n)
                    : ((e = i.precision),
                      (t = i.rounding),
                      (i.precision = e + 10),
                      (i.rounding = 1),
                      ((n = n.sin()).s = 1),
                      (n = N(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (i.precision = e),
                      (i.rounding = t),
                      O(2 == r || 4 == r ? n.neg() : n, e, t, !0))
                : new i(NaN);
        }),
    (k.times = k.mul =
        function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l,
                d = this.constructor,
                f = this.d,
                p = (e = new d(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !p || !p[0]))
                return new d(!e.s || (f && !f[0] && !p) || (p && !p[0] && !f) ? NaN : !f || !p ? e.s / 0 : 0 * e.s);
            for (
                n = m(this.e / 7) + m(e.e / 7),
                    (u = f.length) < (l = p.length) && ((o = f), (f = p), (p = o), (s = u), (u = l), (l = s)),
                    o = [],
                    i = s = u + l;
                i--;
            )
                o.push(0);
            for (i = l; --i >= 0; ) {
                for (t = 0, r = u + i; r > i; )
                    (a = o[r] + p[i] * f[r - i - 1] + t), (o[r--] = (a % 1e7) | 0), (t = (a / 1e7) | 0);
                o[r] = ((o[r] + t) % 1e7) | 0;
            }
            for (; !o[--s]; ) o.pop();
            return t ? ++n : o.shift(), (e.d = o), (e.e = T(o, n)), c ? O(e, d.precision, d.rounding) : e;
        }),
    (k.toBinary = function (e, t) {
        return q(this, 2, e, t);
    }),
    (k.toDecimalPlaces = k.toDP =
        function (e, t) {
            var n = this,
                i = n.constructor;
            return ((n = new i(n)), void 0 === e)
                ? n
                : ($(e, 0, 1e9), void 0 === t ? (t = i.rounding) : $(t, 0, 8), O(n, e + n.e + 1, t));
        }),
    (k.toExponential = function (e, t) {
        var n,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (n = E(i, !0))
                : ($(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : $(t, 0, 8),
                  (n = E((i = O(new r(i), e + 1, t)), !0, e + 1))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (k.toFixed = function (e, t) {
        var n,
            i,
            r = this.constructor;
        return (
            void 0 === e
                ? (n = E(this))
                : ($(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : $(t, 0, 8),
                  (n = E((i = O(new r(this), e + this.e + 1, t)), !1, e + i.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (k.toFraction = function (e) {
        var t,
            n,
            i,
            r,
            o,
            s,
            a,
            u,
            l,
            f,
            p,
            h,
            m = this.d,
            v = this.constructor;
        if (!m) return new v(this);
        if (
            ((l = n = new v(1)),
            (i = u = new v(0)),
            (s = (o = (t = new v(i)).e = P(m) - this.e - 1) % 7),
            (t.d[0] = g(10, s < 0 ? 7 + s : s)),
            null == e)
        )
            e = o > 0 ? t : l;
        else {
            if (!(a = new v(e)).isInt() || a.lt(l)) throw Error(d + a);
            e = a.gt(t) ? (o > 0 ? t : l) : a;
        }
        for (
            c = !1, a = new v(Z(m)), f = v.precision, v.precision = o = 7 * m.length * 2;
            (p = N(a, t, 0, 1, 1)), 1 != (r = n.plus(p.times(i))).cmp(e);
        )
            (n = i), (i = r), (r = l), (l = u.plus(p.times(r))), (u = r), (r = t), (t = a.minus(p.times(r))), (a = r);
        return (
            (r = N(e.minus(n), i, 0, 1, 1)),
            (u = u.plus(r.times(l))),
            (n = n.plus(r.times(i))),
            (u.s = l.s = this.s),
            (h =
                1 >
                N(l, i, o, 1)
                    .minus(this)
                    .abs()
                    .cmp(N(u, n, o, 1).minus(this).abs())
                    ? [l, i]
                    : [u, n]),
            (v.precision = f),
            (c = !0),
            h
        );
    }),
    (k.toHexadecimal = k.toHex =
        function (e, t) {
            return q(this, 16, e, t);
        }),
    (k.toNearest = function (e, t) {
        var n = this,
            i = n.constructor;
        if (((n = new i(n)), null == e)) {
            if (!n.d) return n;
            (e = new i(1)), (t = i.rounding);
        } else {
            if (((e = new i(e)), void 0 === t ? (t = i.rounding) : $(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((c = !1), (n = N(n, e, 0, t, 1).times(e)), (c = !0), O(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (k.toNumber = function () {
        return +this;
    }),
    (k.toOctal = function (e, t) {
        return q(this, 8, e, t);
    }),
    (k.toPower = k.pow =
        function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a = this,
                u = a.constructor,
                l = +(e = new u(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(g(+a, l));
            if ((a = new u(a)).eq(1)) return a;
            if (((i = u.precision), (o = u.rounding), e.eq(1))) return O(a, i, o);
            if ((t = m(e.e / 7)) >= e.d.length - 1 && (n = l < 0 ? -l : l) <= 0x1fffffffffffff)
                return (r = F(u, a, n, i)), e.s < 0 ? new u(1).div(r) : O(r, i, o);
            if ((s = a.s) < 0) {
                if (t < e.d.length - 1) return new u(NaN);
                if (((1 & e.d[t]) == 0 && (s = 1), 0 == a.e && 1 == a.d[0] && 1 == a.d.length)) return (a.s = s), a;
            }
            return (t =
                0 != (n = g(+a, l)) && isFinite(n)
                    ? new u(n + "").e
                    : m(l * (Math.log("0." + Z(a.d)) / Math.LN10 + a.e + 1))) >
                u.maxE + 1 || t < u.minE - 1
                ? new u(t > 0 ? s / 0 : 0)
                : ((c = !1),
                  (u.rounding = a.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (r = C(e.times(U(a, i + n)), i)).d &&
                      S((r = O(r, i + 5, 1)).d, i, o) &&
                      ((t = i + 10),
                      +Z((r = O(C(e.times(U(a, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 &&
                          (r = O(r, i + 1, 0))),
                  (r.s = s),
                  (c = !0),
                  (u.rounding = o),
                  O(r, i, o));
        }),
    (k.toPrecision = function (e, t) {
        var n,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (n = E(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
                : ($(e, 1, 1e9),
                  void 0 === t ? (t = r.rounding) : $(t, 0, 8),
                  (n = E((i = O(new r(i), e, t)), e <= i.e || i.e <= r.toExpNeg, e))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (k.toSignificantDigits = k.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : ($(e, 1, 1e9), void 0 === t ? (t = n.rounding) : $(t, 0, 8)),
                O(new n(this), e, t)
            );
        }),
    (k.toString = function () {
        var e = this.constructor,
            t = E(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (k.truncated = k.trunc =
        function () {
            return O(new this.constructor(this), this.e + 1, 1);
        }),
    (k.valueOf = k.toJSON =
        function () {
            var e = this.constructor,
                t = E(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var N = (function () {
    function e(e, t, n) {
        var i,
            r = 0,
            o = e.length;
        for (e = e.slice(); o--; ) (i = e[o] * t + r), (e[o] = (i % n) | 0), (r = (i / n) | 0);
        return r && e.unshift(r), e;
    }
    function t(e, t, n, i) {
        var r, o;
        if (n != i) o = n > i ? 1 : -1;
        else
            for (r = o = 0; r < n; r++)
                if (e[r] != t[r]) {
                    o = e[r] > t[r] ? 1 : -1;
                    break;
                }
        return o;
    }
    function n(e, t, n, i) {
        for (var r = 0; n--; ) (e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * i + e[n] - t[n]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (r, o, s, a, u, c) {
        var l,
            d,
            f,
            p,
            h,
            g,
            v,
            _,
            y,
            w,
            z,
            b,
            k,
            Z,
            $,
            S,
            x,
            N,
            E,
            T,
            A = r.constructor,
            I = r.s == o.s ? 1 : -1,
            P = r.d,
            j = o.d;
        if (!P || !P[0] || !j || !j[0])
            return new A(!r.s || !o.s || (P ? j && P[0] == j[0] : !j) ? NaN : (P && 0 == P[0]) || !j ? 0 * I : I / 0);
        for (
            c ? ((h = 1), (d = r.e - o.e)) : ((c = 1e7), (h = 7), (d = m(r.e / h) - m(o.e / h))),
                E = j.length,
                x = P.length,
                w = (y = new A(I)).d = [],
                f = 0;
            j[f] == (P[f] || 0);
            f++
        );
        if (
            (j[f] > (P[f] || 0) && d--,
            null == s ? ((Z = s = A.precision), (a = A.rounding)) : (Z = u ? s + (r.e - o.e) + 1 : s),
            Z < 0)
        )
            w.push(1), (g = !0);
        else {
            if (((Z = (Z / h + 2) | 0), (f = 0), 1 == E)) {
                for (p = 0, j = j[0], Z++; (f < x || p) && Z--; f++)
                    ($ = p * c + (P[f] || 0)), (w[f] = ($ / j) | 0), (p = ($ % j) | 0);
                g = p || f < x;
            } else {
                for (
                    (p = (c / (j[0] + 1)) | 0) > 1 &&
                        ((j = e(j, p, c)), (P = e(P, p, c)), (E = j.length), (x = P.length)),
                        S = E,
                        b = (z = P.slice(0, E)).length;
                    b < E;
                )
                    z[b++] = 0;
                (T = j.slice()).unshift(0), (N = j[0]), j[1] >= c / 2 && ++N;
                do
                    (p = 0),
                        (l = t(j, z, E, b)) < 0
                            ? ((k = z[0]),
                              E != b && (k = k * c + (z[1] || 0)),
                              (p = (k / N) | 0) > 1
                                  ? (p >= c && (p = c - 1),
                                    (_ = (v = e(j, p, c)).length),
                                    (b = z.length),
                                    1 == (l = t(v, z, _, b)) && (p--, n(v, E < _ ? T : j, _, c)))
                                  : (0 == p && (l = p = 1), (v = j.slice())),
                              (_ = v.length) < b && v.unshift(0),
                              n(z, v, b, c),
                              -1 == l && ((b = z.length), (l = t(j, z, E, b)) < 1 && (p++, n(z, E < b ? T : j, b, c))),
                              (b = z.length))
                            : 0 === l && (p++, (z = [0])),
                        (w[f++] = p),
                        l && z[0] ? (z[b++] = P[S] || 0) : ((z = [P[S]]), (b = 1));
                while ((S++ < x || void 0 !== z[0]) && Z--);
                g = void 0 !== z[0];
            }
            w[0] || w.shift();
        }
        if (1 == h) (y.e = d), (i = g);
        else {
            for (f = 1, p = w[0]; p >= 10; p /= 10) f++;
            (y.e = f + d * h - 1), O(y, u ? s + y.e + 1 : s, a, g);
        }
        return y;
    };
})();
function O(e, t, n, i) {
    var r,
        o,
        s,
        a,
        u,
        l,
        d,
        f,
        p,
        h = e.constructor;
    e: if (null != t) {
        if (!(f = e.d)) return e;
        for (r = 1, a = f[0]; a >= 10; a /= 10) r++;
        if ((o = t - r) < 0) (o += 7), (s = t), (u = (((d = f[(p = 0)]) / g(10, r - s - 1)) % 10) | 0);
        else if ((p = Math.ceil((o + 1) / 7)) >= (a = f.length))
            if (i) {
                for (; a++ <= p; ) f.push(0);
                (d = u = 0), (r = 1), (o %= 7), (s = o - 7 + 1);
            } else break e;
        else {
            for (r = 1, d = a = f[p]; a >= 10; a /= 10) r++;
            (o %= 7), (u = (s = o - 7 + r) < 0 ? 0 : ((d / g(10, r - s - 1)) % 10) | 0);
        }
        if (
            ((i = i || t < 0 || void 0 !== f[p + 1] || (s < 0 ? d : d % g(10, r - s - 1))),
            (l =
                n < 4
                    ? (u || i) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : u > 5 ||
                      (5 == u &&
                          (4 == n ||
                              i ||
                              (6 == n && ((o > 0 ? (s > 0 ? d / g(10, r - s) : 0) : f[p - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
        )
            return (
                (f.length = 0),
                l ? ((t -= e.e + 1), (f[0] = g(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == o
                ? ((f.length = p), (a = 1), p--)
                : ((f.length = p + 1),
                  (a = g(10, 7 - o)),
                  (f[p] = s > 0 ? (((d / g(10, r - s)) % g(10, s)) | 0) * a : 0)),
            l)
        )
            for (;;)
                if (0 == p) {
                    for (o = 1, s = f[0]; s >= 10; s /= 10) o++;
                    for (s = f[0] += a, a = 1; s >= 10; s /= 10) a++;
                    o != a && (e.e++, 1e7 == f[0] && (f[0] = 1));
                    break;
                } else {
                    if (((f[p] += a), 1e7 != f[p])) break;
                    (f[p--] = 0), (a = 1);
                }
        for (o = f.length; 0 === f[--o]; ) f.pop();
    }
    return c && (e.e > h.maxE ? ((e.d = null), (e.e = NaN)) : e.e < h.minE && ((e.e = 0), (e.d = [0]))), e;
}
function E(e, t, n) {
    if (!e.isFinite()) return J(e);
    var i,
        r = e.e,
        o = Z(e.d),
        s = o.length;
    return (
        t
            ? (n && (i = n - s) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + j(i))
                  : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
              (o = o + (e.e < 0 ? "e" : "e+") + e.e))
            : r < 0
              ? ((o = "0." + j(-r - 1) + o), n && (i = n - s) > 0 && (o += j(i)))
              : r >= s
                ? ((o += j(r + 1 - s)), n && (i = n - r - 1) > 0 && (o = o + "." + j(i)))
                : ((i = r + 1) < s && (o = o.slice(0, i) + "." + o.slice(i)),
                  n && (i = n - s) > 0 && (r + 1 === s && (o += "."), (o += j(i)))),
        o
    );
}
function T(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function A(e, t, n) {
    if (t > z) throw ((c = !0), n && (e.precision = n), Error(f));
    return O(new e(s), t, 1, !0);
}
function I(e, t, n) {
    if (t > b) throw Error(f);
    return O(new e(a), t, n, !0);
}
function P(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function j(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function F(e, t, n, i) {
    var r,
        o = new e(1),
        s = Math.ceil(i / 7 + 4);
    for (c = !1; ; ) {
        if ((n % 2 && W((o = o.times(t)).d, s) && (r = !0), 0 === (n = m(n / 2)))) {
            (n = o.d.length - 1), r && 0 === o.d[n] && ++o.d[n];
            break;
        }
        W((t = t.times(t)).d, s);
    }
    return (c = !0), o;
}
function D(e) {
    return 1 & e.d[e.d.length - 1];
}
function M(e, t, n) {
    for (var i, r, o = new e(t[0]), s = 0; ++s < t.length; ) {
        if (!(r = new e(t[s])).s) {
            o = r;
            break;
        }
        ((i = o.cmp(r)) === n || (0 === i && o.s === n)) && (o = r);
    }
    return o;
}
function C(e, t) {
    var n,
        i,
        r,
        o,
        s,
        a,
        u,
        l = 0,
        d = 0,
        f = 0,
        p = e.constructor,
        h = p.rounding,
        m = p.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new p(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((c = !1), (u = m)) : (u = t), a = new p(0.03125); e.e > -2; ) (e = e.times(a)), (f += 5);
    for (u += i = ((Math.log(g(2, f)) / Math.LN10) * 2 + 5) | 0, n = o = s = new p(1), p.precision = u; ; ) {
        if (
            ((o = O(o.times(e), u, 1)),
            (n = n.times(++d)),
            Z((a = s.plus(N(o, n, u, 1))).d).slice(0, u) === Z(s.d).slice(0, u))
        ) {
            for (r = f; r--; ) s = O(s.times(s), u, 1);
            if (null != t) return (p.precision = m), s;
            if (!(l < 3 && S(s.d, u - i, h, l))) return O(s, (p.precision = m), h, (c = !0));
            (p.precision = u += 10), (n = o = a = new p(1)), (d = 0), l++;
        }
        s = a;
    }
}
function U(e, t) {
    var n,
        i,
        r,
        o,
        s,
        a,
        u,
        l,
        d,
        f,
        p,
        h = 1,
        m = e,
        g = m.d,
        v = m.constructor,
        _ = v.rounding,
        y = v.precision;
    if (m.s < 0 || !g || !g[0] || (!m.e && 1 == g[0] && 1 == g.length))
        return new v(g && !g[0] ? -1 / 0 : 1 != m.s ? NaN : g ? 0 : m);
    if (
        (null == t ? ((c = !1), (d = y)) : (d = t),
        (v.precision = d += 10),
        (i = (n = Z(g)).charAt(0)),
        !(15e14 > Math.abs((o = m.e))))
    )
        return (
            (l = A(v, d + 2, y).times(o + "")),
            (m = U(new v(i + "." + n.slice(1)), d - 10).plus(l)),
            (v.precision = y),
            null == t ? O(m, y, _, (c = !0)) : m
        );
    for (; (i < 7 && 1 != i) || (1 == i && n.charAt(1) > 3); ) (i = (n = Z((m = m.times(e)).d)).charAt(0)), h++;
    for (
        o = m.e,
            i > 1 ? ((m = new v("0." + n)), o++) : (m = new v(i + "." + n.slice(1))),
            f = m,
            u = s = m = N(m.minus(1), m.plus(1), d, 1),
            p = O(m.times(m), d, 1),
            r = 3;
        ;
    ) {
        if (((s = O(s.times(p), d, 1)), Z((l = u.plus(N(s, new v(r), d, 1))).d).slice(0, d) === Z(u.d).slice(0, d))) {
            if (
                ((u = u.times(2)),
                0 !== o && (u = u.plus(A(v, d + 2, y).times(o + ""))),
                (u = N(u, new v(h), d, 1)),
                null != t)
            )
                return (v.precision = y), u;
            if (!S(u.d, d - 10, _, a)) return O(u, (v.precision = y), _, (c = !0));
            (v.precision = d += 10),
                (l = s = m = N(f.minus(1), f.plus(1), d, 1)),
                (p = O(m.times(m), d, 1)),
                (r = a = 1);
        }
        (u = l), (r += 2);
    }
}
function J(e) {
    return String((e.s * e.s) / 0);
}
function R(e, t) {
    var n, i, r;
    for (
        (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (i = t.search(/e/i)) > 0
                ? (n < 0 && (n = i), (n += +t.slice(i + 1)), (t = t.substring(0, i)))
                : n < 0 && (n = t.length),
            i = 0;
        48 === t.charCodeAt(i);
        i++
    );
    for (r = t.length; 48 === t.charCodeAt(r - 1); --r);
    if ((t = t.slice(i, r))) {
        if (((r -= i), (e.e = n = n - i - 1), (e.d = []), (i = (n + 1) % 7), n < 0 && (i += 7), i < r)) {
            for (i && e.d.push(+t.slice(0, i)), r -= 7; i < r; ) e.d.push(+t.slice(i, (i += 7)));
            i = 7 - (t = t.slice(i)).length;
        } else i -= r;
        for (; i--; ) t += "0";
        e.d.push(+t),
            c &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function L(e, t, n, i, r) {
    var o,
        s,
        a,
        u,
        l = e.precision,
        d = Math.ceil(l / 7);
    for (c = !1, u = n.times(n), a = new e(i); ; ) {
        if (
            ((s = N(a.times(u), new e(t++ * t++), l, 1)),
            (a = r ? i.plus(s) : i.minus(s)),
            (i = N(s.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (s = a.plus(i)).d[d])
        ) {
            for (o = d; s.d[o] === a.d[o] && o--; );
            if (-1 == o) break;
        }
        (o = a), (a = i), (i = s), (s = o);
    }
    return (c = !0), (s.d.length = d + 1), s;
}
function V(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function B(e, t) {
    var n,
        i = t.s < 0,
        o = I(e, e.precision, 1),
        s = o.times(0.5);
    if ((t = t.abs()).lte(s)) return (r = i ? 4 : 1), t;
    if ((n = t.divToInt(o)).isZero()) r = i ? 3 : 2;
    else {
        if ((t = t.minus(n.times(o))).lte(s)) return (r = D(n) ? (i ? 2 : 3) : i ? 4 : 1), t;
        r = D(n) ? (i ? 1 : 4) : i ? 3 : 2;
    }
    return t.minus(o).abs();
}
function q(e, t, n, r) {
    var s,
        a,
        u,
        c,
        l,
        d,
        f,
        p,
        h,
        m = e.constructor,
        g = void 0 !== n;
    if (
        (g ? ($(n, 1, 1e9), void 0 === r ? (r = m.rounding) : $(r, 0, 8)) : ((n = m.precision), (r = m.rounding)),
        e.isFinite())
    ) {
        for (
            u = (f = E(e)).indexOf("."),
                g ? ((s = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (s = t),
                u >= 0 &&
                    ((f = f.replace(".", "")),
                    ((h = new m(1)).e = f.length - u),
                    (h.d = x(E(h), 10, s)),
                    (h.e = h.d.length)),
                a = l = (p = x(f, 10, s)).length;
            0 == p[--l];
        )
            p.pop();
        if (p[0]) {
            if (
                (u < 0
                    ? a--
                    : (((e = new m(e)).d = p), (e.e = a), (p = (e = N(e, h, n, r, 0, s)).d), (a = e.e), (d = i)),
                (u = p[n]),
                (c = s / 2),
                (d = d || void 0 !== p[n + 1]),
                (d =
                    r < 4
                        ? (void 0 !== u || d) && (0 === r || r === (e.s < 0 ? 3 : 2))
                        : u > c || (u === c && (4 === r || d || (6 === r && 1 & p[n - 1]) || r === (e.s < 0 ? 8 : 7)))),
                (p.length = n),
                d)
            )
                for (; ++p[--n] > s - 1; ) (p[n] = 0), n || (++a, p.unshift(1));
            for (l = p.length; !p[l - 1]; --l);
            for (u = 0, f = ""; u < l; u++) f += o.charAt(p[u]);
            if (g) {
                if (l > 1)
                    if (16 == t || 8 == t) {
                        for (u = 16 == t ? 4 : 3, --l; l % u; l++) f += "0";
                        for (l = (p = x(f, s, t)).length; !p[l - 1]; --l);
                        for (u = 1, f = "1."; u < l; u++) f += o.charAt(p[u]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (a < 0 ? "p" : "p+") + a;
            } else if (a < 0) {
                for (; ++a; ) f = "0" + f;
                f = "0." + f;
            } else if (++a > l) for (a -= l; a--; ) f += "0";
            else a < l && (f = f.slice(0, a) + "." + f.slice(a));
        } else f = g ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    } else f = J(e);
    return e.s < 0 ? "-" + f : f;
}
function W(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function H(e) {
    return new this(e).abs();
}
function X(e) {
    return new this(e).acos();
}
function K(e) {
    return new this(e).acosh();
}
function G(e, t) {
    return new this(e).plus(t);
}
function Y(e) {
    return new this(e).asin();
}
function Q(e) {
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
        i = this.precision,
        r = this.rounding,
        o = i + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? I(this, i, r) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = I(this, o, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = o),
                          (this.rounding = 1),
                          (n = this.atan(N(e, t, o, 1))),
                          (t = I(this, o, 1)),
                          (this.precision = i),
                          (this.rounding = r),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(N(e, t, o, 1)))
                : ((n = I(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function ei(e) {
    return new this(e).cbrt();
}
function er(e) {
    return O((e = new this(e)), e.e + 1, 2);
}
function eo(e, t, n) {
    return new this(e).clamp(t, n);
}
function es(e) {
    if (!e || "object" != typeof e) throw Error(l + "Object expected");
    var t,
        n,
        i,
        r = !0 === e.defaults,
        o = [
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
    for (t = 0; t < o.length; t += 3)
        if (((n = o[t]), r && (this[n] = u[n]), void 0 !== (i = e[n])))
            if (m(i) === i && i >= o[t + 1] && i <= o[t + 2]) this[n] = i;
            else throw Error(d + n + ": " + i);
    if (((n = "crypto"), r && (this[n] = u[n]), void 0 !== (i = e[n])))
        if (!0 === i || !1 === i || 0 === i || 1 === i)
            if (i)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(p);
            else this[n] = !1;
        else throw Error(d + n + ": " + i);
    return this;
}
function ea(e) {
    return new this(e).cos();
}
function eu(e) {
    return new this(e).cosh();
}
function ec(e, t) {
    return new this(e).div(t);
}
function el(e) {
    return new this(e).exp();
}
function ed(e) {
    return O((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        t,
        n = new this(0);
    for (e = 0, c = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return (c = !0), new this(1 / 0);
            n = t;
        }
    return (c = !0), n.sqrt();
}
function ep(e) {
    return e instanceof eP || (e && e.toStringTag === h) || !1;
}
function eh(e) {
    return new this(e).ln();
}
function em(e, t) {
    return new this(e).log(t);
}
function eg(e) {
    return new this(e).log(2);
}
function ev(e) {
    return new this(e).log(10);
}
function e_() {
    return M(this, arguments, -1);
}
function ey() {
    return M(this, arguments, 1);
}
function ew(e, t) {
    return new this(e).mod(t);
}
function ez(e, t) {
    return new this(e).mul(t);
}
function eb(e, t) {
    return new this(e).pow(t);
}
function ek(e) {
    var t,
        n,
        i,
        r,
        o = 0,
        s = new this(1),
        a = [];
    if ((void 0 === e ? (e = this.precision) : $(e, 1, 1e9), (i = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(i)); o < i; )
                (r = t[o]) >= 429e7 ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0]) : (a[o++] = r % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((i *= 4)); o < i; )
                (r = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, o)
                    : (a.push(r % 1e7), (o += 4));
            o = i / 4;
        } else throw Error(p);
    else for (; o < i; ) a[o++] = (1e7 * Math.random()) | 0;
    for (i = a[--o], e %= 7, i && e && ((r = g(10, 7 - e)), (a[o] = ((i / r) | 0) * r)); 0 === a[o]; o--) a.pop();
    if (o < 0) (n = 0), (a = [0]);
    else {
        for (n = -1; 0 === a[0]; n -= 7) a.shift();
        for (i = 1, r = a[0]; r >= 10; r /= 10) i++;
        i < 7 && (n -= 7 - i);
    }
    return (s.e = n), (s.d = a), s;
}
function eZ(e) {
    return O((e = new this(e)), e.e + 1, this.rounding);
}
function e$(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eS(e) {
    return new this(e).sin();
}
function ex(e) {
    return new this(e).sinh();
}
function eN(e) {
    return new this(e).sqrt();
}
function eO(e, t) {
    return new this(e).sub(t);
}
function eE() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (c = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (c = !0), O(n, this.precision, this.rounding);
}
function eT(e) {
    return new this(e).tan();
}
function eA(e) {
    return new this(e).tanh();
}
function eI(e) {
    return O((e = new this(e)), e.e + 1, 1);
}
(k[Symbol.for("nodejs.util.inspect.custom")] = k.toString), (k[Symbol.toStringTag] = "Decimal");
var eP = (k.constructor = (function e(t) {
    var n, i, r;
    function o(e) {
        var t, n, i;
        if (!(this instanceof o)) return new o(e);
        if (((this.constructor = o), ep(e))) {
            (this.s = e.s),
                c
                    ? !e.d || e.e > o.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : e.e < o.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = e.e), (this.d = e.d.slice()))
                    : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
        }
        if ("number" == (i = typeof e)) {
            if (0 === e) {
                (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
                c
                    ? t > o.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : t < o.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = t), (this.d = [e]))
                    : ((this.e = t), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                e || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
            }
            return R(this, e.toString());
        }
        if ("string" === i)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                w.test(e)
                    ? R(this, e)
                    : (function (e, t) {
                          var n, i, r, o, s, a, u, l, f;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), w.test(t))) return R(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (_.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (v.test(t)) n = 2;
                          else if (y.test(t)) n = 8;
                          else throw Error(d + t);
                          for (
                              (o = t.search(/p/i)) > 0
                                  ? ((u = +t.slice(o + 1)), (t = t.substring(2, o)))
                                  : (t = t.slice(2)),
                                  s = (o = t.indexOf(".")) >= 0,
                                  i = e.constructor,
                                  s &&
                                      ((o = (a = (t = t.replace(".", "")).length) - o), (r = F(i, new i(n), o, 2 * o))),
                                  o = f = (l = x(t, n, 1e7)).length - 1;
                              0 === l[o];
                              --o
                          )
                              l.pop();
                          return o < 0
                              ? new i(0 * e.s)
                              : ((e.e = T(l, f)),
                                (e.d = l),
                                (c = !1),
                                s && (e = N(e, r, 4 * a)),
                                u && (e = e.times(54 > Math.abs(u) ? g(2, u) : eP.pow(2, u))),
                                (c = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === i) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), R(this, e.toString());
        throw Error(d + e);
    }
    if (
        ((o.prototype = k),
        (o.ROUND_UP = 0),
        (o.ROUND_DOWN = 1),
        (o.ROUND_CEIL = 2),
        (o.ROUND_FLOOR = 3),
        (o.ROUND_HALF_UP = 4),
        (o.ROUND_HALF_DOWN = 5),
        (o.ROUND_HALF_EVEN = 6),
        (o.ROUND_HALF_CEIL = 7),
        (o.ROUND_HALF_FLOOR = 8),
        (o.EUCLID = 9),
        (o.config = o.set = es),
        (o.clone = e),
        (o.isDecimal = ep),
        (o.abs = H),
        (o.acos = X),
        (o.acosh = K),
        (o.add = G),
        (o.asin = Y),
        (o.asinh = Q),
        (o.atan = ee),
        (o.atanh = et),
        (o.atan2 = en),
        (o.cbrt = ei),
        (o.ceil = er),
        (o.clamp = eo),
        (o.cos = ea),
        (o.cosh = eu),
        (o.div = ec),
        (o.exp = el),
        (o.floor = ed),
        (o.hypot = ef),
        (o.ln = eh),
        (o.log = em),
        (o.log10 = ev),
        (o.log2 = eg),
        (o.max = e_),
        (o.min = ey),
        (o.mod = ew),
        (o.mul = ez),
        (o.pow = eb),
        (o.random = ek),
        (o.round = eZ),
        (o.sign = e$),
        (o.sin = eS),
        (o.sinh = ex),
        (o.sqrt = eN),
        (o.sub = eO),
        (o.sum = eE),
        (o.tan = eT),
        (o.tanh = eA),
        (o.trunc = eI),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < r.length;
        )
            t.hasOwnProperty((i = r[n++])) || (t[i] = this[i]);
    return o.config(t), o;
})(u));
(s = new eP(s)), (a = new eP(a));
