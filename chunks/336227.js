n.d(t, { Z: () => s }), n(539854);
var r = n(647438),
    o = n(823379),
    a = n(267642),
    i = n(535396),
    l = n(989308),
    c = n(388032);
function s(e) {
    let {
        includeEmojis: t,
        includeStickers: n,
        includeSoundboards: s,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {
              includeEmojis: !0,
              includeStickers: !0,
              includeSoundboards: !0,
          };
    return r.useMemo(() => {
        let r = [],
            u = (0, i.d5)();
        return (
            t &&
                r.push({
                    perkIcon: a.Ro.EMOJI,
                    description: c.intl.formatToPlainString(l.default.NXvV09, {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots,
                    }),
                }),
            n &&
                r.push({
                    perkIcon: a.Ro.STICKER,
                    description: c.intl.formatToPlainString(l.default.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots,
                    }),
                }),
            s &&
                r.push({
                    perkIcon: a.Ro.SOUNDBOARD,
                    description: c.intl.formatToPlainString(l.default["s9u/Ex"], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots,
                    }),
                }),
            r.concat(e.features.features.map((e) => u[e]).filter(o.lm))
        );
    }, [e, t, n, s]);
}
