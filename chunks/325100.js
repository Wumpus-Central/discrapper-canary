n.d(t, { uH: () => _ }), n(35282);
var r = n(593473),
    i = n(843611),
    a = n(873546),
    o = n(833549),
    s = n(981631);
n(474936);
let l = () => a.tq && a.bO,
    c = (e) => {
        let { location: t } = e,
            { enabled: n } = MobileApplePaymentLinkExperiment.getConfig({ location: t });
        return n;
    },
    u = (e) => {
        let { location: t } = e,
            n = d({ location: t });
        return l() && n;
    },
    d = (e) => {
        let { location: t } = e,
            { enabled: n } = o.E.useConfig({ location: t });
        return n;
    },
    f = (e, t, n) => !t.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === s.MUe.APPLE_PAYMENT_LINK && e,
    _ = (e) => {
        let { location: t } = e,
            { search: n, pathname: a } = (0, i.TH)(),
            o = u({ location: t }),
            { deep_link_type: s } = (0, r.parse)(n);
        return f(o, a, s);
    };
