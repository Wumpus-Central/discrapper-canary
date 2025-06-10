n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = function (e) {
    var { subscriptionTier: t, onClick: n, size: i, className: h, textOptions: g, iconClassName: y, postSuccessGuild: O, onSubscribeModalClose: v, premiumModalAnalyticsLocation: I, showIcon: T = !0, disableShine: S, applicationId: A, giftMessage: N, shinyButtonClassName: C, showGradient: R = !1, confirmationFooter: P, paymentModalBanner: w, isGift: D, color: L, iconColor: x = 'currentColor', useExpressiveButton: M, giftIconClassName: k } = e,
        j = b(e, ['subscriptionTier', 'onClick', 'size', 'className', 'textOptions', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'giftMessage', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner', 'isGift', 'color', 'iconColor', 'useExpressiveButton', 'giftIconClassName']);
    let U = (0, o.e7)([c.Z], () => c.Z.isFocused()),
        G = (0, d.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == g ? void 0 : g.textOverride,
            defaultTextOverride: null == g ? void 0 : g.subscribeText
        }),
        B = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: O,
            onSubscribeModalClose: v,
            premiumModalAnalyticsLocation: I,
            applicationId: A,
            confirmationFooter: P,
            paymentModalBanner: w,
            isGift: D,
            giftMessage: N
        };
    if (M && (null == g ? void 0 : g.expressiveButtonText) != null)
        return (0, r.jsx)(
            u.Z,
            E(m({}, B), {
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
            E(m({}, B), {
                children: (t) => {
                    var n;
                    let { onClick: o } = t;
                    return (0, r.jsxs)(
                        l.zxk,
                        E(
                            m(
                                {
                                    size: i,
                                    className: h,
                                    innerClassName: p.giftButton,
                                    color: null != L ? L : l.zxk.Colors.PRIMARY,
                                    onClick: o
                                },
                                j
                            ),
                            {
                                children: [
                                    T &&
                                        (0, r.jsx)(l.OgN, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(p.giftIcon, k)
                                        }),
                                    (0, r.jsx)('span', {
                                        className: a()(p.buttonText, null == g ? void 0 : g.textClassName),
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
    function F(e) {
        let n = null != L ? L : t === f.Si.TIER_1 ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN;
        return (0, r.jsx)(
            u.Z,
            E(m({}, B), {
                children: (o) => {
                    let { onClick: s } = o;
                    return (0, r.jsxs)(
                        l.gtL,
                        E(
                            m(
                                {
                                    disabled: G.disabled,
                                    onClick: s,
                                    innerClassName: p.premiumSubscribeButton,
                                    color: n,
                                    size: i,
                                    className: C,
                                    wrapperClassName: a()(
                                        {
                                            [p.tier2Gradient]: R && t === f.Si.TIER_2,
                                            [p.tier1Gradient]: R && t === f.Si.TIER_1
                                        },
                                        h
                                    ),
                                    buttonShineClassName: 'buttonShineClassName' in j ? j.buttonShineClassName : n === l.Ttl.BRAND_INVERTED ? p.brandShine : void 0,
                                    pauseAnimation: !U || S
                                },
                                j,
                                e
                            ),
                            {
                                children: [
                                    T &&
                                        (0, r.jsx)(l.SrA, {
                                            size: 'md',
                                            color: x,
                                            className: a()(p.premiumIcon, y)
                                        }),
                                    (0, r.jsx)('span', {
                                        className: a()(p.buttonText, null == g ? void 0 : g.textClassName),
                                        children: G.buttonText
                                    })
                                ]
                            }
                        )
                    );
                }
            })
        );
    }
    return null != G.buttonTooltipText
        ? (0, r.jsx)(l.ua7, {
              text: G.buttonTooltipText,
              children: F
          })
        : F();
};
