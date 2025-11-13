n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(159691),
    a = n(648613),
    o = n(864218);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = function (e) {
    var {
            subscriptionTier: t,
            onClick: n,
            postSuccessGuild: s,
            onSubscribeModalClose: c,
            premiumModalAnalyticsLocation: f,
            applicationId: _,
            confirmationFooter: p,
            buttonTextOverride: h,
            defaultTextOverride: m,
            iconOverride: g,
            variantOverride: E,
        } = e,
        b = d(e, [
            "subscriptionTier",
            "onClick",
            "postSuccessGuild",
            "onSubscribeModalClose",
            "premiumModalAnalyticsLocation",
            "applicationId",
            "confirmationFooter",
            "buttonTextOverride",
            "defaultTextOverride",
            "iconOverride",
            "variantOverride",
        ]);
    let y = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: s,
            onSubscribeModalClose: c,
            premiumModalAnalyticsLocation: f,
            applicationId: _,
            confirmationFooter: p,
        },
        { subscribeButtonProps: O } = (0, o.F)({
            subscriptionTier: t,
            buttonTextOverride: h,
            defaultTextOverride: m,
            iconOverride: g,
            variantOverride: E,
        });
    return (0, r.jsx)(
        a.Z,
        u(l({}, y), {
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(i.zxk, l({ onClick: t }, O, b));
            },
        }),
    );
};
