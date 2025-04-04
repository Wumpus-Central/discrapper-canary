n.d(t, { Z: () => m }), n(47120);
var r = n(979590),
    i = n.n(r),
    o = n(399606),
    a = n(607070),
    s = n(168631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = 50,
    d = 0.4,
    f = (e, t) => {
        let n = e.toRgb(),
            r = t.toRgb(),
            [o, a, l] = (0, s.J2)([n.r, n.g, n.b], [r.r, r.g, r.b], u);
        return i()({
            r: o,
            g: a,
            b: l
        });
    },
    _ = (e, t) => {
        if (0 !== t.length)
            return 1 === t.length
                ? {
                      primary: t[0],
                      secondary: t[0],
                      border: t[0].setAlpha(d),
                      label: t[0].isLight() ? e.dark : e.light
                  }
                : {
                      primary: t[0],
                      secondary: t[1],
                      border: f(t[0], t[1]).setAlpha(d),
                      label: f(t[0], t[1]).isLight() ? e.dark : e.light
                  };
    },
    p = (e, t) => {
        if (0 !== t.length)
            return 1 === t.length
                ? {
                      primary: t[0],
                      secondary: t[0],
                      text: t[0].isLight() ? e.dark : e.light
                  }
                : {
                      primary: t[0],
                      secondary: t[1],
                      text: f(t[0], t[1]).isLight() ? e.dark : e.light
                  };
    },
    h = (e, t) => {
        let { h: n, s: r, l: o } = e.toHsl();
        return i()({
            h: n,
            s: r * t,
            l: o
        });
    },
    m = (e) => (t) => {
        let n = (0, o.e7)([a.Z], () => a.Z.saturation);
        if (null == t) return {};
        let r = {
            backgroundColors: _(e, t.backgroundColors),
            buttonColors: p(e, t.buttonColors),
            confettiColors: t.confettiColors
        };
        return 1 === n
            ? c({}, r)
            : {
                  backgroundColors:
                      null != r.backgroundColors
                          ? {
                                primary: h(r.backgroundColors.primary, n),
                                secondary: h(r.backgroundColors.secondary, n),
                                border: h(r.backgroundColors.border, n),
                                label: h(r.backgroundColors.label, n)
                            }
                          : void 0,
                  buttonColors:
                      null != r.buttonColors
                          ? {
                                primary: h(r.buttonColors.primary, n),
                                secondary: h(r.buttonColors.secondary, n),
                                text: h(r.buttonColors.text, n)
                            }
                          : void 0,
                  confettiColors: r.confettiColors.map((e) => h(e, n))
              };
    };
