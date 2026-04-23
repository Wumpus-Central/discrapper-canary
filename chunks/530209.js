n.d(e, { D: () => c, e: () => d });
var l = n(17928),
    i = n(734057),
    s = n(488926),
    r = n(698441),
    a = n(988794),
    u = n(652215);
function c(t, e) {
    return s.MJ(u.xBc.VIEW_CHANNEL, t) || e === a.Ps.EXTERNAL;
}
function d(t, e) {
    return (0, l.bG)([i.A, r.Ay], () => {
        let n = i.A.getChannel(t),
            l = r.Ay.getGuildScheduledEvent(e);
        return c(n, l?.entity_type);
    }, [t, e]);
}
