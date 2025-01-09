t.d(n, {
    U: function () {
        return r;
    },
    V: function () {
        return u;
    }
});
var i,
    r,
    l = t(981631);
function u(e, n) {
    let t = e.hasFeature(l.oNc.VERIFIED),
        i = e.hasFeature(l.oNc.DISCOVERABLE);
    if (t) return i ? 'eligible_enabled' : 'eligible_disabled';
    if (i) {
        let e = n.sufficientWithoutGracePeriod && null != n.gracePeriodEndDate && n.gracePeriodEndDate > new Date();
        return n.sufficient || e ? 'eligible_enabled' : 'disqualified';
    }
    return n.sufficient ? 'eligible_disabled' : 'ineligible';
}
((i = r || (r = {})).INELIGIBLE = 'ineligible'), (i.DISQUALIFIED = 'disqualified'), (i.ELIGIBLE_DISABLED = 'eligible_disabled'), (i.ELIGIBLE_ENABLED = 'eligible_enabled');
