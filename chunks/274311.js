n.d(e, {
    Q: () => c,
    T: () => o,
});
var l = n(442837),
    i = n(592125),
    r = n(700785),
    s = n(924301),
    a = n(765305),
    u = n(981631);
function c(t, e) {
    return r.Uu(u.Plq.VIEW_CHANNEL, t) || e === a.WX.EXTERNAL;
}
function o(t, e) {
    return (0, l.e7)([i.Z, s.ZP], () => {
        let n = i.Z.getChannel(t),
            l = s.ZP.getGuildScheduledEvent(e);
        return c(n, null == l ? void 0 : l.entity_type);
    }, [t, e]);
}
