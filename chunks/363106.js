n.d(t, { default: () => q });
var r,
    l = n(627968),
    i = n(64700),
    a = n(17928),
    s = n(821609),
    o = n(935462),
    c = n(534514),
    d = n(289873),
    u = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(725807),
    h = n(919395),
    A = n(84540),
    f = n(287809),
    _ = n(954571),
    v = n(927578),
    E = n(693477),
    x = n(993408),
    I = n(821701),
    C = n(841702),
    y = n(503698),
    P = n.n(y),
    N = n(575593),
    k = n(939249),
    b = n(834730),
    R = n(428678),
    j = n(34188),
    F = n(92008),
    S = n(892118),
    T = n(483968);
n(321073);
var L = n(702841),
    M = n(590180),
    O = n(4227),
    U = n(985018),
    w = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let D = { skuId: "None" },
    G = { skuId: "Shop" };
var B = n(900183);
let H = () => 80,
    K = (e) => {
        let { children: t, className: n, isSelected: r, ...i } = e;
        return (0, l.jsx)(k.D, {
            "aria-pressed": r,
            className: P()(B.X5, n, { [B.wH]: r }),
            ...i,
            onClick: i.onSelect,
            children: t,
        });
    },
    z = (e) => {
        let { skuId: t, label: n, innerRef: r, section: a, isSelected: s, canUsePremiumCollectibles: o, ...c } = e,
            d = i.useRef(null);
        return (0, l.jsxs)(K, {
            innerRef: r ?? d,
            isSelected: s,
            ...c,
            children: [
                (0, l.jsx)(b.E, { variant: "text-xs/normal", color: "text-strong", children: n }),
                (0, l.jsx)(T.A, {
                    skuId: t,
                    canUsePremiumCollectibles: o,
                    isPurchaseSection: a === w.PURCHASE,
                    isPremiumSection: a === w.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    V = (e) => {
        let { user: t, guild: n, pendingProfileFrame: r, selectedProfileFrameRef: a, onSelect: s, onOpenShop: o } = e,
            d = (() => {
                let e = (0, L.bG)([O.A], () => O.A.purchases),
                    [t, n] = (0, L.yK)([M.A], () => [M.A.categories, M.A.products]);
                return (0, i.useMemo)(() => {
                    let r = (0, x.MG)(e, t).reduce(
                        (t, r) => {
                            let l = e.get(r.skuId);
                            return (
                                (null != l ? (0, x.gA)(l) : (0, x.G0)(n.get(r.skuId)))
                                    ? t.premium_purchase.push(r)
                                    : null != l
                                      ? t.purchase.push(r)
                                      : t.preview.push(r),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [D, G, ...r.purchase],
                            height: 12,
                            header: U.intl.string(U.t["9eZ4aO"]),
                        },
                        {
                            section: "premium_purchase",
                            items: r.premium_purchase,
                            height: 12,
                            header: U.intl.string(U.t.TiLCgw),
                        },
                        { section: "preview", items: r.preview, height: 12, header: U.intl.string(U.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, n, e]);
            })(),
            u = null != r,
            p = v.Ay.canUseCollectibles(t);
        return (0, l.jsx)("section", {
            className: B.uW,
            children: (0, l.jsx)(F.f, {
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
                renderItem: (e, t, i, c) => {
                    let { section: m, items: g } = d[e],
                        h = g[t];
                    if (h === D)
                        return (0, l.jsxs)(
                            K,
                            {
                                style: { ...i },
                                isSelected: !u,
                                onSelect: () => s(null),
                                children: [
                                    (0, l.jsx)(R.K, { size: "md", color: "currentColor", className: B.vo }),
                                    (0, l.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? U.intl.string(U.t.CHf9iJ) : U.intl.string(U.t.PoWNfe),
                                    }),
                                ],
                            },
                            c,
                        );
                    if (h === G)
                        return (0, l.jsxs)(
                            K,
                            {
                                style: i,
                                onSelect: o,
                                children: [
                                    (0, l.jsx)(j.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: B.sV,
                                    }),
                                    (0, l.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.pWG4ze),
                                    }),
                                ],
                            },
                            c,
                        );
                    if ((0, S.s)(h)) {
                        let e = r?.skuId === h.skuId;
                        return (0, l.jsx)(
                            z,
                            {
                                style: { ...i },
                                skuId: h.skuId,
                                label: h.label,
                                section: m,
                                innerRef: e ? a : void 0,
                                isSelected: e,
                                canUsePremiumCollectibles: p,
                                onSelect: () => s({ skuId: h.skuId, type: N.R.PROFILE_FRAME }),
                            },
                            c,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = d[e];
                    return (0, l.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, l.jsx)(c.D, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: H,
                removeEdgeItemGutters: !0,
            }),
        });
    };
var Z = n(652215),
    X = n(788868),
    J = n(12960);
function W(e) {
    let {
            user: t,
            product: n,
            purchase: r,
            onApply: i,
            onClose: a,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileFrame: p,
        } = e,
        h = null != r ? (0, x.gA)(r) : (0, x.G0)(n);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(o.jl, {
            "data-migration-pending": !0,
            className: J.Hx,
            children: [
                (null != r && (u || !h)) || null === p
                    ? (0, l.jsx)(s.$, { variant: "primary", text: U.intl.string(U.t.Jh8fJz), onClick: i, disabled: d })
                    : null == r && (u || !h)
                      ? (0, l.jsx)(s.$, {
                            variant: "primary",
                            text: U.intl.string(U.t.fYfGgK),
                            onClick: () => c(p?.skuId),
                        })
                      : (0, l.jsx)(g.A, {
                            subscriptionTier: X.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: v.Ay.isPremium(t)
                                    ? U.intl.string(U.t.KXLX7l)
                                    : u
                                      ? U.intl.string(U.t.mr4K7D)
                                      : U.intl.string(U.t.pj0XBN),
                            },
                        }),
                !u && h
                    ? (0, l.jsx)(m.A, { itemType: r?.type ?? n?.type, onClose: a })
                    : (0, l.jsx)(s.$, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: a }),
            ],
        }),
    });
}
function $(e) {
    let {
            user: t,
            guild: n,
            categories: r,
            purchases: a,
            currentSavedFrame: s,
            analyticsLocations: d,
            initialSelectedProfileFrame: p,
            onClose: m,
        } = e,
        { pendingProfileFrame: g } = (0, h.Tu)(n?.id),
        f = i.useMemo(() => (0, x.MG)(a, r), [r, a]),
        [_, C] = i.useState(() => (null != p ? p : void 0 !== g ? g : (s ?? null))),
        y = i.useMemo(
            () =>
                f.find((e) => {
                    let { skuId: t } = e;
                    return t === _?.skuId;
                }) ?? null,
            [_, f],
        ),
        { product: P, purchase: N } = (0, I.A)(y?.skuId),
        k = i.useRef(null),
        b = v.Ay.canUseCollectibles(t),
        R = void 0 === g ? _?.skuId === s?.skuId : _?.skuId === g?.skuId,
        j = i.useCallback(
            (e) => {
                C(e);
            },
            [C],
        ),
        F = i.useCallback(
            (e) => {
                m(),
                    (0, E.Cz)({
                        analyticsLocations: d,
                        analyticsSource: u.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, m],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: J.Hc,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: U.intl.string(U.t["oTSa/q"]) }),
                    (0, l.jsx)(o.s_, { "data-migration-pending": !0, className: J.iT, onClick: m }),
                ],
            }),
            (0, l.jsx)(o.$m, {
                "data-migration-pending": !0,
                className: J.jE,
                children: (0, l.jsx)(V, {
                    user: t,
                    guild: n,
                    pendingProfileFrame: _,
                    selectedProfileFrameRef: k,
                    onSelect: j,
                    onOpenShop: F,
                }),
            }),
            (0, l.jsx)(W, {
                user: t,
                onApply: () => {
                    (0, A.p)({ guildId: n?.id, profileFrame: _ ?? null }), m();
                },
                onClose: m,
                onOpenShop: F,
                product: P,
                purchase: N,
                canUsePremiumCollectibles: b,
                selectedProfileFrame: _,
                disableApplyButton: R,
            }),
        ],
    });
}
function q(e) {
    let { transitionState: t, analyticsLocations: n, guild: r, onClose: s, initialSelectedProfileFrame: c } = e,
        { isFetching: m, categories: g, purchases: A } = (0, C.Ay)(),
        v = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: E } = (0, p.Ay)(n, u.A.EDIT_PROFILE_FRAME_MODAL),
        x = (0, h.Xf)({ user: v, guildId: r?.id });
    return (
        i.useEffect(() => {
            _.default.track(Z.HAw.OPEN_MODAL, { type: Z.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, l.jsx)(p.f5, {
            value: E,
            children: (0, l.jsx)(o.EO, {
                transitionState: t,
                className: J.yl,
                size: m ? o.rI.DYNAMIC : o.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, l.jsx)(d.y, { className: J.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, l.jsx)($, {
                          user: v,
                          guild: r,
                          categories: g,
                          purchases: A,
                          currentSavedFrame: x,
                          onClose: s,
                          analyticsLocations: E,
                          initialSelectedProfileFrame: c,
                      }),
            }),
        })
    );
}
