n.d(t, { Z: () => p });
var r,
    i,
    l,
    s = n(442837),
    a = n(570140),
    o = n(40572),
    c = n(914010);
let u = {},
    d = {},
    m = 0;
class g extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isUploadingEmoji() {
        return m > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = u[e]) ? t : 0;
    }
    getEmojis(e) {
        return d[e];
    }
}
(i = 'GuildSettingsEmojiStore'),
    (r = 'displayName') in g
        ? Object.defineProperty(g, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[r] = i);
let p = new g(a.Z, {
    EMOJI_DELETE: function (e) {
        let { guildId: t, emojiId: n } = e;
        d[t] = d[t].filter((e) => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: t, emojis: n } = e;
        d[t] = n.map((e) => new o.Z(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        d[t] = [];
    },
    EMOJI_UPLOAD_START: function () {
        m++;
    },
    EMOJI_UPLOAD_STOP: function () {
        m--;
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        var t;
        let { guildId: n } = e;
        u[n] = (null != (t = u[n]) ? t : 0) + 1;
    }
});
