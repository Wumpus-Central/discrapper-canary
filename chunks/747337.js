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
        _ = (0, r.pi)(
            (0, r.pi)(
                {
                    yearlen: c,
                    nextyearlen: u,
                    yearordinal: d,
                    yearweekday: f
                },
                l(e)
            ),
            { wnomask: null }
        );
    if ((0, a.cS)(t.byweekno)) return _;
    _.wnomask = (0, a.rx)(0, c + 7);
    var p = (n = (0, a.Vy)(7 - f + t.wkst, 7));
    p >= 4 ? ((p = 0), (o = _.yearlen + (0, a.Vy)(f - t.wkst, 7))) : (o = c - p);
    for (var h = Math.floor(Math.floor(o / 7) + (0, a.Vy)(o, 7) / 4), m = 0; m < t.byweekno.length; m++) {
        var g = t.byweekno[m];
        if ((g < 0 && (g += h + 1), g > 0 && g <= h)) {
            var E = void 0;
            g > 1 ? ((E = p + (g - 1) * 7), p !== n && (E -= 7 - n)) : (E = p);
            for (var b = 0; b < 7 && ((_.wnomask[E] = 1), E++, _.wdaymask[E] !== t.wkst); b++);
        }
    }
    if ((0, a.q9)(t.byweekno, 1)) {
        var E = p + 7 * h;
        if ((p !== n && (E -= 7 - n), E < c)) for (var m = 0; m < 7 && ((_.wnomask[E] = 1), (E += 1), _.wdaymask[E] !== t.wkst); m++);
    }
    if (p) {
        var y = void 0;
        if ((0, a.q9)(t.byweekno, -1)) y = -1;
        else {
            var O = (0, i.FO)((0, i.t2)(e - 1, 1, 1)),
                v = (0, a.Vy)(7 - O.valueOf() + t.wkst, 7),
                I = (0, i.Eg)(e - 1) ? 366 : 365,
                S = void 0;
            v >= 4 ? ((v = 0), (S = I + (0, a.Vy)(O - t.wkst, 7))) : (S = c - p), (y = Math.floor(52 + (0, a.Vy)(S, 7) / 4));
        }
        if ((0, a.q9)(t.byweekno, y)) for (var E = 0; E < p; E++) _.wnomask[E] = 1;
    }
    return _;
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
              mrange: o.sr
          }
        : {
              mmask: o.h3,
              mdaymask: o.fY,
              nmdaymask: o.RP,
              wdaymask: o.fV.slice(r),
              mrange: o.Pi
          };
}
