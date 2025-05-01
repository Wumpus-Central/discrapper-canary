n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(366939),
    a = n(853872),
    s = n(74538),
    l = n(212895),
    c = n(296848);
let u = function (e) {
    let { activeSubscription: t, onNext: n, isSubmitting: u, paymentSourceId: d, buttonLabel: f, analyticsLocations: _ } = e,
        p = async () => {
            let e = a.Z.getPaymentSource(d);
            null != e && (await (0, l.i1)(d, (0, c.yb)(t)), await o.tq(t, e, t.currency, (0, s.UX)(t.items, t.currency, t.paymentSourceId), _), n());
        };
    return (0, r.jsx)(i.zxk, {
        'data-testid': 'purchase',
        onClick: p,
        color: i.zxk.Colors.GREEN,
        submitting: u,
        children: f
    });
};
