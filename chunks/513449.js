n.d(t, {
    Ku: () => f,
    MV: () => p,
    ZP: () => _
});
var r = n(73800),
    i = n(97519),
    a = n(731965),
    o = n(442837),
    s = n(496675),
    l = n(944486),
    c = n(146085),
    u = n(643632);
let d = (0, i.U)((e) => ({ isOnStartStageScreen: !0 })),
    _ = d;
function f(e) {
    (0, a.j)(() => d.setState({ isOnStartStageScreen: e }));
}
function p(e) {
    let t = (0, o.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
        n = (0, o.e7)([s.Z], () => s.Z.can(c.yP, e), [e]),
        i = (0, u.Z)(e.id),
        a = n && !i;
    r.useEffect(() => {
        t ? a || f(!1) : f(a);
    }, [t, a]);
}
