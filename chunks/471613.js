n.d(t, { Z: () => h });
var r,
    i,
    l = n(31775),
    a = n.n(l),
    s = n(442837),
    o = n(570140),
    c = n(40572),
    d = n(914010),
    u = n(70956);
let g = {},
    f = {},
    m = 0,
    b = new (a())({
        max: 5,
        maxAge: u.Z.Millis.HOUR,
    });
class p extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isUploadingEmoji() {
        return m > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = g[e]) ? t : 0;
    }
    getEmojis(e) {
        return f[e];
    }
    getEmojiRawAsset(e) {
        return b.get(e);
    }
}
(r = "displayName") in p
    ? Object.defineProperty(p, r, {
          value: "GuildSettingsEmojiStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[r] = "GuildSettingsEmojiStore");
let h = new p(o.Z, {
    EMOJI_DELETE: function (e) {
        let { guildId: t, emojiId: n } = e;
        f[t] = f[t].filter((e) => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: t, emojis: n } = e;
        f[t] = n.map((e) => new c.Z(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        f[t] = [];
    },
    EMOJI_UPLOAD_START: function () {
        m++;
    },
    EMOJI_UPLOAD_STOP: function () {
        m--;
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function (e) {
        let { emojiId: t, userImage: n } = e;
        b.set(t, n);
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        var t;
        let { guildId: n } = e;
        g[n] = (null != (t = g[n]) ? t : 0) + 1;
    },
});
