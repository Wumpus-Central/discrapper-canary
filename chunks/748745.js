t.d(n, { Z: () => v });
var i = t(951288);
t(647438);
var r = t(120356),
    a = t.n(r),
    l = t(755721),
    o = t(481060),
    s = t(838968),
    c = t(880419),
    d = t(967647),
    u = t(258640),
    m = t(388032),
    g = t(123879),
    p = t(958751);
function f(e) {
    let { gameInstance: n } = e;
    return (0, i.jsx)(o.ua7, {
        "aria-label": m.intl.string(u.default.TZsu1d),
        text: (0, i.jsx)(c.Po, { cost: 0 }),
        children: (e) => {
            var t, r;
            return (0, i.jsx)(
                l.zx,
                ((t = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        className: a()(g.secondaryButton, p.disableButton),
                        innerClassName: g.buttonInner,
                        wrapperClassName: g.secondaryButton,
                        color: l.Tt.PRIMARY,
                        "aria-label": m.intl.string(u.default.TZsu1d),
                        onClick: (e) => {
                            e.stopPropagation(), (0, d.Q)(n);
                        },
                        children: (0, i.jsx)(c.RD, {
                            cost: 0,
                            isActive: !0,
                            compact: !0,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, i);
                          }
                          return t;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t),
            );
        },
    });
}
function v(e) {
    let { gameInstance: n, onClick: t } = e;
    return (0, i.jsxs)(o.P3F, {
        className: p.game,
        onClick: () => t(n),
        children: [
            (0, i.jsx)("img", {
                className: p.image,
                alt: "",
            }),
            (0, i.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, i.jsx)(o.X6q, {
                        variant: "heading-sm/semibold",
                        children: n.name,
                    }),
                    (0, i.jsx)(s.P2, { text: m.intl.string(u.default.FFLkm5) }),
                ],
            }),
            (0, i.jsx)(f, { gameInstance: n }),
        ],
    });
}
