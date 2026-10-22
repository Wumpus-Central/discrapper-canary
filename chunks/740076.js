n.d(t, { I: () => l });
var r = n(334279),
    i = n(17928),
    s = n(166403),
    a = n(105292);
function l(e) {
    let t = (0, i.bG)([s.A], () => {
        let e = s.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return r.I.ALL.has(e)
        ? { isDisabled: t, disabledReason: t ? a.intl.string(a.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
}
