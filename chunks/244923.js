var i = r(200651);
r(192379);
var a = r(481060),
    o = r(366939),
    s = r(853872),
    l = r(212895),
    u = r(296848);
function c(e) {
    let { activeSubscription: n, onNext: r, isSubmitting: c, paymentSourceId: d, buttonLabel: f, analyticsLocations: p } = e,
        h = async () => {
            let e = s.Z.getPaymentSource(d);
            null != e && (await (0, l.i1)(d, (0, u.yb)(n)), await o.tq(n, e, n.currency, p), r());
        };
    return (0, i.jsx)(a.Button, {
        'data-testid': 'purchase',
        onClick: h,
        color: a.Button.Colors.GREEN,
        submitting: c,
        children: f
    });
}
n.Z = c;
