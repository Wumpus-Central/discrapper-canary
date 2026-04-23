i.d(a, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => L });
var n = i(627968),
    e = i(64700),
    l = i(224640),
    s = i(430993),
    c = i(141628),
    r = i(811893),
    o = i(318254),
    d = i(696208),
    u = i(289873),
    _ = i(834730),
    p = i(262427),
    x = i(964486),
    m = i(793574),
    h = i(688810),
    A = i(362490),
    f = i(954571),
    j = i(25171),
    C = i(690493),
    v = i(844815),
    g = i(383089),
    N = i(41032),
    k = i(188275),
    E = i(652215),
    S = i(985018),
    b = i(520951);
function L(t) {
    let { transitionState: a, onClose: i, sku: L, application: T, analyticsLocations: I, orbsReward: y } = t,
        R = (0, v.j)(T),
        { fetched: w, hasAlreadyLinked: O, canStartAuthorization: M, startAuthorization: D } = (0, A.RD)(T),
        H = (0, C.J)(T),
        { analyticsLocations: U } = (0, h.Ay)(I ?? [], m.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        P = !w || null == R,
        z = e.useRef({
            analyticsLocations: U,
            skuId: L.id,
            applicationId: T.id,
            isLaunchable: R,
            isApplicationConnected: H,
            canStartAuthorization: M,
        });
    e.useEffect(() => {
        (z.current.isLaunchable = R), (z.current.isApplicationConnected = H), (z.current.canStartAuthorization = M);
    }, [R, H, M]),
        (0, x.Ay)(() => {
            f.default.track(E.HAw.OPEN_MODAL, { location_stack: U, type: k.e2, sku_id: L.id, application_id: T.id });
        }),
        e.useEffect(() => {
            if (P) return;
            let { analyticsLocations: t, skuId: a, applicationId: i, canStartAuthorization: n } = z.current;
            f.default.track(E.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
                is_account_linked: O,
                can_start_authorization: n,
            });
        }, [P, O]);
    let W = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a, applicationId: i } = z.current;
            f.default.track(E.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
            }),
                D({ analyticsLocations: t });
        }, [D]),
        Z = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a } = z.current;
            f.default.track(E.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: T.id,
                is_gift: !1,
            }),
                j.A.launchGame(T.id);
        }, [T.id]),
        F = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: a,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = z.current;
            f.default.track(E.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l,
            }),
                i();
        }, [i]);
    if (P)
        return (0, n.jsx)(l.d, {
            transitionState: a,
            onClose: i,
            children: (0, n.jsx)(s.c, { children: (0, n.jsx)(u.y, {}) }),
        });
    if (O) {
        let t =
            R && !H
                ? { variant: "primary", text: S.intl.string(S.t["s+J8Dl"]), onClick: Z, icon: r.t }
                : { variant: "primary", text: S.intl.string(S.t.cpT0Cq), onClick: F };
        return (0, n.jsxs)(l.d, {
            transitionState: a,
            onClose: i,
            children: [
                (0, n.jsx)(N.z, { sku: L, title: S.intl.string(S.t["5glWta"]) }),
                (0, n.jsxs)(s.c, {
                    children: [
                        (0, n.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: b.j,
                            children: S.intl.formatToPlainString(S.t.W2znvX, {
                                skuName: L.name,
                                applicationName: T.name,
                            }),
                        }),
                        null != y &&
                            y > 0 &&
                            (0, n.jsx)("div", {
                                className: b.I,
                                children: (0, n.jsx)(p.J, {
                                    Icon: o.C,
                                    text: S.intl.format(S.t["0StwHe"], { orbCount: y }),
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(d.H, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t = { variant: "primary", text: S.intl.string(S.t["VDAhr+"]), onClick: W, icon: c.A, disabled: !M },
            e = S.t.URLMAM;
        return (0, n.jsx)(g.m, {
            sku: L,
            application: T,
            transitionState: a,
            onClose: i,
            hasAlreadyLinked: O,
            canStartAuthorization: M,
            primaryCTAButtonProps: t,
            bodyText: S.intl.formatToPlainString(e, { applicationName: T.name }),
            title: S.intl.string(S.t.GPAtvf),
        });
    }
}
