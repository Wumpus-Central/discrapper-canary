(n.d(t, { Z: () => c }), n(388685));
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {};
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            o[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = o[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return o;
    }
}
(a(s, 'displayName', 'GuildPromptsStore'), a(s, 'persistKey', 'GuildPromptsStore'));
let c = new s(l.Z, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            r = o[n];
        return null == r ? ((o[n] = new Set()), o[n].add(t), !0) : !r.has(t) && (r.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != o[t.id] && !t.unavailable && (delete o[t.id], !0);
    }
});
