"use strict";
n.d(t, { A: () => p });
var r = n(440745),
    i = n.n(r),
    a = n(417597),
    s = n(775602),
    o = n(543699);
let l = 50,
    u = 0.4,
    c = (e, t) => {
        let n = e.toRgb(),
            r = t.toRgb(),
            [a, s, u] = (0, o.tJ)([n.r, n.g, n.b], [r.r, r.g, r.b], l);
        return i()({ r: a, g: s, b: u });
    },
    d = (e, t) => {
        if (0 !== t.length)
            return 1 === t.length
                ? { primary: t[0], secondary: t[0], border: t[0].setAlpha(u), label: t[0].isLight() ? e.dark : e.light }
                : {
                      primary: t[0],
                      secondary: t[1],
                      tertiary: t.length > 2 ? t[2] : void 0,
                      border: c(t[0], t[1]).setAlpha(u),
                      label: c(t[0], t[1]).isLight() ? e.dark : e.light,
                  };
    },
    _ = (e, t) => {
        if (0 !== t.length)
            return 1 === t.length
                ? { primary: t[0], secondary: t[0], text: t[0].isLight() ? e.dark : e.light }
                : { primary: t[0], secondary: t[1], text: c(t[0], t[1]).isLight() ? e.dark : e.light };
    },
    f = (e, t) => {
        let { h: n, s: r, l: a } = e.toHsl();
        return i()({ h: n, s: r * t, l: a });
    },
    p = (e) => (t) => {
        let n = (0, a.bG)([s.A], () => s.A.saturation);
        if (null == t) return {};
        let r = {
            backgroundColors: d(e, t.backgroundColors),
            buttonColors: _(e, t.buttonColors),
            confettiColors: t.confettiColors,
        };
        return 1 === n
            ? { ...r }
            : {
                  backgroundColors:
                      null != r.backgroundColors
                          ? {
                                primary: f(r.backgroundColors.primary, n),
                                secondary: f(r.backgroundColors.secondary, n),
                                tertiary:
                                    null != r.backgroundColors.tertiary ? f(r.backgroundColors.tertiary, n) : void 0,
                                border: f(r.backgroundColors.border, n),
                                label: f(r.backgroundColors.label, n),
                            }
                          : void 0,
                  buttonColors:
                      null != r.buttonColors
                          ? {
                                primary: f(r.buttonColors.primary, n),
                                secondary: f(r.buttonColors.secondary, n),
                                text: f(r.buttonColors.text, n),
                            }
                          : void 0,
                  confettiColors: r.confettiColors.map((e) => f(e, n)),
              };
    };
