i.d(e, {
    default: () => D,
}),
    i(896048);
var n = i(627968),
    a = i(64700),
    s = i(158954),
    l = i(311907),
    r = i(562465),
    o = i(397927),
    c = i(75255),
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
    v = i(844815),
    L = i(383089),
    y = i(41032),
    R = i(188275),
    b = i(652215),
    O = i(985018),
    w = i(836263);

function D(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: o,
            channelContext: u,
            customGiftMessage: p,
            emojiName: g,
            soundId: j,
            analyticsLocations: C,
        } = t,
        [S, h] = a.useState({
            state: "LINK",
        }),
        [k, E] = a.useState(!1),
        N = (0, l.bG)([f.A], () => f.A.getApplication(i.applicationId)),
        I = (0, m.RD)(N),
        { analyticsLocations: v } = (0, x.Ay)(null != C ? C : [], _.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        o.redeemed &&
            "LINK" === S.state &&
            h({
                state: "ERROR",
                error: new r.Wl(O.intl.string(O.t.Iw2TUW), b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [o, S.state]);
    let L = a.useRef({
        analyticsLocations: v,
        giftCode: o,
        hasCustomMessage: null != p && "" !== p,
        customGiftMessage: p,
        skuProductLine: i.productLine,
        emojiName: g,
        soundId: j,
        skuId: i.id,
    });
    (0, d.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = L.current;
        A.default.track(b.HAw.OPEN_MODAL, {
            location_stack: t,
            type: R.Nu,
            sku_id: e,
            application_id: null == N ? void 0 : N.id,
        });
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
            A.default.track(b.HAw.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== O.intl.string(O.t.ZkOo1U),
                gift_style: n.giftStyle,
                gift_code: n.code,
                emoji_name: a,
                sound_id: s,
                product_line: l,
            });
        }, [S.state]);
    let y = a.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: i,
            skuId: n,
            hasCustomMessage: a,
            customGiftMessage: s,
            emojiName: l,
            soundId: r,
        } = L.current;
        A.default.track(b.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: i,
            sku_id: n,
            application_id: null == N ? void 0 : N.id,
            gift_code: o.code,
            gift_style: null != (t = null == (e = o.giftStyle) ? void 0 : e.toString()) ? t : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== O.intl.string(O.t.ZkOo1U),
            emoji_name: l,
            sound_id: r,
        });
        try {
            E(!0),
                await c.A.redeemGiftCode({
                    code: o.code,
                    options: {
                        channelId: u,
                    },
                }),
                h({
                    state: "SUCCESS",
                });
        } catch (t) {
            h({
                state: "ERROR",
                error: t,
            });
        } finally {
            E(!1);
        }
    }, [o, h, u, null == N ? void 0 : N.id]);
    if (null == N) return null;
    switch (S.state) {
        case "LINK":
            return (0, n.jsx)(G, {
                sku: i,
                application: N,
                transitionState: e,
                onClose: s,
                successStateButtonText: O.intl.string(O.t.go1e4x),
                onSuccessButtonClick: y,
                isSuccessButtonLoading: k,
                analyticsLocations: v,
                startAuthorizeResult: I,
            });
        case "SUCCESS":
            return (0, n.jsx)(P, {
                transitionState: e,
                application: N,
                sku: i,
                giftCode: o,
                customGiftMessage: p,
                onClose: s,
                analyticsLocations: v,
                emojiName: g,
                soundId: j,
            });
        case "ERROR":
            return (0, n.jsx)(M, {
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
        { transitionState: a, onClose: l, error: r, application: o, hasAlreadyLinked: c } = t,
        d = C.default.getCurrentUser();
    return (
        r.code === b.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = O.intl.string(O.t.uXnSGo)),
              (i = c
                  ? O.intl.formatToPlainString(O.t["TNRN/e"], {
                        applicationName: o.name,
                    })
                  : O.intl.formatToPlainString(O.t.VkR30M, {
                        applicationName: o.name,
                    })))
            : ((e = O.intl.string(O.t.dMYg1c)), (i = (0, k.eN)(r, d))),
        (0, n.jsxs)(s.dWK, {
            transitionState: a,
            onClose: l,
            children: [
                (0, n.jsx)(s.rQ0, {
                    title: e,
                    alignCenter: !0,
                }),
                (0, n.jsx)(s.cwr, {
                    children: (0, n.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: i,
                    }),
                }),
                (0, n.jsx)(s.H7u, {
                    actions: [
                        {
                            variant: "primary",
                            text: O.intl.string(O.t.WAI6xu),
                            onClick: l,
                        },
                    ],
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
            successStateButtonText: c,
            onSuccessButtonClick: d,
            isSuccessButtonLoading: u,
            analyticsLocations: _,
            startAuthorizeResult: x,
        } = t,
        { hasAlreadyLinked: m, canStartAuthorization: f, startAuthorization: p, fetched: g } = x,
        j = (0, N.n)({
            location: "SocialLayerStorefrontGiftCodeClaimModal",
        }),
        C = a.useRef({
            analyticsLocations: _,
            skuId: e.id,
            applicationId: i.id,
            canStartAuthorization: f,
        });
    a.useEffect(() => {
        C.current.canStartAuthorization = f;
    }, [f]),
        a.useEffect(() => {
            if (!g) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: n } = C.current;
            A.default.track(b.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: m,
                can_start_authorization: n,
            });
        }, [g, m]);
    let S = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: i } = C.current;
        A.default.track(b.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
        }),
            p({
                analyticsLocations: t,
            });
    }, [p]);
    if (!g)
        return (0, n.jsx)(s.dWK, {
            transitionState: l,
            onClose: r,
            children: (0, n.jsx)(s.cwr, {
                children: (0, n.jsx)("div", {
                    className: w.g4,
                    children: (0, n.jsx)(o.y$y, {}),
                }),
            }),
        });
    let h = m
            ? {
                  variant: "primary",
                  text: c,
                  onClick: d,
                  loading: u,
              }
            : {
                  variant: "primary",
                  text: O.intl.string(O.t["VDAhr+"]),
                  onClick: S,
                  icon: s.A5T,
                  disabled: !f,
              },
        k = j ? O.t["v+0ifS"] : O.t.sL5yz7,
        T = j ? O.t.csmSk4 : O.t.PaYE38,
        E = m ? k : T;
    return (0, n.jsx)(L.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        hasAlreadyLinked: m,
        canStartAuthorization: f,
        primaryCTAButtonProps: h,
        bodyText: O.intl.formatToPlainString(E, {
            applicationName: i.name,
        }),
        title: O.intl.string(O.t["Bn1J+a"]),
    });
}

function P(t) {
    let {
            transitionState: e,
            onClose: i,
            sku: r,
            application: c,
            giftCode: d,
            customGiftMessage: u,
            analyticsLocations: _,
            emojiName: x,
            soundId: m,
        } = t,
        f = (0, v.j)(c),
        p = (0, I.J)(c),
        [g, j] = a.useState(null),
        S = (0, l.bG)([C.default], () => C.default.getUser(d.userId)),
        k = E.Ay.getName(S),
        T = a.useRef({
            analyticsLocations: _,
            skuId: r.id,
            applicationId: c.id,
            isLaunchable: f,
            isApplicationConnected: p,
        });
    if (
        (a.useEffect(() => {
            (T.current.isLaunchable = f), (T.current.isApplicationConnected = p);
        }, [f, p]),
        null == f)
    )
        return (0, n.jsx)(s.dWK, {
            transitionState: e,
            onClose: i,
            children: (0, n.jsx)(s.cwr, {
                children: (0, n.jsx)(o.y$y, {}),
            }),
        });
    let N =
        f && !p
            ? {
                  variant: "primary",
                  text: O.intl.string(O.t["s+J8Dl"]),
                  onClick: () => {
                      A.default.track(b.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: _,
                          sku_id: r.id,
                          application_id: c.id,
                          is_gift: !0,
                      }),
                          h.A.launchGame(c.id);
                  },
                  icon: s.tfB,
              }
            : {
                  variant: "primary",
                  text: O.intl.string(O.t.cpT0Cq),
                  onClick: () => {
                      A.default.track(b.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: _,
                          sku_id: r.id,
                          application_id: c.id,
                          is_gift: !0,
                          is_launchable: null != f && f,
                          is_application_connected: p,
                      }),
                          i();
                  },
              };
    return (0, n.jsxs)(s.dWK, {
        transitionState: e,
        onClose: i,
        children: [
            (0, n.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-".concat(100, "px"),
                },
                ref: (t) => j(t),
            }),
            (0, n.jsx)(y.z, {
                sku: r,
            }),
            (0, n.jsxs)(s.cwr, {
                children: [
                    (0, n.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: w.j7,
                        children: O.intl.formatToPlainString(O.t["6yrIzU"], {
                            sender: k,
                        }),
                    }),
                    null != u &&
                        "" !== u &&
                        (0, n.jsx)(s.EYj, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: w.pt,
                            children: u,
                        }),
                    (0, n.jsx)("div", {
                        className: w.S3,
                        children: (0, n.jsx)(s.wx6, {
                            type: "success",
                            children: O.intl.formatToPlainString(O.t.W2znvX, {
                                skuName: r.name,
                                applicationName: c.name,
                            }),
                        }),
                    }),
                    null != g &&
                        (0, n.jsx)(K, {
                            confettiTarget: g,
                            emojiName: x,
                        }),
                    null != m &&
                        (0, n.jsx)(W, {
                            soundId: m,
                        }),
                ],
            }),
            (0, n.jsx)(s.H7u, {
                actions: [N],
                actionsFullWidth: !0,
            }),
        ],
    });
}
let W = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                var t;
                let i = j.A.getSoundById(e);
                (0, g.playGiftSound)(e, null != (t = null == i ? void 0 : i.volume) ? t : 1);
            }, [e]),
            null
        );
    },
    U = {
        xMin: -120,
        xMax: 120,
        yMin: -80,
        yMax: -200,
    },
    K = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            r = a.useRef(e),
            [o, c] = a.useState(!0),
            d = a.useCallback(() => {
                c(!1);
            }, []);
        if (s || !o) return null;
        let _ = null != i ? S.Ay.getURL(i) : void 0;
        return (0, n.jsx)(p.A, {
            confettiTarget: r.current,
            emojiURL: _,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: U,
            dragCoefficientValue: 1,
            onAnimationEnd: d,
        });
    };
