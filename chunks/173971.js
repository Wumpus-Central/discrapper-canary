i.d(e, { default: () => H });
var n = i(627968),
    a = i(64700),
    s = i(224640),
    l = i(20742),
    r = i(430993),
    c = i(834730),
    o = i(696208),
    d = i(141628),
    u = i(811893),
    _ = i(683071),
    x = i(311907),
    m = i(562465),
    p = i(289873),
    f = i(75255),
    g = i(964486),
    A = i(775602),
    C = i(793574),
    j = i(688810),
    S = i(362490),
    h = i(587895),
    k = i(518926),
    E = i(946261),
    N = i(209932),
    T = i(287809),
    I = i(954571),
    L = i(690521),
    R = i(25171),
    b = i(45938),
    y = i(403362),
    v = i(427262),
    O = i(690493),
    D = i(844815),
    M = i(383089),
    w = i(41032),
    G = i(188275),
    P = i(652215),
    U = i(985018),
    F = i(90114);
function H(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: l,
            channelContext: r,
            customGiftMessage: c,
            emojiName: o,
            soundId: d,
            analyticsLocations: u,
        } = t,
        [_, p] = a.useState({ state: "LINK" }),
        [A, k] = a.useState(!1),
        E = (0, x.bG)([h.A], () => h.A.getApplication(i.applicationId)),
        N = (0, S.RD)(E),
        { analyticsLocations: T } = (0, j.Ay)(u ?? [], C.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        l.redeemed &&
            "LINK" === _.state &&
            p({ state: "ERROR", error: new m.Wl(U.intl.string(U.t.Iw2TUW), P.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [l, _.state]);
    let L = a.useRef({
        analyticsLocations: T,
        giftCode: l,
        hasCustomMessage: null != c && "" !== c,
        customGiftMessage: c,
        skuProductLine: i.productLine,
        emojiName: o,
        soundId: d,
        skuId: i.id,
    });
    (0, g.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = L.current;
        I.default.track(P.HAw.OPEN_MODAL, { location_stack: t, type: G.Nu, sku_id: e, application_id: E?.id });
    }),
        a.useEffect(() => {
            let {
                analyticsLocations: t,
                hasCustomMessage: e,
                customGiftMessage: i,
                giftCode: n,
                emojiName: a,
                soundId: s,
                skuProductLine: l,
            } = L.current;
            I.default.track(P.HAw.GIFT_ACCEPT_STEP, {
                to_step: _.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== U.intl.string(U.t.ZkOo1U),
                gift_style: n.giftStyle,
                gift_code: n.code,
                emoji_name: a,
                sound_id: s,
                product_line: l,
            });
        }, [_.state]);
    let R = a.useCallback(async () => {
        let {
            analyticsLocations: t,
            skuId: e,
            hasCustomMessage: i,
            customGiftMessage: n,
            emojiName: a,
            soundId: s,
        } = L.current;
        I.default.track(P.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: E?.id,
            gift_code: l.code,
            gift_style: l.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && n !== U.intl.string(U.t.ZkOo1U),
            emoji_name: a,
            sound_id: s,
        });
        try {
            k(!0), await f.A.redeemGiftCode({ code: l.code, options: { channelId: r } }), p({ state: "SUCCESS" });
        } catch (t) {
            p({ state: "ERROR", error: t });
        } finally {
            k(!1);
        }
    }, [l, p, r, E?.id]);
    if (null == E) return null;
    switch (_.state) {
        case "LINK":
            return (0, n.jsx)(z, {
                sku: i,
                application: E,
                transitionState: e,
                onClose: s,
                successStateButtonText: U.intl.string(U.t.go1e4x),
                onSuccessButtonClick: R,
                isSuccessButtonLoading: A,
                analyticsLocations: T,
                startAuthorizeResult: N,
            });
        case "SUCCESS":
            return (0, n.jsx)(B, {
                transitionState: e,
                application: E,
                sku: i,
                giftCode: l,
                customGiftMessage: c,
                onClose: s,
                analyticsLocations: T,
                emojiName: o,
                soundId: d,
            });
        case "ERROR":
            return (0, n.jsx)(W, {
                transitionState: e,
                onClose: s,
                error: _.error,
                application: E,
                hasAlreadyLinked: N.hasAlreadyLinked,
            });
        default:
            (0, y.xb)(_);
    }
}
let W = (t) => {
    let e,
        i,
        { transitionState: a, onClose: d, error: u, application: _, hasAlreadyLinked: x } = t,
        m = T.default.getCurrentUser();
    return (
        u.code === P.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = U.intl.string(U.t.uXnSGo)),
              (i = x
                  ? U.intl.formatToPlainString(U.t["TNRN/e"], { applicationName: _.name })
                  : U.intl.formatToPlainString(U.t.VkR30M, { applicationName: _.name })))
            : ((e = U.intl.string(U.t.dMYg1c)), (i = (0, b.eN)(u, m))),
        (0, n.jsxs)(s.d, {
            transitionState: a,
            onClose: d,
            children: [
                (0, n.jsx)(l.rQ, { title: e, alignCenter: !0 }),
                (0, n.jsx)(r.c, {
                    children: (0, n.jsx)(c.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                }),
                (0, n.jsx)(o.H, {
                    actions: [{ variant: "primary", text: U.intl.string(U.t.WAI6xu), onClick: d }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
};
function z(t) {
    let {
            sku: e,
            application: i,
            transitionState: l,
            onClose: c,
            successStateButtonText: o,
            onSuccessButtonClick: u,
            isSuccessButtonLoading: _,
            analyticsLocations: x,
            startAuthorizeResult: m,
        } = t,
        { hasAlreadyLinked: f, canStartAuthorization: g, startAuthorization: A, fetched: C } = m,
        j = a.useRef({ analyticsLocations: x, skuId: e.id, applicationId: i.id, canStartAuthorization: g });
    a.useEffect(() => {
        j.current.canStartAuthorization = g;
    }, [g]),
        a.useEffect(() => {
            if (!C) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: n } = j.current;
            I.default.track(P.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: f,
                can_start_authorization: n,
            });
        }, [C, f]);
    let S = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: i } = j.current;
        I.default.track(P.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
        }),
            A({ analyticsLocations: t });
    }, [A]);
    if (!C)
        return (0, n.jsx)(s.d, {
            transitionState: l,
            onClose: c,
            children: (0, n.jsx)(r.c, {
                children: (0, n.jsx)("div", { className: F.g4, children: (0, n.jsx)(p.y, {}) }),
            }),
        });
    let h = f
            ? { variant: "primary", text: o, onClick: u, loading: _ }
            : { variant: "primary", text: U.intl.string(U.t["VDAhr+"]), onClick: S, icon: d.A, disabled: !g },
        k = f ? U.t["v+0ifS"] : U.t.csmSk4;
    return (0, n.jsx)(M.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: c,
        hasAlreadyLinked: f,
        canStartAuthorization: g,
        primaryCTAButtonProps: h,
        bodyText: U.intl.formatToPlainString(k, { applicationName: i.name }),
        title: U.intl.string(U.t["Bn1J+a"]),
    });
}
function B(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: l,
            application: d,
            giftCode: m,
            customGiftMessage: f,
            analyticsLocations: g,
            emojiName: A,
            soundId: C,
        } = t,
        j = (0, D.j)(d),
        S = (0, O.J)(d),
        [h, k] = a.useState(null),
        E = (0, x.bG)([T.default], () => T.default.getUser(m.userId)),
        N = v.Ay.getName(E),
        L = a.useRef({
            analyticsLocations: g,
            skuId: l.id,
            applicationId: d.id,
            isLaunchable: j,
            isApplicationConnected: S,
        });
    if (
        (a.useEffect(() => {
            (L.current.isLaunchable = j), (L.current.isApplicationConnected = S);
        }, [j, S]),
        null == j)
    )
        return (0, n.jsx)(s.d, {
            transitionState: e,
            onClose: i,
            children: (0, n.jsx)(r.c, { children: (0, n.jsx)(p.y, {}) }),
        });
    let b =
        j && !S
            ? {
                  variant: "primary",
                  text: U.intl.string(U.t["s+J8Dl"]),
                  onClick: () => {
                      I.default.track(P.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: g,
                          sku_id: l.id,
                          application_id: d.id,
                          is_gift: !0,
                      }),
                          R.A.launchGame(d.id);
                  },
                  icon: u.t,
              }
            : {
                  variant: "primary",
                  text: U.intl.string(U.t.cpT0Cq),
                  onClick: () => {
                      I.default.track(P.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: g,
                          sku_id: l.id,
                          application_id: d.id,
                          is_gift: !0,
                          is_launchable: j ?? !1,
                          is_application_connected: S,
                      }),
                          i();
                  },
              };
    return (0, n.jsxs)(s.d, {
        transitionState: e,
        onClose: i,
        children: [
            (0, n.jsx)("div", { style: { position: "absolute", top: "-100px" }, ref: (t) => k(t) }),
            (0, n.jsx)(w.z, { sku: l }),
            (0, n.jsxs)(r.c, {
                children: [
                    (0, n.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: F.j7,
                        children: U.intl.formatToPlainString(U.t["6yrIzU"], { sender: N }),
                    }),
                    null != f &&
                        "" !== f &&
                        (0, n.jsx)(c.E, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: F.pt,
                            children: f,
                        }),
                    (0, n.jsx)("div", {
                        className: F.S3,
                        children: (0, n.jsx)(_.w, {
                            type: "success",
                            children: U.intl.formatToPlainString(U.t.W2znvX, {
                                skuName: l.name,
                                applicationName: d.name,
                            }),
                        }),
                    }),
                    null != h && (0, n.jsx)(Y, { confettiTarget: h, emojiName: A }),
                    null != C && (0, n.jsx)(K, { soundId: C }),
                ],
            }),
            (0, n.jsx)(o.H, { actions: [b], actionsFullWidth: !0 }),
        ],
    });
}
let K = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                let t = N.A.getSoundById(e);
                (0, E.playGiftSound)(e, t?.volume ?? 1);
            }, [e]),
            null
        );
    },
    V = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    Y = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, x.bG)([A.A], () => A.A.useReducedMotion),
            l = a.useRef(e),
            [r, c] = a.useState(!0),
            o = a.useCallback(() => {
                c(!1);
            }, []);
        if (s || !r) return null;
        let d = null != i ? L.Ay.getURL(i) : void 0;
        return (0, n.jsx)(k.A, {
            confettiTarget: l.current,
            emojiURL: d,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: V,
            dragCoefficientValue: 1,
            onAnimationEnd: o,
        });
    };
