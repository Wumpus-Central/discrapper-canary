n.d(t, { b: () => S });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(704215),
    o = n(605236),
    C = n(347896),
    d = n(717401),
    c = n(317269),
    u = n(585483),
    p = n(669079),
    x = n(296848),
    h = n(987209),
    f = n(563132),
    _ = n(107998),
    m = n(27034),
    j = n(400981),
    g = n(435020),
    b = n(698708),
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
            continueSessionToInitialStep: P,
        } = e,
        {
            activeSubscription: k,
            paymentSources: w,
            paymentSourceId: M,
            selectedPlan: I,
            selectedSkuId: T,
            step: A,
            updatedSubscription: Z,
            startingPremiumSubscriptionPlanIdRef: N,
            startingFractionalPremiumEndsAtRef: R,
        } = (0, f.JL)(),
        {
            isGift: B,
            giftRecipient: U,
            giftCode: H,
            hasSentMessage: F,
            isSendingMessage: G,
            sendGiftMessage: D,
            claimableRewards: K,
            selectedGiftingPromotionReward: z,
        } = (0, h.wD)(),
        { confirmationFooter: W, maybeOpenMarketingMomentRewardsModal: Y } = (0, _.zb)(),
        V = null != W,
        q = (0, d.id)(I, B, K),
        J = (0, C.Z)(),
        Q = (0, d.a5)(I),
        X = (0, d.tK)(null == z ? void 0 : z.skuId),
        $ = (0, g.$)(w, M),
        ee = B && null != z && Q;
    a()(null != I, "Expected plan to selected"),
        a()(null != T, "Expected selectedSkuId"),
        a()(null != A, "Step should be set");
    let et = i.useCallback(() => {
        n(), null == S || S();
    }, [n, S]);
    return (
        i.useEffect(() => {
            function e() {
                null == Y || Y();
            }
            return (
                u.S.subscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    u.S.unsubscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, [Y]),
        i.useEffect(() => {
            !B || null == U || null == H || F || G || (0, p.pO)(U) || D({ onSubscriptionConfirmation: S });
        }, [D, B, U, H, F, G, S]),
        i.useEffect(() => {
            null != J &&
                null != J.reminderNotice &&
                q &&
                (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
                    dismissAction: y.L.INDIRECT_ACTION,
                });
        }, [J, q]),
        (t =
            null != v
                ? v(I, et, Z)
                : null != P
                  ? (0, r.jsx)(c.VY, {})
                  : B
                    ? (0, r.jsx)(c.TB, {
                          planId: I.id,
                          onClose: et,
                      })
                    : N.current === I.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: I.id,
                            postSuccessGuild: E,
                            onClose: et,
                            paymentSourceType: $,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: R.current,
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: O,
                            startingPremiumSubscriptionPlanId: N.current,
                            planId: I.id,
                            onClose: et,
                            isDowngrade: null != k && (0, x.GY)(k, I.id, l),
                            paymentSourceType: $,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: R.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(m.C3, {
                    children: [(0, r.jsx)(b.Z, {}), t],
                }),
                null != W && W,
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
