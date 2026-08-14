i.d(t, { t: () => l });
var s = i(473145),
    n = i(652215),
    r = i(202541),
    a = i(375708);
let l = [
    {
        tier: n.TVA.TIER_1,
        perks: [
            {
                perkIcon: s.TP.EMOJI,
                getCopy: () =>
                    a.intl.formatToPlainString(a.t.Tlz0x1, { numEmojiSlots: r.TG[n.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: s.TP.SOUNDBOARD,
                getCopy: () =>
                    a.intl.formatToPlainString(a.t["v+MIfo"], {
                        numSoundboardSlots: r.TG[n.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: s.TP.ANIMATED, getCopy: () => a.intl.string(a.t.PbAyub) },
            { perkIcon: s.TP.AUDIO, getCopy: () => a.intl.string(a.t["WH+OeI"]) },
        ],
    },
    {
        tier: n.TVA.TIER_2,
        perks: [
            { perkIcon: s.TP.STREAM, getCopy: () => a.intl.string(a.t.y4ft4D) },
            {
                perkIcon: s.TP.UPLOAD,
                getCopy: () => a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.M6qV8j) }),
            },
            { perkIcon: s.TP.CUSTOM_ROLE_ICON, getCopy: () => a.intl.string(a.t["6PV6Qc"]) },
            { perkIcon: s.TP.CUSTOMIZATION, getCopy: () => a.intl.string(a.t["1a5rjl"]) },
        ],
    },
    {
        tier: n.TVA.TIER_3,
        perks: [
            { perkIcon: s.TP.VANITY, getCopy: () => a.intl.string(a.t.adNGjW) },
            {
                perkIcon: s.TP.UPLOAD,
                getCopy: () => a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.yMOW8D) }),
            },
            { perkIcon: s.TP.AUDIO, getCopy: () => a.intl.string(a.t.Tsljqo) },
            { perkIcon: s.TP.ANIMATED, getCopy: () => a.intl.string(a.t.nRKlmC) },
            {
                perkIcon: s.TP.STAGE_VIDEO,
                getCopy: () => a.intl.formatToPlainString(a.t.hsZ88d, { numStageSeats: n.uaN }),
            },
        ],
    },
];
