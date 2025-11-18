n.d(e, { default: () => U }), n(388685);
var i = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    c = n(793030),
    l = n(442837),
    r = n(544891),
    u = n(780384),
    d = n(481060),
    _ = n(775644),
    f = n(493773),
    x = n(410030),
    m = n(607070),
    p = n(100527),
    g = n(906732),
    C = n(535139),
    h = n(812206),
    j = n(715627),
    S = n(146779),
    k = n(763296),
    I = n(594174),
    T = n(626135),
    E = n(176354),
    L = n(877481),
    v = n(669079),
    y = n(823379),
    N = n(51144),
    R = n(579201),
    A = n(683668),
    b = n(55121),
    M = n(438926),
    O = n(582113),
    P = n(981631),
    Z = n(388032),
    D = n(932672),
    G = n(167969),
    B = n(557256);
function U(t) {
    let {
            transitionState: e,
            sku: n,
            onClose: s,
            giftCode: o,
            channelContext: c,
            customGiftMessage: u,
            emojiName: d,
            soundId: x,
            analyticsLocations: m,
        } = t,
        [C, j] = a.useState({ state: "LINK" }),
        [S, k] = a.useState(!1),
        I = (0, l.e7)([h.Z], () => h.Z.getApplication(n.applicationId)),
        { analyticsLocations: E } = (0, g.ZP)(null != m ? m : [], p.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL);
    a.useEffect(() => {
        o.redeemed &&
            "LINK" === C.state &&
            j({
                state: "ERROR",
                error: new r.yZ(Z.intl.string(Z.t.Iw2TUW), P.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [o, C.state]);
    let L = a.useRef({
        analyticsLocations: E,
        giftCode: o,
        hasCustomMessage: null != u && "" !== u,
        customGiftMessage: u,
        skuProductLine: n.productLine,
        emojiName: d,
        soundId: x,
        skuId: n.id,
    });
    (0, f.ZP)(() => {
        let { analyticsLocations: t, skuId: e } = L.current;
        T.default.track(P.rMx.OPEN_MODAL, {
            location_stack: t,
            type: O.tb,
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
            } = L.current;
            T.default.track(P.rMx.GIFT_ACCEPT_STEP, {
                to_step: C.state,
                location_stack: t,
                has_custom_message: e,
                is_custom_message_edited: e && n !== Z.intl.string(Z.t.ZkOo1U),
                gift_style: i.giftStyle,
                gift_code: i.code,
                emoji_name: a,
                sound_id: s,
                product_line: o,
            });
        }, [C.state]);
    let v = a.useCallback(async () => {
        var t, e;
        let {
            analyticsLocations: n,
            skuId: i,
            hasCustomMessage: a,
            customGiftMessage: s,
            emojiName: l,
            soundId: r,
        } = L.current;
        T.default.track(P.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: n,
            sku_id: i,
            application_id: null == I ? void 0 : I.id,
            gift_code: o.code,
            gift_style: null != (e = null == (t = o.giftStyle) ? void 0 : t.toString()) ? e : null,
            has_custom_message: a,
            is_custom_message_edited: a && s !== Z.intl.string(Z.t.ZkOo1U),
            emoji_name: l,
            sound_id: r,
        });
        try {
            k(!0),
                await _.Z.redeemGiftCode({
                    code: o.code,
                    options: { channelId: c },
                }),
                j({ state: "SUCCESS" });
        } catch (t) {
            j({
                state: "ERROR",
                error: t,
            });
        } finally {
            k(!1);
        }
    }, [o, j, c, null == I ? void 0 : I.id]);
    if (null == I) return null;
    switch (C.state) {
        case "LINK":
            return (0, i.jsx)(w, {
                sku: n,
                application: I,
                transitionState: e,
                onClose: s,
                successStateButtonText: Z.intl.string(Z.t.go1e4x),
                onSuccessButtonClick: v,
                isSuccessButtonLoading: S,
                analyticsLocations: E,
            });
        case "SUCCESS":
            return (0, i.jsx)(W, {
                transitionState: e,
                application: I,
                sku: n,
                giftCode: o,
                customGiftMessage: u,
                onClose: s,
                analyticsLocations: E,
                emojiName: d,
                soundId: x,
            });
        case "ERROR":
            return (0, i.jsx)(F, {
                transitionState: e,
                onClose: s,
                error: C.error,
            });
        default:
            (0, y.vE)(C);
    }
}
let F = (t) => {
    let { transitionState: e, onClose: n, error: a } = t,
        s = I.default.getCurrentUser(),
        o = (0, v.QW)(a, s),
        l = (0, x.ZP)(),
        r = (0, u.wj)(l);
    return (0, i.jsxs)(c.IX, {
        transitionState: e,
        onClose: n,
        children: [
            (0, i.jsx)(c.xBx, {
                graphic: {
                    type: "image",
                    src: r ? G : B,
                },
            }),
            (0, i.jsx)(c.fef, { children: o }),
        ],
    });
};
function w(t) {
    let {
            sku: e,
            application: n,
            transitionState: s,
            onClose: o,
            successStateButtonText: l,
            onSuccessButtonClick: r,
            isSuccessButtonLoading: u,
            analyticsLocations: _,
        } = t,
        { hasAlreadyLinked: f, canStartAuthorization: x, startAuthorization: m, fetched: p } = (0, C.F)(n),
        g = a.useRef({
            analyticsLocations: _,
            skuId: e.id,
            applicationId: n.id,
            canStartAuthorization: x,
        });
    a.useEffect(() => {
        g.current.canStartAuthorization = x;
    }, [x]),
        a.useEffect(() => {
            if (!p) return;
            let { analyticsLocations: t, skuId: e, applicationId: n, canStartAuthorization: i } = g.current;
            T.default.track(P.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                location_stack: t,
                sku_id: e,
                application_id: n,
                is_gift: !0,
                is_account_linked: f,
                can_start_authorization: i,
            });
        }, [p, f]);
    let h = a.useCallback(() => {
        let { analyticsLocations: t, skuId: e, applicationId: n } = g.current;
        T.default.track(P.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
            location_stack: t,
            sku_id: e,
            application_id: n,
            is_gift: !0,
        }),
            m();
    }, [m]);
    if (!p)
        return (0, i.jsx)(c.IX, {
            transitionState: s,
            onClose: o,
            children: (0, i.jsx)(c.fef, {
                children: (0, i.jsx)("div", {
                    className: D.loadingContainer,
                    children: (0, i.jsx)(d.$jN, {}),
                }),
            }),
        });
    let j = f
        ? {
              variant: "primary",
              text: l,
              onClick: r,
              loading: u,
          }
        : {
              variant: "primary",
              text: Z.intl.string(Z.t["VDAhr+"]),
              onClick: h,
              icon: c.uIJ,
              disabled: !x,
          };
    return (0, i.jsx)(b.M, {
        sku: e,
        application: n,
        transitionState: s,
        onClose: o,
        hasAlreadyLinked: f,
        canStartAuthorization: x,
        primaryCTAButtonProps: j,
        bodyText: Z.intl.formatToPlainString(Z.t.PaYE38, { applicationName: n.name }),
        title: Z.intl.string(Z.t["Bn1J+a"]),
    });
}
function W(t) {
    let {
            transitionState: e,
            onClose: n,
            sku: s,
            application: r,
            giftCode: u,
            customGiftMessage: _,
            analyticsLocations: f,
            emojiName: x,
            soundId: m,
        } = t,
        p = (0, A.a)(r),
        g = (0, R.I)(r),
        [C, h] = a.useState(null),
        j = (0, l.e7)([I.default], () => I.default.getUser(u.userId)),
        S = N.ZP.getName(j),
        k = a.useRef({
            analyticsLocations: f,
            skuId: s.id,
            applicationId: r.id,
            isLaunchable: p,
            isApplicationConnected: g,
        });
    if (
        (a.useEffect(() => {
            (k.current.isLaunchable = p), (k.current.isApplicationConnected = g);
        }, [p, g]),
        null == p)
    )
        return (0, i.jsx)(c.IX, {
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(c.fef, { children: (0, i.jsx)(d.$jN, {}) }),
        });
    let E =
            p && !g
                ? {
                      variant: "primary",
                      text: Z.intl.string(Z.t["s+J8Dl"]),
                      onClick: () => {
                          T.default.track(P.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                              location_stack: f,
                              sku_id: s.id,
                              application_id: r.id,
                              is_gift: !0,
                          }),
                              L.Z.launchGame(r.id);
                      },
                      icon: c.rgF,
                  }
                : {
                      variant: "primary",
                      text: Z.intl.string(Z.t.cpT0Cq),
                      onClick: () => {
                          T.default.track(P.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                              location_stack: f,
                              sku_id: s.id,
                              application_id: r.id,
                              is_gift: !0,
                              is_launchable: null != p && p,
                              is_application_connected: g,
                          }),
                              n();
                      },
                  },
        v = null != _ && "" !== _;
    return (0, i.jsxs)(c.IX, {
        transitionState: e,
        onClose: n,
        children: [
            (0, i.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-".concat(100, "px"),
                },
                ref: (t) => h(t),
            }),
            (0, i.jsx)(M.y, {
                sku: s,
                title: Z.intl.formatToPlainString(Z.t["6yrIzU"], { sender: S }),
            }),
            (0, i.jsxs)(c.fef, {
                children: [
                    v &&
                        (0, i.jsx)(c.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: D.customGiftMessage,
                            children: _,
                        }),
                    (0, i.jsx)("div", {
                        className: o()({ [D.giftSentToGameNoticeContainerPadding]: v }),
                        children: (0, i.jsx)(c.M14, {
                            type: "success",
                            children: Z.intl.formatToPlainString(Z.t.W2znvX, {
                                skuName: s.name,
                                applicationName: r.name,
                            }),
                        }),
                    }),
                    null != C &&
                        (0, i.jsx)(X, {
                            confettiTarget: C,
                            emojiName: x,
                        }),
                    null != m && (0, i.jsx)(z, { soundId: m }),
                ],
            }),
            (0, i.jsx)(c.Go$, {
                actions: [E],
                actionsFullWidth: !0,
            }),
        ],
    });
}
let z = (t) => {
        let { soundId: e } = t;
        return (
            a.useEffect(() => {
                var t;
                let n = k.Z.getSoundById(e);
                (0, S.playGiftSound)(e, null != (t = null == n ? void 0 : n.volume) ? t : 1);
            }, [e]),
            null
        );
    },
    K = {
        xMin: -100,
        xMax: 100,
        yMin: -80,
        yMax: -180,
    },
    X = (t) => {
        let { confettiTarget: e, emojiName: n } = t,
            s = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
            o = a.useRef(e),
            [c, r] = a.useState(!0),
            u = a.useCallback(() => {
                r(!1);
            }, []);
        if (s || !c) return null;
        let d = null != n ? E.ZP.getURL(n) : void 0;
        return (0, i.jsx)(j.Z, {
            confettiTarget: o.current,
            emojiURL: d,
            numBursts: 8,
            particlesPerBurst: 60,
            speedValues: K,
            dragCoefficientValue: 1,
            onAnimationEnd: u,
        });
    };
