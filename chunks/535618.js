i.d(n, { default: () => D }), i(388685);
var a = i(54381),
    e = i(473749),
    s = i(120356),
    o = i.n(s),
    c = i(793030),
    l = i(442837),
    r = i(544891),
    d = i(780384),
    u = i(481060),
    _ = i(775644),
    x = i(493773),
    f = i(410030),
    m = i(100527),
    g = i(906732),
    C = i(535139),
    p = i(812206),
    h = i(594174),
    S = i(626135),
    T = i(877481),
    j = i(669079),
    k = i(823379),
    I = i(51144),
    E = i(579201),
    L = i(683668),
    N = i(55121),
    v = i(438926),
    y = i(582113),
    R = i(981631),
    A = i(388032),
    O = i(308285),
    b = i(167969),
    M = i(557256);
function D(t) {
    let {
            transitionState: n,
            sku: i,
            onClose: s,
            giftCode: o,
            channelContext: c,
            customGiftMessage: d,
            analyticsLocations: u,
        } = t,
        [f, C] = e.useState({ state: "LINK" }),
        [h, T] = e.useState(!1),
        j = (0, l.e7)([p.Z], () => p.Z.getApplication(i.applicationId)),
        { analyticsLocations: I } = (0, g.ZP)(null != u ? u : [], m.Z.SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL),
        E = null != d && "" !== d;
    (0, x.ZP)(() => {
        S.default.track(R.rMx.OPEN_MODAL, {
            location_stack: I,
            type: y.tb,
            sku_id: i.id,
            application_id: null == j ? void 0 : j.id,
        });
    }),
        e.useEffect(() => {
            S.default.track(R.rMx.GIFT_ACCEPT_STEP, {
                to_step: f.state,
                location_stack: I,
                has_custom_message: E,
                is_custom_message_edited: E && d !== A.intl.string(A.t.ZkOo1U),
                gift_style: o.giftStyle,
                gift_code: o.code,
                emoji_name: null,
                sound_id: null,
                product_line: i.productLine,
            });
        }, [f.state, o, I, E, d, i.productLine]),
        e.useEffect(() => {
            o.redeemed &&
                "LINK" === f.state &&
                C({
                    state: "ERROR",
                    error: new r.yZ(A.intl.string(A.t.Iw2TUW), R.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
                });
        }, [o, f.state]);
    let L = e.useCallback(async () => {
        var t, n;
        S.default.track(R.rMx.SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED, {
            location_stack: I,
            sku_id: i.id,
            application_id: null == j ? void 0 : j.id,
            gift_code: o.code,
            gift_style: null != (n = null == (t = o.giftStyle) ? void 0 : t.toString()) ? n : null,
            has_custom_message: E,
            is_custom_message_edited: E && d !== A.intl.string(A.t.ZkOo1U),
            emoji_name: null,
            sound_id: null,
        });
        try {
            T(!0),
                await _.Z.redeemGiftCode({
                    code: o.code,
                    options: { channelId: c },
                }),
                C({ state: "SUCCESS" });
        } catch (t) {
            C({
                state: "ERROR",
                error: t,
            });
        } finally {
            T(!1);
        }
    }, [o, C, c, I, i.id, null == j ? void 0 : j.id, E, d]);
    if (null == j) return null;
    switch (f.state) {
        case "LINK":
            return (0, a.jsx)(G, {
                sku: i,
                application: j,
                transitionState: n,
                onClose: s,
                successStateButtonText: A.intl.string(A.t.go1e4x),
                onSuccessButtonClick: L,
                isSuccessButtonLoading: h,
                analyticsLocations: I,
            });
        case "SUCCESS":
            return (0, a.jsx)(Z, {
                transitionState: n,
                application: j,
                sku: i,
                giftCode: o,
                customGiftMessage: d,
                onClose: s,
                analyticsLocations: I,
            });
        case "ERROR":
            return (0, a.jsx)(P, {
                transitionState: n,
                onClose: s,
                error: f.error,
            });
        default:
            (0, k.vE)(f);
    }
}
let P = (t) => {
    let { transitionState: n, onClose: i, error: e } = t,
        s = h.default.getCurrentUser(),
        o = (0, j.QW)(e, s),
        l = (0, f.ZP)(),
        r = (0, d.wj)(l);
    return (0, a.jsxs)(c.IX, {
        transitionState: n,
        onClose: i,
        children: [
            (0, a.jsx)(c.xBx, {
                graphic: {
                    type: "image",
                    src: r ? b : M,
                },
            }),
            (0, a.jsx)(c.fef, { children: o }),
        ],
    });
};
function G(t) {
    let {
            sku: n,
            application: i,
            transitionState: s,
            onClose: o,
            successStateButtonText: l,
            onSuccessButtonClick: r,
            isSuccessButtonLoading: d,
            analyticsLocations: _,
        } = t,
        { hasAlreadyLinked: x, canStartAuthorization: f, startAuthorization: m, fetched: g } = (0, C.F)(i);
    if (
        (e.useEffect(() => {
            g &&
                S.default.track(R.rMx.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, {
                    location_stack: _,
                    sku_id: n.id,
                    application_id: i.id,
                    is_gift: !0,
                    is_account_linked: x,
                    can_start_authorization: f,
                });
        }, [g, n.id, i.id, _, x, f]),
        !g)
    )
        return (0, a.jsx)(c.IX, {
            transitionState: s,
            onClose: o,
            children: (0, a.jsx)(c.fef, {
                children: (0, a.jsx)("div", {
                    className: O.loadingContainer,
                    children: (0, a.jsx)(u.$jN, {}),
                }),
            }),
        });
    let p = x
        ? {
              variant: "primary",
              text: l,
              onClick: r,
              loading: d,
          }
        : {
              variant: "primary",
              text: A.intl.string(A.t["VDAhr+"]),
              onClick: () => {
                  S.default.track(R.rMx.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                      location_stack: _,
                      sku_id: n.id,
                      application_id: i.id,
                      is_gift: !0,
                  }),
                      m();
              },
              icon: c.uIJ,
              disabled: !f,
          };
    return (0, a.jsx)(N.M, {
        sku: n,
        application: i,
        transitionState: s,
        onClose: o,
        hasAlreadyLinked: x,
        canStartAuthorization: f,
        primaryCTAButtonProps: p,
        bodyText: A.intl.formatToPlainString(A.t.PaYE38, { applicationName: i.name }),
        title: A.intl.string(A.t["Bn1J+a"]),
    });
}
function Z(t) {
    let {
            transitionState: n,
            onClose: i,
            sku: e,
            application: s,
            giftCode: r,
            customGiftMessage: d,
            analyticsLocations: _,
        } = t,
        x = (0, L.a)(s),
        f = (0, E.I)(s),
        m = (0, l.e7)([h.default], () => h.default.getUser(r.userId)),
        g = I.ZP.getName(m);
    if (null == x)
        return (0, a.jsx)(c.IX, {
            transitionState: n,
            onClose: i,
            children: (0, a.jsx)(c.fef, { children: (0, a.jsx)(u.$jN, {}) }),
        });
    let C =
            x && !f
                ? {
                      variant: "primary",
                      text: A.intl.string(A.t["s+J8Dl"]),
                      onClick: () => {
                          S.default.track(R.rMx.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                              location_stack: _,
                              sku_id: e.id,
                              application_id: s.id,
                              is_gift: !0,
                          }),
                              T.Z.launchGame(s.id);
                      },
                      icon: c.rgF,
                  }
                : {
                      variant: "primary",
                      text: A.intl.string(A.t.cpT0Cq),
                      onClick: () => {
                          S.default.track(R.rMx.SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED, {
                              location_stack: _,
                              sku_id: e.id,
                              application_id: s.id,
                              is_gift: !0,
                              is_launchable: null != x && x,
                              is_application_connected: f,
                          }),
                              i();
                      },
                  },
        p = null != d && "" !== d;
    return (0, a.jsxs)(c.IX, {
        transitionState: n,
        onClose: i,
        children: [
            (0, a.jsx)(v.y, {
                sku: e,
                title: A.intl.formatToPlainString(A.t["6yrIzU"], { sender: g }),
            }),
            (0, a.jsxs)(c.fef, {
                children: [
                    p &&
                        (0, a.jsx)(c.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: O.customGiftMessage,
                            children: d,
                        }),
                    (0, a.jsx)("div", {
                        className: o()({ [O.giftSentToGameNoticeContainerPadding]: p }),
                        children: (0, a.jsx)(c.M14, {
                            type: "success",
                            children: A.intl.formatToPlainString(A.t.W2znvX, {
                                skuName: e.name,
                                applicationName: s.name,
                            }),
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(c.Go$, {
                actions: [C],
                actionsFullWidth: !0,
            }),
        ],
    });
}
