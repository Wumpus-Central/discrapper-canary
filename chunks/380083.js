s.d(t, { Ay: () => v, Rs: () => Z, fw: () => k });
var n,
    l = s(627968),
    i = s(64700),
    a = s(284009),
    r = s.n(a),
    C = s(311907),
    d = s(397927),
    c = s(830382),
    L = s(937008),
    H = s(156312),
    M = s(972607),
    u = s(419212),
    o = s(97352),
    g = s(67480),
    h = s(975571),
    p = s(927578),
    E = s(615396),
    m = s(135088),
    N = s(659746),
    _ = s(4471),
    f = s(788868),
    A = s(88001),
    T = s(652215),
    I = s(26279),
    R = s(782965),
    x = s(985018),
    P = s(189092);
function U(e) {
    let t,
        { planId: s, startingPremiumSubscriptionPlanId: n, paymentSourceType: i } = e,
        [a, d] = (0, C.yK)([o.A], () => [o.A.get(n), o.A.get(s)]);
    if ((r()(null != a && null != d, "Missing startingPlan or newPlan"), f.LE.indexOf(n) < f.LE.indexOf(s)))
        switch (s) {
            case f.gD.PREMIUM_MONTH_TIER_1:
                (t = x.intl.string(x.t.knvOVz)), T.NcF.has(i ?? T.hes.UNKNOWN) && (t = x.intl.format(x.t.o6hBiR, {}));
                break;
            case f.gD.PREMIUM_MONTH_TIER_2:
                (t = x.intl.string(x.t.f8Dquh)), T.NcF.has(i ?? T.hes.UNKNOWN) && (t = x.intl.format(x.t.A4THYt, {}));
                break;
            case f.gD.PREMIUM_YEAR_TIER_1:
                (t = x.intl.string(x.t.YZd5rw)), T.NcF.has(i ?? T.hes.UNKNOWN) && (t = x.intl.format(x.t.MHAxpE, {}));
                break;
            case f.gD.PREMIUM_YEAR_TIER_2:
                (t = x.intl.formatToPlainString(x.t["M/Lknl"], { numFreeGuildSubscriptions: f.M4 })),
                    T.NcF.has(i ?? T.hes.UNKNOWN) &&
                        (t = x.intl.format(x.t.mULxLW, { numFreeGuildSubscriptions: f.M4 }));
                break;
            case f.gD.PREMIUM_3_MONTH_TIER_2:
            case f.gD.PREMIUM_6_MONTH_TIER_2:
                t = x.intl.string(x.t.aaCoW6);
                break;
            case f.gD.PREMIUM_MONTH_TIER_0:
            case f.gD.PREMIUM_YEAR_TIER_0:
                t = x.intl.string(x.t["XEoQ7+"]);
                break;
            case f.gD.PREMIUM_GROUP_MONTH:
                t = x.intl.formatToPlainString(R.default.pDiwHe, {
                    premiumGroupProductName: (0, A.DP)(),
                    totalSeats: A.LM,
                });
                break;
            default:
                throw Error(`Unexpected planId: ${s}`);
        }
    else if (a.skuId === f.pe.TIER_2 && d.skuId === f.pe.TIER_1) t = x.intl.string(x.t.PNX4NM);
    else
        switch (d.skuId) {
            case f.pe.TIER_0:
                t = x.intl.string(x.t["XEoQ7+"]);
                break;
            case f.pe.TIER_1:
                t = x.intl.string(x.t.nLI1Kr);
                break;
            case f.pe.TIER_2:
                t = 1 !== a.intervalCount ? x.intl.string(x.t.qSZZVA) : x.intl.string(x.t.RNjcNg);
                break;
            default:
                throw Error(`Unexpected skuId: ${d.skuId}`);
        }
    return (0, l.jsx)("div", { className: P.Qq, children: t });
}
var Z = (((n = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), n);
function v(e) {
    let t,
        s,
        {
            planId: n,
            startingPremiumSubscriptionPlanId: a,
            onClose: L,
            followupSKUInfo: M,
            isDowngrade: u,
            hideClose: Z,
            postSuccessGuild: v,
            paymentSourceType: k,
            startingFractionalPremiumEndsAt: j,
            customCTAType: w,
        } = e,
        { isDisplayingWowMomentConfirmation: b, customCheckoutFlow: O, isPremiumGroupPurchase: D } = (0, H.P5)(),
        { theme: S } = (0, d.wRf)(),
        y = (0, C.bG)([g.A], () => (null != M ? g.A.get(M.id) : null)),
        F = (0, E.b2)(j),
        W = O === I.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
    i.useEffect(() => {
        if (null == M || null != y) return;
        let { applicationId: e, id: t } = M;
        (0, c.EX)(e, t).catch(T.FXj);
    }, [M, y]);
    let B = (e) =>
        D
            ? x.intl.formatToPlainString(R.default.pDiwHe, { premiumGroupProductName: (0, A.DP)(), totalSeats: A.LM })
            : e.skuId === f.pe.TIER_0
              ? T.NcF.has(k ?? T.hes.UNKNOWN)
                  ? x.intl.format(x.t.o6hBiR, {})
                  : x.intl.string(x.t["AGf/ye"])
              : e.skuId === f.pe.TIER_1
                ? T.NcF.has(k ?? T.hes.UNKNOWN)
                    ? x.intl.format(x.t.o6hBiR, {})
                    : x.intl.string(x.t.knvOVz)
                : T.NcF.has(k ?? T.hes.UNKNOWN)
                  ? x.intl.format(x.t.A4THYt, {})
                  : x.intl.string(x.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === w || O === I.uH.META_QUEST_WEB_REDIRECT_CHECKOUT)
        t = (0, l.jsx)("div", {
            className: P.Qq,
            children: (0, l.jsxs)("p", { children: [x.intl.string(x.t.bIVRSQ), " ", x.intl.string(x.t["0UJqOy"])] }),
        });
    else if (null != y)
        t = (0, l.jsx)("div", { className: P.Qq, children: x.intl.format(x.t["tsQOs+"], { skuName: y.name }) });
    else if (F && !u) {
        let e = o.A.get(n);
        r()(null != e, "Missing plan"),
            e.skuId === f.pe.TIER_0
                ? (t = (0, l.jsxs)("div", {
                      className: P.Qq,
                      children: [
                          (0, l.jsx)("p", { children: x.intl.string(x.t["L9lcG/"]) }),
                          (0, l.jsx)("p", {
                              children: x.intl.format(x.t.EoDFuN, {
                                  helpCenterLink: h.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === f.pe.TIER_1 || e.skuId === f.pe.TIER_2) &&
                  (t = (0, l.jsxs)("div", {
                      className: P.Qq,
                      children: [
                          (0, l.jsx)("p", { children: x.intl.string(x.t.UPpbP3) }),
                          (0, l.jsx)("p", {
                              children: x.intl.format(x.t.EoDFuN, {
                                  helpCenterLink: h.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != a) t = (0, l.jsx)(U, { planId: n, startingPremiumSubscriptionPlanId: a });
    else if (null != v) {
        let e = o.A.get(n);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", { className: P.Qq, children: B(e) }),
                    (0, l.jsx)("div", {
                        className: P.Qq,
                        children: x.intl.format(x.t["6aZ0NR"], { guildName: v.name }),
                    }),
                ],
            }));
    } else {
        let e = o.A.get(n);
        r()(null != e, "Missing plan"), (t = (0, l.jsx)("div", { className: P.Qq, children: B(e) }));
    }
    let K = p.Ay.getPremiumType(n);
    r()(null != K, "premium type should not be null in purchase confirmation");
    let [Q, q] = i.useState(!1),
        G = i.useCallback(() => {
            null != L && (L(), O === I.uH.MOBILE_WEB_REDIRECT_CHECKOUT && q(!0));
        }, [L, O]);
    s = D
        ? x.intl.string(R.default.clIveA)
        : "deeplink_to_desktop_app" === w || O === I.uH.MOBILE_WEB_REDIRECT_CHECKOUT
          ? x.intl.string(x.t.sRApon)
          : null != y
            ? x.intl.formatToPlainString(x.t["1qGgm4"], { skuName: y.name })
            : u
              ? x.intl.string(x.t.QJ9EyM)
              : null != v
                ? x.intl.string(x.t.ta3cXY)
                : x.intl.string(x.t.TkTvBz);
    let z = () =>
        T.NcF.has(k ?? T.hes.UNKNOWN)
            ? N.Ay.Types.PREMIUM_PAYMENT_STARTED
            : null != a
              ? N.Ay.Types.PREMIUM_UPDATED
              : N.Ay.Types.PREMIUM_ACTIVATED;
    return b
        ? (0, l.jsx)(_.A, { type: z(), text: t, buttonText: s, hideClose: Z || W, onClose: G, buttonLoading: Q })
        : (0, l.jsxs)("div", {
              className: P.EL,
              children: [
                  (0, l.jsx)(m.A, { type: z(), theme: S }),
                  t,
                  Z || W
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: P.x6,
                            children: (0, l.jsx)(d.Button, { variant: "primary", text: s, onClick: G, loading: Q }),
                        }),
              ],
          });
}
function k(e) {
    let { planId: t, onClose: s } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftMessageError: d,
            isSendingMessage: c,
        } = (0, L.Pv)(),
        H = (0, C.bG)([o.A], () => o.A.get(t));
    r()(null != H, "Missing plan");
    let g = (0, C.bG)([u.A], () => u.A.getGiftCode(H.skuId));
    return (0, l.jsx)(M.A, {
        giftCode: g,
        subscriptionPlan: H,
        onClose: s,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: n,
        giftMessageError: d,
        isSendingMessage: c,
    });
}
