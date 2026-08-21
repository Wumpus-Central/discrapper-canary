i.d(t, { default: () => eu });
var n,
    s = i(477900),
    r = i(582128),
    l = i(17928),
    a = i(935462),
    u = i(821609),
    o = i(297264),
    d = i(289873),
    c = i(793574),
    m = i(688810),
    p = i(571827),
    g = i(725807),
    h = i(919395),
    f = i(84540),
    I = i(287809),
    x = i(174459),
    A = i(158045),
    C = i(839534),
    j = i(993408),
    y = i(821701),
    P = i(841702),
    k = i(451909),
    v = i(986687),
    E = i(101058),
    S = i(836602),
    N = i(814390),
    R = i(448429),
    b = i(375708),
    _ = i(788991);
let F = function (e) {
    let { user: t, profileFrame: i, guild: n } = e,
        {
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: o,
            pendingBanner: d,
            pendingAvatar: c,
            pendingAvatarDecoration: m,
            pendingProfileEffect: p,
            pendingDisplayNameStyles: g,
            pendingThemeColors: h,
            pendingAccentColor: f,
            pendingPrimaryGuildId: I,
        } = (0, l.cf)([S.A], () => S.A.getPendingChanges(n?.id)),
        x = A.Ay.canUsePremiumProfileCustomization(t),
        C = (0, N.A)() && null != o ? k.Ay.parse(void 0, o).content : o;
    return (0, s.jsxs)("div", {
        className: _.i,
        children: [
            (0, s.jsx)(v.A, {
                user: t,
                guild: n,
                pendingProfileFrame: i ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: C,
                pendingBanner: d,
                pendingAvatar: (0, E.V7)({ userId: t.id, image: c }),
                pendingAvatarDecoration: m,
                pendingThemeColors: h,
                pendingAccentColor: f,
                pendingProfileEffect: p,
                pendingDisplayNameStyles: g,
                pendingPrimaryGuildId: I,
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
var M = i(503698),
    O = i.n(M),
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
    B = i(13875),
    V = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let W = { skuId: "None" },
    $ = { skuId: "Shop" },
    Z = function () {
        let e = (0, J.bG)([X.A], () => X.A.purchases),
            [t, i] = (0, J.yK)([K.A], () => [K.A.categories, K.A.products]),
            n = (0, B.Do)("useProfileFrameSections");
        return (0, r.useMemo)(() => {
            let s = (0, j.MG)(e, t).reduce(
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
                r = b.intl.string(b.t.TiLCgw);
            return [
                { section: "purchase", items: [W, $, ...s.purchase], height: 12, header: b.intl.string(b.t["9eZ4aO"]) },
                { section: "premium_purchase", items: s.premium_purchase, height: 12, header: r },
                { section: "preview", items: s.preview, height: 12, header: n ? r : b.intl.string(b.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, i, e, n]);
    };
var q = i(665411),
    Y = i(552451);
function Q() {
    return 80;
}
function ee(e) {
    let { children: t, className: i, isSelected: n, ...r } = e;
    return (0, s.jsx)(U.D, {
        "aria-pressed": n,
        className: O()(Y.X5, i, { [Y.wH]: n }),
        ...r,
        onClick: r.onSelect,
        children: t,
    });
}
function et(e) {
    let { profileFrame: t, innerRef: i, section: n, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
        o = r.useRef(null);
    return (0, s.jsxs)(ee, {
        innerRef: i ?? o,
        isSelected: l,
        className: Y.IO,
        ...u,
        children: [
            (0, s.jsx)(q.A, { frame: t }),
            (0, s.jsx)(z.A, {
                skuId: t.skuId,
                canUsePremiumCollectibles: a,
                isPurchaseSection: n === V.PURCHASE,
                isPremiumSection: n === V.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let ei = function (e) {
    let { user: t, guild: i, pendingProfileFrame: n, selectedProfileFrameRef: r, onSelect: l, onOpenShop: a } = e,
        u = Z(),
        d = null != n,
        c = A.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: Y.uW,
        children: (0, s.jsx)(H.f, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: Y.p_,
            columns: 3,
            sections: u.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, t, o, m) => {
                let { section: p, items: g } = u[e],
                    h = g[t];
                if (h === W)
                    return (0, s.jsxs)(
                        ee,
                        {
                            style: { ...o },
                            isSelected: !d,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(G.K, { size: "md", color: "currentColor", className: Y.vo }),
                                (0, s.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: null != i ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.PoWNfe),
                                }),
                            ],
                        },
                        m,
                    );
                if (h === $)
                    return (0, s.jsxs)(
                        ee,
                        {
                            style: o,
                            onSelect: a,
                            children: [
                                (0, s.jsx)(D.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: Y.sV,
                                }),
                                (0, s.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: b.intl.string(b.t.pWG4ze),
                                }),
                            ],
                        },
                        m,
                    );
                if ((0, L.s)(h)) {
                    let e = n?.skuId === h.skuId;
                    return (0, s.jsx)(
                        et,
                        {
                            style: { ...o },
                            profileFrame: h,
                            section: p,
                            innerRef: e ? r : void 0,
                            isSelected: e,
                            canUsePremiumCollectibles: c,
                            onSelect: () => l({ skuId: h.skuId, type: T.R.PROFILE_FRAME }),
                        },
                        m,
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
            getItemHeight: Q,
            removeEdgeItemGutters: !0,
        }),
    });
};
var en = i(652215),
    es = i(202541),
    er = i(409451);
function el(e) {
    let {
            user: t,
            product: i,
            purchase: n,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: d,
            canUsePremiumCollectibles: c,
            selectedProfileFrame: m,
        } = e,
        h = null != n ? (0, j.gA)(n) : (0, j.G0)(i);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: er.Hx,
            children: [
                (null != n && (c || !h)) || null === m
                    ? (0, s.jsx)(u.$, { variant: "primary", text: b.intl.string(b.t.Jh8fJz), onClick: r, disabled: d })
                    : null == n && (c || !h)
                      ? (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: b.intl.string(b.t.fYfGgK),
                            onClick: () => o(m?.skuId),
                        })
                      : (0, s.jsx)(g.A, {
                            subscriptionTier: es.pe.TIER_2,
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
                    ? (0, s.jsx)(p.A, { itemType: n?.type ?? i?.type, onClose: l })
                    : (0, s.jsx)(u.$, { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function ea(e) {
    let {
            user: t,
            guild: i,
            categories: n,
            purchases: l,
            currentSavedFrame: u,
            analyticsLocations: d,
            modalHeadingId: m,
            initialSelectedProfileFrame: p,
            onClose: g,
        } = e,
        { pendingProfileFrame: I } = (0, h.Tu)(i?.id),
        x = r.useMemo(() => (0, j.MG)(l, n), [n, l]),
        [P, k] = r.useState(() => (null != p ? p : void 0 !== I ? I : (u ?? null))),
        v = r.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === P?.skuId;
                }) ?? null,
            [P, x],
        ),
        { product: E, purchase: S } = (0, y.A)(v?.skuId),
        N = r.useRef(null),
        R = A.Ay.canUseCollectibles(t),
        _ = void 0 === I ? P?.skuId === u?.skuId : P?.skuId === I?.skuId,
        M = r.useCallback(
            (e) => {
                k(e);
            },
            [k],
        ),
        O = r.useCallback(
            (e) => {
                g(),
                    (0, C.Cz)({
                        analyticsLocations: d,
                        analyticsSource: c.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, g],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: er.Hc,
                children: [
                    (0, s.jsx)(o.D, { id: m, variant: "heading-lg/semibold", children: b.intl.string(b.t["oTSa/q"]) }),
                    (0, s.jsx)(a.s_, { "data-migration-pending": !0, className: er.iT, onClick: g }),
                ],
            }),
            (0, s.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: er.jE,
                children: [
                    (0, s.jsx)(ei, {
                        user: t,
                        guild: i,
                        pendingProfileFrame: P,
                        selectedProfileFrameRef: N,
                        onSelect: M,
                        onOpenShop: O,
                    }),
                    (0, s.jsx)(F, { user: t, profileFrame: v, guild: i }),
                ],
            }),
            (0, s.jsx)(el, {
                user: t,
                onApply: function () {
                    (0, f.p)({ guildId: i?.id, profileFrame: P ?? null }), g();
                },
                onClose: g,
                onOpenShop: O,
                product: E,
                purchase: S,
                canUsePremiumCollectibles: R,
                selectedProfileFrame: P,
                disableApplyButton: _,
            }),
        ],
    });
}
function eu(e) {
    let {
            transitionState: t,
            analyticsLocations: i,
            guild: n,
            onClose: u,
            initialSelectedProfileFrame: o,
            returnRef: p,
        } = e,
        { categories: g, purchases: f, isFetchingCategories: A, isFetchingPurchases: C } = (0, P.Ay)(),
        j = A || (C && 0 === f.size),
        y = r.useId(),
        k = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: v } = (0, m.Ay)(i, c.A.EDIT_PROFILE_FRAME_MODAL),
        E = (0, h.Xf)({ user: k, guildId: n?.id });
    return (
        r.useEffect(() => {
            x.default.track(en.HAw.OPEN_MODAL, { type: en.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: v });
        }, [v]),
        (0, s.jsx)(m.f5, {
            value: v,
            children: (0, s.jsx)(a.EO, {
                transitionState: t,
                className: er.yl,
                size: j ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                returnRef: p,
                "aria-label": j ? b.intl.string(b.t["oTSa/q"]) : void 0,
                "aria-labelledby": j ? void 0 : y,
                "data-migration-pending": !0,
                children: j
                    ? (0, s.jsx)(d.y, { className: er.u1, type: d.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(ea, {
                          user: k,
                          guild: n,
                          categories: g,
                          purchases: f,
                          currentSavedFrame: E,
                          onClose: u,
                          analyticsLocations: v,
                          modalHeadingId: y,
                          initialSelectedProfileFrame: o,
                      }),
            }),
        })
    );
}
