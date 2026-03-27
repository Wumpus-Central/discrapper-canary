"use strict";
n.d(t, { h: () => _, s: () => d });
var r = n(64700),
    i = n(311907),
    s = n(361610),
    a = n(290863),
    o = n(977997),
    l = n(140547),
    u = n(652215);
let c = 45;
function d(e, t) {
    let n = (0, l.$j)({ guildId: e, location: "useSubscribeMembersForHangStatus" }).enableHangStatus,
        i = l.yT.useConfig({ location: "useSubscribeMembersForHangStatus" }).enabled;
    r.useEffect(() => {
        if (!n || !i || null == e || 0 === t.length || t.length >= c || Object.keys(o.A.getVoiceStates(e)).length >= c)
            return;
        let r = t.map((e) => e.user.id);
        return (
            (0, s.un)(e, r),
            () => {
                (0, s.NE)(e, r);
            }
        );
    }, [n, i, e, t]);
}
function _(e) {
    return (0, i.bG)([a.A], () => a.A.findActivity(e, (e) => e.type === u.$pd.HANG_STATUS), [e]);
}
