n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(366939),
    o = n(853872),
    s = n(74538),
    l = n(212895),
    c = n(296848);
let u = function (e) {
    let {
            activeSubscription: t,
            onNext: n,
            isSubmitting: u,
            paymentSourceId: d,
            buttonLabel: f,
            analyticsLocations: _,
        } = e,
        p = async () => {
            let e = o.Z.getPaymentSource(d);
            null != e &&
                (await (0, l.i1)(d, (0, c.yb)(t)),
                await a.tq(t, e, t.currency, (0, s.UX)(t.items, t.currency, t.paymentSourceId), _),
                n());
        };
    return (0, r.jsx)(i.Button, {
        variant: "active",
        text: f,
        "data-testid": "purchase",
        onClick: p,
        loading: u,
    });
};
