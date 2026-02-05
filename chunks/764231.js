n.d(t, { T: () => r }), n(439174), n(112848);
var i = n(788868),
    s = n(985018);
let r = (e, t) => {
    switch (e) {
        case i.Ac.PREMIUM_TENURE_1_MONTH:
        case i.Ac.PREMIUM_TENURE_3_MONTH:
        case i.Ac.PREMIUM_TENURE_6_MONTH:
            return s.intl.formatToPlainString(s.t.erUSmA, { months: t });
        case i.Ac.PREMIUM_TENURE_12_MONTH:
        case i.Ac.PREMIUM_TENURE_24_MONTH:
        case i.Ac.PREMIUM_TENURE_36_MONTH:
        case i.Ac.PREMIUM_TENURE_60_MONTH:
        case i.Ac.PREMIUM_TENURE_72_MONTH:
            return s.intl.formatToPlainString(s.t.qOdyDe, { years: t / 12 });
        default:
            return null;
    }
};
