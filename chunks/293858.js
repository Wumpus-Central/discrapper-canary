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
    j = n(435020),
    g = n(698708),
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
            continueSessionToInitialStep: O,
        } = e,
        {
            activeSubscription: P,
            paymentSources: E,
            paymentSourceId: w,
            selectedPlan: I,
            selectedSkuId: k,
            step: T,
            updatedSubscription: M,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, f.JL)(),
        {
            isGift: N,
            giftRecipient: R,
            giftCode: B,
            hasSentMessage: F,
            isSendingMessage: G,
            sendGiftMessage: U,
            claimableRewards: H,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, h.zb)(),
        K = (0, C.id)(I, N, H),
        W = (0, d.Z)(),
        Y = (0, C.a5)(I),
        V = (0, C.tK)(null == D ? void 0 : D.skuId),
        q = (0, j.$)(E, w),
        J = N && null != D && Y;
    l()(null != I, "Expected plan to selected"),
        l()(null != k, "Expected selectedSkuId"),
        l()(null != T, "Step should be set");
    let X = i.useCallback(() => {
        n(), null == y || y();
    }, [n, y]);
    i.useEffect(() => {
        !N || null == R || null == B || F || G || (0, u.pO)(R) || U({ onSubscriptionConfirmation: y });
    }, [U, N, R, B, F, G, y]),
        i.useEffect(() => {
            null != W &&
                null != W.reminderNotice &&
                K &&
                (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, W.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [W, K]);
    let Q = null != O ? c.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != L) t = L(I, X, M);
    else if (N)
        t = (0, r.jsx)(c.TB, {
            planId: I.id,
            onClose: X,
        });
    else {
        let e =
            A.current === I.id
                ? { postSuccessGuild: v }
                : {
                      followupSKUInfo: S,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != P && (0, p.GY)(P, I.id, a),
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
                    planId: I.id,
                    onClose: X,
                    paymentSourceType: q,
                    hideClose: null != z,
                    startingFractionalPremiumEndsAt: Z.current,
                    customCTAType: Q,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(m.C3, {
                children: [(0, r.jsx)(g.Z, {}), t],
            }),
            null != z && z,
            J &&
                null != V &&
                (0, r.jsx)(x.Z, {
                    onClose: X,
                    selectedPromotionalDecoPurchaseRecord: V,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
