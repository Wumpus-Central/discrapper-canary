s.d(t, { A: () => c });
var r = s(311907),
    i = s(734057),
    n = s(71393),
    l = s(309010),
    a = s(287809),
    o = s(476697);
function c(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        s = (0, r.bG)([l.A, i.A], () => i.A.getChannel(l.A.getVoiceChannelId())),
        c = s?.getGuildId(),
        d = (0, r.bG)([n.A], () => (null != c ? n.A.getGuild(c)?.premiumTier : null));
    return (0, o.A)(e, t, d);
}
