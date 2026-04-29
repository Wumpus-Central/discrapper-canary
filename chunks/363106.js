s.d(t, { default: () => q });
var i,
    r = s(627968),
    n = s(64700),
    l = s(17928),
    a = s(821609),
    u = s(935462),
    c = s(534514),
    o = s(289873),
    d = s(793574),
    p = s(688810),
    m = s(571827),
    h = s(725807),
    g = s(919395),
    x = s(84540),
    I = s(287809),
    f = s(954571),
    j = s(927578),
    A = s(693477),
    C = s(993408),
    k = s(821701),
    y = s(841702),
    E = s(503698),
    S = s.n(E),
    v = s(575593),
    P = s(939249),
    _ = s(428678),
    R = s(834730),
    M = s(34188),
    N = s(92008),
    b = s(892118),
    F = s(483968);
s(321073);
var O = s(702841),
    U = s(590180),
    G = s(4227),
    T = s(985018),
    w = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let H = { skuId: "None" },
    L = { skuId: "Shop" };
var D = s(887792),
    z = s(900183);
let K = () => 80,
    J = (e) => {
        let { children: t, className: s, isSelected: i, ...n } = e;
        return (0, r.jsx)(P.D, {
            "aria-pressed": i,
            className: S()(z.X5, s, { [z.wH]: i }),
            ...n,
            onClick: n.onSelect,
            children: t,
        });
    },
    X = (e) => {
        let { profileFrame: t, innerRef: s, section: i, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
            c = n.useRef(null);
        return (0, r.jsxs)(J, {
            innerRef: s ?? c,
            isSelected: l,
            ...u,
            children: [
                (0, r.jsx)(D.A, { frame: t }),
                (0, r.jsx)(F.A, {
                    skuId: t.skuId,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: i === w.PURCHASE,
                    isPremiumSection: i === w.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    W = (e) => {
        let { user: t, guild: s, pendingProfileFrame: i, selectedProfileFrameRef: l, onSelect: a, onOpenShop: u } = e,
            o = (() => {
                let e = (0, O.bG)([G.A], () => G.A.purchases),
                    [t, s] = (0, O.yK)([U.A], () => [U.A.categories, U.A.products]);
                return (0, n.useMemo)(() => {
                    let i = (0, C.MG)(e, t).reduce(
                        (t, i) => {
                            let r = e.get(i.skuId);
                            return (
                                (null != r ? (0, C.gA)(r) : (0, C.G0)(s.get(i.skuId)))
                                    ? t.premium_purchase.push(i)
                                    : null != r
                                      ? t.purchase.push(i)
                                      : t.preview.push(i),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [H, L, ...i.purchase],
                            height: 12,
                            header: T.intl.string(T.t["9eZ4aO"]),
                        },
                        {
                            section: "premium_purchase",
                            items: i.premium_purchase,
                            height: 12,
                            header: T.intl.string(T.t.TiLCgw),
                        },
                        { section: "preview", items: i.preview, height: 12, header: T.intl.string(T.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, s, e]);
            })(),
            d = null != i,
            p = j.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: z.uW,
            children: (0, r.jsx)(N.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: z.p_,
                columns: 3,
                sections: o.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, n, c) => {
                    let { section: m, items: h } = o[e],
                        g = h[t];
                    if (g === H)
                        return (0, r.jsxs)(
                            J,
                            {
                                style: { ...n },
                                isSelected: !d,
                                onSelect: () => a(null),
                                children: [
                                    (0, r.jsx)(_.K, { size: "md", color: "currentColor", className: z.vo }),
                                    (0, r.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != s ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (g === L)
                        return (0, r.jsxs)(
                            J,
                            {
                                style: n,
                                onSelect: u,
                                children: [
                                    (0, r.jsx)(M.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: z.sV,
                                    }),
                                    (0, r.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: T.intl.string(T.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, b.s)(g)) {
                        let e = i?.skuId === g.skuId;
                        return (0, r.jsx)(
                            X,
                            {
                                style: { ...n },
                                profileFrame: g,
                                section: m,
                                innerRef: e ? l : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: p,
                                onSelect: () => a({ skuId: g.skuId, type: v.R.PROFILE_FRAME }),
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: s } = o[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(c.D, { variant: "heading-md/medium", children: s }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => o[e].items[t].skuId,
                getItemHeight: K,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var $ = s(652215),
    V = s(788868),
    B = s(12960);
function Y(e) {
    let {
            user: t,
            product: s,
            purchase: i,
            onApply: n,
            onClose: l,
            onOpenShop: c,
            disableApplyButton: o,
            canUsePremiumCollectibles: d,
            selectedProfileFrame: p,
        } = e,
        g = null != i ? (0, C.gA)(i) : (0, C.G0)(s);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(u.jl, {
            "data-migration-pending": !0,
            className: B.Hx,
            children: [
                (null != i && (d || !g)) || null === p
                    ? (0, r.jsx)(a.$, { variant: "primary", text: T.intl.string(T.t.Jh8fJz), onClick: n, disabled: o })
                    : null == i && (d || !g)
                      ? (0, r.jsx)(a.$, {
                            variant: "primary",
                            text: T.intl.string(T.t.fYfGgK),
                            onClick: () => c(p?.skuId),
                        })
                      : (0, r.jsx)(h.A, {
                            subscriptionTier: V.pe.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: j.Ay.isPremium(t)
                                    ? T.intl.string(T.t.KXLX7l)
                                    : d
                                      ? T.intl.string(T.t.mr4K7D)
                                      : T.intl.string(T.t.pj0XBN),
                            },
                        }),
                !d && g
                    ? (0, r.jsx)(m.A, { itemType: i?.type ?? s?.type, onClose: l })
                    : (0, r.jsx)(a.$, { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function Z(e) {
    let {
            user: t,
            guild: s,
            categories: i,
            purchases: l,
            currentSavedFrame: a,
            analyticsLocations: o,
            initialSelectedProfileFrame: p,
            onClose: m,
        } = e,
        { pendingProfileFrame: h } = (0, g.Tu)(s?.id),
        I = n.useMemo(() => (0, C.MG)(l, i), [i, l]),
        [f, y] = n.useState(() => (null != p ? p : void 0 !== h ? h : (a ?? null))),
        E = n.useMemo(
            () =>
                I.find((e) => {
                    let { skuId: t } = e;
                    return t === f?.skuId;
                }) ?? null,
            [f, I],
        ),
        { product: S, purchase: v } = (0, k.A)(E?.skuId),
        P = n.useRef(null),
        _ = j.Ay.canUseCollectibles(t),
        R = void 0 === h ? f?.skuId === a?.skuId : f?.skuId === h?.skuId,
        M = n.useCallback(
            (e) => {
                y(e);
            },
            [y],
        ),
        N = n.useCallback(
            (e) => {
                m(),
                    (0, A.Cz)({
                        analyticsLocations: o,
                        analyticsSource: d.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [o, m],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: B.Hc,
                children: [
                    (0, r.jsx)(c.D, { variant: "heading-lg/semibold", children: T.intl.string(T.t["oTSa/q"]) }),
                    (0, r.jsx)(u.s_, { "data-migration-pending": !0, className: B.iT, onClick: m }),
                ],
            }),
            (0, r.jsx)(u.$m, {
                "data-migration-pending": !0,
                className: B.jE,
                children: (0, r.jsx)(W, {
                    user: t,
                    guild: s,
                    pendingProfileFrame: f,
                    selectedProfileFrameRef: P,
                    onSelect: M,
                    onOpenShop: N,
                }),
            }),
            (0, r.jsx)(Y, {
                user: t,
                onApply: () => {
                    (0, x.p)({ guildId: s?.id, profileFrame: f ?? null }), m();
                },
                onClose: m,
                onOpenShop: N,
                product: S,
                purchase: v,
                canUsePremiumCollectibles: _,
                selectedProfileFrame: f,
                disableApplyButton: R,
            }),
        ],
    });
}
function q(e) {
    let { transitionState: t, analyticsLocations: s, guild: i, onClose: a, initialSelectedProfileFrame: c } = e,
        { isFetching: m, categories: h, purchases: x } = (0, y.Ay)(),
        j = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: A } = (0, p.Ay)(s, d.A.EDIT_PROFILE_FRAME_MODAL),
        C = (0, g.Xf)({ user: j, guildId: i?.id });
    return (
        n.useEffect(() => {
            f.default.track($.HAw.OPEN_MODAL, { type: $.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: A });
        }, [A]),
        (0, r.jsx)(p.f5, {
            value: A,
            children: (0, r.jsx)(u.EO, {
                transitionState: t,
                className: B.yl,
                size: m ? u.rI.DYNAMIC : u.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, r.jsx)(o.y, { className: B.u1, type: o.y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)(Z, {
                          user: j,
                          guild: i,
                          categories: h,
                          purchases: x,
                          currentSavedFrame: C,
                          onClose: a,
                          analyticsLocations: A,
                          initialSelectedProfileFrame: c,
                      }),
            }),
        })
    );
}
