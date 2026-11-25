var i = n(536637),
    s = n.n(i),
    l = n(855986),
    r = n(73153),
    a = n(661191);
let o = { lastSeenNewlyAddedEmojiIds: {} },
    c = o,
    u = {};
function d() {
    for (let e in u) c.lastSeenNewlyAddedEmojiIds[e] = u[e];
}
class m extends l.Ay.PersistedStore {
    static displayName = "NewlyAddedEmojiStore";
    static persistKey = "NewlyAddedEmojiStore";
    static migrations = [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let i = t[e];
                n[e] = { id: i, lastSeen: Date.now(), acknowledged: !1 };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        },
    ];
    initialize(e) {
        c = e ?? o;
    }
    getState() {
        return c;
    }
    getLastSeenEmojiByGuild(e) {
        return c.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || a.default.compare(t, n.id) > 0) return !0;
        {
            let e = s()(n.lastSeen);
            return s()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let f = new m(r.h, {
    LOGOUT: function () {
        ((c = o), (u = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = u[t] ?? c.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > a.default.compare(i.id, n)
            ? (u[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (u[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = u[t] ?? c.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > a.default.compare(i.id, n)) && (u[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: d,
    CLEAR_CACHES: function () {
        ((c = o), d());
    },
    CONNECTION_CLOSED: d,
});
n.d(t, {}, { A: f });
