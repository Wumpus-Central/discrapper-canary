n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(451478),
    c = n(648613),
    u = n(433390),
    d = n(474936),
    f = n(163882);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let b = function (e) {
    var { subscriptionTier: t, onClick: n, size: i, className: _, textOptions: h, iconClassName: E, postSuccessGuild: b, onSubscribeModalClose: y, premiumModalAnalyticsLocation: O, showIcon: v = !0, disableShine: I, applicationId: T, shinyButtonClassName: S, showGradient: A = !1, confirmationFooter: N, paymentModalBanner: C, color: R, iconColor: P = 'currentColor' } = e,
        w = g(e, ['subscriptionTier', 'onClick', 'size', 'className', 'textOptions', 'iconClassName', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'showIcon', 'disableShine', 'applicationId', 'shinyButtonClassName', 'showGradient', 'confirmationFooter', 'paymentModalBanner', 'color', 'iconColor']);
    let D = (0, o.e7)([l.Z], () => l.Z.isFocused()),
        L = (0, u.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == h ? void 0 : h.textOverride,
            defaultTextOverride: null == h ? void 0 : h.subscribeText
        }),
        x = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: b,
            onSubscribeModalClose: y,
            premiumModalAnalyticsLocation: O,
            applicationId: T,
            confirmationFooter: N,
            paymentModalBanner: C
        };
    function k(e) {
        let n = null != R ? R : t === d.Si.TIER_1 ? s.zxk.Colors.PRIMARY : s.zxk.Colors.GREEN;
        return (0, r.jsx)(
            c.Z,
            m(p({}, x), {
                children: (o) => {
                    let { onClick: l } = o;
                    return (0, r.jsxs)(
                        s.gtL,
                        m(
                            p(
                                {
                                    disabled: L.disabled,
                                    onClick: l,
                                    innerClassName: f.premiumSubscribeButton,
                                    color: n,
                                    size: i,
                                    className: S,
                                    wrapperClassName: a()(
                                        {
                                            [f.tier2Gradient]: A && t === d.Si.TIER_2,
                                            [f.tier1Gradient]: A && t === d.Si.TIER_1
                                        },
                                        _
                                    ),
                                    buttonShineClassName: 'buttonShineClassName' in w ? w.buttonShineClassName : n === s.Ttl.BRAND_INVERTED ? f.brandShine : void 0,
                                    pauseAnimation: !D || I
                                },
                                w,
                                e
                            ),
                            {
                                children: [
                                    v &&
                                        (0, r.jsx)(s.SrA, {
                                            size: 'md',
                                            color: P,
                                            className: a()(f.premiumIcon, E)
                                        }),
                                    (0, r.jsx)('span', {
                                        className: a()(f.buttonText, null == h ? void 0 : h.textClassName),
                                        children: L.buttonText
                                    })
                                ]
                            }
                        )
                    );
                }
            })
        );
    }
    return null != L.buttonTooltipText
        ? (0, r.jsx)(s.ua7, {
              text: L.buttonTooltipText,
              children: k
          })
        : k();
};
