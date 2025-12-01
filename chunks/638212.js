n.d(t, { Z: () => f });
var r = n(54381),
    i = n(740594),
    a = n(38273);
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
function f(e) {
    var {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: o,
            isPersistentCTA: l,
            buttonTextOverride: d,
            defaultTextOverride: f,
            iconOverride: p,
            variantOverride: _,
        } = e,
        m = u(e, [
            "subscriptionTier",
            "hasActivePromotion",
            "useShorterCTA",
            "isPersistentCTA",
            "buttonTextOverride",
            "defaultTextOverride",
            "iconOverride",
            "variantOverride",
        ]);
    let h = {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: o,
            isPersistentCTA: l,
            buttonTextOverride: d,
            defaultTextOverride: f,
            iconOverride: p,
            variantOverride: _,
        },
        { subscribeButtonProps: g, subscriptionTier: E } = (0, a.G)(h);
    return (0, r.jsx)(i.Z, c(s({}, m, g), { subscriptionTier: E }));
}
