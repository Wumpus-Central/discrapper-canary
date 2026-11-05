var n = a(477900),
    e = a(582128),
    c = a(224640),
    r = a(430993),
    l = a(289873),
    s = a(141628),
    o = a(811893),
    d = a(834730),
    _ = a(696208),
    u = a(964486),
    p = a(793574),
    k = a(688810),
    A = a(724302),
    C = a(928550),
    L = a(129230),
    h = a(292702),
    E = a(690493),
    f = a(26594),
    m = a(118982),
    S = a(832275),
    I = a(383089),
    x = a(41032),
    T = a(910200),
    O = a(188275),
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
                    application: w,
                    analyticsLocations: D,
                    entitlement: b,
                } = t,
                [v, H] = (0, C.L_)(w?.id),
                { fetched: M, hasAlreadyLinked: G, canStartAuthorization: W, startAuthorization: z } = (0, A.RD)(w),
                { startAuthorization: P, shouldShowGoToGameHint: F } = (0, S.W)(z, { onSetIgnoreCloseRequest: g }),
                K = (0, E.J)(w),
                { analyticsLocations: U } = (0, k.Ay)(D ?? [], p.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
                Y = !M || H,
                J = e.useRef({
                    analyticsLocations: U,
                    skuId: j.id,
                    applicationId: w.id,
                    isLaunchable: v,
                    isApplicationConnected: K,
                    canStartAuthorization: W,
                });
            (e.useEffect(() => {
                ((J.current.isLaunchable = v),
                    (J.current.isApplicationConnected = K),
                    (J.current.canStartAuthorization = W));
            }, [v, K, W]),
                (0, u.Ay)(() => {
                    L.default.track(R.HAw.OPEN_MODAL, {
                        location_stack: U,
                        type: O.e2,
                        sku_id: j.id,
                        application_id: w.id,
                    });
                }),
                e.useEffect(() => {
                    if (Y) return;
                    let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = J.current;
                    L.default.track(R.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
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
                    (L.default.track(R.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: a,
                        is_gift: !1,
                    }),
                        P({ analyticsLocations: t }));
                }, [P]),
                V = e.useCallback(() => {
                    let { analyticsLocations: t, skuId: i } = J.current;
                    (L.default.track(R.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: w.id,
                        is_gift: !1,
                    }),
                        h.A.launchGame(w.id));
                }, [w.id]),
                q = e.useCallback(() => {
                    let {
                        analyticsLocations: t,
                        skuId: i,
                        applicationId: n,
                        isLaunchable: e,
                        isApplicationConnected: c,
                    } = J.current;
                    (L.default.track(R.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                        location_stack: t,
                        sku_id: i,
                        application_id: n,
                        is_gift: !1,
                        is_launchable: e ?? !1,
                        is_application_connected: c,
                    }),
                        a());
                }, [a]),
                X = (0, f.G)(b, { isGift: !1 }),
                Q = e.useMemo(() => (0, m.dI)(w), [w]);
            if (Y)
                return (0, n.jsx)(c.d, {
                    transitionState: i,
                    onClose: a,
                    children: (0, n.jsx)(r.c, { children: (0, n.jsx)(l.y, {}) }),
                });
            let Z = v && !K;
            if (G) {
                let t = Z
                    ? { variant: "primary", text: y.intl.string(y.t["s+J8Dl"]), onClick: V, icon: o.WindowLaunchIcon }
                    : { variant: "primary", text: y.intl.string(y.t.cpT0Cq), onClick: q };
                return (0, n.jsxs)(c.d, {
                    transitionState: i,
                    onClose: a,
                    children: [
                        (0, n.jsx)(x.z, { sku: j, title: y.intl.string(y.t["5glWta"]), reward: X }),
                        (0, n.jsxs)(r.c, {
                            children: [
                                (0, n.jsx)(d.E, {
                                    variant: "body-md/normal",
                                    className: N.j,
                                    children: y.intl.formatToPlainString(y.t.W2znvX, {
                                        skuName: j.name,
                                        applicationName: w.name,
                                    }),
                                }),
                                null != X &&
                                    (0, n.jsx)("div", {
                                        className: N.I,
                                        children: (0, n.jsx)(T.O0, { Icon: X.Icon, text: X.text }),
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
                    W
                        ? (t = {
                              variant: "primary",
                              text: y.intl.string(y.t["VDAhr+"]),
                              onClick: B,
                              icon: s.ExperimentalGameControllerLinkIcon,
                          })
                        : Z &&
                          (t = {
                              variant: "primary",
                              text: y.intl.string(y.t["s+J8Dl"]),
                              onClick: V,
                              icon: o.WindowLaunchIcon,
                          }),
                    (0, n.jsx)(I.m, {
                        sku: j,
                        application: w,
                        transitionState: i,
                        onClose: a,
                        hasAlreadyLinked: G,
                        canStartAuthorization: W,
                        shouldShowGoToGameHint: F,
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
