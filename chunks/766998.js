n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(158032),
    s = n(295405),
    o = n(927578),
    l = n(83617),
    c = n(615396);
let u = function (e) {
    let {
            activeSubscription: t,
            onNext: n,
            isSubmitting: u,
            paymentSourceId: d,
            buttonLabel: f,
            analyticsLocations: p,
        } = e,
        _ = async () => {
            let e = s.A.getPaymentSource(d);
            null != e &&
                (await (0, l.c_)(d, (0, c.MP)(t)),
                await a.uK(t, e, t.currency, (0, o.UC)(t.items, t.currency, t.paymentSourceId), p),
                n());
        };
    return (0, r.jsx)(i.Button, {
        variant: "active",
        text: f,
        "data-testid": "purchase",
        onClick: _,
        loading: u,
    });
};
