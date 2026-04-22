n.d(t, { A: () => y });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(575593),
    o = n(939249),
    c = n(834730),
    d = n(428678),
    u = n(34188),
    p = n(534514),
    m = n(42286),
    g = n(927578),
    h = n(892118),
    A = n(483968),
    f = n(431672),
    _ = n(985018),
    v = n(900183);
let E = () => 80,
    x = (e) => {
        let { children: t, className: n, isSelected: l, ...i } = e;
        return (0, r.jsx)(o.D, {
            "aria-pressed": l,
            className: a()(v.X5, n, { [v.wH]: l }),
            ...i,
            onClick: i.onSelect,
            children: t,
        });
    },
    I = (e) => {
        let { skuId: t, label: n, innerRef: i, section: a, isSelected: s, canUsePremiumCollectibles: o, ...d } = e,
            u = l.useRef(null);
        return (0, r.jsxs)(x, {
            innerRef: i ?? u,
            isSelected: s,
            ...d,
            children: [
                (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-strong", children: n }),
                (0, r.jsx)(A.A, {
                    skuId: t,
                    canUsePremiumCollectibles: o,
                    isPurchaseSection: a === f.wn.PURCHASE,
                    isPremiumSection: a === f.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    y = (e) => {
        let { user: t, guild: n, pendingProfileFrame: l, selectedProfileFrameRef: i, onSelect: a, onOpenShop: o } = e,
            A = (0, f.Ay)(),
            y = null != l,
            C = g.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: v.uW,
            children: (0, r.jsx)(m.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: v.p_,
                columns: 3,
                sections: A.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, p, m) => {
                    let { section: g, items: E } = A[e],
                        P = E[t];
                    if (P === f.dP)
                        return (0, r.jsxs)(
                            x,
                            {
                                style: { ...p },
                                isSelected: !y,
                                onSelect: () => a(null),
                                children: [
                                    (0, r.jsx)(d.K, { size: "md", color: "currentColor", className: v.vo }),
                                    (0, r.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.PoWNfe),
                                    }),
                                ],
                            },
                            m,
                        );
                    if (P === f.ZK)
                        return (0, r.jsxs)(
                            x,
                            {
                                style: p,
                                onSelect: o,
                                children: [
                                    (0, r.jsx)(u.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: v.sV,
                                    }),
                                    (0, r.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: _.intl.string(_.t.pWG4ze),
                                    }),
                                ],
                            },
                            m,
                        );
                    if ((0, h.s)(P)) {
                        let e = l?.skuId === P.skuId;
                        return (0, r.jsx)(
                            I,
                            {
                                style: { ...p },
                                skuId: P.skuId,
                                label: P.label,
                                section: g,
                                innerRef: e ? i : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: C,
                                onSelect: () => a({ skuId: P.skuId, type: s.R.PROFILE_FRAME }),
                            },
                            m,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = A[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(p.D, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => A[e].items[t].skuId,
                getItemHeight: E,
                removeEdgeItemGutters: !0,
            }),
        });
    };
