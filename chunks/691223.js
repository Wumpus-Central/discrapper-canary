n.d(t, { A: () => p });
var i = n(635377),
    l = n.n(i),
    s = n(17928),
    a = n(228366),
    r = n(315069),
    o = n(889227);
class d extends r.A {
    id;
    name;
    managed;
    roles;
    requiredColons;
    user;
    animated;
    available;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.managed = e.managed),
            (this.roles = e.roles),
            (this.requiredColons = e.requiredColons),
            (this.user = new o.A(e.user)),
            (this.animated = e.animated),
            (this.available = e.available);
    }
}
var c = n(967198),
    u = n(927813);
let m = {},
    g = {},
    h = 0,
    x = new (l())({ max: 5, maxAge: u.A.Millis.HOUR });
class _ extends s.Ay.Store {
    static displayName = "GuildSettingsEmojiStore";
    initialize() {
        this.waitFor(c.A);
    }
    isUploadingEmoji() {
        return h > 0;
    }
    getEmojiRevision(e) {
        return m[e] ?? 0;
    }
    getEmojis(e) {
        return g[e];
    }
    getEmojiRawAsset(e) {
        return x.get(e);
    }
}
let p = new _(a.h, {
    EMOJI_DELETE: function (e) {
        let { guildId: t, emojiId: n } = e;
        g[t] = g[t].filter((e) => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: t, emojis: n } = e;
        g[t] = n.map((e) => new d(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        g[t] = [];
    },
    EMOJI_UPLOAD_START: function () {
        h++;
    },
    EMOJI_UPLOAD_STOP: function () {
        h--;
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function (e) {
        let { emojiId: t, userImage: n } = e;
        x.set(t, n);
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        m[t] = (m[t] ?? 0) + 1;
    },
});
