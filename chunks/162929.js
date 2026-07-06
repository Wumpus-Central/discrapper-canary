"use strict";
n.d(t, { W: () => eP });
var r,
    o,
    a = "0123456789abcdef",
    i =
        "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    u =
        "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    s = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
    l = !0,
    c = "[DecimalError] ",
    f = c + "Invalid argument: ",
    d = c + "Precision limit exceeded",
    h = c + "crypto unavailable",
    p = "[object Decimal]",
    v = Math.floor,
    y = Math.pow,
    g = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    b = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    w = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    _ = i.length - 1,
    D = u.length - 1,
    x = { toStringTag: p };
function k(e) {
    var t,
        n,
        r,
        o = e.length - 1,
        a = "",
        i = e[0];
    if (o > 0) {
        for (a += i, t = 1; t < o; t++) (n = 7 - (r = e[t] + "").length) && (a += R(n)), (a += r);
        (n = 7 - (r = (i = e[t]) + "").length) && (a += R(n));
    } else if (0 === i) return "0";
    for (; i % 10 == 0; ) i /= 10;
    return a + i;
}
function E(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(f + e);
}
function C(e, t, n, r) {
    var o, a, i, u;
    for (a = e[0]; a >= 10; a /= 10) --t;
    return (
        --t < 0 ? ((t += 7), (o = 0)) : ((o = Math.ceil((t + 1) / 7)), (t %= 7)),
        (a = y(10, 7 - t)),
        (u = (e[o] % a) | 0),
        null == r
            ? t < 3
                ? (0 == t ? (u = (u / 100) | 0) : 1 == t && (u = (u / 10) | 0),
                  (i = (n < 4 && 99999 == u) || (n > 3 && 49999 == u) || 5e4 == u || 0 == u))
                : (i =
                      (((n < 4 && u + 1 == a) || (n > 3 && u + 1 == a / 2)) &&
                          ((e[o + 1] / a / 100) | 0) == y(10, t - 2) - 1) ||
                      ((u == a / 2 || 0 == u) && ((e[o + 1] / a / 100) | 0) == 0))
            : t < 4
              ? (0 == t ? (u = (u / 1e3) | 0) : 1 == t ? (u = (u / 100) | 0) : 2 == t && (u = (u / 10) | 0),
                (i = ((r || n < 4) && 9999 == u) || (!r && n > 3 && 4999 == u)))
              : (i =
                    (((r || n < 4) && u + 1 == a) || (!r && n > 3 && u + 1 == a / 2)) &&
                    ((e[o + 1] / a / 1e3) | 0) == y(10, t - 3) - 1),
        i
    );
}
function A(e, t, n) {
    for (var r, o, i = [0], u = 0, s = e.length; u < s; ) {
        for (o = i.length; o--; ) i[o] *= t;
        for (i[0] += a.indexOf(e.charAt(u++)), r = 0; r < i.length; r++)
            i[r] > n - 1 && (void 0 === i[r + 1] && (i[r + 1] = 0), (i[r + 1] += (i[r] / n) | 0), (i[r] %= n));
    }
    return i.reverse();
}
(x.absoluteValue = x.abs =
    function () {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), O(e);
    }),
    (x.ceil = function () {
        return O(new this.constructor(this), this.e + 1, 2);
    }),
    (x.clampedTo = x.clamp =
        function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s)) return new n(NaN);
            if (e.gt(t)) throw Error(f + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
        }),
    (x.comparedTo = x.cmp =
        function (e) {
            var t,
                n,
                r,
                o,
                a = this.d,
                i = (e = new this.constructor(e)).d,
                u = this.s,
                s = e.s;
            if (!a || !i) return u && s ? (u !== s ? u : a === i ? 0 : !a ^ (u < 0) ? 1 : -1) : NaN;
            if (!a[0] || !i[0]) return a[0] ? u : i[0] ? -s : 0;
            if (u !== s) return u;
            if (this.e !== e.e) return (this.e > e.e) ^ (u < 0) ? 1 : -1;
            for (t = 0, n = (r = a.length) < (o = i.length) ? r : o; t < n; ++t)
                if (a[t] !== i[t]) return (a[t] > i[t]) ^ (u < 0) ? 1 : -1;
            return r === o ? 0 : (r > o) ^ (u < 0) ? 1 : -1;
        }),
    (x.cosine = x.cos =
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
                          var n, r, o;
                          if (t.isZero()) return t;
                          (r = t.d.length) < 32
                              ? (o = (1 / H(4, (n = Math.ceil(r / 3)))).toString())
                              : ((n = 16), (o = "2.3283064365386962890625e-10")),
                              (e.precision += n),
                              (t = W(e, 1, t.times(o), new e(1)));
                          for (var a = n; a--; ) {
                              var i = t.times(t);
                              t = i.times(i).minus(i).times(8).plus(1);
                          }
                          return (e.precision -= n), t;
                      })(r, q(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      O(2 == o || 3 == o ? n.neg() : n, e, t, !0))
                    : new r(1)
                : new r(NaN);
        }),
    (x.cubeRoot = x.cbrt =
        function () {
            var e,
                t,
                n,
                r,
                o,
                a,
                i,
                u,
                s,
                c,
                f = this.constructor;
            if (!this.isFinite() || this.isZero()) return new f(this);
            for (
                l = !1,
                    (a = this.s * y(this.s * this, 1 / 3)) && Math.abs(a) != 1 / 0
                        ? (r = new f(a.toString()))
                        : ((n = k(this.d)),
                          (a = ((e = this.e) - n.length + 1) % 3) && (n += 1 == a || -2 == a ? "0" : "00"),
                          (a = y(n, 1 / 3)),
                          (e = v((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                          ((r = new f(
                              (n = a == 1 / 0 ? "5e" + e : (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + e),
                          )).s = this.s)),
                    i = (e = f.precision) + 3;
                ;
            )
                if (
                    ((r = S((c = (s = (u = r).times(u).times(u)).plus(this)).plus(this).times(u), c.plus(s), i + 2, 1)),
                    k(u.d).slice(0, i) === (n = k(r.d)).slice(0, i))
                ) {
                    if ("9999" != (n = n.slice(i - 3, i + 1)) && (o || "4999" != n)) {
                        (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                            (O(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                        break;
                    }
                    if (!o && (O(u, e + 1, 0), u.times(u).times(u).eq(this))) {
                        r = u;
                        break;
                    }
                    (i += 4), (o = 1);
                }
            return (l = !0), O(r, e, f.rounding, t);
        }),
    (x.decimalPlaces = x.dp =
        function () {
            var e,
                t = this.d,
                n = NaN;
            if (t) {
                if (((n = ((e = t.length - 1) - v(this.e / 7)) * 7), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
            }
            return n;
        }),
    (x.dividedBy = x.div =
        function (e) {
            return S(this, new this.constructor(e));
        }),
    (x.dividedToIntegerBy = x.divToInt =
        function (e) {
            var t = this.constructor;
            return O(S(this, new t(e), 0, 1, 1), t.precision, t.rounding);
        }),
    (x.equals = x.eq =
        function (e) {
            return 0 === this.cmp(e);
        }),
    (x.floor = function () {
        return O(new this.constructor(this), this.e + 1, 3);
    }),
    (x.greaterThan = x.gt =
        function (e) {
            return this.cmp(e) > 0;
        }),
    (x.greaterThanOrEqualTo = x.gte =
        function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
        }),
    (x.hyperbolicCosine = x.cosh =
        function () {
            var e,
                t,
                n,
                r,
                o,
                a = this,
                i = a.constructor,
                u = new i(1);
            if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
            if (a.isZero()) return u;
            (n = i.precision),
                (r = i.rounding),
                (i.precision = n + Math.max(a.e, a.sd()) + 4),
                (i.rounding = 1),
                (o = a.d.length) < 32
                    ? (t = (1 / H(4, (e = Math.ceil(o / 3)))).toString())
                    : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (a = W(i, 1, a.times(t), new i(1), !0));
            for (var s, l = e, c = new i(8); l--; ) (s = a.times(a)), (a = u.minus(s.times(c.minus(s.times(c)))));
            return O(a, (i.precision = n), (i.rounding = r), !0);
        }),
    (x.hyperbolicSine = x.sinh =
        function () {
            var e,
                t,
                n,
                r,
                o = this,
                a = o.constructor;
            if (!o.isFinite() || o.isZero()) return new a(o);
            if (
                ((t = a.precision),
                (n = a.rounding),
                (a.precision = t + Math.max(o.e, o.sd()) + 4),
                (a.rounding = 1),
                (r = o.d.length) < 3)
            )
                o = W(a, 2, o, o, !0);
            else {
                (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e), (o = W(a, 2, (o = o.times(1 / H(5, e))), o, !0));
                for (var i, u = new a(5), s = new a(16), l = new a(20); e--; )
                    (i = o.times(o)), (o = o.times(u.plus(i.times(s.times(i).plus(l)))));
            }
            return (a.precision = t), (a.rounding = n), O(o, t, n, !0);
        }),
    (x.hyperbolicTangent = x.tanh =
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
                      S(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(this.s);
        }),
    (x.inverseCosine = x.acos =
        function () {
            var e = this,
                t = e.constructor,
                n = e.abs().cmp(1),
                r = t.precision,
                o = t.rounding;
            return -1 !== n
                ? 0 === n
                    ? e.isNeg()
                        ? j(t, r, o)
                        : new t(0)
                    : new t(NaN)
                : e.isZero()
                  ? j(t, r + 4, o).times(0.5)
                  : ((t.precision = r + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = r),
                    (t.rounding = o),
                    e.times(2));
        }),
    (x.inverseHyperbolicCosine = x.acosh =
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
                    (l = !1),
                    (n = n.times(n).minus(1).sqrt().plus(n)),
                    (l = !0),
                    (r.precision = e),
                    (r.rounding = t),
                    n.ln())
                  : new r(n);
        }),
    (x.inverseHyperbolicSine = x.asinh =
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
    (x.inverseHyperbolicTangent = x.atanh =
        function () {
            var e,
                t,
                n,
                r,
                o = this,
                a = o.constructor;
            return o.isFinite()
                ? o.e >= 0
                    ? new a(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
                    : ((e = a.precision), (t = a.rounding), Math.max((r = o.sd()), e) < -(2 * o.e) - 1)
                      ? O(new a(o), e, t, !0)
                      : ((a.precision = n = r - o.e),
                        (o = S(o.plus(1), new a(1).minus(o), n + e, 1)),
                        (a.precision = e + 4),
                        (a.rounding = 1),
                        (o = o.ln()),
                        (a.precision = e),
                        (a.rounding = t),
                        o.times(0.5))
                : new a(NaN);
        }),
    (x.inverseSine = x.asin =
        function () {
            var e,
                t,
                n,
                r,
                o = this,
                a = o.constructor;
            return o.isZero()
                ? new a(o)
                : ((t = o.abs().cmp(1)), (n = a.precision), (r = a.rounding), -1 !== t)
                  ? 0 === t
                      ? (((e = j(a, n + 4, r).times(0.5)).s = o.s), e)
                      : new a(NaN)
                  : ((a.precision = n + 6),
                    (a.rounding = 1),
                    (o = o.div(new a(1).minus(o.times(o)).sqrt().plus(1)).atan()),
                    (a.precision = n),
                    (a.rounding = r),
                    o.times(2));
        }),
    (x.inverseTangent = x.atan =
        function () {
            var e,
                t,
                n,
                r,
                o,
                a,
                i,
                u,
                s,
                c = this,
                f = c.constructor,
                d = f.precision,
                h = f.rounding;
            if (c.isFinite()) {
                if (c.isZero()) return new f(c);
                else if (c.abs().eq(1) && d + 4 <= D) return ((i = j(f, d + 4, h).times(0.25)).s = c.s), i;
            } else {
                if (!c.s) return new f(NaN);
                if (d + 4 <= D) return ((i = j(f, d + 4, h).times(0.5)).s = c.s), i;
            }
            for (f.precision = u = d + 10, f.rounding = 1, e = n = Math.min(28, (u / 7 + 2) | 0); e; --e)
                c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (l = !1, t = Math.ceil(u / 7), r = 1, s = c.times(c), i = new f(c), o = c; -1 !== e; )
                if (
                    ((o = o.times(s)),
                    (a = i.minus(o.div((r += 2)))),
                    (o = o.times(s)),
                    void 0 !== (i = a.plus(o.div((r += 2)))).d[t])
                )
                    for (e = t; i.d[e] === a.d[e] && e--; );
            return n && (i = i.times(2 << (n - 1))), (l = !0), O(i, (f.precision = d), (f.rounding = h), !0);
        }),
    (x.isFinite = function () {
        return !!this.d;
    }),
    (x.isInteger = x.isInt =
        function () {
            return !!this.d && v(this.e / 7) > this.d.length - 2;
        }),
    (x.isNaN = function () {
        return !this.s;
    }),
    (x.isNegative = x.isNeg =
        function () {
            return this.s < 0;
        }),
    (x.isPositive = x.isPos =
        function () {
            return this.s > 0;
        }),
    (x.isZero = function () {
        return !!this.d && 0 === this.d[0];
    }),
    (x.lessThan = x.lt =
        function (e) {
            return 0 > this.cmp(e);
        }),
    (x.lessThanOrEqualTo = x.lte =
        function (e) {
            return 1 > this.cmp(e);
        }),
    (x.logarithm = x.log =
        function (e) {
            var t,
                n,
                r,
                o,
                a,
                i,
                u,
                s = this.constructor,
                c = s.precision,
                f = s.rounding;
            if (null == e) (e = new s(10)), (t = !0);
            else {
                if (((n = (e = new s(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new s(NaN);
                t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
                return new s(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
            if (t)
                if (n.length > 1) o = !0;
                else {
                    for (r = n[0]; r % 10 == 0; ) r /= 10;
                    o = 1 !== r;
                }
            if (((l = !1), C((u = S((a = U(this, (i = c + 5))), t ? F(s, i + 10) : U(e, i), i, 1)).d, (r = c), f)))
                do
                    if (((i += 10), (u = S((a = U(this, i)), t ? F(s, i + 10) : U(e, i), i, 1)), !o)) {
                        +k(u.d).slice(r + 1, r + 15) + 1 == 1e14 && (u = O(u, c + 1, 0));
                        break;
                    }
                while (C(u.d, (r += 10), f));
            return (l = !0), O(u, c, f);
        }),
    (x.minus = x.sub =
        function (e) {
            var t,
                n,
                r,
                o,
                a,
                i,
                u,
                s,
                c,
                f,
                d,
                h,
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
            if (((c = this.d), (h = e.d), (u = p.precision), (s = p.rounding), !c[0] || !h[0])) {
                if (h[0]) e.s = -e.s;
                else {
                    if (!c[0]) return new p(3 === s ? -0 : 0);
                    e = new p(this);
                }
                return l ? O(e, u, s) : e;
            }
            if (((n = v(e.e / 7)), (f = v(this.e / 7)), (c = c.slice()), (a = f - n))) {
                for (
                    (d = a < 0) ? ((t = c), (a = -a), (i = h.length)) : ((t = h), (n = f), (i = c.length)),
                        a > (r = Math.max(Math.ceil(u / 7), i) + 2) && ((a = r), (t.length = 1)),
                        t.reverse(),
                        r = a;
                    r--;
                )
                    t.push(0);
                t.reverse();
            } else {
                for ((d = (r = c.length) < (i = h.length)) && (i = r), r = 0; r < i; r++)
                    if (c[r] != h[r]) {
                        d = c[r] < h[r];
                        break;
                    }
                a = 0;
            }
            for (d && ((t = c), (c = h), (h = t), (e.s = -e.s)), i = c.length, r = h.length - i; r > 0; --r) c[i++] = 0;
            for (r = h.length; r > a; ) {
                if (c[--r] < h[r]) {
                    for (o = r; o && 0 === c[--o]; ) c[o] = 1e7 - 1;
                    --c[o], (c[r] += 1e7);
                }
                c[r] -= h[r];
            }
            for (; 0 === c[--i]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --n;
            return c[0] ? ((e.d = c), (e.e = T(c, n)), l ? O(e, u, s) : e) : new p(3 === s ? -0 : 0);
        }),
    (x.modulo = x.mod =
        function (e) {
            var t,
                n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
                ? e.d && (!this.d || this.d[0])
                    ? ((l = !1),
                      9 == n.modulo
                          ? ((t = S(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                          : (t = S(this, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (l = !0),
                      this.minus(t))
                    : O(new n(this), n.precision, n.rounding)
                : new n(NaN);
        }),
    (x.naturalExponential = x.exp =
        function () {
            return z(this);
        }),
    (x.naturalLogarithm = x.ln =
        function () {
            return U(this);
        }),
    (x.negated = x.neg =
        function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), O(e);
        }),
    (x.plus = x.add =
        function (e) {
            var t,
                n,
                r,
                o,
                a,
                i,
                u,
                s,
                c,
                f,
                d = this.constructor;
            if (((e = new d(e)), !this.d || !e.d))
                return this.s && e.s ? this.d || (e = new d(e.d || this.s === e.s ? this : NaN)) : (e = new d(NaN)), e;
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (((c = this.d), (f = e.d), (u = d.precision), (s = d.rounding), !c[0] || !f[0]))
                return f[0] || (e = new d(this)), l ? O(e, u, s) : e;
            if (((a = v(this.e / 7)), (r = v(e.e / 7)), (c = c.slice()), (o = a - r))) {
                for (
                    o < 0 ? ((n = c), (o = -o), (i = f.length)) : ((n = f), (r = a), (i = c.length)),
                        o > (i = (a = Math.ceil(u / 7)) > i ? a + 1 : i + 1) && ((o = i), (n.length = 1)),
                        n.reverse();
                    o--;
                )
                    n.push(0);
                n.reverse();
            }
            for ((i = c.length) - (o = f.length) < 0 && ((o = i), (n = f), (f = c), (c = n)), t = 0; o; )
                (t = ((c[--o] = c[o] + f[o] + t) / 1e7) | 0), (c[o] %= 1e7);
            for (t && (c.unshift(t), ++r), i = c.length; 0 == c[--i]; ) c.pop();
            return (e.d = c), (e.e = T(c, r)), l ? O(e, u, s) : e;
        }),
    (x.precision = x.sd =
        function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(f + e);
            return this.d ? ((t = P(this.d)), e && this.e + 1 > t && (t = this.e + 1)) : (t = NaN), t;
        }),
    (x.round = function () {
        var e = this.constructor;
        return O(new e(this), this.e + 1, e.rounding);
    }),
    (x.sine = x.sin =
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
                          if (r < 3) return t.isZero() ? t : W(e, 2, t, t);
                          (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                              (t = W(e, 2, (t = t.times(1 / H(5, n))), t));
                          for (var o, a = new e(5), i = new e(16), u = new e(20); n--; )
                              (o = t.times(t)), (t = t.times(a.plus(o.times(i.times(o).minus(u)))));
                          return t;
                      })(r, q(r, n))),
                      (r.precision = e),
                      (r.rounding = t),
                      O(o > 2 ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (x.squareRoot = x.sqrt =
        function () {
            var e,
                t,
                n,
                r,
                o,
                a,
                i = this.d,
                u = this.e,
                s = this.s,
                c = this.constructor;
            if (1 !== s || !i || !i[0]) return new c(!s || (s < 0 && (!i || i[0])) ? NaN : i ? this : 1 / 0);
            for (
                l = !1,
                    0 == (s = Math.sqrt(+this)) || s == 1 / 0
                        ? (((t = k(i)).length + u) % 2 == 0 && (t += "0"),
                          (s = Math.sqrt(t)),
                          (u = v((u + 1) / 2) - (u < 0 || u % 2)),
                          (r = new c(
                              (t = s == 1 / 0 ? "5e" + u : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + u),
                          )))
                        : (r = new c(s.toString())),
                    n = (u = c.precision) + 3;
                ;
            )
                if (
                    ((r = (a = r).plus(S(this, a, n + 2, 1)).times(0.5)),
                    k(a.d).slice(0, n) === (t = k(r.d)).slice(0, n))
                ) {
                    if ("9999" != (t = t.slice(n - 3, n + 1)) && (o || "4999" != t)) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) || (O(r, u + 1, 1), (e = !r.times(r).eq(this)));
                        break;
                    }
                    if (!o && (O(a, u + 1, 0), a.times(a).eq(this))) {
                        r = a;
                        break;
                    }
                    (n += 4), (o = 1);
                }
            return (l = !0), O(r, u, c.rounding, e);
        }),
    (x.tangent = x.tan =
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
                      (n = S(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                      (r.precision = e),
                      (r.rounding = t),
                      O(2 == o || 4 == o ? n.neg() : n, e, t, !0))
                : new r(NaN);
        }),
    (x.times = x.mul =
        function (e) {
            var t,
                n,
                r,
                o,
                a,
                i,
                u,
                s,
                c,
                f = this.constructor,
                d = this.d,
                h = (e = new f(e)).d;
            if (((e.s *= this.s), !d || !d[0] || !h || !h[0]))
                return new f(!e.s || (d && !d[0] && !h) || (h && !h[0] && !d) ? NaN : !d || !h ? e.s / 0 : 0 * e.s);
            for (
                n = v(this.e / 7) + v(e.e / 7),
                    (s = d.length) < (c = h.length) && ((a = d), (d = h), (h = a), (i = s), (s = c), (c = i)),
                    a = [],
                    r = i = s + c;
                r--;
            )
                a.push(0);
            for (r = c; --r >= 0; ) {
                for (t = 0, o = s + r; o > r; )
                    (u = a[o] + h[r] * d[o - r - 1] + t), (a[o--] = (u % 1e7) | 0), (t = (u / 1e7) | 0);
                a[o] = ((a[o] + t) % 1e7) | 0;
            }
            for (; !a[--i]; ) a.pop();
            return t ? ++n : a.shift(), (e.d = a), (e.e = T(a, n)), l ? O(e, f.precision, f.rounding) : e;
        }),
    (x.toBinary = function (e, t) {
        return $(this, 2, e, t);
    }),
    (x.toDecimalPlaces = x.toDP =
        function (e, t) {
            var n = this,
                r = n.constructor;
            return ((n = new r(n)), void 0 === e)
                ? n
                : (E(e, 0, 1e9), void 0 === t ? (t = r.rounding) : E(t, 0, 8), O(n, e + n.e + 1, t));
        }),
    (x.toExponential = function (e, t) {
        var n,
            r = this,
            o = r.constructor;
        return (
            void 0 === e
                ? (n = B(r, !0))
                : (E(e, 0, 1e9),
                  void 0 === t ? (t = o.rounding) : E(t, 0, 8),
                  (n = B((r = O(new o(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (x.toFixed = function (e, t) {
        var n,
            r,
            o = this.constructor;
        return (
            void 0 === e
                ? (n = B(this))
                : (E(e, 0, 1e9),
                  void 0 === t ? (t = o.rounding) : E(t, 0, 8),
                  (n = B((r = O(new o(this), e + this.e + 1, t)), !1, e + r.e + 1))),
            this.isNeg() && !this.isZero() ? "-" + n : n
        );
    }),
    (x.toFraction = function (e) {
        var t,
            n,
            r,
            o,
            a,
            i,
            u,
            s,
            c,
            d,
            h,
            p,
            v = this.d,
            g = this.constructor;
        if (!v) return new g(this);
        if (
            ((c = n = new g(1)),
            (r = s = new g(0)),
            (i = (a = (t = new g(r)).e = P(v) - this.e - 1) % 7),
            (t.d[0] = y(10, i < 0 ? 7 + i : i)),
            null == e)
        )
            e = a > 0 ? t : c;
        else {
            if (!(u = new g(e)).isInt() || u.lt(c)) throw Error(f + u);
            e = u.gt(t) ? (a > 0 ? t : c) : u;
        }
        for (
            l = !1, u = new g(k(v)), d = g.precision, g.precision = a = 7 * v.length * 2;
            (h = S(u, t, 0, 1, 1)), 1 != (o = n.plus(h.times(r))).cmp(e);
        )
            (n = r), (r = o), (o = c), (c = s.plus(h.times(o))), (s = o), (o = t), (t = u.minus(h.times(o))), (u = o);
        return (
            (o = S(e.minus(n), r, 0, 1, 1)),
            (s = s.plus(o.times(c))),
            (n = n.plus(o.times(r))),
            (s.s = c.s = this.s),
            (p =
                1 >
                S(c, r, a, 1)
                    .minus(this)
                    .abs()
                    .cmp(S(s, n, a, 1).minus(this).abs())
                    ? [c, r]
                    : [s, n]),
            (g.precision = d),
            (l = !0),
            p
        );
    }),
    (x.toHexadecimal = x.toHex =
        function (e, t) {
            return $(this, 16, e, t);
        }),
    (x.toNearest = function (e, t) {
        var n = this,
            r = n.constructor;
        if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
        } else {
            if (((e = new r(e)), void 0 === t ? (t = r.rounding) : E(t, 0, 8), !n.d)) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? ((l = !1), (n = S(n, e, 0, t, 1).times(e)), (l = !0), O(n)) : ((e.s = n.s), (n = e)), n;
    }),
    (x.toNumber = function () {
        return +this;
    }),
    (x.toOctal = function (e, t) {
        return $(this, 8, e, t);
    }),
    (x.toPower = x.pow =
        function (e) {
            var t,
                n,
                r,
                o,
                a,
                i,
                u = this,
                s = u.constructor,
                c = +(e = new s(e));
            if (!u.d || !e.d || !u.d[0] || !e.d[0]) return new s(y(+u, c));
            if ((u = new s(u)).eq(1)) return u;
            if (((r = s.precision), (a = s.rounding), e.eq(1))) return O(u, r, a);
            if ((t = v(e.e / 7)) >= e.d.length - 1 && (n = c < 0 ? -c : c) <= 0x1fffffffffffff)
                return (o = M(s, u, n, r)), e.s < 0 ? new s(1).div(o) : O(o, r, a);
            if ((i = u.s) < 0) {
                if (t < e.d.length - 1) return new s(NaN);
                if (((1 & e.d[t]) == 0 && (i = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length)) return (u.s = i), u;
            }
            return (t =
                0 != (n = y(+u, c)) && isFinite(n)
                    ? new s(n + "").e
                    : v(c * (Math.log("0." + k(u.d)) / Math.LN10 + u.e + 1))) >
                s.maxE + 1 || t < s.minE - 1
                ? new s(t > 0 ? i / 0 : 0)
                : ((l = !1),
                  (s.rounding = u.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (o = z(e.times(U(u, r + n)), r)).d &&
                      C((o = O(o, r + 5, 1)).d, r, a) &&
                      ((t = r + 10),
                      +k((o = O(z(e.times(U(u, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 &&
                          (o = O(o, r + 1, 0))),
                  (o.s = i),
                  (l = !0),
                  (s.rounding = a),
                  O(o, r, a));
        }),
    (x.toPrecision = function (e, t) {
        var n,
            r = this,
            o = r.constructor;
        return (
            void 0 === e
                ? (n = B(r, r.e <= o.toExpNeg || r.e >= o.toExpPos))
                : (E(e, 1, 1e9),
                  void 0 === t ? (t = o.rounding) : E(t, 0, 8),
                  (n = B((r = O(new o(r), e, t)), e <= r.e || r.e <= o.toExpNeg, e))),
            r.isNeg() && !r.isZero() ? "-" + n : n
        );
    }),
    (x.toSignificantDigits = x.toSD =
        function (e, t) {
            var n = this.constructor;
            return (
                void 0 === e
                    ? ((e = n.precision), (t = n.rounding))
                    : (E(e, 1, 1e9), void 0 === t ? (t = n.rounding) : E(t, 0, 8)),
                O(new n(this), e, t)
            );
        }),
    (x.toString = function () {
        var e = this.constructor,
            t = B(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
        return this.isNeg() && !this.isZero() ? "-" + t : t;
    }),
    (x.truncated = x.trunc =
        function () {
            return O(new this.constructor(this), this.e + 1, 1);
        }),
    (x.valueOf = x.toJSON =
        function () {
            var e = this.constructor,
                t = B(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
        });
var S = (function () {
    function e(e, t, n) {
        var r,
            o = 0,
            a = e.length;
        for (e = e.slice(); a--; ) (r = e[a] * t + o), (e[a] = (r % n) | 0), (o = (r / n) | 0);
        return o && e.unshift(o), e;
    }
    function t(e, t, n, r) {
        var o, a;
        if (n != r) a = n > r ? 1 : -1;
        else
            for (o = a = 0; o < n; o++)
                if (e[o] != t[o]) {
                    a = e[o] > t[o] ? 1 : -1;
                    break;
                }
        return a;
    }
    function n(e, t, n, r) {
        for (var o = 0; n--; ) (e[n] -= o), (o = +(e[n] < t[n])), (e[n] = o * r + e[n] - t[n]);
        for (; !e[0] && e.length > 1; ) e.shift();
    }
    return function (o, a, i, u, s, l) {
        var c,
            f,
            d,
            h,
            p,
            y,
            g,
            m,
            b,
            w,
            _,
            D,
            x,
            k,
            E,
            C,
            A,
            S,
            B,
            T,
            F = o.constructor,
            j = o.s == a.s ? 1 : -1,
            P = o.d,
            R = a.d;
        if (!P || !P[0] || !R || !R[0])
            return new F(!o.s || !a.s || (P ? R && P[0] == R[0] : !R) ? NaN : (P && 0 == P[0]) || !R ? 0 * j : j / 0);
        for (
            l ? ((p = 1), (f = o.e - a.e)) : ((l = 1e7), (p = 7), (f = v(o.e / p) - v(a.e / p))),
                B = R.length,
                A = P.length,
                w = (b = new F(j)).d = [],
                d = 0;
            R[d] == (P[d] || 0);
            d++
        );
        if (
            (R[d] > (P[d] || 0) && f--,
            null == i ? ((k = i = F.precision), (u = F.rounding)) : (k = s ? i + (o.e - a.e) + 1 : i),
            k < 0)
        )
            w.push(1), (y = !0);
        else {
            if (((k = (k / p + 2) | 0), (d = 0), 1 == B)) {
                for (h = 0, R = R[0], k++; (d < A || h) && k--; d++)
                    (E = h * l + (P[d] || 0)), (w[d] = (E / R) | 0), (h = (E % R) | 0);
                y = h || d < A;
            } else {
                for (
                    (h = (l / (R[0] + 1)) | 0) > 1 &&
                        ((R = e(R, h, l)), (P = e(P, h, l)), (B = R.length), (A = P.length)),
                        C = B,
                        D = (_ = P.slice(0, B)).length;
                    D < B;
                )
                    _[D++] = 0;
                (T = R.slice()).unshift(0), (S = R[0]), R[1] >= l / 2 && ++S;
                do
                    (h = 0),
                        (c = t(R, _, B, D)) < 0
                            ? ((x = _[0]),
                              B != D && (x = x * l + (_[1] || 0)),
                              (h = (x / S) | 0) > 1
                                  ? (h >= l && (h = l - 1),
                                    (m = (g = e(R, h, l)).length),
                                    (D = _.length),
                                    1 == (c = t(g, _, m, D)) && (h--, n(g, B < m ? T : R, m, l)))
                                  : (0 == h && (c = h = 1), (g = R.slice())),
                              (m = g.length) < D && g.unshift(0),
                              n(_, g, D, l),
                              -1 == c && ((D = _.length), (c = t(R, _, B, D)) < 1 && (h++, n(_, B < D ? T : R, D, l))),
                              (D = _.length))
                            : 0 === c && (h++, (_ = [0])),
                        (w[d++] = h),
                        c && _[0] ? (_[D++] = P[C] || 0) : ((_ = [P[C]]), (D = 1));
                while ((C++ < A || void 0 !== _[0]) && k--);
                y = void 0 !== _[0];
            }
            w[0] || w.shift();
        }
        if (1 == p) (b.e = f), (r = y);
        else {
            for (d = 1, h = w[0]; h >= 10; h /= 10) d++;
            (b.e = d + f * p - 1), O(b, s ? i + b.e + 1 : i, u, y);
        }
        return b;
    };
})();
function O(e, t, n, r) {
    var o,
        a,
        i,
        u,
        s,
        c,
        f,
        d,
        h,
        p = e.constructor;
    i: if (null != t) {
        if (!(d = e.d)) return e;
        for (o = 1, u = d[0]; u >= 10; u /= 10) o++;
        if ((a = t - o) < 0) (a += 7), (i = t), (s = (((f = d[(h = 0)]) / y(10, o - i - 1)) % 10) | 0);
        else if ((h = Math.ceil((a + 1) / 7)) >= (u = d.length))
            if (r) {
                for (; u++ <= h; ) d.push(0);
                (f = s = 0), (o = 1), (a %= 7), (i = a - 7 + 1);
            } else break i;
        else {
            for (o = 1, f = u = d[h]; u >= 10; u /= 10) o++;
            (a %= 7), (s = (i = a - 7 + o) < 0 ? 0 : ((f / y(10, o - i - 1)) % 10) | 0);
        }
        if (
            ((r = r || t < 0 || void 0 !== d[h + 1] || (i < 0 ? f : f % y(10, o - i - 1))),
            (c =
                n < 4
                    ? (s || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : s > 5 ||
                      (5 == s &&
                          (4 == n ||
                              r ||
                              (6 == n && ((a > 0 ? (i > 0 ? f / y(10, o - i) : 0) : d[h - 1]) % 10) & 1) ||
                              n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !d[0])
        )
            return (
                (d.length = 0),
                c ? ((t -= e.e + 1), (d[0] = y(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (d[0] = e.e = 0),
                e
            );
        if (
            (0 == a
                ? ((d.length = h), (u = 1), h--)
                : ((d.length = h + 1),
                  (u = y(10, 7 - a)),
                  (d[h] = i > 0 ? (((f / y(10, o - i)) % y(10, i)) | 0) * u : 0)),
            c)
        )
            for (;;)
                if (0 == h) {
                    for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
                    for (i = d[0] += u, u = 1; i >= 10; i /= 10) u++;
                    a != u && (e.e++, 1e7 == d[0] && (d[0] = 1));
                    break;
                } else {
                    if (((d[h] += u), 1e7 != d[h])) break;
                    (d[h--] = 0), (u = 1);
                }
        for (a = d.length; 0 === d[--a]; ) d.pop();
    }
    return l && (e.e > p.maxE ? ((e.d = null), (e.e = NaN)) : e.e < p.minE && ((e.e = 0), (e.d = [0]))), e;
}
function B(e, t, n) {
    if (!e.isFinite()) return I(e);
    var r,
        o = e.e,
        a = k(e.d),
        i = a.length;
    return (
        t
            ? (n && (r = n - i) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + R(r))
                  : i > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (e.e < 0 ? "e" : "e+") + e.e))
            : o < 0
              ? ((a = "0." + R(-o - 1) + a), n && (r = n - i) > 0 && (a += R(r)))
              : o >= i
                ? ((a += R(o + 1 - i)), n && (r = n - o - 1) > 0 && (a = a + "." + R(r)))
                : ((r = o + 1) < i && (a = a.slice(0, r) + "." + a.slice(r)),
                  n && (r = n - i) > 0 && (o + 1 === i && (a += "."), (a += R(r)))),
        a
    );
}
function T(e, t) {
    var n = e[0];
    for (t *= 7; n >= 10; n /= 10) t++;
    return t;
}
function F(e, t, n) {
    if (t > _) throw ((l = !0), n && (e.precision = n), Error(d));
    return O(new e(i), t, 1, !0);
}
function j(e, t, n) {
    if (t > D) throw Error(d);
    return O(new e(u), t, n, !0);
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
function R(e) {
    for (var t = ""; e--; ) t += "0";
    return t;
}
function M(e, t, n, r) {
    var o,
        a = new e(1),
        i = Math.ceil(r / 7 + 4);
    for (l = !1; ; ) {
        if ((n % 2 && V((a = a.times(t)).d, i) && (o = !0), 0 === (n = v(n / 2)))) {
            (n = a.d.length - 1), o && 0 === a.d[n] && ++a.d[n];
            break;
        }
        V((t = t.times(t)).d, i);
    }
    return (l = !0), a;
}
function N(e) {
    return 1 & e.d[e.d.length - 1];
}
function L(e, t, n) {
    for (var r, o, a = new e(t[0]), i = 0; ++i < t.length; ) {
        if (!(o = new e(t[i])).s) {
            a = o;
            break;
        }
        ((r = a.cmp(o)) === n || (0 === r && a.s === n)) && (a = o);
    }
    return a;
}
function z(e, t) {
    var n,
        r,
        o,
        a,
        i,
        u,
        s,
        c = 0,
        f = 0,
        d = 0,
        h = e.constructor,
        p = h.rounding,
        v = h.precision;
    if (!e.d || !e.d[0] || e.e > 17)
        return new h(e.d ? (!e.d[0] ? 1 : e.s < 0 ? 0 : 1 / 0) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
    for (null == t ? ((l = !1), (s = v)) : (s = t), u = new h(0.03125); e.e > -2; ) (e = e.times(u)), (d += 5);
    for (s += r = ((Math.log(y(2, d)) / Math.LN10) * 2 + 5) | 0, n = a = i = new h(1), h.precision = s; ; ) {
        if (
            ((a = O(a.times(e), s, 1)),
            (n = n.times(++f)),
            k((u = i.plus(S(a, n, s, 1))).d).slice(0, s) === k(i.d).slice(0, s))
        ) {
            for (o = d; o--; ) i = O(i.times(i), s, 1);
            if (null != t) return (h.precision = v), i;
            if (!(c < 3 && C(i.d, s - r, p, c))) return O(i, (h.precision = v), p, (l = !0));
            (h.precision = s += 10), (n = a = u = new h(1)), (f = 0), c++;
        }
        i = u;
    }
}
function U(e, t) {
    var n,
        r,
        o,
        a,
        i,
        u,
        s,
        c,
        f,
        d,
        h,
        p = 1,
        v = e,
        y = v.d,
        g = v.constructor,
        m = g.rounding,
        b = g.precision;
    if (v.s < 0 || !y || !y[0] || (!v.e && 1 == y[0] && 1 == y.length))
        return new g(y && !y[0] ? -1 / 0 : 1 != v.s ? NaN : y ? 0 : v);
    if (
        (null == t ? ((l = !1), (f = b)) : (f = t),
        (g.precision = f += 10),
        (r = (n = k(y)).charAt(0)),
        !(15e14 > Math.abs((a = v.e))))
    )
        return (
            (c = F(g, f + 2, b).times(a + "")),
            (v = U(new g(r + "." + n.slice(1)), f - 10).plus(c)),
            (g.precision = b),
            null == t ? O(v, b, m, (l = !0)) : v
        );
    for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); ) (r = (n = k((v = v.times(e)).d)).charAt(0)), p++;
    for (
        a = v.e,
            r > 1 ? ((v = new g("0." + n)), a++) : (v = new g(r + "." + n.slice(1))),
            d = v,
            s = i = v = S(v.minus(1), v.plus(1), f, 1),
            h = O(v.times(v), f, 1),
            o = 3;
        ;
    ) {
        if (((i = O(i.times(h), f, 1)), k((c = s.plus(S(i, new g(o), f, 1))).d).slice(0, f) === k(s.d).slice(0, f))) {
            if (
                ((s = s.times(2)),
                0 !== a && (s = s.plus(F(g, f + 2, b).times(a + ""))),
                (s = S(s, new g(p), f, 1)),
                null != t)
            )
                return (g.precision = b), s;
            if (!C(s.d, f - 10, m, u)) return O(s, (g.precision = b), m, (l = !0));
            (g.precision = f += 10),
                (c = i = v = S(d.minus(1), d.plus(1), f, 1)),
                (h = O(v.times(v), f, 1)),
                (o = u = 1);
        }
        (s = c), (o += 2);
    }
}
function I(e) {
    return String((e.s * e.s) / 0);
}
function Y(e, t) {
    var n, r, o;
    for (
        (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
                ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
                : n < 0 && (n = t.length),
            r = 0;
        48 === t.charCodeAt(r);
        r++
    );
    for (o = t.length; 48 === t.charCodeAt(o - 1); --o);
    if ((t = t.slice(r, o))) {
        if (((o -= r), (e.e = n = n - r - 1), (e.d = []), (r = (n + 1) % 7), n < 0 && (r += 7), r < o)) {
            for (r && e.d.push(+t.slice(0, r)), o -= 7; r < o; ) e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
        } else r -= o;
        for (; r--; ) t += "0";
        e.d.push(+t),
            l &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
}
function W(e, t, n, r, o) {
    var a,
        i,
        u,
        s,
        c = e.precision,
        f = Math.ceil(c / 7);
    for (l = !1, s = n.times(n), u = new e(r); ; ) {
        if (
            ((i = S(u.times(s), new e(t++ * t++), c, 1)),
            (u = o ? r.plus(i) : r.minus(i)),
            (r = S(i.times(s), new e(t++ * t++), c, 1)),
            void 0 !== (i = u.plus(r)).d[f])
        ) {
            for (a = f; i.d[a] === u.d[a] && a--; );
            if (-1 == a) break;
        }
        (a = u), (u = r), (r = i), (i = a);
    }
    return (l = !0), (i.d.length = f + 1), i;
}
function H(e, t) {
    for (var n = e; --t; ) n *= e;
    return n;
}
function q(e, t) {
    var n,
        r = t.s < 0,
        a = j(e, e.precision, 1),
        i = a.times(0.5);
    if ((t = t.abs()).lte(i)) return (o = r ? 4 : 1), t;
    if ((n = t.divToInt(a)).isZero()) o = r ? 3 : 2;
    else {
        if ((t = t.minus(n.times(a))).lte(i)) return (o = N(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
        o = N(n) ? (r ? 1 : 4) : r ? 3 : 2;
    }
    return t.minus(a).abs();
}
function $(e, t, n, o) {
    var i,
        u,
        s,
        l,
        c,
        f,
        d,
        h,
        p,
        v = e.constructor,
        y = void 0 !== n;
    if (
        (y ? (E(n, 1, 1e9), void 0 === o ? (o = v.rounding) : E(o, 0, 8)) : ((n = v.precision), (o = v.rounding)),
        e.isFinite())
    ) {
        for (
            s = (d = B(e)).indexOf("."),
                y ? ((i = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (i = t),
                s >= 0 &&
                    ((d = d.replace(".", "")),
                    ((p = new v(1)).e = d.length - s),
                    (p.d = A(B(p), 10, i)),
                    (p.e = p.d.length)),
                u = c = (h = A(d, 10, i)).length;
            0 == h[--c];
        )
            h.pop();
        if (h[0]) {
            if (
                (s < 0
                    ? u--
                    : (((e = new v(e)).d = h), (e.e = u), (h = (e = S(e, p, n, o, 0, i)).d), (u = e.e), (f = r)),
                (s = h[n]),
                (l = i / 2),
                (f = f || void 0 !== h[n + 1]),
                (f =
                    o < 4
                        ? (void 0 !== s || f) && (0 === o || o === (e.s < 0 ? 3 : 2))
                        : s > l || (s === l && (4 === o || f || (6 === o && 1 & h[n - 1]) || o === (e.s < 0 ? 8 : 7)))),
                (h.length = n),
                f)
            )
                for (; ++h[--n] > i - 1; ) (h[n] = 0), n || (++u, h.unshift(1));
            for (c = h.length; !h[c - 1]; --c);
            for (s = 0, d = ""; s < c; s++) d += a.charAt(h[s]);
            if (y) {
                if (c > 1)
                    if (16 == t || 8 == t) {
                        for (s = 16 == t ? 4 : 3, --c; c % s; c++) d += "0";
                        for (c = (h = A(d, i, t)).length; !h[c - 1]; --c);
                        for (s = 1, d = "1."; s < c; s++) d += a.charAt(h[s]);
                    } else d = d.charAt(0) + "." + d.slice(1);
                d = d + (u < 0 ? "p" : "p+") + u;
            } else if (u < 0) {
                for (; ++u; ) d = "0" + d;
                d = "0." + d;
            } else if (++u > c) for (u -= c; u--; ) d += "0";
            else u < c && (d = d.slice(0, u) + "." + d.slice(u));
        } else d = y ? "0p+0" : "0";
        d = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + d;
    } else d = I(e);
    return e.s < 0 ? "-" + d : d;
}
function V(e, t) {
    if (e.length > t) return (e.length = t), !0;
}
function K(e) {
    return new this(e).abs();
}
function Q(e) {
    return new this(e).acos();
}
function G(e) {
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
        o = this.rounding,
        a = r + 4;
    return (
        e.s && t.s
            ? e.d || t.d
                ? !t.d || e.isZero()
                    ? ((n = t.s < 0 ? j(this, r, o) : new this(0)).s = e.s)
                    : !e.d || t.isZero()
                      ? ((n = j(this, a, 1).times(0.5)).s = e.s)
                      : t.s < 0
                        ? ((this.precision = a),
                          (this.rounding = 1),
                          (n = this.atan(S(e, t, a, 1))),
                          (t = j(this, a, 1)),
                          (this.precision = r),
                          (this.rounding = o),
                          (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                        : (n = this.atan(S(e, t, a, 1)))
                : ((n = j(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
        n
    );
}
function er(e) {
    return new this(e).cbrt();
}
function eo(e) {
    return O((e = new this(e)), e.e + 1, 2);
}
function ea(e, t, n) {
    return new this(e).clamp(t, n);
}
function ei(e) {
    if (!e || "object" != typeof e) throw Error(c + "Object expected");
    var t,
        n,
        r,
        o = !0 === e.defaults,
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
        if (((n = a[t]), o && (this[n] = s[n]), void 0 !== (r = e[n])))
            if (v(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
            else throw Error(f + n + ": " + r);
    if (((n = "crypto"), o && (this[n] = s[n]), void 0 !== (r = e[n])))
        if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
                if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                else throw Error(h);
            else this[n] = !1;
        else throw Error(f + n + ": " + r);
    return this;
}
function eu(e) {
    return new this(e).cos();
}
function es(e) {
    return new this(e).cosh();
}
function el(e, t) {
    return new this(e).div(t);
}
function ec(e) {
    return new this(e).exp();
}
function ef(e) {
    return O((e = new this(e)), e.e + 1, 3);
}
function ed() {
    var e,
        t,
        n = new this(0);
    for (e = 0, l = !1; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
        else {
            if (t.s) return (l = !0), new this(1 / 0);
            n = t;
        }
    return (l = !0), n.sqrt();
}
function eh(e) {
    return e instanceof eP || (e && e.toStringTag === p) || !1;
}
function ep(e) {
    return new this(e).ln();
}
function ev(e, t) {
    return new this(e).log(t);
}
function ey(e) {
    return new this(e).log(2);
}
function eg(e) {
    return new this(e).log(10);
}
function em() {
    return L(this, arguments, -1);
}
function eb() {
    return L(this, arguments, 1);
}
function ew(e, t) {
    return new this(e).mod(t);
}
function e_(e, t) {
    return new this(e).mul(t);
}
function eD(e, t) {
    return new this(e).pow(t);
}
function ex(e) {
    var t,
        n,
        r,
        o,
        a = 0,
        i = new this(1),
        u = [];
    if ((void 0 === e ? (e = this.precision) : E(e, 1, 1e9), (r = Math.ceil(e / 7)), this.crypto))
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); a < r; )
                (o = t[a]) >= 429e7 ? (t[a] = crypto.getRandomValues(new Uint32Array(1))[0]) : (u[a++] = o % 1e7);
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); a < r; )
                (o = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7
                    ? crypto.randomBytes(4).copy(t, a)
                    : (u.push(o % 1e7), (a += 4));
            a = r / 4;
        } else throw Error(h);
    else for (; a < r; ) u[a++] = (1e7 * Math.random()) | 0;
    for (r = u[--a], e %= 7, r && e && ((o = y(10, 7 - e)), (u[a] = ((r / o) | 0) * o)); 0 === u[a]; a--) u.pop();
    if (a < 0) (n = 0), (u = [0]);
    else {
        for (n = -1; 0 === u[0]; n -= 7) u.shift();
        for (r = 1, o = u[0]; o >= 10; o /= 10) r++;
        r < 7 && (n -= 7 - r);
    }
    return (i.e = n), (i.d = u), i;
}
function ek(e) {
    return O((e = new this(e)), e.e + 1, this.rounding);
}
function eE(e) {
    return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function eC(e) {
    return new this(e).sin();
}
function eA(e) {
    return new this(e).sinh();
}
function eS(e) {
    return new this(e).sqrt();
}
function eO(e, t) {
    return new this(e).sub(t);
}
function eB() {
    var e = 0,
        t = arguments,
        n = new this(t[0]);
    for (l = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
    return (l = !0), O(n, this.precision, this.rounding);
}
function eT(e) {
    return new this(e).tan();
}
function eF(e) {
    return new this(e).tanh();
}
function ej(e) {
    return O((e = new this(e)), e.e + 1, 1);
}
(x[Symbol.for("nodejs.util.inspect.custom")] = x.toString), (x[Symbol.toStringTag] = "Decimal");
var eP = (x.constructor = (function e(t) {
    var n, r, o;
    function a(e) {
        var t, n, r;
        if (!(this instanceof a)) return new a(e);
        if (((this.constructor = a), eh(e))) {
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
        if ("number" == (r = typeof e)) {
            if (0 === e) {
                (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
            }
            if ((e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), e === ~~e && e < 1e7)) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
                l
                    ? t > a.maxE
                        ? ((this.e = NaN), (this.d = null))
                        : t < a.minE
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
        if ("string" === r)
            return (
                45 === (n = e.charCodeAt(0))
                    ? ((e = e.slice(1)), (this.s = -1))
                    : (43 === n && (e = e.slice(1)), (this.s = 1)),
                w.test(e)
                    ? Y(this, e)
                    : (function (e, t) {
                          var n, r, o, a, i, u, s, c, d;
                          if (t.indexOf("_") > -1) {
                              if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), w.test(t))) return Y(e, t);
                          } else if ("Infinity" === t || "NaN" === t)
                              return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                          if (m.test(t)) (n = 16), (t = t.toLowerCase());
                          else if (g.test(t)) n = 2;
                          else if (b.test(t)) n = 8;
                          else throw Error(f + t);
                          for (
                              (a = t.search(/p/i)) > 0
                                  ? ((s = +t.slice(a + 1)), (t = t.substring(2, a)))
                                  : (t = t.slice(2)),
                                  i = (a = t.indexOf(".")) >= 0,
                                  r = e.constructor,
                                  i &&
                                      ((a = (u = (t = t.replace(".", "")).length) - a), (o = M(r, new r(n), a, 2 * a))),
                                  a = d = (c = A(t, n, 1e7)).length - 1;
                              0 === c[a];
                              --a
                          )
                              c.pop();
                          return a < 0
                              ? new r(0 * e.s)
                              : ((e.e = T(c, d)),
                                (e.d = c),
                                (l = !1),
                                i && (e = S(e, o, 4 * u)),
                                s && (e = e.times(54 > Math.abs(s) ? y(2, s) : eP.pow(2, s))),
                                (l = !0),
                                e);
                      })(this, e)
            );
        if ("bigint" === r) return e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1), Y(this, e.toString());
        throw Error(f + e);
    }
    if (
        ((a.prototype = x),
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
        (a.config = a.set = ei),
        (a.clone = e),
        (a.isDecimal = eh),
        (a.abs = K),
        (a.acos = Q),
        (a.acosh = G),
        (a.add = X),
        (a.asin = Z),
        (a.asinh = J),
        (a.atan = ee),
        (a.atanh = et),
        (a.atan2 = en),
        (a.cbrt = er),
        (a.ceil = eo),
        (a.clamp = ea),
        (a.cos = eu),
        (a.cosh = es),
        (a.div = el),
        (a.exp = ec),
        (a.floor = ef),
        (a.hypot = ed),
        (a.ln = ep),
        (a.log = ev),
        (a.log10 = eg),
        (a.log2 = ey),
        (a.max = em),
        (a.min = eb),
        (a.mod = ew),
        (a.mul = e_),
        (a.pow = eD),
        (a.random = ex),
        (a.round = ek),
        (a.sign = eE),
        (a.sin = eC),
        (a.sinh = eA),
        (a.sqrt = eS),
        (a.sub = eO),
        (a.sum = eB),
        (a.tan = eT),
        (a.tanh = eF),
        (a.trunc = ej),
        void 0 === t && (t = {}),
        t && !0 !== t.defaults)
    )
        for (
            n = 0, o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
            n < o.length;
        )
            t.hasOwnProperty((r = o[n++])) || (t[r] = this[r]);
    return a.config(t), a;
})(s));
(i = new eP(i)), (u = new eP(u));
