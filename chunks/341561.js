n.d(t, { Z: () => D });
var i = n(200651);
n(192379);
var r = n(952265),
    a = n(588468),
    s = n(125900),
    o = n(12327),
    l = n(285651),
    u = n(268350),
    c = n(926491),
    d = n(373228),
    f = n(419922),
    _ = n(430824),
    p = n(626135),
    h = n(483360),
    m = n(877565),
    g = n(590921),
    E = n(665692),
    v = n(981631),
    y = n(388032),
    I = n(929349);
let b = 8,
    T = 4,
    S = 4,
    A = 40,
    N = 6;
function C(e, t) {
    return (0, i.jsx)(f.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
function R(e) {
    return ''.concat(E.Iv).concat(e.name).concat(E.Iv);
}
function O(e) {
    var t;
    let n = e.animated ? 'a' : '';
    return e.managed || null == e.id
        ? ''.concat(E.Iv).concat(e.name).concat(E.Iv)
        : '<'
              .concat(n, ':')
              .concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ':')
              .concat(e.id, '>');
}
let D = {
    sentinel: E.Iv,
    stores: [c.Z],
    matches: (e, t, n, i, r) => n.length > 1,
    queryResults(e, t, n, i, r) {
        let a = i.allowSoundmoji && (0, s.dX)({ location: 'queryResults' }),
            o = i.allowStickers || a ? 0 : A,
            c = v.rnv + o,
            {
                emojis: { unlocked: d }
            } = h.ZP.queryEmojiResults({
                query: n,
                channel: e,
                intention: i.emojiIntention,
                maxCount: c
            });
        if ('-' === n[0]) {
            let e = (e) => {
                var t;
                return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n);
            };
            d = d.filter(e);
        }
        let f = [];
        if (i.allowStickers) {
            (0, u.$p)();
            let t = h.ZP.queryStickers([n], !0, [e, (e, t) => t === l.eb.SENDABLE]),
                i = Math.max(T, b - d.length);
            (f = t.slice(0, i)), '-' === n[0] && (f = t.filter((e) => e.sticker.name === n));
        }
        let _ = [];
        a &&
            ((_ = h.ZP.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, S)),
            '-' === n[0] && (_ = _.filter((e) => e.sound.name === n)));
        let p = d.slice(0, Math.max(N, c - f.length - _.length));
        return {
            results: {
                emojis: p,
                emojisLocked: [],
                stickers: f,
                soundmoji: _
            },
            metadata: {
                numEmojiResults: p.length,
                numLockedEmojiResults: 0,
                numStickerResults: f.length,
                numSoundmojiResults: _.length
            }
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: s, soundmoji: o, emojisLocked: l },
                selectedIndex: u,
                query: c,
                onHover: d,
                onClick: f
            } = e,
            p = () => {
                (0, r.ZD)(async () => {
                    let { default: e } = await n.e('9766').then(n.bind(n, 889684));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
            },
            h = t.length > 0 || l.length > 0,
            g = s.length > 0;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, m.HI)({
                    query: c,
                    selectedIndex: u,
                    autocompletes: t,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: y.t.ksAVYm,
                    titleWithoutQuery: y.intl.string(y.t.sMOuub),
                    Component: a.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: E.Iv,
                        guild: null != e.guildId ? _.Z.getGuild(e.guildId) : null
                    }),
                    getQuery: (e) => ''.concat(E.Iv).concat(e),
                    key: 'emoji'
                }),
                l.length > 0
                    ? (0, m.HI)({
                          query: c,
                          selectedIndex: u,
                          autocompletes: l,
                          onHover: d,
                          onClick: p,
                          titleWithQuery: 0 === t.length ? y.t.ksAVYm : null,
                          titleWithoutQuery: 0 === t.length ? y.intl.string(y.t.sMOuub) : null,
                          Component: a.ZP.EmojiUpsell,
                          getProps: (e) => {
                              let { emojis: t } = e;
                              return {
                                  key: 'emoji-upsell',
                                  emojis: t
                              };
                          },
                          getQuery: (e) => ''.concat(E.Iv).concat(e),
                          key: 'emoji-upsell',
                          indexOffset: t.length
                      })
                    : null,
                h && g && (0, i.jsx)(a.ZP.Divider, { className: I.divider }),
                (0, m.HI)({
                    query: c,
                    selectedIndex: u,
                    autocompletes: s,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: y.t.uferGB,
                    titleWithoutQuery: y.intl.string(y.t['fT+Yjo']),
                    Component: a.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: C,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        };
                    },
                    getQuery: (e) => e,
                    key: 'stickers',
                    indexOffset: t.length + l.length,
                    headerClassName: h ? I.secondarySection : void 0
                }),
                (h || g) && o.length > 0 && (0, i.jsx)(a.ZP.Divider, { className: I.divider }),
                (0, m.HI)({
                    query: c,
                    selectedIndex: u,
                    autocompletes: o,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: y.t['0cKBGB'],
                    titleWithoutQuery: y.intl.string(y.t.EHlAMT),
                    Component: a.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return {
                            sound: t,
                            key: t.soundId
                        };
                    },
                    getQuery: (e) => e,
                    key: 'soundmoji',
                    indexOffset: t.length + l.length + s.length,
                    headerClassName: h || g ? I.secondarySection : void 0
                })
            ]
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, emojisLocked: n, soundmoji: i, stickers: r },
            index: a,
            options: s,
            channel: l
        } = e;
        if (a < t.length) {
            let e = t[a];
            return (
                s.insertText(R(e), O(e)),
                {
                    type: g.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            );
        }
        if ((a -= t.length) < n.length) return { type: null };
        if ((a -= n.length) < r.length) {
            let e = r[a];
            return (
                s.insertText(''),
                s.sendSticker(e.sticker, d.V0.AUTOCOMPLETE),
                {
                    type: g.z2.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        stickerId: e.sticker.id
                    }
                }
            );
        }
        if ((a -= r.length) < i.length) {
            let e = i[a];
            return (
                s.insertText((0, o.Z)(e.sound.guildId, e.sound.soundId)),
                p.default.track(v.rMx.SOUNDMOJI_SELECT, {
                    channel_id: l.id,
                    guild_id: l.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: 'autocomplete'
                }),
                {
                    type: g.z2.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length
                    }
                }
            );
        }
        return { type: null };
    }
};
