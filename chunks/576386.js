n.d(t, { Z: () => v });
var l = n(951288),
    i = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(727637),
    c = n(135483),
    d = n(171019),
    u = n(22267),
    p = n(74538),
    m = n(539530),
    x = n(388032),
    g = n(801707);
let h = (e) => {
        var t;
        let { currentUser: n, nameplate: r, section: c, canUsePremiumCollectibles: p, isSelected: h, onClick: v } = e,
            _ = (0, i.useRef)(null),
            C = (0, o.Z)(_);
        return (0, l.jsxs)(a.P3F, {
            innerRef: _,
            "aria-label": null != (t = r.label) ? t : x.intl.string(x.t.x5CoXV),
            className: g.nameplateItem,
            onClick: v,
            children: [
                (0, l.jsx)(u.Z, {
                    nameplate: r,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: C,
                }),
                (0, l.jsx)("div", { className: s()(g.nameplateItemOverlay, { [g.selected]: h }) }),
                (0, l.jsx)(d.Z, {
                    isPurchaseSection: c === m.$0.PURCHASE,
                    isPremiumSection: c === m.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: p,
                    skuId: r.skuId,
                }),
            ],
        });
    },
    v = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: i, onSelect: r, onOpenShop: o } = e,
            d = p.ZP.canUseCollectibles(t),
            u = (0, m.ZP)();
        return (0, l.jsx)(a.u2D, {
            className: g.inventory,
            children: u.map((e) =>
                (0, l.jsxs)(
                    "div",
                    {
                        children: [
                            (0, l.jsx)(a.vwX, { children: e.header }),
                            e.section === m.$0.PURCHASE &&
                                (0, l.jsxs)("div", {
                                    className: g.inventoryControls,
                                    children: [
                                        (0, l.jsxs)(a.P3F, {
                                            className: s()(g.inventoryControlsButton, { [g.selected]: null == n }),
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
                                                            ? x.intl.string(x.t.CHf9iI)
                                                            : x.intl.string(x.t.PoWNfX),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(a.P3F, {
                                            className: g.inventoryControlsButton,
                                            onClick: o,
                                            children: [
                                                (0, l.jsx)(a.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4zc),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsx)("div", {
                                className: g.list,
                                children: e.items.filter(c.k).map((i) =>
                                    (0, l.jsx)(
                                        h,
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
