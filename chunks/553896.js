t.d(a, { q: () => n }), t(291175), t(848572);
var s = t(474936),
    d = t(388032);
let n = (e, a) => {
    switch (e) {
        case s.JN.PREMIUM_TENURE_1_MONTH:
        case s.JN.PREMIUM_TENURE_3_MONTH:
        case s.JN.PREMIUM_TENURE_6_MONTH:
        case s.w7.PREMIUM_TENURE_1_MONTH:
        case s.w7.PREMIUM_TENURE_3_MONTH:
        case s.w7.PREMIUM_TENURE_6_MONTH:
            return d.intl.formatToPlainString(d.t.erUSmJ, { months: a });
        case s.JN.PREMIUM_TENURE_12_MONTH:
        case s.JN.PREMIUM_TENURE_24_MONTH:
        case s.JN.PREMIUM_TENURE_36_MONTH:
        case s.JN.PREMIUM_TENURE_60_MONTH:
        case s.w7.PREMIUM_TENURE_12_MONTH:
        case s.w7.PREMIUM_TENURE_24_MONTH:
        case s.w7.PREMIUM_TENURE_36_MONTH:
        case s.w7.PREMIUM_TENURE_60_MONTH:
            return d.intl.formatToPlainString(d.t.IfYQVF, { years: a / 12 });
        case s.JN.PREMIUM_TENURE_72_MONTH:
        case s.w7.PREMIUM_TENURE_72_MONTH:
            return d.intl.formatToPlainString(d.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
