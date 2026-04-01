t.d(e, { W: () => nI });
var a,
    r,
    i = "0123456789abcdef",
    s =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    u =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    o = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    d = !0,
    l = "[DecimalError] ",
    c = l + "Invalid argument: ",
    _ = l + "Precision limit exceeded",
    f = l + "crypto unavailable",
    h = "[object Decimal]",
    y = Math.floor,
    m = Math.pow,
    w = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    p = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    v = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    b = s.length - 1,
    S = u.length - 1,
    M = { toStringTag: h };
function N(n) {
    var e,
        t,
        a,
        r = n.length - 1,
        i = "",
        s = n[0];
    if (r > 0) {
        for (i += s, e = 1; e < r; e++) (t = 7 - (a = n[e] + "").length) && (i += R(t)), (i += a);
        (t = 7 - (a = (s = n[e]) + "").length) && (i += R(t));
    } else if (0 === s) return "0";
    for (; s % 10 == 0; ) s /= 10;
    return i + s;
}
function E(n, e, t) {
    if (n !== ~~n || n < e || n > t) throw Error(c + n);
}
function L(n, e, t, a) {
    var r, i, s, u;
    for (i = n[0]; i >= 10; i /= 10) --e;
    return (
        --e < 0 ? ((e += 7), (r = 0)) : ((r = Math.ceil((e + 1) / 7)), (e %= 7)),
        (i = m(10, 7 - e)),
        (u = (n[r] % i) | 0),
        null == a
            ? e < 3
                ? (0 == e ? (u = (u / 100) | 0) : 1 == e && (u = (u / 10) | 0),
                  (s = (t < 4 && 99999 == u) || (t > 3 && 49999 == u) || 5e4 == u || 0 == u))
                : (s =
                      (((t < 4 && u + 1 == i) || (t > 3 && u + 1 == i / 2)) &&
                          ((n[r + 1] / i / 100) | 0) == m(10, e - 2) - 1) ||
                      ((u == i / 2 || 0 == u) && ((n[r + 1] / i / 100) | 0) == 0))
            : e < 4
              ? (0 == e ? (u = (u / 1e3) | 0) : 1 == e ? (u = (u / 100) | 0) : 2 == e && (u = (u / 10) | 0),
                (s = ((a || t < 4) && 9999 == u) || (!a && t > 3 && 4999 == u)))
              : (s =
                    (((a || t < 4) && u + 1 == i) || (!a && t > 3 && u + 1 == i / 2)) &&
                    ((n[r + 1] / i / 1e3) | 0) == m(10, e - 3) - 1),
        s
    );
}
function A(n, e, t) {
    for (var a, r, s = [0], u = 0, o = n.length; u < o; ) {
        for (r = s.length; r--; ) s[r] *= e;
        for (s[0] += i.indexOf(n.charAt(u++)), a = 0; a < s.length; a++)
            s[a] > t - 1 && (void 0 === s[a + 1] && (s[a + 1] = 0), (s[a + 1] += (s[a] / t) | 0), (s[a] %= t));
    }
    return s.reverse();
}
(M.absoluteValue = M.abs =
    function () {
        var n = new this.constructor(this);
        return n.s < 0 && (n.s = 1), T(n);
    }),
    (M.ceil = function () {
        return T(new this.constructor(this), this.e + 1, 2);
    }),
    (M.clampedTo = M.clamp =
        function (n, e) {
            var t = this.constructor;
            if (((n = new t(n)), (e = new t(e)), !n.s || !e.s)) return new t(NaN);
            if (n.gt(e)) throw Error(c + e);
            return 0 > this.cmp(n) ? n : this.cmp(e) > 0 ? e : new t(this);
        }),
    (M.comparedTo = M.cmp =
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
    (M.cosine = M.cos =
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
                              (e = U(n, 1, e.times(r), new n(1)));
                          for (var i = t; i--; ) {
                              var s = e.times(e);
                              e = s.times(s).minus(s).times(8).plus(1);
                          }
                          return (n.precision -= t), e;
                      })(a, z(a, t))),
                      (a.precision = n),
                      (a.rounding = e),
                      T(2 == r || 3 == r ? t.neg() : t, n, e, !0))
                    : new a(1)
                : new a(NaN);
        }),
    (M.cubeRoot = M.cbrt =
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
                l,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                d = !1,
                    (i = this.s * m(this.s * this, 1 / 3)) && Math.abs(i) != 1 / 0
                        ? (a = new c(i.toString()))
                        : ((t = N(this.d)),
                          (i = ((n = this.e) - t.length + 1) % 3) && (t += 1 == i || -2 == i ? "0" : "00"),
                          (i = m(t, 1 / 3)),
                          (n = y((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2))),
                          ((a = new c(
                              (t = i == 1 / 0 ? "5e" + n : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + n),
                          )).s = this.s)),
                    s = (n = c.precision) + 3;
                ;
            )
                if (
                    ((a = C((l = (o = (u = a).times(u).times(u)).plus(this)).plus(this).times(u), l.plus(o), s + 2, 1)),
                    N(u.d).slice(0, s) === (t = N(a.d)).slice(0, s))
                ) {
                    if ("9999" != (t = t.slice(s - 3, s + 1)) && (r || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (T(a, n + 1, 1), (e = !a.times(a).times(a).eq(this)));
                        break;
                    }
                    if (!r && (T(u, n + 1, 0), u.times(u).times(u).eq(this))) {
                        a = u;
                        break;
                    }
                    (s += 4), (r = 1);
                }
            return (d = !0), T(a, n, c.rounding, e);
        }),
    (M.decimalPlaces = M.dp =
        function () {
            var n,
                e = this.d,
                t = NaN;
            if (e) {
                if (((t = ((n = e.length - 1) - y(this.e / 7)) * 7), (n = e[n]))) for (; n % 10 == 0; n /= 10) t--;
                t < 0 && (t = 0);
            }
            return t;
        }),
    (M.dividedBy = M.div =
        function (n) {
            return C(this, new this.constructor(n));
        }),
    (M.dividedToIntegerBy = M.divToInt =
        function (n) {
            var e = this.constructor;
            return T(C(this, new e(n), 0, 1, 1), e.precision, e.rounding);
        }),
    (M.equals = M.eq =
        function (n) {
            return 0 === this.cmp(n);
        }),
    (M.floor = function () {
        return T(new this.constructor(this), this.e + 1, 3);
    }),
    (M.greaterThan = M.gt =
        function (n) {
            return this.cmp(n) > 0;
        }),
    (M.greaterThanOrEqualTo = M.gte =
        function (n) {
            var e = this.cmp(n);
            return 1 == e || 0 === e;
        }),
    (M.hyperbolicCosine = M.cosh =
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
                (i = U(s, 1, i.times(e), new s(1), !0));
            for (var o, d = n, l = new s(8); d--; ) (o = i.times(i)), (i = u.minus(o.times(l.minus(o.times(l)))));
            return T(i, (s.precision = t), (s.rounding = a), !0);
        }),
    (M.hyperbolicSine = M.sinh =
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
                r = U(i, 2, r, r, !0);
            else {
                (n = (n = 1.4 * Math.sqrt(a)) > 16 ? 16 : 0 | n), (r = U(i, 2, (r = r.times(1 / V(5, n))), r, !0));
                for (var s, u = new i(5), o = new i(16), d = new i(20); n--; )
                    (s = r.times(r)), (r = r.times(u.plus(s.times(o.times(s).plus(d)))));
            }
            return (i.precision = e), (i.rounding = t), T(r, e, t, !0);
        }),
    (M.hyperbolicTangent = M.tanh =
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
                      C(this.sinh(), this.cosh(), (t.precision = n), (t.rounding = e)))
                : new t(this.s);
        }),
    (M.inverseCosine = M.acos =
        function () {
            var n = this,
                e = n.constructor,
                t = n.abs().cmp(1),
                a = e.precision,
                r = e.rounding;
            return -1 !== t
                ? 0 === t
                    ? n.isNeg()
                        ? B(e, a, r)
                        : new e(0)
                    : new e(NaN)
                : n.isZero()
                  ? B(e, a + 4, r).times(0.5)
                  : ((e.precision = a + 6),
                    (e.rounding = 1),
                    (n = new e(1).minus(n).div(n.plus(1)).sqrt().atan()),
                    (e.precision = a),
                    (e.rounding = r),
                    n.times(2));
        }),
    (M.inverseHyperbolicCosine = M.acosh =
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
                    (d = !1),
                    (t = t.times(t).minus(1).sqrt().plus(t)),
                    (d = !0),
                    (a.precision = n),
                    (a.rounding = e),
                    t.ln())
                  : new a(t);
        }),
    (M.inverseHyperbolicSine = M.asinh =
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
                  (d = !1),
                  (t = t.times(t).plus(1).sqrt().plus(t)),
                  (d = !0),
                  (a.precision = n),
                  (a.rounding = e),
                  t.ln());
        }),
    (M.inverseHyperbolicTangent = M.atanh =
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
                      ? T(new i(r), n, e, !0)
                      : ((i.precision = t = a - r.e),
                        (r = C(r.plus(1), new i(1).minus(r), t + n, 1)),
                        (i.precision = n + 4),
                        (i.rounding = 1),
                        (r = r.ln()),
                        (i.precision = n),
                        (i.rounding = e),
                        r.times(0.5))
                : new i(NaN);
        }),
    (M.inverseSine = M.asin =
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
                      ? (((n = B(i, t + 4, a).times(0.5)).s = r.s), n)
                      : new i(NaN)
                  : ((i.precision = t + 6),
                    (i.rounding = 1),
                    (r = r.div(new i(1).minus(r.times(r)).sqrt().plus(1)).atan()),
                    (i.precision = t),
                    (i.rounding = a),
                    r.times(2));
        }),
    (M.inverseTangent = M.atan =
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
                l = this,
                c = l.constructor,
                _ = c.precision,
                f = c.rounding;
            if (l.isFinite()) {
                if (l.isZero()) return new c(l);
                else if (l.abs().eq(1) && _ + 4 <= S) return ((s = B(c, _ + 4, f).times(0.25)).s = l.s), s;
            } else {
                if (!l.s) return new c(NaN);
                if (_ + 4 <= S) return ((s = B(c, _ + 4, f).times(0.5)).s = l.s), s;
            }
            for (c.precision = u = _ + 10, c.rounding = 1, n = t = Math.min(28, (u / 7 + 2) | 0); n; --n)
                l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (d = !1, e = Math.ceil(u / 7), a = 1, o = l.times(l), s = new c(l), r = l; -1 !== n; )
                if (
                    ((r = r.times(o)),
                    (i = s.minus(r.div((a += 2)))),
                    (r = r.times(o)),
                    void 0 !== (s = i.plus(r.div((a += 2)))).d[e])
                )
                    for (n = e; s.d[n] === i.d[n] && n--; );
            return t && (s = s.times(2 << (t - 1))), (d = !0), T(s, (c.precision = _), (c.rounding = f), !0);
        }),
    (M.isFinite = function () {
        return !!this.d;
    }),
    (M.isInteger = M.isInt =
        function () {
            return !!this.d && y(this.e / 7) > this.d.length - 2;
        }),
    (M.isNaN = function () {
        return !this.s;
    }),
    (M.isNegative = M.isNeg =
        function () {
            return this.s < 0;
        }),
    (M.isPositive = M.isPos =
        function () {
            return this.s > 0;
        }),
    (M.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (M.lessThan = M.lt =
        function (n) {
            return 0 > this.cmp(n);
        }),
    (M.lessThanOrEqualTo = M.lte =
        function (n) {
            return 1 > this.cmp(n);
        }),
    (M.logarithm = M.log =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o = this.constructor,
                l = o.precision,
                c = o.rounding;
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
            if (((d = !1), L((u = C((i = H(this, (s = l + 5))), e ? G(o, s + 10) : H(n, s), s, 1)).d, (a = l), c)))
                do
                    if (((s += 10), (u = C((i = H(this, s)), e ? G(o, s + 10) : H(n, s), s, 1)), !r)) {
                        +N(u.d).slice(a + 1, a + 15) + 1 == 1e14 && (u = T(u, l + 1, 0));
                        break;
                    }
                while (L(u.d, (a += 10), c));
            return (d = !0), T(u, l, c);
        }),
    (M.minus = M.sub =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                l,
                c,
                _,
                f,
                h = this.constructor;
            if (((n = new h(n)), !this.d || !n.d))
                return (
                    this.s && n.s
                        ? this.d
                            ? (n.s = -n.s)
                            : (n = new h(n.d || this.s !== n.s ? this : NaN))
                        : (n = new h(NaN)),
                    n
                );
            if (this.s != n.s) return (n.s = -n.s), this.plus(n);
            if (((l = this.d), (f = n.d), (u = h.precision), (o = h.rounding), !l[0] || !f[0])) {
                if (f[0]) n.s = -n.s;
                else {
                    if (!l[0]) return new h(3 === o ? -0 : 0);
                    n = new h(this);
                }
                return d ? T(n, u, o) : n;
            }
            if (((t = y(n.e / 7)), (c = y(this.e / 7)), (l = l.slice()), (i = c - t))) {
                for (
                    (_ = i < 0) ? ((e = l), (i = -i), (s = f.length)) : ((e = f), (t = c), (s = l.length)),
                        i > (a = Math.max(Math.ceil(u / 7), s) + 2) && ((i = a), (e.length = 1)),
                        e.reverse(),
                        a = i;
                    a--;
                )
                    e.push(0);
                e.reverse();
            } else {
                for ((_ = (a = l.length) < (s = f.length)) && (s = a), a = 0; a < s; a++)
                    if (l[a] != f[a]) {
                        _ = l[a] < f[a];
                        break;
                    }
                i = 0;
            }
            for (_ && ((e = l), (l = f), (f = e), (n.s = -n.s)), s = l.length, a = f.length - s; a > 0; --a) l[s++] = 0;
            for (a = f.length; a > i; ) {
                if (l[--a] < f[a]) {
                    for (r = a; r && 0 === l[--r]; ) l[r] = 1e7 - 1;
                    --l[r], (l[a] += 1e7);
                }
                l[a] -= f[a];
            }
            for (; 0 === l[--s]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --t;
            return l[0] ? ((n.d = l), (n.e = k(l, t)), d ? T(n, u, o) : n) : new h(3 === o ? -0 : 0);
        }),
    (M.modulo = M.mod =
        function (n) {
            var e,
                t = this.constructor;
            return ((n = new t(n)), this.d && n.s && (!n.d || n.d[0]))
                ? n.d && (!this.d || this.d[0])
                    ? ((d = !1),
                      9 == t.modulo
                          ? ((e = C(this, n.abs(), 0, 3, 1)), (e.s *= n.s))
                          : (e = C(this, n, 0, t.modulo, 1)),
                      (e = e.times(n)),
                      (d = !0),
                      this.minus(e))
                    : T(new t(this), t.precision, t.rounding)
                : new t(NaN);
        }),
    (M.naturalExponential = M.exp =
        function () {
            return q(this);
        }),
    (M.naturalLogarithm = M.ln =
        function () {
            return H(this);
        }),
    (M.negated = M.neg =
        function () {
            var n = new this.constructor(this);
            return (n.s = -n.s), T(n);
        }),
    (M.plus = M.add =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                l,
                c,
                _ = this.constructor;
            if (((n = new _(n)), !this.d || !n.d))
                return this.s && n.s ? this.d || (n = new _(n.d || this.s === n.s ? this : NaN)) : (n = new _(NaN)), n;
            if (this.s != n.s) return (n.s = -n.s), this.minus(n);
            if (((l = this.d), (c = n.d), (u = _.precision), (o = _.rounding), !l[0] || !c[0]))
                return c[0] || (n = new _(this)), d ? T(n, u, o) : n;
            if (((i = y(this.e / 7)), (a = y(n.e / 7)), (l = l.slice()), (r = i - a))) {
                for (
                    r < 0 ? ((t = l), (r = -r), (s = c.length)) : ((t = c), (a = i), (s = l.length)),
                        r > (s = (i = Math.ceil(u / 7)) > s ? i + 1 : s + 1) && ((r = s), (t.length = 1)),
                        t.reverse();
                    r--;
                )
                    t.push(0);
                t.reverse();
            }
            for ((s = l.length) - (r = c.length) < 0 && ((r = s), (t = c), (c = l), (l = t)), e = 0; r; )
                (e = ((l[--r] = l[r] + c[r] + e) / 1e7) | 0), (l[r] %= 1e7);
            for (e && (l.unshift(e), ++a), s = l.length; 0 == l[--s]; ) l.pop();
            return (n.d = l), (n.e = k(l, a)), d ? T(n, u, o) : n;
        }),
    (M.precision = M.sd =
        function (n) {
            var e;
            if (void 0 !== n && !!n !== n && 1 !== n && 0 !== n) throw Error(c + n);
            return this.d ? ((e = I(this.d)), n && this.e + 1 > e && (e = this.e + 1)) : (e = NaN), e;
        }),
    (M.round = function () {
        var n = this.constructor;
        return T(new n(this), this.e + 1, n.rounding);
    }),
    (M.sine = M.sin =
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
                          if (a < 3) return e.isZero() ? e : U(n, 2, e, e);
                          (t = (t = 1.4 * Math.sqrt(a)) > 16 ? 16 : 0 | t),
                              (e = U(n, 2, (e = e.times(1 / V(5, t))), e));
                          for (var r, i = new n(5), s = new n(16), u = new n(20); t--; )
                              (r = e.times(e)), (e = e.times(i.plus(r.times(s.times(r).minus(u)))));
                          return e;
                      })(a, z(a, t))),
                      (a.precision = n),
                      (a.rounding = e),
                      T(r > 2 ? t.neg() : t, n, e, !0))
                : new a(NaN);
        }),
    (M.squareRoot = M.sqrt =
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
                l = this.constructor;
            if (1 !== o || !s || !s[0]) return new l(!o || (o < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0);
            for (
                d = !1,
                    0 == (o = Math.sqrt(+this)) || o == 1 / 0
                        ? (((e = N(s)).length + u) % 2 == 0 && (e += "0"),
                          (o = Math.sqrt(e)),
                          (u = y((u + 1) / 2) - (u < 0 || u % 2)),
                          (a = new l(
                              (e = o == 1 / 0 ? "5e" + u : (e = o.toExponential()).slice(0, e.indexOf("e") + 1) + u),
                          )))
                        : (a = new l(o.toString())),
                    t = (u = l.precision) + 3;
                ;
            )
                if (
                    ((a = (i = a).plus(C(this, i, t + 2, 1)).times(0.5)),
                    N(i.d).slice(0, t) === (e = N(a.d)).slice(0, t))
                ) {
                    if ("9999" != (e = e.slice(t - 3, t + 1)) && (r || "4999" != e)) {
                        (+e && (+e.slice(1) || "5" != e.charAt(0))) || (T(a, u + 1, 1), (n = !a.times(a).eq(this)));
                        break;
                    }
                    if (!r && (T(i, u + 1, 0), i.times(i).eq(this))) {
                        a = i;
                        break;
                    }
                    (t += 4), (r = 1);
                }
            return (d = !0), T(a, u, l.rounding, n);
        }),
    (M.tangent = M.tan =
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
                      (t = C(t, new a(1).minus(t.times(t)).sqrt(), n + 10, 0)),
                      (a.precision = n),
                      (a.rounding = e),
                      T(2 == r || 4 == r ? t.neg() : t, n, e, !0))
                : new a(NaN);
        }),
    (M.times = M.mul =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u,
                o,
                l,
                c = this.constructor,
                _ = this.d,
                f = (n = new c(n)).d;
            if (((n.s *= this.s), !_ || !_[0] || !f || !f[0]))
                return new c(!n.s || (_ && !_[0] && !f) || (f && !f[0] && !_) ? NaN : !_ || !f ? n.s / 0 : 0 * n.s);
            for (
                t = y(this.e / 7) + y(n.e / 7),
                    (o = _.length) < (l = f.length) && ((i = _), (_ = f), (f = i), (s = o), (o = l), (l = s)),
                    i = [],
                    a = s = o + l;
                a--;
            )
                i.push(0);
            for (a = l; --a >= 0; ) {
                for (e = 0, r = o + a; r > a; )
                    (u = i[r] + f[a] * _[r - a - 1] + e), (i[r--] = (u % 1e7) | 0), (e = (u / 1e7) | 0);
                i[r] = ((i[r] + e) % 1e7) | 0;
            }
            for (; !i[--s]; ) i.pop();
            return e ? ++t : i.shift(), (n.d = i), (n.e = k(i, t)), d ? T(n, c.precision, c.rounding) : n;
        }),
    (M.toBinary = function (n, e) {
        return Z(this, 2, n, e);
    }),
    (M.toDecimalPlaces = M.toDP =
        function (n, e) {
            var t = this,
                a = t.constructor;
            return ((t = new a(t)), void 0 === n)
                ? t
                : (E(n, 0, 1e9), void 0 === e ? (e = a.rounding) : E(e, 0, 8), T(t, n + t.e + 1, e));
        }),
    (M.toExponential = function (n, e) {
        var t,
            a = this,
            r = a.constructor;
        return (
            void 0 === n
                ? (t = D(a, !0))
                : (E(n, 0, 1e9),
                  void 0 === e ? (e = r.rounding) : E(e, 0, 8),
                  (t = D((a = T(new r(a), n + 1, e)), !0, n + 1))),
            a.isNeg() && !a.isZero() ? "-" + t : t
        );
    }),
    (M.toFixed = function (n, e) {
        var t,
            a,
            r = this.constructor;
        return (
            void 0 === n
                ? (t = D(this))
                : (E(n, 0, 1e9),
                  void 0 === e ? (e = r.rounding) : E(e, 0, 8),
                  (t = D((a = T(new r(this), n + this.e + 1, e)), !1, n + a.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + t : t
        );
    }),
    (M.toFraction = function (n) {
        var e,
            t,
            a,
            r,
            i,
            s,
            u,
            o,
            l,
            _,
            f,
            h,
            y = this.d,
            w = this.constructor;
        if (!y) return new w(this);
        if (
            ((l = t = new w(1)),
            (a = o = new w(0)),
            (s = (i = (e = new w(a)).e = I(y) - this.e - 1) % 7),
            (e.d[0] = m(10, s < 0 ? 7 + s : s)),
            null == n)
        )
            n = i > 0 ? e : l;
        else {
            if (!(u = new w(n)).isInt() || u.lt(l)) throw Error(c + u);
            n = u.gt(e) ? (i > 0 ? e : l) : u;
        }
        for (
            d = !1, u = new w(N(y)), _ = w.precision, w.precision = i = 7 * y.length * 2;
            (f = C(u, e, 0, 1, 1)), 1 != (r = t.plus(f.times(a))).cmp(n);
        )
            (t = a), (a = r), (r = l), (l = o.plus(f.times(r))), (o = r), (r = e), (e = u.minus(f.times(r))), (u = r);
        return (
            (r = C(n.minus(t), a, 0, 1, 1)),
            (o = o.plus(r.times(l))),
            (t = t.plus(r.times(a))),
            (o.s = l.s = this.s),
            (h =
                1 >
                C(l, a, i, 1)
                    .minus(this)
                    .abs()
                    .cmp(C(o, t, i, 1).minus(this).abs())
                    ? [l, a]
                    : [o, t]),
            (w.precision = _),
            (d = !0),
            h
        );
    }),
    (M.toHexadecimal = M.toHex =
        function (n, e) {
            return Z(this, 16, n, e);
        }),
    (M.toNearest = function (n, e) {
        var t = this,
            a = t.constructor;
        if (((t = new a(t)), null == n)) {
            if (!t.d) return t;
            (n = new a(1)), (e = a.rounding);
        } else {
            if (((n = new a(n)), void 0 === e ? (e = a.rounding) : E(e, 0, 8), !t.d)) return n.s ? t : n;
            if (!n.d) return n.s && (n.s = t.s), n;
        }
        return n.d[0] ? ((d = !1), (t = C(t, n, 0, e, 1).times(n)), (d = !0), T(t)) : ((n.s = t.s), (t = n)), t;
    }),
    (M.toNumber = function () {
        return +this;
    }),
    (M.toOctal = function (n, e) {
        return Z(this, 8, n, e);
    }),
    (M.toPower = M.pow =
        function (n) {
            var e,
                t,
                a,
                r,
                i,
                s,
                u = this,
                o = u.constructor,
                l = +(n = new o(n));
            if (!u.d || !n.d || !u.d[0] || !n.d[0]) return new o(m(+u, l));
            if ((u = new o(u)).eq(1)) return u;
            if (((a = o.precision), (i = o.rounding), n.eq(1))) return T(u, a, i);
            if ((e = y(n.e / 7)) >= n.d.length - 1 && (t = l < 0 ? -l : l) <= 0x1fffffffffffff)
                return (r = O(o, u, t, a)), n.s < 0 ? new o(1).div(r) : T(r, a, i);
            if ((s = u.s) < 0) {
                if (e < n.d.length - 1) return new o(NaN);
                if (((1 & n.d[e]) == 0 && (s = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length)) return (u.s = s), u;
            }
            return (e =
                0 != (t = m(+u, l)) && isFinite(t)
                    ? new o(t + "").e
                    : y(l * (Math.log("0." + N(u.d)) / Math.LN10 + u.e + 1))) >
                o.maxE + 1 || e < o.minE - 1
                ? new o(e > 0 ? s / 0 : 0)
                : ((d = !1),
                  (o.rounding = u.s = 1),
                  (t = Math.min(12, (e + "").length)),
                  (r = q(n.times(H(u, a + t)), a)).d &&
                      L((r = T(r, a + 5, 1)).d, a, i) &&
                      ((e = a + 10),
                      +N((r = T(q(n.times(H(u, e + t)), e), e + 5, 1)).d).slice(a + 1, a + 15) + 1 == 1e14 &&
                          (r = T(r, a + 1, 0))),
                  (r.s = s),
                  (d = !0),
                  (o.rounding = i),
                  T(r, a, i));
        }),
    (M.toPrecision = function (n, e) {
        var t,
            a = this,
            r = a.constructor;
        return (
            void 0 === n
                ? (t = D(a, a.e <= r.toExpNeg || a.e >= r.toExpPos))
                : (E(n, 1, 1e9),
                  void 0 === e ? (e = r.rounding) : E(e, 0, 8),
                  (t = D((a = T(new r(a), n, e)), n <= a.e || a.e <= r.toExpNeg, n))),
            a.isNeg() && !a.isZero() ? "-" + t : t
        );
    }),
    (M.toSignificantDigits = M.toSD =
        function (n, e) {
            var t = this.constructor;
            return (
                void 0 === n
                    ? ((n = t.precision), (e = t.rounding))
                    : (E(n, 1, 1e9), void 0 === e ? (e = t.rounding) : E(e, 0, 8)),
                T(new t(this), n, e)
            );
        }),
    (M.toString = function () {
        var n = this.constructor,
            e = D(this, this.e <= n.toExpNeg || this.e >= n.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + e : e;
    }),
    (M.truncated = M.trunc =
        function () {
            return T(new this.constructor(this), this.e + 1, 1);
        }),
    (M.valueOf = M.toJSON =
        function () {
            var n = this.constructor,
                e = D(this, this.e <= n.toExpNeg || this.e >= n.toExpPos);
            return this.isNeg() ? "-" + e : e;
        });
var C = (function () {
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
    return function (r, i, s, u, o, d) {
        var l,
            c,
            _,
            f,
            h,
            m,
            w,
            g,
            p,
            v,
            b,
            S,
            M,
            N,
            E,
            L,
            A,
            C,
            D,
            k,
            G = r.constructor,
            B = r.s == i.s ? 1 : -1,
            I = r.d,
            R = i.d;
        if (!I || !I[0] || !R || !R[0])
            return new G(!r.s || !i.s || (I ? R && I[0] == R[0] : !R) ? NaN : (I && 0 == I[0]) || !R ? 0 * B : B / 0);
        for (
            d ? ((h = 1), (c = r.e - i.e)) : ((d = 1e7), (h = 7), (c = y(r.e / h) - y(i.e / h))),
                D = R.length,
                A = I.length,
                v = (p = new G(B)).d = [],
                _ = 0;
            R[_] == (I[_] || 0);
            _++
        );
        if (
            (R[_] > (I[_] || 0) && c--,
            null == s ? ((N = s = G.precision), (u = G.rounding)) : (N = o ? s + (r.e - i.e) + 1 : s),
            N < 0)
        )
            v.push(1), (m = !0);
        else {
            if (((N = (N / h + 2) | 0), (_ = 0), 1 == D)) {
                for (f = 0, R = R[0], N++; (_ < A || f) && N--; _++)
                    (E = f * d + (I[_] || 0)), (v[_] = (E / R) | 0), (f = (E % R) | 0);
                m = f || _ < A;
            } else {
                for (
                    (f = (d / (R[0] + 1)) | 0) > 1 &&
                        ((R = n(R, f, d)), (I = n(I, f, d)), (D = R.length), (A = I.length)),
                        L = D,
                        S = (b = I.slice(0, D)).length;
                    S < D;
                )
                    b[S++] = 0;
                (k = R.slice()).unshift(0), (C = R[0]), R[1] >= d / 2 && ++C;
                do
                    (f = 0),
                        (l = e(R, b, D, S)) < 0
                            ? ((M = b[0]),
                              D != S && (M = M * d + (b[1] || 0)),
                              (f = (M / C) | 0) > 1
                                  ? (f >= d && (f = d - 1),
                                    (g = (w = n(R, f, d)).length),
                                    (S = b.length),
                                    1 == (l = e(w, b, g, S)) && (f--, t(w, D < g ? k : R, g, d)))
                                  : (0 == f && (l = f = 1), (w = R.slice())),
                              (g = w.length) < S && w.unshift(0),
                              t(b, w, S, d),
                              -1 == l && ((S = b.length), (l = e(R, b, D, S)) < 1 && (f++, t(b, D < S ? k : R, S, d))),
                              (S = b.length))
                            : 0 === l && (f++, (b = [0])),
                        (v[_++] = f),
                        l && b[0] ? (b[S++] = I[L] || 0) : ((b = [I[L]]), (S = 1));
                while ((L++ < A || void 0 !== b[0]) && N--);
                m = void 0 !== b[0];
            }
            v[0] || v.shift();
        }
        if (1 == h) (p.e = c), (a = m);
        else {
            for (_ = 1, f = v[0]; f >= 10; f /= 10) _++;
            (p.e = _ + c * h - 1), T(p, o ? s + p.e + 1 : s, u, m);
        }
        return p;
    };
})();
function T(n, e, t, a) {
    var r,
        i,
        s,
        u,
        o,
        l,
        c,
        _,
        f,
        h = n.constructor;
    n: if (null != e) {
        if (!(_ = n.d)) return n;
        for (r = 1, u = _[0]; u >= 10; u /= 10) r++;
        if ((i = e - r) < 0) (i += 7), (s = e), (o = (((c = _[(f = 0)]) / m(10, r - s - 1)) % 10) | 0);
        else if ((f = Math.ceil((i + 1) / 7)) >= (u = _.length))
            if (a) {
                for (; u++ <= f; ) _.push(0);
                (c = o = 0), (r = 1), (i %= 7), (s = i - 7 + 1);
            } else break n;
        else {
            for (r = 1, c = u = _[f]; u >= 10; u /= 10) r++;
            (i %= 7), (o = (s = i - 7 + r) < 0 ? 0 : ((c / m(10, r - s - 1)) % 10) | 0);
        }
        if (
            ((a = a || e < 0 || void 0 !== _[f + 1] || (s < 0 ? c : c % m(10, r - s - 1))),
            (l =
                t < 4
                    ? (o || a) && (0 == t || t == (n.s < 0 ? 3 : 2))
                    : o > 5 ||
                      (5 == o &&
                          (4 == t ||
                              a ||
                              (6 == t && ((i > 0 ? (s > 0 ? c / m(10, r - s) : 0) : _[f - 1]) % 10) & 1) ||
                              t == (n.s < 0 ? 8 : 7)))),
            e < 1 || !_[0])
        )
            return (
                (_.length = 0),
                l ? ((e -= n.e + 1), (_[0] = m(10, (7 - (e % 7)) % 7)), (n.e = -e || 0)) : (_[0] = n.e = 0),
                n
            );
        if (
            (0 == i
                ? ((_.length = f), (u = 1), f--)
                : ((_.length = f + 1),
                  (u = m(10, 7 - i)),
                  (_[f] = s > 0 ? (((c / m(10, r - s)) % m(10, s)) | 0) * u : 0)),
            l)
        )
            for (;;)
                if (0 == f) {
                    for (i = 1, s = _[0]; s >= 10; s /= 10) i++;
                    for (s = _[0] += u, u = 1; s >= 10; s /= 10) u++;
                    i != u && (n.e++, 1e7 == _[0] && (_[0] = 1));
                    break;
                } else {
                    if (((_[f] += u), 1e7 != _[f])) break;
                    (_[f--] = 0), (u = 1);
                }
        for (i = _.length; 0 === _[--i]; ) _.pop();
    }
    return d && (n.e > h.maxE ? ((n.d = null), (n.e = NaN)) : n.e < h.minE && ((n.e = 0), (n.d = [0]))), n;
}
function D(n, e, t) {
    if (!n.isFinite()) return P(n);
    var a,
        r = n.e,
        i = N(n.d),
        s = i.length;
    return (
        e
            ? (t && (a = t - s) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + R(a))
                  : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
              (i = i + (n.e < 0 ? "e" : "e+") + n.e))
            : r < 0
              ? ((i = "0." + R(-r - 1) + i), t && (a = t - s) > 0 && (i += R(a)))
              : r >= s
                ? ((i += R(r + 1 - s)), t && (a = t - r - 1) > 0 && (i = i + "." + R(a)))
                : ((a = r + 1) < s && (i = i.slice(0, a) + "." + i.slice(a)),
                  t && (a = t - s) > 0 && (r + 1 === s && (i += "."), (i += R(a)))),
        i
    );
}
function k(n, e) {
    var t = n[0];
    for (e *= 7; t >= 10; t /= 10) e++;
    return e;
}
function G(n, e, t) {
    if (e > b) throw ((d = !0), t && (n.precision = t), Error(_));
    return T(new n(s), e, 1, !0);
}
function B(n, e, t) {
    if (e > S) throw Error(_);
    return T(new n(u), e, t, !0);
}
function I(n) {
    var e = n.length - 1,
        t = 7 * e + 1;
    if ((e = n[e])) {
        for (; e % 10 == 0; e /= 10) t--;
        for (e = n[0]; e >= 10; e /= 10) t++;
    }
    return t;
}
function R(n) {
    for (var e = ""; n--; ) e += "0";
    return e;
}
function O(n, e, t, a) {
    var r,
        i = new n(1),
        s = Math.ceil(a / 7 + 4);
    for (d = !1; ; ) {
        if ((t % 2 && W((i = i.times(e)).d, s) && (r = !0), 0 === (t = y(t / 2)))) {
            (t = i.d.length - 1), r && 0 === i.d[t] && ++i.d[t];
            break;
        }
        W((e = e.times(e)).d, s);
    }
    return (d = !0), i;
}
function x(n) {
    return 1 & n.d[n.d.length - 1];
}
function F(n, e, t) {
    for (var a, r, i = new n(e[0]), s = 0; ++s < e.length; ) {
        if (!(r = new n(e[s])).s) {
            i = r;
            break;
        }
        ((a = i.cmp(r)) === t || (0 === a && i.s === t)) && (i = r);
    }
    return i;
}
function q(n, e) {
    var t,
        a,
        r,
        i,
        s,
        u,
        o,
        l = 0,
        c = 0,
        _ = 0,
        f = n.constructor,
        h = f.rounding,
        y = f.precision;
    if (!n.d || !n.d[0] || n.e > 17)
        return new f(n.d ? (!n.d[0] ? 1 : n.s < 0 ? 0 : 1 / 0) : n.s ? (n.s < 0 ? 0 : n) : 0 / 0);
    for (null == e ? ((d = !1), (o = y)) : (o = e), u = new f(0.03125); n.e > -2; ) (n = n.times(u)), (_ += 5);
    for (o += a = ((Math.log(m(2, _)) / Math.LN10) * 2 + 5) | 0, t = i = s = new f(1), f.precision = o; ; ) {
        if (
            ((i = T(i.times(n), o, 1)),
            (t = t.times(++c)),
            N((u = s.plus(C(i, t, o, 1))).d).slice(0, o) === N(s.d).slice(0, o))
        ) {
            for (r = _; r--; ) s = T(s.times(s), o, 1);
            if (null != e) return (f.precision = y), s;
            if (!(l < 3 && L(s.d, o - a, h, l))) return T(s, (f.precision = y), h, (d = !0));
            (f.precision = o += 10), (t = i = u = new f(1)), (c = 0), l++;
        }
        s = u;
    }
}
function H(n, e) {
    var t,
        a,
        r,
        i,
        s,
        u,
        o,
        l,
        c,
        _,
        f,
        h = 1,
        y = n,
        m = y.d,
        w = y.constructor,
        g = w.rounding,
        p = w.precision;
    if (y.s < 0 || !m || !m[0] || (!y.e && 1 == m[0] && 1 == m.length))
        return new w(m && !m[0] ? -1 / 0 : 1 != y.s ? NaN : m ? 0 : y);
    if (
        (null == e ? ((d = !1), (c = p)) : (c = e),
        (w.precision = c += 10),
        (a = (t = N(m)).charAt(0)),
        !(15e14 > Math.abs((i = y.e))))
    )
        return (
            (l = G(w, c + 2, p).times(i + "")),
            (y = H(new w(a + "." + t.slice(1)), c - 10).plus(l)),
            (w.precision = p),
            null == e ? T(y, p, g, (d = !0)) : y
        );
    for (; (a < 7 && 1 != a) || (1 == a && t.charAt(1) > 3); ) (a = (t = N((y = y.times(n)).d)).charAt(0)), h++;
    for (
        i = y.e,
            a > 1 ? ((y = new w("0." + t)), i++) : (y = new w(a + "." + t.slice(1))),
            _ = y,
            o = s = y = C(y.minus(1), y.plus(1), c, 1),
            f = T(y.times(y), c, 1),
            r = 3;
        ;
    ) {
        if (((s = T(s.times(f), c, 1)), N((l = o.plus(C(s, new w(r), c, 1))).d).slice(0, c) === N(o.d).slice(0, c))) {
            if (
                ((o = o.times(2)),
                0 !== i && (o = o.plus(G(w, c + 2, p).times(i + ""))),
                (o = C(o, new w(h), c, 1)),
                null != e)
            )
                return (w.precision = p), o;
            if (!L(o.d, c - 10, g, u)) return T(o, (w.precision = p), g, (d = !0));
            (w.precision = c += 10),
                (l = s = y = C(_.minus(1), _.plus(1), c, 1)),
                (f = T(y.times(y), c, 1)),
                (r = u = 1);
        }
        (o = l), (r += 2);
    }
}
function P(n) {
    return String((n.s * n.s) / 0);
}
function K(n, e) {
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
            d &&
                (n.e > n.constructor.maxE
                    ? ((n.d = null), (n.e = NaN))
                    : n.e < n.constructor.minE && ((n.e = 0), (n.d = [0])));
    } else (n.e = 0), (n.d = [0]);
    return n;
}
function U(n, e, t, a, r) {
    var i,
        s,
        u,
        o,
        l = n.precision,
        c = Math.ceil(l / 7);
    for (d = !1, o = t.times(t), u = new n(a); ; ) {
        if (
            ((s = C(u.times(o), new n(e++ * e++), l, 1)),
            (u = r ? a.plus(s) : a.minus(s)),
            (a = C(s.times(o), new n(e++ * e++), l, 1)),
            void 0 !== (s = u.plus(a)).d[c])
        ) {
            for (i = c; s.d[i] === u.d[i] && i--; );
            if (-1 == i) break;
        }
        (i = u), (u = a), (a = s), (s = i);
    }
    return (d = !0), (s.d.length = c + 1), s;
}
function V(n, e) {
    for (var t = n; --e; ) t *= n;
    return t;
}
function z(n, e) {
    var t,
        a = e.s < 0,
        i = B(n, n.precision, 1),
        s = i.times(0.5);
    if ((e = e.abs()).lte(s)) return (r = a ? 4 : 1), e;
    if ((t = e.divToInt(i)).isZero()) r = a ? 3 : 2;
    else {
        if ((e = e.minus(t.times(i))).lte(s)) return (r = x(t) ? (a ? 2 : 3) : a ? 4 : 1), e;
        r = x(t) ? (a ? 1 : 4) : a ? 3 : 2;
    }
    return e.minus(i).abs();
}
function Z(n, e, t, r) {
    var s,
        u,
        o,
        d,
        l,
        c,
        _,
        f,
        h,
        y = n.constructor,
        m = void 0 !== t;
    if (
        (m ? (E(t, 1, 1e9), void 0 === r ? (r = y.rounding) : E(r, 0, 8)) : ((t = y.precision), (r = y.rounding)),
        n.isFinite())
    ) {
        for (
            o = (_ = D(n)).indexOf("."),
                m ? ((s = 2), 16 == e ? (t = 4 * t - 3) : 8 == e && (t = 3 * t - 2)) : (s = e),
                o >= 0 &&
                    ((_ = _.replace(".", "")),
                    ((h = new y(1)).e = _.length - o),
                    (h.d = A(D(h), 10, s)),
                    (h.e = h.d.length)),
                u = l = (f = A(_, 10, s)).length;
            0 == f[--l];
        )
            f.pop();
        if (f[0]) {
            if (
                (o < 0
                    ? u--
                    : (((n = new y(n)).d = f), (n.e = u), (f = (n = C(n, h, t, r, 0, s)).d), (u = n.e), (c = a)),
                (o = f[t]),
                (d = s / 2),
                (c = c || void 0 !== f[t + 1]),
                (c =
                    r < 4
                        ? (void 0 !== o || c) && (0 === r || r === (n.s < 0 ? 3 : 2))
                        : o > d || (o === d && (4 === r || c || (6 === r && 1 & f[t - 1]) || r === (n.s < 0 ? 8 : 7)))),
                (f.length = t),
                c)
            )
                for (; ++f[--t] > s - 1; ) (f[t] = 0), t || (++u, f.unshift(1));
            for (l = f.length; !f[l - 1]; --l);
            for (o = 0, _ = ""; o < l; o++) _ += i.charAt(f[o]);
            if (m) {
                if (l > 1)
                    if (16 == e || 8 == e) {
                        for (o = 16 == e ? 4 : 3, --l; l % o; l++) _ += "0";
                        for (l = (f = A(_, s, e)).length; !f[l - 1]; --l);
                        for (o = 1, _ = "1."; o < l; o++) _ += i.charAt(f[o]);
                    } else _ = _.charAt(0) + "." + _.slice(1);
                _ = _ + (u < 0 ? "p" : "p+") + u;
            } else if (u < 0) {
                for (; ++u; ) _ = "0" + _;
                _ = "0." + _;
            } else if (++u > l) for (u -= l; u--; ) _ += "0";
            else u < l && (_ = _.slice(0, u) + "." + _.slice(u));
        } else _ = m ? "0p+0" : "0";
        _ = (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") + _;
    } else _ = P(n);
    return n.s < 0 ? "-" + _ : _;
}
function W(n, e) {
    if (n.length > e) return (n.length = e), !0;
}
function j(n) {
    return new this(n).abs();
}
function Y(n) {
    return new this(n).acos();
}
function J(n) {
    return new this(n).acosh();
}
function $(n, e) {
    return new this(n).plus(e);
}
function Q(n) {
    return new this(n).asin();
}
function X(n) {
    return new this(n).asinh();
}
function nn(n) {
    return new this(n).atan();
}
function ne(n) {
    return new this(n).atanh();
}
function nt(n, e) {
    (n = new this(n)), (e = new this(e));
    var t,
        a = this.precision,
        r = this.rounding,
        i = a + 4;
    return (
        n.s && e.s
            ? n.d || e.d
                ? !e.d || n.isZero()
                    ? ((t = e.s < 0 ? B(this, a, r) : new this(0)).s = n.s)
                    : !n.d || e.isZero()
                      ? ((t = B(this, i, 1).times(0.5)).s = n.s)
                      : e.s < 0
                        ? ((this.precision = i),
                          (this.rounding = 1),
                          (t = this.atan(C(n, e, i, 1))),
                          (e = B(this, i, 1)),
                          (this.precision = a),
                          (this.rounding = r),
                          (t = n.s < 0 ? t.minus(e) : t.plus(e)))
                        : (t = this.atan(C(n, e, i, 1)))
                : ((t = B(this, i, 1).times(e.s > 0 ? 0.25 : 0.75)).s = n.s)
            : (t = new this(NaN)),
        t
    );
}
function na(n) {
    return new this(n).cbrt();
}
function nr(n) {
    return T((n = new this(n)), n.e + 1, 2);
}
function ni(n, e, t) {
    return new this(n).clamp(e, t);
}
function ns(n) {
    if (!n || "object" != typeof n) throw Error(l + "Object expected");
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
        if (((t = i[e]), r && (this[t] = o[t]), void 0 !== (a = n[t])))
            if (y(a) === a && a >= i[e + 1] && a <= i[e + 2]) this[t] = a;
            else throw Error(c + t + ": " + a);
    if (((t = "crypto"), r && (this[t] = o[t]), void 0 !== (a = n[t])))
        if (!0 === a || !1 === a || 0 === a || 1 === a)
            if (a)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = !0;
                else throw Error(f);
            else this[t] = !1;
        else throw Error(c + t + ": " + a);
    return this;
}
function nu(n) {
    return new this(n).cos();
}
function no(n) {
    return new this(n).cosh();
}
function nd(n, e) {
    return new this(n).div(e);
}
function nl(n) {
    return new this(n).exp();
}
function nc(n) {
    return T((n = new this(n)), n.e + 1, 3);
}
function n_() {
    var n,
        e,
        t = new this(0);
    for (n = 0, d = !1; n < arguments.length; )
        if (((e = new this(arguments[n++])), e.d)) t.d && (t = t.plus(e.times(e)));
        else {
            if (e.s) return (d = !0), new this(1 / 0);
            t = e;
        }
    return (d = !0), t.sqrt();
}
function nf(n) {
    return n instanceof nI || (n && n.toStringTag === h) || !1;
}
function nh(n) {
    return new this(n).ln();
}
function ny(n, e) {
    return new this(n).log(e);
}
function nm(n) {
    return new this(n).log(2);
}
function nw(n) {
    return new this(n).log(10);
}
function ng() {
    return F(this, arguments, -1);
}
function np() {
    return F(this, arguments, 1);
}
function nv(n, e) {
    return new this(n).mod(e);
}
function nb(n, e) {
    return new this(n).mul(e);
}
function nS(n, e) {
    return new this(n).pow(e);
}
function nM(n) {
    var e,
        t,
        a,
        r,
        i = 0,
        s = new this(1),
        u = [];
    if ((void 0 === n ? (n = this.precision) : E(n, 1, 1e9), (a = Math.ceil(n / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (e = crypto.getRandomValues(new Uint32Array(a)); i < a; )
                (r = e[i]) >= 429e7 ? (e[i] = crypto.getRandomValues(new Uint32Array(1))[0]) : (u[i++] = r % 1e7);
        else if (crypto.randomBytes) {
            for (e = crypto.randomBytes((a *= 4)); i < a; )
                (r = e[i] + (e[i + 1] << 8) + (e[i + 2] << 16) + ((127 & e[i + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(e, i)
                    : (u.push(r % 1e7), (i += 4));
            i = a / 4;
        } else throw Error(f);
    else for (; i < a; ) u[i++] = (1e7 * Math.random()) | 0;
    for (a = u[--i], n %= 7, a && n && ((r = m(10, 7 - n)), (u[i] = ((a / r) | 0) * r)); 0 === u[i]; i--) u.pop();
    if (i < 0) (t = 0), (u = [0]);
    else {
        for (t = -1; 0 === u[0]; t -= 7) u.shift();
        for (a = 1, r = u[0]; r >= 10; r /= 10) a++;
        a < 7 && (t -= 7 - a);
    }
    return (s.e = t), (s.d = u), s;
}
function nN(n) {
    return T((n = new this(n)), n.e + 1, this.rounding);
}
function nE(n) {
    return (n = new this(n)).d ? (n.d[0] ? n.s : 0 * n.s) : n.s || NaN;
}
function nL(n) {
    return new this(n).sin();
}
function nA(n) {
    return new this(n).sinh();
}
function nC(n) {
    return new this(n).sqrt();
}
function nT(n, e) {
    return new this(n).sub(e);
}
function nD() {
    var n = 0,
        e = arguments,
        t = new this(e[0]);
    for (d = !1; t.s && ++n < e.length; ) t = t.plus(e[n]);
    return (d = !0), T(t, this.precision, this.rounding);
}
function nk(n) {
    return new this(n).tan();
}
function nG(n) {
    return new this(n).tanh();
}
function nB(n) {
    return T((n = new this(n)), n.e + 1, 1);
}
(M[Symbol.for("nodejs.util.inspect.custom")] = M.toString), (M[Symbol.toStringTag] = "Decimal");
var nI = (M.constructor = (function n(e) {
    var t, a, r;
    function i(n) {
        var e, t, a;
        if (!(this instanceof i)) return new i(n);
        if (((this.constructor = i), nf(n))) {
            (this.s = n.s),
                d
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
                d
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
            return K(this, n.toString());
        }
        if ("string" === a)
            return (
                45 === (t = n.charCodeAt(0))
                    ? ((n = n.slice(1)), (this.s = -1))
                    : (43 === t && (n = n.slice(1)), (this.s = 1)),
                v.test(n)
                    ? K(this, n)
                    : (function (n, e) {
                          var t, a, r, i, s, u, o, l, _;
                          if (e.indexOf("_") > -1) {
                              if (((e = e.replace(/(\d)_(?=\d)/g, "$1")), v.test(e))) return K(n, e);
                          } else if ("Infinity" === e || "NaN" === e)
                              return +e || (n.s = NaN), (n.e = NaN), (n.d = null), n;
                          if (g.test(e)) (t = 16), (e = e.toLowerCase());
                          else if (w.test(e)) t = 2;
                          else if (p.test(e)) t = 8;
                          else throw Error(c + e);
                          for (
                              (i = e.search(/p/i)) > 0
                                  ? ((o = +e.slice(i + 1)), (e = e.substring(2, i)))
                                  : (e = e.slice(2)),
                                  s = (i = e.indexOf(".")) >= 0,
                                  a = n.constructor,
                                  s &&
                                      ((i = (u = (e = e.replace(".", "")).length) - i), (r = O(a, new a(t), i, 2 * i))),
                                  i = _ = (l = A(e, t, 1e7)).length - 1;
                              0 === l[i];
                              --i
                          )
                              l.pop();
                          return i < 0
                              ? new a(0 * n.s)
                              : ((n.e = k(l, _)),
                                (n.d = l),
                                (d = !1),
                                s && (n = C(n, r, 4 * u)),
                                o && (n = n.times(54 > Math.abs(o) ? m(2, o) : nI.pow(2, o))),
                                (d = !0),
                                n);
                      })(this, n)
            );
        if ("bigint" === a) return n < 0 ? ((n = -n), (this.s = -1)) : (this.s = 1), K(this, n.toString());
        throw Error(c + n);
    }
    if (
        ((i.prototype = M),
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
        (i.config = i.set = ns),
        (i.clone = n),
        (i.isDecimal = nf),
        (i.abs = j),
        (i.acos = Y),
        (i.acosh = J),
        (i.add = $),
        (i.asin = Q),
        (i.asinh = X),
        (i.atan = nn),
        (i.atanh = ne),
        (i.atan2 = nt),
        (i.cbrt = na),
        (i.ceil = nr),
        (i.clamp = ni),
        (i.cos = nu),
        (i.cosh = no),
        (i.div = nd),
        (i.exp = nl),
        (i.floor = nc),
        (i.hypot = n_),
        (i.ln = nh),
        (i.log = ny),
        (i.log10 = nw),
        (i.log2 = nm),
        (i.max = ng),
        (i.min = np),
        (i.mod = nv),
        (i.mul = nb),
        (i.pow = nS),
        (i.random = nM),
        (i.round = nN),
        (i.sign = nE),
        (i.sin = nL),
        (i.sinh = nA),
        (i.sqrt = nC),
        (i.sub = nT),
        (i.sum = nD),
        (i.tan = nk),
        (i.tanh = nG),
        (i.trunc = nB),
        void 0 === e && (e = {}),
        e && !0 !== e.defaults)
    )
        for (
            t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            t < r.length;
        )
            e.hasOwnProperty((a = r[t++])) || (e[a] = this[a]);
    return i.config(e), i;
})(o));
(s = new nI(s)), (u = new nI(u));
