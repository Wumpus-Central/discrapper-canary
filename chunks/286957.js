n.d(t, {
    XV: () => l,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var r,
    i = n(379405),
    a = n(481060),
    o = n(388032);
let l = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => o.intl.string(o.t.jbIRBA),
            icon: a.jrt,
        },
        [i._.CASUAL]: {
            getText: () => o.intl.string(o.t.xcFFv7),
            icon: a.jrt,
        },
        [i._.INTERMEDIATE]: {
            getText: () => o.intl.string(o.t["A/mIs7"]),
            icon: a.jrt,
        },
        [i._.EXPERT]: {
            getText: () => o.intl.string(o.t.RIOFc3),
            icon: a.jrt,
        },
        [i._.LOVE_IT]: {
            getText: () => o.intl.string(o.t["1rN7BA"]),
            icon: a.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => o.intl.string(o.t.bCBpVl),
            icon: a.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => o.intl.string(o.t["/WcmcH"]),
            icon: a.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => o.intl.string(o.t["NXZ/MT"]),
            icon: a.kZ9,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => o.intl.string(o.t.q30PoK),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_GROUP]: {
            getText: () => o.intl.string(o.t.DWWAAQ),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => o.intl.string(o.t.KQDVvL),
            icon: a.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => o.intl.string(o.t["5HhQo6"]),
            icon: a.iFz,
        },
    },
    c = (e) => {
        let t = l[e];
        return null != t ? t : null;
    };
var s = (((r = {}).RADIO = "radio"), (r.CHECKBOX = "checkbox"), r);
let u = {
    skill_level: {
        getLabel: () => o.intl.string(o.t.MKqADA),
        type: "radio",
        tags: [i._.CASUAL, i._.INTERMEDIATE, i._.EXPERT, i._.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => o.intl.string(o.t["7/umur"]),
        type: "checkbox",
        tags: [i._.LOVE_IT, i._.KIND_OF_LOVE_IT, i._.KIND_OF_HATE_IT, i._.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => o.intl.string(o.t["5Dez19"]),
        type: "checkbox",
        tags: [i._.LOOKING_FOR_GROUP, i._.OPEN_TO_PLAY, i._.LOOKING_FOR_TIPS, i._.OPEN_TO_TEACH],
    },
};
