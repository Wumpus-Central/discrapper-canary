n.d(t, {
    XV: () => o,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var r,
    i = n(379405),
    a = n(481060),
    l = n(388032);
let o = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => l.intl.string(l.t.jbIRBE),
            icon: a.jrt,
        },
        [i._.CASUAL]: {
            getText: () => l.intl.string(l.t.xcFFv6),
            icon: a.jrt,
        },
        [i._.INTERMEDIATE]: {
            getText: () => l.intl.string(l.t["A/mIs/"]),
            icon: a.jrt,
        },
        [i._.EXPERT]: {
            getText: () => l.intl.string(l.t.RIOFc2),
            icon: a.jrt,
        },
        [i._.OBSESSED]: {
            getText: () => l.intl.string(l.t.isPJDu),
            icon: a.lbB,
        },
        [i._.LOVE_IT]: {
            getText: () => l.intl.string(l.t["1rN7BF"]),
            icon: a.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => l.intl.string(l.t.bCBpVg),
            icon: a.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => l.intl.string(l.t["/WcmcP"]),
            icon: a.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => l.intl.string(l.t["NXZ/MZ"]),
            icon: a.kZ9,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => l.intl.string(l.t.q30PoH),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_GROUP]: {
            getText: () => l.intl.string(l.t.DWWAAQ),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => l.intl.string(l.t.KQDVvH),
            icon: a.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => l.intl.string(l.t["5HhQo+"]),
            icon: a.iFz,
        },
        [i._.LOOKING_TO_DISCUSS]: {
            getText: () => l.intl.string(l.t.GipOCq),
            icon: a.iFz,
        },
    },
    c = (e) => {
        let t = o[e];
        return null != t ? t : null;
    };
var s = (((r = {}).RADIO = "radio"), (r.CHECKBOX = "checkbox"), r);
let u = {
    skill_level: {
        getLabel: () => l.intl.string(l.t.MKqADM),
        type: "radio",
        tags: [i._.CASUAL, i._.INTERMEDIATE, i._.EXPERT, i._.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => l.intl.string(l.t["7/umul"]),
        type: "checkbox",
        tags: [i._.OBSESSED, i._.LOVE_IT, i._.KIND_OF_LOVE_IT, i._.KIND_OF_HATE_IT, i._.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => l.intl.string(l.t["5Dez17"]),
        type: "checkbox",
        tags: [
            i._.LOOKING_FOR_GROUP,
            i._.OPEN_TO_PLAY,
            i._.LOOKING_FOR_TIPS,
            i._.OPEN_TO_TEACH,
            i._.LOOKING_TO_DISCUSS,
        ],
    },
};
