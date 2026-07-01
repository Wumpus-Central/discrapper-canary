"use strict";
n.d(t, { V: () => u });
var i = n(17928),
    r = n(933958),
    s = n(627363),
    a = n(20015),
    o = n(650170),
    l = n(652215);
function u() {
    let e = (0, o.t4)((e) => e.applicationId),
        { data: t } = (0, s.YY)(e),
        n = null != t && (0, a.n)(t, l.gfo.EMBEDDED) && (0, a.n)(t, l.gfo.EMBEDDED_IAP);
    return {
        application: t,
        isEmbeddedIAP: n,
        activitySessionId: (0, i.bG)([r.Ay], () => {
            let t = Array.from(r.Ay.getSelfEmbeddedActivities().values()).find((t) => {
                let { applicationId: n } = t;
                return n === e;
            });
            return t?.compositeInstanceId;
        }),
    };
}
