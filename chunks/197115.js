n.d(t, { Z: () => C });
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
    _ = n(594174),
    p = n(78839),
    h = n(451478),
    m = n(840828),
    g = n(639119),
    E = n(474936),
    b = n(981631),
    y = n(388032),
    O = n(627268);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = function (e) {
    var { isGift: t, subscriptionTier: i, onClick: v, size: S, className: N, buttonText: C, buttonTextClassName: R, subscribeButtonText: P, iconClassName: w, postSuccessGuild: D, onSubscribeModalClose: L, premiumModalAnalyticsLocation: x, showIcon: M = !0, disableShine: k, applicationId: j, giftMessage: U, shinyButtonClassName: G, showGradient: B = !1, confirmationFooter: V, paymentModalBanner: F } = e,
        Z = A(e, ['isGift', 'subscriptionTier', 'onClick', 'size', 'className', 'buttonText', 'buttonTextClassName', 'subscribeButtonText', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner']);
    let H = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        Y = (0, a.e7)([h.Z], () => h.Z.isFocused()),
        W = (0, a.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: K } = (0, c.ZP)(),
        z = (0, g.N)(),
        q = !t && null != z && null != i && E.nG[z.trial_id].skus.includes(i),
        Q = (0, m.Z)({
            subscriptionTier: i,
            buttonTextOverride: C,
            defaultTextOverride: P
        }),
        X = (e) => {
            var o;
            if ((e.preventDefault(), null == H)) return void (0, f.uL)(b.Z5c.LOGIN, { source: 'premium_subscribe_button' });
            if ((null == v || v(e), (null == W ? void 0 : W.status) === b.O0b.ACCOUNT_HOLD)) {
                (0, u.A3)(), l.Z.open(b.oAB.PREMIUM), null == L || L(!1);
                return;
            }
            if (!H.isClaimed())
                return void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                    return (t) => {
                        var { onClose: n } = t,
                            i = A(t, ['onClose']);
                        return (0, r.jsx)(e, T(I({}, i), { onClose: n }));
                    };
                });
            if (!H.verified)
                return void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = A(t, ['onClose']);
                        return (0, r.jsx)(e, T(I({}, i), { onClose: n }));
                    };
                });
            let a = q ? (null == (o = z.subscription_trial) ? void 0 : o.id) : null,
                c = b.Qqv.BUY;
            null != a ? (c = b.Qqv.TRIAL) : t && (c = b.Qqv.GIFT),
                (0, d.Z)({
                    isGift: t,
                    initialPlanId: null,
                    subscriptionTier: i,
                    analyticsLocations: K,
                    analyticsObject: I(
                        {
                            object: b.qAy.BUTTON_CTA,
                            objectType: c
                        },
                        x
                    ),
                    trialId: a,
                    postSuccessGuild: D,
                    onClose: L,
                    applicationId: j,
                    giftMessage: U,
                    confirmationFooter: V,
                    paymentModalBanner: F
                });
        };
    if (t) {
        let e = i === E.Si.TIER_0 ? y.intl.string(y.t.rk4Uu7) : y.intl.string(y.t.Ve9Ge3);
        return (0, r.jsxs)(
            s.zxk,
            T(
                I(
                    {
                        size: S,
                        className: N,
                        innerClassName: O.giftButton,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: X
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
                            className: o()(O.buttonText, R),
                            children: null != C ? C : e
                        })
                    ]
                }
            )
        );
    }
    function J(e) {
        return (0, r.jsxs)(
            s.gtL,
            T(
                I(
                    {
                        disabled: Q.disabled,
                        onClick: X,
                        innerClassName: O.premiumSubscribeButton,
                        color: i === E.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        size: S,
                        className: G,
                        wrapperClassName: o()(
                            {
                                [O.tier2Gradient]: B && i === E.Si.TIER_2,
                                [O.tier1Gradient]: B && i === E.Si.TIER_1
                            },
                            N
                        ),
                        pauseAnimation: !Y || k
                    },
                    Z,
                    e
                ),
                {
                    children: [
                        M &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(O.premiumIcon, w)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, R),
                            children: Q.buttonText
                        })
                    ]
                }
            )
        );
    }
    return null != Q.buttonTooltipText
        ? (0, r.jsx)(s.ua7, {
              text: Q.buttonTooltipText,
              children: J
          })
        : J();
};
