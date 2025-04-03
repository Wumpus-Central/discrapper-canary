n.d(t, { Z: () => L });
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
    b = n(502087),
    y = n(404380),
    v = n(639119),
    O = n(474936),
    I = n(981631),
    S = n(388032),
    T = n(627268);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function D(e) {
    let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
        o = null,
        a = null;
    if (null != t && t !== O.Si.LEGACY && t !== O.Si.TIER_0 && t !== O.Si.TIER_1 && t !== O.Si.TIER_2)
        return {
            disabledButtonText: o,
            disabledButtonTooltipText: a
        };
    let s = null != t ? O.y7[(0, E.Wz)(t)] : null,
        l = null != s ? O.$e[s] : null,
        c = null != n ? O.$e[n] : null;
    return (
        r ? (a = E.ZP.getSwitchingPlansDisabledMessage(i)) : null != c && null != l && l < c ? ((o = S.NW.string(S.t['2pG5GR'])), (a = S.NW.string(S.t.jXaaRk))) : null != s && null != n && s === n ? ((o = S.NW.string(S.t.ymSxh4)), (a = S.NW.string(S.t.jXaaRk))) : null == s && null != n && n === O.p9.TIER_2 && (a = S.NW.string(S.t.jXaaRk)),
        {
            disabledButtonText: o,
            disabledButtonTooltipText: a
        }
    );
}
let L = function (e) {
    var { isGift: t, subscriptionTier: i, onClick: N, size: C, className: w, isTrialCTA: L, buttonText: x, buttonTextClassName: M, subscribeButtonText: k, iconClassName: j, postSuccessGuild: U, onSubscribeModalClose: G, premiumModalAnalyticsLocation: B, showIcon: F = !0, disableShine: V, applicationId: Z, giftMessage: H, overrideDisabledButtonText: W, shinyButtonClassName: Y, showGradient: K = !1, confirmationFooter: z, paymentModalBanner: q } = e,
        Q = P(e, ['isGift', 'subscriptionTier', 'onClick', 'size', 'className', 'isTrialCTA', 'buttonText', 'buttonTextClassName', 'subscribeButtonText', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'overrideDisabledButtonText', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner']);
    let X = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        J = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        $ = (0, a.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: ee } = (0, c.ZP)(),
        et = (0, v.N)(),
        en = !t && null != et && null != i && O.nG[et.trial_id].skus.includes(i),
        { fractionalState: er } = (0, u.Z)({ forceFetch: !1 }),
        ei = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeOverride()),
        eo = (e) => {
            var o;
            if ((e.preventDefault(), null == X)) return void (0, _.uL)(I.Z5c.LOGIN);
            if ((null == N || N(e), (null == $ ? void 0 : $.status) === I.O0b.ACCOUNT_HOLD)) {
                (0, d.A3)(), l.Z.open(I.oAB.PREMIUM), null == G || G(!1);
                return;
            }
            if (!X.isClaimed())
                return void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                    return (t) => {
                        var { onClose: n } = t,
                            i = P(t, ['onClose']);
                        return (0, r.jsx)(e, R(A({}, i), { onClose: n }));
                    };
                });
            if (!X.verified)
                return void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = P(t, ['onClose']);
                        return (0, r.jsx)(e, R(A({}, i), { onClose: n }));
                    };
                });
            let a = en ? (null == (o = et.subscription_trial) ? void 0 : o.id) : null,
                c = I.Qqv.BUY;
            null != a ? (c = I.Qqv.TRIAL) : t && (c = I.Qqv.GIFT),
                (0, f.Z)({
                    isGift: t,
                    initialPlanId: null,
                    subscriptionTier: i,
                    analyticsLocations: ee,
                    analyticsObject: A(
                        {
                            object: I.qAy.BUTTON_CTA,
                            objectType: c
                        },
                        B
                    ),
                    trialId: a,
                    postSuccessGuild: U,
                    onClose: G,
                    applicationId: Z,
                    giftMessage: H,
                    confirmationFooter: z,
                    paymentModalBanner: q
                });
        };
    if (L)
        return (0, r.jsxs)(
            s.zxk,
            R(
                A(
                    {
                        size: C,
                        className: w,
                        innerClassName: T.premiumSubscribeButton,
                        color: s.zxk.Colors.BRAND_INVERTED,
                        onClick: eo
                    },
                    Q
                ),
                {
                    children: [
                        F &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.premiumIcon
                            }),
                        (0, r.jsx)('span', {
                            className: o()(T.buttonText, M),
                            children: null != x ? x : S.NW.string(S.t['Gd/XHB'])
                        })
                    ]
                }
            )
        );
    if (t)
        return (0, r.jsxs)(
            s.zxk,
            R(
                A(
                    {
                        size: C,
                        className: w,
                        innerClassName: T.giftButton,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: eo
                    },
                    Q
                ),
                {
                    children: [
                        (0, r.jsx)(s.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: T.giftIcon
                        }),
                        (0, r.jsx)('span', {
                            className: o()(T.buttonText, M),
                            children: null != x ? x : S.NW.string(S.t.PEjaCw)
                        })
                    ]
                }
            )
        );
    let ea = null != k ? k : S.NW.string(S.t['2pG5GR']),
        es = null != $ ? (0, E.Af)($) : null,
        el = void 0 !== ei ? ei : null != es ? E.ZP.getPremiumType(es.planId) : null == X ? void 0 : X.premiumType,
        ec = i === O.Si.TIER_2 && null != el && [O.p9.TIER_0, O.p9.TIER_1].includes(el);
    ec && (ea = S.NW.string(S.t.IJI7ys));
    let eu = (null != $ && E.ZP.isSwitchingPlansDisabled($)) || (null != $ && (0, y.o)('PremiumSubscribeButton', X, er)),
        ed = (null != $ && $.status !== I.O0b.ACCOUNT_HOLD && !(0, p.Q0)($.planId) && !ec && void 0 === ei) || eu,
        ef = ed
            ? null != W
                ? W
                : D({
                      ctaSubscriptionSkuId: i,
                      currentPremiumType: el,
                      isSwitchingDisabled: eu,
                      subscription: $
                  })
            : null;
    function e_(e) {
        var t, n;
        return (0, r.jsxs)(
            s.gtL,
            R(
                A(
                    {
                        disabled: ed,
                        onClick: eo,
                        innerClassName: T.premiumSubscribeButton,
                        color: i === O.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        size: C,
                        className: Y,
                        wrapperClassName: o()(
                            {
                                [T.tier2Gradient]: K && i === O.Si.TIER_2,
                                [T.tier1Gradient]: K && i === O.Si.TIER_1
                            },
                            w
                        ),
                        pauseAnimation: !J || V
                    },
                    Q,
                    e
                ),
                {
                    children: [
                        F &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(T.premiumIcon, j)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(T.buttonText, M),
                            children: null != (n = null != (t = null == ef ? void 0 : ef.disabledButtonText) ? t : x) ? n : ea
                        })
                    ]
                }
            )
        );
    }
    return (null == ef ? void 0 : ef.disabledButtonTooltipText) != null
        ? (0, r.jsx)(s.ua7, {
              text: ef.disabledButtonTooltipText,
              children: e_
          })
        : e_();
};
