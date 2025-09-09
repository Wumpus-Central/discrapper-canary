r.d(t, {
    XV: () => a,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var n,
    i = r(379405),
    l = r(481060),
    o = r(388032);
let a = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => o.intl.string(o.t.jbIRBA),
            icon: l.jrt,
        },
        [i._.CASUAL]: {
            getText: () => o.intl.string(o.t.xcFFv7),
            icon: l.jrt,
        },
        [i._.INTERMEDIATE]: {
            getText: () => o.intl.string(o.t["A/mIs7"]),
            icon: l.jrt,
        },
        [i._.EXPERT]: {
            getText: () => o.intl.string(o.t.RIOFc3),
            icon: l.jrt,
        },
        [i._.LOVE_IT]: {
            getText: () => o.intl.string(o.t["1rN7BA"]),
            icon: l.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => o.intl.string(o.t.bCBpVl),
            icon: l.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => o.intl.string(o.t["/WcmcH"]),
            icon: l.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => o.intl.string(o.t["NXZ/MT"]),
            icon: l.kZ9,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => o.intl.string(o.t.q30PoK),
            icon: l.iFz,
        },
        [i._.LOOKING_FOR_GROUP]: {
            getText: () => o.intl.string(o.t.DWWAAQ),
            icon: l.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => o.intl.string(o.t.KQDVvL),
            icon: l.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => o.intl.string(o.t["5HhQo6"]),
            icon: l.iFz,
        },
    },
    c = (e) => {
        let t = a[e];
        return null != t ? t : null;
    };
var s = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
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
