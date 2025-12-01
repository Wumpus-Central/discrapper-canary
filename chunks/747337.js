n.d(t, { h: () => s });
var r = n(139232),
    i = n(695170),
    a = n(686942),
    o = n(603259);
function s(e, t) {
    var n,
        o,
        s = (0, i.t2)(e, 1, 1),
        c = (0, i.Eg)(e) ? 366 : 365,
        u = (0, i.Eg)(e + 1) ? 366 : 365,
        d = (0, i.fv)(s),
        f = (0, i.FO)(s),
        p = (0, r.pi)(
            (0, r.pi)(
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
    if ((0, a.cS)(t.byweekno)) return p;
    p.wnomask = (0, a.rx)(0, c + 7);
    var _ = (n = (0, a.Vy)(7 - f + t.wkst, 7));
    _ >= 4 ? ((_ = 0), (o = p.yearlen + (0, a.Vy)(f - t.wkst, 7))) : (o = c - _);
    for (var m = Math.floor(Math.floor(o / 7) + (0, a.Vy)(o, 7) / 4), h = 0; h < t.byweekno.length; h++) {
        var g = t.byweekno[h];
        if ((g < 0 && (g += m + 1), g > 0 && g <= m)) {
            var E = void 0;
            g > 1 ? ((E = _ + (g - 1) * 7), _ !== n && (E -= 7 - n)) : (E = _);
            for (var b = 0; b < 7 && ((p.wnomask[E] = 1), E++, p.wdaymask[E] !== t.wkst); b++);
        }
    }
    if ((0, a.q9)(t.byweekno, 1)) {
        var E = _ + 7 * m;
        if ((_ !== n && (E -= 7 - n), E < c))
            for (var h = 0; h < 7 && ((p.wnomask[E] = 1), (E += 1), p.wdaymask[E] !== t.wkst); h++);
    }
    if (_) {
        var y = void 0;
        if ((0, a.q9)(t.byweekno, -1)) y = -1;
        else {
            var O = (0, i.FO)((0, i.t2)(e - 1, 1, 1)),
                v = (0, a.Vy)(7 - O.valueOf() + t.wkst, 7),
                S = (0, i.Eg)(e - 1) ? 366 : 365,
                I = void 0;
            v >= 4 ? ((v = 0), (I = S + (0, a.Vy)(O - t.wkst, 7))) : (I = c - _),
                (y = Math.floor(52 + (0, a.Vy)(I, 7) / 4));
        }
        if ((0, a.q9)(t.byweekno, y)) for (var E = 0; E < _; E++) p.wnomask[E] = 1;
    }
    return p;
}
function l(e) {
    var t = (0, i.Eg)(e) ? 366 : 365,
        n = (0, i.t2)(e, 1, 1),
        r = (0, i.FO)(n);
    return 365 === t
        ? {
              mmask: o.RL,
              mdaymask: o.qm,
              nmdaymask: o.nB,
              wdaymask: o.fV.slice(r),
              mrange: o.sr,
          }
        : {
              mmask: o.h3,
              mdaymask: o.fY,
              nmdaymask: o.RP,
              wdaymask: o.fV.slice(r),
              mrange: o.Pi,
          };
}
