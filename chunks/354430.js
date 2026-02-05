"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153);
let a = { topEmojisByGuildId: {} },
    s = a,
    o = {};
function l() {
    (s = a), (o = {});
}
function u(e) {
    let { guildId: t } = e;
    o[t] = !0;
}
function c(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    (s.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (o[t] = !1);
}
class d extends r.Ay.PersistedStore {
    static displayName = "TopEmojiStore";
    static persistKey = "TopEmojiStore";
    initialize(e) {
        s = e ?? a;
    }
    getState() {
        return s;
    }
    getTopEmojiIdsByGuildId(e) {
        return s.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
        return o[e];
    }
}
let _ = new d(i.h, { LOGOUT: l, TOP_EMOJIS_FETCH: u, TOP_EMOJIS_FETCH_SUCCESS: c });
