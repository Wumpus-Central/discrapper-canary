n.d(t, { PT: () => s, Pb: () => c, W3: () => o, me: () => d });
var i,
    l = n(761915),
    a = n(397927),
    r = n(985018);
let s = {
        [l.X.BETTER_THAN_YOU]: { getText: () => r.intl.string(r.t.jbIRBE), icon: a.qsD },
        [l.X.CASUAL]: { getText: () => r.intl.string(r.t.xcFFv6), icon: a.qsD },
        [l.X.INTERMEDIATE]: { getText: () => r.intl.string(r.t["A/mIs/"]), icon: a.qsD },
        [l.X.EXPERT]: { getText: () => r.intl.string(r.t.RIOFc2), icon: a.qsD },
        [l.X.OBSESSED]: { getText: () => r.intl.string(r.t.isPJDu), icon: a.Gek },
        [l.X.LOVE_IT]: { getText: () => r.intl.string(r.t["1rN7BF"]), icon: a.Gek },
        [l.X.KIND_OF_LOVE_IT]: { getText: () => r.intl.string(r.t.bCBpVg), icon: a.Gek },
        [l.X.KIND_OF_HATE_IT]: { getText: () => r.intl.string(r.t["/WcmcP"]), icon: a.d2e },
        [l.X.RAGE_QUITTING]: { getText: () => r.intl.string(r.t["NXZ/MZ"]), icon: a.d2e },
        [l.X.OPEN_TO_PLAY]: { getText: () => r.intl.string(r.t.q30PoH), icon: a.$yI },
        [l.X.LOOKING_FOR_GROUP]: { getText: () => r.intl.string(r.t.DWWAAQ), icon: a.$yI },
        [l.X.LOOKING_FOR_TIPS]: { getText: () => r.intl.string(r.t.KQDVvH), icon: a.$yI },
        [l.X.OPEN_TO_TEACH]: { getText: () => r.intl.string(r.t["5HhQo+"]), icon: a.$yI },
        [l.X.LOOKING_TO_DISCUSS]: { getText: () => r.intl.string(r.t.GipOCq), icon: a.$yI },
    },
    o = (e) => {
        let t = s[e];
        return null != t ? t : null;
    };
var d = (((i = {}).RADIO = "radio"), (i.CHECKBOX = "checkbox"), i);
let c = {
    skill_level: {
        getLabel: () => r.intl.string(r.t.MKqADM),
        type: "radio",
        tags: [l.X.CASUAL, l.X.INTERMEDIATE, l.X.EXPERT, l.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => r.intl.string(r.t["7/umul"]),
        type: "checkbox",
        tags: [l.X.OBSESSED, l.X.LOVE_IT, l.X.KIND_OF_LOVE_IT, l.X.KIND_OF_HATE_IT, l.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => r.intl.string(r.t["5Dez17"]),
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
