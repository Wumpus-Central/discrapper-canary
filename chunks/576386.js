n.d(t, { Z: () => b });
var i = n(951288),
    r = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(135483),
    c = n(171019),
    d = n(22267),
    u = n(104505),
    p = n(74538),
    _ = n(539530),
    m = n(388032),
    h = n(24391);
let g = (e) => {
        var t;
        let { currentUser: n, nameplate: a, section: s, canUsePremiumCollectibles: p, isSelected: g, onClick: b } = e,
            v = (0, r.useRef)(null),
            { isHoveringOrFocusing: x } = (0, u.Z)(v);
        return (0, i.jsxs)(o.P3F, {
            innerRef: v,
            "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXV),
            className: h.nameplateItem,
            onClick: b,
            children: [
                (0, i.jsx)(d.Z, {
                    nameplate: a,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: x,
                }),
                (0, i.jsx)("div", { className: l()(h.nameplateItemOverlay, { [h.selected]: g }) }),
                (0, i.jsx)(c.Z, {
                    isPurchaseSection: s === _.$0.PURCHASE,
                    isPremiumSection: s === _.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: p,
                    skuId: a.skuId,
                }),
            ],
        });
    },
    b = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: r, onSelect: a, onOpenShop: c } = e,
            d = p.ZP.canUseCollectibles(t),
            u = (0, _.ZP)();
        return (0, i.jsx)(o.u2D, {
            className: h.inventory,
            children: u.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(o.vwX, { children: e.header }),
                            e.section === _.$0.PURCHASE &&
                                (0, i.jsxs)("div", {
                                    className: h.inventoryControls,
                                    children: [
                                        (0, i.jsxs)(o.P3F, {
                                            className: l()(h.inventoryControlsButton, { [h.selected]: null == n }),
                                            onClick: () => a(null),
                                            children: [
                                                (0, i.jsx)(o.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, i.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != r
                                                            ? m.intl.string(m.t.CHf9iI)
                                                            : m.intl.string(m.t.PoWNfX),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)(o.P3F, {
                                            className: h.inventoryControlsButton,
                                            onClick: c,
                                            children: [
                                                (0, i.jsx)(o.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, i.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    children: m.intl.string(m.t.pWG4zc),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsx)("div", {
                                className: h.list,
                                children: e.items.filter(s.k).map((r) =>
                                    (0, i.jsx)(
                                        g,
                                        {
                                            currentUser: t,
                                            nameplate: r,
                                            section: e.section,
                                            canUsePremiumCollectibles: d,
                                            isSelected: (null == n ? void 0 : n.skuId) === r.skuId,
                                            onClick: () => a(r),
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
