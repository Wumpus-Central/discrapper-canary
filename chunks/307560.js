n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    o = n(203632),
    c = n(181774),
    u = n(483968),
    d = n(927578),
    m = n(262737),
    p = n(176448),
    g = n(985018),
    x = n(55886),
    A = n(191761);
let f = () => 80,
    h = (e) => {
        let { children: t, className: n, isSelected: i = !1, ...s } = e;
        return (0, r.jsx)(a.DUT, { className: l()(x.BP, n, { [x.wH]: i }), ...s, onClick: s.onSelect, children: t });
    },
    _ = (e) => {
        let { profileEffect: t, innerRef: n, section: s, isSelected: l, canUsePremiumCollectibles: a, ...o } = e,
            d = (0, m.V)(t.skuId),
            g = i.useRef(null),
            { accessibilityLabel: f, thumbnailPreviewSrc: _, title: E } = d?.config ?? {},
            y = i.useMemo(() => (0, c.Rc)(_), [_]);
        return (0, r.jsxs)(h, {
            innerRef: n ?? g,
            isSelected: l,
            ...o,
            children: [
                (0, r.jsx)("img", { src: A, alt: f, className: x.rQ }),
                (0, r.jsx)("img", { className: x.Wv, src: y, alt: E }),
                (0, r.jsx)(u.A, {
                    skuId: t.skuId,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: s === p.wn.PURCHASE,
                    isPremiumSection: s === p.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    E = (e) => {
        let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: s, onSelect: l, onOpenShop: c } = e,
            u = (0, p.Ay)(),
            m = null != i,
            A = d.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: x.uW,
            children: (0, r.jsx)(a.a0_, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: x.p_,
                columns: 3,
                sections: u.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, d, f) => {
                    let { section: E, items: y } = u[e],
                        C = y[t];
                    if (C === p.dP)
                        return (0, r.jsxs)(
                            h,
                            {
                                style: { ...d },
                                isSelected: !m,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(a.KTN, { size: "md", color: "currentColor", className: x.vo }),
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.PoWNfe),
                                    }),
                                ],
                            },
                            f,
                        );
                    if (C === p.ZK)
                        return (0, r.jsxs)(
                            h,
                            {
                                style: d,
                                onSelect: c,
                                children: [
                                    (0, r.jsx)(a.U1X, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: x.sV,
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: g.intl.string(g.t.pWG4ze),
                                    }),
                                ],
                            },
                            f,
                        );
                    if ((0, o.C)(C)) {
                        let e = i?.skuId === C.skuId;
                        return (0, r.jsx)(
                            _,
                            {
                                style: { ...d },
                                section: E,
                                profileEffect: C,
                                innerRef: e ? s : void 0,
                                isSelected: e,
                                onSelect: () => l(C),
                                canUsePremiumCollectibles: A,
                            },
                            f,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = u[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(a.Heading, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => u[e].items[t].skuId,
                getItemHeight: f,
                removeEdgeItemGutters: !0,
            }),
        });
    };
