"use strict";
n.d(t, { t: () => _ });
var r = n(114922),
    i = n(222367),
    s = n(904514),
    a = n(90727),
    o = n(787920),
    l = n(391898),
    u = n(551253),
    d = n(720520),
    c = n(327854);
function _(e, t) {
    var n,
        u,
        _,
        h,
        p,
        m,
        g,
        A = t.dtstart,
        I = t.freq,
        T = t.interval,
        S = t.until,
        y = t.bysetpos,
        N = t.count;
    if (0 === N || 0 === T) return E(e);
    var O = c.c.fromDate(A),
        R = new s.A(t);
    R.rebuild(O.year, O.month);
    for (
        var v =
            ((n = R),
            (u = O),
            (h = (_ = t).freq),
            (p = _.byhour),
            (m = _.byminute),
            (g = _.bysecond),
            (0, r.d)(h)
                ? (0, o.eN)(_)
                : (h >= a.p3.HOURLY && (0, l.z2)(p) && !(0, l.mK)(p, u.hour)) ||
                    (h >= a.p3.MINUTELY && (0, l.z2)(m) && !(0, l.mK)(m, u.minute)) ||
                    (h >= a.p3.SECONDLY && (0, l.z2)(g) && !(0, l.mK)(g, u.second))
                  ? []
                  : n.gettimeset(h)(u.hour, u.minute, u.second, u.millisecond));
        ;
    ) {
        var C = R.getdayset(I)(O.year, O.month, O.day),
            b = C[0],
            D = C[1],
            L = C[2],
            w = (function (e, t, n, r, i) {
                for (var s = !1, a = t; a < n; a++) {
                    var o = e[a];
                    (s = (function (e, t, n) {
                        var r = n.bymonth,
                            i = n.byweekno,
                            s = n.byweekday,
                            a = n.byeaster,
                            o = n.bymonthday,
                            u = n.bynmonthday,
                            d = n.byyearday;
                        return (
                            ((0, l.z2)(r) && !(0, l.mK)(r, e.mmask[t])) ||
                            ((0, l.z2)(i) && !e.wnomask[t]) ||
                            ((0, l.z2)(s) && !(0, l.mK)(s, e.wdaymask[t])) ||
                            ((0, l.z2)(e.nwdaymask) && !e.nwdaymask[t]) ||
                            (null !== a && !(0, l.mK)(e.eastermask, t)) ||
                            (((0, l.z2)(o) || (0, l.z2)(u)) &&
                                !(0, l.mK)(o, e.mdaymask[t]) &&
                                !(0, l.mK)(u, e.nmdaymask[t])) ||
                            ((0, l.z2)(d) &&
                                ((t < e.yearlen && !(0, l.mK)(d, t + 1) && !(0, l.mK)(d, -e.yearlen + t)) ||
                                    (t >= e.yearlen &&
                                        !(0, l.mK)(d, t + 1 - e.yearlen) &&
                                        !(0, l.mK)(d, -e.nextyearlen + t - e.yearlen))))
                        );
                    })(r, o, i)) && (e[o] = null);
                }
                return s;
            })(b, D, L, R, t);
        if ((0, l.z2)(y))
            for (var M = (0, d.B)(y, v, D, L, R, b), P = 0; P < M.length; P++) {
                var U = M[P];
                if (S && U > S) return E(e);
                if (U >= A) {
                    var k = f(U, t);
                    if (!e.accept(k) || (N && !--N)) return E(e);
                }
            }
        else
            for (var P = D; P < L; P++) {
                var x = b[P];
                if ((0, l.Wo)(x))
                    for (var G = (0, i.Y_)(R.yearordinal + x), V = 0; V < v.length; V++) {
                        var F = v[V],
                            U = (0, i.kg)(G, F);
                        if (S && U > S) return E(e);
                        if (U >= A) {
                            var k = f(U, t);
                            if (!e.accept(k) || (N && !--N)) return E(e);
                        }
                    }
            }
        if (0 === t.interval || (O.add(t, w), O.year > i.KE)) return E(e);
        (0, r.d)(I) || (v = R.gettimeset(I)(O.hour, O.minute, O.second, 0)), R.rebuild(O.year, O.month);
    }
}
function f(e, t) {
    return new u.x(e, t.tzid).rezonedDate();
}
function E(e) {
    return e.getValue();
}
