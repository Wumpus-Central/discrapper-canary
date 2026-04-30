"use strict";
n.d(t, { Ay: () => _, ek: () => f, vI: () => h });
var i = n(64700),
    r = n(353640),
    s = n(121894),
    a = n(17928),
    o = n(576705),
    l = n(309010),
    u = n(233993),
    c = n(505543);
let d = (0, r.v)((e) => ({ isOnStartStageScreen: !0 })),
    _ = d;
function f(e) {
    (0, s.r)(() => d.setState({ isOnStartStageScreen: e }));
}
function h(e) {
    let t = (0, a.bG)([l.A], () => l.A.getVoiceChannelId() === e.id),
        n = (0, a.bG)([o.A], () => o.A.can(u.QY, e), [e]),
        r = (0, c.A)(e.id),
        s = n && !r;
    i.useEffect(() => {
        t ? s || f(!1) : f(s);
    }, [t, s]);
}
