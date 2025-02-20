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
        p = t.count;
    if (0 === p || 0 === s) return h(e);
    var E = d.o.fromDate(n),
        v = new o.Z(t);
    v.rebuild(E.year, E.month);
    for (var b = g(v, E, t); ; ) {
        var y = v.getdayset(a)(E.year, E.month, E.day),
            O = y[0],
            S = y[1],
            I = y[2],
            T = m(O, S, I, v, t);
        if ((0, l.Dw)(f))
            for (var N = (0, u.f)(f, b, S, I, v, O), A = 0; A < N.length; A++) {
                var C = N[A];
                if (c && C > c) return h(e);
                if (C >= n) {
                    var R = _(C, t);
                    if (!e.accept(R) || (p && !--p)) return h(e);
                }
            }
        else
            for (var A = S; A < I; A++) {
                var P = O[A];
                if ((0, l.EN)(P))
                    for (var w = (0, i.zU)(v.yearordinal + P), D = 0; D < b.length; D++) {
                        var x = b[D],
                            C = (0, i.$e)(w, x);
                        if (c && C > c) return h(e);
                        if (C >= n) {
                            var R = _(C, t);
                            if (!e.accept(R) || (p && !--p)) return h(e);
                        }
                    }
            }
        if (0 === t.interval || (E.add(t, T), E.year > i.VQ)) return h(e);
        (0, r.e)(a) || (b = v.gettimeset(a)(E.hour, E.minute, E.second, 0)), v.rebuild(E.year, E.month);
    }
}
function p(e, t, n) {
    var r = n.bymonth,
        i = n.byweekno,
        o = n.byweekday,
        a = n.byeaster,
        s = n.bymonthday,
        c = n.bynmonthday,
        u = n.byyearday;
    return ((0, l.Dw)(r) && !(0, l.q9)(r, e.mmask[t])) || ((0, l.Dw)(i) && !e.wnomask[t]) || ((0, l.Dw)(o) && !(0, l.q9)(o, e.wdaymask[t])) || ((0, l.Dw)(e.nwdaymask) && !e.nwdaymask[t]) || (null !== a && !(0, l.q9)(e.eastermask, t)) || (((0, l.Dw)(s) || (0, l.Dw)(c)) && !(0, l.q9)(s, e.mdaymask[t]) && !(0, l.q9)(c, e.nmdaymask[t])) || ((0, l.Dw)(u) && ((t < e.yearlen && !(0, l.q9)(u, t + 1) && !(0, l.q9)(u, -e.yearlen + t)) || (t >= e.yearlen && !(0, l.q9)(u, t + 1 - e.yearlen) && !(0, l.q9)(u, -e.nextyearlen + t - e.yearlen))));
}
function _(e, t) {
    return new c.M(e, t.tzid).rezonedDate();
}
function h(e) {
    return e.getValue();
}
function m(e, t, n, r, i) {
    for (var o = !1, a = t; a < n; a++) {
        var s = e[a];
        (o = p(r, s, i)) && (e[s] = null);
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
