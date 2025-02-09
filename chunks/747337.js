n.d(t, { h: () => o });
var i = n(146150),
    r = n(695170),
    a = n(686942),
    s = n(603259);
function o(e, t) {
    var n,
        s,
        o = (0, r.t2)(e, 1, 1),
        u = (0, r.Eg)(e) ? 366 : 365,
        c = (0, r.Eg)(e + 1) ? 366 : 365,
        d = (0, r.fv)(o),
        f = (0, r.FO)(o),
        _ = (0, i.pi)(
            (0, i.pi)(
                {
                    yearlen: u,
                    nextyearlen: c,
                    yearordinal: d,
                    yearweekday: f
                },
                l(e)
            ),
            { wnomask: null }
        );
    if ((0, a.cS)(t.byweekno)) return _;
    _.wnomask = (0, a.rx)(0, u + 7);
    var p = (n = (0, a.Vy)(7 - f + t.wkst, 7));
    p >= 4 ? ((p = 0), (s = _.yearlen + (0, a.Vy)(f - t.wkst, 7))) : (s = u - p);
    for (var h = Math.floor(Math.floor(s / 7) + (0, a.Vy)(s, 7) / 4), m = 0; m < t.byweekno.length; m++) {
        var g = t.byweekno[m];
        if ((g < 0 && (g += h + 1), g > 0 && g <= h)) {
            var E = void 0;
            g > 1 ? ((E = p + (g - 1) * 7), p !== n && (E -= 7 - n)) : (E = p);
            for (var v = 0; v < 7 && ((_.wnomask[E] = 1), E++, _.wdaymask[E] !== t.wkst); v++);
        }
    }
    if ((0, a.q9)(t.byweekno, 1)) {
        var E = p + 7 * h;
        if ((p !== n && (E -= 7 - n), E < u)) for (var m = 0; m < 7 && ((_.wnomask[E] = 1), (E += 1), _.wdaymask[E] !== t.wkst); m++);
    }
    if (p) {
        var y = void 0;
        if ((0, a.q9)(t.byweekno, -1)) y = -1;
        else {
            var I = (0, r.FO)((0, r.t2)(e - 1, 1, 1)),
                T = (0, a.Vy)(7 - I.valueOf() + t.wkst, 7),
                b = (0, r.Eg)(e - 1) ? 366 : 365,
                S = void 0;
            T >= 4 ? ((T = 0), (S = b + (0, a.Vy)(I - t.wkst, 7))) : (S = u - p), (y = Math.floor(52 + (0, a.Vy)(S, 7) / 4));
        }
        if ((0, a.q9)(t.byweekno, y)) for (var E = 0; E < p; E++) _.wnomask[E] = 1;
    }
    return _;
}
function l(e) {
    var t = (0, r.Eg)(e) ? 366 : 365,
        n = (0, r.t2)(e, 1, 1),
        i = (0, r.FO)(n);
    return 365 === t
        ? {
              mmask: s.RL,
              mdaymask: s.qm,
              nmdaymask: s.nB,
              wdaymask: s.fV.slice(i),
              mrange: s.sr
          }
        : {
              mmask: s.h3,
              mdaymask: s.fY,
              nmdaymask: s.RP,
              wdaymask: s.fV.slice(i),
              mrange: s.Pi
          };
}
