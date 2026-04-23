n.d(t, { W: () => h });
var r = n(713125),
    i = n(473529),
    a = n(871123),
    l = n(734057),
    o = n(808728),
    s = n(309010),
    u = n(567761),
    d = n(652215),
    c = n(746080);
function h(e) {
    let t = s.A.getChannelId(e),
        n =
            o.Ay.getDefaultChannel(e)?.id ??
            (function (e) {
                if (e !== d.ME) return;
                let t = u.default.getPrivateChannelIds();
                return t.length > 0 ? t[0] : void 0;
            })(e);
    return (t !== c.VV.GUILD_ONBOARDING || r.Ay.shouldShowOnboarding(e)) && (t !== c.VV.GUILD_HOME || (0, i.K)(e))
        ? t === c.VV.GAME_SHOP && (0, a.Ye)(e)
            ? t
            : null == l.A.getChannel(t)
              ? n
              : t
        : n;
}
