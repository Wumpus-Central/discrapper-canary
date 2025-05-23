n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(844477),
    l = n(481060),
    c = n(451478),
    u = n(648613),
    d = n(433390),
    f = n(474936),
    _ = n(388032),
    p = n(163882);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = function (e) {
    var { subscriptionTier: t, onClick: n, size: i, className: h, textOptions: g, iconClassName: y, postSuccessGuild: O, onSubscribeModalClose: v, premiumModalAnalyticsLocation: I, showIcon: S = !0, disableShine: T, applicationId: A, giftMessage: N, shinyButtonClassName: C, showGradient: P = !1, confirmationFooter: R, paymentModalBanner: w, isGift: D, iconColor: L = 'currentColor', useExpressiveButton: x, giftIconClassName: k } = e,
        M = b(e, ['subscriptionTier', 'onClick', 'size', 'className', 'textOptions', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner', 'isGift', 'iconColor', 'useExpressiveButton', 'giftIconClassName']);
    let j = (0, a.e7)([c.Z], () => c.Z.isFocused()),
        U = (0, d.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == g ? void 0 : g.textOverride,
            defaultTextOverride: null == g ? void 0 : g.subscribeText
        }),
        G = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: O,
            onSubscribeModalClose: v,
            premiumModalAnalyticsLocation: I,
            applicationId: A,
            confirmationFooter: R,
            paymentModalBanner: w,
            isGift: D,
            giftMessage: N
        };
    if (x && (null == g ? void 0 : g.expressiveButtonText) != null)
        return (0, r.jsx)(
            u.Z,
            E(m({}, G), {
                children: (e) => {
                    var t;
                    let { onClick: n } = e;
                    return (0, r.jsx)(s.z, {
                        onClick: n,
                        variant: 'expressive',
                        text: null != (t = null == g ? void 0 : g.expressiveButtonText) ? t : '',
                        icon: l.SrA
                    });
                }
            })
        );
    if (D) {
        let e = t === f.Si.TIER_0 ? _.intl.string(_.t.rk4Uu7) : _.intl.string(_.t.Ve9Ge3);
        return (0, r.jsx)(
            u.Z,
            E(m({}, G), {
                children: (t) => {
                    var n;
                    let { onClick: a } = t;
                    return (0, r.jsxs)(
                        l.zxk,
                        E(
                            m(
                                {
                                    size: i,
                                    className: h,
                                    innerClassName: p.giftButton,
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: a
                                },
                                M
                            ),
                            {
                                children: [
                                    S &&
                                        (0, r.jsx)(l.OgN, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: o()(p.giftIcon, k)
                                        }),
                                    (0, r.jsx)('span', {
                                        className: o()(p.buttonText, null == g ? void 0 : g.textClassName),
                                        children: null != (n = null == g ? void 0 : g.textOverride) ? n : e
                                    })
                                ]
                            }
                        )
                    );
                }
            })
        );
    }
    function B(e) {
        return (0, r.jsx)(
            u.Z,
            E(m({}, G), {
                children: (n) => {
                    let { onClick: a } = n;
                    return (0, r.jsxs)(
                        l.gtL,
                        E(
                            m(
                                {
                                    disabled: U.disabled,
                                    onClick: a,
                                    innerClassName: p.premiumSubscribeButton,
                                    color: t === f.Si.TIER_1 ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN,
                                    size: i,
                                    className: C,
                                    wrapperClassName: o()(
                                        {
                                            [p.tier2Gradient]: P && t === f.Si.TIER_2,
                                            [p.tier1Gradient]: P && t === f.Si.TIER_1
                                        },
                                        h
                                    ),
                                    pauseAnimation: !j || T
                                },
                                M,
                                e
                            ),
                            {
                                children: [
                                    S &&
                                        (0, r.jsx)(l.SrA, {
                                            size: 'md',
                                            color: L,
                                            className: o()(p.premiumIcon, y)
                                        }),
                                    (0, r.jsx)('span', {
                                        className: o()(p.buttonText, null == g ? void 0 : g.textClassName),
                                        children: U.buttonText
                                    })
                                ]
                            }
                        )
                    );
                }
            })
        );
    }
    return null != U.buttonTooltipText
        ? (0, r.jsx)(l.ua7, {
              text: U.buttonTooltipText,
              children: B
          })
        : B();
};
