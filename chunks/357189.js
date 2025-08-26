n.d(t, { ko: () => c }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(772848),
    i = n(544891),
    o = n(591759),
    a = n(981631);
function s(e, t, n) {
    let s = new URL(o.Z.makeUrl(a.Z5c.BILLING_LOGIN_HANDOFF, !1)),
        l = (0, r.Z)();
    return (
        s.searchParams.append("handoff_key", l),
        s.searchParams.append("redirect_to", e),
        i.tn
            .post({
                url: a.ANM.HANDOFF,
                body: { key: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (e) => t(e, s),
                (e) => n(e),
            )
    );
}
function l(e, t, n) {
    let { planId: r, isGift: i, loadId: o, paymentMethodType: l, deepLinkType: c } = e;
    return s(a.Z5c.BILLING_STANDALONE_CHECKOUT_PAGE(r, i, o, l, c), t, n);
}
function c(e, t) {
    return l(
        e,
        (e, t) => {
            t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href);
        },
        t,
    );
}
