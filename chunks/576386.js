n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(727637),
    c = n(135483),
    d = n(171019),
    u = n(22267),
    p = n(74538),
    _ = n(539530),
    m = n(388032),
    h = n(24391);
let v = (e) => {
        var t;
        let { currentUser: n, nameplate: a, section: c, canUsePremiumCollectibles: p, isSelected: v, onClick: g } = e,
            b = (0, i.useRef)(null),
            x = (0, s.Z)(b);
        return (0, r.jsxs)(o.P3F, {
            innerRef: b,
            "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXV),
            className: h.nameplateItem,
            onClick: g,
            children: [
                (0, r.jsx)(u.Z, {
                    nameplate: a,
                    user: n,
                    showPlaceholderUser: !0,
                    isHighlighted: x,
                }),
                (0, r.jsx)("div", { className: l()(h.nameplateItemOverlay, { [h.selected]: v }) }),
                (0, r.jsx)(d.Z, {
                    isPurchaseSection: c === _.$0.PURCHASE,
                    isPremiumSection: c === _.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: p,
                    skuId: a.skuId,
                }),
            ],
        });
    },
    g = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: i, onSelect: a, onOpenShop: s } = e,
            d = p.ZP.canUseCollectibles(t),
            u = (0, _.ZP)();
        return (0, r.jsx)(o.u2D, {
            className: h.inventory,
            children: u.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(o.vwX, { children: e.header }),
                            e.section === _.$0.PURCHASE &&
                                (0, r.jsxs)("div", {
                                    className: h.inventoryControls,
                                    children: [
                                        (0, r.jsxs)(o.P3F, {
                                            className: l()(h.inventoryControlsButton, { [h.selected]: null == n }),
                                            onClick: () => a(null),
                                            children: [
                                                (0, r.jsx)(o.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != i
                                                            ? m.intl.string(m.t.CHf9iI)
                                                            : m.intl.string(m.t.PoWNfX),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)(o.P3F, {
                                            className: h.inventoryControlsButton,
                                            onClick: s,
                                            children: [
                                                (0, r.jsx)(o.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    children: m.intl.string(m.t.pWG4zc),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: h.list,
                                children: e.items.filter(c.k).map((i) =>
                                    (0, r.jsx)(
                                        v,
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
