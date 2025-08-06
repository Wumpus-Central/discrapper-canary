n.d(t, { Z: () => c }), n(388685);
var r,
    i = n(442837),
    l = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = {};
class o extends (r = i.ZP.PersistedStore) {
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
a(o, "displayName", "GuildPromptsStore"), a(o, "persistKey", "GuildPromptsStore");
let c = new o(l.Z, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            r = s[n];
        return null == r ? ((s[n] = new Set()), s[n].add(t), !0) : !r.has(t) && (r.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != s[t.id] && !t.unavailable && (delete s[t.id], !0);
    },
});
