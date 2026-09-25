i.d(e, { default: () => K });
var a = i(477900),
    n = i(582128),
    s = i(17928),
    l = i(636537),
    o = i(224640),
    r = i(20742),
    c = i(430993),
    u = i(834730),
    d = i(696208),
    _ = i(289873),
    p = i(141628),
    f = i(811893),
    m = i(683071),
    C = i(75255),
    A = i(964486),
    k = i(775602),
    x = i(793574),
    g = i(688810),
    S = i(206828),
    E = i(587895),
    h = i(518926),
    L = i(928550),
    I = i(946261),
    R = i(209932),
    T = i(287809),
    y = i(174459),
    N = i(690521),
    j = i(738533),
    O = i(45938),
    D = i(403362),
    M = i(427262),
    b = i(690493),
    G = i(331329),
    v = i(383089),
    w = i(41032),
    U = i(832275),
    P = i(188275),
    F = i(652215),
    H = i(375708),
    B = i(84729);
function K(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: o,
            giftCode: r,
            channelContext: c,
            customGiftMessage: u,
            emojiName: d,
            soundId: _,
            analyticsLocations: p,
            onSetIgnoreCloseRequest: f,
        } = t,
        [m, k] = n.useState({ state: "LINK" }),
        [h, I] = n.useState(!1),
        R = (0, s.bG)([E.A], () => E.A.getApplication(i.applicationId)),
        { startAuthorization: T, ...N } = (0, S.RD)(R),
        { startAuthorization: O, shouldShowGoToGameHint: M } = (0, U.W)(T, { onSetIgnoreCloseRequest: f }),
        G = { startAuthorization: O, shouldShowGoToGameHint: M, ...N },
        { analyticsLocations: v } = (0, g.Ay)(p ?? [], x.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL),
        [w, B] = (0, L.L_)(R?.id),
        K = (0, b.J)(R),
        Y = n.useCallback(() => {
            R?.id != null &&
                (y.default.track(F.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                    location_stack: v,
                    sku_id: i.id,
                    application_id: R.id,
                    is_gift: !0,
                }),
                j.A.launchGame(R.id));
        }, [v, i.id, R?.id]),
        J = n.useMemo(
            () => ({ isLaunchable: w, isLaunchableLoading: B, isApplicationConnected: K, handleLaunchGame: Y }),
            [w, B, K, Y],
        );
    n.useEffect(() => {
        r.redeemed &&
            "LINK" === m.state &&
            k({ state: "ERROR", error: new l.Wl(H.intl.string(H.t.Iw2TUW), F.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [r, m.state]);
    let X = n.useRef({
        analyticsLocations: v,
        giftCode: r,
        hasCustomMessage: null != u && "" !== u,
        customGiftMessage: u,
        skuProductLine: i.productLine,
        emojiName: d,
        soundId: _,
        skuId: i.id,
    });
    ((0, A.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = X.current;
        y.default.track(F.HAw.OPEN_MODAL, { location_stack: t, type: P.Nu, sku_id: e, application_id: R?.id });
    }),
        n.useEffect(() => {
            let {
                analyticsLocations: t,
                hasCustomMessage: e,
                customGiftMessage: i,
                giftCode: a,
                emojiName: n,
                soundId: s,
                skuProductLine: l,
            } = X.current;
            y.default.track(F.HAw.GIFT_ACCEPT_STEP, {
                to_step: m.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== H.intl.string(H.t.ZkOo1U),
                gift_style: a.giftStyle,
                gift_code: a.code,
                emoji_name: n,
                sound_id: s,
                product_line: l,
            });
        }, [m.state]));
    let Z = n.useCallback(async () => {
        let {
            analyticsLocations: t,
            skuId: e,
            hasCustomMessage: i,
            customGiftMessage: a,
            emojiName: n,
            soundId: s,
        } = X.current;
        y.default.track(F.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: R?.id,
            gift_code: r.code,
            gift_style: r.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && a !== H.intl.string(H.t.ZkOo1U),
            emoji_name: n,
            sound_id: s,
        });
        try {
            (I(!0), await C.A.redeemGiftCode({ code: r.code, options: { channelId: c } }), k({ state: "SUCCESS" }));
        } catch (t) {
            k({ state: "ERROR", error: t });
        } finally {
            I(!1);
        }
    }, [r, k, c, R?.id]);
    if (null == R) return null;
    switch (m.state) {
        case "LINK":
            return (0, a.jsx)(z, {
                sku: i,
                application: R,
                transitionState: e,
                onClose: o,
                successStateButtonText: H.intl.string(H.t.go1e4x),
                onSuccessButtonClick: Z,
                isSuccessButtonLoading: h,
                analyticsLocations: v,
                startAuthorizeResult: G,
                launchGameDetails: J,
            });
        case "SUCCESS":
            return (0, a.jsx)(V, {
                transitionState: e,
                application: R,
                sku: i,
                giftCode: r,
                customGiftMessage: u,
                onClose: o,
                analyticsLocations: v,
                emojiName: d,
                soundId: _,
                launchGameDetails: J,
            });
        case "ERROR":
            return (0, a.jsx)(W, {
                transitionState: e,
                onClose: o,
                error: m.error,
                application: R,
                hasAlreadyLinked: G.hasAlreadyLinked,
            });
        default:
            (0, D.xb)(m);
    }
}
function W(t) {
    let e,
        i,
        { transitionState: n, onClose: s, error: l, application: _, hasAlreadyLinked: p } = t,
        f = T.default.getCurrentUser();
    return (
        l.code === F.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = H.intl.string(H.t.uXnSGo)),
              (i = p
                  ? H.intl.formatToPlainString(H.t["TNRN/e"], { applicationName: _.name })
                  : H.intl.formatToPlainString(H.t.VkR30M, { applicationName: _.name })))
            : ((e = H.intl.string(H.t.dMYg1c)), (i = (0, O.eN)(l, f))),
        (0, a.jsxs)(o.d, {
            transitionState: n,
            onClose: s,
            "aria-label": e,
            children: [
                (0, a.jsx)(r.rQ, { title: e, alignCenter: !0 }),
                (0, a.jsx)(c.c, {
                    children: (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                }),
                (0, a.jsx)(d.H, {
                    actions: [{ variant: "primary", text: H.intl.string(H.t.WAI6xu), onClick: s }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
}
function z(t) {
    let e,
        {
            sku: i,
            application: s,
            transitionState: l,
            onClose: r,
            successStateButtonText: u,
            onSuccessButtonClick: d,
            isSuccessButtonLoading: m,
            analyticsLocations: C,
            startAuthorizeResult: A,
            launchGameDetails: k,
        } = t,
        {
            hasAlreadyLinked: x,
            canStartAuthorization: g,
            startAuthorization: S,
            fetched: E,
            shouldShowGoToGameHint: h,
        } = A,
        { isLaunchable: L, isLaunchableLoading: I, isApplicationConnected: R, handleLaunchGame: T } = k,
        N = n.useRef({ analyticsLocations: C, skuId: i.id, applicationId: s.id, canStartAuthorization: g });
    (n.useEffect(() => {
        N.current.canStartAuthorization = g;
    }, [g]),
        n.useEffect(() => {
            if (!E) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = N.current;
            y.default.track(F.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: x,
                can_start_authorization: a,
            });
        }, [E, x]));
    let j = n.useCallback(() => {
            let { analyticsLocations: t, skuId: e, applicationId: i } = N.current;
            (y.default.track(F.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
            }),
                S({ analyticsLocations: t }));
        }, [S]),
        O = n.useMemo(() => (0, G.x0)(s, { hasAlreadyLinked: x }), [s, x]);
    return !E || I
        ? (0, a.jsx)(o.d, {
              transitionState: l,
              onClose: r,
              children: (0, a.jsx)(c.c, {
                  children: (0, a.jsx)("div", { className: B.g4, children: (0, a.jsx)(_.y, {}) }),
              }),
          })
        : (x
              ? (e = { variant: "primary", text: u, onClick: d, loading: m })
              : g
                ? (e = { variant: "primary", text: H.intl.string(H.t["VDAhr+"]), onClick: j, icon: p.A })
                : L && !R && (e = { variant: "primary", text: H.intl.string(H.t["s+J8Dl"]), onClick: T, icon: f.t }),
          (0, a.jsx)(v.m, {
              sku: i,
              application: s,
              transitionState: l,
              onClose: r,
              hasAlreadyLinked: x,
              canStartAuthorization: g,
              shouldShowGoToGameHint: h,
              primaryCTAButtonProps: e,
              bodyText: O,
              title: H.intl.string(H.t["Bn1J+a"]),
          }));
}
function V(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: l,
            application: r,
            giftCode: p,
            customGiftMessage: C,
            analyticsLocations: A,
            emojiName: k,
            soundId: x,
            launchGameDetails: g,
        } = t,
        [S, E] = n.useState(null),
        { isLaunchable: h, isLaunchableLoading: L, isApplicationConnected: I, handleLaunchGame: R } = g,
        N = (0, s.bG)([T.default], () => T.default.getUser(p.userId)),
        j = M.Ay.getName(N),
        O = n.useRef({
            analyticsLocations: A,
            skuId: l.id,
            applicationId: r.id,
            isLaunchable: h,
            isApplicationConnected: I,
        });
    if (
        (n.useEffect(() => {
            ((O.current.isLaunchable = h), (O.current.isApplicationConnected = I));
        }, [h, I]),
        L)
    )
        return (0, a.jsx)(o.d, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(c.c, { children: (0, a.jsx)(_.y, {}) }),
        });
    let D =
        h && !I
            ? { variant: "primary", text: H.intl.string(H.t["s+J8Dl"]), onClick: R, icon: f.t }
            : {
                  variant: "primary",
                  text: H.intl.string(H.t.cpT0Cq),
                  onClick: () => {
                      (y.default.track(F.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: A,
                          sku_id: l.id,
                          application_id: r.id,
                          is_gift: !0,
                          is_launchable: h ?? !1,
                          is_application_connected: I,
                      }),
                          i());
                  },
              };
    return (0, a.jsxs)(o.d, {
        transitionState: e,
        onClose: i,
        children: [
            (0, a.jsx)("div", { style: { position: "absolute", top: "-100px" }, ref: (t) => E(t) }),
            (0, a.jsx)(w.z, { sku: l }),
            (0, a.jsxs)(c.c, {
                children: [
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: B.j7,
                        children: H.intl.formatToPlainString(H.t["6yrIzU"], { sender: j }),
                    }),
                    null != C &&
                        "" !== C &&
                        (0, a.jsx)(u.E, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: B.pt,
                            children: C,
                        }),
                    (0, a.jsx)("div", {
                        className: B.S3,
                        children: (0, a.jsx)(m.w, {
                            type: "success",
                            children: H.intl.formatToPlainString(H.t.W2znvX, {
                                skuName: l.name,
                                applicationName: r.name,
                            }),
                        }),
                    }),
                    null != S && (0, a.jsx)(X, { confettiTarget: S, emojiName: k }),
                    null != x && (0, a.jsx)(Y, { soundId: x }),
                ],
            }),
            (0, a.jsx)(d.H, { actions: [D], actionsFullWidth: !0 }),
        ],
    });
}
function Y(t) {
    let { soundId: e } = t;
    return (
        n.useEffect(() => {
            let t = R.A.getSoundById(e);
            (0, I.playGiftSound)(e, t?.volume ?? 1);
        }, [e]),
        null
    );
}
let J = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    X = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            l = (0, s.bG)([k.Ay], () => k.Ay.useReducedMotion),
            o = n.useRef(e),
            [r, c] = n.useState(!0),
            u = n.useCallback(() => {
                c(!1);
            }, []);
        if (l || !r) return null;
        let d = null != i ? N.Ay.getURL(i) : void 0;
        return (0, a.jsx)(h.A, {
            confettiTarget: o.current,
            emojiURL: d,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: J,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
