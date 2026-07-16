"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(310784),
    a = n.n(r);
n(440745);
var s = n(17928),
    l = n(317097),
    o = n(775602),
    d = n(654107),
    c = n(363195),
    u = n(661531);
let _ = function (e) {
    var t;
    let n = (0, s.bG)([o.Ay], () => o.Ay.saturation),
        r =
            ((t = (0, s.bG)([c.A], () => c.A.theme)),
            u.A.colors.BACKGROUND_SURFACE_HIGH.resolve?.({ theme: t, saturation: n })?.hex?.() ?? "#000"),
        [_, E] = (0, d.rh)(e, r);
    return i.useMemo(() => {
        let e = (0, l.LX)(_),
            t = (0, l.LX)(E);
        for (let t = 1; t < 8 && !((0, l.OK)(e) >= 0.725); t++) e = a()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, l.OK)(t) >= 0.725); e++) t = a()(t).darken(0.5).num();
        return { primaryColor: (0, l.Hl)(e), secondaryColor: (0, l.Hl)(t) };
    }, [_, E]);
};
