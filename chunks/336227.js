n.d(t, { Z: () => c }), n(539854);
var r = n(73800),
    o = n(823379),
    a = n(267642),
    i = n(535396),
    s = n(155457),
    l = n(388032);
function c(e) {
    let {
        includeEmojis: t,
        includeStickers: n,
        includeSoundboards: c
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {
              includeEmojis: !0,
              includeStickers: !0,
              includeSoundboards: !0
          };
    return r.useMemo(() => {
        let r = [],
            u = (0, i.d5)();
        return (
            t &&
                r.push({
                    perkIcon: a.Ro.EMOJI,
                    description: l.intl.formatToPlainString(s.default.NXvV09, {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots
                    })
                }),
            n &&
                r.push({
                    perkIcon: a.Ro.STICKER,
                    description: l.intl.formatToPlainString(s.default.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots
                    })
                }),
            c &&
                r.push({
                    perkIcon: a.Ro.SOUNDBOARD,
                    description: l.intl.formatToPlainString(s.default['s9u/Ex'], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots
                    })
                }),
            r.concat(e.features.features.map((e) => u[e]).filter(o.lm))
        );
    }, [e, t, n, c]);
}
