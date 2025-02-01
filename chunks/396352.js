n.d(t, { Z: () => p });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = { topEmojisByGuildId: {} },
    l = o,
    u = {};
function c() {
    (l = o), (u = {});
}
function d(e) {
    let { guildId: t } = e;
    u[t] = !0;
}
function f(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    (l.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (u[t] = !1);
}
class _ extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        l = null != e ? e : o;
    }
    getState() {
        return l;
    }
    getTopEmojiIdsByGuildId(e) {
        return l.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
        return u[e];
    }
}
s(_, 'displayName', 'TopEmojiStore'), s(_, 'persistKey', 'TopEmojiStore');
let p = new _(a.Z, {
    LOGOUT: c,
    TOP_EMOJIS_FETCH: d,
    TOP_EMOJIS_FETCH_SUCCESS: f
});
