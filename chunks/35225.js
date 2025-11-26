n.d(t, { V: () => u });
var r = n(819553),
    i = n(931261),
    a = n(164670),
    o = n(592125),
    s = n(984933),
    l = n(944486),
    c = n(176505);
function u(e) {
    var t;
    let n = l.Z.getChannelId(e),
        u = null == (t = s.ZP.getDefaultChannel(e)) ? void 0 : t.id;
    return (n !== c.oC.GUILD_ONBOARDING || r.ZP.shouldShowOnboarding(e)) && (n !== c.oC.GUILD_HOME || (0, i.s)(e))
        ? n === c.oC.GAME_SHOP && (0, a.vg)(e, "getChannelIdForGuildTransition")
            ? n
            : null == o.Z.getChannel(n)
              ? u
              : n
        : u;
}
