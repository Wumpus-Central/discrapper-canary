a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => y });
var n = a(627968),
    e = a(64700),
    c = a(224640),
    l = a(430993),
    s = a(141628),
    r = a(811893),
    o = a(696208),
    d = a(289873),
    _ = a(834730),
    u = a(964486),
    p = a(793574),
    A = a(688810),
    k = a(46225),
    C = a(928550),
    f = a(174459),
    E = a(738533),
    L = a(690493),
    S = a(26594),
    h = a(331329),
    m = a(383089),
    x = a(41032),
    O = a(910200),
    T = a(188275),
    I = a(652215),
    R = a(375708),
    N = a(520951);
function y(t) {
    let { transitionState: i, onClose: a, sku: y, application: j, analyticsLocations: g, entitlement: D } = t,
        [b, w] = (0, C.L)(j?.id),
        { fetched: M, hasAlreadyLinked: v, canStartAuthorization: H, startAuthorization: P } = (0, k.RD)(j),
        z = (0, L.J)(j),
        { analyticsLocations: F } = (0, A.Ay)(g ?? [], p.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        G = !M || w,
        K = e.useRef({
            analyticsLocations: F,
            skuId: y.id,
            applicationId: j.id,
            isLaunchable: b,
            isApplicationConnected: z,
            canStartAuthorization: H,
        });
    e.useEffect(() => {
        (K.current.isLaunchable = b), (K.current.isApplicationConnected = z), (K.current.canStartAuthorization = H);
    }, [b, z, H]),
        (0, u.Ay)(() => {
            f.default.track(I.HAw.OPEN_MODAL, { location_stack: F, type: T.e2, sku_id: y.id, application_id: j.id });
        }),
        e.useEffect(() => {
            if (G) return;
            let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = K.current;
            f.default.track(I.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
                is_account_linked: v,
                can_start_authorization: n,
            });
        }, [G, v]);
    let U = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = K.current;
            f.default.track(I.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                P({ analyticsLocations: t });
        }, [P]),
        Y = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = K.current;
            f.default.track(I.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
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
                isApplicationConnected: c,
            } = K.current;
            f.default.track(I.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: c,
            }),
                a();
        }, [a]),
        B = (0, S.G)(D, { isGift: !1 }),
        J = e.useMemo(() => (0, h.dI)(j), [j]);
    if (G)
        return (0, n.jsx)(c.d, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(l.c, { children: (0, n.jsx)(d.y, {}) }),
        });
    if (v) {
        let t =
            b && !z
                ? { variant: "primary", text: R.intl.string(R.t["s+J8Dl"]), onClick: Y, icon: r.t }
                : { variant: "primary", text: R.intl.string(R.t.cpT0Cq), onClick: W };
        return (0, n.jsxs)(c.d, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(x.z, { sku: y, title: R.intl.string(R.t["5glWta"]), reward: B }),
                (0, n.jsxs)(l.c, {
                    children: [
                        (0, n.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: N.j,
                            children: R.intl.formatToPlainString(R.t.W2znvX, {
                                skuName: y.name,
                                applicationName: j.name,
                            }),
                        }),
                        null != B &&
                            (0, n.jsx)("div", {
                                className: N.I,
                                children: (0, n.jsx)(O.O0, { Icon: B.Icon, text: B.text }),
                            }),
                    ],
                }),
                (0, n.jsx)(o.H, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t = { variant: "primary", text: R.intl.string(R.t["VDAhr+"]), onClick: U, icon: s.A, disabled: !H };
        return (0, n.jsx)(m.m, {
            sku: y,
            application: j,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: v,
            canStartAuthorization: H,
            primaryCTAButtonProps: t,
            bodyText: J,
            title: R.intl.string(R.t.GPAtvf),
            reward: B,
        });
    }
}
