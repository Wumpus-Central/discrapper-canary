n.d(t, { I: () => s });
var a = n(334279),
    l = n(17928),
    i = n(166403),
    r = n(985018);
let s = (e) => {
    let t = (0, l.bG)([i.A], () => {
        let e = i.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return e === a.j.PREMIUM_TIER_2_3_DAY
        ? { isDisabled: t, disabledReason: t ? r.intl.string(r.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
};
