"use strict";
n.d(t, { Ay: () => _, ek: () => f, vI: () => p });
var r = n(64700),
    i = n(353640),
    s = n(121894),
    a = n(311907),
    o = n(576705),
    l = n(309010),
    u = n(233993),
    c = n(505543);
let d = (0, i.v)((e) => ({ isOnStartStageScreen: !0 })),
    _ = d;
function f(e) {
    (0, s.r)(() => d.setState({ isOnStartStageScreen: e }));
}
function p(e) {
    let t = (0, a.bG)([l.A], () => l.A.getVoiceChannelId() === e.id),
        n = (0, a.bG)([o.A], () => o.A.can(u.QY, e), [e]),
        i = (0, c.A)(e.id),
        s = n && !i;
    r.useEffect(() => {
        t ? s || f(!1) : f(s);
    }, [t, s]);
}
