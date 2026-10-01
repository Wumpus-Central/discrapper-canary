i.d(t, { t: () => a });
var s = i(652215),
    r = i(202541),
    n = i(375708);
let a = [
    {
        tier: s.TVA.TIER_1,
        perks: [
            {
                perkIcon: r.TP.EMOJI,
                getCopy: () =>
                    n.intl.formatToPlainString(n.t.Tlz0x1, { numEmojiSlots: r.TG[s.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: r.TP.SOUNDBOARD,
                getCopy: () =>
                    n.intl.formatToPlainString(n.t["v+MIfo"], {
                        numSoundboardSlots: r.TG[s.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: r.TP.ANIMATED, getCopy: () => n.intl.string(n.t.PbAyub) },
            { perkIcon: r.TP.AUDIO, getCopy: () => n.intl.string(n.t["WH+OeI"]) },
        ],
    },
    {
        tier: s.TVA.TIER_2,
        perks: [
            { perkIcon: r.TP.STREAM, getCopy: () => n.intl.string(n.t.y4ft4D) },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => n.intl.formatToPlainString(n.t.aFRl53, { uploadSizeLimit: n.intl.string(n.t.M6qV8j) }),
            },
            { perkIcon: r.TP.CUSTOM_ROLE_ICON, getCopy: () => n.intl.string(n.t["6PV6Qc"]) },
            { perkIcon: r.TP.CUSTOMIZATION, getCopy: () => n.intl.string(n.t["1a5rjl"]) },
        ],
    },
    {
        tier: s.TVA.TIER_3,
        perks: [
            { perkIcon: r.TP.VANITY, getCopy: () => n.intl.string(n.t.adNGjW) },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => n.intl.formatToPlainString(n.t.aFRl53, { uploadSizeLimit: n.intl.string(n.t.yMOW8D) }),
            },
            { perkIcon: r.TP.AUDIO, getCopy: () => n.intl.string(n.t.Tsljqo) },
            { perkIcon: r.TP.ANIMATED, getCopy: () => n.intl.string(n.t.nRKlmC) },
            {
                perkIcon: r.TP.STAGE_VIDEO,
                getCopy: () => n.intl.formatToPlainString(n.t.hsZ88d, { numStageSeats: s.uaN }),
            },
        ],
    },
];
