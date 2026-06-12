n.d(t, { OD: () => o, my: () => u, xq: () => s }), n(323874), n(14289), n(35956);
var l = n(835245),
    r = n(636537),
    i = n(998218),
    a = n(652215);
function s(e, t, n) {
    let s = new URL(i.A.makeUrl(a.BVt.BILLING_LOGIN_HANDOFF, !1)),
        o = (0, l.A)();
    return (
        s.searchParams.append("handoff_key", o),
        s.searchParams.append("redirect_to", e),
        r.Bo.post({ url: a.Rsh.HANDOFF, body: { key: o }, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => t(e, s),
            (t) => n(t, e),
        )
    );
}
function o(e, t, n) {
    let { planId: l, isGift: r, loadId: i, paymentMethodType: o, deepLinkType: u, usePresetOffer: c, flowType: d } = e;
    return s(a.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(l, r, i, o, u, c, d), t, n);
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
