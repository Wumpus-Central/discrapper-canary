r.d(t, {
    A: () => m,
});
var n = r(627968);
r(64700);
var i = r(582754),
    l = r(421380),
    a = r(736653),
    s = r(234419),
    o = r(465794),
    c = r(145310),
    u = r(275403);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let m = (e) => {
    let {
            textOptions: t,
            subscriptionTier: r,
            hasActivePromotion: m = !1,
            isPersistentCTA: p = !1,
            useShorterCTA: g = !1,
            showGradient: x,
            confirmationFooter: C,
            color: f,
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, [
            "textOptions",
            "subscriptionTier",
            "hasActivePromotion",
            "isPersistentCTA",
            "useShorterCTA",
            "showGradient",
            "confirmationFooter",
            "color",
        ]),
        h = (0, a.Ay)(),
        { buttonText: v, marketingSubscriptionTierSkuId: j } = (0, c.s)({
            hasActivePromotion: m,
            subscriptionTier: r,
            useShorterCTA: g,
            isPersistentCTA: p,
        }),
        I = (0, s.V)(),
        y = null == I ? void 0 : I.subscription_trial,
        b = null != y && j === y.sku_id,
        P = null != f ? f : (0, i.Mw)(h) ? l.XD.BRAND_INVERTED : l.XD.BRAND;
    return (0, n.jsx)(
        o.A,
        d(
            {
                color: P,
                textOptions: d(
                    {
                        textOverride: v,
                        textClassName: b ? u.A : void 0,
                    },
                    t,
                ),
                onlyShineOnHover: !0,
                subscriptionTier: j,
                showGradient: x,
                confirmationFooter: C,
            },
            T,
        ),
    );
};
