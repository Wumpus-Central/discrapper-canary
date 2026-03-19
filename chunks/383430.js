n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(429913),
    r = n(486020),
    o = n(188275),
    d = n(985018),
    c = n(416e3);
function u(e) {
    let {
            title: t,
            handleOpenCollectiblesShop: n,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
            socialLayerStorefrontApplicationId: m,
        } = e,
        x = l.useRef(null),
        [p, f] = l.useState(!1),
        h = (0, s.h)(m),
        _ = l.useMemo(
            () => (null == h || h.id !== o.XR ? d.intl.string(d.t.apFNLU) : d.intl.string(d.t["kq/75v"])),
            [h],
        ),
        A = l.useMemo(() => (null == h ? null : r.Ay.getApplicationIconURL({ id: h.id, icon: h.icon, size: 20 })), [h]),
        I = l.useMemo(() => (null == A ? a.U1X : () => (0, i.jsx)("img", { className: c.I, src: A, alt: "" })), [A]),
        j = l.useMemo(() => (null == A ? { type: "icon", icon: a.U1X } : { type: "image", src: A }), [A]),
        v = l.useMemo(
            () =>
                (0, i.jsxs)(a.rXV, {
                    children: [
                        (0, i.jsx)(a.Drp, {
                            id: "browse-collectibles-shop",
                            label: d.intl.string(d.t["5upuqx"]),
                            iconLeft: a.U1X,
                            leadingAccessory: { type: "icon", icon: a.U1X },
                            action: n,
                        }),
                        null != u &&
                            (0, i.jsx)(a.Drp, {
                                id: "browse-social-layer-storefront",
                                label: _,
                                iconLeft: I,
                                leadingAccessory: j,
                                action: u,
                            }),
                        null != g &&
                            (0, i.jsx)(a.Drp, {
                                id: "add-nitro-to-wishlist",
                                label: d.intl.string(d.t.lG6a5x),
                                iconLeft: a.tvc,
                                leadingAccessory: { type: "icon", icon: a.tvc },
                                action: g,
                            }),
                    ],
                }),
            [n, u, g, _, I, j],
        );
    return (0, i.jsx)(a.YNO, {
        targetElementRef: x,
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
                "aria-label": d.intl.string(d.t.GdNkvG),
                children: v,
            });
        },
        children: (e) =>
            (0, i.jsx)(a.Button, {
                buttonRef: x,
                variant: "secondary",
                size: "sm",
                icon: p ? a.PGe : a.abt,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
