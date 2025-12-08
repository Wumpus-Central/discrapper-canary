n.d(a, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => g });
var i = n(54381),
    e = n(473749),
    s = n(793030),
    l = n(481060),
    r = n(493773),
    c = n(100527),
    o = n(906732),
    u = n(524995),
    d = n(626135),
    x = n(877481),
    _ = n(579201),
    p = n(683668),
    m = n(55121),
    f = n(438926),
    C = n(582113),
    h = n(981631),
    k = n(388032),
    T = n(786081);
function g(t) {
    let { transitionState: a, onClose: n, sku: g, application: j, analyticsLocations: L } = t,
        A = (0, p.a)(j),
        { fetched: b, hasAlreadyLinked: v, canStartAuthorization: N, startAuthorization: S } = (0, u.F)(j),
        y = (0, _.I)(j),
        { analyticsLocations: E } = (0, o.ZP)(null != L ? L : [], c.Z.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        I = !b || null == A,
        R = e.useRef({
            analyticsLocations: E,
            skuId: g.id,
            applicationId: j.id,
            isLaunchable: A,
            isApplicationConnected: y,
            canStartAuthorization: N,
        });
    e.useEffect(() => {
        (R.current.isLaunchable = A), (R.current.isApplicationConnected = y), (R.current.canStartAuthorization = N);
    }, [A, y, N]),
        (0, r.ZP)(() => {
            d.default.track(h.rMx.OPEN_MODAL, {
                location_stack: E,
                type: C.ng,
                sku_id: g.id,
                application_id: j.id,
            });
        }),
        e.useEffect(() => {
            if (I) return;
            let { analyticsLocations: t, skuId: a, applicationId: n, canStartAuthorization: i } = R.current;
            d.default.track(h.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: a,
                application_id: n,
                is_gift: !1,
                is_account_linked: v,
                can_start_authorization: i,
            });
        }, [I, v]);
    let M = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a, applicationId: n } = R.current;
            d.default.track(h.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: n,
                is_gift: !1,
            }),
                S();
        }, [S]),
        O = e.useCallback(() => {
            let { analyticsLocations: t, skuId: a } = R.current;
            d.default.track(h.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: j.id,
                is_gift: !1,
            }),
                x.Z.launchGame(j.id);
        }, [j.id]),
        B = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: a,
                applicationId: i,
                isLaunchable: e,
                isApplicationConnected: s,
            } = R.current;
            d.default.track(h.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: a,
                application_id: i,
                is_gift: !1,
                is_launchable: null != e && e,
                is_application_connected: s,
            }),
                n();
        }, [n]);
    if (I)
        return (0, i.jsx)(s.IX, {
            transitionState: a,
            onClose: n,
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(l.$jN, {}) }),
        });
    if (v) {
        let t =
            A && !y
                ? {
                      variant: "primary",
                      text: k.intl.string(k.t["s+J8Dl"]),
                      onClick: O,
                      icon: s.rgF,
                  }
                : {
                      variant: "primary",
                      text: k.intl.string(k.t.cpT0Cq),
                      onClick: B,
                  };
        return (0, i.jsxs)(s.IX, {
            transitionState: a,
            onClose: n,
            children: [
                (0, i.jsx)(f.y, {
                    sku: g,
                    title: k.intl.string(k.t["5glWta"]),
                }),
                (0, i.jsx)(s.fef, {
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: T.modalBodyText,
                        children: k.intl.formatToPlainString(k.t.W2znvX, {
                            skuName: g.name,
                            applicationName: j.name,
                        }),
                    }),
                }),
                (0, i.jsx)(s.Go$, {
                    actions: [t],
                    actionsFullWidth: !0,
                }),
            ],
        });
    }
    {
        let t = {
            variant: "primary",
            text: k.intl.string(k.t["VDAhr+"]),
            onClick: M,
            icon: s.uIJ,
            disabled: !N,
        };
        return (0, i.jsx)(m.M, {
            sku: g,
            application: j,
            transitionState: a,
            onClose: n,
            hasAlreadyLinked: v,
            canStartAuthorization: N,
            primaryCTAButtonProps: t,
            bodyText: k.intl.formatToPlainString(k.t.Qmkje8, { applicationName: j.name }),
            title: k.intl.string(k.t.GPAtvf),
        });
    }
}
