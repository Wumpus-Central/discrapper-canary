"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(860689);
let a = {};
class o extends r.Ay.Store {
    static displayName = "AuthInviteStore";
    getGuild(e) {
        return a[e];
    }
}
let l = new o(i.h, {
    AUTH_INVITE_UPDATE: function (e) {
        let { invite: t } = e,
            n = t.guild;
        if (null == n) return !1;
        a[n.id] = (0, s.DY)(n);
    },
});
