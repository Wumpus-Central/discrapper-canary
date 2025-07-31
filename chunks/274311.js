n.d(e, {
    Q: () => a,
    T: () => u
});
var r = n(442837),
    l = n(592125),
    i = n(700785),
    s = n(924301),
    c = n(765305),
    o = n(981631);
function a(t, e) {
    return i.Uu(o.Plq.VIEW_CHANNEL, t) || e === c.WX.EXTERNAL;
}
function u(t, e) {
    return (0, r.e7)(
        [l.Z, s.ZP],
        () => {
            let n = l.Z.getChannel(t),
                r = s.ZP.getGuildScheduledEvent(e);
            return a(n, null == r ? void 0 : r.entity_type);
        },
        [t, e]
    );
}
