r.d(t, { A: () => j });
var s = r(627968),
    i = r(64700),
    n = r(503698),
    l = r.n(n),
    a = r(397927),
    o = r(713517),
    c = r(927578),
    d = r(898461),
    u = r(483968),
    m = r(821956),
    x = r(136464),
    A = r(215689),
    h = r(985018),
    g = r(70540);
let _ = () => 80,
    p = (e) => {
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
                isSelected: c = !1,
                ...d
            } = e,
            m = i.useRef(null),
            { isHoveringOrFocusing: h } = (0, o.A)(n ?? m),
            { avatarDecorationSrc: _ } = (0, A.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !h,
            });
        return (0, s.jsxs)(p, {
            innerRef: n ?? m,
            isSelected: c,
            ...d,
            children: [
                null != _ && (0, s.jsx)("img", { className: g.Pw, src: _, alt: r.label }),
                (0, s.jsx)(u.A, {
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
                onOpenShop: o,
            } = e,
            u = (0, x.Ay)(),
            A = c.Ay.canUseCollectibles(t);
        return (0, s.jsx)(a.a0_, {
            fade: !0,
            className: g.p_,
            columns: 3,
            sections: u.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, c, _, j) => {
                let { section: y, items: I } = u[e],
                    C = I[c];
                if (C === x.dP)
                    return (0, s.jsxs)(
                        p,
                        {
                            style: { ..._ },
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
                if (C === x.ZK)
                    return (0, s.jsxs)(
                        p,
                        {
                            style: _,
                            onSelect: o,
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
                if ((0, d.T)(C)) {
                    let e = i?.skuId === C.skuId;
                    return (0, s.jsx)(
                        v,
                        {
                            style: { ..._ },
                            user: t,
                            avatarDecoration: C,
                            section: y,
                            innerRef: e ? n : void 0,
                            canUsePremiumCollectibles: A,
                            isSelected: e,
                            onSelect: () => l(C),
                        },
                        j,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = u[e];
                return (0, s.jsx)("div", {
                    className: g.so,
                    style: { ...t, position: "absolute" },
                    children: (0, s.jsx)(a.Heading, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => u[e].height,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: _,
        });
    };
