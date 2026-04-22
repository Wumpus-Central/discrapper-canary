n.d(t, { A: () => d });
var l = n(440745),
    r = n.n(l),
    i = n(417597),
    s = n(775602),
    a = n(543699);
let o = (e, t) => {
        let n = e.toRgb(),
            l = t.toRgb(),
            [i, s, o] = (0, a.tJ)([n.r, n.g, n.b], [l.r, l.g, l.b], 50);
        return r()({ r: i, g: s, b: o });
    },
    u = (e, t) => {
        let { h: n, s: l, l: i } = e.toHsl();
        return r()({ h: n, s: l * t, l: i });
    },
    d = (e) => (t) => {
        let n = (0, i.bG)([s.A], () => s.A.saturation);
        if (null == t) return {};
        let l = {
            backgroundColors: ((e, t) => {
                if (0 !== t.length)
                    return 1 === t.length
                        ? {
                              primary: t[0],
                              secondary: t[0],
                              border: t[0].setAlpha(0.4),
                              label: t[0].isLight() ? e.dark : e.light,
                          }
                        : {
                              primary: t[0],
                              secondary: t[1],
                              tertiary: t.length > 2 ? t[2] : void 0,
                              border: o(t[0], t[1]).setAlpha(0.4),
                              label: o(t[0], t[1]).isLight() ? e.dark : e.light,
                          };
            })(e, t.backgroundColors),
            buttonColors: ((e, t) => {
                if (0 !== t.length)
                    return 1 === t.length
                        ? { primary: t[0], secondary: t[0], text: t[0].isLight() ? e.dark : e.light }
                        : { primary: t[0], secondary: t[1], text: o(t[0], t[1]).isLight() ? e.dark : e.light };
            })(e, t.buttonColors),
            confettiColors: t.confettiColors,
        };
        return 1 === n
            ? { ...l }
            : {
                  backgroundColors:
                      null != l.backgroundColors
                          ? {
                                primary: u(l.backgroundColors.primary, n),
                                secondary: u(l.backgroundColors.secondary, n),
                                tertiary:
                                    null != l.backgroundColors.tertiary ? u(l.backgroundColors.tertiary, n) : void 0,
                                border: u(l.backgroundColors.border, n),
                                label: u(l.backgroundColors.label, n),
                            }
                          : void 0,
                  buttonColors:
                      null != l.buttonColors
                          ? {
                                primary: u(l.buttonColors.primary, n),
                                secondary: u(l.buttonColors.secondary, n),
                                text: u(l.buttonColors.text, n),
                            }
                          : void 0,
                  confettiColors: l.confettiColors.map((e) => u(e, n)),
              };
    };
