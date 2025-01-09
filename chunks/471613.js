var i,
    r,
    l,
    s,
    a = n(442837),
    o = n(570140),
    c = n(40572),
    d = n(914010);
let u = {},
    m = {},
    h = 0;
class g extends (s = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isUploadingEmoji() {
        return h > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : 0;
    }
    getEmojis(e) {
        return m[e];
    }
}
(l = 'GuildSettingsEmojiStore'),
    (r = 'displayName') in (i = g)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new g(o.Z, {
        EMOJI_DELETE: function (e) {
            let { guildId: t, emojiId: n } = e;
            m[t] = m[t].filter((e) => e.id !== n);
        },
        EMOJI_FETCH_SUCCESS: function (e) {
            let { guildId: t, emojis: n } = e;
            m[t] = n.map((e) => new c.Z(e));
        },
        EMOJI_FETCH_FAILURE: function (e) {
            let { guildId: t } = e;
            m[t] = [];
        },
        EMOJI_UPLOAD_START: function () {
            h++;
        },
        EMOJI_UPLOAD_STOP: function () {
            h--;
        },
        GUILD_EMOJIS_UPDATE: function (e) {
            var t;
            let { guildId: n } = e;
            u[n] = (null !== (t = u[n]) && void 0 !== t ? t : 0) + 1;
        }
    }));
