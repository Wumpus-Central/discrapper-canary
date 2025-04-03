n.d(t, { Z: () => l }), n(653041);
var r = n(192379),
    o = n(823379),
    s = n(267642),
    a = n(535396),
    c = n(680278),
    i = n(388032);
function l(e) {
    let {
        includeEmojis: t,
        includeStickers: n,
        includeSoundboards: l
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {
              includeEmojis: !0,
              includeStickers: !0,
              includeSoundboards: !0
          };
    return r.useMemo(() => {
        let r = [],
            u = (0, a.d5)();
        return (
            t &&
                r.push({
                    perkIcon: s.Ro.EMOJI,
                    description: i.NW.formatToPlainString(c.Z.NXvV09, {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots
                    })
                }),
            n &&
                r.push({
                    perkIcon: s.Ro.STICKER,
                    description: i.NW.formatToPlainString(c.Z.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots
                    })
                }),
            l &&
                r.push({
                    perkIcon: s.Ro.SOUNDBOARD,
                    description: i.NW.formatToPlainString(c.Z['s9u/Ex'], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots
                    })
                }),
            r.concat(e.features.features.map((e) => u[e]).filter(o.lm))
        );
    }, [e, t, n, l]);
}
