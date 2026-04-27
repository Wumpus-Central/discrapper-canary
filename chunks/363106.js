r.d(t, { default: () => q });
var n,
    l = r(627968),
    a = r(64700),
    i = r(17928),
    s = r(821609),
    o = r(935462),
    c = r(534514),
    d = r(289873),
    u = r(793574),
    m = r(688810),
    p = r(571827),
    f = r(725807),
    g = r(919395),
    h = r(84540),
    A = r(287809),
    _ = r(954571),
    v = r(927578),
    b = r(693477),
    x = r(993408),
    y = r(821701),
    E = r(841702),
    I = r(503698),
    C = r.n(I),
    P = r(575593),
    N = r(939249),
    k = r(428678),
    j = r(834730),
    R = r(34188),
    S = r(92008),
    F = r(892118),
    w = r(483968);
r(321073);
var M = r(702841),
    L = r(590180),
    O = r(4227),
    T = r(985018),
    U = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let D = { skuId: "None" },
    G = { skuId: "Shop" };
var H = r(395744),
    B = r(900183);
let K = () => 80,
    X = (e) => {
        let { children: t, className: r, isSelected: n, ...a } = e;
        return (0, l.jsx)(N.D, {
            "aria-pressed": n,
            className: C()(B.X5, r, { [B.wH]: n }),
            ...a,
            onClick: a.onSelect,
            children: t,
        });
    },
    z = (e) => {
        let { profileFrame: t, innerRef: r, section: n, isSelected: i, canUsePremiumCollectibles: s, ...o } = e,
            c = a.useRef(null);
        return (0, l.jsxs)(X, {
            innerRef: r ?? c,
            isSelected: i,
            ...o,
            children: [
                (0, l.jsx)(H.A, { profileFrame: t, isMini: !0 }),
                (0, l.jsx)(w.A, {
                    skuId: t.skuId,
                    canUsePremiumCollectibles: s,
                    isPurchaseSection: n === U.PURCHASE,
                    isPremiumSection: n === U.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    V = (e) => {
        let { user: t, guild: r, pendingProfileFrame: n, selectedProfileFrameRef: i, onSelect: s, onOpenShop: o } = e,
            d = (() => {
                let e = (0, M.bG)([O.A], () => O.A.purchases),
                    [t, r] = (0, M.yK)([L.A], () => [L.A.categories, L.A.products]);
                return (0, a.useMemo)(() => {
                    let n = (0, x.MG)(e, t).reduce(
                        (t, n) => {
                            let l = e.get(n.skuId);
                            return (
                                (null != l ? (0, x.gA)(l) : (0, x.G0)(r.get(n.skuId)))
                                    ? t.premium_purchase.push(n)
                                    : null != l
                                      ? t.purchase.push(n)
                                      : t.preview.push(n),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [D, G, ...n.purchase],
                            height: 12,
                            header: T.intl.string(T.t["9eZ4aO"]),
                        },
                        {
                            section: "premium_purchase",
                            items: n.premium_purchase,
                            height: 12,
                            header: T.intl.string(T.t.TiLCgw),
                        },
                        { section: "preview", items: n.preview, height: 12, header: T.intl.string(T.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, r, e]);
            })(),
            u = null != n,
            m = v.Ay.canUseCollectibles(t);
        return (0, l.jsx)("section", {
            className: B.uW,
            children: (0, l.jsx)(S.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: B.p_,
                columns: 3,
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, a, c) => {
                    let { section: p, items: f } = d[e],
                        g = f[t];
                    if (g === D)
                        return (0, l.jsxs)(
                            X,
                            {
                                style: { ...a },
                                isSelected: !u,
                                onSelect: () => s(null),
                                children: [
                                    (0, l.jsx)(k.K, { size: "md", color: "currentColor", className: B.vo }),
                                    (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != r ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (g === G)
                        return (0, l.jsxs)(
                            X,
                            {
                                style: a,
                                onSelect: o,
                                children: [
                                    (0, l.jsx)(R.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: B.sV,
                                    }),
                                    (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: T.intl.string(T.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, F.s)(g)) {
                        let e = n?.skuId === g.skuId;
                        return (0, l.jsx)(
                            z,
                            {
                                style: { ...a },
                                profileFrame: g,
                                section: p,
                                innerRef: e ? i : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: m,
                                onSelect: () => s({ skuId: g.skuId, type: P.R.PROFILE_FRAME }),
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: r } = d[e];
                    return (0, l.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, l.jsx)(c.D, { variant: "heading-md/medium", children: r }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: K,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var W = r(652215),
    Z = r(788868),
    J = r(12960);
function Q(e) {
    let {
            user: t,
            product: r,
            purchase: n,
            onApply: a,
            onClose: i,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileFrame: m,
        } = e,
        g = null != n ? (0, x.gA)(n) : (0, x.G0)(r);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(o.jl, {
            "data-migration-pending": !0,
            className: J.Hx,
            children: [
                (null != n && (u || !g)) || null === m
                    ? (0, l.jsx)(s.$, { variant: "primary", text: T.intl.string(T.t.Jh8fJz), onClick: a, disabled: d })
                    : null == n && (u || !g)
                      ? (0, l.jsx)(s.$, {
                            variant: "primary",
                            text: T.intl.string(T.t.fYfGgK),
                            onClick: () => c(m?.skuId),
                        })
                      : (0, l.jsx)(f.A, {
                            subscriptionTier: Z.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: v.Ay.isPremium(t)
                                    ? T.intl.string(T.t.KXLX7l)
                                    : u
                                      ? T.intl.string(T.t.mr4K7D)
                                      : T.intl.string(T.t.pj0XBN),
                            },
                        }),
                !u && g
                    ? (0, l.jsx)(p.A, { itemType: n?.type ?? r?.type, onClose: i })
                    : (0, l.jsx)(s.$, { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: i }),
            ],
        }),
    });
}
function $(e) {
    let {
            user: t,
            guild: r,
            categories: n,
            purchases: i,
            currentSavedFrame: s,
            analyticsLocations: d,
            initialSelectedProfileFrame: m,
            onClose: p,
        } = e,
        { pendingProfileFrame: f } = (0, g.Tu)(r?.id),
        A = a.useMemo(() => (0, x.MG)(i, n), [n, i]),
        [_, E] = a.useState(() => (null != m ? m : void 0 !== f ? f : (s ?? null))),
        I = a.useMemo(
            () =>
                A.find((e) => {
                    let { skuId: t } = e;
                    return t === _?.skuId;
                }) ?? null,
            [_, A],
        ),
        { product: C, purchase: P } = (0, y.A)(I?.skuId),
        N = a.useRef(null),
        k = v.Ay.canUseCollectibles(t),
        j = void 0 === f ? _?.skuId === s?.skuId : _?.skuId === f?.skuId,
        R = a.useCallback(
            (e) => {
                E(e);
            },
            [E],
        ),
        S = a.useCallback(
            (e) => {
                p(),
                    (0, b.Cz)({
                        analyticsLocations: d,
                        analyticsSource: u.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, p],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: J.Hc,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: T.intl.string(T.t["oTSa/q"]) }),
                    (0, l.jsx)(o.s_, { "data-migration-pending": !0, className: J.iT, onClick: p }),
                ],
            }),
            (0, l.jsx)(o.$m, {
                "data-migration-pending": !0,
                className: J.jE,
                children: (0, l.jsx)(V, {
                    user: t,
                    guild: r,
                    pendingProfileFrame: _,
                    selectedProfileFrameRef: N,
                    onSelect: R,
                    onOpenShop: S,
                }),
            }),
            (0, l.jsx)(Q, {
                user: t,
                onApply: () => {
                    (0, h.p)({ guildId: r?.id, profileFrame: _ ?? null }), p();
                },
                onClose: p,
                onOpenShop: S,
                product: C,
                purchase: P,
                canUsePremiumCollectibles: k,
                selectedProfileFrame: _,
                disableApplyButton: j,
            }),
        ],
    });
}
function q(e) {
    let { transitionState: t, analyticsLocations: r, guild: n, onClose: s, initialSelectedProfileFrame: c } = e,
        { isFetching: p, categories: f, purchases: h } = (0, E.Ay)(),
        v = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: b } = (0, m.Ay)(r, u.A.EDIT_PROFILE_FRAME_MODAL),
        x = (0, g.Xf)({ user: v, guildId: n?.id });
    return (
        a.useEffect(() => {
            _.default.track(W.HAw.OPEN_MODAL, { type: W.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: b });
        }, [b]),
        (0, l.jsx)(m.f5, {
            value: b,
            children: (0, l.jsx)(o.EO, {
                transitionState: t,
                className: J.yl,
                size: p ? o.rI.DYNAMIC : o.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, l.jsx)(d.y, { className: J.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, l.jsx)($, {
                          user: v,
                          guild: n,
                          categories: f,
                          purchases: h,
                          currentSavedFrame: x,
                          onClose: s,
                          analyticsLocations: b,
                          initialSelectedProfileFrame: c,
                      }),
            }),
        })
    );
}
