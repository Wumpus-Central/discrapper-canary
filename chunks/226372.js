n.d(t, { Z: () => a });
var r = n(442837),
    i = n(592125),
    s = n(430824),
    l = n(944486),
    o = n(594174),
    c = n(537413);
function a(e) {
    let t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, r.e7)([l.Z, i.Z], () => i.Z.getChannel(l.Z.getVoiceChannelId())),
        a = null == n ? void 0 : n.getGuildId(),
        d = (0, r.e7)([s.Z], () => {
            var e;
            return null != a ? (null == (e = s.Z.getGuild(a)) ? void 0 : e.premiumTier) : null;
        });
    return (0, c.Z)(e, t, d);
}
