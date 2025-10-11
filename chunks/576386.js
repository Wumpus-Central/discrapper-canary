n.d(t, { Z: () => f });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(135483),
    d = n(171019),
    c = n(22267),
    u = n(104505),
    p = n(74538),
    _ = n(539530),
    h = n(388032),
    m = n(24391);
let g = (e) => {
        var t;
        let { currentUser: n, nameplate: l, section: o, canUsePremiumCollectibles: p, isSelected: g, onClick: f } = e,
            I = (0, r.useRef)(null),
            { isHoveringOrFocusing: b } = (0, u.Z)(I);
        return (0, i.jsxs)(s.P3F, {
            innerRef: I,
            "aria-label": null != (t = l.label) ? t : h.intl.string(h.t.x5CoXV),
            className: m.nameplateItem,
            onClick: f,
            children: [
                (0, i.jsx)(c.Z, {
                    nameplate: l,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: b,
                }),
                (0, i.jsx)("div", { className: a()(m.nameplateItemOverlay, { [m.selected]: g }) }),
                (0, i.jsx)(d.Z, {
                    isPurchaseSection: o === _.$0.PURCHASE,
                    isPremiumSection: o === _.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: p,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    f = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: r, onSelect: l, onOpenShop: d } = e,
            c = p.ZP.canUseCollectibles(t),
            u = (0, _.ZP)();
        return (0, i.jsx)(s.u2D, {
            className: m.inventory,
            children: u.map((e) =>
                (0, i.jsxs)(
                    s.Kqy,
                    {
                        gap: 4,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: e.header,
                            }),
                            e.section === _.$0.PURCHASE &&
                                (0, i.jsxs)("div", {
                                    className: m.inventoryControls,
                                    children: [
                                        (0, i.jsxs)(s.P3F, {
                                            className: a()(m.inventoryControlsButton, { [m.selected]: null == n }),
                                            onClick: () => l(null),
                                            children: [
                                                (0, i.jsx)(s.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != r
                                                            ? h.intl.string(h.t.CHf9iI)
                                                            : h.intl.string(h.t.PoWNfX),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)(s.P3F, {
                                            className: m.inventoryControlsButton,
                                            onClick: d,
                                            children: [
                                                (0, i.jsx)(s.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children: h.intl.string(h.t.pWG4zc),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsx)("div", {
                                className: m.list,
                                children: e.items.filter(o.k).map((r) =>
                                    (0, i.jsx)(
                                        g,
                                        {
                                            currentUser: t,
                                            nameplate: r,
                                            section: e.section,
                                            canUsePremiumCollectibles: c,
                                            isSelected: (null == n ? void 0 : n.skuId) === r.skuId,
                                            onClick: () => l(r),
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
