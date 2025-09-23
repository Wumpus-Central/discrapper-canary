n.d(t, { b: () => S });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(704215),
    s = n(605236),
    C = n(347896),
    d = n(717401),
    c = n(317269),
    u = n(585483),
    p = n(669079),
    _ = n(296848),
    h = n(987209),
    f = n(563132),
    x = n(107998),
    m = n(614277),
    j = n(400981),
    b = n(435020),
    g = n(698708),
    L = n(981631),
    y = n(921944);
function S(e) {
    let t,
        {
            handleClose: n,
            planGroup: l,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: v,
            postSuccessGuild: E,
            followupSKUInfo: O,
            continueSessionToInitialStep: I,
        } = e,
        {
            activeSubscription: P,
            paymentSources: w,
            paymentSourceId: k,
            selectedPlan: M,
            selectedSkuId: T,
            step: A,
            updatedSubscription: Z,
            startingPremiumSubscriptionPlanIdRef: N,
            startingFractionalPremiumEndsAtRef: F,
        } = (0, f.JL)(),
        {
            isGift: R,
            giftRecipient: B,
            giftCode: U,
            hasSentMessage: H,
            isSendingMessage: G,
            sendGiftMessage: D,
            claimableRewards: Y,
            selectedGiftingPromotionReward: z,
        } = (0, h.wD)(),
        { confirmationFooter: K, maybeOpenMarketingMomentRewardsModal: W } = (0, x.zb)(),
        V = null != K,
        q = (0, d.id)(M, R, Y),
        J = (0, C.Z)(),
        Q = (0, d.a5)(M),
        X = (0, d.tK)(null == z ? void 0 : z.skuId),
        $ = (0, b.$)(w, k),
        ee = R && null != z && Q;
    o()(null != M, "Expected plan to selected"),
        o()(null != T, "Expected selectedSkuId"),
        o()(null != A, "Step should be set");
    let et = i.useCallback(() => {
        n(), null == S || S();
    }, [n, S]);
    return (
        i.useEffect(() => {
            function e() {
                null == W || W();
            }
            return (
                u.S.subscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    u.S.unsubscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, [W]),
        i.useEffect(() => {
            !R || null == B || null == U || H || G || (0, p.pO)(B) || D({ onSubscriptionConfirmation: S });
        }, [D, R, B, U, H, G, S]),
        i.useEffect(() => {
            null != J &&
                null != J.reminderNotice &&
                q &&
                (0, s.wH)(a.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
                    dismissAction: y.L.INDIRECT_ACTION,
                });
        }, [J, q]),
        (t =
            null != v
                ? v(M, et, Z)
                : null != I
                  ? (0, r.jsx)(c.VY, {})
                  : R
                    ? (0, r.jsx)(c.TB, {
                          planId: M.id,
                          onClose: et,
                      })
                    : N.current === M.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: M.id,
                            postSuccessGuild: E,
                            onClose: et,
                            paymentSourceType: $,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: F.current,
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: O,
                            startingPremiumSubscriptionPlanId: N.current,
                            planId: M.id,
                            onClose: et,
                            isDowngrade: null != P && (0, _.GY)(P, M.id, l),
                            paymentSourceType: $,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: F.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(m.C3, {
                    children: [(0, r.jsx)(g.Z, {}), t],
                }),
                null != K && K,
                ee &&
                    null != X &&
                    (0, r.jsx)(j.Z, {
                        onClose: et,
                        selectedPromotionalDecoPurchaseRecord: X,
                        selectedGiftingPromotionReward: z,
                    }),
            ],
        })
    );
}
