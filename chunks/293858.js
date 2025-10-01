n.d(t, { b: () => L });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    l = n(704215),
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
function L(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: L,
            renderPurchaseConfirmation: y,
            postSuccessGuild: v,
            followupSKUInfo: S,
            continueSessionToInitialStep: O,
        } = e,
        {
            activeSubscription: E,
            paymentSources: I,
            paymentSourceId: P,
            selectedPlan: w,
            selectedSkuId: k,
            step: T,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: M,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, f.JL)(),
        {
            isGift: N,
            giftRecipient: R,
            giftCode: F,
            hasSentMessage: B,
            isSendingMessage: U,
            sendGiftMessage: H,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, h.zb)(),
        Y = null != z,
        K = (0, C.id)(w, N, G),
        W = (0, d.Z)(),
        V = (0, C.a5)(w),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, j.$)(I, P),
        X = N && null != D && V;
    o()(null != w, "Expected plan to selected"),
        o()(null != k, "Expected selectedSkuId"),
        o()(null != T, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == L || L();
    }, [n, L]);
    return (
        i.useEffect(() => {
            !N || null == R || null == F || B || U || (0, u.pO)(R) || H({ onSubscriptionConfirmation: L });
        }, [H, N, R, F, B, U, L]),
        i.useEffect(() => {
            null != W &&
                null != W.reminderNotice &&
                K &&
                (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, W.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [W, K]),
        (t =
            null != y
                ? y(w, Q, A)
                : null != O
                  ? (0, r.jsx)(c.VY, {})
                  : N
                    ? (0, r.jsx)(c.TB, {
                          planId: w.id,
                          onClose: Q,
                      })
                    : M.current === w.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: w.id,
                            postSuccessGuild: v,
                            onClose: Q,
                            paymentSourceType: J,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: Z.current,
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: S,
                            startingPremiumSubscriptionPlanId: M.current,
                            planId: w.id,
                            onClose: Q,
                            isDowngrade: null != E && (0, p.GY)(E, w.id, a),
                            paymentSourceType: J,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: Z.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(m.C3, {
                    children: [(0, r.jsx)(g.Z, {}), t],
                }),
                null != z && z,
                X &&
                    null != q &&
                    (0, r.jsx)(x.Z, {
                        onClose: Q,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D,
                    }),
            ],
        })
    );
}
