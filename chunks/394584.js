n.d(t, { _: () => $ });
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(877624),
    s = n(17928),
    o = n(554146),
    u = n(192308),
    c = n(964486),
    d = n(71804),
    p = n(426398),
    m = n(558620),
    h = n(211159),
    A = n(841702),
    E = n(367727),
    C = n(380619),
    y = n(374200),
    _ = n(771566),
    S = n(174459),
    P = n(625494),
    I = n(45938),
    f = n(615396),
    T = n(937008),
    N = n(491057),
    g = n(482132),
    v = n(364840),
    x = n(821609),
    R = n(778712),
    M = n(97808),
    b = n(775602),
    L = n(688810),
    O = n(912140),
    j = n(674658),
    w = n(780898),
    D = n(344346),
    U = n(898461),
    k = n(837015),
    G = n(61750),
    F = n(287809),
    B = n(758836),
    Y = n(375708),
    W = n(258915);
function H(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, s.bG)([F.default], () => F.default.getCurrentUser()),
        o = (0, s.bG)([b.Ay], () => b.Ay.useReducedMotion),
        { analyticsLocations: u } = (0, L.Ay)(),
        c = R._3.SIZE_32,
        { product: d, isFetching: p } = (0, j.q)(t),
        [m, h] = r.useState(!1),
        A = d?.items[0],
        {
            isNameplateReward: E,
            nameplateData: C,
            rewardAvatarDecorationSrc: y,
        } = r.useMemo(
            () =>
                null == A
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, k.F)(A)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: A.skuId,
                                src: A.asset,
                                palette: (0, w.H6)(A.palette ?? "sky"),
                                imgAlt: A.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, U.T)(A)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, O.A)({
                                  legacyAssetId: A.asset,
                                  skuId: A.skuId,
                                  size: c,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [A, c, o],
        );
    return (0, l.jsx)(g.UX, {
        children: (0, l.jsx)(v.j, {
            children: (0, l.jsxs)("div", {
                className: W.W,
                children: [
                    E && null != C
                        ? (0, l.jsx)("div", {
                              className: W.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, l.jsx)(D.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: C,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(M.Js, {
                              "aria-label": a?.username,
                              size: c,
                              src: a?.getAvatarURL(void 0, (0, R.FT)(c), !o),
                              avatarDecoration: y,
                          }),
                    (0, l.jsx)(x.$, {
                        variant: "primary",
                        text: Y.intl.string(Y.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, G.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: B.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var V = n(615310),
    K = n(216641),
    Z = n(921925),
    q = n(652215),
    z = n(49999);
function $(e) {
    let t,
        {
            handleClose: v,
            planGroup: x,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: b,
            followupSKUInfo: L,
            continueSessionToInitialStep: O,
        } = e,
        { paymentSources: j } = (0, p.jm)(),
        {
            activeSubscription: w,
            selectedSkuId: D,
            updatedSubscription: U,
            paymentSourceId: k,
            isPremiumGroupPurchase: G,
            startingPremiumSubscriptionPlanId: F,
            startingFractionalPremiumEndsAt: B,
        } = (0, h.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        Y = (0, m.A)(),
        W = (0, V.bB)(),
        {
            isGift: $,
            giftRecipient: X,
            giftCode: J,
            hasSentMessage: Q,
            isSendingMessage: ee,
            sendGiftMessage: et,
            claimableRewards: en,
            selectedGiftingPromotionReward: el,
            openGiftingBadgePostPurchaseModal: er,
        } = (0, T.Pv)(),
        { confirmationFooter: ei } = (0, N.cG)(),
        ea = (0, C.px)(Y, $, en),
        es = (0, C.Mq)(Y),
        eo = (0, A.Mv)(el, !1),
        eu = (0, s.bG)([y.A], () => y.A.getGiftPromotion()?.id),
        ec = (0, s.bG)([y.A], () => {
            let e = y.A.getMarketingComponentByType(a.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ed = (0, K.g)(j, k),
        ep = $ && null != el && null != eo && es,
        em = { selectedPlan: Y, selectedSkuId: D, step: W };
    if (null == Y) throw new d.v({ message: "Expected plan to be selected", extraSentryInformation: em });
    if (null == D) throw new d.v({ message: "Expected selectedSkuId", extraSentryInformation: em });
    if (null == W) throw new d.v({ message: "Step should be set", extraSentryInformation: em });
    let eh = r.useCallback(() => {
        v(), R?.();
    }, [v, R]);
    (0, c.Ay)(() => {
        G &&
            S.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != U,
                has_any_premium_group: U?.hasAnyPremiumGroup ?? !1,
                subscription_id: U?.id,
            });
    }),
        r.useEffect(() => {
            function e() {
                if (G)
                    if (null != U && U.hasAnyPremiumGroup) {
                        S.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: U.id });
                        let e = (0, i.uniqueId)("premium-group-purchase-flow-modal");
                        (0, u.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("74252"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: U,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            P._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    P._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, u.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        S.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != U,
                            has_any_premium_group: U?.hasAnyPremiumGroup ?? !1,
                        }),
                            P._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                P._.subscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    P._.unsubscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [G, U]),
        r.useEffect(() => {
            !$ || null == X || null == J || Q || ee || (0, I.Ik)(X) || et({ onSubscriptionConfirmation: R });
        }, [et, $, X, J, Q, ee, R]),
        r.useEffect(() => {
            ea &&
                null != ec &&
                null != eu &&
                (0, E.qr)(o.M.GIFTING_PROMOTION_REMINDER, eu, { dismissAction: z.i.INDIRECT_ACTION });
        }, [ec, eu, ea]);
    let eA = null != O ? _.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != M) t = M(Y, eh, U);
    else if ($) t = (0, l.jsx)(_.fw, { planId: Y.id, onClose: eh });
    else {
        let e =
            F === Y.id
                ? { postSuccessGuild: b }
                : {
                      followupSKUInfo: L,
                      startingPremiumSubscriptionPlanId: F,
                      isDowngrade: null != w && (0, f.vT)(w, Y.id, x),
                  };
        t = (0, l.jsx)(_.Ay, {
            planId: Y.id,
            onClose: eh,
            paymentSourceType: ed,
            hideClose: null != ei,
            startingFractionalPremiumEndsAt: B,
            customCTAType: eA,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(g.dZ, { children: [(0, l.jsx)(Z.A, {}), t] }),
            null != ei && ei,
            ep && null != el && (0, l.jsx)(H, { rewardSkuId: el, onClose: eh, onRewardModalClose: er }),
        ],
    });
}
