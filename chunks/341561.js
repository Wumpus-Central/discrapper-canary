var i = r(200651);
r(192379);
var a = r(952265),
    o = r(588468),
    s = r(125900),
    l = r(12327),
    u = r(285651),
    c = r(268350),
    d = r(926491),
    f = r(373228),
    p = r(419922),
    h = r(430824),
    _ = r(626135),
    m = r(483360),
    g = r(877565),
    E = r(590921),
    v = r(665692),
    y = r(981631),
    b = r(388032),
    I = r(929349);
let T = 8,
    S = 4,
    A = 4,
    C = 40,
    N = 6;
function R(e, n) {
    return (0, i.jsx)(p.ZP, {
        sticker: e,
        isInteracting: n,
        size: 40
    });
}
let O = {
    sentinel: v.Iv,
    stores: [d.Z],
    matches: (e, n, r, i, a) => r.length > 1,
    queryResults(e, n, r, i, a) {
        let o = i.allowSoundmoji && (0, s.dX)({ location: 'queryResults' }),
            l = i.allowStickers || o ? 0 : C,
            d = y.rnv + l,
            {
                emojis: { unlocked: f }
            } = m.ZP.queryEmojiResults({
                query: r,
                channel: e,
                intention: i.emojiIntention,
                maxCount: d
            });
        if ('-' === r[0]) {
            let e = (e) => {
                var n;
                return null === (n = e.names) || void 0 === n ? void 0 : n.includes(r);
            };
            f = f.filter(e);
        }
        let p = [];
        if (i.allowStickers) {
            (0, c.$p)();
            let n = m.ZP.queryStickers([r], !0, [e, (e, n) => n === u.eb.SENDABLE]),
                i = Math.max(S, T - f.length);
            (p = n.slice(0, i)), '-' === r[0] && (p = n.filter((e) => e.sticker.name === r));
        }
        let h = [];
        o &&
            ((h = m.ZP.querySoundmoji(r, e)
                .map((e) => ({ sound: e }))
                .slice(0, A)),
            '-' === r[0] && (h = h.filter((e) => e.sound.name === r)));
        let _ = f.slice(0, Math.max(N, d - p.length - h.length));
        return {
            results: {
                emojis: _,
                emojisLocked: [],
                stickers: p,
                soundmoji: h
            },
            metadata: {
                numEmojiResults: _.length,
                numLockedEmojiResults: 0,
                numStickerResults: p.length,
                numSoundmojiResults: h.length
            }
        };
    },
    renderResults(e) {
        let {
                results: { emojis: n, stickers: s, soundmoji: l, emojisLocked: u },
                selectedIndex: c,
                query: d,
                onHover: f,
                onClick: p
            } = e,
            _ = () => {
                (0, a.ZD)(async () => {
                    let { default: e } = await r.e('9766').then(r.bind(r, 889684));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
            },
            m = n.length > 0 || u.length > 0,
            E = s.length > 0;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, g.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: n,
                    onHover: f,
                    onClick: p,
                    titleWithQuery: b.t.ksAVYm,
                    titleWithoutQuery: b.intl.string(b.t.sMOuub),
                    Component: o.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: v.Iv,
                        guild: null != e.guildId ? h.Z.getGuild(e.guildId) : null
                    }),
                    getQuery: (e) => ''.concat(v.Iv).concat(e),
                    key: 'emoji'
                }),
                u.length > 0
                    ? (0, g.HI)({
                          query: d,
                          selectedIndex: c,
                          autocompletes: u,
                          onHover: f,
                          onClick: _,
                          titleWithQuery: 0 === n.length ? b.t.ksAVYm : null,
                          titleWithoutQuery: 0 === n.length ? b.intl.string(b.t.sMOuub) : null,
                          Component: o.ZP.EmojiUpsell,
                          getProps: (e) => {
                              let { emojis: n } = e;
                              return {
                                  key: 'emoji-upsell',
                                  emojis: n
                              };
                          },
                          getQuery: (e) => ''.concat(v.Iv).concat(e),
                          key: 'emoji-upsell',
                          indexOffset: n.length
                      })
                    : null,
                m && E && (0, i.jsx)(o.ZP.Divider, { className: I.divider }),
                (0, g.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: s,
                    onHover: f,
                    onClick: p,
                    titleWithQuery: b.t.uferGB,
                    titleWithoutQuery: b.intl.string(b.t['fT+Yjo']),
                    Component: o.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: n, sticker: r } = e;
                        return {
                            renderSticker: R,
                            queryMatch: n !== r.name.toLocaleLowerCase() ? n : void 0,
                            sticker: r,
                            key: r.id
                        };
                    },
                    getQuery: (e) => e,
                    key: 'stickers',
                    indexOffset: n.length + u.length,
                    headerClassName: m ? I.secondarySection : void 0
                }),
                (m || E) && l.length > 0 && (0, i.jsx)(o.ZP.Divider, { className: I.divider }),
                (0, g.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: l,
                    onHover: f,
                    onClick: p,
                    titleWithQuery: b.t['0cKBGB'],
                    titleWithoutQuery: b.intl.string(b.t.EHlAMT),
                    Component: o.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: n } = e;
                        return {
                            sound: n,
                            key: n.soundId
                        };
                    },
                    getQuery: (e) => e,
                    key: 'soundmoji',
                    indexOffset: n.length + u.length + s.length,
                    headerClassName: m || E ? I.secondarySection : void 0
                })
            ]
        });
    },
    onSelect(e) {
        let {
            results: { emojis: n, emojisLocked: r, soundmoji: i, stickers: a },
            index: o,
            options: s,
            channel: u
        } = e;
        if (o < n.length) {
            let e = n[o];
            return (
                s.insertText(D(e), L(e)),
                {
                    type: E.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: n.length,
                        numStickerResults: a.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            );
        }
        if ((o -= n.length) < r.length) return { type: null };
        if ((o -= r.length) < a.length) {
            let e = a[o];
            return (
                s.insertText(''),
                s.sendSticker(e.sticker, f.V0.AUTOCOMPLETE),
                {
                    type: E.z2.STICKER,
                    metadata: {
                        numEmojiResults: n.length,
                        numStickerResults: a.length,
                        stickerId: e.sticker.id
                    }
                }
            );
        }
        if ((o -= a.length) < i.length) {
            let e = i[o];
            return (
                s.insertText((0, l.Z)(e.sound.guildId, e.sound.soundId)),
                _.default.track(y.rMx.SOUNDMOJI_SELECT, {
                    channel_id: u.id,
                    guild_id: u.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: 'autocomplete'
                }),
                {
                    type: E.z2.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: n.length,
                        numStickerResults: a.length
                    }
                }
            );
        }
        return { type: null };
    }
};
function D(e) {
    return ''.concat(v.Iv).concat(e.name).concat(v.Iv);
}
function L(e) {
    var n;
    let r = e.animated ? 'a' : '';
    return e.managed || null == e.id
        ? ''.concat(v.Iv).concat(e.name).concat(v.Iv)
        : '<'
              .concat(r, ':')
              .concat(null !== (n = e.originalName) && void 0 !== n ? n : e.name, ':')
              .concat(e.id, '>');
}
n.Z = O;
