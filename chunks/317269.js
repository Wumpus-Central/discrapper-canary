n.d(e, {
    TB: () => v,
    VY: () => j,
    ZP: () => _,
}),
    n(388685),
    n(415506);
var i = n(255367),
    s = n(73800),
    l = n(512722),
    a = n.n(l),
    r = n(442837),
    C = n(481060),
    c = n(16084),
    d = n(987209),
    u = n(563132),
    L = n(179118),
    H = n(912788),
    o = n(509545),
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
    I = n(106772);
function E(t) {
    let e,
        { planId: n, startingPremiumSubscriptionPlanId: s, paymentSourceType: l } = t,
        [C, c] = (0, r.Wu)([o.Z], () => [o.Z.get(s), o.Z.get(n)]);
    if ((a()(null != C && null != c, "Missing startingPlan or newPlan"), p.Y1.indexOf(s) < p.Y1.indexOf(n)))
        switch (n) {
            case p.Xh.PREMIUM_MONTH_TIER_1:
                (e = T.intl.string(T.t.knvOV1)),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (e = T.intl.format(T.t.o6hBiY, {}));
                break;
            case p.Xh.PREMIUM_MONTH_TIER_2:
                (e = T.intl.string(T.t.f8Dqur)),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (e = T.intl.format(T.t.A4THYm, {}));
                break;
            case p.Xh.PREMIUM_YEAR_TIER_1:
                (e = T.intl.string(T.t.YZd5r6)),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (e = T.intl.format(T.t.MHAxpK, {}));
                break;
            case p.Xh.PREMIUM_YEAR_TIER_2:
                (e = T.intl.formatToPlainString(T.t["M/Lknp"], { numFreeGuildSubscriptions: p.cb })),
                    N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) &&
                        (e = T.intl.format(T.t.mULxLS, { numFreeGuildSubscriptions: p.cb }));
                break;
            case p.Xh.PREMIUM_3_MONTH_TIER_2:
            case p.Xh.PREMIUM_6_MONTH_TIER_2:
                e = T.intl.string(T.t.aaCoW1);
                break;
            case p.Xh.PREMIUM_MONTH_TIER_0:
            case p.Xh.PREMIUM_YEAR_TIER_0:
                e = T.intl.string(T.t["XEoQ7+"]);
                break;
            default:
                throw Error("Unexpected planId: ".concat(n));
        }
    else if (C.skuId === p.Si.TIER_2 && c.skuId === p.Si.TIER_1) e = T.intl.string(T.t.PNX4ND);
    else
        switch (c.skuId) {
            case p.Si.TIER_0:
                e = T.intl.string(T.t["XEoQ7+"]);
                break;
            case p.Si.TIER_1:
                e = T.intl.string(T.t.nLI1Ki);
                break;
            case p.Si.TIER_2:
                e = 1 !== C.intervalCount ? T.intl.string(T.t.qSZZVF) : T.intl.string(T.t.RNjcNj);
                break;
            default:
                throw Error("Unexpected skuId: ".concat(c.skuId));
        }
    return (0, i.jsx)("div", {
        className: I.text,
        children: e,
    });
}
function _(t) {
    let e,
        n,
        {
            planId: l,
            enableNoPaymentTrial: d,
            startingPremiumSubscriptionPlanId: L,
            onClose: H,
            followupSKUInfo: _,
            isDowngrade: v,
            hideClose: j,
            postSuccessGuild: R,
            paymentSourceType: P,
            startingFractionalPremiumEndsAt: U,
        } = t,
        { enablePremiumBrandRefresh: b, isDisplayingWowMomentConfirmation: k } = (0, u.JL)(),
        { theme: w } = (0, C.TCT)(),
        A = (0, r.e7)([M.Z], () => (null != _ ? M.Z.get(_.id) : null)),
        O = (0, Z.qH)(U);
    s.useEffect(() => {
        if (null == _ || null != A) return;
        let { applicationId: t, id: e } = _;
        (0, c.$N)(t, e).catch(N.VqG);
    }, [_, A]);
    let S = (t) =>
        t.skuId === p.Si.TIER_0
            ? N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
                ? T.intl.format(T.t.o6hBiY, {})
                : T.intl.string(T.t["AGf/yc"])
            : t.skuId === p.Si.TIER_1
              ? N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
                  ? T.intl.format(T.t.o6hBiY, {})
                  : T.intl.string(T.t.knvOV1)
              : N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
                ? T.intl.format(T.t.A4THYm, {})
                : d
                  ? T.intl.string(T.t["g52y/v"])
                  : T.intl.string(T.t.aTUr3d);
    if (null != A)
        e = (0, i.jsx)("div", {
            className: I.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: A.name }),
        });
    else if (O && !v) {
        let t = o.Z.get(l);
        a()(null != t, "Missing plan"),
            t.skuId === p.Si.TIER_0
                ? (e = (0, i.jsxs)("div", {
                      className: I.text,
                      children: [
                          (0, i.jsx)("p", { children: T.intl.string(T.t.L9lcGx) }),
                          (0, i.jsx)("p", {
                              children: T.intl.format(T.t.EoDFuL, {
                                  helpCenterLink: h.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (t.skuId === p.Si.TIER_1 || t.skuId === p.Si.TIER_2) &&
                  (e = (0, i.jsxs)("div", {
                      className: I.text,
                      children: [
                          (0, i.jsx)("p", { children: T.intl.string(T.t.UPpbPz) }),
                          (0, i.jsx)("p", {
                              children: T.intl.format(T.t.EoDFuL, {
                                  helpCenterLink: h.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != L)
        e = (0, i.jsx)(E, {
            planId: l,
            startingPremiumSubscriptionPlanId: L,
        });
    else if (null != R) {
        let t = o.Z.get(l);
        a()(null != t, "Missing plan"),
            (e = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: I.text,
                        children: S(t),
                    }),
                    (0, i.jsx)("div", {
                        className: I.text,
                        children: T.intl.format(T.t["6aZ0NT"], { guildName: R.name }),
                    }),
                ],
            }));
    } else {
        let t = o.Z.get(l);
        a()(null != t, "Missing plan"),
            (e = (0, i.jsx)("div", {
                className: I.text,
                children: S(t),
            }));
    }
    let X = m.ZP.getPremiumType(l);
    a()(null != X, "premium type should not be null in purchase confirmation"),
        (n =
            null != A
                ? T.intl.formatToPlainString(T.t["1qGgm5"], { skuName: A.name })
                : v
                  ? T.intl.string(T.t.QJ9EyM)
                  : null != R
                    ? T.intl.string(T.t.ta3cXV)
                    : T.intl.string(T.t.TkTvBw));
    let y = () =>
        N.X7u.has(null != P ? P : N.HeQ.UNKNOWN)
            ? x.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != L
              ? x.ZP.Types.PREMIUM_UPDATED
              : x.ZP.Types.PREMIUM_ACTIVATED;
    return k
        ? (0, i.jsx)(f.Z, {
              type: y(),
              text: e,
              buttonText: n,
              hideClose: j,
              onClose: H,
          })
        : (0, i.jsxs)("div", {
              className: I.confirmation,
              children: [
                  b
                      ? (0, i.jsx)(g.Z, {
                            type: y(),
                            theme: w,
                        })
                      : (0, i.jsx)(x.ZP, {
                            className: I.banner,
                            theme: w,
                            premiumType: X,
                            type: y(),
                        }),
                  e,
                  j
                      ? null
                      : (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: I.button,
                            children: (0, i.jsx)(C.zxk, {
                                variant: "primary",
                                text: n,
                                onClick: H,
                            }),
                        }),
              ],
          });
}
function v(t) {
    let { planId: e, onClose: n } = t,
        {
            giftRecipient: s,
            selectedGiftStyle: l,
            hasSentMessage: C,
            giftMessageError: c,
            isSendingMessage: u,
        } = (0, d.wD)(),
        M = (0, r.e7)([o.Z], () => o.Z.get(e));
    a()(null != M, "Missing plan");
    let h = (0, r.e7)([H.Z], () => H.Z.getGiftCode(M.skuId));
    return (0, i.jsx)(L.Z, {
        giftCode: h,
        subscriptionPlan: M,
        onClose: n,
        selectedGiftStyle: l,
        hasSentMessage: C,
        giftRecipient: s,
        giftMessageError: c,
        isSendingMessage: u,
    });
}
function j() {
    return (0, i.jsxs)("div", {
        className: I.redirectConfirmation,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: "heading-xl/bold",
                children: T.intl.string(T.t.Xtf9wM),
            }),
            (0, i.jsxs)("div", {
                className: I.redirectBody,
                children: [
                    (0, i.jsx)(C.Text, {
                        variant: "text-md/normal",
                        children: T.intl.string(T.t.bIVRSU),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)(C.Text, {
                        variant: "text-md/normal",
                        children: T.intl.string(T.t["0UJqOz"]),
                    }),
                ],
            }),
        ],
    });
}
