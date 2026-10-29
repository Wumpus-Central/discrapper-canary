n.d(t, { A: () => m });
var l = n(582128),
    r = n(310784),
    a = n.n(r);
n(440745);
var i = n(17928),
    s = n(317097),
    o = n(775602),
    u = n(654107),
    c = n(363195),
    d = n(661531);
let m = function (e) {
    var t;
    let n = (0, i.bG)([o.Ay], () => o.Ay.saturation),
        r =
            ((t = (0, i.bG)([c.A], () => c.A.theme)),
            d.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [m, h] = (0, u.rh)(e, r);
    return l.useMemo(() => {
        let e = (0, s.LX)(m),
            t = (0, s.LX)(h);
        for (let t = 1; t < 8 && !((0, s.OK)(e) >= 0.725); t++) e = a()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, s.OK)(t) >= 0.725); e++) t = a()(t).darken(0.5).num();
        return { primaryColor: (0, s.Hl)(e), secondaryColor: (0, s.Hl)(t) };
    }, [m, h]);
};
