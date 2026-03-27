"use strict";
r.d(t, { I: () => l });
var n = r(334279),
    i = r(311907),
    s = r(166403),
    a = r(985018);
let l = (e) => {
    let t = (0, i.bG)([s.A], () => {
        let e = s.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return e === n.j.PREMIUM_TIER_2_3_DAY
        ? { isDisabled: t, disabledReason: t ? a.intl.string(a.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
};
