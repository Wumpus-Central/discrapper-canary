n.d(t, { Z: () => _ }), n(47120);
var i = n(192379),
    r = n(688619),
    a = n.n(r);
n(979590);
var s = n(442837),
    o = n(866442),
    l = n(607070),
    u = n(220082),
    c = n(981631);
let d = 8,
    f = 0.725,
    _ = (e) => {
        var t, r, _, p, h, m;
        let g;
        g = n(481060).TVs;
        let E = (0, s.e7)([l.Z], () => l.Z.saturation),
            [v, y] = (0, u.Cf)(
                e,
                null !==
                    (m =
                        null == g
                            ? void 0
                            : null === (h = g.colors) || void 0 === h
                              ? void 0
                              : null === (p = h.BACKGROUND_FLOATING) || void 0 === p
                                ? void 0
                                : null === (_ = p.resolve) || void 0 === _
                                  ? void 0
                                  : null ===
                                          (r = _.call(p, {
                                              theme: c.BRd.DARK,
                                              saturation: E
                                          })) || void 0 === r
                                    ? void 0
                                    : null === (t = r.hex) || void 0 === t
                                      ? void 0
                                      : t.call(r)) && void 0 !== m
                    ? m
                    : '#000'
            );
        return i.useMemo(() => {
            let e = (0, o._i)(v),
                t = (0, o._i)(y);
            for (let t = 1; t < d && !((0, o.Bd)(e) >= f); t++) e = a()(e).darken(0.5).num();
            for (let e = 1; e < d && !((0, o.Bd)(t) >= f); e++) t = a()(t).darken(0.5).num();
            return {
                primaryColor: (0, o.Rf)(e),
                secondaryColor: (0, o.Rf)(t)
            };
        }, [v, y]);
    };
