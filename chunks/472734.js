a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => N });
var n = a(627968),
    e = a(64700),
    l = a(224640),
    c = a(430993),
    s = a(141628),
    r = a(811893),
    o = a(318254),
    d = a(696208),
    _ = a(289873),
    u = a(834730),
    p = a(262427),
    C = a(964486),
    A = a(793574),
    k = a(688810),
    f = a(46225),
    S = a(928550),
    L = a(174459),
    E = a(738533),
    m = a(690493),
    h = a(987723),
    T = a(383089),
    x = a(41032),
    I = a(188275),
    O = a(652215),
    R = a(375708),
    y = a(520951);
function N(t) {
    let { transitionState: i, onClose: a, sku: N, application: j, analyticsLocations: g, orbsReward: D } = t,
        [b, M] = (0, S.L)(j?.id),
        { fetched: H, hasAlreadyLinked: v, canStartAuthorization: w, startAuthorization: P } = (0, f.RD)(j),
        z = (0, m.J)(j),
        { analyticsLocations: F } = (0, k.Ay)(g ?? [], A.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        K = !H || M,
        U = e.useRef({
            analyticsLocations: F,
            skuId: N.id,
            applicationId: j.id,
            isLaunchable: b,
            isApplicationConnected: z,
            canStartAuthorization: w,
        });
    e.useEffect(() => {
        (U.current.isLaunchable = b), (U.current.isApplicationConnected = z), (U.current.canStartAuthorization = w);
    }, [b, z, w]),
        (0, C.Ay)(() => {
            L.default.track(O.HAw.OPEN_MODAL, { location_stack: F, type: I.e2, sku_id: N.id, application_id: j.id });
        }),
        e.useEffect(() => {
            if (K) return;
            let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = U.current;
            L.default.track(O.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
                is_account_linked: v,
                can_start_authorization: n,
            });
        }, [K, v]);
    let Y = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = U.current;
            L.default.track(O.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                P({ analyticsLocations: t });
        }, [P]),
        W = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = U.current;
            L.default.track(O.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: j.id,
                is_gift: !1,
            }),
                E.A.launchGame(j.id);
        }, [j.id]),
        G = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = U.current;
            L.default.track(O.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l,
            }),
                a();
        }, [a]),
        J = e.useMemo(() => (0, h.dI)(j, { location: "SocialLayerStorefrontItemClaimedSuccessfullyModal" }), [j]);
    if (K)
        return (0, n.jsx)(l.d, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(c.c, { children: (0, n.jsx)(_.y, {}) }),
        });
    if (v) {
        let t =
            b && !z
                ? { variant: "primary", text: R.intl.string(R.t["s+J8Dl"]), onClick: W, icon: r.t }
                : { variant: "primary", text: R.intl.string(R.t.cpT0Cq), onClick: G };
        return (0, n.jsxs)(l.d, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(x.z, { sku: N, title: R.intl.string(R.t["5glWta"]) }),
                (0, n.jsxs)(c.c, {
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "text-md/normal",
                            className: y.j,
                            children: R.intl.formatToPlainString(R.t.W2znvX, {
                                skuName: N.name,
                                applicationName: j.name,
                            }),
                        }),
                        null != D &&
                            D > 0 &&
                            (0, n.jsx)("div", {
                                className: y.I,
                                children: (0, n.jsx)(p.J, {
                                    Icon: o.C,
                                    text: R.intl.format(R.t["0StwHe"], { orbCount: D }),
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(d.H, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t = { variant: "primary", text: R.intl.string(R.t["VDAhr+"]), onClick: Y, icon: s.A, disabled: !w };
        return (0, n.jsx)(T.m, {
            sku: N,
            application: j,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: v,
            canStartAuthorization: w,
            primaryCTAButtonProps: t,
            bodyText: J,
            title: R.intl.string(R.t.GPAtvf),
        });
    }
}
