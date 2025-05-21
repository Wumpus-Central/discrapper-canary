n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(844477),
    l = n(481060),
    c = n(230711),
    u = n(906732),
    d = n(543241),
    f = n(963249),
    _ = n(703656),
    p = n(594174),
    h = n(78839),
    m = n(451478),
    g = n(639119),
    E = n(433390),
    b = n(474936),
    y = n(981631),
    O = n(388032),
    v = n(163882);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
function N(e, t) {
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
let P = function (e) {
    var t,
        { subscriptionTier: i, onClick: I, size: T, className: C, textOptions: P, iconClassName: R, postSuccessGuild: w, onSubscribeModalClose: D, premiumModalAnalyticsLocation: L, showIcon: x = !0, disableShine: k, applicationId: M, giftMessage: j, shinyButtonClassName: U, showGradient: G = !1, confirmationFooter: B, paymentModalBanner: F, isGift: V, iconColor: Z = 'currentColor', useExpressiveButton: H, giftIconClassName: Y } = e,
        W = N(e, ['subscriptionTier', 'onClick', 'size', 'className', 'textOptions', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner', 'isGift', 'iconColor', 'useExpressiveButton', 'giftIconClassName']);
    let K = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        z = (0, a.e7)([m.Z], () => m.Z.isFocused()),
        q = (0, a.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: Q } = (0, u.ZP)(),
        X = (0, g.N)(),
        J = !V && null != X && null != i && b.nG[X.trial_id].skus.includes(i),
        $ = (0, E.Z)({
            subscriptionTier: i,
            buttonTextOverride: null == P ? void 0 : P.textOverride,
            defaultTextOverride: null == P ? void 0 : P.subscribeText
        }),
        ee = (e) => {
            var t;
            if ((e.preventDefault(), null == K)) return void (0, _.uL)(y.Z5c.LOGIN, { source: 'premium_subscribe_button' });
            if ((null == I || I(e), (null == q ? void 0 : q.status) === y.O0b.ACCOUNT_HOLD)) {
                (0, d.A3)(), c.Z.open(y.oAB.PREMIUM), null == D || D(!1);
                return;
            }
            if (!K.isClaimed())
                return void (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                    return (t) => {
                        var { onClose: n } = t,
                            i = N(t, ['onClose']);
                        return (0, r.jsx)(e, A(S({}, i), { onClose: n }));
                    };
                });
            if (!K.verified)
                return void (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = N(t, ['onClose']);
                        return (0, r.jsx)(e, A(S({}, i), { onClose: n }));
                    };
                });
            let o = J ? (null == (t = X.subscription_trial) ? void 0 : t.id) : null,
                a = y.Qqv.BUY;
            null != o ? (a = y.Qqv.TRIAL) : V && (a = y.Qqv.GIFT),
                (0, f.Z)({
                    isGift: V,
                    initialPlanId: null,
                    subscriptionTier: i,
                    analyticsLocations: Q,
                    analyticsObject: S(
                        {
                            object: y.qAy.BUTTON_CTA,
                            objectType: a
                        },
                        L
                    ),
                    trialId: o,
                    postSuccessGuild: w,
                    onClose: D,
                    applicationId: M,
                    giftMessage: j,
                    confirmationFooter: B,
                    paymentModalBanner: F
                });
        };
    if (H && (null == P ? void 0 : P.expressiveButtonText) != null)
        return (0, r.jsx)(s.z, {
            onClick: ee,
            variant: 'expressive',
            text: null == P ? void 0 : P.expressiveButtonText,
            icon: l.SrA
        });
    if (V) {
        let e = i === b.Si.TIER_0 ? O.intl.string(O.t.rk4Uu7) : O.intl.string(O.t.Ve9Ge3);
        return (0, r.jsxs)(
            l.zxk,
            A(
                S(
                    {
                        size: T,
                        className: C,
                        innerClassName: v.giftButton,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: ee
                    },
                    W
                ),
                {
                    children: [
                        x &&
                            (0, r.jsx)(l.OgN, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(v.giftIcon, Y)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(v.buttonText, null == P ? void 0 : P.textClassName),
                            children: null != (t = null == P ? void 0 : P.textOverride) ? t : e
                        })
                    ]
                }
            )
        );
    }
    function et(e) {
        return (0, r.jsxs)(
            l.gtL,
            A(
                S(
                    {
                        disabled: $.disabled,
                        onClick: ee,
                        innerClassName: v.premiumSubscribeButton,
                        color: i === b.Si.TIER_1 ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN,
                        size: T,
                        className: U,
                        wrapperClassName: o()(
                            {
                                [v.tier2Gradient]: G && i === b.Si.TIER_2,
                                [v.tier1Gradient]: G && i === b.Si.TIER_1
                            },
                            C
                        ),
                        pauseAnimation: !z || k
                    },
                    W,
                    e
                ),
                {
                    children: [
                        x &&
                            (0, r.jsx)(l.SrA, {
                                size: 'md',
                                color: Z,
                                className: o()(v.premiumIcon, R)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(v.buttonText, null == P ? void 0 : P.textClassName),
                            children: $.buttonText
                        })
                    ]
                }
            )
        );
    }
    return null != $.buttonTooltipText
        ? (0, r.jsx)(l.ua7, {
              text: $.buttonTooltipText,
              children: et
          })
        : et();
};
