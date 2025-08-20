t.d(n, {
    Q: () => s,
    T: () => d,
});
var r = t(442837),
    i = t(592125),
    a = t(700785),
    l = t(924301),
    o = t(765305),
    c = t(981631);
function s(e, n) {
    return a.Uu(c.Plq.VIEW_CHANNEL, e) || n === o.WX.EXTERNAL;
}
function d(e, n) {
    return (0, r.e7)([i.Z, l.ZP], () => {
        let t = i.Z.getChannel(e),
            r = l.ZP.getGuildScheduledEvent(n);
        return s(t, null == r ? void 0 : r.entity_type);
    }, [e, n]);
}
