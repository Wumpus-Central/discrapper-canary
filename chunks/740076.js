n.d(t, { I: () => l });
var r = n(334279),
    a = n(311907),
    i = n(166403),
    s = n(985018);
let l = (e) => {
    let t = (0, a.bG)([i.A], () => {
        let e = i.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return e === r.j.PREMIUM_TIER_2_3_DAY
        ? { isDisabled: t, disabledReason: t ? s.intl.string(s.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
};
