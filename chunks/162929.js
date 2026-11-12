var r,
    i,
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
    h = d + "crypto unavailable",
    p = "[object Decimal]",
    _ = Math.floor,
    m = Math.pow,
    y = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    w = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    v = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    b = s.length - 1,
    k = o.length - 1,
    S = { toStringTag: p };
function z(e) {
    var t,
        n,
        r,
        i = e.length - 1,
        a = "",
        s = e[0];
    if (i > 0) {
        for (a += s, t = 1; t < i; t++) ((n = 7 - (r = e[t] + "").length) && (a += C(n)), (a += r));
        (n = 7 - (r = (s = e[t]) + "").length) && (a += C(n));
    } else if (0 === s) return "0";
    for (; s % 10 == 0;) s /= 10;
    return a + s;
}
function E(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(c + e);
}
function O(e, t, n, r) {
    var i, a, s, o;
    for (a = e[0]; a >= 10; a /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (i = 0)) : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
        (a = m(10, 7 - t)),
        (o = (e[i] % a) | 0),
        null == r
            ? t < 3
                ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                  (s = (n < 4 && 99999 == o) || (n > 3 && 49999 == o) || 5e4 == o || 0 == o))
                : (s =
                      (((n < 4 && o + 1 == a) || (n > 3 && o + 1 == a / 2)) &&
                          ((e[i + 1] / a / 100) | 0) == m(10, t - 2) - 1) ||
                      ((o == a / 2 || 0 == o) && ((e[i + 1] / a / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (o = (o / 1e3) | 0) : 1 == t ? (o = (o / 100) | 0) : 2 == t && (o = (o / 10) | 0),
                (s = ((r || n < 4) && 9999 == o) || (!r && n > 3 && 4999 == o)))
              : (s =
                    (((r || n < 4) && o + 1 == a) || (!r && n > 3 && o + 1 == a / 2)) &&
                    ((e[i + 1] / a / 1e3) | 0) == m(10, t - 3) - 1),
        s
    );
}
function A(e, t, n) {
    for (var r, i, s = [0], o = 0, u = e.length; o < u;) {
        for (i = s.length; i--;) s[i] *= t;
        for (s[0] += a.indexOf(e.charAt(o++)), r = 0; r < s.length; r++)
            s[r] > n - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), (s[r + 1] += (s[r] / n) | 0), (s[r] %= n));
    }
    return s.reverse();
}
((S.absoluteValue = S.abs =
    function () {
        var e = new this.constructor(this);
        return (e.s < 0 && (e.s = 1), M(e));
    }),
    (S.ceil = function () {
        return M(new this.constructor(this), this.e + 1, 2);
    }),
    (S.clampedTo = S.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(0 / 0);
            if (e.gt(t)) throw Error(c + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (S.comparedTo = S.cmp =
        function (e) {
            var t,
                n,
                r,
                i,
                a = this.d,
                s = (e = new this.constructor(e)).d,
                o = this.s,
                u = e.s;
            if (!a || !s) return o && u ? (o !== u ? o : a === s ? 0 : !a ^ (o < 0) ? 1 : -1) : 0 / 0;
            if (!a[0] || !s[0]) return a[0] ? o : s[0] ? -u : 0;
            if (o !== u) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (r = a.length, t = 0, n = r < (i = s.length) ? r : i; t < n; ++t)
                if (a[t] !== s[t]) return (a[t] > s[t]) ^ (o < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (o < 0) ? 1 : -1;
        }),
    (S.cosine = S.cos =
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
                          ((r = t.d.length) < 32
                              ? (i = (1 / B(4, (n = Math.ceil(r / 3)))).toString())
                              : ((n = 16), (i = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = U(e, 1, t.times(i), new e(1))));
                          for (var a = n; a--;) {
                              var s = t.times(t);
                              t = s.times(s).minus(s).times(8).plus(1);
                          }
                          return ((e.precision -= n), t);
                      })(r, K(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      M(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(0 / 0);
        }),
    (S.cubeRoot = S.cbrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                d,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                l = !1,
                    (a = this.s * m(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(a)
                        ? (r = new c(a.toString()))
                        : ((n = z(this.d)),
                          (a = ((e = this.e) - n.length + 1) % 3) && (n += 1 == a || -2 == a ? "0" : "00"),
                          (a = m(n, 1 / 3)),
                          (e = _((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new c(
                              (n = 1 / 0 == a ? "5e" + e : (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    s = (e = c.precision) + 3;
                ;
            )
                if (
                    ((r = T((d = (u = (o = r).times(o).times(o)).plus(this)).plus(this).times(o), d.plus(u), s + 2, 1)),
                    z(o.d).slice(0, s) === (n = z(r.d)).slice(0, s))
                ) {
                    if ("9999" != (n = n.slice(s - 3, s + 1)) && (i || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (M(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!i && (M(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        r = o;
                        break;
                    }
                    ((s += 4), (i = 1));
                }
            return ((l = !0), M(r, e, c.rounding, t));
        }),
    (S.decimalPlaces = S.dp =
        function () {
            var e,
                t = this.d,
                n = 0 / 0;
            if (t) {
                if (((n = ((e = t.length - 1) - _(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (S.dividedBy = S.div =
        function (e) {
            return T(this, new this.constructor(e));
        }),
    (S.dividedToIntegerBy = S.divToInt =
        function (e) {
            var t = this.constructor;
            return M(T(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (S.equals = S.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (S.floor = function () {
        return M(new this.constructor(this), this.e + 1, 3);
    }),
    (S.greaterThan = S.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (S.greaterThanOrEqualTo = S.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (S.hyperbolicCosine = S.cosh =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a = this,
                s = a.constructor,
                o = new s(1);
            if (!a.isFinite()) return new s(a.s ? 1 / 0 : 0 / 0);
            if (a.isZero()) return o;
            ((n = s.precision),
                (r = s.rounding),
                (s.precision = n + Math.max(a.e, a.sd()) + 4),
                (s.rounding = 1),
                (i = a.d.length) < 32
                    ? (t = (1 / B(4, (e = Math.ceil(i / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (a = U(s, 1, a.times(t), new s(1), !0)));
            for (var u, l = e, d = new s(8); l--;) ((u = a.times(a)), (a = o.minus(u.times(d.minus(u.times(d))))));
            return M(a, (s.precision = n), (s.rounding = r), !0);
        }),
    (S.hyperbolicSine = S.sinh =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                a = i.constructor;
            if (!i.isFinite() || i.isZero()) return new a(i);
            if (
                ((t = a.precision),
                (n = a.rounding),
                (a.precision = t + Math.max(i.e, i.sd()) + 4),
                (a.rounding = 1),
                (r = i.d.length) < 3)
            )
                i = U(a, 2, i, i, !0);
            else {
                ((e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (i = U(a, 2, (i = i.times(1 / B(5, e))), i, !0)));
                for (var s, o = new a(5), u = new a(16), l = new a(20); e--;)
                    ((s = i.times(i)), (i = i.times(o.plus(s.times(u.times(s).plus(l))))));
            }
            return ((a.precision = t), (a.rounding = n), M(i, t, n, !0));
        }),
    (S.hyperbolicTangent = S.tanh =
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
                      T(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (S.inverseCosine = S.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                r = t.precision,
                i = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? L(t, r, i)
                        : new t(0)
                    : new t(0 / 0)
                : e.isZero()
                  ? L(t, r + 4, i).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = i),
                    e.times(2));
        }),
    (S.inverseHyperbolicCosine = S.acosh =
        function () {
            var e,
                t,
                n = this,
                r = n.constructor;
            return n.lte(1)
                ? new r(n.eq(1) ? 0 : 0 / 0)
                : n.isFinite()
                  ? ((e = r.precision),
                    (t = r.rounding),
                    (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                    (r.rounding = 1),
                    (l = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (l = !0),
                    (r.precision = e),
                    (r.rounding = t),
                    n.ln())
                  : new r(n);
        }),
    (S.inverseHyperbolicSine = S.asinh =
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
                  (l = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (l = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln());
        }),
    (S.inverseHyperbolicTangent = S.atanh =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                a = i.constructor;
            return i.isFinite()
                ? i.e >= 0
                    ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : 0 / 0)
                    : ((e = a.precision), (t = a.rounding), Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                      ? M(new a(i), e, t, !0)
                      : ((a.precision = n = r - i.e),
                        (i = T(i.plus(1), new a(1).minus(i), n + e, 1)),
                        (a.precision = e + 4),
                        (a.rounding = 1),
                        (i = i.ln()),
                        (a.precision = e),
                        (a.rounding = t),
                        i.times(0.5))
                : new a(0 / 0);
        }),
    (S.inverseSine = S.asin =
        function () {
            var e,
                t,
                n,
                r,
                i = this,
                a = i.constructor;
            return i.isZero()
                ? new a(i)
                : ((t = i.abs().cmp(1)), (n = a.precision), (r = a.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = L(a, n + 4, r).times(0.5)).s = i.s), e)
                      : new a(0 / 0)
                  : ((a.precision = n + 6),
                    (a.rounding = 1),
                    (i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                    (a.precision = n),
                    (a.rounding = r),
                    i.times(2));
        }),
    (S.inverseTangent = S.atan =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                d = this,
                c = d.constructor,
                f = c.precision,
                h = c.rounding;
            if (d.isFinite()) {
                if (d.isZero()) return new c(d);
                else if (d.abs().eq(1) && f + 4 <= k) return (((s = L(c, f + 4, h).times(0.25)).s = d.s), s);
            } else {
                if (!d.s) return new c(0 / 0);
                if (f + 4 <= k) return (((s = L(c, f + 4, h).times(0.5)).s = d.s), s);
            }
            for (c.precision = o = f + 10, c.rounding = 1, e = n = Math.min(28, (o / 7 + 2) | 0); e; --e)
                d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (l = !1, t = Math.ceil(o / 7), r = 1, u = d.times(d), s = new c(d), i = d; -1 !== e;)
                if (
                    ((i = i.times(u)),
                    (a = s.minus(i.div((r += 2)))),
                    (i = i.times(u)),
                    void 0 !== (s = a.plus(i.div((r += 2)))).d[t])
                )
                    for (e = t; s.d[e] === a.d[e] && e--;);
            return (n && (s = s.times(2 << (n - 1))), (l = !0), M(s, (c.precision = f), (c.rounding = h), !0));
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
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u = this.constructor,
                d = u.precision,
                c = u.rounding;
            if (null == e) ((e = new u(10)), (t = !0));
            else {
                if (((n = (e = new u(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new u(0 / 0);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new u(n && !n[0] ? -1 / 0 : 1 != this.s ? 0 / 0 : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) i = !0;
                else {
                    for (r = n[0]; r % 10 == 0;) r /= 10;
                    i = 1 !== r;
                }
            if (((l = !1), O((o = T((a = R(this, (s = d + 5))), t ? $(u, s + 10) : R(e, s), s, 1)).d, (r = d), c)))
                do
                    if (((s += 10), (o = T((a = R(this, s)), t ? $(u, s + 10) : R(e, s), s, 1)), !i)) {
                        +z(o.d).slice(r + 1, r + 15) + 1 == 1e14 && (o = M(o, d + 1, 0));
                        break;
                    }
                while (O(o.d, (r += 10), c));
            return ((l = !0), M(o, d, c));
        }),
    (S.minus = S.sub =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                d,
                c,
                f,
                h,
                p = this.constructor;
            if (((e = new p(e)), !this.d || !e.d))
                return (
                    this.s && e.s
                        ? this.d
                            ? (e.s = -e.s)
                            : (e = new p(e.d || this.s !== e.s ? this : 0 / 0))
                        : (e = new p(0 / 0)),
                    e
                );
            if (this.s != e.s) return ((e.s = -e.s), this.plus(e));
            if (((d = this.d), (h = e.d), (o = p.precision), (u = p.rounding), !d[0] || !h[0])) {
                if (h[0]) e.s = -e.s;
                else {
                    if (!d[0]) return new p(3 === u ? -0 : 0);
                    e = new p(this);
                }
                return l ? M(e, o, u) : e;
            }
            if (((n = _(e.e / 7)), (c = _(this.e / 7)), (d = d.slice()), (a = c - n))) {
                for (
                    (f = a < 0) ? ((t = d), (a = -a), (s = h.length)) : ((t = h), (n = c), (s = d.length)),
                        a > (r = Math.max(Math.ceil(o / 7), s) + 2) && ((a = r), (t.length = 1)),
                        t.reverse(),
                        r = a;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((f = (r = d.length) < (s = h.length)) && (s = r), r = 0; r < s; r++)
                    if (d[r] != h[r]) {
                        f = d[r] < h[r];
                        break;
                    }
                a = 0;
            }
            for (f && ((t = d), (d = h), (h = t), (e.s = -e.s)), s = d.length, r = h.length - s; r > 0; --r) d[s++] = 0;
            for (r = h.length; r > a;) {
                if (d[--r] < h[r]) {
                    for (i = r; i && 0 === d[--i];) d[i] = 1e7 - 1;
                    (--d[i], (d[r] += 1e7));
                }
                d[r] -= h[r];
            }
            for (; 0 === d[--s];) d.pop();
            for (; 0 === d[0]; d.shift()) --n;
            return d[0] ? ((e.d = d), (e.e = P(d, n)), l ? M(e, o, u) : e) : new p(3 === u ? -0 : 0);
        }),
    (S.modulo = S.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((l = !1),
                      9 == n.modulo
                          ? ((t = T(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = T(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (l = !0),
                      this.minus(t))
                    : M(new n(this), n.precision, n.rounding)
                : new n(0 / 0);
        }),
    (S.naturalExponential = S.exp =
        function () {
            return j(this);
        }),
    (S.naturalLogarithm = S.ln =
        function () {
            return R(this);
        }),
    (S.negated = S.neg =
        function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s), M(e));
        }),
    (S.plus = S.add =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                d,
                c,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return (
                    this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : 0 / 0)) : (e = new f(0 / 0)), e
                );
            if (this.s != e.s) return ((e.s = -e.s), this.minus(e));
            if (((d = this.d), (c = e.d), (o = f.precision), (u = f.rounding), !d[0] || !c[0]))
                return (c[0] || (e = new f(this)), l ? M(e, o, u) : e);
            if (((a = _(this.e / 7)), (r = _(e.e / 7)), (d = d.slice()), (i = a - r))) {
                for (
                    i < 0 ? ((n = d), (i = -i), (s = c.length)) : ((n = c), (r = a), (s = d.length)),
                        i > (s = (a = Math.ceil(o / 7)) > s ? a + 1 : s + 1) && ((i = s), (n.length = 1)),
                        n.reverse();
                    i--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((s = d.length) - (i = c.length) < 0 && ((i = s), (n = c), (c = d), (d = n)), t = 0; i;)
                ((t = ((d[--i] = d[i] + c[i] + t) / 1e7) | 0), (d[i] %= 1e7));
            for (t && (d.unshift(t), ++r), s = d.length; 0 == d[--s];) d.pop();
            return ((e.d = d), (e.e = P(d, r)), l ? M(e, o, u) : e);
        }),
    (S.precision = S.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
            return (this.d ? ((t = I(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = 0 / 0), t);
        }),
    (S.round = function () {
        var e = this.constructor;
        return M(new e(this), this.e + 1, e.rounding);
    }),
    (S.sine = S.sin =
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
                          if (r < 3) return t.isZero() ? t : U(e, 2, t, t);
                          ((n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                              (t = U(e, 2, (t = t.times(1 / B(5, n))), t)));
                          for (var i, a = new e(5), s = new e(16), o = new e(20); n--;)
                              ((i = t.times(t)), (t = t.times(a.plus(i.times(s.times(i).minus(o))))));
                          return t;
                      })(r, K(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      M(i > 2 ? n.neg() : n, e, t, !0))
                : new r(0 / 0);
        }),
    (S.squareRoot = S.sqrt =
        function () {
            var e,
                t,
                n,
                r,
                i,
                a,
                s = this.d,
                o = this.e,
                u = this.s,
                d = this.constructor;
            if (1 !== u || !s || !s[0]) return new d(!u || (u < 0 && (!s || s[0])) ? 0 / 0 : s ? this : 1 / 0);
            for (
                l = !1,
                    0 == (u = Math.sqrt(+this)) || 1 / 0 == u
                        ? (((t = z(s)).length + o) % 2 == 0 && (t += "0"),
                          (u = Math.sqrt(t)),
                          (o = _((o + 1) / 2) - (o < 0 || o % 2)),
                          (r = new d(
                              (t = 1 / 0 == u ? "5e" + o : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (r = new d(u.toString())),
                    n = (o = d.precision) + 3;
                ;
            )
                if (
                    ((r = (a = r).plus(T(this, a, n + 2, 1)).times(0.5)),
                    z(a.d).slice(0, n) === (t = z(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (M(r, o + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!i && (M(a, o + 1, 0), a.times(a).eq(this))) {
                        r = a;
                        break;
                    }
                    ((n += 4), (i = 1));
                }
            return ((l = !0), M(r, o, d.rounding, e));
        }),
    (S.tangent = S.tan =
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
                      (n = T(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      M(2 == i || 4 == i ? n.neg() : n, e, t, !0))
                : new r(0 / 0);
        }),
    (S.times = S.mul =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                d,
                c = this.constructor,
                f = this.d,
                h = (e = new c(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !h || !h[0]))
                return new c(!e.s || (f && !f[0] && !h) || (h && !h[0] && !f) ? 0 / 0 : !f || !h ? e.s / 0 : 0 * e.s);
            for (
                n = _(this.e / 7) + _(e.e / 7),
                    (u = f.length) < (d = h.length) && ((a = f), (f = h), (h = a), (s = u), (u = d), (d = s)),
                    a = [],
                    r = s = u + d;
                r--;
            )
                a.push(0);
            for (r = d; --r >= 0;) {
                for (t = 0, i = u + r; i > r;)
                    ((o = a[i] + h[r] * f[i - r - 1] + t), (a[i--] = (o % 1e7) | 0), (t = (o / 1e7) | 0));
                a[i] = ((a[i] + t) % 1e7) | 0;
            }
            for (; !a[--s];) a.pop();
            return (t ? ++n : a.shift(), (e.d = a), (e.e = P(a, n)), l ? M(e, c.precision, c.rounding) : e);
        }),
    (S.toBinary = function (e, t) {
        return q(this, 2, e, t);
    }),
    (S.toDecimalPlaces = S.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (E(e, 0, 1e9), void 0 === t ? (t = r.rounding) : E(t, 0, 8), M(n, e + n.e + 1, t));
        }),
    (S.toExponential = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = x(r, !0))
                : (E(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : E(t, 0, 8),
                  (n = x((r = M(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (S.toFixed = function (e, t) {
        var n,
            r,
            i = this.constructor;
        return (
            void 0 === e
                ? (n = x(this))
                : (E(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : E(t, 0, 8),
                  (n = x((r = M(new i(this), e + this.e + 1, t)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (S.toFraction = function (e) {
        var t,
            n,
            r,
            i,
            a,
            s,
            o,
            u,
            d,
            f,
            h,
            p,
            _ = this.d,
            y = this.constructor;
        if (!_) return new y(this);
        if (
            ((d = n = new y(1)),
            (r = u = new y(0)),
            (s = (a = (t = new y(r)).e = I(_) - this.e - 1) % 7),
            (t.d[0] = m(10, s < 0 ? 7 + s : s)),
            null == e)
        )
            e = a > 0 ? t : d;
        else {
            if (!(o = new y(e)).isInt() || o.lt(d)) throw Error(c + o);
            e = o.gt(t) ? (a > 0 ? t : d) : o;
        }
        for (
            l = !1, o = new y(z(_)), f = y.precision, y.precision = a = 7 * _.length * 2;
            (h = T(o, t, 0, 1, 1)), 1 != (i = n.plus(h.times(r))).cmp(e);
        )
            ((n = r), (r = i), (i = d), (d = u.plus(h.times(i))), (u = i), (i = t), (t = o.minus(h.times(i))), (o = i));
        return (
            (i = T(e.minus(n), r, 0, 1, 1)),
            (u = u.plus(i.times(d))),
            (n = n.plus(i.times(r))),
            (u.s = d.s = this.s),
            (p =
                1 >
                T(d, r, a, 1)
                    .minus(this)
                    .abs()
                    .cmp(T(u, n, a, 1).minus(this).abs())
                    ? [d, r]
                    : [u, n]),
            (y.precision = f),
            (l = !0),
            p
        );
    }),
    (S.toHexadecimal = S.toHex =
        function (e, t) {
            return q(this, 16, e, t);
        }),
    (S.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            ((e = new r(1)), (t = r.rounding));
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : E(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return (e.s && (e.s = n.s), e);
        }
        return (e.d[0] ? ((l = !1), (n = T(n, e, 0, t, 1).times(e)), (l = !0), M(n)) : ((e.s = n.s), (n = e)), n);
    }),
    (S.toNumber = function () {
        return +this;
    }),
    (S.toOctal = function (e, t) {
        return q(this, 8, e, t);
    }),
    (S.toPower = S.pow =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o = this,
                u = o.constructor,
                d = +(e = new u(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(m(+o, d));
            if ((o = new u(o)).eq(1)) return o;
            if (((r = u.precision), (a = u.rounding), e.eq(1))) return M(o, r, a);
            if ((t = _(e.e / 7)) >= e.d.length - 1 && (n = d < 0 ? -d : d) <= 0x1fffffffffffff)
                return ((i = N(u, o, n, r)), e.s < 0 ? new u(1).div(i) : M(i, r, a));
            if ((s = o.s) < 0) {
                if (t < e.d.length - 1) return new u(0 / 0);
                if (((1 & e.d[t]) == 0 && (s = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return ((o.s = s), o);
            }
            return (t =
                0 != (n = m(+o, d)) && isFinite(n)
                    ? new u(n + "").e
                    : _(d * (Math.log("0." + z(o.d)) / Math.LN10 + o.e + 1))) >
                u.maxE + 1 || t < u.minE - 1
                ? new u(t > 0 ? s / 0 : 0)
                : ((l = !1),
                  (u.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (i = j(e.times(R(o, r + n)), r)).d &&
                      O((i = M(i, r + 5, 1)).d, r, a) &&
                      ((t = r + 10),
                      +z((i = M(j(e.times(R(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (i = M(i, r + 1, 0))),
                  (i.s = s),
                  (l = !0),
                  (u.rounding = a),
                  M(i, r, a));
        }),
    (S.toPrecision = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = x(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
                : (E(e, 1, 1e9),
                  void 0 === t ? (t = i.rounding) : E(t, 0, 8),
                  (n = x((r = M(new i(r), e, t)), e <= r.e || r.e <= i.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (S.toSignificantDigits = S.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (E(e, 1, 1e9), void 0 === t ? (t = n.rounding) : E(t, 0, 8)),
                M(new n(this), e, t)
            );
        }),
    (S.toString = function () {
        var e = this.constructor,
            t = x(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (S.truncated = S.trunc =
        function () {
            return M(new this.constructor(this), this.e + 1, 1);
        }),
    (S.valueOf = S.toJSON =
        function () {
            var e = this.constructor,
                t = x(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        }));
var T = (function () {
    function e(e, t, n) {
        var r,
            i = 0,
            a = e.length;
        for (e = e.slice(); a--;) ((r = e[a] * t + i), (e[a] = (r % n) | 0), (i = (r / n) | 0));
        return (i && e.unshift(i), e);
    }
    function t(e, t, n, r) {
        var i, a;
        if (n != r) a = n > r ? 1 : -1;
        else
            for (i = a = 0; i < n; i++)
                if (e[i] != t[i]) {
                    a = e[i] > t[i] ? 1 : -1;
                    break;
                }
        return a;
    }
    function n(e, t, n, r) {
        for (var i = 0; n--;) ((e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]));
        for (; !e[0] && e.length > 1;) e.shift();
    }
    return function (i, a, s, o, u, l) {
        var d,
            c,
            f,
            h,
            p,
            m,
            y,
            g,
            w,
            v,
            b,
            k,
            S,
            z,
            E,
            O,
            A,
            T,
            x,
            P,
            $ = i.constructor,
            L = i.s == a.s ? 1 : -1,
            I = i.d,
            C = a.d;
        if (!I || !I[0] || !C || !C[0])
            return new $(!i.s || !a.s || (I ? C && I[0] == C[0] : !C) ? 0 / 0 : (I && 0 == I[0]) || !C ? 0 * L : L / 0);
        for (
            l ? ((p = 1), (c = i.e - a.e)) : ((l = 1e7), (p = 7), (c = _(i.e / p) - _(a.e / p))),
                x = C.length,
                A = I.length,
                v = (w = new $(L)).d = [],
                f = 0;
            C[f] == (I[f] || 0);
            f++
        );
        if (
            (C[f] > (I[f] || 0) && c--,
            null == s ? ((z = s = $.precision), (o = $.rounding)) : (z = u ? s + (i.e - a.e) + 1 : s),
            z < 0)
        )
            (v.push(1), (m = !0));
        else {
            if (((z = (z / p + 2) | 0), (f = 0), 1 == x)) {
                for (h = 0, C = C[0], z++; (f < A || h) && z--; f++)
                    ((E = h * l + (I[f] || 0)), (v[f] = (E / C) | 0), (h = (E % C) | 0));
                m = h || f < A;
            } else {
                for (
                    (h = (l / (C[0] + 1)) | 0) > 1 &&
                        ((C = e(C, h, l)), (I = e(I, h, l)), (x = C.length), (A = I.length)),
                        O = x,
                        k = (b = I.slice(0, x)).length;
                    k < x;
                )
                    b[k++] = 0;
                ((P = C.slice()).unshift(0), (T = C[0]), C[1] >= l / 2 && ++T);
                do
                    ((h = 0),
                        (d = t(C, b, x, k)) < 0
                            ? ((S = b[0]),
                              x != k && (S = S * l + (b[1] || 0)),
                              (h = (S / T) | 0) > 1
                                  ? (h >= l && (h = l - 1),
                                    (g = (y = e(C, h, l)).length),
                                    (k = b.length),
                                    1 == (d = t(y, b, g, k)) && (h--, n(y, x < g ? P : C, g, l)))
                                  : (0 == h && (d = h = 1), (y = C.slice())),
                              (g = y.length) < k && y.unshift(0),
                              n(b, y, k, l),
                              -1 == d && ((k = b.length), (d = t(C, b, x, k)) < 1 && (h++, n(b, x < k ? P : C, k, l))),
                              (k = b.length))
                            : 0 === d && (h++, (b = [0])),
                        (v[f++] = h),
                        d && b[0] ? (b[k++] = I[O] || 0) : ((b = [I[O]]), (k = 1)));
                while ((O++ < A || void 0 !== b[0]) && z--);
                m = void 0 !== b[0];
            }
            v[0] || v.shift();
        }
        if (1 == p) ((w.e = c), (r = m));
        else {
            for (f = 1, h = v[0]; h >= 10; h /= 10) f++;
            ((w.e = f + c * p - 1), M(w, u ? s + w.e + 1 : s, o, m));
        }
        return w;
    };
})();
function M(e, t, n, r) {
    var i,
        a,
        s,
        o,
        u,
        d,
        c,
        f,
        h,
        p = e.constructor;
    e: if (null != t) {
        if (!(f = e.d)) return e;
        for (i = 1, o = f[0]; o >= 10; o /= 10) i++;
        if ((a = t - i) < 0) ((a += 7), (s = t), (u = (((c = f[(h = 0)]) / m(10, i - s - 1)) % 10) | 0));
        else if ((h = Math.ceil((a + 1) / 7)) >= (o = f.length))
            if (r) {
                for (; o++ <= h;) f.push(0);
                ((c = u = 0), (i = 1), (a %= 7), (s = a - 7 + 1));
            } else break e;
        else {
            for (c = o = f[h], i = 1; o >= 10; o /= 10) i++;
            ((a %= 7), (u = (s = a - 7 + i) < 0 ? 0 : ((c / m(10, i - s - 1)) % 10) | 0));
        }
        if (
            ((r = r || t < 0 || void 0 !== f[h + 1] || (s < 0 ? c : c % m(10, i - s - 1))),
            (d =
                n < 4
                    ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : u > 5 ||
                      (5 == u &&
                          (4 == n ||
                              r ||
                              (6 == n && ((a > 0 ? (s > 0 ? c / m(10, i - s) : 0) : f[h - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
        )
            return (
                (f.length = 0),
                d ? ((t -= e.e + 1), (f[0] = m(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == a
                ? ((f.length = h), (o = 1), h--)
                : ((f.length = h + 1),
                  (o = m(10, 7 - a)),
                  (f[h] = s > 0 ? (((c / m(10, i - s)) % m(10, s)) | 0) * o : 0)),
            d)
        )
            for (;;)
                if (0 == h) {
                    for (a = 1, s = f[0]; s >= 10; s /= 10) a++;
                    for (s = f[0] += o, o = 1; s >= 10; s /= 10) o++;
                    a != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                    break;
                } else {
                    if (((f[h] += o), 1e7 != f[h])) break;
                    ((f[h--] = 0), (o = 1));
                }
        for (a = f.length; 0 === f[--a];) f.pop();
    }
    return (l && (e.e > p.maxE ? ((e.d = null), (e.e = 0 / 0)) : e.e < p.minE && ((e.e = 0), (e.d = [0]))), e);
}
function x(e, t, n) {
    if (!e.isFinite()) return G(e);
    var r,
        i = e.e,
        a = z(e.d),
        s = a.length;
    return (
        t
            ? (n && (r = n - s) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + C(r))
                  : s > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((a = "0." + C(-i - 1) + a), n && (r = n - s) > 0 && (a += C(r)))
              : i >= s
                ? ((a += C(i + 1 - s)), n && (r = n - i - 1) > 0 && (a = a + "." + C(r)))
                : ((r = i + 1) < s && (a = a.slice(0, r) + "." + a.slice(r)),
                  n && (r = n - s) > 0 && (i + 1 === s && (a += "."), (a += C(r)))),
        a
    );
}
function P(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function $(e, t, n) {
    if (t > b) throw ((l = !0), n && (e.precision = n), Error(f));
    return M(new e(s), t, 1, !0);
}
function L(e, t, n) {
    if (t > k) throw Error(f);
    return M(new e(o), t, n, !0);
}
function I(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function C(e) {
    for (var t = ""; e--;) t += "0";
    return t;
}
function N(e, t, n, r) {
    var i,
        a = new e(1),
        s = Math.ceil(r / 7 + 4);
    for (l = !1; ;) {
        if ((n % 2 && H((a = a.times(t)).d, s) && (i = !0), 0 === (n = _(n / 2)))) {
            ((n = a.d.length - 1), i && 0 === a.d[n] && ++a.d[n]);
            break;
        }
        H((t = t.times(t)).d, s);
    }
    return ((l = !0), a);
}
function D(e) {
    return 1 & e.d[e.d.length - 1];
}
function Z(e, t, n) {
    for (var r, i, a = new e(t[0]), s = 0; ++s < t.length;) {
        if (!(i = new e(t[s])).s) {
            a = i;
            break;
        }
        ((r = a.cmp(i)) === n || (0 === r && a.s === n)) && (a = i);
    }
    return a;
}
function j(e, t) {
    var n,
        r,
        i,
        a,
        s,
        o,
        u,
        d = 0,
        c = 0,
        f = 0,
        h = e.constructor,
        p = h.rounding,
        _ = h.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new h(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((l = !1), (u = _)) : (u = t), o = new h(0.03125); e.e > -2;) ((e = e.times(o)), (f += 5));
    for (u += r = ((Math.log(m(2, f)) / Math.LN10) * 2 + 5) | 0, n = a = s = new h(1), h.precision = u; ;) {
        if (
            ((a = M(a.times(e), u, 1)),
            (n = n.times(++c)),
            z((o = s.plus(T(a, n, u, 1))).d).slice(0, u) === z(s.d).slice(0, u))
        ) {
            for (i = f; i--;) s = M(s.times(s), u, 1);
            if (null != t) return ((h.precision = _), s);
            if (!(d < 3 && O(s.d, u - r, p, d))) return M(s, (h.precision = _), p, (l = !0));
            ((h.precision = u += 10), (n = a = o = new h(1)), (c = 0), d++);
        }
        s = o;
    }
}
function R(e, t) {
    var n,
        r,
        i,
        a,
        s,
        o,
        u,
        d,
        c,
        f,
        h,
        p = 1,
        _ = e,
        m = _.d,
        y = _.constructor,
        g = y.rounding,
        w = y.precision;
    if (_.s < 0 || !m || !m[0] || (!_.e && 1 == m[0] && 1 == m.length))
        return new y(m && !m[0] ? -1 / 0 : 1 != _.s ? 0 / 0 : m ? 0 : _);
    if (
        (null == t ? ((l = !1), (c = w)) : (c = t),
        (y.precision = c += 10),
        (r = (n = z(m)).charAt(0)),
        !(15e14 > Math.abs((a = _.e))))
    )
        return (
            (d = $(y, c + 2, w).times(a + "")),
            (_ = R(new y(r + "." + n.slice(1)), c - 10).plus(d)),
            (y.precision = w),
            null == t ? M(_, w, g, (l = !0)) : _
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3);) ((r = (n = z((_ = _.times(e)).d)).charAt(0)), p++);
    for (
        a = _.e,
            r > 1 ? ((_ = new y("0." + n)), a++) : (_ = new y(r + "." + n.slice(1))),
            f = _,
            u = s = _ = T(_.minus(1), _.plus(1), c, 1),
            h = M(_.times(_), c, 1),
            i = 3;
        ;
    ) {
        if (((s = M(s.times(h), c, 1)), z((d = u.plus(T(s, new y(i), c, 1))).d).slice(0, c) === z(u.d).slice(0, c))) {
            if (
                ((u = u.times(2)),
                0 !== a && (u = u.plus($(y, c + 2, w).times(a + ""))),
                (u = T(u, new y(p), c, 1)),
                null != t)
            )
                return ((y.precision = w), u);
            if (!O(u.d, c - 10, g, o)) return M(u, (y.precision = w), g, (l = !0));
            ((y.precision = c += 10),
                (d = s = _ = T(f.minus(1), f.plus(1), c, 1)),
                (h = M(_.times(_), c, 1)),
                (i = o = 1));
        }
        ((u = d), (i += 2));
    }
}
function G(e) {
    return String((e.s * e.s) / 0);
}
function F(e, t) {
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
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i;) e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
        } else r -= i;
        for (; r--;) t += "0";
        (e.d.push(+t),
            l &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = 0 / 0))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0]))));
    } else ((e.e = 0), (e.d = [0]));
    return e;
}
function U(e, t, n, r, i) {
    var a,
        s,
        o,
        u,
        d = e.precision,
        c = Math.ceil(d / 7);
    for (l = !1, u = n.times(n), o = new e(r); ;) {
        if (
            ((s = T(o.times(u), new e(t++ * t++), d, 1)),
            (o = i ? r.plus(s) : r.minus(s)),
            (r = T(s.times(u), new e(t++ * t++), d, 1)),
            void 0 !== (s = o.plus(r)).d[c])
        ) {
            for (a = c; s.d[a] === o.d[a] && a--;);
            if (-1 == a) break;
        }
        ((a = o), (o = r), (r = s), (s = a));
    }
    return ((l = !0), (s.d.length = c + 1), s);
}
function B(e, t) {
    for (var n = e; --t;) n *= e;
    return n;
}
function K(e, t) {
    var n,
        r = t.s < 0,
        a = L(e, e.precision, 1),
        s = a.times(0.5);
    if ((t = t.abs()).lte(s)) return ((i = r ? 4 : 1), t);
    if ((n = t.divToInt(a)).isZero()) i = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(a))).lte(s)) return ((i = D(n) ? (r ? 2 : 3) : r ? 4 : 1), t);
        i = D(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(a).abs();
}
function q(e, t, n, i) {
    var s,
        o,
        u,
        l,
        d,
        c,
        f,
        h,
        p,
        _ = e.constructor,
        m = void 0 !== n;
    if (
        (m ? (E(n, 1, 1e9), void 0 === i ? (i = _.rounding) : E(i, 0, 8)) : ((n = _.precision), (i = _.rounding)),
        e.isFinite())
    ) {
        for (
            u = (f = x(e)).indexOf("."),
                m ? ((s = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (s = t),
                u >= 0 &&
                    ((f = f.replace(".", "")),
                    ((p = new _(1)).e = f.length - u),
                    (p.d = A(x(p), 10, s)),
                    (p.e = p.d.length)),
                o = d = (h = A(f, 10, s)).length;
            0 == h[--d];
        )
            h.pop();
        if (h[0]) {
            if (
                (u < 0
                    ? o--
                    : (((e = new _(e)).d = h), (e.e = o), (h = (e = T(e, p, n, i, 0, s)).d), (o = e.e), (c = r)),
                (u = h[n]),
                (l = s / 2),
                (c = c || void 0 !== h[n + 1]),
                (c =
                    i < 4
                        ? (void 0 !== u || c) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : u > l || (u === l && (4 === i || c || (6 === i && 1 & h[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (h.length = n),
                c)
            )
                for (; ++h[--n] > s - 1;) ((h[n] = 0), n || (++o, h.unshift(1)));
            for (d = h.length; !h[d - 1]; --d);
            for (u = 0, f = ""; u < d; u++) f += a.charAt(h[u]);
            if (m) {
                if (d > 1)
                    if (16 == t || 8 == t) {
                        for (u = 16 == t ? 4 : 3, --d; d % u; d++) f += "0";
                        for (d = (h = A(f, s, t)).length; !h[d - 1]; --d);
                        for (u = 1, f = "1."; u < d; u++) f += a.charAt(h[u]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o;) f = "0" + f;
                f = "0." + f;
            } else if (++o > d) for (o -= d; o--;) f += "0";
            else o < d && (f = f.slice(0, o) + "." + f.slice(o));
        } else f = m ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    } else f = G(e);
    return e.s < 0 ? "-" + f : f;
}
function H(e, t) {
    if (e.length > t) return ((e.length = t), !0);
}
function J(e) {
    return new this(e).abs();
}
function W(e) {
    return new this(e).acos();
}
function V(e) {
    return new this(e).acosh();
}
function Y(e, t) {
    return new this(e).plus(t);
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
function et(e) {
    return new this(e).atanh();
}
function en(e, t) {
    ((e = new this(e)), (t = new this(t)));
    var n,
        r = this.precision,
        i = this.rounding,
        a = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? L(this, r, i) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = L(this, a, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = a),
                          (this.rounding = 1),
                          (n = this.atan(T(e, t, a, 1))),
                          (t = L(this, a, 1)),
                          (this.precision = r),
                          (this.rounding = i),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(T(e, t, a, 1)))
                : ((n = L(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(0 / 0)),
        n
    );
}
function er(e) {
    return new this(e).cbrt();
}
function ei(e) {
    return M((e = new this(e)), e.e + 1, 2);
}
function ea(e, t, n) {
    return new this(e).clamp(t, n);
}
function es(e) {
    if (!e || "object" != typeof e) throw Error(d + "Object expected");
    var t,
        n,
        r,
        i = !0 === e.defaults,
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
    for (t = 0; t < a.length; t += 3)
        if (((n = a[t]), i && (this[n] = u[n]), void 0 !== (r = e[n])))
            if (_(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
            else throw Error(c + n + ": " + r);
    if (((n = "crypto"), i && (this[n] = u[n]), void 0 !== (r = e[n])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(h);
            else this[n] = !1;
        else throw Error(c + n + ": " + r);
    return this;
}
function eo(e) {
    return new this(e).cos();
}
function eu(e) {
    return new this(e).cosh();
}
function el(e, t) {
    return new this(e).div(t);
}
function ed(e) {
    return new this(e).exp();
}
function ec(e) {
    return M((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        t,
        n = new this(0);
    for (e = 0, l = !1; e < arguments.length;)
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return ((l = !0), new this(1 / 0));
            n = t;
        }
    return ((l = !0), n.sqrt());
}
function eh(e) {
    return e instanceof eI || (e && e.toStringTag === p) || !1;
}
function ep(e) {
    return new this(e).ln();
}
function e_(e, t) {
    return new this(e).log(t);
}
function em(e) {
    return new this(e).log(2);
}
function ey(e) {
    return new this(e).log(10);
}
function eg() {
    return Z(this, arguments, -1);
}
function ew() {
    return Z(this, arguments, 1);
}
function ev(e, t) {
    return new this(e).mod(t);
}
function eb(e, t) {
    return new this(e).mul(t);
}
function ek(e, t) {
    return new this(e).pow(t);
}
function eS(e) {
    var t,
        n,
        r,
        i,
        a = 0,
        s = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : E(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;)
                (i = t[a]) >= 429e7 ? (t[a] = crypto.getRandomValues(new Uint32Array(1))[0]) : (o[a++] = i % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); a < r;)
                (i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, a)
                    : (o.push(i % 1e7), (a += 4));
            a = r / 4;
        } else throw Error(h);
    else for (; a < r;) o[a++] = (1e7 * Math.random()) | 0;
    for (r = o[--a], e %= 7, r && e && ((i = m(10, 7 - e)), (o[a] = ((r / i) | 0) * i)); 0 === o[a]; a--) o.pop();
    if (a < 0) ((n = 0), (o = [0]));
    else {
        for (n = -1; 0 === o[0]; n -= 7) o.shift();
        for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
        r < 7 && (n -= 7 - r);
    }
    return ((s.e = n), (s.d = o), s);
}
function ez(e) {
    return M((e = new this(e)), e.e + 1, this.rounding);
}
function eE(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || 0 / 0;
}
function eO(e) {
    return new this(e).sin();
}
function eA(e) {
    return new this(e).sinh();
}
function eT(e) {
    return new this(e).sqrt();
}
function eM(e, t) {
    return new this(e).sub(t);
}
function ex() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (l = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
    return ((l = !0), M(n, this.precision, this.rounding));
}
function eP(e) {
    return new this(e).tan();
}
function e$(e) {
    return new this(e).tanh();
}
function eL(e) {
    return M((e = new this(e)), e.e + 1, 1);
}
((S[Symbol.for("nodejs.util.inspect.custom")] = S.toString), (S[Symbol.toStringTag] = "Decimal"));
var eI = (S.constructor = (function e(t) {
    var n, r, i;
    function a(e) {
        var t, n, r;
        if (!(this instanceof a)) return new a(e);
        if (((this.constructor = a), eh(e))) {
            ((this.s = e.s),
                l
                    ? !e.d || e.e > a.maxE
                        ? ((this.e = 0 / 0), (this.d = null))
                        : e.e < a.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = e.e), (this.d = e.d.slice()))
                    : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d)));
            return;
        }
        if ("number" == (r = typeof e)) {
            if (0 === e) {
                ((this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]));
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
                l
                    ? t > a.maxE
                        ? ((this.e = 0 / 0), (this.d = null))
                        : t < a.minE
                          ? ((this.e = 0), (this.d = [0]))
                          : ((this.e = t), (this.d = [e]))
                    : ((this.e = t), (this.d = [e]));
                return;
            }
            if (0 * e != 0) {
                (e || (this.s = 0 / 0), (this.e = 0 / 0), (this.d = null));
                return;
            }
            return F(this, e.toString());
        }
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                v.test(e)
                    ? F(this, e)
                    : (function (e, t) {
                          var n, r, i, a, s, o, u, d, f;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), v.test(t))) return F(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return (+t || (e.s = 0 / 0), (e.e = 0 / 0), (e.d = null), e);
                          if (g.test(t)) ((n = 16), (t = t.toLowerCase()));
                          else if (y.test(t)) n = 2;
                          else if (w.test(t)) n = 8;
                          else throw Error(c + t);
                          for (
                              (a = t.search(/p/i)) > 0
                                  ? ((u = +t.slice(a + 1)), (t = t.substring(2, a)))
                                  : (t = t.slice(2)),
                                  s = (a = t.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  s &&
                                      ((a = (o = (t = t.replace(".", "")).length) - a), (i = N(r, new r(n), a, 2 * a))),
                                  a = f = (d = A(t, n, 1e7)).length - 1;
                              0 === d[a];
                              --a
                          )
                              d.pop();
                          return a < 0
                              ? new r(0 * e.s)
                              : ((e.e = P(d, f)),
                                (e.d = d),
                                (l = !1),
                                s && (e = T(e, i, 4 * o)),
                                u && (e = e.times(54 > Math.abs(u) ? m(2, u) : eI.pow(2, u))),
                                (l = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), F(this, e.toString()));
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
        (a.isDecimal = eh),
        (a.abs = J),
        (a.acos = W),
        (a.acosh = V),
        (a.add = Y),
        (a.asin = Q),
        (a.asinh = X),
        (a.atan = ee),
        (a.atanh = et),
        (a.atan2 = en),
        (a.cbrt = er),
        (a.ceil = ei),
        (a.clamp = ea),
        (a.cos = eo),
        (a.cosh = eu),
        (a.div = el),
        (a.exp = ed),
        (a.floor = ec),
        (a.hypot = ef),
        (a.ln = ep),
        (a.log = e_),
        (a.log10 = ey),
        (a.log2 = em),
        (a.max = eg),
        (a.min = ew),
        (a.mod = ev),
        (a.mul = eb),
        (a.pow = ek),
        (a.random = eS),
        (a.round = ez),
        (a.sign = eE),
        (a.sin = eO),
        (a.sinh = eA),
        (a.sqrt = eT),
        (a.sub = eM),
        (a.sum = ex),
        (a.tan = eP),
        (a.tanh = e$),
        (a.trunc = eL),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < i.length;
        )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
    return (a.config(t), a);
})(u));
((s = new eI(s)), (o = new eI(o)), n.d(t, {}, { W: eI }));
