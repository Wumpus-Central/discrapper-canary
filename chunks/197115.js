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
    var t,
        { isGift: i, subscriptionTier: v, onClick: S, size: N, className: C, textOptions: R, iconClassName: P, postSuccessGuild: w, onSubscribeModalClose: D, premiumModalAnalyticsLocation: L, showIcon: x = !0, disableShine: M, applicationId: k, giftMessage: j, shinyButtonClassName: U, showGradient: G = !1, confirmationFooter: B, paymentModalBanner: V } = e,
        F = A(e, ['isGift', 'subscriptionTier', 'onClick', 'size', 'className', 'textOptions', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner']);
    let Z = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        H = (0, a.e7)([h.Z], () => h.Z.isFocused()),
        Y = (0, a.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: W } = (0, c.ZP)(),
        K = (0, g.N)(),
        z = !i && null != K && null != v && E.nG[K.trial_id].skus.includes(v),
        q = (0, m.Z)({
            subscriptionTier: v,
            buttonTextOverride: null == R ? void 0 : R.textOverride,
            defaultTextOverride: null == R ? void 0 : R.subscribeText
        }),
        Q = (e) => {
            var t;
            if ((e.preventDefault(), null == Z)) return void (0, f.uL)(b.Z5c.LOGIN, { source: 'premium_subscribe_button' });
            if ((null == S || S(e), (null == Y ? void 0 : Y.status) === b.O0b.ACCOUNT_HOLD)) {
                (0, u.A3)(), l.Z.open(b.oAB.PREMIUM), null == D || D(!1);
                return;
            }
            if (!Z.isClaimed())
                return void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                    return (t) => {
                        var { onClose: n } = t,
                            i = A(t, ['onClose']);
                        return (0, r.jsx)(e, T(I({}, i), { onClose: n }));
                    };
                });
            if (!Z.verified)
                return void (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = A(t, ['onClose']);
                        return (0, r.jsx)(e, T(I({}, i), { onClose: n }));
                    };
                });
            let o = z ? (null == (t = K.subscription_trial) ? void 0 : t.id) : null,
                a = b.Qqv.BUY;
            null != o ? (a = b.Qqv.TRIAL) : i && (a = b.Qqv.GIFT),
                (0, d.Z)({
                    isGift: i,
                    initialPlanId: null,
                    subscriptionTier: v,
                    analyticsLocations: W,
                    analyticsObject: I(
                        {
                            object: b.qAy.BUTTON_CTA,
                            objectType: a
                        },
                        L
                    ),
                    trialId: o,
                    postSuccessGuild: w,
                    onClose: D,
                    applicationId: k,
                    giftMessage: j,
                    confirmationFooter: B,
                    paymentModalBanner: V
                });
        };
    if (i) {
        let e = v === E.Si.TIER_0 ? y.intl.string(y.t.rk4Uu7) : y.intl.string(y.t.Ve9Ge3);
        return (0, r.jsxs)(
            s.zxk,
            T(
                I(
                    {
                        size: N,
                        className: C,
                        innerClassName: O.giftButton,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: Q
                    },
                    F
                ),
                {
                    children: [
                        (0, r.jsx)(s.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.giftIcon
                        }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, null == R ? void 0 : R.textClassName),
                            children: null != (t = null == R ? void 0 : R.textOverride) ? t : e
                        })
                    ]
                }
            )
        );
    }
    function X(e) {
        return (0, r.jsxs)(
            s.gtL,
            T(
                I(
                    {
                        disabled: q.disabled,
                        onClick: Q,
                        innerClassName: O.premiumSubscribeButton,
                        color: v === E.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN,
                        size: N,
                        className: U,
                        wrapperClassName: o()(
                            {
                                [O.tier2Gradient]: G && v === E.Si.TIER_2,
                                [O.tier1Gradient]: G && v === E.Si.TIER_1
                            },
                            C
                        ),
                        pauseAnimation: !H || M
                    },
                    F,
                    e
                ),
                {
                    children: [
                        x &&
                            (0, r.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(O.premiumIcon, P)
                            }),
                        (0, r.jsx)('span', {
                            className: o()(O.buttonText, null == R ? void 0 : R.textClassName),
                            children: q.buttonText
                        })
                    ]
                }
            )
        );
    }
    return null != q.buttonTooltipText
        ? (0, r.jsx)(s.ua7, {
              text: q.buttonTooltipText,
              children: X
          })
        : X();
};
