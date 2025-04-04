n.d(t, { V: () => c });
var r = n(819553),
    i = n(931261),
    o = n(592125),
    a = n(984933),
    s = n(944486),
    l = n(176505);
function c(e) {
    var t;
    let n = s.Z.getChannelId(e),
        c = null == (t = a.ZP.getDefaultChannel(e)) ? void 0 : t.id;
    return (n !== l.oC.GUILD_ONBOARDING || r.ZP.shouldShowOnboarding(e)) && (n !== l.oC.GUILD_HOME || (0, i.s)(e)) && null != o.Z.getChannel(n) ? n : c;
}
