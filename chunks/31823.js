n.d(t, { V: () => u });
var l = n(17928),
    r = n(933958),
    i = n(627363),
    a = n(20015),
    s = n(211159),
    o = n(652215);
let u = () => {
    let e = (0, s.t4)((e) => e.applicationId),
        { data: t } = (0, i.YY)(e),
        n = null != t && (0, a.n)(t, o.gfo.EMBEDDED) && (0, a.n)(t, o.gfo.EMBEDDED_IAP);
    return {
        application: t,
        isEmbeddedIAP: n,
        activitySessionId: (0, l.bG)([r.Ay], () => {
            let t = Array.from(r.Ay.getSelfEmbeddedActivities().values()).find((t) => {
                let { applicationId: n } = t;
                return n === e;
            });
            return t?.compositeInstanceId;
        }),
    };
};
