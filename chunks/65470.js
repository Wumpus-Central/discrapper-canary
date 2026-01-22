n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(194509),
    o = n(783420);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = (e) => {
    let {
            subscriptionTier: t,
            premiumModalAnalyticsLocation: n,
            giftMessage: l,
            onClick: u,
            buttonTextOverride: p,
        } = e,
        _ = f(e, ["subscriptionTier", "premiumModalAnalyticsLocation", "giftMessage", "onClick", "buttonTextOverride"]),
        h = {
            subscriptionTier: t,
            premiumModalAnalyticsLocation: n,
            giftMessage: l,
            onClick: u,
        };
    return (0, r.jsx)(
        o.A,
        d(
            c(
                {
                    isGift: !0,
                },
                h,
            ),
            {
                children: (e) => {
                    let { onClick: n } = e,
                        o = null != p ? p : (0, s.U)(t);
                    return (0, r.jsx)(
                        i.$nd,
                        d(
                            c(
                                {
                                    onClick: n,
                                    icon: a.okO,
                                },
                                _,
                            ),
                            {
                                text: o,
                            },
                        ),
                    );
                },
            },
        ),
    );
};
