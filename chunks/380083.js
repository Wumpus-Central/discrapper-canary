s.d(t, { Ay: () => k, Rs: () => v, fw: () => U });
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
    o = s(972607),
    M = s(419212),
    u = s(97352),
    g = s(67480),
    h = s(975571),
    p = s(927578),
    m = s(615396),
    E = s(135088),
    N = s(659746),
    f = s(4471),
    _ = s(788868),
    A = s(88001),
    I = s(652215),
    T = s(26279),
    x = s(519412),
    R = s(985018),
    P = s(344524);
function Z(e) {
    let t,
        { planId: s, startingPremiumSubscriptionPlanId: n, paymentSourceType: i } = e,
        [a, d] = (0, C.yK)([u.A], () => [u.A.get(n), u.A.get(s)]);
    if ((r()(null != a && null != d, "Missing startingPlan or newPlan"), _.LE.indexOf(n) < _.LE.indexOf(s)))
        switch (s) {
            case _.gD.PREMIUM_MONTH_TIER_1:
                (t = R.intl.string(R.t.knvOVz)), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = R.intl.format(R.t.o6hBiR, {}));
                break;
            case _.gD.PREMIUM_MONTH_TIER_2:
                (t = R.intl.string(R.t.f8Dquh)), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = R.intl.format(R.t.A4THYt, {}));
                break;
            case _.gD.PREMIUM_YEAR_TIER_1:
                (t = R.intl.string(R.t.YZd5rw)), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = R.intl.format(R.t.MHAxpE, {}));
                break;
            case _.gD.PREMIUM_YEAR_TIER_2:
                (t = R.intl.formatToPlainString(R.t["M/Lknl"], { numFreeGuildSubscriptions: _.M4 })),
                    I.NcF.has(i ?? I.hes.UNKNOWN) &&
                        (t = R.intl.format(R.t.mULxLW, { numFreeGuildSubscriptions: _.M4 }));
                break;
            case _.gD.PREMIUM_3_MONTH_TIER_2:
            case _.gD.PREMIUM_6_MONTH_TIER_2:
                t = R.intl.string(R.t.aaCoW6);
                break;
            case _.gD.PREMIUM_MONTH_TIER_0:
            case _.gD.PREMIUM_YEAR_TIER_0:
                t = R.intl.string(R.t["XEoQ7+"]);
                break;
            case _.gD.PREMIUM_GROUP_MONTH:
                t = R.intl.formatToPlainString(x.default.pDiwHe, {
                    premiumGroupProductName: (0, A.DP)(),
                    totalSeats: A.LM,
                });
                break;
            default:
                throw Error(`Unexpected planId: ${s}`);
        }
    else if (a.skuId === _.pe.TIER_2 && d.skuId === _.pe.TIER_1) t = R.intl.string(R.t.PNX4NM);
    else
        switch (d.skuId) {
            case _.pe.TIER_0:
                t = R.intl.string(R.t["XEoQ7+"]);
                break;
            case _.pe.TIER_1:
                t = R.intl.string(R.t.nLI1Kr);
                break;
            case _.pe.TIER_2:
                t = 1 !== a.intervalCount ? R.intl.string(R.t.qSZZVA) : R.intl.string(R.t.RNjcNg);
                break;
            default:
                throw Error(`Unexpected skuId: ${d.skuId}`);
        }
    return (0, l.jsx)("div", { className: P.Qq, children: t });
}
var v = (((n = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app"), n);
function k(e) {
    let t,
        s,
        {
            planId: n,
            startingPremiumSubscriptionPlanId: a,
            onClose: L,
            followupSKUInfo: o,
            isDowngrade: M,
            hideClose: v,
            postSuccessGuild: k,
            paymentSourceType: U,
            startingFractionalPremiumEndsAt: j,
            customCTAType: w,
        } = e,
        { isDisplayingWowMomentConfirmation: b, customCheckoutFlow: O, isPremiumGroupPurchase: D } = (0, H.P5)(),
        { theme: S } = (0, d.wRf)(),
        y = (0, C.bG)([g.A], () => (null != o ? g.A.get(o.id) : null)),
        F = (0, m.b2)(j);
    i.useEffect(() => {
        if (null == o || null != y) return;
        let { applicationId: e, id: t } = o;
        (0, c.EX)(e, t).catch(I.FXj);
    }, [o, y]);
    let W = (e) =>
        D
            ? R.intl.formatToPlainString(x.default.pDiwHe, { premiumGroupProductName: (0, A.DP)(), totalSeats: A.LM })
            : e.skuId === _.pe.TIER_0
              ? I.NcF.has(U ?? I.hes.UNKNOWN)
                  ? R.intl.format(R.t.o6hBiR, {})
                  : R.intl.string(R.t["AGf/ye"])
              : e.skuId === _.pe.TIER_1
                ? I.NcF.has(U ?? I.hes.UNKNOWN)
                    ? R.intl.format(R.t.o6hBiR, {})
                    : R.intl.string(R.t.knvOVz)
                : I.NcF.has(U ?? I.hes.UNKNOWN)
                  ? R.intl.format(R.t.A4THYt, {})
                  : R.intl.string(R.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === w)
        t = (0, l.jsx)("div", {
            className: P.Qq,
            children: (0, l.jsxs)("p", { children: [R.intl.string(R.t.bIVRSQ), " ", R.intl.string(R.t["0UJqOy"])] }),
        });
    else if (null != y)
        t = (0, l.jsx)("div", { className: P.Qq, children: R.intl.format(R.t["tsQOs+"], { skuName: y.name }) });
    else if (F && !M) {
        let e = u.A.get(n);
        r()(null != e, "Missing plan"),
            e.skuId === _.pe.TIER_0
                ? (t = (0, l.jsxs)("div", {
                      className: P.Qq,
                      children: [
                          (0, l.jsx)("p", { children: R.intl.string(R.t["L9lcG/"]) }),
                          (0, l.jsx)("p", {
                              children: R.intl.format(R.t.EoDFuN, {
                                  helpCenterLink: h.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === _.pe.TIER_1 || e.skuId === _.pe.TIER_2) &&
                  (t = (0, l.jsxs)("div", {
                      className: P.Qq,
                      children: [
                          (0, l.jsx)("p", { children: R.intl.string(R.t.UPpbP3) }),
                          (0, l.jsx)("p", {
                              children: R.intl.format(R.t.EoDFuN, {
                                  helpCenterLink: h.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != a) t = (0, l.jsx)(Z, { planId: n, startingPremiumSubscriptionPlanId: a });
    else if (null != k) {
        let e = u.A.get(n);
        r()(null != e, "Missing plan"),
            (t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", { className: P.Qq, children: W(e) }),
                    (0, l.jsx)("div", {
                        className: P.Qq,
                        children: R.intl.format(R.t["6aZ0NR"], { guildName: k.name }),
                    }),
                ],
            }));
    } else {
        let e = u.A.get(n);
        r()(null != e, "Missing plan"), (t = (0, l.jsx)("div", { className: P.Qq, children: W(e) }));
    }
    let q = p.Ay.getPremiumType(n);
    r()(null != q, "premium type should not be null in purchase confirmation");
    let [B, G] = i.useState(!1),
        K = i.useCallback(() => {
            null != L && (L(), O === T.uH.MOBILE_WEB_REDIRECT_CHECKOUT && G(!0));
        }, [L, O]);
    s = D
        ? R.intl.string(x.default.clIveA)
        : "deeplink_to_desktop_app" === w || O === T.uH.MOBILE_WEB_REDIRECT_CHECKOUT
          ? R.intl.string(R.t.sRApon)
          : null != y
            ? R.intl.formatToPlainString(R.t["1qGgm4"], { skuName: y.name })
            : M
              ? R.intl.string(R.t.QJ9EyM)
              : null != k
                ? R.intl.string(R.t.ta3cXY)
                : R.intl.string(R.t.TkTvBz);
    let Q = () =>
        I.NcF.has(U ?? I.hes.UNKNOWN)
            ? N.Ay.Types.PREMIUM_PAYMENT_STARTED
            : null != a
              ? N.Ay.Types.PREMIUM_UPDATED
              : N.Ay.Types.PREMIUM_ACTIVATED;
    return b
        ? (0, l.jsx)(f.A, { type: Q(), text: t, buttonText: s, hideClose: v, onClose: K, buttonLoading: B })
        : (0, l.jsxs)("div", {
              className: P.EL,
              children: [
                  (0, l.jsx)(E.A, { type: Q(), theme: S }),
                  t,
                  v
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: P.x6,
                            children: (0, l.jsx)(d.Button, { variant: "primary", text: s, onClick: K, loading: B }),
                        }),
              ],
          });
}
function U(e) {
    let { planId: t, onClose: s } = e,
        {
            giftRecipient: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftMessageError: d,
            isSendingMessage: c,
        } = (0, L.Pv)(),
        H = (0, C.bG)([u.A], () => u.A.get(t));
    r()(null != H, "Missing plan");
    let g = (0, C.bG)([M.A], () => M.A.getGiftCode(H.skuId));
    return (0, l.jsx)(o.A, {
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
