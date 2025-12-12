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
    x = n(100527),
    f = n(906732),
    _ = n(524995),
    m = n(812206),
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
    R = n(438926),
    y = n(582113),
    A = n(981631),
    b = n(388032),
    M = n(308285);
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
        v = (0, l.e7)([m.Z], () => m.Z.getApplication(n.applicationId)),
        E = (0, _.F)(v),
        { analyticsLocations: L } = (0, f.ZP)(null != T ? T : [], x.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        r.redeemed &&
            "LINK" === S.state &&
            j({
                state: "ERROR",
                error: new o.yZ(b.intl.string(b.t.Iw2TUW), A.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [r, S.state]);
    let R = a.useRef({
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
        let { analyticsLocations: t, skuId: e } = R.current;
        h.default.track(A.rMx.OPEN_MODAL, {
            location_stack: t,
            type: y.tb,
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
            } = R.current;
            h.default.track(A.rMx.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && n !== b.intl.string(b.t.ZkOo1U),
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
        } = R.current;
        h.default.track(A.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: n,
            sku_id: i,
            application_id: null == v ? void 0 : v.id,
            gift_code: r.code,
            gift_style: null != (e = null == (t = r.giftStyle) ? void 0 : t.toString()) ? e : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== b.intl.string(b.t.ZkOo1U),
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
                successStateButtonText: b.intl.string(b.t.go1e4x),
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
        o.code === A.evJ.INVALID_GIFT_REDEMPTION_OWNED
            ? ((e = b.intl.string(b.t.uXnSGo)),
              (n = c
                  ? b.intl.formatToPlainString(b.t["TNRN/e"], { applicationName: r.name })
                  : b.intl.formatToPlainString(b.t.VkR30M, { applicationName: r.name })))
            : ((e = b.intl.string(b.t.dMYg1c)), (n = (0, k.QW)(o, u))),
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
                            text: b.intl.string(b.t.WAI6xu),
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
            analyticsLocations: x,
            startAuthorizeResult: f,
        } = t,
        { hasAlreadyLinked: _, canStartAuthorization: m, startAuthorization: g, fetched: p } = f,
        C = a.useRef({
            analyticsLocations: x,
            skuId: e.id,
            applicationId: n.id,
            canStartAuthorization: m,
        });
    a.useEffect(() => {
        C.current.canStartAuthorization = m;
    }, [m]),
        a.useEffect(() => {
            if (!p) return;
            let { analyticsLocations: t, skuId: e, applicationId: n, canStartAuthorization: i } = C.current;
            h.default.track(A.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: n,
                is_gift: !0,
                is_account_linked: _,
                can_start_authorization: i,
            });
        }, [p, _]);
    let T = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: n } = C.current;
        h.default.track(A.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
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
    let S = _
        ? {
              variant: "primary",
              text: c,
              onClick: u,
              loading: d,
          }
        : {
              variant: "primary",
              text: b.intl.string(b.t["VDAhr+"]),
              onClick: T,
              icon: s.uIJ,
              disabled: !m,
          };
    return (0, i.jsx)(L.M, {
        sku: e,
        application: n,
        transitionState: l,
        onClose: o,
        hasAlreadyLinked: _,
        canStartAuthorization: m,
        primaryCTAButtonProps: S,
        bodyText: _
            ? b.intl.formatToPlainString(b.t.sL5yz7, { applicationName: n.name })
            : b.intl.formatToPlainString(b.t.PaYE38, { applicationName: n.name }),
        title: b.intl.string(b.t["Bn1J+a"]),
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
            analyticsLocations: x,
            emojiName: f,
            soundId: _,
        } = t,
        m = (0, E.a)(c),
        g = (0, v.I)(c),
        [p, C] = a.useState(null),
        S = (0, l.e7)([T.default], () => T.default.getUser(u.userId)),
        k = N.ZP.getName(S),
        I = a.useRef({
            analyticsLocations: x,
            skuId: o.id,
            applicationId: c.id,
            isLaunchable: m,
            isApplicationConnected: g,
        });
    if (
        (a.useEffect(() => {
            (I.current.isLaunchable = m), (I.current.isApplicationConnected = g);
        }, [m, g]),
        null == m)
    )
        return (0, i.jsx)(s.IX, {
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(r.$jN, {}) }),
        });
    let L =
        m && !g
            ? {
                  variant: "primary",
                  text: b.intl.string(b.t["s+J8Dl"]),
                  onClick: () => {
                      h.default.track(A.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: x,
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
                  text: b.intl.string(b.t.cpT0Cq),
                  onClick: () => {
                      h.default.track(A.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: x,
                          sku_id: o.id,
                          application_id: c.id,
                          is_gift: !0,
                          is_launchable: null != m && m,
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
            (0, i.jsx)(R.y, { sku: o }),
            (0, i.jsxs)(s.fef, {
                children: [
                    (0, i.jsx)(s.xvT, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: M.giftSenderText,
                        children: b.intl.formatToPlainString(b.t["6yrIzU"], { sender: k }),
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
                            children: b.intl.formatToPlainString(b.t.W2znvX, {
                                skuName: o.name,
                                applicationName: c.name,
                            }),
                        }),
                    }),
                    null != p &&
                        (0, i.jsx)(F, {
                            confettiTarget: p,
                            emojiName: f,
                        }),
                    null != _ && (0, i.jsx)(D, { soundId: _ }),
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
        let x = null != n ? S.ZP.getURL(n) : void 0;
        return (0, i.jsx)(g.Z, {
            confettiTarget: o.current,
            emojiURL: x,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: B,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
