n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(780605),
    a = n(481060),
    o = n(648613),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = function (e) {
    var { subscriptionTier: t, onClick: n, postSuccessGuild: l, onSubscribeModalClose: u, premiumModalAnalyticsLocation: _, applicationId: p, confirmationFooter: h, paymentModalBanner: m, text: g } = e,
        E = f(e, ['subscriptionTier', 'onClick', 'postSuccessGuild', 'onSubscribeModalClose', 'premiumModalAnalyticsLocation', 'applicationId', 'confirmationFooter', 'paymentModalBanner', 'text']);
    let b = {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: l,
        onSubscribeModalClose: u,
        premiumModalAnalyticsLocation: _,
        applicationId: p,
        confirmationFooter: h,
        paymentModalBanner: m
    };
    return (0, r.jsx)(
        o.Z,
        d(c({}, b), {
            children: (e) => {
                let { onClick: t } = e,
                    n = null != g ? g : s.intl.string(s.t['2pG5GR']),
                    { variant: o } = E,
                    l = f(E, ['variant']);
                return (0, r.jsx)(
                    i.Y,
                    c(
                        {
                            onClick: t,
                            text: n,
                            icon: a.SrA,
                            variant: o
                        },
                        l
                    )
                );
            }
        })
    );
};
