n.d(e, { default: () => O }), n(388685);
var i = n(54381),
    a = n(473749),
    s = n(793030),
    l = n(442837),
    o = n(544891),
    r = n(481060),
    c = n(775644),
    u = n(493773),
    d = n(607070),
    f = n(100527),
    x = n(906732),
    m = n(524995),
    _ = n(812206),
    g = n(715627),
    p = n(146779),
    C = n(763296),
    T = n(594174),
    h = n(626135),
    S = n(176354),
    j = n(877481),
    k = n(669079),
    I = n(823379),
    N = n(51144),
    v = n(579201),
    E = n(683668),
    L = n(55121),
    b = n(438926),
    R = n(582113),
    y = n(981631),
    A = n(388032),
    M = n(685822);
function O(t) {
    let {
            transitionState: e,
            sku: n,
            onClose: s,
            giftCode: r,
            channelContext: d,
            customGiftMessage: g,
            emojiName: p,
            soundId: C,
            analyticsLocations: T,
        } = t,
        [S, j] = a.useState({ state: "LINK" }),
        [k, N] = a.useState(!1),
        v = (0, l.e7)([_.Z], () => _.Z.getApplication(n.applicationId)),
        E = (0, m.FG)(v),
        { analyticsLocations: L } = (0, x.ZP)(null != T ? T : [], f.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        r.redeemed &&
            "LINK" === S.state &&
            j({
                state: "ERROR",
                error: new o.yZ(A.intl.string(A.t.Iw2TUW), y.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [r, S.state]);
    let b = a.useRef({
        analyticsLocations: L,
        giftCode: r,
        hasCustomMessage: null != g && "" !== g,
        customGiftMessage: g,
        skuProductLine: n.productLine,
        emojiName: p,
        soundId: C,
        skuId: n.id,
    });
    (0, u.ZP)(() => {
        let { analyticsLocations: t, skuId: e } = b.current;
        h.default.track(y.rMx.OPEN_MODAL, {
            location_stack: t,
            type: R.tb,
            sku_id: e,
            application_id: null == v ? void 0 : v.id,
        });
    }),
        a.useEffect(() => {
            let {
                analyticsLocations: t,
                hasCustomMessage: e,
                customGiftMessage: n,
                giftCode: i,
                emojiName: a,
                soundId: s,
                skuProductLine: l,
            } = b.current;
            h.default.track(y.rMx.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && n !== A.intl.string(A.t.ZkOo1U),
                gift_style: i.giftStyle,
                gift_code: i.code,
                emoji_name: a,
                sound_id: s,
                product_line: l,
            });
        }, [S.state]);
    let M = a.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: n,
            skuId: i,
            hasCustomMessage: a,
            customGiftMessage: s,
            emojiName: l,
            soundId: o,
        } = b.current;
        h.default.track(y.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: n,
            sku_id: i,
            application_id: null == v ? void 0 : v.id,
            gift_code: r.code,
            gift_style: null != (e = null == (t = r.giftStyle) ? void 0 : t.toString()) ? e : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== A.intl.string(A.t.ZkOo1U),
            emoji_name: l,
            sound_id: o,
        });
        try {
            N(!0),
                await c.Z.redeemGiftCode({
                    code: r.code,
                    options: { channelId: d },
                }),
                j({ state: "SUCCESS" });
        } catch (t) {
            j({
                state: "ERROR",
                error: t,
            });
        } finally {
            N(!1);
        }
    }, [r, j, d, null == v ? void 0 : v.id]);
    if (null == v) return null;
    switch (S.state) {
        case "LINK":
            return (0, i.jsx)(G, {
                sku: n,
                application: v,
                transitionState: e,
                onClose: s,
                successStateButtonText: A.intl.string(A.t.go1e4x),
                onSuccessButtonClick: M,
                isSuccessButtonLoading: k,
                analyticsLocations: L,
                startAuthorizeResult: E,
            });
        case "SUCCESS":
            return (0, i.jsx)(Z, {
                transitionState: e,
                application: v,
                sku: n,
                giftCode: r,
                customGiftMessage: g,
                onClose: s,
                analyticsLocations: L,
                emojiName: p,
                soundId: C,
            });
        case "ERROR":
            return (0, i.jsx)(P, {
                transitionState: e,
                onClose: s,
                error: S.error,
                application: v,
                hasAlreadyLinked: E.hasAlreadyLinked,
            });
        default:
            (0, I.vE)(S);
    }
}
let P = (t) => {
    let e,
        n,
        { transitionState: a, onClose: l, error: o, application: r, hasAlreadyLinked: c } = t,
        u = T.default.getCurrentUser();
    return (
        o.code === y.evJ.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = A.intl.string(A.t.uXnSGo)),
              (n = c
                  ? A.intl.formatToPlainString(A.t["TNRN/e"], { applicationName: r.name })
                  : A.intl.formatToPlainString(A.t.VkR30M, { applicationName: r.name })))
            : ((e = A.intl.string(A.t.dMYg1c)), (n = (0, k.QW)(o, u))),
        (0, i.jsxs)(s.IX, {
            transitionState: a,
            onClose: l,
            children: [
                (0, i.jsx)(s.xBx, {
                    title: e,
                    alignCenter: !0,
                }),
                (0, i.jsx)(s.fef, {
                    children: (0, i.jsx)(s.xvT, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: n,
                    }),
                }),
                (0, i.jsx)(s.Go$, {
                    actions: [
                        {
                            variant: "primary",
                            text: A.intl.string(A.t.WAI6xu),
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
            application: n,
            transitionState: l,
            onClose: o,
            successStateButtonText: c,
            onSuccessButtonClick: u,
            isSuccessButtonLoading: d,
            analyticsLocations: f,
            startAuthorizeResult: x,
        } = t,
        { hasAlreadyLinked: m, canStartAuthorization: _, startAuthorization: g, fetched: p } = x,
        C = a.useRef({
            analyticsLocations: f,
            skuId: e.id,
            applicationId: n.id,
            canStartAuthorization: _,
        });
    a.useEffect(() => {
        C.current.canStartAuthorization = _;
    }, [_]),
        a.useEffect(() => {
            if (!p) return;
            let { analyticsLocations: t, skuId: e, applicationId: n, canStartAuthorization: i } = C.current;
            h.default.track(y.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: n,
                is_gift: !0,
                is_account_linked: m,
                can_start_authorization: i,
            });
        }, [p, m]);
    let T = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: n } = C.current;
        h.default.track(y.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: n,
            is_gift: !0,
        }),
            g({ analyticsLocations: t });
    }, [g]);
    if (!p)
        return (0, i.jsx)(s.IX, {
            transitionState: l,
            onClose: o,
            children: (0, i.jsx)(s.fef, {
                children: (0, i.jsx)("div", {
                    className: M.loadingContainer,
                    children: (0, i.jsx)(r.$jN, {}),
                }),
            }),
        });
    let S = m
        ? {
              variant: "primary",
              text: c,
              onClick: u,
              loading: d,
          }
        : {
              variant: "primary",
              text: A.intl.string(A.t["VDAhr+"]),
              onClick: T,
              icon: s.uIJ,
              disabled: !_,
          };
    return (0, i.jsx)(L.M, {
        sku: e,
        application: n,
        transitionState: l,
        onClose: o,
        hasAlreadyLinked: m,
        canStartAuthorization: _,
        primaryCTAButtonProps: S,
        bodyText: m
            ? A.intl.formatToPlainString(A.t.sL5yz7, { applicationName: n.name })
            : A.intl.formatToPlainString(A.t.PaYE38, { applicationName: n.name }),
        title: A.intl.string(A.t["Bn1J+a"]),
    });
}
function Z(t) {
    let {
            transitionState: e,
            onClose: n,
            sku: o,
            application: c,
            giftCode: u,
            customGiftMessage: d,
            analyticsLocations: f,
            emojiName: x,
            soundId: m,
        } = t,
        _ = (0, E.a)(c),
        g = (0, v.I)(c),
        [p, C] = a.useState(null),
        S = (0, l.e7)([T.default], () => T.default.getUser(u.userId)),
        k = N.ZP.getName(S),
        I = a.useRef({
            analyticsLocations: f,
            skuId: o.id,
            applicationId: c.id,
            isLaunchable: _,
            isApplicationConnected: g,
        });
    if (
        (a.useEffect(() => {
            (I.current.isLaunchable = _), (I.current.isApplicationConnected = g);
        }, [_, g]),
        null == _)
    )
        return (0, i.jsx)(s.IX, {
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(r.$jN, {}) }),
        });
    let L =
        _ && !g
            ? {
                  variant: "primary",
                  text: A.intl.string(A.t["s+J8Dl"]),
                  onClick: () => {
                      h.default.track(y.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: f,
                          sku_id: o.id,
                          application_id: c.id,
                          is_gift: !0,
                      }),
                          j.Z.launchGame(c.id);
                  },
                  icon: s.rgF,
              }
            : {
                  variant: "primary",
                  text: A.intl.string(A.t.cpT0Cq),
                  onClick: () => {
                      h.default.track(y.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: f,
                          sku_id: o.id,
                          application_id: c.id,
                          is_gift: !0,
                          is_launchable: null != _ && _,
                          is_application_connected: g,
                      }),
                          n();
                  },
              };
    return (0, i.jsxs)(s.IX, {
        transitionState: e,
        onClose: n,
        children: [
            (0, i.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-".concat(100, "px"),
                },
                ref: (t) => C(t),
            }),
            (0, i.jsx)(b.y, { sku: o }),
            (0, i.jsxs)(s.fef, {
                children: [
                    (0, i.jsx)(s.xvT, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: M.giftSenderText,
                        children: A.intl.formatToPlainString(A.t["6yrIzU"], { sender: k }),
                    }),
                    null != d &&
                        "" !== d &&
                        (0, i.jsx)(s.xvT, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: M.customGiftMessage,
                            children: d,
                        }),
                    (0, i.jsx)("div", {
                        className: M.giftSentToGameNoticeContainerPadding,
                        children: (0, i.jsx)(s.M14, {
                            type: "success",
                            children: A.intl.formatToPlainString(A.t.W2znvX, {
                                skuName: o.name,
                                applicationName: c.name,
                            }),
                        }),
                    }),
                    null != p &&
                        (0, i.jsx)(F, {
                            confettiTarget: p,
                            emojiName: x,
                        }),
                    null != m && (0, i.jsx)(D, { soundId: m }),
                ],
            }),
            (0, i.jsx)(s.Go$, {
                actions: [L],
                actionsFullWidth: !0,
            }),
        ],
    });
}
let D = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                var t;
                let n = C.Z.getSoundById(e);
                (0, p.playGiftSound)(e, null != (t = null == n ? void 0 : n.volume) ? t : 1);
            }, [e]),
            null
        );
    },
    B = {
        xMin: -120,
        xMax: 120,
        yMin: -80,
        yMax: -200,
    },
    F = (t) => {
        let { confettiTarget: e, emojiName: n } = t,
            s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            o = a.useRef(e),
            [r, c] = a.useState(!0),
            u = a.useCallback(() => {
                c(!1);
            }, []);
        if (s || !r) return null;
        let f = null != n ? S.ZP.getURL(n) : void 0;
        return (0, i.jsx)(g.Z, {
            confettiTarget: o.current,
            emojiURL: f,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: B,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
