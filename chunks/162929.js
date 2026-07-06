t.d(n, { W: () => eI });
var i,
    r,
    a = "0123456789abcdef",
    s =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    o =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    u = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    l = !0,
    d = "[DecimalError] ",
    c = d + "Invalid argument: ",
    f = d + "Precision limit exceeded",
    p = d + "crypto unavailable",
    h = "[object Decimal]",
    _ = Math.floor,
    m = Math.pow,
    y = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    w = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    v = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    b = s.length - 1,
    z = o.length - 1,
    S = { toStringTag: h };
function k(e) {
    var n,
        t,
        i,
        r = e.length - 1,
        a = "",
        s = e[0];
    if (r > 0) {
        for (a += s, n = 1; n < r; n++) (t = 7 - (i = e[n] + "").length) && (a += L(t)), (a += i);
        (t = 7 - (i = (s = e[n]) + "").length) && (a += L(t));
    } else if (0 === s) return "0";
    for (; s % 10 == 0; ) s /= 10;
    return a + s;
}
function N(e, n, t) {
    if (e !== ~~e || e < n || e > t) throw Error(c + e);
}
function E(e, n, t, i) {
    var r, a, s, o;
    for (a = e[0]; a >= 10; a /= 10) --n;
    return (
        --n < 0 ? ((n += 7), (r = 0)) : ((r = Math.ceil((n + 1) / 7)), (n %= 7)),
        (a = m(10, 7 - n)),
        (o = (e[r] % a) | 0),
        null == i
            ? n < 3
                ? (0 == n ? (o = (o / 100) | 0) : 1 == n && (o = (o / 10) | 0),
                  (s = (t < 4 && 99999 == o) || (t > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (s =
                      (((t < 4 && o + 1 == a) || (t > 3 && o + 1 == a / 2)) &&
                          ((e[r + 1] / a / 100) | 0) == m(10, n - 2) - 1) ||
                      ((o == a / 2 || 0 == o) && ((e[r + 1] / a / 100) | 0) == 0))
            : n < 4
              ? (0 == n ? (o = (o / 1e3) | 0) : 1 == n ? (o = (o / 100) | 0) : 2 == n && (o = (o / 10) | 0),
                (s = ((i || t < 4) && 9999 == o) || (!i && t > 3 && 4999 == o)))
              : (s =
                    (((i || t < 4) && o + 1 == a) || (!i && t > 3 && o + 1 == a / 2)) &&
                    ((e[r + 1] / a / 1e3) | 0) == m(10, n - 3) - 1),
        s
    );
}
function Z(e, n, t) {
    for (var i, r, s = [0], o = 0, u = e.length; o < u; ) {
        for (r = s.length; r--; ) s[r] *= n;
        for (s[0] += a.indexOf(e.charAt(o++)), i = 0; i < s.length; i++)
            s[i] > t - 1 && (void 0 === s[i + 1] && (s[i + 1] = 0), (s[i + 1] += (s[i] / t) | 0), (s[i] %= t));
    }
    return s.reverse();
}
(S.absoluteValue = S.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), A(e);
    }),
    (S.ceil = function () {
        return A(new this.constructor(this), this.e + 1, 2);
    }),
    (S.clampedTo = S.clamp =
        function (e, n) {
            var t = this.constructor;
            if (((e = new t(e)), (n = new t(n)), !e.s || !n.s)) return new t(NaN);
            if (e.gt(n)) throw Error(c + n);
            return 0 > this.cmp(e) ? e : this.cmp(n) > 0 ? n : new t(this);
        }),
    (S.comparedTo = S.cmp =
        function (e) {
            var n,
                t,
                i,
                r,
                a = this.d,
                s = (e = new this.constructor(e)).d,
                o = this.s,
                u = e.s;
            if (!a || !s) return o && u ? (o !== u ? o : a === s ? 0 : !a ^ (o < 0) ? 1 : -1) : NaN;
            if (!a[0] || !s[0]) return a[0] ? o : s[0] ? -u : 0;
            if (o !== u) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (n = 0, t = (i = a.length) < (r = s.length) ? i : r; n < t; ++n)
                if (a[n] !== s[n]) return (a[n] > s[n]) ^ (o < 0) ? 1 : -1;
            return i === r ? 0 : (i > r) ^ (o < 0) ? 1 : -1;
        }),
    (S.cosine = S.cos =
        function () {
            var e,
                n,
                t = this,
                i = t.constructor;
            return t.d
                ? t.d[0]
                    ? ((e = i.precision),
                      (n = i.rounding),
                      (i.precision = e + Math.max(t.e, t.sd()) + 7),
                      (i.rounding = 1),
                      (t = (function (e, n) {
                          var t, i, r;
                          if (n.isZero()) return n;
                          (i = n.d.length) < 32
                              ? (r = (1 / B(4, (t = Math.ceil(i / 3)))).toString())
                              : ((t = 16), (r = "2.3283064365386962890625e-10")),
                              (e.precision += t),
                              (n = U(e, 1, n.times(r), new e(1)));
                          for (var a = t; a--; ) {
                              var s = n.times(n);
                              n = s.times(s).minus(s).times(8).plus(1);
                          }
                          return (e.precision -= t), n;
                      })(i, q(i, t))),
                      (i.precision = e),
                      (i.rounding = n),
                      A(2 == r || 3 == r ? t.neg() : t, e, n, !0))
                    : new i(1)
                : new i(NaN);
        }),
    (S.cubeRoot = S.cbrt =
        function () {
            var e,
                n,
                t,
                i,
                r,
                a,
                s,
                o,
                u,
                d,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                l = !1,
                    (a = this.s * m(this.s * this, 1 / 3)) && Math.abs(a) != 1 / 0
                        ? (i = new c(a.toString()))
                        : ((t = k(this.d)),
                          (a = ((e = this.e) - t.length + 1) % 3) && (t += 1 == a || -2 == a ? "0" : "00"),
                          (a = m(t, 1 / 3)),
                          (e = _((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((i = new c(
                              (t = a == 1 / 0 ? "5e" + e : (t = a.toExponential()).slice(0, t.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    s = (e = c.precision) + 3;
                ;
            )
                if (
                    ((i = T((d = (u = (o = i).times(o).times(o)).plus(this)).plus(this).times(o), d.plus(u), s + 2, 1)),
                    k(o.d).slice(0, s) === (t = k(i.d)).slice(0, s))
                ) {
                    if ("9999" != (t = t.slice(s - 3, s + 1)) && (r || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (A(i, e + 1, 1), (n = !i.times(i).times(i).eq(this)));
                        break;
                    }
                    if (!r && (A(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        i = o;
                        break;
                    }
                    (s += 4), (r = 1);
                }
            return (l = !0), A(i, e, c.rounding, n);
        }),
    (S.decimalPlaces = S.dp =
        function () {
            var e,
                n = this.d,
                t = NaN;
            if (n) {
                if (((t = ((e = n.length - 1) - _(this.e / 7)) * 7), (e = n[e]))) for (; e % 10 == 0; e /= 10) t--;
                t < 0 && (t = 0);
            }
            return t;
        }),
    (S.dividedBy = S.div =
        function (e) {
            return T(this, new this.constructor(e));
        }),
    (S.dividedToIntegerBy = S.divToInt =
        function (e) {
            var n = this.constructor;
            return A(T(this, new n(e), 0, 1, 1), n.precision, n.rounding);
        }),
    (S.equals = S.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (S.floor = function () {
        return A(new this.constructor(this), this.e + 1, 3);
    }),
    (S.greaterThan = S.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (S.greaterThanOrEqualTo = S.gte =
        function (e) {
            var n = this.cmp(e);
            return 1 == n || 0 === n;
        }),
    (S.hyperbolicCosine = S.cosh =
        function () {
            var e,
                n,
                t,
                i,
                r,
                a = this,
                s = a.constructor,
                o = new s(1);
            if (!a.isFinite()) return new s(a.s ? 1 / 0 : NaN);
            if (a.isZero()) return o;
            (t = s.precision),
                (i = s.rounding),
                (s.precision = t + Math.max(a.e, a.sd()) + 4),
                (s.rounding = 1),
                (r = a.d.length) < 32
                    ? (n = (1 / B(4, (e = Math.ceil(r / 3)))).toString())
                    : ((e = 16), (n = "2.3283064365386962890625e-10")),
                (a = U(s, 1, a.times(n), new s(1), !0));
            for (var u, l = e, d = new s(8); l--; ) (u = a.times(a)), (a = o.minus(u.times(d.minus(u.times(d)))));
            return A(a, (s.precision = t), (s.rounding = i), !0);
        }),
    (S.hyperbolicSine = S.sinh =
        function () {
            var e,
                n,
                t,
                i,
                r = this,
                a = r.constructor;
            if (!r.isFinite() || r.isZero()) return new a(r);
            if (
                ((n = a.precision),
                (t = a.rounding),
                (a.precision = n + Math.max(r.e, r.sd()) + 4),
                (a.rounding = 1),
                (i = r.d.length) < 3)
            )
                r = U(a, 2, r, r, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e), (r = U(a, 2, (r = r.times(1 / B(5, e))), r, !0));
                for (var s, o = new a(5), u = new a(16), l = new a(20); e--; )
                    (s = r.times(r)), (r = r.times(o.plus(s.times(u.times(s).plus(l)))));
            }
            return (a.precision = n), (a.rounding = t), A(r, n, t, !0);
        }),
    (S.hyperbolicTangent = S.tanh =
        function () {
            var e,
                n,
                t = this.constructor;
            return this.isFinite()
                ? this.isZero()
                    ? new t(this)
                    : ((e = t.precision),
                      (n = t.rounding),
                      (t.precision = e + 7),
                      (t.rounding = 1),
                      T(this.sinh(), this.cosh(), (t.precision = e), (t.rounding = n)))
                : new t(this.s);
        }),
    (S.inverseCosine = S.acos =
        function () {
            var e = this,
                n = e.constructor,
                t = e.abs().cmp(1),
                i = n.precision,
                r = n.rounding;
            return -1 !== t
                ? 0 === t
                    ? e.isNeg()
                        ? M(n, i, r)
                        : new n(0)
                    : new n(NaN)
                : e.isZero()
                  ? M(n, i + 4, r).times(0.5)
                  : ((n.precision = i + 6),
                    (n.rounding = 1),
                    (e = new n(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (n.precision = i),
                    (n.rounding = r),
                    e.times(2));
        }),
    (S.inverseHyperbolicCosine = S.acosh =
        function () {
            var e,
                n,
                t = this,
                i = t.constructor;
            return t.lte(1)
                ? new i(t.eq(1) ? 0 : NaN)
                : t.isFinite()
                  ? ((e = i.precision),
                    (n = i.rounding),
                    (i.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4),
                    (i.rounding = 1),
                    (l = !1),
                    (t = t.times(t).minus(1).sqrt().plus(t)),
                    (l = !0),
                    (i.precision = e),
                    (i.rounding = n),
                    t.ln())
                  : new i(t);
        }),
    (S.inverseHyperbolicSine = S.asinh =
        function () {
            var e,
                n,
                t = this,
                i = t.constructor;
            return !t.isFinite() || t.isZero()
                ? new i(t)
                : ((e = i.precision),
                  (n = i.rounding),
                  (i.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6),
                  (i.rounding = 1),
                  (l = !1),
                  (t = t.times(t).plus(1).sqrt().plus(t)),
                  (l = !0),
                  (i.precision = e),
                  (i.rounding = n),
                  t.ln());
        }),
    (S.inverseHyperbolicTangent = S.atanh =
        function () {
            var e,
                n,
                t,
                i,
                r = this,
                a = r.constructor;
            return r.isFinite()
                ? r.e >= 0
                    ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
                    : ((e = a.precision), (n = a.rounding), Math.max((i = r.sd()), e) < -(2 * r.e) - 1)
                      ? A(new a(r), e, n, !0)
                      : ((a.precision = t = i - r.e),
                        (r = T(r.plus(1), new a(1).minus(r), t + e, 1)),
                        (a.precision = e + 4),
                        (a.rounding = 1),
                        (r = r.ln()),
                        (a.precision = e),
                        (a.rounding = n),
                        r.times(0.5))
                : new a(NaN);
        }),
    (S.inverseSine = S.asin =
        function () {
            var e,
                n,
                t,
                i,
                r = this,
                a = r.constructor;
            return r.isZero()
                ? new a(r)
                : ((n = r.abs().cmp(1)), (t = a.precision), (i = a.rounding), -1 !== n)
                  ? 0 === n
                      ? (((e = M(a, t + 4, i).times(0.5)).s = r.s), e)
                      : new a(NaN)
                  : ((a.precision = t + 6),
                    (a.rounding = 1),
                    (r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan()),
                    (a.precision = t),
                    (a.rounding = i),
                    r.times(2));
        }),
    (S.inverseTangent = S.atan =
        function () {
            var e,
                n,
                t,
                i,
                r,
                a,
                s,
                o,
                u,
                d = this,
                c = d.constructor,
                f = c.precision,
                p = c.rounding;
            if (d.isFinite()) {
                if (d.isZero()) return new c(d);
                else if (d.abs().eq(1) && f + 4 <= z) return ((s = M(c, f + 4, p).times(0.25)).s = d.s), s;
            } else {
                if (!d.s) return new c(NaN);
                if (f + 4 <= z) return ((s = M(c, f + 4, p).times(0.5)).s = d.s), s;
            }
            for (c.precision = o = f + 10, c.rounding = 1, e = t = Math.min(28, (o / 7 + 2) | 0); e; --e)
                d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (l = !1, n = Math.ceil(o / 7), i = 1, u = d.times(d), s = new c(d), r = d; -1 !== e; )
                if (
                    ((r = r.times(u)),
                    (a = s.minus(r.div((i += 2)))),
                    (r = r.times(u)),
                    void 0 !== (s = a.plus(r.div((i += 2)))).d[n])
                )
                    for (e = n; s.d[e] === a.d[e] && e--; );
            return t && (s = s.times(2 << (t - 1))), (l = !0), A(s, (c.precision = f), (c.rounding = p), !0);
        }),
    (S.isFinite = function () {
        return !!this.d;
    }),
    (S.isInteger = S.isInt =
        function () {
            return !!this.d && _(this.e / 7) > this.d.length - 2;
        }),
    (S.isNaN = function () {
        return !this.s;
    }),
    (S.isNegative = S.isNeg =
        function () {
            return this.s < 0;
        }),
    (S.isPositive = S.isPos =
        function () {
            return this.s > 0;
        }),
    (S.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (S.lessThan = S.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (S.lessThanOrEqualTo = S.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (S.logarithm = S.log =
        function (e) {
            var n,
                t,
                i,
                r,
                a,
                s,
                o,
                u = this.constructor,
                d = u.precision,
                c = u.rounding;
            if (null == e) (e = new u(10)), (n = !0);
            else {
                if (((t = (e = new u(e)).d), e.s < 0 || !t || !t[0] || e.eq(1))) return new u(NaN);
                n = e.eq(10);
            }
            if (((t = this.d), this.s < 0 || !t || !t[0] || this.eq(1)))
                return new u(t && !t[0] ? -1 / 0 : 1 != this.s ? NaN : t ? 0 : 1 / 0);
            if (n)
                if (t.length > 1) r = !0;
                else {
                    for (i = t[0]; i % 10 == 0; ) i /= 10;
                    r = 1 !== i;
                }
            if (((l = !1), E((o = T((a = F(this, (s = d + 5))), n ? $(u, s + 10) : F(e, s), s, 1)).d, (i = d), c)))
                do
                    if (((s += 10), (o = T((a = F(this, s)), n ? $(u, s + 10) : F(e, s), s, 1)), !r)) {
                        +k(o.d).slice(i + 1, i + 15) + 1 == 1e14 && (o = A(o, d + 1, 0));
                        break;
                    }
                while (E(o.d, (i += 10), c));
            return (l = !0), A(o, d, c);
        }),
    (S.minus = S.sub =
        function (e) {
            var n,
                t,
                i,
                r,
                a,
                s,
                o,
                u,
                d,
                c,
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
            if (((d = this.d), (p = e.d), (o = h.precision), (u = h.rounding), !d[0] || !p[0])) {
                if (p[0]) e.s = -e.s;
                else {
                    if (!d[0]) return new h(3 === u ? -0 : 0);
                    e = new h(this);
                }
                return l ? A(e, o, u) : e;
            }
            if (((t = _(e.e / 7)), (c = _(this.e / 7)), (d = d.slice()), (a = c - t))) {
                for (
                    (f = a < 0) ? ((n = d), (a = -a), (s = p.length)) : ((n = p), (t = c), (s = d.length)),
                        a > (i = Math.max(Math.ceil(o / 7), s) + 2) && ((a = i), (n.length = 1)),
                        n.reverse(),
                        i = a;
                    i--;
                )
                    n.push(0);
                n.reverse();
            } else {
                for ((f = (i = d.length) < (s = p.length)) && (s = i), i = 0; i < s; i++)
                    if (d[i] != p[i]) {
                        f = d[i] < p[i];
                        break;
                    }
                a = 0;
            }
            for (f && ((n = d), (d = p), (p = n), (e.s = -e.s)), s = d.length, i = p.length - s; i > 0; --i) d[s++] = 0;
            for (i = p.length; i > a; ) {
                if (d[--i] < p[i]) {
                    for (r = i; r && 0 === d[--r]; ) d[r] = 1e7 - 1;
                    --d[r], (d[i] += 1e7);
                }
                d[i] -= p[i];
            }
            for (; 0 === d[--s]; ) d.pop();
            for (; 0 === d[0]; d.shift()) --t;
            return d[0] ? ((e.d = d), (e.e = O(d, t)), l ? A(e, o, u) : e) : new h(3 === u ? -0 : 0);
        }),
    (S.modulo = S.mod =
        function (e) {
            var n,
                t = this.constructor;
            return ((e = new t(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((l = !1),
                      9 == t.modulo
                          ? ((n = T(this, e.abs(), 0, 3, 1)), (n.s *= e.s))
                          : (n = T(this, e, 0, t.modulo, 1)),
                      (n = n.times(e)),
                      (l = !0),
                      this.minus(n))
                    : A(new t(this), t.precision, t.rounding)
                : new t(NaN);
        }),
    (S.naturalExponential = S.exp =
        function () {
            return R(this);
        }),
    (S.naturalLogarithm = S.ln =
        function () {
            return F(this);
        }),
    (S.negated = S.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), A(e);
        }),
    (S.plus = S.add =
        function (e) {
            var n,
                t,
                i,
                r,
                a,
                s,
                o,
                u,
                d,
                c,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN)) : (e = new f(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((d = this.d), (c = e.d), (o = f.precision), (u = f.rounding), !d[0] || !c[0]))
                return c[0] || (e = new f(this)), l ? A(e, o, u) : e;
            if (((a = _(this.e / 7)), (i = _(e.e / 7)), (d = d.slice()), (r = a - i))) {
                for (
                    r < 0 ? ((t = d), (r = -r), (s = c.length)) : ((t = c), (i = a), (s = d.length)),
                        r > (s = (a = Math.ceil(o / 7)) > s ? a + 1 : s + 1) && ((r = s), (t.length = 1)),
                        t.reverse();
                    r--;
                )
                    t.push(0);
                t.reverse();
            }
            for ((s = d.length) - (r = c.length) < 0 && ((r = s), (t = c), (c = d), (d = t)), n = 0; r; )
                (n = ((d[--r] = d[r] + c[r] + n) / 1e7) | 0), (d[r] %= 1e7);
            for (n && (d.unshift(n), ++i), s = d.length; 0 == d[--s]; ) d.pop();
            return (e.d = d), (e.e = O(d, i)), l ? A(e, o, u) : e;
        }),
    (S.precision = S.sd =
        function (e) {
            var n;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
            return this.d ? ((n = I(this.d)), e && this.e + 1 > n && (n = this.e + 1)) : (n = NaN), n;
        }),
    (S.round = function () {
        var e = this.constructor;
        return A(new e(this), this.e + 1, e.rounding);
    }),
    (S.sine = S.sin =
        function () {
            var e,
                n,
                t = this,
                i = t.constructor;
            return t.isFinite()
                ? t.isZero()
                    ? new i(t)
                    : ((e = i.precision),
                      (n = i.rounding),
                      (i.precision = e + Math.max(t.e, t.sd()) + 7),
                      (i.rounding = 1),
                      (t = (function (e, n) {
                          var t,
                              i = n.d.length;
                          if (i < 3) return n.isZero() ? n : U(e, 2, n, n);
                          (t = (t = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | t),
                              (n = U(e, 2, (n = n.times(1 / B(5, t))), n));
                          for (var r, a = new e(5), s = new e(16), o = new e(20); t--; )
                              (r = n.times(n)), (n = n.times(a.plus(r.times(s.times(r).minus(o)))));
                          return n;
                      })(i, q(i, t))),
                      (i.precision = e),
                      (i.rounding = n),
                      A(r > 2 ? t.neg() : t, e, n, !0))
                : new i(NaN);
        }),
    (S.squareRoot = S.sqrt =
        function () {
            var e,
                n,
                t,
                i,
                r,
                a,
                s = this.d,
                o = this.e,
                u = this.s,
                d = this.constructor;
            if (1 !== u || !s || !s[0]) return new d(!u || (u < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0);
            for (
                l = !1,
                    0 == (u = Math.sqrt(+this)) || u == 1 / 0
                        ? (((n = k(s)).length + o) % 2 == 0 && (n += "0"),
                          (u = Math.sqrt(n)),
                          (o = _((o + 1) / 2) - (o < 0 || o % 2)),
                          (i = new d(
                              (n = u == 1 / 0 ? "5e" + o : (n = u.toExponential()).slice(0, n.indexOf("e") + 1) + o),
                          )))
                        : (i = new d(u.toString())),
                    t = (o = d.precision) + 3;
                ;
            )
                if (
                    ((i = (a = i).plus(T(this, a, t + 2, 1)).times(0.5)),
                    k(a.d).slice(0, t) === (n = k(i.d)).slice(0, t))
                ) {
                    if ("9999" != (n = n.slice(t - 3, t + 1)) && (r || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) || (A(i, o + 1, 1), (e = !i.times(i).eq(this)));
                        break;
                    }
                    if (!r && (A(a, o + 1, 0), a.times(a).eq(this))) {
                        i = a;
                        break;
                    }
                    (t += 4), (r = 1);
                }
            return (l = !0), A(i, o, d.rounding, e);
        }),
    (S.tangent = S.tan =
        function () {
            var e,
                n,
                t = this,
                i = t.constructor;
            return t.isFinite()
                ? t.isZero()
                    ? new i(t)
                    : ((e = i.precision),
                      (n = i.rounding),
                      (i.precision = e + 10),
                      (i.rounding = 1),
                      ((t = t.sin()).s = 1),
                      (t = T(t, new i(1).minus(t.times(t)).sqrt(), e + 10, 0)),
                      (i.precision = e),
                      (i.rounding = n),
                      A(2 == r || 4 == r ? t.neg() : t, e, n, !0))
                : new i(NaN);
        }),
    (S.times = S.mul =
        function (e) {
            var n,
                t,
                i,
                r,
                a,
                s,
                o,
                u,
                d,
                c = this.constructor,
                f = this.d,
                p = (e = new c(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !p || !p[0]))
                return new c(!e.s || (f && !f[0] && !p) || (p && !p[0] && !f) ? NaN : !f || !p ? e.s / 0 : 0 * e.s);
            for (
                t = _(this.e / 7) + _(e.e / 7),
                    (u = f.length) < (d = p.length) && ((a = f), (f = p), (p = a), (s = u), (u = d), (d = s)),
                    a = [],
                    i = s = u + d;
                i--;
            )
                a.push(0);
            for (i = d; --i >= 0; ) {
                for (n = 0, r = u + i; r > i; )
                    (o = a[r] + p[i] * f[r - i - 1] + n), (a[r--] = (o % 1e7) | 0), (n = (o / 1e7) | 0);
                a[r] = ((a[r] + n) % 1e7) | 0;
            }
            for (; !a[--s]; ) a.pop();
            return n ? ++t : a.shift(), (e.d = a), (e.e = O(a, t)), l ? A(e, c.precision, c.rounding) : e;
        }),
    (S.toBinary = function (e, n) {
        return J(this, 2, e, n);
    }),
    (S.toDecimalPlaces = S.toDP =
        function (e, n) {
            var t = this,
                i = t.constructor;
            return ((t = new i(t)), void 0 === e)
                ? t
                : (N(e, 0, 1e9), void 0 === n ? (n = i.rounding) : N(n, 0, 8), A(t, e + t.e + 1, n));
        }),
    (S.toExponential = function (e, n) {
        var t,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (t = x(i, !0))
                : (N(e, 0, 1e9),
                  void 0 === n ? (n = r.rounding) : N(n, 0, 8),
                  (t = x((i = A(new r(i), e + 1, n)), !0, e + 1))),
            i.isNeg() && !i.isZero() ? "-" + t : t
        );
    }),
    (S.toFixed = function (e, n) {
        var t,
            i,
            r = this.constructor;
        return (
            void 0 === e
                ? (t = x(this))
                : (N(e, 0, 1e9),
                  void 0 === n ? (n = r.rounding) : N(n, 0, 8),
                  (t = x((i = A(new r(this), e + this.e + 1, n)), !1, e + i.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + t : t
        );
    }),
    (S.toFraction = function (e) {
        var n,
            t,
            i,
            r,
            a,
            s,
            o,
            u,
            d,
            f,
            p,
            h,
            _ = this.d,
            y = this.constructor;
        if (!_) return new y(this);
        if (
            ((d = t = new y(1)),
            (i = u = new y(0)),
            (s = (a = (n = new y(i)).e = I(_) - this.e - 1) % 7),
            (n.d[0] = m(10, s < 0 ? 7 + s : s)),
            null == e)
        )
            e = a > 0 ? n : d;
        else {
            if (!(o = new y(e)).isInt() || o.lt(d)) throw Error(c + o);
            e = o.gt(n) ? (a > 0 ? n : d) : o;
        }
        for (
            l = !1, o = new y(k(_)), f = y.precision, y.precision = a = 7 * _.length * 2;
            (p = T(o, n, 0, 1, 1)), 1 != (r = t.plus(p.times(i))).cmp(e);
        )
            (t = i), (i = r), (r = d), (d = u.plus(p.times(r))), (u = r), (r = n), (n = o.minus(p.times(r))), (o = r);
        return (
            (r = T(e.minus(t), i, 0, 1, 1)),
            (u = u.plus(r.times(d))),
            (t = t.plus(r.times(i))),
            (u.s = d.s = this.s),
            (h =
                1 >
                T(d, i, a, 1)
                    .minus(this)
                    .abs()
                    .cmp(T(u, t, a, 1).minus(this).abs())
                    ? [d, i]
                    : [u, t]),
            (y.precision = f),
            (l = !0),
            h
        );
    }),
    (S.toHexadecimal = S.toHex =
        function (e, n) {
            return J(this, 16, e, n);
        }),
    (S.toNearest = function (e, n) {
        var t = this,
            i = t.constructor;
        if (((t = new i(t)), null == e)) {
            if (!t.d) return t;
            (e = new i(1)), (n = i.rounding);
        } else {
            if (((e = new i(e)), void 0 === n ? (n = i.rounding) : N(n, 0, 8), !t.d)) return e.s ? t : e;
            if (!e.d) return e.s && (e.s = t.s), e;
        }
        return e.d[0] ? ((l = !1), (t = T(t, e, 0, n, 1).times(e)), (l = !0), A(t)) : ((e.s = t.s), (t = e)), t;
    }),
    (S.toNumber = function () {
        return +this;
    }),
    (S.toOctal = function (e, n) {
        return J(this, 8, e, n);
    }),
    (S.toPower = S.pow =
        function (e) {
            var n,
                t,
                i,
                r,
                a,
                s,
                o = this,
                u = o.constructor,
                d = +(e = new u(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(m(+o, d));
            if ((o = new u(o)).eq(1)) return o;
            if (((i = u.precision), (a = u.rounding), e.eq(1))) return A(o, i, a);
            if ((n = _(e.e / 7)) >= e.d.length - 1 && (t = d < 0 ? -d : d) <= 0x1fffffffffffff)
                return (r = C(u, o, t, i)), e.s < 0 ? new u(1).div(r) : A(r, i, a);
            if ((s = o.s) < 0) {
                if (n < e.d.length - 1) return new u(NaN);
                if (((1 & e.d[n]) == 0 && (s = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return (o.s = s), o;
            }
            return (n =
                0 != (t = m(+o, d)) && isFinite(t)
                    ? new u(t + "").e
                    : _(d * (Math.log("0." + k(o.d)) / Math.LN10 + o.e + 1))) >
                u.maxE + 1 || n < u.minE - 1
                ? new u(n > 0 ? s / 0 : 0)
                : ((l = !1),
                  (u.rounding = o.s = 1),
                  (t = Math.min(12, (n + "").length)),
                  (r = R(e.times(F(o, i + t)), i)).d &&
                      E((r = A(r, i + 5, 1)).d, i, a) &&
                      ((n = i + 10),
                      +k((r = A(R(e.times(F(o, n + t)), n), n + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 &&
                          (r = A(r, i + 1, 0))),
                  (r.s = s),
                  (l = !0),
                  (u.rounding = a),
                  A(r, i, a));
        }),
    (S.toPrecision = function (e, n) {
        var t,
            i = this,
            r = i.constructor;
        return (
            void 0 === e
                ? (t = x(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
                : (N(e, 1, 1e9),
                  void 0 === n ? (n = r.rounding) : N(n, 0, 8),
                  (t = x((i = A(new r(i), e, n)), e <= i.e || i.e <= r.toExpNeg, e))),
            i.isNeg() && !i.isZero() ? "-" + t : t
        );
    }),
    (S.toSignificantDigits = S.toSD =
        function (e, n) {
            var t = this.constructor;
            return (
                void 0 === e
                    ? ((e = t.precision), (n = t.rounding))
                    : (N(e, 1, 1e9), void 0 === n ? (n = t.rounding) : N(n, 0, 8)),
                A(new t(this), e, n)
            );
        }),
    (S.toString = function () {
        var e = this.constructor,
            n = x(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + n : n;
    }),
    (S.truncated = S.trunc =
        function () {
            return A(new this.constructor(this), this.e + 1, 1);
        }),
    (S.valueOf = S.toJSON =
        function () {
            var e = this.constructor,
                n = x(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + n : n;
        });
var T = (function () {
    function e(e, n, t) {
        var i,
            r = 0,
            a = e.length;
        for (e = e.slice(); a--; ) (i = e[a] * n + r), (e[a] = (i % t) | 0), (r = (i / t) | 0);
        return r && e.unshift(r), e;
    }
    function n(e, n, t, i) {
        var r, a;
        if (t != i) a = t > i ? 1 : -1;
        else
            for (r = a = 0; r < t; r++)
                if (e[r] != n[r]) {
                    a = e[r] > n[r] ? 1 : -1;
                    break;
                }
        return a;
    }
    function t(e, n, t, i) {
        for (var r = 0; t--; ) (e[t] -= r), (r = +(e[t] < n[t])), (e[t] = r * i + e[t] - n[t]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (r, a, s, o, u, l) {
        var d,
            c,
            f,
            p,
            h,
            m,
            y,
            g,
            w,
            v,
            b,
            z,
            S,
            k,
            N,
            E,
            Z,
            T,
            x,
            O,
            $ = r.constructor,
            M = r.s == a.s ? 1 : -1,
            I = r.d,
            L = a.d;
        if (!I || !I[0] || !L || !L[0])
            return new $(!r.s || !a.s || (I ? L && I[0] == L[0] : !L) ? NaN : (I && 0 == I[0]) || !L ? 0 * M : M / 0);
        for (
            l ? ((h = 1), (c = r.e - a.e)) : ((l = 1e7), (h = 7), (c = _(r.e / h) - _(a.e / h))),
                x = L.length,
                Z = I.length,
                v = (w = new $(M)).d = [],
                f = 0;
            L[f] == (I[f] || 0);
            f++
        );
        if (
            (L[f] > (I[f] || 0) && c--,
            null == s ? ((k = s = $.precision), (o = $.rounding)) : (k = u ? s + (r.e - a.e) + 1 : s),
            k < 0)
        )
            v.push(1), (m = !0);
        else {
            if (((k = (k / h + 2) | 0), (f = 0), 1 == x)) {
                for (p = 0, L = L[0], k++; (f < Z || p) && k--; f++)
                    (N = p * l + (I[f] || 0)), (v[f] = (N / L) | 0), (p = (N % L) | 0);
                m = p || f < Z;
            } else {
                for (
                    (p = (l / (L[0] + 1)) | 0) > 1 &&
                        ((L = e(L, p, l)), (I = e(I, p, l)), (x = L.length), (Z = I.length)),
                        E = x,
                        z = (b = I.slice(0, x)).length;
                    z < x;
                )
                    b[z++] = 0;
                (O = L.slice()).unshift(0), (T = L[0]), L[1] >= l / 2 && ++T;
                do
                    (p = 0),
                        (d = n(L, b, x, z)) < 0
                            ? ((S = b[0]),
                              x != z && (S = S * l + (b[1] || 0)),
                              (p = (S / T) | 0) > 1
                                  ? (p >= l && (p = l - 1),
                                    (g = (y = e(L, p, l)).length),
                                    (z = b.length),
                                    1 == (d = n(y, b, g, z)) && (p--, t(y, x < g ? O : L, g, l)))
                                  : (0 == p && (d = p = 1), (y = L.slice())),
                              (g = y.length) < z && y.unshift(0),
                              t(b, y, z, l),
                              -1 == d && ((z = b.length), (d = n(L, b, x, z)) < 1 && (p++, t(b, x < z ? O : L, z, l))),
                              (z = b.length))
                            : 0 === d && (p++, (b = [0])),
                        (v[f++] = p),
                        d && b[0] ? (b[z++] = I[E] || 0) : ((b = [I[E]]), (z = 1));
                while ((E++ < Z || void 0 !== b[0]) && k--);
                m = void 0 !== b[0];
            }
            v[0] || v.shift();
        }
        if (1 == h) (w.e = c), (i = m);
        else {
            for (f = 1, p = v[0]; p >= 10; p /= 10) f++;
            (w.e = f + c * h - 1), A(w, u ? s + w.e + 1 : s, o, m);
        }
        return w;
    };
})();
function A(e, n, t, i) {
    var r,
        a,
        s,
        o,
        u,
        d,
        c,
        f,
        p,
        h = e.constructor;
    e: if (null != n) {
        if (!(f = e.d)) return e;
        for (r = 1, o = f[0]; o >= 10; o /= 10) r++;
        if ((a = n - r) < 0) (a += 7), (s = n), (u = (((c = f[(p = 0)]) / m(10, r - s - 1)) % 10) | 0);
        else if ((p = Math.ceil((a + 1) / 7)) >= (o = f.length))
            if (i) {
                for (; o++ <= p; ) f.push(0);
                (c = u = 0), (r = 1), (a %= 7), (s = a - 7 + 1);
            } else break e;
        else {
            for (r = 1, c = o = f[p]; o >= 10; o /= 10) r++;
            (a %= 7), (u = (s = a - 7 + r) < 0 ? 0 : ((c / m(10, r - s - 1)) % 10) | 0);
        }
        if (
            ((i = i || n < 0 || void 0 !== f[p + 1] || (s < 0 ? c : c % m(10, r - s - 1))),
            (d =
                t < 4
                    ? (u || i) && (0 == t || t == (e.s < 0 ? 3 : 2))
                    : u > 5 ||
                      (5 == u &&
                          (4 == t ||
                              i ||
                              (6 == t && ((a > 0 ? (s > 0 ? c / m(10, r - s) : 0) : f[p - 1]) % 10) & 1) ||
                              t == (e.s < 0 ? 8 : 7)))),
            n < 1 || !f[0])
        )
            return (
                (f.length = 0),
                d ? ((n -= e.e + 1), (f[0] = m(10, (7 - (n % 7)) % 7)), (e.e = -n || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == a
                ? ((f.length = p), (o = 1), p--)
                : ((f.length = p + 1),
                  (o = m(10, 7 - a)),
                  (f[p] = s > 0 ? (((c / m(10, r - s)) % m(10, s)) | 0) * o : 0)),
            d)
        )
            for (;;)
                if (0 == p) {
                    for (a = 1, s = f[0]; s >= 10; s /= 10) a++;
                    for (s = f[0] += o, o = 1; s >= 10; s /= 10) o++;
                    a != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                    break;
                } else {
                    if (((f[p] += o), 1e7 != f[p])) break;
                    (f[p--] = 0), (o = 1);
                }
        for (a = f.length; 0 === f[--a]; ) f.pop();
    }
    return l && (e.e > h.maxE ? ((e.d = null), (e.e = NaN)) : e.e < h.minE && ((e.e = 0), (e.d = [0]))), e;
}
function x(e, n, t) {
    if (!e.isFinite()) return G(e);
    var i,
        r = e.e,
        a = k(e.d),
        s = a.length;
    return (
        n
            ? (t && (i = t - s) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + L(i))
                  : s > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (e.e < 0 ? "e" : "e+") + e.e))
            : r < 0
              ? ((a = "0." + L(-r - 1) + a), t && (i = t - s) > 0 && (a += L(i)))
              : r >= s
                ? ((a += L(r + 1 - s)), t && (i = t - r - 1) > 0 && (a = a + "." + L(i)))
                : ((i = r + 1) < s && (a = a.slice(0, i) + "." + a.slice(i)),
                  t && (i = t - s) > 0 && (r + 1 === s && (a += "."), (a += L(i)))),
        a
    );
}
function O(e, n) {
    var t = e[0];
    for (n *= 7; t >= 10; t /= 10) n++;
    return n;
}
function $(e, n, t) {
    if (n > b) throw ((l = !0), t && (e.precision = t), Error(f));
    return A(new e(s), n, 1, !0);
}
function M(e, n, t) {
    if (n > z) throw Error(f);
    return A(new e(o), n, t, !0);
}
function I(e) {
    var n = e.length - 1,
        t = 7 * n + 1;
    if ((n = e[n])) {
        for (; n % 10 == 0; n /= 10) t--;
        for (n = e[0]; n >= 10; n /= 10) t++;
    }
    return t;
}
function L(e) {
    for (var n = ""; e--; ) n += "0";
    return n;
}
function C(e, n, t, i) {
    var r,
        a = new e(1),
        s = Math.ceil(i / 7 + 4);
    for (l = !1; ; ) {
        if ((t % 2 && H((a = a.times(n)).d, s) && (r = !0), 0 === (t = _(t / 2)))) {
            (t = a.d.length - 1), r && 0 === a.d[t] && ++a.d[t];
            break;
        }
        H((n = n.times(n)).d, s);
    }
    return (l = !0), a;
}
function D(e) {
    return 1 & e.d[e.d.length - 1];
}
function P(e, n, t) {
    for (var i, r, a = new e(n[0]), s = 0; ++s < n.length; ) {
        if (!(r = new e(n[s])).s) {
            a = r;
            break;
        }
        ((i = a.cmp(r)) === t || (0 === i && a.s === t)) && (a = r);
    }
    return a;
}
function R(e, n) {
    var t,
        i,
        r,
        a,
        s,
        o,
        u,
        d = 0,
        c = 0,
        f = 0,
        p = e.constructor,
        h = p.rounding,
        _ = p.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new p(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == n ? ((l = !1), (u = _)) : (u = n), o = new p(0.03125); e.e > -2; ) (e = e.times(o)), (f += 5);
    for (u += i = ((Math.log(m(2, f)) / Math.LN10) * 2 + 5) | 0, t = a = s = new p(1), p.precision = u; ; ) {
        if (
            ((a = A(a.times(e), u, 1)),
            (t = t.times(++c)),
            k((o = s.plus(T(a, t, u, 1))).d).slice(0, u) === k(s.d).slice(0, u))
        ) {
            for (r = f; r--; ) s = A(s.times(s), u, 1);
            if (null != n) return (p.precision = _), s;
            if (!(d < 3 && E(s.d, u - i, h, d))) return A(s, (p.precision = _), h, (l = !0));
            (p.precision = u += 10), (t = a = o = new p(1)), (c = 0), d++;
        }
        s = o;
    }
}
function F(e, n) {
    var t,
        i,
        r,
        a,
        s,
        o,
        u,
        d,
        c,
        f,
        p,
        h = 1,
        _ = e,
        m = _.d,
        y = _.constructor,
        g = y.rounding,
        w = y.precision;
    if (_.s < 0 || !m || !m[0] || (!_.e && 1 == m[0] && 1 == m.length))
        return new y(m && !m[0] ? -1 / 0 : 1 != _.s ? NaN : m ? 0 : _);
    if (
        (null == n ? ((l = !1), (c = w)) : (c = n),
        (y.precision = c += 10),
        (i = (t = k(m)).charAt(0)),
        !(15e14 > Math.abs((a = _.e))))
    )
        return (
            (d = $(y, c + 2, w).times(a + "")),
            (_ = F(new y(i + "." + t.slice(1)), c - 10).plus(d)),
            (y.precision = w),
            null == n ? A(_, w, g, (l = !0)) : _
        );
    for (; (i < 7 && 1 != i) || (1 == i && t.charAt(1) > 3); ) (i = (t = k((_ = _.times(e)).d)).charAt(0)), h++;
    for (
        a = _.e,
            i > 1 ? ((_ = new y("0." + t)), a++) : (_ = new y(i + "." + t.slice(1))),
            f = _,
            u = s = _ = T(_.minus(1), _.plus(1), c, 1),
            p = A(_.times(_), c, 1),
            r = 3;
        ;
    ) {
        if (((s = A(s.times(p), c, 1)), k((d = u.plus(T(s, new y(r), c, 1))).d).slice(0, c) === k(u.d).slice(0, c))) {
            if (
                ((u = u.times(2)),
                0 !== a && (u = u.plus($(y, c + 2, w).times(a + ""))),
                (u = T(u, new y(h), c, 1)),
                null != n)
            )
                return (y.precision = w), u;
            if (!E(u.d, c - 10, g, o)) return A(u, (y.precision = w), g, (l = !0));
            (y.precision = c += 10),
                (d = s = _ = T(f.minus(1), f.plus(1), c, 1)),
                (p = A(_.times(_), c, 1)),
                (r = o = 1);
        }
        (u = d), (r += 2);
    }
}
function G(e) {
    return String((e.s * e.s) / 0);
}
function j(e, n) {
    var t, i, r;
    for (
        (t = n.indexOf(".")) > -1 && (n = n.replace(".", "")),
            (i = n.search(/e/i)) > 0
                ? (t < 0 && (t = i), (t += +n.slice(i + 1)), (n = n.substring(0, i)))
                : t < 0 && (t = n.length),
            i = 0;
        48 === n.charCodeAt(i);
        i++
    );
    for (r = n.length; 48 === n.charCodeAt(r - 1); --r);
    if ((n = n.slice(i, r))) {
        if (((r -= i), (e.e = t = t - i - 1), (e.d = []), (i = (t + 1) % 7), t < 0 && (i += 7), i < r)) {
            for (i && e.d.push(+n.slice(0, i)), r -= 7; i < r; ) e.d.push(+n.slice(i, (i += 7)));
            i = 7 - (n = n.slice(i)).length;
        } else i -= r;
        for (; i--; ) n += "0";
        e.d.push(+n),
            l &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function U(e, n, t, i, r) {
    var a,
        s,
        o,
        u,
        d = e.precision,
        c = Math.ceil(d / 7);
    for (l = !1, u = t.times(t), o = new e(i); ; ) {
        if (
            ((s = T(o.times(u), new e(n++ * n++), d, 1)),
            (o = r ? i.plus(s) : i.minus(s)),
            (i = T(s.times(u), new e(n++ * n++), d, 1)),
            void 0 !== (s = o.plus(i)).d[c])
        ) {
            for (a = c; s.d[a] === o.d[a] && a--; );
            if (-1 == a) break;
        }
        (a = o), (o = i), (i = s), (s = a);
    }
    return (l = !0), (s.d.length = c + 1), s;
}
function B(e, n) {
    for (var t = e; --n; ) t *= e;
    return t;
}
function q(e, n) {
    var t,
        i = n.s < 0,
        a = M(e, e.precision, 1),
        s = a.times(0.5);
    if ((n = n.abs()).lte(s)) return (r = i ? 4 : 1), n;
    if ((t = n.divToInt(a)).isZero()) r = i ? 3 : 2;
    else {
        if ((n = n.minus(t.times(a))).lte(s)) return (r = D(t) ? (i ? 2 : 3) : i ? 4 : 1), n;
        r = D(t) ? (i ? 1 : 4) : i ? 3 : 2;
    }
    return n.minus(a).abs();
}
function J(e, n, t, r) {
    var s,
        o,
        u,
        l,
        d,
        c,
        f,
        p,
        h,
        _ = e.constructor,
        m = void 0 !== t;
    if (
        (m ? (N(t, 1, 1e9), void 0 === r ? (r = _.rounding) : N(r, 0, 8)) : ((t = _.precision), (r = _.rounding)),
        e.isFinite())
    ) {
        for (
            u = (f = x(e)).indexOf("."),
                m ? ((s = 2), 16 == n ? (t = 4 * t - 3) : 8 == n && (t = 3 * t - 2)) : (s = n),
                u >= 0 &&
                    ((f = f.replace(".", "")),
                    ((h = new _(1)).e = f.length - u),
                    (h.d = Z(x(h), 10, s)),
                    (h.e = h.d.length)),
                o = d = (p = Z(f, 10, s)).length;
            0 == p[--d];
        )
            p.pop();
        if (p[0]) {
            if (
                (u < 0
                    ? o--
                    : (((e = new _(e)).d = p), (e.e = o), (p = (e = T(e, h, t, r, 0, s)).d), (o = e.e), (c = i)),
                (u = p[t]),
                (l = s / 2),
                (c = c || void 0 !== p[t + 1]),
                (c =
                    r < 4
                        ? (void 0 !== u || c) && (0 === r || r === (e.s < 0 ? 3 : 2))
                        : u > l || (u === l && (4 === r || c || (6 === r && 1 & p[t - 1]) || r === (e.s < 0 ? 8 : 7)))),
                (p.length = t),
                c)
            )
                for (; ++p[--t] > s - 1; ) (p[t] = 0), t || (++o, p.unshift(1));
            for (d = p.length; !p[d - 1]; --d);
            for (u = 0, f = ""; u < d; u++) f += a.charAt(p[u]);
            if (m) {
                if (d > 1)
                    if (16 == n || 8 == n) {
                        for (u = 16 == n ? 4 : 3, --d; d % u; d++) f += "0";
                        for (d = (p = Z(f, s, n)).length; !p[d - 1]; --d);
                        for (u = 1, f = "1."; u < d; u++) f += a.charAt(p[u]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o; ) f = "0" + f;
                f = "0." + f;
            } else if (++o > d) for (o -= d; o--; ) f += "0";
            else o < d && (f = f.slice(0, o) + "." + f.slice(o));
        } else f = m ? "0p+0" : "0";
        f = (16 == n ? "0x" : 2 == n ? "0b" : 8 == n ? "0o" : "") + f;
    } else f = G(e);
    return e.s < 0 ? "-" + f : f;
}
function H(e, n) {
    if (e.length > n) return (e.length = n), !0;
}
function K(e) {
    return new this(e).abs();
}
function V(e) {
    return new this(e).acos();
}
function W(e) {
    return new this(e).acosh();
}
function Y(e, n) {
    return new this(e).plus(n);
}
function Q(e) {
    return new this(e).asin();
}
function X(e) {
    return new this(e).asinh();
}
function ee(e) {
    return new this(e).atan();
}
function en(e) {
    return new this(e).atanh();
}
function et(e, n) {
    (e = new this(e)), (n = new this(n));
    var t,
        i = this.precision,
        r = this.rounding,
        a = i + 4;
    return (
        e.s && n.s
            ? e.d || n.d
                ? !n.d || e.isZero()
                    ? ((t = n.s < 0 ? M(this, i, r) : new this(0)).s = e.s)
                    : !e.d || n.isZero()
                      ? ((t = M(this, a, 1).times(0.5)).s = e.s)
                      : n.s < 0
                        ? ((this.precision = a),
                          (this.rounding = 1),
                          (t = this.atan(T(e, n, a, 1))),
                          (n = M(this, a, 1)),
                          (this.precision = i),
                          (this.rounding = r),
                          (t = e.s < 0 ? t.minus(n) : t.plus(n)))
                        : (t = this.atan(T(e, n, a, 1)))
                : ((t = M(this, a, 1).times(n.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (t = new this(NaN)),
        t
    );
}
function ei(e) {
    return new this(e).cbrt();
}
function er(e) {
    return A((e = new this(e)), e.e + 1, 2);
}
function ea(e, n, t) {
    return new this(e).clamp(n, t);
}
function es(e) {
    if (!e || "object" != typeof e) throw Error(d + "Object expected");
    var n,
        t,
        i,
        r = !0 === e.defaults,
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
    for (n = 0; n < a.length; n += 3)
        if (((t = a[n]), r && (this[t] = u[t]), void 0 !== (i = e[t])))
            if (_(i) === i && i >= a[n + 1] && i <= a[n + 2]) this[t] = i;
            else throw Error(c + t + ": " + i);
    if (((t = "crypto"), r && (this[t] = u[t]), void 0 !== (i = e[t])))
        if (!0 === i || !1 === i || 0 === i || 1 === i)
            if (i)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = !0;
                else throw Error(p);
            else this[t] = !1;
        else throw Error(c + t + ": " + i);
    return this;
}
function eo(e) {
    return new this(e).cos();
}
function eu(e) {
    return new this(e).cosh();
}
function el(e, n) {
    return new this(e).div(n);
}
function ed(e) {
    return new this(e).exp();
}
function ec(e) {
    return A((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        n,
        t = new this(0);
    for (e = 0, l = !1; e < arguments.length; )
        if (((n = new this(arguments[e++])), n.d)) t.d && (t = t.plus(n.times(n)));
        else {
            if (n.s) return (l = !0), new this(1 / 0);
            t = n;
        }
    return (l = !0), t.sqrt();
}
function ep(e) {
    return e instanceof eI || (e && e.toStringTag === h) || !1;
}
function eh(e) {
    return new this(e).ln();
}
function e_(e, n) {
    return new this(e).log(n);
}
function em(e) {
    return new this(e).log(2);
}
function ey(e) {
    return new this(e).log(10);
}
function eg() {
    return P(this, arguments, -1);
}
function ew() {
    return P(this, arguments, 1);
}
function ev(e, n) {
    return new this(e).mod(n);
}
function eb(e, n) {
    return new this(e).mul(n);
}
function ez(e, n) {
    return new this(e).pow(n);
}
function eS(e) {
    var n,
        t,
        i,
        r,
        a = 0,
        s = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : N(e, 1, 1e9), (i = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (n = crypto.getRandomValues(new Uint32Array(i)); a < i; )
                (r = n[a]) >= 429e7 ? (n[a] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[a++] = r % 1e7);
        else if (crypto.randomBytes) {
            for (n = crypto.randomBytes((i *= 4)); a < i; )
                (r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((127 & n[a + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(n, a)
                    : (o.push(r % 1e7), (a += 4));
            a = i / 4;
        } else throw Error(p);
    else for (; a < i; ) o[a++] = (1e7 * Math.random()) | 0;
    for (i = o[--a], e %= 7, i && e && ((r = m(10, 7 - e)), (o[a] = ((i / r) | 0) * r)); 0 === o[a]; a--) o.pop();
    if (a < 0) (t = 0), (o = [0]);
    else {
        for (t = -1; 0 === o[0]; t -= 7) o.shift();
        for (i = 1, r = o[0]; r >= 10; r /= 10) i++;
        i < 7 && (t -= 7 - i);
    }
    return (s.e = t), (s.d = o), s;
}
function ek(e) {
    return A((e = new this(e)), e.e + 1, this.rounding);
}
function eN(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eE(e) {
    return new this(e).sin();
}
function eZ(e) {
    return new this(e).sinh();
}
function eT(e) {
    return new this(e).sqrt();
}
function eA(e, n) {
    return new this(e).sub(n);
}
function ex() {
    var e = 0,
        n = arguments,
        t = new this(n[0]);
    for (l = !1; t.s && ++e < n.length; ) t = t.plus(n[e]);
    return (l = !0), A(t, this.precision, this.rounding);
}
function eO(e) {
    return new this(e).tan();
}
function e$(e) {
    return new this(e).tanh();
}
function eM(e) {
    return A((e = new this(e)), e.e + 1, 1);
}
(S[Symbol.for("nodejs.util.inspect.custom")] = S.toString), (S[Symbol.toStringTag] = "Decimal");
var eI = (S.constructor = (function e(n) {
    var t, i, r;
    function a(e) {
        var n, t, i;
        if (!(this instanceof a)) return new a(e);
        if (((this.constructor = a), ep(e))) {
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
        if ("number" == (i = typeof e)) {
            if (0 === e) {
                (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (n = 0, t = e; t >= 10; t /= 10) n++;
                l
                    ? n > a.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : n < a.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = n), (this.d = [e]))
                    : ((this.e = n), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                e || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
            }
            return j(this, e.toString());
        }
        if ("string" === i)
            return (
                45 === (t = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === t && (e = e.slice(1)), (this.s = 1)),
                v.test(e)
                    ? j(this, e)
                    : (function (e, n) {
                          var t, i, r, a, s, o, u, d, f;
                          if (n.indexOf("_") > -1) {
                              if (((n = n.replace(/(\d)_(?=\d)/g, "$1")), v.test(n))) return j(e, n);
                          } else if ("Infinity" === n || "NaN" === n)
                              return +n || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (g.test(n)) (t = 16), (n = n.toLowerCase());
                          else if (y.test(n)) t = 2;
                          else if (w.test(n)) t = 8;
                          else throw Error(c + n);
                          for (
                              (a = n.search(/p/i)) > 0
                                  ? ((u = +n.slice(a + 1)), (n = n.substring(2, a)))
                                  : (n = n.slice(2)),
                                  s = (a = n.indexOf(".")) >= 0,
                                  i = e.constructor,
                                  s &&
                                      ((a = (o = (n = n.replace(".", "")).length) - a), (r = C(i, new i(t), a, 2 * a))),
                                  a = f = (d = Z(n, t, 1e7)).length - 1;
                              0 === d[a];
                              --a
                          )
                              d.pop();
                          return a < 0
                              ? new i(0 * e.s)
                              : ((e.e = O(d, f)),
                                (e.d = d),
                                (l = !1),
                                s && (e = T(e, r, 4 * o)),
                                u && (e = e.times(54 > Math.abs(u) ? m(2, u) : eI.pow(2, u))),
                                (l = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === i) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), j(this, e.toString());
        throw Error(c + e);
    }
    if (
        ((a.prototype = S),
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
        (a.config = a.set = es),
        (a.clone = e),
        (a.isDecimal = ep),
        (a.abs = K),
        (a.acos = V),
        (a.acosh = W),
        (a.add = Y),
        (a.asin = Q),
        (a.asinh = X),
        (a.atan = ee),
        (a.atanh = en),
        (a.atan2 = et),
        (a.cbrt = ei),
        (a.ceil = er),
        (a.clamp = ea),
        (a.cos = eo),
        (a.cosh = eu),
        (a.div = el),
        (a.exp = ed),
        (a.floor = ec),
        (a.hypot = ef),
        (a.ln = eh),
        (a.log = e_),
        (a.log10 = ey),
        (a.log2 = em),
        (a.max = eg),
        (a.min = ew),
        (a.mod = ev),
        (a.mul = eb),
        (a.pow = ez),
        (a.random = eS),
        (a.round = ek),
        (a.sign = eN),
        (a.sin = eE),
        (a.sinh = eZ),
        (a.sqrt = eT),
        (a.sub = eA),
        (a.sum = ex),
        (a.tan = eO),
        (a.tanh = e$),
        (a.trunc = eM),
        void 0 === n && (n = {}),
        n && !0 !== n.defaults)
    )
        for (
            t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            t < r.length;
        )
            n.hasOwnProperty((i = r[t++])) || (n[i] = this[i]);
    return a.config(n), a;
})(u));
(s = new eI(s)), (o = new eI(o));
