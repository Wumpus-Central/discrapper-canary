n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(135483),
    c = n(171019),
    d = n(22267),
    u = n(104505),
    p = n(74538),
    _ = n(539530),
    m = n(388032),
    h = n(24391);
let b = (e) => {
        var t;
        let { currentUser: n, nameplate: a, section: o, canUsePremiumCollectibles: p, isSelected: b, onClick: g } = e,
            v = (0, i.useRef)(null),
            { isHoveringOrFocusing: x } = (0, u.Z)(v);
        return (0, r.jsxs)(s.P3F, {
            innerRef: v,
            "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXR),
            className: h.nameplateItem,
            onClick: g,
            children: [
                (0, r.jsx)(d.Z, {
                    nameplate: a,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: x,
                }),
                (0, r.jsx)("div", { className: l()(h.nameplateItemOverlay, { [h.selected]: b }) }),
                (0, r.jsx)(c.Z, {
                    isPurchaseSection: o === _.$0.PURCHASE,
                    isPremiumSection: o === _.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: p,
                    skuId: a.skuId,
                }),
            ],
        });
    },
    g = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: i, onSelect: a, onOpenShop: c } = e,
            d = p.ZP.canUseCollectibles(t),
            u = (0, _.ZP)();
        return (0, r.jsx)(s.u2D, {
            className: h.inventory,
            children: u.map((e) =>
                (0, r.jsxs)(
                    s.Kqy,
                    {
                        gap: 4,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: e.header,
                            }),
                            e.section === _.$0.PURCHASE &&
                                (0, r.jsxs)("div", {
                                    className: h.inventoryControls,
                                    children: [
                                        (0, r.jsxs)(s.P3F, {
                                            className: l()(h.inventoryControlsButton, { [h.selected]: null == n }),
                                            onClick: () => a(null),
                                            children: [
                                                (0, r.jsx)(s.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != i
                                                            ? m.intl.string(m.t.CHf9iJ)
                                                            : m.intl.string(m.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)(s.P3F, {
                                            className: h.inventoryControlsButton,
                                            onClick: c,
                                            children: [
                                                (0, r.jsx)(s.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    children: m.intl.string(m.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: h.list,
                                children: e.items.filter(o.k).map((i) =>
                                    (0, r.jsx)(
                                        b,
                                        {
                                            currentUser: t,
                                            nameplate: i,
                                            section: e.section,
                                            canUsePremiumCollectibles: d,
                                            isSelected: (null == n ? void 0 : n.skuId) === i.skuId,
                                            onClick: () => a(i),
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
