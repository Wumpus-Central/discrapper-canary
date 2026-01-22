n.d(t, {
    A: () => b,
}),
    n(896048),
    n(264879),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(158954),
    c = n(397927),
    u = n(263215),
    d = n(333354),
    f = n(985018),
    p = n(68388);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.EYj, {
        tag: "span",
        variant: "text-md/semibold",
        className: p.Zt,
        children: t.title,
    });
}

function b(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: a } = e,
        _ = (0, u.A)(t.id),
        [m, b] = i.useState(!1),
        [y, O] = (0, c.zhh)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10,
            },
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            O({
                scale: 1,
            }),
                b(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [O]);
    let A = i.useMemo(() => {
        let e;
        if (null == _ || 0 === _.length) return "";
        if (1 === _.length)
            e = (0, r.jsx)(E, {
                powerup: _[0],
            });
        else if (2 === _.length)
            e = f.intl.format(d.default.MNO3sG, {
                perk1: (0, r.jsx)(E, {
                    powerup: _[0],
                }),
                perk2: (0, r.jsx)(E, {
                    powerup: _[1],
                }),
            });
        else {
            let t = Array.from(_).reverse();
            e = f.intl.format(d.default.GmN3Vf, {
                perk1: (0, r.jsx)(E, {
                    powerup: t[0],
                }),
                perk2: (0, r.jsx)(E, {
                    powerup: t[1],
                }),
            });
        }
        return f.intl.format(d.default["/6GgQq"], {
            perks: e,
        });
    }, [_]);
    return null == _ || 0 === _.length
        ? null
        : (0, r.jsxs)(o.animated.div, {
              className: s()(p.kL, {
                  [p.Vz]: n,
              }),
              style: g(h({}, y), {
                  opacity: +!!m,
              }),
              children: [
                  (0, r.jsx)(l.EYj, {
                      tag: "span",
                      variant: "text-md/semibold",
                      className: s()(p.h_, {
                          [p.Qq]: !n,
                          [p.sl]: n,
                      }),
                      children: A,
                  }),
                  (0, r.jsx)(l.$nd, {
                      variant: "primary",
                      text: f.intl.string(d.default.E5V5KK),
                      onClick: a,
                  }),
              ],
          });
}
