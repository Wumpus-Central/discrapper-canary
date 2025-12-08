n.d(t, {
    XV: () => o,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var r,
    i = n(379405),
    l = n(481060),
    a = n(388032);
let o = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => a.intl.string(a.t.jbIRBE),
            icon: l.jrt,
        },
        [i._.CASUAL]: {
            getText: () => a.intl.string(a.t.xcFFv6),
            icon: l.jrt,
        },
        [i._.INTERMEDIATE]: {
            getText: () => a.intl.string(a.t["A/mIs/"]),
            icon: l.jrt,
        },
        [i._.EXPERT]: {
            getText: () => a.intl.string(a.t.RIOFc2),
            icon: l.jrt,
        },
        [i._.OBSESSED]: {
            getText: () => a.intl.string(a.t.isPJDu),
            icon: l.lbB,
        },
        [i._.LOVE_IT]: {
            getText: () => a.intl.string(a.t["1rN7BF"]),
            icon: l.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => a.intl.string(a.t.bCBpVg),
            icon: l.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => a.intl.string(a.t["/WcmcP"]),
            icon: l.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => a.intl.string(a.t["NXZ/MZ"]),
            icon: l.kZ9,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => a.intl.string(a.t.q30PoH),
            icon: l.iFz,
        },
        [i._.LOOKING_FOR_GROUP]: {
            getText: () => a.intl.string(a.t.DWWAAQ),
            icon: l.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => a.intl.string(a.t.KQDVvH),
            icon: l.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => a.intl.string(a.t["5HhQo+"]),
            icon: l.iFz,
        },
        [i._.LOOKING_TO_DISCUSS]: {
            getText: () => a.intl.string(a.t.GipOCq),
            icon: l.iFz,
        },
    },
    c = (e) => {
        let t = o[e];
        return null != t ? t : null;
    };
var s = (((r = {}).RADIO = "radio"), (r.CHECKBOX = "checkbox"), r);
let u = {
    skill_level: {
        getLabel: () => a.intl.string(a.t.MKqADM),
        type: "radio",
        tags: [i._.CASUAL, i._.INTERMEDIATE, i._.EXPERT, i._.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => a.intl.string(a.t["7/umul"]),
        type: "checkbox",
        tags: [i._.OBSESSED, i._.LOVE_IT, i._.KIND_OF_LOVE_IT, i._.KIND_OF_HATE_IT, i._.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => a.intl.string(a.t["5Dez17"]),
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
