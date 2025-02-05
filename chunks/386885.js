n.d(i, {
    U: () => l,
    V: () => a
});
var t,
    r = n(981631),
    l = (((t = {}).INELIGIBLE = 'ineligible'), (t.DISQUALIFIED = 'disqualified'), (t.ELIGIBLE_DISABLED = 'eligible_disabled'), (t.ELIGIBLE_ENABLED = 'eligible_enabled'), t);
function a(e, i) {
    let n = e.hasFeature(r.oNc.VERIFIED),
        t = e.hasFeature(r.oNc.DISCOVERABLE);
    if (n) return t ? 'eligible_enabled' : 'eligible_disabled';
    if (t) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return i.sufficient ? 'eligible_disabled' : 'ineligible';
}
