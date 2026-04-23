n.d(t, { A: () => r });
var i = n(311907),
    l = n(73153);
let s = {};
class a extends i.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (s = e);
    }
    getState() {
        return s;
    }
    getCountForGuild(e) {
        return s[e];
    }
}
let r = new a(l.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        s = { ...s, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        s = {};
    },
});
