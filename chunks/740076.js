n.d(t, { I: () => a });
var r = n(334279),
    i = n(17928),
    l = n(166403),
    s = n(105292);
function a(e) {
    let t = (0, i.bG)([l.A], () => {
        let e = l.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return r.I.ALL.has(e)
        ? { isDisabled: t, disabledReason: t ? s.intl.string(s.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
}
