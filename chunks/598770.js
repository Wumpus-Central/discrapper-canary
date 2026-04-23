"use strict";
n.d(t, { A: () => f });
var r = n(989349),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(661191);
let l = { lastSeenNewlyAddedEmojiIds: {} },
    u = l,
    c = {};
function d() {
    for (let e in c) u.lastSeenNewlyAddedEmojiIds[e] = c[e];
}
class _ extends s.Ay.PersistedStore {
    static displayName = "NewlyAddedEmojiStore";
    static persistKey = "NewlyAddedEmojiStore";
    static migrations = [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let r = t[e];
                n[e] = { id: r, lastSeen: Date.now(), acknowledged: !1 };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        },
    ];
    initialize(e) {
        u = e ?? l;
    }
    getState() {
        return u;
    }
    getLastSeenEmojiByGuild(e) {
        return u.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || o.default.compare(t, n.id) > 0) return !0;
        {
            let e = i()(n.lastSeen);
            return i()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let f = new _(a.h, {
    LOGOUT: function () {
        (u = l), (c = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            r = c[t] ?? u.lastSeenNewlyAddedEmojiIds[t];
        null == r || 0 > o.default.compare(r.id, n)
            ? (c[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (c[t] = { ...r, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            r = c[t] ?? u.lastSeenNewlyAddedEmojiIds[t];
        (null == r || 0 > o.default.compare(r.id, n)) && (c[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: d,
    CLEAR_CACHES: function () {
        (u = l), d();
    },
    CONNECTION_CLOSED: d,
});
