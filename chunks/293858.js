n.d(t, { b: () => C });
var r = n(54381),
    l = n(473749),
    a = n(512722),
    i = n.n(a),
    o = n(704215),
    s = n(481060),
    u = n(605236),
    c = n(347896),
    d = n(717401),
    p = n(885472),
    m = n(317269),
    h = n(585483),
    f = n(669079),
    b = n(296848),
    g = n(987209),
    v = n(563132),
    S = n(107998),
    y = n(614277),
    x = n(400981),
    P = n(435020),
    j = n(698708),
    _ = n(981631),
    O = n(921944);
function w(e) {
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
}
function C(e) {
    let t,
        {
            handleClose: a,
            planGroup: C,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: k,
            postSuccessGuild: I,
            followupSKUInfo: T,
            continueSessionToInitialStep: N,
        } = e,
        {
            activeSubscription: M,
            paymentSources: R,
            paymentSourceId: A,
            selectedPlan: L,
            selectedSkuId: Z,
            step: D,
            updatedSubscription: B,
            startingPremiumSubscriptionPlanIdRef: F,
            startingFractionalPremiumEndsAtRef: H,
            isPremiumGroupPurchase: G,
        } = (0, v.JL)(),
        {
            isGift: U,
            giftRecipient: z,
            giftCode: K,
            hasSentMessage: W,
            isSendingMessage: V,
            sendGiftMessage: Y,
            claimableRewards: q,
            selectedGiftingPromotionReward: J,
        } = (0, g.wD)(),
        { confirmationFooter: Q } = (0, S.zb)(),
        X = (0, d.id)(L, U, q),
        $ = (0, c.Z)(),
        ee = (0, d.a5)(L),
        et = (0, d.tK)(null == J ? void 0 : J.skuId),
        en = (0, P.$)(R, A),
        er = U && null != J && ee;
    i()(null != L, "Expected plan to selected"),
        i()(null != Z, "Expected selectedSkuId"),
        i()(null != D, "Step should be set");
    let el = l.useCallback(() => {
        a(), null == E || E();
    }, [a, E]);
    l.useEffect(() => {
        function e() {
            G &&
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (t) => (0, r.jsx)(e, w({}, t));
                });
        }
        return (
            h.S.subscribe(_.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                h.S.unsubscribe(_.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [G]),
        l.useEffect(() => {
            !U || null == z || null == K || W || V || (0, f.pO)(z) || Y({ onSubscriptionConfirmation: E });
        }, [Y, U, z, K, W, V, E]),
        l.useEffect(() => {
            null != $ &&
                null != $.reminderNotice &&
                X &&
                (0, u.wH)(o.z.GIFTING_PROMOTION_REMINDER, (0, p.m)(), { dismissAction: O.L.INDIRECT_ACTION });
        }, [$, X]);
    let ea = null != N ? m.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) t = k(L, el, B);
    else if (U)
        t = (0, r.jsx)(m.TB, {
            planId: L.id,
            onClose: el,
        });
    else {
        let e =
            F.current === L.id
                ? { postSuccessGuild: I }
                : {
                      followupSKUInfo: T,
                      startingPremiumSubscriptionPlanId: F.current,
                      isDowngrade: null != M && (0, b.GY)(M, L.id, C),
                  };
        t = (0, r.jsx)(
            m.ZP,
            w(
                {
                    planId: L.id,
                    onClose: el,
                    paymentSourceType: en,
                    hideClose: null != Q,
                    startingFractionalPremiumEndsAt: H.current,
                    customCTAType: ea,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(y.C3, {
                children: [(0, r.jsx)(j.Z, {}), t],
            }),
            null != Q && Q,
            er &&
                null != et &&
                (0, r.jsx)(x.Z, {
                    onClose: el,
                    selectedPromotionalDecoPurchaseRecord: et,
                    selectedGiftingPromotionReward: J,
                }),
        ],
    });
}
