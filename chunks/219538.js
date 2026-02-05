"use strict";
n.d(t, { r: () => o, w: () => l });
var r = n(562465),
    i = n(615405),
    a = n(550238),
    s = n(652215);
async function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await r.Bo.post({ url: s.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET, oldFormErrors: !0, rejectWithError: !0, ...e })
    ).body;
}
let l = async function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n =
            e ??
            (0, a.J)({
                ipCountryCode: i.A.ipCountryCode ?? "ALL",
                location: "create_setup_intent_for_payment_elements",
            }).countryPaymentMethods,
        o = n.length > 0 ? { regional_payment_source_types: n } : {};
    return (
        await r.Bo.post({
            url: s.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
            oldFormErrors: !0,
            rejectWithError: !0,
            body: o,
            failImmediatelyWhenRateLimited: !0,
            ...t,
        })
    ).body;
};
