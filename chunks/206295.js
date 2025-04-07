a.d(e, { Z: () => r }), a(388685);
var c = a(192379),
    d = a(688619),
    s = a.n(d);
a(979590);
var n = a(442837),
    f = a(866442),
    i = a(607070),
    o = a(220082),
    p = a(981631);
let r = (t) => {
    var e, d, r, l, b, u;
    let m;
    m = a(481060).TVs;
    let g = (0, n.e7)([i.Z], () => i.Z.saturation),
        [j, h] = (0, o.Cf)(
            t,
            null !=
                (u =
                    null == m ||
                    null == (b = m.colors) ||
                    null == (l = b.BACKGROUND_FLOATING) ||
                    null == (r = l.resolve) ||
                    null ==
                        (d = r.call(l, {
                            theme: p.BRd.DARK,
                            saturation: g
                        })) ||
                    null == (e = d.hex)
                        ? void 0
                        : e.call(d))
                ? u
                : '#000'
        );
    return c.useMemo(() => {
        let t = (0, f._i)(j),
            e = (0, f._i)(h);
        for (let e = 1; e < 8 && !((0, f.Bd)(t) >= 0.725); e++) t = s()(t).darken(0.5).num();
        for (let t = 1; t < 8 && !((0, f.Bd)(e) >= 0.725); t++) e = s()(e).darken(0.5).num();
        return {
            primaryColor: (0, f.Rf)(t),
            secondaryColor: (0, f.Rf)(e)
        };
    }, [j, h]);
};
