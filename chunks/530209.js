n.d(t, {
    D: () => d,
    e: () => u,
});
var l = n(311907),
    a = n(734057),
    i = n(488926),
    c = n(698441),
    r = n(988794),
    s = n(652215);
function d(e, t) {
    return i.MJ(s.xBc.VIEW_CHANNEL, e) || t === r.Ps.EXTERNAL;
}
function u(e, t) {
    return (0, l.bG)([a.A, c.Ay], () => {
        let n = a.A.getChannel(e),
            l = c.Ay.getGuildScheduledEvent(t);
        return d(n, null == l ? void 0 : l.entity_type);
    }, [e, t]);
}
