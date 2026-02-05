"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(860689);
let s = {};
function o(e) {
    let { invite: t } = e,
        n = t.guild;
    if (null == n) return !1;
    s[n.id] = (0, a.DY)(n);
}
class l extends r.Ay.Store {
    static displayName = "AuthInviteStore";
    getGuild(e) {
        return s[e];
    }
}
let u = new l(i.h, { AUTH_INVITE_UPDATE: o });
