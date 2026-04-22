i.d(t, { A: () => j });
var n = i(627968),
    l = i(64700),
    s = i(34188),
    a = i(477782),
    r = i(403581),
    d = i(265872),
    o = i(861672),
    c = i(821609),
    u = i(789645),
    g = i(847374),
    m = i(429913),
    h = i(486020),
    x = i(403362),
    p = i(985018),
    A = i(420641);
function j(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: j,
            handleOpenGameShop: f,
            handleAddNitroToWishlist: I,
            socialLayerStorefrontApplicationIds: v,
        } = e,
        S = l.useRef(null),
        [E, y] = l.useState(!1),
        b = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(x.Vq).map((e) => {
                        let t = h.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: p.intl.formatToPlainString(p.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: A.I, src: t, alt: "" }) : s.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: s.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, m.A)(v), handleOpenGameShop: f }),
        w = l.useMemo(
            () =>
                (0, n.jsxs)(a.rX, {
                    children: [
                        null != j &&
                            (0, n.jsx)(a.Dr, {
                                id: "browse-collectibles-shop",
                                label: p.intl.string(p.t["5upuqx"]),
                                iconLeft: s.U,
                                leadingAccessory: { type: "icon", icon: s.U },
                                action: j,
                            }),
                        null != I &&
                            (0, n.jsx)(a.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: p.intl.string(p.t.lG6a5x),
                                iconLeft: r.t,
                                leadingAccessory: { type: "icon", icon: r.t },
                                action: I,
                            }),
                        null != f &&
                            b.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, n.jsx)(
                                    a.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [j, f, I, b],
        );
    return (0, n.jsx)(d.Y, {
        targetElementRef: S,
        position: "bottom",
        onRequestOpen: () => y(!0),
        onRequestClose: () => y(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(o.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": p.intl.string(p.t.GdNkvG),
                children: w,
            });
        },
        children: (e) =>
            (0, n.jsx)(c.$, {
                buttonRef: S,
                variant: i,
                size: "sm",
                icon: E ? u.P : g.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
