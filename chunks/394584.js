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
    v = n(901930),
    R = n(482132),
    O = n(364840),
    b = n(821609),
    D = n(778712),
    L = n(97808),
    w = n(775602),
    M = n(688810),
    P = n(912140),
    x = n(674658),
    k = n(780898),
    U = n(344346),
    G = n(898461),
    F = n(837015),
    V = n(61750),
    B = n(287809),
    j = n(758836),
    H = n(375708),
    Y = n(258915);
function W(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: s } = e,
        a = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        l = (0, o.bG)([w.Ay], () => w.Ay.useReducedMotion),
        { analyticsLocations: u } = (0, M.Ay)(),
        c = D._3.SIZE_32,
        { product: d, isFetching: _ } = (0, x.q)(t),
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
                    : (0, F.F)(p)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: p.skuId,
                                src: p.asset,
                                palette: (0, k.H6)(p.palette ?? "sky"),
                                imgAlt: p.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, G.T)(p)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, P.A)({
                                  legacyAssetId: p.asset,
                                  skuId: p.skuId,
                                  size: c,
                                  canAnimate: !l,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [p, c, l],
        );
    return (0, i.jsx)(R.UX, {
        children: (0, i.jsx)(O.j, {
            children: (0, i.jsxs)("div", {
                className: Y.W,
                children: [
                    E && null != m
                        ? (0, i.jsx)("div", {
                              className: Y.D,
                              onMouseEnter: () => f(!0),
                              onMouseLeave: () => f(!1),
                              children: (0, i.jsx)(U.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: m,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: h,
                              }),
                          })
                        : (0, i.jsx)(L.Js, {
                              "aria-label": a?.username,
                              size: c,
                              src: a?.getAvatarURL(void 0, (0, D.FT)(c), !l),
                              avatarDecoration: g,
                          }),
                    (0, i.jsx)(b.$, {
                        variant: "primary",
                        text: H.intl.string(H.t.kMYVwv),
                        loading: _,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, V.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: j.gs.PROMOTIONAL,
                                    onCloseCallback: s,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var K = n(615310),
    $ = n(216641),
    z = n(652215),
    q = n(49999);
function Z(e) {
    let t,
        {
            handleClose: O,
            planGroup: b,
            onSubscriptionConfirmation: D,
            renderPurchaseConfirmation: L,
            postSuccessGuild: w,
            followupSKUInfo: M,
            continueSessionToInitialStep: P,
        } = e,
        { paymentSources: x } = (0, _.jm)(),
        {
            activeSubscription: k,
            selectedSkuId: U,
            updatedSubscription: G,
            paymentSourceId: F,
            isPremiumGroupPurchase: V,
            startingPremiumSubscriptionPlanId: B,
            startingFractionalPremiumEndsAt: j,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        H = (0, h.A)(),
        Y = (0, K.bB)(),
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
        ea = (0, m.px)(H, Z, en),
        eo = (0, m.Mq)(H),
        el = (0, p.Mv)(ei, !1),
        eu = (0, o.bG)([g.A], () => g.A.getGiftPromotion()?.id),
        ec = (0, o.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(a.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ed = (0, $.g)(x, F),
        e_ = Z && null != ei && null != el && eo,
        eh = { selectedPlan: H, selectedSkuId: U, step: Y };
    if (null == H) throw new d.v({ message: "Expected plan to be selected", extraSentryInformation: eh });
    if (null == U) throw new d.v({ message: "Expected selectedSkuId", extraSentryInformation: eh });
    if (null == Y) throw new d.v({ message: "Step should be set", extraSentryInformation: eh });
    let ef = r.useCallback(() => {
        O(), D?.();
    }, [O, D]);
    (0, c.Ay)(() => {
        V &&
            I.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != G,
                has_any_premium_group: G?.hasAnyPremiumGroup ?? !1,
                subscription_id: G?.id,
            });
    }),
        r.useEffect(() => {
            function e() {
                if (V)
                    if (null != G && G.hasAnyPremiumGroup) {
                        I.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: G.id });
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
                                        subscription: G,
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
                            has_updated_subscription: null != G,
                            has_any_premium_group: G?.hasAnyPremiumGroup ?? !1,
                        }),
                            T._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                T._.subscribe(z.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    T._.unsubscribe(z.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [V, G]),
        r.useEffect(() => {
            !Z || null == X || null == Q || J || ee || (0, S.Ik)(X) || et({ onSubscriptionConfirmation: D });
        }, [et, Z, X, Q, J, ee, D]),
        r.useEffect(() => {
            ea &&
                null != ec &&
                null != eu &&
                (0, E.qr)(l.M.GIFTING_PROMOTION_REMINDER, eu, { dismissAction: q.i.INDIRECT_ACTION });
        }, [ec, eu, ea]);
    let ep = null != P ? A.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != L) t = L(H, ef, G);
    else if (Z) t = (0, i.jsx)(A.fw, { planId: H.id, onClose: ef });
    else {
        let e =
            B === H.id
                ? { postSuccessGuild: w }
                : {
                      followupSKUInfo: M,
                      startingPremiumSubscriptionPlanId: B,
                      isDowngrade: null != k && (0, y.vT)(k, H.id, b),
                  };
        t = (0, i.jsx)(A.Ay, {
            planId: H.id,
            onClose: ef,
            paymentSourceType: ed,
            hideClose: null != es,
            startingFractionalPremiumEndsAt: j,
            customCTAType: ep,
            ...e,
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(R.dZ, { children: [(0, i.jsx)(v.A, {}), t] }),
            null != es && es,
            e_ && null != ei && (0, i.jsx)(W, { rewardSkuId: ei, onClose: ef, onRewardModalClose: er }),
        ],
    });
}
