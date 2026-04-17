n.d(t, { A: () => g });
var s = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(575593),
    o = n(397927),
    c = n(927578),
    d = n(892118),
    u = n(483968),
    m = n(431672),
    p = n(985018),
    _ = n(900183);
let x = () => 80,
    h = (e) => {
        let { children: t, className: n, isSelected: r, ...i } = e;
        return (0, s.jsx)(o.DUT, {
            "aria-pressed": r,
            className: l()(_.X5, n, { [_.wH]: r }),
            ...i,
            onClick: i.onSelect,
            children: t,
        });
    },
    A = (e) => {
        let { skuId: t, label: n, innerRef: i, section: l, isSelected: a, canUsePremiumCollectibles: c, ...d } = e,
            p = r.useRef(null);
        return (0, s.jsxs)(h, {
            innerRef: i ?? p,
            isSelected: a,
            ...d,
            children: [
                (0, s.jsx)(o.Text, { variant: "text-xs/normal", color: "text-strong", children: n }),
                (0, s.jsx)(u.A, {
                    skuId: t,
                    canUsePremiumCollectibles: c,
                    isPurchaseSection: l === m.wn.PURCHASE,
                    isPremiumSection: l === m.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    g = (e) => {
        let { user: t, guild: n, pendingProfileFrame: r, selectedProfileFrameRef: i, onSelect: l, onOpenShop: u } = e,
            g = (0, m.Ay)(),
            I = null != r,
            E = c.Ay.canUseCollectibles(t);
        return (0, s.jsx)("section", {
            className: _.uW,
            children: (0, s.jsx)(o.a0_, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: _.p_,
                columns: 3,
                sections: g.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, c, x) => {
                    let { section: C, items: f } = g[e],
                        y = f[t];
                    if (y === m.dP)
                        return (0, s.jsxs)(
                            h,
                            {
                                style: { ...c },
                                isSelected: !I,
                                onSelect: () => l(null),
                                children: [
                                    (0, s.jsx)(o.KTN, { size: "md", color: "currentColor", className: _.vo }),
                                    (0, s.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? p.intl.string(p.t.CHf9iJ) : p.intl.string(p.t.PoWNfe),
                                    }),
                                ],
                            },
                            x,
                        );
                    if (y === m.ZK)
                        return (0, s.jsxs)(
                            h,
                            {
                                style: c,
                                onSelect: u,
                                children: [
                                    (0, s.jsx)(o.U1X, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: _.sV,
                                    }),
                                    (0, s.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: p.intl.string(p.t.pWG4ze),
                                    }),
                                ],
                            },
                            x,
                        );
                    if ((0, d.s)(y)) {
                        let e = r?.skuId === y.skuId;
                        return (0, s.jsx)(
                            A,
                            {
                                style: { ...c },
                                skuId: y.skuId,
                                label: y.label,
                                section: C,
                                innerRef: e ? i : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: E,
                                onSelect: () => l({ skuId: y.skuId, type: a.R.PROFILE_FRAME }),
                            },
                            x,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = g[e];
                    return (0, s.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, s.jsx)(o.Heading, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => g[e].items[t].skuId,
                getItemHeight: x,
                removeEdgeItemGutters: !0,
            }),
        });
    };
