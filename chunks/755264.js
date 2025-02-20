n.d(t, { Z: () => g }), n(47120), n(653041), n(301563);
var r = n(392711),
    i = n.n(r),
    l = n(442837),
    o = n(377108),
    a = n(433517),
    s = n(709054),
    c = n(48481),
    u = n(526761),
    d = n(981631);
let p = 'selectedChannelGuildFrecency';
function h(e) {
    let { state: t } = l.ZP.PersistedStore.migrateAndReadStoreState('GIFFavoritesStore', [
        (e) =>
            null == e
                ? {
                      favorites: [],
                      timesFavorited: 0
                  }
                : Array.isArray(e)
                  ? {
                        favorites: e,
                        timesFavorited: 0
                    }
                  : e,
        (e) =>
            Array.isArray(e.favorites)
                ? e
                : {
                      favorites: [],
                      timesFavorited: 0
                  }
    ]);
    return null == t || 0 === t.favorites.length
        ? []
        : t.favorites.map((n, r) => {
              let i = o.JM.create();
              return (
                  (i.format = 'IMAGE' === n.format ? o.EO.IMAGE : 'VIDEO' === n.format ? o.EO.VIDEO : o.EO.NONE),
                  (i.src = n.src),
                  (i.width = n.width),
                  (i.height = n.height),
                  (i.order = t.favorites.length - r + e),
                  {
                      url: n.url,
                      favorite: i
                  }
              );
          });
}
let g = [
    {
        version: 2,
        run(e) {
            let t = h(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: r } of (null == e.favoriteGifs && (e.favoriteGifs = o.wK.create()), (e.favoriteGifs.gifs = {}), t)) e.favoriteGifs.gifs[n] = r;
            return (e.favoriteGifs.hideTooltip = t.length > 2), !0;
        },
        cleanup() {}
    },
    {
        version: 3,
        run(e) {
            function t() {
                return {
                    usageHistory: {},
                    favorites: []
                };
            }
            let { state: n } = l.ZP.PersistedStore.migrateAndReadStoreState('StickersPersistedStore', [(e) => (null == e || 0 === Object.keys(e).length ? t() : e), (e) => (null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e))]);
            if (null == n) return !1;
            let r = !1;
            return n.favorites.length > 0 && ((e.favoriteStickers = o.Lt.create()), (e.favoriteStickers.stickerIds = i().uniq(n.favorites).slice(0, u.oX)), (r = !0)), i().size(n.usageHistory) > 0 && ((e.stickerFrecency = o.ls.create()), (e.stickerFrecency.stickers = (0, c.tU)(n.usageHistory, 100)), (r = !0)), r;
        },
        cleanup() {
            a.K.remove('StickersPersistedStore');
        }
    },
    {
        version: 4,
        run(e) {
            let { state: t } = l.ZP.PersistedStore.migrateAndReadStoreState('EmojiStore', [() => ({ usageHistory: a.K.get('EmojiUsageHistory') || {} })]);
            if (null == t) return !1;
            let n = !1;
            return null != t.favorites && t.favorites.length > 0 && ((e.favoriteEmojis = o.ND.create()), (e.favoriteEmojis.emojis = i().uniq(t.favorites).slice(0, u.oX)), (n = !0)), i().size(t.usageHistory) > 0 && ((e.emojiFrecency = o.PL.create()), (e.emojiFrecency.emojis = (0, c.tU)(t.usageHistory, 100)), (n = !0)), n;
        },
        cleanup() {
            a.K.remove('EmojiStore'), a.K.remove('EmojiUsageHistory'), a.K.remove('EmojiDiversitySurrogate');
        }
    },
    {
        version: 6,
        run(e) {
            null == e.favoriteGifs && (e.favoriteGifs = o.wK.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = h(1);
            if (0 === t.length) return !1;
            i()(e.favoriteGifs.gifs)
                .values()
                .sortBy('order')
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = o.wK.toBinary(e.favoriteGifs).length,
                r = 0;
            for (let { url: i, favorite: l } of t) {
                if (((l.order = t.length - r), r++, i in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[i].order = l.order;
                    continue;
                }
                let a = o.JM.toBinary(l).length + i.length + 7;
                n + a > u.vY || ((n += a), (e.favoriteGifs.gifs[i] = l));
            }
            for (n = o.wK.toBinary(e.favoriteGifs).length; n > u.vY; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = o.wK.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {}
    },
    {
        version: 7,
        run(e) {
            let { state: t } = l.ZP.PersistedStore.migrateAndReadStoreState('ApplicationCommandFrecency', []);
            if (null == t) return !1;
            let n = !1;
            return i().size(t.usageHistory) > 0 && ((e.applicationCommandFrecency = o.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, c.tU)(t.usageHistory, 500)), (n = !0)), n;
        },
        cleanup() {
            a.K.remove('ApplicationCommandFrecency');
        }
    },
    {
        version: 8,
        run(e) {
            let { state: t } = l.ZP.PersistedStore.migrateAndReadStoreState('SoundboardFavoriteStore', []);
            if (null == t) return !1;
            let n = !1;
            return (
                i().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = o.h_.create()),
                    s.default.keys(t.favoriteSounds).forEach((n) => {
                        new Set(t.favoriteSounds[n]).forEach((t) => {
                            var n;
                            null === (n = e.favoriteSoundboardSounds) || void 0 === n || n.soundIds.push(t);
                        });
                    }),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            a.K.remove('SoundboardFavoriteStore');
        }
    },
    {
        version: 9,
        run(e) {
            let t = a.K.get(p);
            if (null == t) return !1;
            for (let e in t) d.Xyh.test(e) || delete t[e];
            return (e.guildAndChannelFrecency = o.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, c.tU)(t, 100)), !0;
        },
        cleanup() {
            a.K.remove(p);
        }
    },
    {
        version: 10,
        run(e) {
            var t;
            if (null == e.emojiFrecency) return !1;
            let n = null !== (t = e.emojiFrecency.emojis) && void 0 !== t ? t : {},
                r = !1;
            if (i().size(n) > 0) {
                let t = o.PL.create();
                o.PL.mergePartial(t, e.emojiFrecency), null != e.emojiReactionFrecency && o.PL.mergePartial(t, e.emojiReactionFrecency), (e.emojiReactionFrecency = t), (r = !0);
            }
            return r;
        },
        cleanup() {}
    }
];
