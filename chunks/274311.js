t.d(n, {
    Q: () => o,
    T: () => u,
});
var i = t(442837),
    l = t(592125),
    r = t(700785),
    a = t(924301),
    c = t(765305),
    s = t(981631);
function o(e, n) {
    return r.Uu(s.Plq.VIEW_CHANNEL, e) || n === c.WX.EXTERNAL;
}
function u(e, n) {
    return (0, i.e7)([l.Z, a.ZP], () => {
        let t = l.Z.getChannel(e),
            i = a.ZP.getGuildScheduledEvent(n);
        return o(t, null == i ? void 0 : i.entity_type);
    }, [e, n]);
}
