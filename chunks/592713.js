"use strict";
n.d(t, { A: () => d });
var r = n(73153),
    i = n(439372),
    s = n(696451),
    a = n(287809),
    o = n(316031);
let l = null,
    u = (e, t) => {
        let n = s.Ay.getMember(e, t),
            i = a.default.getUser(t);
        if (null == n || null == i || (0, o.Z)(n)) return;
        let l = {
            ...n,
            guildId: e,
            nick: n.nick ?? i.username,
            avatar: n.avatar ?? void 0,
            avatarDecoration: null != n.avatarDecoration ? { ...n.avatarDecoration } : void 0,
            premiumSince: n.premiumSince ?? void 0,
            isPending: n.isPending ?? !1,
            user: { ...i, email: i.email ?? void 0, phone: i.phone ?? void 0 },
            communicationDisabledUntil: null,
        };
        r.h.dispatch({ type: "GUILD_MEMBER_UPDATE", ...l });
    };
class c extends i.A {
    _initialize() {
        l = setInterval(() => {
            let e;
            Object.keys((e = s.Ay.getCommunicationDisabledUserMap())).forEach((t) => {
                let n = (0, s.DL)(t),
                    r = (0, s.vg)(t),
                    i = e[t];
                (0, o.n)(i) || u(n, r);
            });
        }, 1e4);
    }
    _terminate() {
        clearInterval(l);
    }
    clearGuildMemberTimeout = u;
}
let d = new c();
