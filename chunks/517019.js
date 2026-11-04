var i = n(855986),
    r = n(506774),
    a = n(73153),
    s = n(597306);
let l = "GuildNSFWAgreeStore",
    o = {};
class d extends i.Ay.Store {
    static displayName = "GuildNSFWAgreeStore";
    initialize() {
        o = r.w.get(l) ?? o;
    }
    didAgree(e) {
        return !(null == e || (0, s.r)()) && (o[e] || !1);
    }
}
let c = new d(a.h, {
    GUILD_NSFW_AGREE: function (e) {
        let { guildId: t } = e;
        ((o[t] = !0), r.w.set(l, o));
    },
});
n.d(t, {}, { A: c });
