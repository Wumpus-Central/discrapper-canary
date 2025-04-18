n.d(t, { Z: () => a });
var r = n(442837),
    i = n(592125),
    l = n(430824),
    s = n(944486);
function a() {
    let e = (0, r.e7)([s.Z, i.Z], () => i.Z.getChannel(s.Z.getVoiceChannelId())),
        t = null == e ? void 0 : e.getGuildId();
    return (0, r.e7)([l.Z], () => {
        var e;
        return null != t ? (null == (e = l.Z.getGuild(t)) ? void 0 : e.premiumTier) : null;
    });
}
