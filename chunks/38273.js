n.d(t, { G: () => f });
var r = n(70466),
    i = n(864218),
    a = n(474936);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = (e) => {
    var {
            subscriptionTier: t = null,
            hasActivePromotion: n = !1,
            useShorterCTA: o = !1,
            isPersistentCTA: l = !1,
            buttonTextOverride: d,
        } = e,
        f = u(e, ["subscriptionTier", "hasActivePromotion", "useShorterCTA", "isPersistentCTA", "buttonTextOverride"]);
    let p = {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: o,
            isPersistentCTA: l,
        },
        { buttonText: _, marketingSubscriptionTierSkuId: m } = (0, r.G)(p),
        { subscribeButtonProps: h } = (0, i.F)(
            c(s({}, f), {
                subscriptionTier: m,
                buttonTextOverride: null != d ? d : _,
            }),
        );
    return {
        subscribeButtonProps: h,
        subscriptionTier: m === a.Si.NONE ? null : m,
    };
};
