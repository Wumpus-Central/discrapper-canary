n.d(t, { n: () => o });
var r = n(512969),
    i = n(905423),
    l = n(981631);
function o() {
    let e = (0, i.Z)((e) => e.guildId),
        { pathname: t } = (0, r.TH)(),
        n = t.startsWith(l.Z5c.GUILD_DISCOVERY) || t.startsWith(l.Z5c.GLOBAL_DISCOVERY),
        o = t.startsWith(l.Z5c.GUILD_MEMBER_VERIFICATION('')),
        a = t.startsWith(l.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    return null == e && !(n || o || a);
}
