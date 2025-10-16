n.d(t, { Z: () => i });
var r = n(981631);
function i(e) {
    let t = e.features.has(r.GuildFeatures.COMMUNITY);
    return (
        (!t && e.features.has(r.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)) ||
        (t && !e.features.has(r.GuildFeatures.RAID_ALERTS_DISABLED))
    );
}
