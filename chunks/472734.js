var n = a(477900),
    e = a(582128),
    r = a(224640),
    c = a(430993),
    l = a(289873),
    s = a(141628),
    o = a(811893),
    d = a(834730),
    _ = a(696208),
    u = a(964486),
    p = a(793574),
    A = a(688810),
    k = a(724302),
    C = a(928550),
    f = a(129230),
    h = a(292702),
    E = a(690493),
    L = a(26594),
    S = a(118982),
    m = a(832275),
    T = a(383089),
    x = a(41032),
    O = a(910200),
    I = a(188275),
    R = a(652215),
    y = a(792996),
    N = a(684666);
a.d(
    i,
    {},
    {
        SocialLayerStorefrontItemClaimedSuccessfullyModal: function (t) {
            let {
                    transitionState: i,
                    onClose: a,
                    onSetIgnoreCloseRequest: g,
                    sku: j,
                    application: D,
                    analyticsLocations: w,
                    entitlement: b,
                } = t,
                [v, H] = (0, C.L_)(D?.id),
                { fetched: M, hasAlreadyLinked: G, canStartAuthorization: z, startAuthorization: P } = (0, k.RD)(D),
                { startAuthorization: F, shouldShowGoToGameHint: K } = (0, m.W)(P, { onSetIgnoreCloseRequest: g }),
                U = (0, E.J)(D),
                { analyticsLocations: W } = (0, A.Ay)(w ?? [], p.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
                Y = !M || H,
                J = e.useRef({
                    analyticsLocations: W,
                    skuId: j.id,
                    applicationId: D.id,
                    isLaunchable: v,
                    isApplicationConnected: U,
                    canStartAuthorization: z,
                });
            (e.useEffect(() => {
                ((J.current.isLaunchable = v),
                    (J.current.isApplicationConnected = U),
                    (J.current.canStartAuthorization = z));
            }, [v, U, z]),
                (0, u.Ay)(() => {
                    f.default.track(R.HAw.OPEN_MODAL, {
                        location_stack: W,
                        type: I.e2,
                        sku_id: j.id,
                        application_id: D.id,
                    });
                }),
                e.useEffect(() => {
                    if (Y) return;
                    let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = J.current;
                    f.default.track(R.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: a,
                        is_gift: !1,
                        is_account_linked: G,
                        can_start_authorization: n,
                    });
                }, [Y, G]));
            let B = e.useCallback(() => {
                    let { analyticsLocations: t, skuId: i, applicationId: a } = J.current;
                    (f.default.track(R.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: a,
                        is_gift: !1,
                    }),
                        F({ analyticsLocations: t }));
                }, [F]),
                V = e.useCallback(() => {
                    let { analyticsLocations: t, skuId: i } = J.current;
                    (f.default.track(R.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: D.id,
                        is_gift: !1,
                    }),
                        h.A.launchGame(D.id));
                }, [D.id]),
                q = e.useCallback(() => {
                    let {
                        analyticsLocations: t,
                        skuId: i,
                        applicationId: n,
                        isLaunchable: e,
                        isApplicationConnected: r,
                    } = J.current;
                    (f.default.track(R.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: n,
                        is_gift: !1,
                        is_launchable: e ?? !1,
                        is_application_connected: r,
                    }),
                        a());
                }, [a]),
                X = (0, L.G)(b, { isGift: !1 }),
                Q = e.useMemo(() => (0, S.dI)(D), [D]);
            if (Y)
                return (0, n.jsx)(r.d, {
                    transitionState: i,
                    onClose: a,
                    children: (0, n.jsx)(c.c, { children: (0, n.jsx)(l.y, {}) }),
                });
            let Z = v && !U;
            if (G) {
                let t = Z
                    ? { variant: "primary", text: y.intl.string(y.t["s+J8Dl"]), onClick: V, icon: o.t }
                    : { variant: "primary", text: y.intl.string(y.t.cpT0Cq), onClick: q };
                return (0, n.jsxs)(r.d, {
                    transitionState: i,
                    onClose: a,
                    children: [
                        (0, n.jsx)(x.z, { sku: j, title: y.intl.string(y.t["5glWta"]), reward: X }),
                        (0, n.jsxs)(c.c, {
                            children: [
                                (0, n.jsx)(d.E, {
                                    variant: "body-md/normal",
                                    className: N.j,
                                    children: y.intl.formatToPlainString(y.t.W2znvX, {
                                        skuName: j.name,
                                        applicationName: D.name,
                                    }),
                                }),
                                null != X &&
                                    (0, n.jsx)("div", {
                                        className: N.I,
                                        children: (0, n.jsx)(O.O0, { Icon: X.Icon, text: X.text }),
                                    }),
                            ],
                        }),
                        (0, n.jsx)(_.H, { actions: [t], actionsFullWidth: !0 }),
                    ],
                });
            }
            {
                let t;
                return (
                    z
                        ? (t = { variant: "primary", text: y.intl.string(y.t["VDAhr+"]), onClick: B, icon: s.A })
                        : Z && (t = { variant: "primary", text: y.intl.string(y.t["s+J8Dl"]), onClick: V, icon: o.t }),
                    (0, n.jsx)(T.m, {
                        sku: j,
                        application: D,
                        transitionState: i,
                        onClose: a,
                        hasAlreadyLinked: G,
                        canStartAuthorization: z,
                        shouldShowGoToGameHint: K,
                        primaryCTAButtonProps: t,
                        bodyText: Q,
                        title: y.intl.string(y.t.GPAtvf),
                        reward: X,
                    })
                );
            }
        },
    },
);
