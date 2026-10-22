n.d(t, { A: () => m });
var l = n(582128),
    r = n(310784),
    a = n.n(r);
n(440745);
var s = n(17928),
    i = n(317097),
    o = n(775602),
    c = n(654107),
    d = n(363195),
    u = n(661531);
let m = function (e) {
    var t;
    let n = (0, s.bG)([o.Ay], () => o.Ay.saturation),
        r =
            ((t = (0, s.bG)([d.A], () => d.A.theme)),
            u.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [m, p] = (0, c.rh)(e, r);
    return l.useMemo(() => {
        let e = (0, i.LX)(m),
            t = (0, i.LX)(p);
        for (let t = 1; t < 8 && !((0, i.OK)(e) >= 0.725); t++) e = a()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, i.OK)(t) >= 0.725); e++) t = a()(t).darken(0.5).num();
        return { primaryColor: (0, i.Hl)(e), secondaryColor: (0, i.Hl)(t) };
    }, [m, p]);
};
