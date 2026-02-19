"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    s = n(931991),
    l = n(808728),
    r = n(71393),
    a = n(576705),
    o = n(652215);
function c(e, t) {
    return (0, i.bG)([r.A, l.Ay, a.A], () => {
        let n = r.A.getGuild(e);
        if (a.A.can(o.xBc.ADMINISTRATOR, n) || a.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let { channel: n } of l.Ay.getChannels(e)[l.vM])
            if (null == t || n.type === t) {
                let [e] = (0, s.p_)(n);
                if (a.A.can(e, n)) return !0;
            }
        return !1;
    }, [e, t]);
}
