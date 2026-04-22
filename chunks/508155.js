i.d(t, { t: () => r });
var s = i(473145),
    l = i(652215),
    a = i(788868),
    n = i(985018);
let r = [
    {
        tier: l.TVA.TIER_1,
        perks: [
            {
                perkIcon: s.TP.EMOJI,
                getCopy: () =>
                    n.intl.formatToPlainString(n.t.Tlz0x1, { numEmojiSlots: a.TG[l.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: s.TP.SOUNDBOARD,
                getCopy: () =>
                    n.intl.formatToPlainString(n.t["v+MIfo"], {
                        numSoundboardSlots: a.TG[l.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: s.TP.ANIMATED, getCopy: () => n.intl.string(n.t.PbAyub) },
            { perkIcon: s.TP.AUDIO, getCopy: () => n.intl.string(n.t["WH+OeI"]) },
        ],
    },
    {
        tier: l.TVA.TIER_2,
        perks: [
            { perkIcon: s.TP.STREAM, getCopy: () => n.intl.string(n.t.y4ft4D) },
            {
                perkIcon: s.TP.UPLOAD,
                getCopy: () => n.intl.formatToPlainString(n.t.aFRl53, { uploadSizeLimit: n.intl.string(n.t.M6qV8j) }),
            },
            { perkIcon: s.TP.CUSTOM_ROLE_ICON, getCopy: () => n.intl.string(n.t["6PV6Qc"]) },
            { perkIcon: s.TP.CUSTOMIZATION, getCopy: () => n.intl.string(n.t["1a5rjl"]) },
        ],
    },
    {
        tier: l.TVA.TIER_3,
        perks: [
            { perkIcon: s.TP.VANITY, getCopy: () => n.intl.string(n.t.adNGjW) },
            {
                perkIcon: s.TP.UPLOAD,
                getCopy: () => n.intl.formatToPlainString(n.t.aFRl53, { uploadSizeLimit: n.intl.string(n.t.yMOW8D) }),
            },
            { perkIcon: s.TP.AUDIO, getCopy: () => n.intl.string(n.t.Tsljqo) },
            { perkIcon: s.TP.ANIMATED, getCopy: () => n.intl.string(n.t.nRKlmC) },
            {
                perkIcon: s.TP.STAGE_VIDEO,
                getCopy: () => n.intl.formatToPlainString(n.t.hsZ88d, { numStageSeats: l.uaN }),
            },
        ],
    },
];
