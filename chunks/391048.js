"use strict";
n.d(t, { ET: () => s, mf: () => r });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE", stripePaymentMethod: e });
}
function s() {
    i.h.wait(() => i.h.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" }));
}
