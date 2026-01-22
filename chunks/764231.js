n.d(t, {
    T: () => a,
}),
    n(439174),
    n(112848);
var r = n(788868),
    i = n(985018);
let a = (e, t) => {
    switch (e) {
        case r.Ac.PREMIUM_TENURE_1_MONTH:
        case r.Ac.PREMIUM_TENURE_3_MONTH:
        case r.Ac.PREMIUM_TENURE_6_MONTH:
            return i.intl.formatToPlainString(i.t.erUSmA, {
                months: t,
            });
        case r.Ac.PREMIUM_TENURE_12_MONTH:
        case r.Ac.PREMIUM_TENURE_24_MONTH:
        case r.Ac.PREMIUM_TENURE_36_MONTH:
        case r.Ac.PREMIUM_TENURE_60_MONTH:
        case r.Ac.PREMIUM_TENURE_72_MONTH:
            return i.intl.formatToPlainString(i.t.qOdyDe, {
                years: t / 12,
            });
        default:
            return null;
    }
};
