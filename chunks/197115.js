n.d(t, { Z: () => P });
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
    O = n(748273);
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
let P = function (e) {
    var { isGift: t, subscriptionTier: i, onClick: S, size: T, className: C, isTrialCTA: P, buttonText: D, buttonTextClassName: w, iconClassName: L, postSuccessGuild: x, onSubscribeModalClose: M, premiumModalAnalyticsLocation: k, showIcon: j = !0, disableShine: U, applicationId: G, giftMessage: B, overrideDisabledButtonText: V, shinyButtonClassName: F, showGradient: Z = !1, confirmationFooter: H, planSelectBanner: W } = e,
        Y = A(e, ['isGift', 'subscriptionTier', 'onClick', 'size', 'className', 'isTrialCTA', 'buttonText', 'buttonTextClassName', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'overrideDisabledButtonText', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'planSelectBanner']);
    let K = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        z = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        q = (0, a.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: Q } = (0, c.ZP)(),
        X = (0, E.N)(),
        J = !t && null != X && null != i && v.nG[X.trial_id].skus.includes(i),
        $ = (e) => {
            var o;
            if ((e.preventDefault(), null == K)) {
                (0, f.uL)(b.Z5c.LOGIN);
                return;
            }
            if ((null == S || S(e), (null == q ? void 0 : q.status) === b.O0b.ACCOUNT_HOLD)) {
                (0, u.A3)(), l.Z.open(b.oAB.PREMIUM), null == M || M(!1);
                return;
            }
            if (!K.isClaimed()) {
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
            if (!K.verified) {
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
            let a = J ? (null === (o = X.subscription_trial) || void 0 === o ? void 0 : o.id) : null,
                c = b.Qqv.BUY;
            null != a ? (c = b.Qqv.TRIAL) : t && (c = b.Qqv.GIFT),
                (0, d.Z)({
                    isGift: t,
                    initialPlanId: null,
                    subscriptionTier: i,
                    analyticsLocations: Q,
                    analyticsObject: I(
                        {
                            object: b.qAy.BUTTON_CTA,
                            objectType: c
                        },
                        k
                    ),
                    trialId: a,
                    postSuccessGuild: x,
                    onClose: M,
                    applicationId: G,
                    giftMessage: B,
                    confirmationFooter: H,
                    planSelectBanner: W
                });
        };
    if (P)
        return (0, r.jsxs)(
            s.zxk,
            N(
                I(
                    {
                        size: T,
                        className: C,
                        innerClassName: O.premiumSubscribeButton,
                        color: s.zxk.Colors.BRAND_INVERTED,
                        onClick: $
                    },
                    Y
                ),
                {
                    children: [
                        j &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: O.premiumIcon
                            }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, w),
                            children: null != D ? D : y.NW.string(y.t['Gd/XHB'])
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
                        size: T,
                        className: C,
                        innerClassName: O.giftButton,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: $
                    },
                    Y
                ),
                {
                    children: [
                        (0, r.jsx)(s.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.giftIcon
                        }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, w),
                            children: null != D ? D : y.NW.string(y.t.PEjaCw)
                        })
                    ]
                }
            )
        );
    let ee = y.NW.string(y.t['2pG5GR']),
        et = null != q ? (0, m.Af)(q) : null,
        en = null != et ? m.ZP.getPremiumType(et.planId) : null == K ? void 0 : K.premiumType,
        er = i === v.Si.TIER_2 && null != en && [v.p9.TIER_0, v.p9.TIER_1].includes(en);
    er && (ee = y.NW.string(y.t.IJI7ys));
    let ei = null != q && m.ZP.isSwitchingPlansDisabled(q),
        eo = (null != q && q.status !== b.O0b.ACCOUNT_HOLD && !(0, _.Q0)(q.planId) && !er) || ei,
        ea = eo
            ? null != V
                ? V
                : R({
                      ctaSubscriptionSkuId: i,
                      currentPremiumType: en,
                      isSwitchingDisabled: ei,
                      subscription: q
                  })
            : null;
    function es(e) {
        var t, n;
        return (0, r.jsxs)(
            s.gtL,
            N(
                I(
                    {
                        disabled: eo,
                        onClick: $,
                        innerClassName: O.premiumSubscribeButton,
                        color: i === v.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        size: T,
                        className: F,
                        wrapperClassName: o()(
                            {
                                [O.tier2Gradient]: Z && i === v.Si.TIER_2,
                                [O.tier1Gradient]: Z && i === v.Si.TIER_1
                            },
                            C
                        ),
                        pauseAnimation: !z || U
                    },
                    Y,
                    e
                ),
                {
                    children: [
                        j &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(O.premiumIcon, L)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, w),
                            children: null !== (n = null !== (t = null == ea ? void 0 : ea.disabledButtonText) && void 0 !== t ? t : D) && void 0 !== n ? n : ee
                        })
                    ]
                }
            )
        );
    }
    return (null == ea ? void 0 : ea.disabledButtonTooltipText) != null
        ? (0, r.jsx)(s.ua7, {
              text: ea.disabledButtonTooltipText,
              children: es
          })
        : es();
};
