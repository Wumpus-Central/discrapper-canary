var i = r(47120);
var a = r(979590),
    o = r.n(a),
    s = r(399606),
    l = r(607070),
    u = r(168631);
let c = 50,
    d = 0.4,
    f = (e, n) => {
        let r = e.toRgb(),
            i = n.toRgb(),
            [a, s, l] = (0, u.J2)([r.r, r.g, r.b], [i.r, i.g, i.b], c);
        return o()({
            r: a,
            g: s,
            b: l
        });
    },
    p = (e, n) =>
        0 === n.length
            ? void 0
            : 1 === n.length
              ? {
                    primary: n[0],
                    secondary: n[0],
                    border: n[0].setAlpha(d),
                    label: n[0].isLight() ? e.dark : e.light
                }
              : {
                    primary: n[0],
                    secondary: n[1],
                    border: f(n[0], n[1]).setAlpha(d),
                    label: f(n[0], n[1]).isLight() ? e.dark : e.light
                },
    h = (e, n) =>
        0 === n.length
            ? void 0
            : 1 === n.length
              ? {
                    primary: n[0],
                    secondary: n[0],
                    text: n[0].isLight() ? e.dark : e.light
                }
              : {
                    primary: n[0],
                    secondary: n[1],
                    text: f(n[0], n[1]).isLight() ? e.dark : e.light
                },
    _ = (e, n) => {
        let { h: r, s: i, l: a } = e.toHsl();
        return o()({
            h: r,
            s: i * n,
            l: a
        });
    },
    m = (e) => (n) => {
        let r = (0, s.e7)([l.Z], () => l.Z.saturation);
        if (null == n) return {};
        let i = {
            backgroundColors: p(e, n.backgroundColors),
            buttonColors: h(e, n.buttonColors),
            confettiColors: n.confettiColors
        };
        return 1 === r
            ? { ...i }
            : {
                  backgroundColors:
                      null != i.backgroundColors
                          ? {
                                primary: _(i.backgroundColors.primary, r),
                                secondary: _(i.backgroundColors.secondary, r),
                                border: _(i.backgroundColors.border, r),
                                label: _(i.backgroundColors.label, r)
                            }
                          : void 0,
                  buttonColors:
                      null != i.buttonColors
                          ? {
                                primary: _(i.buttonColors.primary, r),
                                secondary: _(i.buttonColors.secondary, r),
                                text: _(i.buttonColors.text, r)
                            }
                          : void 0,
                  confettiColors: i.confettiColors.map((e) => _(e, r))
              };
    };
n.Z = m;
