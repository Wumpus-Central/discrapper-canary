"use strict";
n.d(t, { A: () => h });
var l = n(64700),
    i = n(310784),
    s = n.n(i);
n(440745);
var a = n(17928),
    r = n(317097),
    o = n(775602),
    c = n(654107),
    u = n(363195),
    d = n(661531);
let h = (e) => {
    var t;
    let n = (0, a.bG)([o.A], () => o.A.saturation),
        i =
            ((t = (0, a.bG)([u.A], () => u.A.theme)),
            d.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [h, m] = (0, c.rh)(e, i);
    return l.useMemo(() => {
        let e = (0, r.LX)(h),
            t = (0, r.LX)(m);
        for (let t = 1; t < 8 && !((0, r.OK)(e) >= 0.725); t++) e = s()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, r.OK)(t) >= 0.725); e++) t = s()(t).darken(0.5).num();
        return { primaryColor: (0, r.Hl)(e), secondaryColor: (0, r.Hl)(t) };
    }, [h, m]);
};
