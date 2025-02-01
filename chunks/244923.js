n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(366939),
    s = n(853872),
    o = n(212895),
    l = n(296848);
let u = function (e) {
    let { activeSubscription: t, onNext: n, isSubmitting: u, paymentSourceId: c, buttonLabel: d, analyticsLocations: f } = e,
        _ = async () => {
            let e = s.Z.getPaymentSource(c);
            null != e && (await (0, o.i1)(c, (0, l.yb)(t)), await a.tq(t, e, t.currency, f), n());
        };
    return (0, i.jsx)(r.zxk, {
        'data-testid': 'purchase',
        onClick: _,
        color: r.zxk.Colors.GREEN,
        submitting: u,
        children: d
    });
};
