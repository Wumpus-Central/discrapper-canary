"use strict";
n.d(t, { A: () => h });
var i = n(64700),
    l = n(310784),
    s = n.n(l);
n(440745);
var r = n(311907),
    a = n(317097),
    o = n(775602),
    c = n(654107),
    u = n(544028),
    d = n(128411);
let h = (e) => {
    let t = (0, r.bG)([o.A], () => o.A.saturation),
        n = (0, r.bG)([u.A], () => u.A.theme),
        l = (0, d.W)(n, t),
        [h, m] = (0, c.rh)(e, l);
    return i.useMemo(() => {
        let e = (0, a.LX)(h),
            t = (0, a.LX)(m);
        for (let t = 1; t < 8 && !((0, a.OK)(e) >= 0.725); t++) e = s()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, a.OK)(t) >= 0.725); e++) t = s()(t).darken(0.5).num();
        return { primaryColor: (0, a.Hl)(e), secondaryColor: (0, a.Hl)(t) };
    }, [h, m]);
};
