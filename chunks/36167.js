n.d(t, { OD: () => o, my: () => u, xq: () => s }), n(323874), n(14289), n(35956);
var l = n(132500),
    a = n(636537),
    i = n(998218),
    r = n(652215);
function s(e, t, n) {
    let s = new URL(i.A.makeUrl(r.BVt.BILLING_LOGIN_HANDOFF, !1)),
        o = (0, l.A)();
    return (
        s.searchParams.append("handoff_key", o),
        s.searchParams.append("redirect_to", e),
        a.Bo.post({ url: r.Rsh.HANDOFF, body: { key: o }, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => t(e, s),
            (t) => n(t, e),
        )
    );
}
function o(e, t, n) {
    let { planId: l, isGift: a, loadId: i, paymentMethodType: o, deepLinkType: u, usePresetOffer: c, flowType: d } = e;
    return s(r.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(l, a, i, o, u, c, d), t, n);
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
