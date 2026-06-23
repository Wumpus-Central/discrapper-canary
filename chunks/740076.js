n.d(t, { I: () => s });
var r = n(334279),
    i = n(17928),
    a = n(166403),
    l = n(375708);
function s(e) {
    let t = (0, i.bG)([a.A], () => {
        let e = a.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0;
    });
    return r.I.ALL.has(e)
        ? { isDisabled: t, disabledReason: t ? l.intl.string(l.t.NbveHD) : null }
        : { isDisabled: !1, disabledReason: null };
}
