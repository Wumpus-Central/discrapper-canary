l.d(i, {
    U: () => r,
    V: () => s
});
var t,
    n = l(981631),
    r = (((t = {}).INELIGIBLE = 'ineligible'), (t.DISQUALIFIED = 'disqualified'), (t.ELIGIBLE_DISABLED = 'eligible_disabled'), (t.ELIGIBLE_ENABLED = 'eligible_enabled'), t);
function s(e, i) {
    let l = e.hasFeature(n.oNc.VERIFIED),
        t = e.hasFeature(n.oNc.DISCOVERABLE);
    if (l) return t ? 'eligible_enabled' : 'eligible_disabled';
    if (t) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return i.sufficient ? 'eligible_disabled' : 'ineligible';
}
