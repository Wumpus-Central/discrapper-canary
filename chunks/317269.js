n.d(t, {
    PI: () => R,
    TB: () => v,
    ZP: () => k,
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
    u = n(987209),
    L = n(563132),
    o = n(179118),
    H = n(912788),
    M = n(509545),
    h = n(55563),
    Z = n(63063),
    p = n(74538),
    m = n(296848),
    g = n(335105),
    N = n(741245),
    f = n(783017),
    x = n(474936),
    E = n(981631),
    _ = n(283307),
    I = n(388032),
    T = n(24921);
function P(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: s, paymentSourceType: i } = e,
        [a, c] = (0, C.Wu)([M.Z], () => [M.Z.get(s), M.Z.get(n)]);
    if ((r()(null != a && null != c, "Missing startingPlan or newPlan"), x.Y1.indexOf(s) < x.Y1.indexOf(n)))
        switch (n) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                (t = I.intl.string(I.t.knvOVz)),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.o6hBiR, {}));
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                (t = I.intl.string(I.t.f8Dquh)),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.A4THYt, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                (t = I.intl.string(I.t.YZd5rw)),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.MHAxpE, {}));
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                (t = I.intl.formatToPlainString(I.t["M/Lknl"], { numFreeGuildSubscriptions: x.cb })),
                    E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) &&
                        (t = I.intl.format(I.t.mULxLW, { numFreeGuildSubscriptions: x.cb }));
                break;
            case x.Xh.PREMIUM_3_MONTH_TIER_2:
            case x.Xh.PREMIUM_6_MONTH_TIER_2:
                t = I.intl.string(I.t.aaCoW6);
                break;
            case x.Xh.PREMIUM_MONTH_TIER_0:
            case x.Xh.PREMIUM_YEAR_TIER_0:
                t = I.intl.string(I.t["XEoQ7+"]);
                break;
            default:
                throw Error("Unexpected planId: ".concat(n));
        }
    else if (a.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1) t = I.intl.string(I.t.PNX4NM);
    else
        switch (c.skuId) {
            case x.Si.TIER_0:
                t = I.intl.string(I.t["XEoQ7+"]);
                break;
            case x.Si.TIER_1:
                t = I.intl.string(I.t.nLI1Kr);
                break;
            case x.Si.TIER_2:
                t = 1 !== a.intervalCount ? I.intl.string(I.t.qSZZVA) : I.intl.string(I.t.RNjcNg);
                break;
            default:
                throw Error("Unexpected skuId: ".concat(c.skuId));
        }
    return (0, l.jsx)("div", {
        className: T.text,
        children: t,
    });
}
var R = (((s = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), s);
function k(e) {
    let t,
        n,
        {
            planId: s,
            enableNoPaymentTrial: a,
            startingPremiumSubscriptionPlanId: u,
            onClose: o,
            followupSKUInfo: H,
            isDowngrade: R,
            hideClose: k,
            postSuccessGuild: v,
            paymentSourceType: j,
            startingFractionalPremiumEndsAt: b,
            customCTAType: U,
        } = e,
        { enablePremiumBrandRefresh: w, isDisplayingWowMomentConfirmation: A, customCheckoutFlow: O } = (0, L.JL)(),
        { theme: S } = (0, c.TCT)(),
        X = (0, C.e7)([h.Z], () => (null != H ? h.Z.get(H.id) : null)),
        y = (0, m.qH)(b);
    i.useEffect(() => {
        if (null == H || null != X) return;
        let { applicationId: e, id: t } = H;
        (0, d.$N)(e, t).catch(E.VqG);
    }, [H, X]);
    let D = (e) =>
        e.skuId === x.Si.TIER_0
            ? E.X7u.has(null != j ? j : E.HeQ.UNKNOWN)
                ? I.intl.format(I.t.o6hBiR, {})
                : I.intl.string(I.t["AGf/ye"])
            : e.skuId === x.Si.TIER_1
              ? E.X7u.has(null != j ? j : E.HeQ.UNKNOWN)
                  ? I.intl.format(I.t.o6hBiR, {})
                  : I.intl.string(I.t.knvOVz)
              : E.X7u.has(null != j ? j : E.HeQ.UNKNOWN)
                ? I.intl.format(I.t.A4THYt, {})
                : a
                  ? I.intl.string(I.t["g52y/r"])
                  : I.intl.string(I.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === U)
        t = (0, l.jsx)("div", {
            className: T.text,
            children: (0, l.jsxs)("p", {
                children: [I.intl.string(I.t.bIVRSQ), " ", I.intl.string(I.t["0UJqOy"])],
            }),
        });
    else if (null != X)
        t = (0, l.jsx)("div", {
            className: T.text,
            children: I.intl.format(I.t["tsQOs+"], { skuName: X.name }),
        });
    else if (y && !R) {
        let e = M.Z.get(s);
        r()(null != e, "Missing plan"),
            e.skuId === x.Si.TIER_0
                ? (t = (0, l.jsxs)("div", {
                      className: T.text,
                      children: [
                          (0, l.jsx)("p", { children: I.intl.string(I.t["L9lcG/"]) }),
                          (0, l.jsx)("p", {
                              children: I.intl.format(I.t.EoDFuN, {
                                  helpCenterLink: Z.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === x.Si.TIER_1 || e.skuId === x.Si.TIER_2) &&
                  (t = (0, l.jsxs)("div", {
                      className: T.text,
                      children: [
                          (0, l.jsx)("p", { children: I.intl.string(I.t.UPpbP3) }),
                          (0, l.jsx)("p", {
                              children: I.intl.format(I.t.EoDFuN, {
                                  helpCenterLink: Z.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != u)
        t = (0, l.jsx)(P, {
            planId: s,
            startingPremiumSubscriptionPlanId: u,
        });
    else if (null != v) {
        let e = M.Z.get(s);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", {
                        className: T.text,
                        children: D(e),
                    }),
                    (0, l.jsx)("div", {
                        className: T.text,
                        children: I.intl.format(I.t["6aZ0NR"], { guildName: v.name }),
                    }),
                ],
            }));
    } else {
        let e = M.Z.get(s);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsx)("div", {
                className: T.text,
                children: D(e),
            }));
    }
    let Y = p.ZP.getPremiumType(s);
    r()(null != Y, "premium type should not be null in purchase confirmation");
    let [B, Q] = i.useState(!1),
        W = i.useCallback(() => {
            null != o && (o(), O === _.cL.APPLE_PAYMENT_LINK && Q(!0));
        }, [o, O]);
    n =
        "deeplink_to_desktop_app" === U || O === _.cL.APPLE_PAYMENT_LINK
            ? I.intl.string(I.t.qXV2XU)
            : null != X
              ? I.intl.formatToPlainString(I.t["1qGgm4"], { skuName: X.name })
              : R
                ? I.intl.string(I.t.QJ9EyM)
                : null != v
                  ? I.intl.string(I.t.ta3cXY)
                  : I.intl.string(I.t.TkTvBz);
    let K = () =>
        E.X7u.has(null != j ? j : E.HeQ.UNKNOWN)
            ? N.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != u
              ? N.ZP.Types.PREMIUM_UPDATED
              : N.ZP.Types.PREMIUM_ACTIVATED;
    return A
        ? (0, l.jsx)(f.Z, {
              type: K(),
              text: t,
              buttonText: n,
              hideClose: k,
              onClose: W,
              buttonLoading: B,
          })
        : (0, l.jsxs)("div", {
              className: T.confirmation,
              children: [
                  w
                      ? (0, l.jsx)(g.Z, {
                            type: K(),
                            theme: S,
                        })
                      : (0, l.jsx)(N.ZP, {
                            className: T.banner,
                            theme: S,
                            premiumType: Y,
                            type: K(),
                        }),
                  t,
                  k
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: T.button,
                            children: (0, l.jsx)(c.Button, {
                                variant: "primary",
                                text: n,
                                onClick: W,
                                loading: B,
                            }),
                        }),
              ],
          });
}
function v(e) {
    let { planId: t, onClose: n } = e,
        {
            giftRecipient: s,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftMessageError: c,
            isSendingMessage: d,
        } = (0, u.wD)(),
        L = (0, C.e7)([M.Z], () => M.Z.get(t));
    r()(null != L, "Missing plan");
    let h = (0, C.e7)([H.Z], () => H.Z.getGiftCode(L.skuId));
    return (0, l.jsx)(o.Z, {
        giftCode: h,
        subscriptionPlan: L,
        onClose: n,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: s,
        giftMessageError: c,
        isSendingMessage: d,
    });
}
