a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => I });
var n = a(627968),
    e = a(64700),
    l = a(224640),
    c = a(430993),
    r = a(141628),
    s = a(811893),
    o = a(318254),
    _ = a(696208),
    d = a(289873),
    u = a(834730),
    p = a(262427),
    A = a(964486),
    C = a(793574),
    k = a(688810),
    f = a(46225),
    E = a(954571),
    L = a(738533),
    S = a(690493),
    m = a(844815),
    h = a(383089),
    T = a(41032),
    x = a(188275),
    O = a(652215),
    R = a(985018),
    N = a(520951);
function I(t) {
    let { transitionState: i, onClose: a, sku: I, application: j, analyticsLocations: y, orbsReward: g } = t,
        D = (0, m.j)(j),
        { fetched: b, hasAlreadyLinked: M, canStartAuthorization: H, startAuthorization: v } = (0, f.RD)(j),
        w = (0, S.J)(j),
        { analyticsLocations: P } = (0, k.Ay)(y ?? [], C.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        U = !b || null == D,
        z = e.useRef({
            analyticsLocations: P,
            skuId: I.id,
            applicationId: j.id,
            isLaunchable: D,
            isApplicationConnected: w,
            canStartAuthorization: H,
        });
    e.useEffect(() => {
        (z.current.isLaunchable = D), (z.current.isApplicationConnected = w), (z.current.canStartAuthorization = H);
    }, [D, w, H]),
        (0, A.Ay)(() => {
            E.default.track(O.HAw.OPEN_MODAL, { location_stack: P, type: x.e2, sku_id: I.id, application_id: j.id });
        }),
        e.useEffect(() => {
            if (U) return;
            let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = z.current;
            E.default.track(O.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
                is_account_linked: M,
                can_start_authorization: n,
            });
        }, [U, M]);
    let F = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = z.current;
            E.default.track(O.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                v({ analyticsLocations: t });
        }, [v]),
        K = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = z.current;
            E.default.track(O.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: j.id,
                is_gift: !1,
            }),
                L.A.launchGame(j.id);
        }, [j.id]),
        Y = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = z.current;
            E.default.track(O.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l,
            }),
                a();
        }, [a]);
    if (U)
        return (0, n.jsx)(l.d, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(c.c, { children: (0, n.jsx)(d.y, {}) }),
        });
    if (M) {
        let t =
            D && !w
                ? { variant: "primary", text: R.intl.string(R.t["s+J8Dl"]), onClick: K, icon: s.t }
                : { variant: "primary", text: R.intl.string(R.t.cpT0Cq), onClick: Y };
        return (0, n.jsxs)(l.d, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(T.z, { sku: I, title: R.intl.string(R.t["5glWta"]) }),
                (0, n.jsxs)(c.c, {
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "text-md/normal",
                            className: N.j,
                            children: R.intl.formatToPlainString(R.t.W2znvX, {
                                skuName: I.name,
                                applicationName: j.name,
                            }),
                        }),
                        null != g &&
                            g > 0 &&
                            (0, n.jsx)("div", {
                                className: N.I,
                                children: (0, n.jsx)(p.J, {
                                    Icon: o.C,
                                    text: R.intl.format(R.t["0StwHe"], { orbCount: g }),
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(_.H, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t = { variant: "primary", text: R.intl.string(R.t["VDAhr+"]), onClick: F, icon: r.A, disabled: !H },
            e = R.t.URLMAM;
        return (0, n.jsx)(h.m, {
            sku: I,
            application: j,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: M,
            canStartAuthorization: H,
            primaryCTAButtonProps: t,
            bodyText: R.intl.formatToPlainString(e, { applicationName: j.name }),
            title: R.intl.string(R.t.GPAtvf),
        });
    }
}
