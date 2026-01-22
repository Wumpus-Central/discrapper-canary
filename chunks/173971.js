i.d(e, {
    default: () => w,
}),
    i(896048);
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
    p = i(362490),
    f = i(587895),
    m = i(518926),
    j = i(946261),
    A = i(209932),
    g = i(287809),
    C = i(954571),
    S = i(690521),
    h = i(25171),
    k = i(45938),
    E = i(403362),
    N = i(427262),
    T = i(690493),
    b = i(844815),
    I = i(383089),
    v = i(41032),
    L = i(188275),
    y = i(652215),
    R = i(985018),
    O = i(836263);

function w(t) {
    let {
            transitionState: e,
            sku: i,
            onClose: s,
            giftCode: c,
            channelContext: u,
            customGiftMessage: m,
            emojiName: j,
            soundId: A,
            analyticsLocations: g,
        } = t,
        [S, h] = n.useState({
            state: "LINK",
        }),
        [k, N] = n.useState(!1),
        T = (0, l.bG)([f.A], () => f.A.getApplication(i.applicationId)),
        b = (0, p.RD)(T),
        { analyticsLocations: I } = (0, x.Ay)(null != g ? g : [], _.A.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    n.useEffect(() => {
        c.redeemed &&
            "LINK" === S.state &&
            h({
                state: "ERROR",
                error: new r.Wl(R.intl.string(R.t.Iw2TUW), y.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [c, S.state]);
    let v = n.useRef({
        analyticsLocations: I,
        giftCode: c,
        hasCustomMessage: null != m && "" !== m,
        customGiftMessage: m,
        skuProductLine: i.productLine,
        emojiName: j,
        soundId: A,
        skuId: i.id,
    });
    (0, d.Ay)(() => {
        let { analyticsLocations: t, skuId: e } = v.current;
        C.default.track(y.HAw.OPEN_MODAL, {
            location_stack: t,
            type: L.Nu,
            sku_id: e,
            application_id: null == T ? void 0 : T.id,
        });
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
            } = v.current;
            C.default.track(y.HAw.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && i !== R.intl.string(R.t.ZkOo1U),
                gift_style: a.giftStyle,
                gift_code: a.code,
                emoji_name: n,
                sound_id: s,
                product_line: l,
            });
        }, [S.state]);
    let O = n.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: i,
            skuId: a,
            hasCustomMessage: n,
            customGiftMessage: s,
            emojiName: l,
            soundId: r,
        } = v.current;
        C.default.track(y.HAw.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: i,
            sku_id: a,
            application_id: null == T ? void 0 : T.id,
            gift_code: c.code,
            gift_style: null != (t = null == (e = c.giftStyle) ? void 0 : e.toString()) ? t : null,
            has_custom_message: n,
            is_custom_message_edited: n && s !== R.intl.string(R.t.ZkOo1U),
            emoji_name: l,
            sound_id: r,
        });
        try {
            N(!0),
                await o.A.redeemGiftCode({
                    code: c.code,
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
            N(!1);
        }
    }, [c, h, u, null == T ? void 0 : T.id]);
    if (null == T) return null;
    switch (S.state) {
        case "LINK":
            return (0, a.jsx)(M, {
                sku: i,
                application: T,
                transitionState: e,
                onClose: s,
                successStateButtonText: R.intl.string(R.t.go1e4x),
                onSuccessButtonClick: O,
                isSuccessButtonLoading: k,
                analyticsLocations: I,
                startAuthorizeResult: b,
            });
        case "SUCCESS":
            return (0, a.jsx)(P, {
                transitionState: e,
                application: T,
                sku: i,
                giftCode: c,
                customGiftMessage: m,
                onClose: s,
                analyticsLocations: I,
                emojiName: j,
                soundId: A,
            });
        case "ERROR":
            return (0, a.jsx)(D, {
                transitionState: e,
                onClose: s,
                error: S.error,
                application: T,
                hasAlreadyLinked: b.hasAlreadyLinked,
            });
        default:
            (0, E.xb)(S);
    }
}
let D = (t) => {
    let e,
        i,
        { transitionState: n, onClose: l, error: r, application: c, hasAlreadyLinked: o } = t,
        d = g.default.getCurrentUser();
    return (
        r.code === y.t02.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = R.intl.string(R.t.uXnSGo)),
              (i = o
                  ? R.intl.formatToPlainString(R.t["TNRN/e"], {
                        applicationName: c.name,
                    })
                  : R.intl.formatToPlainString(R.t.VkR30M, {
                        applicationName: c.name,
                    })))
            : ((e = R.intl.string(R.t.dMYg1c)), (i = (0, k.eN)(r, d))),
        (0, a.jsxs)(s.dWK, {
            transitionState: n,
            onClose: l,
            children: [
                (0, a.jsx)(s.rQ0, {
                    title: e,
                    alignCenter: !0,
                }),
                (0, a.jsx)(s.cwr, {
                    children: (0, a.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: i,
                    }),
                }),
                (0, a.jsx)(s.H7u, {
                    actions: [
                        {
                            variant: "primary",
                            text: R.intl.string(R.t.WAI6xu),
                            onClick: l,
                        },
                    ],
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
        { hasAlreadyLinked: p, canStartAuthorization: f, startAuthorization: m, fetched: j } = x,
        A = n.useRef({
            analyticsLocations: _,
            skuId: e.id,
            applicationId: i.id,
            canStartAuthorization: f,
        });
    n.useEffect(() => {
        A.current.canStartAuthorization = f;
    }, [f]),
        n.useEffect(() => {
            if (!j) return;
            let { analyticsLocations: t, skuId: e, applicationId: i, canStartAuthorization: a } = A.current;
            C.default.track(y.HAw.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: i,
                is_gift: !0,
                is_account_linked: p,
                can_start_authorization: a,
            });
        }, [j, p]);
    let g = n.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: i } = A.current;
        C.default.track(y.HAw.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: i,
            is_gift: !0,
        }),
            m({
                analyticsLocations: t,
            });
    }, [m]);
    if (!j)
        return (0, a.jsx)(s.dWK, {
            transitionState: l,
            onClose: r,
            children: (0, a.jsx)(s.cwr, {
                children: (0, a.jsx)("div", {
                    className: O.g4,
                    children: (0, a.jsx)(c.y$y, {}),
                }),
            }),
        });
    let S = p
        ? {
              variant: "primary",
              text: o,
              onClick: d,
              loading: u,
          }
        : {
              variant: "primary",
              text: R.intl.string(R.t["VDAhr+"]),
              onClick: g,
              icon: s.A5T,
              disabled: !f,
          };
    return (0, a.jsx)(I.m, {
        sku: e,
        application: i,
        transitionState: l,
        onClose: r,
        hasAlreadyLinked: p,
        canStartAuthorization: f,
        primaryCTAButtonProps: S,
        bodyText: p
            ? R.intl.formatToPlainString(R.t.sL5yz7, {
                  applicationName: i.name,
              })
            : R.intl.formatToPlainString(R.t.PaYE38, {
                  applicationName: i.name,
              }),
        title: R.intl.string(R.t["Bn1J+a"]),
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
            soundId: p,
        } = t,
        f = (0, b.j)(o),
        m = (0, T.J)(o),
        [j, A] = n.useState(null),
        S = (0, l.bG)([g.default], () => g.default.getUser(d.userId)),
        k = N.Ay.getName(S),
        E = n.useRef({
            analyticsLocations: _,
            skuId: r.id,
            applicationId: o.id,
            isLaunchable: f,
            isApplicationConnected: m,
        });
    if (
        (n.useEffect(() => {
            (E.current.isLaunchable = f), (E.current.isApplicationConnected = m);
        }, [f, m]),
        null == f)
    )
        return (0, a.jsx)(s.dWK, {
            transitionState: e,
            onClose: i,
            children: (0, a.jsx)(s.cwr, {
                children: (0, a.jsx)(c.y$y, {}),
            }),
        });
    let I =
        f && !m
            ? {
                  variant: "primary",
                  text: R.intl.string(R.t["s+J8Dl"]),
                  onClick: () => {
                      C.default.track(y.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
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
                  text: R.intl.string(R.t.cpT0Cq),
                  onClick: () => {
                      C.default.track(y.HAw.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: _,
                          sku_id: r.id,
                          application_id: o.id,
                          is_gift: !0,
                          is_launchable: null != f && f,
                          is_application_connected: m,
                      }),
                          i();
                  },
              };
    return (0, a.jsxs)(s.dWK, {
        transitionState: e,
        onClose: i,
        children: [
            (0, a.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-".concat(100, "px"),
                },
                ref: (t) => A(t),
            }),
            (0, a.jsx)(v.z, {
                sku: r,
            }),
            (0, a.jsxs)(s.cwr, {
                children: [
                    (0, a.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: O.j7,
                        children: R.intl.formatToPlainString(R.t["6yrIzU"], {
                            sender: k,
                        }),
                    }),
                    null != u &&
                        "" !== u &&
                        (0, a.jsx)(s.EYj, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: O.pt,
                            children: u,
                        }),
                    (0, a.jsx)("div", {
                        className: O.S3,
                        children: (0, a.jsx)(s.wx6, {
                            type: "success",
                            children: R.intl.formatToPlainString(R.t.W2znvX, {
                                skuName: r.name,
                                applicationName: o.name,
                            }),
                        }),
                    }),
                    null != j &&
                        (0, a.jsx)(W, {
                            confettiTarget: j,
                            emojiName: x,
                        }),
                    null != p &&
                        (0, a.jsx)(G, {
                            soundId: p,
                        }),
                ],
            }),
            (0, a.jsx)(s.H7u, {
                actions: [I],
                actionsFullWidth: !0,
            }),
        ],
    });
}
let G = (t) => {
        let { soundId: e } = t;
        return (
            n.useEffect(() => {
                var t;
                let i = A.A.getSoundById(e);
                (0, j.playGiftSound)(e, null != (t = null == i ? void 0 : i.volume) ? t : 1);
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
    W = (t) => {
        let { confettiTarget: e, emojiName: i } = t,
            s = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            r = n.useRef(e),
            [c, o] = n.useState(!0),
            d = n.useCallback(() => {
                o(!1);
            }, []);
        if (s || !c) return null;
        let _ = null != i ? S.Ay.getURL(i) : void 0;
        return (0, a.jsx)(m.A, {
            confettiTarget: r.current,
            emojiURL: _,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: U,
            dragCoefficientValue: 1,
            onAnimationEnd: d,
        });
    };
