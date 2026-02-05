r.d(t, { A: () => j });
var n = r(627968),
    s = r(64700),
    i = r(503698),
    a = r.n(i),
    l = r(397927),
    o = r(898461),
    c = r(483968),
    d = r(713517),
    u = r(927578),
    m = r(507698),
    x = r(196026),
    A = r(278539),
    h = r(985018),
    g = r(606586);
let p = () => 80,
    _ = (e) => {
        let { children: t, className: r, onSelect: s, isSelected: i = !1, ...o } = e;
        return (0, n.jsx)(l.DUT, { className: a()(g.eA, i ? g.wH : void 0, r), ...o, onClick: s, children: t });
    },
    v = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: i,
                section: a,
                canUsePremiumCollectibles: l,
                isSelected: o = !1,
                ...u
            } = e,
            m = s.useRef(null),
            { isHoveringOrFocusing: h } = (0, d.A)(i ?? m),
            { avatarDecorationSrc: p } = (0, A.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !h,
            });
        return (0, n.jsxs)(_, {
            innerRef: i ?? m,
            isSelected: o,
            ...u,
            children: [
                (0, n.jsx)("img", { className: g.Pw, src: p, alt: r.label }),
                (0, n.jsx)(c.A, {
                    skuId: r.skuId,
                    canUsePremiumCollectibles: l,
                    isPurchaseSection: a === x.wn.PURCHASE,
                    isPremiumSection: a === x.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    j = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: s,
                selectedAvatarDecorationRef: i,
                onSelect: a,
                onOpenShop: c,
            } = e,
            d = (0, x.Ay)(),
            A = u.Ay.canUseCollectibles(t);
        return (0, n.jsx)(l.a0_, {
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
                    return (0, n.jsxs)(
                        _,
                        {
                            style: { ...p },
                            isSelected: null === s,
                            onSelect: () => a(null),
                            children: [
                                (0, n.jsx)(l.KTN, { size: "md", color: "currentColor", className: g.Kk }),
                                (0, n.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, m.uZ)(t, r) ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.PoWNfe),
                                }),
                            ],
                        },
                        j,
                    );
                if (f === x.ZK)
                    return (0, n.jsxs)(
                        _,
                        {
                            style: p,
                            onSelect: c,
                            children: [
                                (0, n.jsx)(l.U1X, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: g.sV,
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: h.intl.string(h.t.pWG4ze),
                                }),
                            ],
                        },
                        j,
                    );
                if ((0, o.T)(f)) {
                    let e = s?.skuId === f.skuId;
                    return (0, n.jsx)(
                        v,
                        {
                            style: { ...p },
                            user: t,
                            avatarDecoration: f,
                            section: y,
                            innerRef: e ? i : void 0,
                            canUsePremiumCollectibles: A,
                            isSelected: e,
                            onSelect: () => a(f),
                        },
                        j,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = d[e];
                return (0, n.jsx)("div", {
                    className: g.so,
                    style: { ...t, position: "absolute" },
                    children: (0, n.jsx)(l.Text, { variant: "text-md/medium", children: r }),
                });
            },
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, t) => d[e].items[t].skuId,
            getItemHeight: p,
        });
    };
