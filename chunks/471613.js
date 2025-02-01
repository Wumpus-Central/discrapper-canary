n.d(t, { Z: () => g });
var i,
    r,
    l,
    s = n(442837),
    a = n(570140),
    o = n(40572),
    c = n(914010);
let d = {},
    u = {},
    m = 0;
class h extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isUploadingEmoji() {
        return m > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : 0;
    }
    getEmojis(e) {
        return u[e];
    }
}
(r = 'GuildSettingsEmojiStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = r);
let g = new h(a.Z, {
    EMOJI_DELETE: function (e) {
        let { guildId: t, emojiId: n } = e;
        u[t] = u[t].filter((e) => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: t, emojis: n } = e;
        u[t] = n.map((e) => new o.Z(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        u[t] = [];
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
        d[n] = (null !== (t = d[n]) && void 0 !== t ? t : 0) + 1;
    }
});
