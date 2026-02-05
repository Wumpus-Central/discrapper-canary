i.d(e, { default: () => D });
var a = i(627968),
    n = i(64700),
    s = i(158954),
    l = i(311907),
    r = i(562465),
    c = i(397927),
    o = i(75255),
    d = i(964486),
    u = i(775602),
    _ = i(793574),
    x = i(688810),
    m = i(362490),
    f = i(587895),
    p = i(518926),
    g = i(946261),
    j = i(209932),
    C = i(287809),
    A = i(954571),
    S = i(690521),
    h = i(25171),
    k = i(45938),
    T = i(403362),
    E = i(427262),
    N = i(938289),
    I = i(690493),
    L = i(844815),
    y = i(383089),
    R = i(41032),
    b = i(188275),
    v = i(652215),
    O = i(985018),
    w = i(836263);
function D(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: c,
            channelContext: u,
            customGiftMessage: p,
            emojiName: g,
            soundId: j,
            analyticsLocations: C,
        } = t,
        [S, h] = n.useState({ state: "LINK" }),
        [k, E] = n.useState(!1),
        N = (0, l.bG)([f.A], () => f.A.getApplication(i.applicationId)),
        I = (0, m.RD)(N),
        { analyticsLocations: L } = (0, x.Ay)(C ?? [], _.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    n.useEffect(() => {
        c.redeemed &&
            "LINK" === S.state &&
            h({ state: "ERROR", error: new r.Wl(O.intl.string(O.t.Iw2TUW), v.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [c, S.state]);
    let y = n.useRef({
        analyticsLocations: L,
        giftCode: c,
        hasCustomMessage: null != p && "" !== p,
        customGiftMessage: p,
        skuProductLine: i.productLine,
        emojiName: g,
        soundId: j,
        skuId: i.id,
    });
    (0, d.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = y.current;
        A.default.track(v.HAw.OPEN_MODAL, { location_stack: t, type: b.Nu, sku_id: e, application_id: N?.id });
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
            } = y.current;
            A.default.track(v.HAw.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== O.intl.string(O.t.ZkOo1U),
                gift_style: a.giftStyle,
                gift_code: a.code,
                emoji_name: n,
                sound_id: s,
                product_line: l,
            });
        }, [S.state]);
    let R = n.useCallback(async () => {
        let {
            analyticsLocations: t,
            skuId: e,
            hasCustomMessage: i,
            customGiftMessage: a,
            emojiName: n,
            soundId: s,
        } = y.current;
        A.default.track(v.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: N?.id,
            gift_code: c.code,
            gift_style: c.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && a !== O.intl.string(O.t.ZkOo1U),
            emoji_name: n,
            sound_id: s,
        });
        try {
            E(!0), await o.A.redeemGiftCode({ code: c.code, options: { channelId: u } }), h({ state: "SUCCESS" });
        } catch (t) {
            h({ state: "ERROR", error: t });
        } finally {
            E(!1);
        }
    }, [c, h, u, N?.id]);
    if (null == N) return null;
    switch (S.state) {
        case "LINK":
            return (0, a.jsx)(G, {
                sku: i,
                application: N,
                transitionState: e,
                onClose: s,
                successStateButtonText: O.intl.string(O.t.go1e4x),
                onSuccessButtonClick: R,
                isSuccessButtonLoading: k,
                analyticsLocations: L,
                startAuthorizeResult: I,
            });
        case "SUCCESS":
            return (0, a.jsx)(P, {
                transitionState: e,
                application: N,
                sku: i,
                giftCode: c,
                customGiftMessage: p,
                onClose: s,
                analyticsLocations: L,
                emojiName: g,
                soundId: j,
            });
        case "ERROR":
            return (0, a.jsx)(M, {
                transitionState: e,
                onClose: s,
                error: S.error,
                application: N,
                hasAlreadyLinked: I.hasAlreadyLinked,
            });
        default:
            (0, T.xb)(S);
    }
}
let M = (t) => {
    let e,
        i,
        { transitionState: n, onClose: l, error: r, application: c, hasAlreadyLinked: o } = t,
        d = C.default.getCurrentUser();
    return (
        r.code === v.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = O.intl.string(O.t.uXnSGo)),
              (i = o
                  ? O.intl.formatToPlainString(O.t["TNRN/e"], { applicationName: c.name })
                  : O.intl.formatToPlainString(O.t.VkR30M, { applicationName: c.name })))
            : ((e = O.intl.string(O.t.dMYg1c)), (i = (0, k.eN)(r, d))),
        (0, a.jsxs)(s.dWK, {
            transitionState: n,
            onClose: l,
            children: [
                (0, a.jsx)(s.rQ0, { title: e, alignCenter: !0 }),
                (0, a.jsx)(s.cwr, {
                    children: (0, a.jsx)(s.EYj, { variant: "text-md/normal", color: "text-subtle", children: i }),
                }),
                (0, a.jsx)(s.H7u, {
                    actions: [{ variant: "primary", text: O.intl.string(O.t.WAI6xu), onClick: l }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
};
function G(t) {
    let {
            sku: e,
            application: i,
            transitionState: l,
            onClose: r,
            successStateButtonText: o,
            onSuccessButtonClick: d,
            isSuccessButtonLoading: u,
            analyticsLocations: _,
            startAuthorizeResult: x,
        } = t,
        { hasAlreadyLinked: m, canStartAuthorization: f, startAuthorization: p, fetched: g } = x,
        j = (0, N.n)({ location: "SocialLayerStorefrontGiftCodeClaimModal" }),
        C = n.useRef({ analyticsLocations: _, skuId: e.id, applicationId: i.id, canStartAuthorization: f });
    n.useEffect(() => {
        C.current.canStartAuthorization = f;
    }, [f]),
        n.useEffect(() => {
            if (!g) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = C.current;
            A.default.track(v.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: m,
                can_start_authorization: a,
            });
        }, [g, m]);
    let S = n.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: i } = C.current;
        A.default.track(v.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
        }),
            p({ analyticsLocations: t });
    }, [p]);
    if (!g)
        return (0, a.jsx)(s.dWK, {
            transitionState: l,
            onClose: r,
            children: (0, a.jsx)(s.cwr, {
                children: (0, a.jsx)("div", { className: w.g4, children: (0, a.jsx)(c.y$y, {}) }),
            }),
        });
    let h = m
            ? { variant: "primary", text: o, onClick: d, loading: u }
            : { variant: "primary", text: O.intl.string(O.t["VDAhr+"]), onClick: S, icon: s.A5T, disabled: !f },
        k = j ? O.t["v+0ifS"] : O.t.sL5yz7,
        T = j ? O.t.csmSk4 : O.t.PaYE38,
        E = m ? k : T;
    return (0, a.jsx)(y.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        hasAlreadyLinked: m,
        canStartAuthorization: f,
        primaryCTAButtonProps: h,
        bodyText: O.intl.formatToPlainString(E, { applicationName: i.name }),
        title: O.intl.string(O.t["Bn1J+a"]),
    });
}
function P(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: r,
            application: o,
            giftCode: d,
            customGiftMessage: u,
            analyticsLocations: _,
            emojiName: x,
            soundId: m,
        } = t,
        f = (0, L.j)(o),
        p = (0, I.J)(o),
        [g, j] = n.useState(null),
        S = (0, l.bG)([C.default], () => C.default.getUser(d.userId)),
        k = E.Ay.getName(S),
        T = n.useRef({
            analyticsLocations: _,
            skuId: r.id,
            applicationId: o.id,
            isLaunchable: f,
            isApplicationConnected: p,
        });
    if (
        (n.useEffect(() => {
            (T.current.isLaunchable = f), (T.current.isApplicationConnected = p);
        }, [f, p]),
        null == f)
    )
        return (0, a.jsx)(s.dWK, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(s.cwr, { children: (0, a.jsx)(c.y$y, {}) }),
        });
    let N =
        f && !p
            ? {
                  variant: "primary",
                  text: O.intl.string(O.t["s+J8Dl"]),
                  onClick: () => {
                      A.default.track(v.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: _,
                          sku_id: r.id,
                          application_id: o.id,
                          is_gift: !0,
                      }),
                          h.A.launchGame(o.id);
                  },
                  icon: s.tfB,
              }
            : {
                  variant: "primary",
                  text: O.intl.string(O.t.cpT0Cq),
                  onClick: () => {
                      A.default.track(v.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: _,
                          sku_id: r.id,
                          application_id: o.id,
                          is_gift: !0,
                          is_launchable: f ?? !1,
                          is_application_connected: p,
                      }),
                          i();
                  },
              };
    return (0, a.jsxs)(s.dWK, {
        transitionState: e,
        onClose: i,
        children: [
            (0, a.jsx)("div", { style: { position: "absolute", top: "-100px" }, ref: (t) => j(t) }),
            (0, a.jsx)(R.z, { sku: r }),
            (0, a.jsxs)(s.cwr, {
                children: [
                    (0, a.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: w.j7,
                        children: O.intl.formatToPlainString(O.t["6yrIzU"], { sender: k }),
                    }),
                    null != u &&
                        "" !== u &&
                        (0, a.jsx)(s.EYj, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: w.pt,
                            children: u,
                        }),
                    (0, a.jsx)("div", {
                        className: w.S3,
                        children: (0, a.jsx)(s.wx6, {
                            type: "success",
                            children: O.intl.formatToPlainString(O.t.W2znvX, {
                                skuName: r.name,
                                applicationName: o.name,
                            }),
                        }),
                    }),
                    null != g && (0, a.jsx)(K, { confettiTarget: g, emojiName: x }),
                    null != m && (0, a.jsx)(W, { soundId: m }),
                ],
            }),
            (0, a.jsx)(s.H7u, { actions: [N], actionsFullWidth: !0 }),
        ],
    });
}
let W = (t) => {
        let { soundId: e } = t;
        return (
            n.useEffect(() => {
                let t = j.A.getSoundById(e);
                (0, g.playGiftSound)(e, t?.volume ?? 1);
            }, [e]),
            null
        );
    },
    U = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    K = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            r = n.useRef(e),
            [c, o] = n.useState(!0),
            d = n.useCallback(() => {
                o(!1);
            }, []);
        if (s || !c) return null;
        let _ = null != i ? S.Ay.getURL(i) : void 0;
        return (0, a.jsx)(p.A, {
            confettiTarget: r.current,
            emojiURL: _,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: U,
            dragCoefficientValue: 1,
            onAnimationEnd: d,
        });
    };
