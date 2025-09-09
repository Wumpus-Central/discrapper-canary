n.d(t, { uH: () => c }), n(35282);
var r = n(593473),
    i = n(873546),
    a = n(833549),
    o = n(981631);
let s = (e) => {
        let { location: t } = e,
            n = l({ location: t });
        return i.tq && i.bO && n;
    },
    l = (e) => {
        let { location: t } = e,
            { enabled: n } = a.E.useConfig({ location: t });
        return n;
    },
    c = (e) => {
        let { location: t } = e,
            { deep_link_type: n } = (0, r.parse)(window.location.search),
            i = s({ location: t });
        return n === o.MUe.APPLE_PAYMENT_LINK && i;
    };
