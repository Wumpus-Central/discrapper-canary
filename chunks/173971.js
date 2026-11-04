var a = i(477900),
    n = i(582128),
    s = i(855986),
    l = i(620632),
    o = i(224640),
    r = i(20742),
    c = i(430993),
    u = i(834730),
    d = i(696208),
    _ = i(289873),
    p = i(141628),
    m = i(811893),
    f = i(683071),
    C = i(75255),
    A = i(964486),
    g = i(775602),
    k = i(793574),
    S = i(688810),
    x = i(724302),
    E = i(587895),
    h = i(518926),
    L = i(928550),
    y = i(946261),
    I = i(209932),
    R = i(287809),
    T = i(129230),
    N = i(690521),
    j = i(292702),
    O = i(45938),
    b = i(403362),
    D = i(427262),
    M = i(690493),
    G = i(118982),
    v = i(383089),
    w = i(41032),
    U = i(832275),
    P = i(188275),
    F = i(652215),
    H = i(792996),
    B = i(84729);
function K(t) {
    let e,
        i,
        { transitionState: n, onClose: s, error: l, application: _, hasAlreadyLinked: p } = t,
        m = R.default.getCurrentUser();
    return (
        l.code === F.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = H.intl.string(H.t.uXnSGo)),
              (i = p
                  ? H.intl.formatToPlainString(H.t["TNRN/e"], { applicationName: _.name })
                  : H.intl.formatToPlainString(H.t.VkR30M, { applicationName: _.name })))
            : ((e = H.intl.string(H.t.dMYg1c)), (i = (0, O.eN)(l, m))),
        (0, a.jsxs)(o.d, {
            transitionState: n,
            onClose: s,
            "aria-label": e,
            children: [
                (0, a.jsx)(r.rQ, { title: e, alignCenter: !0 }),
                (0, a.jsx)(c.c, {
                    children: (0, a.jsx)(u.E, { variant: "body-md/normal", color: "text-subtle", children: i }),
                }),
                (0, a.jsx)(d.H, {
                    actions: [{ variant: "primary", text: H.intl.string(H.t.WAI6xu), onClick: s }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
}
function W(t) {
    let e,
        {
            sku: i,
            application: s,
            transitionState: l,
            onClose: r,
            successStateButtonText: u,
            onSuccessButtonClick: d,
            isSuccessButtonLoading: f,
            analyticsLocations: C,
            startAuthorizeResult: A,
            launchGameDetails: g,
        } = t,
        {
            hasAlreadyLinked: k,
            canStartAuthorization: S,
            startAuthorization: x,
            fetched: E,
            shouldShowGoToGameHint: h,
        } = A,
        { isLaunchable: L, isLaunchableLoading: y, isApplicationConnected: I, handleLaunchGame: R } = g,
        N = n.useRef({ analyticsLocations: C, skuId: i.id, applicationId: s.id, canStartAuthorization: S });
    (n.useEffect(() => {
        N.current.canStartAuthorization = S;
    }, [S]),
        n.useEffect(() => {
            if (!E) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = N.current;
            T.default.track(F.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: k,
                can_start_authorization: a,
            });
        }, [E, k]));
    let j = n.useCallback(() => {
            let { analyticsLocations: t, skuId: e, applicationId: i } = N.current;
            (T.default.track(F.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
            }),
                x({ analyticsLocations: t }));
        }, [x]),
        O = n.useMemo(() => (0, G.x0)(s, { hasAlreadyLinked: k }), [s, k]);
    return !E || y
        ? (0, a.jsx)(o.d, {
              transitionState: l,
              onClose: r,
              children: (0, a.jsx)(c.c, {
                  children: (0, a.jsx)("div", { className: B.g4, children: (0, a.jsx)(_.y, {}) }),
              }),
          })
        : (k
              ? (e = { variant: "primary", text: u, onClick: d, loading: f })
              : S
                ? (e = { variant: "primary", text: H.intl.string(H.t["VDAhr+"]), onClick: j, icon: p.A })
                : L && !I && (e = { variant: "primary", text: H.intl.string(H.t["s+J8Dl"]), onClick: R, icon: m.t }),
          (0, a.jsx)(v.m, {
              sku: i,
              application: s,
              transitionState: l,
              onClose: r,
              hasAlreadyLinked: k,
              canStartAuthorization: S,
              shouldShowGoToGameHint: h,
              primaryCTAButtonProps: e,
              bodyText: O,
              title: H.intl.string(H.t["Bn1J+a"]),
          }));
}
function z(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: l,
            application: r,
            giftCode: p,
            customGiftMessage: C,
            analyticsLocations: A,
            emojiName: g,
            soundId: k,
            launchGameDetails: S,
        } = t,
        [x, E] = n.useState(null),
        { isLaunchable: h, isLaunchableLoading: L, isApplicationConnected: y, handleLaunchGame: I } = S,
        N = (0, s.bG)([R.default], () => R.default.getUser(p.userId)),
        j = D.Ay.getName(N),
        O = n.useRef({
            analyticsLocations: A,
            skuId: l.id,
            applicationId: r.id,
            isLaunchable: h,
            isApplicationConnected: y,
        });
    if (
        (n.useEffect(() => {
            ((O.current.isLaunchable = h), (O.current.isApplicationConnected = y));
        }, [h, y]),
        L)
    )
        return (0, a.jsx)(o.d, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(c.c, { children: (0, a.jsx)(_.y, {}) }),
        });
    let b =
        h && !y
            ? { variant: "primary", text: H.intl.string(H.t["s+J8Dl"]), onClick: I, icon: m.t }
            : {
                  variant: "primary",
                  text: H.intl.string(H.t.cpT0Cq),
                  onClick: () => {
                      (T.default.track(F.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: A,
                          sku_id: l.id,
                          application_id: r.id,
                          is_gift: !0,
                          is_launchable: h ?? !1,
                          is_application_connected: y,
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
                        variant: "body-md/normal",
                        color: "text-subtle",
                        className: B.j7,
                        children: H.intl.formatToPlainString(H.t["6yrIzU"], { sender: j }),
                    }),
                    null != C &&
                        "" !== C &&
                        (0, a.jsx)(u.E, {
                            variant: "body-lg/semibold",
                            color: "text-subtle",
                            className: B.pt,
                            children: C,
                        }),
                    (0, a.jsx)("div", {
                        className: B.S3,
                        children: (0, a.jsx)(f.w, {
                            type: "success",
                            message: H.intl.formatToPlainString(H.t.W2znvX, {
                                skuName: l.name,
                                applicationName: r.name,
                            }),
                            role: "none",
                        }),
                    }),
                    null != x && (0, a.jsx)(J, { confettiTarget: x, emojiName: g }),
                    null != k && (0, a.jsx)(V, { soundId: k }),
                ],
            }),
            (0, a.jsx)(d.H, { actions: [b], actionsFullWidth: !0 }),
        ],
    });
}
function V(t) {
    let { soundId: e } = t;
    return (
        n.useEffect(() => {
            let t = I.A.getSoundById(e);
            (0, y.C)(e, t?.volume ?? 1);
        }, [e]),
        null
    );
}
let Y = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    J = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            l = (0, s.bG)([g.Ay], () => g.Ay.useReducedMotion),
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
            speedValues: Y,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
i.d(
    e,
    {},
    {
        default: function (t) {
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
                    onSetIgnoreCloseRequest: m,
                } = t,
                [f, g] = n.useState({ state: "LINK" }),
                [h, y] = n.useState(!1),
                I = (0, s.bG)([E.A], () => E.A.getApplication(i.applicationId)),
                { startAuthorization: R, ...N } = (0, x.RD)(I),
                { startAuthorization: O, shouldShowGoToGameHint: D } = (0, U.W)(R, { onSetIgnoreCloseRequest: m }),
                G = { startAuthorization: O, shouldShowGoToGameHint: D, ...N },
                { analyticsLocations: v } = (0, S.Ay)(p ?? [], k.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL),
                [w, B] = (0, L.L_)(I?.id),
                V = (0, M.J)(I),
                Y = n.useCallback(() => {
                    I?.id != null &&
                        (T.default.track(F.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                            location_stack: v,
                            sku_id: i.id,
                            application_id: I.id,
                            is_gift: !0,
                        }),
                        j.A.launchGame(I.id));
                }, [v, i.id, I?.id]),
                J = n.useMemo(
                    () => ({ isLaunchable: w, isLaunchableLoading: B, isApplicationConnected: V, handleLaunchGame: Y }),
                    [w, B, V, Y],
                );
            n.useEffect(() => {
                r.redeemed &&
                    "LINK" === f.state &&
                    g({
                        state: "ERROR",
                        error: new l.Wl(H.intl.string(H.t.Iw2TUW), F.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED),
                    });
            }, [r, f.state]);
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
                T.default.track(F.HAw.OPEN_MODAL, { location_stack: t, type: P.Nu, sku_id: e, application_id: I?.id });
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
                    T.default.track(F.HAw.GIFT_ACCEPT_STEP, {
                        to_step: f.state,
                        location_stack: t,
                        has_custom_message: e,
                        is_custom_message_edited: e && i !== H.intl.string(H.t.ZkOo1U),
                        gift_style: a.giftStyle,
                        gift_code: a.code,
                        emoji_name: n,
                        sound_id: s,
                        product_line: l,
                    });
                }, [f.state]));
            let Z = n.useCallback(async () => {
                let {
                    analyticsLocations: t,
                    skuId: e,
                    hasCustomMessage: i,
                    customGiftMessage: a,
                    emojiName: n,
                    soundId: s,
                } = X.current;
                T.default.track(F.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
                    location_stack: t,
                    sku_id: e,
                    application_id: I?.id,
                    gift_code: r.code,
                    gift_style: r.giftStyle?.toString() ?? null,
                    has_custom_message: i,
                    is_custom_message_edited: i && a !== H.intl.string(H.t.ZkOo1U),
                    emoji_name: n,
                    sound_id: s,
                });
                try {
                    (y(!0),
                        await C.A.redeemGiftCode({ code: r.code, options: { channelId: c } }),
                        g({ state: "SUCCESS" }));
                } catch (t) {
                    g({ state: "ERROR", error: t });
                } finally {
                    y(!1);
                }
            }, [r, g, c, I?.id]);
            if (null == I) return null;
            switch (f.state) {
                case "LINK":
                    return (0, a.jsx)(W, {
                        sku: i,
                        application: I,
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
                    return (0, a.jsx)(z, {
                        transitionState: e,
                        application: I,
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
                    return (0, a.jsx)(K, {
                        transitionState: e,
                        onClose: o,
                        error: f.error,
                        application: I,
                        hasAlreadyLinked: G.hasAlreadyLinked,
                    });
                default:
                    (0, b.xb)(f);
            }
        },
    },
);
