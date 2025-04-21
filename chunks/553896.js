n.d(t, { q: () => s }), n(291175), n(848572);
var i = n(474936),
    r = n(388032);
let s = (e, t) => {
    switch (e) {
        case i.VU.PREMIUM_TENURE_1_MONTH:
        case i.VU.PREMIUM_TENURE_3_MONTH:
        case i.VU.PREMIUM_TENURE_6_MONTH:
            return r.intl.formatToPlainString(r.t.erUSmJ, { months: t });
        case i.VU.PREMIUM_TENURE_12_MONTH:
        case i.VU.PREMIUM_TENURE_24_MONTH:
        case i.VU.PREMIUM_TENURE_36_MONTH:
        case i.VU.PREMIUM_TENURE_60_MONTH:
            return r.intl.formatToPlainString(r.t.IfYQVF, { years: t / 12 });
        case i.VU.PREMIUM_TENURE_72_MONTH:
            return r.intl.formatToPlainString(r.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
