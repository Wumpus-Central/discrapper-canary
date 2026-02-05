"use strict";
n.d(t, { t: () => _ });
var r = n(114922),
    i = n(222367),
    a = n(904514),
    s = n(90727),
    o = n(787920),
    l = n(391898),
    u = n(551253),
    c = n(720520),
    d = n(327854);
function _(e, t) {
    var n = t.dtstart,
        s = t.freq,
        o = t.interval,
        u = t.until,
        _ = t.bysetpos,
        f = t.count;
    if (0 === f || 0 === o) return h(e);
    var E = d.c.fromDate(n),
        A = new a.A(t);
    A.rebuild(E.year, E.month);
    for (var I = g(A, E, t); ; ) {
        var T = A.getdayset(s)(E.year, E.month, E.day),
            y = T[0],
            S = T[1],
            v = T[2],
            C = m(y, S, v, A, t);
        if ((0, l.z2)(_))
            for (var b = (0, c.B)(_, I, S, v, A, y), N = 0; N < b.length; N++) {
                var R = b[N];
                if (u && R > u) return h(e);
                if (R >= n) {
                    var O = p(R, t);
                    if (!e.accept(O) || (f && !--f)) return h(e);
                }
            }
        else
            for (var N = S; N < v; N++) {
                var D = y[N];
                if ((0, l.Wo)(D))
                    for (var L = (0, i.Y_)(A.yearordinal + D), w = 0; w < I.length; w++) {
                        var x = I[w],
                            R = (0, i.kg)(L, x);
                        if (u && R > u) return h(e);
                        if (R >= n) {
                            var O = p(R, t);
                            if (!e.accept(O) || (f && !--f)) return h(e);
                        }
                    }
            }
        if (0 === t.interval || (E.add(t, C), E.year > i.KE)) return h(e);
        (0, r.d)(s) || (I = A.gettimeset(s)(E.hour, E.minute, E.second, 0)), A.rebuild(E.year, E.month);
    }
}
function f(e, t, n) {
    var r = n.bymonth,
        i = n.byweekno,
        a = n.byweekday,
        s = n.byeaster,
        o = n.bymonthday,
        u = n.bynmonthday,
        c = n.byyearday;
    return (
        ((0, l.z2)(r) && !(0, l.mK)(r, e.mmask[t])) ||
        ((0, l.z2)(i) && !e.wnomask[t]) ||
        ((0, l.z2)(a) && !(0, l.mK)(a, e.wdaymask[t])) ||
        ((0, l.z2)(e.nwdaymask) && !e.nwdaymask[t]) ||
        (null !== s && !(0, l.mK)(e.eastermask, t)) ||
        (((0, l.z2)(o) || (0, l.z2)(u)) && !(0, l.mK)(o, e.mdaymask[t]) && !(0, l.mK)(u, e.nmdaymask[t])) ||
        ((0, l.z2)(c) &&
            ((t < e.yearlen && !(0, l.mK)(c, t + 1) && !(0, l.mK)(c, -e.yearlen + t)) ||
                (t >= e.yearlen && !(0, l.mK)(c, t + 1 - e.yearlen) && !(0, l.mK)(c, -e.nextyearlen + t - e.yearlen))))
    );
}
function p(e, t) {
    return new u.x(e, t.tzid).rezonedDate();
}
function h(e) {
    return e.getValue();
}
function m(e, t, n, r, i) {
    for (var a = !1, s = t; s < n; s++) {
        var o = e[s];
        (a = f(r, o, i)) && (e[o] = null);
    }
    return a;
}
function g(e, t, n) {
    var i = n.freq,
        a = n.byhour,
        u = n.byminute,
        c = n.bysecond;
    return (0, r.d)(i)
        ? (0, o.eN)(n)
        : (i >= s.p3.HOURLY && (0, l.z2)(a) && !(0, l.mK)(a, t.hour)) ||
            (i >= s.p3.MINUTELY && (0, l.z2)(u) && !(0, l.mK)(u, t.minute)) ||
            (i >= s.p3.SECONDLY && (0, l.z2)(c) && !(0, l.mK)(c, t.second))
          ? []
          : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond);
}
