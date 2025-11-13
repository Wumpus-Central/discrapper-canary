n.d(t, { b: () => S });
var r = n(951288),
    l = n(647438),
    a = n(512722),
    i = n.n(a),
    o = n(704215),
    s = n(605236),
    d = n(347896),
    c = n(717401),
    u = n(885472),
    p = n(317269),
    m = n(669079),
    h = n(296848),
    f = n(987209),
    b = n(563132),
    g = n(107998),
    v = n(614277),
    x = n(400981),
    j = n(435020),
    y = n(698708),
    P = n(921944);
function S(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: _,
            postSuccessGuild: O,
            followupSKUInfo: C,
            continueSessionToInitialStep: w,
        } = e,
        {
            activeSubscription: k,
            paymentSources: E,
            paymentSourceId: I,
            selectedPlan: T,
            selectedSkuId: N,
            step: R,
            updatedSubscription: M,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, b.JL)(),
        {
            isGift: B,
            giftRecipient: L,
            giftCode: D,
            hasSentMessage: F,
            isSendingMessage: H,
            sendGiftMessage: G,
            claimableRewards: U,
            selectedGiftingPromotionReward: K,
        } = (0, f.wD)(),
        { confirmationFooter: z } = (0, g.zb)(),
        W = (0, c.id)(T, B, U),
        Y = (0, d.Z)(),
        V = (0, c.a5)(T),
        q = (0, c.tK)(null == K ? void 0 : K.skuId),
        J = (0, j.$)(E, I),
        Q = B && null != K && V;
    i()(null != T, "Expected plan to selected"),
        i()(null != N, "Expected selectedSkuId"),
        i()(null != R, "Step should be set");
    let X = l.useCallback(() => {
        n(), null == S || S();
    }, [n, S]);
    l.useEffect(() => {
        !B || null == L || null == D || F || H || (0, m.pO)(L) || G({ onSubscriptionConfirmation: S });
    }, [G, B, L, D, F, H, S]),
        l.useEffect(() => {
            null != Y &&
                null != Y.reminderNotice &&
                W &&
                (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, (0, u.m)(), { dismissAction: P.L.INDIRECT_ACTION });
        }, [Y, W]);
    let $ = null != w ? p.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != _) t = _(T, X, M);
    else if (B)
        t = (0, r.jsx)(p.TB, {
            planId: T.id,
            onClose: X,
        });
    else {
        let e =
            A.current === T.id
                ? { postSuccessGuild: O }
                : {
                      followupSKUInfo: C,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != k && (0, h.GY)(k, T.id, a),
                  };
        t = (0, r.jsx)(
            p.ZP,
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
                    planId: T.id,
                    onClose: X,
                    paymentSourceType: J,
                    hideClose: null != z,
                    startingFractionalPremiumEndsAt: Z.current,
                    customCTAType: $,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(v.C3, {
                children: [(0, r.jsx)(y.Z, {}), t],
            }),
            null != z && z,
            Q &&
                null != q &&
                (0, r.jsx)(x.Z, {
                    onClose: X,
                    selectedPromotionalDecoPurchaseRecord: q,
                    selectedGiftingPromotionReward: K,
                }),
        ],
    });
}
