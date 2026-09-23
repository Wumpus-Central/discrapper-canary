i.d(t, { default: () => ea });
var n,
    s = i(477900),
    r = i(582128),
    l = i(17928),
    a = i(935462),
    u = i(821609),
    o = i(297264),
    d = i(289873),
    c = i(793574),
    p = i(688810),
    m = i(571827),
    g = i(725807),
    h = i(919395),
    I = i(84540),
    f = i(287809),
    x = i(174459),
    A = i(158045),
    C = i(839534),
    j = i(993408),
    y = i(821701),
    k = i(841702),
    v = i(451909),
    P = i(986687),
    E = i(101058),
    S = i(836602),
    N = i(814390),
    R = i(448429),
    b = i(375708),
    _ = i(788991);
let M = function (e) {
    let { user: t, profileFrame: i, guild: n } = e,
        {
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: o,
            pendingBanner: d,
            pendingAvatar: c,
            pendingAvatarDecoration: p,
            pendingProfileEffect: m,
            pendingDisplayNameStyles: g,
            pendingThemeColors: h,
            pendingAccentColor: I,
            pendingPrimaryGuildId: f,
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(n?.id)),
        x = A.Ay.canUsePremiumProfileCustomization(t),
        C = (0, N.A)() && null != o ? v.Ay.parse(void 0, o).content : o;
    return (0, s.jsxs)("div", {
        className: _.i,
        children: [
            (0, s.jsx)(P.A, {
                user: t,
                guild: n,
                pendingProfileFrame: i ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: C,
                pendingBanner: d,
                pendingAvatar: (0, E.V7)({ userId: t.id, image: c }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: I,
                pendingProfileEffect: m,
                pendingDisplayNameStyles: g,
                pendingPrimaryGuildId: f,
                canUsePremiumCustomization: x,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            (0, s.jsx)(R.A, {
                user: t,
                previewSkuId: i?.skuId,
                nitroChurnCTA: b.intl.string(b.t.RPIwEb),
                nitroJoinCTA: b.intl.string(b.t.iu352Z),
            }),
        ],
    });
};
var F = i(503698),
    O = i.n(F),
    T = i(575593),
    U = i(939249),
    G = i(428678),
    w = i(834730),
    D = i(34188),
    H = i(92008),
    L = i(892118),
    z = i(483968);
i(321073);
var J = i(702841),
    K = i(590180),
    X = i(4227),
    B = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let V = { skuId: "None" },
    W = { skuId: "Shop" },
    $ = function () {
        let e = (0, J.bG)([X.A], () => X.A.purchases),
            [t, i] = (0, J.yK)([K.A], () => [K.A.categories, K.A.products]);
        return (0, r.useMemo)(() => {
            let n = (0, j.MG)(e, t).reduce(
                    (t, n) => {
                        let s = e.get(n.skuId);
                        return (
                            (null != s ? (0, j.gA)(s) : (0, j.G0)(i.get(n.skuId)))
                                ? t.premium_purchase.push(n)
                                : null != s
                                  ? t.purchase.push(n)
                                  : t.preview.push(n),
                            t
                        );
                    },
                    { purchase: [], premium_purchase: [], preview: [] },
                ),
                s = b.intl.string(b.t.TiLCgw);
            return [
                { section: "purchase", items: [V, W, ...n.purchase], height: 12, header: b.intl.string(b.t["9eZ4aO"]) },
                { section: "premium_purchase", items: n.premium_purchase, height: 12, header: s },
                { section: "preview", items: n.preview, height: 12, header: b.intl.string(b.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, i, e]);
    };
var Z = i(665411),
    q = i(774832);
function Y() {
    return 80;
}
function Q(e) {
    let { children: t, className: i, isSelected: n, ...r } = e;
    return (0, s.jsx)(U.D, {
        "aria-pressed": n,
        className: O()(q.X5, i, { [q.wH]: n }),
        ...r,
        onClick: r.onSelect,
        children: t,
    });
}
function ee(e) {
    let { profileFrame: t, innerRef: i, section: n, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
        o = r.useRef(null);
    return (0, s.jsxs)(Q, {
        innerRef: i ?? o,
        isSelected: l,
        className: q.IO,
        ...u,
        children: [
            (0, s.jsx)(Z.A, { frame: t }),
            (0, s.jsx)(z.A, {
                skuId: t.skuId,
                canUsePremiumCollectibles: a,
                isPurchaseSection: n === B.PURCHASE,
                isPremiumSection: n === B.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let et = function (e) {
    let { user: t, guild: i, pendingProfileFrame: n, selectedProfileFrameRef: r, onSelect: l, onOpenShop: a } = e,
        u = $(),
        d = null != n,
        c = A.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: q.uW,
        children: (0, s.jsx)(H.f, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: q.p_,
            columns: 3,
            sections: u.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, t, o, p) => {
                let { section: m, items: g } = u[e],
                    h = g[t];
                if (h === V)
                    return (0, s.jsxs)(
                        Q,
                        {
                            style: { ...o },
                            isSelected: !d,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(G.K, { size: "md", color: "currentColor", className: q.vo }),
                                (0, s.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: null != i ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.PoWNfe),
                                }),
                            ],
                        },
                        p,
                    );
                if (h === W)
                    return (0, s.jsxs)(
                        Q,
                        {
                            style: o,
                            onSelect: () => a(),
                            children: [
                                (0, s.jsx)(D.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: q.sV,
                                }),
                                (0, s.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: b.intl.string(b.t.pWG4ze),
                                }),
                            ],
                        },
                        p,
                    );
                if ((0, L.s)(h)) {
                    let e = n?.skuId === h.skuId;
                    return (0, s.jsx)(
                        ee,
                        {
                            style: { ...o },
                            profileFrame: h,
                            section: m,
                            innerRef: e ? r : void 0,
                            isSelected: e,
                            canUsePremiumCollectibles: c,
                            onSelect: () => l({ skuId: h.skuId, type: T.R.PROFILE_FRAME }),
                        },
                        p,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: i } = u[e];
                return (0, s.jsx)("div", {
                    style: { ...t, height: "16px", position: "absolute" },
                    children: (0, s.jsx)(o.D, { variant: "heading-md/medium", children: i }),
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: Y,
            removeEdgeItemGutters: !0,
        }),
    });
};
var ei = i(652215),
    en = i(202541),
    es = i(409451);
function er(e) {
    let {
            user: t,
            product: i,
            purchase: n,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: d,
            canUsePremiumCollectibles: c,
            selectedProfileFrame: p,
        } = e,
        h = null != n ? (0, j.gA)(n) : (0, j.G0)(i);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: es.Hx,
            children: [
                (null != n && (c || !h)) || null === p
                    ? (0, s.jsx)(u.$, { variant: "primary", text: b.intl.string(b.t.Jh8fJz), onClick: r, disabled: d })
                    : null == n && (c || !h)
                      ? (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: b.intl.string(b.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: en.pe.TIER_2,
                            showGradient: !c,
                            textOptions: {
                                textOverride: A.Ay.isPremium(t)
                                    ? b.intl.string(b.t.KXLX7l)
                                    : c
                                      ? b.intl.string(b.t.mr4K7D)
                                      : b.intl.string(b.t.pj0XBN),
                            },
                        }),
                !c && h
                    ? (0, s.jsx)(m.A, { itemType: n?.type ?? i?.type, onClose: l })
                    : (0, s.jsx)(u.$, { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function el(e) {
    let {
            user: t,
            guild: i,
            categories: n,
            purchases: l,
            currentSavedFrame: u,
            analyticsLocations: d,
            modalHeadingId: p,
            initialSelectedProfileFrame: m,
            onClose: g,
        } = e,
        { pendingProfileFrame: f } = (0, h.Tu)(i?.id),
        x = r.useMemo(() => (0, j.MG)(l, n), [n, l]),
        [k, v] = r.useState(() => (null != m ? m : void 0 !== f ? f : (u ?? null))),
        P = r.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === k?.skuId;
                }) ?? null,
            [k, x],
        ),
        { product: E, purchase: S } = (0, y.A)(P?.skuId),
        N = r.useRef(null),
        R = A.Ay.canUseCollectibles(t),
        _ = void 0 === f ? k?.skuId === u?.skuId : k?.skuId === f?.skuId,
        F = r.useCallback(
            (e) => {
                v(e);
            },
            [v],
        ),
        O = r.useCallback(
            (e) => {
                (g(),
                    (0, C.Cz)({
                        analyticsLocations: d,
                        analyticsSource: c.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [d, g],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: es.Hc,
                children: [
                    (0, s.jsx)(o.D, { id: p, variant: "heading-lg/semibold", children: b.intl.string(b.t["oTSa/q"]) }),
                    (0, s.jsx)(a.s_, { "data-migration-pending": !0, className: es.iT, onClick: g }),
                ],
            }),
            (0, s.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: es.jE,
                children: [
                    (0, s.jsx)(et, {
                        user: t,
                        guild: i,
                        pendingProfileFrame: k,
                        selectedProfileFrameRef: N,
                        onSelect: F,
                        onOpenShop: O,
                    }),
                    (0, s.jsx)(M, { user: t, profileFrame: P, guild: i }),
                ],
            }),
            (0, s.jsx)(er, {
                user: t,
                onApply: function () {
                    ((0, I.p)({ guildId: i?.id, profileFrame: k ?? null }), g());
                },
                onClose: g,
                onOpenShop: O,
                product: E,
                purchase: S,
                canUsePremiumCollectibles: R,
                selectedProfileFrame: k,
                disableApplyButton: _,
            }),
        ],
    });
}
function ea(e) {
    let {
            transitionState: t,
            analyticsLocations: i,
            guild: n,
            onClose: u,
            initialSelectedProfileFrame: o,
            returnRef: m,
        } = e,
        { categories: g, purchases: I, isFetchingCategories: A, isFetchingPurchases: C } = (0, k.Ay)(),
        j = A || (C && 0 === I.size),
        y = r.useId(),
        v = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: P } = (0, p.Ay)(i, c.A.EDIT_PROFILE_FRAME_MODAL),
        E = (0, h.Xf)({ user: v, guildId: n?.id });
    return (
        r.useEffect(() => {
            x.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: P });
        }, [P]),
        (0, s.jsx)(p.f5, {
            value: P,
            children: (0, s.jsx)(a.EO, {
                transitionState: t,
                className: es.yl,
                size: j ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                returnRef: m,
                "aria-label": j ? b.intl.string(b.t["oTSa/q"]) : void 0,
                "aria-labelledby": j ? void 0 : y,
                "data-migration-pending": !0,
                children: j
                    ? (0, s.jsx)(d.y, { className: es.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(el, {
                          user: v,
                          guild: n,
                          categories: g,
                          purchases: I,
                          currentSavedFrame: E,
                          onClose: u,
                          analyticsLocations: P,
                          modalHeadingId: y,
                          initialSelectedProfileFrame: o,
                      }),
            }),
        })
    );
}
