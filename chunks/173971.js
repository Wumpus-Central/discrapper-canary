i.d(e, { default: () => w });
var n = i(627968),
    a = i(64700),
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
    p = i(587895),
    f = i(518926),
    g = i(946261),
    j = i(209932),
    A = i(287809),
    C = i(954571),
    S = i(690521),
    h = i(25171),
    k = i(45938),
    T = i(403362),
    N = i(427262),
    E = i(690493),
    I = i(844815),
    L = i(383089),
    y = i(41032),
    R = i(188275),
    b = i(652215),
    v = i(985018),
    O = i(836263);
function w(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: c,
            channelContext: u,
            customGiftMessage: f,
            emojiName: g,
            soundId: j,
            analyticsLocations: A,
        } = t,
        [S, h] = a.useState({ state: "LINK" }),
        [k, N] = a.useState(!1),
        E = (0, l.bG)([p.A], () => p.A.getApplication(i.applicationId)),
        I = (0, m.RD)(E),
        { analyticsLocations: L } = (0, x.Ay)(A ?? [], _.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        c.redeemed &&
            "LINK" === S.state &&
            h({ state: "ERROR", error: new r.Wl(v.intl.string(v.t.Iw2TUW), b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED) });
    }, [c, S.state]);
    let y = a.useRef({
        analyticsLocations: L,
        giftCode: c,
        hasCustomMessage: null != f && "" !== f,
        customGiftMessage: f,
        skuProductLine: i.productLine,
        emojiName: g,
        soundId: j,
        skuId: i.id,
    });
    (0, d.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = y.current;
        C.default.track(b.HAw.OPEN_MODAL, { location_stack: t, type: R.Nu, sku_id: e, application_id: E?.id });
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
            } = y.current;
            C.default.track(b.HAw.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== v.intl.string(v.t.ZkOo1U),
                gift_style: n.giftStyle,
                gift_code: n.code,
                emoji_name: a,
                sound_id: s,
                product_line: l,
            });
        }, [S.state]);
    let O = a.useCallback(async () => {
        let {
            analyticsLocations: t,
            skuId: e,
            hasCustomMessage: i,
            customGiftMessage: n,
            emojiName: a,
            soundId: s,
        } = y.current;
        C.default.track(b.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: E?.id,
            gift_code: c.code,
            gift_style: c.giftStyle?.toString() ?? null,
            has_custom_message: i,
            is_custom_message_edited: i && n !== v.intl.string(v.t.ZkOo1U),
            emoji_name: a,
            sound_id: s,
        });
        try {
            N(!0), await o.A.redeemGiftCode({ code: c.code, options: { channelId: u } }), h({ state: "SUCCESS" });
        } catch (t) {
            h({ state: "ERROR", error: t });
        } finally {
            N(!1);
        }
    }, [c, h, u, E?.id]);
    if (null == E) return null;
    switch (S.state) {
        case "LINK":
            return (0, n.jsx)(M, {
                sku: i,
                application: E,
                transitionState: e,
                onClose: s,
                successStateButtonText: v.intl.string(v.t.go1e4x),
                onSuccessButtonClick: O,
                isSuccessButtonLoading: k,
                analyticsLocations: L,
                startAuthorizeResult: I,
            });
        case "SUCCESS":
            return (0, n.jsx)(G, {
                transitionState: e,
                application: E,
                sku: i,
                giftCode: c,
                customGiftMessage: f,
                onClose: s,
                analyticsLocations: L,
                emojiName: g,
                soundId: j,
            });
        case "ERROR":
            return (0, n.jsx)(D, {
                transitionState: e,
                onClose: s,
                error: S.error,
                application: E,
                hasAlreadyLinked: I.hasAlreadyLinked,
            });
        default:
            (0, T.xb)(S);
    }
}
let D = (t) => {
    let e,
        i,
        { transitionState: a, onClose: l, error: r, application: c, hasAlreadyLinked: o } = t,
        d = A.default.getCurrentUser();
    return (
        r.code === b.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = v.intl.string(v.t.uXnSGo)),
              (i = o
                  ? v.intl.formatToPlainString(v.t["TNRN/e"], { applicationName: c.name })
                  : v.intl.formatToPlainString(v.t.VkR30M, { applicationName: c.name })))
            : ((e = v.intl.string(v.t.dMYg1c)), (i = (0, k.eN)(r, d))),
        (0, n.jsxs)(s.dWK, {
            transitionState: a,
            onClose: l,
            children: [
                (0, n.jsx)(s.rQ0, { title: e, alignCenter: !0 }),
                (0, n.jsx)(s.cwr, {
                    children: (0, n.jsx)(s.EYj, { variant: "text-md/normal", color: "text-subtle", children: i }),
                }),
                (0, n.jsx)(s.H7u, {
                    actions: [{ variant: "primary", text: v.intl.string(v.t.WAI6xu), onClick: l }],
                    actionsFullWidth: !0,
                }),
            ],
        })
    );
};
function M(t) {
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
        { hasAlreadyLinked: m, canStartAuthorization: p, startAuthorization: f, fetched: g } = x,
        j = a.useRef({ analyticsLocations: _, skuId: e.id, applicationId: i.id, canStartAuthorization: p });
    a.useEffect(() => {
        j.current.canStartAuthorization = p;
    }, [p]),
        a.useEffect(() => {
            if (!g) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: n } = j.current;
            C.default.track(b.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: m,
                can_start_authorization: n,
            });
        }, [g, m]);
    let A = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: i } = j.current;
        C.default.track(b.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
        }),
            f({ analyticsLocations: t });
    }, [f]);
    if (!g)
        return (0, n.jsx)(s.dWK, {
            transitionState: l,
            onClose: r,
            children: (0, n.jsx)(s.cwr, {
                children: (0, n.jsx)("div", { className: O.g4, children: (0, n.jsx)(c.y$y, {}) }),
            }),
        });
    let S = m
            ? { variant: "primary", text: o, onClick: d, loading: u }
            : { variant: "primary", text: v.intl.string(v.t["VDAhr+"]), onClick: A, icon: s.A5T, disabled: !p },
        h = m ? v.t["v+0ifS"] : v.t.csmSk4;
    return (0, n.jsx)(L.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        hasAlreadyLinked: m,
        canStartAuthorization: p,
        primaryCTAButtonProps: S,
        bodyText: v.intl.formatToPlainString(h, { applicationName: i.name }),
        title: v.intl.string(v.t["Bn1J+a"]),
    });
}
function G(t) {
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
        p = (0, I.j)(o),
        f = (0, E.J)(o),
        [g, j] = a.useState(null),
        S = (0, l.bG)([A.default], () => A.default.getUser(d.userId)),
        k = N.Ay.getName(S),
        T = a.useRef({
            analyticsLocations: _,
            skuId: r.id,
            applicationId: o.id,
            isLaunchable: p,
            isApplicationConnected: f,
        });
    if (
        (a.useEffect(() => {
            (T.current.isLaunchable = p), (T.current.isApplicationConnected = f);
        }, [p, f]),
        null == p)
    )
        return (0, n.jsx)(s.dWK, {
            transitionState: e,
            onClose: i,
            children: (0, n.jsx)(s.cwr, { children: (0, n.jsx)(c.y$y, {}) }),
        });
    let L =
        p && !f
            ? {
                  variant: "primary",
                  text: v.intl.string(v.t["s+J8Dl"]),
                  onClick: () => {
                      C.default.track(b.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
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
                  text: v.intl.string(v.t.cpT0Cq),
                  onClick: () => {
                      C.default.track(b.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: _,
                          sku_id: r.id,
                          application_id: o.id,
                          is_gift: !0,
                          is_launchable: p ?? !1,
                          is_application_connected: f,
                      }),
                          i();
                  },
              };
    return (0, n.jsxs)(s.dWK, {
        transitionState: e,
        onClose: i,
        children: [
            (0, n.jsx)("div", { style: { position: "absolute", top: "-100px" }, ref: (t) => j(t) }),
            (0, n.jsx)(y.z, { sku: r }),
            (0, n.jsxs)(s.cwr, {
                children: [
                    (0, n.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: O.j7,
                        children: v.intl.formatToPlainString(v.t["6yrIzU"], { sender: k }),
                    }),
                    null != u &&
                        "" !== u &&
                        (0, n.jsx)(s.EYj, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: O.pt,
                            children: u,
                        }),
                    (0, n.jsx)("div", {
                        className: O.S3,
                        children: (0, n.jsx)(s.wx6, {
                            type: "success",
                            children: v.intl.formatToPlainString(v.t.W2znvX, {
                                skuName: r.name,
                                applicationName: o.name,
                            }),
                        }),
                    }),
                    null != g && (0, n.jsx)(U, { confettiTarget: g, emojiName: x }),
                    null != m && (0, n.jsx)(P, { soundId: m }),
                ],
            }),
            (0, n.jsx)(s.H7u, { actions: [L], actionsFullWidth: !0 }),
        ],
    });
}
let P = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                let t = j.A.getSoundById(e);
                (0, g.playGiftSound)(e, t?.volume ?? 1);
            }, [e]),
            null
        );
    },
    W = { xMin: -120, xMax: 120, yMin: -80, yMax: -200 },
    U = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            r = a.useRef(e),
            [c, o] = a.useState(!0),
            d = a.useCallback(() => {
                o(!1);
            }, []);
        if (s || !c) return null;
        let _ = null != i ? S.Ay.getURL(i) : void 0;
        return (0, n.jsx)(f.A, {
            confettiTarget: r.current,
            emojiURL: _,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: W,
            dragCoefficientValue: 1,
            onAnimationEnd: d,
        });
    };
