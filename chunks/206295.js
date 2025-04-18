n.d(t, { Z: () => _ }), n(388685);
var r = n(192379),
    i = n(688619),
    a = n.n(i);
n(979590);
var o = n(442837),
    s = n(866442),
    l = n(607070),
    c = n(220082),
    u = n(981631);
let d = 8,
    f = 0.725,
    _ = (e) => {
        var t, i, _, p, h, m;
        let g;
        g = n(481060).TVs;
        let E = (0, o.e7)([l.Z], () => l.Z.saturation),
            [b, y] = (0, c.Cf)(
                e,
                null !=
                    (m =
                        null == g ||
                        null == (h = g.colors) ||
                        null == (p = h.BACKGROUND_FLOATING) ||
                        null == (_ = p.resolve) ||
                        null ==
                            (i = _.call(p, {
                                theme: u.BRd.DARK,
                                saturation: E
                            })) ||
                        null == (t = i.hex)
                            ? void 0
                            : t.call(i))
                    ? m
                    : '#000'
            );
        return r.useMemo(() => {
            let e = (0, s._i)(b),
                t = (0, s._i)(y);
            for (let t = 1; t < d && !((0, s.Bd)(e) >= f); t++) e = a()(e).darken(0.5).num();
            for (let e = 1; e < d && !((0, s.Bd)(t) >= f); e++) t = a()(t).darken(0.5).num();
            return {
                primaryColor: (0, s.Rf)(e),
                secondaryColor: (0, s.Rf)(t)
            };
        }, [b, y]);
    };
