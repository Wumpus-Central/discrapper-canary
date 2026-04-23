"use strict";
n.d(t, { t: () => _ });
var r = n(114922),
    i = n(222367),
    s = n(904514),
    a = n(90727),
    o = n(787920),
    l = n(391898),
    u = n(551253),
    c = n(720520),
    d = n(327854);
function _(e, t) {
    var n,
        u,
        _,
        h,
        E,
        m,
        g,
        A = t.dtstart,
        I = t.freq,
        T = t.interval,
        S = t.until,
        y = t.bysetpos,
        N = t.count;
    if (0 === N || 0 === T) return p(e);
    var v = d.c.fromDate(A),
        C = new s.A(t);
    C.rebuild(v.year, v.month);
    for (
        var O =
            ((n = C),
            (u = v),
            (h = (_ = t).freq),
            (E = _.byhour),
            (m = _.byminute),
            (g = _.bysecond),
            (0, r.d)(h)
                ? (0, o.eN)(_)
                : (h >= a.p3.HOURLY && (0, l.z2)(E) && !(0, l.mK)(E, u.hour)) ||
                    (h >= a.p3.MINUTELY && (0, l.z2)(m) && !(0, l.mK)(m, u.minute)) ||
                    (h >= a.p3.SECONDLY && (0, l.z2)(g) && !(0, l.mK)(g, u.second))
                  ? []
                  : n.gettimeset(h)(u.hour, u.minute, u.second, u.millisecond));
        ;
    ) {
        var R = C.getdayset(I)(v.year, v.month, v.day),
            b = R[0],
            D = R[1],
            L = R[2],
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
                            c = n.byyearday;
                        return (
                            ((0, l.z2)(r) && !(0, l.mK)(r, e.mmask[t])) ||
                            ((0, l.z2)(i) && !e.wnomask[t]) ||
                            ((0, l.z2)(s) && !(0, l.mK)(s, e.wdaymask[t])) ||
                            ((0, l.z2)(e.nwdaymask) && !e.nwdaymask[t]) ||
                            (null !== a && !(0, l.mK)(e.eastermask, t)) ||
                            (((0, l.z2)(o) || (0, l.z2)(u)) &&
                                !(0, l.mK)(o, e.mdaymask[t]) &&
                                !(0, l.mK)(u, e.nmdaymask[t])) ||
                            ((0, l.z2)(c) &&
                                ((t < e.yearlen && !(0, l.mK)(c, t + 1) && !(0, l.mK)(c, -e.yearlen + t)) ||
                                    (t >= e.yearlen &&
                                        !(0, l.mK)(c, t + 1 - e.yearlen) &&
                                        !(0, l.mK)(c, -e.nextyearlen + t - e.yearlen))))
                        );
                    })(r, o, i)) && (e[o] = null);
                }
                return s;
            })(b, D, L, C, t);
        if ((0, l.z2)(y))
            for (var M = (0, c.B)(y, O, D, L, C, b), P = 0; P < M.length; P++) {
                var x = M[P];
                if (S && x > S) return p(e);
                if (x >= A) {
                    var k = f(x, t);
                    if (!e.accept(k) || (N && !--N)) return p(e);
                }
            }
        else
            for (var P = D; P < L; P++) {
                var U = b[P];
                if ((0, l.Wo)(U))
                    for (var G = (0, i.Y_)(C.yearordinal + U), F = 0; F < O.length; F++) {
                        var V = O[F],
                            x = (0, i.kg)(G, V);
                        if (S && x > S) return p(e);
                        if (x >= A) {
                            var k = f(x, t);
                            if (!e.accept(k) || (N && !--N)) return p(e);
                        }
                    }
            }
        if (0 === t.interval || (v.add(t, w), v.year > i.KE)) return p(e);
        (0, r.d)(I) || (O = C.gettimeset(I)(v.hour, v.minute, v.second, 0)), C.rebuild(v.year, v.month);
    }
}
function f(e, t) {
    return new u.x(e, t.tzid).rezonedDate();
}
function p(e) {
    return e.getValue();
}
