i.d(a, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => T });
var n = i(627968),
    e = i(64700),
    l = i(158954),
    r = i(397927),
    s = i(262427),
    c = i(964486),
    o = i(793574),
    d = i(688810),
    u = i(362490),
    _ = i(954571),
    x = i(25171),
    p = i(938289),
    m = i(690493),
    A = i(844815),
    f = i(383089),
    C = i(41032),
    j = i(188275),
    h = i(652215),
    k = i(985018),
    S = i(778560);
function T(t) {
    let { transitionState: a, onClose: i, sku: T, application: b, analyticsLocations: v, orbsReward: L } = t,
        N = (0, A.j)(b),
        { fetched: g, hasAlreadyLinked: E, canStartAuthorization: I, startAuthorization: y } = (0, u.RD)(b),
        R = (0, m.J)(b),
        { analyticsLocations: O } = (0, d.Ay)(v ?? [], o.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        w = (0, p.n)({ location: "SocialLayerStorefrontItemClaimedSuccessfullyModal" }),
        D = !g || null == N,
        M = e.useRef({
            analyticsLocations: O,
            skuId: T.id,
            applicationId: b.id,
            isLaunchable: N,
            isApplicationConnected: R,
            canStartAuthorization: I,
        });
    e.useEffect(() => {
        (M.current.isLaunchable = N), (M.current.isApplicationConnected = R), (M.current.canStartAuthorization = I);
    }, [N, R, I]),
        (0, c.Ay)(() => {
            _.default.track(h.HAw.OPEN_MODAL, { location_stack: O, type: j.e2, sku_id: T.id, application_id: b.id });
        }),
        e.useEffect(() => {
            if (D) return;
            let { analyticsLocations: t, skuId: a, applicationId: i, canStartAuthorization: n } = M.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
                is_account_linked: E,
                can_start_authorization: n,
            });
        }, [D, E]);
    let W = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a, applicationId: i } = M.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
            }),
                y({ analyticsLocations: t });
        }, [y]),
        z = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a } = M.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: b.id,
                is_gift: !1,
            }),
                x.A.launchGame(b.id);
        }, [b.id]),
        H = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: a,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = M.current;
            _.default.track(h.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: n,
                is_gift: !1,
                is_launchable: e ?? !1,
                is_application_connected: l,
            }),
                i();
        }, [i]);
    if (D)
        return (0, n.jsx)(l.dWK, {
            transitionState: a,
            onClose: i,
            children: (0, n.jsx)(l.cwr, { children: (0, n.jsx)(r.y$y, {}) }),
        });
    if (E) {
        let t =
            N && !R
                ? { variant: "primary", text: k.intl.string(k.t["s+J8Dl"]), onClick: z, icon: l.tfB }
                : { variant: "primary", text: k.intl.string(k.t.cpT0Cq), onClick: H };
        return (0, n.jsxs)(l.dWK, {
            transitionState: a,
            onClose: i,
            children: [
                (0, n.jsx)(C.z, { sku: T, title: k.intl.string(k.t["5glWta"]) }),
                (0, n.jsxs)(l.cwr, {
                    children: [
                        (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: S.j,
                            children: k.intl.formatToPlainString(k.t.W2znvX, {
                                skuName: T.name,
                                applicationName: b.name,
                            }),
                        }),
                        null != L &&
                            L > 0 &&
                            (0, n.jsx)("div", {
                                className: S.I,
                                children: (0, n.jsx)(s.J, {
                                    Icon: l.Cp8,
                                    text: k.intl.format(k.t["0StwHe"], { orbCount: L }),
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(l.H7u, { actions: [t], actionsFullWidth: !0 }),
            ],
        });
    }
    {
        let t = { variant: "primary", text: k.intl.string(k.t["VDAhr+"]), onClick: W, icon: l.A5T, disabled: !I },
            e = w ? k.t.URLMAM : k.t.Qmkje8;
        return (0, n.jsx)(f.m, {
            sku: T,
            application: b,
            transitionState: a,
            onClose: i,
            hasAlreadyLinked: E,
            canStartAuthorization: I,
            primaryCTAButtonProps: t,
            bodyText: k.intl.formatToPlainString(e, { applicationName: b.name }),
            title: k.intl.string(k.t.GPAtvf),
        });
    }
}
