n.d(t, { b: () => g });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(704215),
    o = n(605236),
    C = n(347896),
    d = n(717401),
    c = n(317269),
    p = n(669079),
    u = n(296848),
    x = n(987209),
    f = n(563132),
    h = n(107998),
    _ = n(27034),
    j = n(400981),
    m = n(435020),
    L = n(698708),
    b = n(921944);
function g(e) {
    let t,
        {
            handleClose: n,
            planGroup: l,
            onSubscriptionConfirmation: g,
            renderPurchaseConfirmation: y,
            postSuccessGuild: S,
            followupSKUInfo: v,
            continueSessionToInitialStep: E,
        } = e,
        {
            activeSubscription: O,
            paymentSources: P,
            paymentSourceId: w,
            selectedPlan: I,
            selectedSkuId: Z,
            step: M,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: k,
            startingFractionalPremiumEndsAtRef: T,
        } = (0, f.JL)(),
        {
            isGift: B,
            giftRecipient: R,
            giftCode: U,
            hasSentMessage: N,
            isSendingMessage: H,
            sendGiftMessage: F,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, x.wD)(),
        { confirmationFooter: z } = (0, h.zb)(),
        W = null != z,
        Y = (0, d.id)(I, B, G),
        V = (0, C.Z)(),
        K = (0, d.a5)(I),
        q = (0, d.tK)(null == D ? void 0 : D.skuId),
        X = (0, m.$)(P, w),
        J = B && null != D && K;
    a()(null != I, "Expected plan to selected"),
        a()(null != Z, "Expected selectedSkuId"),
        a()(null != M, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == g || g();
    }, [n, g]);
    return (
        i.useEffect(() => {
            !B || null == R || null == U || N || H || (0, p.pO)(R) || F({ onSubscriptionConfirmation: g });
        }, [F, B, R, U, N, H, g]),
        i.useEffect(() => {
            null != V &&
                null != V.reminderNotice &&
                Y &&
                (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [V, Y]),
        (t =
            null != y
                ? y(I, Q, A)
                : null != E
                  ? (0, r.jsx)(c.VY, {})
                  : B
                    ? (0, r.jsx)(c.TB, {
                          planId: I.id,
                          onClose: Q,
                      })
                    : k.current === I.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: I.id,
                            postSuccessGuild: S,
                            onClose: Q,
                            paymentSourceType: X,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: T.current,
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: I.id,
                            onClose: Q,
                            isDowngrade: null != O && (0, u.GY)(O, I.id, l),
                            paymentSourceType: X,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: T.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(_.C3, {
                    children: [(0, r.jsx)(L.Z, {}), t],
                }),
                null != z && z,
                J &&
                    null != q &&
                    (0, r.jsx)(j.Z, {
                        onClose: Q,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D,
                    }),
            ],
        })
    );
}
