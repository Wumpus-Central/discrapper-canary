r.d(t, {
    A: () => c,
}),
    r(321073);
var n = r(64700),
    a = r(403362),
    l = r(473145),
    o = r(568065),
    s = r(333354),
    i = r(985018);

function c(e) {
    let {
        includeEmojis: t,
        includeStickers: r,
        includeSoundboards: c,
    } = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {
              includeEmojis: !0,
              includeStickers: !0,
              includeSoundboards: !0,
          };
    return n.useMemo(() => {
        let n = [],
            u = (0, o.w$)();
        return (
            t &&
                n.push({
                    perkIcon: l.TP.EMOJI,
                    description: i.intl.formatToPlainString(s.default["NXvV0+"], {
                        totalEmojis: e.features.total_emoji_slots,
                        additionalEmojis: e.features.additional_emoji_slots,
                    }),
                }),
            r &&
                n.push({
                    perkIcon: l.TP.STICKER,
                    description: i.intl.formatToPlainString(s.default.ZEvvPz, {
                        totalStickers: e.features.total_sticker_slots,
                        additionalStickers: e.features.additional_sticker_slots,
                    }),
                }),
            c &&
                n.push({
                    perkIcon: l.TP.SOUNDBOARD,
                    description: i.intl.formatToPlainString(s.default["s9u/E7"], {
                        totalSoundboards: e.features.total_sound_slots,
                        additionalSoundboards: e.features.additional_sound_slots,
                    }),
                }),
            n.concat(e.features.features.map((e) => u[e]).filter(a.Vq))
        );
    }, [e, t, r, c]);
}
