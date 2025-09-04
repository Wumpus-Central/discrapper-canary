t.d(n, { Z: () => v });
var a = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    l = t(755721),
    s = t(481060),
    o = t(838968),
    c = t(880419),
    d = t(967647),
    u = t(989308),
    m = t(388032),
    p = t(362320),
    x = t(961820);
function g(e) {
    let { gameInstance: n } = e;
    return (0, a.jsx)(s.ua7, {
        "aria-label": m.intl.string(u.default.TZsu1d),
        text: (0, a.jsx)(c.Po, { cost: n.plan.cost }),
        children: (e) => {
            var t, i;
            return (0, a.jsx)(
                l.zx,
                ((t = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            a.forEach(function (n) {
                                var a;
                                (a = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = a);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        className: r()(p.secondaryButton, x.disableButton),
                        innerClassName: p.buttonInner,
                        wrapperClassName: p.secondaryButton,
                        color: l.Tt.PRIMARY,
                        "aria-label": m.intl.string(u.default.TZsu1d),
                        onClick: (e) => {
                            e.stopPropagation(), (0, d.Q)(n);
                        },
                        children: (0, a.jsx)(c.RD, {
                            cost: n.plan.cost,
                            isActive: !0,
                            compact: !0,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, a);
                          }
                          return t;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t),
            );
        },
    });
}
function v(e) {
    let { gameInstance: n, onClick: t } = e;
    return (0, a.jsxs)(s.P3F, {
        className: x.game,
        onClick: () => t(n),
        children: [
            (0, a.jsx)("img", {
                className: x.image,
                alt: "",
            }),
            (0, a.jsxs)("div", {
                className: x.textContainer,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        children: n.name,
                    }),
                    (0, a.jsx)(o.P2, { text: m.intl.string(u.default.FFLkm5) }),
                ],
            }),
            (0, a.jsx)(g, { gameInstance: n }),
        ],
    });
}
