n.d(i, {
    U: () => r,
    V: () => a
});
var t,
    l = n(981631),
    r = (((t = {}).INELIGIBLE = 'ineligible'), (t.DISQUALIFIED = 'disqualified'), (t.ELIGIBLE_DISABLED = 'eligible_disabled'), (t.ELIGIBLE_ENABLED = 'eligible_enabled'), t);
function a(e, i) {
    let n = e.hasFeature(l.oNc.VERIFIED),
        t = e.hasFeature(l.oNc.DISCOVERABLE);
    if (n) return t ? 'eligible_enabled' : 'eligible_disabled';
    if (t) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return i.sufficient ? 'eligible_disabled' : 'ineligible';
}
