s.d(t, { A: () => c });
var i = s(311907),
    r = s(734057),
    n = s(71393),
    l = s(309010),
    a = s(287809),
    o = s(476697);
function c(e) {
    let t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        s = (0, i.bG)([l.A, r.A], () => r.A.getChannel(l.A.getVoiceChannelId())),
        c = s?.getGuildId(),
        d = (0, i.bG)([n.A], () => (null != c ? n.A.getGuild(c)?.premiumTier : null));
    return (0, o.A)(e, t, d);
}
