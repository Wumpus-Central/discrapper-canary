n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    l = n(835473),
    o = n(768581),
    c = n(582113),
    s = n(388032),
    u = n(274156);
function d(e) {
    let { title: t, handleOpenCollectiblesShop: n, handleOpenGameShop: d, socialLayerStorefrontApplicationId: f } = e,
        g = i.useRef(null),
        [p, b] = i.useState(!1),
        m = (0, l.q)(f),
        h = i.useMemo(() => {
            let e = null == m || m.id !== c.t9 ? s.intl.string(s.t.apFNLU) : s.intl.string(s.t["kq/75v"]);
            if (null == m) return e;
            let t = o.ZP.getApplicationIconURL({
                id: m.id,
                icon: m.icon,
                size: 20,
            });
            return (0, r.jsxs)("div", {
                className: u.gameShopLabelContainer,
                children: [
                    (0, r.jsx)("img", {
                        className: u.applicationIcon,
                        src: t,
                        alt: e,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: e,
                    }),
                ],
            });
        }, [m]),
        y = i.useMemo(
            () =>
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        (0, r.jsx)(a.sNh, {
                            id: "browse-collectibles-shop",
                            label: s.intl.string(s.t["5upuqx"]),
                            iconLeft: a.EOn,
                            action: n,
                        }),
                        (0, r.jsx)(a.sNh, {
                            id: "browse-social-layer-storefront",
                            label: h,
                            iconLeft: null != m ? void 0 : a.EOn,
                            action: d,
                        }),
                    ],
                }),
            [n, d, h, m],
        );
    return (0, r.jsx)(a.yRy, {
        targetElementRef: g,
        position: "bottom",
        onRequestOpen: () => b(!0),
        onRequestClose: () => b(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.v2r, {
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": s.intl.string(s.t.GdNkvG),
                children: y,
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
                        buttonRef: g,
                        variant: "secondary",
                        size: "sm",
                        icon: p ? a.Dio : a.CJ0,
                        iconPosition: "end",
                        text: t,
                    },
                    e,
                ),
            ),
    });
}
