a.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => g });
var i = a(54381),
    e = a(473749),
    s = a(793030),
    c = a(481060),
    o = a(493773),
    r = a(100527),
    l = a(906732),
    d = a(535139),
    u = a(626135),
    x = a(877481),
    _ = a(579201),
    p = a(683668),
    f = a(55121),
    m = a(438926),
    C = a(582113),
    h = a(981631),
    k = a(388032),
    T = a(786081);
function g(t) {
    let { transitionState: n, onClose: a, sku: g, application: j, analyticsLocations: L } = t,
        A = (0, p.a)(j),
        { fetched: I, hasAlreadyLinked: b, canStartAuthorization: v, startAuthorization: y } = (0, d.F)(j),
        N = (0, _.I)(j),
        { analyticsLocations: S } = (0, l.ZP)(null != L ? L : [], r.Z.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        E = !I || null == A,
        R = e.useRef({
            analyticsLocations: S,
            skuId: g.id,
            applicationId: j.id,
            isLaunchable: A,
            isApplicationConnected: N,
            canStartAuthorization: v,
        });
    e.useEffect(() => {
        (R.current.isLaunchable = A), (R.current.isApplicationConnected = N), (R.current.canStartAuthorization = v);
    }, [A, N, v]),
        (0, o.ZP)(() => {
            u.default.track(h.rMx.OPEN_MODAL, {
                location_stack: S,
                type: C.ng,
                sku_id: g.id,
                application_id: j.id,
            });
        }),
        e.useEffect(() => {
            if (E) return;
            let { analyticsLocations: t, skuId: n, applicationId: a, canStartAuthorization: i } = R.current;
            u.default.track(h.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: n,
                application_id: a,
                is_gift: !1,
                is_account_linked: b,
                can_start_authorization: i,
            });
        }, [E, b]);
    let O = e.useCallback(() => {
            let { analyticsLocations: t, skuId: n, applicationId: a } = R.current;
            u.default.track(h.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: n,
                application_id: a,
                is_gift: !1,
            }),
                y();
        }, [y]),
        D = e.useCallback(() => {
            let { analyticsLocations: t, skuId: n } = R.current;
            u.default.track(h.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: t,
                sku_id: n,
                application_id: j.id,
                is_gift: !1,
            }),
                x.Z.launchGame(j.id);
        }, [j.id]),
        M = e.useCallback(() => {
            let {
                analyticsLocations: t,
                skuId: n,
                applicationId: i,
                isLaunchable: e,
                isApplicationConnected: s,
            } = R.current;
            u.default.track(h.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: t,
                sku_id: n,
                application_id: i,
                is_gift: !1,
                is_launchable: null != e && e,
                is_application_connected: s,
            }),
                a();
        }, [a]);
    if (E)
        return (0, i.jsx)(s.IX, {
            transitionState: n,
            onClose: a,
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(c.$jN, {}) }),
        });
    if (b) {
        let t =
            A && !N
                ? {
                      variant: "primary",
                      text: k.intl.string(k.t["s+J8Dl"]),
                      onClick: D,
                      icon: s.rgF,
                  }
                : {
                      variant: "primary",
                      text: k.intl.string(k.t.cpT0Cq),
                      onClick: M,
                  };
        return (0, i.jsxs)(s.IX, {
            transitionState: n,
            onClose: a,
            children: [
                (0, i.jsx)(m.y, {
                    sku: g,
                    title: k.intl.string(k.t["5glWta"]),
                }),
                (0, i.jsx)(s.fef, {
                    children: (0, i.jsx)(c.Text, {
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
            onClick: O,
            icon: s.uIJ,
            disabled: !v,
        };
        return (0, i.jsx)(f.M, {
            sku: g,
            application: j,
            transitionState: n,
            onClose: a,
            hasAlreadyLinked: b,
            canStartAuthorization: v,
            primaryCTAButtonProps: t,
            bodyText: k.intl.formatToPlainString(k.t.Qmkje8, { applicationName: j.name }),
            title: k.intl.string(k.t.GPAtvf),
        });
    }
}
