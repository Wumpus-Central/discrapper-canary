i.d(e, { default: () => B });
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
    x = i(775602),
    g = i(793574),
    k = i(688810),
    S = i(46225),
    E = i(587895),
    I = i(518926),
    L = i(928550),
    h = i(946261),
    R = i(209932),
    T = i(287809),
    y = i(174459),
    N = i(690521),
    j = i(738533),
    O = i(45938),
    b = i(403362),
    D = i(427262),
    M = i(690493),
    v = i(578942),
    U = i(383089),
    w = i(41032),
    G = i(188275),
    P = i(652215),
    F = i(375708),
    H = i(719938);
function B(t) {
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
        [x, I] = n.useState(!1),
        L = (0, p.bG)([E.A], () => E.A.getApplication(i.applicationId)),
        h = (0, S.RD)(L),
        { analyticsLocations: R } = (0, k.Ay)(d ?? [], g.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    n.useEffect(() => {
        l.redeemed &&
            "LINK" === _.state &&
            m({ state: "ERROR", error: new f.Wl(F.intl.string(F.t.Iw2TUW), P.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [l, _.state]);
    let T = n.useRef({
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
        let { analyticsLocations: t, skuId: e } = T.current;
        y.default.track(P.HAw.OPEN_MODAL, { location_stack: t, type: G.Nu, sku_id: e, application_id: L?.id });
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
            } = T.current;
            y.default.track(P.HAw.GIFT_ACCEPT_STEP, {
                to_step: _.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== F.intl.string(F.t.ZkOo1U),
                gift_style: a.giftStyle,
                gift_code: a.code,
                emoji_name: n,
                sound_id: s,
                product_line: l,
            });
        }, [_.state]);
    let N = n.useCallback(async () => {
        let {
            analyticsLocations: t,
            skuId: e,
            hasCustomMessage: i,
            customGiftMessage: a,
            emojiName: n,
            soundId: s,
        } = T.current;
        y.default.track(P.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: L?.id,
            gift_code: l.code,
            gift_style: l.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && a !== F.intl.string(F.t.ZkOo1U),
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
    }, [l, m, r, L?.id]);
    if (null == L) return null;
    switch (_.state) {
        case "LINK":
            return (0, a.jsx)(W, {
                sku: i,
                application: L,
                transitionState: e,
                onClose: s,
                successStateButtonText: F.intl.string(F.t.go1e4x),
                onSuccessButtonClick: N,
                isSuccessButtonLoading: x,
                analyticsLocations: R,
                startAuthorizeResult: h,
            });
        case "SUCCESS":
            return (0, a.jsx)(z, {
                transitionState: e,
                application: L,
                sku: i,
                giftCode: l,
                customGiftMessage: o,
                onClose: s,
                analyticsLocations: R,
                emojiName: c,
                soundId: u,
            });
        case "ERROR":
            return (0, a.jsx)(K, {
                transitionState: e,
                onClose: s,
                error: _.error,
                application: L,
                hasAlreadyLinked: h.hasAlreadyLinked,
            });
        default:
            (0, b.xb)(_);
    }
}
let K = (t) => {
    let e,
        i,
        { transitionState: n, onClose: u, error: d, application: _, hasAlreadyLinked: p } = t,
        f = T.default.getCurrentUser();
    return (
        d.code === P.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = F.intl.string(F.t.uXnSGo)),
              (i = p
                  ? F.intl.formatToPlainString(F.t["TNRN/e"], { applicationName: _.name })
                  : F.intl.formatToPlainString(F.t.VkR30M, { applicationName: _.name })))
            : ((e = F.intl.string(F.t.dMYg1c)), (i = (0, O.eN)(d, f))),
        (0, a.jsxs)(s.d, {
            transitionState: n,
            onClose: u,
            "aria-label": e,
            children: [
                (0, a.jsx)(l.rQ, { title: e, alignCenter: !0 }),
                (0, a.jsx)(r.c, {
                    children: (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                }),
                (0, a.jsx)(c.H, {
                    actions: [{ variant: "primary", text: F.intl.string(F.t.WAI6xu), onClick: u }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
};
function W(t) {
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
        { hasAlreadyLinked: A, canStartAuthorization: C, startAuthorization: x, fetched: g } = f,
        k = n.useRef({ analyticsLocations: p, skuId: e.id, applicationId: i.id, canStartAuthorization: C });
    n.useEffect(() => {
        k.current.canStartAuthorization = C;
    }, [C]),
        n.useEffect(() => {
            if (!g) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = k.current;
            y.default.track(P.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: A,
                can_start_authorization: a,
            });
        }, [g, A]);
    let S = n.useCallback(() => {
            let { analyticsLocations: t, skuId: e, applicationId: i } = k.current;
            y.default.track(P.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
            }),
                x({ analyticsLocations: t });
        }, [x]),
        E = n.useMemo(() => (0, v.x0)(i, { hasAlreadyLinked: A }), [i, A]);
    if (!g)
        return (0, a.jsx)(s.d, {
            transitionState: l,
            onClose: o,
            children: (0, a.jsx)(r.c, {
                children: (0, a.jsx)("div", { className: H.g4, children: (0, a.jsx)(m.y, {}) }),
            }),
        });
    let I = A
        ? { variant: "primary", text: c, onClick: d, loading: _ }
        : { variant: "primary", text: F.intl.string(F.t["VDAhr+"]), onClick: S, icon: u.A, disabled: !C };
    return (0, a.jsx)(U.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: o,
        hasAlreadyLinked: A,
        canStartAuthorization: C,
        primaryCTAButtonProps: I,
        bodyText: E,
        title: F.intl.string(F.t["Bn1J+a"]),
    });
}
function z(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: l,
            application: u,
            giftCode: f,
            customGiftMessage: A,
            analyticsLocations: C,
            emojiName: x,
            soundId: g,
        } = t,
        [k, S] = (0, L.L)(u?.id),
        E = (0, M.J)(u),
        [I, h] = n.useState(null),
        R = (0, p.bG)([T.default], () => T.default.getUser(f.userId)),
        N = D.Ay.getName(R),
        O = n.useRef({
            analyticsLocations: C,
            skuId: l.id,
            applicationId: u.id,
            isLaunchable: k,
            isApplicationConnected: E,
        });
    if (
        (n.useEffect(() => {
            (O.current.isLaunchable = k), (O.current.isApplicationConnected = E);
        }, [k, E]),
        S)
    )
        return (0, a.jsx)(s.d, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(r.c, { children: (0, a.jsx)(m.y, {}) }),
        });
    let b =
        k && !E
            ? {
                  variant: "primary",
                  text: F.intl.string(F.t["s+J8Dl"]),
                  onClick: () => {
                      y.default.track(P.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
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
                  text: F.intl.string(F.t.cpT0Cq),
                  onClick: () => {
                      y.default.track(P.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: C,
                          sku_id: l.id,
                          application_id: u.id,
                          is_gift: !0,
                          is_launchable: k ?? !1,
                          is_application_connected: E,
                      }),
                          i();
                  },
              };
    return (0, a.jsxs)(s.d, {
        transitionState: e,
        onClose: i,
        children: [
            (0, a.jsx)("div", { style: { position: "absolute", top: "-100px" }, ref: (t) => h(t) }),
            (0, a.jsx)(w.z, { sku: l }),
            (0, a.jsxs)(r.c, {
                children: [
                    (0, a.jsx)(o.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: H.j7,
                        children: F.intl.formatToPlainString(F.t["6yrIzU"], { sender: N }),
                    }),
                    null != A &&
                        "" !== A &&
                        (0, a.jsx)(o.E, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: H.pt,
                            children: A,
                        }),
                    (0, a.jsx)("div", {
                        className: H.S3,
                        children: (0, a.jsx)(_.w, {
                            type: "success",
                            children: F.intl.formatToPlainString(F.t.W2znvX, {
                                skuName: l.name,
                                applicationName: u.name,
                            }),
                        }),
                    }),
                    null != I && (0, a.jsx)(J, { confettiTarget: I, emojiName: x }),
                    null != g && (0, a.jsx)(V, { soundId: g }),
                ],
            }),
            (0, a.jsx)(c.H, { actions: [b], actionsFullWidth: !0 }),
        ],
    });
}
let V = (t) => {
        let { soundId: e } = t;
        return (
            n.useEffect(() => {
                let t = R.A.getSoundById(e);
                (0, h.playGiftSound)(e, t?.volume ?? 1);
            }, [e]),
            null
        );
    },
    Y = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    J = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, p.bG)([x.Ay], () => x.Ay.useReducedMotion),
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
            speedValues: Y,
            dragCoefficientValue: 1,
            onAnimationEnd: c,
        });
    };
