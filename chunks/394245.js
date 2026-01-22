n.d(t, {
    PT: () => s,
    Pb: () => u,
    W3: () => o,
    me: () => c,
});
var r,
    l = n(761915),
    i = n(397927),
    a = n(985018);
let s = {
        [l.X.BETTER_THAN_YOU]: {
            getText: () => a.intl.string(a.t.jbIRBE),
            icon: i.qsD,
        },
        [l.X.CASUAL]: {
            getText: () => a.intl.string(a.t.xcFFv6),
            icon: i.qsD,
        },
        [l.X.INTERMEDIATE]: {
            getText: () => a.intl.string(a.t["A/mIs/"]),
            icon: i.qsD,
        },
        [l.X.EXPERT]: {
            getText: () => a.intl.string(a.t.RIOFc2),
            icon: i.qsD,
        },
        [l.X.OBSESSED]: {
            getText: () => a.intl.string(a.t.isPJDu),
            icon: i.Gek,
        },
        [l.X.LOVE_IT]: {
            getText: () => a.intl.string(a.t["1rN7BF"]),
            icon: i.Gek,
        },
        [l.X.KIND_OF_LOVE_IT]: {
            getText: () => a.intl.string(a.t.bCBpVg),
            icon: i.Gek,
        },
        [l.X.KIND_OF_HATE_IT]: {
            getText: () => a.intl.string(a.t["/WcmcP"]),
            icon: i.d2e,
        },
        [l.X.RAGE_QUITTING]: {
            getText: () => a.intl.string(a.t["NXZ/MZ"]),
            icon: i.d2e,
        },
        [l.X.OPEN_TO_PLAY]: {
            getText: () => a.intl.string(a.t.q30PoH),
            icon: i.$yI,
        },
        [l.X.LOOKING_FOR_GROUP]: {
            getText: () => a.intl.string(a.t.DWWAAQ),
            icon: i.$yI,
        },
        [l.X.LOOKING_FOR_TIPS]: {
            getText: () => a.intl.string(a.t.KQDVvH),
            icon: i.$yI,
        },
        [l.X.OPEN_TO_TEACH]: {
            getText: () => a.intl.string(a.t["5HhQo+"]),
            icon: i.$yI,
        },
        [l.X.LOOKING_TO_DISCUSS]: {
            getText: () => a.intl.string(a.t.GipOCq),
            icon: i.$yI,
        },
    },
    o = (e) => {
        let t = s[e];
        return null != t ? t : null;
    };
var c = (((r = {}).RADIO = "radio"), (r.CHECKBOX = "checkbox"), r);
let u = {
    skill_level: {
        getLabel: () => a.intl.string(a.t.MKqADM),
        type: "radio",
        tags: [l.X.CASUAL, l.X.INTERMEDIATE, l.X.EXPERT, l.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => a.intl.string(a.t["7/umul"]),
        type: "checkbox",
        tags: [l.X.OBSESSED, l.X.LOVE_IT, l.X.KIND_OF_LOVE_IT, l.X.KIND_OF_HATE_IT, l.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => a.intl.string(a.t["5Dez17"]),
        type: "checkbox",
        tags: [
            l.X.LOOKING_FOR_GROUP,
            l.X.OPEN_TO_PLAY,
            l.X.LOOKING_FOR_TIPS,
            l.X.OPEN_TO_TEACH,
            l.X.LOOKING_TO_DISCUSS,
        ],
    },
};
