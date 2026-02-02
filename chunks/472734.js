i.d(a, {
    SocialLayerStorefrontItemClaimedSuccessfullyModal: () => S,
});
var n = i(627968),
    e = i(64700),
    l = i(158954),
    r = i(397927),
    s = i(964486),
    c = i(793574),
    o = i(688810),
    d = i(362490),
    u = i(954571),
    _ = i(25171),
    x = i(938289),
    p = i(690493),
    m = i(844815),
    A = i(383089),
    f = i(41032),
    C = i(188275),
    j = i(652215),
    h = i(985018),
    k = i(778560);

function S(t) {
    let { transitionState: a, onClose: i, sku: S, application: T, analyticsLocations: L } = t,
        v = (0, m.j)(T),
        { fetched: b, hasAlreadyLinked: g, canStartAuthorization: N, startAuthorization: E } = (0, d.RD)(T),
        y = (0, p.J)(T),
        { analyticsLocations: I } = (0, o.Ay)(null != L ? L : [], c.A.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        R = (0, x.n)({
            location: "SocialLayerStorefrontItemClaimedSuccessfullyModal",
        }),
        O = !b || null == v,
        w = e.useRef({
            analyticsLocations: I,
            skuId: S.id,
            applicationId: T.id,
            isLaunchable: v,
            isApplicationConnected: y,
            canStartAuthorization: N,
        });
    e.useEffect(() => {
        (w.current.isLaunchable = v), (w.current.isApplicationConnected = y), (w.current.canStartAuthorization = N);
    }, [v, y, N]),
        (0, s.Ay)(() => {
            u.default.track(j.HAw.OPEN_MODAL, {
                location_stack: I,
                type: C.e2,
                sku_id: S.id,
                application_id: T.id,
            });
        }),
        e.useEffect(() => {
            if (O) return;
            let { analyticsLocations: t, skuId: a, applicationId: i, canStartAuthorization: n } = w.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
                is_account_linked: g,
                can_start_authorization: n,
            });
        }, [O, g]);
    let D = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a, applicationId: i } = w.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
            }),
                E({
                    analyticsLocations: t,
                });
        }, [E]),
        M = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a } = w.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: T.id,
                is_gift: !1,
            }),
                _.A.launchGame(T.id);
        }, [T.id]),
        W = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: a,
                applicationId: n,
                isLaunchable: e,
                isApplicationConnected: l,
            } = w.current;
            u.default.track(j.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: n,
                is_gift: !1,
                is_launchable: null != e && e,
                is_application_connected: l,
            }),
                i();
        }, [i]);
    if (O)
        return (0, n.jsx)(l.dWK, {
            transitionState: a,
            onClose: i,
            children: (0, n.jsx)(l.cwr, {
                children: (0, n.jsx)(r.y$y, {}),
            }),
        });
    if (g) {
        let t =
            v && !y
                ? {
                      variant: "primary",
                      text: h.intl.string(h.t["s+J8Dl"]),
                      onClick: M,
                      icon: l.tfB,
                  }
                : {
                      variant: "primary",
                      text: h.intl.string(h.t.cpT0Cq),
                      onClick: W,
                  };
        return (0, n.jsxs)(l.dWK, {
            transitionState: a,
            onClose: i,
            children: [
                (0, n.jsx)(f.z, {
                    sku: S,
                    title: h.intl.string(h.t["5glWta"]),
                }),
                (0, n.jsx)(l.cwr, {
                    children: (0, n.jsx)(r.Text, {
                        variant: "text-md/normal",
                        className: k.j,
                        children: h.intl.formatToPlainString(h.t.W2znvX, {
                            skuName: S.name,
                            applicationName: T.name,
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
                text: h.intl.string(h.t["VDAhr+"]),
                onClick: D,
                icon: l.A5T,
                disabled: !N,
            },
            e = R ? h.t.URLMAM : h.t.Qmkje8;
        return (0, n.jsx)(A.m, {
            sku: S,
            application: T,
            transitionState: a,
            onClose: i,
            hasAlreadyLinked: g,
            canStartAuthorization: N,
            primaryCTAButtonProps: t,
            bodyText: h.intl.formatToPlainString(e, {
                applicationName: T.name,
            }),
            title: h.intl.string(h.t.GPAtvf),
        });
    }
}
