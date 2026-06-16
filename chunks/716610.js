t.d(i, { l: () => s, v: () => r });
var l,
    n = t(652215),
    r =
        (((l = {}).INELIGIBLE = "ineligible"),
        (l.DISQUALIFIED = "disqualified"),
        (l.ELIGIBLE_DISABLED = "eligible_disabled"),
        (l.ELIGIBLE_ENABLED = "eligible_enabled"),
        l);
function s(e, i) {
    let t = e.features.has(n.GuildFeatures.VERIFIED),
        l = e.features.has(n.GuildFeatures.DISCOVERABLE);
    if (t) return l ? "eligible_enabled" : "eligible_disabled";
    if (l) {
        let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date();
        return i.sufficient || e ? "eligible_enabled" : "disqualified";
    }
    return i.sufficient ? "eligible_disabled" : "ineligible";
}
