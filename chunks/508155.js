"use strict";
n.d(t, { t: () => o });
var i = n(473145),
    r = n(652215),
    s = n(788868),
    a = n(375708);
let o = [
    {
        tier: r.TVA.TIER_1,
        perks: [
            {
                perkIcon: i.TP.EMOJI,
                getCopy: () =>
                    a.intl.formatToPlainString(a.t.Tlz0x1, { numEmojiSlots: s.TG[r.TVA.TIER_1].limits.emoji }),
            },
            {
                perkIcon: i.TP.SOUNDBOARD,
                getCopy: () =>
                    a.intl.formatToPlainString(a.t["v+MIfo"], {
                        numSoundboardSlots: s.TG[r.TVA.TIER_1].limits.soundboardSounds,
                    }),
                isNew: !0,
            },
            { perkIcon: i.TP.ANIMATED, getCopy: () => a.intl.string(a.t.PbAyub) },
            { perkIcon: i.TP.AUDIO, getCopy: () => a.intl.string(a.t["WH+OeI"]) },
        ],
    },
    {
        tier: r.TVA.TIER_2,
        perks: [
            { perkIcon: i.TP.STREAM, getCopy: () => a.intl.string(a.t.y4ft4D) },
            {
                perkIcon: i.TP.UPLOAD,
                getCopy: () => a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.M6qV8j) }),
            },
            { perkIcon: i.TP.CUSTOM_ROLE_ICON, getCopy: () => a.intl.string(a.t["6PV6Qc"]) },
            { perkIcon: i.TP.CUSTOMIZATION, getCopy: () => a.intl.string(a.t["1a5rjl"]) },
        ],
    },
    {
        tier: r.TVA.TIER_3,
        perks: [
            { perkIcon: i.TP.VANITY, getCopy: () => a.intl.string(a.t.adNGjW) },
            {
                perkIcon: i.TP.UPLOAD,
                getCopy: () => a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.yMOW8D) }),
            },
            { perkIcon: i.TP.AUDIO, getCopy: () => a.intl.string(a.t.Tsljqo) },
            { perkIcon: i.TP.ANIMATED, getCopy: () => a.intl.string(a.t.nRKlmC) },
            {
                perkIcon: i.TP.STAGE_VIDEO,
                getCopy: () => a.intl.formatToPlainString(a.t.hsZ88d, { numStageSeats: r.uaN }),
            },
        ],
    },
];
