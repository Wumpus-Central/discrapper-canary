n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(429913),
    r = n(486020),
    o = n(403362),
    d = n(985018),
    c = n(416e3);
function u(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: u,
            handleOpenGameShop: m,
            handleAddNitroToWishlist: g,
            socialLayerStorefrontApplicationIds: x,
        } = e,
        p = l.useRef(null),
        [f, h] = l.useState(!1),
        _ = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(o.Vq).map((e) => {
                        let t = r.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: d.intl.formatToPlainString(d.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: c.I, src: t, alt: "" }) : a.U1X,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: a.U1X },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, s.A)(x), handleOpenGameShop: m }),
        A = l.useMemo(
            () =>
                (0, i.jsxs)(a.rXV, {
                    children: [
                        null != u &&
                            (0, i.jsx)(a.Drp, {
                                id: "browse-collectibles-shop",
                                label: d.intl.string(d.t["5upuqx"]),
                                iconLeft: a.U1X,
                                leadingAccessory: { type: "icon", icon: a.U1X },
                                action: u,
                            }),
                        null != m &&
                            _.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, i.jsx)(
                                    a.Drp,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
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
            [u, m, g, _],
        );
    return (0, i.jsx)(a.YNO, {
        targetElementRef: p,
        position: "bottom",
        onRequestOpen: () => h(!0),
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.W1t, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": d.intl.string(d.t.GdNkvG),
                children: A,
            });
        },
        children: (e) =>
            (0, i.jsx)(a.Button, {
                buttonRef: p,
                variant: n,
                size: "sm",
                icon: f ? a.PGe : a.abt,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
