var r,
    i,
    a = "0123456789abcdef",
    s =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    o =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    u = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    d = !0,
    l = "[DecimalError] ",
    c = l + "Invalid argument: ",
    f = l + "Precision limit exceeded",
    h = l + "crypto unavailable",
    p = "[object Decimal]",
    _ = Math.floor,
    m = Math.pow,
    y = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    v = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    b = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    w = s.length - 1,
    V = o.length - 1,
    T = { toStringTag: p };
function k(e) {
    var t,
        n,
        r,
        i = e.length - 1,
        a = "",
        s = e[0];
    if (i > 0) {
        for (a += s, t = 1; t < i; t++) ((n = 7 - (r = e[t] + "").length) && (a += D(n)), (a += r));
        (n = 7 - (r = (s = e[t]) + "").length) && (a += D(n));
    } else if (0 === s) return "0";
    for (; s % 10 == 0;) s /= 10;
    return a + s;
}
function A(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(c + e);
}
function E(e, t, n, r) {
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
function P(e, t, n) {
    for (var r, i, s = [0], o = 0, u = e.length; o < u;) {
        for (i = s.length; i--;) s[i] *= t;
        for (s[0] += a.indexOf(e.charAt(o++)), r = 0; r < s.length; r++)
            s[r] > n - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), (s[r + 1] += (s[r] / n) | 0), (s[r] %= n));
    }
    return s.reverse();
}
((T.absoluteValue = T.abs =
    function () {
        var e = new this.constructor(this);
        return (e.s < 0 && (e.s = 1), S(e));
    }),
    (T.ceil = function () {
        return S(new this.constructor(this), this.e + 1, 2);
    }),
    (T.clampedTo = T.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(0 / 0);
            if (e.gt(t)) throw Error(c + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (T.comparedTo = T.cmp =
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
                          var n, r, i;
                          if (t.isZero()) return t;
                          ((r = t.d.length) < 32
                              ? (i = (1 / $(4, (n = Math.ceil(r / 3)))).toString())
                              : ((n = 16), (i = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = U(e, 1, t.times(i), new e(1))));
                          for (var a = n; a--;) {
                              var s = t.times(t);
                              t = s.times(s).minus(s).times(8).plus(1);
                          }
                          return ((e.precision -= n), t);
                      })(r, Z(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      S(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(0 / 0);
        }),
    (T.cubeRoot = T.cbrt =
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
                l,
                c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
                d = !1,
                    (a = this.s * m(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(a)
                        ? (r = new c(a.toString()))
                        : ((n = k(this.d)),
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
                    ((r = x((l = (u = (o = r).times(o).times(o)).plus(this)).plus(this).times(o), l.plus(u), s + 2, 1)),
                    k(o.d).slice(0, s) === (n = k(r.d)).slice(0, s))
                ) {
                    if ("9999" != (n = n.slice(s - 3, s + 1)) && (i || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (S(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!i && (S(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                        r = o;
                        break;
                    }
                    ((s += 4), (i = 1));
                }
            return ((d = !0), S(r, e, c.rounding, t));
        }),
    (T.decimalPlaces = T.dp =
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
    (T.dividedBy = T.div =
        function (e) {
            return x(this, new this.constructor(e));
        }),
    (T.dividedToIntegerBy = T.divToInt =
        function (e) {
            var t = this.constructor;
            return S(x(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (T.equals = T.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (T.floor = function () {
        return S(new this.constructor(this), this.e + 1, 3);
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
                    ? (t = (1 / $(4, (e = Math.ceil(i / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (a = U(s, 1, a.times(t), new s(1), !0)));
            for (var u, d = e, l = new s(8); d--;) ((u = a.times(a)), (a = o.minus(u.times(l.minus(u.times(l))))));
            return S(a, (s.precision = n), (s.rounding = r), !0);
        }),
    (T.hyperbolicSine = T.sinh =
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
                ((e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (i = U(a, 2, (i = i.times(1 / $(5, e))), i, !0)));
                for (var s, o = new a(5), u = new a(16), d = new a(20); e--;)
                    ((s = i.times(i)), (i = i.times(o.plus(s.times(u.times(s).plus(d))))));
            }
            return ((a.precision = t), (a.rounding = n), S(i, t, n, !0));
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
                      x(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (T.inverseCosine = T.acos =
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
                    : new t(0 / 0)
                : e.isZero()
                  ? F(t, r + 4, i).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = i),
                    e.times(2));
        }),
    (T.inverseHyperbolicCosine = T.acosh =
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
                    (d = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (d = !0),
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
                  (d = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (d = !0),
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
                i = this,
                a = i.constructor;
            return i.isFinite()
                ? i.e >= 0
                    ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : 0 / 0)
                    : ((e = a.precision), (t = a.rounding), Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                      ? S(new a(i), e, t, !0)
                      : ((a.precision = n = r - i.e),
                        (i = x(i.plus(1), new a(1).minus(i), n + e, 1)),
                        (a.precision = e + 4),
                        (a.rounding = 1),
                        (i = i.ln()),
                        (a.precision = e),
                        (a.rounding = t),
                        i.times(0.5))
                : new a(0 / 0);
        }),
    (T.inverseSine = T.asin =
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
                      ? (((e = F(a, n + 4, r).times(0.5)).s = i.s), e)
                      : new a(0 / 0)
                  : ((a.precision = n + 6),
                    (a.rounding = 1),
                    (i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                    (a.precision = n),
                    (a.rounding = r),
                    i.times(2));
        }),
    (T.inverseTangent = T.atan =
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
                l = this,
                c = l.constructor,
                f = c.precision,
                h = c.rounding;
            if (l.isFinite()) {
                if (l.isZero()) return new c(l);
                else if (l.abs().eq(1) && f + 4 <= V) return (((s = F(c, f + 4, h).times(0.25)).s = l.s), s);
            } else {
                if (!l.s) return new c(0 / 0);
                if (f + 4 <= V) return (((s = F(c, f + 4, h).times(0.5)).s = l.s), s);
            }
            for (c.precision = o = f + 10, c.rounding = 1, e = n = Math.min(28, (o / 7 + 2) | 0); e; --e)
                l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (d = !1, t = Math.ceil(o / 7), r = 1, u = l.times(l), s = new c(l), i = l; -1 !== e;)
                if (
                    ((i = i.times(u)),
                    (a = s.minus(i.div((r += 2)))),
                    (i = i.times(u)),
                    void 0 !== (s = a.plus(i.div((r += 2)))).d[t])
                )
                    for (e = t; s.d[e] === a.d[e] && e--;);
            return (n && (s = s.times(2 << (n - 1))), (d = !0), S(s, (c.precision = f), (c.rounding = h), !0));
        }),
    (T.isFinite = function () {
        return !!this.d;
    }),
    (T.isInteger = T.isInt =
        function () {
            return !!this.d && _(this.e / 7) > this.d.length - 2;
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
                i,
                a,
                s,
                o,
                u = this.constructor,
                l = u.precision,
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
            if (((d = !1), E((o = x((a = B(this, (s = l + 5))), t ? M(u, s + 10) : B(e, s), s, 1)).d, (r = l), c)))
                do
                    if (((s += 10), (o = x((a = B(this, s)), t ? M(u, s + 10) : B(e, s), s, 1)), !i)) {
                        +k(o.d).slice(r + 1, r + 15) + 1 == 1e14 && (o = S(o, l + 1, 0));
                        break;
                    }
                while (E(o.d, (r += 10), c));
            return ((d = !0), S(o, l, c));
        }),
    (T.minus = T.sub =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                l,
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
            if (((l = this.d), (h = e.d), (o = p.precision), (u = p.rounding), !l[0] || !h[0])) {
                if (h[0]) e.s = -e.s;
                else {
                    if (!l[0]) return new p(3 === u ? -0 : 0);
                    e = new p(this);
                }
                return d ? S(e, o, u) : e;
            }
            if (((n = _(e.e / 7)), (c = _(this.e / 7)), (l = l.slice()), (a = c - n))) {
                for (
                    (f = a < 0) ? ((t = l), (a = -a), (s = h.length)) : ((t = h), (n = c), (s = l.length)),
                        a > (r = Math.max(Math.ceil(o / 7), s) + 2) && ((a = r), (t.length = 1)),
                        t.reverse(),
                        r = a;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((f = (r = l.length) < (s = h.length)) && (s = r), r = 0; r < s; r++)
                    if (l[r] != h[r]) {
                        f = l[r] < h[r];
                        break;
                    }
                a = 0;
            }
            for (f && ((t = l), (l = h), (h = t), (e.s = -e.s)), s = l.length, r = h.length - s; r > 0; --r) l[s++] = 0;
            for (r = h.length; r > a;) {
                if (l[--r] < h[r]) {
                    for (i = r; i && 0 === l[--i];) l[i] = 1e7 - 1;
                    (--l[i], (l[r] += 1e7));
                }
                l[r] -= h[r];
            }
            for (; 0 === l[--s];) l.pop();
            for (; 0 === l[0]; l.shift()) --n;
            return l[0] ? ((e.d = l), (e.e = R(l, n)), d ? S(e, o, u) : e) : new p(3 === u ? -0 : 0);
        }),
    (T.modulo = T.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((d = !1),
                      9 == n.modulo
                          ? ((t = x(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = x(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (d = !0),
                      this.minus(t))
                    : S(new n(this), n.precision, n.rounding)
                : new n(0 / 0);
        }),
    (T.naturalExponential = T.exp =
        function () {
            return j(this);
        }),
    (T.naturalLogarithm = T.ln =
        function () {
            return B(this);
        }),
    (T.negated = T.neg =
        function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s), S(e));
        }),
    (T.plus = T.add =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                l,
                c,
                f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
                return (
                    this.s && e.s ? this.d || (e = new f(e.d || this.s === e.s ? this : 0 / 0)) : (e = new f(0 / 0)), e
                );
            if (this.s != e.s) return ((e.s = -e.s), this.minus(e));
            if (((l = this.d), (c = e.d), (o = f.precision), (u = f.rounding), !l[0] || !c[0]))
                return (c[0] || (e = new f(this)), d ? S(e, o, u) : e);
            if (((a = _(this.e / 7)), (r = _(e.e / 7)), (l = l.slice()), (i = a - r))) {
                for (
                    i < 0 ? ((n = l), (i = -i), (s = c.length)) : ((n = c), (r = a), (s = l.length)),
                        i > (s = (a = Math.ceil(o / 7)) > s ? a + 1 : s + 1) && ((i = s), (n.length = 1)),
                        n.reverse();
                    i--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((s = l.length) - (i = c.length) < 0 && ((i = s), (n = c), (c = l), (l = n)), t = 0; i;)
                ((t = ((l[--i] = l[i] + c[i] + t) / 1e7) | 0), (l[i] %= 1e7));
            for (t && (l.unshift(t), ++r), s = l.length; 0 == l[--s];) l.pop();
            return ((e.d = l), (e.e = R(l, r)), d ? S(e, o, u) : e);
        }),
    (T.precision = T.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
            return (this.d ? ((t = C(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = 0 / 0), t);
        }),
    (T.round = function () {
        var e = this.constructor;
        return S(new e(this), this.e + 1, e.rounding);
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
                          if (r < 3) return t.isZero() ? t : U(e, 2, t, t);
                          ((n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                              (t = U(e, 2, (t = t.times(1 / $(5, n))), t)));
                          for (var i, a = new e(5), s = new e(16), o = new e(20); n--;)
                              ((i = t.times(t)), (t = t.times(a.plus(i.times(s.times(i).minus(o))))));
                          return t;
                      })(r, Z(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      S(i > 2 ? n.neg() : n, e, t, !0))
                : new r(0 / 0);
        }),
    (T.squareRoot = T.sqrt =
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
                l = this.constructor;
            if (1 !== u || !s || !s[0]) return new l(!u || (u < 0 && (!s || s[0])) ? 0 / 0 : s ? this : 1 / 0);
            for (
                d = !1,
                    0 == (u = Math.sqrt(+this)) || 1 / 0 == u
                        ? (((t = k(s)).length + o) % 2 == 0 && (t += "0"),
                          (u = Math.sqrt(t)),
                          (o = _((o + 1) / 2) - (o < 0 || o % 2)),
                          (r = new l(
                              (t = 1 / 0 == u ? "5e" + o : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + o),
                          )))
                        : (r = new l(u.toString())),
                    n = (o = l.precision) + 3;
                ;
            )
                if (
                    ((r = (a = r).plus(x(this, a, n + 2, 1)).times(0.5)),
                    k(a.d).slice(0, n) === (t = k(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (S(r, o + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!i && (S(a, o + 1, 0), a.times(a).eq(this))) {
                        r = a;
                        break;
                    }
                    ((n += 4), (i = 1));
                }
            return ((d = !0), S(r, o, l.rounding, e));
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
                      (n = x(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      S(2 == i || 4 == i ? n.neg() : n, e, t, !0))
                : new r(0 / 0);
        }),
    (T.times = T.mul =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                u,
                l,
                c = this.constructor,
                f = this.d,
                h = (e = new c(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !h || !h[0]))
                return new c(!e.s || (f && !f[0] && !h) || (h && !h[0] && !f) ? 0 / 0 : !f || !h ? e.s / 0 : 0 * e.s);
            for (
                n = _(this.e / 7) + _(e.e / 7),
                    (u = f.length) < (l = h.length) && ((a = f), (f = h), (h = a), (s = u), (u = l), (l = s)),
                    a = [],
                    r = s = u + l;
                r--;
            )
                a.push(0);
            for (r = l; --r >= 0;) {
                for (t = 0, i = u + r; i > r;)
                    ((o = a[i] + h[r] * f[i - r - 1] + t), (a[i--] = (o % 1e7) | 0), (t = (o / 1e7) | 0));
                a[i] = ((a[i] + t) % 1e7) | 0;
            }
            for (; !a[--s];) a.pop();
            return (t ? ++n : a.shift(), (e.d = a), (e.e = R(a, n)), d ? S(e, c.precision, c.rounding) : e);
        }),
    (T.toBinary = function (e, t) {
        return H(this, 2, e, t);
    }),
    (T.toDecimalPlaces = T.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (A(e, 0, 1e9), void 0 === t ? (t = r.rounding) : A(t, 0, 8), S(n, e + n.e + 1, t));
        }),
    (T.toExponential = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = O(r, !0))
                : (A(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                  (n = O((r = S(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (T.toFixed = function (e, t) {
        var n,
            r,
            i = this.constructor;
        return (
            void 0 === e
                ? (n = O(this))
                : (A(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                  (n = O((r = S(new i(this), e + this.e + 1, t)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (T.toFraction = function (e) {
        var t,
            n,
            r,
            i,
            a,
            s,
            o,
            u,
            l,
            f,
            h,
            p,
            _ = this.d,
            y = this.constructor;
        if (!_) return new y(this);
        if (
            ((l = n = new y(1)),
            (r = u = new y(0)),
            (s = (a = (t = new y(r)).e = C(_) - this.e - 1) % 7),
            (t.d[0] = m(10, s < 0 ? 7 + s : s)),
            null == e)
        )
            e = a > 0 ? t : l;
        else {
            if (!(o = new y(e)).isInt() || o.lt(l)) throw Error(c + o);
            e = o.gt(t) ? (a > 0 ? t : l) : o;
        }
        for (
            d = !1, o = new y(k(_)), f = y.precision, y.precision = a = 7 * _.length * 2;
            (h = x(o, t, 0, 1, 1)), 1 != (i = n.plus(h.times(r))).cmp(e);
        )
            ((n = r), (r = i), (i = l), (l = u.plus(h.times(i))), (u = i), (i = t), (t = o.minus(h.times(i))), (o = i));
        return (
            (i = x(e.minus(n), r, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (n = n.plus(i.times(r))),
            (u.s = l.s = this.s),
            (p =
                1 >
                x(l, r, a, 1)
                    .minus(this)
                    .abs()
                    .cmp(x(u, n, a, 1).minus(this).abs())
                    ? [l, r]
                    : [u, n]),
            (y.precision = f),
            (d = !0),
            p
        );
    }),
    (T.toHexadecimal = T.toHex =
        function (e, t) {
            return H(this, 16, e, t);
        }),
    (T.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            ((e = new r(1)), (t = r.rounding));
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : A(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return (e.s && (e.s = n.s), e);
        }
        return (e.d[0] ? ((d = !1), (n = x(n, e, 0, t, 1).times(e)), (d = !0), S(n)) : ((e.s = n.s), (n = e)), n);
    }),
    (T.toNumber = function () {
        return +this;
    }),
    (T.toOctal = function (e, t) {
        return H(this, 8, e, t);
    }),
    (T.toPower = T.pow =
        function (e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o = this,
                u = o.constructor,
                l = +(e = new u(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(m(+o, l));
            if ((o = new u(o)).eq(1)) return o;
            if (((r = u.precision), (a = u.rounding), e.eq(1))) return S(o, r, a);
            if ((t = _(e.e / 7)) >= e.d.length - 1 && (n = l < 0 ? -l : l) <= 0x1fffffffffffff)
                return ((i = z(u, o, n, r)), e.s < 0 ? new u(1).div(i) : S(i, r, a));
            if ((s = o.s) < 0) {
                if (t < e.d.length - 1) return new u(0 / 0);
                if (((1 & e.d[t]) == 0 && (s = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length)) return ((o.s = s), o);
            }
            return (t =
                0 != (n = m(+o, l)) && isFinite(n)
                    ? new u(n + "").e
                    : _(l * (Math.log("0." + k(o.d)) / Math.LN10 + o.e + 1))) >
                u.maxE + 1 || t < u.minE - 1
                ? new u(t > 0 ? s / 0 : 0)
                : ((d = !1),
                  (u.rounding = o.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (i = j(e.times(B(o, r + n)), r)).d &&
                      E((i = S(i, r + 5, 1)).d, r, a) &&
                      ((t = r + 10),
                      +k((i = S(j(e.times(B(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (i = S(i, r + 1, 0))),
                  (i.s = s),
                  (d = !0),
                  (u.rounding = a),
                  S(i, r, a));
        }),
    (T.toPrecision = function (e, t) {
        var n,
            r = this,
            i = r.constructor;
        return (
            void 0 === e
                ? (n = O(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
                : (A(e, 1, 1e9),
                  void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                  (n = O((r = S(new i(r), e, t)), e <= r.e || r.e <= i.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (T.toSignificantDigits = T.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (A(e, 1, 1e9), void 0 === t ? (t = n.rounding) : A(t, 0, 8)),
                S(new n(this), e, t)
            );
        }),
    (T.toString = function () {
        var e = this.constructor,
            t = O(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (T.truncated = T.trunc =
        function () {
            return S(new this.constructor(this), this.e + 1, 1);
        }),
    (T.valueOf = T.toJSON =
        function () {
            var e = this.constructor,
                t = O(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        }));
var x = (function () {
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
    return function (i, a, s, o, u, d) {
        var l,
            c,
            f,
            h,
            p,
            m,
            y,
            g,
            v,
            b,
            w,
            V,
            T,
            k,
            A,
            E,
            P,
            x,
            O,
            R,
            M = i.constructor,
            F = i.s == a.s ? 1 : -1,
            C = i.d,
            D = a.d;
        if (!C || !C[0] || !D || !D[0])
            return new M(!i.s || !a.s || (C ? D && C[0] == D[0] : !D) ? 0 / 0 : (C && 0 == C[0]) || !D ? 0 * F : F / 0);
        for (
            d ? ((p = 1), (c = i.e - a.e)) : ((d = 1e7), (p = 7), (c = _(i.e / p) - _(a.e / p))),
                O = D.length,
                P = C.length,
                b = (v = new M(F)).d = [],
                f = 0;
            D[f] == (C[f] || 0);
            f++
        );
        if (
            (D[f] > (C[f] || 0) && c--,
            null == s ? ((k = s = M.precision), (o = M.rounding)) : (k = u ? s + (i.e - a.e) + 1 : s),
            k < 0)
        )
            (b.push(1), (m = !0));
        else {
            if (((k = (k / p + 2) | 0), (f = 0), 1 == O)) {
                for (h = 0, D = D[0], k++; (f < P || h) && k--; f++)
                    ((A = h * d + (C[f] || 0)), (b[f] = (A / D) | 0), (h = (A % D) | 0));
                m = h || f < P;
            } else {
                for (
                    (h = (d / (D[0] + 1)) | 0) > 1 &&
                        ((D = e(D, h, d)), (C = e(C, h, d)), (O = D.length), (P = C.length)),
                        E = O,
                        V = (w = C.slice(0, O)).length;
                    V < O;
                )
                    w[V++] = 0;
                ((R = D.slice()).unshift(0), (x = D[0]), D[1] >= d / 2 && ++x);
                do
                    ((h = 0),
                        (l = t(D, w, O, V)) < 0
                            ? ((T = w[0]),
                              O != V && (T = T * d + (w[1] || 0)),
                              (h = (T / x) | 0) > 1
                                  ? (h >= d && (h = d - 1),
                                    (g = (y = e(D, h, d)).length),
                                    (V = w.length),
                                    1 == (l = t(y, w, g, V)) && (h--, n(y, O < g ? R : D, g, d)))
                                  : (0 == h && (l = h = 1), (y = D.slice())),
                              (g = y.length) < V && y.unshift(0),
                              n(w, y, V, d),
                              -1 == l && ((V = w.length), (l = t(D, w, O, V)) < 1 && (h++, n(w, O < V ? R : D, V, d))),
                              (V = w.length))
                            : 0 === l && (h++, (w = [0])),
                        (b[f++] = h),
                        l && w[0] ? (w[V++] = C[E] || 0) : ((w = [C[E]]), (V = 1)));
                while ((E++ < P || void 0 !== w[0]) && k--);
                m = void 0 !== w[0];
            }
            b[0] || b.shift();
        }
        if (1 == p) ((v.e = c), (r = m));
        else {
            for (f = 1, h = b[0]; h >= 10; h /= 10) f++;
            ((v.e = f + c * p - 1), S(v, u ? s + v.e + 1 : s, o, m));
        }
        return v;
    };
})();
function S(e, t, n, r) {
    var i,
        a,
        s,
        o,
        u,
        l,
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
            (l =
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
                l ? ((t -= e.e + 1), (f[0] = m(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (f[0] = e.e = 0),
                e
            );
        if (
            (0 == a
                ? ((f.length = h), (o = 1), h--)
                : ((f.length = h + 1),
                  (o = m(10, 7 - a)),
                  (f[h] = s > 0 ? (((c / m(10, i - s)) % m(10, s)) | 0) * o : 0)),
            l)
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
    return (d && (e.e > p.maxE ? ((e.d = null), (e.e = 0 / 0)) : e.e < p.minE && ((e.e = 0), (e.d = [0]))), e);
}
function O(e, t, n) {
    if (!e.isFinite()) return N(e);
    var r,
        i = e.e,
        a = k(e.d),
        s = a.length;
    return (
        t
            ? (n && (r = n - s) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + D(r))
                  : s > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((a = "0." + D(-i - 1) + a), n && (r = n - s) > 0 && (a += D(r)))
              : i >= s
                ? ((a += D(i + 1 - s)), n && (r = n - i - 1) > 0 && (a = a + "." + D(r)))
                : ((r = i + 1) < s && (a = a.slice(0, r) + "." + a.slice(r)),
                  n && (r = n - s) > 0 && (i + 1 === s && (a += "."), (a += D(r)))),
        a
    );
}
function R(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function M(e, t, n) {
    if (t > w) throw ((d = !0), n && (e.precision = n), Error(f));
    return S(new e(s), t, 1, !0);
}
function F(e, t, n) {
    if (t > V) throw Error(f);
    return S(new e(o), t, n, !0);
}
function C(e) {
    var t = e.length - 1,
        n = 7 * t + 1;
    if ((t = e[t])) {
        for (; t % 10 == 0; t /= 10) n--;
        for (t = e[0]; t >= 10; t /= 10) n++;
    }
    return n;
}
function D(e) {
    for (var t = ""; e--;) t += "0";
    return t;
}
function z(e, t, n, r) {
    var i,
        a = new e(1),
        s = Math.ceil(r / 7 + 4);
    for (d = !1; ;) {
        if ((n % 2 && W((a = a.times(t)).d, s) && (i = !0), 0 === (n = _(n / 2)))) {
            ((n = a.d.length - 1), i && 0 === a.d[n] && ++a.d[n]);
            break;
        }
        W((t = t.times(t)).d, s);
    }
    return ((d = !0), a);
}
function I(e) {
    return 1 & e.d[e.d.length - 1];
}
function L(e, t, n) {
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
        l = 0,
        c = 0,
        f = 0,
        h = e.constructor,
        p = h.rounding,
        _ = h.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new h(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((d = !1), (u = _)) : (u = t), o = new h(0.03125); e.e > -2;) ((e = e.times(o)), (f += 5));
    for (u += r = ((Math.log(m(2, f)) / Math.LN10) * 2 + 5) | 0, n = a = s = new h(1), h.precision = u; ;) {
        if (
            ((a = S(a.times(e), u, 1)),
            (n = n.times(++c)),
            k((o = s.plus(x(a, n, u, 1))).d).slice(0, u) === k(s.d).slice(0, u))
        ) {
            for (i = f; i--;) s = S(s.times(s), u, 1);
            if (null != t) return ((h.precision = _), s);
            if (!(l < 3 && E(s.d, u - r, p, l))) return S(s, (h.precision = _), p, (d = !0));
            ((h.precision = u += 10), (n = a = o = new h(1)), (c = 0), l++);
        }
        s = o;
    }
}
function B(e, t) {
    var n,
        r,
        i,
        a,
        s,
        o,
        u,
        l,
        c,
        f,
        h,
        p = 1,
        _ = e,
        m = _.d,
        y = _.constructor,
        g = y.rounding,
        v = y.precision;
    if (_.s < 0 || !m || !m[0] || (!_.e && 1 == m[0] && 1 == m.length))
        return new y(m && !m[0] ? -1 / 0 : 1 != _.s ? 0 / 0 : m ? 0 : _);
    if (
        (null == t ? ((d = !1), (c = v)) : (c = t),
        (y.precision = c += 10),
        (r = (n = k(m)).charAt(0)),
        !(15e14 > Math.abs((a = _.e))))
    )
        return (
            (l = M(y, c + 2, v).times(a + "")),
            (_ = B(new y(r + "." + n.slice(1)), c - 10).plus(l)),
            (y.precision = v),
            null == t ? S(_, v, g, (d = !0)) : _
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3);) ((r = (n = k((_ = _.times(e)).d)).charAt(0)), p++);
    for (
        a = _.e,
            r > 1 ? ((_ = new y("0." + n)), a++) : (_ = new y(r + "." + n.slice(1))),
            f = _,
            u = s = _ = x(_.minus(1), _.plus(1), c, 1),
            h = S(_.times(_), c, 1),
            i = 3;
        ;
    ) {
        if (((s = S(s.times(h), c, 1)), k((l = u.plus(x(s, new y(i), c, 1))).d).slice(0, c) === k(u.d).slice(0, c))) {
            if (
                ((u = u.times(2)),
                0 !== a && (u = u.plus(M(y, c + 2, v).times(a + ""))),
                (u = x(u, new y(p), c, 1)),
                null != t)
            )
                return ((y.precision = v), u);
            if (!E(u.d, c - 10, g, o)) return S(u, (y.precision = v), g, (d = !0));
            ((y.precision = c += 10),
                (l = s = _ = x(f.minus(1), f.plus(1), c, 1)),
                (h = S(_.times(_), c, 1)),
                (i = o = 1));
        }
        ((u = l), (i += 2));
    }
}
function N(e) {
    return String((e.s * e.s) / 0);
}
function G(e, t) {
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
            d &&
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
        l = e.precision,
        c = Math.ceil(l / 7);
    for (d = !1, u = n.times(n), o = new e(r); ;) {
        if (
            ((s = x(o.times(u), new e(t++ * t++), l, 1)),
            (o = i ? r.plus(s) : r.minus(s)),
            (r = x(s.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (s = o.plus(r)).d[c])
        ) {
            for (a = c; s.d[a] === o.d[a] && a--;);
            if (-1 == a) break;
        }
        ((a = o), (o = r), (r = s), (s = a));
    }
    return ((d = !0), (s.d.length = c + 1), s);
}
function $(e, t) {
    for (var n = e; --t;) n *= e;
    return n;
}
function Z(e, t) {
    var n,
        r = t.s < 0,
        a = F(e, e.precision, 1),
        s = a.times(0.5);
    if ((t = t.abs()).lte(s)) return ((i = r ? 4 : 1), t);
    if ((n = t.divToInt(a)).isZero()) i = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(a))).lte(s)) return ((i = I(n) ? (r ? 2 : 3) : r ? 4 : 1), t);
        i = I(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(a).abs();
}
function H(e, t, n, i) {
    var s,
        o,
        u,
        d,
        l,
        c,
        f,
        h,
        p,
        _ = e.constructor,
        m = void 0 !== n;
    if (
        (m ? (A(n, 1, 1e9), void 0 === i ? (i = _.rounding) : A(i, 0, 8)) : ((n = _.precision), (i = _.rounding)),
        e.isFinite())
    ) {
        for (
            u = (f = O(e)).indexOf("."),
                m ? ((s = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (s = t),
                u >= 0 &&
                    ((f = f.replace(".", "")),
                    ((p = new _(1)).e = f.length - u),
                    (p.d = P(O(p), 10, s)),
                    (p.e = p.d.length)),
                o = l = (h = P(f, 10, s)).length;
            0 == h[--l];
        )
            h.pop();
        if (h[0]) {
            if (
                (u < 0
                    ? o--
                    : (((e = new _(e)).d = h), (e.e = o), (h = (e = x(e, p, n, i, 0, s)).d), (o = e.e), (c = r)),
                (u = h[n]),
                (d = s / 2),
                (c = c || void 0 !== h[n + 1]),
                (c =
                    i < 4
                        ? (void 0 !== u || c) && (0 === i || i === (e.s < 0 ? 3 : 2))
                        : u > d || (u === d && (4 === i || c || (6 === i && 1 & h[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
                (h.length = n),
                c)
            )
                for (; ++h[--n] > s - 1;) ((h[n] = 0), n || (++o, h.unshift(1)));
            for (l = h.length; !h[l - 1]; --l);
            for (u = 0, f = ""; u < l; u++) f += a.charAt(h[u]);
            if (m) {
                if (l > 1)
                    if (16 == t || 8 == t) {
                        for (u = 16 == t ? 4 : 3, --l; l % u; l++) f += "0";
                        for (l = (h = P(f, s, t)).length; !h[l - 1]; --l);
                        for (u = 1, f = "1."; u < l; u++) f += a.charAt(h[u]);
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for (; ++o;) f = "0" + f;
                f = "0." + f;
            } else if (++o > l) for (o -= l; o--;) f += "0";
            else o < l && (f = f.slice(0, o) + "." + f.slice(o));
        } else f = m ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    } else f = N(e);
    return e.s < 0 ? "-" + f : f;
}
function W(e, t) {
    if (e.length > t) return ((e.length = t), !0);
}
function K(e) {
    return new this(e).abs();
}
function q(e) {
    return new this(e).acos();
}
function X(e) {
    return new this(e).acosh();
}
function J(e, t) {
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
    ((e = new this(e)), (t = new this(t)));
    var n,
        r = this.precision,
        i = this.rounding,
        a = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? F(this, r, i) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = F(this, a, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = a),
                          (this.rounding = 1),
                          (n = this.atan(x(e, t, a, 1))),
                          (t = F(this, a, 1)),
                          (this.precision = r),
                          (this.rounding = i),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(x(e, t, a, 1)))
                : ((n = F(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(0 / 0)),
        n
    );
}
function er(e) {
    return new this(e).cbrt();
}
function ei(e) {
    return S((e = new this(e)), e.e + 1, 2);
}
function ea(e, t, n) {
    return new this(e).clamp(t, n);
}
function es(e) {
    if (!e || "object" != typeof e) throw Error(l + "Object expected");
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
function ed(e, t) {
    return new this(e).div(t);
}
function el(e) {
    return new this(e).exp();
}
function ec(e) {
    return S((e = new this(e)), e.e + 1, 3);
}
function ef() {
    var e,
        t,
        n = new this(0);
    for (e = 0, d = !1; e < arguments.length;)
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return ((d = !0), new this(1 / 0));
            n = t;
        }
    return ((d = !0), n.sqrt());
}
function eh(e) {
    return e instanceof eC || (e && e.toStringTag === p) || !1;
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
    return L(this, arguments, -1);
}
function ev() {
    return L(this, arguments, 1);
}
function eb(e, t) {
    return new this(e).mod(t);
}
function ew(e, t) {
    return new this(e).mul(t);
}
function eV(e, t) {
    return new this(e).pow(t);
}
function eT(e) {
    var t,
        n,
        r,
        i,
        a = 0,
        s = new this(1),
        o = [];
    if ((void 0 === e ? (e = this.precision) : A(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
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
function ek(e) {
    return S((e = new this(e)), e.e + 1, this.rounding);
}
function eA(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || 0 / 0;
}
function eE(e) {
    return new this(e).sin();
}
function eP(e) {
    return new this(e).sinh();
}
function ex(e) {
    return new this(e).sqrt();
}
function eS(e, t) {
    return new this(e).sub(t);
}
function eO() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (d = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
    return ((d = !0), S(n, this.precision, this.rounding));
}
function eR(e) {
    return new this(e).tan();
}
function eM(e) {
    return new this(e).tanh();
}
function eF(e) {
    return S((e = new this(e)), e.e + 1, 1);
}
((T[Symbol.for("nodejs.util.inspect.custom")] = T.toString), (T[Symbol.toStringTag] = "Decimal"));
var eC = (T.constructor = (function e(t) {
    var n, r, i;
    function a(e) {
        var t, n, r;
        if (!(this instanceof a)) return new a(e);
        if (((this.constructor = a), eh(e))) {
            ((this.s = e.s),
                d
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
                d
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
            return G(this, e.toString());
        }
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                b.test(e)
                    ? G(this, e)
                    : (function (e, t) {
                          var n, r, i, a, s, o, u, l, f;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), b.test(t))) return G(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return (+t || (e.s = 0 / 0), (e.e = 0 / 0), (e.d = null), e);
                          if (g.test(t)) ((n = 16), (t = t.toLowerCase()));
                          else if (y.test(t)) n = 2;
                          else if (v.test(t)) n = 8;
                          else throw Error(c + t);
                          for (
                              (a = t.search(/p/i)) > 0
                                  ? ((u = +t.slice(a + 1)), (t = t.substring(2, a)))
                                  : (t = t.slice(2)),
                                  s = (a = t.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  s &&
                                      ((a = (o = (t = t.replace(".", "")).length) - a), (i = z(r, new r(n), a, 2 * a))),
                                  a = f = (l = P(t, n, 1e7)).length - 1;
                              0 === l[a];
                              --a
                          )
                              l.pop();
                          return a < 0
                              ? new r(0 * e.s)
                              : ((e.e = R(l, f)),
                                (e.d = l),
                                (d = !1),
                                s && (e = x(e, i, 4 * o)),
                                u && (e = e.times(54 > Math.abs(u) ? m(2, u) : eC.pow(2, u))),
                                (d = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), G(this, e.toString()));
        throw Error(c + e);
    }
    if (
        ((a.prototype = T),
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
        (a.abs = K),
        (a.acos = q),
        (a.acosh = X),
        (a.add = J),
        (a.asin = Y),
        (a.asinh = Q),
        (a.atan = ee),
        (a.atanh = et),
        (a.atan2 = en),
        (a.cbrt = er),
        (a.ceil = ei),
        (a.clamp = ea),
        (a.cos = eo),
        (a.cosh = eu),
        (a.div = ed),
        (a.exp = el),
        (a.floor = ec),
        (a.hypot = ef),
        (a.ln = ep),
        (a.log = e_),
        (a.log10 = ey),
        (a.log2 = em),
        (a.max = eg),
        (a.min = ev),
        (a.mod = eb),
        (a.mul = ew),
        (a.pow = eV),
        (a.random = eT),
        (a.round = ek),
        (a.sign = eA),
        (a.sin = eE),
        (a.sinh = eP),
        (a.sqrt = ex),
        (a.sub = eS),
        (a.sum = eO),
        (a.tan = eR),
        (a.tanh = eM),
        (a.trunc = eF),
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
((s = new eC(s)), (o = new eC(o)), n.d(t, {}, { W: eC }));
