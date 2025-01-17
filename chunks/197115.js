var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(230711),
    c = r(906732),
    d = r(975298),
    f = r(543241),
    _ = r(963249),
    h = r(703656),
    p = r(301766),
    m = r(594174),
    g = r(78839),
    E = r(451478),
    v = r(74538),
    I = r(639119),
    T = r(474936),
    b = r(981631),
    y = r(388032),
    S = r(641135);
function A(e) {
    let { isClaimed: n, isVerified: a, isGift: s, subscriptionTier: o, trialId: u, postSuccessGuild: c, onSubscribeModalClose: d, analyticsLocations: f, premiumModalAnalyticsLocation: h, applicationId: p, giftMessage: m } = e;
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
    let g = b.Qqv.BUY;
    null != u ? (g = b.Qqv.TRIAL) : s && (g = b.Qqv.GIFT),
        (0, _.Z)({
            isGift: s,
            initialPlanId: null,
            subscriptionTier: o,
            analyticsLocations: f,
            analyticsObject: {
                object: b.qAy.BUTTON_CTA,
                objectType: g,
                ...h
            },
            trialId: u,
            postSuccessGuild: c,
            onClose: d,
            applicationId: p,
            giftMessage: m
        });
}
function N(e) {
    let { ctaSubscriptionSkuId: n, currentPremiumType: r, isSwitchingDisabled: i, subscription: a } = e,
        s = null,
        o = null;
    if (null != n && n !== T.Si.LEGACY && n !== T.Si.TIER_0 && n !== T.Si.TIER_1 && n !== T.Si.TIER_2)
        return {
            disabledButtonText: s,
            disabledButtonTooltipText: o
        };
    let l = null != n ? T.y7[(0, v.Wz)(n)] : null,
        u = null != l ? T.$e[l] : null,
        c = null != r ? T.$e[r] : null;
    return (
        i ? (o = v.ZP.getSwitchingPlansDisabledMessage(a)) : null != c && null != u && u < c ? ((s = y.intl.string(y.t['2pG5GR'])), (o = y.intl.string(y.t.jXaaRk))) : null != l && null != r && l === r ? ((s = y.intl.string(y.t.ymSxh4)), (o = y.intl.string(y.t.jXaaRk))) : null == l && null != r && r === T.p9.TIER_2 && (o = y.intl.string(y.t.jXaaRk)),
        {
            disabledButtonText: s,
            disabledButtonTooltipText: o
        }
    );
}
function C(e) {
    let { isGift: n, subscriptionTier: r, onClick: a, size: _, className: C, isTrialCTA: R, buttonText: O, buttonTextClassName: D, iconClassName: L, postSuccessGuild: x, onSubscribeModalClose: w, premiumModalAnalyticsLocation: P, showIcon: M = !0, disableShine: k, applicationId: U, giftMessage: B, overrideDisabledButtonText: G, shinyButtonClassName: Z, showGradient: F = !1, ...V } = e,
        j = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        H = (0, o.e7)([E.Z], () => E.Z.isFocused()),
        Y = (0, o.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        { fractionalState: W } = (0, d.Z)(),
        { analyticsLocations: K } = (0, c.ZP)(),
        z = (0, I.N)(),
        q = !n && null != z && null != r && T.nG[z.trial_id].skus.includes(r),
        Q = (e) => {
            var i;
            if ((e.preventDefault(), null == j)) {
                (0, h.uL)(b.Z5c.LOGIN);
                return;
            }
            if ((null == a || a(e), (null == Y ? void 0 : Y.status) === b.O0b.ACCOUNT_HOLD)) {
                (0, f.A3)(), u.Z.open(b.oAB.PREMIUM), null == w || w(!1);
                return;
            }
            A({
                isClaimed: j.isClaimed(),
                isVerified: j.verified,
                isGift: n,
                subscriptionTier: r,
                trialId: q ? (null === (i = z.subscription_trial) || void 0 === i ? void 0 : i.id) : null,
                postSuccessGuild: x,
                onSubscribeModalClose: w,
                analyticsLocations: K,
                premiumModalAnalyticsLocation: P,
                applicationId: U,
                giftMessage: B
            });
        };
    if (R)
        return (0, i.jsxs)(l.Button, {
            size: _,
            className: C,
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
                    className: s()(S.buttonText, D),
                    children: null != O ? O : y.intl.string(y.t['Gd/XHB'])
                })
            ]
        });
    if (n)
        return (0, i.jsxs)(l.Button, {
            size: _,
            className: C,
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
                    className: s()(S.buttonText, D),
                    children: null != O ? O : y.intl.string(y.t.PEjaCw)
                })
            ]
        });
    let X = y.intl.string(y.t['2pG5GR']),
        J = null != Y ? (0, v.Af)(Y) : null,
        $ = null != J ? v.ZP.getPremiumType(J.planId) : null == j ? void 0 : j.premiumType,
        ee = r === T.Si.TIER_2 && null != $ && [T.p9.TIER_0, T.p9.TIER_1].includes($);
    ee && (X = y.intl.string(y.t.IJI7ys));
    let et = null != Y && v.ZP.isSwitchingPlansDisabled(Y, W),
        en = (null != Y && Y.status !== b.O0b.ACCOUNT_HOLD && !(0, p.Q0)(Y.planId) && !ee) || et,
        er = en
            ? null != G
                ? G
                : N({
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
            color: r === T.Si.TIER_1 ? l.Button.Colors.PRIMARY : l.Button.Colors.GREEN,
            size: _,
            className: Z,
            wrapperClassName: s()(
                {
                    [S.tier2Gradient]: F && r === T.Si.TIER_2,
                    [S.tier1Gradient]: F && r === T.Si.TIER_1
                },
                C
            ),
            pauseAnimation: !H || k,
            ...V,
            ...e,
            children: [
                M &&
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(S.premiumIcon, L)
                    }),
                (0, i.jsx)('span', {
                    className: s()(S.buttonText, D),
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
n.Z = C;
