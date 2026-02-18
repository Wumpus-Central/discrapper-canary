a.d(e, { I: () => i });
var n = a(334279),
    l = a(311907),
    r = a(166403),
    s = a(985018);
let i = (t) => {
    let e = (0, l.bG)([r.A], () => {
        let t = r.A.getPremiumSubscription();
        return t?.isPurchasedExternally === !0;
    });
    return t === n.j.PREMIUM_TIER_2_3_DAY
        ? { isDisabled: e, disabledReason: e ? s.intl.string(s.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
};
