"use strict";
n.d(t, { r: () => s, w: () => a });
var r = n(562465),
    i = n(652215);
async function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await r.Bo.post({ url: i.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET, oldFormErrors: !0, rejectWithError: !0, ...e })
    ).body;
}
let a = async function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
        await r.Bo.post({
            url: i.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
            oldFormErrors: !0,
            rejectWithError: !0,
            failImmediatelyWhenRateLimited: !0,
            ...e,
        })
    ).body;
};
