"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(310784),
    s = n.n(r);
n(440745);
var a = n(17928),
    o = n(317097),
    l = n(775602),
    d = n(654107),
    _ = n(363195),
    u = n(661531);
let c = (e) => {
    var t;
    let n = (0, a.bG)([l.A], () => l.A.saturation),
        r =
            ((t = (0, a.bG)([_.A], () => _.A.theme)),
            u.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [c, E] = (0, d.rh)(e, r);
    return i.useMemo(() => {
        let e = (0, o.LX)(c),
            t = (0, o.LX)(E);
        for (let t = 1; t < 8 && !((0, o.OK)(e) >= 0.725); t++) e = s()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, o.OK)(t) >= 0.725); e++) t = s()(t).darken(0.5).num();
        return { primaryColor: (0, o.Hl)(e), secondaryColor: (0, o.Hl)(t) };
    }, [c, E]);
};
