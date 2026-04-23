"use strict";
n.d(t, { A: () => u });
var i = n(228366),
    r = n(439372),
    s = n(696451),
    a = n(287809),
    o = n(316031);
let l = null,
    d = (e, t) => {
        let n = s.Ay.getMember(e, t),
            r = a.default.getUser(t);
        if (null == n || null == r || (0, o.Z)(n)) return;
        let l = {
            ...n,
            guildId: e,
            nick: n.nick ?? r.username,
            avatar: n.avatar ?? void 0,
            avatarDecoration: null != n.avatarDecoration ? { ...n.avatarDecoration } : void 0,
            premiumSince: n.premiumSince ?? void 0,
            isPending: n.isPending ?? !1,
            user: { ...r, email: r.email ?? void 0, phone: r.phone ?? void 0 },
            communicationDisabledUntil: null,
        };
        i.h.dispatch({ type: "GUILD_MEMBER_UPDATE", ...l });
    };
class _ extends r.A {
    _initialize() {
        l = setInterval(() => {
            let e;
            Object.keys((e = s.Ay.getCommunicationDisabledUserMap())).forEach((t) => {
                let n = (0, s.DL)(t),
                    i = (0, s.vg)(t),
                    r = e[t];
                (0, o.n)(r) || d(n, i);
            });
        }, 1e4);
    }
    _terminate() {
        clearInterval(l);
    }
    clearGuildMemberTimeout = d;
}
let u = new _();
