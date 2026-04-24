s.d(t, { default: () => Y });
var l,
    r = s(627968),
    n = s(64700),
    i = s(17928),
    a = s(821609),
    o = s(935462),
    c = s(534514),
    d = s(289873),
    u = s(793574),
    m = s(688810),
    p = s(571827),
    h = s(725807),
    g = s(919395),
    A = s(84540),
    _ = s(287809),
    x = s(954571),
    E = s(927578),
    I = s(29292),
    f = s(993408),
    C = s(821701),
    j = s(841702),
    y = s(503698),
    v = s.n(y),
    P = s(575593),
    k = s(939249),
    R = s(834730),
    L = s(428678),
    N = s(34188),
    M = s(92008),
    T = s(892118),
    O = s(483968);
s(321073);
var S = s(702841),
    b = s(590180),
    F = s(4227),
    U = s(985018),
    w = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let D = { skuId: "None" },
    G = { skuId: "Shop" };
var H = s(900183);
let z = () => 80,
    K = (e) => {
        let { children: t, className: s, isSelected: l, ...n } = e;
        return (0, r.jsx)(k.D, {
            "aria-pressed": l,
            className: v()(H.X5, s, { [H.wH]: l }),
            ...n,
            onClick: n.onSelect,
            children: t,
        });
    },
    X = (e) => {
        let { skuId: t, label: s, innerRef: l, section: i, isSelected: a, canUsePremiumCollectibles: o, ...c } = e,
            d = n.useRef(null);
        return (0, r.jsxs)(K, {
            innerRef: l ?? d,
            isSelected: a,
            ...c,
            children: [
                (0, r.jsx)(R.E, { variant: "text-xs/normal", color: "text-strong", children: s }),
                (0, r.jsx)(O.A, {
                    skuId: t,
                    canUsePremiumCollectibles: o,
                    isPurchaseSection: i === w.PURCHASE,
                    isPremiumSection: i === w.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    B = (e) => {
        let { user: t, guild: s, pendingProfileFrame: l, selectedProfileFrameRef: i, onSelect: a, onOpenShop: o } = e,
            d = (() => {
                let e = (0, S.bG)([F.A], () => F.A.purchases),
                    [t, s] = (0, S.yK)([b.A], () => [b.A.categories, b.A.products]);
                return (0, n.useMemo)(() => {
                    let l = (0, f.MG)(e, t).reduce(
                        (t, l) => {
                            let r = e.get(l.skuId);
                            return (
                                (null != r ? (0, f.gA)(r) : (0, f.G0)(s.get(l.skuId)))
                                    ? t.premium_purchase.push(l)
                                    : null != r
                                      ? t.purchase.push(l)
                                      : t.preview.push(l),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [D, G, ...l.purchase],
                            height: 12,
                            header: U.intl.string(U.t["9eZ4aO"]),
                        },
                        {
                            section: "premium_purchase",
                            items: l.premium_purchase,
                            height: 12,
                            header: U.intl.string(U.t.TiLCgw),
                        },
                        { section: "preview", items: l.preview, height: 12, header: U.intl.string(U.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, s, e]);
            })(),
            u = null != l,
            m = E.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: H.uW,
            children: (0, r.jsx)(M.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: H.p_,
                columns: 3,
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, n, c) => {
                    let { section: p, items: h } = d[e],
                        g = h[t];
                    if (g === D)
                        return (0, r.jsxs)(
                            K,
                            {
                                style: { ...n },
                                isSelected: !u,
                                onSelect: () => a(null),
                                children: [
                                    (0, r.jsx)(L.K, { size: "md", color: "currentColor", className: H.vo }),
                                    (0, r.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != s ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (g === G)
                        return (0, r.jsxs)(
                            K,
                            {
                                style: n,
                                onSelect: o,
                                children: [
                                    (0, r.jsx)(N.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: H.sV,
                                    }),
                                    (0, r.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, T.s)(g)) {
                        let e = l?.skuId === g.skuId;
                        return (0, r.jsx)(
                            X,
                            {
                                style: { ...n },
                                skuId: g.skuId,
                                label: g.label,
                                section: p,
                                innerRef: e ? i : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: m,
                                onSelect: () => a({ skuId: g.skuId, type: P.R.PROFILE_FRAME }),
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: s } = d[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(c.D, { variant: "heading-md/medium", children: s }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: z,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var J = s(652215),
    V = s(788868),
    W = s(12960);
function Z(e) {
    let {
            user: t,
            product: s,
            purchase: l,
            onApply: n,
            onClose: i,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileFrame: m,
        } = e,
        g = null != l ? (0, f.gA)(l) : (0, f.G0)(s);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(o.jl, {
            "data-migration-pending": !0,
            className: W.Hx,
            children: [
                (null != l && (u || !g)) || null === m
                    ? (0, r.jsx)(a.$, { variant: "primary", text: U.intl.string(U.t.Jh8fJz), onClick: n, disabled: d })
                    : null == l && (u || !g)
                      ? (0, r.jsx)(a.$, {
                            variant: "primary",
                            text: U.intl.string(U.t.fYfGgK),
                            onClick: () => c(m?.skuId),
                        })
                      : (0, r.jsx)(h.A, {
                            subscriptionTier: V.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: E.Ay.isPremium(t)
                                    ? U.intl.string(U.t.KXLX7l)
                                    : u
                                      ? U.intl.string(U.t.mr4K7D)
                                      : U.intl.string(U.t.pj0XBN),
                            },
                        }),
                !u && g
                    ? (0, r.jsx)(p.A, { itemType: l?.type ?? s?.type, onClose: i })
                    : (0, r.jsx)(a.$, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: i }),
            ],
        }),
    });
}
function $(e) {
    let {
            user: t,
            guild: s,
            categories: l,
            purchases: i,
            currentSavedFrame: a,
            analyticsLocations: d,
            initialSelectedProfileFrame: m,
            onClose: p,
        } = e,
        { pendingProfileFrame: h } = (0, g.Tu)(s?.id),
        _ = n.useMemo(() => (0, f.MG)(i, l), [l, i]),
        [x, j] = n.useState(() => (null != m ? m : void 0 !== h ? h : (a ?? null))),
        y = n.useMemo(
            () =>
                _.find((e) => {
                    let { skuId: t } = e;
                    return t === x?.skuId;
                }) ?? null,
            [x, _],
        ),
        { product: v, purchase: P } = (0, C.A)(y?.skuId),
        k = n.useRef(null),
        R = E.Ay.canUseCollectibles(t),
        L = void 0 === h ? x?.skuId === a?.skuId : x?.skuId === h?.skuId,
        N = n.useCallback(
            (e) => {
                j(e);
            },
            [j],
        ),
        M = n.useCallback(
            (e) => {
                p(),
                    (0, I.Cz)({
                        analyticsLocations: d,
                        analyticsSource: u.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: W.Hc,
                children: [
                    (0, r.jsx)(c.D, { variant: "heading-lg/semibold", children: U.intl.string(U.t["oTSa/q"]) }),
                    (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: W.iT, onClick: p }),
                ],
            }),
            (0, r.jsx)(o.$m, {
                "data-migration-pending": !0,
                className: W.jE,
                children: (0, r.jsx)(B, {
                    user: t,
                    guild: s,
                    pendingProfileFrame: x,
                    selectedProfileFrameRef: k,
                    onSelect: N,
                    onOpenShop: M,
                }),
            }),
            (0, r.jsx)(Z, {
                user: t,
                onApply: () => {
                    (0, A.p)({ guildId: s?.id, profileFrame: x ?? null }), p();
                },
                onClose: p,
                onOpenShop: M,
                product: v,
                purchase: P,
                canUsePremiumCollectibles: R,
                selectedProfileFrame: x,
                disableApplyButton: L,
            }),
        ],
    });
}
function Y(e) {
    let { transitionState: t, analyticsLocations: s, guild: l, onClose: a, initialSelectedProfileFrame: c } = e,
        { isFetching: p, categories: h, purchases: A } = (0, j.Ay)(),
        E = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: I } = (0, m.Ay)(s, u.A.EDIT_PROFILE_FRAME_MODAL),
        f = (0, g.Xf)({ user: E, guildId: l?.id });
    return (
        n.useEffect(() => {
            x.default.track(J.HAw.OPEN_MODAL, { type: J.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: I });
        }, [I]),
        (0, r.jsx)(m.f5, {
            value: I,
            children: (0, r.jsx)(o.EO, {
                transitionState: t,
                className: W.yl,
                size: p ? o.rI.DYNAMIC : o.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, r.jsx)(d.y, { className: W.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)($, {
                          user: E,
                          guild: l,
                          categories: h,
                          purchases: A,
                          currentSavedFrame: f,
                          onClose: a,
                          analyticsLocations: I,
                          initialSelectedProfileFrame: c,
                      }),
            }),
        })
    );
}
