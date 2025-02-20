n.d(t, { h: () => s });
var r = n(146150),
    i = n(695170),
    o = n(686942),
    a = n(603259);
function s(e, t) {
    var n,
        a,
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
                    yearweekday: f
                },
                l(e)
            ),
            { wnomask: null }
        );
    if ((0, o.cS)(t.byweekno)) return p;
    p.wnomask = (0, o.rx)(0, c + 7);
    var _ = (n = (0, o.Vy)(7 - f + t.wkst, 7));
    _ >= 4 ? ((_ = 0), (a = p.yearlen + (0, o.Vy)(f - t.wkst, 7))) : (a = c - _);
    for (var h = Math.floor(Math.floor(a / 7) + (0, o.Vy)(a, 7) / 4), m = 0; m < t.byweekno.length; m++) {
        var g = t.byweekno[m];
        if ((g < 0 && (g += h + 1), g > 0 && g <= h)) {
            var E = void 0;
            g > 1 ? ((E = _ + (g - 1) * 7), _ !== n && (E -= 7 - n)) : (E = _);
            for (var v = 0; v < 7 && ((p.wnomask[E] = 1), E++, p.wdaymask[E] !== t.wkst); v++);
        }
    }
    if ((0, o.q9)(t.byweekno, 1)) {
        var E = _ + 7 * h;
        if ((_ !== n && (E -= 7 - n), E < c)) for (var m = 0; m < 7 && ((p.wnomask[E] = 1), (E += 1), p.wdaymask[E] !== t.wkst); m++);
    }
    if (_) {
        var b = void 0;
        if ((0, o.q9)(t.byweekno, -1)) b = -1;
        else {
            var y = (0, i.FO)((0, i.t2)(e - 1, 1, 1)),
                O = (0, o.Vy)(7 - y.valueOf() + t.wkst, 7),
                S = (0, i.Eg)(e - 1) ? 366 : 365,
                I = void 0;
            O >= 4 ? ((O = 0), (I = S + (0, o.Vy)(y - t.wkst, 7))) : (I = c - _), (b = Math.floor(52 + (0, o.Vy)(I, 7) / 4));
        }
        if ((0, o.q9)(t.byweekno, b)) for (var E = 0; E < _; E++) p.wnomask[E] = 1;
    }
    return p;
}
function l(e) {
    var t = (0, i.Eg)(e) ? 366 : 365,
        n = (0, i.t2)(e, 1, 1),
        r = (0, i.FO)(n);
    return 365 === t
        ? {
              mmask: a.RL,
              mdaymask: a.qm,
              nmdaymask: a.nB,
              wdaymask: a.fV.slice(r),
              mrange: a.sr
          }
        : {
              mmask: a.h3,
              mdaymask: a.fY,
              nmdaymask: a.RP,
              wdaymask: a.fV.slice(r),
              mrange: a.Pi
          };
}
