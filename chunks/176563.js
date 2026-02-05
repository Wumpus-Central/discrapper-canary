"use strict";
n.d(t, { A: () => p });
var r = n(64700),
    i = n(310784),
    a = n.n(i);
n(440745);
var s = n(311907),
    o = n(317097),
    l = n(775602),
    u = n(654107),
    c = n(544028),
    d = n(128411);
let _ = 8,
    f = 0.725,
    p = (e) => {
        let t = (0, s.bG)([l.A], () => l.A.saturation),
            n = (0, s.bG)([c.A], () => c.A.theme),
            i = (0, d.W)(n, t),
            [p, h] = (0, u.rh)(e, i);
        return r.useMemo(() => {
            let e = (0, o.LX)(p),
                t = (0, o.LX)(h);
            for (let t = 1; t < _ && !((0, o.OK)(e) >= f); t++) e = a()(e).darken(0.5).num();
            for (let e = 1; e < _ && !((0, o.OK)(t) >= f); e++) t = a()(t).darken(0.5).num();
            return { primaryColor: (0, o.Hl)(e), secondaryColor: (0, o.Hl)(t) };
        }, [p, h]);
    };
