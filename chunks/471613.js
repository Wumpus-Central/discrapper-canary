n.d(t, { Z: () => g });
var r,
    i,
    s,
    a = n(442837),
    l = n(570140),
    o = n(40572),
    c = n(914010);
let d = {},
    u = {},
    m = 0;
class p extends (s = a.ZP.Store) {
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
(i = 'GuildSettingsEmojiStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i);
let g = new p(l.Z, {
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
