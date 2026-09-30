i.d(t, { t: () => a });
var n = i(473145),
    s = i(652215),
    r = i(202541),
    l = i(375708);
let a = [
    {
        tier: s.TVA.TIER_1,
        perks: [
            {
                perkIcon: n.TP.EMOJI,
                getCopy: () =>
                    l.intl.formatToPlainString(l.t.Tlz0x1, { numEmojiSlots: r.TG[s.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: n.TP.SOUNDBOARD,
                getCopy: () =>
                    l.intl.formatToPlainString(l.t["v+MIfo"], {
                        numSoundboardSlots: r.TG[s.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: n.TP.ANIMATED, getCopy: () => l.intl.string(l.t.PbAyub) },
            { perkIcon: n.TP.AUDIO, getCopy: () => l.intl.string(l.t["WH+OeI"]) },
        ],
    },
    {
        tier: s.TVA.TIER_2,
        perks: [
            { perkIcon: n.TP.STREAM, getCopy: () => l.intl.string(l.t.y4ft4D) },
            {
                perkIcon: n.TP.UPLOAD,
                getCopy: () => l.intl.formatToPlainString(l.t.aFRl53, { uploadSizeLimit: l.intl.string(l.t.M6qV8j) }),
            },
            { perkIcon: n.TP.CUSTOM_ROLE_ICON, getCopy: () => l.intl.string(l.t["6PV6Qc"]) },
            { perkIcon: n.TP.CUSTOMIZATION, getCopy: () => l.intl.string(l.t["1a5rjl"]) },
        ],
    },
    {
        tier: s.TVA.TIER_3,
        perks: [
            { perkIcon: n.TP.VANITY, getCopy: () => l.intl.string(l.t.adNGjW) },
            {
                perkIcon: n.TP.UPLOAD,
                getCopy: () => l.intl.formatToPlainString(l.t.aFRl53, { uploadSizeLimit: l.intl.string(l.t.yMOW8D) }),
            },
            { perkIcon: n.TP.AUDIO, getCopy: () => l.intl.string(l.t.Tsljqo) },
            { perkIcon: n.TP.ANIMATED, getCopy: () => l.intl.string(l.t.nRKlmC) },
            {
                perkIcon: n.TP.STAGE_VIDEO,
                getCopy: () => l.intl.formatToPlainString(l.t.hsZ88d, { numStageSeats: s.uaN }),
            },
        ],
    },
];
