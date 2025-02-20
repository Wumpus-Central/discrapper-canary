n.d(t, { Z: () => c }), n(47120);
var r,
    i = n(442837),
    l = n(570140);
function o(e, t, n) {
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
let a = {};
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            a[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = a[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return a;
    }
}
o(s, 'displayName', 'GuildPromptsStore'), o(s, 'persistKey', 'GuildPromptsStore');
let c = new s(l.Z, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            r = a[n];
        return null == r ? ((a[n] = new Set()), a[n].add(t), !0) : !r.has(t) && (r.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != a[t.id] && !t.unavailable && (delete a[t.id], !0);
    }
});
