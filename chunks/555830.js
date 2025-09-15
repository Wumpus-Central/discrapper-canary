n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(483517),
    l = n(388032),
    c = n(571818);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = new Set();
function h(e) {
    let { activity: t, variant: u = "vertical" } = e,
        [f, h] = i.useState(!1),
        m = "".concat(t.name, "-").concat(t.application_id),
        g = "vertical" === u,
        E = i.useCallback(
            (e) => {
                e.stopPropagation(), p.add(m), h(!0);
            },
            [m],
        ),
        b = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                _(d({}, n), {
                                    detectedActivity: t,
                                    onSubmitted: () => {
                                        p.add(m), h(!0);
                                    },
                                }),
                            );
                    });
            },
            [t, m],
        );
    return f
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {}),
                  (0, r.jsx)("div", {
                      className: c.container,
                      children: (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: c.thankYouText,
                          children: l.intl.string(l.t.X0TrNT),
                      }),
                  }),
              ],
          })
        : p.has(m)
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Z, {}),
                    (0, r.jsx)("div", {
                        className: c.container,
                        children: (0, r.jsxs)("div", {
                            className: g ? c.contentVertical : c.contentHorizontal,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: c.prompt,
                                    children: l.intl.string(l.t["9g7v6e"]),
                                }),
                                (0, r.jsxs)("div", {
                                    className: g ? c.buttonsVertical : c.buttonsHorizontal,
                                    children: [
                                        (0, r.jsx)(a.zx, {
                                            size: a.zx.Sizes.SMALL,
                                            look: a.zx.Looks.FILLED,
                                            color: a.zx.Colors.PRIMARY,
                                            onClick: E,
                                            className: g ? c.buttonVertical : c.buttonHorizontal,
                                            children: l.intl.string(l.t.p89ACg),
                                        }),
                                        (0, r.jsx)(a.zx, {
                                            size: a.zx.Sizes.SMALL,
                                            look: a.zx.Looks.FILLED,
                                            color: a.zx.Colors.PRIMARY,
                                            onClick: b,
                                            className: g ? c.buttonVertical : c.buttonHorizontal,
                                            children: l.intl.string(l.t.gm1Ven),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            });
}
