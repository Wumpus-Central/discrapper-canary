n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(582754),
    a = n(421380),
    s = n(736653),
    o = n(234419),
    l = n(465794),
    c = n(145310),
    u = n(275403);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let h = (e) => {
    let {
            textOptions: t,
            subscriptionTier: n,
            hasActivePromotion: d = !1,
            isPersistentCTA: _ = !1,
            useShorterCTA: h = !1,
            showGradient: m,
            confirmationFooter: g,
            color: E,
        } = e,
        b = p(e, [
            "textOptions",
            "subscriptionTier",
            "hasActivePromotion",
            "isPersistentCTA",
            "useShorterCTA",
            "showGradient",
            "confirmationFooter",
            "color",
        ]),
        y = (0, s.Ay)(),
        { buttonText: O, marketingSubscriptionTierSkuId: A } = (0, c.s)({
            hasActivePromotion: d,
            subscriptionTier: n,
            useShorterCTA: h,
            isPersistentCTA: _,
        }),
        v = (0, o.V)(),
        S = null == v ? void 0 : v.subscription_trial,
        I = null != S && A === S.sku_id,
        T = null != E ? E : (0, i.Mw)(y) ? a.XD.BRAND_INVERTED : a.XD.BRAND;
    return (0, r.jsx)(
        l.A,
        f(
            {
                color: T,
                textOptions: f(
                    {
                        textOverride: O,
                        textClassName: I ? u.A : void 0,
                    },
                    t,
                ),
                onlyShineOnHover: !0,
                subscriptionTier: A,
                showGradient: m,
                confirmationFooter: g,
            },
            b,
        ),
    );
};
