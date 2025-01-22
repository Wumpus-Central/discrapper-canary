r.d(n, {
    Ku: function () {
        return p;
    },
    MV: function () {
        return h;
    }
});
var i = r(192379),
    a = r(15729),
    o = r(731965),
    s = r(442837),
    l = r(496675),
    u = r(944486),
    c = r(146085),
    d = r(643632);
let f = (0, a.U)((e) => ({ isOnStartStageScreen: !0 }));
function p(e) {
    (0, o.j)(() => f.setState({ isOnStartStageScreen: e }));
}
function h(e) {
    let n = (0, s.e7)([u.Z], () => u.Z.getVoiceChannelId() === e.id),
        r = (0, s.e7)([l.Z], () => l.Z.can(c.yP, e), [e]),
        a = (0, d.Z)(e.id),
        o = r && !a;
    i.useEffect(() => {
        n ? !o && p(!1) : p(o);
    }, [n, o]);
}
n.ZP = f;
