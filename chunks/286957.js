n.d(t, {
    XV: () => o,
    aE: () => u,
    kd: () => c,
    zK: () => s,
});
var r,
    i = n(379405),
    a = n(481060),
    l = n(388032);
let o = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => l.intl.string(l.t.jbIRBA),
            icon: a.jrt,
        },
        [i._.CASUAL]: {
            getText: () => l.intl.string(l.t.xcFFv7),
            icon: a.jrt,
        },
        [i._.INTERMEDIATE]: {
            getText: () => l.intl.string(l.t["A/mIs7"]),
            icon: a.jrt,
        },
        [i._.EXPERT]: {
            getText: () => l.intl.string(l.t.RIOFc3),
            icon: a.jrt,
        },
        [i._.OBSESSED]: {
            getText: () => l.intl.string(l.t.isPJDg),
            icon: a.lbB,
        },
        [i._.LOVE_IT]: {
            getText: () => l.intl.string(l.t["1rN7BA"]),
            icon: a.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => l.intl.string(l.t.bCBpVl),
            icon: a.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => l.intl.string(l.t["/WcmcH"]),
            icon: a.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => l.intl.string(l.t["NXZ/MT"]),
            icon: a.kZ9,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => l.intl.string(l.t.q30PoK),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_GROUP]: {
            getText: () => l.intl.string(l.t.DWWAAQ),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => l.intl.string(l.t.KQDVvL),
            icon: a.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => l.intl.string(l.t["5HhQo6"]),
            icon: a.iFz,
        },
        [i._.LOOKING_TO_DISCUSS]: {
            getText: () => l.intl.string(l.t.GipOCg),
            icon: a.iFz,
        },
    },
    s = (e) => {
        let t = o[e];
        return null != t ? t : null;
    };
var c = (((r = {}).RADIO = "radio"), (r.CHECKBOX = "checkbox"), r);
let u = {
    skill_level: {
        getLabel: () => l.intl.string(l.t.MKqADA),
        type: "radio",
        tags: [i._.CASUAL, i._.INTERMEDIATE, i._.EXPERT, i._.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => l.intl.string(l.t["7/umur"]),
        type: "checkbox",
        tags: [i._.LOVE_IT, i._.KIND_OF_LOVE_IT, i._.KIND_OF_HATE_IT, i._.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => l.intl.string(l.t["5Dez19"]),
        type: "checkbox",
        tags: [i._.LOOKING_FOR_GROUP, i._.OPEN_TO_PLAY, i._.LOOKING_FOR_TIPS, i._.OPEN_TO_TEACH],
    },
};
