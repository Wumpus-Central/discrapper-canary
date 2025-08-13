n.d(t, {
    TB: () => _,
    VY: () => j,
    ZP: () => v,
}),
    n(388685),
    n(415506);
var s = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    r = n(442837),
    C = n(481060),
    c = n(16084),
    d = n(987209),
    u = n(563132),
    o = n(179118),
    L = n(912788),
    H = n(509545),
    M = n(55563),
    h = n(63063),
    m = n(74538),
    Z = n(296848),
    g = n(335105),
    x = n(741245),
    f = n(783017),
    p = n(474936),
    N = n(981631),
    T = n(388032),
    I = n(218376);
function E(e) {
    let t,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: l } = e,
        [C, c] = (0, r.Wu)([H.Z], () => [H.Z.get(i), H.Z.get(n)]);
    if ((a()(null != C && null != c, "Missing startingPlan or newPlan"), p.Y1.indexOf(i) < p.Y1.indexOf(n)))
        switch (n) {
            case p.Xh.PREMIUM_MONTH_TIER_1:
                (t = T.intl.string(T.t.knvOV1)),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.intl.format(T.t.o6hBiY, {}));
                break;
            case p.Xh.PREMIUM_MONTH_TIER_2:
                (t = T.intl.string(T.t.f8Dqur)),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.intl.format(T.t.A4THYm, {}));
                break;
            case p.Xh.PREMIUM_YEAR_TIER_1:
                (t = T.intl.string(T.t.YZd5r6)),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.intl.format(T.t.MHAxpK, {}));
                break;
            case p.Xh.PREMIUM_YEAR_TIER_2:
                (t = T.intl.formatToPlainString(T.t["M/Lknp"], { numFreeGuildSubscriptions: p.cb })),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) &&
                        (t = T.intl.format(T.t.mULxLS, { numFreeGuildSubscriptions: p.cb }));
                break;
            case p.Xh.PREMIUM_3_MONTH_TIER_2:
            case p.Xh.PREMIUM_6_MONTH_TIER_2:
                t = T.intl.string(T.t.aaCoW1);
                break;
            case p.Xh.PREMIUM_MONTH_TIER_0:
            case p.Xh.PREMIUM_YEAR_TIER_0:
                t = T.intl.string(T.t["XEoQ7+"]);
                break;
            default:
                throw Error("Unexpected planId: ".concat(n));
        }
    else if (C.skuId === p.Si.TIER_2 && c.skuId === p.Si.TIER_1) t = T.intl.string(T.t.PNX4ND);
    else
        switch (c.skuId) {
            case p.Si.TIER_0:
                t = T.intl.string(T.t["XEoQ7+"]);
                break;
            case p.Si.TIER_1:
                t = T.intl.string(T.t.nLI1Ki);
                break;
            case p.Si.TIER_2:
                t = 1 !== C.intervalCount ? T.intl.string(T.t.qSZZVF) : T.intl.string(T.t.RNjcNj);
                break;
            default:
                throw Error("Unexpected skuId: ".concat(c.skuId));
        }
    return (0, s.jsx)("div", {
        className: I.text,
        children: t,
    });
}
function v(e) {
    let t,
        n,
        {
            planId: l,
            enableNoPaymentTrial: d,
            startingPremiumSubscriptionPlanId: o,
            onClose: L,
            followupSKUInfo: v,
            isDowngrade: _,
            hideClose: j,
            postSuccessGuild: R,
            paymentSourceType: P,
            startingFractionalPremiumEndsAt: b,
        } = e,
        { enablePremiumBrandRefresh: w, isDisplayingWowMomentConfirmation: U } = (0, u.JL)(),
        { theme: k } = (0, C.TCT)(),
        A = (0, r.e7)([M.Z], () => (null != v ? M.Z.get(v.id) : null)),
        O = (0, Z.qH)(b);
    i.useEffect(() => {
        if (null == v || null != A) return;
        let { applicationId: e, id: t } = v;
        (0, c.$N)(e, t).catch(N.VqG);
    }, [v, A]);
    let S = (e) =>
        e.skuId === p.Si.TIER_0
            ? N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
                ? T.intl.format(T.t.o6hBiY, {})
                : T.intl.string(T.t["AGf/yc"])
            : e.skuId === p.Si.TIER_1
              ? N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
                  ? T.intl.format(T.t.o6hBiY, {})
                  : T.intl.string(T.t.knvOV1)
              : N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
                ? T.intl.format(T.t.A4THYm, {})
                : d
                  ? T.intl.string(T.t["g52y/v"])
                  : T.intl.string(T.t.aTUr3d);
    if (null != A)
        t = (0, s.jsx)("div", {
            className: I.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: A.name }),
        });
    else if (O && !_) {
        let e = H.Z.get(l);
        a()(null != e, "Missing plan"),
            e.skuId === p.Si.TIER_0
                ? (t = (0, s.jsxs)("div", {
                      className: I.text,
                      children: [
                          (0, s.jsx)("p", { children: T.intl.string(T.t.L9lcGx) }),
                          (0, s.jsx)("p", {
                              children: T.intl.format(T.t.EoDFuL, {
                                  helpCenterLink: h.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (e.skuId === p.Si.TIER_1 || e.skuId === p.Si.TIER_2) &&
                  (t = (0, s.jsxs)("div", {
                      className: I.text,
                      children: [
                          (0, s.jsx)("p", { children: T.intl.string(T.t.UPpbPz) }),
                          (0, s.jsx)("p", {
                              children: T.intl.format(T.t.EoDFuL, {
                                  helpCenterLink: h.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != o)
        t = (0, s.jsx)(E, {
            planId: l,
            startingPremiumSubscriptionPlanId: o,
        });
    else if (null != R) {
        let e = H.Z.get(l);
        a()(null != e, "Missing plan"),
            (t = (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: I.text,
                        children: S(e),
                    }),
                    (0, s.jsx)("div", {
                        className: I.text,
                        children: T.intl.format(T.t["6aZ0NT"], { guildName: R.name }),
                    }),
                ],
            }));
    } else {
        let e = H.Z.get(l);
        a()(null != e, "Missing plan"),
            (t = (0, s.jsx)("div", {
                className: I.text,
                children: S(e),
            }));
    }
    let X = m.ZP.getPremiumType(l);
    a()(null != X, "premium type should not be null in purchase confirmation"),
        (n =
            null != A
                ? T.intl.formatToPlainString(T.t["1qGgm5"], { skuName: A.name })
                : _
                  ? T.intl.string(T.t.QJ9EyM)
                  : null != R
                    ? T.intl.string(T.t.ta3cXV)
                    : T.intl.string(T.t.TkTvBw));
    let y = () =>
        N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
            ? x.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != o
              ? x.ZP.Types.PREMIUM_UPDATED
              : x.ZP.Types.PREMIUM_ACTIVATED;
    return U
        ? (0, s.jsx)(f.Z, {
              type: y(),
              text: t,
              buttonText: n,
              hideClose: j,
              onClose: L,
          })
        : (0, s.jsxs)("div", {
              className: I.confirmation,
              children: [
                  w
                      ? (0, s.jsx)(g.Z, {
                            type: y(),
                            theme: k,
                        })
                      : (0, s.jsx)(x.ZP, {
                            className: I.banner,
                            theme: k,
                            premiumType: X,
                            type: y(),
                        }),
                  t,
                  j
                      ? null
                      : (0, s.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: I.button,
                            children: (0, s.jsx)(C.zxk, {
                                variant: "primary",
                                text: n,
                                onClick: L,
                            }),
                        }),
              ],
          });
}
function _(e) {
    let { planId: t, onClose: n } = e,
        {
            giftRecipient: i,
            selectedGiftStyle: l,
            hasSentMessage: C,
            giftMessageError: c,
            isSendingMessage: u,
        } = (0, d.wD)(),
        M = (0, r.e7)([H.Z], () => H.Z.get(t));
    a()(null != M, "Missing plan");
    let h = (0, r.e7)([L.Z], () => L.Z.getGiftCode(M.skuId));
    return (0, s.jsx)(o.Z, {
        giftCode: h,
        subscriptionPlan: M,
        onClose: n,
        selectedGiftStyle: l,
        hasSentMessage: C,
        giftRecipient: i,
        giftMessageError: c,
        isSendingMessage: u,
    });
}
function j() {
    return (0, s.jsxs)("div", {
        className: I.redirectConfirmation,
        children: [
            (0, s.jsx)(C.X6q, {
                variant: "heading-xl/bold",
                children: T.intl.string(T.t.Xtf9wM),
            }),
            (0, s.jsxs)("div", {
                className: I.redirectBody,
                children: [
                    (0, s.jsx)(C.Text, {
                        variant: "text-md/normal",
                        children: T.intl.string(T.t.bIVRSU),
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(C.Text, {
                        variant: "text-md/normal",
                        children: T.intl.string(T.t["0UJqOz"]),
                    }),
                ],
            }),
        ],
    });
}
