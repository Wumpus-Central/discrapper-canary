"use strict";
n.d(t, { W: () => ej });
var r,
    i,
    s = 9e15,
    a = 1e9,
    o = "0123456789abcdef",
    l =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    u =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    c = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    d = !0,
    _ = "[DecimalError] ",
    f = _ + "Invalid argument: ",
    p = _ + "Precision limit exceeded",
    h = _ + "crypto unavailable",
    m = "[object Decimal]",
    E = Math.floor,
    g = Math.pow,
    A = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    I = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    T = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    S = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    y = 1e7,
    v = 7,
    N = 0x1fffffffffffff,
    C = l.length - 1,
    R = u.length - 1,
    O = { toStringTag: m };
function b(e) {
    var t,
        n,
        r,
        i = e.length - 1,
        s = "",
        a = e[0];
    if (i > 0) {
        for (s += a, t = 1; t < i; t++) (n = v - (r = e[t] + "").length) && (s += B(n)), (s += r);
        (n = v - (r = (a = e[t]) + "").length) && (s += B(n));
    } else if (0 === a) return "0";
    for (; a % 10 == 0; ) a /= 10;
    return s + a;
}
function D(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(f + e);
}
function L(e, t, n, r) {
    var i, s, a, o;
    for (s = e[0]; s >= 10; s /= 10) --t;
    return (
        --t < 0 ? ((t += v), (i = 0)) : ((i = Math.ceil((t + 1) / v)), (t %= v)),
        (s = g(10, v - t)),
        (o = (e[i] % s) | 0),
        null == r
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (a = (n < 4 && 99999 == o) || (n > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (a =
                      (((n < 4 && o + 1 == s) || (n > 3 && o + 1 == s / 2)) &&
                          ((e[i + 1] / s / 100) | 0) == g(10, t - 2) - 1) ||
                      ((o == s / 2 || 0 == o) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (a = ((r || n < 4) && 9999 == o) || (!r && n > 3 && 4999 == o)))
              : (a =
                    (((r || n < 4) && o + 1 == s) || (!r && n > 3 && o + 1 == s / 2)) &&
                    ((e[i + 1] / s / 1e3) | 0) == g(10, t - 3) - 1),
        a
    );
}
function w(e, t, n) {
    for (var r, i, s = [0], a = 0, l = e.length; a < l; ) {
        for (i = s.length; i--; ) s[i] *= t;
        for (s[0] += o.indexOf(e.charAt(a++)), r = 0; r < s.length; r++)
            s[r] > n - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), (s[r + 1] += (s[r] / n) | 0), (s[r] %= n));
    }
    return s.reverse();
}
function M(e, t) {
    var n, r, i;
    if (t.isZero()) return t;
    (r = t.d.length) < 32
        ? (i = (1 / Q(4, (n = Math.ceil(r / 3)))).toString())
        : ((n = 16), (i = "2.3283064365386962890625e-10")),
        (e.precision += n),
        (t = X(e, 1, t.times(i), new e(1)));
    for (var s = n; s--; ) {
        var a = t.times(t);
        t = a.times(a).minus(a).times(8).plus(1);
    }
    return (e.precision -= n), t;
}
(O.absoluteValue = O.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), x(e);
    }),
    (O.ceil = function () {
        return x(new this.constructor(this), this.e + 1, 2);
    }),
    (O.clampedTo = O.clamp =
        function (e, t) {
            var n = this,
                r = n.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s)) return new r(NaN);
            if (e.gt(t)) throw Error(f + t);
            return 0 > n.cmp(e) ? e : n.cmp(t) > 0 ? t : new r(n);
        }),
    (O.comparedTo = O.cmp =
        function (e) {
            var t,
                n,
                r,
                i,
                s = this,
                a = s.d,
                o = (e = new s.constructor(e)).d,
                l = s.s,
                u = e.s;
            if (!a || !o) return l && u ? (l !== u ? l : a === o ? 0 : !a ^ (l < 0) ? 1 : -1) : NaN;
            if (!a[0] || !o[0]) return a[0] ? l : o[0] ? -u : 0;
            if (l !== u) return l;
            if (s.e !== e.e) return (s.e > e.e) ^ (l < 0) ? 1 : -1;
            for (t = 0, n = (r = a.length) < (i = o.length) ? r : i; t < n; ++t)
                if (a[t] !== o[t]) return (a[t] > o[t]) ^ (l < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (l < 0) ? 1 : -1;
        }),
    (O.cosine = O.cos =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return n.d
                ? n.d[0]
                    ? ((e = r.precision),
                      (t = r.rounding),
                      (r.precision = e + Math.max(n.e, n.sd()) + v),
                      (r.rounding = 1),
                      (n = M(r, J(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      x(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(NaN);
        }),
    (O.cubeRoot = O.cbrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                c = this,
                _ = c.constructor;
            if (!c.isFinite() || c.isZero()) return new _(c);
            for (
                d = !1,
                    (s = c.s * g(c.s * c, 1 / 3)) && Math.abs(s) != 1 / 0
                        ? (r = new _(s.toString()))
                        : ((n = b(c.d)),
                          (s = ((e = c.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"),
                          (s = g(n, 1 / 3)),
                          (e = E((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new _(
                              (n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = c.s)),
                    a = (e = _.precision) + 3;
                ;
            )
                if (
                    ((r = P((u = (l = (o = r).times(o).times(o)).plus(c)).plus(c).times(o), u.plus(l), a + 2, 1)),
                    b(o.d).slice(0, a) === (n = b(r.d)).slice(0, a))
                ) {
                    if ("9999" != (n = n.slice(a - 3, a + 1)) && (i || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (x(r, e + 1, 1), (t = !r.times(r).times(r).eq(c)));
                        break;
                    }
                    if (!i && (x(o, e + 1, 0), o.times(o).times(o).eq(c))) {
                        r = o;
                        break;
                    }
                    (a += 4), (i = 1);
                }
            return (d = !0), x(r, e, _.rounding, t);
        }),
    (O.decimalPlaces = O.dp =
        function () {
            var e,
                t = this.d,
                n = NaN;
            if (t) {
                if (((n = ((e = t.length - 1) - E(this.e / v)) * v), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (O.dividedBy = O.div =
        function (e) {
            return P(this, new this.constructor(e));
        }),
    (O.dividedToIntegerBy = O.divToInt =
        function (e) {
            var t = this,
                n = t.constructor;
            return x(P(t, new n(e), 0, 1, 1), n.precision, n.rounding);
        }),
    (O.equals = O.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (O.floor = function () {
        return x(new this.constructor(this), this.e + 1, 3);
    }),
    (O.greaterThan = O.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (O.greaterThanOrEqualTo = O.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (O.hyperbolicCosine = O.cosh =
        function () {
            var e,
                t,
                n,
                r,
                i,
                s = this,
                a = s.constructor,
                o = new a(1);
            if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return o;
            (n = a.precision),
                (r = a.rounding),
                (a.precision = n + Math.max(s.e, s.sd()) + 4),
                (a.rounding = 1),
                (i = s.d.length) < 32
                    ? (t = (1 / Q(4, (e = Math.ceil(i / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (s = X(a, 1, s.times(t), new a(1), !0));
            for (var l, u = e, c = new a(8); u--; ) (l = s.times(s)), (s = o.minus(l.times(c.minus(l.times(c)))));
            return x(s, (a.precision = n), (a.rounding = r), !0);
        }),
    (O.hyperbolicSine = O.sinh =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
                ((t = s.precision),
                (n = s.rounding),
                (s.precision = t + Math.max(i.e, i.sd()) + 4),
                (s.rounding = 1),
                (r = i.d.length) < 3)
            )
                i = X(s, 2, i, i, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (i = X(s, 2, (i = i.times(1 / Q(5, e))), i, !0));
                for (var a, o = new s(5), l = new s(16), u = new s(20); e--; )
                    (a = i.times(i)), (i = i.times(o.plus(a.times(l.times(a).plus(u)))));
            }
            return (s.precision = t), (s.rounding = n), x(i, t, n, !0);
        }),
    (O.hyperbolicTangent = O.tanh =
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
                      (r.precision = e + 7),
                      (r.rounding = 1),
                      P(n.sinh(), n.cosh(), (r.precision = e), (r.rounding = t)))
                : new r(n.s);
        }),
    (O.inverseCosine = O.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                r = t.precision,
                i = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? F(t, r, i)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? F(t, r + 4, i).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = i),
                    e.times(2));
        }),
    (O.inverseHyperbolicCosine = O.acosh =
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
                    (d = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (d = !0),
                    (r.precision = e),
                    (r.rounding = t),
                    n.ln())
                  : new r(n);
        }),
    (O.inverseHyperbolicSine = O.asinh =
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
                  (d = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (d = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln());
        }),
    (O.inverseHyperbolicTangent = O.atanh =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                s = i.constructor;
            return i.isFinite()
                ? i.e >= 0
                    ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                    : ((e = s.precision), (t = s.rounding), Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                      ? x(new s(i), e, t, !0)
                      : ((s.precision = n = r - i.e),
                        (i = P(i.plus(1), new s(1).minus(i), n + e, 1)),
                        (s.precision = e + 4),
                        (s.rounding = 1),
                        (i = i.ln()),
                        (s.precision = e),
                        (s.rounding = t),
                        i.times(0.5))
                : new s(NaN);
        }),
    (O.inverseSine = O.asin =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                s = i.constructor;
            return i.isZero()
                ? new s(i)
                : ((t = i.abs().cmp(1)), (n = s.precision), (r = s.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = F(s, n + 4, r).times(0.5)).s = i.s), e)
                      : new s(NaN)
                  : ((s.precision = n + 6),
                    (s.rounding = 1),
                    (i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                    (s.precision = n),
                    (s.rounding = r),
                    i.times(2));
        }),
    (O.inverseTangent = O.atan =
        function () {
            var e,
                t,
                n,
                r,
                i,
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
                else if (u.abs().eq(1) && _ + 4 <= R) return ((a = F(c, _ + 4, f).times(0.25)).s = u.s), a;
            } else {
                if (!u.s) return new c(NaN);
                if (_ + 4 <= R) return ((a = F(c, _ + 4, f).times(0.5)).s = u.s), a;
            }
            for (c.precision = o = _ + 10, c.rounding = 1, e = n = Math.min(28, (o / v + 2) | 0); e; --e)
                u = u.div(u.times(u).plus(1).sqrt().plus(1));
            for (d = !1, t = Math.ceil(o / v), r = 1, l = u.times(u), a = new c(u), i = u; -1 !== e; )
                if (
                    ((i = i.times(l)),
                    (s = a.minus(i.div((r += 2)))),
                    (i = i.times(l)),
                    void 0 !== (a = s.plus(i.div((r += 2)))).d[t])
                )
                    for (e = t; a.d[e] === s.d[e] && e--; );
            return n && (a = a.times(2 << (n - 1))), (d = !0), x(a, (c.precision = _), (c.rounding = f), !0);
        }),
    (O.isFinite = function () {
        return !!this.d;
    }),
    (O.isInteger = O.isInt =
        function () {
            return !!this.d && E(this.e / v) > this.d.length - 2;
        }),
    (O.isNaN = function () {
        return !this.s;
    }),
    (O.isNegative = O.isNeg =
        function () {
            return this.s < 0;
        }),
    (O.isPositive = O.isPos =
        function () {
            return this.s > 0;
        }),
    (O.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (O.lessThan = O.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (O.lessThanOrEqualTo = O.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (O.logarithm = O.log =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u = this,
                c = u.constructor,
                _ = c.precision,
                f = c.rounding,
                p = 5;
            if (null == e) (e = new c(10)), (t = !0);
            else {
                if (((n = (e = new c(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new c(NaN);
                t = e.eq(10);
            }
            if (((n = u.d), u.s < 0 || !n || !n[0] || u.eq(1)))
                return new c(n && !n[0] ? -1 / 0 : 1 != u.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) s = !0;
                else {
                    for (i = n[0]; i % 10 == 0; ) i /= 10;
                    s = 1 !== i;
                }
            if (((d = !1), L((l = P((a = K(u, (o = _ + p))), (r = t ? G(c, o + 10) : K(e, o)), o, 1)).d, (i = _), f)))
                do
                    if (((o += 10), (l = P((a = K(u, o)), (r = t ? G(c, o + 10) : K(e, o)), o, 1)), !s)) {
                        +b(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = x(l, _ + 1, 0));
                        break;
                    }
                while (L(l.d, (i += 10), f));
            return (d = !0), x(l, _, f);
        }),
    (O.minus = O.sub =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                c,
                _,
                f,
                p = this,
                h = p.constructor;
            if (((e = new h(e)), !p.d || !e.d))
                return (
                    p.s && e.s ? (p.d ? (e.s = -e.s) : (e = new h(e.d || p.s !== e.s ? p : NaN))) : (e = new h(NaN)), e
                );
            if (p.s != e.s) return (e.s = -e.s), p.plus(e);
            if (((u = p.d), (f = e.d), (o = h.precision), (l = h.rounding), !u[0] || !f[0])) {
                if (f[0]) e.s = -e.s;
                else {
                    if (!u[0]) return new h(3 === l ? -0 : 0);
                    e = new h(p);
                }
                return d ? x(e, o, l) : e;
            }
            if (((n = E(e.e / v)), (c = E(p.e / v)), (u = u.slice()), (s = c - n))) {
                for (
                    (_ = s < 0) ? ((t = u), (s = -s), (a = f.length)) : ((t = f), (n = c), (a = u.length)),
                        s > (r = Math.max(Math.ceil(o / v), a) + 2) && ((s = r), (t.length = 1)),
                        t.reverse(),
                        r = s;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((_ = (r = u.length) < (a = f.length)) && (a = r), r = 0; r < a; r++)
                    if (u[r] != f[r]) {
                        _ = u[r] < f[r];
                        break;
                    }
                s = 0;
            }
            for (_ && ((t = u), (u = f), (f = t), (e.s = -e.s)), a = u.length, r = f.length - a; r > 0; --r) u[a++] = 0;
            for (r = f.length; r > s; ) {
                if (u[--r] < f[r]) {
                    for (i = r; i && 0 === u[--i]; ) u[i] = y - 1;
                    --u[i], (u[r] += y);
                }
                u[r] -= f[r];
            }
            for (; 0 === u[--a]; ) u.pop();
            for (; 0 === u[0]; u.shift()) --n;
            return u[0] ? ((e.d = u), (e.e = U(u, n)), d ? x(e, o, l) : e) : new h(3 === l ? -0 : 0);
        }),
    (O.modulo = O.mod =
        function (e) {
            var t,
                n = this,
                r = n.constructor;
            return ((e = new r(e)), n.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!n.d || n.d[0])
                    ? ((d = !1),
                      9 == r.modulo ? ((t = P(n, e.abs(), 0, 3, 1)), (t.s *= e.s)) : (t = P(n, e, 0, r.modulo, 1)),
                      (t = t.times(e)),
                      (d = !0),
                      n.minus(t))
                    : x(new r(n), r.precision, r.rounding)
                : new r(NaN);
        }),
    (O.naturalExponential = O.exp =
        function () {
            return W(this);
        }),
    (O.naturalLogarithm = O.ln =
        function () {
            return K(this);
        }),
    (O.negated = O.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), x(e);
        }),
    (O.plus = O.add =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                c,
                _ = this,
                f = _.constructor;
            if (((e = new f(e)), !_.d || !e.d))
                return _.s && e.s ? _.d || (e = new f(e.d || _.s === e.s ? _ : NaN)) : (e = new f(NaN)), e;
            if (_.s != e.s) return (e.s = -e.s), _.minus(e);
            if (((u = _.d), (c = e.d), (o = f.precision), (l = f.rounding), !u[0] || !c[0]))
                return c[0] || (e = new f(_)), d ? x(e, o, l) : e;
            if (((s = E(_.e / v)), (r = E(e.e / v)), (u = u.slice()), (i = s - r))) {
                for (
                    i < 0 ? ((n = u), (i = -i), (a = c.length)) : ((n = c), (r = s), (a = u.length)),
                        i > (a = (s = Math.ceil(o / v)) > a ? s + 1 : a + 1) && ((i = a), (n.length = 1)),
                        n.reverse();
                    i--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((a = u.length) - (i = c.length) < 0 && ((i = a), (n = c), (c = u), (u = n)), t = 0; i; )
                (t = ((u[--i] = u[i] + c[i] + t) / y) | 0), (u[i] %= y);
            for (t && (u.unshift(t), ++r), a = u.length; 0 == u[--a]; ) u.pop();
            return (e.d = u), (e.e = U(u, r)), d ? x(e, o, l) : e;
        }),
    (O.precision = O.sd =
        function (e) {
            var t,
                n = this;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(f + e);
            return n.d ? ((t = V(n.d)), e && n.e + 1 > t && (t = n.e + 1)) : (t = NaN), t;
        }),
    (O.round = function () {
        var e = this,
            t = e.constructor;
        return x(new t(e), e.e + 1, t.rounding);
    }),
    (O.sine = O.sin =
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
                      (r.precision = e + Math.max(n.e, n.sd()) + v),
                      (r.rounding = 1),
                      (n = Z(r, J(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      x(i > 2 ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (O.squareRoot = O.sqrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                s,
                a = this,
                o = a.d,
                l = a.e,
                u = a.s,
                c = a.constructor;
            if (1 !== u || !o || !o[0]) return new c(!u || (u < 0 && (!o || o[0])) ? NaN : o ? a : 1 / 0);
            for (
                d = !1,
                    0 == (u = Math.sqrt(+a)) || u == 1 / 0
                        ? (((t = b(o)).length + l) % 2 == 0 && (t += "0"),
                          (u = Math.sqrt(t)),
                          (l = E((l + 1) / 2) - (l < 0 || l % 2)),
                          (r = new c(
                              (t = u == 1 / 0 ? "5e" + l : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + l),
                          )))
                        : (r = new c(u.toString())),
                    n = (l = c.precision) + 3;
                ;
            )
                if (
                    ((r = (s = r).plus(P(a, s, n + 2, 1)).times(0.5)), b(s.d).slice(0, n) === (t = b(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (x(r, l + 1, 1), (e = !r.times(r).eq(a)));
                        break;
                    }
                    if (!i && (x(s, l + 1, 0), s.times(s).eq(a))) {
                        r = s;
                        break;
                    }
                    (n += 4), (i = 1);
                }
            return (d = !0), x(r, l, c.rounding, e);
        }),
    (O.tangent = O.tan =
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
                      (n = P(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      x(2 == i || 4 == i ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (O.times = O.mul =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                c = this,
                _ = c.constructor,
                f = c.d,
                p = (e = new _(e)).d;
            if (((e.s *= c.s), !f || !f[0] || !p || !p[0]))
                return new _(!e.s || (f && !f[0] && !p) || (p && !p[0] && !f) ? NaN : !f || !p ? e.s / 0 : 0 * e.s);
            for (
                n = E(c.e / v) + E(e.e / v),
                    (l = f.length) < (u = p.length) && ((s = f), (f = p), (p = s), (a = l), (l = u), (u = a)),
                    s = [],
                    r = a = l + u;
                r--;
            )
                s.push(0);
            for (r = u; --r >= 0; ) {
                for (t = 0, i = l + r; i > r; )
                    (o = s[i] + p[r] * f[i - r - 1] + t), (s[i--] = (o % y) | 0), (t = (o / y) | 0);
                s[i] = ((s[i] + t) % y) | 0;
            }
            for (; !s[--a]; ) s.pop();
            return t ? ++n : s.shift(), (e.d = s), (e.e = U(s, n)), d ? x(e, _.precision, _.rounding) : e;
        }),
    (O.toBinary = function (e, t) {
        return ee(this, 2, e, t);
    }),
    (O.toDecimalPlaces = O.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (D(e, 0, a), void 0 === t ? (t = r.rounding) : D(t, 0, 8), x(n, e + n.e + 1, t));
        }),
    (O.toExponential = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = k(r, !0))
                : (D(e, 0, a),
                  void 0 === t ? (t = i.rounding) : D(t, 0, 8),
                  (n = k((r = x(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (O.toFixed = function (e, t) {
        var n,
            r,
            i = this,
            s = i.constructor;
        return (
            void 0 === e
                ? (n = k(i))
                : (D(e, 0, a),
                  void 0 === t ? (t = s.rounding) : D(t, 0, 8),
                  (n = k((r = x(new s(i), e + i.e + 1, t)), !1, e + r.e + 1))),
            i.isNeg() && !i.isZero() ? "-" + n : n
        );
    }),
    (O.toFraction = function (e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c,
            _,
            p,
            h = this,
            m = h.d,
            E = h.constructor;
        if (!m) return new E(h);
        if (
            ((u = n = new E(1)),
            (r = l = new E(0)),
            (a = (s = (t = new E(r)).e = V(m) - h.e - 1) % v),
            (t.d[0] = g(10, a < 0 ? v + a : a)),
            null == e)
        )
            e = s > 0 ? t : u;
        else {
            if (!(o = new E(e)).isInt() || o.lt(u)) throw Error(f + o);
            e = o.gt(t) ? (s > 0 ? t : u) : o;
        }
        for (
            d = !1, o = new E(b(m)), c = E.precision, E.precision = s = m.length * v * 2;
            (_ = P(o, t, 0, 1, 1)), 1 != (i = n.plus(_.times(r))).cmp(e);
        )
            (n = r), (r = i), (i = u), (u = l.plus(_.times(i))), (l = i), (i = t), (t = o.minus(_.times(i))), (o = i);
        return (
            (i = P(e.minus(n), r, 0, 1, 1)),
            (l = l.plus(i.times(u))),
            (n = n.plus(i.times(r))),
            (l.s = u.s = h.s),
            (p =
                1 >
                P(u, r, s, 1)
                    .minus(h)
                    .abs()
                    .cmp(P(l, n, s, 1).minus(h).abs())
                    ? [u, r]
                    : [l, n]),
            (E.precision = c),
            (d = !0),
            p
        );
    }),
    (O.toHexadecimal = O.toHex =
        function (e, t) {
            return ee(this, 16, e, t);
        }),
    (O.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : D(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((d = !1), (n = P(n, e, 0, t, 1).times(e)), (d = !0), x(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (O.toNumber = function () {
        return +this;
    }),
    (O.toOctal = function (e, t) {
        return ee(this, 8, e, t);
    }),
    (O.toPower = O.pow =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o = this,
                l = o.constructor,
                u = +(e = new l(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new l(g(+o, u));
            if ((o = new l(o)).eq(1)) return o;
            if (((r = l.precision), (s = l.rounding), e.eq(1))) return x(o, r, s);
            if ((t = E(e.e / v)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= N)
                return (i = H(l, o, n, r)), e.s < 0 ? new l(1).div(i) : x(i, r, s);
            if ((a = o.s) < 0) {
                if (t < e.d.length - 1) return new l(NaN);
                if (((1 & e.d[t]) == 0 && (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = a), o;
            }
            return (t =
                0 != (n = g(+o, u)) && isFinite(n)
                    ? new l(n + "").e
                    : E(u * (Math.log("0." + b(o.d)) / Math.LN10 + o.e + 1))) >
                l.maxE + 1 || t < l.minE - 1
                ? new l(t > 0 ? a / 0 : 0)
                : ((d = !1),
                  (l.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (i = W(e.times(K(o, r + n)), r)).d &&
                      L((i = x(i, r + 5, 1)).d, r, s) &&
                      ((t = r + 10),
                      +b((i = x(W(e.times(K(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (i = x(i, r + 1, 0))),
                  (i.s = a),
                  (d = !0),
                  (l.rounding = s),
                  x(i, r, s));
        }),
    (O.toPrecision = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = k(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
                : (D(e, 1, a),
                  void 0 === t ? (t = i.rounding) : D(t, 0, 8),
                  (n = k((r = x(new i(r), e, t)), e <= r.e || r.e <= i.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (O.toSignificantDigits = O.toSD =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return (
                void 0 === e
                    ? ((e = r.precision), (t = r.rounding))
                    : (D(e, 1, a), void 0 === t ? (t = r.rounding) : D(t, 0, 8)),
                x(new r(n), e, t)
            );
        }),
    (O.toString = function () {
        var e = this,
            t = e.constructor,
            n = k(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + n : n;
    }),
    (O.truncated = O.trunc =
        function () {
            return x(new this.constructor(this), this.e + 1, 1);
        }),
    (O.valueOf = O.toJSON =
        function () {
            var e = this,
                t = e.constructor,
                n = k(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
            return e.isNeg() ? "-" + n : n;
        });
var P = (function () {
    function e(e, t, n) {
        var r,
            i = 0,
            s = e.length;
        for (e = e.slice(); s--; ) (r = e[s] * t + i), (e[s] = (r % n) | 0), (i = (r / n) | 0);
        return i && e.unshift(i), e;
    }
    function t(e, t, n, r) {
        var i, s;
        if (n != r) s = n > r ? 1 : -1;
        else
            for (i = s = 0; i < n; i++)
                if (e[i] != t[i]) {
                    s = e[i] > t[i] ? 1 : -1;
                    break;
                }
        return s;
    }
    function n(e, t, n, r) {
        for (var i = 0; n--; ) (e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (i, s, a, o, l, u) {
        var c,
            d,
            _,
            f,
            p,
            h,
            m,
            g,
            A,
            I,
            T,
            S,
            N,
            C,
            R,
            O,
            b,
            D,
            L,
            w,
            M = i.constructor,
            P = i.s == s.s ? 1 : -1,
            k = i.d,
            U = s.d;
        if (!k || !k[0] || !U || !U[0])
            return new M(!i.s || !s.s || (k ? U && k[0] == U[0] : !U) ? NaN : (k && 0 == k[0]) || !U ? 0 * P : P / 0);
        for (
            u ? ((p = 1), (d = i.e - s.e)) : ((u = y), (p = v), (d = E(i.e / p) - E(s.e / p))),
                L = U.length,
                b = k.length,
                I = (A = new M(P)).d = [],
                _ = 0;
            U[_] == (k[_] || 0);
            _++
        );
        if (
            (U[_] > (k[_] || 0) && d--,
            null == a ? ((C = a = M.precision), (o = M.rounding)) : (C = l ? a + (i.e - s.e) + 1 : a),
            C < 0)
        )
            I.push(1), (h = !0);
        else {
            if (((C = (C / p + 2) | 0), (_ = 0), 1 == L)) {
                for (f = 0, U = U[0], C++; (_ < b || f) && C--; _++)
                    (R = f * u + (k[_] || 0)), (I[_] = (R / U) | 0), (f = (R % U) | 0);
                h = f || _ < b;
            } else {
                for (
                    (f = (u / (U[0] + 1)) | 0) > 1 &&
                        ((U = e(U, f, u)), (k = e(k, f, u)), (L = U.length), (b = k.length)),
                        O = L,
                        S = (T = k.slice(0, L)).length;
                    S < L;
                )
                    T[S++] = 0;
                (w = U.slice()).unshift(0), (D = U[0]), U[1] >= u / 2 && ++D;
                do
                    (f = 0),
                        (c = t(U, T, L, S)) < 0
                            ? ((N = T[0]),
                              L != S && (N = N * u + (T[1] || 0)),
                              (f = (N / D) | 0) > 1
                                  ? (f >= u && (f = u - 1),
                                    (g = (m = e(U, f, u)).length),
                                    (S = T.length),
                                    1 == (c = t(m, T, g, S)) && (f--, n(m, L < g ? w : U, g, u)))
                                  : (0 == f && (c = f = 1), (m = U.slice())),
                              (g = m.length) < S && m.unshift(0),
                              n(T, m, S, u),
                              -1 == c && ((S = T.length), (c = t(U, T, L, S)) < 1 && (f++, n(T, L < S ? w : U, S, u))),
                              (S = T.length))
                            : 0 === c && (f++, (T = [0])),
                        (I[_++] = f),
                        c && T[0] ? (T[S++] = k[O] || 0) : ((T = [k[O]]), (S = 1));
                while ((O++ < b || void 0 !== T[0]) && C--);
                h = void 0 !== T[0];
            }
            I[0] || I.shift();
        }
        if (1 == p) (A.e = d), (r = h);
        else {
            for (_ = 1, f = I[0]; f >= 10; f /= 10) _++;
            (A.e = _ + d * p - 1), x(A, l ? a + A.e + 1 : a, o, h);
        }
        return A;
    };
})();
function x(e, t, n, r) {
    var i,
        s,
        a,
        o,
        l,
        u,
        c,
        _,
        f,
        p = e.constructor;
    u: if (null != t) {
        if (!(_ = e.d)) return e;
        for (i = 1, o = _[0]; o >= 10; o /= 10) i++;
        if ((s = t - i) < 0) (s += v), (a = t), (l = (((c = _[(f = 0)]) / g(10, i - a - 1)) % 10) | 0);
        else if ((f = Math.ceil((s + 1) / v)) >= (o = _.length))
            if (r) {
                for (; o++ <= f; ) _.push(0);
                (c = l = 0), (i = 1), (s %= v), (a = s - v + 1);
            } else break u;
        else {
            for (i = 1, c = o = _[f]; o >= 10; o /= 10) i++;
            (s %= v), (l = (a = s - v + i) < 0 ? 0 : ((c / g(10, i - a - 1)) % 10) | 0);
        }
        if (
            ((r = r || t < 0 || void 0 !== _[f + 1] || (a < 0 ? c : c % g(10, i - a - 1))),
            (u =
                n < 4
                    ? (l || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : l > 5 ||
                      (5 == l &&
                          (4 == n ||
                              r ||
                              (6 == n && ((s > 0 ? (a > 0 ? c / g(10, i - a) : 0) : _[f - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !_[0])
        )
            return (
                (_.length = 0),
                u ? ((t -= e.e + 1), (_[0] = g(10, (v - (t % v)) % v)), (e.e = -t || 0)) : (_[0] = e.e = 0),
                e
            );
        if (
            (0 == s
                ? ((_.length = f), (o = 1), f--)
                : ((_.length = f + 1),
                  (o = g(10, v - s)),
                  (_[f] = a > 0 ? (((c / g(10, i - a)) % g(10, a)) | 0) * o : 0)),
            u)
        )
            for (;;)
                if (0 == f) {
                    for (s = 1, a = _[0]; a >= 10; a /= 10) s++;
                    for (a = _[0] += o, o = 1; a >= 10; a /= 10) o++;
                    s != o && (e.e++, _[0] == y && (_[0] = 1));
                    break;
                } else {
                    if (((_[f] += o), _[f] != y)) break;
                    (_[f--] = 0), (o = 1);
                }
        for (s = _.length; 0 === _[--s]; ) _.pop();
    }
    return d && (e.e > p.maxE ? ((e.d = null), (e.e = NaN)) : e.e < p.minE && ((e.e = 0), (e.d = [0]))), e;
}
function k(e, t, n) {
    if (!e.isFinite()) return $(e);
    var r,
        i = e.e,
        s = b(e.d),
        a = s.length;
    return (
        t
            ? (n && (r = n - a) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + B(r))
                  : a > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((s = "0." + B(-i - 1) + s), n && (r = n - a) > 0 && (s += B(r)))
              : i >= a
                ? ((s += B(i + 1 - a)), n && (r = n - i - 1) > 0 && (s = s + "." + B(r)))
                : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)),
                  n && (r = n - a) > 0 && (i + 1 === a && (s += "."), (s += B(r)))),
        s
    );
}
function U(e, t) {
    var n = e[0];
    for (t *= v; n >= 10; n /= 10) t++;
    return t;
}
function G(e, t, n) {
    if (t > C) throw ((d = !0), n && (e.precision = n), Error(p));
    return x(new e(l), t, 1, !0);
}
function F(e, t, n) {
    if (t > R) throw Error(p);
    return x(new e(u), t, n, !0);
}
function V(e) {
    var t = e.length - 1,
        n = t * v + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function B(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function H(e, t, n, r) {
    var i,
        s = new e(1),
        a = Math.ceil(r / v + 4);
    for (d = !1; ; ) {
        if ((n % 2 && et((s = s.times(t)).d, a) && (i = !0), 0 === (n = E(n / 2)))) {
            (n = s.d.length - 1), i && 0 === s.d[n] && ++s.d[n];
            break;
        }
        et((t = t.times(t)).d, a);
    }
    return (d = !0), s;
}
function j(e) {
    return 1 & e.d[e.d.length - 1];
}
function Y(e, t, n) {
    for (var r, i, s = new e(t[0]), a = 0; ++a < t.length; ) {
        if (!(i = new e(t[a])).s) {
            s = i;
            break;
        }
        ((r = s.cmp(i)) === n || (0 === r && s.s === n)) && (s = i);
    }
    return s;
}
function W(e, t) {
    var n,
        r,
        i,
        s,
        a,
        o,
        l,
        u = 0,
        c = 0,
        _ = 0,
        f = e.constructor,
        p = f.rounding,
        h = f.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new f(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((d = !1), (l = h)) : (l = t), o = new f(0.03125); e.e > -2; ) (e = e.times(o)), (_ += 5);
    for (l += r = ((Math.log(g(2, _)) / Math.LN10) * 2 + 5) | 0, n = s = a = new f(1), f.precision = l; ; ) {
        if (
            ((s = x(s.times(e), l, 1)),
            (n = n.times(++c)),
            b((o = a.plus(P(s, n, l, 1))).d).slice(0, l) === b(a.d).slice(0, l))
        ) {
            for (i = _; i--; ) a = x(a.times(a), l, 1);
            if (null != t) return (f.precision = h), a;
            if (!(u < 3 && L(a.d, l - r, p, u))) return x(a, (f.precision = h), p, (d = !0));
            (f.precision = l += 10), (n = s = o = new f(1)), (c = 0), u++;
        }
        a = o;
    }
}
function K(e, t) {
    var n,
        r,
        i,
        s,
        a,
        o,
        l,
        u,
        c,
        _,
        f,
        p = 1,
        h = 10,
        m = e,
        E = m.d,
        g = m.constructor,
        A = g.rounding,
        I = g.precision;
    if (m.s < 0 || !E || !E[0] || (!m.e && 1 == E[0] && 1 == E.length))
        return new g(E && !E[0] ? -1 / 0 : 1 != m.s ? NaN : E ? 0 : m);
    if (
        (null == t ? ((d = !1), (c = I)) : (c = t),
        (g.precision = c += h),
        (r = (n = b(E)).charAt(0)),
        !(15e14 > Math.abs((s = m.e))))
    )
        return (
            (u = G(g, c + 2, I).times(s + "")),
            (m = K(new g(r + "." + n.slice(1)), c - h).plus(u)),
            (g.precision = I),
            null == t ? x(m, I, A, (d = !0)) : m
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); ) (r = (n = b((m = m.times(e)).d)).charAt(0)), p++;
    for (
        s = m.e,
            r > 1 ? ((m = new g("0." + n)), s++) : (m = new g(r + "." + n.slice(1))),
            _ = m,
            l = a = m = P(m.minus(1), m.plus(1), c, 1),
            f = x(m.times(m), c, 1),
            i = 3;
        ;
    ) {
        if (((a = x(a.times(f), c, 1)), b((u = l.plus(P(a, new g(i), c, 1))).d).slice(0, c) === b(l.d).slice(0, c))) {
            if (
                ((l = l.times(2)),
                0 !== s && (l = l.plus(G(g, c + 2, I).times(s + ""))),
                (l = P(l, new g(p), c, 1)),
                null != t)
            )
                return (g.precision = I), l;
            if (!L(l.d, c - h, A, o)) return x(l, (g.precision = I), A, (d = !0));
            (g.precision = c += h),
                (u = a = m = P(_.minus(1), _.plus(1), c, 1)),
                (f = x(m.times(m), c, 1)),
                (i = o = 1);
        }
        (l = u), (i += 2);
    }
}
function $(e) {
    return String((e.s * e.s) / 0);
}
function z(e, t) {
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
        if (((i -= r), (e.e = n = n - r - 1), (e.d = []), (r = (n + 1) % v), n < 0 && (r += v), r < i)) {
            for (r && e.d.push(+t.slice(0, r)), i -= v; r < i; ) e.d.push(+t.slice(r, (r += v)));
            r = v - (t = t.slice(r)).length;
        } else r -= i;
        for (; r--; ) t += "0";
        e.d.push(+t),
            d &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function q(e, t) {
    var n, r, i, s, a, o, l, u, c;
    if (t.indexOf("_") > -1) {
        if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), S.test(t))) return z(e, t);
    } else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
    if (I.test(t)) (n = 16), (t = t.toLowerCase());
    else if (A.test(t)) n = 2;
    else if (T.test(t)) n = 8;
    else throw Error(f + t);
    for (
        (s = t.search(/p/i)) > 0 ? ((l = +t.slice(s + 1)), (t = t.substring(2, s))) : (t = t.slice(2)),
            a = (s = t.indexOf(".")) >= 0,
            r = e.constructor,
            a && ((s = (o = (t = t.replace(".", "")).length) - s), (i = H(r, new r(n), s, 2 * s))),
            s = c = (u = w(t, n, y)).length - 1;
        0 === u[s];
        --s
    )
        u.pop();
    return s < 0
        ? new r(0 * e.s)
        : ((e.e = U(u, c)),
          (e.d = u),
          (d = !1),
          a && (e = P(e, i, 4 * o)),
          l && (e = e.times(54 > Math.abs(l) ? g(2, l) : ej.pow(2, l))),
          (d = !0),
          e);
}
function Z(e, t) {
    var n,
        r = t.d.length;
    if (r < 3) return t.isZero() ? t : X(e, 2, t, t);
    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n), (t = X(e, 2, (t = t.times(1 / Q(5, n))), t));
    for (var i, s = new e(5), a = new e(16), o = new e(20); n--; )
        (i = t.times(t)), (t = t.times(s.plus(i.times(a.times(i).minus(o)))));
    return t;
}
function X(e, t, n, r, i) {
    var s,
        a,
        o,
        l,
        u = e.precision,
        c = Math.ceil(u / v);
    for (d = !1, l = n.times(n), o = new e(r); ; ) {
        if (
            ((a = P(o.times(l), new e(t++ * t++), u, 1)),
            (o = i ? r.plus(a) : r.minus(a)),
            (r = P(a.times(l), new e(t++ * t++), u, 1)),
            void 0 !== (a = o.plus(r)).d[c])
        ) {
            for (s = c; a.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
        }
        (s = o), (o = r), (r = a), (a = s);
    }
    return (d = !0), (a.d.length = c + 1), a;
}
function Q(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function J(e, t) {
    var n,
        r = t.s < 0,
        s = F(e, e.precision, 1),
        a = s.times(0.5);
    if ((t = t.abs()).lte(a)) return (i = r ? 4 : 1), t;
    if ((n = t.divToInt(s)).isZero()) i = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(s))).lte(a)) return (i = j(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
        i = j(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(s).abs();
}
function ee(e, t, n, i) {
    var s,
        l,
        u,
        c,
        d,
        _,
        f,
        p,
        h,
        m = e.constructor,
        E = void 0 !== n;
    if (
        (E ? (D(n, 1, a), void 0 === i ? (i = m.rounding) : D(i, 0, 8)) : ((n = m.precision), (i = m.rounding)),
        e.isFinite())
    ) {
        for (
            u = (f = k(e)).indexOf("."),
                E ? ((s = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (s = t),
                u >= 0 &&
                    ((f = f.replace(".", "")),
                    ((h = new m(1)).e = f.length - u),
                    (h.d = w(k(h), 10, s)),
                    (h.e = h.d.length)),
                l = d = (p = w(f, 10, s)).length;
            0 == p[--d];
        )
            p.pop();
        if (p[0]) {
            if (
                (u < 0
                    ? l--
                    : (((e = new m(e)).d = p), (e.e = l), (p = (e = P(e, h, n, i, 0, s)).d), (l = e.e), (_ = r)),
                (u = p[n]),
                (c = s / 2),
                (_ = _ || void 0 !== p[n + 1]),
                (_ =
                    i < 4
                        ? (void 0 !== u || _) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : u > c || (u === c && (4 === i || _ || (6 === i && 1 & p[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (p.length = n),
                _)
            )
                for (; ++p[--n] > s - 1; ) (p[n] = 0), n || (++l, p.unshift(1));
            for (d = p.length; !p[d - 1]; --d);
            for (u = 0, f = ""; u < d; u++) f += o.charAt(p[u]);
            if (E) {
                if (d > 1)
                    if (16 == t || 8 == t) {
                        for (u = 16 == t ? 4 : 3, --d; d % u; d++) f += "0";
                        for (d = (p = w(f, s, t)).length; !p[d - 1]; --d);
                        for (u = 1, f = "1."; u < d; u++) f += o.charAt(p[u]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (l < 0 ? "p" : "p+") + l;
            } else if (l < 0) {
                for (; ++l; ) f = "0" + f;
                f = "0." + f;
            } else if (++l > d) for (l -= d; l--; ) f += "0";
            else l < d && (f = f.slice(0, l) + "." + f.slice(l));
        } else f = E ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    } else f = $(e);
    return e.s < 0 ? "-" + f : f;
}
function et(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function en(e) {
    return new this(e).abs();
}
function er(e) {
    return new this(e).acos();
}
function ei(e) {
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
        r = this.precision,
        i = this.rounding,
        s = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? F(this, r, i) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = F(this, s, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = s),
                          (this.rounding = 1),
                          (n = this.atan(P(e, t, s, 1))),
                          (t = F(this, s, 1)),
                          (this.precision = r),
                          (this.rounding = i),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(P(e, t, s, 1)))
                : ((n = F(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function ed(e) {
    return new this(e).cbrt();
}
function e_(e) {
    return x((e = new this(e)), e.e + 1, 2);
}
function ef(e, t, n) {
    return new this(e).clamp(t, n);
}
function ep(e) {
    if (!e || "object" != typeof e) throw Error(_ + "Object expected");
    var t,
        n,
        r,
        i = !0 === e.defaults,
        o = [
            "precision",
            1,
            a,
            "rounding",
            0,
            8,
            "toExpNeg",
            -s,
            0,
            "toExpPos",
            0,
            s,
            "maxE",
            0,
            s,
            "minE",
            -s,
            0,
            "modulo",
            0,
            9,
        ];
    for (t = 0; t < o.length; t += 3)
        if (((n = o[t]), i && (this[n] = c[n]), void 0 !== (r = e[n])))
            if (E(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
            else throw Error(f + n + ": " + r);
    if (((n = "crypto"), i && (this[n] = c[n]), void 0 !== (r = e[n])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(h);
            else this[n] = !1;
        else throw Error(f + n + ": " + r);
    return this;
}
function eh(e) {
    return new this(e).cos();
}
function em(e) {
    return new this(e).cosh();
}
function eE(e) {
    var t, n, r;
    function i(e) {
        var t,
            n,
            r,
            s = this;
        if (!(s instanceof i)) return new i(e);
        if (((s.constructor = i), eS(e))) {
            (s.s = e.s),
                d
                    ? !e.d || e.e > i.maxE
                        ? ((s.e = NaN), (s.d = null))
                        : e.e < i.minE
                          ? ((s.e = 0), (s.d = [0]))
                          : ((s.e = e.e), (s.d = e.d.slice()))
                    : ((s.e = e.e), (s.d = e.d ? e.d.slice() : e.d));
            return;
        }
        if ("number" == (r = typeof e)) {
            if (0 === e) {
                (s.s = 1 / e < 0 ? -1 : 1), (s.e = 0), (s.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (s.s = -1)) : (s.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
                d
                    ? t > i.maxE
                        ? ((s.e = NaN), (s.d = null))
                        : t < i.minE
                          ? ((s.e = 0), (s.d = [0]))
                          : ((s.e = t), (s.d = [e]))
                    : ((s.e = t), (s.d = [e]));
                return;
            }
            if (0 * e != 0) {
                e || (s.s = NaN), (s.e = NaN), (s.d = null);
                return;
            }
            return z(s, e.toString());
        }
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (s.s = -1))
                    : (43 === n && (e = e.slice(1)), (s.s = 1)),
                S.test(e) ? z(s, e) : q(s, e)
            );
        if ("bigint" === r) return e < 0 ? ((e = -e), (s.s = -1)) : (s.s = 1), z(s, e.toString());
        throw Error(f + e);
    }
    if (
        ((i.prototype = O),
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
        (i.config = i.set = ep),
        (i.clone = eE),
        (i.isDecimal = eS),
        (i.abs = en),
        (i.acos = er),
        (i.acosh = ei),
        (i.add = es),
        (i.asin = ea),
        (i.asinh = eo),
        (i.atan = el),
        (i.atanh = eu),
        (i.atan2 = ec),
        (i.cbrt = ed),
        (i.ceil = e_),
        (i.clamp = ef),
        (i.cos = eh),
        (i.cosh = em),
        (i.div = eg),
        (i.exp = eA),
        (i.floor = eI),
        (i.hypot = eT),
        (i.ln = ey),
        (i.log = ev),
        (i.log10 = eC),
        (i.log2 = eN),
        (i.max = eR),
        (i.min = eO),
        (i.mod = eb),
        (i.mul = eD),
        (i.pow = eL),
        (i.random = ew),
        (i.round = eM),
        (i.sign = eP),
        (i.sin = ex),
        (i.sinh = ek),
        (i.sqrt = eU),
        (i.sub = eG),
        (i.sum = eF),
        (i.tan = eV),
        (i.tanh = eB),
        (i.trunc = eH),
        void 0 === e && (e = {}),
        e && !0 !== e.defaults)
    )
        for (
            t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            t < r.length;
        )
            e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
    return i.config(e), i;
}
function eg(e, t) {
    return new this(e).div(t);
}
function eA(e) {
    return new this(e).exp();
}
function eI(e) {
    return x((e = new this(e)), e.e + 1, 3);
}
function eT() {
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
function eS(e) {
    return e instanceof ej || (e && e.toStringTag === m) || !1;
}
function ey(e) {
    return new this(e).ln();
}
function ev(e, t) {
    return new this(e).log(t);
}
function eN(e) {
    return new this(e).log(2);
}
function eC(e) {
    return new this(e).log(10);
}
function eR() {
    return Y(this, arguments, -1);
}
function eO() {
    return Y(this, arguments, 1);
}
function eb(e, t) {
    return new this(e).mod(t);
}
function eD(e, t) {
    return new this(e).mul(t);
}
function eL(e, t) {
    return new this(e).pow(t);
}
function ew(e) {
    var t,
        n,
        r,
        i,
        s = 0,
        o = new this(1),
        l = [];
    if ((void 0 === e ? (e = this.precision) : D(e, 1, a), (r = Math.ceil(e / v)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
                (i = t[s]) >= 429e7 ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0]) : (l[s++] = i % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); s < r; )
                (i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, s)
                    : (l.push(i % 1e7), (s += 4));
            s = r / 4;
        } else throw Error(h);
    else for (; s < r; ) l[s++] = (1e7 * Math.random()) | 0;
    for (r = l[--s], e %= v, r && e && ((i = g(10, v - e)), (l[s] = ((r / i) | 0) * i)); 0 === l[s]; s--) l.pop();
    if (s < 0) (n = 0), (l = [0]);
    else {
        for (n = -1; 0 === l[0]; n -= v) l.shift();
        for (r = 1, i = l[0]; i >= 10; i /= 10) r++;
        r < v && (n -= v - r);
    }
    return (o.e = n), (o.d = l), o;
}
function eM(e) {
    return x((e = new this(e)), e.e + 1, this.rounding);
}
function eP(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function ex(e) {
    return new this(e).sin();
}
function ek(e) {
    return new this(e).sinh();
}
function eU(e) {
    return new this(e).sqrt();
}
function eG(e, t) {
    return new this(e).sub(t);
}
function eF() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (d = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (d = !0), x(n, this.precision, this.rounding);
}
function eV(e) {
    return new this(e).tan();
}
function eB(e) {
    return new this(e).tanh();
}
function eH(e) {
    return x((e = new this(e)), e.e + 1, 1);
}
(O[Symbol.for("nodejs.util.inspect.custom")] = O.toString), (O[Symbol.toStringTag] = "Decimal");
var ej = (O.constructor = eE(c));
(l = new ej(l)), (u = new ej(u));
