n.d(t, {
    U: () => l,
    V: () => o
});
var i,
    r = n(981631),
    l = (((i = {}).INELIGIBLE = 'ineligible'), (i.DISQUALIFIED = 'disqualified'), (i.ELIGIBLE_DISABLED = 'eligible_disabled'), (i.ELIGIBLE_ENABLED = 'eligible_enabled'), i);
function o(e, t) {
    let n = e.hasFeature(r.oNc.VERIFIED),
        i = e.hasFeature(r.oNc.DISCOVERABLE);
    if (n) return i ? 'eligible_enabled' : 'eligible_disabled';
    if (i) {
        let e = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date();
        return t.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return t.sufficient ? 'eligible_disabled' : 'ineligible';
}
