n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153);
let l = { lastSeenInfos: {} },
    a = l;
class r extends i.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        a = e ?? l;
    }
    getState() {
        return a;
    }
    getGuildLastSeenInfo(e) {
        return a.lastSeenInfos[e] ?? null;
    }
}
let o = new r(s.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        a.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        a = l;
    },
});
