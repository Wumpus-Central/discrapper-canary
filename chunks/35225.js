n.d(t, { V: () => u });
var r = n(265153),
    i = n(819553),
    a = n(931261),
    o = n(592125),
    s = n(984933),
    l = n(944486),
    c = n(176505);
function u(e) {
    var t;
    let n = l.Z.getChannelId(e),
        u = null == (t = s.ZP.getDefaultChannel(e)) ? void 0 : t.id,
        { enabled: d } = r.Z.getCurrentConfig({
            guildId: e,
            location: 'getChannelIdForGuildTransition'
        });
    return (n !== c.oC.GUILD_ONBOARDING || i.ZP.shouldShowOnboarding(e)) && (n !== c.oC.GUILD_HOME || (0, a.s)(e)) ? (null == o.Z.getChannel(n) ? u : n) : u;
}
