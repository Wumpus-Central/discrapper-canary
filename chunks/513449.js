n.d(t, {
    Ku: () => _,
    MV: () => p,
    ZP: () => f
});
var r = n(192379),
    i = n(290486),
    a = n(731965),
    o = n(442837),
    s = n(496675),
    l = n(944486),
    c = n(146085),
    u = n(643632);
let d = (0, i.U)((e) => ({ isOnStartStageScreen: !0 })),
    f = d;
function _(e) {
    (0, a.j)(() => d.setState({ isOnStartStageScreen: e }));
}
function p(e) {
    let t = (0, o.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
        n = (0, o.e7)([s.Z], () => s.Z.can(c.yP, e), [e]),
        i = (0, u.Z)(e.id),
        a = n && !i;
    r.useEffect(() => {
        t ? a || _(!1) : _(a);
    }, [t, a]);
}
