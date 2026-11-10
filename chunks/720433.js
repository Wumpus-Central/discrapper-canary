n.d(t, { default: () => eo });
var i,
    s = n(477900),
    r = n(582128),
    l = n(855986),
    a = n(935462),
    u = n(821609),
    o = n(534514),
    c = n(289873),
    d = n(793574),
    p = n(688810),
    m = n(571827),
    g = n(919395),
    h = n(84540),
    f = n(287809),
    I = n(129230),
    x = n(448645),
    C = n(969935),
    A = n(993408),
    j = n(519707),
    v = n(821701),
    y = n(841702),
    E = n(907391),
    P = n(451909),
    k = n(641318),
    S = n(101058),
    N = n(836602),
    _ = n(814390),
    b = n(448429),
    R = n(792996),
    U = n(529676);
let w = function (e) {
    let { user: t, profileEffect: n, guild: i } = e,
        {
            pendingGlobalName: r,
            pendingNickname: a,
            pendingPronouns: u,
            pendingBio: o,
            pendingBanner: c,
            pendingAvatar: d,
            pendingAvatarDecoration: p,
            pendingProfileFrame: m,
            pendingDisplayNameStyles: g,
            pendingThemeColors: h,
            pendingAccentColor: f,
            pendingPrimaryGuildId: I,
        } = (0, l.cf)([N.A], () => N.A.getPendingChanges(i?.id)),
        C = x.Ay.canUsePremiumProfileCustomization(t),
        A = (0, _.A)() && null != o ? P.Ay.parse(void 0, o).content : o;
    return (0, s.jsxs)("div", {
        className: U.i1,
        children: [
            (0, s.jsx)(k.A, {
                user: t,
                guild: i,
                pendingProfileEffect: n ?? null,
                pendingGlobalName: r,
                pendingNickname: a,
                pendingPronouns: u,
                pendingBio: A,
                pendingBanner: c,
                pendingAvatar: (0, S.V7)({ userId: t.id, image: d }),
                pendingAvatarDecoration: p,
                pendingThemeColors: h,
                pendingAccentColor: f,
                pendingProfileFrame: m,
                pendingDisplayNameStyles: g,
                pendingPrimaryGuildId: I,
                canUsePremiumCustomization: C,
                disabledInputs: !0,
                hideCustomStatus: !0,
            }),
            !1,
            (0, s.jsx)(b.A, {
                user: t,
                previewSkuId: n?.skuId,
                nitroChurnCTA: R.intl.string(R.t["1UPza/"]),
                nitroJoinCTA: R.intl.string(R.t.melduy),
            }),
        ],
    });
};
var M = n(503698),
    T = n.n(M),
    D = n(939249),
    G = n(428678),
    H = n(834730),
    z = n(34188),
    F = n(297778),
    O = n(203632),
    L = n(181774),
    J = n(483968),
    B = n(942426);
n(321073);
var K = n(164636),
    W = n(590180),
    V = n(4227),
    $ = n(407528),
    X = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let Q = { skuId: "None" },
    Y = { skuId: "Shop" },
    Z = function () {
        let e = (0, K.bG)([V.A], () => V.A.purchases),
            [t, n] = (0, K.yK)([W.A], () => [W.A.categories, W.A.products]),
            i = (0, r.useMemo)(() => {
                let i = (0, A.wo)(e, t).reduce(
                    (t, i) => {
                        let s = e.get(i.skuId);
                        return (
                            (null != s ? (0, A.gA)(s) : (0, A.G0)(n.get(i.skuId)))
                                ? t.premium_purchase.push(i)
                                : null != s
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
                        items: [Q, Y, ...i.purchase],
                        height: 12,
                        header: R.intl.string(R.t["9x1v/p"]),
                    },
                    {
                        section: "premium_purchase",
                        items: i.premium_purchase,
                        height: 12,
                        header: R.intl.string(R.t.TiLCgw),
                    },
                    { section: "preview", items: i.preview, height: 12, header: R.intl.string(R.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, n, e]);
        return (0, $.A)(i, "preview");
    };
var q = n(986782),
    ee = n(423393);
function et() {
    return 80;
}
function en(e) {
    let { children: t, className: n, isSelected: i, ...r } = e;
    return (0, s.jsx)(D.D, {
        "aria-pressed": i,
        className: T()(q.BP, n, { [q.wH]: i }),
        ...r,
        onClick: r.onSelect,
        children: t,
    });
}
function ei(e) {
    let { skuId: t, innerRef: n, section: i, isSelected: l, canUsePremiumCollectibles: a, ...u } = e,
        o = (0, B.A)(t),
        c = r.useRef(null),
        { accessibilityLabel: d, thumbnailPreviewSrc: p, title: m } = o ?? {},
        g = r.useMemo(() => (0, L.Rc)(p), [p]);
    return (0, s.jsxs)(en, {
        innerRef: n ?? c,
        isSelected: l,
        ...u,
        children: [
            (0, s.jsx)("img", { src: ee.A, alt: d, className: q.rQ }),
            (0, s.jsx)("img", { className: q.Wv, src: g, alt: m }),
            (0, s.jsx)(J.A, {
                skuId: t,
                canUsePremiumCollectibles: a,
                isPurchaseSection: i === X.PURCHASE,
                isPremiumSection: i === X.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let es = function (e) {
    let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: r, onSelect: l, onOpenShop: a } = e,
        u = Z(),
        c = null != i,
        d = x.Ay.canUseCollectibles(t);
    return (0, s.jsx)("section", {
        className: q.uW,
        children: (0, s.jsx)(F.f, {
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
                if (h === Q)
                    return (0, s.jsxs)(
                        en,
                        {
                            style: { ...o },
                            isSelected: !c,
                            onSelect: () => l(null),
                            children: [
                                (0, s.jsx)(G.DenyIcon, { size: "md", color: "currentColor", className: q.vo }),
                                (0, s.jsx)(H.E, {
                                    variant: "body-xs/normal",
                                    color: "text-strong",
                                    children: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.PoWNfe),
                                }),
                            ],
                        },
                        p,
                    );
                if (h === Y)
                    return (0, s.jsxs)(
                        en,
                        {
                            style: o,
                            onSelect: () => a(),
                            children: [
                                (0, s.jsx)(z.ShopIcon, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: q.sV,
                                }),
                                (0, s.jsx)(H.E, {
                                    variant: "body-xs/normal",
                                    color: "text-strong",
                                    children: R.intl.string(R.t.pWG4ze),
                                }),
                            ],
                        },
                        p,
                    );
                if ((0, O.C3)(h)) {
                    let e = i?.skuId === h.skuId;
                    return (0, s.jsx)(
                        ei,
                        {
                            style: { ...o },
                            section: m,
                            skuId: h.skuId,
                            innerRef: e ? r : void 0,
                            isSelected: e,
                            onSelect: () => l(h),
                            canUsePremiumCollectibles: d,
                        },
                        p,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: n } = u[e];
                return (0, s.jsx)("div", {
                    style: { ...t, height: "16px", position: "absolute" },
                    children: (0, s.jsx)(o.D, { variant: "heading-sm/medium", children: n }),
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: et,
            removeEdgeItemGutters: !0,
        }),
    });
};
var er = n(652215),
    el = n(529005);
function ea(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: r,
            onClose: l,
            onOpenShop: o,
            disableApplyButton: c,
            canUsePremiumCollectibles: d,
            selectedProfileEffect: p,
        } = e,
        g = null != i ? (0, A.gA)(i) : (0, A.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: el.Hx,
            children: [
                (null != i && (d || !g)) || null === p
                    ? (0, s.jsx)(u.$, { variant: "primary", text: R.intl.string(R.t.Jh8fJz), onClick: r, disabled: c })
                    : null == i && (d || !g)
                      ? (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: R.intl.string(R.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(E.A, {
                            showGradient: !d,
                            text: x.Ay.isPremium(t)
                                ? R.intl.string(R.t.KXLX7l)
                                : d
                                  ? R.intl.string(R.t.mr4K7D)
                                  : R.intl.string(R.t.pj0XBN),
                        }),
                !d && g
                    ? (0, s.jsx)(m.A, { itemType: i?.type ?? n?.type, onClose: l })
                    : (0, s.jsx)(u.$, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: l }),
            ],
        }),
    });
}
function eu(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            initialSelectedProfileEffect: u,
            currentSavedEffect: c,
            retainedSelection: p,
            onSelectionChange: m,
            analyticsLocations: f,
            modalHeadingId: I,
            onClose: y,
        } = e,
        { pendingProfileEffect: E } = (0, g.nZ)(n?.id),
        [P, k] = r.useMemo(() => {
            let e = (0, A.sz)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        S = (0, j.J)("profile_effect_modal_selection"),
        [N, _] = r.useState(() =>
            S && void 0 !== p ? p : null != u ? u : void 0 !== E ? E : null == c ? null : (c ?? null),
        ),
        b = r.useMemo(
            () =>
                P.find((e) => {
                    let { skuId: t } = e;
                    return t === N?.skuId;
                }) ??
                k.find((e) => {
                    let { skuId: t } = e;
                    return t === N?.skuId;
                }) ??
                null,
            [N, P, k],
        ),
        { product: U, purchase: M } = (0, v.A)(b?.skuId),
        T = r.useRef(null),
        D = x.Ay.canUseCollectibles(t),
        G = void 0 === E ? N?.skuId === c?.skuId : N?.skuId === E?.skuId,
        H = r.useCallback(
            (e) => {
                (_(e), S && m(e));
            },
            [_, S, m],
        ),
        z = r.useCallback(
            (e) => {
                (y(),
                    (0, C.Cz)({
                        analyticsLocations: f,
                        analyticsSource: d.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [f, y],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: el.Hc,
                children: [
                    (0, s.jsx)(o.D, { id: I, variant: "heading-lg/semibold", children: R.intl.string(R.t["/6nv6N"]) }),
                    (0, s.jsx)(a.s_, { "data-migration-pending": !0, className: el.iT, onClick: y }),
                ],
            }),
            (0, s.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: el.jE,
                children: [
                    (0, s.jsx)(es, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: N,
                        selectedProfileEffectRef: T,
                        onSelect: H,
                        onOpenShop: z,
                    }),
                    (0, s.jsx)(w, { user: t, profileEffect: b, guild: n }),
                ],
            }),
            (0, s.jsx)(ea, {
                user: t,
                onApply: function () {
                    ((0, h.p)({ guildId: n?.id, profileEffect: N ?? null }), y());
                },
                onClose: y,
                onOpenShop: z,
                product: U,
                purchase: M,
                canUsePremiumCollectibles: D,
                selectedProfileEffect: N,
                disableApplyButton: G,
            }),
        ],
    });
}
function eo(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: i, guild: u, onClose: o, returnRef: m } = e,
        [h, x] = r.useState(void 0),
        { categories: C, purchases: A, isFetchingCategories: j, isFetchingPurchases: v } = (0, y.Ay)(),
        E = j || (v && 0 === A.size),
        P = r.useId(),
        k = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: S } = (0, p.Ay)(n, d.A.EDIT_PROFILE_EFFECT_MODAL),
        N = (0, g.N2)({ user: k, guildId: u?.id });
    return (
        r.useEffect(() => {
            I.default.track(er.HAw.OPEN_MODAL, { type: er.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: S });
        }, [S]),
        (0, s.jsx)(p.f5, {
            value: S,
            children: (0, s.jsx)(a.EO, {
                transitionState: t,
                className: el.yl,
                size: E ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                returnRef: m,
                "aria-label": E ? R.intl.string(R.t["/6nv6N"]) : void 0,
                "aria-labelledby": E ? void 0 : P,
                "data-migration-pending": !0,
                children: E
                    ? (0, s.jsx)(c.y, { className: el.u1, type: c.y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(eu, {
                          user: k,
                          guild: u,
                          categories: C,
                          purchases: A,
                          initialSelectedProfileEffect: i,
                          currentSavedEffect: N,
                          retainedSelection: h,
                          onSelectionChange: x,
                          onClose: o,
                          analyticsLocations: S,
                          modalHeadingId: P,
                      }),
            }),
        })
    );
}
