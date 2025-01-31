n.d(t, { Z: () => p }), n(47120), n(653041);
var i = n(392711),
    l = n.n(i),
    r = n(442837),
    a = n(377108),
    s = n(433517),
    o = n(709054),
    c = n(48481),
    d = n(526761),
    u = n(981631);
let h = 'selectedChannelGuildFrecency';
function m(e) {
    let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState('GIFFavoritesStore', [
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
        : t.favorites.map((n, i) => {
              let l = a.JM.create();
              return (
                  (l.format = 'IMAGE' === n.format ? a.EO.IMAGE : 'VIDEO' === n.format ? a.EO.VIDEO : a.EO.NONE),
                  (l.src = n.src),
                  (l.width = n.width),
                  (l.height = n.height),
                  (l.order = t.favorites.length - i + e),
                  {
                      url: n.url,
                      favorite: l
                  }
              );
          });
}
let p = [
    {
        version: 2,
        run(e) {
            let t = m(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: i } of (null == e.favoriteGifs && (e.favoriteGifs = a.wK.create()), (e.favoriteGifs.gifs = {}), t)) e.favoriteGifs.gifs[n] = i;
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
            let { state: n } = r.ZP.PersistedStore.migrateAndReadStoreState('StickersPersistedStore', [(e) => (null == e || 0 === Object.keys(e).length ? t() : e), (e) => (null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e))]);
            if (null == n) return !1;
            let i = !1;
            return n.favorites.length > 0 && ((e.favoriteStickers = a.Lt.create()), (e.favoriteStickers.stickerIds = l().uniq(n.favorites).slice(0, d.oX)), (i = !0)), l().size(n.usageHistory) > 0 && ((e.stickerFrecency = a.ls.create()), (e.stickerFrecency.stickers = (0, c.tU)(n.usageHistory, 100)), (i = !0)), i;
        },
        cleanup() {
            s.K.remove('StickersPersistedStore');
        }
    },
    {
        version: 4,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState('EmojiStore', [() => ({ usageHistory: s.K.get('EmojiUsageHistory') || {} })]);
            if (null == t) return !1;
            let n = !1;
            return null != t.favorites && t.favorites.length > 0 && ((e.favoriteEmojis = a.ND.create()), (e.favoriteEmojis.emojis = l().uniq(t.favorites).slice(0, d.oX)), (n = !0)), l().size(t.usageHistory) > 0 && ((e.emojiFrecency = a.PL.create()), (e.emojiFrecency.emojis = (0, c.tU)(t.usageHistory, 100)), (n = !0)), n;
        },
        cleanup() {
            s.K.remove('EmojiStore'), s.K.remove('EmojiUsageHistory'), s.K.remove('EmojiDiversitySurrogate');
        }
    },
    {
        version: 6,
        run(e) {
            null == e.favoriteGifs && (e.favoriteGifs = a.wK.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = m(1);
            if (0 === t.length) return !1;
            l()(e.favoriteGifs.gifs)
                .values()
                .sortBy('order')
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = a.wK.toBinary(e.favoriteGifs).length,
                i = 0;
            for (let { url: l, favorite: r } of t) {
                if (((r.order = t.length - i), i++, l in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[l].order = r.order;
                    continue;
                }
                let s = a.JM.toBinary(r).length + l.length + 7;
                n + s > d.vY || ((n += s), (e.favoriteGifs.gifs[l] = r));
            }
            for (n = a.wK.toBinary(e.favoriteGifs).length; n > d.vY; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = a.wK.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {}
    },
    {
        version: 7,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState('ApplicationCommandFrecency', []);
            if (null == t) return !1;
            let n = !1;
            return l().size(t.usageHistory) > 0 && ((e.applicationCommandFrecency = a.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, c.tU)(t.usageHistory, 500)), (n = !0)), n;
        },
        cleanup() {
            s.K.remove('ApplicationCommandFrecency');
        }
    },
    {
        version: 8,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState('SoundboardFavoriteStore', []);
            if (null == t) return !1;
            let n = !1;
            return (
                l().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = a.h_.create()),
                    o.default.keys(t.favoriteSounds).forEach((n) => {
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
            s.K.remove('SoundboardFavoriteStore');
        }
    },
    {
        version: 9,
        run(e) {
            let t = s.K.get(h);
            if (null == t) return !1;
            for (let e in t) u.Xyh.test(e) || delete t[e];
            return (e.guildAndChannelFrecency = a.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, c.tU)(t, 100)), !0;
        },
        cleanup() {
            s.K.remove(h);
        }
    },
    {
        version: 10,
        run(e) {
            var t;
            if (null == e.emojiFrecency) return !1;
            let n = null !== (t = e.emojiFrecency.emojis) && void 0 !== t ? t : {},
                i = !1;
            if (l().size(n) > 0) {
                let t = a.PL.create();
                a.PL.mergePartial(t, e.emojiFrecency), null != e.emojiReactionFrecency && a.PL.mergePartial(t, e.emojiReactionFrecency), (e.emojiReactionFrecency = t), (i = !0);
            }
            return i;
        },
        cleanup() {}
    }
];
