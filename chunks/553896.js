t.d(a, { q: () => d }), t(291175), t(848572);
var s = t(474936),
    n = t(388032);
let d = (e, a) => {
    switch (e) {
        case s.VU.PREMIUM_TENURE_1_MONTH:
        case s.VU.PREMIUM_TENURE_3_MONTH:
        case s.VU.PREMIUM_TENURE_6_MONTH:
            return n.NW.formatToPlainString(n.t.erUSmJ, { months: a });
        case s.VU.PREMIUM_TENURE_12_MONTH:
        case s.VU.PREMIUM_TENURE_24_MONTH:
        case s.VU.PREMIUM_TENURE_36_MONTH:
        case s.VU.PREMIUM_TENURE_60_MONTH:
            return n.NW.formatToPlainString(n.t.IfYQVF, { years: a / 12 });
        case s.VU.PREMIUM_TENURE_72_MONTH:
            return n.NW.formatToPlainString(n.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
