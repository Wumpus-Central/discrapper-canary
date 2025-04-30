n.d(t, { Z: () => p });
var r,
    i = n(442837),
    o = n(570140);
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
let s = { topEmojisByGuildId: {} },
    l = s,
    c = {};
function u() {
    (l = s), (c = {});
}
function d(e) {
    let { guildId: t } = e;
    c[t] = !0;
}
function f(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    (l.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (c[t] = !1);
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = null != e ? e : s;
    }
    getState() {
        return l;
    }
    getTopEmojiIdsByGuildId(e) {
        return l.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
        return c[e];
    }
}
a(_, 'displayName', 'TopEmojiStore'), a(_, 'persistKey', 'TopEmojiStore');
let p = new _(o.Z, {
    LOGOUT: u,
    TOP_EMOJIS_FETCH: d,
    TOP_EMOJIS_FETCH_SUCCESS: f
});
