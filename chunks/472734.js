a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => g });
var n = a(627968),
    e = a(64700),
    r = a(224640),
    c = a(430993),
    l = a(141628),
    s = a(811893),
    o = a(696208),
    d = a(289873),
    _ = a(834730),
    u = a(964486),
    p = a(793574),
    A = a(688810),
    k = a(206828),
    C = a(928550),
    f = a(174459),
    h = a(738533),
    E = a(690493),
    L = a(26594),
    S = a(331329),
    m = a(54656),
    x = a(383089),
    T = a(41032),
    O = a(910200),
    I = a(188275),
    R = a(652215),
    N = a(375708),
    y = a(520951);
function g(t) {
    let {
            transitionState: i,
            onClose: a,
            onSetIgnoreCloseRequest: g,
            sku: j,
            application: D,
            analyticsLocations: w,
            entitlement: v,
        } = t,
        [H, M] = (0, C.L)(D?.id),
        { fetched: b, hasAlreadyLinked: G, canStartAuthorization: z, startAuthorization: P } = (0, k.RD)(D),
        { startAuthorization: F, shouldShowGoToGameHint: K } = (0, m.W)(P, { onSetIgnoreCloseRequest: g }),
        U = (0, E.J)(D),
        { analyticsLocations: W } = (0, A.Ay)(w ?? [], p.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        Y = !b || M,
        J = e.useRef({
            analyticsLocations: W,
            skuId: j.id,
            applicationId: D.id,
            isLaunchable: H,
            isApplicationConnected: U,
            canStartAuthorization: z,
        });
    e.useEffect(() => {
        (J.current.isLaunchable = H), (J.current.isApplicationConnected = U), (J.current.canStartAuthorization = z);
    }, [H, U, z]),
        (0, u.Ay)(() => {
            f.default.track(R.HAw.OPEN_MODAL, { location_stack: W, type: I.e2, sku_id: j.id, application_id: D.id });
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
        }, [Y, G]);
    let B = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = J.current;
            f.default.track(R.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                F({ analyticsLocations: t });
        }, [F]),
        V = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = J.current;
            f.default.track(R.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: D.id,
                is_gift: !1,
            }),
                h.A.launchGame(D.id);
        }, [D.id]),
        q = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: r,
            } = J.current;
            f.default.track(R.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: r,
            }),
                a();
        }, [a]),
        X = (0, L.G)(v, { isGift: !1 }),
        Q = e.useMemo(() => (0, S.dI)(D), [D]);
    if (Y)
        return (0, n.jsx)(r.d, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(c.c, { children: (0, n.jsx)(d.y, {}) }),
        });
    let Z = H && !U;
    if (G) {
        let t = Z
            ? { variant: "primary", text: N.intl.string(N.t["s+J8Dl"]), onClick: V, icon: s.t }
            : { variant: "primary", text: N.intl.string(N.t.cpT0Cq), onClick: q };
        return (0, n.jsxs)(r.d, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(T.z, { sku: j, title: N.intl.string(N.t["5glWta"]), reward: X }),
                (0, n.jsxs)(c.c, {
                    children: [
                        (0, n.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: y.j,
                            children: N.intl.formatToPlainString(N.t.W2znvX, {
                                skuName: j.name,
                                applicationName: D.name,
                            }),
                        }),
                        null != X &&
                            (0, n.jsx)("div", {
                                className: y.I,
                                children: (0, n.jsx)(O.O0, { Icon: X.Icon, text: X.text }),
                            }),
                    ],
                }),
                (0, n.jsx)(o.H, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t;
        return (
            z
                ? (t = { variant: "primary", text: N.intl.string(N.t["VDAhr+"]), onClick: B, icon: l.A })
                : Z && (t = { variant: "primary", text: N.intl.string(N.t["s+J8Dl"]), onClick: V, icon: s.t }),
            (0, n.jsx)(x.m, {
                sku: j,
                application: D,
                transitionState: i,
                onClose: a,
                hasAlreadyLinked: G,
                canStartAuthorization: z,
                shouldShowGoToGameHint: K,
                primaryCTAButtonProps: t,
                bodyText: Q,
                title: N.intl.string(N.t.GPAtvf),
                reward: X,
            })
        );
    }
}
