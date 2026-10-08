(i.d(o, { A: () => l }), i(321073));
var s = i(582128),
    e = i(403362),
    a = i(202541),
    n = i(568065),
    r = i(356863),
    d = i(660183);
function l(t) {
    let {
        includeEmojis: o,
        includeStickers: i,
        includeSoundboards: l,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { includeEmojis: !0, includeStickers: !0, includeSoundboards: !0 };
    return s.useMemo(() => {
        let s = [],
            u = (0, n.w$)();
        return (
            o &&
                s.push({
                    perkIcon: a.TP.EMOJI,
                    description: d.intl.formatToPlainString(r.default["NXvV0+"], {
                        totalEmojis: t.features.total_emoji_slots,
                        additionalEmojis: t.features.additional_emoji_slots,
                    }),
                }),
            i &&
                s.push({
                    perkIcon: a.TP.STICKER,
                    description: d.intl.formatToPlainString(r.default.ZEvvPz, {
                        totalStickers: t.features.total_sticker_slots,
                        additionalStickers: t.features.additional_sticker_slots,
                    }),
                }),
            l &&
                s.push({
                    perkIcon: a.TP.SOUNDBOARD,
                    description: d.intl.formatToPlainString(r.default["s9u/E7"], {
                        totalSoundboards: t.features.total_sound_slots,
                        additionalSoundboards: t.features.additional_sound_slots,
                    }),
                }),
            s.concat(t.features.features.map((t) => u[t]).filter(e.Vq))
        );
    }, [t, o, i, l]);
}
