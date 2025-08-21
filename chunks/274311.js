n.d(t, {
    Q: () => s,
    T: () => u,
});
var i = n(442837),
    l = n(592125),
    r = n(700785),
    a = n(924301),
    c = n(765305),
    o = n(981631);
function s(e, t) {
    return r.Uu(o.Plq.VIEW_CHANNEL, e) || t === c.WX.EXTERNAL;
}
function u(e, t) {
    return (0, i.e7)([l.Z, a.ZP], () => {
        let n = l.Z.getChannel(e),
            i = a.ZP.getGuildScheduledEvent(t);
        return s(n, null == i ? void 0 : i.entity_type);
    }, [e, t]);
}
