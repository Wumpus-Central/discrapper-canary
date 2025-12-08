n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(835473),
    o = n(768581),
    c = n(582113),
    s = n(388032),
    u = n(369929);
function d(e) {
    let { title: t, handleOpenCollectiblesShop: n, handleOpenGameShop: d, socialLayerStorefrontApplicationId: f } = e,
        g = i.useRef(null),
        [p, m] = i.useState(!1),
        b = (0, a.q)(f),
        h = i.useMemo(() => {
            let e = null == b || b.id !== c.t9 ? s.intl.string(s.t.apFNLU) : s.intl.string(s.t["kq/75v"]);
            if (null == b) return e;
            let t = o.ZP.getApplicationIconURL({
                id: b.id,
                icon: b.icon,
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
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: e,
                    }),
                ],
            });
        }, [b]),
        y = i.useMemo(
            () =>
                (0, r.jsxs)(l.kSQ, {
                    children: [
                        (0, r.jsx)(l.sNh, {
                            id: "browse-collectibles-shop",
                            label: s.intl.string(s.t["5upuqx"]),
                            iconLeft: l.EOn,
                            action: n,
                        }),
                        (0, r.jsx)(l.sNh, {
                            id: "browse-social-layer-storefront",
                            label: h,
                            iconLeft: null != b ? void 0 : l.EOn,
                            action: d,
                        }),
                    ],
                }),
            [n, d, h, b],
        );
    return (0, r.jsx)(l.yRy, {
        targetElementRef: g,
        position: "bottom",
        onRequestOpen: () => m(!0),
        onRequestClose: () => m(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.v2r, {
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": s.intl.string(s.t.GdNkvG),
                children: y,
            });
        },
        children: (e) =>
            (0, r.jsx)(
                l.Button,
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
                        icon: p ? l.Dio : l.CJ0,
                        iconPosition: "end",
                        text: t,
                    },
                    e,
                ),
            ),
    });
}
