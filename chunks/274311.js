l.d(n, {
    Q: () => u,
    T: () => c
});
var e = l(442837),
    i = l(592125),
    s = l(700785),
    r = l(924301),
    o = l(765305),
    a = l(981631);
function u(t, n) {
    return s.Uu(a.Plq.VIEW_CHANNEL, t) || n === o.WX.EXTERNAL;
}
function c(t, n) {
    return (0, e.e7)(
        [i.Z, r.ZP],
        () => {
            let l = i.Z.getChannel(t),
                e = r.ZP.getGuildScheduledEvent(n);
            return u(l, null == e ? void 0 : e.entity_type);
        },
        [t, n]
    );
}
