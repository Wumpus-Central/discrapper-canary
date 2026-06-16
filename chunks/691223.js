t.d(i, { A: () => O });
var n = t(635377),
    a = t.n(n),
    s = t(17928),
    r = t(228366),
    o = t(315069),
    l = t(889227);
class E extends o.A {
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
            (this.user = new l.A(e.user)),
            (this.animated = e.animated),
            (this.available = e.available);
    }
}
var d = t(967198),
    u = t(927813);
let _ = {},
    c = {},
    A = 0,
    m = new (a())({ max: 5, maxAge: u.A.Millis.HOUR });
class h extends s.Ay.Store {
    static displayName = "GuildSettingsEmojiStore";
    initialize() {
        this.waitFor(d.A);
    }
    isUploadingEmoji() {
        return A > 0;
    }
    getEmojiRevision(e) {
        return _[e] ?? 0;
    }
    getEmojis(e) {
        return c[e];
    }
    getEmojiRawAsset(e) {
        return m.get(e);
    }
}
let O = new h(r.h, {
    EMOJI_DELETE: function (e) {
        let { guildId: i, emojiId: t } = e;
        c[i] = c[i].filter((e) => e.id !== t);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: i, emojis: t } = e;
        c[i] = t.map((e) => new E(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: i } = e;
        c[i] = [];
    },
    EMOJI_UPLOAD_START: function () {
        A++;
    },
    EMOJI_UPLOAD_STOP: function () {
        A--;
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function (e) {
        let { emojiId: i, userImage: t } = e;
        m.set(i, t);
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: i } = e;
        _[i] = (_[i] ?? 0) + 1;
    },
});
