n.d(t, {
    PI: () => v,
    TB: () => k,
    ZP: () => R,
}),
    n(388685),
    n(415506);
var s,
    l = n(951288),
    i = n(647438),
    a = n(512722),
    r = n.n(a),
    C = n(442837),
    c = n(481060),
    d = n(16084),
    L = n(987209),
    u = n(563132),
    o = n(179118),
    H = n(912788),
    M = n(509545),
    h = n(55563),
    p = n(63063),
    Z = n(74538),
    m = n(296848),
    g = n(335105),
    N = n(741245),
    f = n(783017),
    x = n(474936),
    _ = n(981631),
    E = n(283307),
    I = n(388032),
    T = n(694760);
function P(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: s, paymentSourceType: i } = e,
        [a, c] = (0, C.Wu)([M.Z], () => [M.Z.get(s), M.Z.get(n)]);
    if ((r()(null != a && null != c, "Missing startingPlan or newPlan"), x.Y1.indexOf(s) < x.Y1.indexOf(n)))
        switch (n) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                (t = I.intl.string(I.t.knvOV1)),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.o6hBiY, {}));
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                (t = I.intl.string(I.t.f8Dqur)),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.A4THYm, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                (t = I.intl.string(I.t.YZd5r6)),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.MHAxpK, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                (t = I.intl.formatToPlainString(I.t["M/Lknp"], { numFreeGuildSubscriptions: x.cb })),
                    _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) &&
                        (t = I.intl.format(I.t.mULxLS, { numFreeGuildSubscriptions: x.cb }));
                break;
            case x.Xh.PREMIUM_3_MONTH_TIER_2:
            case x.Xh.PREMIUM_6_MONTH_TIER_2:
                t = I.intl.string(I.t.aaCoW1);
                break;
            case x.Xh.PREMIUM_MONTH_TIER_0:
            case x.Xh.PREMIUM_YEAR_TIER_0:
                t = I.intl.string(I.t["XEoQ7+"]);
                break;
            default:
                throw Error("Unexpected planId: ".concat(n));
        }
    else if (a.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1) t = I.intl.string(I.t.PNX4ND);
    else
        switch (c.skuId) {
            case x.Si.TIER_0:
                t = I.intl.string(I.t["XEoQ7+"]);
                break;
            case x.Si.TIER_1:
                t = I.intl.string(I.t.nLI1Ki);
                break;
            case x.Si.TIER_2:
                t = 1 !== a.intervalCount ? I.intl.string(I.t.qSZZVF) : I.intl.string(I.t.RNjcNj);
                break;
            default:
                throw Error("Unexpected skuId: ".concat(c.skuId));
        }
    return (0, l.jsx)("div", {
        className: T.text,
        children: t,
    });
}
var v = (((s = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), s);
function R(e) {
    let t,
        n,
        {
            planId: s,
            enableNoPaymentTrial: a,
            startingPremiumSubscriptionPlanId: L,
            onClose: o,
            followupSKUInfo: H,
            isDowngrade: v,
            hideClose: R,
            postSuccessGuild: k,
            paymentSourceType: j,
            startingFractionalPremiumEndsAt: b,
            customCTAType: U,
        } = e,
        { enablePremiumBrandRefresh: w, isDisplayingWowMomentConfirmation: A, customCheckoutFlow: O } = (0, u.JL)(),
        { theme: S } = (0, c.TCT)(),
        X = (0, C.e7)([h.Z], () => (null != H ? h.Z.get(H.id) : null)),
        y = (0, m.qH)(b);
    i.useEffect(() => {
        if (null == H || null != X) return;
        let { applicationId: e, id: t } = H;
        (0, d.$N)(e, t).catch(_.VqG);
    }, [H, X]);
    let Y = (e) =>
        e.skuId === x.Si.TIER_0
            ? _.X7u.has(null != j ? j : _.HeQ.UNKNOWN)
                ? I.intl.format(I.t.o6hBiY, {})
                : I.intl.string(I.t["AGf/yc"])
            : e.skuId === x.Si.TIER_1
              ? _.X7u.has(null != j ? j : _.HeQ.UNKNOWN)
                  ? I.intl.format(I.t.o6hBiY, {})
                  : I.intl.string(I.t.knvOV1)
              : _.X7u.has(null != j ? j : _.HeQ.UNKNOWN)
                ? I.intl.format(I.t.A4THYm, {})
                : a
                  ? I.intl.string(I.t["g52y/v"])
                  : I.intl.string(I.t.aTUr3d);
    if ("deeplink_to_desktop_app" === U)
        t = (0, l.jsx)("div", {
            className: T.text,
            children: (0, l.jsxs)("p", {
                children: [I.intl.string(I.t.bIVRSU), " ", I.intl.string(I.t["0UJqOz"])],
            }),
        });
    else if (null != X)
        t = (0, l.jsx)("div", {
            className: T.text,
            children: I.intl.format(I.t.tsQOs7, { skuName: X.name }),
        });
    else if (y && !v) {
        let e = M.Z.get(s);
        r()(null != e, "Missing plan"),
            e.skuId === x.Si.TIER_0
                ? (t = (0, l.jsxs)("div", {
                      className: T.text,
                      children: [
                          (0, l.jsx)("p", { children: I.intl.string(I.t.L9lcGx) }),
                          (0, l.jsx)("p", {
                              children: I.intl.format(I.t.EoDFuL, {
                                  helpCenterLink: p.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === x.Si.TIER_1 || e.skuId === x.Si.TIER_2) &&
                  (t = (0, l.jsxs)("div", {
                      className: T.text,
                      children: [
                          (0, l.jsx)("p", { children: I.intl.string(I.t.UPpbPz) }),
                          (0, l.jsx)("p", {
                              children: I.intl.format(I.t.EoDFuL, {
                                  helpCenterLink: p.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != L)
        t = (0, l.jsx)(P, {
            planId: s,
            startingPremiumSubscriptionPlanId: L,
        });
    else if (null != k) {
        let e = M.Z.get(s);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", {
                        className: T.text,
                        children: Y(e),
                    }),
                    (0, l.jsx)("div", {
                        className: T.text,
                        children: I.intl.format(I.t["6aZ0NT"], { guildName: k.name }),
                    }),
                ],
            }));
    } else {
        let e = M.Z.get(s);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsx)("div", {
                className: T.text,
                children: Y(e),
            }));
    }
    let D = Z.ZP.getPremiumType(s);
    r()(null != D, "premium type should not be null in purchase confirmation");
    let [B, K] = i.useState(!1),
        Q = i.useCallback(() => {
            null != o && (o(), O === E.cL.APPLE_PAYMENT_LINK && K(!0));
        }, [o, O]);
    n =
        "deeplink_to_desktop_app" === U || O === E.cL.APPLE_PAYMENT_LINK
            ? I.intl.string(I.t.qXV2XV)
            : null != X
              ? I.intl.formatToPlainString(I.t["1qGgm5"], { skuName: X.name })
              : v
                ? I.intl.string(I.t.QJ9EyM)
                : null != k
                  ? I.intl.string(I.t.ta3cXV)
                  : I.intl.string(I.t.TkTvBw);
    let W = () =>
        _.X7u.has(null != j ? j : _.HeQ.UNKNOWN)
            ? N.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != L
              ? N.ZP.Types.PREMIUM_UPDATED
              : N.ZP.Types.PREMIUM_ACTIVATED;
    return A
        ? (0, l.jsx)(f.Z, {
              type: W(),
              text: t,
              buttonText: n,
              hideClose: R,
              onClose: Q,
              buttonLoading: B,
          })
        : (0, l.jsxs)("div", {
              className: T.confirmation,
              children: [
                  w
                      ? (0, l.jsx)(g.Z, {
                            type: W(),
                            theme: S,
                        })
                      : (0, l.jsx)(N.ZP, {
                            className: T.banner,
                            theme: S,
                            premiumType: D,
                            type: W(),
                        }),
                  t,
                  R
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: T.button,
                            children: (0, l.jsx)(c.Button, {
                                variant: "primary",
                                text: n,
                                onClick: Q,
                                loading: B,
                            }),
                        }),
              ],
          });
}
function k(e) {
    let { planId: t, onClose: n } = e,
        {
            giftRecipient: s,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftMessageError: c,
            isSendingMessage: d,
        } = (0, L.wD)(),
        u = (0, C.e7)([M.Z], () => M.Z.get(t));
    r()(null != u, "Missing plan");
    let h = (0, C.e7)([H.Z], () => H.Z.getGiftCode(u.skuId));
    return (0, l.jsx)(o.Z, {
        giftCode: h,
        subscriptionPlan: u,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: s,
        giftMessageError: c,
        isSendingMessage: d,
    });
}
