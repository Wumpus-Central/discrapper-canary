n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(159691),
    a = n(481060),
    o = n(736519),
    s = n(648613);
function l(e, t, n) {
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
function c(e) {
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
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) => {
    var {
            subscriptionTier: t,
            premiumModalAnalyticsLocation: n,
            giftMessage: l,
            onClick: u,
            buttonTextOverride: p,
        } = e,
        _ = f(e, ["subscriptionTier", "premiumModalAnalyticsLocation", "giftMessage", "onClick", "buttonTextOverride"]);
    let m = {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: l,
        onClick: u,
    };
    return (0, r.jsx)(
        s.Z,
        d(c({ isGift: !0 }, m), {
            children: (e) => {
                let { onClick: n } = e,
                    s = null != p ? p : (0, o.L)(t);
                return (0, r.jsx)(
                    i.zxk,
                    d(
                        c(
                            {
                                onClick: n,
                                icon: a.OgN,
                            },
                            _,
                        ),
                        { text: s },
                    ),
                );
            },
        }),
    );
};
