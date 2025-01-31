n.d(t, {
    Ku: () => _,
    MV: () => p,
    ZP: () => f
});
var i = n(192379),
    r = n(15729),
    a = n(731965),
    s = n(442837),
    o = n(496675),
    l = n(944486),
    u = n(146085),
    c = n(643632);
let d = (0, r.U)((e) => ({ isOnStartStageScreen: !0 })),
    f = d;
function _(e) {
    (0, a.j)(() => d.setState({ isOnStartStageScreen: e }));
}
function p(e) {
    let t = (0, s.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
        n = (0, s.e7)([o.Z], () => o.Z.can(u.yP, e), [e]),
        r = (0, c.Z)(e.id),
        a = n && !r;
    i.useEffect(() => {
        t ? a || _(!1) : _(a);
    }, [t, a]);
}
