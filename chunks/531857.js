n.d(t, { N: () => o });
var r = n(56636),
    i = n(222367),
    a = n(391898),
    s = n(760162);
function o(e, t) {
    var n,
        s,
        o = (0, i.w$)(e, 1, 1),
        c = (0, i.U_)(e) ? 366 : 365,
        u = (0, i.U_)(e + 1) ? 366 : 365,
        d = (0, i.ZO)(o),
        f = (0, i.VJ)(o),
        p = (0, r.Cl)(
            (0, r.Cl)(
                {
                    yearlen: c,
                    nextyearlen: u,
                    yearordinal: d,
                    yearweekday: f,
                },
                l(e),
            ),
            { wnomask: null },
        );
    if ((0, a.Ie)(t.byweekno)) return p;
    p.wnomask = (0, a.ux)(0, c + 7);
    var _ = (n = (0, a._D)(7 - f + t.wkst, 7));
    _ >= 4 ? ((_ = 0), (s = p.yearlen + (0, a._D)(f - t.wkst, 7))) : (s = c - _);
    for (var h = Math.floor(Math.floor(s / 7) + (0, a._D)(s, 7) / 4), m = 0; m < t.byweekno.length; m++) {
        var g = t.byweekno[m];
        if ((g < 0 && (g += h + 1), g > 0 && g <= h)) {
            var E = void 0;
            g > 1 ? ((E = _ + (g - 1) * 7), _ !== n && (E -= 7 - n)) : (E = _);
            for (var b = 0; b < 7 && ((p.wnomask[E] = 1), E++, p.wdaymask[E] !== t.wkst); b++);
        }
    }
    if ((0, a.mK)(t.byweekno, 1)) {
        var E = _ + 7 * h;
        if ((_ !== n && (E -= 7 - n), E < c))
            for (var m = 0; m < 7 && ((p.wnomask[E] = 1), (E += 1), p.wdaymask[E] !== t.wkst); m++);
    }
    if (_) {
        var y = void 0;
        if ((0, a.mK)(t.byweekno, -1)) y = -1;
        else {
            var O = (0, i.VJ)((0, i.w$)(e - 1, 1, 1)),
                A = (0, a._D)(7 - O.valueOf() + t.wkst, 7),
                v = (0, i.U_)(e - 1) ? 366 : 365,
                S = void 0;
            A >= 4 ? ((A = 0), (S = v + (0, a._D)(O - t.wkst, 7))) : (S = c - _),
                (y = Math.floor(52 + (0, a._D)(S, 7) / 4));
        }
        if ((0, a.mK)(t.byweekno, y)) for (var E = 0; E < _; E++) p.wnomask[E] = 1;
    }
    return p;
}
function l(e) {
    var t = (0, i.U_)(e) ? 366 : 365,
        n = (0, i.w$)(e, 1, 1),
        r = (0, i.VJ)(n);
    return 365 === t
        ? {
              mmask: s.YH,
              mdaymask: s.wU,
              nmdaymask: s.yX,
              wdaymask: s.Qd.slice(r),
              mrange: s.nJ,
          }
        : {
              mmask: s.$x,
              mdaymask: s.Zx,
              nmdaymask: s.vI,
              wdaymask: s.Qd.slice(r),
              mrange: s.AK,
          };
}
