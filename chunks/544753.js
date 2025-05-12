n.d(t, { Z: () => o });
var r = n(442837),
    l = n(592125),
    i = n(430824),
    s = n(944486);
function o() {
    let e = (0, r.e7)([s.Z, l.Z], () => l.Z.getChannel(s.Z.getVoiceChannelId())),
        t = null == e ? void 0 : e.getGuildId();
    return (0, r.e7)([i.Z], () => {
        var e;
        return null != t ? (null == (e = i.Z.getGuild(t)) ? void 0 : e.premiumTier) : null;
    });
}
