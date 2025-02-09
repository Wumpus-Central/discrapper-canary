n.d(t, { Z: () => m }), n(47120);
var a = n(192379),
    l = n(688619),
    i = n.n(l);
n(979590);
var s = n(442837),
    r = n(866442),
    o = n(607070),
    c = n(220082),
    d = n(981631);
let m = (e) => {
    var t, l, m, u, h, g;
    let x;
    x = n(481060).TVs;
    let v = (0, s.e7)([o.Z], () => o.Z.saturation),
        [p, f] = (0, c.Cf)(
            e,
            null !==
                (g =
                    null == x
                        ? void 0
                        : null === (h = x.colors) || void 0 === h
                          ? void 0
                          : null === (u = h.BACKGROUND_FLOATING) || void 0 === u
                            ? void 0
                            : null === (m = u.resolve) || void 0 === m
                              ? void 0
                              : null ===
                                      (l = m.call(u, {
                                          theme: d.BRd.DARK,
                                          saturation: v
                                      })) || void 0 === l
                                ? void 0
                                : null === (t = l.hex) || void 0 === t
                                  ? void 0
                                  : t.call(l)) && void 0 !== g
                ? g
                : '#000'
        );
    return a.useMemo(() => {
        let e = (0, r._i)(p),
            t = (0, r._i)(f);
        for (let t = 1; t < 8 && !((0, r.Bd)(e) >= 0.725); t++) e = i()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, r.Bd)(t) >= 0.725); e++) t = i()(t).darken(0.5).num();
        return {
            primaryColor: (0, r.Rf)(e),
            secondaryColor: (0, r.Rf)(t)
        };
    }, [p, f]);
};
