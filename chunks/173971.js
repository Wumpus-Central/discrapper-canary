i.d(e, { default: () => H });
var a = i(627968),
    n = i(64700),
    s = i(224640),
    l = i(20742),
    r = i(430993),
    o = i(834730),
    c = i(696208),
    u = i(141628),
    d = i(811893),
    _ = i(683071),
    p = i(17928),
    f = i(636537),
    m = i(289873),
    A = i(75255),
    C = i(964486),
    S = i(775602),
    g = i(793574),
    k = i(688810),
    x = i(46225),
    E = i(587895),
    I = i(518926),
    h = i(946261),
    L = i(209932),
    R = i(287809),
    T = i(954571),
    N = i(690521),
    j = i(738533),
    y = i(45938),
    O = i(403362),
    D = i(427262),
    b = i(690493),
    M = i(844815),
    v = i(383089),
    U = i(41032),
    w = i(188275),
    G = i(652215),
    P = i(985018),
    F = i(719938);
function H(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: l,
            channelContext: r,
            customGiftMessage: o,
            emojiName: c,
            soundId: u,
            analyticsLocations: d,
        } = t,
        [_, m] = n.useState({ state: "LINK" }),
        [S, I] = n.useState(!1),
        h = (0, p.bG)([E.A], () => E.A.getApplication(i.applicationId)),
        L = (0, x.RD)(h),
        { analyticsLocations: R } = (0, k.Ay)(d ?? [], g.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    n.useEffect(() => {
        l.redeemed &&
            "LINK" === _.state &&
            m({ state: "ERROR", error: new f.Wl(P.intl.string(P.t.Iw2TUW), G.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [l, _.state]);
    let N = n.useRef({
        analyticsLocations: R,
        giftCode: l,
        hasCustomMessage: null != o && "" !== o,
        customGiftMessage: o,
        skuProductLine: i.productLine,
        emojiName: c,
        soundId: u,
        skuId: i.id,
    });
    (0, C.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = N.current;
        T.default.track(G.HAw.OPEN_MODAL, { location_stack: t, type: w.Nu, sku_id: e, application_id: h?.id });
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
            } = N.current;
            T.default.track(G.HAw.GIFT_ACCEPT_STEP, {
                to_step: _.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== P.intl.string(P.t.ZkOo1U),
                gift_style: a.giftStyle,
                gift_code: a.code,
                emoji_name: n,
                sound_id: s,
                product_line: l,
            });
        }, [_.state]);
    let j = n.useCallback(async () => {
        let {
            analyticsLocations: t,
            skuId: e,
            hasCustomMessage: i,
            customGiftMessage: a,
            emojiName: n,
            soundId: s,
        } = N.current;
        T.default.track(G.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: h?.id,
            gift_code: l.code,
            gift_style: l.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && a !== P.intl.string(P.t.ZkOo1U),
            emoji_name: n,
            sound_id: s,
        });
        try {
            I(!0), await A.A.redeemGiftCode({ code: l.code, options: { channelId: r } }), m({ state: "SUCCESS" });
        } catch (t) {
            m({ state: "ERROR", error: t });
        } finally {
            I(!1);
        }
    }, [l, m, r, h?.id]);
    if (null == h) return null;
    switch (_.state) {
        case "LINK":
            return (0, a.jsx)(K, {
                sku: i,
                application: h,
                transitionState: e,
                onClose: s,
                successStateButtonText: P.intl.string(P.t.go1e4x),
                onSuccessButtonClick: j,
                isSuccessButtonLoading: S,
                analyticsLocations: R,
                startAuthorizeResult: L,
            });
        case "SUCCESS":
            return (0, a.jsx)(W, {
                transitionState: e,
                application: h,
                sku: i,
                giftCode: l,
                customGiftMessage: o,
                onClose: s,
                analyticsLocations: R,
                emojiName: c,
                soundId: u,
            });
        case "ERROR":
            return (0, a.jsx)(B, {
                transitionState: e,
                onClose: s,
                error: _.error,
                application: h,
                hasAlreadyLinked: L.hasAlreadyLinked,
            });
        default:
            (0, O.xb)(_);
    }
}
let B = (t) => {
    let e,
        i,
        { transitionState: n, onClose: u, error: d, application: _, hasAlreadyLinked: p } = t,
        f = R.default.getCurrentUser();
    return (
        d.code === G.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = P.intl.string(P.t.uXnSGo)),
              (i = p
                  ? P.intl.formatToPlainString(P.t["TNRN/e"], { applicationName: _.name })
                  : P.intl.formatToPlainString(P.t.VkR30M, { applicationName: _.name })))
            : ((e = P.intl.string(P.t.dMYg1c)), (i = (0, y.eN)(d, f))),
        (0, a.jsxs)(s.d, {
            transitionState: n,
            onClose: u,
            children: [
                (0, a.jsx)(l.rQ, { title: e, alignCenter: !0 }),
                (0, a.jsx)(r.c, {
                    children: (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                }),
                (0, a.jsx)(c.H, {
                    actions: [{ variant: "primary", text: P.intl.string(P.t.WAI6xu), onClick: u }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
};
function K(t) {
    let {
            sku: e,
            application: i,
            transitionState: l,
            onClose: o,
            successStateButtonText: c,
            onSuccessButtonClick: d,
            isSuccessButtonLoading: _,
            analyticsLocations: p,
            startAuthorizeResult: f,
        } = t,
        { hasAlreadyLinked: A, canStartAuthorization: C, startAuthorization: S, fetched: g } = f,
        k = n.useRef({ analyticsLocations: p, skuId: e.id, applicationId: i.id, canStartAuthorization: C });
    n.useEffect(() => {
        k.current.canStartAuthorization = C;
    }, [C]),
        n.useEffect(() => {
            if (!g) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = k.current;
            T.default.track(G.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: A,
                can_start_authorization: a,
            });
        }, [g, A]);
    let x = n.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: i } = k.current;
        T.default.track(G.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
        }),
            S({ analyticsLocations: t });
    }, [S]);
    if (!g)
        return (0, a.jsx)(s.d, {
            transitionState: l,
            onClose: o,
            children: (0, a.jsx)(r.c, {
                children: (0, a.jsx)("div", { className: F.g4, children: (0, a.jsx)(m.y, {}) }),
            }),
        });
    let E = A
            ? { variant: "primary", text: c, onClick: d, loading: _ }
            : { variant: "primary", text: P.intl.string(P.t["VDAhr+"]), onClick: x, icon: u.A, disabled: !C },
        I = A ? P.t["v+0ifS"] : P.t.csmSk4;
    return (0, a.jsx)(v.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: o,
        hasAlreadyLinked: A,
        canStartAuthorization: C,
        primaryCTAButtonProps: E,
        bodyText: P.intl.formatToPlainString(I, { applicationName: i.name }),
        title: P.intl.string(P.t["Bn1J+a"]),
    });
}
function W(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: l,
            application: u,
            giftCode: f,
            customGiftMessage: A,
            analyticsLocations: C,
            emojiName: S,
            soundId: g,
        } = t,
        k = (0, M.j)(u),
        x = (0, b.J)(u),
        [E, I] = n.useState(null),
        h = (0, p.bG)([R.default], () => R.default.getUser(f.userId)),
        L = D.Ay.getName(h),
        N = n.useRef({
            analyticsLocations: C,
            skuId: l.id,
            applicationId: u.id,
            isLaunchable: k,
            isApplicationConnected: x,
        });
    if (
        (n.useEffect(() => {
            (N.current.isLaunchable = k), (N.current.isApplicationConnected = x);
        }, [k, x]),
        null == k)
    )
        return (0, a.jsx)(s.d, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(r.c, { children: (0, a.jsx)(m.y, {}) }),
        });
    let y =
        k && !x
            ? {
                  variant: "primary",
                  text: P.intl.string(P.t["s+J8Dl"]),
                  onClick: () => {
                      T.default.track(G.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: C,
                          sku_id: l.id,
                          application_id: u.id,
                          is_gift: !0,
                      }),
                          j.A.launchGame(u.id);
                  },
                  icon: d.t,
              }
            : {
                  variant: "primary",
                  text: P.intl.string(P.t.cpT0Cq),
                  onClick: () => {
                      T.default.track(G.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: C,
                          sku_id: l.id,
                          application_id: u.id,
                          is_gift: !0,
                          is_launchable: k ?? !1,
                          is_application_connected: x,
                      }),
                          i();
                  },
              };
    return (0, a.jsxs)(s.d, {
        transitionState: e,
        onClose: i,
        children: [
            (0, a.jsx)("div", { style: { position: "absolute", top: "-100px" }, ref: (t) => I(t) }),
            (0, a.jsx)(U.z, { sku: l }),
            (0, a.jsxs)(r.c, {
                children: [
                    (0, a.jsx)(o.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: F.j7,
                        children: P.intl.formatToPlainString(P.t["6yrIzU"], { sender: L }),
                    }),
                    null != A &&
                        "" !== A &&
                        (0, a.jsx)(o.E, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: F.pt,
                            children: A,
                        }),
                    (0, a.jsx)("div", {
                        className: F.S3,
                        children: (0, a.jsx)(_.w, {
                            type: "success",
                            children: P.intl.formatToPlainString(P.t.W2znvX, {
                                skuName: l.name,
                                applicationName: u.name,
                            }),
                        }),
                    }),
                    null != E && (0, a.jsx)(Y, { confettiTarget: E, emojiName: S }),
                    null != g && (0, a.jsx)(z, { soundId: g }),
                ],
            }),
            (0, a.jsx)(c.H, { actions: [y], actionsFullWidth: !0 }),
        ],
    });
}
let z = (t) => {
        let { soundId: e } = t;
        return (
            n.useEffect(() => {
                let t = L.A.getSoundById(e);
                (0, h.playGiftSound)(e, t?.volume ?? 1);
            }, [e]),
            null
        );
    },
    V = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    Y = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, p.bG)([S.A], () => S.A.useReducedMotion),
            l = n.useRef(e),
            [r, o] = n.useState(!0),
            c = n.useCallback(() => {
                o(!1);
            }, []);
        if (s || !r) return null;
        let u = null != i ? N.Ay.getURL(i) : void 0;
        return (0, a.jsx)(I.A, {
            confettiTarget: l.current,
            emojiURL: u,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: V,
            dragCoefficientValue: 1,
            onAnimationEnd: c,
        });
    };
