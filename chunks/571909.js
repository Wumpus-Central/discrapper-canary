n.d(t, { Ay: () => c, ek: () => u, vI: () => I });
var i = n(64700),
    r = n(353640),
    a = n(121894),
    s = n(17928),
    _ = n(576705),
    l = n(309010),
    o = n(233993),
    E = n(505543);
let d = (0, r.v)((e) => ({ isOnStartStageScreen: !0 })),
    c = d;
function u(e) {
    (0, a.r)(() => d.setState({ isOnStartStageScreen: e }));
}
function I(e) {
    let t = (0, s.bG)([l.A], () => l.A.getVoiceChannelId() === e.id),
        n = (0, s.bG)([_.A], () => _.A.can(o.QY, e), [e]),
        r = (0, E.A)(e.id),
        a = n && !r;
    i.useEffect(() => {
        t ? a || u(!1) : u(a);
    }, [t, a]);
}
