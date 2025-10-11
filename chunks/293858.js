n.d(t, { b: () => y });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    o = n(704215),
    s = n(605236),
    d = n(347896),
    C = n(717401),
    c = n(317269),
    u = n(669079),
    p = n(296848),
    _ = n(987209),
    f = n(563132),
    h = n(107998),
    m = n(614277),
    x = n(400981),
    g = n(435020),
    j = n(698708),
    b = n(921944);
function y(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: y,
            renderPurchaseConfirmation: L,
            postSuccessGuild: v,
            followupSKUInfo: S,
            continueSessionToInitialStep: w,
        } = e,
        {
            activeSubscription: I,
            paymentSources: P,
            paymentSourceId: O,
            selectedPlan: E,
            selectedSkuId: k,
            step: T,
            updatedSubscription: M,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, f.JL)(),
        {
            isGift: B,
            giftRecipient: N,
            giftCode: R,
            hasSentMessage: G,
            isSendingMessage: F,
            sendGiftMessage: H,
            claimableRewards: U,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, h.zb)(),
        W = (0, C.id)(E, B, U),
        K = (0, d.Z)(),
        Y = (0, C.a5)(E),
        V = (0, C.tK)(null == D ? void 0 : D.skuId),
        q = (0, g.$)(P, O),
        J = B && null != D && Y;
    l()(null != E, "Expected plan to selected"),
        l()(null != k, "Expected selectedSkuId"),
        l()(null != T, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == y || y();
    }, [n, y]);
    i.useEffect(() => {
        !B || null == N || null == R || G || F || (0, u.pO)(N) || H({ onSubscriptionConfirmation: y });
    }, [H, B, N, R, G, F, y]),
        i.useEffect(() => {
            null != K &&
                null != K.reminderNotice &&
                W &&
                (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [K, W]);
    let X = null != w ? c.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != L) t = L(E, Q, M);
    else if (B)
        t = (0, r.jsx)(c.TB, {
            planId: E.id,
            onClose: Q,
        });
    else {
        let e =
            A.current === E.id
                ? { postSuccessGuild: v }
                : {
                      followupSKUInfo: S,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != I && (0, p.GY)(I, E.id, a),
                  };
        t = (0, r.jsx)(
            c.ZP,
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
                    startingFractionalPremiumEndsAt: Z.current,
                    customCTAType: X,
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
            J &&
                null != V &&
                (0, r.jsx)(x.Z, {
                    onClose: Q,
                    selectedPromotionalDecoPurchaseRecord: V,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
