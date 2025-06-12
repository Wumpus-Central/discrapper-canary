n.d(t, { Z: () => f }), n(388685);
var r = n(73800),
    i = n(688619),
    a = n.n(i);
n(979590);
var o = n(442837),
    s = n(866442),
    l = n(607070),
    c = n(220082),
    u = n(981631);
let d = 8,
    _ = 0.725,
    f = (e) => {
        var t, i, f, p, h, m;
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
                        null == (f = p.resolve) ||
                        null ==
                            (i = f.call(p, {
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
            for (let t = 1; t < d && !((0, s.Bd)(e) >= _); t++) e = a()(e).darken(0.5).num();
            for (let e = 1; e < d && !((0, s.Bd)(t) >= _); e++) t = a()(t).darken(0.5).num();
            return {
                primaryColor: (0, s.Rf)(e),
                secondaryColor: (0, s.Rf)(t)
            };
        }, [b, y]);
    };
