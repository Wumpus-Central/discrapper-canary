n.d(t, { Z: () => P });
var r = n(54381);
n(473749);
var i = n(588468),
    a = n(125900),
    o = n(12327),
    s = n(285651),
    l = n(268350),
    c = n(926491),
    u = n(373228),
    d = n(419922),
    f = n(430824),
    p = n(626135),
    _ = n(483360),
    m = n(877565),
    h = n(590921),
    g = n(761652),
    E = n(981631),
    b = n(388032),
    y = n(913235);
let O = 8,
    v = 4,
    S = 4,
    I = 40,
    T = 6;
function C(e, t) {
    return (0, r.jsx)(d.Z, {
        sticker: e,
        isInteracting: t,
        size: 40,
    });
}
function A(e) {
    return "".concat(g.Iv).concat(e.name).concat(g.Iv);
}
function N(e) {
    var t;
    let n = e.animated ? "a" : "";
    return e.managed || null == e.id
        ? "".concat(g.Iv).concat(e.name).concat(g.Iv)
        : "<"
              .concat(n, ":")
              .concat(null != (t = e.originalName) ? t : e.name, ":")
              .concat(e.id, ">");
}
let P = {
    sentinel: g.Iv,
    stores: [c.Z],
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n, r, i) {
        let o = r.allowSoundmoji && (0, a.dX)({ location: "queryResults" }),
            c = r.allowStickers || o ? 0 : I,
            u = E.rnv + c,
            {
                emojis: { unlocked: d },
            } = _.ZP.queryEmojiResults({
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
            (0, l.$p)();
            let t = _.ZP.queryStickers([n], !0, [e, (e, t) => t === s.eb.SENDABLE]),
                r = Math.max(v, O - d.length);
            (f = t.slice(0, r)), "-" === n[0] && (f = t.filter((e) => e.sticker.name === n));
        }
        let p = [];
        o &&
            ((p = _.ZP.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, S)),
            "-" === n[0] && (p = p.filter((e) => e.sound.name === n)));
        let m = d.slice(0, Math.max(T, u - f.length - p.length));
        return {
            results: {
                emojis: m,
                stickers: f,
                soundmoji: p,
            },
            metadata: {
                numEmojiResults: m.length,
                numStickerResults: f.length,
                numSoundmojiResults: p.length,
            },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: a },
                selectedIndex: o,
                query: s,
                onHover: l,
                onClick: c,
            } = e,
            u = t.length > 0,
            d = n.length > 0;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, m.HI)({
                    query: s,
                    selectedIndex: o,
                    autocompletes: t,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: b.t.ksAVYt,
                    titleWithoutQuery: b.intl.string(b.t.sMOuuS),
                    Component: i.ZP.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: g.Iv,
                        guild: null != e.guildId ? f.Z.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => "".concat(g.Iv).concat(e),
                    key: "emoji",
                }),
                u && d && (0, r.jsx)(i.ZP.Divider, { className: y.divider }),
                (0, m.HI)({
                    query: s,
                    selectedIndex: o,
                    autocompletes: n,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: b.t.uferGG,
                    titleWithoutQuery: b.intl.string(b.t["fT+Yjp"]),
                    Component: i.ZP.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: C,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: u ? y.secondarySection : void 0,
                }),
                (u || d) && a.length > 0 && (0, r.jsx)(i.ZP.Divider, { className: y.divider }),
                (0, m.HI)({
                    query: s,
                    selectedIndex: o,
                    autocompletes: a,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: b.t["0cKBGM"],
                    titleWithoutQuery: b.intl.string(b.t.EHlAMc),
                    Component: i.ZP.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return {
                            sound: t,
                            key: t.soundId,
                        };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: u || d ? y.secondarySection : void 0,
                }),
            ],
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, soundmoji: n, stickers: r },
            index: i,
            options: a,
            channel: s,
        } = e;
        if (i < t.length) {
            let e = t[i];
            return (
                a.insertText(A(e), N(e)),
                {
                    type: h.z2.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated,
                    },
                }
            );
        }
        if ((i -= t.length) < r.length) {
            let e = r[i];
            return (
                a.insertText(""),
                a.sendSticker(e.sticker, u.V0.AUTOCOMPLETE),
                {
                    type: h.z2.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        stickerId: e.sticker.id,
                    },
                }
            );
        }
        if ((i -= r.length) < n.length) {
            let e = n[i];
            return (
                a.insertText((0, o.Z)(e.sound.guildId, e.sound.soundId)),
                p.default.track(E.rMx.SOUNDMOJI_SELECT, {
                    channel_id: s.id,
                    guild_id: s.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                {
                    type: h.z2.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                    },
                }
            );
        }
        return { type: null };
    },
};
