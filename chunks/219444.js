n.d(t, { V: () => s });
var i = n(652215);
function s(e) {
    if (e?.id == null) return !1;
    let t = e.features,
        n = t.has(i.GuildFeatures.CREATOR_MONETIZABLE) || t.has(i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
        s = t.has(i.GuildFeatures.COMMUNITY);
    return (n && s) || t.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
