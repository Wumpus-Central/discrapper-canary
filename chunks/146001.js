s.d(t, { default: () => N });
var n = s(627968),
    l = s(64700),
    r = s(311907),
    i = s(821609),
    a = s(935462),
    o = s(534514),
    c = s(289873),
    d = s(793574),
    u = s(688810),
    m = s(571827),
    p = s(725807),
    h = s(919395),
    A = s(84540),
    g = s(287809),
    _ = s(954571),
    x = s(927578),
    E = s(979286),
    I = s(993408),
    f = s(821701),
    C = s(841702),
    y = s(169632),
    j = s(652215),
    P = s(788868),
    k = s(985018),
    v = s(12960);
function R(e) {
    let {
            user: t,
            product: s,
            purchase: l,
            onApply: r,
            onClose: o,
            onOpenShop: c,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileFrame: h,
        } = e,
        A = null != l ? (0, I.gA)(l) : (0, I.G0)(s);
    return (0, n.jsx)(n.Fragment, {
        children: (0, n.jsxs)(a.jl, {
            "data-migration-pending": !0,
            className: v.Hx,
            children: [
                (null != l && (u || !A)) || null === h
                    ? (0, n.jsx)(i.$, { variant: "primary", text: k.intl.string(k.t.Jh8fJz), onClick: r, disabled: d })
                    : null == l && (u || !A)
                      ? (0, n.jsx)(i.$, {
                            variant: "primary",
                            text: k.intl.string(k.t.fYfGgK),
                            onClick: () => c(h?.skuId),
                        })
                      : (0, n.jsx)(p.A, {
                            subscriptionTier: P.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: x.Ay.isPremium(t)
                                    ? k.intl.string(k.t.KXLX7l)
                                    : u
                                      ? k.intl.string(k.t.mr4K7D)
                                      : k.intl.string(k.t.pj0XBN),
                            },
                        }),
                !u && A
                    ? (0, n.jsx)(m.A, { itemType: l?.type ?? s?.type, onClose: o })
                    : (0, n.jsx)(i.$, { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: o }),
            ],
        }),
    });
}
function L(e) {
    let {
            user: t,
            guild: s,
            categories: r,
            purchases: i,
            currentSavedFrame: c,
            analyticsLocations: u,
            initialSelectedProfileFrame: m,
            onClose: p,
        } = e,
        { pendingProfileFrame: g } = (0, h.Tu)(s?.id),
        _ = l.useMemo(() => (0, I.MG)(i, r), [r, i]),
        [C, j] = l.useState(() => (null != m ? m : void 0 !== g ? g : (c ?? null))),
        P = l.useMemo(
            () =>
                _.find((e) => {
                    let { skuId: t } = e;
                    return t === C?.skuId;
                }) ?? null,
            [C, _],
        ),
        { product: L, purchase: N } = (0, f.A)(P?.skuId),
        M = l.useRef(null),
        T = x.Ay.canUseCollectibles(t),
        O = void 0 === g ? C?.skuId === c?.skuId : C?.skuId === g?.skuId,
        S = l.useCallback(
            (e) => {
                j(e);
            },
            [j],
        ),
        b = l.useCallback(
            (e) => {
                p(),
                    (0, E.Cz)({
                        analyticsLocations: u,
                        analyticsSource: d.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, p],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: v.Hc,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-lg/semibold", children: k.intl.string(k.t["oTSa/q"]) }),
                    (0, n.jsx)(a.s_, { "data-migration-pending": !0, className: v.iT, onClick: p }),
                ],
            }),
            (0, n.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: v.jE,
                children: (0, n.jsx)(y.A, {
                    user: t,
                    guild: s,
                    pendingProfileFrame: C,
                    selectedProfileFrameRef: M,
                    onSelect: S,
                    onOpenShop: b,
                }),
            }),
            (0, n.jsx)(R, {
                user: t,
                onApply: () => {
                    (0, A.p)({ guildId: s?.id, profileFrame: C ?? null }), p();
                },
                onClose: p,
                onOpenShop: b,
                product: L,
                purchase: N,
                canUsePremiumCollectibles: T,
                selectedProfileFrame: C,
                disableApplyButton: O,
            }),
        ],
    });
}
function N(e) {
    let { transitionState: t, analyticsLocations: s, guild: i, onClose: o, initialSelectedProfileFrame: m } = e,
        { isFetching: p, categories: A, purchases: x } = (0, C.Ay)(),
        E = (0, r.bG)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: I } = (0, u.Ay)(s, d.A.EDIT_PROFILE_FRAME_MODAL),
        f = (0, h.Xf)({ user: E, guildId: i?.id });
    return (
        l.useEffect(() => {
            _.default.track(j.HAw.OPEN_MODAL, { type: j.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: I });
        }, [I]),
        (0, n.jsx)(u.f5, {
            value: I,
            children: (0, n.jsx)(a.EO, {
                transitionState: t,
                className: v.yl,
                size: p ? a.rI.DYNAMIC : a.rI.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, n.jsx)(c.y, { className: v.u1, type: c.y.Type.SPINNING_CIRCLE })
                    : (0, n.jsx)(L, {
                          user: E,
                          guild: i,
                          categories: A,
                          purchases: x,
                          currentSavedFrame: f,
                          onClose: o,
                          analyticsLocations: I,
                          initialSelectedProfileFrame: m,
                      }),
            }),
        })
    );
}
