r.d(e, { T: () => a }), r(439174), r(112848);
var s = r(788868),
    _ = r(985018);
let a = (t, e) => {
    switch (t) {
        case s.Ac.PREMIUM_TENURE_1_MONTH:
        case s.Ac.PREMIUM_TENURE_3_MONTH:
        case s.Ac.PREMIUM_TENURE_6_MONTH:
            return _.intl.formatToPlainString(_.t.erUSmA, { months: e });
        case s.Ac.PREMIUM_TENURE_12_MONTH:
        case s.Ac.PREMIUM_TENURE_24_MONTH:
        case s.Ac.PREMIUM_TENURE_36_MONTH:
        case s.Ac.PREMIUM_TENURE_60_MONTH:
        case s.Ac.PREMIUM_TENURE_72_MONTH:
            return _.intl.formatToPlainString(_.t.qOdyDe, { years: e / 12 });
        default:
            return null;
    }
};
