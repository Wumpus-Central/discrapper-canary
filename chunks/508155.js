n.d(t, { t: () => a });
var i = n(473145),
    l = n(652215),
    s = n(788868),
    r = n(375708);
let a = [
    {
        tier: l.TVA.TIER_1,
        perks: [
            {
                perkIcon: i.TP.EMOJI,
                getCopy: () =>
                    r.intl.formatToPlainString(r.t.Tlz0x1, { numEmojiSlots: s.TG[l.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: i.TP.SOUNDBOARD,
                getCopy: () =>
                    r.intl.formatToPlainString(r.t["v+MIfo"], {
                        numSoundboardSlots: s.TG[l.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: i.TP.ANIMATED, getCopy: () => r.intl.string(r.t.PbAyub) },
            { perkIcon: i.TP.AUDIO, getCopy: () => r.intl.string(r.t["WH+OeI"]) },
        ],
    },
    {
        tier: l.TVA.TIER_2,
        perks: [
            { perkIcon: i.TP.STREAM, getCopy: () => r.intl.string(r.t.y4ft4D) },
            {
                perkIcon: i.TP.UPLOAD,
                getCopy: () => r.intl.formatToPlainString(r.t.aFRl53, { uploadSizeLimit: r.intl.string(r.t.M6qV8j) }),
            },
            { perkIcon: i.TP.CUSTOM_ROLE_ICON, getCopy: () => r.intl.string(r.t["6PV6Qc"]) },
            { perkIcon: i.TP.CUSTOMIZATION, getCopy: () => r.intl.string(r.t["1a5rjl"]) },
        ],
    },
    {
        tier: l.TVA.TIER_3,
        perks: [
            { perkIcon: i.TP.VANITY, getCopy: () => r.intl.string(r.t.adNGjW) },
            {
                perkIcon: i.TP.UPLOAD,
                getCopy: () => r.intl.formatToPlainString(r.t.aFRl53, { uploadSizeLimit: r.intl.string(r.t.yMOW8D) }),
            },
            { perkIcon: i.TP.AUDIO, getCopy: () => r.intl.string(r.t.Tsljqo) },
            { perkIcon: i.TP.ANIMATED, getCopy: () => r.intl.string(r.t.nRKlmC) },
            {
                perkIcon: i.TP.STAGE_VIDEO,
                getCopy: () => r.intl.formatToPlainString(r.t.hsZ88d, { numStageSeats: l.uaN }),
            },
        ],
    },
];
