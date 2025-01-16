n.d(t, {
    q: function () {
        return r;
    }
}),
    n(291175),
    n(848572);
var s = n(474936),
    a = n(388032);
let r = (e, t) => {
    switch (e) {
        case s.JN.PREMIUM_TENURE_1_MONTH:
        case s.JN.PREMIUM_TENURE_3_MONTH:
        case s.JN.PREMIUM_TENURE_6_MONTH:
        case s.w7.PREMIUM_TENURE_1_MONTH:
        case s.w7.PREMIUM_TENURE_3_MONTH:
        case s.w7.PREMIUM_TENURE_6_MONTH:
            return a.intl.formatToPlainString(a.t.erUSmJ, { months: t });
        case s.JN.PREMIUM_TENURE_12_MONTH:
        case s.JN.PREMIUM_TENURE_24_MONTH:
        case s.JN.PREMIUM_TENURE_36_MONTH:
        case s.JN.PREMIUM_TENURE_60_MONTH:
        case s.w7.PREMIUM_TENURE_12_MONTH:
        case s.w7.PREMIUM_TENURE_24_MONTH:
        case s.w7.PREMIUM_TENURE_36_MONTH:
        case s.w7.PREMIUM_TENURE_60_MONTH:
            return a.intl.formatToPlainString(a.t.IfYQVF, { years: t / 12 });
        case s.JN.PREMIUM_TENURE_72_MONTH:
        case s.w7.PREMIUM_TENURE_72_MONTH:
            return a.intl.formatToPlainString(a.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
