s.d(t, { A: () => y });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    i = s.n(r),
    a = s(575593),
    o = s(939249),
    c = s(834730),
    d = s(428678),
    u = s(34188),
    m = s(534514),
    p = s(42286),
    h = s(927578),
    A = s(892118),
    g = s(483968),
    _ = s(431672),
    x = s(985018),
    E = s(900183);
let I = () => 80,
    f = (e) => {
        let { children: t, className: s, isSelected: l, ...r } = e;
        return (0, n.jsx)(o.D, {
            "aria-pressed": l,
            className: i()(E.X5, s, { [E.wH]: l }),
            ...r,
            onClick: r.onSelect,
            children: t,
        });
    },
    C = (e) => {
        let { skuId: t, label: s, innerRef: r, section: i, isSelected: a, canUsePremiumCollectibles: o, ...d } = e,
            u = l.useRef(null);
        return (0, n.jsxs)(f, {
            innerRef: r ?? u,
            isSelected: a,
            ...d,
            children: [
                (0, n.jsx)(c.E, { variant: "text-xs/normal", color: "text-strong", children: s }),
                (0, n.jsx)(g.A, {
                    skuId: t,
                    canUsePremiumCollectibles: o,
                    isPurchaseSection: i === _.wn.PURCHASE,
                    isPremiumSection: i === _.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    y = (e) => {
        let { user: t, guild: s, pendingProfileFrame: l, selectedProfileFrameRef: r, onSelect: i, onOpenShop: o } = e,
            g = (0, _.Ay)(),
            y = null != l,
            j = h.Ay.canUseCollectibles(t);
        return (0, n.jsx)("section", {
            className: E.uW,
            children: (0, n.jsx)(p.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: E.p_,
                columns: 3,
                sections: g.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, m, p) => {
                    let { section: h, items: I } = g[e],
                        P = I[t];
                    if (P === _.dP)
                        return (0, n.jsxs)(
                            f,
                            {
                                style: { ...m },
                                isSelected: !y,
                                onSelect: () => i(null),
                                children: [
                                    (0, n.jsx)(d.K, { size: "md", color: "currentColor", className: E.vo }),
                                    (0, n.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != s ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.PoWNfe),
                                    }),
                                ],
                            },
                            p,
                        );
                    if (P === _.ZK)
                        return (0, n.jsxs)(
                            f,
                            {
                                style: m,
                                onSelect: o,
                                children: [
                                    (0, n.jsx)(u.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: E.sV,
                                    }),
                                    (0, n.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: x.intl.string(x.t.pWG4ze),
                                    }),
                                ],
                            },
                            p,
                        );
                    if ((0, A.s)(P)) {
                        let e = l?.skuId === P.skuId;
                        return (0, n.jsx)(
                            C,
                            {
                                style: { ...m },
                                skuId: P.skuId,
                                label: P.label,
                                section: h,
                                innerRef: e ? r : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: j,
                                onSelect: () => i({ skuId: P.skuId, type: a.R.PROFILE_FRAME }),
                            },
                            p,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: s } = g[e];
                    return (0, n.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, n.jsx)(m.D, { variant: "heading-md/medium", children: s }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => g[e].items[t].skuId,
                getItemHeight: I,
                removeEdgeItemGutters: !0,
            }),
        });
    };
