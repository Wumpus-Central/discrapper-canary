n.d(t, { Z: () => v });
var l = n(951288),
    r = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(135483),
    c = n(171019),
    u = n(104505),
    d = n(74538),
    p = n(539530),
    m = n(566697),
    h = n(388032),
    g = n(24391);
let x = (e) => {
        var t;
        let { currentUser: n, nameplate: i, section: o, canUsePremiumCollectibles: d, isSelected: x, onClick: v } = e,
            _ = (0, r.useRef)(null),
            { isHoveringOrFocusing: j } = (0, u.Z)(_);
        return (0, l.jsxs)(a.P3F, {
            innerRef: _,
            "aria-label": null != (t = i.label) ? t : h.intl.string(h.t.x5CoXR),
            className: g.nameplateItem,
            onClick: v,
            children: [
                (0, l.jsx)(m.Z, {
                    nameplate: i,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: j,
                }),
                (0, l.jsx)("div", { className: s()(g.nameplateItemOverlay, { [g.selected]: x }) }),
                (0, l.jsx)(c.Z, {
                    isPurchaseSection: o === p.$0.PURCHASE,
                    isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: d,
                    skuId: i.skuId,
                }),
            ],
        });
    },
    v = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: r, onSelect: i, onOpenShop: c } = e,
            u = d.ZP.canUseCollectibles(t),
            m = (0, p.ZP)();
        return (0, l.jsx)(a.u2D, {
            className: g.inventory,
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
                                    className: g.inventoryControls,
                                    children: [
                                        (0, l.jsxs)(a.P3F, {
                                            className: s()(g.inventoryControlsButton, { [g.selected]: null == n }),
                                            onClick: () => i(null),
                                            children: [
                                                (0, l.jsx)(a.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != r
                                                            ? h.intl.string(h.t.CHf9iJ)
                                                            : h.intl.string(h.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(a.P3F, {
                                            className: g.inventoryControlsButton,
                                            onClick: c,
                                            children: [
                                                (0, l.jsx)(a.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children: h.intl.string(h.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsx)("div", {
                                className: g.list,
                                children: e.items.filter(o.k).map((r) =>
                                    (0, l.jsx)(
                                        x,
                                        {
                                            currentUser: t,
                                            nameplate: r,
                                            section: e.section,
                                            canUsePremiumCollectibles: u,
                                            isSelected: (null == n ? void 0 : n.skuId) === r.skuId,
                                            onClick: () => i(r),
                                        },
                                        r.skuId,
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
