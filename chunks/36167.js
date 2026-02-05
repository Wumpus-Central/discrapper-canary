"use strict";
n.d(t, { my: () => u }), n(323874), n(14289), n(35956);
var r = n(835245),
    i = n(562465),
    a = n(998218),
    s = n(652215);
function o(e, t, n) {
    let o = new URL(a.A.makeUrl(s.BVt.BILLING_LOGIN_HANDOFF, !1)),
        l = (0, r.A)();
    return (
        o.searchParams.append("handoff_key", l),
        o.searchParams.append("redirect_to", e),
        i.Bo.post({ url: s.Rsh.HANDOFF, body: { key: l }, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => t(e, o),
            (t) => n(t, e),
        )
    );
}
function l(e, t, n) {
    let { planId: r, isGift: i, loadId: a, paymentMethodType: l, deepLinkType: u, usePresetOffer: c } = e;
    return o(s.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(r, i, a, l, u, c), t, n);
}
function u(e, t) {
    return l(
        e,
        (e, t) => {
            t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href);
        },
        t,
    );
}
