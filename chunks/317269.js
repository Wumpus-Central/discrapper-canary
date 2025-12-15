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
    o = n(987209),
    u = n(563132),
    L = n(179118),
    H = n(912788),
    M = n(509545),
    h = n(55563),
    p = n(63063),
    g = n(74538),
    m = n(296848),
    Z = n(335105),
    N = n(741245),
    f = n(783017),
    x = n(474936),
    _ = n(282793),
    E = n(981631),
    I = n(283307),
    T = n(353149),
    P = n(388032),
    R = n(740853);
function v(t) {
    let e,
        { planId: n, startingPremiumSubscriptionPlanId: l, paymentSourceType: i } = t,
        [a, c] = (0, C.Wu)([M.Z], () => [M.Z.get(l), M.Z.get(n)]);
    if ((r()(null != a && null != c, "Missing startingPlan or newPlan"), x.Y1.indexOf(l) < x.Y1.indexOf(n)))
        switch (n) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                (e = P.intl.string(P.t.knvOVz)),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (e = P.intl.format(P.t.o6hBiR, {}));
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                (e = P.intl.string(P.t.f8Dquh)),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (e = P.intl.format(P.t.A4THYt, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                (e = P.intl.string(P.t.YZd5rw)),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (e = P.intl.format(P.t.MHAxpE, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                (e = P.intl.formatToPlainString(P.t["M/Lknl"], { numFreeGuildSubscriptions: x.cb })),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) &&
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
            case x.Xh.PREMIUM_GROUP_MONTH:
                e = P.intl.formatToPlainString(T.default.pDiwHe, {
                    premiumGroupProductName: (0, _.sO)(),
                    totalSeats: _.v$,
                });
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
            startingPremiumSubscriptionPlanId: o,
            onClose: L,
            followupSKUInfo: H,
            isDowngrade: k,
            hideClose: j,
            postSuccessGuild: b,
            paymentSourceType: U,
            startingFractionalPremiumEndsAt: w,
            customCTAType: A,
        } = t,
        { isDisplayingWowMomentConfirmation: O, customCheckoutFlow: S, isPremiumGroupPurchase: X } = (0, u.JL)(),
        { theme: D } = (0, c.TCT)(),
        y = (0, C.e7)([h.Z], () => (null != H ? h.Z.get(H.id) : null)),
        Y = (0, m.qH)(w);
    i.useEffect(() => {
        if (null == H || null != y) return;
        let { applicationId: t, id: e } = H;
        (0, d.$N)(t, e).catch(E.VqG);
    }, [H, y]);
    let B = (t) =>
        X
            ? P.intl.formatToPlainString(T.default.pDiwHe, {
                  premiumGroupProductName: (0, _.sO)(),
                  totalSeats: _.v$,
              })
            : t.skuId === x.Si.TIER_0
              ? E.X7u.has(null != U ? U : E.HeQ.UNKNOWN)
                  ? P.intl.format(P.t.o6hBiR, {})
                  : P.intl.string(P.t["AGf/ye"])
              : t.skuId === x.Si.TIER_1
                ? E.X7u.has(null != U ? U : E.HeQ.UNKNOWN)
                    ? P.intl.format(P.t.o6hBiR, {})
                    : P.intl.string(P.t.knvOVz)
                : E.X7u.has(null != U ? U : E.HeQ.UNKNOWN)
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
    else if (null != y)
        e = (0, s.jsx)("div", {
            className: R.text,
            children: P.intl.format(P.t["tsQOs+"], { skuName: y.name }),
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
                                  helpCenterLink: p.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT),
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
                                  helpCenterLink: p.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != o)
        e = (0, s.jsx)(v, {
            planId: l,
            startingPremiumSubscriptionPlanId: o,
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
    let Q = g.ZP.getPremiumType(l);
    r()(null != Q, "premium type should not be null in purchase confirmation");
    let [W, G] = i.useState(!1),
        K = i.useCallback(() => {
            null != L && (L(), S === I.cL.APPLE_PAYMENT_LINK && G(!0));
        }, [L, S]);
    n = X
        ? P.intl.string(T.default.clIveA)
        : "deeplink_to_desktop_app" === A || S === I.cL.APPLE_PAYMENT_LINK
          ? P.intl.string(P.t.qXV2XU)
          : null != y
            ? P.intl.formatToPlainString(P.t["1qGgm4"], { skuName: y.name })
            : k
              ? P.intl.string(P.t.QJ9EyM)
              : null != b
                ? P.intl.string(P.t.ta3cXY)
                : P.intl.string(P.t.TkTvBz);
    let V = () =>
        E.X7u.has(null != U ? U : E.HeQ.UNKNOWN)
            ? N.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != o
              ? N.ZP.Types.PREMIUM_UPDATED
              : N.ZP.Types.PREMIUM_ACTIVATED;
    return O
        ? (0, s.jsx)(f.Z, {
              type: V(),
              text: e,
              buttonText: n,
              hideClose: j,
              onClose: K,
              buttonLoading: W,
          })
        : (0, s.jsxs)("div", {
              className: R.confirmation,
              children: [
                  (0, s.jsx)(Z.Z, {
                      type: V(),
                      theme: D,
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
                                onClick: K,
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
        } = (0, o.wD)(),
        u = (0, C.e7)([M.Z], () => M.Z.get(e));
    r()(null != u, "Missing plan");
    let h = (0, C.e7)([H.Z], () => H.Z.getGiftCode(u.skuId));
    return (0, s.jsx)(L.Z, {
        giftCode: h,
        subscriptionPlan: u,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: l,
        giftMessageError: c,
        isSendingMessage: d,
    });
}
