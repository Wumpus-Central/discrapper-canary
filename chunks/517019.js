"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(323073);
let o = "GuildNSFWAgreeStore",
    l = {};
function u(e) {
    let { guildId: t } = e;
    (l[t] = !0), i.w.set(o, l);
}
class c extends r.Ay.Store {
    static displayName = "GuildNSFWAgreeStore";
    initialize() {
        l = i.w.get(o) ?? l;
    }
    didAgree(e) {
        return !(null == e || (0, s.r9)()) && (l[e] || !1);
    }
}
let d = new c(a.h, { GUILD_NSFW_AGREE: u });
