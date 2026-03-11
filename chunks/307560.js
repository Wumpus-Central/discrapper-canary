n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    o = n(203632),
    c = n(181774),
    d = n(483968),
    u = n(927578),
    m = n(262737),
    p = n(176448),
    g = n(985018),
    x = n(224716),
    f = n(423393);
let A = () => 80,
    h = (e) => {
        let { children: t, className: n, isSelected: i = !1, ...s } = e;
        return (0, r.jsx)(a.DUT, { className: l()(x.BP, n, { [x.wH]: i }), ...s, onClick: s.onSelect, children: t });
    },
    _ = (e) => {
        let { profileEffect: t, innerRef: n, section: s, isSelected: l, canUsePremiumCollectibles: a, ...o } = e,
            u = (0, m.V)(t.skuId),
            g = i.useRef(null),
            { accessibilityLabel: A, thumbnailPreviewSrc: _, title: E } = u?.config ?? {},
            y = i.useMemo(() => (0, c.Rc)(_), [_]);
        return (0, r.jsxs)(h, {
            innerRef: n ?? g,
            isSelected: l,
            ...o,
            children: [
                (0, r.jsx)("img", { src: f.A, alt: A, className: x.rQ }),
                (0, r.jsx)("img", { className: x.Wv, src: y, alt: E }),
                (0, r.jsx)(d.A, {
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
            d = (0, p.Ay)(),
            m = null != i,
            f = u.Ay.canUseCollectibles(t);
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
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, u, A) => {
                    let { section: E, items: y } = d[e],
                        C = y[t];
                    if (C === p.dP)
                        return (0, r.jsxs)(
                            h,
                            {
                                style: { ...u },
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
                            A,
                        );
                    if (C === p.ZK)
                        return (0, r.jsxs)(
                            h,
                            {
                                style: u,
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
                            A,
                        );
                    if ((0, o.C)(C)) {
                        let e = i?.skuId === C.skuId;
                        return (0, r.jsx)(
                            _,
                            {
                                style: { ...u },
                                section: E,
                                profileEffect: C,
                                innerRef: e ? s : void 0,
                                isSelected: e,
                                onSelect: () => l(C),
                                canUsePremiumCollectibles: f,
                            },
                            A,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = d[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(a.Heading, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: A,
                removeEdgeItemGutters: !0,
            }),
        });
    };
