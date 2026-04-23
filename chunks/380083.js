s.d(t, { Ay: () => k, Rs: () => v, fw: () => j });
var n,
    l = s(627968),
    i = s(64700),
    a = s(284009),
    r = s.n(a),
    C = s(311907),
    c = s(38021),
    d = s(821609),
    L = s(830382),
    H = s(937008),
    M = s(156312),
    u = s(972607),
    o = s(419212),
    g = s(97352),
    h = s(67480),
    p = s(975571),
    E = s(927578),
    m = s(615396),
    N = s(135088),
    _ = s(659746),
    f = s(4471),
    A = s(788868),
    T = s(88001),
    I = s(652215),
    R = s(26279),
    x = s(466919),
    P = s(985018),
    U = s(769812);
function Z(e) {
    let t,
        { planId: s, startingPremiumSubscriptionPlanId: n, paymentSourceType: i } = e,
        [a, c] = (0, C.yK)([g.A], () => [g.A.get(n), g.A.get(s)]);
    if ((r()(null != a && null != c, "Missing startingPlan or newPlan"), A.LE.indexOf(n) < A.LE.indexOf(s)))
        switch (s) {
            case A.gD.PREMIUM_MONTH_TIER_1:
                (t = P.intl.string(P.t.knvOVz)), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.o6hBiR, {}));
                break;
            case A.gD.PREMIUM_MONTH_TIER_2:
                (t = P.intl.string(P.t.f8Dquh)), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.A4THYt, {}));
                break;
            case A.gD.PREMIUM_YEAR_TIER_1:
                (t = P.intl.string(P.t.YZd5rw)), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.MHAxpE, {}));
                break;
            case A.gD.PREMIUM_YEAR_TIER_2:
                (t = P.intl.formatToPlainString(P.t["M/Lknl"], { numFreeGuildSubscriptions: A.M4 })),
                    I.NcF.has(i ?? I.hes.UNKNOWN) &&
                        (t = P.intl.format(P.t.mULxLW, { numFreeGuildSubscriptions: A.M4 }));
                break;
            case A.gD.PREMIUM_3_MONTH_TIER_2:
            case A.gD.PREMIUM_6_MONTH_TIER_2:
                t = P.intl.string(P.t.aaCoW6);
                break;
            case A.gD.PREMIUM_MONTH_TIER_0:
            case A.gD.PREMIUM_YEAR_TIER_0:
                t = P.intl.string(P.t["XEoQ7+"]);
                break;
            case A.gD.PREMIUM_GROUP_MONTH:
                t = P.intl.formatToPlainString(x.default.pDiwHe, {
                    premiumGroupProductName: (0, T.DP)(),
                    totalSeats: T.LM,
                });
                break;
            default:
                throw Error(`Unexpected planId: ${s}`);
        }
    else if (a.skuId === A.pe.TIER_2 && c.skuId === A.pe.TIER_1) t = P.intl.string(P.t.PNX4NM);
    else
        switch (c.skuId) {
            case A.pe.TIER_0:
                t = P.intl.string(P.t["XEoQ7+"]);
                break;
            case A.pe.TIER_1:
                t = P.intl.string(P.t.nLI1Kr);
                break;
            case A.pe.TIER_2:
                t = 1 !== a.intervalCount ? P.intl.string(P.t.qSZZVA) : P.intl.string(P.t.RNjcNg);
                break;
            default:
                throw Error(`Unexpected skuId: ${c.skuId}`);
        }
    return (0, l.jsx)("div", { className: U.Qq, children: t });
}
var v = (((n = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), n);
function k(e) {
    let t,
        s,
        {
            planId: n,
            startingPremiumSubscriptionPlanId: a,
            onClose: H,
            followupSKUInfo: u,
            isDowngrade: o,
            hideClose: v,
            postSuccessGuild: k,
            paymentSourceType: j,
            startingFractionalPremiumEndsAt: w,
            customCTAType: b,
        } = e,
        { isDisplayingWowMomentConfirmation: O, customCheckoutFlow: D, isPremiumGroupPurchase: S } = (0, M.P5)(),
        { theme: y } = (0, c.wR)(),
        F = (0, C.bG)([h.A], () => (null != u ? h.A.get(u.id) : null)),
        W = (0, m.b2)(w),
        K = D === R.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
    i.useEffect(() => {
        if (null == u || null != F) return;
        let { applicationId: e, id: t } = u;
        (0, L.EX)(e, t).catch(I.FXj);
    }, [u, F]);
    let Q = (e) =>
        S
            ? P.intl.formatToPlainString(x.default.pDiwHe, { premiumGroupProductName: (0, T.DP)(), totalSeats: T.LM })
            : e.skuId === A.pe.TIER_0
              ? I.NcF.has(j ?? I.hes.UNKNOWN)
                  ? P.intl.format(P.t.o6hBiR, {})
                  : P.intl.string(P.t["AGf/ye"])
              : e.skuId === A.pe.TIER_1
                ? I.NcF.has(j ?? I.hes.UNKNOWN)
                    ? P.intl.format(P.t.o6hBiR, {})
                    : P.intl.string(P.t.knvOVz)
                : I.NcF.has(j ?? I.hes.UNKNOWN)
                  ? P.intl.format(P.t.A4THYt, {})
                  : P.intl.string(P.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === b || D === R.uH.META_QUEST_WEB_REDIRECT_CHECKOUT)
        t = (0, l.jsx)("div", {
            className: U.Qq,
            children: (0, l.jsxs)("p", { children: [P.intl.string(P.t.bIVRSQ), " ", P.intl.string(P.t["0UJqOy"])] }),
        });
    else if (null != F)
        t = (0, l.jsx)("div", { className: U.Qq, children: P.intl.format(P.t["tsQOs+"], { skuName: F.name }) });
    else if (W && !o) {
        let e = g.A.get(n);
        r()(null != e, "Missing plan"),
            e.skuId === A.pe.TIER_0
                ? (t = (0, l.jsxs)("div", {
                      className: U.Qq,
                      children: [
                          (0, l.jsx)("p", { children: P.intl.string(P.t["L9lcG/"]) }),
                          (0, l.jsx)("p", {
                              children: P.intl.format(P.t.EoDFuN, {
                                  helpCenterLink: p.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === A.pe.TIER_1 || e.skuId === A.pe.TIER_2) &&
                  (t = (0, l.jsxs)("div", {
                      className: U.Qq,
                      children: [
                          (0, l.jsx)("p", { children: P.intl.string(P.t.UPpbP3) }),
                          (0, l.jsx)("p", {
                              children: P.intl.format(P.t.EoDFuN, {
                                  helpCenterLink: p.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != a) t = (0, l.jsx)(Z, { planId: n, startingPremiumSubscriptionPlanId: a });
    else if (null != k) {
        let e = g.A.get(n);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", { className: U.Qq, children: Q(e) }),
                    (0, l.jsx)("div", {
                        className: U.Qq,
                        children: P.intl.format(P.t["6aZ0NR"], { guildName: k.name }),
                    }),
                ],
            }));
    } else {
        let e = g.A.get(n);
        r()(null != e, "Missing plan"), (t = (0, l.jsx)("div", { className: U.Qq, children: Q(e) }));
    }
    let B = E.Ay.getPremiumType(n);
    r()(null != B, "premium type should not be null in purchase confirmation");
    let [q, G] = i.useState(!1),
        z = i.useCallback(() => {
            null != H && (H(), D === R.uH.MOBILE_WEB_REDIRECT_CHECKOUT && G(!0));
        }, [H, D]);
    s = S
        ? P.intl.string(x.default.clIveA)
        : "deeplink_to_desktop_app" === b || D === R.uH.MOBILE_WEB_REDIRECT_CHECKOUT
          ? P.intl.string(P.t.sRApon)
          : null != F
            ? P.intl.formatToPlainString(P.t["1qGgm4"], { skuName: F.name })
            : o
              ? P.intl.string(P.t.QJ9EyM)
              : null != k
                ? P.intl.string(P.t.ta3cXY)
                : P.intl.string(P.t.TkTvBz);
    let V = () =>
        I.NcF.has(j ?? I.hes.UNKNOWN)
            ? _.Ay.Types.PREMIUM_PAYMENT_STARTED
            : null != a
              ? _.Ay.Types.PREMIUM_UPDATED
              : _.Ay.Types.PREMIUM_ACTIVATED;
    return O
        ? (0, l.jsx)(f.A, { type: V(), text: t, buttonText: s, hideClose: v || K, onClose: z, buttonLoading: q })
        : (0, l.jsxs)("div", {
              className: U.EL,
              children: [
                  (0, l.jsx)(N.A, { type: V(), theme: y }),
                  t,
                  v || K
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: U.x6,
                            children: (0, l.jsx)(d.$, { variant: "primary", text: s, onClick: z, loading: q }),
                        }),
              ],
          });
}
function j(e) {
    let { planId: t, onClose: s } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftMessageError: c,
            isSendingMessage: d,
        } = (0, H.Pv)(),
        L = (0, C.bG)([g.A], () => g.A.get(t));
    r()(null != L, "Missing plan");
    let M = (0, C.bG)([o.A], () => o.A.getGiftCode(L.skuId));
    return (0, l.jsx)(u.A, {
        giftCode: M,
        subscriptionPlan: L,
        onClose: s,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: n,
        giftMessageError: c,
        isSendingMessage: d,
    });
}
