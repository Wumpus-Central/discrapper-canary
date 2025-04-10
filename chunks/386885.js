t.d(i, {
    U: () => r,
    V: () => a
});
var n,
    l = t(981631),
    r = (((n = {}).INELIGIBLE = 'ineligible'), (n.DISQUALIFIED = 'disqualified'), (n.ELIGIBLE_DISABLED = 'eligible_disabled'), (n.ELIGIBLE_ENABLED = 'eligible_enabled'), n);
function a(e, i) {
    let t = e.hasFeature(l.oNc.VERIFIED),
        n = e.hasFeature(l.oNc.DISCOVERABLE);
    if (t) return n ? 'eligible_enabled' : 'eligible_disabled';
    if (n) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return i.sufficient ? 'eligible_disabled' : 'ineligible';
}
