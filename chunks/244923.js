n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(366939),
    a = n(853872),
    s = n(212895),
    l = n(296848);
let c = function (e) {
    let { activeSubscription: t, onNext: n, isSubmitting: c, paymentSourceId: u, buttonLabel: d, analyticsLocations: f } = e,
        _ = async () => {
            let e = a.Z.getPaymentSource(u);
            null != e && (await (0, s.i1)(u, (0, l.yb)(t)), await o.tq(t, e, t.currency, f), n());
        };
    return (0, r.jsx)(i.zxk, {
        'data-testid': 'purchase',
        onClick: _,
        color: i.zxk.Colors.GREEN,
        submitting: c,
        children: d
    });
};
