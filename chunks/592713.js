"use strict";
n.d(t, { A: () => f });
var r = n(73153),
    i = n(439372),
    a = n(696451),
    s = n(287809),
    o = n(316031);
let l = 1e4,
    u = null,
    c = () => {
        let e = a.Ay.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((t) => {
            let n = t,
                r = (0, a.DL)(n),
                i = (0, a.vg)(n),
                s = e[n];
            (0, o.n)(s) || d(r, i);
        });
    },
    d = (e, t) => {
        let n = a.Ay.getMember(e, t),
            i = s.default.getUser(t);
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
class _ extends i.A {
    _initialize() {
        u = setInterval(() => c(), l);
    }
    _terminate() {
        clearInterval(u);
    }
    clearGuildMemberTimeout = d;
}
let f = new _();
