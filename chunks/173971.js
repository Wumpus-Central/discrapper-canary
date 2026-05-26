i.d(e, { default: () => B });
var a = i(627968),
    n = i(64700),
    s = i(224640),
    l = i(20742),
    o = i(430993),
    r = i(834730),
    c = i(696208),
    u = i(141628),
    d = i(811893),
    _ = i(683071),
    p = i(17928),
    f = i(636537),
    m = i(289873),
    C = i(75255),
    A = i(964486),
    S = i(775602),
    x = i(793574),
    g = i(688810),
    k = i(46225),
    E = i(587895),
    L = i(518926),
    I = i(928550),
    h = i(946261),
    R = i(209932),
    T = i(287809),
    y = i(174459),
    N = i(690521),
    j = i(738533),
    O = i(45938),
    M = i(403362),
    b = i(427262),
    D = i(690493),
    v = i(987723),
    G = i(383089),
    U = i(41032),
    w = i(188275),
    P = i(652215),
    F = i(375708),
    H = i(719938);
function B(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: l,
            channelContext: o,
            customGiftMessage: r,
            emojiName: c,
            soundId: u,
            analyticsLocations: d,
        } = t,
        [_, m] = n.useState({ state: "LINK" }),
        [S, L] = n.useState(!1),
        I = (0, p.bG)([E.A], () => E.A.getApplication(i.applicationId)),
        h = (0, k.RD)(I),
        { analyticsLocations: R } = (0, g.Ay)(d ?? [], x.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    n.useEffect(() => {
        l.redeemed &&
            "LINK" === _.state &&
            m({ state: "ERROR", error: new f.Wl(F.intl.string(F.t.Iw2TUW), P.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [l, _.state]);
    let T = n.useRef({
        analyticsLocations: R,
        giftCode: l,
        hasCustomMessage: null != r && "" !== r,
        customGiftMessage: r,
        skuProductLine: i.productLine,
        emojiName: c,
        soundId: u,
        skuId: i.id,
    });
    (0, A.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = T.current;
        y.default.track(P.HAw.OPEN_MODAL, { location_stack: t, type: w.Nu, sku_id: e, application_id: I?.id });
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
            application_id: I?.id,
            gift_code: l.code,
            gift_style: l.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && a !== F.intl.string(F.t.ZkOo1U),
            emoji_name: n,
            sound_id: s,
        });
        try {
            L(!0), await C.A.redeemGiftCode({ code: l.code, options: { channelId: o } }), m({ state: "SUCCESS" });
        } catch (t) {
            m({ state: "ERROR", error: t });
        } finally {
            L(!1);
        }
    }, [l, m, o, I?.id]);
    if (null == I) return null;
    switch (_.state) {
        case "LINK":
            return (0, a.jsx)(W, {
                sku: i,
                application: I,
                transitionState: e,
                onClose: s,
                successStateButtonText: F.intl.string(F.t.go1e4x),
                onSuccessButtonClick: N,
                isSuccessButtonLoading: S,
                analyticsLocations: R,
                startAuthorizeResult: h,
            });
        case "SUCCESS":
            return (0, a.jsx)(z, {
                transitionState: e,
                application: I,
                sku: i,
                giftCode: l,
                customGiftMessage: r,
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
                application: I,
                hasAlreadyLinked: h.hasAlreadyLinked,
            });
        default:
            (0, M.xb)(_);
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
                (0, a.jsx)(o.c, {
                    children: (0, a.jsx)(r.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
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
            onClose: r,
            successStateButtonText: c,
            onSuccessButtonClick: d,
            isSuccessButtonLoading: _,
            analyticsLocations: p,
            startAuthorizeResult: f,
        } = t,
        { hasAlreadyLinked: C, canStartAuthorization: A, startAuthorization: S, fetched: x } = f,
        g = n.useRef({ analyticsLocations: p, skuId: e.id, applicationId: i.id, canStartAuthorization: A });
    n.useEffect(() => {
        g.current.canStartAuthorization = A;
    }, [A]),
        n.useEffect(() => {
            if (!x) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = g.current;
            y.default.track(P.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: C,
                can_start_authorization: a,
            });
        }, [x, C]);
    let k = n.useCallback(() => {
            let { analyticsLocations: t, skuId: e, applicationId: i } = g.current;
            y.default.track(P.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
            }),
                S({ analyticsLocations: t });
        }, [S]),
        E = n.useMemo(
            () => (0, v.x0)(i, { hasAlreadyLinked: C }, { location: "SocialLayerStorefrontGiftCodeClaimModal" }),
            [i, C],
        );
    if (!x)
        return (0, a.jsx)(s.d, {
            transitionState: l,
            onClose: r,
            children: (0, a.jsx)(o.c, {
                children: (0, a.jsx)("div", { className: H.g4, children: (0, a.jsx)(m.y, {}) }),
            }),
        });
    let L = C
        ? { variant: "primary", text: c, onClick: d, loading: _ }
        : { variant: "primary", text: F.intl.string(F.t["VDAhr+"]), onClick: k, icon: u.A, disabled: !A };
    return (0, a.jsx)(G.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        hasAlreadyLinked: C,
        canStartAuthorization: A,
        primaryCTAButtonProps: L,
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
            customGiftMessage: C,
            analyticsLocations: A,
            emojiName: S,
            soundId: x,
        } = t,
        [g, k] = (0, I.L)(u?.id),
        E = (0, D.J)(u),
        [L, h] = n.useState(null),
        R = (0, p.bG)([T.default], () => T.default.getUser(f.userId)),
        N = b.Ay.getName(R),
        O = n.useRef({
            analyticsLocations: A,
            skuId: l.id,
            applicationId: u.id,
            isLaunchable: g,
            isApplicationConnected: E,
        });
    if (
        (n.useEffect(() => {
            (O.current.isLaunchable = g), (O.current.isApplicationConnected = E);
        }, [g, E]),
        k)
    )
        return (0, a.jsx)(s.d, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(o.c, { children: (0, a.jsx)(m.y, {}) }),
        });
    let M =
        g && !E
            ? {
                  variant: "primary",
                  text: F.intl.string(F.t["s+J8Dl"]),
                  onClick: () => {
                      y.default.track(P.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: A,
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
                          location_stack: A,
                          sku_id: l.id,
                          application_id: u.id,
                          is_gift: !0,
                          is_launchable: g ?? !1,
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
            (0, a.jsx)(U.z, { sku: l }),
            (0, a.jsxs)(o.c, {
                children: [
                    (0, a.jsx)(r.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: H.j7,
                        children: F.intl.formatToPlainString(F.t["6yrIzU"], { sender: N }),
                    }),
                    null != C &&
                        "" !== C &&
                        (0, a.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: H.pt,
                            children: C,
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
                    null != L && (0, a.jsx)(J, { confettiTarget: L, emojiName: S }),
                    null != x && (0, a.jsx)(V, { soundId: x }),
                ],
            }),
            (0, a.jsx)(c.H, { actions: [M], actionsFullWidth: !0 }),
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
            s = (0, p.bG)([S.A], () => S.A.useReducedMotion),
            l = n.useRef(e),
            [o, r] = n.useState(!0),
            c = n.useCallback(() => {
                r(!1);
            }, []);
        if (s || !o) return null;
        let u = null != i ? N.Ay.getURL(i) : void 0;
        return (0, a.jsx)(L.A, {
            confettiTarget: l.current,
            emojiURL: u,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: Y,
            dragCoefficientValue: 1,
            onAnimationEnd: c,
        });
    };
