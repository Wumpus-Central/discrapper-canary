t.d(o, { Z: () => l }), t(653041);
var n = t(192379),
    r = t(823379),
    a = t(267642),
    c = t(535396),
    s = t(730621),
    i = t(388032);
function l(e) {
    let {
        includeEmojis: o,
        includeStickers: t,
        includeSoundboards: l
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {
              includeEmojis: !0,
              includeStickers: !0,
              includeSoundboards: !0
          };
    return n.useMemo(() => {
        let n = [],
            u = (0, c.d5)();
        return (
            o &&
                n.push({
                    perkIcon: a.Ro.EMOJI,
                    description: i.NW.formatToPlainString(s.Z.NXvV09, {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots
                    })
                }),
            t &&
                n.push({
                    perkIcon: a.Ro.STICKER,
                    description: i.NW.formatToPlainString(s.Z.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots
                    })
                }),
            l &&
                n.push({
                    perkIcon: a.Ro.SOUNDBOARD,
                    description: i.NW.formatToPlainString(s.Z['s9u/Ex'], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots
                    })
                }),
            n.concat(e.features.features.map((e) => u[e]).filter(r.lm))
        );
    }, [e, o, t, l]);
}
