n.d(t, { b: () => b });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(704215),
    o = n(605236),
    C = n(347896),
    d = n(717401),
    p = n(317269),
    c = n(669079),
    u = n(296848),
    x = n(987209),
    h = n(563132),
    _ = n(107998),
    f = n(27034),
    j = n(400981),
    m = n(435020),
    L = n(698708),
    g = n(921944);
function b(e) {
    let t,
        {
            handleClose: n,
            planGroup: l,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: y,
            postSuccessGuild: S,
            followupSKUInfo: E,
            continueSessionToInitialStep: O,
        } = e,
        {
            activeSubscription: P,
            paymentSources: v,
            paymentSourceId: w,
            selectedPlan: M,
            selectedSkuId: I,
            step: Z,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: k,
            startingFractionalPremiumEndsAtRef: T,
        } = (0, h.JL)(),
        {
            isGift: B,
            giftRecipient: U,
            giftCode: R,
            hasSentMessage: N,
            isSendingMessage: H,
            sendGiftMessage: F,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, x.wD)(),
        { confirmationFooter: W } = (0, _.zb)(),
        z = null != W,
        Y = (0, d.id)(M, B, G),
        V = (0, C.Z)(),
        K = (0, d.a5)(M),
        q = (0, d.tK)(null == D ? void 0 : D.skuId),
        J = (0, m.$)(v, w),
        X = B && null != D && K;
    s()(null != M, "Expected plan to selected"),
        s()(null != I, "Expected selectedSkuId"),
        s()(null != Z, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == b || b();
    }, [n, b]);
    return (
        i.useEffect(() => {
            !B || null == U || null == R || N || H || (0, c.pO)(U) || F({ onSubscriptionConfirmation: b });
        }, [F, B, U, R, N, H, b]),
        i.useEffect(() => {
            null != V &&
                null != V.reminderNotice &&
                Y &&
                (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, {
                    dismissAction: g.L.INDIRECT_ACTION,
                });
        }, [V, Y]),
        (t =
            null != y
                ? y(M, Q, A)
                : null != O
                  ? (0, r.jsx)(p.VY, {})
                  : B
                    ? (0, r.jsx)(p.TB, {
                          planId: M.id,
                          onClose: Q,
                      })
                    : k.current === M.id
                      ? (0, r.jsx)(p.ZP, {
                            planId: M.id,
                            postSuccessGuild: S,
                            onClose: Q,
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: T.current,
                        })
                      : (0, r.jsx)(p.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: M.id,
                            onClose: Q,
                            isDowngrade: null != P && (0, u.GY)(P, M.id, l),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: T.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(L.Z, {}), t],
                }),
                null != W && W,
                X &&
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
