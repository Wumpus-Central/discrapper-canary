"use strict";
n.d(t, { W: () => eP });
var r,
    i,
    s = "0123456789abcdef",
    a =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    o =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    l = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    u = !0,
    c = "[DecimalError] ",
    d = c + "Invalid argument: ",
    _ = c + "Precision limit exceeded",
    f = c + "crypto unavailable",
    p = "[object Decimal]",
    h = Math.floor,
    E = Math.pow,
    m = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    A = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    I = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    T = a.length - 1,
    S = o.length - 1,
    y = { toStringTag: p };
function N(e) {
    var t,
        n,
        r,
        i = e.length - 1,
        s = "",
        a = e[0];
    if (i > 0) {
        for (s += a, t = 1; t < i; t++) (n = 7 - (r = e[t] + "").length) && (s += x(n)), (s += r);
        (n = 7 - (r = (a = e[t]) + "").length) && (s += x(n));
    } else if (0 === a) return "0";
    for (; a % 10 == 0; ) a /= 10;
    return s + a;
}
function v(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(d + e);
}
function C(e, t, n, r) {
    var i, s, a, o;
    for (s = e[0]; s >= 10; s /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (i = 0)) : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
        (s = E(10, 7 - t)),
        (o = (e[i] % s) | 0),
        null == r
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (a = (n < 4 && 99999 == o) || (n > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (a =
                      (((n < 4 && o + 1 == s) || (n > 3 && o + 1 == s / 2)) &&
                          ((e[i + 1] / s / 100) | 0) == E(10, t - 2) - 1) ||
                      ((o == s / 2 || 0 == o) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (a = ((r || n < 4) && 9999 == o) || (!r && n > 3 && 4999 == o)))
              : (a =
                    (((r || n < 4) && o + 1 == s) || (!r && n > 3 && o + 1 == s / 2)) &&
                    ((e[i + 1] / s / 1e3) | 0) == E(10, t - 3) - 1),
        a
    );
}
function O(e, t, n) {
    for (var r, i, a = [0], o = 0, l = e.length; o < l; ) {
        for (i = a.length; i--; ) a[i] *= t;
        for (a[0] += s.indexOf(e.charAt(o++)), r = 0; r < a.length; r++)
            a[r] > n - 1 && (void 0 === a[r + 1] && (a[r + 1] = 0), (a[r + 1] += (a[r] / n) | 0), (a[r] %= n));
    }
    return a.reverse();
}
(y.absoluteValue = y.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), b(e);
    }),
    (y.ceil = function () {
        return b(new this.constructor(this), this.e + 1, 2);
    }),
    (y.clampedTo = y.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(d + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (y.comparedTo = y.cmp =
        function (e) {
            var t,
                n,
                r,
                i,
                s = this.d,
                a = (e = new this.constructor(e)).d,
                o = this.s,
                l = e.s;
            if (!s || !a) return o && l ? (o !== l ? o : s === a ? 0 : !s ^ (o < 0) ? 1 : -1) : NaN;
            if (!s[0] || !a[0]) return s[0] ? o : a[0] ? -l : 0;
            if (o !== l) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (t = 0, n = (r = s.length) < (i = a.length) ? r : i; t < n; ++t)
                if (s[t] !== a[t]) return (s[t] > a[t]) ^ (o < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (o < 0) ? 1 : -1;
        }),
    (y.cosine = y.cos =
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
                              ? (i = (1 / Y(4, (n = Math.ceil(r / 3)))).toString())
                              : ((n = 16), (i = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = j(e, 1, t.times(i), new e(1)));
                          for (var s = n; s--; ) {
                              var a = t.times(t);
                              t = a.times(a).minus(a).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(r, W(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      b(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(NaN);
        }),
    (y.cubeRoot = y.cbrt =
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
                c,
                d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
                u = !1,
                    (s = this.s * E(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                        ? (r = new d(s.toString()))
                        : ((n = N(this.d)),
                          (s = ((e = this.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"),
                          (s = E(n, 1 / 3)),
                          (e = h((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new d(
                              (n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    a = (e = d.precision) + 3;
                ;
            )
                if (
                    ((r = R((c = (l = (o = r).times(o).times(o)).plus(this)).plus(this).times(o), c.plus(l), a + 2, 1)),
                    N(o.d).slice(0, a) === (n = N(r.d)).slice(0, a))
                ) {
                    if ("9999" != (n = n.slice(a - 3, a + 1)) && (i || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (b(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!i && (b(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        r = o;
                        break;
                    }
                    (a += 4), (i = 1);
                }
            return (u = !0), b(r, e, d.rounding, t);
        }),
    (y.decimalPlaces = y.dp =
        function () {
            var e,
                t = this.d,
                n = NaN;
            if (t) {
                if (((n = ((e = t.length - 1) - h(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (y.dividedBy = y.div =
        function (e) {
            return R(this, new this.constructor(e));
        }),
    (y.dividedToIntegerBy = y.divToInt =
        function (e) {
            var t = this.constructor;
            return b(R(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (y.equals = y.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (y.floor = function () {
        return b(new this.constructor(this), this.e + 1, 3);
    }),
    (y.greaterThan = y.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (y.greaterThanOrEqualTo = y.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (y.hyperbolicCosine = y.cosh =
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
                    ? (t = (1 / Y(4, (e = Math.ceil(i / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (s = j(a, 1, s.times(t), new a(1), !0));
            for (var l, u = e, c = new a(8); u--; ) (l = s.times(s)), (s = o.minus(l.times(c.minus(l.times(c)))));
            return b(s, (a.precision = n), (a.rounding = r), !0);
        }),
    (y.hyperbolicSine = y.sinh =
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
                i = j(s, 2, i, i, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (i = j(s, 2, (i = i.times(1 / Y(5, e))), i, !0));
                for (var a, o = new s(5), l = new s(16), u = new s(20); e--; )
                    (a = i.times(i)), (i = i.times(o.plus(a.times(l.times(a).plus(u)))));
            }
            return (s.precision = t), (s.rounding = n), b(i, t, n, !0);
        }),
    (y.hyperbolicTangent = y.tanh =
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
                      R(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (y.inverseCosine = y.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                r = t.precision,
                i = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? M(t, r, i)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? M(t, r + 4, i).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = i),
                    e.times(2));
        }),
    (y.inverseHyperbolicCosine = y.acosh =
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
                    (u = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (u = !0),
                    (r.precision = e),
                    (r.rounding = t),
                    n.ln())
                  : new r(n);
        }),
    (y.inverseHyperbolicSine = y.asinh =
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
                  (u = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (u = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln());
        }),
    (y.inverseHyperbolicTangent = y.atanh =
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
                      ? b(new s(i), e, t, !0)
                      : ((s.precision = n = r - i.e),
                        (i = R(i.plus(1), new s(1).minus(i), n + e, 1)),
                        (s.precision = e + 4),
                        (s.rounding = 1),
                        (i = i.ln()),
                        (s.precision = e),
                        (s.rounding = t),
                        i.times(0.5))
                : new s(NaN);
        }),
    (y.inverseSine = y.asin =
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
                      ? (((e = M(s, n + 4, r).times(0.5)).s = i.s), e)
                      : new s(NaN)
                  : ((s.precision = n + 6),
                    (s.rounding = 1),
                    (i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                    (s.precision = n),
                    (s.rounding = r),
                    i.times(2));
        }),
    (y.inverseTangent = y.atan =
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
                c = this,
                d = c.constructor,
                _ = d.precision,
                f = d.rounding;
            if (c.isFinite()) {
                if (c.isZero()) return new d(c);
                else if (c.abs().eq(1) && _ + 4 <= S) return ((a = M(d, _ + 4, f).times(0.25)).s = c.s), a;
            } else {
                if (!c.s) return new d(NaN);
                if (_ + 4 <= S) return ((a = M(d, _ + 4, f).times(0.5)).s = c.s), a;
            }
            for (d.precision = o = _ + 10, d.rounding = 1, e = n = Math.min(28, (o / 7 + 2) | 0); e; --e)
                c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (u = !1, t = Math.ceil(o / 7), r = 1, l = c.times(c), a = new d(c), i = c; -1 !== e; )
                if (
                    ((i = i.times(l)),
                    (s = a.minus(i.div((r += 2)))),
                    (i = i.times(l)),
                    void 0 !== (a = s.plus(i.div((r += 2)))).d[t])
                )
                    for (e = t; a.d[e] === s.d[e] && e--; );
            return n && (a = a.times(2 << (n - 1))), (u = !0), b(a, (d.precision = _), (d.rounding = f), !0);
        }),
    (y.isFinite = function () {
        return !!this.d;
    }),
    (y.isInteger = y.isInt =
        function () {
            return !!this.d && h(this.e / 7) > this.d.length - 2;
        }),
    (y.isNaN = function () {
        return !this.s;
    }),
    (y.isNegative = y.isNeg =
        function () {
            return this.s < 0;
        }),
    (y.isPositive = y.isPos =
        function () {
            return this.s > 0;
        }),
    (y.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (y.lessThan = y.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (y.lessThanOrEqualTo = y.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (y.logarithm = y.log =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l = this.constructor,
                c = l.precision,
                d = l.rounding;
            if (null == e) (e = new l(10)), (t = !0);
            else {
                if (((n = (e = new l(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new l(NaN);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new l(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) i = !0;
                else {
                    for (r = n[0]; r % 10 == 0; ) r /= 10;
                    i = 1 !== r;
                }
            if (((u = !1), C((o = R((s = V(this, (a = c + 5))), t ? w(l, a + 10) : V(e, a), a, 1)).d, (r = c), d)))
                do
                    if (((a += 10), (o = R((s = V(this, a)), t ? w(l, a + 10) : V(e, a), a, 1)), !i)) {
                        +N(o.d).slice(r + 1, r + 15) + 1 == 1e14 && (o = b(o, c + 1, 0));
                        break;
                    }
                while (C(o.d, (r += 10), d));
            return (u = !0), b(o, c, d);
        }),
    (y.minus = y.sub =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                c,
                d,
                _,
                f,
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
            if (((c = this.d), (f = e.d), (o = p.precision), (l = p.rounding), !c[0] || !f[0])) {
                if (f[0]) e.s = -e.s;
                else {
                    if (!c[0]) return new p(3 === l ? -0 : 0);
                    e = new p(this);
                }
                return u ? b(e, o, l) : e;
            }
            if (((n = h(e.e / 7)), (d = h(this.e / 7)), (c = c.slice()), (s = d - n))) {
                for (
                    (_ = s < 0) ? ((t = c), (s = -s), (a = f.length)) : ((t = f), (n = d), (a = c.length)),
                        s > (r = Math.max(Math.ceil(o / 7), a) + 2) && ((s = r), (t.length = 1)),
                        t.reverse(),
                        r = s;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((_ = (r = c.length) < (a = f.length)) && (a = r), r = 0; r < a; r++)
                    if (c[r] != f[r]) {
                        _ = c[r] < f[r];
                        break;
                    }
                s = 0;
            }
            for (_ && ((t = c), (c = f), (f = t), (e.s = -e.s)), a = c.length, r = f.length - a; r > 0; --r) c[a++] = 0;
            for (r = f.length; r > s; ) {
                if (c[--r] < f[r]) {
                    for (i = r; i && 0 === c[--i]; ) c[i] = 1e7 - 1;
                    --c[i], (c[r] += 1e7);
                }
                c[r] -= f[r];
            }
            for (; 0 === c[--a]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --n;
            return c[0] ? ((e.d = c), (e.e = L(c, n)), u ? b(e, o, l) : e) : new p(3 === l ? -0 : 0);
        }),
    (y.modulo = y.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((u = !1),
                      9 == n.modulo
                          ? ((t = R(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = R(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (u = !0),
                      this.minus(t))
                    : b(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (y.naturalExponential = y.exp =
        function () {
            return F(this);
        }),
    (y.naturalLogarithm = y.ln =
        function () {
            return V(this);
        }),
    (y.negated = y.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), b(e);
        }),
    (y.plus = y.add =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                c,
                d,
                _ = this.constructor;
            if (((e = new _(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new _(e.d || this.s === e.s ? this : NaN)) : (e = new _(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((c = this.d), (d = e.d), (o = _.precision), (l = _.rounding), !c[0] || !d[0]))
                return d[0] || (e = new _(this)), u ? b(e, o, l) : e;
            if (((s = h(this.e / 7)), (r = h(e.e / 7)), (c = c.slice()), (i = s - r))) {
                for (
                    i < 0 ? ((n = c), (i = -i), (a = d.length)) : ((n = d), (r = s), (a = c.length)),
                        i > (a = (s = Math.ceil(o / 7)) > a ? s + 1 : a + 1) && ((i = a), (n.length = 1)),
                        n.reverse();
                    i--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((a = c.length) - (i = d.length) < 0 && ((i = a), (n = d), (d = c), (c = n)), t = 0; i; )
                (t = ((c[--i] = c[i] + d[i] + t) / 1e7) | 0), (c[i] %= 1e7);
            for (t && (c.unshift(t), ++r), a = c.length; 0 == c[--a]; ) c.pop();
            return (e.d = c), (e.e = L(c, r)), u ? b(e, o, l) : e;
        }),
    (y.precision = y.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(d + e);
            return this.d ? ((t = P(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (y.round = function () {
        var e = this.constructor;
        return b(new e(this), this.e + 1, e.rounding);
    }),
    (y.sine = y.sin =
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
                          if (r < 3) return t.isZero() ? t : j(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                              (t = j(e, 2, (t = t.times(1 / Y(5, n))), t));
                          for (var i, s = new e(5), a = new e(16), o = new e(20); n--; )
                              (i = t.times(t)), (t = t.times(s.plus(i.times(a.times(i).minus(o)))));
                          return t;
                      })(r, W(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      b(i > 2 ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (y.squareRoot = y.sqrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                s,
                a = this.d,
                o = this.e,
                l = this.s,
                c = this.constructor;
            if (1 !== l || !a || !a[0]) return new c(!l || (l < 0 && (!a || a[0])) ? NaN : a ? this : 1 / 0);
            for (
                u = !1,
                    0 == (l = Math.sqrt(+this)) || l == 1 / 0
                        ? (((t = N(a)).length + o) % 2 == 0 && (t += "0"),
                          (l = Math.sqrt(t)),
                          (o = h((o + 1) / 2) - (o < 0 || o % 2)),
                          (r = new c(
                              (t = l == 1 / 0 ? "5e" + o : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (r = new c(l.toString())),
                    n = (o = c.precision) + 3;
                ;
            )
                if (
                    ((r = (s = r).plus(R(this, s, n + 2, 1)).times(0.5)),
                    N(s.d).slice(0, n) === (t = N(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (b(r, o + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!i && (b(s, o + 1, 0), s.times(s).eq(this))) {
                        r = s;
                        break;
                    }
                    (n += 4), (i = 1);
                }
            return (u = !0), b(r, o, c.rounding, e);
        }),
    (y.tangent = y.tan =
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
                      (n = R(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      b(2 == i || 4 == i ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (y.times = y.mul =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                c,
                d = this.constructor,
                _ = this.d,
                f = (e = new d(e)).d;
            if (((e.s *= this.s), !_ || !_[0] || !f || !f[0]))
                return new d(!e.s || (_ && !_[0] && !f) || (f && !f[0] && !_) ? NaN : !_ || !f ? e.s / 0 : 0 * e.s);
            for (
                n = h(this.e / 7) + h(e.e / 7),
                    (l = _.length) < (c = f.length) && ((s = _), (_ = f), (f = s), (a = l), (l = c), (c = a)),
                    s = [],
                    r = a = l + c;
                r--;
            )
                s.push(0);
            for (r = c; --r >= 0; ) {
                for (t = 0, i = l + r; i > r; )
                    (o = s[i] + f[r] * _[i - r - 1] + t), (s[i--] = (o % 1e7) | 0), (t = (o / 1e7) | 0);
                s[i] = ((s[i] + t) % 1e7) | 0;
            }
            for (; !s[--a]; ) s.pop();
            return t ? ++n : s.shift(), (e.d = s), (e.e = L(s, n)), u ? b(e, d.precision, d.rounding) : e;
        }),
    (y.toBinary = function (e, t) {
        return K(this, 2, e, t);
    }),
    (y.toDecimalPlaces = y.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (v(e, 0, 1e9), void 0 === t ? (t = r.rounding) : v(t, 0, 8), b(n, e + n.e + 1, t));
        }),
    (y.toExponential = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = D(r, !0))
                : (v(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : v(t, 0, 8),
                  (n = D((r = b(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (y.toFixed = function (e, t) {
        var n,
            r,
            i = this.constructor;
        return (
            void 0 === e
                ? (n = D(this))
                : (v(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : v(t, 0, 8),
                  (n = D((r = b(new i(this), e + this.e + 1, t)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (y.toFraction = function (e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            c,
            _,
            f,
            p,
            h = this.d,
            m = this.constructor;
        if (!h) return new m(this);
        if (
            ((c = n = new m(1)),
            (r = l = new m(0)),
            (a = (s = (t = new m(r)).e = P(h) - this.e - 1) % 7),
            (t.d[0] = E(10, a < 0 ? 7 + a : a)),
            null == e)
        )
            e = s > 0 ? t : c;
        else {
            if (!(o = new m(e)).isInt() || o.lt(c)) throw Error(d + o);
            e = o.gt(t) ? (s > 0 ? t : c) : o;
        }
        for (
            u = !1, o = new m(N(h)), _ = m.precision, m.precision = s = 7 * h.length * 2;
            (f = R(o, t, 0, 1, 1)), 1 != (i = n.plus(f.times(r))).cmp(e);
        )
            (n = r), (r = i), (i = c), (c = l.plus(f.times(i))), (l = i), (i = t), (t = o.minus(f.times(i))), (o = i);
        return (
            (i = R(e.minus(n), r, 0, 1, 1)),
            (l = l.plus(i.times(c))),
            (n = n.plus(i.times(r))),
            (l.s = c.s = this.s),
            (p =
                1 >
                R(c, r, s, 1)
                    .minus(this)
                    .abs()
                    .cmp(R(l, n, s, 1).minus(this).abs())
                    ? [c, r]
                    : [l, n]),
            (m.precision = _),
            (u = !0),
            p
        );
    }),
    (y.toHexadecimal = y.toHex =
        function (e, t) {
            return K(this, 16, e, t);
        }),
    (y.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : v(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((u = !1), (n = R(n, e, 0, t, 1).times(e)), (u = !0), b(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (y.toNumber = function () {
        return +this;
    }),
    (y.toOctal = function (e, t) {
        return K(this, 8, e, t);
    }),
    (y.toPower = y.pow =
        function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o = this,
                l = o.constructor,
                c = +(e = new l(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new l(E(+o, c));
            if ((o = new l(o)).eq(1)) return o;
            if (((r = l.precision), (s = l.rounding), e.eq(1))) return b(o, r, s);
            if ((t = h(e.e / 7)) >= e.d.length - 1 && (n = c < 0 ? -c : c) <= 0x1fffffffffffff)
                return (i = k(l, o, n, r)), e.s < 0 ? new l(1).div(i) : b(i, r, s);
            if ((a = o.s) < 0) {
                if (t < e.d.length - 1) return new l(NaN);
                if (((1 & e.d[t]) == 0 && (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = a), o;
            }
            return (t =
                0 != (n = E(+o, c)) && isFinite(n)
                    ? new l(n + "").e
                    : h(c * (Math.log("0." + N(o.d)) / Math.LN10 + o.e + 1))) >
                l.maxE + 1 || t < l.minE - 1
                ? new l(t > 0 ? a / 0 : 0)
                : ((u = !1),
                  (l.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (i = F(e.times(V(o, r + n)), r)).d &&
                      C((i = b(i, r + 5, 1)).d, r, s) &&
                      ((t = r + 10),
                      +N((i = b(F(e.times(V(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (i = b(i, r + 1, 0))),
                  (i.s = a),
                  (u = !0),
                  (l.rounding = s),
                  b(i, r, s));
        }),
    (y.toPrecision = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = D(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
                : (v(e, 1, 1e9),
                  void 0 === t ? (t = i.rounding) : v(t, 0, 8),
                  (n = D((r = b(new i(r), e, t)), e <= r.e || r.e <= i.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (y.toSignificantDigits = y.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (v(e, 1, 1e9), void 0 === t ? (t = n.rounding) : v(t, 0, 8)),
                b(new n(this), e, t)
            );
        }),
    (y.toString = function () {
        var e = this.constructor,
            t = D(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (y.truncated = y.trunc =
        function () {
            return b(new this.constructor(this), this.e + 1, 1);
        }),
    (y.valueOf = y.toJSON =
        function () {
            var e = this.constructor,
                t = D(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var R = (function () {
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
            E,
            m,
            g,
            A,
            I,
            T,
            S,
            y,
            N,
            v,
            C,
            O,
            R,
            D,
            L,
            w = i.constructor,
            M = i.s == s.s ? 1 : -1,
            P = i.d,
            x = s.d;
        if (!P || !P[0] || !x || !x[0])
            return new w(!i.s || !s.s || (P ? x && P[0] == x[0] : !x) ? NaN : (P && 0 == P[0]) || !x ? 0 * M : M / 0);
        for (
            u ? ((p = 1), (d = i.e - s.e)) : ((u = 1e7), (p = 7), (d = h(i.e / p) - h(s.e / p))),
                D = x.length,
                O = P.length,
                I = (A = new w(M)).d = [],
                _ = 0;
            x[_] == (P[_] || 0);
            _++
        );
        if (
            (x[_] > (P[_] || 0) && d--,
            null == a ? ((N = a = w.precision), (o = w.rounding)) : (N = l ? a + (i.e - s.e) + 1 : a),
            N < 0)
        )
            I.push(1), (E = !0);
        else {
            if (((N = (N / p + 2) | 0), (_ = 0), 1 == D)) {
                for (f = 0, x = x[0], N++; (_ < O || f) && N--; _++)
                    (v = f * u + (P[_] || 0)), (I[_] = (v / x) | 0), (f = (v % x) | 0);
                E = f || _ < O;
            } else {
                for (
                    (f = (u / (x[0] + 1)) | 0) > 1 &&
                        ((x = e(x, f, u)), (P = e(P, f, u)), (D = x.length), (O = P.length)),
                        C = D,
                        S = (T = P.slice(0, D)).length;
                    S < D;
                )
                    T[S++] = 0;
                (L = x.slice()).unshift(0), (R = x[0]), x[1] >= u / 2 && ++R;
                do
                    (f = 0),
                        (c = t(x, T, D, S)) < 0
                            ? ((y = T[0]),
                              D != S && (y = y * u + (T[1] || 0)),
                              (f = (y / R) | 0) > 1
                                  ? (f >= u && (f = u - 1),
                                    (g = (m = e(x, f, u)).length),
                                    (S = T.length),
                                    1 == (c = t(m, T, g, S)) && (f--, n(m, D < g ? L : x, g, u)))
                                  : (0 == f && (c = f = 1), (m = x.slice())),
                              (g = m.length) < S && m.unshift(0),
                              n(T, m, S, u),
                              -1 == c && ((S = T.length), (c = t(x, T, D, S)) < 1 && (f++, n(T, D < S ? L : x, S, u))),
                              (S = T.length))
                            : 0 === c && (f++, (T = [0])),
                        (I[_++] = f),
                        c && T[0] ? (T[S++] = P[C] || 0) : ((T = [P[C]]), (S = 1));
                while ((C++ < O || void 0 !== T[0]) && N--);
                E = void 0 !== T[0];
            }
            I[0] || I.shift();
        }
        if (1 == p) (A.e = d), (r = E);
        else {
            for (_ = 1, f = I[0]; f >= 10; f /= 10) _++;
            (A.e = _ + d * p - 1), b(A, l ? a + A.e + 1 : a, o, E);
        }
        return A;
    };
})();
function b(e, t, n, r) {
    var i,
        s,
        a,
        o,
        l,
        c,
        d,
        _,
        f,
        p = e.constructor;
    u: if (null != t) {
        if (!(_ = e.d)) return e;
        for (i = 1, o = _[0]; o >= 10; o /= 10) i++;
        if ((s = t - i) < 0) (s += 7), (a = t), (l = (((d = _[(f = 0)]) / E(10, i - a - 1)) % 10) | 0);
        else if ((f = Math.ceil((s + 1) / 7)) >= (o = _.length))
            if (r) {
                for (; o++ <= f; ) _.push(0);
                (d = l = 0), (i = 1), (s %= 7), (a = s - 7 + 1);
            } else break u;
        else {
            for (i = 1, d = o = _[f]; o >= 10; o /= 10) i++;
            (s %= 7), (l = (a = s - 7 + i) < 0 ? 0 : ((d / E(10, i - a - 1)) % 10) | 0);
        }
        if (
            ((r = r || t < 0 || void 0 !== _[f + 1] || (a < 0 ? d : d % E(10, i - a - 1))),
            (c =
                n < 4
                    ? (l || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : l > 5 ||
                      (5 == l &&
                          (4 == n ||
                              r ||
                              (6 == n && ((s > 0 ? (a > 0 ? d / E(10, i - a) : 0) : _[f - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !_[0])
        )
            return (
                (_.length = 0),
                c ? ((t -= e.e + 1), (_[0] = E(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (_[0] = e.e = 0),
                e
            );
        if (
            (0 == s
                ? ((_.length = f), (o = 1), f--)
                : ((_.length = f + 1),
                  (o = E(10, 7 - s)),
                  (_[f] = a > 0 ? (((d / E(10, i - a)) % E(10, a)) | 0) * o : 0)),
            c)
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
    return u && (e.e > p.maxE ? ((e.d = null), (e.e = NaN)) : e.e < p.minE && ((e.e = 0), (e.d = [0]))), e;
}
function D(e, t, n) {
    if (!e.isFinite()) return B(e);
    var r,
        i = e.e,
        s = N(e.d),
        a = s.length;
    return (
        t
            ? (n && (r = n - a) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + x(r))
                  : a > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((s = "0." + x(-i - 1) + s), n && (r = n - a) > 0 && (s += x(r)))
              : i >= a
                ? ((s += x(i + 1 - a)), n && (r = n - i - 1) > 0 && (s = s + "." + x(r)))
                : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)),
                  n && (r = n - a) > 0 && (i + 1 === a && (s += "."), (s += x(r)))),
        s
    );
}
function L(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function w(e, t, n) {
    if (t > T) throw ((u = !0), n && (e.precision = n), Error(_));
    return b(new e(a), t, 1, !0);
}
function M(e, t, n) {
    if (t > S) throw Error(_);
    return b(new e(o), t, n, !0);
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
function x(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function k(e, t, n, r) {
    var i,
        s = new e(1),
        a = Math.ceil(r / 7 + 4);
    for (u = !1; ; ) {
        if ((n % 2 && $((s = s.times(t)).d, a) && (i = !0), 0 === (n = h(n / 2)))) {
            (n = s.d.length - 1), i && 0 === s.d[n] && ++s.d[n];
            break;
        }
        $((t = t.times(t)).d, a);
    }
    return (u = !0), s;
}
function U(e) {
    return 1 & e.d[e.d.length - 1];
}
function G(e, t, n) {
    for (var r, i, s = new e(t[0]), a = 0; ++a < t.length; ) {
        if (!(i = new e(t[a])).s) {
            s = i;
            break;
        }
        ((r = s.cmp(i)) === n || (0 === r && s.s === n)) && (s = i);
    }
    return s;
}
function F(e, t) {
    var n,
        r,
        i,
        s,
        a,
        o,
        l,
        c = 0,
        d = 0,
        _ = 0,
        f = e.constructor,
        p = f.rounding,
        h = f.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new f(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((u = !1), (l = h)) : (l = t), o = new f(0.03125); e.e > -2; ) (e = e.times(o)), (_ += 5);
    for (l += r = ((Math.log(E(2, _)) / Math.LN10) * 2 + 5) | 0, n = s = a = new f(1), f.precision = l; ; ) {
        if (
            ((s = b(s.times(e), l, 1)),
            (n = n.times(++d)),
            N((o = a.plus(R(s, n, l, 1))).d).slice(0, l) === N(a.d).slice(0, l))
        ) {
            for (i = _; i--; ) a = b(a.times(a), l, 1);
            if (null != t) return (f.precision = h), a;
            if (!(c < 3 && C(a.d, l - r, p, c))) return b(a, (f.precision = h), p, (u = !0));
            (f.precision = l += 10), (n = s = o = new f(1)), (d = 0), c++;
        }
        a = o;
    }
}
function V(e, t) {
    var n,
        r,
        i,
        s,
        a,
        o,
        l,
        c,
        d,
        _,
        f,
        p = 1,
        h = e,
        E = h.d,
        m = h.constructor,
        g = m.rounding,
        A = m.precision;
    if (h.s < 0 || !E || !E[0] || (!h.e && 1 == E[0] && 1 == E.length))
        return new m(E && !E[0] ? -1 / 0 : 1 != h.s ? NaN : E ? 0 : h);
    if (
        (null == t ? ((u = !1), (d = A)) : (d = t),
        (m.precision = d += 10),
        (r = (n = N(E)).charAt(0)),
        !(15e14 > Math.abs((s = h.e))))
    )
        return (
            (c = w(m, d + 2, A).times(s + "")),
            (h = V(new m(r + "." + n.slice(1)), d - 10).plus(c)),
            (m.precision = A),
            null == t ? b(h, A, g, (u = !0)) : h
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); ) (r = (n = N((h = h.times(e)).d)).charAt(0)), p++;
    for (
        s = h.e,
            r > 1 ? ((h = new m("0." + n)), s++) : (h = new m(r + "." + n.slice(1))),
            _ = h,
            l = a = h = R(h.minus(1), h.plus(1), d, 1),
            f = b(h.times(h), d, 1),
            i = 3;
        ;
    ) {
        if (((a = b(a.times(f), d, 1)), N((c = l.plus(R(a, new m(i), d, 1))).d).slice(0, d) === N(l.d).slice(0, d))) {
            if (
                ((l = l.times(2)),
                0 !== s && (l = l.plus(w(m, d + 2, A).times(s + ""))),
                (l = R(l, new m(p), d, 1)),
                null != t)
            )
                return (m.precision = A), l;
            if (!C(l.d, d - 10, g, o)) return b(l, (m.precision = A), g, (u = !0));
            (m.precision = d += 10),
                (c = a = h = R(_.minus(1), _.plus(1), d, 1)),
                (f = b(h.times(h), d, 1)),
                (i = o = 1);
        }
        (l = c), (i += 2);
    }
}
function B(e) {
    return String((e.s * e.s) / 0);
}
function H(e, t) {
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
            u &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function j(e, t, n, r, i) {
    var s,
        a,
        o,
        l,
        c = e.precision,
        d = Math.ceil(c / 7);
    for (u = !1, l = n.times(n), o = new e(r); ; ) {
        if (
            ((a = R(o.times(l), new e(t++ * t++), c, 1)),
            (o = i ? r.plus(a) : r.minus(a)),
            (r = R(a.times(l), new e(t++ * t++), c, 1)),
            void 0 !== (a = o.plus(r)).d[d])
        ) {
            for (s = d; a.d[s] === o.d[s] && s--; );
            if (-1 == s) break;
        }
        (s = o), (o = r), (r = a), (a = s);
    }
    return (u = !0), (a.d.length = d + 1), a;
}
function Y(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function W(e, t) {
    var n,
        r = t.s < 0,
        s = M(e, e.precision, 1),
        a = s.times(0.5);
    if ((t = t.abs()).lte(a)) return (i = r ? 4 : 1), t;
    if ((n = t.divToInt(s)).isZero()) i = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(s))).lte(a)) return (i = U(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
        i = U(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(s).abs();
}
function K(e, t, n, i) {
    var a,
        o,
        l,
        u,
        c,
        d,
        _,
        f,
        p,
        h = e.constructor,
        E = void 0 !== n;
    if (
        (E ? (v(n, 1, 1e9), void 0 === i ? (i = h.rounding) : v(i, 0, 8)) : ((n = h.precision), (i = h.rounding)),
        e.isFinite())
    ) {
        for (
            l = (_ = D(e)).indexOf("."),
                E ? ((a = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (a = t),
                l >= 0 &&
                    ((_ = _.replace(".", "")),
                    ((p = new h(1)).e = _.length - l),
                    (p.d = O(D(p), 10, a)),
                    (p.e = p.d.length)),
                o = c = (f = O(_, 10, a)).length;
            0 == f[--c];
        )
            f.pop();
        if (f[0]) {
            if (
                (l < 0
                    ? o--
                    : (((e = new h(e)).d = f), (e.e = o), (f = (e = R(e, p, n, i, 0, a)).d), (o = e.e), (d = r)),
                (l = f[n]),
                (u = a / 2),
                (d = d || void 0 !== f[n + 1]),
                (d =
                    i < 4
                        ? (void 0 !== l || d) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : l > u || (l === u && (4 === i || d || (6 === i && 1 & f[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (f.length = n),
                d)
            )
                for (; ++f[--n] > a - 1; ) (f[n] = 0), n || (++o, f.unshift(1));
            for (c = f.length; !f[c - 1]; --c);
            for (l = 0, _ = ""; l < c; l++) _ += s.charAt(f[l]);
            if (E) {
                if (c > 1)
                    if (16 == t || 8 == t) {
                        for (l = 16 == t ? 4 : 3, --c; c % l; c++) _ += "0";
                        for (c = (f = O(_, a, t)).length; !f[c - 1]; --c);
                        for (l = 1, _ = "1."; l < c; l++) _ += s.charAt(f[l]);
                    } else _ = _.charAt(0) + "." + _.slice(1);
                _ = _ + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o; ) _ = "0" + _;
                _ = "0." + _;
            } else if (++o > c) for (o -= c; o--; ) _ += "0";
            else o < c && (_ = _.slice(0, o) + "." + _.slice(o));
        } else _ = E ? "0p+0" : "0";
        _ = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + _;
    } else _ = B(e);
    return e.s < 0 ? "-" + _ : _;
}
function $(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function z(e) {
    return new this(e).abs();
}
function q(e) {
    return new this(e).acos();
}
function X(e) {
    return new this(e).acosh();
}
function Q(e, t) {
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
        i = this.rounding,
        s = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? M(this, r, i) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = M(this, s, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = s),
                          (this.rounding = 1),
                          (n = this.atan(R(e, t, s, 1))),
                          (t = M(this, s, 1)),
                          (this.precision = r),
                          (this.rounding = i),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(R(e, t, s, 1)))
                : ((n = M(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function er(e) {
    return new this(e).cbrt();
}
function ei(e) {
    return b((e = new this(e)), e.e + 1, 2);
}
function es(e, t, n) {
    return new this(e).clamp(t, n);
}
function ea(e) {
    if (!e || "object" != typeof e) throw Error(c + "Object expected");
    var t,
        n,
        r,
        i = !0 === e.defaults,
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
        if (((n = s[t]), i && (this[n] = l[n]), void 0 !== (r = e[n])))
            if (h(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
            else throw Error(d + n + ": " + r);
    if (((n = "crypto"), i && (this[n] = l[n]), void 0 !== (r = e[n])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(f);
            else this[n] = !1;
        else throw Error(d + n + ": " + r);
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
    return b((e = new this(e)), e.e + 1, 3);
}
function e_() {
    var e,
        t,
        n = new this(0);
    for (e = 0, u = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return (u = !0), new this(1 / 0);
            n = t;
        }
    return (u = !0), n.sqrt();
}
function ef(e) {
    return e instanceof eP || (e && e.toStringTag === p) || !1;
}
function ep(e) {
    return new this(e).ln();
}
function eh(e, t) {
    return new this(e).log(t);
}
function eE(e) {
    return new this(e).log(2);
}
function em(e) {
    return new this(e).log(10);
}
function eg() {
    return G(this, arguments, -1);
}
function eA() {
    return G(this, arguments, 1);
}
function eI(e, t) {
    return new this(e).mod(t);
}
function eT(e, t) {
    return new this(e).mul(t);
}
function eS(e, t) {
    return new this(e).pow(t);
}
function ey(e) {
    var t,
        n,
        r,
        i,
        s = 0,
        a = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : v(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
                (i = t[s]) >= 429e7 ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[s++] = i % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); s < r; )
                (i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, s)
                    : (o.push(i % 1e7), (s += 4));
            s = r / 4;
        } else throw Error(f);
    else for (; s < r; ) o[s++] = (1e7 * Math.random()) | 0;
    for (r = o[--s], e %= 7, r && e && ((i = E(10, 7 - e)), (o[s] = ((r / i) | 0) * i)); 0 === o[s]; s--) o.pop();
    if (s < 0) (n = 0), (o = [0]);
    else {
        for (n = -1; 0 === o[0]; n -= 7) o.shift();
        for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
        r < 7 && (n -= 7 - r);
    }
    return (a.e = n), (a.d = o), a;
}
function eN(e) {
    return b((e = new this(e)), e.e + 1, this.rounding);
}
function ev(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eC(e) {
    return new this(e).sin();
}
function eO(e) {
    return new this(e).sinh();
}
function eR(e) {
    return new this(e).sqrt();
}
function eb(e, t) {
    return new this(e).sub(t);
}
function eD() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (u = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (u = !0), b(n, this.precision, this.rounding);
}
function eL(e) {
    return new this(e).tan();
}
function ew(e) {
    return new this(e).tanh();
}
function eM(e) {
    return b((e = new this(e)), e.e + 1, 1);
}
(y[Symbol.for("nodejs.util.inspect.custom")] = y.toString), (y[Symbol.toStringTag] = "Decimal");
var eP = (y.constructor = (function e(t) {
    var n, r, i;
    function s(e) {
        var t, n, r;
        if (!(this instanceof s)) return new s(e);
        if (((this.constructor = s), ef(e))) {
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
        if ("number" == (r = typeof e)) {
            if (0 === e) {
                (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
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
            return H(this, e.toString());
        }
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                I.test(e)
                    ? H(this, e)
                    : (function (e, t) {
                          var n, r, i, s, a, o, l, c, _;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), I.test(t))) return H(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (g.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (m.test(t)) n = 2;
                          else if (A.test(t)) n = 8;
                          else throw Error(d + t);
                          for (
                              (s = t.search(/p/i)) > 0
                                  ? ((l = +t.slice(s + 1)), (t = t.substring(2, s)))
                                  : (t = t.slice(2)),
                                  a = (s = t.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  a &&
                                      ((s = (o = (t = t.replace(".", "")).length) - s), (i = k(r, new r(n), s, 2 * s))),
                                  s = _ = (c = O(t, n, 1e7)).length - 1;
                              0 === c[s];
                              --s
                          )
                              c.pop();
                          return s < 0
                              ? new r(0 * e.s)
                              : ((e.e = L(c, _)),
                                (e.d = c),
                                (u = !1),
                                a && (e = R(e, i, 4 * o)),
                                l && (e = e.times(54 > Math.abs(l) ? E(2, l) : eP.pow(2, l))),
                                (u = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), H(this, e.toString());
        throw Error(d + e);
    }
    if (
        ((s.prototype = y),
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
        (s.config = s.set = ea),
        (s.clone = e),
        (s.isDecimal = ef),
        (s.abs = z),
        (s.acos = q),
        (s.acosh = X),
        (s.add = Q),
        (s.asin = Z),
        (s.asinh = J),
        (s.atan = ee),
        (s.atanh = et),
        (s.atan2 = en),
        (s.cbrt = er),
        (s.ceil = ei),
        (s.clamp = es),
        (s.cos = eo),
        (s.cosh = el),
        (s.div = eu),
        (s.exp = ec),
        (s.floor = ed),
        (s.hypot = e_),
        (s.ln = ep),
        (s.log = eh),
        (s.log10 = em),
        (s.log2 = eE),
        (s.max = eg),
        (s.min = eA),
        (s.mod = eI),
        (s.mul = eT),
        (s.pow = eS),
        (s.random = ey),
        (s.round = eN),
        (s.sign = ev),
        (s.sin = eC),
        (s.sinh = eO),
        (s.sqrt = eR),
        (s.sub = eb),
        (s.sum = eD),
        (s.tan = eL),
        (s.tanh = ew),
        (s.trunc = eM),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < i.length;
        )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
    return s.config(t), s;
})(l));
(a = new eP(a)), (o = new eP(o));
