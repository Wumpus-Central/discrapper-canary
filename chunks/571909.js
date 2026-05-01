n.d(t, { Ay: () => E, ek: () => u, vI: () => A });
var i = n(64700),
    a = n(353640),
    r = n(121894),
    s = n(17928),
    l = n(576705),
    o = n(309010),
    d = n(233993),
    c = n(505543);
let _ = (0, a.v)((e) => ({ isOnStartStageScreen: !0 })),
    E = _;
function u(e) {
    (0, r.r)(() => _.setState({ isOnStartStageScreen: e }));
}
function A(e) {
    let t = (0, s.bG)([o.A], () => o.A.getVoiceChannelId() === e.id),
        n = (0, s.bG)([l.A], () => l.A.can(d.QY, e), [e]),
        a = (0, c.A)(e.id),
        r = n && !a;
    i.useEffect(() => {
        t ? r || u(!1) : u(r);
    }, [t, r]);
}
