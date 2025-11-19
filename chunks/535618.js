n.d(e, { default: () => G }), n(388685);
var i = n(54381),
    a = n(473749),
    s = n(793030),
    o = n(442837),
    c = n(544891),
    l = n(780384),
    r = n(481060),
    u = n(775644),
    d = n(493773),
    _ = n(410030),
    f = n(607070),
    x = n(100527),
    m = n(906732),
    g = n(535139),
    p = n(812206),
    C = n(715627),
    S = n(146779),
    h = n(763296),
    j = n(594174),
    T = n(626135),
    k = n(176354),
    I = n(877481),
    E = n(669079),
    L = n(823379),
    v = n(51144),
    y = n(579201),
    N = n(683668),
    R = n(55121),
    A = n(438926),
    b = n(582113),
    M = n(981631),
    O = n(388032),
    P = n(308285),
    Z = n(167969),
    D = n(557256);
function G(t) {
    let {
            transitionState: e,
            sku: n,
            onClose: s,
            giftCode: l,
            channelContext: r,
            customGiftMessage: _,
            emojiName: f,
            soundId: g,
            analyticsLocations: C,
        } = t,
        [S, h] = a.useState({ state: "LINK" }),
        [j, k] = a.useState(!1),
        I = (0, o.e7)([p.Z], () => p.Z.getApplication(n.applicationId)),
        { analyticsLocations: E } = (0, m.ZP)(null != C ? C : [], x.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        l.redeemed &&
            "LINK" === S.state &&
            h({
                state: "ERROR",
                error: new c.yZ(O.intl.string(O.t.Iw2TUW), M.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [l, S.state]);
    let v = a.useRef({
        analyticsLocations: E,
        giftCode: l,
        hasCustomMessage: null != _ && "" !== _,
        customGiftMessage: _,
        skuProductLine: n.productLine,
        emojiName: f,
        soundId: g,
        skuId: n.id,
    });
    (0, d.ZP)(() => {
        let { analyticsLocations: t, skuId: e } = v.current;
        T.default.track(M.rMx.OPEN_MODAL, {
            location_stack: t,
            type: b.tb,
            sku_id: e,
            application_id: null == I ? void 0 : I.id,
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
                skuProductLine: o,
            } = v.current;
            T.default.track(M.rMx.GIFT_ACCEPT_STEP, {
                to_step: S.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && n !== O.intl.string(O.t.ZkOo1U),
                gift_style: i.giftStyle,
                gift_code: i.code,
                emoji_name: a,
                sound_id: s,
                product_line: o,
            });
        }, [S.state]);
    let y = a.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: n,
            skuId: i,
            hasCustomMessage: a,
            customGiftMessage: s,
            emojiName: o,
            soundId: c,
        } = v.current;
        T.default.track(M.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: n,
            sku_id: i,
            application_id: null == I ? void 0 : I.id,
            gift_code: l.code,
            gift_style: null != (e = null == (t = l.giftStyle) ? void 0 : t.toString()) ? e : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== O.intl.string(O.t.ZkOo1U),
            emoji_name: o,
            sound_id: c,
        });
        try {
            k(!0),
                await u.Z.redeemGiftCode({
                    code: l.code,
                    options: { channelId: r },
                }),
                h({ state: "SUCCESS" });
        } catch (t) {
            h({
                state: "ERROR",
                error: t,
            });
        } finally {
            k(!1);
        }
    }, [l, h, r, null == I ? void 0 : I.id]);
    if (null == I) return null;
    switch (S.state) {
        case "LINK":
            return (0, i.jsx)(U, {
                sku: n,
                application: I,
                transitionState: e,
                onClose: s,
                successStateButtonText: O.intl.string(O.t.go1e4x),
                onSuccessButtonClick: y,
                isSuccessButtonLoading: j,
                analyticsLocations: E,
            });
        case "SUCCESS":
            return (0, i.jsx)(F, {
                transitionState: e,
                application: I,
                sku: n,
                giftCode: l,
                customGiftMessage: _,
                onClose: s,
                analyticsLocations: E,
                emojiName: f,
                soundId: g,
            });
        case "ERROR":
            return (0, i.jsx)(B, {
                transitionState: e,
                onClose: s,
                error: S.error,
            });
        default:
            (0, L.vE)(S);
    }
}
let B = (t) => {
    let { transitionState: e, onClose: n, error: a } = t,
        o = j.default.getCurrentUser(),
        c = (0, E.QW)(a, o),
        r = (0, _.ZP)(),
        u = (0, l.wj)(r);
    return (0, i.jsxs)(s.IX, {
        transitionState: e,
        onClose: n,
        children: [
            (0, i.jsx)(s.xBx, {
                graphic: {
                    type: "image",
                    src: u ? Z : D,
                },
            }),
            (0, i.jsx)(s.fef, { children: c }),
        ],
    });
};
function U(t) {
    let {
            sku: e,
            application: n,
            transitionState: o,
            onClose: c,
            successStateButtonText: l,
            onSuccessButtonClick: u,
            isSuccessButtonLoading: d,
            analyticsLocations: _,
        } = t,
        { hasAlreadyLinked: f, canStartAuthorization: x, startAuthorization: m, fetched: p } = (0, g.F)(n),
        C = a.useRef({
            analyticsLocations: _,
            skuId: e.id,
            applicationId: n.id,
            canStartAuthorization: x,
        });
    a.useEffect(() => {
        C.current.canStartAuthorization = x;
    }, [x]),
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
    let S = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: n } = C.current;
        T.default.track(M.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: n,
            is_gift: !0,
        }),
            m();
    }, [m]);
    if (!p)
        return (0, i.jsx)(s.IX, {
            transitionState: o,
            onClose: c,
            children: (0, i.jsx)(s.fef, {
                children: (0, i.jsx)("div", {
                    className: P.loadingContainer,
                    children: (0, i.jsx)(r.$jN, {}),
                }),
            }),
        });
    let h = f
        ? {
              variant: "primary",
              text: l,
              onClick: u,
              loading: d,
          }
        : {
              variant: "primary",
              text: O.intl.string(O.t["VDAhr+"]),
              onClick: S,
              icon: s.uIJ,
              disabled: !x,
          };
    return (0, i.jsx)(R.M, {
        sku: e,
        application: n,
        transitionState: o,
        onClose: c,
        hasAlreadyLinked: f,
        canStartAuthorization: x,
        primaryCTAButtonProps: h,
        bodyText: O.intl.formatToPlainString(O.t.PaYE38, { applicationName: n.name }),
        title: O.intl.string(O.t["Bn1J+a"]),
    });
}
function F(t) {
    let {
            transitionState: e,
            onClose: n,
            sku: c,
            application: l,
            giftCode: u,
            customGiftMessage: d,
            analyticsLocations: _,
            emojiName: f,
            soundId: x,
        } = t,
        m = (0, N.a)(l),
        g = (0, y.I)(l),
        [p, C] = a.useState(null),
        S = (0, o.e7)([j.default], () => j.default.getUser(u.userId)),
        h = v.ZP.getName(S),
        k = a.useRef({
            analyticsLocations: _,
            skuId: c.id,
            applicationId: l.id,
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
            children: (0, i.jsx)(s.fef, { children: (0, i.jsx)(r.$jN, {}) }),
        });
    let E =
        m && !g
            ? {
                  variant: "primary",
                  text: O.intl.string(O.t["s+J8Dl"]),
                  onClick: () => {
                      T.default.track(M.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                          location_stack: _,
                          sku_id: c.id,
                          application_id: l.id,
                          is_gift: !0,
                      }),
                          I.Z.launchGame(l.id);
                  },
                  icon: s.rgF,
              }
            : {
                  variant: "primary",
                  text: O.intl.string(O.t.cpT0Cq),
                  onClick: () => {
                      T.default.track(M.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                          location_stack: _,
                          sku_id: c.id,
                          application_id: l.id,
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
            (0, i.jsx)(A.y, { sku: c }),
            (0, i.jsxs)(s.fef, {
                children: [
                    (0, i.jsx)(s.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: P.giftSenderText,
                        children: O.intl.formatToPlainString(O.t["6yrIzU"], { sender: h }),
                    }),
                    null != d &&
                        "" !== d &&
                        (0, i.jsx)(s.xvT, {
                            variant: "text-lg/semibold",
                            color: "text-secondary",
                            className: P.customGiftMessage,
                            children: d,
                        }),
                    (0, i.jsx)("div", {
                        className: P.giftSentToGameNoticeContainerPadding,
                        children: (0, i.jsx)(s.M14, {
                            type: "success",
                            children: O.intl.formatToPlainString(O.t.W2znvX, {
                                skuName: c.name,
                                applicationName: l.name,
                            }),
                        }),
                    }),
                    null != p &&
                        (0, i.jsx)(z, {
                            confettiTarget: p,
                            emojiName: f,
                        }),
                    null != x && (0, i.jsx)(w, { soundId: x }),
                ],
            }),
            (0, i.jsx)(s.Go$, {
                actions: [E],
                actionsFullWidth: !0,
            }),
        ],
    });
}
let w = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                var t;
                let n = h.Z.getSoundById(e);
                (0, S.playGiftSound)(e, null != (t = null == n ? void 0 : n.volume) ? t : 1);
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
    z = (t) => {
        let { confettiTarget: e, emojiName: n } = t,
            s = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
            c = a.useRef(e),
            [l, r] = a.useState(!0),
            u = a.useCallback(() => {
                r(!1);
            }, []);
        if (s || !l) return null;
        let d = null != n ? k.ZP.getURL(n) : void 0;
        return (0, i.jsx)(C.Z, {
            confettiTarget: c.current,
            emojiURL: d,
            numBursts: 5,
            particlesPerBurst: 50,
            speedValues: W,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
