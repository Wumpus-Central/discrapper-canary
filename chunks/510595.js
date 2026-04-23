n.d(t, { A: () => h }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    l = n(803805),
    s = n(506774),
    o = n(661191),
    d = n(761821);
n(355097);
var u = n(652215);
let c = "selectedChannelGuildFrecency";
function A(e) {
    let { state: t } = a.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [
        (e) =>
            null == e
                ? { favorites: [], timesFavorited: 0 }
                : Array.isArray(e)
                  ? { favorites: e, timesFavorited: 0 }
                  : e,
        (e) => (Array.isArray(e.favorites) ? e : { favorites: [], timesFavorited: 0 }),
    ]);
    return null == t || 0 === t.favorites.length
        ? []
        : t.favorites.map((n, i) => {
              let r = l.tC.create();
              return (
                  (r.format = "IMAGE" === n.format ? l.TL.IMAGE : "VIDEO" === n.format ? l.TL.VIDEO : l.TL.NONE),
                  (r.src = n.src),
                  (r.width = n.width),
                  (r.height = n.height),
                  (r.order = t.favorites.length - i + e),
                  { url: n.url, favorite: r }
              );
          });
}
let h = [
    {
        version: 2,
        run(e) {
            let t = A(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: i } of (null == e.favoriteGifs && (e.favoriteGifs = l.uz.create()),
            (e.favoriteGifs.gifs = {}),
            t))
                e.favoriteGifs.gifs[n] = i;
            return (e.favoriteGifs.hideTooltip = t.length > 2), !0;
        },
        cleanup() {},
    },
    {
        version: 3,
        run(e) {
            function t() {
                return { usageHistory: {}, favorites: [] };
            }
            let { state: n } = a.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [
                (e) => (null == e || 0 === Object.keys(e).length ? t() : e),
                (e) =>
                    null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e),
            ]);
            if (null == n) return !1;
            let i = !1;
            return (
                n.favorites.length > 0 &&
                    ((e.favoriteStickers = l.tQ.create()),
                    (e.favoriteStickers.stickerIds = r().uniq(n.favorites).slice(0, 250)),
                    (i = !0)),
                r().size(n.usageHistory) > 0 &&
                    ((e.stickerFrecency = l.Do.create()),
                    (e.stickerFrecency.stickers = (0, d.Mr)(n.usageHistory, 100)),
                    (i = !0)),
                i
            );
        },
        cleanup() {
            s.w.remove("StickersPersistedStore");
        },
    },
    {
        version: 4,
        run(e) {
            let { state: t } = a.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ usageHistory: s.w.get("EmojiUsageHistory") || {} }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.favorites &&
                    t.favorites.length > 0 &&
                    ((e.favoriteEmojis = l.gW.create()),
                    (e.favoriteEmojis.emojis = r().uniq(t.favorites).slice(0, 250)),
                    (n = !0)),
                r().size(t.usageHistory) > 0 &&
                    ((e.emojiFrecency = l.Q8.create()),
                    (e.emojiFrecency.emojis = (0, d.Mr)(t.usageHistory, 100)),
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
            null == e.favoriteGifs && (e.favoriteGifs = l.uz.create()),
                null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = A(1);
            if (0 === t.length) return !1;
            r()(e.favoriteGifs.gifs)
                .values()
                .sortBy("order")
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = l.uz.toBinary(e.favoriteGifs).length,
                i = 0;
            for (let { url: r, favorite: a } of t) {
                if (((a.order = t.length - i), i++, r in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[r].order = a.order;
                    continue;
                }
                let s = l.tC.toBinary(a).length + r.length + 7;
                n + s > 762880 || ((n += s), (e.favoriteGifs.gifs[r] = a));
            }
            for (n = l.uz.toBinary(e.favoriteGifs).length; n > 762880; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = l.uz.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {},
    },
    {
        version: 7,
        run(e) {
            let { state: t } = a.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
            if (null == t) return !1;
            let n = !1;
            return (
                r().size(t.usageHistory) > 0 &&
                    ((e.applicationCommandFrecency = l.Zc.create()),
                    (e.applicationCommandFrecency.applicationCommands = (0, d.Mr)(t.usageHistory, 500)),
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
            let { state: t } = a.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
            if (null == t) return !1;
            let n = !1;
            return (
                r().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = l.Qn.create()),
                    o.default.keys(t.favoriteSounds).forEach((n) => {
                        new Set(t.favoriteSounds[n]).forEach((t) => {
                            e.favoriteSoundboardSounds?.soundIds.push(t);
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
            let t = s.w.get(c);
            if (null == t) return !1;
            for (let e in t) u.Ut1.test(e) || delete t[e];
            return (
                (e.guildAndChannelFrecency = l.F1.create()),
                (e.guildAndChannelFrecency.guildAndChannels = (0, d.Mr)(t, 100)),
                !0
            );
        },
        cleanup() {
            s.w.remove(c);
        },
    },
    {
        version: 10,
        run(e) {
            if (null == e.emojiFrecency) return !1;
            let t = e.emojiFrecency.emojis ?? {},
                n = !1;
            if (r().size(t) > 0) {
                let t = l.Q8.create();
                l.Q8.mergePartial(t, e.emojiFrecency),
                    null != e.emojiReactionFrecency && l.Q8.mergePartial(t, e.emojiReactionFrecency),
                    (e.emojiReactionFrecency = t),
                    (n = !0);
            }
            return n;
        },
        cleanup() {},
    },
];
