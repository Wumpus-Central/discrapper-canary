n.d(t, { I: () => a });
var r = n(334279),
    i = n(17928),
    s = n(166403),
    l = n(375708);
function a(e) {
    let t = (0, i.bG)([s.A], () => {
        let e = s.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return r.I.ALL.has(e)
        ? { isDisabled: t, disabledReason: t ? l.intl.string(l.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
}
