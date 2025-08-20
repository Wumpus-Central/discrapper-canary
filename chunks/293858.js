t.d(n, { b: () => S });
var r = t(951288),
    i = t(647438),
    l = t(512722),
    s = t.n(l),
    a = t(704215),
    o = t(605236),
    C = t(347896),
    d = t(717401),
    p = t(317269),
    c = t(669079),
    u = t(296848),
    x = t(987209),
    _ = t(563132),
    f = t(107998),
    h = t(27034),
    j = t(400981),
    L = t(435020),
    m = t(698708),
    g = t(921944);
function S(e) {
    let n,
        {
            handleClose: t,
            planGroup: l,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: y,
            postSuccessGuild: E,
            followupSKUInfo: b,
            continueSessionToInitialStep: P,
        } = e,
        {
            activeSubscription: O,
            paymentSources: I,
            paymentSourceId: v,
            selectedPlan: Z,
            selectedSkuId: M,
            step: w,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: B,
            startingFractionalPremiumEndsAtRef: T,
        } = (0, _.JL)(),
        {
            isGift: U,
            giftRecipient: k,
            giftCode: R,
            hasSentMessage: H,
            isSendingMessage: F,
            sendGiftMessage: N,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        z = null != W,
        Y = (0, d.id)(Z, U, G),
        K = (0, C.Z)(),
        V = (0, d.a5)(Z),
        q = (0, d.tK)(null == D ? void 0 : D.skuId),
        J = (0, L.$)(I, v),
        Q = U && null != D && V;
    s()(null != Z, "Expected plan to selected"),
        s()(null != M, "Expected selectedSkuId"),
        s()(null != w, "Step should be set");
    let X = i.useCallback(() => {
        t(), null == S || S();
    }, [t, S]);
    return (
        i.useEffect(() => {
            !U || null == k || null == R || H || F || (0, c.pO)(k) || N({ onSubscriptionConfirmation: S });
        }, [N, U, k, R, H, F, S]),
        i.useEffect(() => {
            null != K &&
                null != K.reminderNotice &&
                Y &&
                (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
                    dismissAction: g.L.INDIRECT_ACTION,
                });
        }, [K, Y]),
        (n =
            null != y
                ? y(Z, X, A)
                : null != P
                  ? (0, r.jsx)(p.VY, {})
                  : U
                    ? (0, r.jsx)(p.TB, {
                          planId: Z.id,
                          onClose: X,
                      })
                    : B.current === Z.id
                      ? (0, r.jsx)(p.ZP, {
                            planId: Z.id,
                            postSuccessGuild: E,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: T.current,
                        })
                      : (0, r.jsx)(p.ZP, {
                            followupSKUInfo: b,
                            startingPremiumSubscriptionPlanId: B.current,
                            planId: Z.id,
                            onClose: X,
                            isDowngrade: null != O && (0, u.GY)(O, Z.id, l),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: T.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(h.C3, {
                    children: [(0, r.jsx)(m.Z, {}), n],
                }),
                null != W && W,
                Q &&
                    null != q &&
                    (0, r.jsx)(j.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D,
                    }),
            ],
        })
    );
}
