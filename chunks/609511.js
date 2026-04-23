n.d(t, { A: () => r });
var i = n(311907),
    l = n(73153);
let s = {};
class a extends i.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            s[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = s[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return s;
    }
}
let r = new a(l.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = s[n];
        return null == i ? ((s[n] = new Set()), s[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != s[t.id] && !t.unavailable && (delete s[t.id], !0);
    },
});
