n.d(t, {
    t: () => f,
});
var r = n(114922),
    i = n(222367),
    a = n(904514),
    s = n(90727),
    o = n(787920),
    l = n(391898),
    c = n(551253),
    u = n(720520),
    d = n(327854);

function f(e, t) {
    var n = t.dtstart,
        s = t.freq,
        o = t.interval,
        c = t.until,
        f = t.bysetpos,
        p = t.count;
    if (0 === p || 0 === o) return h(e);
    var E = d.c.fromDate(n),
        b = new a.A(t);
    b.rebuild(E.year, E.month);
    for (var y = g(b, E, t); ; ) {
        var O = b.getdayset(s)(E.year, E.month, E.day),
            A = O[0],
            v = O[1],
            S = O[2],
            I = m(A, v, S, b, t);
        if ((0, l.z2)(f))
            for (var T = (0, u.B)(f, y, v, S, b, A), C = 0; C < T.length; C++) {
                var N = T[C];
                if (c && N > c) return h(e);
                if (N >= n) {
                    var R = _(N, t);
                    if (!e.accept(R) || (p && !--p)) return h(e);
                }
            }
        else
            for (var C = v; C < S; C++) {
                var w = A[C];
                if ((0, l.Wo)(w))
                    for (var P = (0, i.Y_)(b.yearordinal + w), D = 0; D < y.length; D++) {
                        var x = y[D],
                            N = (0, i.kg)(P, x);
                        if (c && N > c) return h(e);
                        if (N >= n) {
                            var R = _(N, t);
                            if (!e.accept(R) || (p && !--p)) return h(e);
                        }
                    }
            }
        if (0 === t.interval || (E.add(t, I), E.year > i.KE)) return h(e);
        (0, r.d)(s) || (y = b.gettimeset(s)(E.hour, E.minute, E.second, 0)), b.rebuild(E.year, E.month);
    }
}

function p(e, t, n) {
    var r = n.bymonth,
        i = n.byweekno,
        a = n.byweekday,
        s = n.byeaster,
        o = n.bymonthday,
        c = n.bynmonthday,
        u = n.byyearday;
    return (
        ((0, l.z2)(r) && !(0, l.mK)(r, e.mmask[t])) ||
        ((0, l.z2)(i) && !e.wnomask[t]) ||
        ((0, l.z2)(a) && !(0, l.mK)(a, e.wdaymask[t])) ||
        ((0, l.z2)(e.nwdaymask) && !e.nwdaymask[t]) ||
        (null !== s && !(0, l.mK)(e.eastermask, t)) ||
        (((0, l.z2)(o) || (0, l.z2)(c)) && !(0, l.mK)(o, e.mdaymask[t]) && !(0, l.mK)(c, e.nmdaymask[t])) ||
        ((0, l.z2)(u) &&
            ((t < e.yearlen && !(0, l.mK)(u, t + 1) && !(0, l.mK)(u, -e.yearlen + t)) ||
                (t >= e.yearlen && !(0, l.mK)(u, t + 1 - e.yearlen) && !(0, l.mK)(u, -e.nextyearlen + t - e.yearlen))))
    );
}

function _(e, t) {
    return new c.x(e, t.tzid).rezonedDate();
}

function h(e) {
    return e.getValue();
}

function m(e, t, n, r, i) {
    for (var a = !1, s = t; s < n; s++) {
        var o = e[s];
        (a = p(r, o, i)) && (e[o] = null);
    }
    return a;
}

function g(e, t, n) {
    var i = n.freq,
        a = n.byhour,
        c = n.byminute,
        u = n.bysecond;
    return (0, r.d)(i)
        ? (0, o.eN)(n)
        : (i >= s.p3.HOURLY && (0, l.z2)(a) && !(0, l.mK)(a, t.hour)) ||
            (i >= s.p3.MINUTELY && (0, l.z2)(c) && !(0, l.mK)(c, t.minute)) ||
            (i >= s.p3.SECONDLY && (0, l.z2)(u) && !(0, l.mK)(u, t.second))
          ? []
          : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond);
}
