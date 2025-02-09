t.d(n, { Z: () => d }), t(47120);
var i = t(192379),
    o = t(688619),
    r = t.n(o);
t(979590);
var a = t(442837),
    l = t(866442),
    c = t(607070),
    s = t(220082),
    _ = t(981631);
let d = (e) => {
    var n, o, d, u, p, I;
    let f;
    f = t(481060).TVs;
    let m = (0, a.e7)([c.Z], () => c.Z.saturation),
        [S, C] = (0, s.Cf)(
            e,
            null !==
                (I =
                    null == f
                        ? void 0
                        : null === (p = f.colors) || void 0 === p
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
                                : null === (n = o.hex) || void 0 === n
                                  ? void 0
                                  : n.call(o)) && void 0 !== I
                ? I
                : '#000'
        );
    return i.useMemo(() => {
        let e = (0, l._i)(S),
            n = (0, l._i)(C);
        for (let n = 1; n < 8 && !((0, l.Bd)(e) >= 0.725); n++) e = r()(e).darken(0.5).num();
        for (let e = 1; e < 8 && !((0, l.Bd)(n) >= 0.725); e++) n = r()(n).darken(0.5).num();
        return {
            primaryColor: (0, l.Rf)(e),
            secondaryColor: (0, l.Rf)(n)
        };
    }, [S, C]);
};
