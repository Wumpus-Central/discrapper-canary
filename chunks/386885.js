t.d(i, {
    U: () => l,
    V: () => u
});
var n,
    r = t(981631),
    l = (((n = {}).INELIGIBLE = 'ineligible'), (n.DISQUALIFIED = 'disqualified'), (n.ELIGIBLE_DISABLED = 'eligible_disabled'), (n.ELIGIBLE_ENABLED = 'eligible_enabled'), n);
function u(e, i) {
    let t = e.hasFeature(r.oNc.VERIFIED),
        n = e.hasFeature(r.oNc.DISCOVERABLE);
    if (t) return n ? 'eligible_enabled' : 'eligible_disabled';
    if (n) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return i.sufficient ? 'eligible_disabled' : 'ineligible';
}
