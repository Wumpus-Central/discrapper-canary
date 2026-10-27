n.d(t, { A: () => m });
var l = n(582128),
    r = n(310784),
    a = n.n(r);
n(440745);
var s = n(17928),
    i = n(317097),
    c = n(775602),
    o = n(654107),
    u = n(363195),
    d = n(661531);
let m = function (e) {
    var t;
    let n = (0, s.bG)([c.Ay], () => c.Ay.saturation),
        r =
            ((t = (0, s.bG)([u.A], () => u.A.theme)),
            d.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [m, h] = (0, o.rh)(e, r);
    return l.useMemo(() => {
        let e = (0, i.LX)(m),
            t = (0, i.LX)(h);
        for (let t = 1; t < 8 && !((0, i.OK)(e) >= 0.725); t++) e = a()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, i.OK)(t) >= 0.725); e++) t = a()(t).darken(0.5).num();
        return { primaryColor: (0, i.Hl)(e), secondaryColor: (0, i.Hl)(t) };
    }, [m, h]);
};
