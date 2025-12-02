n.d(t, { C: () => s });
var r = n(267642),
    i = n(981631),
    a = n(474936),
    o = n(388032);
let s = [
    {
        tier: i.Eu4.TIER_1,
        perks: [
            {
                perkIcon: r.Ro.EMOJI,
                getCopy: () =>
                    o.intl.formatToPlainString(o.t.Tlz0x1, { numEmojiSlots: a.HO[i.Eu4.TIER_1].limits.emoji }),
            },
            {
                perkIcon: r.Ro.SOUNDBOARD,
                getCopy: () =>
                    o.intl.formatToPlainString(o.t["v+MIfo"], {
                        numSoundboardSlots: a.HO[i.Eu4.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            {
                perkIcon: r.Ro.ANIMATED,
                getCopy: () => o.intl.string(o.t.PbAyub),
            },
            {
                perkIcon: r.Ro.AUDIO,
                getCopy: () => o.intl.string(o.t["WH+OeI"]),
            },
        ],
    },
    {
        tier: i.Eu4.TIER_2,
        perks: [
            {
                perkIcon: r.Ro.STREAM,
                getCopy: () => o.intl.string(o.t.y4ft4D),
            },
            {
                perkIcon: r.Ro.UPLOAD,
                getCopy: () => o.intl.formatToPlainString(o.t.aFRl53, { uploadSizeLimit: o.intl.string(o.t.M6qV8j) }),
            },
            {
                perkIcon: r.Ro.CUSTOM_ROLE_ICON,
                getCopy: () => o.intl.string(o.t["6PV6Qc"]),
            },
            {
                perkIcon: r.Ro.CUSTOMIZATION,
                getCopy: () => o.intl.string(o.t["1a5rjl"]),
            },
        ],
    },
    {
        tier: i.Eu4.TIER_3,
        perks: [
            {
                perkIcon: r.Ro.VANITY,
                getCopy: () => o.intl.string(o.t.adNGjW),
            },
            {
                perkIcon: r.Ro.UPLOAD,
                getCopy: () => o.intl.formatToPlainString(o.t.aFRl53, { uploadSizeLimit: o.intl.string(o.t.yMOW8D) }),
            },
            {
                perkIcon: r.Ro.AUDIO,
                getCopy: () => o.intl.string(o.t.Tsljqo),
            },
            {
                perkIcon: r.Ro.ANIMATED,
                getCopy: () => o.intl.string(o.t.nRKlmC),
            },
            {
                perkIcon: r.Ro.STAGE_VIDEO,
                getCopy: () => o.intl.formatToPlainString(o.t.hsZ88d, { numStageSeats: i.RcX }),
            },
        ],
    },
];
