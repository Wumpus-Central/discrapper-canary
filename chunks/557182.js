r.d(t, { A: () => f });
var s = r(627968),
    i = r(64700),
    n = r(503698),
    a = r.n(n),
    l = r(939249),
    o = r(428678),
    c = r(834730),
    d = r(34188),
    u = r(534514),
    m = r(42286),
    A = r(713517),
    h = r(927578),
    x = r(898461),
    g = r(483968),
    p = r(821956),
    _ = r(136464),
    v = r(215689),
    j = r(985018),
    E = r(510245);
let I = () => 80,
    y = (e) => {
        let { children: t, className: r, onSelect: i, isSelected: n, ...o } = e;
        return (0, s.jsx)(l.D, {
            "aria-pressed": n,
            className: a()(E.eA, n ? E.wH : void 0, r),
            ...o,
            onClick: i,
            children: t,
        });
    },
    C = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: n,
                section: a,
                canUsePremiumCollectibles: l,
                isSelected: o = !1,
                ...c
            } = e,
            d = i.useRef(null),
            { isHoveringOrFocusing: u } = (0, A.A)(n ?? d),
            { avatarDecorationSrc: m } = (0, v.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !u,
            });
        return (0, s.jsxs)(y, {
            innerRef: n ?? d,
            isSelected: o,
            ...c,
            children: [
                null != m && (0, s.jsx)("img", { className: E.Pw, src: m, alt: r.label }),
                (0, s.jsx)(g.A, {
                    skuId: r.skuId,
                    canUsePremiumCollectibles: l,
                    isPurchaseSection: a === _.wn.PURCHASE,
                    isPremiumSection: a === _.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    f = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: n,
                onSelect: a,
                onOpenShop: l,
            } = e,
            A = (0, _.Ay)(),
            g = h.Ay.canUseCollectibles(t);
        return (0, s.jsx)(m.f, {
            fade: !0,
            className: E.p_,
            columns: 3,
            sections: A.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, u, m, h) => {
                let { section: v, items: I } = A[e],
                    f = I[u];
                if (f === _.dP)
                    return (0, s.jsxs)(
                        y,
                        {
                            style: { ...m },
                            isSelected: null === i,
                            onSelect: () => a(null),
                            children: [
                                (0, s.jsx)(o.K, { size: "md", color: "currentColor", className: E.Kk }),
                                (0, s.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, p.uZ)(t, r) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.PoWNfe),
                                }),
                            ],
                        },
                        h,
                    );
                if (f === _.ZK)
                    return (0, s.jsxs)(
                        y,
                        {
                            style: m,
                            onSelect: l,
                            children: [
                                (0, s.jsx)(d.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: E.sV,
                                }),
                                (0, s.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: j.intl.string(j.t.pWG4ze),
                                }),
                            ],
                        },
                        h,
                    );
                if ((0, x.T)(f)) {
                    let e = i?.skuId === f.skuId;
                    return (0, s.jsx)(
                        C,
                        {
                            style: { ...m },
                            user: t,
                            avatarDecoration: f,
                            section: v,
                            innerRef: e ? n : void 0,
                            canUsePremiumCollectibles: g,
                            isSelected: e,
                            onSelect: () => a(f),
                        },
                        h,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = A[e];
                return (0, s.jsx)("div", {
                    className: E.so,
                    style: { ...t, position: "absolute" },
                    children: (0, s.jsx)(u.D, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => A[e].height,
            getItemKey: (e, t) => A[e].items[t].skuId,
            getItemHeight: I,
        });
    };
