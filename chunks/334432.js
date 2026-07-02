let a;
function r(n) {
    return Intl.getCanonicalLocales(n);
}
t.d(e, { Y: () => el });
var i,
    s,
    u = "0123456789abcdef",
    o =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    d =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    l = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    c = !0,
    _ = "[DecimalError] ",
    h = _ + "Invalid argument: ",
    f = _ + "Precision limit exceeded",
    y = _ + "crypto unavailable",
    m = "[object Decimal]",
    w = Math.floor,
    g = Math.pow,
    p = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    b = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    v = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    S = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    M = o.length - 1,
    N = d.length - 1,
    L = { toStringTag: m };
function E(n) {
    var e,
        t,
        a,
        r = n.length - 1,
        i = "",
        s = n[0];
    if (r > 0) {
        for (i += s, e = 1; e < r; e++) (t = 7 - (a = n[e] + "").length) && (i += x(t)), (i += a);
        (t = 7 - (a = (s = n[e]) + "").length) && (i += x(t));
    } else if (0 === s) return "0";
    for (; s % 10 == 0; ) s /= 10;
    return i + s;
}
function A(n, e, t) {
    if (n !== ~~n || n < e || n > t) throw Error(h + n);
}
function C(n, e, t, a) {
    var r, i, s, u;
    for (i = n[0]; i >= 10; i /= 10) --e;
    return (
        --e < 0 ? ((e += 7), (r = 0)) : ((r = Math.ceil((e + 1) / 7)), (e %= 7)),
        (i = g(10, 7 - e)),
        (u = (n[r] % i) | 0),
        null == a
            ? e < 3
                ? (0 == e ? (u = (u / 100) | 0) : 1 == e && (u = (u / 10) | 0),
                  (s = (t < 4 && 99999 == u) || (t > 3 && 49999 == u) || 5e4 == u || 0 == u))
                : (s =
                      (((t < 4 && u + 1 == i) || (t > 3 && u + 1 == i / 2)) &&
                          ((n[r + 1] / i / 100) | 0) == g(10, e - 2) - 1) ||
                      ((u == i / 2 || 0 == u) && ((n[r + 1] / i / 100) | 0) == 0))
            : e < 4
              ? (0 == e ? (u = (u / 1e3) | 0) : 1 == e ? (u = (u / 100) | 0) : 2 == e && (u = (u / 10) | 0),
                (s = ((a || t < 4) && 9999 == u) || (!a && t > 3 && 4999 == u)))
              : (s =
                    (((a || t < 4) && u + 1 == i) || (!a && t > 3 && u + 1 == i / 2)) &&
                    ((n[r + 1] / i / 1e3) | 0) == g(10, e - 3) - 1),
        s
    );
}
function T(n, e, t) {
    for (var a, r, i = [0], s = 0, o = n.length; s < o; ) {
        for (r = i.length; r--; ) i[r] *= e;
        for (i[0] += u.indexOf(n.charAt(s++)), a = 0; a < i.length; a++)
            i[a] > t - 1 && (void 0 === i[a + 1] && (i[a + 1] = 0), (i[a + 1] += (i[a] / t) | 0), (i[a] %= t));
    }
    return i.reverse();
}
(L.absoluteValue = L.abs =
    function () {
        var n = new this.constructor(this);
        return n.s < 0 && (n.s = 1), G(n);
    }),
    (L.ceil = function () {
        return G(new this.constructor(this), this.e + 1, 2);
    }),
    (L.clampedTo = L.clamp =
        function (n, e) {
            var t = this.constructor;
            if (((n = new t(n)), (e = new t(e)), !n.s || !e.s)) return new t(NaN);
            if (n.gt(e)) throw Error(h + e);
            return 0 > this.cmp(n) ? n : this.cmp(e) > 0 ? e : new t(this);
        }),
    (L.comparedTo = L.cmp =
        function (n) {
            var e,
                t,
                a,
                r,
                i = this.d,
                s = (n = new this.constructor(n)).d,
                u = this.s,
                o = n.s;
            if (!i || !s) return u && o ? (u !== o ? u : i === s ? 0 : !i ^ (u < 0) ? 1 : -1) : NaN;
            if (!i[0] || !s[0]) return i[0] ? u : s[0] ? -o : 0;
            if (u !== o) return u;
            if (this.e !== n.e) return (this.e > n.e) ^ (u < 0) ? 1 : -1;
            for (e = 0, t = (a = i.length) < (r = s.length) ? a : r; e < t; ++e)
                if (i[e] !== s[e]) return (i[e] > s[e]) ^ (u < 0) ? 1 : -1;
            return a === r ? 0 : (a > r) ^ (u < 0) ? 1 : -1;
        }),
    (L.cosine = L.cos =
        function () {
            var n,
                e,
                t = this,
                a = t.constructor;
            return t.d
                ? t.d[0]
                    ? ((n = a.precision),
                      (e = a.rounding),
                      (a.precision = n + Math.max(t.e, t.sd()) + 7),
                      (a.rounding = 1),
                      (t = (function (n, e) {
                          var t, a, r;
                          if (e.isZero()) return e;
                          (a = e.d.length) < 32
                              ? (r = (1 / V(4, (t = Math.ceil(a / 3)))).toString())
                              : ((t = 16), (r = "2.3283064365386962890625e-10")),
                              (n.precision += t),
                              (e = Z(n, 1, e.times(r), new n(1)));
                          for (var i = t; i--; ) {
                              var s = e.times(e);
                              e = s.times(s).minus(s).times(8).plus(1);
                          }
                          return (n.precision -= t), e;
                      })(a, j(a, t))),
                      (a.precision = n),
                      (a.rounding = e),
                      G(2 == s || 3 == s ? t.neg() : t, n, e, !0))
                    : new a(1)
                : new a(NaN);
        }),
    (L.cubeRoot = L.cbrt =
        function () {
            var n,
                e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                d,
                l = this.constructor;
            if (!this.isFinite() || this.isZero()) return new l(this);
            for (
                c = !1,
                    (i = this.s * g(this.s * this, 1 / 3)) && Math.abs(i) != 1 / 0
                        ? (a = new l(i.toString()))
                        : ((t = E(this.d)),
                          (i = ((n = this.e) - t.length + 1) % 3) && (t += 1 == i || -2 == i ? "0" : "00"),
                          (i = g(t, 1 / 3)),
                          (n = w((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2))),
                          ((a = new l(
                              (t = i == 1 / 0 ? "5e" + n : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + n),
                          )).s = this.s)),
                    s = (n = l.precision) + 3;
                ;
            )
                if (
                    ((a = k((d = (o = (u = a).times(u).times(u)).plus(this)).plus(this).times(u), d.plus(o), s + 2, 1)),
                    E(u.d).slice(0, s) === (t = E(a.d)).slice(0, s))
                ) {
                    if ("9999" != (t = t.slice(s - 3, s + 1)) && (r || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (G(a, n + 1, 1), (e = !a.times(a).times(a).eq(this)));
                        break;
                    }
                    if (!r && (G(u, n + 1, 0), u.times(u).times(u).eq(this))) {
                        a = u;
                        break;
                    }
                    (s += 4), (r = 1);
                }
            return (c = !0), G(a, n, l.rounding, e);
        }),
    (L.decimalPlaces = L.dp =
        function () {
            var n,
                e = this.d,
                t = NaN;
            if (e) {
                if (((t = ((n = e.length - 1) - w(this.e / 7)) * 7), (n = e[n]))) for (; n % 10 == 0; n /= 10) t--;
                t < 0 && (t = 0);
            }
            return t;
        }),
    (L.dividedBy = L.div =
        function (n) {
            return k(this, new this.constructor(n));
        }),
    (L.dividedToIntegerBy = L.divToInt =
        function (n) {
            var e = this.constructor;
            return G(k(this, new e(n), 0, 1, 1), e.precision, e.rounding);
        }),
    (L.equals = L.eq =
        function (n) {
            return 0 === this.cmp(n);
        }),
    (L.floor = function () {
        return G(new this.constructor(this), this.e + 1, 3);
    }),
    (L.greaterThan = L.gt =
        function (n) {
            return this.cmp(n) > 0;
        }),
    (L.greaterThanOrEqualTo = L.gte =
        function (n) {
            var e = this.cmp(n);
            return 1 == e || 0 === e;
        }),
    (L.hyperbolicCosine = L.cosh =
        function () {
            var n,
                e,
                t,
                a,
                r,
                i = this,
                s = i.constructor,
                u = new s(1);
            if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
            if (i.isZero()) return u;
            (t = s.precision),
                (a = s.rounding),
                (s.precision = t + Math.max(i.e, i.sd()) + 4),
                (s.rounding = 1),
                (r = i.d.length) < 32
                    ? (e = (1 / V(4, (n = Math.ceil(r / 3)))).toString())
                    : ((n = 16), (e = "2.3283064365386962890625e-10")),
                (i = Z(s, 1, i.times(e), new s(1), !0));
            for (var o, d = n, l = new s(8); d--; ) (o = i.times(i)), (i = u.minus(o.times(l.minus(o.times(l)))));
            return G(i, (s.precision = t), (s.rounding = a), !0);
        }),
    (L.hyperbolicSine = L.sinh =
        function () {
            var n,
                e,
                t,
                a,
                r = this,
                i = r.constructor;
            if (!r.isFinite() || r.isZero()) return new i(r);
            if (
                ((e = i.precision),
                (t = i.rounding),
                (i.precision = e + Math.max(r.e, r.sd()) + 4),
                (i.rounding = 1),
                (a = r.d.length) < 3)
            )
                r = Z(i, 2, r, r, !0);
            else {
                (n = (n = 1.4 * Math.sqrt(a)) > 16 ? 16 : 0 | n), (r = Z(i, 2, (r = r.times(1 / V(5, n))), r, !0));
                for (var s, u = new i(5), o = new i(16), d = new i(20); n--; )
                    (s = r.times(r)), (r = r.times(u.plus(s.times(o.times(s).plus(d)))));
            }
            return (i.precision = e), (i.rounding = t), G(r, e, t, !0);
        }),
    (L.hyperbolicTangent = L.tanh =
        function () {
            var n,
                e,
                t = this.constructor;
            return this.isFinite()
                ? this.isZero()
                    ? new t(this)
                    : ((n = t.precision),
                      (e = t.rounding),
                      (t.precision = n + 7),
                      (t.rounding = 1),
                      k(this.sinh(), this.cosh(), (t.precision = n), (t.rounding = e)))
                : new t(this.s);
        }),
    (L.inverseCosine = L.acos =
        function () {
            var n = this,
                e = n.constructor,
                t = n.abs().cmp(1),
                a = e.precision,
                r = e.rounding;
            return -1 !== t
                ? 0 === t
                    ? n.isNeg()
                        ? R(e, a, r)
                        : new e(0)
                    : new e(NaN)
                : n.isZero()
                  ? R(e, a + 4, r).times(0.5)
                  : ((e.precision = a + 6),
                    (e.rounding = 1),
                    (n = new e(1).minus(n).div(n.plus(1)).sqrt().atan()),
                    (e.precision = a),
                    (e.rounding = r),
                    n.times(2));
        }),
    (L.inverseHyperbolicCosine = L.acosh =
        function () {
            var n,
                e,
                t = this,
                a = t.constructor;
            return t.lte(1)
                ? new a(t.eq(1) ? 0 : NaN)
                : t.isFinite()
                  ? ((n = a.precision),
                    (e = a.rounding),
                    (a.precision = n + Math.max(Math.abs(t.e), t.sd()) + 4),
                    (a.rounding = 1),
                    (c = !1),
                    (t = t.times(t).minus(1).sqrt().plus(t)),
                    (c = !0),
                    (a.precision = n),
                    (a.rounding = e),
                    t.ln())
                  : new a(t);
        }),
    (L.inverseHyperbolicSine = L.asinh =
        function () {
            var n,
                e,
                t = this,
                a = t.constructor;
            return !t.isFinite() || t.isZero()
                ? new a(t)
                : ((n = a.precision),
                  (e = a.rounding),
                  (a.precision = n + 2 * Math.max(Math.abs(t.e), t.sd()) + 6),
                  (a.rounding = 1),
                  (c = !1),
                  (t = t.times(t).plus(1).sqrt().plus(t)),
                  (c = !0),
                  (a.precision = n),
                  (a.rounding = e),
                  t.ln());
        }),
    (L.inverseHyperbolicTangent = L.atanh =
        function () {
            var n,
                e,
                t,
                a,
                r = this,
                i = r.constructor;
            return r.isFinite()
                ? r.e >= 0
                    ? new i(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
                    : ((n = i.precision), (e = i.rounding), Math.max((a = r.sd()), n) < -(2 * r.e) - 1)
                      ? G(new i(r), n, e, !0)
                      : ((i.precision = t = a - r.e),
                        (r = k(r.plus(1), new i(1).minus(r), t + n, 1)),
                        (i.precision = n + 4),
                        (i.rounding = 1),
                        (r = r.ln()),
                        (i.precision = n),
                        (i.rounding = e),
                        r.times(0.5))
                : new i(NaN);
        }),
    (L.inverseSine = L.asin =
        function () {
            var n,
                e,
                t,
                a,
                r = this,
                i = r.constructor;
            return r.isZero()
                ? new i(r)
                : ((e = r.abs().cmp(1)), (t = i.precision), (a = i.rounding), -1 !== e)
                  ? 0 === e
                      ? (((n = R(i, t + 4, a).times(0.5)).s = r.s), n)
                      : new i(NaN)
                  : ((i.precision = t + 6),
                    (i.rounding = 1),
                    (r = r.div(new i(1).minus(r.times(r)).sqrt().plus(1)).atan()),
                    (i.precision = t),
                    (i.rounding = a),
                    r.times(2));
        }),
    (L.inverseTangent = L.atan =
        function () {
            var n,
                e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                d = this,
                l = d.constructor,
                _ = l.precision,
                h = l.rounding;
            if (d.isFinite()) {
                if (d.isZero()) return new l(d);
                else if (d.abs().eq(1) && _ + 4 <= N) return ((s = R(l, _ + 4, h).times(0.25)).s = d.s), s;
            } else {
                if (!d.s) return new l(NaN);
                if (_ + 4 <= N) return ((s = R(l, _ + 4, h).times(0.5)).s = d.s), s;
            }
            for (l.precision = u = _ + 10, l.rounding = 1, n = t = Math.min(28, (u / 7 + 2) | 0); n; --n)
                d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (c = !1, e = Math.ceil(u / 7), a = 1, o = d.times(d), s = new l(d), r = d; -1 !== n; )
                if (
                    ((r = r.times(o)),
                    (i = s.minus(r.div((a += 2)))),
                    (r = r.times(o)),
                    void 0 !== (s = i.plus(r.div((a += 2)))).d[e])
                )
                    for (n = e; s.d[n] === i.d[n] && n--; );
            return t && (s = s.times(2 << (t - 1))), (c = !0), G(s, (l.precision = _), (l.rounding = h), !0);
        }),
    (L.isFinite = function () {
        return !!this.d;
    }),
    (L.isInteger = L.isInt =
        function () {
            return !!this.d && w(this.e / 7) > this.d.length - 2;
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
        function (n) {
            return 0 > this.cmp(n);
        }),
    (L.lessThanOrEqualTo = L.lte =
        function (n) {
            return 1 > this.cmp(n);
        }),
    (L.logarithm = L.log =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o = this.constructor,
                d = o.precision,
                l = o.rounding;
            if (null == n) (n = new o(10)), (e = !0);
            else {
                if (((t = (n = new o(n)).d), n.s < 0 || !t || !t[0] || n.eq(1))) return new o(NaN);
                e = n.eq(10);
            }
            if (((t = this.d), this.s < 0 || !t || !t[0] || this.eq(1)))
                return new o(t && !t[0] ? -1 / 0 : 1 != this.s ? NaN : t ? 0 : 1 / 0);
            if (e)
                if (t.length > 1) r = !0;
                else {
                    for (a = t[0]; a % 10 == 0; ) a /= 10;
                    r = 1 !== a;
                }
            if (((c = !1), C((u = k((i = K(this, (s = d + 5))), e ? B(o, s + 10) : K(n, s), s, 1)).d, (a = d), l)))
                do
                    if (((s += 10), (u = k((i = K(this, s)), e ? B(o, s + 10) : K(n, s), s, 1)), !r)) {
                        +E(u.d).slice(a + 1, a + 15) + 1 == 1e14 && (u = G(u, d + 1, 0));
                        break;
                    }
                while (C(u.d, (a += 10), l));
            return (c = !0), G(u, d, l);
        }),
    (L.minus = L.sub =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                d,
                l,
                _,
                h,
                f = this.constructor;
            if (((n = new f(n)), !this.d || !n.d))
                return (
                    this.s && n.s
                        ? this.d
                            ? (n.s = -n.s)
                            : (n = new f(n.d || this.s !== n.s ? this : NaN))
                        : (n = new f(NaN)),
                    n
                );
            if (this.s != n.s) return (n.s = -n.s), this.plus(n);
            if (((d = this.d), (h = n.d), (u = f.precision), (o = f.rounding), !d[0] || !h[0])) {
                if (h[0]) n.s = -n.s;
                else {
                    if (!d[0]) return new f(3 === o ? -0 : 0);
                    n = new f(this);
                }
                return c ? G(n, u, o) : n;
            }
            if (((t = w(n.e / 7)), (l = w(this.e / 7)), (d = d.slice()), (i = l - t))) {
                for (
                    (_ = i < 0) ? ((e = d), (i = -i), (s = h.length)) : ((e = h), (t = l), (s = d.length)),
                        i > (a = Math.max(Math.ceil(u / 7), s) + 2) && ((i = a), (e.length = 1)),
                        e.reverse(),
                        a = i;
                    a--;
                )
                    e.push(0);
                e.reverse();
            } else {
                for ((_ = (a = d.length) < (s = h.length)) && (s = a), a = 0; a < s; a++)
                    if (d[a] != h[a]) {
                        _ = d[a] < h[a];
                        break;
                    }
                i = 0;
            }
            for (_ && ((e = d), (d = h), (h = e), (n.s = -n.s)), s = d.length, a = h.length - s; a > 0; --a) d[s++] = 0;
            for (a = h.length; a > i; ) {
                if (d[--a] < h[a]) {
                    for (r = a; r && 0 === d[--r]; ) d[r] = 1e7 - 1;
                    --d[r], (d[a] += 1e7);
                }
                d[a] -= h[a];
            }
            for (; 0 === d[--s]; ) d.pop();
            for (; 0 === d[0]; d.shift()) --t;
            return d[0] ? ((n.d = d), (n.e = I(d, t)), c ? G(n, u, o) : n) : new f(3 === o ? -0 : 0);
        }),
    (L.modulo = L.mod =
        function (n) {
            var e,
                t = this.constructor;
            return ((n = new t(n)), this.d && n.s && (!n.d || n.d[0]))
                ? n.d && (!this.d || this.d[0])
                    ? ((c = !1),
                      9 == t.modulo
                          ? ((e = k(this, n.abs(), 0, 3, 1)), (e.s *= n.s))
                          : (e = k(this, n, 0, t.modulo, 1)),
                      (e = e.times(n)),
                      (c = !0),
                      this.minus(e))
                    : G(new t(this), t.precision, t.rounding)
                : new t(NaN);
        }),
    (L.naturalExponential = L.exp =
        function () {
            return P(this);
        }),
    (L.naturalLogarithm = L.ln =
        function () {
            return K(this);
        }),
    (L.negated = L.neg =
        function () {
            var n = new this.constructor(this);
            return (n.s = -n.s), G(n);
        }),
    (L.plus = L.add =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                d,
                l,
                _ = this.constructor;
            if (((n = new _(n)), !this.d || !n.d))
                return this.s && n.s ? this.d || (n = new _(n.d || this.s === n.s ? this : NaN)) : (n = new _(NaN)), n;
            if (this.s != n.s) return (n.s = -n.s), this.minus(n);
            if (((d = this.d), (l = n.d), (u = _.precision), (o = _.rounding), !d[0] || !l[0]))
                return l[0] || (n = new _(this)), c ? G(n, u, o) : n;
            if (((i = w(this.e / 7)), (a = w(n.e / 7)), (d = d.slice()), (r = i - a))) {
                for (
                    r < 0 ? ((t = d), (r = -r), (s = l.length)) : ((t = l), (a = i), (s = d.length)),
                        r > (s = (i = Math.ceil(u / 7)) > s ? i + 1 : s + 1) && ((r = s), (t.length = 1)),
                        t.reverse();
                    r--;
                )
                    t.push(0);
                t.reverse();
            }
            for ((s = d.length) - (r = l.length) < 0 && ((r = s), (t = l), (l = d), (d = t)), e = 0; r; )
                (e = ((d[--r] = d[r] + l[r] + e) / 1e7) | 0), (d[r] %= 1e7);
            for (e && (d.unshift(e), ++a), s = d.length; 0 == d[--s]; ) d.pop();
            return (n.d = d), (n.e = I(d, a)), c ? G(n, u, o) : n;
        }),
    (L.precision = L.sd =
        function (n) {
            var e;
            if (void 0 !== n && !!n !== n && 1 !== n && 0 !== n) throw Error(h + n);
            return this.d ? ((e = O(this.d)), n && this.e + 1 > e && (e = this.e + 1)) : (e = NaN), e;
        }),
    (L.round = function () {
        var n = this.constructor;
        return G(new n(this), this.e + 1, n.rounding);
    }),
    (L.sine = L.sin =
        function () {
            var n,
                e,
                t = this,
                a = t.constructor;
            return t.isFinite()
                ? t.isZero()
                    ? new a(t)
                    : ((n = a.precision),
                      (e = a.rounding),
                      (a.precision = n + Math.max(t.e, t.sd()) + 7),
                      (a.rounding = 1),
                      (t = (function (n, e) {
                          var t,
                              a = e.d.length;
                          if (a < 3) return e.isZero() ? e : Z(n, 2, e, e);
                          (t = (t = 1.4 * Math.sqrt(a)) > 16 ? 16 : 0 | t),
                              (e = Z(n, 2, (e = e.times(1 / V(5, t))), e));
                          for (var r, i = new n(5), s = new n(16), u = new n(20); t--; )
                              (r = e.times(e)), (e = e.times(i.plus(r.times(s.times(r).minus(u)))));
                          return e;
                      })(a, j(a, t))),
                      (a.precision = n),
                      (a.rounding = e),
                      G(s > 2 ? t.neg() : t, n, e, !0))
                : new a(NaN);
        }),
    (L.squareRoot = L.sqrt =
        function () {
            var n,
                e,
                t,
                a,
                r,
                i,
                s = this.d,
                u = this.e,
                o = this.s,
                d = this.constructor;
            if (1 !== o || !s || !s[0]) return new d(!o || (o < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0);
            for (
                c = !1,
                    0 == (o = Math.sqrt(+this)) || o == 1 / 0
                        ? (((e = E(s)).length + u) % 2 == 0 && (e += "0"),
                          (o = Math.sqrt(e)),
                          (u = w((u + 1) / 2) - (u < 0 || u % 2)),
                          (a = new d(
                              (e = o == 1 / 0 ? "5e" + u : (e = o.toExponential()).slice(0, e.indexOf("e") + 1) + u),
                          )))
                        : (a = new d(o.toString())),
                    t = (u = d.precision) + 3;
                ;
            )
                if (
                    ((a = (i = a).plus(k(this, i, t + 2, 1)).times(0.5)),
                    E(i.d).slice(0, t) === (e = E(a.d)).slice(0, t))
                ) {
                    if ("9999" != (e = e.slice(t - 3, t + 1)) && (r || "4999" != e)) {
                        (+e && (+e.slice(1) || "5" != e.charAt(0))) || (G(a, u + 1, 1), (n = !a.times(a).eq(this)));
                        break;
                    }
                    if (!r && (G(i, u + 1, 0), i.times(i).eq(this))) {
                        a = i;
                        break;
                    }
                    (t += 4), (r = 1);
                }
            return (c = !0), G(a, u, d.rounding, n);
        }),
    (L.tangent = L.tan =
        function () {
            var n,
                e,
                t = this,
                a = t.constructor;
            return t.isFinite()
                ? t.isZero()
                    ? new a(t)
                    : ((n = a.precision),
                      (e = a.rounding),
                      (a.precision = n + 10),
                      (a.rounding = 1),
                      ((t = t.sin()).s = 1),
                      (t = k(t, new a(1).minus(t.times(t)).sqrt(), n + 10, 0)),
                      (a.precision = n),
                      (a.rounding = e),
                      G(2 == s || 4 == s ? t.neg() : t, n, e, !0))
                : new a(NaN);
        }),
    (L.times = L.mul =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                d,
                l = this.constructor,
                _ = this.d,
                h = (n = new l(n)).d;
            if (((n.s *= this.s), !_ || !_[0] || !h || !h[0]))
                return new l(!n.s || (_ && !_[0] && !h) || (h && !h[0] && !_) ? NaN : !_ || !h ? n.s / 0 : 0 * n.s);
            for (
                t = w(this.e / 7) + w(n.e / 7),
                    (o = _.length) < (d = h.length) && ((i = _), (_ = h), (h = i), (s = o), (o = d), (d = s)),
                    i = [],
                    a = s = o + d;
                a--;
            )
                i.push(0);
            for (a = d; --a >= 0; ) {
                for (e = 0, r = o + a; r > a; )
                    (u = i[r] + h[a] * _[r - a - 1] + e), (i[r--] = (u % 1e7) | 0), (e = (u / 1e7) | 0);
                i[r] = ((i[r] + e) % 1e7) | 0;
            }
            for (; !i[--s]; ) i.pop();
            return e ? ++t : i.shift(), (n.d = i), (n.e = I(i, t)), c ? G(n, l.precision, l.rounding) : n;
        }),
    (L.toBinary = function (n, e) {
        return W(this, 2, n, e);
    }),
    (L.toDecimalPlaces = L.toDP =
        function (n, e) {
            var t = this,
                a = t.constructor;
            return ((t = new a(t)), void 0 === n)
                ? t
                : (A(n, 0, 1e9), void 0 === e ? (e = a.rounding) : A(e, 0, 8), G(t, n + t.e + 1, e));
        }),
    (L.toExponential = function (n, e) {
        var t,
            a = this,
            r = a.constructor;
        return (
            void 0 === n
                ? (t = D(a, !0))
                : (A(n, 0, 1e9),
                  void 0 === e ? (e = r.rounding) : A(e, 0, 8),
                  (t = D((a = G(new r(a), n + 1, e)), !0, n + 1))),
            a.isNeg() && !a.isZero() ? "-" + t : t
        );
    }),
    (L.toFixed = function (n, e) {
        var t,
            a,
            r = this.constructor;
        return (
            void 0 === n
                ? (t = D(this))
                : (A(n, 0, 1e9),
                  void 0 === e ? (e = r.rounding) : A(e, 0, 8),
                  (t = D((a = G(new r(this), n + this.e + 1, e)), !1, n + a.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + t : t
        );
    }),
    (L.toFraction = function (n) {
        var e,
            t,
            a,
            r,
            i,
            s,
            u,
            o,
            d,
            l,
            _,
            f,
            y = this.d,
            m = this.constructor;
        if (!y) return new m(this);
        if (
            ((d = t = new m(1)),
            (a = o = new m(0)),
            (s = (i = (e = new m(a)).e = O(y) - this.e - 1) % 7),
            (e.d[0] = g(10, s < 0 ? 7 + s : s)),
            null == n)
        )
            n = i > 0 ? e : d;
        else {
            if (!(u = new m(n)).isInt() || u.lt(d)) throw Error(h + u);
            n = u.gt(e) ? (i > 0 ? e : d) : u;
        }
        for (
            c = !1, u = new m(E(y)), l = m.precision, m.precision = i = 7 * y.length * 2;
            (_ = k(u, e, 0, 1, 1)), 1 != (r = t.plus(_.times(a))).cmp(n);
        )
            (t = a), (a = r), (r = d), (d = o.plus(_.times(r))), (o = r), (r = e), (e = u.minus(_.times(r))), (u = r);
        return (
            (r = k(n.minus(t), a, 0, 1, 1)),
            (o = o.plus(r.times(d))),
            (t = t.plus(r.times(a))),
            (o.s = d.s = this.s),
            (f =
                1 >
                k(d, a, i, 1)
                    .minus(this)
                    .abs()
                    .cmp(k(o, t, i, 1).minus(this).abs())
                    ? [d, a]
                    : [o, t]),
            (m.precision = l),
            (c = !0),
            f
        );
    }),
    (L.toHexadecimal = L.toHex =
        function (n, e) {
            return W(this, 16, n, e);
        }),
    (L.toNearest = function (n, e) {
        var t = this,
            a = t.constructor;
        if (((t = new a(t)), null == n)) {
            if (!t.d) return t;
            (n = new a(1)), (e = a.rounding);
        } else {
            if (((n = new a(n)), void 0 === e ? (e = a.rounding) : A(e, 0, 8), !t.d)) return n.s ? t : n;
            if (!n.d) return n.s && (n.s = t.s), n;
        }
        return n.d[0] ? ((c = !1), (t = k(t, n, 0, e, 1).times(n)), (c = !0), G(t)) : ((n.s = t.s), (t = n)), t;
    }),
    (L.toNumber = function () {
        return +this;
    }),
    (L.toOctal = function (n, e) {
        return W(this, 8, n, e);
    }),
    (L.toPower = L.pow =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u = this,
                o = u.constructor,
                d = +(n = new o(n));
            if (!u.d || !n.d || !u.d[0] || !n.d[0]) return new o(g(+u, d));
            if ((u = new o(u)).eq(1)) return u;
            if (((a = o.precision), (i = o.rounding), n.eq(1))) return G(u, a, i);
            if ((e = w(n.e / 7)) >= n.d.length - 1 && (t = d < 0 ? -d : d) <= 0x1fffffffffffff)
                return (r = F(o, u, t, a)), n.s < 0 ? new o(1).div(r) : G(r, a, i);
            if ((s = u.s) < 0) {
                if (e < n.d.length - 1) return new o(NaN);
                if (((1 & n.d[e]) == 0 && (s = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length)) return (u.s = s), u;
            }
            return (e =
                0 != (t = g(+u, d)) && isFinite(t)
                    ? new o(t + "").e
                    : w(d * (Math.log("0." + E(u.d)) / Math.LN10 + u.e + 1))) >
                o.maxE + 1 || e < o.minE - 1
                ? new o(e > 0 ? s / 0 : 0)
                : ((c = !1),
                  (o.rounding = u.s = 1),
                  (t = Math.min(12, (e + "").length)),
                  (r = P(n.times(K(u, a + t)), a)).d &&
                      C((r = G(r, a + 5, 1)).d, a, i) &&
                      ((e = a + 10),
                      +E((r = G(P(n.times(K(u, e + t)), e), e + 5, 1)).d).slice(a + 1, a + 15) + 1 == 1e14 &&
                          (r = G(r, a + 1, 0))),
                  (r.s = s),
                  (c = !0),
                  (o.rounding = i),
                  G(r, a, i));
        }),
    (L.toPrecision = function (n, e) {
        var t,
            a = this,
            r = a.constructor;
        return (
            void 0 === n
                ? (t = D(a, a.e <= r.toExpNeg || a.e >= r.toExpPos))
                : (A(n, 1, 1e9),
                  void 0 === e ? (e = r.rounding) : A(e, 0, 8),
                  (t = D((a = G(new r(a), n, e)), n <= a.e || a.e <= r.toExpNeg, n))),
            a.isNeg() && !a.isZero() ? "-" + t : t
        );
    }),
    (L.toSignificantDigits = L.toSD =
        function (n, e) {
            var t = this.constructor;
            return (
                void 0 === n
                    ? ((n = t.precision), (e = t.rounding))
                    : (A(n, 1, 1e9), void 0 === e ? (e = t.rounding) : A(e, 0, 8)),
                G(new t(this), n, e)
            );
        }),
    (L.toString = function () {
        var n = this.constructor,
            e = D(this, this.e <= n.toExpNeg || this.e >= n.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + e : e;
    }),
    (L.truncated = L.trunc =
        function () {
            return G(new this.constructor(this), this.e + 1, 1);
        }),
    (L.valueOf = L.toJSON =
        function () {
            var n = this.constructor,
                e = D(this, this.e <= n.toExpNeg || this.e >= n.toExpPos);
            return this.isNeg() ? "-" + e : e;
        });
var k = (function () {
    function n(n, e, t) {
        var a,
            r = 0,
            i = n.length;
        for (n = n.slice(); i--; ) (a = n[i] * e + r), (n[i] = (a % t) | 0), (r = (a / t) | 0);
        return r && n.unshift(r), n;
    }
    function e(n, e, t, a) {
        var r, i;
        if (t != a) i = t > a ? 1 : -1;
        else
            for (r = i = 0; r < t; r++)
                if (n[r] != e[r]) {
                    i = n[r] > e[r] ? 1 : -1;
                    break;
                }
        return i;
    }
    function t(n, e, t, a) {
        for (var r = 0; t--; ) (n[t] -= r), (r = +(n[t] < e[t])), (n[t] = r * a + n[t] - e[t]);
        for (; !n[0] && n.length > 1; ) n.shift();
    }
    return function (a, r, s, u, o, d) {
        var l,
            c,
            _,
            h,
            f,
            y,
            m,
            g,
            p,
            b,
            v,
            S,
            M,
            N,
            L,
            E,
            A,
            C,
            T,
            k,
            D = a.constructor,
            I = a.s == r.s ? 1 : -1,
            B = a.d,
            R = r.d;
        if (!B || !B[0] || !R || !R[0])
            return new D(!a.s || !r.s || (B ? R && B[0] == R[0] : !R) ? NaN : (B && 0 == B[0]) || !R ? 0 * I : I / 0);
        for (
            d ? ((f = 1), (c = a.e - r.e)) : ((d = 1e7), (f = 7), (c = w(a.e / f) - w(r.e / f))),
                T = R.length,
                A = B.length,
                b = (p = new D(I)).d = [],
                _ = 0;
            R[_] == (B[_] || 0);
            _++
        );
        if (
            (R[_] > (B[_] || 0) && c--,
            null == s ? ((N = s = D.precision), (u = D.rounding)) : (N = o ? s + (a.e - r.e) + 1 : s),
            N < 0)
        )
            b.push(1), (y = !0);
        else {
            if (((N = (N / f + 2) | 0), (_ = 0), 1 == T)) {
                for (h = 0, R = R[0], N++; (_ < A || h) && N--; _++)
                    (L = h * d + (B[_] || 0)), (b[_] = (L / R) | 0), (h = (L % R) | 0);
                y = h || _ < A;
            } else {
                for (
                    (h = (d / (R[0] + 1)) | 0) > 1 &&
                        ((R = n(R, h, d)), (B = n(B, h, d)), (T = R.length), (A = B.length)),
                        E = T,
                        S = (v = B.slice(0, T)).length;
                    S < T;
                )
                    v[S++] = 0;
                (k = R.slice()).unshift(0), (C = R[0]), R[1] >= d / 2 && ++C;
                do
                    (h = 0),
                        (l = e(R, v, T, S)) < 0
                            ? ((M = v[0]),
                              T != S && (M = M * d + (v[1] || 0)),
                              (h = (M / C) | 0) > 1
                                  ? (h >= d && (h = d - 1),
                                    (g = (m = n(R, h, d)).length),
                                    (S = v.length),
                                    1 == (l = e(m, v, g, S)) && (h--, t(m, T < g ? k : R, g, d)))
                                  : (0 == h && (l = h = 1), (m = R.slice())),
                              (g = m.length) < S && m.unshift(0),
                              t(v, m, S, d),
                              -1 == l && ((S = v.length), (l = e(R, v, T, S)) < 1 && (h++, t(v, T < S ? k : R, S, d))),
                              (S = v.length))
                            : 0 === l && (h++, (v = [0])),
                        (b[_++] = h),
                        l && v[0] ? (v[S++] = B[E] || 0) : ((v = [B[E]]), (S = 1));
                while ((E++ < A || void 0 !== v[0]) && N--);
                y = void 0 !== v[0];
            }
            b[0] || b.shift();
        }
        if (1 == f) (p.e = c), (i = y);
        else {
            for (_ = 1, h = b[0]; h >= 10; h /= 10) _++;
            (p.e = _ + c * f - 1), G(p, o ? s + p.e + 1 : s, u, y);
        }
        return p;
    };
})();
function G(n, e, t, a) {
    var r,
        i,
        s,
        u,
        o,
        d,
        l,
        _,
        h,
        f = n.constructor;
    n: if (null != e) {
        if (!(_ = n.d)) return n;
        for (r = 1, u = _[0]; u >= 10; u /= 10) r++;
        if ((i = e - r) < 0) (i += 7), (s = e), (o = (((l = _[(h = 0)]) / g(10, r - s - 1)) % 10) | 0);
        else if ((h = Math.ceil((i + 1) / 7)) >= (u = _.length))
            if (a) {
                for (; u++ <= h; ) _.push(0);
                (l = o = 0), (r = 1), (i %= 7), (s = i - 7 + 1);
            } else break n;
        else {
            for (r = 1, l = u = _[h]; u >= 10; u /= 10) r++;
            (i %= 7), (o = (s = i - 7 + r) < 0 ? 0 : ((l / g(10, r - s - 1)) % 10) | 0);
        }
        if (
            ((a = a || e < 0 || void 0 !== _[h + 1] || (s < 0 ? l : l % g(10, r - s - 1))),
            (d =
                t < 4
                    ? (o || a) && (0 == t || t == (n.s < 0 ? 3 : 2))
                    : o > 5 ||
                      (5 == o &&
                          (4 == t ||
                              a ||
                              (6 == t && ((i > 0 ? (s > 0 ? l / g(10, r - s) : 0) : _[h - 1]) % 10) & 1) ||
                              t == (n.s < 0 ? 8 : 7)))),
            e < 1 || !_[0])
        )
            return (
                (_.length = 0),
                d ? ((e -= n.e + 1), (_[0] = g(10, (7 - (e % 7)) % 7)), (n.e = -e || 0)) : (_[0] = n.e = 0),
                n
            );
        if (
            (0 == i
                ? ((_.length = h), (u = 1), h--)
                : ((_.length = h + 1),
                  (u = g(10, 7 - i)),
                  (_[h] = s > 0 ? (((l / g(10, r - s)) % g(10, s)) | 0) * u : 0)),
            d)
        )
            for (;;)
                if (0 == h) {
                    for (i = 1, s = _[0]; s >= 10; s /= 10) i++;
                    for (s = _[0] += u, u = 1; s >= 10; s /= 10) u++;
                    i != u && (n.e++, 1e7 == _[0] && (_[0] = 1));
                    break;
                } else {
                    if (((_[h] += u), 1e7 != _[h])) break;
                    (_[h--] = 0), (u = 1);
                }
        for (i = _.length; 0 === _[--i]; ) _.pop();
    }
    return c && (n.e > f.maxE ? ((n.d = null), (n.e = NaN)) : n.e < f.minE && ((n.e = 0), (n.d = [0]))), n;
}
function D(n, e, t) {
    if (!n.isFinite()) return U(n);
    var a,
        r = n.e,
        i = E(n.d),
        s = i.length;
    return (
        e
            ? (t && (a = t - s) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + x(a))
                  : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
              (i = i + (n.e < 0 ? "e" : "e+") + n.e))
            : r < 0
              ? ((i = "0." + x(-r - 1) + i), t && (a = t - s) > 0 && (i += x(a)))
              : r >= s
                ? ((i += x(r + 1 - s)), t && (a = t - r - 1) > 0 && (i = i + "." + x(a)))
                : ((a = r + 1) < s && (i = i.slice(0, a) + "." + i.slice(a)),
                  t && (a = t - s) > 0 && (r + 1 === s && (i += "."), (i += x(a)))),
        i
    );
}
function I(n, e) {
    var t = n[0];
    for (e *= 7; t >= 10; t /= 10) e++;
    return e;
}
function B(n, e, t) {
    if (e > M) throw ((c = !0), t && (n.precision = t), Error(f));
    return G(new n(o), e, 1, !0);
}
function R(n, e, t) {
    if (e > N) throw Error(f);
    return G(new n(d), e, t, !0);
}
function O(n) {
    var e = n.length - 1,
        t = 7 * e + 1;
    if ((e = n[e])) {
        for (; e % 10 == 0; e /= 10) t--;
        for (e = n[0]; e >= 10; e /= 10) t++;
    }
    return t;
}
function x(n) {
    for (var e = ""; n--; ) e += "0";
    return e;
}
function F(n, e, t, a) {
    var r,
        i = new n(1),
        s = Math.ceil(a / 7 + 4);
    for (c = !1; ; ) {
        if ((t % 2 && Y((i = i.times(e)).d, s) && (r = !0), 0 === (t = w(t / 2)))) {
            (t = i.d.length - 1), r && 0 === i.d[t] && ++i.d[t];
            break;
        }
        Y((e = e.times(e)).d, s);
    }
    return (c = !0), i;
}
function q(n) {
    return 1 & n.d[n.d.length - 1];
}
function H(n, e, t) {
    for (var a, r, i = new n(e[0]), s = 0; ++s < e.length; ) {
        if (!(r = new n(e[s])).s) {
            i = r;
            break;
        }
        ((a = i.cmp(r)) === t || (0 === a && i.s === t)) && (i = r);
    }
    return i;
}
function P(n, e) {
    var t,
        a,
        r,
        i,
        s,
        u,
        o,
        d = 0,
        l = 0,
        _ = 0,
        h = n.constructor,
        f = h.rounding,
        y = h.precision;
    if (!n.d || !n.d[0] || n.e > 17)
        return new h(n.d ? (!n.d[0] ? 1 : n.s < 0 ? 0 : 1 / 0) : n.s ? (n.s < 0 ? 0 : n) : 0 / 0);
    for (null == e ? ((c = !1), (o = y)) : (o = e), u = new h(0.03125); n.e > -2; ) (n = n.times(u)), (_ += 5);
    for (o += a = ((Math.log(g(2, _)) / Math.LN10) * 2 + 5) | 0, t = i = s = new h(1), h.precision = o; ; ) {
        if (
            ((i = G(i.times(n), o, 1)),
            (t = t.times(++l)),
            E((u = s.plus(k(i, t, o, 1))).d).slice(0, o) === E(s.d).slice(0, o))
        ) {
            for (r = _; r--; ) s = G(s.times(s), o, 1);
            if (null != e) return (h.precision = y), s;
            if (!(d < 3 && C(s.d, o - a, f, d))) return G(s, (h.precision = y), f, (c = !0));
            (h.precision = o += 10), (t = i = u = new h(1)), (l = 0), d++;
        }
        s = u;
    }
}
function K(n, e) {
    var t,
        a,
        r,
        i,
        s,
        u,
        o,
        d,
        l,
        _,
        h,
        f = 1,
        y = n,
        m = y.d,
        w = y.constructor,
        g = w.rounding,
        p = w.precision;
    if (y.s < 0 || !m || !m[0] || (!y.e && 1 == m[0] && 1 == m.length))
        return new w(m && !m[0] ? -1 / 0 : 1 != y.s ? NaN : m ? 0 : y);
    if (
        (null == e ? ((c = !1), (l = p)) : (l = e),
        (w.precision = l += 10),
        (a = (t = E(m)).charAt(0)),
        !(15e14 > Math.abs((i = y.e))))
    )
        return (
            (d = B(w, l + 2, p).times(i + "")),
            (y = K(new w(a + "." + t.slice(1)), l - 10).plus(d)),
            (w.precision = p),
            null == e ? G(y, p, g, (c = !0)) : y
        );
    for (; (a < 7 && 1 != a) || (1 == a && t.charAt(1) > 3); ) (a = (t = E((y = y.times(n)).d)).charAt(0)), f++;
    for (
        i = y.e,
            a > 1 ? ((y = new w("0." + t)), i++) : (y = new w(a + "." + t.slice(1))),
            _ = y,
            o = s = y = k(y.minus(1), y.plus(1), l, 1),
            h = G(y.times(y), l, 1),
            r = 3;
        ;
    ) {
        if (((s = G(s.times(h), l, 1)), E((d = o.plus(k(s, new w(r), l, 1))).d).slice(0, l) === E(o.d).slice(0, l))) {
            if (
                ((o = o.times(2)),
                0 !== i && (o = o.plus(B(w, l + 2, p).times(i + ""))),
                (o = k(o, new w(f), l, 1)),
                null != e)
            )
                return (w.precision = p), o;
            if (!C(o.d, l - 10, g, u)) return G(o, (w.precision = p), g, (c = !0));
            (w.precision = l += 10),
                (d = s = y = k(_.minus(1), _.plus(1), l, 1)),
                (h = G(y.times(y), l, 1)),
                (r = u = 1);
        }
        (o = d), (r += 2);
    }
}
function U(n) {
    return String((n.s * n.s) / 0);
}
function z(n, e) {
    var t, a, r;
    for (
        (t = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
            (a = e.search(/e/i)) > 0
                ? (t < 0 && (t = a), (t += +e.slice(a + 1)), (e = e.substring(0, a)))
                : t < 0 && (t = e.length),
            a = 0;
        48 === e.charCodeAt(a);
        a++
    );
    for (r = e.length; 48 === e.charCodeAt(r - 1); --r);
    if ((e = e.slice(a, r))) {
        if (((r -= a), (n.e = t = t - a - 1), (n.d = []), (a = (t + 1) % 7), t < 0 && (a += 7), a < r)) {
            for (a && n.d.push(+e.slice(0, a)), r -= 7; a < r; ) n.d.push(+e.slice(a, (a += 7)));
            a = 7 - (e = e.slice(a)).length;
        } else a -= r;
        for (; a--; ) e += "0";
        n.d.push(+e),
            c &&
                (n.e > n.constructor.maxE
                    ? ((n.d = null), (n.e = NaN))
                    : n.e < n.constructor.minE && ((n.e = 0), (n.d = [0])));
    } else (n.e = 0), (n.d = [0]);
    return n;
}
function Z(n, e, t, a, r) {
    var i,
        s,
        u,
        o,
        d = n.precision,
        l = Math.ceil(d / 7);
    for (c = !1, o = t.times(t), u = new n(a); ; ) {
        if (
            ((s = k(u.times(o), new n(e++ * e++), d, 1)),
            (u = r ? a.plus(s) : a.minus(s)),
            (a = k(s.times(o), new n(e++ * e++), d, 1)),
            void 0 !== (s = u.plus(a)).d[l])
        ) {
            for (i = l; s.d[i] === u.d[i] && i--; );
            if (-1 == i) break;
        }
        (i = u), (u = a), (a = s), (s = i);
    }
    return (c = !0), (s.d.length = l + 1), s;
}
function V(n, e) {
    for (var t = n; --e; ) t *= n;
    return t;
}
function j(n, e) {
    var t,
        a = e.s < 0,
        r = R(n, n.precision, 1),
        i = r.times(0.5);
    if ((e = e.abs()).lte(i)) return (s = a ? 4 : 1), e;
    if ((t = e.divToInt(r)).isZero()) s = a ? 3 : 2;
    else {
        if ((e = e.minus(t.times(r))).lte(i)) return (s = q(t) ? (a ? 2 : 3) : a ? 4 : 1), e;
        s = q(t) ? (a ? 1 : 4) : a ? 3 : 2;
    }
    return e.minus(r).abs();
}
function W(n, e, t, a) {
    var r,
        s,
        o,
        d,
        l,
        c,
        _,
        h,
        f,
        y = n.constructor,
        m = void 0 !== t;
    if (
        (m ? (A(t, 1, 1e9), void 0 === a ? (a = y.rounding) : A(a, 0, 8)) : ((t = y.precision), (a = y.rounding)),
        n.isFinite())
    ) {
        for (
            o = (_ = D(n)).indexOf("."),
                m ? ((r = 2), 16 == e ? (t = 4 * t - 3) : 8 == e && (t = 3 * t - 2)) : (r = e),
                o >= 0 &&
                    ((_ = _.replace(".", "")),
                    ((f = new y(1)).e = _.length - o),
                    (f.d = T(D(f), 10, r)),
                    (f.e = f.d.length)),
                s = l = (h = T(_, 10, r)).length;
            0 == h[--l];
        )
            h.pop();
        if (h[0]) {
            if (
                (o < 0
                    ? s--
                    : (((n = new y(n)).d = h), (n.e = s), (h = (n = k(n, f, t, a, 0, r)).d), (s = n.e), (c = i)),
                (o = h[t]),
                (d = r / 2),
                (c = c || void 0 !== h[t + 1]),
                (c =
                    a < 4
                        ? (void 0 !== o || c) && (0 === a || a === (n.s < 0 ? 3 : 2))
                        : o > d || (o === d && (4 === a || c || (6 === a && 1 & h[t - 1]) || a === (n.s < 0 ? 8 : 7)))),
                (h.length = t),
                c)
            )
                for (; ++h[--t] > r - 1; ) (h[t] = 0), t || (++s, h.unshift(1));
            for (l = h.length; !h[l - 1]; --l);
            for (o = 0, _ = ""; o < l; o++) _ += u.charAt(h[o]);
            if (m) {
                if (l > 1)
                    if (16 == e || 8 == e) {
                        for (o = 16 == e ? 4 : 3, --l; l % o; l++) _ += "0";
                        for (l = (h = T(_, r, e)).length; !h[l - 1]; --l);
                        for (o = 1, _ = "1."; o < l; o++) _ += u.charAt(h[o]);
                    } else _ = _.charAt(0) + "." + _.slice(1);
                _ = _ + (s < 0 ? "p" : "p+") + s;
            } else if (s < 0) {
                for (; ++s; ) _ = "0" + _;
                _ = "0." + _;
            } else if (++s > l) for (s -= l; s--; ) _ += "0";
            else s < l && (_ = _.slice(0, s) + "." + _.slice(s));
        } else _ = m ? "0p+0" : "0";
        _ = (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") + _;
    } else _ = U(n);
    return n.s < 0 ? "-" + _ : _;
}
function Y(n, e) {
    if (n.length > e) return (n.length = e), !0;
}
function J(n) {
    return new this(n).abs();
}
function $(n) {
    return new this(n).acos();
}
function Q(n) {
    return new this(n).acosh();
}
function X(n, e) {
    return new this(n).plus(e);
}
function nn(n) {
    return new this(n).asin();
}
function ne(n) {
    return new this(n).asinh();
}
function nt(n) {
    return new this(n).atan();
}
function na(n) {
    return new this(n).atanh();
}
function nr(n, e) {
    (n = new this(n)), (e = new this(e));
    var t,
        a = this.precision,
        r = this.rounding,
        i = a + 4;
    return (
        n.s && e.s
            ? n.d || e.d
                ? !e.d || n.isZero()
                    ? ((t = e.s < 0 ? R(this, a, r) : new this(0)).s = n.s)
                    : !n.d || e.isZero()
                      ? ((t = R(this, i, 1).times(0.5)).s = n.s)
                      : e.s < 0
                        ? ((this.precision = i),
                          (this.rounding = 1),
                          (t = this.atan(k(n, e, i, 1))),
                          (e = R(this, i, 1)),
                          (this.precision = a),
                          (this.rounding = r),
                          (t = n.s < 0 ? t.minus(e) : t.plus(e)))
                        : (t = this.atan(k(n, e, i, 1)))
                : ((t = R(this, i, 1).times(e.s > 0 ? 0.25 : 0.75)).s = n.s)
            : (t = new this(NaN)),
        t
    );
}
function ni(n) {
    return new this(n).cbrt();
}
function ns(n) {
    return G((n = new this(n)), n.e + 1, 2);
}
function nu(n, e, t) {
    return new this(n).clamp(e, t);
}
function no(n) {
    if (!n || "object" != typeof n) throw Error(_ + "Object expected");
    var e,
        t,
        a,
        r = !0 === n.defaults,
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
    for (e = 0; e < i.length; e += 3)
        if (((t = i[e]), r && (this[t] = l[t]), void 0 !== (a = n[t])))
            if (w(a) === a && a >= i[e + 1] && a <= i[e + 2]) this[t] = a;
            else throw Error(h + t + ": " + a);
    if (((t = "crypto"), r && (this[t] = l[t]), void 0 !== (a = n[t])))
        if (!0 === a || !1 === a || 0 === a || 1 === a)
            if (a)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = !0;
                else throw Error(y);
            else this[t] = !1;
        else throw Error(h + t + ": " + a);
    return this;
}
function nd(n) {
    return new this(n).cos();
}
function nl(n) {
    return new this(n).cosh();
}
function nc(n, e) {
    return new this(n).div(e);
}
function n_(n) {
    return new this(n).exp();
}
function nh(n) {
    return G((n = new this(n)), n.e + 1, 3);
}
function nf() {
    var n,
        e,
        t = new this(0);
    for (n = 0, c = !1; n < arguments.length; )
        if (((e = new this(arguments[n++])), e.d)) t.d && (t = t.plus(e.times(e)));
        else {
            if (e.s) return (c = !0), new this(1 / 0);
            t = e;
        }
    return (c = !0), t.sqrt();
}
function ny(n) {
    return n instanceof nO || (n && n.toStringTag === m) || !1;
}
function nm(n) {
    return new this(n).ln();
}
function nw(n, e) {
    return new this(n).log(e);
}
function ng(n) {
    return new this(n).log(2);
}
function np(n) {
    return new this(n).log(10);
}
function nb() {
    return H(this, arguments, -1);
}
function nv() {
    return H(this, arguments, 1);
}
function nS(n, e) {
    return new this(n).mod(e);
}
function nM(n, e) {
    return new this(n).mul(e);
}
function nN(n, e) {
    return new this(n).pow(e);
}
function nL(n) {
    var e,
        t,
        a,
        r,
        i = 0,
        s = new this(1),
        u = [];
    if ((void 0 === n ? (n = this.precision) : A(n, 1, 1e9), (a = Math.ceil(n / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (e = crypto.getRandomValues(new Uint32Array(a)); i < a; )
                (r = e[i]) >= 429e7 ? (e[i] = crypto.getRandomValues(new Uint32Array(1))[0]) : (u[i++] = r % 1e7);
        else if (crypto.randomBytes) {
            for (e = crypto.randomBytes((a *= 4)); i < a; )
                (r = e[i] + (e[i + 1] << 8) + (e[i + 2] << 16) + ((127 & e[i + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(e, i)
                    : (u.push(r % 1e7), (i += 4));
            i = a / 4;
        } else throw Error(y);
    else for (; i < a; ) u[i++] = (1e7 * Math.random()) | 0;
    for (a = u[--i], n %= 7, a && n && ((r = g(10, 7 - n)), (u[i] = ((a / r) | 0) * r)); 0 === u[i]; i--) u.pop();
    if (i < 0) (t = 0), (u = [0]);
    else {
        for (t = -1; 0 === u[0]; t -= 7) u.shift();
        for (a = 1, r = u[0]; r >= 10; r /= 10) a++;
        a < 7 && (t -= 7 - a);
    }
    return (s.e = t), (s.d = u), s;
}
function nE(n) {
    return G((n = new this(n)), n.e + 1, this.rounding);
}
function nA(n) {
    return (n = new this(n)).d ? (n.d[0] ? n.s : 0 * n.s) : n.s || NaN;
}
function nC(n) {
    return new this(n).sin();
}
function nT(n) {
    return new this(n).sinh();
}
function nk(n) {
    return new this(n).sqrt();
}
function nG(n, e) {
    return new this(n).sub(e);
}
function nD() {
    var n = 0,
        e = arguments,
        t = new this(e[0]);
    for (c = !1; t.s && ++n < e.length; ) t = t.plus(e[n]);
    return (c = !0), G(t, this.precision, this.rounding);
}
function nI(n) {
    return new this(n).tan();
}
function nB(n) {
    return new this(n).tanh();
}
function nR(n) {
    return G((n = new this(n)), n.e + 1, 1);
}
(L[Symbol.for("nodejs.util.inspect.custom")] = L.toString), (L[Symbol.toStringTag] = "Decimal");
var nO = (L.constructor = (function n(e) {
    var t, a, r;
    function i(n) {
        var e, t, a;
        if (!(this instanceof i)) return new i(n);
        if (((this.constructor = i), ny(n))) {
            (this.s = n.s),
                c
                    ? !n.d || n.e > i.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : n.e < i.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = n.e), (this.d = n.d.slice()))
                    : ((this.e = n.e), (this.d = n.d ? n.d.slice() : n.d));
            return;
        }
        if ("number" == (a = typeof n)) {
            if (0 === n) {
                (this.s = 1 / n < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((n < 0 ? ((n = -n), (this.s = -1)) : (this.s = 1), n === ~~n && n < 1e7)) {
                for (e = 0, t = n; t >= 10; t /= 10) e++;
                c
                    ? e > i.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : e < i.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = e), (this.d = [n]))
                    : ((this.e = e), (this.d = [n]));
                return;
            }
            if (0 * n != 0) {
                n || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
            }
            return z(this, n.toString());
        }
        if ("string" === a)
            return (
                45 === (t = n.charCodeAt(0))
                    ? ((n = n.slice(1)), (this.s = -1))
                    : (43 === t && (n = n.slice(1)), (this.s = 1)),
                S.test(n)
                    ? z(this, n)
                    : (function (n, e) {
                          var t, a, r, i, s, u, o, d, l;
                          if (e.indexOf("_") > -1) {
                              if (((e = e.replace(/(\d)_(?=\d)/g, "$1")), S.test(e))) return z(n, e);
                          } else if ("Infinity" === e || "NaN" === e)
                              return +e || (n.s = NaN), (n.e = NaN), (n.d = null), n;
                          if (b.test(e)) (t = 16), (e = e.toLowerCase());
                          else if (p.test(e)) t = 2;
                          else if (v.test(e)) t = 8;
                          else throw Error(h + e);
                          for (
                              (i = e.search(/p/i)) > 0
                                  ? ((o = +e.slice(i + 1)), (e = e.substring(2, i)))
                                  : (e = e.slice(2)),
                                  s = (i = e.indexOf(".")) >= 0,
                                  a = n.constructor,
                                  s &&
                                      ((i = (u = (e = e.replace(".", "")).length) - i), (r = F(a, new a(t), i, 2 * i))),
                                  i = l = (d = T(e, t, 1e7)).length - 1;
                              0 === d[i];
                              --i
                          )
                              d.pop();
                          return i < 0
                              ? new a(0 * n.s)
                              : ((n.e = I(d, l)),
                                (n.d = d),
                                (c = !1),
                                s && (n = k(n, r, 4 * u)),
                                o && (n = n.times(54 > Math.abs(o) ? g(2, o) : nO.pow(2, o))),
                                (c = !0),
                                n);
                      })(this, n)
            );
        if ("bigint" === a) return n < 0 ? ((n = -n), (this.s = -1)) : (this.s = 1), z(this, n.toString());
        throw Error(h + n);
    }
    if (
        ((i.prototype = L),
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
        (i.config = i.set = no),
        (i.clone = n),
        (i.isDecimal = ny),
        (i.abs = J),
        (i.acos = $),
        (i.acosh = Q),
        (i.add = X),
        (i.asin = nn),
        (i.asinh = ne),
        (i.atan = nt),
        (i.atanh = na),
        (i.atan2 = nr),
        (i.cbrt = ni),
        (i.ceil = ns),
        (i.clamp = nu),
        (i.cos = nd),
        (i.cosh = nl),
        (i.div = nc),
        (i.exp = n_),
        (i.floor = nh),
        (i.hypot = nf),
        (i.ln = nm),
        (i.log = nw),
        (i.log10 = np),
        (i.log2 = ng),
        (i.max = nb),
        (i.min = nv),
        (i.mod = nS),
        (i.mul = nM),
        (i.pow = nN),
        (i.random = nL),
        (i.round = nE),
        (i.sign = nA),
        (i.sin = nC),
        (i.sinh = nT),
        (i.sqrt = nk),
        (i.sub = nG),
        (i.sum = nD),
        (i.tan = nI),
        (i.tanh = nB),
        (i.trunc = nR),
        void 0 === e && (e = {}),
        e && !0 !== e.defaults)
    )
        for (
            t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            t < r.length;
        )
            e.hasOwnProperty((a = r[t++])) || (e[a] = this[a]);
    return i.config(e), i;
})(l));
(o = new nO(o)), (d = new nO(d)), new nO(10);
let nx = new nO(0);
function nF(n, e) {
    let t = e && e.cache ? e.cache : nU,
        a = e && e.serializer ? e.serializer : nP;
    return (
        e && e.strategy
            ? e.strategy
            : function (n, e) {
                  var t, a;
                  let r = 1 === n.length ? nq : nH;
                  return (t = e.cache.create()), (a = e.serializer), r.bind(this, n, t, a);
              }
    )(n, { cache: t, serializer: a });
}
function nq(n, e, t, a) {
    let r = null == a || "number" == typeof a || "boolean" == typeof a ? a : t(a),
        i = e.get(r);
    return void 0 === i && ((i = n.call(this, a)), e.set(r, i)), i;
}
function nH(n, e, t) {
    let a = Array.prototype.slice.call(arguments, 3),
        r = t(a),
        i = e.get(r);
    return void 0 === i && ((i = n.apply(this, a)), e.set(r, i)), i;
}
new nO(-0);
let nP = function () {
    return JSON.stringify(arguments);
};
class nK {
    cache;
    constructor() {
        this.cache = Object.create(null);
    }
    get(n) {
        return this.cache[n];
    }
    set(n, e) {
        this.cache[n] = e;
    }
}
let nU = {
        create: function () {
            return new nK();
        },
    },
    nz = {
        variadic: function (n, e) {
            var t, a;
            return (t = e.cache.create()), (a = e.serializer), nH.bind(this, n, t, a);
        },
        monadic: function (n, e) {
            var t, a;
            return (t = e.cache.create()), (a = e.serializer), nq.bind(this, n, t, a);
        },
    };
function nZ(n, e, t = Error) {
    if (!n) throw new t(e);
}
let nV = nF((...n) => new Intl.NumberFormat(...n), { strategy: nz.variadic });
nF((...n) => new Intl.PluralRules(...n), { strategy: nz.variadic }),
    nF((...n) => new Intl.Locale(...n), { strategy: nz.variadic });
let nj = nF((...n) => new Intl.ListFormat(...n), { strategy: nz.variadic });
function nW(n) {
    if (null == n) throw TypeError("undefined/null cannot be converted to object");
    return Object(n);
}
function nY(n) {
    return "function" == typeof n;
}
function nJ(n, e, t, a, r) {
    if ("object" != typeof n) throw TypeError("Options must be an object");
    let i = n[e];
    if (void 0 !== i) {
        if ("boolean" !== t && "string" !== t) throw TypeError("invalid type");
        if (
            ("boolean" === t && (i = !!i),
            "string" === t &&
                (i = (function (n) {
                    if ("symbol" == typeof n) throw TypeError("Cannot convert a Symbol value to a string");
                    return String(n);
                })(i)),
            void 0 !== a && !a.filter((n) => n == i).length)
        )
            throw RangeError(`${i} is not within ${a.join(", ")}`);
        return i;
    }
    return r;
}
let n$ = new WeakMap();
function nQ(n, e) {
    let t = n$.get(n);
    t || ((t = new Set(n)), n$.set(n, t));
    let a = e;
    for (;;) {
        if (t.has(a)) return a;
        let n = a.lastIndexOf("-");
        if (!~n) return;
        n >= 2 && "-" === a[n - 2] && (n -= 2), (a = a.slice(0, n));
    }
}
let nX = {
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
    n0 = {
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
    n1 = /-u(?:-[0-9a-z]{2,8})+/gi;
function n2(n, e, t = Error) {
    if (!n) throw new t(e);
}
function n3(n, e, t) {
    let [a, r, i] = e.split("-"),
        s = !0;
    if (i && "$" === i[0]) {
        let e = "!" !== i[1],
            a = (e ? t[i.slice(1)] : t[i.slice(2)]).map((n) => n0[n] || [n]).reduce((n, e) => [...n, ...e], []);
        s &&= a.indexOf(n.region || "") > -1 == e;
    } else s &&= !n.region || "*" === i || i === n.region;
    return (s &&= !n.script || "*" === r || r === n.script), (s &&= !n.language || "*" === a || a === n.language);
}
function n5(n) {
    return [n.language, n.script, n.region].filter(Boolean).join("-");
}
function n4(n, e, t) {
    for (let a of t.matches) {
        let r = n3(n, a.desired, t.matchVariables) && n3(e, a.supported, t.matchVariables);
        if ((a.oneway || r || (r = n3(n, a.supported, t.matchVariables) && n3(e, a.desired, t.matchVariables)), r)) {
            let r = 10 * a.distance;
            if (t.paradigmLocales.indexOf(n5(n)) > -1 != t.paradigmLocales.indexOf(n5(e)) > -1) return r - 1;
            return r;
        }
    }
    throw Error("No matching distance found");
}
let n7 = nF(
        function (n, e) {
            let t = new Intl.Locale(n).maximize(),
                r = new Intl.Locale(e).maximize(),
                i = { language: t.language, script: t.script || "", region: t.region || "" },
                s = { language: r.language, script: r.script || "", region: r.region || "" },
                u = 0,
                o = (function () {
                    if (!a) {
                        let n = nX["written-new"]["0"]?.paradigmLocales?._locales.split(" "),
                            e = nX["written-new"].slice(1, 5);
                        a = {
                            matches: nX["written-new"].slice(5).map((n) => {
                                let e = Object.keys(n)[0],
                                    t = n[e];
                                return {
                                    supported: e,
                                    desired: t._desired,
                                    distance: +t._distance,
                                    oneway: "true" === t.oneway,
                                };
                            }, {}),
                            matchVariables: e.reduce((n, e) => {
                                let t = Object.keys(e)[0],
                                    a = e[t];
                                return (n[t.slice(1)] = a._value.split("+")), n;
                            }, {}),
                            paradigmLocales: [
                                ...n,
                                ...n.map((n) => new Intl.Locale(n.replace(/_/g, "-")).maximize().toString()),
                            ],
                        };
                    }
                    return a;
                })();
            return (
                i.language !== s.language &&
                    (u += n4(
                        { language: t.language, script: "", region: "" },
                        { language: r.language, script: "", region: "" },
                        o,
                    )),
                i.script !== s.script &&
                    (u += n4(
                        { language: t.language, script: i.script, region: "" },
                        { language: r.language, script: s.script, region: "" },
                        o,
                    )),
                i.region !== s.region && (u += n4(i, s, o)),
                u
            );
        },
        { serializer: (n) => `${n[0]}|${n[1]}` },
    ),
    n9 = new WeakMap();
function n8(n) {
    return Intl.getCanonicalLocales(n)[0];
}
let n6 = [
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
    en = [
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
    ee = new WeakMap();
function et(n) {
    let e = ee.get(n);
    return e || ((e = Object.create(null)), ee.set(n, e)), e;
}
function ea(n, e) {
    let t = [],
        a = !1,
        r = !1,
        i = et(n),
        s = i.dataLocale,
        u = el.localeData[s];
    if (!u) throw TypeError("Invalid locale");
    let o = i.numberingSystem,
        d = u.digitalFormat[o];
    for (let n = 0; n < en.length && !a; n++) {
        let s = en[n],
            u = e[s.valueField],
            o = i[s.styleSlot],
            l = i[s.displaySlot],
            { unit: c, numberFormatUnit: _ } = s,
            h = Object.create(null);
        ("seconds" === c || "milliseconds" === c || "microseconds" === c) &&
            "numeric" === ("seconds" === c ? i.milliseconds : "milliseconds" === c ? i.microseconds : i.nanoseconds) &&
            ("seconds" === c
                ? (u += e.milliseconds / 1e3 + e.microseconds / 1e6 + e.nanoseconds / 1e9)
                : "milliseconds" === c
                  ? (u += e.microseconds / 1e3 + e.nanoseconds / 1e6)
                  : (u += e.nanoseconds / 1e3),
            void 0 === i.fractionalDigits
                ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
                : ((h.maximumFractionDigits = i.fractionalDigits), (h.minimumFractionDigits = i.fractionalDigits)),
            (h.roundingMode = "trunc"),
            (a = !0));
        if (0 !== u || "auto" !== l) {
            let n;
            (h.numberingSystem = i.numberingSystem),
                "2-digit" === o && (h.minimumIntegerDigits = 2),
                "2-digit" !== o && "numeric" !== o && ((h.style = "unit"), (h.unit = _), (h.unitDisplay = o));
            let e = nV(i.locale, h);
            r ? (n = t[t.length - 1]).push({ type: "literal", value: d }) : (n = []),
                e.formatToParts(u).forEach(({ type: e, value: t }) => {
                    n.push({ type: e, value: t, unit: _ });
                }),
                r || (("2-digit" === o || "numeric" === o) && (r = !0), t.push(n));
        } else r = !1;
    }
    let l = Object.create(null);
    l.type = "unit";
    let c = i.style;
    "digital" === c && (c = "short"), (l.style = c);
    let _ = nj(i.locale, l),
        h = [];
    for (let n of t) {
        let e = "";
        for (let { value: t } of n) e += t;
        h.push(e);
    }
    let f = _.formatToParts(h),
        y = 0,
        m = t.length,
        w = [];
    for (let { type: n, value: e } of f)
        if ("element" === n) {
            for (let n of (nZ(y < m, "Index out of bounds"), t[y])) w.push(n);
            y++;
        } else nZ("literal" === n, "Type must be literal"), w.push({ type: "literal", value: e });
    return w;
}
function er(n) {
    let e = (function n(e) {
        if ("number" == typeof e) return new nO(e);
        if ("bigint" == typeof e) return new nO(e.toString());
        if ((nZ("symbol" != typeof e, "Symbol is not supported", TypeError), void 0 === e)) return new nO(NaN);
        if (null === e || 0 === e) return nx;
        if (!0 === e) return new nO(1);
        if ("string" == typeof e)
            try {
                return new nO(e);
            } catch {
                return new nO(NaN);
            }
        nZ("object" == typeof e, "object expected", TypeError);
        let t = (function (n, e) {
            if ("object" == typeof n && null != n) {
                let t,
                    a = Symbol.toPrimitive in n ? n[Symbol.toPrimitive] : void 0;
                if (void 0 !== a) {
                    void 0 === e
                        ? (t = "default")
                        : "string" === e
                          ? (t = "string")
                          : (nZ("number" === e, 'preferredType must be "string" or "number"'), (t = "number"));
                    let r = a.call(n, t);
                    if ("object" != typeof r) return r;
                    throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let t of (void 0 === e && (e = "number"),
                "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                    let e = n[t];
                    if (nY(e)) {
                        let t = e.call(n);
                        if ("object" != typeof t) return t;
                    }
                }
                throw TypeError("Cannot convert object to primitive value");
            }
            return n;
        })(e, "number");
        return nZ("object" != typeof t, "object expected", TypeError), n(t);
    })(n);
    return nZ(e.isInteger(), `${n} is not an integer`), e.toNumber();
}
function ei(n) {
    if ("object" != typeof n) {
        if ("string" == typeof n) throw RangeError("Invalid duration format");
        throw TypeError("Invalid duration");
    }
    let e = {
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
        (void 0 !== n.days && (e.days = er(n.days)),
        void 0 !== n.hours && (e.hours = er(n.hours)),
        void 0 !== n.microseconds && (e.microseconds = er(n.microseconds)),
        void 0 !== n.milliseconds && (e.milliseconds = er(n.milliseconds)),
        void 0 !== n.minutes && (e.minutes = er(n.minutes)),
        void 0 !== n.months && (e.months = er(n.months)),
        void 0 !== n.nanoseconds && (e.nanoseconds = er(n.nanoseconds)),
        void 0 !== n.seconds && (e.seconds = er(n.seconds)),
        void 0 !== n.weeks && (e.weeks = er(n.weeks)),
        void 0 !== n.years && (e.years = er(n.years)),
        void 0 === n.years &&
            void 0 === n.months &&
            void 0 === n.weeks &&
            void 0 === n.days &&
            void 0 === n.hours &&
            void 0 === n.minutes &&
            void 0 === n.seconds &&
            void 0 === n.milliseconds &&
            void 0 === n.microseconds &&
            void 0 === n.nanoseconds)
    )
        throw TypeError("Invalid duration format");
    if (
        !(function (n) {
            let e = (function (n) {
                for (let e of n6) {
                    if (n[e] < 0) return -1;
                    if (n[e] > 0) return 1;
                }
                return 0;
            })(n);
            for (let t of n6) {
                let a = n[t];
                if ((nZ(isFinite(Number(a)), `${t} is not finite`), (a < 0 && e > 0) || (a > 0 && e < 0))) return !1;
            }
            return !0;
        })(e)
    )
        throw RangeError("Invalid duration format");
    return e;
}
let es = [
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
    eu = {
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
    eo = [
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
    ed = [
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
class el {
    constructor(n, e) {
        if (!(this && this instanceof el ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
        const t = r(n),
            a = Object.create(null),
            i = void 0 === e ? Object.create(null) : nW(e),
            s = nJ(i, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
            u = nJ(i, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== u && 0 > es.indexOf(u)) throw RangeError(`Invalid numberingSystems: ${u}`);
        (a.nu = u), (a.localeMatcher = s);
        const { localeData: o, availableLocales: d } = el,
            l = (function (n, e, t, a, r, i) {
                let s, u;
                if ("lookup" === t.localeMatcher)
                    s = (function (n, e, t) {
                        let a = { locale: "" };
                        for (let t of e) {
                            let e = t.replace(n1, ""),
                                r = nQ(n, e);
                            if (r) return (a.locale = r), t !== e && (a.extension = t.slice(e.length, t.length)), a;
                        }
                        return (a.locale = t()), a;
                    })(Array.from(n), e, i);
                else {
                    var o;
                    let t, a, r, u, d;
                    (o = Array.from(n)),
                        (r = []),
                        (u = e.reduce((n, e) => {
                            let t = e.replace(n1, "");
                            return r.push(t), (n[t] = e), n;
                        }, {})),
                        (d = (function (n, e, t = 838) {
                            let a = 1 / 0,
                                r = { matchedDesiredLocale: "", distances: {} },
                                i = n9.get(e);
                            i ||
                                ((i = e.map((n) => {
                                    try {
                                        return Intl.getCanonicalLocales([n])[0] || n;
                                    } catch {
                                        return n;
                                    }
                                })),
                                n9.set(e, i));
                            let s = new Set(i);
                            for (let e = 0; e < n.length; e++) {
                                let t = n[e];
                                if (s.has(t)) {
                                    let n = 0 + 40 * e;
                                    if (
                                        ((r.distances[t] = { [t]: n }),
                                        n < a &&
                                            ((a = n), (r.matchedDesiredLocale = t), (r.matchedSupportedLocale = t)),
                                        0 === e)
                                    )
                                        return r;
                                }
                            }
                            for (let e = 0; e < n.length; e++) {
                                let t = n[e];
                                try {
                                    let n = new Intl.Locale(t).maximize().toString();
                                    if (n !== t) {
                                        let i = (function (n) {
                                            let e = [],
                                                t = n;
                                            for (; t; ) {
                                                e.push(t);
                                                let n = t.lastIndexOf("-");
                                                if (-1 === n) break;
                                                t = t.substring(0, n);
                                            }
                                            return e;
                                        })(n);
                                        for (let u = 0; u < i.length; u++) {
                                            let o = i[u];
                                            if (o !== t && s.has(o)) {
                                                let i;
                                                try {
                                                    i =
                                                        new Intl.Locale(o).maximize().toString() === n
                                                            ? 0 + 40 * e
                                                            : 10 * u + 40 * e;
                                                } catch {
                                                    i = 10 * u + 40 * e;
                                                }
                                                r.distances[t] || (r.distances[t] = {}),
                                                    (r.distances[t][o] = i),
                                                    i < a &&
                                                        ((a = i),
                                                        (r.matchedDesiredLocale = t),
                                                        (r.matchedSupportedLocale = o));
                                                break;
                                            }
                                        }
                                    }
                                } catch {}
                            }
                            return (
                                (r.matchedSupportedLocale && 0 === a) ||
                                    (n.forEach((n, t) => {
                                        r.distances[n] || (r.distances[n] = {}),
                                            i.forEach((i, s) => {
                                                let u = e[s],
                                                    o = n7(n, i) + 0 + 40 * t;
                                                (r.distances[n][u] = o),
                                                    o < a &&
                                                        ((a = o),
                                                        (r.matchedDesiredLocale = n),
                                                        (r.matchedSupportedLocale = u));
                                            });
                                    }),
                                    a >= t && ((r.matchedDesiredLocale = void 0), (r.matchedSupportedLocale = void 0))),
                                r
                            );
                        })(r, o)).matchedSupportedLocale &&
                            d.matchedDesiredLocale &&
                            ((t = d.matchedSupportedLocale),
                            (a = u[d.matchedDesiredLocale].slice(d.matchedDesiredLocale.length) || void 0)),
                        (s = t ? { locale: t, extension: a } : { locale: i() });
                }
                null == s && (s = { locale: i(), extension: "" });
                let d = s.locale,
                    l = r[d],
                    c = { locale: "en", dataLocale: d };
                u = s.extension
                    ? (function (n) {
                          let e;
                          n2(n === n.toLowerCase(), "Expected extension to be lowercase"),
                              n2("-u-" === n.slice(0, 3), "Expected extension to be a Unicode locale extension");
                          let t = [],
                              a = [],
                              r = n.length,
                              i = 3;
                          for (; i < r; ) {
                              let s,
                                  u = n.indexOf("-", i);
                              s = -1 === u ? r - i : u - i;
                              let o = n.slice(i, i + s);
                              n2(s >= 2, "Expected a subtag to have at least 2 characters"),
                                  void 0 === e && 2 != s
                                      ? -1 === t.indexOf(o) && t.push(o)
                                      : 2 === s
                                        ? ((e = { key: o, value: "" }),
                                          void 0 === a.find((n) => n.key === e?.key) && a.push(e))
                                        : e?.value === ""
                                          ? (e.value = o)
                                          : (n2(void 0 !== e, "Expected keyword to be defined"), (e.value += "-" + o)),
                                  (i += s + 1);
                          }
                          return { attributes: t, keywords: a };
                      })(s.extension).keywords
                    : [];
                let _ = [];
                for (let n of a) {
                    let e,
                        a = l?.[n] ?? [];
                    n2(Array.isArray(a), `keyLocaleData for ${n} must be an array`);
                    let r = a[0];
                    n2(void 0 === r || "string" == typeof r, "value must be a string or undefined");
                    let i = u.find((e) => e.key === n);
                    if (i) {
                        let t = i.value;
                        "" !== t
                            ? a.indexOf(t) > -1 && (e = { key: n, value: (r = t) })
                            : a.indexOf("true") > -1 && (e = { key: n, value: (r = "true") });
                    }
                    let s = t[n];
                    n2(null == s || "string" == typeof s, "optionsValue must be a string or undefined"),
                        "string" == typeof s &&
                            "" ===
                                (s = (function (n, e) {
                                    let t = e.toLowerCase();
                                    return n2(void 0 !== n, "ukey must be defined"), t;
                                })(n.toLowerCase(), s)) &&
                            (s = "true"),
                        s !== r && a.indexOf(s) > -1 && ((r = s), (e = void 0)),
                        e && _.push(e),
                        (c[n] = r);
                }
                return (
                    _.length > 0 &&
                        (d = (function (n, e, t) {
                            n2(-1 === n.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
                            let a = "-u";
                            for (let n of e) a += `-${n}`;
                            for (let n of t) {
                                let { key: e, value: t } = n;
                                (a += `-${e}`), "" !== t && (a += `-${t}`);
                            }
                            if ("-u" === a) return n8(n);
                            let r = n.indexOf("-x-");
                            return n8(-1 === r ? n + a : n.slice(0, r) + a + n.slice(r));
                        })(d, [], _)),
                    (c.locale = d),
                    c
                );
            })(d, t, a, ["nu"], o, el.getDefaultLocale),
            c = l.locale,
            _ = et(this);
        (_.initializedDurationFormat = !0), (_.locale = c), (_.numberingSystem = l.nu);
        const h = nJ(i, "style", "string", ["long", "short", "narrow", "digital"], "short");
        (_.style = h), (_.dataLocale = l.dataLocale);
        let f = "";
        ed.forEach((n) => {
            let { styleSlot: e, displaySlot: t, unit: a, values: r, digitalDefault: s } = n,
                u = (function (n, e, t, a, r, i) {
                    let s = nJ(e, n, "string", a, void 0),
                        u = "always";
                    void 0 === s &&
                        ("digital" === t
                            ? ("hours" !== n && "minutes" !== n && "seconds" !== n && (u = "auto"), (s = r))
                            : ((u = "auto"), (s = "numeric" === i || "2-digit" === i ? "numeric" : t)));
                    let o = nJ(e, `${n}Display`, "string", ["always", "auto"], u);
                    if ("numeric" === i || "2-digit" === i) {
                        if ("numeric" !== s && "2-digit" !== s)
                            throw RangeError("Can't mix numeric and non-numeric styles");
                        if (
                            (("minutes" === n || "seconds" === n) && (s = "2-digit"),
                            "numeric" === s &&
                                "always" === o &&
                                ("milliseconds" === n || "microseconds" === n || "nanoseconds" === n))
                        )
                            throw RangeError(
                                "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
                            );
                    }
                    return { style: s, display: o };
                })(a, i, h, r, s, f);
            (_[e] = u.style),
                (_[t] = u.display),
                ("hours" === a || "minutes" === a || "seconds" === a || "milliseconds" === a || "microseconds" === a) &&
                    (f = u.style);
        }),
            (_.fractionalDigits = (function (n, e, t) {
                var a = n[e];
                if (void 0 === a) return t;
                let r = Number(a);
                if (isNaN(r) || r < 0 || r > 9) throw RangeError(`${r} is outside of range [0, 9]`);
                return Math.floor(r);
            })(i, "fractionalDigits", void 0));
    }
    resolvedOptions() {
        if (
            "object" != typeof this ||
            !(function (n, e) {
                if (!nY(n)) return !1;
                if ("object" != typeof e) return !1;
                let t = n.prototype;
                if ("object" != typeof t)
                    throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
                return Object.prototype.isPrototypeOf.call(t, e);
            })(el, this)
        )
            throw TypeError("Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver");
        let n = et(this),
            e = {};
        for (let t of eo) {
            let a = n[t];
            "fractionalDigits" === t ? void 0 !== a && (a = Number(a)) : nZ(void 0 !== a, `Missing internal slot ${t}`),
                (e[t] = a);
        }
        return e;
    }
    formatToParts(n) {
        if (void 0 === et(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let e = ea(this, ei(n)),
            t = [];
        for (let { type: n, unit: a, value: r } of e) {
            let e = { type: n, value: r };
            a && (e.unit = a), t.push(e);
        }
        return t;
    }
    format(n) {
        if (void 0 === et(this).initializedDurationFormat) throw TypeError("Error uninitialized locale");
        let e = ea(this, ei(n)),
            t = "";
        for (let { value: n } of e) t += n;
        return t;
    }
    static supportedLocalesOf(n, e) {
        return (function (n, e, t) {
            void 0 !== t && nJ((t = nW(t)), "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            var a = Array.from(n);
            let r = [];
            for (let n of e) {
                let e = nQ(a, n.replace(n1, ""));
                e && r.push(e);
            }
            return r;
        })(el.availableLocales, r(n), e);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(eu).reduce((n, e) => {
        el.availableLocales.add(e);
        let t = eu[e].nu;
        return (n[e] = { nu: t, digitalFormat: eu[e].separator || t.reduce((n, e) => ((n[e] = ":"), n), {}) }), n;
    }, {});
    static getDefaultLocale = () => el.__defaultLocale;
    static polyfilled = !0;
}
