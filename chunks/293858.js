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
    h = n(563132),
    m = n(107998),
    f = n(614277),
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
            paymentSources: O,
            paymentSourceId: P,
            selectedPlan: E,
            selectedSkuId: T,
            step: k,
            updatedSubscription: M,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: B,
        } = (0, h.JL)(),
        {
            isGift: Z,
            giftRecipient: N,
            giftCode: R,
            hasSentMessage: F,
            isSendingMessage: G,
            sendGiftMessage: H,
            claimableRewards: U,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, m.zb)(),
        W = (0, C.id)(E, Z, U),
        K = (0, d.Z)(),
        Y = (0, C.a5)(E),
        V = (0, C.tK)(null == D ? void 0 : D.skuId),
        q = (0, g.$)(O, P),
        J = Z && null != D && Y;
    l()(null != E, "Expected plan to selected"),
        l()(null != T, "Expected selectedSkuId"),
        l()(null != k, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == y || y();
    }, [n, y]);
    i.useEffect(() => {
        !Z || null == N || null == R || F || G || (0, u.pO)(N) || H({ onSubscriptionConfirmation: y });
    }, [H, Z, N, R, F, G, y]),
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
    else if (Z)
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
                    startingFractionalPremiumEndsAt: B.current,
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
                null != V &&
                (0, r.jsx)(x.Z, {
                    onClose: Q,
                    selectedPromotionalDecoPurchaseRecord: V,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
