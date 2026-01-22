n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(429913),
    s = n(486020),
    o = n(188275),
    c = n(985018),
    u = n(416e3);

function d(e) {
    let { title: t, handleOpenCollectiblesShop: n, handleOpenGameShop: d, socialLayerStorefrontApplicationId: f } = e,
        p = l.useRef(null),
        [b, g] = l.useState(!1),
        m = (0, a.h)(f),
        y = l.useMemo(() => {
            let e = null == m || m.id !== o.XR ? c.intl.string(c.t.apFNLU) : c.intl.string(c.t["kq/75v"]);
            if (null == m) return e;
            let t = s.Ay.getApplicationIconURL({
                id: m.id,
                icon: m.icon,
                size: 20,
            });
            return (0, r.jsxs)("div", {
                className: u.C,
                children: [
                    (0, r.jsx)("img", {
                        className: u.I,
                        src: t,
                        alt: e,
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: e,
                    }),
                ],
            });
        }, [m]),
        O = l.useMemo(
            () =>
                (0, r.jsxs)(i.rXV, {
                    children: [
                        (0, r.jsx)(i.Drp, {
                            id: "browse-collectibles-shop",
                            label: c.intl.string(c.t["5upuqx"]),
                            iconLeft: i.U1X,
                            action: n,
                        }),
                        (0, r.jsx)(i.Drp, {
                            id: "browse-social-layer-storefront",
                            label: y,
                            iconLeft: null != m ? void 0 : i.U1X,
                            action: d,
                        }),
                    ],
                }),
            [n, d, y, m],
        );
    return (0, r.jsx)(i.YNO, {
        targetElementRef: p,
        position: "bottom",
        onRequestOpen: () => g(!0),
        onRequestClose: () => g(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(i.W1t, {
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": c.intl.string(c.t.GdNkvG),
                children: O,
            });
        },
        children: (e) =>
            (0, r.jsx)(
                i.Button,
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
                        buttonRef: p,
                        variant: "secondary",
                        size: "sm",
                        icon: b ? i.PGe : i.abt,
                        iconPosition: "end",
                        text: t,
                    },
                    e,
                ),
            ),
    });
}
