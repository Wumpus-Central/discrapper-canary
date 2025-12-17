n.d(t, { Z: () => v });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(135483),
    c = n(171019),
    u = n(104505),
    d = n(74538),
    p = n(539530),
    m = n(566697),
    x = n(388032),
    g = n(332502);
let h = (e) => {
        var t;
        let { currentUser: n, nameplate: i, section: o, canUsePremiumCollectibles: d, isSelected: h, onClick: v } = e,
            f = (0, r.useRef)(null),
            { isHoveringOrFocusing: b } = (0, u.Z)(f);
        return (0, l.jsxs)(s.P3F, {
            innerRef: f,
            "aria-label": null != (t = i.label) ? t : x.intl.string(x.t.x5CoXR),
            className: g.nameplateItem,
            onClick: v,
            children: [
                (0, l.jsx)(m.Z, {
                    nameplate: i,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: b,
                }),
                (0, l.jsx)("div", { className: a()(g.nameplateItemOverlay, { [g.selected]: h }) }),
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
        return (0, l.jsx)(s.u2D, {
            className: g.inventory,
            children: m.map((e) =>
                (0, l.jsxs)(
                    s.Kqy,
                    {
                        gap: 4,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: e.header,
                            }),
                            e.section === p.$0.PURCHASE &&
                                (0, l.jsxs)("div", {
                                    className: g.inventoryControls,
                                    children: [
                                        (0, l.jsxs)(s.P3F, {
                                            className: a()(g.inventoryControlsButton, { [g.selected]: null == n }),
                                            onClick: () => i(null),
                                            children: [
                                                (0, l.jsx)(s.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != r
                                                            ? x.intl.string(x.t.CHf9iJ)
                                                            : x.intl.string(x.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(s.P3F, {
                                            className: g.inventoryControlsButton,
                                            onClick: c,
                                            children: [
                                                (0, l.jsx)(s.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsx)("div", {
                                className: g.list,
                                children: e.items.filter(o.k).map((r) =>
                                    (0, l.jsx)(
                                        h,
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
