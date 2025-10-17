n.d(t, { b: () => v });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    s = n(704215),
    o = n(605236),
    d = n(347896),
    c = n(717401),
    C = n(317269),
    u = n(669079),
    p = n(296848),
    h = n(987209),
    _ = n(563132),
    m = n(107998),
    f = n(614277),
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
            renderPurchaseConfirmation: S,
            postSuccessGuild: L,
            followupSKUInfo: y,
            continueSessionToInitialStep: I,
        } = e,
        {
            activeSubscription: w,
            paymentSources: P,
            paymentSourceId: E,
            selectedPlan: O,
            selectedSkuId: T,
            step: k,
            updatedSubscription: N,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, _.JL)(),
        {
            isGift: M,
            giftRecipient: R,
            giftCode: B,
            hasSentMessage: F,
            isSendingMessage: H,
            sendGiftMessage: G,
            claimableRewards: U,
            selectedGiftingPromotionReward: D,
        } = (0, h.wD)(),
        { confirmationFooter: z } = (0, m.zb)(),
        W = (0, c.id)(O, M, U),
        K = (0, d.Z)(),
        V = (0, c.a5)(O),
        Y = (0, c.tK)(null == D ? void 0 : D.skuId),
        q = (0, g.$)(P, E),
        J = M && null != D && V;
    l()(null != O, "Expected plan to selected"),
        l()(null != T, "Expected selectedSkuId"),
        l()(null != k, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == v || v();
    }, [n, v]);
    i.useEffect(() => {
        !M || null == R || null == B || F || H || (0, u.pO)(R) || G({ onSubscriptionConfirmation: v });
    }, [G, M, R, B, F, H, v]),
        i.useEffect(() => {
            null != K &&
                null != K.reminderNotice &&
                W &&
                (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [K, W]);
    let X = null != I ? C.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != S) t = S(O, Q, N);
    else if (M)
        t = (0, r.jsx)(C.TB, {
            planId: O.id,
            onClose: Q,
        });
    else {
        let e =
            A.current === O.id
                ? { postSuccessGuild: L }
                : {
                      followupSKUInfo: y,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != w && (0, p.GY)(w, O.id, a),
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
                    planId: O.id,
                    onClose: Q,
                    paymentSourceType: q,
                    hideClose: null != z,
                    startingFractionalPremiumEndsAt: Z.current,
                    customCTAType: X,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.C3, {
                children: [(0, r.jsx)(j.Z, {}), t],
            }),
            null != z && z,
            J &&
                null != Y &&
                (0, r.jsx)(x.Z, {
                    onClose: Q,
                    selectedPromotionalDecoPurchaseRecord: Y,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
