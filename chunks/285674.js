"use strict";
let i;
n.d(t, { VG: () => nu, kH: () => na });
var r,
    s,
    a,
    o,
    l = n(627968),
    u = n(64700);
function c(e) {
    return Intl.getCanonicalLocales(e);
}
var d,
    _,
    h = "0123456789abcdef",
    f =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    p =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    E = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    m = !0,
    g = "[DecimalError] ",
    A = g + "Invalid argument: ",
    I = g + "Precision limit exceeded",
    T = g + "crypto unavailable",
    S = "[object Decimal]",
    y = Math.floor,
    C = Math.pow,
    N = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    v = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    R = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    O = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    b = f.length - 1,
    D = p.length - 1,
    L = { toStringTag: S };
function w(e) {
    var t,
        n,
        i,
        r = e.length - 1,
        s = "",
        a = e[0];
    if (r > 0) {
        for (s += a, t = 1; t < r; t++) (n = 7 - (i = e[t] + "").length) && (s += H(n)), (s += i);
        (n = 7 - (i = (a = e[t]) + "").length) && (s += H(n));
    } else if (0 === a) return "0";
    for (; a % 10 == 0; ) a /= 10;
    return s + a;
}
function M(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(A + e);
}
function P(e, t, n, i) {
    var r, s, a, o;
    for (s = e[0]; s >= 10; s /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (r = 0)) : ((r = Math.ceil((t + 1) / 7)), (t %= 7)),
        (s = C(10, 7 - t)),
        (o = (e[r] % s) | 0),
        null == i
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (a = (n < 4 && 99999 == o) || (n > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (a =
                      (((n < 4 && o + 1 == s) || (n > 3 && o + 1 == s / 2)) &&
                          ((e[r + 1] / s / 100) | 0) == C(10, t - 2) - 1) ||
                      ((o == s / 2 || 0 == o) && ((e[r + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (a = ((i || n < 4) && 9999 == o) || (!i && n > 3 && 4999 == o)))
              : (a =
                    (((i || n < 4) && o + 1 == s) || (!i && n > 3 && o + 1 == s / 2)) &&
                    ((e[r + 1] / s / 1e3) | 0) == C(10, t - 3) - 1),
        a
    );
}
function x(e, t, n) {
    for (var i, r, s = [0], a = 0, o = e.length; a < o; ) {
        for (r = s.length; r--; ) s[r] *= t;
        for (s[0] += h.indexOf(e.charAt(a++)), i = 0; i < s.length; i++)
            s[i] > n - 1 && (void 0 === s[i + 1] && (s[i + 1] = 0), (s[i + 1] += (s[i] / n) | 0), (s[i] %= n));
    }
    return s.reverse();
}
(L.absoluteValue = L.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), U(e);
    }),
    (L.ceil = function () {
        return U(new this.constructor(this), this.e + 1, 2);
    }),
    (L.clampedTo = L.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(A + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (L.comparedTo = L.cmp =
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
    (L.cosine = L.cos =
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
                              ? (r = (1 / Q(4, (n = Math.ceil(i / 3)))).toString())
                              : ((n = 16), (r = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = X(e, 1, t.times(r), new e(1)));
                          for (var s = n; s--; ) {
                              var a = t.times(t);
                              t = a.times(a).minus(a).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(i, J(i, n))),
                      (i.precision = e),
                      (i.rounding = t),
                      U(2 == _ || 3 == _ ? n.neg() : n, e, t, !0))
                    : new i(1)
                : new i(NaN);
        }),
    (L.cubeRoot = L.cbrt =
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
                m = !1,
                    (s = this.s * C(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                        ? (i = new c(s.toString()))
                        : ((n = w(this.d)),
                          (s = ((e = this.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"),
                          (s = C(n, 1 / 3)),
                          (e = y((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((i = new c(
                              (n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    a = (e = c.precision) + 3;
                ;
            )
                if (
                    ((i = k((u = (l = (o = i).times(o).times(o)).plus(this)).plus(this).times(o), u.plus(l), a + 2, 1)),
                    w(o.d).slice(0, a) === (n = w(i.d)).slice(0, a))
                ) {
                    if ("9999" != (n = n.slice(a - 3, a + 1)) && (r || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (U(i, e + 1, 1), (t = !i.times(i).times(i).eq(this)));
                        break;
                    }
                    if (!r && (U(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        i = o;
                        break;
                    }
                    (a += 4), (r = 1);
                }
            return (m = !0), U(i, e, c.rounding, t);
        }),
    (L.decimalPlaces = L.dp =
        function () {
            var e,
                t = this.d,
                n = NaN;
            if (t) {
                if (((n = ((e = t.length - 1) - y(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (L.dividedBy = L.div =
        function (e) {
            return k(this, new this.constructor(e));
        }),
    (L.dividedToIntegerBy = L.divToInt =
        function (e) {
            var t = this.constructor;
            return U(k(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (L.equals = L.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (L.floor = function () {
        return U(new this.constructor(this), this.e + 1, 3);
    }),
    (L.greaterThan = L.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (L.greaterThanOrEqualTo = L.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (L.hyperbolicCosine = L.cosh =
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
                    ? (t = (1 / Q(4, (e = Math.ceil(r / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (s = X(a, 1, s.times(t), new a(1), !0));
            for (var l, u = e, c = new a(8); u--; ) (l = s.times(s)), (s = o.minus(l.times(c.minus(l.times(c)))));
            return U(s, (a.precision = n), (a.rounding = i), !0);
        }),
    (L.hyperbolicSine = L.sinh =
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
                r = X(s, 2, r, r, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e), (r = X(s, 2, (r = r.times(1 / Q(5, e))), r, !0));
                for (var a, o = new s(5), l = new s(16), u = new s(20); e--; )
                    (a = r.times(r)), (r = r.times(o.plus(a.times(l.times(a).plus(u)))));
            }
            return (s.precision = t), (s.rounding = n), U(r, t, n, !0);
        }),
    (L.hyperbolicTangent = L.tanh =
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
                      k(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (L.inverseCosine = L.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                i = t.precision,
                r = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? B(t, i, r)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? B(t, i + 4, r).times(0.5)
                  : ((t.precision = i + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = i),
                    (t.rounding = r),
                    e.times(2));
        }),
    (L.inverseHyperbolicCosine = L.acosh =
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
                    (m = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (m = !0),
                    (i.precision = e),
                    (i.rounding = t),
                    n.ln())
                  : new i(n);
        }),
    (L.inverseHyperbolicSine = L.asinh =
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
                  (m = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (m = !0),
                  (i.precision = e),
                  (i.rounding = t),
                  n.ln());
        }),
    (L.inverseHyperbolicTangent = L.atanh =
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
                      ? U(new s(r), e, t, !0)
                      : ((s.precision = n = i - r.e),
                        (r = k(r.plus(1), new s(1).minus(r), n + e, 1)),
                        (s.precision = e + 4),
                        (s.rounding = 1),
                        (r = r.ln()),
                        (s.precision = e),
                        (s.rounding = t),
                        r.times(0.5))
                : new s(NaN);
        }),
    (L.inverseSine = L.asin =
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
                      ? (((e = B(s, n + 4, i).times(0.5)).s = r.s), e)
                      : new s(NaN)
                  : ((s.precision = n + 6),
                    (s.rounding = 1),
                    (r = r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan()),
                    (s.precision = n),
                    (s.rounding = i),
                    r.times(2));
        }),
    (L.inverseTangent = L.atan =
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
                d = c.precision,
                _ = c.rounding;
            if (u.isFinite()) {
                if (u.isZero()) return new c(u);
                else if (u.abs().eq(1) && d + 4 <= D) return ((a = B(c, d + 4, _).times(0.25)).s = u.s), a;
            } else {
                if (!u.s) return new c(NaN);
                if (d + 4 <= D) return ((a = B(c, d + 4, _).times(0.5)).s = u.s), a;
            }
            for (c.precision = o = d + 10, c.rounding = 1, e = n = Math.min(28, (o / 7 + 2) | 0); e; --e)
                u = u.div(u.times(u).plus(1).sqrt().plus(1));
            for (m = !1, t = Math.ceil(o / 7), i = 1, l = u.times(u), a = new c(u), r = u; -1 !== e; )
                if (
                    ((r = r.times(l)),
                    (s = a.minus(r.div((i += 2)))),
                    (r = r.times(l)),
                    void 0 !== (a = s.plus(r.div((i += 2)))).d[t])
                )
                    for (e = t; a.d[e] === s.d[e] && e--; );
            return n && (a = a.times(2 << (n - 1))), (m = !0), U(a, (c.precision = d), (c.rounding = _), !0);
        }),
    (L.isFinite = function () {
        return !!this.d;
    }),
    (L.isInteger = L.isInt =
        function () {
            return !!this.d && y(this.e / 7) > this.d.length - 2;
        }),
    (L.isNaN = function () {
        return !this.s;
    }),
    (L.isNegative = L.isNeg =
        function () {
            return this.s < 0;
        }),
    (L.isPositive = L.isPos =
        function () {
            return this.s > 0;
        }),
    (L.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (L.lessThan = L.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (L.lessThanOrEqualTo = L.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (L.logarithm = L.log =
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
            if (((m = !1), P((o = k((s = z(this, (a = u + 5))), t ? V(l, a + 10) : z(e, a), a, 1)).d, (i = u), c)))
                do
                    if (((a += 10), (o = k((s = z(this, a)), t ? V(l, a + 10) : z(e, a), a, 1)), !r)) {
                        +w(o.d).slice(i + 1, i + 15) + 1 == 1e14 && (o = U(o, u + 1, 0));
                        break;
                    }
                while (P(o.d, (i += 10), c));
            return (m = !0), U(o, u, c);
        }),
    (L.minus = L.sub =
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
                d,
                _,
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
            if (((u = this.d), (_ = e.d), (o = h.precision), (l = h.rounding), !u[0] || !_[0])) {
                if (_[0]) e.s = -e.s;
                else {
                    if (!u[0]) return new h(3 === l ? -0 : 0);
                    e = new h(this);
                }
                return m ? U(e, o, l) : e;
            }
            if (((n = y(e.e / 7)), (c = y(this.e / 7)), (u = u.slice()), (s = c - n))) {
                for (
                    (d = s < 0) ? ((t = u), (s = -s), (a = _.length)) : ((t = _), (n = c), (a = u.length)),
                        s > (i = Math.max(Math.ceil(o / 7), a) + 2) && ((s = i), (t.length = 1)),
                        t.reverse(),
                        i = s;
                    i--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((d = (i = u.length) < (a = _.length)) && (a = i), i = 0; i < a; i++)
                    if (u[i] != _[i]) {
                        d = u[i] < _[i];
                        break;
                    }
                s = 0;
            }
            for (d && ((t = u), (u = _), (_ = t), (e.s = -e.s)), a = u.length, i = _.length - a; i > 0; --i) u[a++] = 0;
            for (i = _.length; i > s; ) {
                if (u[--i] < _[i]) {
                    for (r = i; r && 0 === u[--r]; ) u[r] = 1e7 - 1;
                    --u[r], (u[i] += 1e7);
                }
                u[i] -= _[i];
            }
            for (; 0 === u[--a]; ) u.pop();
            for (; 0 === u[0]; u.shift()) --n;
            return u[0] ? ((e.d = u), (e.e = F(u, n)), m ? U(e, o, l) : e) : new h(3 === l ? -0 : 0);
        }),
    (L.modulo = L.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((m = !1),
                      9 == n.modulo
                          ? ((t = k(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = k(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (m = !0),
                      this.minus(t))
                    : U(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (L.naturalExponential = L.exp =
        function () {
            return $(this);
        }),
    (L.naturalLogarithm = L.ln =
        function () {
            return z(this);
        }),
    (L.negated = L.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), U(e);
        }),
    (L.plus = L.add =
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
                d = this.constructor;
            if (((e = new d(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new d(e.d || this.s === e.s ? this : NaN)) : (e = new d(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((u = this.d), (c = e.d), (o = d.precision), (l = d.rounding), !u[0] || !c[0]))
                return c[0] || (e = new d(this)), m ? U(e, o, l) : e;
            if (((s = y(this.e / 7)), (i = y(e.e / 7)), (u = u.slice()), (r = s - i))) {
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
            return (e.d = u), (e.e = F(u, i)), m ? U(e, o, l) : e;
        }),
    (L.precision = L.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(A + e);
            return this.d ? ((t = j(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (L.round = function () {
        var e = this.constructor;
        return U(new e(this), this.e + 1, e.rounding);
    }),
    (L.sine = L.sin =
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
                          if (i < 3) return t.isZero() ? t : X(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n),
                              (t = X(e, 2, (t = t.times(1 / Q(5, n))), t));
                          for (var r, s = new e(5), a = new e(16), o = new e(20); n--; )
                              (r = t.times(t)), (t = t.times(s.plus(r.times(a.times(r).minus(o)))));
                          return t;
                      })(i, J(i, n))),
                      (i.precision = e),
                      (i.rounding = t),
                      U(_ > 2 ? n.neg() : n, e, t, !0))
                : new i(NaN);
        }),
    (L.squareRoot = L.sqrt =
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
                m = !1,
                    0 == (l = Math.sqrt(+this)) || l == 1 / 0
                        ? (((t = w(a)).length + o) % 2 == 0 && (t += "0"),
                          (l = Math.sqrt(t)),
                          (o = y((o + 1) / 2) - (o < 0 || o % 2)),
                          (i = new u(
                              (t = l == 1 / 0 ? "5e" + o : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (i = new u(l.toString())),
                    n = (o = u.precision) + 3;
                ;
            )
                if (
                    ((i = (s = i).plus(k(this, s, n + 2, 1)).times(0.5)),
                    w(s.d).slice(0, n) === (t = w(i.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (r || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (U(i, o + 1, 1), (e = !i.times(i).eq(this)));
                        break;
                    }
                    if (!r && (U(s, o + 1, 0), s.times(s).eq(this))) {
                        i = s;
                        break;
                    }
                    (n += 4), (r = 1);
                }
            return (m = !0), U(i, o, u.rounding, e);
        }),
    (L.tangent = L.tan =
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
                      (n = k(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (i.precision = e),
                      (i.rounding = t),
                      U(2 == _ || 4 == _ ? n.neg() : n, e, t, !0))
                : new i(NaN);
        }),
    (L.times = L.mul =
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
                d = this.d,
                _ = (e = new c(e)).d;
            if (((e.s *= this.s), !d || !d[0] || !_ || !_[0]))
                return new c(!e.s || (d && !d[0] && !_) || (_ && !_[0] && !d) ? NaN : !d || !_ ? e.s / 0 : 0 * e.s);
            for (
                n = y(this.e / 7) + y(e.e / 7),
                    (l = d.length) < (u = _.length) && ((s = d), (d = _), (_ = s), (a = l), (l = u), (u = a)),
                    s = [],
                    i = a = l + u;
                i--;
            )
                s.push(0);
            for (i = u; --i >= 0; ) {
                for (t = 0, r = l + i; r > i; )
                    (o = s[r] + _[i] * d[r - i - 1] + t), (s[r--] = (o % 1e7) | 0), (t = (o / 1e7) | 0);
                s[r] = ((s[r] + t) % 1e7) | 0;
            }
            for (; !s[--a]; ) s.pop();
            return t ? ++n : s.shift(), (e.d = s), (e.e = F(s, n)), m ? U(e, c.precision, c.rounding) : e;
        }),
    (L.toBinary = function (e, t) {
        return ee(this, 2, e, t);
    }),
    (L.toDecimalPlaces = L.toDP =
        function (e, t) {
            var n = this,
                i = n.constructor;
            return ((n = new i(n)), void 0 === e)
                ? n
                : (M(e, 0, 1e9), void 0 === t ? (t = i.rounding) : M(t, 0, 8), U(n, e + n.e + 1, t));
        }),
    (L.toExponential = function (e, t) {
        var n,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (n = G(i, !0))
                : (M(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : M(t, 0, 8),
                  (n = G((i = U(new r(i), e + 1, t)), !0, e + 1))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (L.toFixed = function (e, t) {
        var n,
            i,
            r = this.constructor;
        return (
            void 0 === e
                ? (n = G(this))
                : (M(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : M(t, 0, 8),
                  (n = G((i = U(new r(this), e + this.e + 1, t)), !1, e + i.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (L.toFraction = function (e) {
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
            d,
            _,
            h = this.d,
            f = this.constructor;
        if (!h) return new f(this);
        if (
            ((u = n = new f(1)),
            (i = l = new f(0)),
            (a = (s = (t = new f(i)).e = j(h) - this.e - 1) % 7),
            (t.d[0] = C(10, a < 0 ? 7 + a : a)),
            null == e)
        )
            e = s > 0 ? t : u;
        else {
            if (!(o = new f(e)).isInt() || o.lt(u)) throw Error(A + o);
            e = o.gt(t) ? (s > 0 ? t : u) : o;
        }
        for (
            m = !1, o = new f(w(h)), c = f.precision, f.precision = s = 7 * h.length * 2;
            (d = k(o, t, 0, 1, 1)), 1 != (r = n.plus(d.times(i))).cmp(e);
        )
            (n = i), (i = r), (r = u), (u = l.plus(d.times(r))), (l = r), (r = t), (t = o.minus(d.times(r))), (o = r);
        return (
            (r = k(e.minus(n), i, 0, 1, 1)),
            (l = l.plus(r.times(u))),
            (n = n.plus(r.times(i))),
            (l.s = u.s = this.s),
            (_ =
                1 >
                k(u, i, s, 1)
                    .minus(this)
                    .abs()
                    .cmp(k(l, n, s, 1).minus(this).abs())
                    ? [u, i]
                    : [l, n]),
            (f.precision = c),
            (m = !0),
            _
        );
    }),
    (L.toHexadecimal = L.toHex =
        function (e, t) {
            return ee(this, 16, e, t);
        }),
    (L.toNearest = function (e, t) {
        var n = this,
            i = n.constructor;
        if (((n = new i(n)), null == e)) {
            if (!n.d) return n;
            (e = new i(1)), (t = i.rounding);
        } else {
            if (((e = new i(e)), void 0 === t ? (t = i.rounding) : M(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((m = !1), (n = k(n, e, 0, t, 1).times(e)), (m = !0), U(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (L.toNumber = function () {
        return +this;
    }),
    (L.toOctal = function (e, t) {
        return ee(this, 8, e, t);
    }),
    (L.toPower = L.pow =
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
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new l(C(+o, u));
            if ((o = new l(o)).eq(1)) return o;
            if (((i = l.precision), (s = l.rounding), e.eq(1))) return U(o, i, s);
            if ((t = y(e.e / 7)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 0x1fffffffffffff)
                return (r = Y(l, o, n, i)), e.s < 0 ? new l(1).div(r) : U(r, i, s);
            if ((a = o.s) < 0) {
                if (t < e.d.length - 1) return new l(NaN);
                if (((1 & e.d[t]) == 0 && (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = a), o;
            }
            return (t =
                0 != (n = C(+o, u)) && isFinite(n)
                    ? new l(n + "").e
                    : y(u * (Math.log("0." + w(o.d)) / Math.LN10 + o.e + 1))) >
                l.maxE + 1 || t < l.minE - 1
                ? new l(t > 0 ? a / 0 : 0)
                : ((m = !1),
                  (l.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (r = $(e.times(z(o, i + n)), i)).d &&
                      P((r = U(r, i + 5, 1)).d, i, s) &&
                      ((t = i + 10),
                      +w((r = U($(e.times(z(o, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 &&
                          (r = U(r, i + 1, 0))),
                  (r.s = a),
                  (m = !0),
                  (l.rounding = s),
                  U(r, i, s));
        }),
    (L.toPrecision = function (e, t) {
        var n,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (n = G(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
                : (M(e, 1, 1e9),
                  void 0 === t ? (t = r.rounding) : M(t, 0, 8),
                  (n = G((i = U(new r(i), e, t)), e <= i.e || i.e <= r.toExpNeg, e))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (L.toSignificantDigits = L.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (M(e, 1, 1e9), void 0 === t ? (t = n.rounding) : M(t, 0, 8)),
                U(new n(this), e, t)
            );
        }),
    (L.toString = function () {
        var e = this.constructor,
            t = G(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (L.truncated = L.trunc =
        function () {
            return U(new this.constructor(this), this.e + 1, 1);
        }),
    (L.valueOf = L.toJSON =
        function () {
            var e = this.constructor,
                t = G(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var k = (function () {
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
    return function (i, r, s, a, o, l) {
        var u,
            c,
            _,
            h,
            f,
            p,
            E,
            m,
            g,
            A,
            I,
            T,
            S,
            C,
            N,
            v,
            R,
            O,
            b,
            D,
            L = i.constructor,
            w = i.s == r.s ? 1 : -1,
            M = i.d,
            P = r.d;
        if (!M || !M[0] || !P || !P[0])
            return new L(!i.s || !r.s || (M ? P && M[0] == P[0] : !P) ? NaN : (M && 0 == M[0]) || !P ? 0 * w : w / 0);
        for (
            l ? ((f = 1), (c = i.e - r.e)) : ((l = 1e7), (f = 7), (c = y(i.e / f) - y(r.e / f))),
                b = P.length,
                R = M.length,
                A = (g = new L(w)).d = [],
                _ = 0;
            P[_] == (M[_] || 0);
            _++
        );
        if (
            (P[_] > (M[_] || 0) && c--,
            null == s ? ((C = s = L.precision), (a = L.rounding)) : (C = o ? s + (i.e - r.e) + 1 : s),
            C < 0)
        )
            A.push(1), (p = !0);
        else {
            if (((C = (C / f + 2) | 0), (_ = 0), 1 == b)) {
                for (h = 0, P = P[0], C++; (_ < R || h) && C--; _++)
                    (N = h * l + (M[_] || 0)), (A[_] = (N / P) | 0), (h = (N % P) | 0);
                p = h || _ < R;
            } else {
                for (
                    (h = (l / (P[0] + 1)) | 0) > 1 &&
                        ((P = e(P, h, l)), (M = e(M, h, l)), (b = P.length), (R = M.length)),
                        v = b,
                        T = (I = M.slice(0, b)).length;
                    T < b;
                )
                    I[T++] = 0;
                (D = P.slice()).unshift(0), (O = P[0]), P[1] >= l / 2 && ++O;
                do
                    (h = 0),
                        (u = t(P, I, b, T)) < 0
                            ? ((S = I[0]),
                              b != T && (S = S * l + (I[1] || 0)),
                              (h = (S / O) | 0) > 1
                                  ? (h >= l && (h = l - 1),
                                    (m = (E = e(P, h, l)).length),
                                    (T = I.length),
                                    1 == (u = t(E, I, m, T)) && (h--, n(E, b < m ? D : P, m, l)))
                                  : (0 == h && (u = h = 1), (E = P.slice())),
                              (m = E.length) < T && E.unshift(0),
                              n(I, E, T, l),
                              -1 == u && ((T = I.length), (u = t(P, I, b, T)) < 1 && (h++, n(I, b < T ? D : P, T, l))),
                              (T = I.length))
                            : 0 === u && (h++, (I = [0])),
                        (A[_++] = h),
                        u && I[0] ? (I[T++] = M[v] || 0) : ((I = [M[v]]), (T = 1));
                while ((v++ < R || void 0 !== I[0]) && C--);
                p = void 0 !== I[0];
            }
            A[0] || A.shift();
        }
        if (1 == f) (g.e = c), (d = p);
        else {
            for (_ = 1, h = A[0]; h >= 10; h /= 10) _++;
            (g.e = _ + c * f - 1), U(g, o ? s + g.e + 1 : s, a, p);
        }
        return g;
    };
})();
function U(e, t, n, i) {
    var r,
        s,
        a,
        o,
        l,
        u,
        c,
        d,
        _,
        h = e.constructor;
    u: if (null != t) {
        if (!(d = e.d)) return e;
        for (r = 1, o = d[0]; o >= 10; o /= 10) r++;
        if ((s = t - r) < 0) (s += 7), (a = t), (l = (((c = d[(_ = 0)]) / C(10, r - a - 1)) % 10) | 0);
        else if ((_ = Math.ceil((s + 1) / 7)) >= (o = d.length))
            if (i) {
                for (; o++ <= _; ) d.push(0);
                (c = l = 0), (r = 1), (s %= 7), (a = s - 7 + 1);
            } else break u;
        else {
            for (r = 1, c = o = d[_]; o >= 10; o /= 10) r++;
            (s %= 7), (l = (a = s - 7 + r) < 0 ? 0 : ((c / C(10, r - a - 1)) % 10) | 0);
        }
        if (
            ((i = i || t < 0 || void 0 !== d[_ + 1] || (a < 0 ? c : c % C(10, r - a - 1))),
            (u =
                n < 4
                    ? (l || i) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : l > 5 ||
                      (5 == l &&
                          (4 == n ||
                              i ||
                              (6 == n && ((s > 0 ? (a > 0 ? c / C(10, r - a) : 0) : d[_ - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !d[0])
        )
            return (
                (d.length = 0),
                u ? ((t -= e.e + 1), (d[0] = C(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (d[0] = e.e = 0),
                e
            );
        if (
            (0 == s
                ? ((d.length = _), (o = 1), _--)
                : ((d.length = _ + 1),
                  (o = C(10, 7 - s)),
                  (d[_] = a > 0 ? (((c / C(10, r - a)) % C(10, a)) | 0) * o : 0)),
            u)
        )
            for (;;)
                if (0 == _) {
                    for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
                    for (a = d[0] += o, o = 1; a >= 10; a /= 10) o++;
                    s != o && (e.e++, 1e7 == d[0] && (d[0] = 1));
                    break;
                } else {
                    if (((d[_] += o), 1e7 != d[_])) break;
                    (d[_--] = 0), (o = 1);
                }
        for (s = d.length; 0 === d[--s]; ) d.pop();
    }
    return m && (e.e > h.maxE ? ((e.d = null), (e.e = NaN)) : e.e < h.minE && ((e.e = 0), (e.d = [0]))), e;
}
function G(e, t, n) {
    if (!e.isFinite()) return q(e);
    var i,
        r = e.e,
        s = w(e.d),
        a = s.length;
    return (
        t
            ? (n && (i = n - a) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + H(i))
                  : a > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : r < 0
              ? ((s = "0." + H(-r - 1) + s), n && (i = n - a) > 0 && (s += H(i)))
              : r >= a
                ? ((s += H(r + 1 - a)), n && (i = n - r - 1) > 0 && (s = s + "." + H(i)))
                : ((i = r + 1) < a && (s = s.slice(0, i) + "." + s.slice(i)),
                  n && (i = n - a) > 0 && (r + 1 === a && (s += "."), (s += H(i)))),
        s
    );
}
function F(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function V(e, t, n) {
    if (t > b) throw ((m = !0), n && (e.precision = n), Error(I));
    return U(new e(f), t, 1, !0);
}
function B(e, t, n) {
    if (t > D) throw Error(I);
    return U(new e(p), t, n, !0);
}
function j(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function H(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function Y(e, t, n, i) {
    var r,
        s = new e(1),
        a = Math.ceil(i / 7 + 4);
    for (m = !1; ; ) {
        if ((n % 2 && et((s = s.times(t)).d, a) && (r = !0), 0 === (n = y(n / 2)))) {
            (n = s.d.length - 1), r && 0 === s.d[n] && ++s.d[n];
            break;
        }
        et((t = t.times(t)).d, a);
    }
    return (m = !0), s;
}
function W(e) {
    return 1 & e.d[e.d.length - 1];
}
function K(e, t, n) {
    for (var i, r, s = new e(t[0]), a = 0; ++a < t.length; ) {
        if (!(r = new e(t[a])).s) {
            s = r;
            break;
        }
        ((i = s.cmp(r)) === n || (0 === i && s.s === n)) && (s = r);
    }
    return s;
}
function $(e, t) {
    var n,
        i,
        r,
        s,
        a,
        o,
        l,
        u = 0,
        c = 0,
        d = 0,
        _ = e.constructor,
        h = _.rounding,
        f = _.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new _(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((m = !1), (l = f)) : (l = t), o = new _(0.03125); e.e > -2; ) (e = e.times(o)), (d += 5);
    for (l += i = ((Math.log(C(2, d)) / Math.LN10) * 2 + 5) | 0, n = s = a = new _(1), _.precision = l; ; ) {
        if (
            ((s = U(s.times(e), l, 1)),
            (n = n.times(++c)),
            w((o = a.plus(k(s, n, l, 1))).d).slice(0, l) === w(a.d).slice(0, l))
        ) {
            for (r = d; r--; ) a = U(a.times(a), l, 1);
            if (null != t) return (_.precision = f), a;
            if (!(u < 3 && P(a.d, l - i, h, u))) return U(a, (_.precision = f), h, (m = !0));
            (_.precision = l += 10), (n = s = o = new _(1)), (c = 0), u++;
        }
        a = o;
    }
}
function z(e, t) {
    var n,
        i,
        r,
        s,
        a,
        o,
        l,
        u,
        c,
        d,
        _,
        h = 1,
        f = e,
        p = f.d,
        E = f.constructor,
        g = E.rounding,
        A = E.precision;
    if (f.s < 0 || !p || !p[0] || (!f.e && 1 == p[0] && 1 == p.length))
        return new E(p && !p[0] ? -1 / 0 : 1 != f.s ? NaN : p ? 0 : f);
    if (
        (null == t ? ((m = !1), (c = A)) : (c = t),
        (E.precision = c += 10),
        (i = (n = w(p)).charAt(0)),
        !(15e14 > Math.abs((s = f.e))))
    )
        return (
            (u = V(E, c + 2, A).times(s + "")),
            (f = z(new E(i + "." + n.slice(1)), c - 10).plus(u)),
            (E.precision = A),
            null == t ? U(f, A, g, (m = !0)) : f
        );
    for (; (i < 7 && 1 != i) || (1 == i && n.charAt(1) > 3); ) (i = (n = w((f = f.times(e)).d)).charAt(0)), h++;
    for (
        s = f.e,
            i > 1 ? ((f = new E("0." + n)), s++) : (f = new E(i + "." + n.slice(1))),
            d = f,
            l = a = f = k(f.minus(1), f.plus(1), c, 1),
            _ = U(f.times(f), c, 1),
            r = 3;
        ;
    ) {
        if (((a = U(a.times(_), c, 1)), w((u = l.plus(k(a, new E(r), c, 1))).d).slice(0, c) === w(l.d).slice(0, c))) {
            if (
                ((l = l.times(2)),
                0 !== s && (l = l.plus(V(E, c + 2, A).times(s + ""))),
                (l = k(l, new E(h), c, 1)),
                null != t)
            )
                return (E.precision = A), l;
            if (!P(l.d, c - 10, g, o)) return U(l, (E.precision = A), g, (m = !0));
            (E.precision = c += 10),
                (u = a = f = k(d.minus(1), d.plus(1), c, 1)),
                (_ = U(f.times(f), c, 1)),
                (r = o = 1);
        }
        (l = u), (r += 2);
    }
}
function q(e) {
    return String((e.s * e.s) / 0);
}
function Z(e, t) {
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
            m &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function X(e, t, n, i, r) {
    var s,
        a,
        o,
        l,
        u = e.precision,
        c = Math.ceil(u / 7);
    for (m = !1, l = n.times(n), o = new e(i); ; ) {
        if (
            ((a = k(o.times(l), new e(t++ * t++), u, 1)),
            (o = r ? i.plus(a) : i.minus(a)),
            (i = k(a.times(l), new e(t++ * t++), u, 1)),
            void 0 !== (a = o.plus(i)).d[c])
        ) {
            for (s = c; a.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
        }
        (s = o), (o = i), (i = a), (a = s);
    }
    return (m = !0), (a.d.length = c + 1), a;
}
function Q(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function J(e, t) {
    var n,
        i = t.s < 0,
        r = B(e, e.precision, 1),
        s = r.times(0.5);
    if ((t = t.abs()).lte(s)) return (_ = i ? 4 : 1), t;
    if ((n = t.divToInt(r)).isZero()) _ = i ? 3 : 2;
    else {
        if ((t = t.minus(n.times(r))).lte(s)) return (_ = W(n) ? (i ? 2 : 3) : i ? 4 : 1), t;
        _ = W(n) ? (i ? 1 : 4) : i ? 3 : 2;
    }
    return t.minus(r).abs();
}
function ee(e, t, n, i) {
    var r,
        s,
        a,
        o,
        l,
        u,
        c,
        _,
        f,
        p = e.constructor,
        E = void 0 !== n;
    if (
        (E ? (M(n, 1, 1e9), void 0 === i ? (i = p.rounding) : M(i, 0, 8)) : ((n = p.precision), (i = p.rounding)),
        e.isFinite())
    ) {
        for (
            a = (c = G(e)).indexOf("."),
                E ? ((r = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (r = t),
                a >= 0 &&
                    ((c = c.replace(".", "")),
                    ((f = new p(1)).e = c.length - a),
                    (f.d = x(G(f), 10, r)),
                    (f.e = f.d.length)),
                s = l = (_ = x(c, 10, r)).length;
            0 == _[--l];
        )
            _.pop();
        if (_[0]) {
            if (
                (a < 0
                    ? s--
                    : (((e = new p(e)).d = _), (e.e = s), (_ = (e = k(e, f, n, i, 0, r)).d), (s = e.e), (u = d)),
                (a = _[n]),
                (o = r / 2),
                (u = u || void 0 !== _[n + 1]),
                (u =
                    i < 4
                        ? (void 0 !== a || u) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : a > o || (a === o && (4 === i || u || (6 === i && 1 & _[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (_.length = n),
                u)
            )
                for (; ++_[--n] > r - 1; ) (_[n] = 0), n || (++s, _.unshift(1));
            for (l = _.length; !_[l - 1]; --l);
            for (a = 0, c = ""; a < l; a++) c += h.charAt(_[a]);
            if (E) {
                if (l > 1)
                    if (16 == t || 8 == t) {
                        for (a = 16 == t ? 4 : 3, --l; l % a; l++) c += "0";
                        for (l = (_ = x(c, r, t)).length; !_[l - 1]; --l);
                        for (a = 1, c = "1."; a < l; a++) c += h.charAt(_[a]);
                    } else c = c.charAt(0) + "." + c.slice(1);
                c = c + (s < 0 ? "p" : "p+") + s;
            } else if (s < 0) {
                for (; ++s; ) c = "0" + c;
                c = "0." + c;
            } else if (++s > l) for (s -= l; s--; ) c += "0";
            else s < l && (c = c.slice(0, s) + "." + c.slice(s));
        } else c = E ? "0p+0" : "0";
        c = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + c;
    } else c = q(e);
    return e.s < 0 ? "-" + c : c;
}
function et(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function en(e) {
    return new this(e).abs();
}
function ei(e) {
    return new this(e).acos();
}
function er(e) {
    return new this(e).acosh();
}
function es(e, t) {
    return new this(e).plus(t);
}
function ea(e) {
    return new this(e).asin();
}
function eo(e) {
    return new this(e).asinh();
}
function el(e) {
    return new this(e).atan();
}
function eu(e) {
    return new this(e).atanh();
}
function ec(e, t) {
    (e = new this(e)), (t = new this(t));
    var n,
        i = this.precision,
        r = this.rounding,
        s = i + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? B(this, i, r) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = B(this, s, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = s),
                          (this.rounding = 1),
                          (n = this.atan(k(e, t, s, 1))),
                          (t = B(this, s, 1)),
                          (this.precision = i),
                          (this.rounding = r),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(k(e, t, s, 1)))
                : ((n = B(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function ed(e) {
    return new this(e).cbrt();
}
function e_(e) {
    return U((e = new this(e)), e.e + 1, 2);
}
function eh(e, t, n) {
    return new this(e).clamp(t, n);
}
function ef(e) {
    if (!e || "object" != typeof e) throw Error(g + "Object expected");
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
        if (((n = s[t]), r && (this[n] = E[n]), void 0 !== (i = e[n])))
            if (y(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[n] = i;
            else throw Error(A + n + ": " + i);
    if (((n = "crypto"), r && (this[n] = E[n]), void 0 !== (i = e[n])))
        if (!0 === i || !1 === i || 0 === i || 1 === i)
            if (i)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(T);
            else this[n] = !1;
        else throw Error(A + n + ": " + i);
    return this;
}
function ep(e) {
    return new this(e).cos();
}
function eE(e) {
    return new this(e).cosh();
}
function em(e, t) {
    return new this(e).div(t);
}
function eg(e) {
    return new this(e).exp();
}
function eA(e) {
    return U((e = new this(e)), e.e + 1, 3);
}
function eI() {
    var e,
        t,
        n = new this(0);
    for (e = 0, m = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return (m = !0), new this(1 / 0);
            n = t;
        }
    return (m = !0), n.sqrt();
}
function eT(e) {
    return e instanceof ej || (e && e.toStringTag === S) || !1;
}
function eS(e) {
    return new this(e).ln();
}
function ey(e, t) {
    return new this(e).log(t);
}
function eC(e) {
    return new this(e).log(2);
}
function eN(e) {
    return new this(e).log(10);
}
function ev() {
    return K(this, arguments, -1);
}
function eR() {
    return K(this, arguments, 1);
}
function eO(e, t) {
    return new this(e).mod(t);
}
function eb(e, t) {
    return new this(e).mul(t);
}
function eD(e, t) {
    return new this(e).pow(t);
}
function eL(e) {
    var t,
        n,
        i,
        r,
        s = 0,
        a = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : M(e, 1, 1e9), (i = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(i)); s < i; )
                (r = t[s]) >= 429e7 ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[s++] = r % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((i *= 4)); s < i; )
                (r = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, s)
                    : (o.push(r % 1e7), (s += 4));
            s = i / 4;
        } else throw Error(T);
    else for (; s < i; ) o[s++] = (1e7 * Math.random()) | 0;
    for (i = o[--s], e %= 7, i && e && ((r = C(10, 7 - e)), (o[s] = ((i / r) | 0) * r)); 0 === o[s]; s--) o.pop();
    if (s < 0) (n = 0), (o = [0]);
    else {
        for (n = -1; 0 === o[0]; n -= 7) o.shift();
        for (i = 1, r = o[0]; r >= 10; r /= 10) i++;
        i < 7 && (n -= 7 - i);
    }
    return (a.e = n), (a.d = o), a;
}
function ew(e) {
    return U((e = new this(e)), e.e + 1, this.rounding);
}
function eM(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eP(e) {
    return new this(e).sin();
}
function ex(e) {
    return new this(e).sinh();
}
function ek(e) {
    return new this(e).sqrt();
}
function eU(e, t) {
    return new this(e).sub(t);
}
function eG() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (m = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (m = !0), U(n, this.precision, this.rounding);
}
function eF(e) {
    return new this(e).tan();
}
function eV(e) {
    return new this(e).tanh();
}
function eB(e) {
    return U((e = new this(e)), e.e + 1, 1);
}
(L[Symbol.for("nodejs.util.inspect.custom")] = L.toString), (L[Symbol.toStringTag] = "Decimal");
var ej = (L.constructor = (function e(t) {
    var n, i, r;
    function s(e) {
        var t, n, i;
        if (!(this instanceof s)) return new s(e);
        if (((this.constructor = s), eT(e))) {
            (this.s = e.s),
                m
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
                m
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
            return Z(this, e.toString());
        }
        if ("string" === i)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                O.test(e)
                    ? Z(this, e)
                    : (function (e, t) {
                          var n, i, r, s, a, o, l, u, c;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), O.test(t))) return Z(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (v.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (N.test(t)) n = 2;
                          else if (R.test(t)) n = 8;
                          else throw Error(A + t);
                          for (
                              (s = t.search(/p/i)) > 0
                                  ? ((l = +t.slice(s + 1)), (t = t.substring(2, s)))
                                  : (t = t.slice(2)),
                                  a = (s = t.indexOf(".")) >= 0,
                                  i = e.constructor,
                                  a &&
                                      ((s = (o = (t = t.replace(".", "")).length) - s), (r = Y(i, new i(n), s, 2 * s))),
                                  s = c = (u = x(t, n, 1e7)).length - 1;
                              0 === u[s];
                              --s
                          )
                              u.pop();
                          return s < 0
                              ? new i(0 * e.s)
                              : ((e.e = F(u, c)),
                                (e.d = u),
                                (m = !1),
                                a && (e = k(e, r, 4 * o)),
                                l && (e = e.times(54 > Math.abs(l) ? C(2, l) : ej.pow(2, l))),
                                (m = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === i) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), Z(this, e.toString());
        throw Error(A + e);
    }
    if (
        ((s.prototype = L),
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
        (s.config = s.set = ef),
        (s.clone = e),
        (s.isDecimal = eT),
        (s.abs = en),
        (s.acos = ei),
        (s.acosh = er),
        (s.add = es),
        (s.asin = ea),
        (s.asinh = eo),
        (s.atan = el),
        (s.atanh = eu),
        (s.atan2 = ec),
        (s.cbrt = ed),
        (s.ceil = e_),
        (s.clamp = eh),
        (s.cos = ep),
        (s.cosh = eE),
        (s.div = em),
        (s.exp = eg),
        (s.floor = eA),
        (s.hypot = eI),
        (s.ln = eS),
        (s.log = ey),
        (s.log10 = eN),
        (s.log2 = eC),
        (s.max = ev),
        (s.min = eR),
        (s.mod = eO),
        (s.mul = eb),
        (s.pow = eD),
        (s.random = eL),
        (s.round = ew),
        (s.sign = eM),
        (s.sin = eP),
        (s.sinh = ex),
        (s.sqrt = ek),
        (s.sub = eU),
        (s.sum = eG),
        (s.tan = eF),
        (s.tanh = eV),
        (s.trunc = eB),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < r.length;
        )
            t.hasOwnProperty((i = r[n++])) || (t[i] = this[i]);
    return s.config(t), s;
})(E));
(f = new ej(f)), (p = new ej(p)), new ej(10);
let eH = new ej(0);
function eY(e, t) {
    let n = t && t.cache ? t.cache : eq,
        i = t && t.serializer ? t.serializer : e$;
    return (
        t && t.strategy
            ? t.strategy
            : function (e, t) {
                  var n, i;
                  let r = 1 === e.length ? eW : eK;
                  return (n = t.cache.create()), (i = t.serializer), r.bind(this, e, n, i);
              }
    )(e, { cache: n, serializer: i });
}
function eW(e, t, n, i) {
    let r = null == i || "number" == typeof i || "boolean" == typeof i ? i : n(i),
        s = t.get(r);
    return void 0 === s && ((s = e.call(this, i)), t.set(r, s)), s;
}
function eK(e, t, n) {
    let i = Array.prototype.slice.call(arguments, 3),
        r = n(i),
        s = t.get(r);
    return void 0 === s && ((s = e.apply(this, i)), t.set(r, s)), s;
}
new ej(-0);
let e$ = function () {
    return JSON.stringify(arguments);
};
class ez {
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
let eq = {
        create: function () {
            return new ez();
        },
    },
    eZ = {
        variadic: function (e, t) {
            var n, i;
            return (n = t.cache.create()), (i = t.serializer), eK.bind(this, e, n, i);
        },
        monadic: function (e, t) {
            var n, i;
            return (n = t.cache.create()), (i = t.serializer), eW.bind(this, e, n, i);
        },
    };
function eX(e, t, n = Error) {
    if (!e) throw new n(t);
}
let eQ = eY((...e) => new Intl.NumberFormat(...e), { strategy: eZ.variadic });
eY((...e) => new Intl.PluralRules(...e), { strategy: eZ.variadic }),
    eY((...e) => new Intl.Locale(...e), { strategy: eZ.variadic });
let eJ = eY((...e) => new Intl.ListFormat(...e), { strategy: eZ.variadic });
function e0(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function e1(e) {
    return "function" == typeof e;
}
function e2(e, t, n, i, r) {
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
let e3 = new WeakMap();
function e6(e, t) {
    let n = e3.get(e);
    n || ((n = new Set(e)), e3.set(e, n));
    let i = t;
    for (;;) {
        if (n.has(i)) return i;
        let e = i.lastIndexOf("-");
        if (!~e) return;
        e >= 2 && "-" === i[e - 2] && (e -= 2), (i = i.slice(0, e));
    }
}
let e4 = {
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
    e5 = {
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
    e7 = /-u(?:-[0-9a-z]{2,8})+/gi;
function e8(e, t, n = Error) {
    if (!e) throw new n(t);
}
function e9(e, t, n) {
    let [i, r, s] = t.split("-"),
        a = !0;
    if (s && "$" === s[0]) {
        let t = "!" !== s[1],
            i = (t ? n[s.slice(1)] : n[s.slice(2)]).map((e) => e5[e] || [e]).reduce((e, t) => [...e, ...t], []);
        a &&= i.indexOf(e.region || "") > -1 == t;
    } else a &&= !e.region || "*" === s || s === e.region;
    return (a &&= !e.script || "*" === r || r === e.script), (a &&= !e.language || "*" === i || i === e.language);
}
function te(e) {
    return [e.language, e.script, e.region].filter(Boolean).join("-");
}
function tt(e, t, n) {
    for (let i of n.matches) {
        let r = e9(e, i.desired, n.matchVariables) && e9(t, i.supported, n.matchVariables);
        if ((i.oneway || r || (r = e9(e, i.supported, n.matchVariables) && e9(t, i.desired, n.matchVariables)), r)) {
            let r = 10 * i.distance;
            if (n.paradigmLocales.indexOf(te(e)) > -1 != n.paradigmLocales.indexOf(te(t)) > -1) return r - 1;
            return r;
        }
    }
    throw Error("No matching distance found");
}
let tn = eY(
        function (e, t) {
            let n = new Intl.Locale(e).maximize(),
                r = new Intl.Locale(t).maximize(),
                s = { language: n.language, script: n.script || "", region: n.region || "" },
                a = { language: r.language, script: r.script || "", region: r.region || "" },
                o = 0,
                l = (function () {
                    if (!i) {
                        let e = e4["written-new"]["0"]?.paradigmLocales?._locales.split(" "),
                            t = e4["written-new"].slice(1, 5);
                        i = {
                            matches: e4["written-new"].slice(5).map((e) => {
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
                    (o += tt(
                        { language: n.language, script: "", region: "" },
                        { language: r.language, script: "", region: "" },
                        l,
                    )),
                s.script !== a.script &&
                    (o += tt(
                        { language: n.language, script: s.script, region: "" },
                        { language: r.language, script: a.script, region: "" },
                        l,
                    )),
                s.region !== a.region && (o += tt(s, a, l)),
                o
            );
        },
        { serializer: (e) => `${e[0]}|${e[1]}` },
    ),
    ti = new WeakMap();
function tr(e) {
    return Intl.getCanonicalLocales(e)[0];
}
let ts = [
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
    ta = [
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
    to = new WeakMap();
function tl(e) {
    let t = to.get(e);
    return t || ((t = Object.create(null)), to.set(e, t)), t;
}
function tu(e, t) {
    let n = [],
        i = !1,
        r = !1,
        s = tl(e),
        a = s.dataLocale,
        o = tE.localeData[a];
    if (!o) throw TypeError("Invalid locale");
    let l = s.numberingSystem,
        u = o.digitalFormat[l];
    for (let e = 0; e < ta.length && !i; e++) {
        let a = ta[e],
            o = t[a.valueField],
            l = s[a.styleSlot],
            c = s[a.displaySlot],
            { unit: d, numberFormatUnit: _ } = a,
            h = Object.create(null);
        ("seconds" === d || "milliseconds" === d || "microseconds" === d) &&
            "numeric" === ("seconds" === d ? s.milliseconds : "milliseconds" === d ? s.microseconds : s.nanoseconds) &&
            ("seconds" === d
                ? (o += t.milliseconds / 1e3 + t.microseconds / 1e6 + t.nanoseconds / 1e9)
                : "milliseconds" === d
                  ? (o += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                  : (o += t.nanoseconds / 1e3),
            void 0 === s.fractionalDigits
                ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
                : ((h.maximumFractionDigits = s.fractionalDigits), (h.minimumFractionDigits = s.fractionalDigits)),
            (h.roundingMode = "trunc"),
            (i = !0));
        if (0 !== o || "auto" !== c) {
            let e;
            (h.numberingSystem = s.numberingSystem),
                "2-digit" === l && (h.minimumIntegerDigits = 2),
                "2-digit" !== l && "numeric" !== l && ((h.style = "unit"), (h.unit = _), (h.unitDisplay = l));
            let t = eQ(s.locale, h);
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
    let _ = eJ(s.locale, c),
        h = [];
    for (let e of n) {
        let t = "";
        for (let { value: n } of e) t += n;
        h.push(t);
    }
    let f = _.formatToParts(h),
        p = 0,
        E = n.length,
        m = [];
    for (let { type: e, value: t } of f)
        if ("element" === e) {
            for (let e of (eX(p < E, "Index out of bounds"), n[p])) m.push(e);
            p++;
        } else eX("literal" === e, "Type must be literal"), m.push({ type: "literal", value: t });
    return m;
}
function tc(e) {
    let t = (function e(t) {
        if ("number" == typeof t) return new ej(t);
        if ("bigint" == typeof t) return new ej(t.toString());
        if ((eX("symbol" != typeof t, "Symbol is not supported", TypeError), void 0 === t)) return new ej(NaN);
        if (null === t || 0 === t) return eH;
        if (!0 === t) return new ej(1);
        if ("string" == typeof t)
            try {
                return new ej(t);
            } catch {
                return new ej(NaN);
            }
        eX("object" == typeof t, "object expected", TypeError);
        let n = (function (e, t) {
            if ("object" == typeof e && null != e) {
                let n,
                    i = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                if (void 0 !== i) {
                    void 0 === t
                        ? (n = "default")
                        : "string" === t
                          ? (n = "string")
                          : (eX("number" === t, 'preferredType must be "string" or "number"'), (n = "number"));
                    let r = i.call(e, n);
                    if ("object" != typeof r) return r;
                    throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let n of (void 0 === t && (t = "number"),
                "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                    let t = e[n];
                    if (e1(t)) {
                        let n = t.call(e);
                        if ("object" != typeof n) return n;
                    }
                }
                throw TypeError("Cannot convert object to primitive value");
            }
            return e;
        })(t, "number");
        return eX("object" != typeof n, "object expected", TypeError), e(n);
    })(e);
    return eX(t.isInteger(), `${e} is not an integer`), t.toNumber();
}
function td(e) {
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
        (void 0 !== e.days && (t.days = tc(e.days)),
        void 0 !== e.hours && (t.hours = tc(e.hours)),
        void 0 !== e.microseconds && (t.microseconds = tc(e.microseconds)),
        void 0 !== e.milliseconds && (t.milliseconds = tc(e.milliseconds)),
        void 0 !== e.minutes && (t.minutes = tc(e.minutes)),
        void 0 !== e.months && (t.months = tc(e.months)),
        void 0 !== e.nanoseconds && (t.nanoseconds = tc(e.nanoseconds)),
        void 0 !== e.seconds && (t.seconds = tc(e.seconds)),
        void 0 !== e.weeks && (t.weeks = tc(e.weeks)),
        void 0 !== e.years && (t.years = tc(e.years)),
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
                for (let t of ts) {
                    if (e[t] < 0) return -1;
                    if (e[t] > 0) return 1;
                }
                return 0;
            })(e);
            for (let n of ts) {
                let i = e[n];
                if ((eX(isFinite(Number(i)), `${n} is not finite`), (i < 0 && t > 0) || (i > 0 && t < 0))) return !1;
            }
            return !0;
        })(t)
    )
        throw RangeError("Invalid duration format");
    return t;
}
let t_ = [
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
    th = {
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
    tf = [
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
    tp = [
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
class tE {
    constructor(e, t) {
        if (!(this && this instanceof tE ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const n = c(e),
            i = Object.create(null),
            r = void 0 === t ? Object.create(null) : e0(t),
            s = e2(r, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            a = e2(r, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== a && 0 > t_.indexOf(a)) throw RangeError(`Invalid numberingSystems: ${a}`);
        (i.nu = a), (i.localeMatcher = s);
        const { localeData: o, availableLocales: l } = tE,
            u = (function (e, t, n, i, r, s) {
                let a, o;
                if ("lookup" === n.localeMatcher)
                    a = (function (e, t, n) {
                        let i = { locale: "" };
                        for (let n of t) {
                            let t = n.replace(e7, ""),
                                r = e6(e, t);
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
                            let n = t.replace(e7, "");
                            return r.push(n), (e[n] = t), e;
                        }, {})),
                        (u = (function (e, t, n = 838) {
                            let i = 1 / 0,
                                r = { matchedDesiredLocale: "", distances: {} },
                                s = ti.get(t);
                            s ||
                                ((s = t.map((e) => {
                                    try {
                                        return Intl.getCanonicalLocales([e])[0] || e;
                                    } catch {
                                        return e;
                                    }
                                })),
                                ti.set(t, s));
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
                                                    l = tn(e, s) + 0 + 40 * n;
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
                          e8(e === e.toLowerCase(), "Expected extension to be lowercase"),
                              e8("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
                          let n = [],
                              i = [],
                              r = e.length,
                              s = 3;
                          for (; s < r; ) {
                              let a,
                                  o = e.indexOf("-", s);
                              a = -1 === o ? r - s : o - s;
                              let l = e.slice(s, s + a);
                              e8(a >= 2, "Expected a subtag to have at least 2 characters"),
                                  void 0 === t && 2 != a
                                      ? -1 === n.indexOf(l) && n.push(l)
                                      : 2 === a
                                        ? ((t = { key: l, value: "" }),
                                          void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                                        : t?.value === ""
                                          ? (t.value = l)
                                          : (e8(void 0 !== t, "Expected keyword to be defined"), (t.value += "-" + l)),
                                  (s += a + 1);
                          }
                          return { attributes: n, keywords: i };
                      })(a.extension).keywords
                    : [];
                let _ = [];
                for (let e of i) {
                    let t,
                        i = c?.[e] ?? [];
                    e8(Array.isArray(i), `keyLocaleData for ${e} must be an array`);
                    let r = i[0];
                    e8(void 0 === r || "string" == typeof r, "value must be a string or undefined");
                    let s = o.find((t) => t.key === e);
                    if (s) {
                        let n = s.value;
                        "" !== n
                            ? i.indexOf(n) > -1 && (t = { key: e, value: (r = n) })
                            : i.indexOf("true") > -1 && (t = { key: e, value: (r = "true") });
                    }
                    let a = n[e];
                    e8(null == a || "string" == typeof a, "optionsValue must be a string or undefined"),
                        "string" == typeof a &&
                            "" ===
                                (a = (function (e, t) {
                                    let n = t.toLowerCase();
                                    return e8(void 0 !== e, "ukey must be defined"), n;
                                })(e.toLowerCase(), a)) &&
                            (a = "true"),
                        a !== r && i.indexOf(a) > -1 && ((r = a), (t = void 0)),
                        t && _.push(t),
                        (d[e] = r);
                }
                return (
                    _.length > 0 &&
                        (u = (function (e, t, n) {
                            e8(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                            let i = "-u";
                            for (let e of t) i += `-${e}`;
                            for (let e of n) {
                                let { key: t, value: n } = e;
                                (i += `-${t}`), "" !== n && (i += `-${n}`);
                            }
                            if ("-u" === i) return tr(e);
                            let r = e.indexOf("-x-");
                            return tr(-1 === r ? e + i : e.slice(0, r) + i + e.slice(r));
                        })(u, [], _)),
                    (d.locale = u),
                    d
                );
            })(l, n, i, ["nu"], o, tE.getDefaultLocale),
            d = u.locale,
            _ = tl(this);
        (_.initializedDurationFormat = !0), (_.locale = d), (_.numberingSystem = u.nu);
        const h = e2(r, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (_.style = h), (_.dataLocale = u.dataLocale);
        let f = "";
        tp.forEach((e) => {
            let { styleSlot: t, displaySlot: n, unit: i, values: s, digitalDefault: a } = e,
                o = (function (e, t, n, i, r, s) {
                    let a = e2(t, e, "string", i, void 0),
                        o = "always";
                    void 0 === a &&
                        ("digital" === n
                            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (o = "auto"), (a = r))
                            : ((o = "auto"), (a = "numeric" === s || "2-digit" === s ? "numeric" : n)));
                    let l = e2(t, `${e}Display`, "string", ["always", "auto"], o);
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
                })(i, r, h, s, a, f);
            (_[t] = o.style),
                (_[n] = o.display),
                ("hours" === i || "minutes" === i || "seconds" === i || "milliseconds" === i || "microseconds" === i) &&
                    (f = o.style);
        }),
            (_.fractionalDigits = (function (e, t, n) {
                var i = e[t];
                if (void 0 === i) return n;
                let r = Number(i);
                if (isNaN(r) || r < 0 || r > 9) throw RangeError(`${r} is outside of range [0, 9]`);
                return Math.floor(r);
            })(r, "fractionalDigits", void 0));
    }
    resolvedOptions() {
        if (
            "object" != typeof this ||
            !(function (e, t) {
                if (!e1(e)) return !1;
                if ("object" != typeof t) return !1;
                let n = e.prototype;
                if ("object" != typeof n)
                    throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
                return Object.prototype.isPrototypeOf.call(n, t);
            })(tE, this)
        )
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let e = tl(this),
            t = {};
        for (let n of tf) {
            let i = e[n];
            "fractionalDigits" === n ? void 0 !== i && (i = Number(i)) : eX(void 0 !== i, `Missing internal slot ${n}`),
                (t[n] = i);
        }
        return t;
    }
    formatToParts(e) {
        if (void 0 === tl(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = tu(this, td(e)),
            n = [];
        for (let { type: e, unit: i, value: r } of t) {
            let t = { type: e, value: r };
            i && (t.unit = i), n.push(t);
        }
        return n;
    }
    format(e) {
        if (void 0 === tl(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let t = tu(this, td(e)),
            n = "";
        for (let { value: e } of t) n += e;
        return n;
    }
    static supportedLocalesOf(e, t) {
        return (function (e, t, n) {
            void 0 !== n && e2((n = e0(n)), "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            var i = Array.from(e);
            let r = [];
            for (let e of t) {
                let t = e6(i, e.replace(e7, ""));
                t && r.push(t);
            }
            return r;
        })(tE.availableLocales, c(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(th).reduce((e, t) => {
        tE.availableLocales.add(t);
        let n = th[t].nu;
        return (e[t] = { nu: n, digitalFormat: th[t].separator || n.reduce((e, t) => ((e[t] = ":"), e), {}) }), e;
    }, {});
    static getDefaultLocale = () => tE.__defaultLocale;
    static polyfilled = !0;
}
var tm = n(598748),
    tg =
        (((r = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (r.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (r.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (r.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (r.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (r.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (r.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (r.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (r.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (r.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        r),
    tA = n(503698),
    tI = n.n(tA),
    tT = n(834730),
    tS = (((s = {}).TEXT = "text"), (s.NUMBER = "number"), (s.IMAGE = "image"), (s.DURATION = "duration"), s),
    ty =
        (((a = {}).DATA = "data"),
        (a.CUSTOM_STRING = "custom_string"),
        (a.APPLICATION_ASSET = "application_asset"),
        (a.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        a),
    tC = (((o = {}).STRING = "string"), (o.NUMBER = "number"), (o.MEDIA = "media"), o);
let tN = { [tS.TEXT]: ["string"], [tS.NUMBER]: ["number"], [tS.IMAGE]: ["media"], [tS.DURATION]: ["number"] };
var tv = n(382307);
function tR(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
        ? (0, l.jsx)(tT.E, {
              variant: t,
              children: (0, l.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: tv.K,
                  alt: i ?? "",
              }),
          })
        : null;
}
var tO = n(10534);
function tb(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, l.jsx)(tT.E, {
        variant: n ?? "text-md/normal",
        children: (0, l.jsx)("div", {
            className: tI()(tO.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, l.jsx)("div", { className: tO.v }),
        }),
    });
}
var tD = n(647870);
function tL(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: r = !1,
            className: s,
            lineClamp: a,
            imagePosition: o = "right",
        } = e,
        { resolveFieldValue: u, numberFormat: c } = nr();
    if (null == t) return r ? (0, l.jsx)(tb, { variant: n, className: s }) : null;
    let d = u(t.fields.text, [tC.STRING, tC.NUMBER]),
        _ = u(t.fields.label, [tC.STRING, tC.NUMBER]),
        h = u(t.fields.icon, [tC.MEDIA]);
    if (null == d && null == _) return (0, l.jsx)(tb, { variant: n, className: s });
    let f = null != h ? (0, l.jsx)(tR, { media: h.media, variant: n }) : null;
    return (0, l.jsxs)("div", {
        className: tI()(tD.k, s),
        children: [
            null != f && "left" === o ? f : null,
            (0, l.jsxs)(tT.E, {
                variant: n,
                color: i,
                lineClamp: a,
                children: [
                    null == _ || "" === _.value
                        ? null
                        : "number" == typeof _.value
                          ? `${c.format(_.value)}: `
                          : `${_.value}: `,
                    null == d || "" === d.value ? "\u2013" : "number" == typeof d.value ? c.format(d.value) : d.value,
                ],
            }),
            null != f && "right" === o ? f : null,
        ],
    });
}
var tw = n(631825);
function tM() {
    let { surfaceConfig: e } = nr();
    return (0, l.jsx)("div", {
        className: tw.z,
        children: (0, l.jsx)(tL, {
            component: e.components.stat,
            className: tw.Q,
            variant: "text-xs/semibold",
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var tP = n(636378);
function tx(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: tI()(tP.z, t) });
}
var tk = n(254179);
function tU(e) {
    let { small: t = !1, image: n } = e;
    return (0, l.jsxs)("div", {
        className: tI()(tk.kL, { [tk.PG]: t }),
        children: [
            (0, l.jsxs)("div", {
                className: tk.Qs,
                children: [
                    (0, l.jsx)("div", { className: tk.wx }),
                    (0, l.jsx)("div", { className: tk.yF }),
                    (0, l.jsxs)("div", {
                        className: tk.M1,
                        children: [
                            (0, l.jsx)("div", { className: tk.dJ }),
                            (0, l.jsx)("div", { className: tk.dJ }),
                            (0, l.jsx)("div", { className: tk.dJ }),
                            (0, l.jsx)("div", { className: tk.dJ }),
                            (0, l.jsx)("div", { className: tk.dJ }),
                            (0, l.jsx)("div", { className: tk.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var tG = n(34767);
function tF(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = nr(),
        r = i(n.components.contained_image?.fields.image, [tC.MEDIA]);
    return (0, l.jsx)(tU, {
        small: t,
        image: (0, l.jsx)("div", {
            className: tG.ZS,
            children:
                null != r
                    ? (0, l.jsx)("img", { alt: "", src: r.media.url, className: tG.Sl })
                    : (0, l.jsx)(tx, { className: tG.h2 }),
        }),
    });
}
function tV(e) {
    let { media: t, ...n } = e;
    return (0, l.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var tB = n(182302),
    tj = n(787288);
function tH(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = nr(),
        i = n(t.components.hero_image?.fields.image, [tC.MEDIA]);
    return (0, l.jsx)(tU, {
        ...e,
        image: (0, l.jsx)("div", {
            className: tj.ZS,
            children:
                null != i
                    ? (0, l.jsx)(tV, { alt: "", media: i.media, className: tI()(tj.c8, tB.g) })
                    : (0, l.jsx)(tx, { className: tj.pm }),
        }),
    });
}
var tY = n(123292),
    tW = n(329632);
function tK(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: i, onClick: r } = nr();
    return (0, l.jsxs)("div", {
        className: tW.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tW.rf,
                children: [
                    n,
                    (0, l.jsxs)("div", {
                        className: tW.Qs,
                        children: [
                            (0, l.jsx)(tL, {
                                component: i.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, l.jsx)(tY.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: r,
                            }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var t$ = n(153236);
function tz() {
    let { surfaceConfig: e, resolveFieldValue: t } = nr(),
        n = t(e.components.contained_image?.fields.image, [tC.MEDIA]);
    return (0, l.jsx)(tK, {
        image: (0, l.jsx)("div", {
            className: t$.ZS,
            children:
                null != n
                    ? (0, l.jsx)("img", { alt: "", src: n.media.url, className: t$.Sl })
                    : (0, l.jsx)(tx, { className: t$.h2 }),
        }),
    });
}
var tq = n(72169);
function tZ() {
    let { surfaceConfig: e, resolveFieldValue: t } = nr(),
        n = t(e.components.hero_image?.fields.image, [tC.MEDIA]);
    return (0, l.jsx)(tK, {
        image:
            null != n
                ? (0, l.jsx)("div", {
                      className: tq.Xr,
                      children: (0, l.jsx)(tV, { media: n.media, className: tI()(tq.c8, tB.g) }),
                  })
                : (0, l.jsx)(tx, { className: tq.pm }),
    });
}
var tX = n(82433);
function tQ(e) {
    let { resolveFieldValue: t } = nr(),
        n = t(e.componentConfig?.fields.image, [tC.MEDIA]),
        i = t(e.componentConfig?.fields.name, [tC.STRING]),
        r = t(e.componentConfig?.fields.description, [tC.STRING]);
    return (0, l.jsxs)("div", {
        className: tX.E4,
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n.media.url, className: tX.bA, alt: "" })
                : (0, l.jsx)(tx, { className: tX.ET }),
            (0, l.jsxs)("div", {
                className: tX.Vx,
                children: [
                    null != i
                        ? (0, l.jsx)(tT.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, l.jsx)(tb, { variant: "text-sm/medium", width: "6ch" }),
                    null != r
                        ? (0, l.jsx)(tT.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: r.value,
                          })
                        : (0, l.jsx)(tb, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function tJ() {
    let { surfaceConfig: e } = nr();
    return (0, l.jsxs)("div", {
        className: tX.zr,
        children: [
            (0, l.jsx)(tQ, { componentConfig: e.components.item_1 }),
            (0, l.jsx)(tQ, { componentConfig: e.components.item_2 }),
            (0, l.jsx)(tQ, { componentConfig: e.components.item_3 }),
            (0, l.jsx)(tQ, { componentConfig: e.components.item_4 }),
        ],
    });
}
var t0 = n(469530);
function t1(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function t2() {
    let { surfaceConfig: e, resolveFieldValue: t } = nr(),
        n = u.useId(),
        i = t(e.components.objective?.fields.image, [tC.MEDIA]),
        r = t(e.components.objective?.fields.name, [tC.STRING]),
        s = t(e.components.objective?.fields.description, [tC.STRING]),
        a = t(e.components.progress?.fields.current, [tC.NUMBER]),
        o = t(e.components.progress?.fields.max, [tC.NUMBER]),
        c = null == a ? 0 : null == o ? t1(a.value) : 0 === o.value ? 0 : t1(a.value / o.value);
    return (0, l.jsxs)("div", {
        className: t0.zr,
        children: [
            null != i
                ? (0, l.jsx)("img", { src: i.media.url, className: t0.Sl, alt: "" })
                : (0, l.jsx)(tx, { className: t0.Sl }),
            (0, l.jsxs)("div", {
                className: t0.Qs,
                children: [
                    (0, l.jsx)("div", {
                        className: t0.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": a?.value ?? 0,
                        "aria-valuemax": o?.value ?? 1,
                        "aria-valuetext": null != o && null != a ? `${a.value} of ${o.value}` : void 0,
                        children: (0, l.jsx)("div", { className: t0.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, l.jsxs)("div", {
                        className: t0.P_,
                        children: [
                            (0, l.jsxs)("div", {
                                className: t0.n_,
                                children: [
                                    null != r
                                        ? (0, l.jsx)(tT.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, l.jsx)(tb, { variant: "heading-sm/medium" }),
                                    null != s
                                        ? (0, l.jsx)(tT.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: s.value,
                                          })
                                        : (0, l.jsx)(tb, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != a
                                ? (0, l.jsx)(tT.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: t0.l_,
                                      children: null != o ? `${a.value}/${o.value}` : `${t1(a.value)}%`,
                                  })
                                : (0, l.jsx)(tb, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var t3 = n(133233);
function t6(e) {
    let t,
        { component: n, required: i = !1 } = e,
        { resolveFieldValue: r, numberFormat: s, durationFormat: a } = nr();
    if (null == n)
        return i
            ? (0, l.jsxs)("div", {
                  children: [
                      (0, l.jsx)(tb, { variant: "text-sm/medium", width: "8ch" }),
                      (0, l.jsx)(tb, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let o = r(n.fields.value, [tC.STRING, tC.NUMBER]),
        u = r(n.fields.label, [tC.STRING]),
        c = r(n.fields.icon, [tC.MEDIA]);
    return (0, l.jsxs)("div", {
        className: t3.k,
        children: [
            null ==
            (t = (() => {
                if (null == o) return null;
                if (o.type === tC.STRING) return o.value;
                if (o.type === tC.NUMBER) {
                    if (o.presentationType === tS.NUMBER) return s.format(o.value);
                    if (o.presentationType === tS.DURATION) {
                        var e;
                        let t, n;
                        return a.format(
                            ((n = Math.floor(
                                (t = Number.isFinite((e = o.value)) ? Math.max(0, Math.floor(e)) : 0) / 36e5,
                            )),
                            {
                                hours: n,
                                minutes: Math.floor(t / 6e4) % 60,
                                seconds: Math.floor(t / 1e3) % 60,
                                milliseconds: t % 1e3,
                            }),
                        );
                    }
                }
                return null;
            })())
                ? (0, l.jsx)(tb, { variant: "text-sm/medium", width: "8ch" })
                : (0, l.jsxs)("div", {
                      className: t3.U,
                      children: [
                          (0, l.jsx)(tT.E, { variant: "text-sm/medium", lineClamp: 2, children: t }),
                          null != c && (0, l.jsx)(tR, { variant: "text-sm/medium", media: c.media }),
                      ],
                  }),
            null != u
                ? (0, l.jsx)(tT.E, { variant: "text-xs/normal", color: "text-subtle", lineClamp: 2, children: u.value })
                : (0, l.jsx)(tb, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var t4 = n(403118);
function t5() {
    let { surfaceConfig: e } = nr();
    return (0, l.jsxs)("div", {
        className: t4.w,
        children: [
            (0, l.jsx)(t6, { component: e.components.stat_1, required: !0 }),
            (0, l.jsx)(t6, { component: e.components.stat_2, required: !0 }),
            (0, l.jsx)(t6, { component: e.components.stat_3, required: !0 }),
            (0, l.jsx)(t6, { component: e.components.stat_4, required: !0 }),
            (0, l.jsx)(t6, { component: e.components.stat_5, required: !0 }),
            (0, l.jsx)(t6, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var t7 = n(615312);
function t8() {
    let { surfaceConfig: e } = nr();
    return (0, l.jsxs)("div", {
        className: t7.Q,
        children: [
            (0, l.jsx)(tL, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: t7.D,
            }),
            (0, l.jsx)(tL, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, l.jsx)(tL, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, l.jsx)(tL, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var t9 = n(871048);
function ne() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = nr(),
        i = t(e.components.contained_image?.fields.image, [tC.MEDIA]);
    return (0, l.jsxs)("div", {
        className: t9.zr,
        children: [
            null != n && (0, l.jsx)("div", { className: t9.wx, children: n }),
            (0, l.jsx)(t8, {}),
            null != i
                ? (0, l.jsx)("img", { alt: "", src: i.media.url, className: t9.Sl })
                : (0, l.jsx)(tx, { className: t9.h2 }),
        ],
    });
}
var nt = n(937305);
function nn() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = nr(),
        i = t(e.components.hero_image?.fields.image, [tC.MEDIA]);
    return (0, l.jsxs)("div", {
        className: nt.zr,
        children: [
            null != n && (0, l.jsx)("div", { className: nt.wx, children: n }),
            (0, l.jsx)("div", { className: nt.hQ, children: (0, l.jsx)(t8, {}) }),
            null != i
                ? (0, l.jsx)("div", {
                      className: nt._j,
                      children: (0, l.jsx)("div", {
                          className: nt.PX,
                          children: (0, l.jsx)("img", { alt: "", src: i.media.url, className: tI()(nt.Sl, tB.g) }),
                      }),
                  })
                : (0, l.jsx)(tx, { className: nt.h2 }),
        ],
    });
}
let ni = u.createContext(null);
function nr() {
    let e = u.useContext(ni);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let ns = {
    [tm.m.WIDGET_TOP]: {
        [tg.WIDGET_TOP_HERO]: () => (0, l.jsx)(nn, {}),
        [tg.WIDGET_TOP_CONTAINED]: () => (0, l.jsx)(ne, {}),
    },
    [tm.m.WIDGET_BOTTOM]: {
        [tg.WIDGET_BOTTOM_STATS]: () => (0, l.jsx)(t5, {}),
        [tg.WIDGET_BOTTOM_PROGRESS]: () => (0, l.jsx)(t2, {}),
        [tg.WIDGET_BOTTOM_COLLECTION]: () => (0, l.jsx)(tJ, {}),
    },
    [tm.m.MINI_PROFILE]: {
        [tg.MINI_PROFILE_HERO_STAT]: () => (0, l.jsx)(tZ, {}),
        [tg.MINI_PROFILE_CONTAINED_STAT]: () => (0, l.jsx)(tz, {}),
    },
    [tm.m.ACTIVITY_ACCESSORY]: { [tg.ACTIVITY_ACCESSORY_STAT]: () => (0, l.jsx)(tM, {}) },
    [tm.m.ADD_WIDGET_PREVIEW]: {
        [tg.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, l.jsx)(tH, { ...e }),
        [tg.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, l.jsx)(tF, { ...e }),
    },
};
function na(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: r, header: s, onClick: a, layoutProps: o } = e,
        c = u.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        d = u.useMemo(() => new tE(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let _ = ns[t]?.[n.layout];
    return null == _
        ? null
        : (0, l.jsx)(ni.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: r,
                  numberFormat: c,
                  durationFormat: d,
                  header: s,
                  onClick: a,
                  resolutionContext: i,
                  resolveFieldValue: function (e, t) {
                      return (function e(t, n, i) {
                          let { data: r, applicationAssets: s, getApplicationAssetUrl: a } = i;
                          if (null == t) return null;
                          if (t.value_type === ty.DATA) {
                              let s = r[t.value],
                                  a = t.presentation_type;
                              return null != s && tN[a]?.includes(s.type) && n.includes(s.type)
                                  ? "playtime_hours" === t.value && "number" === s.type && a === tS.DURATION
                                      ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: a }
                                      : { ...s, presentationType: a }
                                  : "fallback" in t && null != t.fallback
                                    ? e(t.fallback, n, i)
                                    : null;
                          }
                          if (t.value_type === ty.CUSTOM_STRING)
                              return t.presentation_type === tS.TEXT && n.includes("string")
                                  ? { type: "string", value: t.value, presentationType: tS.TEXT }
                                  : null;
                          if (t.value_type === ty.APPLICATION_ASSET) {
                              if (!n.includes("media")) return null;
                              let e = s.find((e) => e.key === t.value);
                              return null == e
                                  ? null
                                  : {
                                        type: "media",
                                        media: { url: a(e), width: e.metadata.width, height: e.metadata.height },
                                        presentationType: tS.IMAGE,
                                    };
                          }
                          return null;
                      })(e, t, i);
                  },
              },
              children: _(o),
          });
}
var no = n(87075);
function nl(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function nu(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: tC.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: tC.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: tC.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!nl(i)) continue;
                          n[e] = { type: tC.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === no.f.STRING) n[e.name] = { type: tC.STRING, value: e.value };
                      else if (e.type === no.f.NUMBER) n[e.name] = { type: tC.NUMBER, value: e.value };
                      else if (e.type === no.f.MEDIA) {
                          if (!nl(e.value)) continue;
                          n[e.name] = {
                              type: tC.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
