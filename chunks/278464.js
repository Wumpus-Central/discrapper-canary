n.d(t, { n: () => s });
var r = n(843611),
    i = n(370774),
    l = n(365113),
    o = n(905423),
    a = n(981631);
function s() {
    let e = (0, o.Z)((e) => e.guildId),
        { pathname: t } = (0, r.TH)(),
        n = t.startsWith(a.Z5c.GUILD_DISCOVERY) || t.startsWith(a.Z5c.GLOBAL_DISCOVERY),
        s = t.startsWith(a.Z5c.GUILD_MEMBER_VERIFICATION("")),
        c = (0, i.D)(),
        u =
            l.o.useConfig({ location: "guildsbar" }).dmsTab &&
            t.startsWith(a.Z5c.CHANNEL(a.ME)) &&
            t !== a.Z5c.CHANNEL(a.ME) &&
            t !== a.Z5c.ME_ACTIVITY;
    return null == e && !(n || s || c) && !u;
}
