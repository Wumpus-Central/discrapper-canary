r.d(t, { A: () => j });
var s = r(627968),
    i = r(64700),
    n = r(503698),
    a = r.n(n),
    l = r(397927),
    o = r(713517),
    c = r(927578),
    d = r(898461),
    u = r(483968),
    m = r(821956),
    x = r(136464),
    A = r(215689),
    h = r(985018),
    g = r(788917);
let p = () => 80,
    _ = (e) => {
        let { children: t, className: r, onSelect: i, isSelected: n, ...o } = e;
        return (0, s.jsx)(l.DUT, {
            "aria-pressed": n,
            className: a()(g.eA, n ? g.wH : void 0, r),
            ...o,
            onClick: i,
            children: t,
        });
    },
    v = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: n,
                section: a,
                canUsePremiumCollectibles: l,
                isSelected: c = !1,
                ...d
            } = e,
            m = i.useRef(null),
            { isHoveringOrFocusing: h } = (0, o.A)(n ?? m),
            { avatarDecorationSrc: p } = (0, A.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !h,
            });
        return (0, s.jsxs)(_, {
            innerRef: n ?? m,
            isSelected: c,
            ...d,
            children: [
                null != p && (0, s.jsx)("img", { className: g.Pw, src: p, alt: r.label }),
                (0, s.jsx)(u.A, {
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
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: n,
                onSelect: a,
                onOpenShop: o,
            } = e,
            u = (0, x.Ay)(),
            A = c.Ay.canUseCollectibles(t);
        return (0, s.jsx)(l.a0_, {
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
            renderItem: (e, c, p, j) => {
                let { section: y, items: I } = u[e],
                    C = I[c];
                if (C === x.dP)
                    return (0, s.jsxs)(
                        _,
                        {
                            style: { ...p },
                            isSelected: null === i,
                            onSelect: () => a(null),
                            children: [
                                (0, s.jsx)(l.KTN, { size: "md", color: "currentColor", className: g.Kk }),
                                (0, s.jsx)(l.Text, {
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
                        _,
                        {
                            style: p,
                            onSelect: o,
                            children: [
                                (0, s.jsx)(l.U1X, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: g.sV,
                                }),
                                (0, s.jsx)(l.Text, {
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
                            style: { ...p },
                            user: t,
                            avatarDecoration: C,
                            section: y,
                            innerRef: e ? n : void 0,
                            canUsePremiumCollectibles: A,
                            isSelected: e,
                            onSelect: () => a(C),
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
                    children: (0, s.jsx)(l.Heading, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => u[e].height,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: p,
        });
    };
