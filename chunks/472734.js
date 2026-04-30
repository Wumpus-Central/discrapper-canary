a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => N });
var n = a(627968),
    e = a(64700),
    l = a(224640),
    c = a(430993),
    s = a(141628),
    r = a(811893),
    o = a(318254),
    d = a(696208),
    u = a(289873),
    _ = a(834730),
    p = a(262427),
    C = a(964486),
    A = a(793574),
    k = a(688810),
    f = a(46225),
    S = a(954571),
    E = a(738533),
    L = a(690493),
    m = a(844815),
    h = a(987723),
    T = a(383089),
    x = a(41032),
    I = a(188275),
    O = a(652215),
    R = a(985018),
    y = a(520951);
function N(t) {
    let { transitionState: i, onClose: a, sku: N, application: j, analyticsLocations: g, orbsReward: D } = t,
        b = (0, m.j)(j),
        { fetched: M, hasAlreadyLinked: H, canStartAuthorization: v, startAuthorization: w } = (0, f.RD)(j),
        P = (0, L.J)(j),
        { analyticsLocations: z } = (0, k.Ay)(g ?? [], A.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        F = !M || null == b,
        K = e.useRef({
            analyticsLocations: z,
            skuId: N.id,
            applicationId: j.id,
            isLaunchable: b,
            isApplicationConnected: P,
            canStartAuthorization: v,
        });
    e.useEffect(() => {
        (K.current.isLaunchable = b), (K.current.isApplicationConnected = P), (K.current.canStartAuthorization = v);
    }, [b, P, v]),
        (0, C.Ay)(() => {
            S.default.track(O.HAw.OPEN_MODAL, { location_stack: z, type: I.e2, sku_id: N.id, application_id: j.id });
        }),
        e.useEffect(() => {
            if (F) return;
            let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = K.current;
            S.default.track(O.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
                is_account_linked: H,
                can_start_authorization: n,
            });
        }, [F, H]);
    let U = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = K.current;
            S.default.track(O.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                w({ analyticsLocations: t });
        }, [w]),
        Y = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = K.current;
            S.default.track(O.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: j.id,
                is_gift: !1,
            }),
                E.A.launchGame(j.id);
        }, [j.id]),
        W = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = K.current;
            S.default.track(O.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l,
            }),
                a();
        }, [a]),
        G = e.useMemo(() => (0, h.dI)(j, { location: "SocialLayerStorefrontItemClaimedSuccessfullyModal" }), [j]);
    if (F)
        return (0, n.jsx)(l.d, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(c.c, { children: (0, n.jsx)(u.y, {}) }),
        });
    if (H) {
        let t =
            b && !P
                ? { variant: "primary", text: R.intl.string(R.t["s+J8Dl"]), onClick: Y, icon: r.t }
                : { variant: "primary", text: R.intl.string(R.t.cpT0Cq), onClick: W };
        return (0, n.jsxs)(l.d, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(x.z, { sku: N, title: R.intl.string(R.t["5glWta"]) }),
                (0, n.jsxs)(c.c, {
                    children: [
                        (0, n.jsx)(_.E, {
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
        let t = { variant: "primary", text: R.intl.string(R.t["VDAhr+"]), onClick: U, icon: s.A, disabled: !v };
        return (0, n.jsx)(T.m, {
            sku: N,
            application: j,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: H,
            canStartAuthorization: v,
            primaryCTAButtonProps: t,
            bodyText: G,
            title: R.intl.string(R.t.GPAtvf),
        });
    }
}
