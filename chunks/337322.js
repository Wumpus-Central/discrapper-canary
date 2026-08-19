a.d(e, { A: () => d }), a(321073);
var s = a(582128),
    i = a(403362),
    r = a(473145),
    l = a(568065),
    n = a(853513),
    o = a(375708);
function d(t) {
    let {
        includeEmojis: e,
        includeStickers: a,
        includeSoundboards: d,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { includeEmojis: !0, includeStickers: !0, includeSoundboards: !0 };
    return s.useMemo(() => {
        let s = [],
            u = (0, l.w$)();
        return (
            e &&
                s.push({
                    perkIcon: r.TP.EMOJI,
                    description: o.intl.formatToPlainString(n.default["NXvV0+"], {
                        totalEmojis: t.features.total_emoji_slots,
                        additionalEmojis: t.features.additional_emoji_slots,
                    }),
                }),
            a &&
                s.push({
                    perkIcon: r.TP.STICKER,
                    description: o.intl.formatToPlainString(n.default.ZEvvPz, {
                        totalStickers: t.features.total_sticker_slots,
                        additionalStickers: t.features.additional_sticker_slots,
                    }),
                }),
            d &&
                s.push({
                    perkIcon: r.TP.SOUNDBOARD,
                    description: o.intl.formatToPlainString(n.default["s9u/E7"], {
                        totalSoundboards: t.features.total_sound_slots,
                        additionalSoundboards: t.features.additional_sound_slots,
                    }),
                }),
            s.concat(t.features.features.map((t) => u[t]).filter(i.Vq))
        );
    }, [t, e, a, d]);
}
