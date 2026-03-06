"use strict";
n.d(t, { I: () => o });
var r = n(627968);
n(64700);
var i = n(813077),
    s = n(454666),
    a = n(156312);
function o() {
    let e = (0, i.wI)("StatefulCheckoutStoreCountryRow"),
        { storeCountryFromCheckoutContext: t, checkoutPaymentSources: n, paymentSourceId: o } = (0, a.P5)();
    if (!e || null == t) return null;
    let l = n.find((e) => e.id === o) ?? null,
        u = l?.relocationCountry ?? null;
    return (0, r.jsx)(s.s, { storeCountry: t, relocationCountry: u });
}
