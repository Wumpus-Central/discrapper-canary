a.d(t, { A: () => c }), a(321073);
var n = a(64700),
    r = a(403362),
    s = a(473145),
    i = a(568065),
    l = a(333354),
    o = a(985018);
function c(e) {
    let {
        includeEmojis: t,
        includeStickers: a,
        includeSoundboards: c,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { includeEmojis: !0, includeStickers: !0, includeSoundboards: !0 };
    return n.useMemo(() => {
        let n = [],
            d = (0, i.w$)();
        return (
            t &&
                n.push({
                    perkIcon: s.TP.EMOJI,
                    description: o.intl.formatToPlainString(l.default["NXvV0+"], {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots,
                    }),
                }),
            a &&
                n.push({
                    perkIcon: s.TP.STICKER,
                    description: o.intl.formatToPlainString(l.default.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots,
                    }),
                }),
            c &&
                n.push({
                    perkIcon: s.TP.SOUNDBOARD,
                    description: o.intl.formatToPlainString(l.default["s9u/E7"], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots,
                    }),
                }),
            n.concat(e.features.features.map((e) => d[e]).filter(r.Vq))
        );
    }, [e, t, a, c]);
}
