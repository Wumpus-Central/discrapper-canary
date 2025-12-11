n.d(t, { b: () => I });
var r = n(54381),
    l = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(704215),
    o = n(481060),
    u = n(605236),
    c = n(347896),
    d = n(717401),
    p = n(885472),
    m = n(317269),
    h = n(585483),
    f = n(669079),
    g = n(296848),
    j = n(987209),
    y = n(563132),
    v = n(107998),
    b = n(614277),
    O = n(400981),
    P = n(435020),
    S = n(698708),
    x = n(981631),
    E = n(921944);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e) {
    let t,
        {
            handleClose: i,
            planGroup: I,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: k,
            postSuccessGuild: C,
            followupSKUInfo: N,
            continueSessionToInitialStep: M,
        } = e,
        {
            activeSubscription: R,
            paymentSources: _,
            paymentSourceId: A,
            selectedPlan: L,
            selectedSkuId: Z,
            step: D,
            updatedSubscription: F,
            startingPremiumSubscriptionPlanIdRef: G,
            startingFractionalPremiumEndsAtRef: B,
            isPremiumGroupPurchase: H,
        } = (0, y.JL)(),
        {
            isGift: U,
            giftRecipient: z,
            giftCode: K,
            hasSentMessage: W,
            isSendingMessage: V,
            sendGiftMessage: Y,
            claimableRewards: q,
            selectedGiftingPromotionReward: J,
        } = (0, j.wD)(),
        { confirmationFooter: Q } = (0, v.zb)(),
        X = (0, d.id)(L, U, q),
        $ = (0, c.Z)(),
        ee = (0, d.a5)(L),
        et = (0, d.tK)(null == J ? void 0 : J.skuId),
        en = (0, P.$)(_, A),
        er = U && null != J && ee;
    a()(null != L, "Expected plan to selected"),
        a()(null != Z, "Expected selectedSkuId"),
        a()(null != D, "Step should be set");
    let el = l.useCallback(() => {
        i(), null == T || T();
    }, [i, T]);
    l.useEffect(() => {
        function e() {
            H &&
                null != F &&
                F.hasAnyPremiumGroup &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = w({}, t)),
                            (l = l = { subscription: F }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n),
                        );
                    };
                });
        }
        return (
            h.S.subscribe(x.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                h.S.unsubscribe(x.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [H, F]),
        l.useEffect(() => {
            !U || null == z || null == K || W || V || (0, f.pO)(z) || Y({ onSubscriptionConfirmation: T });
        }, [Y, U, z, K, W, V, T]),
        l.useEffect(() => {
            null != $ &&
                null != $.reminderNotice &&
                X &&
                (0, u.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, p.m)(), { dismissAction: E.L.INDIRECT_ACTION });
        }, [$, X]);
    let ei = null != M ? m.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) t = k(L, el, F);
    else if (U)
        t = (0, r.jsx)(m.TB, {
            planId: L.id,
            onClose: el,
        });
    else {
        let e =
            G.current === L.id
                ? { postSuccessGuild: C }
                : {
                      followupSKUInfo: N,
                      startingPremiumSubscriptionPlanId: G.current,
                      isDowngrade: null != R && (0, g.GY)(R, L.id, I),
                  };
        t = (0, r.jsx)(
            m.ZP,
            w(
                {
                    planId: L.id,
                    onClose: el,
                    paymentSourceType: en,
                    hideClose: null != Q,
                    startingFractionalPremiumEndsAt: B.current,
                    customCTAType: ei,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(b.C3, {
                children: [(0, r.jsx)(S.Z, {}), t],
            }),
            null != Q && Q,
            er &&
                null != et &&
                (0, r.jsx)(O.Z, {
                    onClose: el,
                    selectedPromotionalDecoPurchaseRecord: et,
                    selectedGiftingPromotionReward: J,
                }),
        ],
    });
}
