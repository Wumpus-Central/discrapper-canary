n.d(t, { h: () => f });
var i = n(707908),
    r = n(695170),
    a = n(805817),
    s = n(812975),
    o = n(347874),
    l = n(686942),
    u = n(829105),
    c = n(613607),
    d = n(68808);
function f(e, t) {
    var n = t.dtstart,
        s = t.freq,
        o = t.interval,
        u = t.until,
        f = t.bysetpos,
        _ = t.count;
    if (0 === _ || 0 === o) return h(e);
    var E = d.o.fromDate(n),
        v = new a.Z(t);
    v.rebuild(E.year, E.month);
    for (var y = g(v, E, t); ; ) {
        var I = v.getdayset(s)(E.year, E.month, E.day),
            T = I[0],
            b = I[1],
            S = I[2],
            A = m(T, b, S, v, t);
        if ((0, l.Dw)(f))
            for (var N = (0, c.f)(f, y, b, S, v, T), C = 0; C < N.length; C++) {
                var R = N[C];
                if (u && R > u) return h(e);
                if (R >= n) {
                    var O = p(R, t);
                    if (!e.accept(O) || (_ && !--_)) return h(e);
                }
            }
        else
            for (var C = b; C < S; C++) {
                var D = T[C];
                if ((0, l.EN)(D))
                    for (var L = (0, r.zU)(v.yearordinal + D), x = 0; x < y.length; x++) {
                        var P = y[x],
                            R = (0, r.$e)(L, P);
                        if (u && R > u) return h(e);
                        if (R >= n) {
                            var O = p(R, t);
                            if (!e.accept(O) || (_ && !--_)) return h(e);
                        }
                    }
            }
        if (0 === t.interval || (E.add(t, A), E.year > r.VQ)) return h(e);
        (0, i.e)(s) || (y = v.gettimeset(s)(E.hour, E.minute, E.second, 0)), v.rebuild(E.year, E.month);
    }
}
function _(e, t, n) {
    var i = n.bymonth,
        r = n.byweekno,
        a = n.byweekday,
        s = n.byeaster,
        o = n.bymonthday,
        u = n.bynmonthday,
        c = n.byyearday;
    return ((0, l.Dw)(i) && !(0, l.q9)(i, e.mmask[t])) || ((0, l.Dw)(r) && !e.wnomask[t]) || ((0, l.Dw)(a) && !(0, l.q9)(a, e.wdaymask[t])) || ((0, l.Dw)(e.nwdaymask) && !e.nwdaymask[t]) || (null !== s && !(0, l.q9)(e.eastermask, t)) || (((0, l.Dw)(o) || (0, l.Dw)(u)) && !(0, l.q9)(o, e.mdaymask[t]) && !(0, l.q9)(u, e.nmdaymask[t])) || ((0, l.Dw)(c) && ((t < e.yearlen && !(0, l.q9)(c, t + 1) && !(0, l.q9)(c, -e.yearlen + t)) || (t >= e.yearlen && !(0, l.q9)(c, t + 1 - e.yearlen) && !(0, l.q9)(c, -e.nextyearlen + t - e.yearlen))));
}
function p(e, t) {
    return new u.M(e, t.tzid).rezonedDate();
}
function h(e) {
    return e.getValue();
}
function m(e, t, n, i, r) {
    for (var a = !1, s = t; s < n; s++) {
        var o = e[s];
        (a = _(i, o, r)) && (e[o] = null);
    }
    return a;
}
function g(e, t, n) {
    var r = n.freq,
        a = n.byhour,
        u = n.byminute,
        c = n.bysecond;
    return (0, i.e)(r) ? (0, o.hl)(n) : (r >= s.Ci.HOURLY && (0, l.Dw)(a) && !(0, l.q9)(a, t.hour)) || (r >= s.Ci.MINUTELY && (0, l.Dw)(u) && !(0, l.q9)(u, t.minute)) || (r >= s.Ci.SECONDLY && (0, l.Dw)(c) && !(0, l.q9)(c, t.second)) ? [] : e.gettimeset(r)(t.hour, t.minute, t.second, t.millisecond);
}
