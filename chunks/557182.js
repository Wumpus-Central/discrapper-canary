r.d(t, { A: () => y });
var a = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(939249),
    o = r(428678),
    c = r(834730),
    u = r(34188),
    d = r(534514),
    A = r(42286),
    m = r(713517),
    h = r(927578),
    _ = r(898461),
    g = r(483968),
    p = r(821956),
    E = r(136464),
    f = r(215689),
    v = r(985018),
    x = r(510245);
let I = () => 80,
    R = (e) => {
        let { children: t, className: r, onSelect: n, isSelected: l, ...o } = e;
        return (0, a.jsx)(i.D, {
            "aria-pressed": l,
            className: s()(x.eA, l ? x.wH : void 0, r),
            ...o,
            onClick: n,
            children: t,
        });
    },
    N = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: l,
                section: s,
                canUsePremiumCollectibles: i,
                isSelected: o = !1,
                ...c
            } = e,
            u = n.useRef(null),
            { isHoveringOrFocusing: d } = (0, m.A)(l ?? u),
            { avatarDecorationSrc: A } = (0, f.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !d,
            });
        return (0, a.jsxs)(R, {
            innerRef: l ?? u,
            isSelected: o,
            ...c,
            children: [
                null != A && (0, a.jsx)("img", { className: x.Pw, src: A, alt: r.label }),
                (0, a.jsx)(g.A, {
                    skuId: r.skuId,
                    canUsePremiumCollectibles: i,
                    isPurchaseSection: s === E.wn.PURCHASE,
                    isPremiumSection: s === E.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    y = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: n,
                selectedAvatarDecorationRef: l,
                onSelect: s,
                onOpenShop: i,
            } = e,
            m = (0, E.Ay)(),
            g = h.Ay.canUseCollectibles(t);
        return (0, a.jsx)(A.f, {
            fade: !0,
            className: x.p_,
            columns: 3,
            sections: m.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, d, A, h) => {
                let { section: f, items: I } = m[e],
                    y = I[d];
                if (y === E.dP)
                    return (0, a.jsxs)(
                        R,
                        {
                            style: { ...A },
                            isSelected: null === n,
                            onSelect: () => s(null),
                            children: [
                                (0, a.jsx)(o.K, { size: "md", color: "currentColor", className: x.Kk }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, p.uZ)(t, r) ? v.intl.string(v.t.CHf9iJ) : v.intl.string(v.t.PoWNfe),
                                }),
                            ],
                        },
                        h,
                    );
                if (y === E.ZK)
                    return (0, a.jsxs)(
                        R,
                        {
                            style: A,
                            onSelect: i,
                            children: [
                                (0, a.jsx)(u.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: x.sV,
                                }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: v.intl.string(v.t.pWG4ze),
                                }),
                            ],
                        },
                        h,
                    );
                if ((0, _.T)(y)) {
                    let e = n?.skuId === y.skuId;
                    return (0, a.jsx)(
                        N,
                        {
                            style: { ...A },
                            user: t,
                            avatarDecoration: y,
                            section: f,
                            innerRef: e ? l : void 0,
                            canUsePremiumCollectibles: g,
                            isSelected: e,
                            onSelect: () => s(y),
                        },
                        h,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = m[e];
                return (0, a.jsx)("div", {
                    className: x.so,
                    style: { ...t, position: "absolute" },
                    children: (0, a.jsx)(d.D, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => m[e].height,
            getItemKey: (e, t) => m[e].items[t].skuId,
            getItemHeight: I,
        });
    };
