"use strict";
n.d(t, { Eg: () => r, JN: () => a, kT: () => s });
var i = n(384684);
function r(e, t) {
    if (e?.roles == null || 0 === e.roles.length || null == t) return !1;
    let n = i.A.getSubscriptionRoles(t);
    return e.roles.some((e) => n.has(e));
}
function s(e) {
    if (e?.roles == null || 0 === e.roles.length || null == e.guildId) return !1;
    let t = i.A.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => t.has(e));
}
function a(e, t) {
    if (e?.roles == null || 0 === e.roles.length || null == e.guildId) return !1;
    if (s(e)) {
        let n = i.A.getUserSubscriptionRoles(e.guildId),
            r = e.roles.some((e) => n.has(e)),
            s = t === e.guildId && i.A.getUserIsAdmin(e.guildId);
        if (!(r || s)) return !0;
    }
    return !1;
}
