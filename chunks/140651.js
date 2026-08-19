"use strict";
n.d(t, { A: () => h });
var l = n(582128),
    i = n(310784),
    s = n.n(i);
n(440745);
var r = n(17928),
    a = n(317097),
    o = n(775602),
    u = n(654107),
    c = n(363195),
    d = n(661531);
let h = function (e) {
    var t;
    let n = (0, r.bG)([o.Ay], () => o.Ay.saturation),
        i =
            ((t = (0, r.bG)([c.A], () => c.A.theme)),
            d.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [h, m] = (0, u.rh)(e, i);
    return l.useMemo(() => {
        let e = (0, a.LX)(h),
            t = (0, a.LX)(m);
        for (let t = 1; t < 8 && !((0, a.OK)(e) >= 0.725); t++) e = s()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, a.OK)(t) >= 0.725); e++) t = s()(t).darken(0.5).num();
        return { primaryColor: (0, a.Hl)(e), secondaryColor: (0, a.Hl)(t) };
    }, [h, m]);
};
