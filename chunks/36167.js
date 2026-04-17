"use strict";
n.d(t, { OD: () => l, my: () => u, xq: () => o }), n(323874), n(14289), n(35956);
var r = n(835245),
    i = n(562465),
    s = n(998218),
    a = n(652215);
function o(e, t, n) {
    let o = new URL(s.A.makeUrl(a.BVt.BILLING_LOGIN_HANDOFF, !1)),
        l = (0, r.A)();
    return (
        o.searchParams.append("handoff_key", l),
        o.searchParams.append("redirect_to", e),
        i.Bo.post({ url: a.Rsh.HANDOFF, body: { key: l }, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => t(e, o),
            (t) => n(t, e),
        )
    );
}
function l(e, t, n) {
    let { planId: r, isGift: i, loadId: s, paymentMethodType: l, deepLinkType: u, usePresetOffer: c, flowType: d } = e;
    return o(a.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(r, i, s, l, u, c, d), t, n);
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
