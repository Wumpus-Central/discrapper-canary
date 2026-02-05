"use strict";
n.d(t, { N: () => o });
var r = n(56636),
    i = n(222367),
    a = n(391898),
    s = n(760162);
function o(e, t) {
    var n,
        s,
        o = (0, i.w$)(e, 1, 1),
        u = (0, i.U_)(e) ? 366 : 365,
        c = (0, i.U_)(e + 1) ? 366 : 365,
        d = (0, i.ZO)(o),
        _ = (0, i.VJ)(o),
        f = (0, r.Cl)((0, r.Cl)({ yearlen: u, nextyearlen: c, yearordinal: d, yearweekday: _ }, l(e)), {
            wnomask: null,
        });
    if ((0, a.Ie)(t.byweekno)) return f;
    f.wnomask = (0, a.ux)(0, u + 7);
    var p = (n = (0, a._D)(7 - _ + t.wkst, 7));
    p >= 4 ? ((p = 0), (s = f.yearlen + (0, a._D)(_ - t.wkst, 7))) : (s = u - p);
    for (var h = Math.floor(Math.floor(s / 7) + (0, a._D)(s, 7) / 4), m = 0; m < t.byweekno.length; m++) {
        var g = t.byweekno[m];
        if ((g < 0 && (g += h + 1), g > 0 && g <= h)) {
            var E = void 0;
            g > 1 ? ((E = p + (g - 1) * 7), p !== n && (E -= 7 - n)) : (E = p);
            for (var A = 0; A < 7 && ((f.wnomask[E] = 1), E++, f.wdaymask[E] !== t.wkst); A++);
        }
    }
    if ((0, a.mK)(t.byweekno, 1)) {
        var E = p + 7 * h;
        if ((p !== n && (E -= 7 - n), E < u))
            for (var m = 0; m < 7 && ((f.wnomask[E] = 1), (E += 1), f.wdaymask[E] !== t.wkst); m++);
    }
    if (p) {
        var I = void 0;
        if ((0, a.mK)(t.byweekno, -1)) I = -1;
        else {
            var T = (0, i.VJ)((0, i.w$)(e - 1, 1, 1)),
                y = (0, a._D)(7 - T.valueOf() + t.wkst, 7),
                S = (0, i.U_)(e - 1) ? 366 : 365,
                v = void 0;
            y >= 4 ? ((y = 0), (v = S + (0, a._D)(T - t.wkst, 7))) : (v = u - p),
                (I = Math.floor(52 + (0, a._D)(v, 7) / 4));
        }
        if ((0, a.mK)(t.byweekno, I)) for (var E = 0; E < p; E++) f.wnomask[E] = 1;
    }
    return f;
}
function l(e) {
    var t = (0, i.U_)(e) ? 366 : 365,
        n = (0, i.w$)(e, 1, 1),
        r = (0, i.VJ)(n);
    return 365 === t
        ? { mmask: s.YH, mdaymask: s.wU, nmdaymask: s.yX, wdaymask: s.Qd.slice(r), mrange: s.nJ }
        : { mmask: s.$x, mdaymask: s.Zx, nmdaymask: s.vI, wdaymask: s.Qd.slice(r), mrange: s.AK };
}
