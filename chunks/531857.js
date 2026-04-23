"use strict";
n.d(t, { N: () => o });
var r = n(56636),
    i = n(222367),
    s = n(391898),
    a = n(760162);
function o(e, t) {
    var n,
        o,
        l,
        u,
        c,
        d,
        _ = (0, i.w$)(e, 1, 1),
        f = (0, i.U_)(e) ? 366 : 365,
        p = (0, i.U_)(e + 1) ? 366 : 365,
        h = (0, i.ZO)(_),
        E = (0, i.VJ)(_),
        m = (0, r.Cl)(
            (0, r.Cl)(
                { yearlen: f, nextyearlen: p, yearordinal: h, yearweekday: E },
                ((n = e),
                (o = (0, i.U_)(n) ? 366 : 365),
                (l = (0, i.w$)(n, 1, 1)),
                (u = (0, i.VJ)(l)),
                365 === o
                    ? { mmask: a.YH, mdaymask: a.wU, nmdaymask: a.yX, wdaymask: a.Qd.slice(u), mrange: a.nJ }
                    : { mmask: a.$x, mdaymask: a.Zx, nmdaymask: a.vI, wdaymask: a.Qd.slice(u), mrange: a.AK }),
            ),
            { wnomask: null },
        );
    if ((0, s.Ie)(t.byweekno)) return m;
    m.wnomask = (0, s.ux)(0, f + 7);
    var g = (c = (0, s._D)(7 - E + t.wkst, 7));
    g >= 4 ? ((g = 0), (d = m.yearlen + (0, s._D)(E - t.wkst, 7))) : (d = f - g);
    for (var A = Math.floor(Math.floor(d / 7) + (0, s._D)(d, 7) / 4), I = 0; I < t.byweekno.length; I++) {
        var T = t.byweekno[I];
        if ((T < 0 && (T += A + 1), T > 0 && T <= A)) {
            var S = void 0;
            T > 1 ? ((S = g + (T - 1) * 7), g !== c && (S -= 7 - c)) : (S = g);
            for (var y = 0; y < 7 && ((m.wnomask[S] = 1), S++, m.wdaymask[S] !== t.wkst); y++);
        }
    }
    if ((0, s.mK)(t.byweekno, 1)) {
        var S = g + 7 * A;
        if ((g !== c && (S -= 7 - c), S < f))
            for (var I = 0; I < 7 && ((m.wnomask[S] = 1), (S += 1), m.wdaymask[S] !== t.wkst); I++);
    }
    if (g) {
        var N = void 0;
        if ((0, s.mK)(t.byweekno, -1)) N = -1;
        else {
            var v = (0, i.VJ)((0, i.w$)(e - 1, 1, 1)),
                C = (0, s._D)(7 - v.valueOf() + t.wkst, 7),
                O = (0, i.U_)(e - 1) ? 366 : 365,
                R = void 0;
            C >= 4 ? ((C = 0), (R = O + (0, s._D)(v - t.wkst, 7))) : (R = f - g),
                (N = Math.floor(52 + (0, s._D)(R, 7) / 4));
        }
        if ((0, s.mK)(t.byweekno, N)) for (var S = 0; S < g; S++) m.wnomask[S] = 1;
    }
    return m;
}
