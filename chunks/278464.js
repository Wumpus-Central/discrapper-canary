n.d(t, { n: () => a });
var r = n(114858),
    i = n(370774),
    l = n(905423),
    o = n(981631);
function a() {
    let e = (0, l.Z)((e) => e.guildId),
        { pathname: t } = (0, r.TH)(),
        n = t.startsWith(o.Z5c.GUILD_DISCOVERY) || t.startsWith(o.Z5c.GLOBAL_DISCOVERY),
        a = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION('')),
        s = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')),
        c = (0, i.D)();
    return null == e && !(n || a || s || c);
}
