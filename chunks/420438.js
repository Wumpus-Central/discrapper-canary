n.d(t, { Z: () => c }), n(47120);
var i,
    l = n(442837),
    a = n(570140);
function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = {};
class o extends (i = l.ZP.PersistedStore) {
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
r(o, 'displayName', 'GuildPromptsStore'), r(o, 'persistKey', 'GuildPromptsStore');
let c = new o(a.Z, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = s[n];
        return null == i ? ((s[n] = new Set()), s[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != s[t.id] && !t.unavailable && (delete s[t.id], !0);
    }
});
