n.d(t, { t: () => l });
var r = n(473145),
    a = n(652215),
    i = n(788868),
    o = n(985018);
let l = [
    {
        tier: a.TVA.TIER_1,
        perks: [
            {
                perkIcon: r.TP.EMOJI,
                getCopy: () =>
                    o.intl.formatToPlainString(o.t.Tlz0x1, { numEmojiSlots: i.TG[a.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: r.TP.SOUNDBOARD,
                getCopy: () =>
                    o.intl.formatToPlainString(o.t["v+MIfo"], {
                        numSoundboardSlots: i.TG[a.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: r.TP.ANIMATED, getCopy: () => o.intl.string(o.t.PbAyub) },
            { perkIcon: r.TP.AUDIO, getCopy: () => o.intl.string(o.t["WH+OeI"]) },
        ],
    },
    {
        tier: a.TVA.TIER_2,
        perks: [
            { perkIcon: r.TP.STREAM, getCopy: () => o.intl.string(o.t.y4ft4D) },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => o.intl.formatToPlainString(o.t.aFRl53, { uploadSizeLimit: o.intl.string(o.t.M6qV8j) }),
            },
            { perkIcon: r.TP.CUSTOM_ROLE_ICON, getCopy: () => o.intl.string(o.t["6PV6Qc"]) },
            { perkIcon: r.TP.CUSTOMIZATION, getCopy: () => o.intl.string(o.t["1a5rjl"]) },
        ],
    },
    {
        tier: a.TVA.TIER_3,
        perks: [
            { perkIcon: r.TP.VANITY, getCopy: () => o.intl.string(o.t.adNGjW) },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => o.intl.formatToPlainString(o.t.aFRl53, { uploadSizeLimit: o.intl.string(o.t.yMOW8D) }),
            },
            { perkIcon: r.TP.AUDIO, getCopy: () => o.intl.string(o.t.Tsljqo) },
            { perkIcon: r.TP.ANIMATED, getCopy: () => o.intl.string(o.t.nRKlmC) },
            {
                perkIcon: r.TP.STAGE_VIDEO,
                getCopy: () => o.intl.formatToPlainString(o.t.hsZ88d, { numStageSeats: a.uaN }),
            },
        ],
    },
];
