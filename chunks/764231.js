M.d(E, { T: () => t }), M(439174), M(878784);
var c = M(202541),
    a = M(375708);
function t(_, E) {
    switch (_) {
        case c.Ac.PREMIUM_TENURE_1_MONTH:
        case c.Ac.PREMIUM_TENURE_3_MONTH:
        case c.Ac.PREMIUM_TENURE_6_MONTH:
            return a.intl.formatToPlainString(a.t.erUSmA, { months: E });
        case c.Ac.PREMIUM_TENURE_12_MONTH:
        case c.Ac.PREMIUM_TENURE_24_MONTH:
        case c.Ac.PREMIUM_TENURE_36_MONTH:
        case c.Ac.PREMIUM_TENURE_60_MONTH:
        case c.Ac.PREMIUM_TENURE_72_MONTH:
            return a.intl.formatToPlainString(a.t.qOdyDe, { years: E / 12 });
        default:
            return null;
    }
}
