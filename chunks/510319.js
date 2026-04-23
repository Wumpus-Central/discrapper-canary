n.d(t, { default: () => k });
var r = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(821609),
    a = n(935462),
    o = n(534514),
    c = n(289873),
    d = n(793574),
    u = n(688810),
    m = n(571827),
    p = n(725807),
    f = n(919395),
    g = n(84540),
    h = n(287809),
    x = n(954571),
    A = n(927578),
    _ = n(979286),
    E = n(993408),
    C = n(821701),
    j = n(841702),
    y = n(618644),
    I = n(788426),
    v = n(652215),
    P = n(788868),
    N = n(985018),
    b = n(289138);
function T(e) {
    let {
            user: t,
            product: n,
            purchase: s,
            onApply: i,
            onClose: o,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileEffect: f,
        } = e,
        g = null != s ? (0, E.gA)(s) : (0, E.G0)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: b.Hx,
            children: [
                (null != s && (u || !g)) || null === f
                    ? (0, r.jsx)(l.$, { variant: "primary", text: N.intl.string(N.t.Jh8fJz), onClick: i, disabled: d })
                    : null == s && (u || !g)
                      ? (0, r.jsx)(l.$, {
                            variant: "primary",
                            text: N.intl.string(N.t.fYfGgK),
                            onClick: () => c(f?.skuId),
                        })
                      : (0, r.jsx)(p.A, {
                            subscriptionTier: P.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: A.Ay.isPremium(t)
                                    ? N.intl.string(N.t.KXLX7l)
                                    : u
                                      ? N.intl.string(N.t.mr4K7D)
                                      : N.intl.string(N.t.pj0XBN),
                            },
                        }),
                !u && g
                    ? (0, r.jsx)(m.A, { itemType: s?.type ?? n?.type, onClose: o })
                    : (0, r.jsx)(l.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: o }),
            ],
        }),
    });
}
function S(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            initialSelectedProfileEffect: c,
            currentSavedEffect: u,
            analyticsLocations: m,
            onClose: p,
        } = e,
        { pendingProfileEffect: h } = (0, f.nZ)(n?.id),
        [x, j] = s.useMemo(() => {
            let e = (0, E.sz)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        [v, P] = s.useState(() => (null != c ? c : void 0 !== h ? h : null == u ? null : (u ?? null))),
        S = s.useMemo(
            () =>
                x.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ??
                j.find((e) => {
                    let { skuId: t } = e;
                    return t === v?.skuId;
                }) ??
                null,
            [v, x, j],
        ),
        { product: k, purchase: L } = (0, C.A)(S?.skuId),
        R = s.useRef(null),
        O = A.Ay.canUseCollectibles(t),
        U = void 0 === h ? v?.skuId === u?.skuId : v?.skuId === h?.skuId,
        w = s.useCallback(
            (e) => {
                P(e);
            },
            [P],
        ),
        M = s.useCallback(
            (e) => {
                p(),
                    (0, _.Cz)({
                        analyticsLocations: m,
                        analyticsSource: d.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: b.Hc,
                children: [
                    (0, r.jsx)(o.D, { variant: "heading-lg/semibold", children: N.intl.string(N.t["/6nv6N"]) }),
                    (0, r.jsx)(a.s_, { "data-migration-pending": !0, className: b.iT, onClick: p }),
                ],
            }),
            (0, r.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: b.jE,
                children: [
                    (0, r.jsx)(I.A, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: v,
                        selectedProfileEffectRef: R,
                        onSelect: w,
                        onOpenShop: M,
                    }),
                    (0, r.jsx)(y.A, { user: t, pendingProfileEffectRecord: S, product: k, purchase: L, guild: n }),
                ],
            }),
            (0, r.jsx)(T, {
                user: t,
                onApply: () => {
                    (0, g.p)({ guildId: n?.id, profileEffect: v ?? null }), p();
                },
                onClose: p,
                onOpenShop: M,
                product: k,
                purchase: L,
                canUsePremiumCollectibles: O,
                selectedProfileEffect: v,
                disableApplyButton: U,
            }),
        ],
    });
}
function k(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: l, guild: o, onClose: m } = e,
        { isFetching: p, categories: g, purchases: A } = (0, j.Ay)(),
        _ = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: E } = (0, u.Ay)(n, d.A.EDIT_PROFILE_EFFECT_MODAL),
        C = (0, f.N2)({ user: _, guildId: o?.id });
    return (
        s.useEffect(() => {
            x.default.track(v.HAw.OPEN_MODAL, { type: v.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, r.jsx)(u.f5, {
            value: E,
            children: (0, r.jsx)(a.EO, {
                transitionState: t,
                className: b.yl,
                size: p ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, r.jsx)(c.y, { className: b.u1, type: c.y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)(S, {
                          user: _,
                          guild: o,
                          categories: g,
                          purchases: A,
                          initialSelectedProfileEffect: l,
                          currentSavedEffect: C,
                          onClose: m,
                          analyticsLocations: E,
                      }),
            }),
        })
    );
}
