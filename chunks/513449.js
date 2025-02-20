n.d(t, {
    Ku: () => p,
    MV: () => _,
    ZP: () => f
});
var r = n(192379),
    i = n(15729),
    o = n(731965),
    a = n(442837),
    s = n(496675),
    l = n(944486),
    c = n(146085),
    u = n(643632);
let d = (0, i.U)((e) => ({ isOnStartStageScreen: !0 })),
    f = d;
function p(e) {
    (0, o.j)(() => d.setState({ isOnStartStageScreen: e }));
}
function _(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
        n = (0, a.e7)([s.Z], () => s.Z.can(c.yP, e), [e]),
        i = (0, u.Z)(e.id),
        o = n && !i;
    r.useEffect(() => {
        t ? o || p(!1) : p(o);
    }, [t, o]);
}
