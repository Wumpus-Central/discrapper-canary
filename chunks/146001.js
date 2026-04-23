n.d(t, { default: () => j });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(821609),
    s = n(935462),
    o = n(534514),
    c = n(289873),
    d = n(793574),
    u = n(688810),
    p = n(571827),
    m = n(725807),
    g = n(919395),
    h = n(84540),
    A = n(287809),
    f = n(954571),
    _ = n(927578),
    v = n(979286),
    E = n(993408),
    x = n(821701),
    I = n(841702),
    y = n(169632),
    C = n(652215),
    P = n(788868),
    N = n(985018),
    k = n(12960);
function b(e) {
    let {
            user: t,
            product: n,
            purchase: l,
            onApply: i,
            onClose: o,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileFrame: g,
        } = e,
        h = null != l ? (0, E.gA)(l) : (0, E.G0)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(s.jl, {
            "data-migration-pending": !0,
            className: k.Hx,
            children: [
                (null != l && (u || !h)) || null === g
                    ? (0, r.jsx)(a.$, { variant: "primary", text: N.intl.string(N.t.Jh8fJz), onClick: i, disabled: d })
                    : null == l && (u || !h)
                      ? (0, r.jsx)(a.$, {
                            variant: "primary",
                            text: N.intl.string(N.t.fYfGgK),
                            onClick: () => c(g?.skuId),
                        })
                      : (0, r.jsx)(m.A, {
                            subscriptionTier: P.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: _.Ay.isPremium(t)
                                    ? N.intl.string(N.t.KXLX7l)
                                    : u
                                      ? N.intl.string(N.t.mr4K7D)
                                      : N.intl.string(N.t.pj0XBN),
                            },
                        }),
                !u && h
                    ? (0, r.jsx)(p.A, { itemType: l?.type ?? n?.type, onClose: o })
                    : (0, r.jsx)(a.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: o }),
            ],
        }),
    });
}
function R(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: a,
            currentSavedFrame: c,
            analyticsLocations: u,
            initialSelectedProfileFrame: p,
            onClose: m,
        } = e,
        { pendingProfileFrame: A } = (0, g.Tu)(n?.id),
        f = l.useMemo(() => (0, E.MG)(a, i), [i, a]),
        [I, C] = l.useState(() => (null != p ? p : void 0 !== A ? A : (c ?? null))),
        P = l.useMemo(
            () =>
                f.find((e) => {
                    let { skuId: t } = e;
                    return t === I?.skuId;
                }) ?? null,
            [I, f],
        ),
        { product: R, purchase: j } = (0, x.A)(P?.skuId),
        F = l.useRef(null),
        S = _.Ay.canUseCollectibles(t),
        T = void 0 === A ? I?.skuId === c?.skuId : I?.skuId === A?.skuId,
        L = l.useCallback(
            (e) => {
                C(e);
            },
            [C],
        ),
        M = l.useCallback(
            (e) => {
                m(),
                    (0, v.Cz)({
                        analyticsLocations: u,
                        analyticsSource: d.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, m],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: k.Hc,
                children: [
                    (0, r.jsx)(o.D, { variant: "heading-lg/semibold", children: N.intl.string(N.t["oTSa/q"]) }),
                    (0, r.jsx)(s.s_, { "data-migration-pending": !0, className: k.iT, onClick: m }),
                ],
            }),
            (0, r.jsx)(s.$m, {
                "data-migration-pending": !0,
                className: k.jE,
                children: (0, r.jsx)(y.A, {
                    user: t,
                    guild: n,
                    pendingProfileFrame: I,
                    selectedProfileFrameRef: F,
                    onSelect: L,
                    onOpenShop: M,
                }),
            }),
            (0, r.jsx)(b, {
                user: t,
                onApply: () => {
                    (0, h.p)({ guildId: n?.id, profileFrame: I ?? null }), m();
                },
                onClose: m,
                onOpenShop: M,
                product: R,
                purchase: j,
                canUsePremiumCollectibles: S,
                selectedProfileFrame: I,
                disableApplyButton: T,
            }),
        ],
    });
}
function j(e) {
    let { transitionState: t, analyticsLocations: n, guild: a, onClose: o, initialSelectedProfileFrame: p } = e,
        { isFetching: m, categories: h, purchases: _ } = (0, I.Ay)(),
        v = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: E } = (0, u.Ay)(n, d.A.EDIT_PROFILE_FRAME_MODAL),
        x = (0, g.Xf)({ user: v, guildId: a?.id });
    return (
        l.useEffect(() => {
            f.default.track(C.HAw.OPEN_MODAL, { type: C.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, r.jsx)(u.f5, {
            value: E,
            children: (0, r.jsx)(s.EO, {
                transitionState: t,
                className: k.yl,
                size: m ? s.rI.DYNAMIC : s.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, r.jsx)(c.y, { className: k.u1, type: c.y.Type.SPINNING_CIRCLE })
                    : (0, r.jsx)(R, {
                          user: v,
                          guild: a,
                          categories: h,
                          purchases: _,
                          currentSavedFrame: x,
                          onClose: o,
                          analyticsLocations: E,
                          initialSelectedProfileFrame: p,
                      }),
            }),
        })
    );
}
