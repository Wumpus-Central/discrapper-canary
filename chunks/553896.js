s.d(a, { q: () => n }), s(291175), s(848572);
var t = s(474936),
    d = s(388032);
let n = (e, a) => {
    switch (e) {
        case t.JN.PREMIUM_TENURE_1_MONTH:
        case t.JN.PREMIUM_TENURE_3_MONTH:
        case t.JN.PREMIUM_TENURE_6_MONTH:
        case t.w7.PREMIUM_TENURE_1_MONTH:
        case t.w7.PREMIUM_TENURE_3_MONTH:
        case t.w7.PREMIUM_TENURE_6_MONTH:
            return d.intl.formatToPlainString(d.t.erUSmJ, { months: a });
        case t.JN.PREMIUM_TENURE_12_MONTH:
        case t.JN.PREMIUM_TENURE_24_MONTH:
        case t.JN.PREMIUM_TENURE_36_MONTH:
        case t.JN.PREMIUM_TENURE_60_MONTH:
        case t.w7.PREMIUM_TENURE_12_MONTH:
        case t.w7.PREMIUM_TENURE_24_MONTH:
        case t.w7.PREMIUM_TENURE_36_MONTH:
        case t.w7.PREMIUM_TENURE_60_MONTH:
            return d.intl.formatToPlainString(d.t.IfYQVF, { years: a / 12 });
        case t.JN.PREMIUM_TENURE_72_MONTH:
        case t.w7.PREMIUM_TENURE_72_MONTH:
            return d.intl.formatToPlainString(d.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
