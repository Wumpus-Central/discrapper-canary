a.d(n, { SocialLayerStorefrontItemClaimedSuccessfullyModal: () => g });
var i = a(54381),
    s = a(473749),
    e = a(793030),
    o = a(481060),
    c = a(493773),
    l = a(100527),
    r = a(906732),
    d = a(535139),
    u = a(626135),
    x = a(877481),
    _ = a(579201),
    m = a(683668),
    p = a(55121),
    C = a(438926),
    f = a(582113),
    h = a(981631),
    k = a(388032),
    T = a(786081);
function g(t) {
    let { transitionState: n, onClose: a, sku: g, application: j, analyticsLocations: L } = t,
        A = (0, m.a)(j),
        { fetched: v, hasAlreadyLinked: y, canStartAuthorization: I, startAuthorization: N } = (0, d.F)(j),
        b = (0, _.I)(j),
        { analyticsLocations: S } = (0, r.ZP)(null != L ? L : [], l.Z.SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL),
        E = !v || null == A;
    (0, c.ZP)(() => {
        u.default.track(h.rMx.OPEN_MODAL, {
            location_stack: S,
            type: f.ng,
            sku_id: g.id,
            application_id: j.id,
        });
    }),
        s.useEffect(() => {
            E ||
                u.default.track(h.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                    location_stack: S,
                    sku_id: g.id,
                    application_id: j.id,
                    is_gift: !1,
                    is_account_linked: y,
                    can_start_authorization: I,
                });
        }, [E, y, g.id, j.id, S, I]);
    let R = s.useCallback(() => {
            u.default.track(h.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: S,
                sku_id: g.id,
                application_id: j.id,
                is_gift: !1,
            }),
                N();
        }, [S, g.id, j.id, N]),
        O = s.useCallback(() => {
            u.default.track(h.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: S,
                sku_id: g.id,
                application_id: j.id,
                is_gift: !1,
            }),
                x.Z.launchGame(j.id);
        }, [S, g.id, j.id]),
        D = s.useCallback(() => {
            u.default.track(h.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                location_stack: S,
                sku_id: g.id,
                application_id: j.id,
                is_gift: !1,
                is_launchable: null != A && A,
                is_application_connected: b,
            }),
                a();
        }, [S, g.id, j.id, A, b, a]);
    if (E)
        return (0, i.jsx)(e.IX, {
            transitionState: n,
            onClose: a,
            children: (0, i.jsx)(e.fef, { children: (0, i.jsx)(o.$jN, {}) }),
        });
    if (y) {
        let t =
            A && !b
                ? {
                      variant: "primary",
                      text: k.intl.string(k.t["s+J8Dl"]),
                      onClick: O,
                      icon: e.rgF,
                  }
                : {
                      variant: "primary",
                      text: k.intl.string(k.t.cpT0Cq),
                      onClick: D,
                  };
        return (0, i.jsxs)(e.IX, {
            transitionState: n,
            onClose: a,
            children: [
                (0, i.jsx)(C.y, {
                    sku: g,
                    title: k.intl.string(k.t["5glWta"]),
                }),
                (0, i.jsx)(e.fef, {
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: T.modalBodyText,
                        children: k.intl.formatToPlainString(k.t.W2znvX, {
                            skuName: g.name,
                            applicationName: j.name,
                        }),
                    }),
                }),
                (0, i.jsx)(e.Go$, {
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
            onClick: R,
            icon: e.uIJ,
            disabled: !I,
        };
        return (0, i.jsx)(p.M, {
            sku: g,
            application: j,
            transitionState: n,
            onClose: a,
            hasAlreadyLinked: y,
            canStartAuthorization: I,
            primaryCTAButtonProps: t,
            bodyText: k.intl.formatToPlainString(k.t.Qmkje8, { applicationName: j.name }),
            title: k.intl.string(k.t.GPAtvf),
        });
    }
}
