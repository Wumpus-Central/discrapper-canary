"use strict";
n.d(t, { W: () => ek });
var r,
    a,
    i = "0123456789abcdef",
    o =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    s =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    l = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    c = !0,
    u = "[DecimalError] ",
    d = u + "Invalid argument: ",
    _ = u + "Precision limit exceeded",
    p = u + "crypto unavailable",
    m = "[object Decimal]",
    f = Math.floor,
    g = Math.pow,
    h = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    b = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    E = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    y = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    v = o.length - 1,
    S = s.length - 1,
    T = { toStringTag: m };
function C(e) {
    var t,
        n,
        r,
        a = e.length - 1,
        i = "",
        o = e[0];
    if (a > 0) {
        for (i += o, t = 1; t < a; t++) (n = 7 - (r = e[t] + "").length) && (i += I(n)), (i += r);
        (n = 7 - (r = (o = e[t]) + "").length) && (i += I(n));
    } else if (0 === o) return "0";
    for (; o % 10 == 0; ) o /= 10;
    return i + o;
}
function D(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(d + e);
}
function O(e, t, n, r) {
    var a, i, o, s;
    for (i = e[0]; i >= 10; i /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (a = 0)) : ((a = Math.ceil((t + 1) / 7)), (t %= 7)),
        (i = g(10, 7 - t)),
        (s = (e[a] % i) | 0),
        null == r
            ? t < 3
                ? (0 == t ? (s = (s / 100) | 0) : 1 == t && (s = (s / 10) | 0),
                  (o = (n < 4 && 99999 == s) || (n > 3 && 49999 == s) || 5e4 == s || 0 == s))
                : (o =
                      (((n < 4 && s + 1 == i) || (n > 3 && s + 1 == i / 2)) &&
                          ((e[a + 1] / i / 100) | 0) == g(10, t - 2) - 1) ||
                      ((s == i / 2 || 0 == s) && ((e[a + 1] / i / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (s = (s / 1e3) | 0) : 1 == t ? (s = (s / 100) | 0) : 2 == t && (s = (s / 10) | 0),
                (o = ((r || n < 4) && 9999 == s) || (!r && n > 3 && 4999 == s)))
              : (o =
                    (((r || n < 4) && s + 1 == i) || (!r && n > 3 && s + 1 == i / 2)) &&
                    ((e[a + 1] / i / 1e3) | 0) == g(10, t - 3) - 1),
        o
    );
}
function w(e, t, n) {
    for (var r, a, o = [0], s = 0, l = e.length; s < l; ) {
        for (a = o.length; a--; ) o[a] *= t;
        for (o[0] += i.indexOf(e.charAt(s++)), r = 0; r < o.length; r++)
            o[r] > n - 1 && (void 0 === o[r + 1] && (o[r + 1] = 0), (o[r + 1] += (o[r] / n) | 0), (o[r] %= n));
    }
    return o.reverse();
}
(T.absoluteValue = T.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), R(e);
    }),
    (T.ceil = function () {
        return R(new this.constructor(this), this.e + 1, 2);
    }),
    (T.clampedTo = T.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(d + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (T.comparedTo = T.cmp =
        function (e) {
            var t,
                n,
                r,
                a,
                i = this.d,
                o = (e = new this.constructor(e)).d,
                s = this.s,
                l = e.s;
            if (!i || !o) return s && l ? (s !== l ? s : i === o ? 0 : !i ^ (s < 0) ? 1 : -1) : NaN;
            if (!i[0] || !o[0]) return i[0] ? s : o[0] ? -l : 0;
            if (s !== l) return s;
            if (this.e !== e.e) return (this.e > e.e) ^ (s < 0) ? 1 : -1;
            for (t = 0, n = (r = i.length) < (a = o.length) ? r : a; t < n; ++t)
                if (i[t] !== o[t]) return (i[t] > o[t]) ^ (s < 0) ? 1 : -1;
            return r === a ? 0 : (r > a) ^ (s < 0) ? 1 : -1;
        }),
    (T.cosine = T.cos =
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
                          var n, r, a;
                          if (t.isZero()) return t;
                          (r = t.d.length) < 32
                              ? (a = (1 / z(4, (n = Math.ceil(r / 3)))).toString())
                              : ((n = 16), (a = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = G(e, 1, t.times(a), new e(1)));
                          for (var i = n; i--; ) {
                              var o = t.times(t);
                              t = o.times(o).minus(o).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(r, W(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      R(2 == a || 3 == a ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(NaN);
        }),
    (T.cubeRoot = T.cbrt =
        function () {
            var e,
                t,
                n,
                r,
                a,
                i,
                o,
                s,
                l,
                u,
                d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
                c = !1,
                    (i = this.s * g(this.s * this, 1 / 3)) && Math.abs(i) != 1 / 0
                        ? (r = new d(i.toString()))
                        : ((n = C(this.d)),
                          (i = ((e = this.e) - n.length + 1) % 3) && (n += 1 == i || -2 == i ? "0" : "00"),
                          (i = g(n, 1 / 3)),
                          (e = f((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new d(
                              (n = i == 1 / 0 ? "5e" + e : (n = i.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    o = (e = d.precision) + 3;
                ;
            )
                if (
                    ((r = A((u = (l = (s = r).times(s).times(s)).plus(this)).plus(this).times(s), u.plus(l), o + 2, 1)),
                    C(s.d).slice(0, o) === (n = C(r.d)).slice(0, o))
                ) {
                    if ("9999" != (n = n.slice(o - 3, o + 1)) && (a || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (R(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!a && (R(s, e + 1, 0), s.times(s).times(s).eq(this))) {
                        r = s;
                        break;
                    }
                    (o += 4), (a = 1);
                }
            return (c = !0), R(r, e, d.rounding, t);
        }),
    (T.decimalPlaces = T.dp =
        function () {
            var e,
                t = this.d,
                n = NaN;
            if (t) {
                if (((n = ((e = t.length - 1) - f(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (T.dividedBy = T.div =
        function (e) {
            return A(this, new this.constructor(e));
        }),
    (T.dividedToIntegerBy = T.divToInt =
        function (e) {
            var t = this.constructor;
            return R(A(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (T.equals = T.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (T.floor = function () {
        return R(new this.constructor(this), this.e + 1, 3);
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
                n,
                r,
                a,
                i = this,
                o = i.constructor,
                s = new o(1);
            if (!i.isFinite()) return new o(i.s ? 1 / 0 : NaN);
            if (i.isZero()) return s;
            (n = o.precision),
                (r = o.rounding),
                (o.precision = n + Math.max(i.e, i.sd()) + 4),
                (o.rounding = 1),
                (a = i.d.length) < 32
                    ? (t = (1 / z(4, (e = Math.ceil(a / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (i = G(o, 1, i.times(t), new o(1), !0));
            for (var l, c = e, u = new o(8); c--; ) (l = i.times(i)), (i = s.minus(l.times(u.minus(l.times(u)))));
            return R(i, (o.precision = n), (o.rounding = r), !0);
        }),
    (T.hyperbolicSine = T.sinh =
        function () {
            var e,
                t,
                n,
                r,
                a = this,
                i = a.constructor;
            if (!a.isFinite() || a.isZero()) return new i(a);
            if (
                ((t = i.precision),
                (n = i.rounding),
                (i.precision = t + Math.max(a.e, a.sd()) + 4),
                (i.rounding = 1),
                (r = a.d.length) < 3)
            )
                a = G(i, 2, a, a, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (a = G(i, 2, (a = a.times(1 / z(5, e))), a, !0));
                for (var o, s = new i(5), l = new i(16), c = new i(20); e--; )
                    (o = a.times(a)), (a = a.times(s.plus(o.times(l.times(o).plus(c)))));
            }
            return (i.precision = t), (i.rounding = n), R(a, t, n, !0);
        }),
    (T.hyperbolicTangent = T.tanh =
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
                      A(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (T.inverseCosine = T.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                r = t.precision,
                a = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? L(t, r, a)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? L(t, r + 4, a).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = a),
                    e.times(2));
        }),
    (T.inverseHyperbolicCosine = T.acosh =
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
                    (c = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (c = !0),
                    (r.precision = e),
                    (r.rounding = t),
                    n.ln())
                  : new r(n);
        }),
    (T.inverseHyperbolicSine = T.asinh =
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
                  (c = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (c = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln());
        }),
    (T.inverseHyperbolicTangent = T.atanh =
        function () {
            var e,
                t,
                n,
                r,
                a = this,
                i = a.constructor;
            return a.isFinite()
                ? a.e >= 0
                    ? new i(a.abs().eq(1) ? a.s / 0 : a.isZero() ? a : NaN)
                    : ((e = i.precision), (t = i.rounding), Math.max((r = a.sd()), e) < -(2 * a.e) - 1)
                      ? R(new i(a), e, t, !0)
                      : ((i.precision = n = r - a.e),
                        (a = A(a.plus(1), new i(1).minus(a), n + e, 1)),
                        (i.precision = e + 4),
                        (i.rounding = 1),
                        (a = a.ln()),
                        (i.precision = e),
                        (i.rounding = t),
                        a.times(0.5))
                : new i(NaN);
        }),
    (T.inverseSine = T.asin =
        function () {
            var e,
                t,
                n,
                r,
                a = this,
                i = a.constructor;
            return a.isZero()
                ? new i(a)
                : ((t = a.abs().cmp(1)), (n = i.precision), (r = i.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = L(i, n + 4, r).times(0.5)).s = a.s), e)
                      : new i(NaN)
                  : ((i.precision = n + 6),
                    (i.rounding = 1),
                    (a = a.div(new i(1).minus(a.times(a)).sqrt().plus(1)).atan()),
                    (i.precision = n),
                    (i.rounding = r),
                    a.times(2));
        }),
    (T.inverseTangent = T.atan =
        function () {
            var e,
                t,
                n,
                r,
                a,
                i,
                o,
                s,
                l,
                u = this,
                d = u.constructor,
                _ = d.precision,
                p = d.rounding;
            if (u.isFinite()) {
                if (u.isZero()) return new d(u);
                else if (u.abs().eq(1) && _ + 4 <= S) return ((o = L(d, _ + 4, p).times(0.25)).s = u.s), o;
            } else {
                if (!u.s) return new d(NaN);
                if (_ + 4 <= S) return ((o = L(d, _ + 4, p).times(0.5)).s = u.s), o;
            }
            for (d.precision = s = _ + 10, d.rounding = 1, e = n = Math.min(28, (s / 7 + 2) | 0); e; --e)
                u = u.div(u.times(u).plus(1).sqrt().plus(1));
            for (c = !1, t = Math.ceil(s / 7), r = 1, l = u.times(u), o = new d(u), a = u; -1 !== e; )
                if (
                    ((a = a.times(l)),
                    (i = o.minus(a.div((r += 2)))),
                    (a = a.times(l)),
                    void 0 !== (o = i.plus(a.div((r += 2)))).d[t])
                )
                    for (e = t; o.d[e] === i.d[e] && e--; );
            return n && (o = o.times(2 << (n - 1))), (c = !0), R(o, (d.precision = _), (d.rounding = p), !0);
        }),
    (T.isFinite = function () {
        return !!this.d;
    }),
    (T.isInteger = T.isInt =
        function () {
            return !!this.d && f(this.e / 7) > this.d.length - 2;
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
                n,
                r,
                a,
                i,
                o,
                s,
                l = this.constructor,
                u = l.precision,
                d = l.rounding;
            if (null == e) (e = new l(10)), (t = !0);
            else {
                if (((n = (e = new l(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new l(NaN);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new l(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) a = !0;
                else {
                    for (r = n[0]; r % 10 == 0; ) r /= 10;
                    a = 1 !== r;
                }
            if (((c = !1), O((s = A((i = U(this, (o = u + 5))), t ? x(l, o + 10) : U(e, o), o, 1)).d, (r = u), d)))
                do
                    if (((o += 10), (s = A((i = U(this, o)), t ? x(l, o + 10) : U(e, o), o, 1)), !a)) {
                        +C(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = R(s, u + 1, 0));
                        break;
                    }
                while (O(s.d, (r += 10), d));
            return (c = !0), R(s, u, d);
        }),
    (T.minus = T.sub =
        function (e) {
            var t,
                n,
                r,
                a,
                i,
                o,
                s,
                l,
                u,
                d,
                _,
                p,
                m = this.constructor;
            if (((e = new m(e)), !this.d || !e.d))
                return (
                    this.s && e.s
                        ? this.d
                            ? (e.s = -e.s)
                            : (e = new m(e.d || this.s !== e.s ? this : NaN))
                        : (e = new m(NaN)),
                    e
                );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (((u = this.d), (p = e.d), (s = m.precision), (l = m.rounding), !u[0] || !p[0])) {
                if (p[0]) e.s = -e.s;
                else {
                    if (!u[0]) return new m(3 === l ? -0 : 0);
                    e = new m(this);
                }
                return c ? R(e, s, l) : e;
            }
            if (((n = f(e.e / 7)), (d = f(this.e / 7)), (u = u.slice()), (i = d - n))) {
                for (
                    (_ = i < 0) ? ((t = u), (i = -i), (o = p.length)) : ((t = p), (n = d), (o = u.length)),
                        i > (r = Math.max(Math.ceil(s / 7), o) + 2) && ((i = r), (t.length = 1)),
                        t.reverse(),
                        r = i;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((_ = (r = u.length) < (o = p.length)) && (o = r), r = 0; r < o; r++)
                    if (u[r] != p[r]) {
                        _ = u[r] < p[r];
                        break;
                    }
                i = 0;
            }
            for (_ && ((t = u), (u = p), (p = t), (e.s = -e.s)), o = u.length, r = p.length - o; r > 0; --r) u[o++] = 0;
            for (r = p.length; r > i; ) {
                if (u[--r] < p[r]) {
                    for (a = r; a && 0 === u[--a]; ) u[a] = 1e7 - 1;
                    --u[a], (u[r] += 1e7);
                }
                u[r] -= p[r];
            }
            for (; 0 === u[--o]; ) u.pop();
            for (; 0 === u[0]; u.shift()) --n;
            return u[0] ? ((e.d = u), (e.e = N(u, n)), c ? R(e, s, l) : e) : new m(3 === l ? -0 : 0);
        }),
    (T.modulo = T.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((c = !1),
                      9 == n.modulo
                          ? ((t = A(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = A(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (c = !0),
                      this.minus(t))
                    : R(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (T.naturalExponential = T.exp =
        function () {
            return B(this);
        }),
    (T.naturalLogarithm = T.ln =
        function () {
            return U(this);
        }),
    (T.negated = T.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), R(e);
        }),
    (T.plus = T.add =
        function (e) {
            var t,
                n,
                r,
                a,
                i,
                o,
                s,
                l,
                u,
                d,
                _ = this.constructor;
            if (((e = new _(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new _(e.d || this.s === e.s ? this : NaN)) : (e = new _(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((u = this.d), (d = e.d), (s = _.precision), (l = _.rounding), !u[0] || !d[0]))
                return d[0] || (e = new _(this)), c ? R(e, s, l) : e;
            if (((i = f(this.e / 7)), (r = f(e.e / 7)), (u = u.slice()), (a = i - r))) {
                for (
                    a < 0 ? ((n = u), (a = -a), (o = d.length)) : ((n = d), (r = i), (o = u.length)),
                        a > (o = (i = Math.ceil(s / 7)) > o ? i + 1 : o + 1) && ((a = o), (n.length = 1)),
                        n.reverse();
                    a--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((o = u.length) - (a = d.length) < 0 && ((a = o), (n = d), (d = u), (u = n)), t = 0; a; )
                (t = ((u[--a] = u[a] + d[a] + t) / 1e7) | 0), (u[a] %= 1e7);
            for (t && (u.unshift(t), ++r), o = u.length; 0 == u[--o]; ) u.pop();
            return (e.d = u), (e.e = N(u, r)), c ? R(e, s, l) : e;
        }),
    (T.precision = T.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(d + e);
            return this.d ? ((t = k(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (T.round = function () {
        var e = this.constructor;
        return R(new e(this), this.e + 1, e.rounding);
    }),
    (T.sine = T.sin =
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
                          if (r < 3) return t.isZero() ? t : G(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                              (t = G(e, 2, (t = t.times(1 / z(5, n))), t));
                          for (var a, i = new e(5), o = new e(16), s = new e(20); n--; )
                              (a = t.times(t)), (t = t.times(i.plus(a.times(o.times(a).minus(s)))));
                          return t;
                      })(r, W(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      R(a > 2 ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (T.squareRoot = T.sqrt =
        function () {
            var e,
                t,
                n,
                r,
                a,
                i,
                o = this.d,
                s = this.e,
                l = this.s,
                u = this.constructor;
            if (1 !== l || !o || !o[0]) return new u(!l || (l < 0 && (!o || o[0])) ? NaN : o ? this : 1 / 0);
            for (
                c = !1,
                    0 == (l = Math.sqrt(+this)) || l == 1 / 0
                        ? (((t = C(o)).length + s) % 2 == 0 && (t += "0"),
                          (l = Math.sqrt(t)),
                          (s = f((s + 1) / 2) - (s < 0 || s % 2)),
                          (r = new u(
                              (t = l == 1 / 0 ? "5e" + s : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + s),
                          )))
                        : (r = new u(l.toString())),
                    n = (s = u.precision) + 3;
                ;
            )
                if (
                    ((r = (i = r).plus(A(this, i, n + 2, 1)).times(0.5)),
                    C(i.d).slice(0, n) === (t = C(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (a || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (R(r, s + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!a && (R(i, s + 1, 0), i.times(i).eq(this))) {
                        r = i;
                        break;
                    }
                    (n += 4), (a = 1);
                }
            return (c = !0), R(r, s, u.rounding, e);
        }),
    (T.tangent = T.tan =
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
                      (n = A(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      R(2 == a || 4 == a ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (T.times = T.mul =
        function (e) {
            var t,
                n,
                r,
                a,
                i,
                o,
                s,
                l,
                u,
                d = this.constructor,
                _ = this.d,
                p = (e = new d(e)).d;
            if (((e.s *= this.s), !_ || !_[0] || !p || !p[0]))
                return new d(!e.s || (_ && !_[0] && !p) || (p && !p[0] && !_) ? NaN : !_ || !p ? e.s / 0 : 0 * e.s);
            for (
                n = f(this.e / 7) + f(e.e / 7),
                    (l = _.length) < (u = p.length) && ((i = _), (_ = p), (p = i), (o = l), (l = u), (u = o)),
                    i = [],
                    r = o = l + u;
                r--;
            )
                i.push(0);
            for (r = u; --r >= 0; ) {
                for (t = 0, a = l + r; a > r; )
                    (s = i[a] + p[r] * _[a - r - 1] + t), (i[a--] = (s % 1e7) | 0), (t = (s / 1e7) | 0);
                i[a] = ((i[a] + t) % 1e7) | 0;
            }
            for (; !i[--o]; ) i.pop();
            return t ? ++n : i.shift(), (e.d = i), (e.e = N(i, n)), c ? R(e, d.precision, d.rounding) : e;
        }),
    (T.toBinary = function (e, t) {
        return q(this, 2, e, t);
    }),
    (T.toDecimalPlaces = T.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (D(e, 0, 1e9), void 0 === t ? (t = r.rounding) : D(t, 0, 8), R(n, e + n.e + 1, t));
        }),
    (T.toExponential = function (e, t) {
        var n,
            r = this,
            a = r.constructor;
        return (
            void 0 === e
                ? (n = M(r, !0))
                : (D(e, 0, 1e9),
                  void 0 === t ? (t = a.rounding) : D(t, 0, 8),
                  (n = M((r = R(new a(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (T.toFixed = function (e, t) {
        var n,
            r,
            a = this.constructor;
        return (
            void 0 === e
                ? (n = M(this))
                : (D(e, 0, 1e9),
                  void 0 === t ? (t = a.rounding) : D(t, 0, 8),
                  (n = M((r = R(new a(this), e + this.e + 1, t)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (T.toFraction = function (e) {
        var t,
            n,
            r,
            a,
            i,
            o,
            s,
            l,
            u,
            _,
            p,
            m,
            f = this.d,
            h = this.constructor;
        if (!f) return new h(this);
        if (
            ((u = n = new h(1)),
            (r = l = new h(0)),
            (o = (i = (t = new h(r)).e = k(f) - this.e - 1) % 7),
            (t.d[0] = g(10, o < 0 ? 7 + o : o)),
            null == e)
        )
            e = i > 0 ? t : u;
        else {
            if (!(s = new h(e)).isInt() || s.lt(u)) throw Error(d + s);
            e = s.gt(t) ? (i > 0 ? t : u) : s;
        }
        for (
            c = !1, s = new h(C(f)), _ = h.precision, h.precision = i = 7 * f.length * 2;
            (p = A(s, t, 0, 1, 1)), 1 != (a = n.plus(p.times(r))).cmp(e);
        )
            (n = r), (r = a), (a = u), (u = l.plus(p.times(a))), (l = a), (a = t), (t = s.minus(p.times(a))), (s = a);
        return (
            (a = A(e.minus(n), r, 0, 1, 1)),
            (l = l.plus(a.times(u))),
            (n = n.plus(a.times(r))),
            (l.s = u.s = this.s),
            (m =
                1 >
                A(u, r, i, 1)
                    .minus(this)
                    .abs()
                    .cmp(A(l, n, i, 1).minus(this).abs())
                    ? [u, r]
                    : [l, n]),
            (h.precision = _),
            (c = !0),
            m
        );
    }),
    (T.toHexadecimal = T.toHex =
        function (e, t) {
            return q(this, 16, e, t);
        }),
    (T.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : D(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((c = !1), (n = A(n, e, 0, t, 1).times(e)), (c = !0), R(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (T.toNumber = function () {
        return +this;
    }),
    (T.toOctal = function (e, t) {
        return q(this, 8, e, t);
    }),
    (T.toPower = T.pow =
        function (e) {
            var t,
                n,
                r,
                a,
                i,
                o,
                s = this,
                l = s.constructor,
                u = +(e = new l(e));
            if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new l(g(+s, u));
            if ((s = new l(s)).eq(1)) return s;
            if (((r = l.precision), (i = l.rounding), e.eq(1))) return R(s, r, i);
            if ((t = f(e.e / 7)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 0x1fffffffffffff)
                return (a = P(l, s, n, r)), e.s < 0 ? new l(1).div(a) : R(a, r, i);
            if ((o = s.s) < 0) {
                if (t < e.d.length - 1) return new l(NaN);
                if (((1 & e.d[t]) == 0 && (o = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length)) return (s.s = o), s;
            }
            return (t =
                0 != (n = g(+s, u)) && isFinite(n)
                    ? new l(n + "").e
                    : f(u * (Math.log("0." + C(s.d)) / Math.LN10 + s.e + 1))) >
                l.maxE + 1 || t < l.minE - 1
                ? new l(t > 0 ? o / 0 : 0)
                : ((c = !1),
                  (l.rounding = s.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (a = B(e.times(U(s, r + n)), r)).d &&
                      O((a = R(a, r + 5, 1)).d, r, i) &&
                      ((t = r + 10),
                      +C((a = R(B(e.times(U(s, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (a = R(a, r + 1, 0))),
                  (a.s = o),
                  (c = !0),
                  (l.rounding = i),
                  R(a, r, i));
        }),
    (T.toPrecision = function (e, t) {
        var n,
            r = this,
            a = r.constructor;
        return (
            void 0 === e
                ? (n = M(r, r.e <= a.toExpNeg || r.e >= a.toExpPos))
                : (D(e, 1, 1e9),
                  void 0 === t ? (t = a.rounding) : D(t, 0, 8),
                  (n = M((r = R(new a(r), e, t)), e <= r.e || r.e <= a.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (T.toSignificantDigits = T.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (D(e, 1, 1e9), void 0 === t ? (t = n.rounding) : D(t, 0, 8)),
                R(new n(this), e, t)
            );
        }),
    (T.toString = function () {
        var e = this.constructor,
            t = M(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (T.truncated = T.trunc =
        function () {
            return R(new this.constructor(this), this.e + 1, 1);
        }),
    (T.valueOf = T.toJSON =
        function () {
            var e = this.constructor,
                t = M(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var A = (function () {
    function e(e, t, n) {
        var r,
            a = 0,
            i = e.length;
        for (e = e.slice(); i--; ) (r = e[i] * t + a), (e[i] = (r % n) | 0), (a = (r / n) | 0);
        return a && e.unshift(a), e;
    }
    function t(e, t, n, r) {
        var a, i;
        if (n != r) i = n > r ? 1 : -1;
        else
            for (a = i = 0; a < n; a++)
                if (e[a] != t[a]) {
                    i = e[a] > t[a] ? 1 : -1;
                    break;
                }
        return i;
    }
    function n(e, t, n, r) {
        for (var a = 0; n--; ) (e[n] -= a), (a = +(e[n] < t[n])), (e[n] = a * r + e[n] - t[n]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (a, i, o, s, l, c) {
        var u,
            d,
            _,
            p,
            m,
            g,
            h,
            b,
            E,
            y,
            v,
            S,
            T,
            C,
            D,
            O,
            w,
            A,
            M,
            N,
            x = a.constructor,
            L = a.s == i.s ? 1 : -1,
            k = a.d,
            I = i.d;
        if (!k || !k[0] || !I || !I[0])
            return new x(!a.s || !i.s || (k ? I && k[0] == I[0] : !I) ? NaN : (k && 0 == k[0]) || !I ? 0 * L : L / 0);
        for (
            c ? ((m = 1), (d = a.e - i.e)) : ((c = 1e7), (m = 7), (d = f(a.e / m) - f(i.e / m))),
                M = I.length,
                w = k.length,
                y = (E = new x(L)).d = [],
                _ = 0;
            I[_] == (k[_] || 0);
            _++
        );
        if (
            (I[_] > (k[_] || 0) && d--,
            null == o ? ((C = o = x.precision), (s = x.rounding)) : (C = l ? o + (a.e - i.e) + 1 : o),
            C < 0)
        )
            y.push(1), (g = !0);
        else {
            if (((C = (C / m + 2) | 0), (_ = 0), 1 == M)) {
                for (p = 0, I = I[0], C++; (_ < w || p) && C--; _++)
                    (D = p * c + (k[_] || 0)), (y[_] = (D / I) | 0), (p = (D % I) | 0);
                g = p || _ < w;
            } else {
                for (
                    (p = (c / (I[0] + 1)) | 0) > 1 &&
                        ((I = e(I, p, c)), (k = e(k, p, c)), (M = I.length), (w = k.length)),
                        O = M,
                        S = (v = k.slice(0, M)).length;
                    S < M;
                )
                    v[S++] = 0;
                (N = I.slice()).unshift(0), (A = I[0]), I[1] >= c / 2 && ++A;
                do
                    (p = 0),
                        (u = t(I, v, M, S)) < 0
                            ? ((T = v[0]),
                              M != S && (T = T * c + (v[1] || 0)),
                              (p = (T / A) | 0) > 1
                                  ? (p >= c && (p = c - 1),
                                    (b = (h = e(I, p, c)).length),
                                    (S = v.length),
                                    1 == (u = t(h, v, b, S)) && (p--, n(h, M < b ? N : I, b, c)))
                                  : (0 == p && (u = p = 1), (h = I.slice())),
                              (b = h.length) < S && h.unshift(0),
                              n(v, h, S, c),
                              -1 == u && ((S = v.length), (u = t(I, v, M, S)) < 1 && (p++, n(v, M < S ? N : I, S, c))),
                              (S = v.length))
                            : 0 === u && (p++, (v = [0])),
                        (y[_++] = p),
                        u && v[0] ? (v[S++] = k[O] || 0) : ((v = [k[O]]), (S = 1));
                while ((O++ < w || void 0 !== v[0]) && C--);
                g = void 0 !== v[0];
            }
            y[0] || y.shift();
        }
        if (1 == m) (E.e = d), (r = g);
        else {
            for (_ = 1, p = y[0]; p >= 10; p /= 10) _++;
            (E.e = _ + d * m - 1), R(E, l ? o + E.e + 1 : o, s, g);
        }
        return E;
    };
})();
function R(e, t, n, r) {
    var a,
        i,
        o,
        s,
        l,
        u,
        d,
        _,
        p,
        m = e.constructor;
    o: if (null != t) {
        if (!(_ = e.d)) return e;
        for (a = 1, s = _[0]; s >= 10; s /= 10) a++;
        if ((i = t - a) < 0) (i += 7), (o = t), (l = (((d = _[(p = 0)]) / g(10, a - o - 1)) % 10) | 0);
        else if ((p = Math.ceil((i + 1) / 7)) >= (s = _.length))
            if (r) {
                for (; s++ <= p; ) _.push(0);
                (d = l = 0), (a = 1), (i %= 7), (o = i - 7 + 1);
            } else break o;
        else {
            for (a = 1, d = s = _[p]; s >= 10; s /= 10) a++;
            (i %= 7), (l = (o = i - 7 + a) < 0 ? 0 : ((d / g(10, a - o - 1)) % 10) | 0);
        }
        if (
            ((r = r || t < 0 || void 0 !== _[p + 1] || (o < 0 ? d : d % g(10, a - o - 1))),
            (u =
                n < 4
                    ? (l || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : l > 5 ||
                      (5 == l &&
                          (4 == n ||
                              r ||
                              (6 == n && ((i > 0 ? (o > 0 ? d / g(10, a - o) : 0) : _[p - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !_[0])
        )
            return (
                (_.length = 0),
                u ? ((t -= e.e + 1), (_[0] = g(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (_[0] = e.e = 0),
                e
            );
        if (
            (0 == i
                ? ((_.length = p), (s = 1), p--)
                : ((_.length = p + 1),
                  (s = g(10, 7 - i)),
                  (_[p] = o > 0 ? (((d / g(10, a - o)) % g(10, o)) | 0) * s : 0)),
            u)
        )
            for (;;)
                if (0 == p) {
                    for (i = 1, o = _[0]; o >= 10; o /= 10) i++;
                    for (o = _[0] += s, s = 1; o >= 10; o /= 10) s++;
                    i != s && (e.e++, 1e7 == _[0] && (_[0] = 1));
                    break;
                } else {
                    if (((_[p] += s), 1e7 != _[p])) break;
                    (_[p--] = 0), (s = 1);
                }
        for (i = _.length; 0 === _[--i]; ) _.pop();
    }
    return c && (e.e > m.maxE ? ((e.d = null), (e.e = NaN)) : e.e < m.minE && ((e.e = 0), (e.d = [0]))), e;
}
function M(e, t, n) {
    if (!e.isFinite()) return j(e);
    var r,
        a = e.e,
        i = C(e.d),
        o = i.length;
    return (
        t
            ? (n && (r = n - o) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + I(r))
                  : o > 1 && (i = i.charAt(0) + "." + i.slice(1)),
              (i = i + (e.e < 0 ? "e" : "e+") + e.e))
            : a < 0
              ? ((i = "0." + I(-a - 1) + i), n && (r = n - o) > 0 && (i += I(r)))
              : a >= o
                ? ((i += I(a + 1 - o)), n && (r = n - a - 1) > 0 && (i = i + "." + I(r)))
                : ((r = a + 1) < o && (i = i.slice(0, r) + "." + i.slice(r)),
                  n && (r = n - o) > 0 && (a + 1 === o && (i += "."), (i += I(r)))),
        i
    );
}
function N(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function x(e, t, n) {
    if (t > v) throw ((c = !0), n && (e.precision = n), Error(_));
    return R(new e(o), t, 1, !0);
}
function L(e, t, n) {
    if (t > S) throw Error(_);
    return R(new e(s), t, n, !0);
}
function k(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function I(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function P(e, t, n, r) {
    var a,
        i = new e(1),
        o = Math.ceil(r / 7 + 4);
    for (c = !1; ; ) {
        if ((n % 2 && V((i = i.times(t)).d, o) && (a = !0), 0 === (n = f(n / 2)))) {
            (n = i.d.length - 1), a && 0 === i.d[n] && ++i.d[n];
            break;
        }
        V((t = t.times(t)).d, o);
    }
    return (c = !0), i;
}
function F(e) {
    return 1 & e.d[e.d.length - 1];
}
function Y(e, t, n) {
    for (var r, a, i = new e(t[0]), o = 0; ++o < t.length; ) {
        if (!(a = new e(t[o])).s) {
            i = a;
            break;
        }
        ((r = i.cmp(a)) === n || (0 === r && i.s === n)) && (i = a);
    }
    return i;
}
function B(e, t) {
    var n,
        r,
        a,
        i,
        o,
        s,
        l,
        u = 0,
        d = 0,
        _ = 0,
        p = e.constructor,
        m = p.rounding,
        f = p.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new p(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((c = !1), (l = f)) : (l = t), s = new p(0.03125); e.e > -2; ) (e = e.times(s)), (_ += 5);
    for (l += r = ((Math.log(g(2, _)) / Math.LN10) * 2 + 5) | 0, n = i = o = new p(1), p.precision = l; ; ) {
        if (
            ((i = R(i.times(e), l, 1)),
            (n = n.times(++d)),
            C((s = o.plus(A(i, n, l, 1))).d).slice(0, l) === C(o.d).slice(0, l))
        ) {
            for (a = _; a--; ) o = R(o.times(o), l, 1);
            if (null != t) return (p.precision = f), o;
            if (!(u < 3 && O(o.d, l - r, m, u))) return R(o, (p.precision = f), m, (c = !0));
            (p.precision = l += 10), (n = i = s = new p(1)), (d = 0), u++;
        }
        o = s;
    }
}
function U(e, t) {
    var n,
        r,
        a,
        i,
        o,
        s,
        l,
        u,
        d,
        _,
        p,
        m = 1,
        f = e,
        g = f.d,
        h = f.constructor,
        b = h.rounding,
        E = h.precision;
    if (f.s < 0 || !g || !g[0] || (!f.e && 1 == g[0] && 1 == g.length))
        return new h(g && !g[0] ? -1 / 0 : 1 != f.s ? NaN : g ? 0 : f);
    if (
        (null == t ? ((c = !1), (d = E)) : (d = t),
        (h.precision = d += 10),
        (r = (n = C(g)).charAt(0)),
        !(15e14 > Math.abs((i = f.e))))
    )
        return (
            (u = x(h, d + 2, E).times(i + "")),
            (f = U(new h(r + "." + n.slice(1)), d - 10).plus(u)),
            (h.precision = E),
            null == t ? R(f, E, b, (c = !0)) : f
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); ) (r = (n = C((f = f.times(e)).d)).charAt(0)), m++;
    for (
        i = f.e,
            r > 1 ? ((f = new h("0." + n)), i++) : (f = new h(r + "." + n.slice(1))),
            _ = f,
            l = o = f = A(f.minus(1), f.plus(1), d, 1),
            p = R(f.times(f), d, 1),
            a = 3;
        ;
    ) {
        if (((o = R(o.times(p), d, 1)), C((u = l.plus(A(o, new h(a), d, 1))).d).slice(0, d) === C(l.d).slice(0, d))) {
            if (
                ((l = l.times(2)),
                0 !== i && (l = l.plus(x(h, d + 2, E).times(i + ""))),
                (l = A(l, new h(m), d, 1)),
                null != t)
            )
                return (h.precision = E), l;
            if (!O(l.d, d - 10, b, s)) return R(l, (h.precision = E), b, (c = !0));
            (h.precision = d += 10),
                (u = o = f = A(_.minus(1), _.plus(1), d, 1)),
                (p = R(f.times(f), d, 1)),
                (a = s = 1);
        }
        (l = u), (a += 2);
    }
}
function j(e) {
    return String((e.s * e.s) / 0);
}
function H(e, t) {
    var n, r, a;
    for (
        (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
                ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
                : n < 0 && (n = t.length),
            r = 0;
        48 === t.charCodeAt(r);
        r++
    );
    for (a = t.length; 48 === t.charCodeAt(a - 1); --a);
    if ((t = t.slice(r, a))) {
        if (((a -= r), (e.e = n = n - r - 1), (e.d = []), (r = (n + 1) % 7), n < 0 && (r += 7), r < a)) {
            for (r && e.d.push(+t.slice(0, r)), a -= 7; r < a; ) e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
        } else r -= a;
        for (; r--; ) t += "0";
        e.d.push(+t),
            c &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function G(e, t, n, r, a) {
    var i,
        o,
        s,
        l,
        u = e.precision,
        d = Math.ceil(u / 7);
    for (c = !1, l = n.times(n), s = new e(r); ; ) {
        if (
            ((o = A(s.times(l), new e(t++ * t++), u, 1)),
            (s = a ? r.plus(o) : r.minus(o)),
            (r = A(o.times(l), new e(t++ * t++), u, 1)),
            void 0 !== (o = s.plus(r)).d[d])
        ) {
            for (i = d; o.d[i] === s.d[i] && i--; );
            if (-1 == i) break;
        }
        (i = s), (s = r), (r = o), (o = i);
    }
    return (c = !0), (o.d.length = d + 1), o;
}
function z(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function W(e, t) {
    var n,
        r = t.s < 0,
        i = L(e, e.precision, 1),
        o = i.times(0.5);
    if ((t = t.abs()).lte(o)) return (a = r ? 4 : 1), t;
    if ((n = t.divToInt(i)).isZero()) a = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(i))).lte(o)) return (a = F(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
        a = F(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(i).abs();
}
function q(e, t, n, a) {
    var o,
        s,
        l,
        c,
        u,
        d,
        _,
        p,
        m,
        f = e.constructor,
        g = void 0 !== n;
    if (
        (g ? (D(n, 1, 1e9), void 0 === a ? (a = f.rounding) : D(a, 0, 8)) : ((n = f.precision), (a = f.rounding)),
        e.isFinite())
    ) {
        for (
            l = (_ = M(e)).indexOf("."),
                g ? ((o = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (o = t),
                l >= 0 &&
                    ((_ = _.replace(".", "")),
                    ((m = new f(1)).e = _.length - l),
                    (m.d = w(M(m), 10, o)),
                    (m.e = m.d.length)),
                s = u = (p = w(_, 10, o)).length;
            0 == p[--u];
        )
            p.pop();
        if (p[0]) {
            if (
                (l < 0
                    ? s--
                    : (((e = new f(e)).d = p), (e.e = s), (p = (e = A(e, m, n, a, 0, o)).d), (s = e.e), (d = r)),
                (l = p[n]),
                (c = o / 2),
                (d = d || void 0 !== p[n + 1]),
                (d =
                    a < 4
                        ? (void 0 !== l || d) && (0 === a || a === (e.s < 0 ? 3 : 2))
                        : l > c || (l === c && (4 === a || d || (6 === a && 1 & p[n - 1]) || a === (e.s < 0 ? 8 : 7)))),
                (p.length = n),
                d)
            )
                for (; ++p[--n] > o - 1; ) (p[n] = 0), n || (++s, p.unshift(1));
            for (u = p.length; !p[u - 1]; --u);
            for (l = 0, _ = ""; l < u; l++) _ += i.charAt(p[l]);
            if (g) {
                if (u > 1)
                    if (16 == t || 8 == t) {
                        for (l = 16 == t ? 4 : 3, --u; u % l; u++) _ += "0";
                        for (u = (p = w(_, o, t)).length; !p[u - 1]; --u);
                        for (l = 1, _ = "1."; l < u; l++) _ += i.charAt(p[l]);
                    } else _ = _.charAt(0) + "." + _.slice(1);
                _ = _ + (s < 0 ? "p" : "p+") + s;
            } else if (s < 0) {
                for (; ++s; ) _ = "0" + _;
                _ = "0." + _;
            } else if (++s > u) for (s -= u; s--; ) _ += "0";
            else s < u && (_ = _.slice(0, s) + "." + _.slice(s));
        } else _ = g ? "0p+0" : "0";
        _ = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + _;
    } else _ = j(e);
    return e.s < 0 ? "-" + _ : _;
}
function V(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function $(e) {
    return new this(e).abs();
}
function Q(e) {
    return new this(e).acos();
}
function K(e) {
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
function en(e, t) {
    (e = new this(e)), (t = new this(t));
    var n,
        r = this.precision,
        a = this.rounding,
        i = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? L(this, r, a) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = L(this, i, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = i),
                          (this.rounding = 1),
                          (n = this.atan(A(e, t, i, 1))),
                          (t = L(this, i, 1)),
                          (this.precision = r),
                          (this.rounding = a),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(A(e, t, i, 1)))
                : ((n = L(this, i, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function er(e) {
    return new this(e).cbrt();
}
function ea(e) {
    return R((e = new this(e)), e.e + 1, 2);
}
function ei(e, t, n) {
    return new this(e).clamp(t, n);
}
function eo(e) {
    if (!e || "object" != typeof e) throw Error(u + "Object expected");
    var t,
        n,
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
    for (t = 0; t < i.length; t += 3)
        if (((n = i[t]), a && (this[n] = l[n]), void 0 !== (r = e[n])))
            if (f(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
            else throw Error(d + n + ": " + r);
    if (((n = "crypto"), a && (this[n] = l[n]), void 0 !== (r = e[n])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(p);
            else this[n] = !1;
        else throw Error(d + n + ": " + r);
    return this;
}
function es(e) {
    return new this(e).cos();
}
function el(e) {
    return new this(e).cosh();
}
function ec(e, t) {
    return new this(e).div(t);
}
function eu(e) {
    return new this(e).exp();
}
function ed(e) {
    return R((e = new this(e)), e.e + 1, 3);
}
function e_() {
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
    return e instanceof ek || (e && e.toStringTag === m) || !1;
}
function em(e) {
    return new this(e).ln();
}
function ef(e, t) {
    return new this(e).log(t);
}
function eg(e) {
    return new this(e).log(2);
}
function eh(e) {
    return new this(e).log(10);
}
function eb() {
    return Y(this, arguments, -1);
}
function eE() {
    return Y(this, arguments, 1);
}
function ey(e, t) {
    return new this(e).mod(t);
}
function ev(e, t) {
    return new this(e).mul(t);
}
function eS(e, t) {
    return new this(e).pow(t);
}
function eT(e) {
    var t,
        n,
        r,
        a,
        i = 0,
        o = new this(1),
        s = [];
    if ((void 0 === e ? (e = this.precision) : D(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); i < r; )
                (a = t[i]) >= 429e7 ? (t[i] = crypto.getRandomValues(new Uint32Array(1))[0]) : (s[i++] = a % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); i < r; )
                (a = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) + ((127 & t[i + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, i)
                    : (s.push(a % 1e7), (i += 4));
            i = r / 4;
        } else throw Error(p);
    else for (; i < r; ) s[i++] = (1e7 * Math.random()) | 0;
    for (r = s[--i], e %= 7, r && e && ((a = g(10, 7 - e)), (s[i] = ((r / a) | 0) * a)); 0 === s[i]; i--) s.pop();
    if (i < 0) (n = 0), (s = [0]);
    else {
        for (n = -1; 0 === s[0]; n -= 7) s.shift();
        for (r = 1, a = s[0]; a >= 10; a /= 10) r++;
        r < 7 && (n -= 7 - r);
    }
    return (o.e = n), (o.d = s), o;
}
function eC(e) {
    return R((e = new this(e)), e.e + 1, this.rounding);
}
function eD(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eO(e) {
    return new this(e).sin();
}
function ew(e) {
    return new this(e).sinh();
}
function eA(e) {
    return new this(e).sqrt();
}
function eR(e, t) {
    return new this(e).sub(t);
}
function eM() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (c = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (c = !0), R(n, this.precision, this.rounding);
}
function eN(e) {
    return new this(e).tan();
}
function ex(e) {
    return new this(e).tanh();
}
function eL(e) {
    return R((e = new this(e)), e.e + 1, 1);
}
(T[Symbol.for("nodejs.util.inspect.custom")] = T.toString), (T[Symbol.toStringTag] = "Decimal");
var ek = (T.constructor = (function e(t) {
    var n, r, a;
    function i(e) {
        var t, n, r;
        if (!(this instanceof i)) return new i(e);
        if (((this.constructor = i), ep(e))) {
            (this.s = e.s),
                c
                    ? !e.d || e.e > i.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : e.e < i.minE
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
                c
                    ? t > i.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : t < i.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = t), (this.d = [e]))
                    : ((this.e = t), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                e || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
            }
            return H(this, e.toString());
        }
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                y.test(e)
                    ? H(this, e)
                    : (function (e, t) {
                          var n, r, a, i, o, s, l, u, _;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), y.test(t))) return H(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (b.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (h.test(t)) n = 2;
                          else if (E.test(t)) n = 8;
                          else throw Error(d + t);
                          for (
                              (i = t.search(/p/i)) > 0
                                  ? ((l = +t.slice(i + 1)), (t = t.substring(2, i)))
                                  : (t = t.slice(2)),
                                  o = (i = t.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  o &&
                                      ((i = (s = (t = t.replace(".", "")).length) - i), (a = P(r, new r(n), i, 2 * i))),
                                  i = _ = (u = w(t, n, 1e7)).length - 1;
                              0 === u[i];
                              --i
                          )
                              u.pop();
                          return i < 0
                              ? new r(0 * e.s)
                              : ((e.e = N(u, _)),
                                (e.d = u),
                                (c = !1),
                                o && (e = A(e, a, 4 * s)),
                                l && (e = e.times(54 > Math.abs(l) ? g(2, l) : ek.pow(2, l))),
                                (c = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), H(this, e.toString());
        throw Error(d + e);
    }
    if (
        ((i.prototype = T),
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
        (i.config = i.set = eo),
        (i.clone = e),
        (i.isDecimal = ep),
        (i.abs = $),
        (i.acos = Q),
        (i.acosh = K),
        (i.add = X),
        (i.asin = Z),
        (i.asinh = J),
        (i.atan = ee),
        (i.atanh = et),
        (i.atan2 = en),
        (i.cbrt = er),
        (i.ceil = ea),
        (i.clamp = ei),
        (i.cos = es),
        (i.cosh = el),
        (i.div = ec),
        (i.exp = eu),
        (i.floor = ed),
        (i.hypot = e_),
        (i.ln = em),
        (i.log = ef),
        (i.log10 = eh),
        (i.log2 = eg),
        (i.max = eb),
        (i.min = eE),
        (i.mod = ey),
        (i.mul = ev),
        (i.pow = eS),
        (i.random = eT),
        (i.round = eC),
        (i.sign = eD),
        (i.sin = eO),
        (i.sinh = ew),
        (i.sqrt = eA),
        (i.sub = eR),
        (i.sum = eM),
        (i.tan = eN),
        (i.tanh = ex),
        (i.trunc = eL),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < a.length;
        )
            t.hasOwnProperty((r = a[n++])) || (t[r] = this[r]);
    return i.config(t), i;
})(l));
(o = new ek(o)), (s = new ek(s));
