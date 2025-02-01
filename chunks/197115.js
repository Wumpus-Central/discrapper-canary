n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(906732),
    c = n(975298),
    d = n(543241),
    f = n(963249),
    _ = n(703656),
    p = n(301766),
    h = n(594174),
    m = n(78839),
    g = n(451478),
    E = n(74538),
    v = n(639119),
    y = n(474936),
    I = n(981631),
    T = n(388032),
    b = n(641135);
function S(e) {
    let { isClaimed: t, isVerified: r, isGift: a, subscriptionTier: s, trialId: l, postSuccessGuild: u, onSubscribeModalClose: c, analyticsLocations: d, premiumModalAnalyticsLocation: _, applicationId: p, giftMessage: h } = e;
    if (!t) {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('69417').then(n.bind(n, 918995));
            return (t) => {
                let { onClose: n, ...r } = t;
                return (0, i.jsx)(e, {
                    ...r,
                    onClose: n
                });
            };
        });
        return;
    }
    if (!r) {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('20102').then(n.bind(n, 444688));
            return (t) => {
                let { onClose: n, ...r } = t;
                return (0, i.jsx)(e, {
                    ...r,
                    onClose: n
                });
            };
        });
        return;
    }
    let m = I.Qqv.BUY;
    null != l ? (m = I.Qqv.TRIAL) : a && (m = I.Qqv.GIFT),
        (0, f.Z)({
            isGift: a,
            initialPlanId: null,
            subscriptionTier: s,
            analyticsLocations: d,
            analyticsObject: {
                object: I.qAy.BUTTON_CTA,
                objectType: m,
                ..._
            },
            trialId: l,
            postSuccessGuild: u,
            onClose: c,
            applicationId: p,
            giftMessage: h
        });
}
function A(e) {
    let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: i, subscription: r } = e,
        a = null,
        s = null;
    if (null != t && t !== y.Si.LEGACY && t !== y.Si.TIER_0 && t !== y.Si.TIER_1 && t !== y.Si.TIER_2)
        return {
            disabledButtonText: a,
            disabledButtonTooltipText: s
        };
    let o = null != t ? y.y7[(0, E.Wz)(t)] : null,
        l = null != o ? y.$e[o] : null,
        u = null != n ? y.$e[n] : null;
    return (
        i ? (s = E.ZP.getSwitchingPlansDisabledMessage(r)) : null != u && null != l && l < u ? ((a = T.intl.string(T.t['2pG5GR'])), (s = T.intl.string(T.t.jXaaRk))) : null != o && null != n && o === n ? ((a = T.intl.string(T.t.ymSxh4)), (s = T.intl.string(T.t.jXaaRk))) : null == o && null != n && n === y.p9.TIER_2 && (s = T.intl.string(T.t.jXaaRk)),
        {
            disabledButtonText: a,
            disabledButtonTooltipText: s
        }
    );
}
let N = function (e) {
    let { isGift: t, subscriptionTier: n, onClick: r, size: f, className: N, isTrialCTA: C, buttonText: R, buttonTextClassName: O, iconClassName: D, postSuccessGuild: x, onSubscribeModalClose: L, premiumModalAnalyticsLocation: P, showIcon: w = !0, disableShine: M, applicationId: k, giftMessage: U, overrideDisabledButtonText: G, shinyButtonClassName: B, showGradient: Z = !1, ...F } = e,
        V = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        j = (0, s.e7)([g.Z], () => g.Z.isFocused()),
        H = (0, s.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        { fractionalState: Y } = (0, c.Z)(),
        { analyticsLocations: W } = (0, u.ZP)(),
        K = (0, v.N)(),
        z = !t && null != K && null != n && y.nG[K.trial_id].skus.includes(n),
        q = (e) => {
            var i;
            if ((e.preventDefault(), null == V)) {
                (0, _.uL)(I.Z5c.LOGIN);
                return;
            }
            if ((null == r || r(e), (null == H ? void 0 : H.status) === I.O0b.ACCOUNT_HOLD)) {
                (0, d.A3)(), l.Z.open(I.oAB.PREMIUM), null == L || L(!1);
                return;
            }
            S({
                isClaimed: V.isClaimed(),
                isVerified: V.verified,
                isGift: t,
                subscriptionTier: n,
                trialId: z ? (null === (i = K.subscription_trial) || void 0 === i ? void 0 : i.id) : null,
                postSuccessGuild: x,
                onSubscribeModalClose: L,
                analyticsLocations: W,
                premiumModalAnalyticsLocation: P,
                applicationId: k,
                giftMessage: U
            });
        };
    if (C)
        return (0, i.jsxs)(o.zxk, {
            size: f,
            className: N,
            innerClassName: b.premiumSubscribeButton,
            color: o.zxk.Colors.BRAND_INVERTED,
            onClick: q,
            ...F,
            children: [
                w &&
                    (0, i.jsx)(o.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.premiumIcon
                    }),
                (0, i.jsx)('span', {
                    className: a()(b.buttonText, O),
                    children: null != R ? R : T.intl.string(T.t['Gd/XHB'])
                })
            ]
        });
    if (t)
        return (0, i.jsxs)(o.zxk, {
            size: f,
            className: N,
            innerClassName: b.giftButton,
            color: o.zxk.Colors.PRIMARY,
            onClick: q,
            ...F,
            children: [
                (0, i.jsx)(o.OgN, {
                    size: 'md',
                    color: 'currentColor',
                    className: b.giftIcon
                }),
                (0, i.jsx)('span', {
                    className: a()(b.buttonText, O),
                    children: null != R ? R : T.intl.string(T.t.PEjaCw)
                })
            ]
        });
    let Q = T.intl.string(T.t['2pG5GR']),
        X = null != H ? (0, E.Af)(H) : null,
        J = null != X ? E.ZP.getPremiumType(X.planId) : null == V ? void 0 : V.premiumType,
        $ = n === y.Si.TIER_2 && null != J && [y.p9.TIER_0, y.p9.TIER_1].includes(J);
    $ && (Q = T.intl.string(T.t.IJI7ys));
    let ee = null != H && E.ZP.isSwitchingPlansDisabled(H, Y),
        et = (null != H && H.status !== I.O0b.ACCOUNT_HOLD && !(0, p.Q0)(H.planId) && !$) || ee,
        en = et
            ? null != G
                ? G
                : A({
                      ctaSubscriptionSkuId: n,
                      currentPremiumType: J,
                      isSwitchingDisabled: ee,
                      subscription: H
                  })
            : null;
    function ei(e) {
        var t, r;
        return (0, i.jsxs)(o.gtL, {
            disabled: et,
            onClick: q,
            innerClassName: b.premiumSubscribeButton,
            color: n === y.Si.TIER_1 ? o.zxk.Colors.PRIMARY : o.zxk.Colors.GREEN,
            size: f,
            className: B,
            wrapperClassName: a()(
                {
                    [b.tier2Gradient]: Z && n === y.Si.TIER_2,
                    [b.tier1Gradient]: Z && n === y.Si.TIER_1
                },
                N
            ),
            pauseAnimation: !j || M,
            ...F,
            ...e,
            children: [
                w &&
                    (0, i.jsx)(o.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(b.premiumIcon, D)
                    }),
                (0, i.jsx)('span', {
                    className: a()(b.buttonText, O),
                    children: null !== (r = null !== (t = null == en ? void 0 : en.disabledButtonText) && void 0 !== t ? t : R) && void 0 !== r ? r : Q
                })
            ]
        });
    }
    return (null == en ? void 0 : en.disabledButtonTooltipText) != null
        ? (0, i.jsx)(o.ua7, {
              text: en.disabledButtonTooltipText,
              children: ei
          })
        : ei();
};
