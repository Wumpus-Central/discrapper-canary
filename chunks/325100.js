n.d(t, { uH: () => u }), n(35282);
var r = n(593473),
    i = n(843611),
    a = n(873546),
    o = n(833549),
    s = n(981631);
let l = (e) => {
        let { location: t } = e,
            n = c({ location: t });
        return a.tq && a.bO && n;
    },
    c = (e) => {
        let { location: t } = e,
            { enabled: n } = o.E.useConfig({ location: t });
        return n;
    },
    u = (e) => {
        let { location: t } = e,
            { search: n, pathname: a } = (0, i.TH)(),
            o = l({ location: t });
        if (a.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION)) return !1;
        let { deep_link_type: c } = (0, r.parse)(n);
        return c === s.MUe.APPLE_PAYMENT_LINK && o;
    };
