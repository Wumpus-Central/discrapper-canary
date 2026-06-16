"use strict";
n.d(t, { OD: () => o, my: () => u, xq: () => a }), n(323874), n(14289), n(35956);
var l = n(835245),
    i = n(636537),
    r = n(998218),
    s = n(652215);
function a(e, t, n) {
    let a = new URL(r.A.makeUrl(s.BVt.BILLING_LOGIN_HANDOFF, !1)),
        o = (0, l.A)();
    return (
        a.searchParams.append("handoff_key", o),
        a.searchParams.append("redirect_to", e),
        i.Bo.post({ url: s.Rsh.HANDOFF, body: { key: o }, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => t(e, a),
            (t) => n(t, e),
        )
    );
}
function o(e, t, n) {
    let { planId: l, isGift: i, loadId: r, paymentMethodType: o, deepLinkType: u, usePresetOffer: c, flowType: d } = e;
    return a(s.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(l, i, r, o, u, c, d), t, n);
}
function u(e, t) {
    return o(
        e,
        (e, t) => {
            t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href);
        },
        t,
    );
}
