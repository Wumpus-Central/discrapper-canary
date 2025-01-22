var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(230711),
    c = r(906732),
    d = r(975298),
    f = r(543241),
    p = r(963249),
    h = r(703656),
    _ = r(301766),
    m = r(594174),
    g = r(78839),
    E = r(451478),
    v = r(74538),
    y = r(639119),
    b = r(474936),
    I = r(981631),
    T = r(388032),
    S = r(641135);
function A(e) {
    let { isClaimed: n, isVerified: a, isGift: o, subscriptionTier: s, trialId: u, postSuccessGuild: c, onSubscribeModalClose: d, analyticsLocations: f, premiumModalAnalyticsLocation: h, applicationId: _, giftMessage: m } = e;
    if (!n) {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await r.e('69417').then(r.bind(r, 918995));
            return (n) => {
                let { onClose: r, ...a } = n;
                return (0, i.jsx)(e, {
                    ...a,
                    onClose: r
                });
            };
        });
        return;
    }
    if (!a) {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await r.e('20102').then(r.bind(r, 444688));
            return (n) => {
                let { onClose: r, ...a } = n;
                return (0, i.jsx)(e, {
                    ...a,
                    onClose: r
                });
            };
        });
        return;
    }
    let g = I.Qqv.BUY;
    null != u ? (g = I.Qqv.TRIAL) : o && (g = I.Qqv.GIFT),
        (0, p.Z)({
            isGift: o,
            initialPlanId: null,
            subscriptionTier: s,
            analyticsLocations: f,
            analyticsObject: {
                object: I.qAy.BUTTON_CTA,
                objectType: g,
                ...h
            },
            trialId: u,
            postSuccessGuild: c,
            onClose: d,
            applicationId: _,
            giftMessage: m
        });
}
function C(e) {
    let { ctaSubscriptionSkuId: n, currentPremiumType: r, isSwitchingDisabled: i, subscription: a } = e,
        o = null,
        s = null;
    if (null != n && n !== b.Si.LEGACY && n !== b.Si.TIER_0 && n !== b.Si.TIER_1 && n !== b.Si.TIER_2)
        return {
            disabledButtonText: o,
            disabledButtonTooltipText: s
        };
    let l = null != n ? b.y7[(0, v.Wz)(n)] : null,
        u = null != l ? b.$e[l] : null,
        c = null != r ? b.$e[r] : null;
    return (
        i ? (s = v.ZP.getSwitchingPlansDisabledMessage(a)) : null != c && null != u && u < c ? ((o = T.intl.string(T.t['2pG5GR'])), (s = T.intl.string(T.t.jXaaRk))) : null != l && null != r && l === r ? ((o = T.intl.string(T.t.ymSxh4)), (s = T.intl.string(T.t.jXaaRk))) : null == l && null != r && r === b.p9.TIER_2 && (s = T.intl.string(T.t.jXaaRk)),
        {
            disabledButtonText: o,
            disabledButtonTooltipText: s
        }
    );
}
function N(e) {
    let { isGift: n, subscriptionTier: r, onClick: a, size: p, className: N, isTrialCTA: R, buttonText: O, buttonTextClassName: D, iconClassName: x, postSuccessGuild: L, onSubscribeModalClose: w, premiumModalAnalyticsLocation: P, showIcon: M = !0, disableShine: k, applicationId: U, giftMessage: B, overrideDisabledButtonText: G, shinyButtonClassName: Z, showGradient: F = !1, ...V } = e,
        j = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        H = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        Y = (0, s.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        { fractionalState: W } = (0, d.Z)(),
        { analyticsLocations: K } = (0, c.ZP)(),
        z = (0, y.N)(),
        q = !n && null != z && null != r && b.nG[z.trial_id].skus.includes(r),
        Q = (e) => {
            var i;
            if ((e.preventDefault(), null == j)) {
                (0, h.uL)(I.Z5c.LOGIN);
                return;
            }
            if ((null == a || a(e), (null == Y ? void 0 : Y.status) === I.O0b.ACCOUNT_HOLD)) {
                (0, f.A3)(), u.Z.open(I.oAB.PREMIUM), null == w || w(!1);
                return;
            }
            A({
                isClaimed: j.isClaimed(),
                isVerified: j.verified,
                isGift: n,
                subscriptionTier: r,
                trialId: q ? (null === (i = z.subscription_trial) || void 0 === i ? void 0 : i.id) : null,
                postSuccessGuild: L,
                onSubscribeModalClose: w,
                analyticsLocations: K,
                premiumModalAnalyticsLocation: P,
                applicationId: U,
                giftMessage: B
            });
        };
    if (R)
        return (0, i.jsxs)(l.Button, {
            size: p,
            className: N,
            innerClassName: S.premiumSubscribeButton,
            color: l.Button.Colors.BRAND_INVERTED,
            onClick: Q,
            ...V,
            children: [
                M &&
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: S.premiumIcon
                    }),
                (0, i.jsx)('span', {
                    className: o()(S.buttonText, D),
                    children: null != O ? O : T.intl.string(T.t['Gd/XHB'])
                })
            ]
        });
    if (n)
        return (0, i.jsxs)(l.Button, {
            size: p,
            className: N,
            innerClassName: S.giftButton,
            color: l.Button.Colors.PRIMARY,
            onClick: Q,
            ...V,
            children: [
                (0, i.jsx)(l.GiftIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: S.giftIcon
                }),
                (0, i.jsx)('span', {
                    className: o()(S.buttonText, D),
                    children: null != O ? O : T.intl.string(T.t.PEjaCw)
                })
            ]
        });
    let X = T.intl.string(T.t['2pG5GR']),
        J = null != Y ? (0, v.Af)(Y) : null,
        $ = null != J ? v.ZP.getPremiumType(J.planId) : null == j ? void 0 : j.premiumType,
        ee = r === b.Si.TIER_2 && null != $ && [b.p9.TIER_0, b.p9.TIER_1].includes($);
    ee && (X = T.intl.string(T.t.IJI7ys));
    let et = null != Y && v.ZP.isSwitchingPlansDisabled(Y, W),
        en = (null != Y && Y.status !== I.O0b.ACCOUNT_HOLD && !(0, _.Q0)(Y.planId) && !ee) || et,
        er = en
            ? null != G
                ? G
                : C({
                      ctaSubscriptionSkuId: r,
                      currentPremiumType: $,
                      isSwitchingDisabled: et,
                      subscription: Y
                  })
            : null;
    function ei(e) {
        var n, a;
        return (0, i.jsxs)(l.ShinyButton, {
            disabled: en,
            onClick: Q,
            innerClassName: S.premiumSubscribeButton,
            color: r === b.Si.TIER_1 ? l.Button.Colors.PRIMARY : l.Button.Colors.GREEN,
            size: p,
            className: Z,
            wrapperClassName: o()(
                {
                    [S.tier2Gradient]: F && r === b.Si.TIER_2,
                    [S.tier1Gradient]: F && r === b.Si.TIER_1
                },
                N
            ),
            pauseAnimation: !H || k,
            ...V,
            ...e,
            children: [
                M &&
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(S.premiumIcon, x)
                    }),
                (0, i.jsx)('span', {
                    className: o()(S.buttonText, D),
                    children: null !== (a = null !== (n = null == er ? void 0 : er.disabledButtonText) && void 0 !== n ? n : O) && void 0 !== a ? a : X
                })
            ]
        });
    }
    return (null == er ? void 0 : er.disabledButtonTooltipText) != null
        ? (0, i.jsx)(l.Tooltip, {
              text: er.disabledButtonTooltipText,
              children: ei
          })
        : ei();
}
n.Z = N;
