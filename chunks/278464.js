n.d(t, { n: () => o });
var r = n(828700),
    i = n(370774),
    l = n(905423),
    a = n(981631);
function o() {
    let e = (0, l.Z)((e) => e.guildId),
        { pathname: t } = (0, r.TH)(),
        n = t.startsWith(a.Z5c.GUILD_DISCOVERY) || t.startsWith(a.Z5c.GLOBAL_DISCOVERY),
        o = t.startsWith(a.Z5c.GUILD_MEMBER_VERIFICATION("")),
        s = (0, i.D)();
    return null == e && !(n || o || s);
}
