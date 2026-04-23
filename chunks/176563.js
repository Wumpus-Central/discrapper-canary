"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(310784),
    s = n.n(i);
n(440745);
var a = n(311907),
    o = n(317097),
    l = n(775602),
    u = n(654107),
    c = n(544028),
    d = n(128411);
let _ = (e) => {
    let t = (0, a.bG)([l.A], () => l.A.saturation),
        n = (0, a.bG)([c.A], () => c.A.theme),
        i = (0, d.W)(n, t),
        [_, f] = (0, u.rh)(e, i);
    return r.useMemo(() => {
        let e = (0, o.LX)(_),
            t = (0, o.LX)(f);
        for (let t = 1; t < 8 && !((0, o.OK)(e) >= 0.725); t++) e = s()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, o.OK)(t) >= 0.725); e++) t = s()(t).darken(0.5).num();
        return { primaryColor: (0, o.Hl)(e), secondaryColor: (0, o.Hl)(t) };
    }, [_, f]);
};
