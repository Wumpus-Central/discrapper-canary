n.d(t, { Z: () => v });
var l = n(951288),
    i = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(135483),
    c = n(171019),
    d = n(104505),
    u = n(74538),
    p = n(539530),
    m = n(566697),
    x = n(388032),
    h = n(24391);
let g = (e) => {
        var t;
        let { currentUser: n, nameplate: r, section: o, canUsePremiumCollectibles: u, isSelected: g, onClick: v } = e,
            _ = (0, i.useRef)(null),
            { isHoveringOrFocusing: C } = (0, d.Z)(_);
        return (0, l.jsxs)(a.P3F, {
            innerRef: _,
            "aria-label": null != (t = r.label) ? t : x.intl.string(x.t.x5CoXR),
            className: h.nameplateItem,
            onClick: v,
            children: [
                (0, l.jsx)(m.Z, {
                    nameplate: r,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: C,
                }),
                (0, l.jsx)("div", { className: s()(h.nameplateItemOverlay, { [h.selected]: g }) }),
                (0, l.jsx)(c.Z, {
                    isPurchaseSection: o === p.$0.PURCHASE,
                    isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: u,
                    skuId: r.skuId,
                }),
            ],
        });
    },
    v = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: i, onSelect: r, onOpenShop: c } = e,
            d = u.ZP.canUseCollectibles(t),
            m = (0, p.ZP)();
        return (0, l.jsx)(a.u2D, {
            className: h.inventory,
            children: m.map((e) =>
                (0, l.jsxs)(
                    a.Kqy,
                    {
                        gap: 4,
                        children: [
                            (0, l.jsx)(a.Text, {
                                variant: "text-md/medium",
                                children: e.header,
                            }),
                            e.section === p.$0.PURCHASE &&
                                (0, l.jsxs)("div", {
                                    className: h.inventoryControls,
                                    children: [
                                        (0, l.jsxs)(a.P3F, {
                                            className: s()(h.inventoryControlsButton, { [h.selected]: null == n }),
                                            onClick: () => r(null),
                                            children: [
                                                (0, l.jsx)(a.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != i
                                                            ? x.intl.string(x.t.CHf9iJ)
                                                            : x.intl.string(x.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(a.P3F, {
                                            className: h.inventoryControlsButton,
                                            onClick: c,
                                            children: [
                                                (0, l.jsx)(a.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsx)("div", {
                                className: h.list,
                                children: e.items.filter(o.k).map((i) =>
                                    (0, l.jsx)(
                                        g,
                                        {
                                            currentUser: t,
                                            nameplate: i,
                                            section: e.section,
                                            canUsePremiumCollectibles: d,
                                            isSelected: (null == n ? void 0 : n.skuId) === i.skuId,
                                            onClick: () => r(i),
                                        },
                                        i.skuId,
                                    ),
                                ),
                            }),
                        ],
                    },
                    e.section,
                ),
            ),
        });
    };
