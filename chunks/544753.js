n.d(t, { Z: () => s });
var r = n(442837),
    i = n(592125),
    l = n(430824),
    o = n(944486);
function s() {
    let e = (0, r.e7)([o.Z, i.Z], () => i.Z.getChannel(o.Z.getVoiceChannelId())),
        t = null == e ? void 0 : e.getGuildId();
    return (0, r.e7)([l.Z], () => {
        var e;
        return null != t ? (null == (e = l.Z.getGuild(t)) ? void 0 : e.premiumTier) : null;
    });
}
