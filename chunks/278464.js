n.d(t, { n: () => s });
var r = n(114858),
    i = n(370774),
    l = n(905423),
    o = n(981631);
function s() {
    let e = (0, l.Z)((e) => e.guildId),
        { pathname: t } = (0, r.TH)(),
        n = t.startsWith(o.Z5c.GUILD_DISCOVERY) || t.startsWith(o.Z5c.GLOBAL_DISCOVERY),
        s = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION('')),
        a = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        c = (0, i.D)();
    return null == e && !(n || s || a || c);
}
