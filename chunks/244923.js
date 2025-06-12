n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(366939),
    o = n(853872),
    s = n(74538),
    l = n(212895),
    c = n(296848);
let u = function (e) {
    let { activeSubscription: t, onNext: n, isSubmitting: u, paymentSourceId: d, buttonLabel: _, analyticsLocations: f } = e,
        p = async () => {
            let e = o.Z.getPaymentSource(d);
            null != e && (await (0, l.i1)(d, (0, c.yb)(t)), await a.tq(t, e, t.currency, (0, s.UX)(t.items, t.currency, t.paymentSourceId), f), n());
        };
    return (0, r.jsx)(i.zxk, {
        'data-testid': 'purchase',
        onClick: p,
        color: i.zxk.Colors.GREEN,
        submitting: u,
        children: _
    });
};
