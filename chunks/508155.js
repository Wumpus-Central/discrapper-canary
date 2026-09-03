i.d(t, { t: () => a });
var s = i(473145),
    n = i(652215),
    r = i(202541),
    l = i(375708);
let a = [
    {
        tier: n.TVA.TIER_1,
        perks: [
            {
                perkIcon: s.TP.EMOJI,
                getCopy: () =>
                    l.intl.formatToPlainString(l.t.Tlz0x1, { numEmojiSlots: r.TG[n.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: s.TP.SOUNDBOARD,
                getCopy: () =>
                    l.intl.formatToPlainString(l.t["v+MIfo"], {
                        numSoundboardSlots: r.TG[n.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: s.TP.ANIMATED, getCopy: () => l.intl.string(l.t.PbAyub) },
            { perkIcon: s.TP.AUDIO, getCopy: () => l.intl.string(l.t["WH+OeI"]) },
        ],
    },
    {
        tier: n.TVA.TIER_2,
        perks: [
            { perkIcon: s.TP.STREAM, getCopy: () => l.intl.string(l.t.y4ft4D) },
            {
                perkIcon: s.TP.UPLOAD,
                getCopy: () => l.intl.formatToPlainString(l.t.aFRl53, { uploadSizeLimit: l.intl.string(l.t.M6qV8j) }),
            },
            { perkIcon: s.TP.CUSTOM_ROLE_ICON, getCopy: () => l.intl.string(l.t["6PV6Qc"]) },
            { perkIcon: s.TP.CUSTOMIZATION, getCopy: () => l.intl.string(l.t["1a5rjl"]) },
        ],
    },
    {
        tier: n.TVA.TIER_3,
        perks: [
            { perkIcon: s.TP.VANITY, getCopy: () => l.intl.string(l.t.adNGjW) },
            {
                perkIcon: s.TP.UPLOAD,
                getCopy: () => l.intl.formatToPlainString(l.t.aFRl53, { uploadSizeLimit: l.intl.string(l.t.yMOW8D) }),
            },
            { perkIcon: s.TP.AUDIO, getCopy: () => l.intl.string(l.t.Tsljqo) },
            { perkIcon: s.TP.ANIMATED, getCopy: () => l.intl.string(l.t.nRKlmC) },
            {
                perkIcon: s.TP.STAGE_VIDEO,
                getCopy: () => l.intl.formatToPlainString(l.t.hsZ88d, { numStageSeats: n.uaN }),
            },
        ],
    },
];
