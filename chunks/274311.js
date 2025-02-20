n.d(t, {
    Q: () => u,
    T: () => a
});
var r = n(442837),
    l = n(592125),
    i = n(700785),
    s = n(924301),
    o = n(765305),
    c = n(981631);
function u(e, t) {
    return i.Uu(c.Plq.VIEW_CHANNEL, e) || t === o.WX.EXTERNAL;
}
function a(e, t) {
    return (0, r.e7)(
        [l.Z, s.ZP],
        () => {
            let n = l.Z.getChannel(e),
                r = s.ZP.getGuildScheduledEvent(t);
            return u(n, null == r ? void 0 : r.entity_type);
        },
        [e, t]
    );
}
