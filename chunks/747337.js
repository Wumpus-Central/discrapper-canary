r.d(n, {
    h: function () {
        return l;
    }
});
var i = r(146150),
    a = r(695170),
    o = r(686942),
    s = r(603259);
function l(e, n) {
    var r,
        s,
        l = (0, a.t2)(e, 1, 1),
        c = (0, a.Eg)(e) ? 366 : 365,
        d = (0, a.Eg)(e + 1) ? 366 : 365,
        f = (0, a.fv)(l),
        p = (0, a.FO)(l),
        h = (0, i.pi)(
            (0, i.pi)(
                {
                    yearlen: c,
                    nextyearlen: d,
                    yearordinal: f,
                    yearweekday: p
                },
                u(e)
            ),
            { wnomask: null }
        );
    if ((0, o.cS)(n.byweekno)) return h;
    h.wnomask = (0, o.rx)(0, c + 7);
    var _ = (r = (0, o.Vy)(7 - p + n.wkst, 7));
    _ >= 4 ? ((_ = 0), (s = h.yearlen + (0, o.Vy)(p - n.wkst, 7))) : (s = c - _);
    for (var m = Math.floor(Math.floor(s / 7) + (0, o.Vy)(s, 7) / 4), g = 0; g < n.byweekno.length; g++) {
        var E = n.byweekno[g];
        if ((E < 0 && (E += m + 1), !!(E > 0 && E <= m))) {
            var v = void 0;
            E > 1 ? ((v = _ + (E - 1) * 7), _ !== r && (v -= 7 - r)) : (v = _);
            for (var y = 0; y < 7 && ((h.wnomask[v] = 1), v++, h.wdaymask[v] !== n.wkst); y++);
        }
    }
    if ((0, o.q9)(n.byweekno, 1)) {
        var v = _ + 7 * m;
        if ((_ !== r && (v -= 7 - r), v < c)) for (var g = 0; g < 7 && ((h.wnomask[v] = 1), (v += 1), h.wdaymask[v] !== n.wkst); g++);
    }
    if (_) {
        var b = void 0;
        if ((0, o.q9)(n.byweekno, -1)) b = -1;
        else {
            var I = (0, a.FO)((0, a.t2)(e - 1, 1, 1)),
                T = (0, o.Vy)(7 - I.valueOf() + n.wkst, 7),
                S = (0, a.Eg)(e - 1) ? 366 : 365,
                A = void 0;
            T >= 4 ? ((T = 0), (A = S + (0, o.Vy)(I - n.wkst, 7))) : (A = c - _), (b = Math.floor(52 + (0, o.Vy)(A, 7) / 4));
        }
        if ((0, o.q9)(n.byweekno, b)) for (var v = 0; v < _; v++) h.wnomask[v] = 1;
    }
    return h;
}
function u(e) {
    var n = (0, a.Eg)(e) ? 366 : 365,
        r = (0, a.t2)(e, 1, 1),
        i = (0, a.FO)(r);
    return 365 === n
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
