n.d(t, {
    r: () => c,
    w: () => u,
});
var r = n(562465),
    i = n(615405),
    a = n(550238),
    s = n(652215);
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
                o(e, t, n[t]);
            });
    }
    return e;
}
async function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await r.Bo.post(
            l(
                {
                    url: s.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                },
                e,
            ),
        )
    ).body;
}
let u = async function () {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o =
            null != t
                ? t
                : (0, a.J)({
                      ipCountryCode: null != (e = i.A.ipCountryCode) ? e : "ALL",
                      location: "create_setup_intent_for_payment_elements",
                  }).countryPaymentMethods,
        c = o.length > 0 ? { regional_payment_source_types: o } : {};
    return (
        await r.Bo.post(
            l(
                {
                    url: s.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                    body: c,
                    failImmediatelyWhenRateLimited: !0,
                },
                n,
            ),
        )
    ).body;
};
