n.d(t, { b: () => S });
var r = n(54381),
    l = n(473749),
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
    P = n(435020),
    y = n(698708),
    j = n(921944);
function S(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: _,
            postSuccessGuild: w,
            followupSKUInfo: C,
            continueSessionToInitialStep: O,
        } = e,
        {
            activeSubscription: E,
            paymentSources: k,
            paymentSourceId: I,
            selectedPlan: T,
            selectedSkuId: N,
            step: R,
            updatedSubscription: M,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, b.JL)(),
        {
            isGift: L,
            giftRecipient: B,
            giftCode: D,
            hasSentMessage: F,
            isSendingMessage: H,
            sendGiftMessage: G,
            claimableRewards: U,
            selectedGiftingPromotionReward: K,
        } = (0, f.wD)(),
        { confirmationFooter: z } = (0, g.zb)(),
        W = (0, c.id)(T, L, U),
        V = (0, d.Z)(),
        Y = (0, c.a5)(T),
        q = (0, c.tK)(null == K ? void 0 : K.skuId),
        J = (0, P.$)(k, I),
        Q = L && null != K && Y;
    i()(null != T, "Expected plan to selected"),
        i()(null != N, "Expected selectedSkuId"),
        i()(null != R, "Step should be set");
    let X = l.useCallback(() => {
        n(), null == S || S();
    }, [n, S]);
    l.useEffect(() => {
        !L || null == B || null == D || F || H || (0, m.pO)(B) || G({ onSubscriptionConfirmation: S });
    }, [G, L, B, D, F, H, S]),
        l.useEffect(() => {
            null != V &&
                null != V.reminderNotice &&
                W &&
                (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, (0, u.m)(), { dismissAction: j.L.INDIRECT_ACTION });
        }, [V, W]);
    let $ = null != O ? p.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != _) t = _(T, X, M);
    else if (L)
        t = (0, r.jsx)(p.TB, {
            planId: T.id,
            onClose: X,
        });
    else {
        let e =
            A.current === T.id
                ? { postSuccessGuild: w }
                : {
                      followupSKUInfo: C,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != E && (0, h.GY)(E, T.id, a),
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
