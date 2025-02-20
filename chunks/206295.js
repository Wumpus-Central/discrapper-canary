n.d(t, { Z: () => d }), n(47120);
var i = n(192379),
    o = n(688619),
    r = n.n(o);
n(979590);
var a = n(442837),
    c = n(866442),
    l = n(607070),
    s = n(220082),
    _ = n(981631);
let d = (e) => {
    var t, o, d, u, p, f;
    let I;
    I = n(481060).TVs;
    let m = (0, a.e7)([l.Z], () => l.Z.saturation),
        [S, b] = (0, s.Cf)(
            e,
            null !==
                (f =
                    null == I
                        ? void 0
                        : null === (p = I.colors) || void 0 === p
                          ? void 0
                          : null === (u = p.BACKGROUND_FLOATING) || void 0 === u
                            ? void 0
                            : null === (d = u.resolve) || void 0 === d
                              ? void 0
                              : null ===
                                      (o = d.call(u, {
                                          theme: _.BRd.DARK,
                                          saturation: m
                                      })) || void 0 === o
                                ? void 0
                                : null === (t = o.hex) || void 0 === t
                                  ? void 0
                                  : t.call(o)) && void 0 !== f
                ? f
                : '#000'
        );
    return i.useMemo(() => {
        let e = (0, c._i)(S),
            t = (0, c._i)(b);
        for (let t = 1; t < 8 && !((0, c.Bd)(e) >= 0.725); t++) e = r()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, c.Bd)(t) >= 0.725); e++) t = r()(t).darken(0.5).num();
        return {
            primaryColor: (0, c.Rf)(e),
            secondaryColor: (0, c.Rf)(t)
        };
    }, [S, b]);
};
