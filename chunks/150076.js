n.d(t, { h: () => f });
var r = n(707908),
    i = n(695170),
    o = n(805817),
    a = n(812975),
    s = n(347874),
    l = n(686942),
    c = n(829105),
    u = n(613607),
    d = n(68808);
function f(e, t) {
    var n = t.dtstart,
        a = t.freq,
        s = t.interval,
        c = t.until,
        f = t.bysetpos,
        _ = t.count;
    if (0 === _ || 0 === s) return h(e);
    var E = d.o.fromDate(n),
        b = new o.Z(t);
    b.rebuild(E.year, E.month);
    for (var y = g(b, E, t); ; ) {
        var v = b.getdayset(a)(E.year, E.month, E.day),
            O = v[0],
            I = v[1],
            S = v[2],
            T = m(O, I, S, b, t);
        if ((0, l.Dw)(f))
            for (var N = (0, u.f)(f, y, I, S, b, O), A = 0; A < N.length; A++) {
                var C = N[A];
                if (c && C > c) return h(e);
                if (C >= n) {
                    var R = p(C, t);
                    if (!e.accept(R) || (_ && !--_)) return h(e);
                }
            }
        else
            for (var A = I; A < S; A++) {
                var P = O[A];
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
        (0, r.e)(a) || (y = b.gettimeset(a)(E.hour, E.minute, E.second, 0)), b.rebuild(E.year, E.month);
    }
}
function _(e, t, n) {
    var r = n.bymonth,
        i = n.byweekno,
        o = n.byweekday,
        a = n.byeaster,
        s = n.bymonthday,
        c = n.bynmonthday,
        u = n.byyearday;
    return ((0, l.Dw)(r) && !(0, l.q9)(r, e.mmask[t])) || ((0, l.Dw)(i) && !e.wnomask[t]) || ((0, l.Dw)(o) && !(0, l.q9)(o, e.wdaymask[t])) || ((0, l.Dw)(e.nwdaymask) && !e.nwdaymask[t]) || (null !== a && !(0, l.q9)(e.eastermask, t)) || (((0, l.Dw)(s) || (0, l.Dw)(c)) && !(0, l.q9)(s, e.mdaymask[t]) && !(0, l.q9)(c, e.nmdaymask[t])) || ((0, l.Dw)(u) && ((t < e.yearlen && !(0, l.q9)(u, t + 1) && !(0, l.q9)(u, -e.yearlen + t)) || (t >= e.yearlen && !(0, l.q9)(u, t + 1 - e.yearlen) && !(0, l.q9)(u, -e.nextyearlen + t - e.yearlen))));
}
function p(e, t) {
    return new c.M(e, t.tzid).rezonedDate();
}
function h(e) {
    return e.getValue();
}
function m(e, t, n, r, i) {
    for (var o = !1, a = t; a < n; a++) {
        var s = e[a];
        (o = _(r, s, i)) && (e[s] = null);
    }
    return o;
}
function g(e, t, n) {
    var i = n.freq,
        o = n.byhour,
        c = n.byminute,
        u = n.bysecond;
    return (0, r.e)(i) ? (0, s.hl)(n) : (i >= a.Ci.HOURLY && (0, l.Dw)(o) && !(0, l.q9)(o, t.hour)) || (i >= a.Ci.MINUTELY && (0, l.Dw)(c) && !(0, l.q9)(c, t.minute)) || (i >= a.Ci.SECONDLY && (0, l.Dw)(u) && !(0, l.q9)(u, t.second)) ? [] : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond);
}
