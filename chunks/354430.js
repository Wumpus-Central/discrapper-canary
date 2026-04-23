"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = { topEmojisByGuildId: {} },
    a = s,
    o = {};
class l extends i.Ay.PersistedStore {
    static displayName = "TopEmojiStore";
    static persistKey = "TopEmojiStore";
    initialize(e) {
        a = e ?? s;
    }
    getState() {
        return a;
    }
    getTopEmojiIdsByGuildId(e) {
        return a.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
        return o[e];
    }
}
let d = new l(r.h, {
    LOGOUT: function () {
        (a = s), (o = {});
    },
    TOP_EMOJIS_FETCH: function (e) {
        let { guildId: t } = e;
        o[t] = !0;
    },
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        (a.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (o[t] = !1);
    },
});
