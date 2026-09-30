i.d(t, { t: () => l });
var s = i(652215),
    n = i(202541),
    r = i(375708);
let l = [
    {
        tier: s.TVA.TIER_1,
        perks: [
            {
                perkIcon: n.TP.EMOJI,
                getCopy: () =>
                    r.intl.formatToPlainString(r.t.Tlz0x1, { numEmojiSlots: n.TG[s.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: n.TP.SOUNDBOARD,
                getCopy: () =>
                    r.intl.formatToPlainString(r.t["v+MIfo"], {
                        numSoundboardSlots: n.TG[s.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: n.TP.ANIMATED, getCopy: () => r.intl.string(r.t.PbAyub) },
            { perkIcon: n.TP.AUDIO, getCopy: () => r.intl.string(r.t["WH+OeI"]) },
        ],
    },
    {
        tier: s.TVA.TIER_2,
        perks: [
            { perkIcon: n.TP.STREAM, getCopy: () => r.intl.string(r.t.y4ft4D) },
            {
                perkIcon: n.TP.UPLOAD,
                getCopy: () => r.intl.formatToPlainString(r.t.aFRl53, { uploadSizeLimit: r.intl.string(r.t.M6qV8j) }),
            },
            { perkIcon: n.TP.CUSTOM_ROLE_ICON, getCopy: () => r.intl.string(r.t["6PV6Qc"]) },
            { perkIcon: n.TP.CUSTOMIZATION, getCopy: () => r.intl.string(r.t["1a5rjl"]) },
        ],
    },
    {
        tier: s.TVA.TIER_3,
        perks: [
            { perkIcon: n.TP.VANITY, getCopy: () => r.intl.string(r.t.adNGjW) },
            {
                perkIcon: n.TP.UPLOAD,
                getCopy: () => r.intl.formatToPlainString(r.t.aFRl53, { uploadSizeLimit: r.intl.string(r.t.yMOW8D) }),
            },
            { perkIcon: n.TP.AUDIO, getCopy: () => r.intl.string(r.t.Tsljqo) },
            { perkIcon: n.TP.ANIMATED, getCopy: () => r.intl.string(r.t.nRKlmC) },
            {
                perkIcon: n.TP.STAGE_VIDEO,
                getCopy: () => r.intl.formatToPlainString(r.t.hsZ88d, { numStageSeats: s.uaN }),
            },
        ],
    },
];
