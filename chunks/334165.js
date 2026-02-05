n.d(t, { A: () => o });
var a = n(311907),
    s = n(73153);
let i = { lastSeenInfos: {} },
    l = i;
class r extends a.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        l = e ?? i;
    }
    getState() {
        return l;
    }
    getGuildLastSeenInfo(e) {
        return l.lastSeenInfos[e] ?? null;
    }
}
let o = new r(s.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        l.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        l = i;
    },
});
