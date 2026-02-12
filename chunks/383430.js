n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(429913),
    s = n(486020),
    o = n(188275),
    d = n(985018),
    c = n(416e3);
function u(e) {
    let { title: t, handleOpenCollectiblesShop: n, handleOpenGameShop: u, socialLayerStorefrontApplicationId: g } = e,
        m = l.useRef(null),
        [x, f] = l.useState(!1),
        h = (0, r.h)(g),
        p = l.useMemo(
            () => (null == h || h.id !== o.XR ? d.intl.string(d.t.apFNLU) : d.intl.string(d.t["kq/75v"])),
            [h],
        ),
        _ = l.useMemo(() => (null == h ? null : s.Ay.getApplicationIconURL({ id: h.id, icon: h.icon, size: 20 })), [h]),
        A = l.useMemo(() => (null == _ ? a.U1X : () => (0, i.jsx)("img", { className: c.I, src: _, alt: "" })), [_]),
        I = l.useMemo(() => (null == _ ? { type: "icon", icon: a.U1X } : { type: "image", src: _ }), [_]),
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
                        (0, i.jsx)(a.Drp, {
                            id: "browse-social-layer-storefront",
                            label: p,
                            iconLeft: A,
                            leadingAccessory: I,
                            action: u,
                        }),
                    ],
                }),
            [n, u, p, A, I],
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
                "aria-label": d.intl.string(d.t.GdNkvG),
                children: v,
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
