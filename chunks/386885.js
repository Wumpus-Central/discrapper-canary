i.d(t, {
    U: () => r,
    V: () => s
});
var n,
    l = i(981631),
    r = (((n = {}).INELIGIBLE = 'ineligible'), (n.DISQUALIFIED = 'disqualified'), (n.ELIGIBLE_DISABLED = 'eligible_disabled'), (n.ELIGIBLE_ENABLED = 'eligible_enabled'), n);
function s(e, t) {
    let i = e.hasFeature(l.oNc.VERIFIED),
        n = e.hasFeature(l.oNc.DISCOVERABLE);
    if (i) return n ? 'eligible_enabled' : 'eligible_disabled';
    if (n) {
        let e = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date();
        return t.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return t.sufficient ? 'eligible_disabled' : 'ineligible';
}
