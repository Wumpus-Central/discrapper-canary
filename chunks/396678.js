n.d(t, { Z: () => c });
var r = n(442837),
    i = n(592125),
    l = n(430824),
    s = n(944486),
    a = n(594174),
    o = n(537413);
function c(e) {
    let t = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, r.e7)([s.Z, i.Z], () => i.Z.getChannel(s.Z.getVoiceChannelId())),
        c = null == n ? void 0 : n.getGuildId(),
        d = (0, r.e7)([l.Z], () => {
            var e;
            return null != c ? (null == (e = l.Z.getGuild(c)) ? void 0 : e.premiumTier) : null;
        });
    return (0, o.Z)(e, t, d);
}
