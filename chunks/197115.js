n.d(t, { Z: () => D });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(230711),
    c = n(906732),
    u = n(975298),
    d = n(543241),
    f = n(963249),
    _ = n(703656),
    p = n(301766),
    h = n(594174),
    m = n(78839),
    g = n(451478),
    E = n(74538),
    v = n(404380),
    b = n(639119),
    y = n(474936),
    O = n(981631),
    I = n(388032),
    S = n(748273);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function w(e) {
    let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
        o = null,
        a = null;
    if (null != t && t !== y.Si.LEGACY && t !== y.Si.TIER_0 && t !== y.Si.TIER_1 && t !== y.Si.TIER_2)
        return {
            disabledButtonText: o,
            disabledButtonTooltipText: a
        };
    let s = null != t ? y.y7[(0, E.Wz)(t)] : null,
        l = null != s ? y.$e[s] : null,
        c = null != n ? y.$e[n] : null;
    return (
        r ? (a = E.ZP.getSwitchingPlansDisabledMessage(i)) : null != c && null != l && l < c ? ((o = I.NW.string(I.t['2pG5GR'])), (a = I.NW.string(I.t.jXaaRk))) : null != s && null != n && s === n ? ((o = I.NW.string(I.t.ymSxh4)), (a = I.NW.string(I.t.jXaaRk))) : null == s && null != n && n === y.p9.TIER_2 && (a = I.NW.string(I.t.jXaaRk)),
        {
            disabledButtonText: o,
            disabledButtonTooltipText: a
        }
    );
}
let D = function (e) {
    var { isGift: t, subscriptionTier: i, onClick: T, size: A, className: P, isTrialCTA: D, buttonText: L, buttonTextClassName: x, iconClassName: M, postSuccessGuild: k, onSubscribeModalClose: j, premiumModalAnalyticsLocation: U, showIcon: G = !0, disableShine: B, applicationId: V, giftMessage: F, overrideDisabledButtonText: Z, shinyButtonClassName: H, showGradient: W = !1, confirmationFooter: Y, planSelectBanner: K } = e,
        z = R(e, ['isGift', 'subscriptionTier', 'onClick', 'size', 'className', 'isTrialCTA', 'buttonText', 'buttonTextClassName', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'overrideDisabledButtonText', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'planSelectBanner']);
    let q = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        Q = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        X = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: J } = (0, c.ZP)(),
        $ = (0, b.N)(),
        ee = !t && null != $ && null != i && y.nG[$.trial_id].skus.includes(i),
        { fractionalState: et } = (0, u.Z)({ forceFetch: !1 }),
        en = (e) => {
            var o;
            if ((e.preventDefault(), null == q)) {
                (0, _.uL)(O.Z5c.LOGIN);
                return;
            }
            if ((null == T || T(e), (null == X ? void 0 : X.status) === O.O0b.ACCOUNT_HOLD)) {
                (0, d.A3)(), l.Z.open(O.oAB.PREMIUM), null == j || j(!1);
                return;
            }
            if (!q.isClaimed()) {
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                    return (t) => {
                        var { onClose: n } = t,
                            i = R(t, ['onClose']);
                        return (0, r.jsx)(e, C(N({}, i), { onClose: n }));
                    };
                });
                return;
            }
            if (!q.verified) {
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = R(t, ['onClose']);
                        return (0, r.jsx)(e, C(N({}, i), { onClose: n }));
                    };
                });
                return;
            }
            let a = ee ? (null === (o = $.subscription_trial) || void 0 === o ? void 0 : o.id) : null,
                c = O.Qqv.BUY;
            null != a ? (c = O.Qqv.TRIAL) : t && (c = O.Qqv.GIFT),
                (0, f.Z)({
                    isGift: t,
                    initialPlanId: null,
                    subscriptionTier: i,
                    analyticsLocations: J,
                    analyticsObject: N(
                        {
                            object: O.qAy.BUTTON_CTA,
                            objectType: c
                        },
                        U
                    ),
                    trialId: a,
                    postSuccessGuild: k,
                    onClose: j,
                    applicationId: V,
                    giftMessage: F,
                    confirmationFooter: Y,
                    planSelectBanner: K
                });
        };
    if (D)
        return (0, r.jsxs)(
            s.zxk,
            C(
                N(
                    {
                        size: A,
                        className: P,
                        innerClassName: S.premiumSubscribeButton,
                        color: s.zxk.Colors.BRAND_INVERTED,
                        onClick: en
                    },
                    z
                ),
                {
                    children: [
                        G &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: S.premiumIcon
                            }),
                        (0, r.jsx)('span', {
                            className: o()(S.buttonText, x),
                            children: null != L ? L : I.NW.string(I.t['Gd/XHB'])
                        })
                    ]
                }
            )
        );
    if (t)
        return (0, r.jsxs)(
            s.zxk,
            C(
                N(
                    {
                        size: A,
                        className: P,
                        innerClassName: S.giftButton,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: en
                    },
                    z
                ),
                {
                    children: [
                        (0, r.jsx)(s.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: S.giftIcon
                        }),
                        (0, r.jsx)('span', {
                            className: o()(S.buttonText, x),
                            children: null != L ? L : I.NW.string(I.t.PEjaCw)
                        })
                    ]
                }
            )
        );
    let er = I.NW.string(I.t['2pG5GR']),
        ei = null != X ? (0, E.Af)(X) : null,
        eo = null != ei ? E.ZP.getPremiumType(ei.planId) : null == q ? void 0 : q.premiumType,
        ea = i === y.Si.TIER_2 && null != eo && [y.p9.TIER_0, y.p9.TIER_1].includes(eo);
    ea && (er = I.NW.string(I.t.IJI7ys));
    let es = (null != X && E.ZP.isSwitchingPlansDisabled(X)) || (null != X && (0, v.o)('PremiumSubscribeButton', q, et)),
        el = (null != X && X.status !== O.O0b.ACCOUNT_HOLD && !(0, p.Q0)(X.planId) && !ea) || es,
        ec = el
            ? null != Z
                ? Z
                : w({
                      ctaSubscriptionSkuId: i,
                      currentPremiumType: eo,
                      isSwitchingDisabled: es,
                      subscription: X
                  })
            : null;
    function eu(e) {
        var t, n;
        return (0, r.jsxs)(
            s.gtL,
            C(
                N(
                    {
                        disabled: el,
                        onClick: en,
                        innerClassName: S.premiumSubscribeButton,
                        color: i === y.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        size: A,
                        className: H,
                        wrapperClassName: o()(
                            {
                                [S.tier2Gradient]: W && i === y.Si.TIER_2,
                                [S.tier1Gradient]: W && i === y.Si.TIER_1
                            },
                            P
                        ),
                        pauseAnimation: !Q || B
                    },
                    z,
                    e
                ),
                {
                    children: [
                        G &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(S.premiumIcon, M)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(S.buttonText, x),
                            children: null !== (n = null !== (t = null == ec ? void 0 : ec.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : er
                        })
                    ]
                }
            )
        );
    }
    return (null == ec ? void 0 : ec.disabledButtonTooltipText) != null
        ? (0, r.jsx)(s.ua7, {
              text: ec.disabledButtonTooltipText,
              children: eu
          })
        : eu();
};
