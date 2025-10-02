r.d(t, { Z: () => f });
var n = r(951288),
    i = r(647438),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    s = r(727637),
    c = r(135483),
    d = r(171019),
    u = r(22267),
    p = r(74538),
    _ = r(539530),
    m = r(388032),
    h = r(24391);
let v = (e) => {
        var t;
        let { currentUser: r, nameplate: a, section: c, canUsePremiumCollectibles: p, isSelected: v, onClick: f } = e,
            b = (0, i.useRef)(null),
            g = (0, s.Z)(b);
        return (0, n.jsxs)(o.P3F, {
            innerRef: b,
            "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXV),
            className: h.nameplateItem,
            onClick: f,
            children: [
                (0, n.jsx)(u.Z, {
                    nameplate: a,
                    user: r,
                    showPlaceholderUser: !0,
                    isHighlighted: g,
                }),
                (0, n.jsx)("div", { className: l()(h.nameplateItemOverlay, { [h.selected]: v }) }),
                (0, n.jsx)(d.Z, {
                    isPurchaseSection: c === _.$0.PURCHASE,
                    isPremiumSection: c === _.$0.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: p,
                    skuId: a.skuId,
                }),
            ],
        });
    },
    f = (e) => {
        let { currentUser: t, selectedNameplate: r, guildId: i, onSelect: a, onOpenShop: s } = e,
            d = p.ZP.canUseCollectibles(t),
            u = (0, _.ZP)();
        return (0, n.jsx)(o.u2D, {
            className: h.inventory,
            children: u.map((e) =>
                (0, n.jsxs)(
                    "div",
                    {
                        children: [
                            (0, n.jsx)(o.vwX, { children: e.header }),
                            e.section === _.$0.PURCHASE &&
                                (0, n.jsxs)("div", {
                                    className: h.inventoryControls,
                                    children: [
                                        (0, n.jsxs)(o.P3F, {
                                            className: l()(h.inventoryControlsButton, { [h.selected]: null == r }),
                                            onClick: () => a(null),
                                            children: [
                                                (0, n.jsx)(o.t6m, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != i
                                                            ? m.intl.string(m.t.CHf9iI)
                                                            : m.intl.string(m.t.PoWNfX),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(o.P3F, {
                                            className: h.inventoryControlsButton,
                                            onClick: s,
                                            children: [
                                                (0, n.jsx)(o.EOn, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    children: m.intl.string(m.t.pWG4zc),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, n.jsx)("div", {
                                className: h.list,
                                children: e.items.filter(c.k).map((i) =>
                                    (0, n.jsx)(
                                        v,
                                        {
                                            currentUser: t,
                                            nameplate: i,
                                            section: e.section,
                                            canUsePremiumCollectibles: d,
                                            isSelected: (null == r ? void 0 : r.skuId) === i.skuId,
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
