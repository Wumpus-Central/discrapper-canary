"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(323073);
let o = "GuildNSFWAgreeStore",
    l = {};
class u extends r.Ay.Store {
    static displayName = "GuildNSFWAgreeStore";
    initialize() {
        l = i.w.get(o) ?? l;
    }
    didAgree(e) {
        return !(null == e || (0, a.r9)()) && (l[e] || !1);
    }
}
let d = new u(s.h, {
    GUILD_NSFW_AGREE: function (e) {
        let { guildId: t } = e;
        (l[t] = !0), i.w.set(o, l);
    },
});
