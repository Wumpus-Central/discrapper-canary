"use strict";
n.d(t, { Ay: () => _, ek: () => E, vI: () => A });
var i = n(64700),
    r = n(353640),
    a = n(121894),
    s = n(17928),
    l = n(576705),
    o = n(309010),
    d = n(233993),
    c = n(505543);
let u = (0, r.v)((e) => ({ isOnStartStageScreen: !0 })),
    _ = u;
function E(e) {
    (0, a.r)(() => u.setState({ isOnStartStageScreen: e }));
}
function A(e) {
    let t = (0, s.bG)([o.Ay], () => o.Ay.getVoiceChannelId() === e.id),
        n = (0, s.bG)([l.A], () => l.A.can(d.QY, e), [e]),
        r = (0, c.A)(e.id),
        a = n && !r;
    i.useEffect(() => {
        t ? a || E(!1) : E(a);
    }, [t, a]);
}
