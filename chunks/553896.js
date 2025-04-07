n.d(t, { q: () => s }), n(291175), n(848572);
var r = n(474936),
    i = n(388032);
let s = (e, t) => {
    switch (e) {
        case r.VU.PREMIUM_TENURE_1_MONTH:
        case r.VU.PREMIUM_TENURE_3_MONTH:
        case r.VU.PREMIUM_TENURE_6_MONTH:
            return i.NW.formatToPlainString(i.t.erUSmJ, { months: t });
        case r.VU.PREMIUM_TENURE_12_MONTH:
        case r.VU.PREMIUM_TENURE_24_MONTH:
        case r.VU.PREMIUM_TENURE_36_MONTH:
        case r.VU.PREMIUM_TENURE_60_MONTH:
            return i.NW.formatToPlainString(i.t.IfYQVF, { years: t / 12 });
        case r.VU.PREMIUM_TENURE_72_MONTH:
            return i.NW.formatToPlainString(i.t.IfYQVF, { years: '6+' });
        default:
            return null;
    }
};
