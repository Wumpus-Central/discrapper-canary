"use strict";
n.d(t, { t: () => o });
var r = n(473145),
    i = n(652215),
    s = n(788868),
    a = n(985018);
let o = [
    {
        tier: i.TVA.TIER_1,
        perks: [
            {
                perkIcon: r.TP.EMOJI,
                getCopy: () =>
                    a.intl.formatToPlainString(a.t.Tlz0x1, { numEmojiSlots: s.TG[i.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: r.TP.SOUNDBOARD,
                getCopy: () =>
                    a.intl.formatToPlainString(a.t["v+MIfo"], {
                        numSoundboardSlots: s.TG[i.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: r.TP.ANIMATED, getCopy: () => a.intl.string(a.t.PbAyub) },
            { perkIcon: r.TP.AUDIO, getCopy: () => a.intl.string(a.t["WH+OeI"]) },
        ],
    },
    {
        tier: i.TVA.TIER_2,
        perks: [
            { perkIcon: r.TP.STREAM, getCopy: () => a.intl.string(a.t.y4ft4D) },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.M6qV8j) }),
            },
            { perkIcon: r.TP.CUSTOM_ROLE_ICON, getCopy: () => a.intl.string(a.t["6PV6Qc"]) },
            { perkIcon: r.TP.CUSTOMIZATION, getCopy: () => a.intl.string(a.t["1a5rjl"]) },
        ],
    },
    {
        tier: i.TVA.TIER_3,
        perks: [
            { perkIcon: r.TP.VANITY, getCopy: () => a.intl.string(a.t.adNGjW) },
            {
                perkIcon: r.TP.UPLOAD,
                getCopy: () => a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.yMOW8D) }),
            },
            { perkIcon: r.TP.AUDIO, getCopy: () => a.intl.string(a.t.Tsljqo) },
            { perkIcon: r.TP.ANIMATED, getCopy: () => a.intl.string(a.t.nRKlmC) },
            {
                perkIcon: r.TP.STAGE_VIDEO,
                getCopy: () => a.intl.formatToPlainString(a.t.hsZ88d, { numStageSeats: i.uaN }),
            },
        ],
    },
];
