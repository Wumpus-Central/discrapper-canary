n.d(t, { b: () => j });
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
    y = n(435020),
    P = n(698708),
    S = n(921944);
function j(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: _,
            postSuccessGuild: w,
            followupSKUInfo: O,
            continueSessionToInitialStep: C,
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
            isGift: L,
            giftRecipient: B,
            giftCode: D,
            hasSentMessage: F,
            isSendingMessage: H,
            sendGiftMessage: G,
            claimableRewards: U,
            selectedGiftingPromotionReward: z,
        } = (0, f.wD)(),
        { confirmationFooter: K } = (0, g.zb)(),
        W = (0, c.id)(T, L, U),
        Y = (0, d.Z)(),
        V = (0, c.a5)(T),
        q = (0, c.tK)(null == z ? void 0 : z.skuId),
        J = (0, y.$)(E, I),
        Q = L && null != z && V;
    i()(null != T, "Expected plan to selected"),
        i()(null != N, "Expected selectedSkuId"),
        i()(null != R, "Step should be set");
    let X = l.useCallback(() => {
        n(), null == j || j();
    }, [n, j]);
    l.useEffect(() => {
        !L || null == B || null == D || F || H || (0, m.pO)(B) || G({ onSubscriptionConfirmation: j });
    }, [G, L, B, D, F, H, j]),
        l.useEffect(() => {
            null != Y &&
                null != Y.reminderNotice &&
                W &&
                (0, s.wH)(o.z.GIFTING_PROMOTION_REMINDER, (0, u.m)(), { dismissAction: S.L.INDIRECT_ACTION });
        }, [Y, W]);
    let $ = null != C ? p.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
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
                      followupSKUInfo: O,
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
                    hideClose: null != K,
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
                children: [(0, r.jsx)(P.Z, {}), t],
            }),
            null != K && K,
            Q &&
                null != q &&
                (0, r.jsx)(x.Z, {
                    onClose: X,
                    selectedPromotionalDecoPurchaseRecord: q,
                    selectedGiftingPromotionReward: z,
                }),
        ],
    });
}
