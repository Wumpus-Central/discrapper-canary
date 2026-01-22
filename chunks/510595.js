n.d(t, { A: () => f }), n(896048), n(321073), n(747238);
var r = n(735438),
    i = n.n(r),
    l = n(311907),
    a = n(803805),
    s = n(506774),
    o = n(661191),
    c = n(761821);
n(355097);
var u = n(652215);
let d = "selectedChannelGuildFrecency";
function p(e) {
    let { state: t } = l.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [
        (e) =>
            null == e
                ? {
                      favorites: [],
                      timesFavorited: 0,
                  }
                : Array.isArray(e)
                  ? {
                        favorites: e,
                        timesFavorited: 0,
                    }
                  : e,
        (e) =>
            Array.isArray(e.favorites)
                ? e
                : {
                      favorites: [],
                      timesFavorited: 0,
                  },
    ]);
    return null == t || 0 === t.favorites.length
        ? []
        : t.favorites.map((n, r) => {
              let i = a.tC.create();
              return (
                  (i.format = "IMAGE" === n.format ? a.TL.IMAGE : "VIDEO" === n.format ? a.TL.VIDEO : a.TL.NONE),
                  (i.src = n.src),
                  (i.width = n.width),
                  (i.height = n.height),
                  (i.order = t.favorites.length - r + e),
                  {
                      url: n.url,
                      favorite: i,
                  }
              );
          });
}
let f = [
    {
        version: 2,
        run(e) {
            let t = p(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: r } of (null == e.favoriteGifs && (e.favoriteGifs = a.uz.create()),
            (e.favoriteGifs.gifs = {}),
            t))
                e.favoriteGifs.gifs[n] = r;
            return (e.favoriteGifs.hideTooltip = t.length > 2), !0;
        },
        cleanup() {},
    },
    {
        version: 3,
        run(e) {
            function t() {
                return {
                    usageHistory: {},
                    favorites: [],
                };
            }
            let { state: n } = l.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [
                (e) => (null == e || 0 === Object.keys(e).length ? t() : e),
                (e) =>
                    null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e),
            ]);
            if (null == n) return !1;
            let r = !1;
            return (
                n.favorites.length > 0 &&
                    ((e.favoriteStickers = a.tQ.create()),
                    (e.favoriteStickers.stickerIds = i().uniq(n.favorites).slice(0, 250)),
                    (r = !0)),
                i().size(n.usageHistory) > 0 &&
                    ((e.stickerFrecency = a.Do.create()),
                    (e.stickerFrecency.stickers = (0, c.Mr)(n.usageHistory, 100)),
                    (r = !0)),
                r
            );
        },
        cleanup() {
            s.w.remove("StickersPersistedStore");
        },
    },
    {
        version: 4,
        run(e) {
            let { state: t } = l.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ usageHistory: s.w.get("EmojiUsageHistory") || {} }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.favorites &&
                    t.favorites.length > 0 &&
                    ((e.favoriteEmojis = a.gW.create()),
                    (e.favoriteEmojis.emojis = i().uniq(t.favorites).slice(0, 250)),
                    (n = !0)),
                i().size(t.usageHistory) > 0 &&
                    ((e.emojiFrecency = a.Q8.create()),
                    (e.emojiFrecency.emojis = (0, c.Mr)(t.usageHistory, 100)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            s.w.remove("EmojiStore"), s.w.remove("EmojiUsageHistory"), s.w.remove("EmojiDiversitySurrogate");
        },
    },
    {
        version: 6,
        run(e) {
            null == e.favoriteGifs && (e.favoriteGifs = a.uz.create()),
                null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = p(1);
            if (0 === t.length) return !1;
            i()(e.favoriteGifs.gifs)
                .values()
                .sortBy("order")
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = a.uz.toBinary(e.favoriteGifs).length,
                r = 0;
            for (let { url: i, favorite: l } of t) {
                if (((l.order = t.length - r), r++, i in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[i].order = l.order;
                    continue;
                }
                let s = a.tC.toBinary(l).length + i.length + 7;
                n + s > 762880 || ((n += s), (e.favoriteGifs.gifs[i] = l));
            }
            for (n = a.uz.toBinary(e.favoriteGifs).length; n > 762880; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = a.uz.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {},
    },
    {
        version: 7,
        run(e) {
            let { state: t } = l.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
            if (null == t) return !1;
            let n = !1;
            return (
                i().size(t.usageHistory) > 0 &&
                    ((e.applicationCommandFrecency = a.Zc.create()),
                    (e.applicationCommandFrecency.applicationCommands = (0, c.Mr)(t.usageHistory, 500)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            s.w.remove("ApplicationCommandFrecency");
        },
    },
    {
        version: 8,
        run(e) {
            let { state: t } = l.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
            if (null == t) return !1;
            let n = !1;
            return (
                i().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = a.Qn.create()),
                    o.default.keys(t.favoriteSounds).forEach((n) => {
                        new Set(t.favoriteSounds[n]).forEach((t) => {
                            var n;
                            null == (n = e.favoriteSoundboardSounds) || n.soundIds.push(t);
                        });
                    }),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            s.w.remove("SoundboardFavoriteStore");
        },
    },
    {
        version: 9,
        run(e) {
            let t = s.w.get(d);
            if (null == t) return !1;
            for (let e in t) u.Ut1.test(e) || delete t[e];
            return (
                (e.guildAndChannelFrecency = a.F1.create()),
                (e.guildAndChannelFrecency.guildAndChannels = (0, c.Mr)(t, 100)),
                !0
            );
        },
        cleanup() {
            s.w.remove(d);
        },
    },
    {
        version: 10,
        run(e) {
            var t;
            if (null == e.emojiFrecency) return !1;
            let n = null != (t = e.emojiFrecency.emojis) ? t : {},
                r = !1;
            if (i().size(n) > 0) {
                let t = a.Q8.create();
                a.Q8.mergePartial(t, e.emojiFrecency),
                    null != e.emojiReactionFrecency && a.Q8.mergePartial(t, e.emojiReactionFrecency),
                    (e.emojiReactionFrecency = t),
                    (r = !0);
            }
            return r;
        },
        cleanup() {},
    },
];
