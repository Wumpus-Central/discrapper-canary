t.d(n, {
    Q: () => d,
    T: () => s,
});
var a = t(442837),
    i = t(592125),
    r = t(700785),
    l = t(924301),
    o = t(765305),
    c = t(981631);
function d(e, n) {
    return r.Uu(c.Plq.VIEW_CHANNEL, e) || n === o.WX.EXTERNAL;
}
function s(e, n) {
    return (0, a.e7)([i.Z, l.ZP], () => {
        let t = i.Z.getChannel(e),
            a = l.ZP.getGuildScheduledEvent(n);
        return d(t, null == a ? void 0 : a.entity_type);
    }, [e, n]);
}
