n.d(t, { q: () => a }), n(291175), n(848572);
var r = n(474936),
    i = n(388032);
let a = (e, t) => {
    switch (e) {
        case r.VU.PREMIUM_TENURE_1_MONTH:
        case r.VU.PREMIUM_TENURE_3_MONTH:
        case r.VU.PREMIUM_TENURE_6_MONTH:
            return i.intl.formatToPlainString(i.t.erUSmA, { months: t });
        case r.VU.PREMIUM_TENURE_12_MONTH:
        case r.VU.PREMIUM_TENURE_24_MONTH:
        case r.VU.PREMIUM_TENURE_36_MONTH:
        case r.VU.PREMIUM_TENURE_60_MONTH:
        case r.VU.PREMIUM_TENURE_72_MONTH:
            return i.intl.formatToPlainString(i.t.qOdyDe, { years: t / 12 });
        default:
            return null;
    }
};
