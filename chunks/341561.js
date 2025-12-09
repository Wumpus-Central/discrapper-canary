n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(588468),
    o = n(125900),
    s = n(12327),
    l = n(285651),
    c = n(268350),
    u = n(926491),
    d = n(373228),
    f = n(419922),
    p = n(430824),
    _ = n(626135),
    m = n(483360),
    h = n(877565),
    g = n(590921),
    E = n(761652),
    b = n(981631),
    y = n(388032),
    O = n(913235);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
let I = 8,
    T = 4,
    A = 4,
    C = 40,
    N = 6;
function P(e, t) {
    return (0, r.jsx)(f.Z, {
        sticker: e,
        isInteracting: t,
        size: 40,
    });
}
function R(e) {
    return "".concat(E.Iv).concat(e.name).concat(E.Iv);
}
function D(e) {
    var t;
    let n = e.animated ? "a" : "";
    return e.managed || null == e.id
        ? "".concat(E.Iv).concat(e.name).concat(E.Iv)
        : "<"
              .concat(n, ":")
              .concat(null != (t = e.originalName) ? t : e.name, ":")
              .concat(e.id, ">");
}
let w = {
    sentinel: E.Iv,
    stores: [u.Z],
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n, r, i) {
        let a = r.allowSoundmoji && (0, o.dX)({ location: "queryResults" }),
            s = r.allowStickers || a ? 0 : C,
            u = b.rnv + s,
            {
                emojis: { unlocked: d },
            } = m.ZP.queryEmojiResults({
                query: n,
                channel: e,
                intention: r.emojiIntention,
                maxCount: u,
            });
        if ("-" === n[0]) {
            let e = (e) => {
                var t;
                return null == (t = e.names) ? void 0 : t.includes(n);
            };
            d = d.filter(e);
        }
        let f = [];
        if (r.allowStickers) {
            (0, c.$p)();
            let t = m.ZP.queryStickers([n], !0, [e, (e, t) => t === l.eb.SENDABLE]),
                r = Math.max(T, I - d.length);
            (f = t.slice(0, r)), "-" === n[0] && (f = t.filter((e) => e.sticker.name === n));
        }
        let p = [];
        a &&
            ((p = m.ZP.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, A)),
            "-" === n[0] && (p = p.filter((e) => e.sound.name === n)));
        let _ = d.slice(0, Math.max(N, u - f.length - p.length));
        return {
            results: {
                emojis: _,
                emojisLocked: [],
                stickers: f,
                soundmoji: p,
            },
            metadata: {
                numEmojiResults: _.length,
                numLockedEmojiResults: 0,
                numStickerResults: f.length,
                numSoundmojiResults: p.length,
            },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: o, soundmoji: s, emojisLocked: l },
                selectedIndex: c,
                query: u,
                onHover: d,
                onClick: f,
            } = e,
            _ = () => {
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("63227").then(n.bind(n, 428263));
                    return (t) => (0, r.jsx)(e, S({}, t));
                });
            },
            m = t.length > 0 || l.length > 0,
            g = o.length > 0;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, h.HI)({
                    query: u,
                    selectedIndex: c,
                    autocompletes: t,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: y.t.ksAVYt,
                    titleWithoutQuery: y.intl.string(y.t.sMOuuS),
                    Component: a.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: E.Iv,
                        guild: null != e.guildId ? p.Z.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => "".concat(E.Iv).concat(e),
                    key: "emoji",
                }),
                l.length > 0
                    ? (0, h.HI)({
                          query: u,
                          selectedIndex: c,
                          autocompletes: l,
                          onHover: d,
                          onClick: _,
                          titleWithQuery: 0 === t.length ? y.t.ksAVYt : null,
                          titleWithoutQuery: 0 === t.length ? y.intl.string(y.t.sMOuuS) : null,
                          Component: a.ZP.EmojiUpsell,
                          getProps: (e) => {
                              let { emojis: t } = e;
                              return {
                                  key: "emoji-upsell",
                                  emojis: t,
                              };
                          },
                          getQuery: (e) => "".concat(E.Iv).concat(e),
                          key: "emoji-upsell",
                          indexOffset: t.length,
                      })
                    : null,
                m && g && (0, r.jsx)(a.ZP.Divider, { className: O.divider }),
                (0, h.HI)({
                    query: u,
                    selectedIndex: c,
                    autocompletes: o,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: y.t.uferGG,
                    titleWithoutQuery: y.intl.string(y.t["fT+Yjp"]),
                    Component: a.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: P,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length + l.length,
                    headerClassName: m ? O.secondarySection : void 0,
                }),
                (m || g) && s.length > 0 && (0, r.jsx)(a.ZP.Divider, { className: O.divider }),
                (0, h.HI)({
                    query: u,
                    selectedIndex: c,
                    autocompletes: s,
                    onHover: d,
                    onClick: f,
                    titleWithQuery: y.t["0cKBGM"],
                    titleWithoutQuery: y.intl.string(y.t.EHlAMc),
                    Component: a.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return {
                            sound: t,
                            key: t.soundId,
                        };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + l.length + o.length,
                    headerClassName: m || g ? O.secondarySection : void 0,
                }),
            ],
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, emojisLocked: n, soundmoji: r, stickers: i },
            index: a,
            options: o,
            channel: l,
        } = e;
        if (a < t.length) {
            let e = t[a];
            return (
                o.insertText(R(e), D(e)),
                {
                    type: g.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated,
                    },
                }
            );
        }
        if ((a -= t.length) < n.length) return { type: null };
        if ((a -= n.length) < i.length) {
            let e = i[a];
            return (
                o.insertText(""),
                o.sendSticker(e.sticker, d.V0.AUTOCOMPLETE),
                {
                    type: g.z2.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                        stickerId: e.sticker.id,
                    },
                }
            );
        }
        if ((a -= i.length) < r.length) {
            let e = r[a];
            return (
                o.insertText((0, s.Z)(e.sound.guildId, e.sound.soundId)),
                _.default.track(b.rMx.SOUNDMOJI_SELECT, {
                    channel_id: l.id,
                    guild_id: l.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                {
                    type: g.z2.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                    },
                }
            );
        }
        return { type: null };
    },
};
