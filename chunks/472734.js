a.d(i, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => C });
var n = a(627968),
    e = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(964486),
    c = a(793574),
    o = a(688810),
    d = a(362490),
    u = a(954571),
    _ = a(25171),
    x = a(690493),
    p = a(844815),
    m = a(383089),
    A = a(41032),
    f = a(188275),
    j = a(652215),
    b = a(985018),
    h = a(778560);
function C(t) {
    let { transitionState: i, onClose: a, sku: C, application: k, analyticsLocations: T } = t,
        S = (0, p.j)(k),
        { fetched: v, hasAlreadyLinked: N, canStartAuthorization: L, startAuthorization: E } = (0, d.RD)(k),
        g = (0, x.J)(k),
        { analyticsLocations: I } = (0, o.Ay)(null != T ? T : [], c.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        y = !v || null == S,
        O = e.useRef({
            analyticsLocations: I,
            skuId: C.id,
            applicationId: k.id,
            isLaunchable: S,
            isApplicationConnected: g,
            canStartAuthorization: L,
        });
    e.useEffect(() => {
        (O.current.isLaunchable = S), (O.current.isApplicationConnected = g), (O.current.canStartAuthorization = L);
    }, [S, g, L]),
        (0, s.Ay)(() => {
            u.default.track(j.HAw.OPEN_MODAL, {
                location_stack: I,
                type: f.e2,
                sku_id: C.id,
                application_id: k.id,
            });
        }),
        e.useEffect(() => {
            if (y) return;
            let { analyticsLocations: t, skuId: i, applicationId: a, canStartAuthorization: n } = O.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
                is_account_linked: N,
                can_start_authorization: n,
            });
        }, [y, N]);
    let R = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i, applicationId: a } = O.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: a,
                is_gift: !1,
            }),
                E({ analyticsLocations: t });
        }, [E]),
        w = e.useCallback(() => {
            let { analyticsLocations: t, skuId: i } = O.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: k.id,
                is_gift: !1,
            }),
                _.A.launchGame(k.id);
        }, [k.id]),
        D = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: i,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = O.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: i,
                application_id: n,
                is_gift: !1,
                is_launchable: null != e && e,
                is_application_connected: l,
            }),
                a();
        }, [a]);
    if (y)
        return (0, n.jsx)(l.dWK, {
            transitionState: i,
            onClose: a,
            children: (0, n.jsx)(l.cwr, { children: (0, n.jsx)(r.y$y, {}) }),
        });
    if (N) {
        let t =
            S && !g
                ? {
                      variant: "primary",
                      text: b.intl.string(b.t["s+J8Dl"]),
                      onClick: w,
                      icon: l.tfB,
                  }
                : {
                      variant: "primary",
                      text: b.intl.string(b.t.cpT0Cq),
                      onClick: D,
                  };
        return (0, n.jsxs)(l.dWK, {
            transitionState: i,
            onClose: a,
            children: [
                (0, n.jsx)(A.z, {
                    sku: C,
                    title: b.intl.string(b.t["5glWta"]),
                }),
                (0, n.jsx)(l.cwr, {
                    children: (0, n.jsx)(r.Text, {
                        variant: "text-md/normal",
                        className: h.j,
                        children: b.intl.formatToPlainString(b.t.W2znvX, {
                            skuName: C.name,
                            applicationName: k.name,
                        }),
                    }),
                }),
                (0, n.jsx)(l.H7u, {
                    actions: [t],
                    actionsFullWidth: !0,
                }),
            ],
        });
    }
    {
        let t = {
            variant: "primary",
            text: b.intl.string(b.t["VDAhr+"]),
            onClick: R,
            icon: l.A5T,
            disabled: !L,
        };
        return (0, n.jsx)(m.m, {
            sku: C,
            application: k,
            transitionState: i,
            onClose: a,
            hasAlreadyLinked: N,
            canStartAuthorization: L,
            primaryCTAButtonProps: t,
            bodyText: b.intl.formatToPlainString(b.t.Qmkje8, { applicationName: k.name }),
            title: b.intl.string(b.t.GPAtvf),
        });
    }
}
