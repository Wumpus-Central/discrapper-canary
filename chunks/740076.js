r.d(t, { I: () => a });
var n = r(334279),
    i = r(17928),
    s = r(166403),
    l = r(375708);
function a(e) {
    let t = (0, i.bG)([s.A], () => {
        let e = s.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return n.I.ALL.has(e)
        ? { isDisabled: t, disabledReason: t ? l.intl.string(l.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
}
