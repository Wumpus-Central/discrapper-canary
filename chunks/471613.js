n.d(t, { Z: () => b });
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
    m = {},
    p = 0,
    f = new (a())({
        max: 5,
        maxAge: u.Z.Millis.HOUR,
    });
class h extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isUploadingEmoji() {
        return p > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = g[e]) ? t : 0;
    }
    getEmojis(e) {
        return m[e];
    }
    getEmojiRawAsset(e) {
        return f.get(e);
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "GuildSettingsEmojiStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "GuildSettingsEmojiStore");
let b = new h(o.Z, {
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
        p++;
    },
    EMOJI_UPLOAD_STOP: function () {
        p--;
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function (e) {
        let { emojiId: t, userImage: n } = e;
        f.set(t, n);
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        var t;
        let { guildId: n } = e;
        g[n] = (null != (t = g[n]) ? t : 0) + 1;
    },
});
