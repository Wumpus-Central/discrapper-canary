n.d(t, { _: () => J });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n(877624),
    u = n(17928),
    c = n(554146),
    d = n(192308),
    p = n(964486),
    m = n(426398),
    h = n(558620),
    A = n(571878),
    E = n(841702),
    C = n(367727),
    y = n(380619),
    P = n(374200),
    S = n(771566),
    _ = n(174459),
    I = n(625494),
    T = n(45938),
    f = n(615396),
    N = n(937008),
    v = n(491057),
    g = n(482132),
    x = n(364840),
    R = n(821609),
    M = n(778712),
    b = n(97808),
    L = n(775602),
    j = n(688810),
    O = n(912140),
    w = n(674658),
    D = n(780898),
    U = n(344346),
    k = n(898461),
    G = n(837015),
    F = n(61750),
    Y = n(287809),
    B = n(758836),
    W = n(375708),
    H = n(258915);
function V(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, u.bG)([Y.default], () => Y.default.getCurrentUser()),
        s = (0, u.bG)([L.A], () => L.A.useReducedMotion),
        { analyticsLocations: o } = (0, j.Ay)(),
        c = M._3.SIZE_32,
        { product: d, isFetching: p } = (0, w.q)(t),
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
                    : (0, G.F)(A)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: A.skuId,
                                src: A.asset,
                                palette: (0, D.H6)(A.palette ?? "sky"),
                                imgAlt: A.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, k.T)(A)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, O.A)({
                                  legacyAssetId: A.asset,
                                  skuId: A.skuId,
                                  size: c,
                                  canAnimate: !s,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [A, c, s],
        );
    return (0, l.jsx)(g.UX, {
        children: (0, l.jsx)(x.j, {
            children: (0, l.jsxs)("div", {
                className: H.W,
                children: [
                    E && null != C
                        ? (0, l.jsx)("div", {
                              className: H.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, l.jsx)(U.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: C,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(b.Js, {
                              "aria-label": a?.username,
                              size: c,
                              src: a?.getAvatarURL(void 0, (0, M.FT)(c), !s),
                              avatarDecoration: y,
                          }),
                    (0, l.jsx)(R.$, {
                        variant: "primary",
                        text: W.intl.string(W.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, F.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: o,
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
var K = n(615310),
    Z = n(216641),
    q = n(921925),
    z = n(652215),
    $ = n(49999);
function J(e) {
    let t,
        {
            handleClose: i,
            planGroup: x,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: b,
            followupSKUInfo: L,
            continueSessionToInitialStep: j,
        } = e,
        { paymentSources: O } = (0, m.jm)(),
        {
            activeSubscription: w,
            selectedSkuId: D,
            updatedSubscription: U,
            paymentSourceId: k,
            isPremiumGroupPurchase: G,
            startingPremiumSubscriptionPlanId: F,
            startingFractionalPremiumEndsAt: Y,
        } = (0, A.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        B = (0, h.A)(),
        W = (0, K.bB)(),
        {
            isGift: H,
            giftRecipient: J,
            giftCode: X,
            hasSentMessage: Q,
            isSendingMessage: ee,
            sendGiftMessage: et,
            claimableRewards: en,
            selectedGiftingPromotionReward: el,
            openGiftingBadgePostPurchaseModal: er,
        } = (0, N.Pv)(),
        { confirmationFooter: ei } = (0, v.cG)(),
        ea = (0, y.px)(B, H, en),
        es = (0, y.Mq)(B),
        eo = (0, E.Mv)(el, !1),
        eu = (0, u.bG)([P.A], () => P.A.getGiftPromotion()?.id),
        ec = (0, u.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ed = (0, Z.g)(O, k),
        ep = H && null != el && null != eo && es;
    a()(null != B, "Expected plan to selected"),
        a()(null != D, "Expected selectedSkuId"),
        a()(null != W, "Step should be set");
    let em = r.useCallback(() => {
        i(), R?.();
    }, [i, R]);
    (0, p.Ay)(() => {
        G &&
            _.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != U,
                has_any_premium_group: U?.hasAnyPremiumGroup ?? !1,
                subscription_id: U?.id,
            });
    }),
        r.useEffect(() => {
            function e() {
                if (G)
                    if (null != U && U.hasAnyPremiumGroup) {
                        _.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: U.id });
                        let e = (0, s.uniqueId)("premium-group-purchase-flow-modal");
                        (0, d.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("45147"),
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
                                            I._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    I._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, d.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        _.default.track(z.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != U,
                            has_any_premium_group: U?.hasAnyPremiumGroup ?? !1,
                        }),
                            I._.dispatch(z.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                I._.subscribe(z.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    I._.unsubscribe(z.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [G, U]),
        r.useEffect(() => {
            !H || null == J || null == X || Q || ee || (0, T.Ik)(J) || et({ onSubscriptionConfirmation: R });
        }, [et, H, J, X, Q, ee, R]),
        r.useEffect(() => {
            ea &&
                null != ec &&
                null != eu &&
                (0, C.qr)(c.M.GIFTING_PROMOTION_REMINDER, eu, { dismissAction: $.i.INDIRECT_ACTION });
        }, [ec, eu, ea]);
    let eh = null != j ? S.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != M) t = M(B, em, U);
    else if (H) t = (0, l.jsx)(S.fw, { planId: B.id, onClose: em });
    else {
        let e =
            F === B.id
                ? { postSuccessGuild: b }
                : {
                      followupSKUInfo: L,
                      startingPremiumSubscriptionPlanId: F,
                      isDowngrade: null != w && (0, f.vT)(w, B.id, x),
                  };
        t = (0, l.jsx)(S.Ay, {
            planId: B.id,
            onClose: em,
            paymentSourceType: ed,
            hideClose: null != ei,
            startingFractionalPremiumEndsAt: Y,
            customCTAType: eh,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(g.dZ, { children: [(0, l.jsx)(q.A, {}), t] }),
            null != ei && ei,
            ep && null != el && (0, l.jsx)(V, { rewardSkuId: el, onClose: em, onRewardModalClose: er }),
        ],
    });
}
