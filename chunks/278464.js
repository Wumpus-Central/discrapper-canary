n.d(t, { n: () => o });
var i = n(512969),
    l = n(905423),
    r = n(981631);
function o() {
    let e = (0, l.Z)((e) => e.guildId),
        { pathname: t } = (0, i.TH)(),
        n = t.startsWith(r.Z5c.GUILD_DISCOVERY) || t.startsWith(r.Z5c.GLOBAL_DISCOVERY),
        o = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION('')),
        a = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    return null == e && !(n || o || a);
}
