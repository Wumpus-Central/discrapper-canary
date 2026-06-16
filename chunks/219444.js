n.d(t, { V: () => l });
var i = n(652215);
function l(e) {
    if (e?.id == null) return !1;
    let t = e.features,
        n = t.has(i.GuildFeatures.CREATOR_MONETIZABLE) || t.has(i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        l = t.has(i.GuildFeatures.COMMUNITY);
    return (n && l) || t.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
