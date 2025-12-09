n.d(e, { default: () => G }), n(388685);
var i = n(54381),
    a = n(473749),
    s = n(793030),
    l = n(442837),
    o = n(544891),
    r = n(780384),
    c = n(481060),
    u = n(775644),
    d = n(493773),
    x = n(410030),
    f = n(607070),
    _ = n(100527),
    m = n(906732),
    g = n(524995),
    p = n(812206),
    C = n(715627),
    h = n(146779),
    S = n(763296),
    j = n(594174),
    T = n(626135),
    k = n(176354),
    E = n(877481),
    I = n(669079),
    L = n(823379),
    v = n(51144),
    N = n(579201),
    y = n(683668),
    R = n(55121),
    b = n(438926),
    A = n(582113),
    M = n(981631),
    O = n(388032),
    P = n(308285),
    Z = n(167969),
    B = n(557256);
function G(t) {
    let {
            transitionState: e,
            sku: n,
            onClose: s,
            giftCode: r,
            channelContext: c,
            customGiftMessage: x,
            emojiName: f,
            soundId: g,
            analyticsLocations: C,
        } = t,
        [h, S] = a.useState({ state: "LINK" }),
        [j, k] = a.useState(!1),
        E = (0, l.e7)([p.Z], () => p.Z.getApplication(n.applicationId)),
        { analyticsLocations: I } = (0, m.ZP)(null != C ? C : [], _.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        r.redeemed &&
            "LINK" === h.state &&
            S({
                state: "ERROR",
                error: new o.yZ(O.intl.string(O.t.Iw2TUW), M.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [r, h.state]);
    let v = a.useRef({
        analyticsLocations: I,
        giftCode: r,
        hasCustomMessage: null != x && "" !== x,
        customGiftMessage: x,
        skuProductLine: n.productLine,
        emojiName: f,
        soundId: g,
        skuId: n.id,
    });
    (0, d.ZP)(() => {
        let { analyticsLocations: t, skuId: e } = v.current;
        T.default.track(M.rMx.OPEN_MODAL, {
            location_stack: t,
            type: A.tb,
            sku_id: e,
            application_id: null == E ? void 0 : E.id,
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
            } = v.current;
            T.default.track(M.rMx.GIFT_ACCEPT_STEP, {
                to_step: h.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && n !== O.intl.string(O.t.ZkOo1U),
                gift_style: i.giftStyle,
                gift_code: i.code,
                emoji_name: a,
                sound_id: s,
                product_line: l,
            });
        }, [h.state]);
    let N = a.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: n,
            skuId: i,
            hasCustomMessage: a,
            customGiftMessage: s,
            emojiName: l,
            soundId: o,
        } = v.current;
        T.default.track(M.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: n,
            sku_id: i,
            application_id: null == E ? void 0 : E.id,
            gift_code: r.code,
            gift_style: null != (e = null == (t = r.giftStyle) ? void 0 : t.toString()) ? e : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== O.intl.string(O.t.ZkOo1U),
            emoji_name: l,
            sound_id: o,
        });
        try {
            k(!0),
                await u.Z.redeemGiftCode({
                    code: r.code,
                    options: { channelId: c },
                }),
                S({ state: "SUCCESS" });
        } catch (t) {
            S({
                state: "ERROR",
                error: t,
            });
        } finally {
            k(!1);
        }
    }, [r, S, c, null == E ? void 0 : E.id]);
    if (null == E) return null;
    switch (h.state) {
        case "LINK":
            return (0, i.jsx)(U, {
                sku: n,
                application: E,
                transitionState: e,
                onClose: s,
                successStateButtonText: O.intl.string(O.t.go1e4x),
                onSuccessButtonClick: N,
                isSuccessButtonLoading: j,
                analyticsLocations: I,
            });
        case "SUCCESS":
            return (0, i.jsx)(w, {
                transitionState: e,
                application: E,
                sku: n,
                giftCode: r,
                customGiftMessage: x,
                onClose: s,
                analyticsLocations: I,
                emojiName: f,
                soundId: g,
            });
        case "ERROR":
            return (0, i.jsx)(D, {
                transitionState: e,
                onClose: s,
                error: h.error,
            });
        default:
            (0, L.vE)(h);
    }
}
let D = (t) => {
    let { transitionState: e, onClose: n, error: a } = t,
        l = j.default.getCurrentUser(),
        o = (0, I.QW)(a, l),
        c = (0, x.ZP)(),
        u = (0, r.wj)(c);
    return (0, i.jsxs)(s.IX, {
        transitionState: e,
        onClose: n,
        children: [
            (0, i.jsx)(s.xBx, {
                graphic: {
                    type: "image",
                    src: u ? Z : B,
                },
            }),
            (0, i.jsx)(s.fef, { children: o }),
        ],
    });
};
function U(t) {
    let {
            sku: e,
            application: n,
            transitionState: l,
            onClose: o,
            successStateButtonText: r,
            onSuccessButtonClick: u,
            isSuccessButtonLoading: d,
            analyticsLocations: x,
        } = t,
        { hasAlreadyLinked: f, canStartAuthorization: _, startAuthorization: m, fetched: p } = (0, g.F)(n),
        C = a.useRef({
            analyticsLocations: x,
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
            T.default.track(M.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: n,
                is_gift: !0,
                is_account_linked: f,
                can_start_authorization: i,
            });
        }, [p, f]);
    let h = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: n } = C.current;
        T.default.track(M.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: n,
            is_gift: !0,
        }),
            m({ analyticsLocations: t });
    }, [m]);
    if (!p)
        return (0, i.jsx)(s.IX, {
            transitionState: l,
            onClose: o,
            children: (0, i.jsx)(s.fef, {
                children: (0, i.jsx)("div", {
                    className: P.loadingContainer,
                    children: (0, i.jsx)(c.$jN, {}),
                }),
            }),
        });
    let S = f
        ? {
              variant: "primary",
              text: r,
              onClick: u,
              loading: d,
          }
        : {
              variant: "primary",
              text: O.intl.string(O.t["VDAhr+"]),
              onClick: h,
              icon: s.uIJ,
              disabled: !_,
          };
    return (0, i.jsx)(R.M, {
        sku: e,
        application: n,
        transitionState: l,
        onClose: o,
        hasAlreadyLinked: f,
        canStartAuthorization: _,
        primaryCTAButtonProps: S,
        bodyText: f
            ? O.intl.formatToPlainString(O.t.sL5yz7, { applicationName: n.name })
            : O.intl.formatToPlainString(O.t.PaYE38, { applicationName: n.name }),
        title: O.intl.string(O.t["Bn1J+a"]),
    });
}
function w(t) {
    let {
            transitionState: e,
            onClose: n,
            sku: o,
            application: r,
            giftCode: u,
            customGiftMessage: d,
            analyticsLocations: x,
            emojiName: f,
            soundId: _,
        } = t,
        m = (0, y.a)(r),
        g = (0, N.I)(r),
        [p, C] = a.useState(null),
        h = (0, l.e7)([j.default], () => j.default.getUser(u.userId)),
        S = v.ZP.getName(h),
        k = a.useRef({
            analyticsLocations: x,
            skuId: o.id,
            applicationId: r.id,
            isLaunchable: m,
            isApplicationConnected: g,
        });
    if (
        (a.useEffect(() => {
            (k.current.isLaunchable = m), (k.current.isApplicationConnected = g);
        }, [m, g]),
        null == m)
    )
        return (0, i.jsx)(s.IX, {
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(c.$jN, {}) }),
        });
    let I =
        m && !g
            ? {
                  variant: "primary",
                  text: O.intl.string(O.t["s+J8Dl"]),
                  onClick: () => {
                      T.default.track(M.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: x,
                          sku_id: o.id,
                          application_id: r.id,
                          is_gift: !0,
                      }),
                          E.Z.launchGame(r.id);
                  },
                  icon: s.rgF,
              }
            : {
                  variant: "primary",
                  text: O.intl.string(O.t.cpT0Cq),
                  onClick: () => {
                      T.default.track(M.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: x,
                          sku_id: o.id,
                          application_id: r.id,
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
            (0, i.jsx)(b.y, { sku: o }),
            (0, i.jsxs)(s.fef, {
                children: [
                    (0, i.jsx)(s.xvT, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: P.giftSenderText,
                        children: O.intl.formatToPlainString(O.t["6yrIzU"], { sender: S }),
                    }),
                    null != d &&
                        "" !== d &&
                        (0, i.jsx)(s.xvT, {
                            variant: "text-lg/semibold",
                            color: "text-subtle",
                            className: P.customGiftMessage,
                            children: d,
                        }),
                    (0, i.jsx)("div", {
                        className: P.giftSentToGameNoticeContainerPadding,
                        children: (0, i.jsx)(s.M14, {
                            type: "success",
                            children: O.intl.formatToPlainString(O.t.W2znvX, {
                                skuName: o.name,
                                applicationName: r.name,
                            }),
                        }),
                    }),
                    null != p &&
                        (0, i.jsx)(K, {
                            confettiTarget: p,
                            emojiName: f,
                        }),
                    null != _ && (0, i.jsx)(F, { soundId: _ }),
                ],
            }),
            (0, i.jsx)(s.Go$, {
                actions: [I],
                actionsFullWidth: !0,
            }),
        ],
    });
}
let F = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                var t;
                let n = S.Z.getSoundById(e);
                (0, h.playGiftSound)(e, null != (t = null == n ? void 0 : n.volume) ? t : 1);
            }, [e]),
            null
        );
    },
    W = {
        xMin: -120,
        xMax: 120,
        yMin: -80,
        yMax: -200,
    },
    K = (t) => {
        let { confettiTarget: e, emojiName: n } = t,
            s = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
            o = a.useRef(e),
            [r, c] = a.useState(!0),
            u = a.useCallback(() => {
                c(!1);
            }, []);
        if (s || !r) return null;
        let d = null != n ? k.ZP.getURL(n) : void 0;
        return (0, i.jsx)(C.Z, {
            confettiTarget: o.current,
            emojiURL: d,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: W,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
