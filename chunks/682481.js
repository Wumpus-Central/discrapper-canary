n.d(t, { y: () => c });
var l = n(627968);
n(64700);
var a = n(459357),
    i = n(834252),
    r = n(120700),
    s = n(944355),
    o = n(186460);
let u = new Set([r.C.ORB_CHECKOUT]);
function c(e) {
    let { children: t } = e,
        { unifiedCheckoutFlow: n } = (0, i.P5)(),
        { enabled: r } = (0, a.c)({ location: "CheckoutPaymentSelectContent" }),
        c = r && (null == n || !u.has(n));
    return (0, l.jsxs)(l.Fragment, { children: [t, c ? (0, l.jsx)(s.Z4, { className: o.K }) : null] });
}
