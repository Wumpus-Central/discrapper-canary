n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(64700),
    i = n(310784),
    a = n.n(i);
n(440745);
var s = n(311907),
    o = n(317097),
    l = n(775602),
    c = n(654107),
    u = n(544028),
    d = n(128411);
let f = 8,
    p = 0.725,
    _ = (e) => {
        let t = (0, s.bG)([l.A], () => l.A.saturation),
            n = (0, s.bG)([u.A], () => u.A.theme),
            i = (0, d.W)(n, t),
            [_, h] = (0, c.rh)(e, i);
        return r.useMemo(() => {
            let e = (0, o.LX)(_),
                t = (0, o.LX)(h);
            for (let t = 1; t < f && !((0, o.OK)(e) >= p); t++) e = a()(e).darken(0.5).num();
            for (let e = 1; e < f && !((0, o.OK)(t) >= p); e++) t = a()(t).darken(0.5).num();
            return {
                primaryColor: (0, o.Hl)(e),
                secondaryColor: (0, o.Hl)(t),
            };
        }, [_, h]);
    };
