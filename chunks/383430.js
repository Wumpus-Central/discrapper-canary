n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(429913),
    r = n(486020),
    o = n(188275),
    c = n(985018),
    d = n(126854);
function u(e) {
    let { title: t, handleOpenCollectiblesShop: n, handleOpenGameShop: u, socialLayerStorefrontApplicationId: g } = e,
        m = l.useRef(null),
        [x, f] = l.useState(!1),
        p = (0, s.h)(g),
        h = l.useMemo(
            () => (null == p || p.id !== o.XR ? c.intl.string(c.t.apFNLU) : c.intl.string(c.t["kq/75v"])),
            [p],
        ),
        _ = l.useMemo(() => (null == p ? null : r.Ay.getApplicationIconURL({ id: p.id, icon: p.icon, size: 20 })), [p]),
        A = l.useMemo(() => (null == _ ? a.U1X : () => (0, i.jsx)("img", { className: d.I, src: _, alt: "" })), [_]),
        I = l.useMemo(() => (null == _ ? { type: "icon", icon: a.U1X } : { type: "image", src: _ }), [_]),
        j = l.useMemo(
            () =>
                (0, i.jsxs)(a.rXV, {
                    children: [
                        (0, i.jsx)(a.Drp, {
                            id: "browse-collectibles-shop",
                            label: c.intl.string(c.t["5upuqx"]),
                            iconLeft: a.U1X,
                            leadingAccessory: { type: "icon", icon: a.U1X },
                            action: n,
                        }),
                        (0, i.jsx)(a.Drp, {
                            id: "browse-social-layer-storefront",
                            label: h,
                            iconLeft: A,
                            leadingAccessory: I,
                            action: u,
                        }),
                    ],
                }),
            [n, u, h, A, I],
        );
    return (0, i.jsx)(a.YNO, {
        targetElementRef: m,
        position: "bottom",
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.W1t, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": c.intl.string(c.t.GdNkvG),
                children: j,
            });
        },
        children: (e) =>
            (0, i.jsx)(a.Button, {
                buttonRef: m,
                variant: "secondary",
                size: "sm",
                icon: x ? a.PGe : a.abt,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
