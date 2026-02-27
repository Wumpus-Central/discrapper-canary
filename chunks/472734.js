a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => T });
var n = a(627968),
    e = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(262427),
    c = a(964486),
    o = a(793574),
    d = a(688810),
    u = a(362490),
    _ = a(954571),
    x = a(25171),
    p = a(690493),
    m = a(844815),
    A = a(383089),
    f = a(41032),
    C = a(188275),
    j = a(652215),
    h = a(985018),
    k = a(778560);
function T(t) {
    let { transitionState: i, onClose: a, sku: T, application: S, analyticsLocations: b, orbsReward: v } = t,
        N = (0, m.j)(S),
        { fetched: L, hasAlreadyLinked: g, canStartAuthorization: E, startAuthorization: I } = (0, u.RD)(S),
        y = (0, p.J)(S),
        { analyticsLocations: R } = (0, d.Ay)(b ?? [], o.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        O = !L || null == N,
        w = e.useRef({
            analyticsLocations: R,
            skuId: T.id,
            applicationId: S.id,
            isLaunchable: N,
            isApplicationConnected: y,
            canStartAuthorization: E,
        });
    e.useEffect(() => {
        (w.current.isLaunchable = N), (w.current.isApplicationConnected = y), (w.current.canStartAuthorization = E);
    }, [N, y, E]),
        (0, c.Ay)(() => {
            _.default.track(j.HAw.OPEN_MODAL, { location_stack: R, type: C.e2, sku_id: T.id, application_id: S.id });
        }),
        e.useEffect(() => {
            if (O) return;
            let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = w.current;
            _.default.track(j.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
                is_account_linked: g,
                can_start_authorization: n,
            });
        }, [O, g]);
    let D = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = w.current;
            _.default.track(j.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                I({ analyticsLocations: t });
        }, [I]),
        W = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = w.current;
            _.default.track(j.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: S.id,
                is_gift: !1,
            }),
                x.A.launchGame(S.id);
        }, [S.id]),
        z = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = w.current;
            _.default.track(j.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l,
            }),
                a();
        }, [a]);
    if (O)
        return (0, n.jsx)(l.dWK, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(l.cwr, { children: (0, n.jsx)(r.y$y, {}) }),
        });
    if (g) {
        let t =
            N && !y
                ? { variant: "primary", text: h.intl.string(h.t["s+J8Dl"]), onClick: W, icon: l.tfB }
                : { variant: "primary", text: h.intl.string(h.t.cpT0Cq), onClick: z };
        return (0, n.jsxs)(l.dWK, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(f.z, { sku: T, title: h.intl.string(h.t["5glWta"]) }),
                (0, n.jsxs)(l.cwr, {
                    children: [
                        (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: k.j,
                            children: h.intl.formatToPlainString(h.t.W2znvX, {
                                skuName: T.name,
                                applicationName: S.name,
                            }),
                        }),
                        null != v &&
                            v > 0 &&
                            (0, n.jsx)("div", {
                                className: k.I,
                                children: (0, n.jsx)(s.J, {
                                    Icon: l.Cp8,
                                    text: h.intl.format(h.t["0StwHe"], { orbCount: v }),
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(l.H7u, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t = { variant: "primary", text: h.intl.string(h.t["VDAhr+"]), onClick: D, icon: l.A5T, disabled: !E },
            e = h.t.URLMAM;
        return (0, n.jsx)(A.m, {
            sku: T,
            application: S,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: g,
            canStartAuthorization: E,
            primaryCTAButtonProps: t,
            bodyText: h.intl.formatToPlainString(e, { applicationName: S.name }),
            title: h.intl.string(h.t.GPAtvf),
        });
    }
}
