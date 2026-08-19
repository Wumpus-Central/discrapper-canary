"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let a = { topEmojisByGuildId: {} },
    s = a,
    l = {};
class o extends i.Ay.PersistedStore {
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
        return l[e];
    }
}
let d = new o(r.h, {
    LOGOUT: function () {
        (s = a), (l = {});
    },
    TOP_EMOJIS_FETCH: function (e) {
        let { guildId: t } = e;
        l[t] = !0;
    },
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        (s.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (l[t] = !1);
    },
});
