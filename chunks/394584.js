"use strict";
n.d(t, { _: () => Z });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(877624),
    o = n(17928),
    l = n(554146),
    u = n(192308),
    c = n(964486),
    d = n(71804),
    _ = n(426398),
    h = n(558620),
    f = n(211159),
    p = n(841702),
    E = n(367727),
    m = n(380619),
    g = n(374200),
    A = n(771566),
    I = n(174459),
    T = n(625494),
    S = n(45938),
    y = n(615396),
    C = n(937008),
    N = n(491057),
    v = n(482132),
    R = n(364840),
    O = n(821609),
    b = n(778712),
    D = n(97808),
    L = n(775602),
    w = n(688810),
    M = n(912140),
    P = n(674658),
    x = n(780898),
    k = n(344346),
    U = n(898461),
    G = n(837015),
    F = n(61750),
    V = n(287809),
    B = n(758836),
    j = n(375708),
    H = n(258915);
function Y(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: s } = e,
        a = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        l = (0, o.bG)([L.Ay], () => L.Ay.useReducedMotion),
        { analyticsLocations: u } = (0, w.Ay)(),
        c = b._3.SIZE_32,
        { product: d, isFetching: _ } = (0, P.q)(t),
        [h, f] = r.useState(!1),
        p = d?.items[0],
        {
            isNameplateReward: E,
            nameplateData: m,
            rewardAvatarDecorationSrc: g,
        } = r.useMemo(
            () =>
                null == p
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, G.F)(p)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: p.skuId,
                                src: p.asset,
                                palette: (0, x.H6)(p.palette ?? "sky"),
                                imgAlt: p.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, U.T)(p)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, M.A)({
                                  legacyAssetId: p.asset,
                                  skuId: p.skuId,
                                  size: c,
                                  canAnimate: !l,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [p, c, l],
        );
    return (0, i.jsx)(v.UX, {
        children: (0, i.jsx)(R.j, {
            children: (0, i.jsxs)("div", {
                className: H.W,
                children: [
                    E && null != m
                        ? (0, i.jsx)("div", {
                              className: H.D,
                              onMouseEnter: () => f(!0),
                              onMouseLeave: () => f(!1),
                              children: (0, i.jsx)(k.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: m,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: h,
                              }),
                          })
                        : (0, i.jsx)(D.Js, {
                              "aria-label": a?.username,
                              size: c,
                              src: a?.getAvatarURL(void 0, (0, b.FT)(c), !l),
                              avatarDecoration: g,
                          }),
                    (0, i.jsx)(O.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.kMYVwv),
                        loading: _,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, F.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: B.gs.PROMOTIONAL,
                                    onCloseCallback: s,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var W = n(615310),
    K = n(216641),
    $ = n(921925),
    z = n(652215),
    q = n(49999);
function Z(e) {
    let t,
        {
            handleClose: R,
            planGroup: O,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: D,
            postSuccessGuild: L,
            followupSKUInfo: w,
            continueSessionToInitialStep: M,
        } = e,
        { paymentSources: P } = (0, _.jm)(),
        {
            activeSubscription: x,
            selectedSkuId: k,
            updatedSubscription: U,
            paymentSourceId: G,
            isPremiumGroupPurchase: F,
            startingPremiumSubscriptionPlanId: V,
            startingFractionalPremiumEndsAt: B,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        j = (0, h.A)(),
        H = (0, W.bB)(),
        {
            isGift: Z,
            giftRecipient: X,
            giftCode: Q,
            hasSentMessage: J,
            isSendingMessage: ee,
            sendGiftMessage: et,
            claimableRewards: en,
            selectedGiftingPromotionReward: ei,
            openGiftingBadgePostPurchaseModal: er,
        } = (0, C.Pv)(),
        { confirmationFooter: es } = (0, N.cG)(),
        ea = (0, m.px)(j, Z, en),
        eo = (0, m.Mq)(j),
        el = (0, p.Mv)(ei, !1),
        eu = (0, o.bG)([g.A], () => g.A.getGiftPromotion()?.id),
        ec = (0, o.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(a.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ed = (0, K.g)(P, G),
        e_ = Z && null != ei && null != el && eo,
        eh = { selectedPlan: j, selectedSkuId: k, step: H };
    if (null == j) throw new d.v({ message: "Expected plan to be selected", extraSentryInformation: eh });
    if (null == k) throw new d.v({ message: "Expected selectedSkuId", extraSentryInformation: eh });
    if (null == H) throw new d.v({ message: "Step should be set", extraSentryInformation: eh });
    let ef = r.useCallback(() => {
        R(), b?.();
    }, [R, b]);
    (0, c.Ay)(() => {
        F &&
            I.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != U,
                has_any_premium_group: U?.hasAnyPremiumGroup ?? !1,
                subscription_id: U?.id,
            });
    }),
        r.useEffect(() => {
            function e() {
                if (F)
                    if (null != U && U.hasAnyPremiumGroup) {
                        I.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: U.id });
                        let e = (0, s.uniqueId)("premium-group-purchase-flow-modal");
                        (0, u.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("17494"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        subscription: U,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            T._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    T._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, u.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        I.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != U,
                            has_any_premium_group: U?.hasAnyPremiumGroup ?? !1,
                        }),
                            T._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                T._.subscribe(z.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    T._.unsubscribe(z.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [F, U]),
        r.useEffect(() => {
            !Z || null == X || null == Q || J || ee || (0, S.Ik)(X) || et({ onSubscriptionConfirmation: b });
        }, [et, Z, X, Q, J, ee, b]),
        r.useEffect(() => {
            ea &&
                null != ec &&
                null != eu &&
                (0, E.qr)(l.M.GIFTING_PROMOTION_REMINDER, eu, { dismissAction: q.i.INDIRECT_ACTION });
        }, [ec, eu, ea]);
    let ep = null != M ? A.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != D) t = D(j, ef, U);
    else if (Z) t = (0, i.jsx)(A.fw, { planId: j.id, onClose: ef });
    else {
        let e =
            V === j.id
                ? { postSuccessGuild: L }
                : {
                      followupSKUInfo: w,
                      startingPremiumSubscriptionPlanId: V,
                      isDowngrade: null != x && (0, y.vT)(x, j.id, O),
                  };
        t = (0, i.jsx)(A.Ay, {
            planId: j.id,
            onClose: ef,
            paymentSourceType: ed,
            hideClose: null != es,
            startingFractionalPremiumEndsAt: B,
            customCTAType: ep,
            ...e,
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(v.dZ, { children: [(0, i.jsx)($.A, {}), t] }),
            null != es && es,
            e_ && null != ei && (0, i.jsx)(Y, { rewardSkuId: ei, onClose: ef, onRewardModalClose: er }),
        ],
    });
}
