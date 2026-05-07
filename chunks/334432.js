"use strict";
let i;
function r(e) {
    return Intl.getCanonicalLocales(e);
}
n.d(t, { Y: () => tc });
var s,
    a,
    o = "0123456789abcdef",
    l =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    u =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    c = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    d = !0,
    _ = "[DecimalError] ",
    f = _ + "Invalid argument: ",
    h = _ + "Precision limit exceeded",
    p = _ + "crypto unavailable",
    E = "[object Decimal]",
    m = Math.floor,
    g = Math.pow,
    A = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    I = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    T = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    S = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    N = l.length - 1,
    y = u.length - 1,
    C = { toStringTag: E };
function v(e) {
    var t,
        n,
        i,
        r = e.length - 1,
        s = "",
        a = e[0];
    if (r > 0) {
        for (s += a, t = 1; t < r; t++) (n = 7 - (i = e[t] + "").length) && (s += k(n)), (s += i);
        (n = 7 - (i = (a = e[t]) + "").length) && (s += k(n));
    } else if (0 === a) return "0";
    for (; a % 10 == 0; ) a /= 10;
    return s + a;
}
function O(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(f + e);
}
function R(e, t, n, i) {
    var r, s, a, o;
    for (s = e[0]; s >= 10; s /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (r = 0)) : ((r = Math.ceil((t + 1) / 7)), (t %= 7)),
        (s = g(10, 7 - t)),
        (o = (e[r] % s) | 0),
        null == i
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (a = (n < 4 && 99999 == o) || (n > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (a =
                      (((n < 4 && o + 1 == s) || (n > 3 && o + 1 == s / 2)) &&
                          ((e[r + 1] / s / 100) | 0) == g(10, t - 2) - 1) ||
                      ((o == s / 2 || 0 == o) && ((e[r + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (a = ((i || n < 4) && 9999 == o) || (!i && n > 3 && 4999 == o)))
              : (a =
                    (((i || n < 4) && o + 1 == s) || (!i && n > 3 && o + 1 == s / 2)) &&
                    ((e[r + 1] / s / 1e3) | 0) == g(10, t - 3) - 1),
        a
    );
}
function b(e, t, n) {
    for (var i, r, s = [0], a = 0, l = e.length; a < l; ) {
        for (r = s.length; r--; ) s[r] *= t;
        for (s[0] += o.indexOf(e.charAt(a++)), i = 0; i < s.length; i++)
            s[i] > n - 1 && (void 0 === s[i + 1] && (s[i + 1] = 0), (s[i + 1] += (s[i] / n) | 0), (s[i] %= n));
    }
    return s.reverse();
}
(C.absoluteValue = C.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), L(e);
    }),
    (C.ceil = function () {
        return L(new this.constructor(this), this.e + 1, 2);
    }),
    (C.clampedTo = C.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(f + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (C.comparedTo = C.cmp =
        function (e) {
            var t,
                n,
                i,
                r,
                s = this.d,
                a = (e = new this.constructor(e)).d,
                o = this.s,
                l = e.s;
            if (!s || !a) return o && l ? (o !== l ? o : s === a ? 0 : !s ^ (o < 0) ? 1 : -1) : NaN;
            if (!s[0] || !a[0]) return s[0] ? o : a[0] ? -l : 0;
            if (o !== l) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (t = 0, n = (i = s.length) < (r = a.length) ? i : r; t < n; ++t)
                if (s[t] !== a[t]) return (s[t] > a[t]) ^ (o < 0) ? 1 : -1;
            return i === r ? 0 : (i > r) ^ (o < 0) ? 1 : -1;
        }),
    (C.cosine = C.cos =
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
                              ? (r = (1 / K(4, (n = Math.ceil(i / 3)))).toString())
                              : ((n = 16), (r = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = W(e, 1, t.times(r), new e(1)));
                          for (var s = n; s--; ) {
                              var a = t.times(t);
                              t = a.times(a).minus(a).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(i, z(i, n))),
                      (i.precision = e),
                      (i.rounding = t),
                      L(2 == a || 3 == a ? n.neg() : n, e, t, !0))
                    : new i(1)
                : new i(NaN);
        }),
    (C.cubeRoot = C.cbrt =
        function () {
            var e,
                t,
                n,
                i,
                r,
                s,
                a,
                o,
                l,
                u,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                d = !1,
                    (s = this.s * g(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                        ? (i = new c(s.toString()))
                        : ((n = v(this.d)),
                          (s = ((e = this.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"),
                          (s = g(n, 1 / 3)),
                          (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((i = new c(
                              (n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    a = (e = c.precision) + 3;
                ;
            )
                if (
                    ((i = D((u = (l = (o = i).times(o).times(o)).plus(this)).plus(this).times(o), u.plus(l), a + 2, 1)),
                    v(o.d).slice(0, a) === (n = v(i.d)).slice(0, a))
                ) {
                    if ("9999" != (n = n.slice(a - 3, a + 1)) && (r || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (L(i, e + 1, 1), (t = !i.times(i).times(i).eq(this)));
                        break;
                    }
                    if (!r && (L(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        i = o;
                        break;
                    }
                    (a += 4), (r = 1);
                }
            return (d = !0), L(i, e, c.rounding, t);
        }),
    (C.decimalPlaces = C.dp =
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
    (C.dividedBy = C.div =
        function (e) {
            return D(this, new this.constructor(e));
        }),
    (C.dividedToIntegerBy = C.divToInt =
        function (e) {
            var t = this.constructor;
            return L(D(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (C.equals = C.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (C.floor = function () {
        return L(new this.constructor(this), this.e + 1, 3);
    }),
    (C.greaterThan = C.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (C.greaterThanOrEqualTo = C.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (C.hyperbolicCosine = C.cosh =
        function () {
            var e,
                t,
                n,
                i,
                r,
                s = this,
                a = s.constructor,
                o = new a(1);
            if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return o;
            (n = a.precision),
                (i = a.rounding),
                (a.precision = n + Math.max(s.e, s.sd()) + 4),
                (a.rounding = 1),
                (r = s.d.length) < 32
                    ? (t = (1 / K(4, (e = Math.ceil(r / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (s = W(a, 1, s.times(t), new a(1), !0));
            for (var l, u = e, c = new a(8); u--; ) (l = s.times(s)), (s = o.minus(l.times(c.minus(l.times(c)))));
            return L(s, (a.precision = n), (a.rounding = i), !0);
        }),
    (C.hyperbolicSine = C.sinh =
        function () {
            var e,
                t,
                n,
                i,
                r = this,
                s = r.constructor;
            if (!r.isFinite() || r.isZero()) return new s(r);
            if (
                ((t = s.precision),
                (n = s.rounding),
                (s.precision = t + Math.max(r.e, r.sd()) + 4),
                (s.rounding = 1),
                (i = r.d.length) < 3)
            )
                r = W(s, 2, r, r, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e), (r = W(s, 2, (r = r.times(1 / K(5, e))), r, !0));
                for (var a, o = new s(5), l = new s(16), u = new s(20); e--; )
                    (a = r.times(r)), (r = r.times(o.plus(a.times(l.times(a).plus(u)))));
            }
            return (s.precision = t), (s.rounding = n), L(r, t, n, !0);
        }),
    (C.hyperbolicTangent = C.tanh =
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
                      D(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (C.inverseCosine = C.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                i = t.precision,
                r = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? x(t, i, r)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? x(t, i + 4, r).times(0.5)
                  : ((t.precision = i + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = i),
                    (t.rounding = r),
                    e.times(2));
        }),
    (C.inverseHyperbolicCosine = C.acosh =
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
                    (d = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (d = !0),
                    (i.precision = e),
                    (i.rounding = t),
                    n.ln())
                  : new i(n);
        }),
    (C.inverseHyperbolicSine = C.asinh =
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
                  (d = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (d = !0),
                  (i.precision = e),
                  (i.rounding = t),
                  n.ln());
        }),
    (C.inverseHyperbolicTangent = C.atanh =
        function () {
            var e,
                t,
                n,
                i,
                r = this,
                s = r.constructor;
            return r.isFinite()
                ? r.e >= 0
                    ? new s(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
                    : ((e = s.precision), (t = s.rounding), Math.max((i = r.sd()), e) < -(2 * r.e) - 1)
                      ? L(new s(r), e, t, !0)
                      : ((s.precision = n = i - r.e),
                        (r = D(r.plus(1), new s(1).minus(r), n + e, 1)),
                        (s.precision = e + 4),
                        (s.rounding = 1),
                        (r = r.ln()),
                        (s.precision = e),
                        (s.rounding = t),
                        r.times(0.5))
                : new s(NaN);
        }),
    (C.inverseSine = C.asin =
        function () {
            var e,
                t,
                n,
                i,
                r = this,
                s = r.constructor;
            return r.isZero()
                ? new s(r)
                : ((t = r.abs().cmp(1)), (n = s.precision), (i = s.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = x(s, n + 4, i).times(0.5)).s = r.s), e)
                      : new s(NaN)
                  : ((s.precision = n + 6),
                    (s.rounding = 1),
                    (r = r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan()),
                    (s.precision = n),
                    (s.rounding = i),
                    r.times(2));
        }),
    (C.inverseTangent = C.atan =
        function () {
            var e,
                t,
                n,
                i,
                r,
                s,
                a,
                o,
                l,
                u = this,
                c = u.constructor,
                _ = c.precision,
                f = c.rounding;
            if (u.isFinite()) {
                if (u.isZero()) return new c(u);
                else if (u.abs().eq(1) && _ + 4 <= y) return ((a = x(c, _ + 4, f).times(0.25)).s = u.s), a;
            } else {
                if (!u.s) return new c(NaN);
                if (_ + 4 <= y) return ((a = x(c, _ + 4, f).times(0.5)).s = u.s), a;
            }
            for (c.precision = o = _ + 10, c.rounding = 1, e = n = Math.min(28, (o / 7 + 2) | 0); e; --e)
                u = u.div(u.times(u).plus(1).sqrt().plus(1));
            for (d = !1, t = Math.ceil(o / 7), i = 1, l = u.times(u), a = new c(u), r = u; -1 !== e; )
                if (
                    ((r = r.times(l)),
                    (s = a.minus(r.div((i += 2)))),
                    (r = r.times(l)),
                    void 0 !== (a = s.plus(r.div((i += 2)))).d[t])
                )
                    for (e = t; a.d[e] === s.d[e] && e--; );
            return n && (a = a.times(2 << (n - 1))), (d = !0), L(a, (c.precision = _), (c.rounding = f), !0);
        }),
    (C.isFinite = function () {
        return !!this.d;
    }),
    (C.isInteger = C.isInt =
        function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
        }),
    (C.isNaN = function () {
        return !this.s;
    }),
    (C.isNegative = C.isNeg =
        function () {
            return this.s < 0;
        }),
    (C.isPositive = C.isPos =
        function () {
            return this.s > 0;
        }),
    (C.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (C.lessThan = C.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (C.lessThanOrEqualTo = C.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (C.logarithm = C.log =
        function (e) {
            var t,
                n,
                i,
                r,
                s,
                a,
                o,
                l = this.constructor,
                u = l.precision,
                c = l.rounding;
            if (null == e) (e = new l(10)), (t = !0);
            else {
                if (((n = (e = new l(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new l(NaN);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new l(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) r = !0;
                else {
                    for (i = n[0]; i % 10 == 0; ) i /= 10;
                    r = 1 !== i;
                }
            if (((d = !1), R((o = D((s = H(this, (a = u + 5))), t ? P(l, a + 10) : H(e, a), a, 1)).d, (i = u), c)))
                do
                    if (((a += 10), (o = D((s = H(this, a)), t ? P(l, a + 10) : H(e, a), a, 1)), !r)) {
                        +v(o.d).slice(i + 1, i + 15) + 1 == 1e14 && (o = L(o, u + 1, 0));
                        break;
                    }
                while (R(o.d, (i += 10), c));
            return (d = !0), L(o, u, c);
        }),
    (C.minus = C.sub =
        function (e) {
            var t,
                n,
                i,
                r,
                s,
                a,
                o,
                l,
                u,
                c,
                _,
                f,
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
            if (((u = this.d), (f = e.d), (o = h.precision), (l = h.rounding), !u[0] || !f[0])) {
                if (f[0]) e.s = -e.s;
                else {
                    if (!u[0]) return new h(3 === l ? -0 : 0);
                    e = new h(this);
                }
                return d ? L(e, o, l) : e;
            }
            if (((n = m(e.e / 7)), (c = m(this.e / 7)), (u = u.slice()), (s = c - n))) {
                for (
                    (_ = s < 0) ? ((t = u), (s = -s), (a = f.length)) : ((t = f), (n = c), (a = u.length)),
                        s > (i = Math.max(Math.ceil(o / 7), a) + 2) && ((s = i), (t.length = 1)),
                        t.reverse(),
                        i = s;
                    i--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((_ = (i = u.length) < (a = f.length)) && (a = i), i = 0; i < a; i++)
                    if (u[i] != f[i]) {
                        _ = u[i] < f[i];
                        break;
                    }
                s = 0;
            }
            for (_ && ((t = u), (u = f), (f = t), (e.s = -e.s)), a = u.length, i = f.length - a; i > 0; --i) u[a++] = 0;
            for (i = f.length; i > s; ) {
                if (u[--i] < f[i]) {
                    for (r = i; r && 0 === u[--r]; ) u[r] = 1e7 - 1;
                    --u[r], (u[i] += 1e7);
                }
                u[i] -= f[i];
            }
            for (; 0 === u[--a]; ) u.pop();
            for (; 0 === u[0]; u.shift()) --n;
            return u[0] ? ((e.d = u), (e.e = M(u, n)), d ? L(e, o, l) : e) : new h(3 === l ? -0 : 0);
        }),
    (C.modulo = C.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((d = !1),
                      9 == n.modulo
                          ? ((t = D(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = D(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (d = !0),
                      this.minus(t))
                    : L(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (C.naturalExponential = C.exp =
        function () {
            return B(this);
        }),
    (C.naturalLogarithm = C.ln =
        function () {
            return H(this);
        }),
    (C.negated = C.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), L(e);
        }),
    (C.plus = C.add =
        function (e) {
            var t,
                n,
                i,
                r,
                s,
                a,
                o,
                l,
                u,
                c,
                _ = this.constructor;
            if (((e = new _(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new _(e.d || this.s === e.s ? this : NaN)) : (e = new _(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((u = this.d), (c = e.d), (o = _.precision), (l = _.rounding), !u[0] || !c[0]))
                return c[0] || (e = new _(this)), d ? L(e, o, l) : e;
            if (((s = m(this.e / 7)), (i = m(e.e / 7)), (u = u.slice()), (r = s - i))) {
                for (
                    r < 0 ? ((n = u), (r = -r), (a = c.length)) : ((n = c), (i = s), (a = u.length)),
                        r > (a = (s = Math.ceil(o / 7)) > a ? s + 1 : a + 1) && ((r = a), (n.length = 1)),
                        n.reverse();
                    r--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((a = u.length) - (r = c.length) < 0 && ((r = a), (n = c), (c = u), (u = n)), t = 0; r; )
                (t = ((u[--r] = u[r] + c[r] + t) / 1e7) | 0), (u[r] %= 1e7);
            for (t && (u.unshift(t), ++i), a = u.length; 0 == u[--a]; ) u.pop();
            return (e.d = u), (e.e = M(u, i)), d ? L(e, o, l) : e;
        }),
    (C.precision = C.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(f + e);
            return this.d ? ((t = U(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (C.round = function () {
        var e = this.constructor;
        return L(new e(this), this.e + 1, e.rounding);
    }),
    (C.sine = C.sin =
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
                          if (i < 3) return t.isZero() ? t : W(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n),
                              (t = W(e, 2, (t = t.times(1 / K(5, n))), t));
                          for (var r, s = new e(5), a = new e(16), o = new e(20); n--; )
                              (r = t.times(t)), (t = t.times(s.plus(r.times(a.times(r).minus(o)))));
                          return t;
                      })(i, z(i, n))),
                      (i.precision = e),
                      (i.rounding = t),
                      L(a > 2 ? n.neg() : n, e, t, !0))
                : new i(NaN);
        }),
    (C.squareRoot = C.sqrt =
        function () {
            var e,
                t,
                n,
                i,
                r,
                s,
                a = this.d,
                o = this.e,
                l = this.s,
                u = this.constructor;
            if (1 !== l || !a || !a[0]) return new u(!l || (l < 0 && (!a || a[0])) ? NaN : a ? this : 1 / 0);
            for (
                d = !1,
                    0 == (l = Math.sqrt(+this)) || l == 1 / 0
                        ? (((t = v(a)).length + o) % 2 == 0 && (t += "0"),
                          (l = Math.sqrt(t)),
                          (o = m((o + 1) / 2) - (o < 0 || o % 2)),
                          (i = new u(
                              (t = l == 1 / 0 ? "5e" + o : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (i = new u(l.toString())),
                    n = (o = u.precision) + 3;
                ;
            )
                if (
                    ((i = (s = i).plus(D(this, s, n + 2, 1)).times(0.5)),
                    v(s.d).slice(0, n) === (t = v(i.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (r || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (L(i, o + 1, 1), (e = !i.times(i).eq(this)));
                        break;
                    }
                    if (!r && (L(s, o + 1, 0), s.times(s).eq(this))) {
                        i = s;
                        break;
                    }
                    (n += 4), (r = 1);
                }
            return (d = !0), L(i, o, u.rounding, e);
        }),
    (C.tangent = C.tan =
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
                      (n = D(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (i.precision = e),
                      (i.rounding = t),
                      L(2 == a || 4 == a ? n.neg() : n, e, t, !0))
                : new i(NaN);
        }),
    (C.times = C.mul =
        function (e) {
            var t,
                n,
                i,
                r,
                s,
                a,
                o,
                l,
                u,
                c = this.constructor,
                _ = this.d,
                f = (e = new c(e)).d;
            if (((e.s *= this.s), !_ || !_[0] || !f || !f[0]))
                return new c(!e.s || (_ && !_[0] && !f) || (f && !f[0] && !_) ? NaN : !_ || !f ? e.s / 0 : 0 * e.s);
            for (
                n = m(this.e / 7) + m(e.e / 7),
                    (l = _.length) < (u = f.length) && ((s = _), (_ = f), (f = s), (a = l), (l = u), (u = a)),
                    s = [],
                    i = a = l + u;
                i--;
            )
                s.push(0);
            for (i = u; --i >= 0; ) {
                for (t = 0, r = l + i; r > i; )
                    (o = s[r] + f[i] * _[r - i - 1] + t), (s[r--] = (o % 1e7) | 0), (t = (o / 1e7) | 0);
                s[r] = ((s[r] + t) % 1e7) | 0;
            }
            for (; !s[--a]; ) s.pop();
            return t ? ++n : s.shift(), (e.d = s), (e.e = M(s, n)), d ? L(e, c.precision, c.rounding) : e;
        }),
    (C.toBinary = function (e, t) {
        return $(this, 2, e, t);
    }),
    (C.toDecimalPlaces = C.toDP =
        function (e, t) {
            var n = this,
                i = n.constructor;
            return ((n = new i(n)), void 0 === e)
                ? n
                : (O(e, 0, 1e9), void 0 === t ? (t = i.rounding) : O(t, 0, 8), L(n, e + n.e + 1, t));
        }),
    (C.toExponential = function (e, t) {
        var n,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (n = w(i, !0))
                : (O(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : O(t, 0, 8),
                  (n = w((i = L(new r(i), e + 1, t)), !0, e + 1))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (C.toFixed = function (e, t) {
        var n,
            i,
            r = this.constructor;
        return (
            void 0 === e
                ? (n = w(this))
                : (O(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : O(t, 0, 8),
                  (n = w((i = L(new r(this), e + this.e + 1, t)), !1, e + i.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (C.toFraction = function (e) {
        var t,
            n,
            i,
            r,
            s,
            a,
            o,
            l,
            u,
            c,
            _,
            h,
            p = this.d,
            E = this.constructor;
        if (!p) return new E(this);
        if (
            ((u = n = new E(1)),
            (i = l = new E(0)),
            (a = (s = (t = new E(i)).e = U(p) - this.e - 1) % 7),
            (t.d[0] = g(10, a < 0 ? 7 + a : a)),
            null == e)
        )
            e = s > 0 ? t : u;
        else {
            if (!(o = new E(e)).isInt() || o.lt(u)) throw Error(f + o);
            e = o.gt(t) ? (s > 0 ? t : u) : o;
        }
        for (
            d = !1, o = new E(v(p)), c = E.precision, E.precision = s = 7 * p.length * 2;
            (_ = D(o, t, 0, 1, 1)), 1 != (r = n.plus(_.times(i))).cmp(e);
        )
            (n = i), (i = r), (r = u), (u = l.plus(_.times(r))), (l = r), (r = t), (t = o.minus(_.times(r))), (o = r);
        return (
            (r = D(e.minus(n), i, 0, 1, 1)),
            (l = l.plus(r.times(u))),
            (n = n.plus(r.times(i))),
            (l.s = u.s = this.s),
            (h =
                1 >
                D(u, i, s, 1)
                    .minus(this)
                    .abs()
                    .cmp(D(l, n, s, 1).minus(this).abs())
                    ? [u, i]
                    : [l, n]),
            (E.precision = c),
            (d = !0),
            h
        );
    }),
    (C.toHexadecimal = C.toHex =
        function (e, t) {
            return $(this, 16, e, t);
        }),
    (C.toNearest = function (e, t) {
        var n = this,
            i = n.constructor;
        if (((n = new i(n)), null == e)) {
            if (!n.d) return n;
            (e = new i(1)), (t = i.rounding);
        } else {
            if (((e = new i(e)), void 0 === t ? (t = i.rounding) : O(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((d = !1), (n = D(n, e, 0, t, 1).times(e)), (d = !0), L(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (C.toNumber = function () {
        return +this;
    }),
    (C.toOctal = function (e, t) {
        return $(this, 8, e, t);
    }),
    (C.toPower = C.pow =
        function (e) {
            var t,
                n,
                i,
                r,
                s,
                a,
                o = this,
                l = o.constructor,
                u = +(e = new l(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new l(g(+o, u));
            if ((o = new l(o)).eq(1)) return o;
            if (((i = l.precision), (s = l.rounding), e.eq(1))) return L(o, i, s);
            if ((t = m(e.e / 7)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 0x1fffffffffffff)
                return (r = G(l, o, n, i)), e.s < 0 ? new l(1).div(r) : L(r, i, s);
            if ((a = o.s) < 0) {
                if (t < e.d.length - 1) return new l(NaN);
                if (((1 & e.d[t]) == 0 && (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = a), o;
            }
            return (t =
                0 != (n = g(+o, u)) && isFinite(n)
                    ? new l(n + "").e
                    : m(u * (Math.log("0." + v(o.d)) / Math.LN10 + o.e + 1))) >
                l.maxE + 1 || t < l.minE - 1
                ? new l(t > 0 ? a / 0 : 0)
                : ((d = !1),
                  (l.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (r = B(e.times(H(o, i + n)), i)).d &&
                      R((r = L(r, i + 5, 1)).d, i, s) &&
                      ((t = i + 10),
                      +v((r = L(B(e.times(H(o, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 &&
                          (r = L(r, i + 1, 0))),
                  (r.s = a),
                  (d = !0),
                  (l.rounding = s),
                  L(r, i, s));
        }),
    (C.toPrecision = function (e, t) {
        var n,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (n = w(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
                : (O(e, 1, 1e9),
                  void 0 === t ? (t = r.rounding) : O(t, 0, 8),
                  (n = w((i = L(new r(i), e, t)), e <= i.e || i.e <= r.toExpNeg, e))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (C.toSignificantDigits = C.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (O(e, 1, 1e9), void 0 === t ? (t = n.rounding) : O(t, 0, 8)),
                L(new n(this), e, t)
            );
        }),
    (C.toString = function () {
        var e = this.constructor,
            t = w(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (C.truncated = C.trunc =
        function () {
            return L(new this.constructor(this), this.e + 1, 1);
        }),
    (C.valueOf = C.toJSON =
        function () {
            var e = this.constructor,
                t = w(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var D = (function () {
    function e(e, t, n) {
        var i,
            r = 0,
            s = e.length;
        for (e = e.slice(); s--; ) (i = e[s] * t + r), (e[s] = (i % n) | 0), (r = (i / n) | 0);
        return r && e.unshift(r), e;
    }
    function t(e, t, n, i) {
        var r, s;
        if (n != i) s = n > i ? 1 : -1;
        else
            for (r = s = 0; r < n; r++)
                if (e[r] != t[r]) {
                    s = e[r] > t[r] ? 1 : -1;
                    break;
                }
        return s;
    }
    function n(e, t, n, i) {
        for (var r = 0; n--; ) (e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * i + e[n] - t[n]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (i, r, a, o, l, u) {
        var c,
            d,
            _,
            f,
            h,
            p,
            E,
            g,
            A,
            I,
            T,
            S,
            N,
            y,
            C,
            v,
            O,
            R,
            b,
            D,
            w = i.constructor,
            M = i.s == r.s ? 1 : -1,
            P = i.d,
            x = r.d;
        if (!P || !P[0] || !x || !x[0])
            return new w(!i.s || !r.s || (P ? x && P[0] == x[0] : !x) ? NaN : (P && 0 == P[0]) || !x ? 0 * M : M / 0);
        for (
            u ? ((h = 1), (d = i.e - r.e)) : ((u = 1e7), (h = 7), (d = m(i.e / h) - m(r.e / h))),
                b = x.length,
                O = P.length,
                I = (A = new w(M)).d = [],
                _ = 0;
            x[_] == (P[_] || 0);
            _++
        );
        if (
            (x[_] > (P[_] || 0) && d--,
            null == a ? ((y = a = w.precision), (o = w.rounding)) : (y = l ? a + (i.e - r.e) + 1 : a),
            y < 0)
        )
            I.push(1), (p = !0);
        else {
            if (((y = (y / h + 2) | 0), (_ = 0), 1 == b)) {
                for (f = 0, x = x[0], y++; (_ < O || f) && y--; _++)
                    (C = f * u + (P[_] || 0)), (I[_] = (C / x) | 0), (f = (C % x) | 0);
                p = f || _ < O;
            } else {
                for (
                    (f = (u / (x[0] + 1)) | 0) > 1 &&
                        ((x = e(x, f, u)), (P = e(P, f, u)), (b = x.length), (O = P.length)),
                        v = b,
                        S = (T = P.slice(0, b)).length;
                    S < b;
                )
                    T[S++] = 0;
                (D = x.slice()).unshift(0), (R = x[0]), x[1] >= u / 2 && ++R;
                do
                    (f = 0),
                        (c = t(x, T, b, S)) < 0
                            ? ((N = T[0]),
                              b != S && (N = N * u + (T[1] || 0)),
                              (f = (N / R) | 0) > 1
                                  ? (f >= u && (f = u - 1),
                                    (g = (E = e(x, f, u)).length),
                                    (S = T.length),
                                    1 == (c = t(E, T, g, S)) && (f--, n(E, b < g ? D : x, g, u)))
                                  : (0 == f && (c = f = 1), (E = x.slice())),
                              (g = E.length) < S && E.unshift(0),
                              n(T, E, S, u),
                              -1 == c && ((S = T.length), (c = t(x, T, b, S)) < 1 && (f++, n(T, b < S ? D : x, S, u))),
                              (S = T.length))
                            : 0 === c && (f++, (T = [0])),
                        (I[_++] = f),
                        c && T[0] ? (T[S++] = P[v] || 0) : ((T = [P[v]]), (S = 1));
                while ((v++ < O || void 0 !== T[0]) && y--);
                p = void 0 !== T[0];
            }
            I[0] || I.shift();
        }
        if (1 == h) (A.e = d), (s = p);
        else {
            for (_ = 1, f = I[0]; f >= 10; f /= 10) _++;
            (A.e = _ + d * h - 1), L(A, l ? a + A.e + 1 : a, o, p);
        }
        return A;
    };
})();
function L(e, t, n, i) {
    var r,
        s,
        a,
        o,
        l,
        u,
        c,
        _,
        f,
        h = e.constructor;
    u: if (null != t) {
        if (!(_ = e.d)) return e;
        for (r = 1, o = _[0]; o >= 10; o /= 10) r++;
        if ((s = t - r) < 0) (s += 7), (a = t), (l = (((c = _[(f = 0)]) / g(10, r - a - 1)) % 10) | 0);
        else if ((f = Math.ceil((s + 1) / 7)) >= (o = _.length))
            if (i) {
                for (; o++ <= f; ) _.push(0);
                (c = l = 0), (r = 1), (s %= 7), (a = s - 7 + 1);
            } else break u;
        else {
            for (r = 1, c = o = _[f]; o >= 10; o /= 10) r++;
            (s %= 7), (l = (a = s - 7 + r) < 0 ? 0 : ((c / g(10, r - a - 1)) % 10) | 0);
        }
        if (
            ((i = i || t < 0 || void 0 !== _[f + 1] || (a < 0 ? c : c % g(10, r - a - 1))),
            (u =
                n < 4
                    ? (l || i) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : l > 5 ||
                      (5 == l &&
                          (4 == n ||
                              i ||
                              (6 == n && ((s > 0 ? (a > 0 ? c / g(10, r - a) : 0) : _[f - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !_[0])
        )
            return (
                (_.length = 0),
                u ? ((t -= e.e + 1), (_[0] = g(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (_[0] = e.e = 0),
                e
            );
        if (
            (0 == s
                ? ((_.length = f), (o = 1), f--)
                : ((_.length = f + 1),
                  (o = g(10, 7 - s)),
                  (_[f] = a > 0 ? (((c / g(10, r - a)) % g(10, a)) | 0) * o : 0)),
            u)
        )
            for (;;)
                if (0 == f) {
                    for (s = 1, a = _[0]; a >= 10; a /= 10) s++;
                    for (a = _[0] += o, o = 1; a >= 10; a /= 10) o++;
                    s != o && (e.e++, 1e7 == _[0] && (_[0] = 1));
                    break;
                } else {
                    if (((_[f] += o), 1e7 != _[f])) break;
                    (_[f--] = 0), (o = 1);
                }
        for (s = _.length; 0 === _[--s]; ) _.pop();
    }
    return d && (e.e > h.maxE ? ((e.d = null), (e.e = NaN)) : e.e < h.minE && ((e.e = 0), (e.d = [0]))), e;
}
function w(e, t, n) {
    if (!e.isFinite()) return j(e);
    var i,
        r = e.e,
        s = v(e.d),
        a = s.length;
    return (
        t
            ? (n && (i = n - a) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + k(i))
                  : a > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : r < 0
              ? ((s = "0." + k(-r - 1) + s), n && (i = n - a) > 0 && (s += k(i)))
              : r >= a
                ? ((s += k(r + 1 - a)), n && (i = n - r - 1) > 0 && (s = s + "." + k(i)))
                : ((i = r + 1) < a && (s = s.slice(0, i) + "." + s.slice(i)),
                  n && (i = n - a) > 0 && (r + 1 === a && (s += "."), (s += k(i)))),
        s
    );
}
function M(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function P(e, t, n) {
    if (t > N) throw ((d = !0), n && (e.precision = n), Error(h));
    return L(new e(l), t, 1, !0);
}
function x(e, t, n) {
    if (t > y) throw Error(h);
    return L(new e(u), t, n, !0);
}
function U(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function k(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function G(e, t, n, i) {
    var r,
        s = new e(1),
        a = Math.ceil(i / 7 + 4);
    for (d = !1; ; ) {
        if ((n % 2 && q((s = s.times(t)).d, a) && (r = !0), 0 === (n = m(n / 2)))) {
            (n = s.d.length - 1), r && 0 === s.d[n] && ++s.d[n];
            break;
        }
        q((t = t.times(t)).d, a);
    }
    return (d = !0), s;
}
function F(e) {
    return 1 & e.d[e.d.length - 1];
}
function V(e, t, n) {
    for (var i, r, s = new e(t[0]), a = 0; ++a < t.length; ) {
        if (!(r = new e(t[a])).s) {
            s = r;
            break;
        }
        ((i = s.cmp(r)) === n || (0 === i && s.s === n)) && (s = r);
    }
    return s;
}
function B(e, t) {
    var n,
        i,
        r,
        s,
        a,
        o,
        l,
        u = 0,
        c = 0,
        _ = 0,
        f = e.constructor,
        h = f.rounding,
        p = f.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new f(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((d = !1), (l = p)) : (l = t), o = new f(0.03125); e.e > -2; ) (e = e.times(o)), (_ += 5);
    for (l += i = ((Math.log(g(2, _)) / Math.LN10) * 2 + 5) | 0, n = s = a = new f(1), f.precision = l; ; ) {
        if (
            ((s = L(s.times(e), l, 1)),
            (n = n.times(++c)),
            v((o = a.plus(D(s, n, l, 1))).d).slice(0, l) === v(a.d).slice(0, l))
        ) {
            for (r = _; r--; ) a = L(a.times(a), l, 1);
            if (null != t) return (f.precision = p), a;
            if (!(u < 3 && R(a.d, l - i, h, u))) return L(a, (f.precision = p), h, (d = !0));
            (f.precision = l += 10), (n = s = o = new f(1)), (c = 0), u++;
        }
        a = o;
    }
}
function H(e, t) {
    var n,
        i,
        r,
        s,
        a,
        o,
        l,
        u,
        c,
        _,
        f,
        h = 1,
        p = e,
        E = p.d,
        m = p.constructor,
        g = m.rounding,
        A = m.precision;
    if (p.s < 0 || !E || !E[0] || (!p.e && 1 == E[0] && 1 == E.length))
        return new m(E && !E[0] ? -1 / 0 : 1 != p.s ? NaN : E ? 0 : p);
    if (
        (null == t ? ((d = !1), (c = A)) : (c = t),
        (m.precision = c += 10),
        (i = (n = v(E)).charAt(0)),
        !(15e14 > Math.abs((s = p.e))))
    )
        return (
            (u = P(m, c + 2, A).times(s + "")),
            (p = H(new m(i + "." + n.slice(1)), c - 10).plus(u)),
            (m.precision = A),
            null == t ? L(p, A, g, (d = !0)) : p
        );
    for (; (i < 7 && 1 != i) || (1 == i && n.charAt(1) > 3); ) (i = (n = v((p = p.times(e)).d)).charAt(0)), h++;
    for (
        s = p.e,
            i > 1 ? ((p = new m("0." + n)), s++) : (p = new m(i + "." + n.slice(1))),
            _ = p,
            l = a = p = D(p.minus(1), p.plus(1), c, 1),
            f = L(p.times(p), c, 1),
            r = 3;
        ;
    ) {
        if (((a = L(a.times(f), c, 1)), v((u = l.plus(D(a, new m(r), c, 1))).d).slice(0, c) === v(l.d).slice(0, c))) {
            if (
                ((l = l.times(2)),
                0 !== s && (l = l.plus(P(m, c + 2, A).times(s + ""))),
                (l = D(l, new m(h), c, 1)),
                null != t)
            )
                return (m.precision = A), l;
            if (!R(l.d, c - 10, g, o)) return L(l, (m.precision = A), g, (d = !0));
            (m.precision = c += 10),
                (u = a = p = D(_.minus(1), _.plus(1), c, 1)),
                (f = L(p.times(p), c, 1)),
                (r = o = 1);
        }
        (l = u), (r += 2);
    }
}
function j(e) {
    return String((e.s * e.s) / 0);
}
function Y(e, t) {
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
            d &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function W(e, t, n, i, r) {
    var s,
        a,
        o,
        l,
        u = e.precision,
        c = Math.ceil(u / 7);
    for (d = !1, l = n.times(n), o = new e(i); ; ) {
        if (
            ((a = D(o.times(l), new e(t++ * t++), u, 1)),
            (o = r ? i.plus(a) : i.minus(a)),
            (i = D(a.times(l), new e(t++ * t++), u, 1)),
            void 0 !== (a = o.plus(i)).d[c])
        ) {
            for (s = c; a.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
        }
        (s = o), (o = i), (i = a), (a = s);
    }
    return (d = !0), (a.d.length = c + 1), a;
}
function K(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function z(e, t) {
    var n,
        i = t.s < 0,
        r = x(e, e.precision, 1),
        s = r.times(0.5);
    if ((t = t.abs()).lte(s)) return (a = i ? 4 : 1), t;
    if ((n = t.divToInt(r)).isZero()) a = i ? 3 : 2;
    else {
        if ((t = t.minus(n.times(r))).lte(s)) return (a = F(n) ? (i ? 2 : 3) : i ? 4 : 1), t;
        a = F(n) ? (i ? 1 : 4) : i ? 3 : 2;
    }
    return t.minus(r).abs();
}
function $(e, t, n, i) {
    var r,
        a,
        l,
        u,
        c,
        d,
        _,
        f,
        h,
        p = e.constructor,
        E = void 0 !== n;
    if (
        (E ? (O(n, 1, 1e9), void 0 === i ? (i = p.rounding) : O(i, 0, 8)) : ((n = p.precision), (i = p.rounding)),
        e.isFinite())
    ) {
        for (
            l = (_ = w(e)).indexOf("."),
                E ? ((r = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (r = t),
                l >= 0 &&
                    ((_ = _.replace(".", "")),
                    ((h = new p(1)).e = _.length - l),
                    (h.d = b(w(h), 10, r)),
                    (h.e = h.d.length)),
                a = c = (f = b(_, 10, r)).length;
            0 == f[--c];
        )
            f.pop();
        if (f[0]) {
            if (
                (l < 0
                    ? a--
                    : (((e = new p(e)).d = f), (e.e = a), (f = (e = D(e, h, n, i, 0, r)).d), (a = e.e), (d = s)),
                (l = f[n]),
                (u = r / 2),
                (d = d || void 0 !== f[n + 1]),
                (d =
                    i < 4
                        ? (void 0 !== l || d) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : l > u || (l === u && (4 === i || d || (6 === i && 1 & f[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (f.length = n),
                d)
            )
                for (; ++f[--n] > r - 1; ) (f[n] = 0), n || (++a, f.unshift(1));
            for (c = f.length; !f[c - 1]; --c);
            for (l = 0, _ = ""; l < c; l++) _ += o.charAt(f[l]);
            if (E) {
                if (c > 1)
                    if (16 == t || 8 == t) {
                        for (l = 16 == t ? 4 : 3, --c; c % l; c++) _ += "0";
                        for (c = (f = b(_, r, t)).length; !f[c - 1]; --c);
                        for (l = 1, _ = "1."; l < c; l++) _ += o.charAt(f[l]);
                    } else _ = _.charAt(0) + "." + _.slice(1);
                _ = _ + (a < 0 ? "p" : "p+") + a;
            } else if (a < 0) {
                for (; ++a; ) _ = "0" + _;
                _ = "0." + _;
            } else if (++a > c) for (a -= c; a--; ) _ += "0";
            else a < c && (_ = _.slice(0, a) + "." + _.slice(a));
        } else _ = E ? "0p+0" : "0";
        _ = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + _;
    } else _ = j(e);
    return e.s < 0 ? "-" + _ : _;
}
function q(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function Z(e) {
    return new this(e).abs();
}
function X(e) {
    return new this(e).acos();
}
function Q(e) {
    return new this(e).acosh();
}
function J(e, t) {
    return new this(e).plus(t);
}
function ee(e) {
    return new this(e).asin();
}
function et(e) {
    return new this(e).asinh();
}
function en(e) {
    return new this(e).atan();
}
function ei(e) {
    return new this(e).atanh();
}
function er(e, t) {
    (e = new this(e)), (t = new this(t));
    var n,
        i = this.precision,
        r = this.rounding,
        s = i + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? x(this, i, r) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = x(this, s, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = s),
                          (this.rounding = 1),
                          (n = this.atan(D(e, t, s, 1))),
                          (t = x(this, s, 1)),
                          (this.precision = i),
                          (this.rounding = r),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(D(e, t, s, 1)))
                : ((n = x(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function es(e) {
    return new this(e).cbrt();
}
function ea(e) {
    return L((e = new this(e)), e.e + 1, 2);
}
function eo(e, t, n) {
    return new this(e).clamp(t, n);
}
function el(e) {
    if (!e || "object" != typeof e) throw Error(_ + "Object expected");
    var t,
        n,
        i,
        r = !0 === e.defaults,
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
        if (((n = s[t]), r && (this[n] = c[n]), void 0 !== (i = e[n])))
            if (m(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[n] = i;
            else throw Error(f + n + ": " + i);
    if (((n = "crypto"), r && (this[n] = c[n]), void 0 !== (i = e[n])))
        if (!0 === i || !1 === i || 0 === i || 1 === i)
            if (i)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(p);
            else this[n] = !1;
        else throw Error(f + n + ": " + i);
    return this;
}
function eu(e) {
    return new this(e).cos();
}
function ec(e) {
    return new this(e).cosh();
}
function ed(e, t) {
    return new this(e).div(t);
}
function e_(e) {
    return new this(e).exp();
}
function ef(e) {
    return L((e = new this(e)), e.e + 1, 3);
}
function eh() {
    var e,
        t,
        n = new this(0);
    for (e = 0, d = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return (d = !0), new this(1 / 0);
            n = t;
        }
    return (d = !0), n.sqrt();
}
function ep(e) {
    return e instanceof eU || (e && e.toStringTag === E) || !1;
}
function eE(e) {
    return new this(e).ln();
}
function em(e, t) {
    return new this(e).log(t);
}
function eg(e) {
    return new this(e).log(2);
}
function eA(e) {
    return new this(e).log(10);
}
function eI() {
    return V(this, arguments, -1);
}
function eT() {
    return V(this, arguments, 1);
}
function eS(e, t) {
    return new this(e).mod(t);
}
function eN(e, t) {
    return new this(e).mul(t);
}
function ey(e, t) {
    return new this(e).pow(t);
}
function eC(e) {
    var t,
        n,
        i,
        r,
        s = 0,
        a = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : O(e, 1, 1e9), (i = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(i)); s < i; )
                (r = t[s]) >= 429e7 ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[s++] = r % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((i *= 4)); s < i; )
                (r = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, s)
                    : (o.push(r % 1e7), (s += 4));
            s = i / 4;
        } else throw Error(p);
    else for (; s < i; ) o[s++] = (1e7 * Math.random()) | 0;
    for (i = o[--s], e %= 7, i && e && ((r = g(10, 7 - e)), (o[s] = ((i / r) | 0) * r)); 0 === o[s]; s--) o.pop();
    if (s < 0) (n = 0), (o = [0]);
    else {
        for (n = -1; 0 === o[0]; n -= 7) o.shift();
        for (i = 1, r = o[0]; r >= 10; r /= 10) i++;
        i < 7 && (n -= 7 - i);
    }
    return (a.e = n), (a.d = o), a;
}
function ev(e) {
    return L((e = new this(e)), e.e + 1, this.rounding);
}
function eO(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eR(e) {
    return new this(e).sin();
}
function eb(e) {
    return new this(e).sinh();
}
function eD(e) {
    return new this(e).sqrt();
}
function eL(e, t) {
    return new this(e).sub(t);
}
function ew() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (d = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (d = !0), L(n, this.precision, this.rounding);
}
function eM(e) {
    return new this(e).tan();
}
function eP(e) {
    return new this(e).tanh();
}
function ex(e) {
    return L((e = new this(e)), e.e + 1, 1);
}
(C[Symbol.for("nodejs.util.inspect.custom")] = C.toString), (C[Symbol.toStringTag] = "Decimal");
var eU = (C.constructor = (function e(t) {
    var n, i, r;
    function s(e) {
        var t, n, i;
        if (!(this instanceof s)) return new s(e);
        if (((this.constructor = s), ep(e))) {
            (this.s = e.s),
                d
                    ? !e.d || e.e > s.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : e.e < s.minE
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
                d
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
            return Y(this, e.toString());
        }
        if ("string" === i)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                S.test(e)
                    ? Y(this, e)
                    : (function (e, t) {
                          var n, i, r, s, a, o, l, u, c;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), S.test(t))) return Y(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (I.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (A.test(t)) n = 2;
                          else if (T.test(t)) n = 8;
                          else throw Error(f + t);
                          for (
                              (s = t.search(/p/i)) > 0
                                  ? ((l = +t.slice(s + 1)), (t = t.substring(2, s)))
                                  : (t = t.slice(2)),
                                  a = (s = t.indexOf(".")) >= 0,
                                  i = e.constructor,
                                  a &&
                                      ((s = (o = (t = t.replace(".", "")).length) - s), (r = G(i, new i(n), s, 2 * s))),
                                  s = c = (u = b(t, n, 1e7)).length - 1;
                              0 === u[s];
                              --s
                          )
                              u.pop();
                          return s < 0
                              ? new i(0 * e.s)
                              : ((e.e = M(u, c)),
                                (e.d = u),
                                (d = !1),
                                a && (e = D(e, r, 4 * o)),
                                l && (e = e.times(54 > Math.abs(l) ? g(2, l) : eU.pow(2, l))),
                                (d = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === i) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), Y(this, e.toString());
        throw Error(f + e);
    }
    if (
        ((s.prototype = C),
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
        (s.config = s.set = el),
        (s.clone = e),
        (s.isDecimal = ep),
        (s.abs = Z),
        (s.acos = X),
        (s.acosh = Q),
        (s.add = J),
        (s.asin = ee),
        (s.asinh = et),
        (s.atan = en),
        (s.atanh = ei),
        (s.atan2 = er),
        (s.cbrt = es),
        (s.ceil = ea),
        (s.clamp = eo),
        (s.cos = eu),
        (s.cosh = ec),
        (s.div = ed),
        (s.exp = e_),
        (s.floor = ef),
        (s.hypot = eh),
        (s.ln = eE),
        (s.log = em),
        (s.log10 = eA),
        (s.log2 = eg),
        (s.max = eI),
        (s.min = eT),
        (s.mod = eS),
        (s.mul = eN),
        (s.pow = ey),
        (s.random = eC),
        (s.round = ev),
        (s.sign = eO),
        (s.sin = eR),
        (s.sinh = eb),
        (s.sqrt = eD),
        (s.sub = eL),
        (s.sum = ew),
        (s.tan = eM),
        (s.tanh = eP),
        (s.trunc = ex),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < r.length;
        )
            t.hasOwnProperty((i = r[n++])) || (t[i] = this[i]);
    return s.config(t), s;
})(c));
(l = new eU(l)), (u = new eU(u)), new eU(10);
let ek = new eU(0);
function eG(e, t) {
    let n = t && t.cache ? t.cache : ej,
        i = t && t.serializer ? t.serializer : eB;
    return (
        t && t.strategy
            ? t.strategy
            : function (e, t) {
                  var n, i;
                  let r = 1 === e.length ? eF : eV;
                  return (n = t.cache.create()), (i = t.serializer), r.bind(this, e, n, i);
              }
    )(e, { cache: n, serializer: i });
}
function eF(e, t, n, i) {
    let r = null == i || "number" == typeof i || "boolean" == typeof i ? i : n(i),
        s = t.get(r);
    return void 0 === s && ((s = e.call(this, i)), t.set(r, s)), s;
}
function eV(e, t, n) {
    let i = Array.prototype.slice.call(arguments, 3),
        r = n(i),
        s = t.get(r);
    return void 0 === s && ((s = e.apply(this, i)), t.set(r, s)), s;
}
new eU(-0);
let eB = function () {
    return JSON.stringify(arguments);
};
class eH {
    cache;
    constructor() {
        this.cache = Object.create(null);
    }
    get(e) {
        return this.cache[e];
    }
    set(e, t) {
        this.cache[e] = t;
    }
}
let ej = {
        create: function () {
            return new eH();
        },
    },
    eY = {
        variadic: function (e, t) {
            var n, i;
            return (n = t.cache.create()), (i = t.serializer), eV.bind(this, e, n, i);
        },
        monadic: function (e, t) {
            var n, i;
            return (n = t.cache.create()), (i = t.serializer), eF.bind(this, e, n, i);
        },
    };
function eW(e, t, n = Error) {
    if (!e) throw new n(t);
}
let eK = eG((...e) => new Intl.NumberFormat(...e), { strategy: eY.variadic });
eG((...e) => new Intl.PluralRules(...e), { strategy: eY.variadic }),
    eG((...e) => new Intl.Locale(...e), { strategy: eY.variadic });
let ez = eG((...e) => new Intl.ListFormat(...e), { strategy: eY.variadic });
function e$(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function eq(e) {
    return "function" == typeof e;
}
function eZ(e, t, n, i, r) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let s = e[t];
    if (void 0 !== s) {
        if ("boolean" !== n && "string" !== n) throw TypeError("invalid type");
        if (
            ("boolean" === n && (s = !!s),
            "string" === n &&
                (s = (function (e) {
                    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
                    return String(e);
                })(s)),
            void 0 !== i && !i.filter((e) => e == s).length)
        )
            throw RangeError(`${s} is not within ${i.join(", ")}`);
        return s;
    }
    return r;
}
let eX = new WeakMap();
function eQ(e, t) {
    let n = eX.get(e);
    n || ((n = new Set(e)), eX.set(e, n));
    let i = t;
    for (;;) {
        if (n.has(i)) return i;
        let e = i.lastIndexOf("-");
        if (!~e) return;
        e >= 2 && "-" === i[e - 2] && (e -= 2), (i = i.slice(0, e));
    }
}
let eJ = {
        "written-new": [
            { paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } },
            { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
            { $cnsar: { _value: "HK+MO" } },
            { $americas: { _value: "019" } },
            { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
            { no: { _desired: "nb", _distance: "1" } },
            { bs: { _desired: "hr", _distance: "4" } },
            { bs: { _desired: "sh", _distance: "4" } },
            { hr: { _desired: "sh", _distance: "4" } },
            { sr: { _desired: "sh", _distance: "4" } },
            { aa: { _desired: "ssy", _distance: "4" } },
            { de: { _desired: "gsw", _distance: "4", _oneway: "true" } },
            { de: { _desired: "lb", _distance: "4", _oneway: "true" } },
            { no: { _desired: "da", _distance: "8" } },
            { nb: { _desired: "da", _distance: "8" } },
            { ru: { _desired: "ab", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ach", _distance: "30", _oneway: "true" } },
            { nl: { _desired: "af", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ak", _distance: "30", _oneway: "true" } },
            { en: { _desired: "am", _distance: "30", _oneway: "true" } },
            { es: { _desired: "ay", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "az", _distance: "30", _oneway: "true" } },
            { ur: { _desired: "bal", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "be", _distance: "20", _oneway: "true" } },
            { en: { _desired: "bem", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "bh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "bn", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "bo", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "br", _distance: "20", _oneway: "true" } },
            { es: { _desired: "ca", _distance: "20", _oneway: "true" } },
            { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } },
            { en: { _desired: "chr", _distance: "20", _oneway: "true" } },
            { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "co", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "crs", _distance: "20", _oneway: "true" } },
            { sk: { _desired: "cs", _distance: "20" } },
            { en: { _desired: "cy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ee", _distance: "30", _oneway: "true" } },
            { en: { _desired: "eo", _distance: "30", _oneway: "true" } },
            { es: { _desired: "eu", _distance: "20", _oneway: "true" } },
            { da: { _desired: "fo", _distance: "20", _oneway: "true" } },
            { nl: { _desired: "fy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ga", _distance: "20", _oneway: "true" } },
            { en: { _desired: "gaa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "gd", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gl", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gn", _distance: "20", _oneway: "true" } },
            { hi: { _desired: "gu", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ha", _distance: "30", _oneway: "true" } },
            { en: { _desired: "haw", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "ht", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "hy", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ia", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ig", _distance: "30", _oneway: "true" } },
            { en: { _desired: "is", _distance: "20", _oneway: "true" } },
            { id: { _desired: "jv", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ka", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "kg", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "kk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "km", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kri", _distance: "30", _oneway: "true" } },
            { tr: { _desired: "ku", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "ky", _distance: "30", _oneway: "true" } },
            { it: { _desired: "la", _distance: "20", _oneway: "true" } },
            { en: { _desired: "lg", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "ln", _distance: "30", _oneway: "true" } },
            { en: { _desired: "lo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "loz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "lua", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mai", _distance: "20", _oneway: "true" } },
            { en: { _desired: "mfe", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "mg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mi", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ml", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "mn", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mr", _distance: "30", _oneway: "true" } },
            { id: { _desired: "ms", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "my", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ne", _distance: "30", _oneway: "true" } },
            { nb: { _desired: "nn", _distance: "20" } },
            { no: { _desired: "nn", _distance: "20" } },
            { en: { _desired: "nso", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ny", _distance: "30", _oneway: "true" } },
            { en: { _desired: "nyn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "oc", _distance: "20", _oneway: "true" } },
            { en: { _desired: "om", _distance: "30", _oneway: "true" } },
            { en: { _desired: "or", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pcm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ps", _distance: "30", _oneway: "true" } },
            { es: { _desired: "qu", _distance: "30", _oneway: "true" } },
            { de: { _desired: "rm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "rn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "rw", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "sa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sd", _distance: "30", _oneway: "true" } },
            { en: { _desired: "si", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "so", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sq", _distance: "30", _oneway: "true" } },
            { en: { _desired: "st", _distance: "30", _oneway: "true" } },
            { id: { _desired: "su", _distance: "20", _oneway: "true" } },
            { en: { _desired: "sw", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ta", _distance: "30", _oneway: "true" } },
            { en: { _desired: "te", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ti", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tlh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "to", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tum", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "ug", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "uk", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ur", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "uz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "wo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "xh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yi", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yo", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "za", _distance: "20", _oneway: "true" } },
            { en: { _desired: "zu", _distance: "30", _oneway: "true" } },
            { ar: { _desired: "aao", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abv", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acm", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acw", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acx", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acy", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "adf", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aec", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "afb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apc", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apd", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ars", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ary", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "auz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "avl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "pga", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "shu", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } },
            { az: { _desired: "azb", _distance: "10", _oneway: "true" } },
            { et: { _desired: "vro", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fub", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fue", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fui", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gui", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gun", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } },
            { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "enb", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "niq", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "oki", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "pko", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tec", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } },
            { kok: { _desired: "gom", _distance: "10", _oneway: "true" } },
            { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "ida", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lko", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lks", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lri", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lto", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lts", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nle", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "rag", _distance: "10", _oneway: "true" } },
            { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "msh", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "skg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "txy", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } },
            { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "btj", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bve", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "coa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "dup", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "hji", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "id", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jak", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jax", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lce", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "liw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "max", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "meo", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "min", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "msi", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mui", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "orn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "ors", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pel", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pse", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "urk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } },
            { ne: { _desired: "dty", _distance: "10", _oneway: "true" } },
            { om: { _desired: "gax", _distance: "10", _oneway: "true" } },
            { om: { _desired: "hae", _distance: "10", _oneway: "true" } },
            { om: { _desired: "orc", _distance: "10", _oneway: "true" } },
            { or: { _desired: "spv", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pst", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qub", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qud", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quf", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qug", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quk", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qul", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qup", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qur", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qus", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qux", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quy", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qva", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qve", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qws", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sro", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aae", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aat", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aln", _distance: "10", _oneway: "true" } },
            { syr: { _desired: "aii", _distance: "10", _oneway: "true" } },
            { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } },
            { yi: { _desired: "yih", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "gan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hak", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "nan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "yue", _distance: "10", _oneway: "true" } },
            { "*": { _desired: "*", _distance: "80" } },
            { "en-Latn": { _desired: "am-Ethi", _distance: "10", _oneway: "true" } },
            { "ru-Cyrl": { _desired: "az-Latn", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "bn-Beng", _distance: "10", _oneway: "true" } },
            { "zh-Hans": { _desired: "bo-Tibt", _distance: "10", _oneway: "true" } },
            { "ru-Cyrl": { _desired: "hy-Armn", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ka-Geor", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "km-Khmr", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "kn-Knda", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "lo-Laoo", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ml-Mlym", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "my-Mymr", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ne-Deva", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "or-Orya", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "pa-Guru", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ps-Arab", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "sd-Arab", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "si-Sinh", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ta-Taml", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "te-Telu", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ti-Ethi", _distance: "10", _oneway: "true" } },
            { "ru-Cyrl": { _desired: "tk-Latn", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "ur-Arab", _distance: "10", _oneway: "true" } },
            { "ru-Cyrl": { _desired: "uz-Latn", _distance: "10", _oneway: "true" } },
            { "en-Latn": { _desired: "yi-Hebr", _distance: "10", _oneway: "true" } },
            { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
            { "zh-Hans": { _desired: "za-Latn", _distance: "10", _oneway: "true" } },
            { "zh-Hans": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } },
            { "zh-Hant": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } },
            { "ar-Arab": { _desired: "ar-Latn", _distance: "20", _oneway: "true" } },
            { "bn-Beng": { _desired: "bn-Latn", _distance: "20", _oneway: "true" } },
            { "gu-Gujr": { _desired: "gu-Latn", _distance: "20", _oneway: "true" } },
            { "hi-Deva": { _desired: "hi-Latn", _distance: "20", _oneway: "true" } },
            { "kn-Knda": { _desired: "kn-Latn", _distance: "20", _oneway: "true" } },
            { "ml-Mlym": { _desired: "ml-Latn", _distance: "20", _oneway: "true" } },
            { "mr-Deva": { _desired: "mr-Latn", _distance: "20", _oneway: "true" } },
            { "ta-Taml": { _desired: "ta-Latn", _distance: "20", _oneway: "true" } },
            { "te-Telu": { _desired: "te-Latn", _distance: "20", _oneway: "true" } },
            { "zh-Hans": { _desired: "zh-Latn", _distance: "20", _oneway: "true" } },
            { "ja-Jpan": { _desired: "ja-Latn", _distance: "5", _oneway: "true" } },
            { "ja-Jpan": { _desired: "ja-Hani", _distance: "5", _oneway: "true" } },
            { "ja-Jpan": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } },
            { "ja-Jpan": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } },
            { "ja-Jpan": { _desired: "ja-Hrkt", _distance: "5", _oneway: "true" } },
            { "ja-Hrkt": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } },
            { "ja-Hrkt": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } },
            { "ko-Kore": { _desired: "ko-Hani", _distance: "5", _oneway: "true" } },
            { "ko-Kore": { _desired: "ko-Hang", _distance: "5", _oneway: "true" } },
            { "ko-Kore": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } },
            { "ko-Hang": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } },
            { "*-*": { _desired: "*-*", _distance: "50" } },
            { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } },
            { "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" } },
            { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
            { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } },
            { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } },
            { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } },
            { "en-*-*": { _desired: "en-*-*", _distance: "5" } },
            { "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" } },
            { "es-*-$!americas": { _desired: "es-*-$!americas", _distance: "4" } },
            { "es-*-*": { _desired: "es-*-*", _distance: "5" } },
            { "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" } },
            { "pt-*-$!americas": { _desired: "pt-*-$!americas", _distance: "4" } },
            { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
            { "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" } },
            { "zh-Hant-$!cnsar": { _desired: "zh-Hant-$!cnsar", _distance: "4" } },
            { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } },
            { "*-*-*": { _desired: "*-*-*", _distance: "4" } },
        ],
    },
    e0 = {
        "001": [
            "001",
            "001-status-grouping",
            "002",
            "005",
            "009",
            "011",
            "013",
            "014",
            "015",
            "017",
            "018",
            "019",
            "021",
            "029",
            "030",
            "034",
            "035",
            "039",
            "053",
            "054",
            "057",
            "061",
            "142",
            "143",
            "145",
            "150",
            "151",
            "154",
            "155",
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CP",
            "CQ",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DG",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EA",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "EU",
            "EZ",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HM",
            "HN",
            "HR",
            "HT",
            "HU",
            "IC",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "QO",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "UN",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
        ],
        "002": [
            "002",
            "002-status-grouping",
            "011",
            "014",
            "015",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "DZ",
            "EA",
            "EG",
            "EH",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IC",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "LY",
            "MA",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SD",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TN",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
        ],
        "003": [
            "003",
            "013",
            "021",
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BM",
            "BQ",
            "BS",
            "BZ",
            "CA",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GL",
            "GP",
            "GT",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PM",
            "PR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "VC",
            "VG",
            "VI",
        ],
        "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"],
        "009": [
            "009",
            "053",
            "054",
            "057",
            "061",
            "AC",
            "AQ",
            "AS",
            "AU",
            "CC",
            "CK",
            "CP",
            "CX",
            "DG",
            "FJ",
            "FM",
            "GU",
            "HM",
            "KI",
            "MH",
            "MP",
            "NC",
            "NF",
            "NR",
            "NU",
            "NZ",
            "PF",
            "PG",
            "PN",
            "PW",
            "QO",
            "SB",
            "TA",
            "TK",
            "TO",
            "TV",
            "UM",
            "VU",
            "WF",
            "WS",
        ],
        "011": [
            "011",
            "BF",
            "BJ",
            "CI",
            "CV",
            "GH",
            "GM",
            "GN",
            "GW",
            "LR",
            "ML",
            "MR",
            "NE",
            "NG",
            "SH",
            "SL",
            "SN",
            "TG",
        ],
        "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
        "014": [
            "014",
            "BI",
            "DJ",
            "ER",
            "ET",
            "IO",
            "KE",
            "KM",
            "MG",
            "MU",
            "MW",
            "MZ",
            "RE",
            "RW",
            "SC",
            "SO",
            "SS",
            "TF",
            "TZ",
            "UG",
            "YT",
            "ZM",
            "ZW",
        ],
        "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
        "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
        "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
        "019": [
            "003",
            "005",
            "013",
            "019",
            "019-status-grouping",
            "021",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BM",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CA",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GL",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PM",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
        ],
        "021": ["021", "BM", "CA", "GL", "PM", "US"],
        "029": [
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BQ",
            "BS",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GP",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
        ],
        "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
        "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
        "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"],
        "039": [
            "039",
            "AD",
            "AL",
            "BA",
            "ES",
            "GI",
            "GR",
            "HR",
            "IT",
            "ME",
            "MK",
            "MT",
            "PT",
            "RS",
            "SI",
            "SM",
            "VA",
            "XK",
        ],
        "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
        "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
        "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
        "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"],
        142: [
            "030",
            "034",
            "035",
            "142",
            "143",
            "145",
            "AE",
            "AF",
            "AM",
            "AZ",
            "BD",
            "BH",
            "BN",
            "BT",
            "CN",
            "CY",
            "GE",
            "HK",
            "ID",
            "IL",
            "IN",
            "IQ",
            "IR",
            "JO",
            "JP",
            "KG",
            "KH",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LK",
            "MM",
            "MN",
            "MO",
            "MV",
            "MY",
            "NP",
            "OM",
            "PH",
            "PK",
            "PS",
            "QA",
            "SA",
            "SG",
            "SY",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TR",
            "TW",
            "UZ",
            "VN",
            "YE",
        ],
        143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
        145: [
            "145",
            "AE",
            "AM",
            "AZ",
            "BH",
            "CY",
            "GE",
            "IL",
            "IQ",
            "JO",
            "KW",
            "LB",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TR",
            "YE",
        ],
        150: [
            "039",
            "150",
            "151",
            "154",
            "155",
            "AD",
            "AL",
            "AT",
            "AX",
            "BA",
            "BE",
            "BG",
            "BY",
            "CH",
            "CQ",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FO",
            "FR",
            "GB",
            "GG",
            "GI",
            "GR",
            "HR",
            "HU",
            "IE",
            "IM",
            "IS",
            "IT",
            "JE",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "RS",
            "RU",
            "SE",
            "SI",
            "SJ",
            "SK",
            "SM",
            "UA",
            "VA",
            "XK",
        ],
        151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"],
        154: [
            "154",
            "AX",
            "CQ",
            "DK",
            "EE",
            "FI",
            "FO",
            "GB",
            "GG",
            "IE",
            "IM",
            "IS",
            "JE",
            "LT",
            "LV",
            "NO",
            "SE",
            "SJ",
        ],
        155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
        202: [
            "011",
            "014",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
        ],
        419: [
            "005",
            "013",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
        ],
        EU: [
            "AT",
            "BE",
            "BG",
            "CY",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "EU",
            "FI",
            "FR",
            "GR",
            "HR",
            "HU",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SE",
            "SI",
            "SK",
        ],
        EZ: [
            "AT",
            "BE",
            "CY",
            "DE",
            "EE",
            "ES",
            "EZ",
            "FI",
            "FR",
            "GR",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PT",
            "SI",
            "SK",
        ],
        QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
        UN: [
            "AD",
            "AE",
            "AF",
            "AG",
            "AL",
            "AM",
            "AO",
            "AR",
            "AT",
            "AU",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BN",
            "BO",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FM",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GR",
            "GT",
            "GW",
            "GY",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MR",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PG",
            "PH",
            "PK",
            "PL",
            "PT",
            "PW",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SI",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SY",
            "SZ",
            "TD",
            "TG",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TZ",
            "UA",
            "UG",
            "UN",
            "US",
            "UY",
            "UZ",
            "VC",
            "VE",
            "VN",
            "VU",
            "WS",
            "YE",
            "ZA",
            "ZM",
            "ZW",
        ],
    },
    e1 = /-u(?:-[0-9a-z]{2,8})+/gi;
function e2(e, t, n = Error) {
    if (!e) throw new n(t);
}
function e3(e, t, n) {
    let [i, r, s] = t.split("-"),
        a = !0;
    if (s && "$" === s[0]) {
        let t = "!" !== s[1],
            i = (t ? n[s.slice(1)] : n[s.slice(2)]).map((e) => e0[e] || [e]).reduce((e, t) => [...e, ...t], []);
        a &&= i.indexOf(e.region || "") > -1 == t;
    } else a &&= !e.region || "*" === s || s === e.region;
    return (a &&= !e.script || "*" === r || r === e.script), (a &&= !e.language || "*" === i || i === e.language);
}
function e6(e) {
    return [e.language, e.script, e.region].filter(Boolean).join("-");
}
function e4(e, t, n) {
    for (let i of n.matches) {
        let r = e3(e, i.desired, n.matchVariables) && e3(t, i.supported, n.matchVariables);
        if ((i.oneway || r || (r = e3(e, i.supported, n.matchVariables) && e3(t, i.desired, n.matchVariables)), r)) {
            let r = 10 * i.distance;
            if (n.paradigmLocales.indexOf(e6(e)) > -1 != n.paradigmLocales.indexOf(e6(t)) > -1) return r - 1;
            return r;
        }
    }
    throw Error("No matching distance found");
}
let e5 = eG(
        function (e, t) {
            let n = new Intl.Locale(e).maximize(),
                r = new Intl.Locale(t).maximize(),
                s = { language: n.language, script: n.script || "", region: n.region || "" },
                a = { language: r.language, script: r.script || "", region: r.region || "" },
                o = 0,
                l = (function () {
                    if (!i) {
                        let e = eJ["written-new"]["0"]?.paradigmLocales?._locales.split(" "),
                            t = eJ["written-new"].slice(1, 5);
                        i = {
                            matches: eJ["written-new"].slice(5).map((e) => {
                                let t = Object.keys(e)[0],
                                    n = e[t];
                                return {
                                    supported: t,
                                    desired: n._desired,
                                    distance: +n._distance,
                                    oneway: "true" === n.oneway,
                                };
                            }, {}),
                            matchVariables: t.reduce((e, t) => {
                                let n = Object.keys(t)[0],
                                    i = t[n];
                                return (e[n.slice(1)] = i._value.split("+")), e;
                            }, {}),
                            paradigmLocales: [
                                ...e,
                                ...e.map((e) => new Intl.Locale(e.replace(/_/g, "-")).maximize().toString()),
                            ],
                        };
                    }
                    return i;
                })();
            return (
                s.language !== a.language &&
                    (o += e4(
                        { language: n.language, script: "", region: "" },
                        { language: r.language, script: "", region: "" },
                        l,
                    )),
                s.script !== a.script &&
                    (o += e4(
                        { language: n.language, script: s.script, region: "" },
                        { language: r.language, script: a.script, region: "" },
                        l,
                    )),
                s.region !== a.region && (o += e4(s, a, l)),
                o
            );
        },
        { serializer: (e) => `${e[0]}|${e[1]}` },
    ),
    e7 = new WeakMap();
function e8(e) {
    return Intl.getCanonicalLocales(e)[0];
}
let e9 = [
        "years",
        "months",
        "weeks",
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds",
        "microseconds",
        "nanoseconds",
    ],
    te = [
        {
            valueField: "years",
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            numberFormatUnit: "year",
        },
        {
            valueField: "months",
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            numberFormatUnit: "month",
        },
        {
            valueField: "weeks",
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            numberFormatUnit: "week",
        },
        { valueField: "days", styleSlot: "days", displaySlot: "daysDisplay", unit: "days", numberFormatUnit: "day" },
        {
            valueField: "hours",
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            numberFormatUnit: "hour",
        },
        {
            valueField: "minutes",
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            numberFormatUnit: "minute",
        },
        {
            valueField: "seconds",
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            numberFormatUnit: "second",
        },
        {
            valueField: "milliseconds",
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            numberFormatUnit: "millisecond",
        },
        {
            valueField: "microseconds",
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            numberFormatUnit: "microsecond",
        },
        {
            valueField: "nanoseconds",
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            numberFormatUnit: "nanosecond",
        },
    ],
    tt = new WeakMap();
function tn(e) {
    let t = tt.get(e);
    return t || ((t = Object.create(null)), tt.set(e, t)), t;
}
function ti(e, t) {
    let n = [],
        i = !1,
        r = !1,
        s = tn(e),
        a = s.dataLocale,
        o = tc.localeData[a];
    if (!o) throw TypeError("Invalid locale");
    let l = s.numberingSystem,
        u = o.digitalFormat[l];
    for (let e = 0; e < te.length && !i; e++) {
        let a = te[e],
            o = t[a.valueField],
            l = s[a.styleSlot],
            c = s[a.displaySlot],
            { unit: d, numberFormatUnit: _ } = a,
            f = Object.create(null);
        ("seconds" === d || "milliseconds" === d || "microseconds" === d) &&
            "numeric" === ("seconds" === d ? s.milliseconds : "milliseconds" === d ? s.microseconds : s.nanoseconds) &&
            ("seconds" === d
                ? (o += t.milliseconds / 1e3 + t.microseconds / 1e6 + t.nanoseconds / 1e9)
                : "milliseconds" === d
                  ? (o += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                  : (o += t.nanoseconds / 1e3),
            void 0 === s.fractionalDigits
                ? ((f.maximumFractionDigits = 9), (f.minimumFractionDigits = 0))
                : ((f.maximumFractionDigits = s.fractionalDigits), (f.minimumFractionDigits = s.fractionalDigits)),
            (f.roundingMode = "trunc"),
            (i = !0));
        if (0 !== o || "auto" !== c) {
            let e;
            (f.numberingSystem = s.numberingSystem),
                "2-digit" === l && (f.minimumIntegerDigits = 2),
                "2-digit" !== l && "numeric" !== l && ((f.style = "unit"), (f.unit = _), (f.unitDisplay = l));
            let t = eK(s.locale, f);
            r ? (e = n[n.length - 1]).push({ type: "literal", value: u }) : (e = []),
                t.formatToParts(o).forEach(({ type: t, value: n }) => {
                    e.push({ type: t, value: n, unit: _ });
                }),
                r || (("2-digit" === l || "numeric" === l) && (r = !0), n.push(e));
        } else r = !1;
    }
    let c = Object.create(null);
    c.type = "unit";
    let d = s.style;
    "digital" === d && (d = "short"), (c.style = d);
    let _ = ez(s.locale, c),
        f = [];
    for (let e of n) {
        let t = "";
        for (let { value: n } of e) t += n;
        f.push(t);
    }
    let h = _.formatToParts(f),
        p = 0,
        E = n.length,
        m = [];
    for (let { type: e, value: t } of h)
        if ("element" === e) {
            for (let e of (eW(p < E, "Index out of bounds"), n[p])) m.push(e);
            p++;
        } else eW("literal" === e, "Type must be literal"), m.push({ type: "literal", value: t });
    return m;
}
function tr(e) {
    let t = (function e(t) {
        if ("number" == typeof t) return new eU(t);
        if ("bigint" == typeof t) return new eU(t.toString());
        if ((eW("symbol" != typeof t, "Symbol is not supported", TypeError), void 0 === t)) return new eU(NaN);
        if (null === t || 0 === t) return ek;
        if (!0 === t) return new eU(1);
        if ("string" == typeof t)
            try {
                return new eU(t);
            } catch {
                return new eU(NaN);
            }
        eW("object" == typeof t, "object expected", TypeError);
        let n = (function (e, t) {
            if ("object" == typeof e && null != e) {
                let n,
                    i = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                if (void 0 !== i) {
                    void 0 === t
                        ? (n = "default")
                        : "string" === t
                          ? (n = "string")
                          : (eW("number" === t, 'preferredType must be "string" or "number"'), (n = "number"));
                    let r = i.call(e, n);
                    if ("object" != typeof r) return r;
                    throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let n of (void 0 === t && (t = "number"),
                "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                    let t = e[n];
                    if (eq(t)) {
                        let n = t.call(e);
                        if ("object" != typeof n) return n;
                    }
                }
                throw TypeError("Cannot convert object to primitive value");
            }
            return e;
        })(t, "number");
        return eW("object" != typeof n, "object expected", TypeError), e(n);
    })(e);
    return eW(t.isInteger(), `${e} is not an integer`), t.toNumber();
}
function ts(e) {
    if ("object" != typeof e) {
        if ("string" == typeof e) throw RangeError("Invalid duration format");
        throw TypeError("Invalid duration");
    }
    let t = {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0,
    };
    if (
        (void 0 !== e.days && (t.days = tr(e.days)),
        void 0 !== e.hours && (t.hours = tr(e.hours)),
        void 0 !== e.microseconds && (t.microseconds = tr(e.microseconds)),
        void 0 !== e.milliseconds && (t.milliseconds = tr(e.milliseconds)),
        void 0 !== e.minutes && (t.minutes = tr(e.minutes)),
        void 0 !== e.months && (t.months = tr(e.months)),
        void 0 !== e.nanoseconds && (t.nanoseconds = tr(e.nanoseconds)),
        void 0 !== e.seconds && (t.seconds = tr(e.seconds)),
        void 0 !== e.weeks && (t.weeks = tr(e.weeks)),
        void 0 !== e.years && (t.years = tr(e.years)),
        void 0 === e.years &&
            void 0 === e.months &&
            void 0 === e.weeks &&
            void 0 === e.days &&
            void 0 === e.hours &&
            void 0 === e.minutes &&
            void 0 === e.seconds &&
            void 0 === e.milliseconds &&
            void 0 === e.microseconds &&
            void 0 === e.nanoseconds)
    )
        throw TypeError("Invalid duration format");
    if (
        !(function (e) {
            let t = (function (e) {
                for (let t of e9) {
                    if (e[t] < 0) return -1;
                    if (e[t] > 0) return 1;
                }
                return 0;
            })(e);
            for (let n of e9) {
                let i = e[n];
                if ((eW(isFinite(Number(i)), `${n} is not finite`), (i < 0 && t > 0) || (i > 0 && t < 0))) return !1;
            }
            return !0;
        })(t)
    )
        throw RangeError("Invalid duration format");
    return t;
}
let ta = [
        "adlm",
        "ahom",
        "arab",
        "arabext",
        "armn",
        "armnlow",
        "bali",
        "beng",
        "bhks",
        "brah",
        "cakm",
        "cham",
        "cyrl",
        "deva",
        "diak",
        "ethi",
        "fullwide",
        "gara",
        "geor",
        "gong",
        "gonm",
        "grek",
        "greklow",
        "gujr",
        "gukh",
        "guru",
        "hanidays",
        "hanidec",
        "hans",
        "hansfin",
        "hant",
        "hantfin",
        "hebr",
        "hmng",
        "hmnp",
        "java",
        "jpan",
        "jpanfin",
        "jpanyear",
        "kali",
        "kawi",
        "khmr",
        "knda",
        "krai",
        "lana",
        "lanatham",
        "laoo",
        "latn",
        "lepc",
        "limb",
        "mathbold",
        "mathdbl",
        "mathmono",
        "mathsanb",
        "mathsans",
        "mlym",
        "modi",
        "mong",
        "mroo",
        "mtei",
        "mymr",
        "mymrepka",
        "mymrpao",
        "mymrshan",
        "mymrtlng",
        "nagm",
        "newa",
        "nkoo",
        "olck",
        "onao",
        "orya",
        "osma",
        "outlined",
        "rohg",
        "roman",
        "romanlow",
        "saur",
        "segment",
        "shrd",
        "sind",
        "sinh",
        "sora",
        "sund",
        "sunu",
        "takr",
        "talu",
        "taml",
        "tamldec",
        "telu",
        "thai",
        "tibt",
        "tirh",
        "tnsa",
        "tols",
        "vaii",
        "wara",
        "wcho",
    ],
    to = {
        aa: { nu: ["latn"] },
        "aa-DJ": { nu: ["latn"] },
        "aa-ER": { nu: ["latn"] },
        ab: { nu: ["latn"] },
        af: { nu: ["latn"] },
        "af-NA": { nu: ["latn"] },
        agq: { nu: ["latn"] },
        ak: { nu: ["latn"] },
        am: { nu: ["latn"] },
        an: { nu: ["latn"] },
        ann: { nu: ["latn"] },
        apc: { nu: ["latn"] },
        ar: { nu: ["latn", "latn"] },
        "ar-AE": { nu: ["latn", "latn"] },
        "ar-BH": { nu: ["arab", "latn"] },
        "ar-DJ": { nu: ["arab", "latn"] },
        "ar-DZ": { nu: ["latn", "latn"] },
        "ar-EG": { nu: ["arab", "latn"] },
        "ar-EH": { nu: ["latn", "latn"] },
        "ar-ER": { nu: ["arab", "latn"] },
        "ar-IL": { nu: ["arab", "latn"] },
        "ar-IQ": { nu: ["arab", "latn"] },
        "ar-JO": { nu: ["arab", "latn"] },
        "ar-KM": { nu: ["arab", "latn"] },
        "ar-KW": { nu: ["arab", "latn"] },
        "ar-LB": { nu: ["arab", "latn"] },
        "ar-LY": { nu: ["latn", "latn"] },
        "ar-MA": { nu: ["latn", "latn"] },
        "ar-MR": { nu: ["arab", "latn"] },
        "ar-OM": { nu: ["arab", "latn"] },
        "ar-PS": { nu: ["arab", "latn"] },
        "ar-QA": { nu: ["arab", "latn"] },
        "ar-SA": { nu: ["arab", "latn"] },
        "ar-SD": { nu: ["arab", "latn"] },
        "ar-SO": { nu: ["arab", "latn"] },
        "ar-SS": { nu: ["arab", "latn"] },
        "ar-SY": { nu: ["arab", "latn"] },
        "ar-TD": { nu: ["arab", "latn"] },
        "ar-TN": { nu: ["latn", "latn"] },
        "ar-YE": { nu: ["arab", "latn"] },
        arn: { nu: ["latn"] },
        as: { nu: ["beng"] },
        asa: { nu: ["latn"] },
        ast: { nu: ["latn"] },
        az: { nu: ["latn"] },
        "az-Arab": { nu: ["arabext"] },
        "az-Arab-IQ": { nu: ["arabext"] },
        "az-Arab-TR": { nu: ["arabext"] },
        "az-Cyrl": { nu: ["latn"] },
        "az-Latn": { nu: ["latn"] },
        ba: { nu: ["latn"] },
        bal: { nu: ["latn"] },
        "bal-Arab": { nu: ["latn"] },
        "bal-Latn": { nu: ["latn"] },
        bas: { nu: ["latn"] },
        be: { nu: ["latn"] },
        "be-tarask": { nu: ["latn"] },
        bem: { nu: ["latn"] },
        bew: { nu: ["latn"] },
        bez: { nu: ["latn"] },
        bg: { nu: ["latn"] },
        bgc: { nu: ["deva"] },
        bgn: { nu: ["arabext"] },
        "bgn-AE": { nu: ["arabext"] },
        "bgn-AF": { nu: ["arabext"] },
        "bgn-IR": { nu: ["arabext"] },
        "bgn-OM": { nu: ["arabext"] },
        bho: { nu: ["deva"] },
        blo: { nu: ["latn"] },
        blt: { nu: ["latn"] },
        bm: { nu: ["latn"] },
        "bm-Nkoo": { nu: ["latn"] },
        bn: { nu: ["beng"] },
        "bn-IN": { nu: ["beng"] },
        bo: { nu: ["latn"] },
        "bo-IN": { nu: ["latn"] },
        bqi: { nu: ["latn"] },
        br: { nu: ["latn"] },
        brx: { nu: ["latn"] },
        bs: { nu: ["latn"] },
        "bs-Cyrl": { nu: ["latn"] },
        "bs-Latn": { nu: ["latn"] },
        bss: { nu: ["latn"] },
        bua: { nu: ["latn"] },
        byn: { nu: ["latn"] },
        ca: { nu: ["latn"] },
        "ca-AD": { nu: ["latn"] },
        "ca-ES-valencia": { nu: ["latn"] },
        "ca-FR": { nu: ["latn"] },
        "ca-IT": { nu: ["latn"] },
        cad: { nu: ["latn"] },
        cch: { nu: ["latn"] },
        ccp: { nu: ["cakm"] },
        "ccp-IN": { nu: ["cakm"] },
        ce: { nu: ["latn"] },
        ceb: { nu: ["latn"] },
        cgg: { nu: ["latn"] },
        cho: { nu: ["latn"] },
        chr: { nu: ["latn"] },
        cic: { nu: ["latn"] },
        ckb: { nu: ["arab"] },
        "ckb-IR": { nu: ["arab"] },
        co: { nu: ["latn"] },
        cop: { nu: ["latn"] },
        cs: { nu: ["latn"] },
        csw: { nu: ["latn"] },
        cu: { nu: ["latn"] },
        cv: { nu: ["latn"] },
        cy: { nu: ["latn"] },
        da: { nu: ["latn"], separator: { latn: "." } },
        "da-GL": { nu: ["latn"], separator: { latn: "." } },
        dav: { nu: ["latn"] },
        de: { nu: ["latn"] },
        "de-AT": { nu: ["latn"] },
        "de-BE": { nu: ["latn"] },
        "de-CH": { nu: ["latn"] },
        "de-IT": { nu: ["latn"] },
        "de-LI": { nu: ["latn"] },
        "de-LU": { nu: ["latn"] },
        dje: { nu: ["latn"] },
        doi: { nu: ["latn"] },
        dsb: { nu: ["latn"] },
        dua: { nu: ["latn"] },
        dv: { nu: ["latn"] },
        dyo: { nu: ["latn"] },
        dz: { nu: ["tibt"] },
        ebu: { nu: ["latn"] },
        ee: { nu: ["latn"] },
        "ee-TG": { nu: ["latn"] },
        el: { nu: ["latn"] },
        "el-CY": { nu: ["latn"] },
        "el-polyton": { nu: ["latn"] },
        en: { nu: ["latn"] },
        "en-001": { nu: ["latn"] },
        "en-150": { nu: ["latn"] },
        "en-AE": { nu: ["latn"] },
        "en-AG": { nu: ["latn"] },
        "en-AI": { nu: ["latn"] },
        "en-AS": { nu: ["latn"] },
        "en-AT": { nu: ["latn"] },
        "en-AU": { nu: ["latn"] },
        "en-BB": { nu: ["latn"] },
        "en-BE": { nu: ["latn"] },
        "en-BI": { nu: ["latn"] },
        "en-BM": { nu: ["latn"] },
        "en-BS": { nu: ["latn"] },
        "en-BW": { nu: ["latn"] },
        "en-BZ": { nu: ["latn"] },
        "en-CA": { nu: ["latn"] },
        "en-CC": { nu: ["latn"] },
        "en-CH": { nu: ["latn"] },
        "en-CK": { nu: ["latn"] },
        "en-CM": { nu: ["latn"] },
        "en-CX": { nu: ["latn"] },
        "en-CY": { nu: ["latn"] },
        "en-CZ": { nu: ["latn"] },
        "en-DE": { nu: ["latn"] },
        "en-DG": { nu: ["latn"] },
        "en-DK": { nu: ["latn"], separator: { latn: "." } },
        "en-DM": { nu: ["latn"] },
        "en-Dsrt": { nu: ["latn"] },
        "en-EE": { nu: ["latn"] },
        "en-ER": { nu: ["latn"] },
        "en-ES": { nu: ["latn"] },
        "en-FI": { nu: ["latn"], separator: { latn: "." } },
        "en-FJ": { nu: ["latn"] },
        "en-FK": { nu: ["latn"] },
        "en-FM": { nu: ["latn"] },
        "en-FR": { nu: ["latn"] },
        "en-GB": { nu: ["latn"] },
        "en-GD": { nu: ["latn"] },
        "en-GE": { nu: ["latn"] },
        "en-GG": { nu: ["latn"] },
        "en-GH": { nu: ["latn"] },
        "en-GI": { nu: ["latn"] },
        "en-GM": { nu: ["latn"] },
        "en-GS": { nu: ["latn"] },
        "en-GU": { nu: ["latn"] },
        "en-GY": { nu: ["latn"] },
        "en-HK": { nu: ["latn"] },
        "en-HU": { nu: ["latn"] },
        "en-ID": { nu: ["latn"] },
        "en-IE": { nu: ["latn"] },
        "en-IL": { nu: ["latn"] },
        "en-IM": { nu: ["latn"] },
        "en-IN": { nu: ["latn"] },
        "en-IO": { nu: ["latn"] },
        "en-IT": { nu: ["latn"] },
        "en-JE": { nu: ["latn"] },
        "en-JM": { nu: ["latn"] },
        "en-JP": { nu: ["latn"] },
        "en-KE": { nu: ["latn"] },
        "en-KI": { nu: ["latn"] },
        "en-KN": { nu: ["latn"] },
        "en-KY": { nu: ["latn"] },
        "en-LC": { nu: ["latn"] },
        "en-LR": { nu: ["latn"] },
        "en-LS": { nu: ["latn"] },
        "en-LT": { nu: ["latn"] },
        "en-LV": { nu: ["latn"] },
        "en-MG": { nu: ["latn"] },
        "en-MH": { nu: ["latn"] },
        "en-MO": { nu: ["latn"] },
        "en-MP": { nu: ["latn"] },
        "en-MS": { nu: ["latn"] },
        "en-MT": { nu: ["latn"] },
        "en-MU": { nu: ["latn"] },
        "en-MV": { nu: ["latn"] },
        "en-MW": { nu: ["latn"] },
        "en-MY": { nu: ["latn"] },
        "en-NA": { nu: ["latn"] },
        "en-NF": { nu: ["latn"] },
        "en-NG": { nu: ["latn"] },
        "en-NL": { nu: ["latn"] },
        "en-NO": { nu: ["latn"] },
        "en-NR": { nu: ["latn"] },
        "en-NU": { nu: ["latn"] },
        "en-NZ": { nu: ["latn"] },
        "en-PG": { nu: ["latn"] },
        "en-PH": { nu: ["latn"] },
        "en-PK": { nu: ["latn"] },
        "en-PL": { nu: ["latn"] },
        "en-PN": { nu: ["latn"] },
        "en-PR": { nu: ["latn"] },
        "en-PT": { nu: ["latn"] },
        "en-PW": { nu: ["latn"] },
        "en-RO": { nu: ["latn"] },
        "en-RW": { nu: ["latn"] },
        "en-SB": { nu: ["latn"] },
        "en-SC": { nu: ["latn"] },
        "en-SD": { nu: ["latn"] },
        "en-SE": { nu: ["latn"] },
        "en-SG": { nu: ["latn"] },
        "en-SH": { nu: ["latn"] },
        "en-SI": { nu: ["latn"] },
        "en-SK": { nu: ["latn"] },
        "en-SL": { nu: ["latn"] },
        "en-SS": { nu: ["latn"] },
        "en-SX": { nu: ["latn"] },
        "en-SZ": { nu: ["latn"] },
        "en-Shaw": { nu: ["latn"] },
        "en-TC": { nu: ["latn"] },
        "en-TK": { nu: ["latn"] },
        "en-TO": { nu: ["latn"] },
        "en-TT": { nu: ["latn"] },
        "en-TV": { nu: ["latn"] },
        "en-TZ": { nu: ["latn"] },
        "en-UA": { nu: ["latn"] },
        "en-UG": { nu: ["latn"] },
        "en-UM": { nu: ["latn"] },
        "en-VC": { nu: ["latn"] },
        "en-VG": { nu: ["latn"] },
        "en-VI": { nu: ["latn"] },
        "en-VU": { nu: ["latn"] },
        "en-WS": { nu: ["latn"] },
        "en-ZA": { nu: ["latn"] },
        "en-ZM": { nu: ["latn"] },
        "en-ZW": { nu: ["latn"] },
        eo: { nu: ["latn"] },
        es: { nu: ["latn"] },
        "es-419": { nu: ["latn"] },
        "es-AR": { nu: ["latn"] },
        "es-BO": { nu: ["latn"] },
        "es-BR": { nu: ["latn"] },
        "es-BZ": { nu: ["latn"] },
        "es-CL": { nu: ["latn"] },
        "es-CO": { nu: ["latn"] },
        "es-CR": { nu: ["latn"] },
        "es-CU": { nu: ["latn"] },
        "es-DO": { nu: ["latn"] },
        "es-EA": { nu: ["latn"] },
        "es-EC": { nu: ["latn"] },
        "es-GQ": { nu: ["latn"] },
        "es-GT": { nu: ["latn"] },
        "es-HN": { nu: ["latn"] },
        "es-IC": { nu: ["latn"] },
        "es-MX": { nu: ["latn"] },
        "es-NI": { nu: ["latn"] },
        "es-PA": { nu: ["latn"] },
        "es-PE": { nu: ["latn"] },
        "es-PH": { nu: ["latn"] },
        "es-PR": { nu: ["latn"] },
        "es-PY": { nu: ["latn"] },
        "es-SV": { nu: ["latn"] },
        "es-US": { nu: ["latn"] },
        "es-UY": { nu: ["latn"] },
        "es-VE": { nu: ["latn"] },
        et: { nu: ["latn"] },
        eu: { nu: ["latn"] },
        ewo: { nu: ["latn"] },
        fa: { nu: ["arabext"] },
        "fa-AF": { nu: ["arabext"] },
        ff: { nu: ["latn"] },
        "ff-Adlm": { nu: ["adlm"] },
        "ff-Adlm-BF": { nu: ["adlm"] },
        "ff-Adlm-CM": { nu: ["adlm"] },
        "ff-Adlm-GH": { nu: ["adlm"] },
        "ff-Adlm-GM": { nu: ["adlm"] },
        "ff-Adlm-GW": { nu: ["adlm"] },
        "ff-Adlm-LR": { nu: ["adlm"] },
        "ff-Adlm-MR": { nu: ["adlm"] },
        "ff-Adlm-NE": { nu: ["adlm"] },
        "ff-Adlm-NG": { nu: ["adlm"] },
        "ff-Adlm-SL": { nu: ["adlm"] },
        "ff-Adlm-SN": { nu: ["adlm"] },
        "ff-Latn": { nu: ["latn"] },
        "ff-Latn-BF": { nu: ["latn"] },
        "ff-Latn-CM": { nu: ["latn"] },
        "ff-Latn-GH": { nu: ["latn"] },
        "ff-Latn-GM": { nu: ["latn"] },
        "ff-Latn-GN": { nu: ["latn"] },
        "ff-Latn-GW": { nu: ["latn"] },
        "ff-Latn-LR": { nu: ["latn"] },
        "ff-Latn-MR": { nu: ["latn"] },
        "ff-Latn-NE": { nu: ["latn"] },
        "ff-Latn-NG": { nu: ["latn"] },
        "ff-Latn-SL": { nu: ["latn"] },
        fi: { nu: ["latn"], separator: { latn: "." } },
        fil: { nu: ["latn"] },
        fo: { nu: ["latn"] },
        "fo-DK": { nu: ["latn"] },
        fr: { nu: ["latn"] },
        "fr-BE": { nu: ["latn"] },
        "fr-BF": { nu: ["latn"] },
        "fr-BI": { nu: ["latn"] },
        "fr-BJ": { nu: ["latn"] },
        "fr-BL": { nu: ["latn"] },
        "fr-CA": { nu: ["latn"] },
        "fr-CD": { nu: ["latn"] },
        "fr-CF": { nu: ["latn"] },
        "fr-CG": { nu: ["latn"] },
        "fr-CH": { nu: ["latn"] },
        "fr-CI": { nu: ["latn"] },
        "fr-CM": { nu: ["latn"] },
        "fr-DJ": { nu: ["latn"] },
        "fr-DZ": { nu: ["latn"] },
        "fr-GA": { nu: ["latn"] },
        "fr-GF": { nu: ["latn"] },
        "fr-GN": { nu: ["latn"] },
        "fr-GP": { nu: ["latn"] },
        "fr-GQ": { nu: ["latn"] },
        "fr-HT": { nu: ["latn"] },
        "fr-KM": { nu: ["latn"] },
        "fr-LU": { nu: ["latn"] },
        "fr-MA": { nu: ["latn"] },
        "fr-MC": { nu: ["latn"] },
        "fr-MF": { nu: ["latn"] },
        "fr-MG": { nu: ["latn"] },
        "fr-ML": { nu: ["latn"] },
        "fr-MQ": { nu: ["latn"] },
        "fr-MR": { nu: ["latn"] },
        "fr-MU": { nu: ["latn"] },
        "fr-NC": { nu: ["latn"] },
        "fr-NE": { nu: ["latn"] },
        "fr-PF": { nu: ["latn"] },
        "fr-PM": { nu: ["latn"] },
        "fr-RE": { nu: ["latn"] },
        "fr-RW": { nu: ["latn"] },
        "fr-SC": { nu: ["latn"] },
        "fr-SN": { nu: ["latn"] },
        "fr-SY": { nu: ["latn"] },
        "fr-TD": { nu: ["latn"] },
        "fr-TG": { nu: ["latn"] },
        "fr-TN": { nu: ["latn"] },
        "fr-VU": { nu: ["latn"] },
        "fr-WF": { nu: ["latn"] },
        "fr-YT": { nu: ["latn"] },
        frr: { nu: ["latn"] },
        fur: { nu: ["latn"] },
        fy: { nu: ["latn"] },
        ga: { nu: ["latn"] },
        "ga-GB": { nu: ["latn"] },
        gaa: { nu: ["latn"] },
        gd: { nu: ["latn"] },
        gez: { nu: ["latn"] },
        "gez-ER": { nu: ["latn"] },
        gl: { nu: ["latn"] },
        gn: { nu: ["latn"] },
        gsw: { nu: ["latn"] },
        "gsw-FR": { nu: ["latn"] },
        "gsw-LI": { nu: ["latn"] },
        gu: { nu: ["latn"] },
        guz: { nu: ["latn"] },
        gv: { nu: ["latn"] },
        ha: { nu: ["latn"] },
        "ha-Arab": { nu: ["latn"] },
        "ha-Arab-SD": { nu: ["latn"] },
        "ha-GH": { nu: ["latn"] },
        "ha-NE": { nu: ["latn"] },
        haw: { nu: ["latn"] },
        he: { nu: ["latn"] },
        hi: { nu: ["latn"] },
        "hi-Latn": { nu: ["latn"] },
        hnj: { nu: ["hmnp", "latn"] },
        "hnj-Hmnp": { nu: ["hmnp", "latn"] },
        hr: { nu: ["latn"] },
        "hr-BA": { nu: ["latn"] },
        hsb: { nu: ["latn"] },
        ht: { nu: ["latn"] },
        hu: { nu: ["latn"] },
        hy: { nu: ["latn"] },
        ia: { nu: ["latn"] },
        id: { nu: ["latn"], separator: { latn: "." } },
        ie: { nu: ["latn"] },
        ig: { nu: ["latn"] },
        ii: { nu: ["latn"] },
        io: { nu: ["latn"] },
        is: { nu: ["latn"] },
        it: { nu: ["latn"] },
        "it-CH": { nu: ["latn"] },
        "it-SM": { nu: ["latn"] },
        "it-VA": { nu: ["latn"] },
        iu: { nu: ["latn"] },
        "iu-Latn": { nu: ["latn"] },
        ja: { nu: ["latn"] },
        jbo: { nu: ["latn"] },
        jgo: { nu: ["latn"] },
        jmc: { nu: ["latn"] },
        jv: { nu: ["latn"] },
        ka: { nu: ["latn"] },
        kaa: { nu: ["latn"] },
        "kaa-Cyrl": { nu: ["latn"] },
        "kaa-Latn": { nu: ["latn"] },
        kab: { nu: ["latn"] },
        kaj: { nu: ["latn"] },
        kam: { nu: ["latn"] },
        kcg: { nu: ["latn"] },
        kde: { nu: ["latn"] },
        kea: { nu: ["latn"] },
        kek: { nu: ["latn"] },
        ken: { nu: ["latn"] },
        kgp: { nu: ["latn"] },
        khq: { nu: ["latn"] },
        ki: { nu: ["latn"] },
        kk: { nu: ["latn"] },
        "kk-Arab": { nu: ["latn"] },
        "kk-Cyrl": { nu: ["latn"] },
        "kk-KZ": { nu: ["latn"] },
        kkj: { nu: ["latn"] },
        kl: { nu: ["latn"] },
        kln: { nu: ["latn"] },
        km: { nu: ["latn"] },
        kn: { nu: ["latn"] },
        ko: { nu: ["latn"] },
        "ko-CN": { nu: ["latn"] },
        "ko-KP": { nu: ["latn"] },
        kok: { nu: ["latn"] },
        "kok-Deva": { nu: ["latn"] },
        "kok-Latn": { nu: ["latn"] },
        kpe: { nu: ["latn"] },
        "kpe-GN": { nu: ["latn"] },
        ks: { nu: ["arabext"] },
        "ks-Arab": { nu: ["arabext"] },
        "ks-Deva": { nu: ["latn"] },
        ksb: { nu: ["latn"] },
        ksf: { nu: ["latn"] },
        ksh: { nu: ["latn"] },
        ku: { nu: ["latn"] },
        "ku-Arab": { nu: ["latn"] },
        "ku-Arab-IR": { nu: ["latn"] },
        "ku-Latn": { nu: ["latn"] },
        "ku-Latn-IQ": { nu: ["latn"] },
        "ku-Latn-SY": { nu: ["latn"] },
        "ku-TR": { nu: ["latn"] },
        kw: { nu: ["latn"] },
        kxv: { nu: ["latn"] },
        "kxv-Deva": { nu: ["latn"] },
        "kxv-Latn": { nu: ["latn"] },
        "kxv-Orya": { nu: ["latn"] },
        "kxv-Telu": { nu: ["latn"] },
        ky: { nu: ["latn"] },
        la: { nu: ["latn"] },
        lag: { nu: ["latn"] },
        lb: { nu: ["latn"] },
        lg: { nu: ["latn"] },
        lij: { nu: ["latn"] },
        lkt: { nu: ["latn"] },
        lld: { nu: ["latn"] },
        lmo: { nu: ["latn"] },
        ln: { nu: ["latn"] },
        "ln-AO": { nu: ["latn"] },
        "ln-CF": { nu: ["latn"] },
        "ln-CG": { nu: ["latn"] },
        lo: { nu: ["latn"] },
        lrc: { nu: ["arabext"] },
        "lrc-IQ": { nu: ["arabext"] },
        lt: { nu: ["latn"] },
        ltg: { nu: ["latn"] },
        lu: { nu: ["latn"] },
        luo: { nu: ["latn"] },
        luy: { nu: ["latn"] },
        lv: { nu: ["latn"] },
        lzz: { nu: ["latn"] },
        mai: { nu: ["latn"] },
        mas: { nu: ["latn"] },
        "mas-TZ": { nu: ["latn"] },
        mdf: { nu: ["latn"] },
        mer: { nu: ["latn"] },
        mfe: { nu: ["latn"] },
        mg: { nu: ["latn"] },
        mgh: { nu: ["latn"] },
        mgo: { nu: ["latn"] },
        mhn: { nu: ["latn"] },
        mi: { nu: ["latn"] },
        mic: { nu: ["latn"] },
        mk: { nu: ["latn"] },
        ml: { nu: ["latn"] },
        mn: { nu: ["latn"] },
        "mn-Mong": { nu: ["latn"] },
        "mn-Mong-MN": { nu: ["latn"] },
        mni: { nu: ["beng"] },
        "mni-Beng": { nu: ["beng"] },
        "mni-Mtei": { nu: ["mtei"] },
        moh: { nu: ["latn"] },
        mr: { nu: ["deva"] },
        ms: { nu: ["latn"] },
        "ms-Arab": { nu: ["latn"] },
        "ms-Arab-BN": { nu: ["latn"] },
        "ms-BN": { nu: ["latn"] },
        "ms-ID": { nu: ["latn"], separator: { latn: "." } },
        "ms-SG": { nu: ["latn"] },
        mt: { nu: ["latn"] },
        mua: { nu: ["latn"] },
        mus: { nu: ["latn"] },
        mww: { nu: ["hmnp", "latn"] },
        "mww-Hmnp": { nu: ["hmnp", "latn"] },
        my: { nu: ["mymr"] },
        myv: { nu: ["latn"] },
        mzn: { nu: ["arabext"] },
        naq: { nu: ["latn"] },
        nb: { nu: ["latn"] },
        "nb-SJ": { nu: ["latn"] },
        nd: { nu: ["latn"] },
        nds: { nu: ["latn"] },
        "nds-NL": { nu: ["latn"] },
        ne: { nu: ["deva"] },
        "ne-IN": { nu: ["deva"] },
        nl: { nu: ["latn"] },
        "nl-AW": { nu: ["latn"] },
        "nl-BE": { nu: ["latn"] },
        "nl-BQ": { nu: ["latn"] },
        "nl-CW": { nu: ["latn"] },
        "nl-SR": { nu: ["latn"] },
        "nl-SX": { nu: ["latn"] },
        nmg: { nu: ["latn"] },
        nn: { nu: ["latn"] },
        nnh: { nu: ["latn"] },
        no: { nu: ["latn"] },
        nqo: { nu: ["nkoo"] },
        nr: { nu: ["latn"] },
        nso: { nu: ["latn"] },
        nus: { nu: ["latn"] },
        nv: { nu: ["latn"] },
        ny: { nu: ["latn"] },
        nyn: { nu: ["latn"] },
        oc: { nu: ["latn"] },
        "oc-ES": { nu: ["latn"] },
        oka: { nu: ["latn"] },
        "oka-US": { nu: ["latn"] },
        om: { nu: ["latn"] },
        "om-KE": { nu: ["latn"] },
        or: { nu: ["latn"] },
        os: { nu: ["latn"] },
        "os-RU": { nu: ["latn"] },
        osa: { nu: ["latn"] },
        pa: { nu: ["latn"] },
        "pa-Arab": { nu: ["arabext"] },
        "pa-Guru": { nu: ["latn"] },
        pap: { nu: ["latn"] },
        "pap-AW": { nu: ["latn"] },
        pcm: { nu: ["latn"] },
        pi: { nu: ["latn"] },
        "pi-Latn": { nu: ["latn"] },
        pis: { nu: ["latn"] },
        pl: { nu: ["latn"] },
        pms: { nu: ["latn"] },
        prg: { nu: ["latn"] },
        ps: { nu: ["arabext"] },
        "ps-PK": { nu: ["arabext"] },
        pt: { nu: ["latn"] },
        "pt-AO": { nu: ["latn"] },
        "pt-CH": { nu: ["latn"] },
        "pt-CV": { nu: ["latn"] },
        "pt-GQ": { nu: ["latn"] },
        "pt-GW": { nu: ["latn"] },
        "pt-LU": { nu: ["latn"] },
        "pt-MO": { nu: ["latn"] },
        "pt-MZ": { nu: ["latn"] },
        "pt-PT": { nu: ["latn"] },
        "pt-ST": { nu: ["latn"] },
        "pt-TL": { nu: ["latn"] },
        qu: { nu: ["latn"] },
        "qu-BO": { nu: ["latn"] },
        "qu-EC": { nu: ["latn"] },
        quc: { nu: ["latn"] },
        raj: { nu: ["deva"] },
        rhg: { nu: ["latn"] },
        "rhg-Rohg": { nu: ["latn"] },
        "rhg-Rohg-BD": { nu: ["latn"] },
        rif: { nu: ["latn"] },
        rm: { nu: ["latn"] },
        rn: { nu: ["latn"] },
        ro: { nu: ["latn"] },
        "ro-MD": { nu: ["latn"] },
        rof: { nu: ["latn"] },
        ru: { nu: ["latn"] },
        "ru-BY": { nu: ["latn"] },
        "ru-KG": { nu: ["latn"] },
        "ru-KZ": { nu: ["latn"] },
        "ru-MD": { nu: ["latn"] },
        "ru-UA": { nu: ["latn"] },
        rw: { nu: ["latn"] },
        rwk: { nu: ["latn"] },
        sa: { nu: ["deva"] },
        sah: { nu: ["latn"] },
        saq: { nu: ["latn"] },
        sat: { nu: ["olck"] },
        "sat-Deva": { nu: ["deva"] },
        "sat-Olck": { nu: ["olck"] },
        sbp: { nu: ["latn"] },
        sc: { nu: ["latn"] },
        scn: { nu: ["latn"] },
        sd: { nu: ["arab"] },
        "sd-Arab": { nu: ["arab"] },
        "sd-Deva": { nu: ["latn"] },
        sdh: { nu: ["arab"] },
        "sdh-IQ": { nu: ["arab"] },
        se: { nu: ["latn"] },
        "se-FI": { nu: ["latn"] },
        "se-SE": { nu: ["latn"] },
        seh: { nu: ["latn"] },
        ses: { nu: ["latn"] },
        sg: { nu: ["latn"] },
        sgs: { nu: ["latn"] },
        shi: { nu: ["latn"] },
        "shi-Latn": { nu: ["latn"] },
        "shi-Tfng": { nu: ["latn"] },
        shn: { nu: ["latn"] },
        "shn-TH": { nu: ["latn"] },
        si: { nu: ["latn"], separator: { latn: "." } },
        sid: { nu: ["latn"] },
        sk: { nu: ["latn"] },
        skr: { nu: ["latn"] },
        sl: { nu: ["latn"] },
        sma: { nu: ["latn"] },
        "sma-NO": { nu: ["latn"] },
        smj: { nu: ["latn"] },
        "smj-NO": { nu: ["latn"] },
        smn: { nu: ["latn"], separator: { latn: "." } },
        sms: { nu: ["latn"] },
        sn: { nu: ["latn"] },
        so: { nu: ["latn"] },
        "so-DJ": { nu: ["latn"] },
        "so-ET": { nu: ["latn"] },
        "so-KE": { nu: ["latn"] },
        sq: { nu: ["latn"] },
        "sq-MK": { nu: ["latn"] },
        "sq-XK": { nu: ["latn"] },
        sr: { nu: ["latn"] },
        "sr-Cyrl": { nu: ["latn"] },
        "sr-Cyrl-BA": { nu: ["latn"] },
        "sr-Cyrl-ME": { nu: ["latn"] },
        "sr-Cyrl-XK": { nu: ["latn"] },
        "sr-Latn": { nu: ["latn"] },
        "sr-Latn-BA": { nu: ["latn"] },
        "sr-Latn-ME": { nu: ["latn"] },
        "sr-Latn-XK": { nu: ["latn"] },
        ss: { nu: ["latn"] },
        "ss-SZ": { nu: ["latn"] },
        ssy: { nu: ["latn"] },
        st: { nu: ["latn"] },
        "st-LS": { nu: ["latn"] },
        su: { nu: ["latn"], separator: { latn: "." } },
        "su-Latn": { nu: ["latn"], separator: { latn: "." } },
        suz: { nu: ["latn"] },
        "suz-Deva": { nu: ["latn"] },
        "suz-Sunu": { nu: ["latn"] },
        sv: { nu: ["latn"] },
        "sv-AX": { nu: ["latn"] },
        "sv-FI": { nu: ["latn"], separator: { latn: "." } },
        sw: { nu: ["latn"] },
        "sw-CD": { nu: ["latn"] },
        "sw-KE": { nu: ["latn"] },
        "sw-UG": { nu: ["latn"] },
        syr: { nu: ["latn"] },
        "syr-SY": { nu: ["latn"] },
        szl: { nu: ["latn"] },
        ta: { nu: ["latn"] },
        "ta-LK": { nu: ["latn"] },
        "ta-MY": { nu: ["latn"] },
        "ta-SG": { nu: ["latn"] },
        te: { nu: ["latn"] },
        teo: { nu: ["latn"] },
        "teo-KE": { nu: ["latn"] },
        tg: { nu: ["latn"] },
        th: { nu: ["latn"] },
        ti: { nu: ["latn"] },
        "ti-ER": { nu: ["latn"] },
        tig: { nu: ["latn"] },
        tk: { nu: ["latn"] },
        tn: { nu: ["latn"] },
        "tn-BW": { nu: ["latn"] },
        to: { nu: ["latn"] },
        tok: { nu: ["latn"] },
        tpi: { nu: ["latn"] },
        tr: { nu: ["latn"] },
        "tr-CY": { nu: ["latn"] },
        trv: { nu: ["latn"] },
        trw: { nu: ["latn"] },
        ts: { nu: ["latn"] },
        tt: { nu: ["latn"] },
        twq: { nu: ["latn"] },
        tyv: { nu: ["latn"] },
        tzm: { nu: ["latn"] },
        ug: { nu: ["latn"] },
        uk: { nu: ["latn"] },
        und: { nu: ["latn"] },
        ur: { nu: ["latn"] },
        "ur-IN": { nu: ["arabext"], separator: { arabext: "\u066B" } },
        uz: { nu: ["latn"] },
        "uz-Arab": { nu: ["arabext"] },
        "uz-Cyrl": { nu: ["latn"] },
        "uz-Latn": { nu: ["latn"] },
        vai: { nu: ["latn"] },
        "vai-Latn": { nu: ["latn"] },
        "vai-Vaii": { nu: ["latn"] },
        ve: { nu: ["latn"] },
        vec: { nu: ["latn"] },
        vi: { nu: ["latn"] },
        vmw: { nu: ["latn"] },
        vo: { nu: ["latn"] },
        vun: { nu: ["latn"] },
        wa: { nu: ["latn"] },
        wae: { nu: ["latn"] },
        wal: { nu: ["latn"] },
        wbp: { nu: ["latn"] },
        wo: { nu: ["latn"] },
        xh: { nu: ["latn"] },
        xnr: { nu: ["latn"] },
        xog: { nu: ["latn"] },
        yav: { nu: ["latn"] },
        yi: { nu: ["latn"] },
        yo: { nu: ["latn"] },
        "yo-BJ": { nu: ["latn"] },
        yrl: { nu: ["latn"] },
        "yrl-CO": { nu: ["latn"] },
        "yrl-VE": { nu: ["latn"] },
        yue: { nu: ["latn"] },
        "yue-Hans": { nu: ["latn"] },
        "yue-Hant": { nu: ["latn"] },
        "yue-Hant-CN": { nu: ["latn"] },
        "yue-Hant-MO": { nu: ["latn"] },
        za: { nu: ["latn"] },
        zgh: { nu: ["latn"] },
        zh: { nu: ["latn"] },
        "zh-Hans": { nu: ["latn"] },
        "zh-Hans-HK": { nu: ["latn"] },
        "zh-Hans-MO": { nu: ["latn"] },
        "zh-Hans-MY": { nu: ["latn"] },
        "zh-Hans-SG": { nu: ["latn"] },
        "zh-Hant": { nu: ["latn"] },
        "zh-Hant-HK": { nu: ["latn"] },
        "zh-Hant-MO": { nu: ["latn"] },
        "zh-Hant-MY": { nu: ["latn"] },
        "zh-Latn": { nu: ["latn"] },
        zu: { nu: ["latn"] },
    },
    tl = [
        "locale",
        "style",
        "years",
        "yearsDisplay",
        "months",
        "monthsDisplay",
        "weeks",
        "weeksDisplay",
        "days",
        "daysDisplay",
        "hours",
        "hoursDisplay",
        "minutes",
        "minutesDisplay",
        "seconds",
        "secondsDisplay",
        "milliseconds",
        "millisecondsDisplay",
        "microseconds",
        "microsecondsDisplay",
        "nanoseconds",
        "nanosecondsDisplay",
        "numberingSystem",
        "fractionalDigits",
    ],
    tu = [
        {
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
        },
        {
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
        },
        {
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
        },
    ];
class tc {
    constructor(e, t) {
        if (!(this && this instanceof tc ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const n = r(e),
            i = Object.create(null),
            s = void 0 === t ? Object.create(null) : e$(t),
            a = eZ(s, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            o = eZ(s, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== o && 0 > ta.indexOf(o)) throw RangeError(`Invalid numberingSystems: ${o}`);
        (i.nu = o), (i.localeMatcher = a);
        const { localeData: l, availableLocales: u } = tc,
            c = (function (e, t, n, i, r, s) {
                let a, o;
                if ("lookup" === n.localeMatcher)
                    a = (function (e, t, n) {
                        let i = { locale: "" };
                        for (let n of t) {
                            let t = n.replace(e1, ""),
                                r = eQ(e, t);
                            if (r) return (i.locale = r), n !== t && (i.extension = n.slice(t.length, n.length)), i;
                        }
                        return (i.locale = n()), i;
                    })(Array.from(e), t, s);
                else {
                    var l;
                    let n, i, r, o, u;
                    (l = Array.from(e)),
                        (r = []),
                        (o = t.reduce((e, t) => {
                            let n = t.replace(e1, "");
                            return r.push(n), (e[n] = t), e;
                        }, {})),
                        (u = (function (e, t, n = 838) {
                            let i = 1 / 0,
                                r = { matchedDesiredLocale: "", distances: {} },
                                s = e7.get(t);
                            s ||
                                ((s = t.map((e) => {
                                    try {
                                        return Intl.getCanonicalLocales([e])[0] || e;
                                    } catch {
                                        return e;
                                    }
                                })),
                                e7.set(t, s));
                            let a = new Set(s);
                            for (let t = 0; t < e.length; t++) {
                                let n = e[t];
                                if (a.has(n)) {
                                    let e = 0 + 40 * t;
                                    if (
                                        ((r.distances[n] = { [n]: e }),
                                        e < i &&
                                            ((i = e), (r.matchedDesiredLocale = n), (r.matchedSupportedLocale = n)),
                                        0 === t)
                                    )
                                        return r;
                                }
                            }
                            for (let t = 0; t < e.length; t++) {
                                let n = e[t];
                                try {
                                    let e = new Intl.Locale(n).maximize().toString();
                                    if (e !== n) {
                                        let s = (function (e) {
                                            let t = [],
                                                n = e;
                                            for (; n; ) {
                                                t.push(n);
                                                let e = n.lastIndexOf("-");
                                                if (-1 === e) break;
                                                n = n.substring(0, e);
                                            }
                                            return t;
                                        })(e);
                                        for (let o = 0; o < s.length; o++) {
                                            let l = s[o];
                                            if (l !== n && a.has(l)) {
                                                let s;
                                                try {
                                                    s =
                                                        new Intl.Locale(l).maximize().toString() === e
                                                            ? 0 + 40 * t
                                                            : 10 * o + 40 * t;
                                                } catch {
                                                    s = 10 * o + 40 * t;
                                                }
                                                r.distances[n] || (r.distances[n] = {}),
                                                    (r.distances[n][l] = s),
                                                    s < i &&
                                                        ((i = s),
                                                        (r.matchedDesiredLocale = n),
                                                        (r.matchedSupportedLocale = l));
                                                break;
                                            }
                                        }
                                    }
                                } catch {}
                            }
                            return (
                                (r.matchedSupportedLocale && 0 === i) ||
                                    (e.forEach((e, n) => {
                                        r.distances[e] || (r.distances[e] = {}),
                                            s.forEach((s, a) => {
                                                let o = t[a],
                                                    l = e5(e, s) + 0 + 40 * n;
                                                (r.distances[e][o] = l),
                                                    l < i &&
                                                        ((i = l),
                                                        (r.matchedDesiredLocale = e),
                                                        (r.matchedSupportedLocale = o));
                                            });
                                    }),
                                    i >= n && ((r.matchedDesiredLocale = void 0), (r.matchedSupportedLocale = void 0))),
                                r
                            );
                        })(r, l)).matchedSupportedLocale &&
                            u.matchedDesiredLocale &&
                            ((n = u.matchedSupportedLocale),
                            (i = o[u.matchedDesiredLocale].slice(u.matchedDesiredLocale.length) || void 0)),
                        (a = n ? { locale: n, extension: i } : { locale: s() });
                }
                null == a && (a = { locale: s(), extension: "" });
                let u = a.locale,
                    c = r[u],
                    d = { locale: "en", dataLocale: u };
                o = a.extension
                    ? (function (e) {
                          let t;
                          e2(e === e.toLowerCase(), "Expected extension to be lowercase"),
                              e2("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
                          let n = [],
                              i = [],
                              r = e.length,
                              s = 3;
                          for (; s < r; ) {
                              let a,
                                  o = e.indexOf("-", s);
                              a = -1 === o ? r - s : o - s;
                              let l = e.slice(s, s + a);
                              e2(a >= 2, "Expected a subtag to have at least 2 characters"),
                                  void 0 === t && 2 != a
                                      ? -1 === n.indexOf(l) && n.push(l)
                                      : 2 === a
                                        ? ((t = { key: l, value: "" }),
                                          void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                                        : t?.value === ""
                                          ? (t.value = l)
                                          : (e2(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + l)),
                                  (s += a + 1);
                          }
                          return { attributes: n, keywords: i };
                      })(a.extension).keywords
                    : [];
                let _ = [];
                for (let e of i) {
                    let t,
                        i = c?.[e] ?? [];
                    e2(Array.isArray(i), `keyLocaleData for ${e} must be an array`);
                    let r = i[0];
                    e2(void 0 === r || "string" == typeof r, "value must be a string or undefined");
                    let s = o.find((t) => t.key === e);
                    if (s) {
                        let n = s.value;
                        "" !== n
                            ? i.indexOf(n) > -1 && (t = { key: e, value: (r = n) })
                            : i.indexOf("true") > -1 && (t = { key: e, value: (r = "true") });
                    }
                    let a = n[e];
                    e2(null == a || "string" == typeof a, "optionsValue must be a string or undefined"),
                        "string" == typeof a &&
                            "" ===
                                (a = (function (e, t) {
                                    let n = t.toLowerCase();
                                    return e2(void 0 !== e, "ukey must be defined"), n;
                                })(e.toLowerCase(), a)) &&
                            (a = "true"),
                        a !== r && i.indexOf(a) > -1 && ((r = a), (t = void 0)),
                        t && _.push(t),
                        (d[e] = r);
                }
                return (
                    _.length > 0 &&
                        (u = (function (e, t, n) {
                            e2(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                            let i = "-u";
                            for (let e of t) i += `-${e}`;
                            for (let e of n) {
                                let { key: t, value: n } = e;
                                (i += `-${t}`), "" !== n && (i += `-${n}`);
                            }
                            if ("-u" === i) return e8(e);
                            let r = e.indexOf("-x-");
                            return e8(-1 === r ? e + i : e.slice(0, r) + i + e.slice(r));
                        })(u, [], _)),
                    (d.locale = u),
                    d
                );
            })(u, n, i, ["nu"], l, tc.getDefaultLocale),
            d = c.locale,
            _ = tn(this);
        (_.initializedDurationFormat = !0), (_.locale = d), (_.numberingSystem = c.nu);
        const f = eZ(s, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (_.style = f), (_.dataLocale = c.dataLocale);
        let h = "";
        tu.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: i, values: r, digitalDefault: a } = e,
                o = (function (e, t, n, i, r, s) {
                    let a = eZ(t, e, "string", i, void 0),
                        o = "always";
                    void 0 === a &&
                        ("digital" === n
                            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (o = "auto"), (a = r))
                            : ((o = "auto"), (a = "numeric" === s || "2-digit" === s ? "numeric" : n)));
                    let l = eZ(t, `${e}Display`, "string", ["always", "auto"], o);
                    if ("numeric" === s || "2-digit" === s) {
                        if ("numeric" !== a && "2-digit" !== a)
                            throw RangeError("Can't mix numeric and non-numeric styles");
                        if (
                            (("minutes" === e || "seconds" === e) && (a = "2-digit"),
                            "numeric" === a &&
                                "always" === l &&
                                ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
                        )
                            throw RangeError(
                                "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
                            );
                    }
                    return { style: a, display: l };
                })(i, s, f, r, a, h);
            (_[t] = o.style),
                (_[n] = o.display),
                ("hours" === i || "minutes" === i || "seconds" === i || "milliseconds" === i || "microseconds" === i) &&
                    (h = o.style);
        }),
            (_.fractionalDigits = (function (e, t, n) {
                var i = e[t];
                if (void 0 === i) return n;
                let r = Number(i);
                if (isNaN(r) || r < 0 || r > 9) throw RangeError(`${r} is outside of range [0, 9]`);
                return Math.floor(r);
            })(s, "fractionalDigits", void 0));
    }
    resolvedOptions() {
        if (
            "object" != typeof this ||
            !(function (e, t) {
                if (!eq(e)) return !1;
                if ("object" != typeof t) return !1;
                let n = e.prototype;
                if ("object" != typeof n)
                    throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
                return Object.prototype.isPrototypeOf.call(n, t);
            })(tc, this)
        )
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = tn(this),
            t = {};
        for (let n of tl) {
            let i = e[n];
            "fractionalDigits" === n ? void 0 !== i && (i = Number(i)) : eW(void 0 !== i, `Missing internal slot ${n}`),
                (t[n] = i);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === tn(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = ti(this, ts(e)),
            n = [];
        for (let { type: e, unit: i, value: r } of t) {
            let t = { type: e, value: r };
            i && (t.unit = i), n.push(t);
        }
        return n;
    }
    format(e) {
        if (void 0 === tn(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = ti(this, ts(e)),
            n = "";
        for (let { value: e } of t) n += e;
        return n;
    }
    static supportedLocalesOf(e, t) {
        return (function (e, t, n) {
            void 0 !== n && eZ((n = e$(n)), "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            var i = Array.from(e);
            let r = [];
            for (let e of t) {
                let t = eQ(i, e.replace(e1, ""));
                t && r.push(t);
            }
            return r;
        })(tc.availableLocales, r(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(to).reduce((e, t) => {
        tc.availableLocales.add(t);
        let n = to[t].nu;
        return (e[t] = { nu: n, digitalFormat: to[t].separator || n.reduce((e, t) => ((e[t] = ":"), e), {}) }), e;
    }, {});
    static getDefaultLocale = () => tc.__defaultLocale;
    static polyfilled = !0;
}
