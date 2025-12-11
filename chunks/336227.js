o.d(t, { Z: () => l }), o(539854);
var n = o(473749),
    a = o(823379),
    r = o(267642),
    c = o(535396),
    s = o(44542),
    i = o(388032);
function l(e) {
    let {
        includeEmojis: t,
        includeStickers: o,
        includeSoundboards: l,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {
              includeEmojis: !0,
              includeStickers: !0,
              includeSoundboards: !0,
          };
    return n.useMemo(() => {
        let n = [],
            d = (0, c.d5)();
        return (
            t &&
                n.push({
                    perkIcon: r.Ro.EMOJI,
                    description: i.intl.formatToPlainString(s.default["NXvV0+"], {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots,
                    }),
                }),
            o &&
                n.push({
                    perkIcon: r.Ro.STICKER,
                    description: i.intl.formatToPlainString(s.default.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots,
                    }),
                }),
            l &&
                n.push({
                    perkIcon: r.Ro.SOUNDBOARD,
                    description: i.intl.formatToPlainString(s.default["s9u/E7"], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots,
                    }),
                }),
            n.concat(e.features.features.map((e) => d[e]).filter(a.lm))
        );
    }, [e, t, o, l]);
}
