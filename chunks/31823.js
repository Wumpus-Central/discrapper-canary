n.d(t, { V: () => u });
var l = n(17928),
    i = n(933958),
    r = n(627363),
    a = n(20015),
    s = n(650170),
    o = n(652215);
function u() {
    let e = (0, s.t4)((e) => e.applicationId),
        { data: t } = (0, r.YY)(e),
        n = null != t && (0, a.n)(t, o.gfo.EMBEDDED) && (0, a.n)(t, o.gfo.EMBEDDED_IAP);
    return {
        application: t,
        isEmbeddedIAP: n,
        activitySessionId: (0, l.bG)([i.Ay], () => {
            let t = Array.from(i.Ay.getSelfEmbeddedActivities().values()).find((t) => {
                let { applicationId: n } = t;
                return n === e;
            });
            return t?.compositeInstanceId;
        }),
    };
}
