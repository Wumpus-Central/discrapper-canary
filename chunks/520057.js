"use strict";
n.d(t, { w: () => o });
var i = n(136722),
    s = n(311907),
    l = n(71393),
    r = n(576705),
    a = n(652215);
function o(e) {
    return (0, s.bG)([l.A, r.A], () => {
        let t = l.A.getGuild(e);
        if (null == t) return !1;
        let n = r.A.getGuildPermissions(t);
        return null != n && i.zy(n, a.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS);
    });
}
