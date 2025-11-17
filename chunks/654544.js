n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    l = n(835473),
    o = n(768581),
    c = n(388032),
    s = n(369929);
function u(e) {
    let { title: t, handleOpenCollectiblesShop: n, handleOpenGameShop: u, socialLayerStorefrontApplicationId: d } = e,
        f = i.useRef(null),
        [g, p] = i.useState(!1),
        m = (0, l.q)(d),
        b = i.useMemo(() => {
            if (null == m) return c.intl.string(c.t.apFNLU);
            let e = o.ZP.getApplicationIconURL({
                id: m.id,
                icon: m.icon,
                size: 20,
            });
            return (0, r.jsxs)("div", {
                className: s.gameShopLabelContainer,
                children: [
                    (0, r.jsx)("img", {
                        className: s.applicationIcon,
                        src: e,
                        alt: c.intl.string(c.t.apFNLU),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: c.intl.string(c.t.apFNLU),
                    }),
                ],
            });
        }, [m]),
        h = i.useMemo(
            () =>
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        (0, r.jsx)(a.sNh, {
                            id: "browse-collectibles-shop",
                            label: c.intl.string(c.t["5upuqx"]),
                            iconLeft: a.EOn,
                            action: n,
                        }),
                        (0, r.jsx)(a.sNh, {
                            id: "browse-social-layer-storefront",
                            label: b,
                            iconLeft: null != m ? void 0 : a.EOn,
                            action: u,
                        }),
                    ],
                }),
            [n, u, b, m],
        );
    return (0, r.jsx)(a.yRy, {
        targetElementRef: f,
        position: "bottom",
        onRequestOpen: () => p(!0),
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.v2r, {
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": c.intl.string(c.t.GdNkvG),
                children: h,
            });
        },
        children: (e) =>
            (0, r.jsx)(
                a.Button,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        buttonRef: f,
                        variant: "secondary",
                        size: "sm",
                        icon: g ? a.Dio : a.CJ0,
                        iconPosition: "end",
                        text: t,
                    },
                    e,
                ),
            ),
    });
}
