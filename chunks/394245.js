n.d(t, { PT: () => d, Pb: () => g, W3: () => u, me: () => _ });
var i,
    a = n(761915),
    l = n(877784),
    s = n(53788),
    r = n(148795),
    o = n(214947),
    c = n(985018);
let d = {
        [a.X.BETTER_THAN_YOU]: { getText: () => c.intl.string(c.t.jbIRBE), icon: l.q },
        [a.X.CASUAL]: { getText: () => c.intl.string(c.t.xcFFv6), icon: l.q },
        [a.X.INTERMEDIATE]: { getText: () => c.intl.string(c.t["A/mIs/"]), icon: l.q },
        [a.X.EXPERT]: { getText: () => c.intl.string(c.t.RIOFc2), icon: l.q },
        [a.X.OBSESSED]: { getText: () => c.intl.string(c.t.isPJDu), icon: s.G },
        [a.X.LOVE_IT]: { getText: () => c.intl.string(c.t["1rN7BF"]), icon: s.G },
        [a.X.KIND_OF_LOVE_IT]: { getText: () => c.intl.string(c.t.bCBpVg), icon: s.G },
        [a.X.KIND_OF_HATE_IT]: { getText: () => c.intl.string(c.t["/WcmcP"]), icon: r.d },
        [a.X.RAGE_QUITTING]: { getText: () => c.intl.string(c.t["NXZ/MZ"]), icon: r.d },
        [a.X.OPEN_TO_PLAY]: { getText: () => c.intl.string(c.t.q30PoH), icon: o.$ },
        [a.X.LOOKING_FOR_GROUP]: { getText: () => c.intl.string(c.t.DWWAAQ), icon: o.$ },
        [a.X.LOOKING_FOR_TIPS]: { getText: () => c.intl.string(c.t.KQDVvH), icon: o.$ },
        [a.X.OPEN_TO_TEACH]: { getText: () => c.intl.string(c.t["5HhQo+"]), icon: o.$ },
        [a.X.LOOKING_TO_DISCUSS]: { getText: () => c.intl.string(c.t.GipOCq), icon: o.$ },
    },
    u = (e) => {
        let t = d[e];
        return null != t ? t : null;
    };
var _ = (((i = {}).RADIO = "radio"), (i.CHECKBOX = "checkbox"), i);
let g = {
    skill_level: {
        getLabel: () => c.intl.string(c.t.MKqADM),
        type: "radio",
        tags: [a.X.CASUAL, a.X.INTERMEDIATE, a.X.EXPERT, a.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => c.intl.string(c.t["7/umul"]),
        type: "checkbox",
        tags: [a.X.OBSESSED, a.X.LOVE_IT, a.X.KIND_OF_LOVE_IT, a.X.KIND_OF_HATE_IT, a.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => c.intl.string(c.t["5Dez17"]),
        type: "checkbox",
        tags: [
            a.X.LOOKING_FOR_GROUP,
            a.X.OPEN_TO_PLAY,
            a.X.LOOKING_FOR_TIPS,
            a.X.OPEN_TO_TEACH,
            a.X.LOOKING_TO_DISCUSS,
        ],
    },
};
