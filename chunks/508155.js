n.d(t, { t: () => o });
var r = n(473145),
    i = n(652215),
    a = n(788868),
    s = n(985018);
let o = [
    {
        tier: i.TVA.TIER_1,
        perks: [
            {
                perkIcon: r.TP.EMOJI,
                getCopy: () =>
                    s.intl.formatToPlainString(s.t.Tlz0x1, { numEmojiSlots: a.TG[i.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: r.TP.SOUNDBOARD,
                getCopy: () =>
                    s.intl.formatToPlainString(s.t["v+MIfo"], {
                        numSoundboardSlots: a.TG[i.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            {
                perkIcon: r.TP.ANIMATED,
                getCopy: () => s.intl.string(s.t.PbAyub),
            },
            {
                perkIcon: r.TP.AUDIO,
                getCopy: () => s.intl.string(s.t["WH+OeI"]),
            },
        ],
    },
    {
        tier: i.TVA.TIER_2,
        perks: [
            {
                perkIcon: r.TP.STREAM,
                getCopy: () => s.intl.string(s.t.y4ft4D),
            },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => s.intl.formatToPlainString(s.t.aFRl53, { uploadSizeLimit: s.intl.string(s.t.M6qV8j) }),
            },
            {
                perkIcon: r.TP.CUSTOM_ROLE_ICON,
                getCopy: () => s.intl.string(s.t["6PV6Qc"]),
            },
            {
                perkIcon: r.TP.CUSTOMIZATION,
                getCopy: () => s.intl.string(s.t["1a5rjl"]),
            },
        ],
    },
    {
        tier: i.TVA.TIER_3,
        perks: [
            {
                perkIcon: r.TP.VANITY,
                getCopy: () => s.intl.string(s.t.adNGjW),
            },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => s.intl.formatToPlainString(s.t.aFRl53, { uploadSizeLimit: s.intl.string(s.t.yMOW8D) }),
            },
            {
                perkIcon: r.TP.AUDIO,
                getCopy: () => s.intl.string(s.t.Tsljqo),
            },
            {
                perkIcon: r.TP.ANIMATED,
                getCopy: () => s.intl.string(s.t.nRKlmC),
            },
            {
                perkIcon: r.TP.STAGE_VIDEO,
                getCopy: () => s.intl.formatToPlainString(s.t.hsZ88d, { numStageSeats: i.uaN }),
            },
        ],
    },
];
