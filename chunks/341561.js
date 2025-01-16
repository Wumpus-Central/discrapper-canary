var i = r(200651);
r(192379);
var a = r(952265),
    s = r(588468),
    o = r(125900),
    l = r(12327),
    u = r(285651),
    c = r(268350),
    d = r(926491),
    f = r(373228),
    _ = r(419922),
    h = r(430824),
    p = r(626135),
    m = r(483360),
    g = r(877565),
    E = r(590921),
    v = r(665692),
    I = r(981631),
    T = r(388032),
    b = r(929349);
let y = 8,
    S = 4,
    A = 4,
    N = 40,
    C = 6;
function R(e, n) {
    return (0, i.jsx)(_.ZP, {
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
        let s = i.allowSoundmoji && (0, o.dX)({ location: 'queryResults' }),
            l = i.allowStickers || s ? 0 : N,
            d = I.rnv + l,
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
        let _ = [];
        if (i.allowStickers) {
            (0, c.$p)();
            let n = m.ZP.queryStickers([r], !0, [e, (e, n) => n === u.eb.SENDABLE]),
                i = Math.max(S, y - f.length);
            (_ = n.slice(0, i)), '-' === r[0] && (_ = n.filter((e) => e.sticker.name === r));
        }
        let h = [];
        s &&
            ((h = m.ZP.querySoundmoji(r, e)
                .map((e) => ({ sound: e }))
                .slice(0, A)),
            '-' === r[0] && (h = h.filter((e) => e.sound.name === r)));
        let p = f.slice(0, Math.max(C, d - _.length - h.length));
        return {
            results: {
                emojis: p,
                emojisLocked: [],
                stickers: _,
                soundmoji: h
            },
            metadata: {
                numEmojiResults: p.length,
                numLockedEmojiResults: 0,
                numStickerResults: _.length,
                numSoundmojiResults: h.length
            }
        };
    },
    renderResults(e) {
        let {
                results: { emojis: n, stickers: o, soundmoji: l, emojisLocked: u },
                selectedIndex: c,
                query: d,
                onHover: f,
                onClick: _
            } = e,
            p = () => {
                (0, a.ZD)(async () => {
                    let { default: e } = await r.e('9766').then(r.bind(r, 889684));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
            },
            m = n.length > 0 || u.length > 0,
            E = o.length > 0;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, g.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: n,
                    onHover: f,
                    onClick: _,
                    titleWithQuery: T.t.ksAVYm,
                    titleWithoutQuery: T.intl.string(T.t.sMOuub),
                    Component: s.ZP.Emoji,
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
                          onClick: p,
                          titleWithQuery: 0 === n.length ? T.t.ksAVYm : null,
                          titleWithoutQuery: 0 === n.length ? T.intl.string(T.t.sMOuub) : null,
                          Component: s.ZP.EmojiUpsell,
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
                m && E && (0, i.jsx)(s.ZP.Divider, { className: b.divider }),
                (0, g.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: o,
                    onHover: f,
                    onClick: _,
                    titleWithQuery: T.t.uferGB,
                    titleWithoutQuery: T.intl.string(T.t['fT+Yjo']),
                    Component: s.ZP.Sticker,
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
                    headerClassName: m ? b.secondarySection : void 0
                }),
                (m || E) && l.length > 0 && (0, i.jsx)(s.ZP.Divider, { className: b.divider }),
                (0, g.HI)({
                    query: d,
                    selectedIndex: c,
                    autocompletes: l,
                    onHover: f,
                    onClick: _,
                    titleWithQuery: T.t['0cKBGB'],
                    titleWithoutQuery: T.intl.string(T.t.EHlAMT),
                    Component: s.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: n } = e;
                        return {
                            sound: n,
                            key: n.soundId
                        };
                    },
                    getQuery: (e) => e,
                    key: 'soundmoji',
                    indexOffset: n.length + u.length + o.length,
                    headerClassName: m || E ? b.secondarySection : void 0
                })
            ]
        });
    },
    onSelect(e) {
        let {
            results: { emojis: n, emojisLocked: r, soundmoji: i, stickers: a },
            index: s,
            options: o,
            channel: u
        } = e;
        if (s < n.length) {
            let e = n[s];
            return (
                o.insertText(D(e), L(e)),
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
        if ((s -= n.length) < r.length) return { type: null };
        if ((s -= r.length) < a.length) {
            let e = a[s];
            return (
                o.insertText(''),
                o.sendSticker(e.sticker, f.V0.AUTOCOMPLETE),
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
        if ((s -= a.length) < i.length) {
            let e = i[s];
            return (
                o.insertText((0, l.Z)(e.sound.guildId, e.sound.soundId)),
                p.default.track(I.rMx.SOUNDMOJI_SELECT, {
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
