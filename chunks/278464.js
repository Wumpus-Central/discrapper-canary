n.d(t, { n: () => s });
var r = n(828700),
    i = n(370774),
    l = n(365113),
    a = n(905423),
    o = n(981631);
function s() {
    let e = (0, a.Z)((e) => e.guildId),
        { pathname: t } = (0, r.TH)(),
        n = t.startsWith(o.Z5c.GUILD_DISCOVERY) || t.startsWith(o.Z5c.GLOBAL_DISCOVERY),
        s = t.startsWith(o.Z5c.GUILD_MEMBER_VERIFICATION("")),
        c = (0, i.D)(),
        u =
            l.o.useConfig({ location: "guildsbar" }).dmsTab &&
            t.startsWith(o.Z5c.CHANNEL(o.ME)) &&
            t !== o.Z5c.CHANNEL(o.ME) &&
            t !== o.Z5c.ME_ACTIVITY;
    return null == e && !(n || s || c) && !u;
}
