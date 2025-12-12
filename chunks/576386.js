n.d(t, { Z: () => v });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(135483),
    c = n(171019),
    d = n(104505),
    u = n(74538),
    p = n(539530),
    m = n(566697),
    g = n(388032),
    h = n(332502);
let x = (e) => {
        var t;
        let { currentUser: n, nameplate: i, section: o, canUsePremiumCollectibles: u, isSelected: x, onClick: v } = e,
            b = (0, r.useRef)(null),
            { isHoveringOrFocusing: f } = (0, d.Z)(b);
        return (0, l.jsxs)(s.P3F, {
            innerRef: b,
            "aria-label": null != (t = i.label) ? t : g.intl.string(g.t.x5CoXR),
            className: h.nameplateItem,
            onClick: v,
            children: [
                (0, l.jsx)(m.Z, {
                    nameplate: i,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: f,
                }),
                (0, l.jsx)("div", { className: a()(h.nameplateItemOverlay, { [h.selected]: x }) }),
                (0, l.jsx)(c.Z, {
                    isPurchaseSection: o === p.$0.PURCHASE,
                    isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: u,
                    skuId: i.skuId,
                }),
            ],
        });
    },
    v = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: r, onSelect: i, onOpenShop: c } = e,
            d = u.ZP.canUseCollectibles(t),
            m = (0, p.ZP)();
        return (0, l.jsx)(s.u2D, {
            className: h.inventory,
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
                                    className: h.inventoryControls,
                                    children: [
                                        (0, l.jsxs)(s.P3F, {
                                            className: a()(h.inventoryControlsButton, { [h.selected]: null == n }),
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
                                                            ? g.intl.string(g.t.CHf9iJ)
                                                            : g.intl.string(g.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(s.P3F, {
                                            className: h.inventoryControlsButton,
                                            onClick: c,
                                            children: [
                                                (0, l.jsx)(s.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children: g.intl.string(g.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsx)("div", {
                                className: h.list,
                                children: e.items.filter(o.k).map((r) =>
                                    (0, l.jsx)(
                                        x,
                                        {
                                            currentUser: t,
                                            nameplate: r,
                                            section: e.section,
                                            canUsePremiumCollectibles: d,
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
