var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = { topEmojisByGuildId: {} },
    u = l,
    c = {};
function d() {
    (u = l), (c = {});
}
function f(e) {
    let { guildId: n } = e;
    c[n] = !0;
}
function p(e) {
    let { guildId: n, topEmojisMetadata: r } = e;
    (u.topEmojisByGuildId[n] = r.map((e) => e.emojiId)), (c[n] = !1);
}
class h extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        u = null != e ? e : l;
    }
    getState() {
        return u;
    }
    getTopEmojiIdsByGuildId(e) {
        return u.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
        return c[e];
    }
}
s(h, 'displayName', 'TopEmojiStore'),
    s(h, 'persistKey', 'TopEmojiStore'),
    (n.Z = new h(o.Z, {
        LOGOUT: d,
        TOP_EMOJIS_FETCH: f,
        TOP_EMOJIS_FETCH_SUCCESS: p
    }));
