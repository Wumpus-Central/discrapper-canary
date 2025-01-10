var i = t(200651);
t(192379);
var r = t(481060),
    a = t(366939),
    l = t(853872),
    s = t(212895),
    o = t(296848);
n.Z = function (e) {
    let { activeSubscription: n, onNext: t, isSubmitting: c, paymentSourceId: u, buttonLabel: d, analyticsLocations: p } = e,
        f = async () => {
            let e = l.Z.getPaymentSource(u);
            null != e && (await (0, s.i1)(u, (0, o.yb)(n)), await a.tq(n, e, n.currency, p), t());
        };
    return (0, i.jsx)(r.Button, {
        'data-testid': 'purchase',
        onClick: f,
        color: r.Button.Colors.GREEN,
        submitting: c,
        children: d
    });
};
