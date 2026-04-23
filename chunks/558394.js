"use strict";
n.d(t, { A: () => c });
var r = n(440745),
    i = n.n(r),
    s = n(417597),
    a = n(775602),
    o = n(543699);
let l = (e, t) => {
        let n = e.toRgb(),
            r = t.toRgb(),
            [s, a, l] = (0, o.tJ)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
        return i()({ r: s, g: a, b: l });
    },
    u = (e, t) => {
        let { h: n, s: r, l: s } = e.toHsl();
        return i()({ h: n, s: r * t, l: s });
    },
    c = (e) => (t) => {
        let n = (0, s.bG)([a.A], () => a.A.saturation);
        if (null == t) return {};
        let r = {
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
                              border: l(t[0], t[1]).setAlpha(0.4),
                              label: l(t[0], t[1]).isLight() ? e.dark : e.light,
                          };
            })(e, t.backgroundColors),
            buttonColors: ((e, t) => {
                if (0 !== t.length)
                    return 1 === t.length
                        ? { primary: t[0], secondary: t[0], text: t[0].isLight() ? e.dark : e.light }
                        : { primary: t[0], secondary: t[1], text: l(t[0], t[1]).isLight() ? e.dark : e.light };
            })(e, t.buttonColors),
            confettiColors: t.confettiColors,
        };
        return 1 === n
            ? { ...r }
            : {
                  backgroundColors:
                      null != r.backgroundColors
                          ? {
                                primary: u(r.backgroundColors.primary, n),
                                secondary: u(r.backgroundColors.secondary, n),
                                tertiary:
                                    null != r.backgroundColors.tertiary ? u(r.backgroundColors.tertiary, n) : void 0,
                                border: u(r.backgroundColors.border, n),
                                label: u(r.backgroundColors.label, n),
                            }
                          : void 0,
                  buttonColors:
                      null != r.buttonColors
                          ? {
                                primary: u(r.buttonColors.primary, n),
                                secondary: u(r.buttonColors.secondary, n),
                                text: u(r.buttonColors.text, n),
                            }
                          : void 0,
                  confettiColors: r.confettiColors.map((e) => u(e, n)),
              };
    };
