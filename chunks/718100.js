r.d(t, { A: () => j });
var s = r(627968),
    i = r(64700),
    n = r(503698),
    l = r.n(n),
    a = r(397927),
    o = r(898461),
    c = r(483968),
    d = r(713517),
    u = r(927578),
    m = r(507698),
    x = r(196026),
    A = r(278539),
    h = r(985018),
    g = r(282912);
let p = () => 80,
    _ = (e) => {
        let { children: t, className: r, onSelect: i, isSelected: n = !1, ...o } = e;
        return (0, s.jsx)(a.DUT, { className: l()(g.eA, n ? g.wH : void 0, r), ...o, onClick: i, children: t });
    },
    v = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: n,
                section: l,
                canUsePremiumCollectibles: a,
                isSelected: o = !1,
                ...u
            } = e,
            m = i.useRef(null),
            { isHoveringOrFocusing: h } = (0, d.A)(n ?? m),
            { avatarDecorationSrc: p } = (0, A.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !h,
            });
        return (0, s.jsxs)(_, {
            innerRef: n ?? m,
            isSelected: o,
            ...u,
            children: [
                null != p && (0, s.jsx)("img", { className: g.Pw, src: p, alt: r.label }),
                (0, s.jsx)(c.A, {
                    skuId: r.skuId,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: l === x.wn.PURCHASE,
                    isPremiumSection: l === x.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    j = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: n,
                onSelect: l,
                onOpenShop: c,
            } = e,
            d = (0, x.Ay)(),
            A = u.Ay.canUseCollectibles(t);
        return (0, s.jsx)(a.a0_, {
            fade: !0,
            className: g.p_,
            columns: 3,
            sections: d.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, u, p, j) => {
                let { section: y, items: I } = d[e],
                    f = I[u];
                if (f === x.dP)
                    return (0, s.jsxs)(
                        _,
                        {
                            style: { ...p },
                            isSelected: null === i,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(a.KTN, { size: "md", color: "currentColor", className: g.Kk }),
                                (0, s.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, m.uZ)(t, r) ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.PoWNfe),
                                }),
                            ],
                        },
                        j,
                    );
                if (f === x.ZK)
                    return (0, s.jsxs)(
                        _,
                        {
                            style: p,
                            onSelect: c,
                            children: [
                                (0, s.jsx)(a.U1X, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: g.sV,
                                }),
                                (0, s.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: h.intl.string(h.t.pWG4ze),
                                }),
                            ],
                        },
                        j,
                    );
                if ((0, o.T)(f)) {
                    let e = i?.skuId === f.skuId;
                    return (0, s.jsx)(
                        v,
                        {
                            style: { ...p },
                            user: t,
                            avatarDecoration: f,
                            section: y,
                            innerRef: e ? n : void 0,
                            canUsePremiumCollectibles: A,
                            isSelected: e,
                            onSelect: () => l(f),
                        },
                        j,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = d[e];
                return (0, s.jsx)("div", {
                    className: g.so,
                    style: { ...t, position: "absolute" },
                    children: (0, s.jsx)(a.Heading, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, t) => d[e].items[t].skuId,
            getItemHeight: p,
        });
    };
