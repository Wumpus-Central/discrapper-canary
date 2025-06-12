n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(680018),
    l = n(481060),
    c = n(451478),
    u = n(648613),
    d = n(433390),
    _ = n(474936),
    f = n(163882);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = function (e) {
    var { subscriptionTier: t, onClick: n, size: i, className: p, textOptions: m, iconClassName: b, postSuccessGuild: y, onSubscribeModalClose: O, premiumModalAnalyticsLocation: v, showIcon: I = !0, disableShine: T, applicationId: S, shinyButtonClassName: A, showGradient: N = !1, confirmationFooter: C, paymentModalBanner: R, color: P, iconColor: w = 'currentColor', useExpressiveButton: D } = e,
        L = E(e, ['subscriptionTier', 'onClick', 'size', 'className', 'textOptions', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner', 'color', 'iconColor', 'useExpressiveButton']);
    let x = (0, o.e7)([c.Z], () => c.Z.isFocused()),
        M = (0, d.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == m ? void 0 : m.textOverride,
            defaultTextOverride: null == m ? void 0 : m.subscribeText
        }),
        k = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: y,
            onSubscribeModalClose: O,
            premiumModalAnalyticsLocation: v,
            applicationId: S,
            confirmationFooter: C,
            paymentModalBanner: R
        };
    if (D && (null == m ? void 0 : m.expressiveButtonText) != null)
        return (0, r.jsx)(
            u.Z,
            g(h({}, k), {
                children: (e) => {
                    var t;
                    let { onClick: n } = e;
                    return (0, r.jsx)(s.z, {
                        onClick: n,
                        variant: 'expressive',
                        text: null != (t = null == m ? void 0 : m.expressiveButtonText) ? t : '',
                        icon: l.SrA
                    });
                }
            })
        );
    function j(e) {
        let n = null != P ? P : t === _.Si.TIER_1 ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN;
        return (0, r.jsx)(
            u.Z,
            g(h({}, k), {
                children: (o) => {
                    let { onClick: s } = o;
                    return (0, r.jsxs)(
                        l.gtL,
                        g(
                            h(
                                {
                                    disabled: M.disabled,
                                    onClick: s,
                                    innerClassName: f.premiumSubscribeButton,
                                    color: n,
                                    size: i,
                                    className: A,
                                    wrapperClassName: a()(
                                        {
                                            [f.tier2Gradient]: N && t === _.Si.TIER_2,
                                            [f.tier1Gradient]: N && t === _.Si.TIER_1
                                        },
                                        p
                                    ),
                                    buttonShineClassName: 'buttonShineClassName' in L ? L.buttonShineClassName : n === l.Ttl.BRAND_INVERTED ? f.brandShine : void 0,
                                    pauseAnimation: !x || T
                                },
                                L,
                                e
                            ),
                            {
                                children: [
                                    I &&
                                        (0, r.jsx)(l.SrA, {
                                            size: 'md',
                                            color: w,
                                            className: a()(f.premiumIcon, b)
                                        }),
                                    (0, r.jsx)('span', {
                                        className: a()(f.buttonText, null == m ? void 0 : m.textClassName),
                                        children: M.buttonText
                                    })
                                ]
                            }
                        )
                    );
                }
            })
        );
    }
    return null != M.buttonTooltipText
        ? (0, r.jsx)(l.ua7, {
              text: M.buttonTooltipText,
              children: j
          })
        : j();
};
