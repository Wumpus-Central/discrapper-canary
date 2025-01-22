t.d(a, {
    q: function () {
        return r;
    }
}),
    t(291175),
    t(848572);
var s = t(474936),
    n = t(388032);
let r = (e, a) => {
    switch (e) {
        case s.JN.PREMIUM_TENURE_1_MONTH:
        case s.JN.PREMIUM_TENURE_3_MONTH:
        case s.JN.PREMIUM_TENURE_6_MONTH:
        case s.w7.PREMIUM_TENURE_1_MONTH:
        case s.w7.PREMIUM_TENURE_3_MONTH:
        case s.w7.PREMIUM_TENURE_6_MONTH:
            return n.intl.formatToPlainString(n.t.erUSmJ, { months: a });
        case s.JN.PREMIUM_TENURE_12_MONTH:
        case s.JN.PREMIUM_TENURE_24_MONTH:
        case s.JN.PREMIUM_TENURE_36_MONTH:
        case s.JN.PREMIUM_TENURE_60_MONTH:
        case s.w7.PREMIUM_TENURE_12_MONTH:
        case s.w7.PREMIUM_TENURE_24_MONTH:
        case s.w7.PREMIUM_TENURE_36_MONTH:
        case s.w7.PREMIUM_TENURE_60_MONTH:
            return n.intl.formatToPlainString(n.t.IfYQVF, { years: a / 12 });
        case s.JN.PREMIUM_TENURE_72_MONTH:
        case s.w7.PREMIUM_TENURE_72_MONTH:
            return n.intl.formatToPlainString(n.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
