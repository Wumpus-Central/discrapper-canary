n.d(t, { b: () => v });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    o = n(704215),
    s = n(605236),
    d = n(347896),
    c = n(717401),
    C = n(317269),
    u = n(669079),
    p = n(296848),
    _ = n(987209),
    h = n(563132),
    f = n(107998),
    m = n(614277),
    x = n(400981),
    g = n(435020),
    j = n(698708),
    b = n(921944);
function v(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: y,
            postSuccessGuild: S,
            followupSKUInfo: L,
            continueSessionToInitialStep: I,
        } = e,
        {
            activeSubscription: w,
            paymentSources: P,
            paymentSourceId: O,
            selectedPlan: E,
            selectedSkuId: k,
            step: T,
            updatedSubscription: Z,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: N,
        } = (0, h.JL)(),
        {
            isGift: M,
            giftRecipient: R,
            giftCode: B,
            hasSentMessage: F,
            isSendingMessage: G,
            sendGiftMessage: H,
            claimableRewards: U,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, f.zb)(),
        W = (0, c.id)(E, M, U),
        K = (0, d.Z)(),
        V = (0, c.a5)(E),
        Y = (0, c.tK)(null == D ? void 0 : D.skuId),
        q = (0, g.$)(P, O),
        X = M && null != D && V;
    l()(null != E, "Expected plan to selected"),
        l()(null != k, "Expected selectedSkuId"),
        l()(null != T, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == v || v();
    }, [n, v]);
    i.useEffect(() => {
        !M || null == R || null == B || F || G || (0, u.pO)(R) || H({ onSubscriptionConfirmation: v });
    }, [H, M, R, B, F, G, v]),
        i.useEffect(() => {
            null != K &&
                null != K.reminderNotice &&
                W &&
                (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [K, W]);
    let J = null != I ? C.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != y) t = y(E, Q, Z);
    else if (M)
        t = (0, r.jsx)(C.TB, {
            planId: E.id,
            onClose: Q,
        });
    else {
        let e =
            A.current === E.id
                ? { postSuccessGuild: S }
                : {
                      followupSKUInfo: L,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != w && (0, p.GY)(w, E.id, a),
                  };
        t = (0, r.jsx)(
            C.ZP,
            (function (e) {
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
            })(
                {
                    planId: E.id,
                    onClose: Q,
                    paymentSourceType: q,
                    hideClose: null != z,
                    startingFractionalPremiumEndsAt: N.current,
                    customCTAType: J,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(m.C3, {
                children: [(0, r.jsx)(j.Z, {}), t],
            }),
            null != z && z,
            X &&
                null != Y &&
                (0, r.jsx)(x.Z, {
                    onClose: Q,
                    selectedPromotionalDecoPurchaseRecord: Y,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
