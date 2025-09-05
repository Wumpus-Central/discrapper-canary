n.d(e, {
    TB: () => v,
    VY: () => j,
    ZP: () => _,
}),
    n(388685),
    n(415506);
var l = n(951288),
    i = n(647438),
    s = n(512722),
    a = n.n(s),
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
    p = n(741245),
    x = n(783017),
    f = n(474936),
    N = n(981631),
    T = n(388032),
    I = n(694760);
function E(t) {
    let e,
        { planId: n, startingPremiumSubscriptionPlanId: i, paymentSourceType: s } = t,
        [C, c] = (0, r.Wu)([H.Z], () => [H.Z.get(i), H.Z.get(n)]);
    if ((a()(null != C && null != c, "Missing startingPlan or newPlan"), f.Y1.indexOf(i) < f.Y1.indexOf(n)))
        switch (n) {
            case f.Xh.PREMIUM_MONTH_TIER_1:
                (e = T.intl.string(T.t.knvOV1)),
                    N.X7u.has(null != s ? s : N.HeQ.UNKNOWN) && (e = T.intl.format(T.t.o6hBiY, {}));
                break;
            case f.Xh.PREMIUM_MONTH_TIER_2:
                (e = T.intl.string(T.t.f8Dqur)),
                    N.X7u.has(null != s ? s : N.HeQ.UNKNOWN) && (e = T.intl.format(T.t.A4THYm, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_1:
                (e = T.intl.string(T.t.YZd5r6)),
                    N.X7u.has(null != s ? s : N.HeQ.UNKNOWN) && (e = T.intl.format(T.t.MHAxpK, {}));
                break;
            case f.Xh.PREMIUM_YEAR_TIER_2:
                (e = T.intl.formatToPlainString(T.t["M/Lknp"], { numFreeGuildSubscriptions: f.cb })),
                    N.X7u.has(null != s ? s : N.HeQ.UNKNOWN) &&
                        (e = T.intl.format(T.t.mULxLS, { numFreeGuildSubscriptions: f.cb }));
                break;
            case f.Xh.PREMIUM_3_MONTH_TIER_2:
            case f.Xh.PREMIUM_6_MONTH_TIER_2:
                e = T.intl.string(T.t.aaCoW1);
                break;
            case f.Xh.PREMIUM_MONTH_TIER_0:
            case f.Xh.PREMIUM_YEAR_TIER_0:
                e = T.intl.string(T.t["XEoQ7+"]);
                break;
            default:
                throw Error("Unexpected planId: ".concat(n));
        }
    else if (C.skuId === f.Si.TIER_2 && c.skuId === f.Si.TIER_1) e = T.intl.string(T.t.PNX4ND);
    else
        switch (c.skuId) {
            case f.Si.TIER_0:
                e = T.intl.string(T.t["XEoQ7+"]);
                break;
            case f.Si.TIER_1:
                e = T.intl.string(T.t.nLI1Ki);
                break;
            case f.Si.TIER_2:
                e = 1 !== C.intervalCount ? T.intl.string(T.t.qSZZVF) : T.intl.string(T.t.RNjcNj);
                break;
            default:
                throw Error("Unexpected skuId: ".concat(c.skuId));
        }
    return (0, l.jsx)("div", {
        className: I.text,
        children: e,
    });
}
function _(t) {
    let e,
        n,
        {
            planId: s,
            enableNoPaymentTrial: d,
            startingPremiumSubscriptionPlanId: o,
            onClose: L,
            followupSKUInfo: _,
            isDowngrade: v,
            hideClose: j,
            postSuccessGuild: R,
            paymentSourceType: b,
            startingFractionalPremiumEndsAt: P,
        } = t,
        { enablePremiumBrandRefresh: k, isDisplayingWowMomentConfirmation: w, customCheckoutFlow: U } = (0, u.JL)(),
        { theme: A } = (0, C.TCT)(),
        S = (0, r.e7)([M.Z], () => (null != _ ? M.Z.get(_.id) : null)),
        X = (0, Z.qH)(P);
    i.useEffect(() => {
        if (null == _ || null != S) return;
        let { applicationId: t, id: e } = _;
        (0, c.$N)(t, e).catch(N.VqG);
    }, [_, S]);
    let O = (t) =>
        t.skuId === f.Si.TIER_0
            ? N.X7u.has(null != b ? b : N.HeQ.UNKNOWN)
                ? T.intl.format(T.t.o6hBiY, {})
                : T.intl.string(T.t["AGf/yc"])
            : t.skuId === f.Si.TIER_1
              ? N.X7u.has(null != b ? b : N.HeQ.UNKNOWN)
                  ? T.intl.format(T.t.o6hBiY, {})
                  : T.intl.string(T.t.knvOV1)
              : N.X7u.has(null != b ? b : N.HeQ.UNKNOWN)
                ? T.intl.format(T.t.A4THYm, {})
                : d
                  ? T.intl.string(T.t["g52y/v"])
                  : T.intl.string(T.t.aTUr3d);
    if (null != S)
        e = (0, l.jsx)("div", {
            className: I.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: S.name }),
        });
    else if (X && !v) {
        let t = H.Z.get(s);
        a()(null != t, "Missing plan"),
            t.skuId === f.Si.TIER_0
                ? (e = (0, l.jsxs)("div", {
                      className: I.text,
                      children: [
                          (0, l.jsx)("p", { children: T.intl.string(T.t.L9lcGx) }),
                          (0, l.jsx)("p", {
                              children: T.intl.format(T.t.EoDFuL, {
                                  helpCenterLink: h.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }))
                : (t.skuId === f.Si.TIER_1 || t.skuId === f.Si.TIER_2) &&
                  (e = (0, l.jsxs)("div", {
                      className: I.text,
                      children: [
                          (0, l.jsx)("p", { children: T.intl.string(T.t.UPpbPz) }),
                          (0, l.jsx)("p", {
                              children: T.intl.format(T.t.EoDFuL, {
                                  helpCenterLink: h.Z.getArticleURL(N.BhN.FRACTIONAL_PREMIUM_ABOUT),
                              }),
                          }),
                      ],
                  }));
    } else if (null != o)
        e = (0, l.jsx)(E, {
            planId: s,
            startingPremiumSubscriptionPlanId: o,
        });
    else if (null != R) {
        let t = H.Z.get(s);
        a()(null != t, "Missing plan"),
            (e = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", {
                        className: I.text,
                        children: O(t),
                    }),
                    (0, l.jsx)("div", {
                        className: I.text,
                        children: T.intl.format(T.t["6aZ0NT"], { guildName: R.name }),
                    }),
                ],
            }));
    } else {
        let t = H.Z.get(s);
        a()(null != t, "Missing plan"),
            (e = (0, l.jsx)("div", {
                className: I.text,
                children: O(t),
            }));
    }
    let y = m.ZP.getPremiumType(s);
    a()(null != y, "premium type should not be null in purchase confirmation");
    let [Y, D] = i.useState(!1),
        B = i.useCallback(() => {
            null != L && (L(), "apple_payment_link" === U && D(!0));
        }, [L, U]);
    n =
        "apple_payment_link" === U
            ? T.intl.string(T.t.qXV2XV)
            : null != S
              ? T.intl.formatToPlainString(T.t["1qGgm5"], { skuName: S.name })
              : v
                ? T.intl.string(T.t.QJ9EyM)
                : null != R
                  ? T.intl.string(T.t.ta3cXV)
                  : T.intl.string(T.t.TkTvBw);
    let Q = () =>
        N.X7u.has(null != b ? b : N.HeQ.UNKNOWN)
            ? p.ZP.Types.PREMIUM_PAYMENT_STARTED
            : null != o
              ? p.ZP.Types.PREMIUM_UPDATED
              : p.ZP.Types.PREMIUM_ACTIVATED;
    return w
        ? (0, l.jsx)(x.Z, {
              type: Q(),
              text: e,
              buttonText: n,
              hideClose: j,
              onClose: B,
              buttonLoading: Y,
          })
        : (0, l.jsxs)("div", {
              className: I.confirmation,
              children: [
                  k
                      ? (0, l.jsx)(g.Z, {
                            type: Q(),
                            theme: A,
                        })
                      : (0, l.jsx)(p.ZP, {
                            className: I.banner,
                            theme: A,
                            premiumType: y,
                            type: Q(),
                        }),
                  e,
                  j
                      ? null
                      : (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: I.button,
                            children: (0, l.jsx)(C.zxk, {
                                variant: "primary",
                                text: n,
                                onClick: B,
                                loading: Y,
                            }),
                        }),
              ],
          });
}
function v(t) {
    let { planId: e, onClose: n } = t,
        {
            giftRecipient: i,
            selectedGiftStyle: s,
            hasSentMessage: C,
            giftMessageError: c,
            isSendingMessage: u,
        } = (0, d.wD)(),
        M = (0, r.e7)([H.Z], () => H.Z.get(e));
    a()(null != M, "Missing plan");
    let h = (0, r.e7)([L.Z], () => L.Z.getGiftCode(M.skuId));
    return (0, l.jsx)(o.Z, {
        giftCode: h,
        subscriptionPlan: M,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: C,
        giftRecipient: i,
        giftMessageError: c,
        isSendingMessage: u,
    });
}
function j() {
    return (0, l.jsxs)("div", {
        className: I.redirectConfirmation,
        children: [
            (0, l.jsx)(C.X6q, {
                variant: "heading-xl/bold",
                children: T.intl.string(T.t.Xtf9wM),
            }),
            (0, l.jsxs)("div", {
                className: I.redirectBody,
                children: [
                    (0, l.jsx)(C.Text, {
                        variant: "text-md/normal",
                        children: T.intl.string(T.t.bIVRSU),
                    }),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)(C.Text, {
                        variant: "text-md/normal",
                        children: T.intl.string(T.t["0UJqOz"]),
                    }),
                ],
            }),
        ],
    });
}
