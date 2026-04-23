"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(323073);
let o = "GuildNSFWAgreeStore",
    l = {};
class d extends i.Ay.Store {
    static displayName = "GuildNSFWAgreeStore";
    initialize() {
        l = r.w.get(o) ?? l;
    }
    didAgree(e) {
        return !(null == e || (0, a.r9)()) && (l[e] || !1);
    }
}
let _ = new d(s.h, {
    GUILD_NSFW_AGREE: function (e) {
        let { guildId: t } = e;
        (l[t] = !0), r.w.set(o, l);
    },
});
