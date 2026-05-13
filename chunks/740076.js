a.d(t, { I: () => i });
var n = a(334279),
    r = a(17928),
    s = a(166403),
    l = a(375708);
let i = (e) => {
    let t = (0, r.bG)([s.A], () => {
        let e = s.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return n.I.ALL.has(e)
        ? { isDisabled: t, disabledReason: t ? l.intl.string(l.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
};
