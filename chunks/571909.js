"use strict";
n.d(t, { Ay: () => _, ek: () => h, vI: () => f });
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
function h(e) {
    (0, s.r)(() => d.setState({ isOnStartStageScreen: e }));
}
function f(e) {
    let t = (0, a.bG)([l.A], () => l.A.getVoiceChannelId() === e.id),
        n = (0, a.bG)([o.A], () => o.A.can(u.QY, e), [e]),
        r = (0, c.A)(e.id),
        s = n && !r;
    i.useEffect(() => {
        t ? s || h(!1) : h(s);
    }, [t, s]);
}
