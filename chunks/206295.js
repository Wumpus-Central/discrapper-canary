var i = r(47120);
var a = r(192379),
    o = r(688619),
    s = r.n(o),
    l = r(979590);
var u = r(442837),
    c = r(866442),
    d = r(607070),
    f = r(220082),
    p = r(981631);
let h = 8,
    _ = 0.725,
    m = (e, n) => {
        let r = AccessibilityStore.desaturateUserColors ? AccessibilityStore.saturation : 1,
            i = useColorStore.getState().palette[e],
            a =
                null == i
                    ? void 0
                    : i.map((e) => {
                          let [n, i, a] = e,
                              {
                                  h: o,
                                  s,
                                  l
                              } = tinycolor({
                                  r: n,
                                  g: i,
                                  b: a
                              }).toHsl();
                          return tinycolor({
                              h: o,
                              s: s * r,
                              l
                          }).toHexString();
                      });
        return null != a ? a : [n, n];
    },
    g = (e) => {
        var n, i, o, l, m, g;
        let E;
        E = r(481060).tokens;
        let v = (0, u.e7)([d.Z], () => d.Z.saturation),
            [y, b] = (0, f.Cf)(
                e,
                null !==
                    (g =
                        null == E
                            ? void 0
                            : null === (m = E.colors) || void 0 === m
                              ? void 0
                              : null === (l = m.BACKGROUND_FLOATING) || void 0 === l
                                ? void 0
                                : null === (o = l.resolve) || void 0 === o
                                  ? void 0
                                  : null ===
                                          (i = o.call(l, {
                                              theme: p.BRd.DARK,
                                              saturation: v
                                          })) || void 0 === i
                                    ? void 0
                                    : null === (n = i.hex) || void 0 === n
                                      ? void 0
                                      : n.call(i)) && void 0 !== g
                    ? g
                    : '#000'
            );
        return a.useMemo(() => {
            let e = (0, c._i)(y),
                n = (0, c._i)(b);
            for (let n = 1; n < h && !((0, c.Bd)(e) >= _); n++) {
                e = s()(e).darken(0.5).num();
            }
            for (let e = 1; e < h && !((0, c.Bd)(n) >= _); e++) {
                n = s()(n).darken(0.5).num();
            }
            let r = (0, c.Rf)(e);
            return {
                primaryColor: r,
                secondaryColor: (0, c.Rf)(n)
            };
        }, [y, b]);
    };
n.Z = g;
