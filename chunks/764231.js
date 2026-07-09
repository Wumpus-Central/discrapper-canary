"use strict";
n.d(t, { T: () => a }), n(439174), n(878784);
var i = n(202541),
    r = n(375708);
function a(e, t) {
    switch (e) {
        case i.Ac.PREMIUM_TENURE_1_MONTH:
        case i.Ac.PREMIUM_TENURE_3_MONTH:
        case i.Ac.PREMIUM_TENURE_6_MONTH:
            return r.intl.formatToPlainString(r.t.erUSmA, { months: t });
        case i.Ac.PREMIUM_TENURE_12_MONTH:
        case i.Ac.PREMIUM_TENURE_24_MONTH:
        case i.Ac.PREMIUM_TENURE_36_MONTH:
        case i.Ac.PREMIUM_TENURE_60_MONTH:
        case i.Ac.PREMIUM_TENURE_72_MONTH:
            return r.intl.formatToPlainString(r.t.qOdyDe, { years: t / 12 });
        default:
            return null;
    }
}
