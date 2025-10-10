r.d(t, {
    XV: () => l,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var n,
    i = r(379405),
    o = r(481060),
    a = r(388032);
let l = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => a.intl.string(a.t.jbIRBA),
            icon: o.jrt,
        },
        [i._.CASUAL]: {
            getText: () => a.intl.string(a.t.xcFFv7),
            icon: o.jrt,
        },
        [i._.INTERMEDIATE]: {
            getText: () => a.intl.string(a.t["A/mIs7"]),
            icon: o.jrt,
        },
        [i._.EXPERT]: {
            getText: () => a.intl.string(a.t.RIOFc3),
            icon: o.jrt,
        },
        [i._.LOVE_IT]: {
            getText: () => a.intl.string(a.t["1rN7BA"]),
            icon: o.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => a.intl.string(a.t.bCBpVl),
            icon: o.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => a.intl.string(a.t["/WcmcH"]),
            icon: o.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => a.intl.string(a.t["NXZ/MT"]),
            icon: o.kZ9,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => a.intl.string(a.t.q30PoK),
            icon: o.iFz,
        },
        [i._.LOOKING_FOR_GROUP]: {
            getText: () => a.intl.string(a.t.DWWAAQ),
            icon: o.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => a.intl.string(a.t.KQDVvL),
            icon: o.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => a.intl.string(a.t["5HhQo6"]),
            icon: o.iFz,
        },
    },
    c = (e) => {
        let t = l[e];
        return null != t ? t : null;
    };
var s = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
let u = {
    skill_level: {
        getLabel: () => a.intl.string(a.t.MKqADA),
        type: "radio",
        tags: [i._.CASUAL, i._.INTERMEDIATE, i._.EXPERT, i._.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => a.intl.string(a.t["7/umur"]),
        type: "checkbox",
        tags: [i._.LOVE_IT, i._.KIND_OF_LOVE_IT, i._.KIND_OF_HATE_IT, i._.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => a.intl.string(a.t["5Dez19"]),
        type: "checkbox",
        tags: [i._.LOOKING_FOR_GROUP, i._.OPEN_TO_PLAY, i._.LOOKING_FOR_TIPS, i._.OPEN_TO_TEACH],
    },
};
