n.d(t, { Z: () => D });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(230711),
    c = n(906732),
    u = n(543241),
    d = n(963249),
    f = n(703656),
    _ = n(301766),
    p = n(594174),
    h = n(78839),
    g = n(451478),
    m = n(74538),
    E = n(639119),
    v = n(474936),
    b = n(981631),
    y = n(388032),
    O = n(144236);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    let { isClaimed: t, isVerified: i, isGift: o, subscriptionTier: a, trialId: l, postSuccessGuild: c, onSubscribeModalClose: u, analyticsLocations: f, premiumModalAnalyticsLocation: _, applicationId: p, giftMessage: h } = e;
    if (!t) {
        (0, s.ZDy)(async () => {
            let { default: e } = await n.e('69417').then(n.bind(n, 918995));
            return (t) => {
                var { onClose: n } = t,
                    i = A(t, ['onClose']);
                return (0, r.jsx)(e, N(I({}, i), { onClose: n }));
            };
        });
        return;
    }
    if (!i) {
        (0, s.ZDy)(async () => {
            let { default: e } = await n.e('20102').then(n.bind(n, 444688));
            return (t) => {
                var { onClose: n } = t,
                    i = A(t, ['onClose']);
                return (0, r.jsx)(e, N(I({}, i), { onClose: n }));
            };
        });
        return;
    }
    let g = b.Qqv.BUY;
    null != l ? (g = b.Qqv.TRIAL) : o && (g = b.Qqv.GIFT),
        (0, d.Z)({
            isGift: o,
            initialPlanId: null,
            subscriptionTier: a,
            analyticsLocations: f,
            analyticsObject: I(
                {
                    object: b.qAy.BUTTON_CTA,
                    objectType: g
                },
                _
            ),
            trialId: l,
            postSuccessGuild: c,
            onClose: u,
            applicationId: p,
            giftMessage: h
        });
}
function P(e) {
    let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
        o = null,
        a = null;
    if (null != t && t !== v.Si.LEGACY && t !== v.Si.TIER_0 && t !== v.Si.TIER_1 && t !== v.Si.TIER_2)
        return {
            disabledButtonText: o,
            disabledButtonTooltipText: a
        };
    let s = null != t ? v.y7[(0, m.Wz)(t)] : null,
        l = null != s ? v.$e[s] : null,
        c = null != n ? v.$e[n] : null;
    return (
        r ? (a = m.ZP.getSwitchingPlansDisabledMessage(i)) : null != c && null != l && l < c ? ((o = y.NW.string(y.t['2pG5GR'])), (a = y.NW.string(y.t.jXaaRk))) : null != s && null != n && s === n ? ((o = y.NW.string(y.t.ymSxh4)), (a = y.NW.string(y.t.jXaaRk))) : null == s && null != n && n === v.p9.TIER_2 && (a = y.NW.string(y.t.jXaaRk)),
        {
            disabledButtonText: o,
            disabledButtonTooltipText: a
        }
    );
}
let D = function (e) {
    var { isGift: t, subscriptionTier: n, onClick: i, size: d, className: S, isTrialCTA: T, buttonText: C, buttonTextClassName: D, iconClassName: w, postSuccessGuild: L, onSubscribeModalClose: x, premiumModalAnalyticsLocation: M, showIcon: k = !0, disableShine: j, applicationId: U, giftMessage: G, overrideDisabledButtonText: B, shinyButtonClassName: V, showGradient: F = !1 } = e,
        Z = A(e, ['isGift', 'subscriptionTier', 'onClick', 'size', 'className', 'isTrialCTA', 'buttonText', 'buttonTextClassName', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'overrideDisabledButtonText', 'shinyButtonClassName', 'showGradient']);
    let H = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        W = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        Y = (0, a.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: K } = (0, c.ZP)(),
        z = (0, E.N)(),
        q = !t && null != z && null != n && v.nG[z.trial_id].skus.includes(n),
        Q = (e) => {
            var r;
            if ((e.preventDefault(), null == H)) {
                (0, f.uL)(b.Z5c.LOGIN);
                return;
            }
            if ((null == i || i(e), (null == Y ? void 0 : Y.status) === b.O0b.ACCOUNT_HOLD)) {
                (0, u.A3)(), l.Z.open(b.oAB.PREMIUM), null == x || x(!1);
                return;
            }
            R({
                isClaimed: H.isClaimed(),
                isVerified: H.verified,
                isGift: t,
                subscriptionTier: n,
                trialId: q ? (null === (r = z.subscription_trial) || void 0 === r ? void 0 : r.id) : null,
                postSuccessGuild: L,
                onSubscribeModalClose: x,
                analyticsLocations: K,
                premiumModalAnalyticsLocation: M,
                applicationId: U,
                giftMessage: G
            });
        };
    if (T)
        return (0, r.jsxs)(
            s.zxk,
            N(
                I(
                    {
                        size: d,
                        className: S,
                        innerClassName: O.premiumSubscribeButton,
                        color: s.zxk.Colors.BRAND_INVERTED,
                        onClick: Q
                    },
                    Z
                ),
                {
                    children: [
                        k &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: O.premiumIcon
                            }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, D),
                            children: null != C ? C : y.NW.string(y.t['Gd/XHB'])
                        })
                    ]
                }
            )
        );
    if (t)
        return (0, r.jsxs)(
            s.zxk,
            N(
                I(
                    {
                        size: d,
                        className: S,
                        innerClassName: O.giftButton,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: Q
                    },
                    Z
                ),
                {
                    children: [
                        (0, r.jsx)(s.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.giftIcon
                        }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, D),
                            children: null != C ? C : y.NW.string(y.t.PEjaCw)
                        })
                    ]
                }
            )
        );
    let X = y.NW.string(y.t['2pG5GR']),
        J = null != Y ? (0, m.Af)(Y) : null,
        $ = null != J ? m.ZP.getPremiumType(J.planId) : null == H ? void 0 : H.premiumType,
        ee = n === v.Si.TIER_2 && null != $ && [v.p9.TIER_0, v.p9.TIER_1].includes($);
    ee && (X = y.NW.string(y.t.IJI7ys));
    let et = null != Y && m.ZP.isSwitchingPlansDisabled(Y),
        en = (null != Y && Y.status !== b.O0b.ACCOUNT_HOLD && !(0, _.Q0)(Y.planId) && !ee) || et,
        er = en
            ? null != B
                ? B
                : P({
                      ctaSubscriptionSkuId: n,
                      currentPremiumType: $,
                      isSwitchingDisabled: et,
                      subscription: Y
                  })
            : null;
    function ei(e) {
        var t, i;
        return (0, r.jsxs)(
            s.gtL,
            N(
                I(
                    {
                        disabled: en,
                        onClick: Q,
                        innerClassName: O.premiumSubscribeButton,
                        color: n === v.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        size: d,
                        className: V,
                        wrapperClassName: o()(
                            {
                                [O.tier2Gradient]: F && n === v.Si.TIER_2,
                                [O.tier1Gradient]: F && n === v.Si.TIER_1
                            },
                            S
                        ),
                        pauseAnimation: !W || j
                    },
                    Z,
                    e
                ),
                {
                    children: [
                        k &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(O.premiumIcon, w)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, D),
                            children: null !== (i = null !== (t = null == er ? void 0 : er.disabledButtonText) && void 0 !== t ? t : C) && void 0 !== i ? i : X
                        })
                    ]
                }
            )
        );
    }
    return (null == er ? void 0 : er.disabledButtonTooltipText) != null
        ? (0, r.jsx)(s.ua7, {
              text: er.disabledButtonTooltipText,
              children: ei
          })
        : ei();
};
