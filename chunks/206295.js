n.d(t, { Z: () => _ }), n(388685);
var r = n(473749),
    i = n(688619),
    a = n.n(i);
n(979590);
var o = n(442837),
    s = n(866442),
    l = n(607070),
    c = n(220082),
    u = n(210887),
    d = n(373397);
let f = 8,
    p = 0.725,
    _ = (e) => {
        let t = (0, o.e7)([l.Z], () => l.Z.saturation),
            n = (0, o.e7)([u.Z], () => u.Z.theme),
            i = (0, d.L)(n, t),
            [_, m] = (0, c.Cf)(e, i);
        return r.useMemo(() => {
            let e = (0, s._i)(_),
                t = (0, s._i)(m);
            for (let t = 1; t < f && !((0, s.Bd)(e) >= p); t++) e = a()(e).darken(0.5).num();
            for (let e = 1; e < f && !((0, s.Bd)(t) >= p); e++) t = a()(t).darken(0.5).num();
            return {
                primaryColor: (0, s.Rf)(e),
                secondaryColor: (0, s.Rf)(t),
            };
        }, [_, m]);
    };
