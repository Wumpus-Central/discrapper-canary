t.d(n, {
    Q: () => s,
    T: () => d,
});
var i = t(442837),
    r = t(592125),
    a = t(700785),
    l = t(924301),
    o = t(765305),
    c = t(981631);
function s(e, n) {
    return a.Uu(c.Plq.VIEW_CHANNEL, e) || n === o.WX.EXTERNAL;
}
function d(e, n) {
    return (0, i.e7)([r.Z, l.ZP], () => {
        let t = r.Z.getChannel(e),
            i = l.ZP.getGuildScheduledEvent(n);
        return s(t, null == i ? void 0 : i.entity_type);
    }, [e, n]);
}
