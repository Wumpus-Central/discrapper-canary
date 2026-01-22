r.d(t, { A: () => o });
var n = r(311907),
    l = r(734057),
    s = r(71393),
    i = r(309010),
    a = r(287809),
    c = r(476697);
function o(e) {
    let t = (0, n.bG)([a.default], () => a.default.getCurrentUser()),
        r = (0, n.bG)([i.A, l.A], () => l.A.getChannel(i.A.getVoiceChannelId())),
        o = null == r ? void 0 : r.getGuildId(),
        d = (0, n.bG)([s.A], () => {
            var e;
            return null != o ? (null == (e = s.A.getGuild(o)) ? void 0 : e.premiumTier) : null;
        });
    return (0, c.A)(e, t, d);
}
