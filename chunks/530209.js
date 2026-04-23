n.d(e, { D: () => c, e: () => d });
var l = n(311907),
    i = n(734057),
    r = n(488926),
    s = n(698441),
    a = n(988794),
    u = n(652215);
function c(t, e) {
    return r.MJ(u.xBc.VIEW_CHANNEL, t) || e === a.Ps.EXTERNAL;
}
function d(t, e) {
    return (0, l.bG)([i.A, s.Ay], () => {
        let n = i.A.getChannel(t),
            l = s.Ay.getGuildScheduledEvent(e);
        return c(n, l?.entity_type);
    }, [t, e]);
}
