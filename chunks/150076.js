n.d(t, { h: () => f });
var r = n(707908),
    i = n(695170),
    a = n(805817),
    o = n(812975),
    s = n(347874),
    l = n(686942),
    c = n(829105),
    u = n(613607),
    d = n(68808);
function f(e, t) {
    var n = t.dtstart,
        o = t.freq,
        s = t.interval,
        c = t.until,
        f = t.bysetpos,
        _ = t.count;
    if (0 === _ || 0 === s) return h(e);
    var E = d.o.fromDate(n),
        b = new a.Z(t);
    b.rebuild(E.year, E.month);
    for (var y = g(b, E, t); ; ) {
        var O = b.getdayset(o)(E.year, E.month, E.day),
            v = O[0],
            I = O[1],
            S = O[2],
            T = m(v, I, S, b, t);
        if ((0, l.Dw)(f))
            for (var A = (0, u.f)(f, y, I, S, b, v), N = 0; N < A.length; N++) {
                var C = A[N];
                if (c && C > c) return h(e);
                if (C >= n) {
                    var R = p(C, t);
                    if (!e.accept(R) || (_ && !--_)) return h(e);
                }
            }
        else
            for (var N = I; N < S; N++) {
                var P = v[N];
                if ((0, l.EN)(P))
                    for (var w = (0, i.zU)(b.yearordinal + P), D = 0; D < y.length; D++) {
                        var L = y[D],
                            C = (0, i.$e)(w, L);
                        if (c && C > c) return h(e);
                        if (C >= n) {
                            var R = p(C, t);
                            if (!e.accept(R) || (_ && !--_)) return h(e);
                        }
                    }
            }
        if (0 === t.interval || (E.add(t, T), E.year > i.VQ)) return h(e);
        (0, r.e)(o) || (y = b.gettimeset(o)(E.hour, E.minute, E.second, 0)), b.rebuild(E.year, E.month);
    }
}
function _(e, t, n) {
    var r = n.bymonth,
        i = n.byweekno,
        a = n.byweekday,
        o = n.byeaster,
        s = n.bymonthday,
        c = n.bynmonthday,
        u = n.byyearday;
    return ((0, l.Dw)(r) && !(0, l.q9)(r, e.mmask[t])) || ((0, l.Dw)(i) && !e.wnomask[t]) || ((0, l.Dw)(a) && !(0, l.q9)(a, e.wdaymask[t])) || ((0, l.Dw)(e.nwdaymask) && !e.nwdaymask[t]) || (null !== o && !(0, l.q9)(e.eastermask, t)) || (((0, l.Dw)(s) || (0, l.Dw)(c)) && !(0, l.q9)(s, e.mdaymask[t]) && !(0, l.q9)(c, e.nmdaymask[t])) || ((0, l.Dw)(u) && ((t < e.yearlen && !(0, l.q9)(u, t + 1) && !(0, l.q9)(u, -e.yearlen + t)) || (t >= e.yearlen && !(0, l.q9)(u, t + 1 - e.yearlen) && !(0, l.q9)(u, -e.nextyearlen + t - e.yearlen))));
}
function p(e, t) {
    return new c.M(e, t.tzid).rezonedDate();
}
function h(e) {
    return e.getValue();
}
function m(e, t, n, r, i) {
    for (var a = !1, o = t; o < n; o++) {
        var s = e[o];
        (a = _(r, s, i)) && (e[s] = null);
    }
    return a;
}
function g(e, t, n) {
    var i = n.freq,
        a = n.byhour,
        c = n.byminute,
        u = n.bysecond;
    return (0, r.e)(i) ? (0, s.hl)(n) : (i >= o.Ci.HOURLY && (0, l.Dw)(a) && !(0, l.q9)(a, t.hour)) || (i >= o.Ci.MINUTELY && (0, l.Dw)(c) && !(0, l.q9)(c, t.minute)) || (i >= o.Ci.SECONDLY && (0, l.Dw)(u) && !(0, l.q9)(u, t.second)) ? [] : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond);
}
