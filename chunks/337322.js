s.d(e, { A: () => d }), s(321073);
var a = s(64700),
    o = s(403362),
    i = s(473145),
    r = s(568065),
    n = s(853513),
    l = s(375708);
function d(t) {
    let {
        includeEmojis: e,
        includeStickers: s,
        includeSoundboards: d,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { includeEmojis: !0, includeStickers: !0, includeSoundboards: !0 };
    return a.useMemo(() => {
        let a = [],
            u = (0, r.w$)();
        return (
            e &&
                a.push({
                    perkIcon: i.TP.EMOJI,
                    description: l.intl.formatToPlainString(n.default["NXvV0+"], {
                        totalEmojis: t.features.total_emoji_slots,
                        additionalEmojis: t.features.additional_emoji_slots,
                    }),
                }),
            s &&
                a.push({
                    perkIcon: i.TP.STICKER,
                    description: l.intl.formatToPlainString(n.default.ZEvvPz, {
                        totalStickers: t.features.total_sticker_slots,
                        additionalStickers: t.features.additional_sticker_slots,
                    }),
                }),
            d &&
                a.push({
                    perkIcon: i.TP.SOUNDBOARD,
                    description: l.intl.formatToPlainString(n.default["s9u/E7"], {
                        totalSoundboards: t.features.total_sound_slots,
                        additionalSoundboards: t.features.additional_sound_slots,
                    }),
                }),
            a.concat(t.features.features.map((t) => u[t]).filter(o.Vq))
        );
    }, [t, e, s, d]);
}
