t.d(a, { Z: () => m }), t(47120);
var n = t(192379),
    l = t(688619),
    s = t.n(l);
t(979590);
var i = t(442837),
    r = t(866442),
    o = t(607070),
    c = t(220082),
    d = t(981631);
let m = (e) => {
    var a, l, m, u, h, g;
    let x;
    x = t(481060).TVs;
    let N = (0, i.e7)([o.Z], () => o.Z.saturation),
        [p, f] = (0, c.Cf)(
            e,
            null !=
                (g =
                    null == x ||
                    null == (h = x.colors) ||
                    null == (u = h.BACKGROUND_FLOATING) ||
                    null == (m = u.resolve) ||
                    null ==
                        (l = m.call(u, {
                            theme: d.BRd.DARK,
                            saturation: N
                        })) ||
                    null == (a = l.hex)
                        ? void 0
                        : a.call(l))
                ? g
                : '#000'
        );
    return n.useMemo(() => {
        let e = (0, r._i)(p),
            a = (0, r._i)(f);
        for (let a = 1; a < 8 && !((0, r.Bd)(e) >= 0.725); a++) e = s()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, r.Bd)(a) >= 0.725); e++) a = s()(a).darken(0.5).num();
        return {
            primaryColor: (0, r.Rf)(e),
            secondaryColor: (0, r.Rf)(a)
        };
    }, [p, f]);
};
