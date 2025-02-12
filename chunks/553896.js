t.d(a, { q: () => d }), t(291175), t(848572);
var n = t(474936),
    s = t(388032);
let d = (e, a) => {
    switch (e) {
        case n.JN.PREMIUM_TENURE_1_MONTH:
        case n.JN.PREMIUM_TENURE_3_MONTH:
        case n.JN.PREMIUM_TENURE_6_MONTH:
        case n.w7.PREMIUM_TENURE_1_MONTH:
        case n.w7.PREMIUM_TENURE_3_MONTH:
        case n.w7.PREMIUM_TENURE_6_MONTH:
            return s.intl.formatToPlainString(s.t.erUSmJ, { months: a });
        case n.JN.PREMIUM_TENURE_12_MONTH:
        case n.JN.PREMIUM_TENURE_24_MONTH:
        case n.JN.PREMIUM_TENURE_36_MONTH:
        case n.JN.PREMIUM_TENURE_60_MONTH:
        case n.w7.PREMIUM_TENURE_12_MONTH:
        case n.w7.PREMIUM_TENURE_24_MONTH:
        case n.w7.PREMIUM_TENURE_36_MONTH:
        case n.w7.PREMIUM_TENURE_60_MONTH:
            return s.intl.formatToPlainString(s.t.IfYQVF, { years: a / 12 });
        case n.JN.PREMIUM_TENURE_72_MONTH:
        case n.w7.PREMIUM_TENURE_72_MONTH:
            return s.intl.formatToPlainString(s.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
