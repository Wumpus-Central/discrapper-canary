t.d(i, {
    l: () => s,
    v: () => r,
});
var n,
    l = t(652215),
    r =
        (((n = {}).INELIGIBLE = "ineligible"),
        (n.DISQUALIFIED = "disqualified"),
        (n.ELIGIBLE_DISABLED = "eligible_disabled"),
        (n.ELIGIBLE_ENABLED = "eligible_enabled"),
        n);

function s(e, i) {
    let t = e.features.has(l.GuildFeatures.VERIFIED),
        n = e.features.has(l.GuildFeatures.DISCOVERABLE);
    if (t) return n ? "eligible_enabled" : "eligible_disabled";
    if (n) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? "eligible_enabled" : "disqualified";
    }
    return i.sufficient ? "eligible_disabled" : "ineligible";
}
