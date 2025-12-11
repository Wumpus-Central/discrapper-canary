n.d(e, {
    PI: () => k,
    TB: () => b,
    ZP: () => j,
}),
    n(388685),
    n(415506);
var l,
    s = n(54381),
    i = n(473749),
    a = n(512722),
    r = n.n(a),
    C = n(442837),
    c = n(481060),
    d = n(16084),
    u = n(987209),
    o = n(563132),
    L = n(179118),
    H = n(912788),
    M = n(509545),
    h = n(55563),
    Z = n(63063),
    p = n(74538),
    g = n(296848),
    m = n(335105),
    N = n(741245),
    f = n(783017),
    x = n(474936),
    E = n(282793),
    _ = n(981631),
    I = n(283307),
    T = n(96011),
    P = n(388032),
    R = n(24921);
function v(t) {
    let e,
        { planId: n, startingPremiumSubscriptionPlanId: l, paymentSourceType: i } = t,
        [a, c] = (0, C.Wu)([M.Z], () => [M.Z.get(l), M.Z.get(n)]);
    if ((r()(null != a && null != c, "Missing startingPlan or newPlan"), x.Y1.indexOf(l) < x.Y1.indexOf(n)))
        switch (n) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                (e = P.intl.string(P.t.knvOVz)),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (e = P.intl.format(P.t.o6hBiR, {}));
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                (e = P.intl.string(P.t.f8Dquh)),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (e = P.intl.format(P.t.A4THYt, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                (e = P.intl.string(P.t.YZd5rw)),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (e = P.intl.format(P.t.MHAxpE, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                (e = P.intl.formatToPlainString(P.t["M/Lknl"], { numFreeGuildSubscriptions: x.cb })),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) &&
                        (e = P.intl.format(P.t.mULxLW, { numFreeGuildSubscriptions: x.cb }));
                break;
            case x.Xh.PREMIUM_3_MONTH_TIER_2:
            case x.Xh.PREMIUM_6_MONTH_TIER_2:
                e = P.intl.string(P.t.aaCoW6);
                break;
            case x.Xh.PREMIUM_MONTH_TIER_0:
            case x.Xh.PREMIUM_YEAR_TIER_0:
                e = P.intl.string(P.t["XEoQ7+"]);
                break;
            default:
                throw Error("Unexpected planId: ".concat(n));
        }
    else if (a.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1) e = P.intl.string(P.t.PNX4NM);
    else
        switch (c.skuId) {
            case x.Si.TIER_0:
                e = P.intl.string(P.t["XEoQ7+"]);
                break;
            case x.Si.TIER_1:
                e = P.intl.string(P.t.nLI1Kr);
                break;
            case x.Si.TIER_2:
                e = 1 !== a.intervalCount ? P.intl.string(P.t.qSZZVA) : P.intl.string(P.t.RNjcNg);
                break;
            default:
                throw Error("Unexpected skuId: ".concat(c.skuId));
        }
    return (0, s.jsx)("div", {
        className: R.text,
        children: e,
    });
}
var k = (((l = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), l);
function j(t) {
    let e,
        n,
        {
            planId: l,
            enableNoPaymentTrial: a,
            startingPremiumSubscriptionPlanId: u,
            onClose: L,
            followupSKUInfo: H,
            isDowngrade: k,
            hideClose: j,
            postSuccessGuild: b,
            paymentSourceType: w,
            startingFractionalPremiumEndsAt: U,
            customCTAType: A,
        } = t,
        { isDisplayingWowMomentConfirmation: O, customCheckoutFlow: S, isPremiumGroupPurchase: X } = (0, o.JL)(),
        { theme: y } = (0, c.TCT)(),
        D = (0, C.e7)([h.Z], () => (null != H ? h.Z.get(H.id) : null)),
        Y = (0, g.qH)(U);
    i.useEffect(() => {
        if (null == H || null != D) return;
        let { applicationId: t, id: e } = H;
        (0, d.$N)(t, e).catch(_.VqG);
    }, [H, D]);
    let B = (t) =>
        X
            ? P.intl.formatToPlainString(T.default.pDiwHe, {
                  premiumGroupProductName: (0, E.sO)(),
                  totalSeats: E.v$,
              })
            : t.skuId === x.Si.TIER_0
              ? _.X7u.has(null != w ? w : _.HeQ.UNKNOWN)
                  ? P.intl.format(P.t.o6hBiR, {})
                  : P.intl.string(P.t["AGf/ye"])
              : t.skuId === x.Si.TIER_1
                ? _.X7u.has(null != w ? w : _.HeQ.UNKNOWN)
                    ? P.intl.format(P.t.o6hBiR, {})
                    : P.intl.string(P.t.knvOVz)
                : _.X7u.has(null != w ? w : _.HeQ.UNKNOWN)
                  ? P.intl.format(P.t.A4THYt, {})
                  : a
                    ? P.intl.string(P.t["g52y/r"])
                    : P.intl.string(P.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === A)
        e = (0, s.jsx)("div", {
            className: R.text,
            children: (0, s.jsxs)("p", {
                children: [P.intl.string(P.t.bIVRSQ), " ", P.intl.string(P.t["0UJqOy"])],
            }),
        });
    else if (null != D)
        e = (0, s.jsx)("div", {
            className: R.text,
            children: P.intl.format(P.t["tsQOs+"], { skuName: D.name }),
        });
    else if (Y && !k) {
        let t = M.Z.get(l);
        r()(null != t, "Missing plan"),
            t.skuId === x.Si.TIER_0
                ? (e = (0, s.jsxs)("div", {
                      className: R.text,
                      children: [
                          (0, s.jsx)("p", { children: P.intl.string(P.t["L9lcG/"]) }),
                          (0, s.jsx)("p", {
                              children: P.intl.format(P.t.EoDFuN, {
                                  helpCenterLink: Z.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (t.skuId === x.Si.TIER_1 || t.skuId === x.Si.TIER_2) &&
                  (e = (0, s.jsxs)("div", {
                      className: R.text,
                      children: [
                          (0, s.jsx)("p", { children: P.intl.string(P.t.UPpbP3) }),
                          (0, s.jsx)("p", {
                              children: P.intl.format(P.t.EoDFuN, {
                                  helpCenterLink: Z.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != u)
        e = (0, s.jsx)(v, {
            planId: l,
            startingPremiumSubscriptionPlanId: u,
        });
    else if (null != b) {
        let t = M.Z.get(l);
        r()(null != t, "Missing plan"),
            (e = (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: R.text,
                        children: B(t),
                    }),
                    (0, s.jsx)("div", {
                        className: R.text,
                        children: P.intl.format(P.t["6aZ0NR"], { guildName: b.name }),
                    }),
                ],
            }));
    } else {
        let t = M.Z.get(l);
        r()(null != t, "Missing plan"),
            (e = (0, s.jsx)("div", {
                className: R.text,
                children: B(t),
            }));
    }
    let Q = p.ZP.getPremiumType(l);
    r()(null != Q, "premium type should not be null in purchase confirmation");
    let [W, K] = i.useState(!1),
        G = i.useCallback(() => {
            null != L && (L(), S === I.cL.APPLE_PAYMENT_LINK && K(!0));
        }, [L, S]);
    n = X
        ? P.intl.string(T.default.clIveA)
        : "deeplink_to_desktop_app" === A || S === I.cL.APPLE_PAYMENT_LINK
          ? P.intl.string(P.t.qXV2XU)
          : null != D
            ? P.intl.formatToPlainString(P.t["1qGgm4"], { skuName: D.name })
            : k
              ? P.intl.string(P.t.QJ9EyM)
              : null != b
                ? P.intl.string(P.t.ta3cXY)
                : P.intl.string(P.t.TkTvBz);
    let V = () =>
        _.X7u.has(null != w ? w : _.HeQ.UNKNOWN)
            ? N.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != u
              ? N.ZP.Types.PREMIUM_UPDATED
              : N.ZP.Types.PREMIUM_ACTIVATED;
    return O
        ? (0, s.jsx)(f.Z, {
              type: V(),
              text: e,
              buttonText: n,
              hideClose: j,
              onClose: G,
              buttonLoading: W,
          })
        : (0, s.jsxs)("div", {
              className: R.confirmation,
              children: [
                  (0, s.jsx)(m.Z, {
                      type: V(),
                      theme: y,
                  }),
                  e,
                  j
                      ? null
                      : (0, s.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: R.button,
                            children: (0, s.jsx)(c.Button, {
                                variant: "primary",
                                text: n,
                                onClick: G,
                                loading: W,
                            }),
                        }),
              ],
          });
}
function b(t) {
    let { planId: e, onClose: n } = t,
        {
            giftRecipient: l,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftMessageError: c,
            isSendingMessage: d,
        } = (0, u.wD)(),
        o = (0, C.e7)([M.Z], () => M.Z.get(e));
    r()(null != o, "Missing plan");
    let h = (0, C.e7)([H.Z], () => H.Z.getGiftCode(o.skuId));
    return (0, s.jsx)(L.Z, {
        giftCode: h,
        subscriptionPlan: o,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: l,
        giftMessageError: c,
        isSendingMessage: d,
    });
}
