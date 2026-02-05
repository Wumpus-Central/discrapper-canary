s.d(t, { Ay: () => v, Rs: () => b, fw: () => j });
var n,
    l = s(627968),
    i = s(64700),
    a = s(284009),
    r = s.n(a),
    C = s(311907),
    c = s(397927),
    d = s(830382),
    L = s(937008),
    H = s(156312),
    o = s(972607),
    u = s(419212),
    M = s(97352),
    g = s(67480),
    p = s(975571),
    h = s(927578),
    N = s(615396),
    m = s(135088),
    A = s(659746),
    E = s(4471),
    f = s(788868),
    _ = s(88001),
    x = s(652215),
    I = s(26279),
    T = s(519412),
    P = s(985018),
    R = s(344524);
function Z(e) {
    let t,
        { planId: s, startingPremiumSubscriptionPlanId: n, paymentSourceType: i } = e,
        [a, c] = (0, C.yK)([M.A], () => [M.A.get(n), M.A.get(s)]);
    if ((r()(null != a && null != c, "Missing startingPlan or newPlan"), f.LE.indexOf(n) < f.LE.indexOf(s)))
        switch (s) {
            case f.gD.PREMIUM_MONTH_TIER_1:
                (t = P.intl.string(P.t.knvOVz)), x.NcF.has(i ?? x.hes.UNKNOWN) && (t = P.intl.format(P.t.o6hBiR, {}));
                break;
            case f.gD.PREMIUM_MONTH_TIER_2:
                (t = P.intl.string(P.t.f8Dquh)), x.NcF.has(i ?? x.hes.UNKNOWN) && (t = P.intl.format(P.t.A4THYt, {}));
                break;
            case f.gD.PREMIUM_YEAR_TIER_1:
                (t = P.intl.string(P.t.YZd5rw)), x.NcF.has(i ?? x.hes.UNKNOWN) && (t = P.intl.format(P.t.MHAxpE, {}));
                break;
            case f.gD.PREMIUM_YEAR_TIER_2:
                (t = P.intl.formatToPlainString(P.t["M/Lknl"], { numFreeGuildSubscriptions: f.M4 })),
                    x.NcF.has(i ?? x.hes.UNKNOWN) &&
                        (t = P.intl.format(P.t.mULxLW, { numFreeGuildSubscriptions: f.M4 }));
                break;
            case f.gD.PREMIUM_3_MONTH_TIER_2:
            case f.gD.PREMIUM_6_MONTH_TIER_2:
                t = P.intl.string(P.t.aaCoW6);
                break;
            case f.gD.PREMIUM_MONTH_TIER_0:
            case f.gD.PREMIUM_YEAR_TIER_0:
                t = P.intl.string(P.t["XEoQ7+"]);
                break;
            case f.gD.PREMIUM_GROUP_MONTH:
                t = P.intl.formatToPlainString(T.default.pDiwHe, {
                    premiumGroupProductName: (0, _.DP)(),
                    totalSeats: _.LM,
                });
                break;
            default:
                throw Error(`Unexpected planId: ${s}`);
        }
    else if (a.skuId === f.pe.TIER_2 && c.skuId === f.pe.TIER_1) t = P.intl.string(P.t.PNX4NM);
    else
        switch (c.skuId) {
            case f.pe.TIER_0:
                t = P.intl.string(P.t["XEoQ7+"]);
                break;
            case f.pe.TIER_1:
                t = P.intl.string(P.t.nLI1Kr);
                break;
            case f.pe.TIER_2:
                t = 1 !== a.intervalCount ? P.intl.string(P.t.qSZZVA) : P.intl.string(P.t.RNjcNg);
                break;
            default:
                throw Error(`Unexpected skuId: ${c.skuId}`);
        }
    return (0, l.jsx)("div", { className: R.Qq, children: t });
}
var b = (((n = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), n);
function v(e) {
    let t,
        s,
        {
            planId: n,
            enableNoPaymentTrial: a,
            startingPremiumSubscriptionPlanId: L,
            onClose: o,
            followupSKUInfo: u,
            isDowngrade: b,
            hideClose: v,
            postSuccessGuild: j,
            paymentSourceType: k,
            startingFractionalPremiumEndsAt: U,
            customCTAType: w,
        } = e,
        { isDisplayingWowMomentConfirmation: O, customCheckoutFlow: D, isPremiumGroupPurchase: y } = (0, H.P5)(),
        { theme: S } = (0, c.wRf)(),
        F = (0, C.bG)([g.A], () => (null != u ? g.A.get(u.id) : null)),
        q = (0, N.b2)(U);
    i.useEffect(() => {
        if (null == u || null != F) return;
        let { applicationId: e, id: t } = u;
        (0, d.EX)(e, t).catch(x.FXj);
    }, [u, F]);
    let G = (e) =>
        y
            ? P.intl.formatToPlainString(T.default.pDiwHe, { premiumGroupProductName: (0, _.DP)(), totalSeats: _.LM })
            : e.skuId === f.pe.TIER_0
              ? x.NcF.has(k ?? x.hes.UNKNOWN)
                  ? P.intl.format(P.t.o6hBiR, {})
                  : P.intl.string(P.t["AGf/ye"])
              : e.skuId === f.pe.TIER_1
                ? x.NcF.has(k ?? x.hes.UNKNOWN)
                    ? P.intl.format(P.t.o6hBiR, {})
                    : P.intl.string(P.t.knvOVz)
                : x.NcF.has(k ?? x.hes.UNKNOWN)
                  ? P.intl.format(P.t.A4THYt, {})
                  : a
                    ? P.intl.string(P.t["g52y/r"])
                    : P.intl.string(P.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === w)
        t = (0, l.jsx)("div", {
            className: R.Qq,
            children: (0, l.jsxs)("p", { children: [P.intl.string(P.t.bIVRSQ), " ", P.intl.string(P.t["0UJqOy"])] }),
        });
    else if (null != F)
        t = (0, l.jsx)("div", { className: R.Qq, children: P.intl.format(P.t["tsQOs+"], { skuName: F.name }) });
    else if (q && !b) {
        let e = M.A.get(n);
        r()(null != e, "Missing plan"),
            e.skuId === f.pe.TIER_0
                ? (t = (0, l.jsxs)("div", {
                      className: R.Qq,
                      children: [
                          (0, l.jsx)("p", { children: P.intl.string(P.t["L9lcG/"]) }),
                          (0, l.jsx)("p", {
                              children: P.intl.format(P.t.EoDFuN, {
                                  helpCenterLink: p.A.getArticleURL(x.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === f.pe.TIER_1 || e.skuId === f.pe.TIER_2) &&
                  (t = (0, l.jsxs)("div", {
                      className: R.Qq,
                      children: [
                          (0, l.jsx)("p", { children: P.intl.string(P.t.UPpbP3) }),
                          (0, l.jsx)("p", {
                              children: P.intl.format(P.t.EoDFuN, {
                                  helpCenterLink: p.A.getArticleURL(x.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != L) t = (0, l.jsx)(Z, { planId: n, startingPremiumSubscriptionPlanId: L });
    else if (null != j) {
        let e = M.A.get(n);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", { className: R.Qq, children: G(e) }),
                    (0, l.jsx)("div", {
                        className: R.Qq,
                        children: P.intl.format(P.t["6aZ0NR"], { guildName: j.name }),
                    }),
                ],
            }));
    } else {
        let e = M.A.get(n);
        r()(null != e, "Missing plan"), (t = (0, l.jsx)("div", { className: R.Qq, children: G(e) }));
    }
    let K = h.Ay.getPremiumType(n);
    r()(null != K, "premium type should not be null in purchase confirmation");
    let [Q, W] = i.useState(!1),
        Y = i.useCallback(() => {
            null != o && (o(), D === I.uH.APPLE_PAYMENT_LINK && W(!0));
        }, [o, D]);
    s = y
        ? P.intl.string(T.default.clIveA)
        : "deeplink_to_desktop_app" === w || D === I.uH.APPLE_PAYMENT_LINK
          ? P.intl.string(P.t.qXV2XU)
          : null != F
            ? P.intl.formatToPlainString(P.t["1qGgm4"], { skuName: F.name })
            : b
              ? P.intl.string(P.t.QJ9EyM)
              : null != j
                ? P.intl.string(P.t.ta3cXY)
                : P.intl.string(P.t.TkTvBz);
    let B = () =>
        x.NcF.has(k ?? x.hes.UNKNOWN)
            ? A.Ay.Types.PREMIUM_PAYMENT_STARTED
            : null != L
              ? A.Ay.Types.PREMIUM_UPDATED
              : A.Ay.Types.PREMIUM_ACTIVATED;
    return O
        ? (0, l.jsx)(E.A, { type: B(), text: t, buttonText: s, hideClose: v, onClose: Y, buttonLoading: Q })
        : (0, l.jsxs)("div", {
              className: R.EL,
              children: [
                  (0, l.jsx)(m.A, { type: B(), theme: S }),
                  t,
                  v
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: R.x6,
                            children: (0, l.jsx)(c.Button, { variant: "primary", text: s, onClick: Y, loading: Q }),
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
        } = (0, L.Pv)(),
        H = (0, C.bG)([M.A], () => M.A.get(t));
    r()(null != H, "Missing plan");
    let g = (0, C.bG)([u.A], () => u.A.getGiftCode(H.skuId));
    return (0, l.jsx)(o.A, {
        giftCode: g,
        subscriptionPlan: H,
        onClose: s,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: n,
        giftMessageError: c,
        isSendingMessage: d,
    });
}
