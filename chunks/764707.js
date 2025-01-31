n.d(t, { Z: () => p }), n(47120);
var i = n(979590),
    r = n.n(i),
    a = n(399606),
    s = n(607070),
    o = n(168631);
let l = 50,
    u = 0.4,
    c = (e, t) => {
        let n = e.toRgb(),
            i = t.toRgb(),
            [a, s, u] = (0, o.J2)([n.r, n.g, n.b], [i.r, i.g, i.b], l);
        return r()({
            r: a,
            g: s,
            b: u
        });
    },
    d = (e, t) =>
        0 === t.length
            ? void 0
            : 1 === t.length
              ? {
                    primary: t[0],
                    secondary: t[0],
                    border: t[0].setAlpha(u),
                    label: t[0].isLight() ? e.dark : e.light
                }
              : {
                    primary: t[0],
                    secondary: t[1],
                    border: c(t[0], t[1]).setAlpha(u),
                    label: c(t[0], t[1]).isLight() ? e.dark : e.light
                },
    f = (e, t) =>
        0 === t.length
            ? void 0
            : 1 === t.length
              ? {
                    primary: t[0],
                    secondary: t[0],
                    text: t[0].isLight() ? e.dark : e.light
                }
              : {
                    primary: t[0],
                    secondary: t[1],
                    text: c(t[0], t[1]).isLight() ? e.dark : e.light
                },
    _ = (e, t) => {
        let { h: n, s: i, l: a } = e.toHsl();
        return r()({
            h: n,
            s: i * t,
            l: a
        });
    },
    p = (e) => (t) => {
        let n = (0, a.e7)([s.Z], () => s.Z.saturation);
        if (null == t) return {};
        let i = {
            backgroundColors: d(e, t.backgroundColors),
            buttonColors: f(e, t.buttonColors),
            confettiColors: t.confettiColors
        };
        return 1 === n
            ? { ...i }
            : {
                  backgroundColors:
                      null != i.backgroundColors
                          ? {
                                primary: _(i.backgroundColors.primary, n),
                                secondary: _(i.backgroundColors.secondary, n),
                                border: _(i.backgroundColors.border, n),
                                label: _(i.backgroundColors.label, n)
                            }
                          : void 0,
                  buttonColors:
                      null != i.buttonColors
                          ? {
                                primary: _(i.buttonColors.primary, n),
                                secondary: _(i.buttonColors.secondary, n),
                                text: _(i.buttonColors.text, n)
                            }
                          : void 0,
                  confettiColors: i.confettiColors.map((e) => _(e, n))
              };
    };
