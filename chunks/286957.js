n.d(t, {
    XV: () => o,
    aE: () => c,
    zK: () => a,
});
var r = n(379405),
    i = n(481060),
    l = n(388032);
let o = {
        [r._.BETTER_THAN_YOU]: {
            getText: () => l.intl.string(l.t.jbIRBA),
            icon: i.jrt,
        },
        [r._.NOOB]: {
            getText: () => l.intl.string(l.t.JCbfAw),
            icon: i.jrt,
        },
        [r._.LEARNING_THE_ROPES]: {
            getText: () => l.intl.string(l.t.S1X0kp),
            icon: i.jrt,
        },
        [r._.GETTING_GOOD]: {
            getText: () => l.intl.string(l.t.i4LREx),
            icon: i.jrt,
        },
        [r._.SKILLED]: {
            getText: () => l.intl.string(l.t["BQmP7+"]),
            icon: i.jrt,
        },
        [r._.EXPERT]: {
            getText: () => l.intl.string(l.t.RIOFc3),
            icon: i.jrt,
        },
        [r._.MASTER]: {
            getText: () => l.intl.string(l.t.E755U1),
            icon: i.jrt,
        },
        [r._.LIKE_IT]: {
            getText: () => l.intl.string(l.t["AXQ+hY"]),
            icon: i.lbB,
        },
        [r._.LOVE_IT]: {
            getText: () => l.intl.string(l.t["1rN7BA"]),
            icon: i.lbB,
        },
        [r._.KIND_OF_LOVE_IT]: {
            getText: () => l.intl.string(l.t.bCBpVl),
            icon: i.lbB,
        },
        [r._.KIND_OF_HATE_IT]: {
            getText: () => l.intl.string(l.t["/WcmcH"]),
            icon: i.kZ9,
        },
        [r._.FRUSTRATED]: {
            getText: () => l.intl.string(l.t.R98Ol5),
            icon: i.kZ9,
        },
        [r._.RAGE_QUITTING]: {
            getText: () => l.intl.string(l.t["NXZ/MT"]),
            icon: i.kZ9,
        },
        [r._.TOO_EASY]: {
            getText: () => l.intl.string(l.t["8105aG"]),
            icon: i.kZ9,
        },
        [r._.LFG]: {
            getText: () => l.intl.string(l.t.DWWAAQ),
            icon: i.iFz,
        },
        [r._.OPEN_TO_PLAY]: {
            getText: () => l.intl.string(l.t.q30PoK),
            icon: i.iFz,
        },
        [r._.LOOKING_FOR_TIPS]: {
            getText: () => l.intl.string(l.t.KQDVvL),
            icon: i.iFz,
        },
        [r._.LOOKING_TO_LEARN]: {
            getText: () => l.intl.string(l.t.zG3Hzc),
            icon: i.iFz,
        },
        [r._.OPEN_TO_TEACH]: {
            getText: () => l.intl.string(l.t["5HhQo6"]),
            icon: i.iFz,
        },
    },
    a = (e) => {
        let t = o[e];
        return null != t ? t : null;
    },
    c = {
        skill_level: {
            getLabel: () => l.intl.string(l.t.MKqADA),
            tags: [
                r._.BETTER_THAN_YOU,
                r._.NOOB,
                r._.LEARNING_THE_ROPES,
                r._.GETTING_GOOD,
                r._.SKILLED,
                r._.EXPERT,
                r._.MASTER,
            ],
        },
        rating: {
            getLabel: () => l.intl.string(l.t["7/umur"]),
            tags: [
                r._.LIKE_IT,
                r._.LOVE_IT,
                r._.KIND_OF_LOVE_IT,
                r._.KIND_OF_HATE_IT,
                r._.FRUSTRATED,
                r._.RAGE_QUITTING,
                r._.TOO_EASY,
            ],
        },
        looking_for: {
            getLabel: () => l.intl.string(l.t["5Dez19"]),
            tags: [r._.LFG, r._.OPEN_TO_PLAY, r._.LOOKING_FOR_TIPS, r._.LOOKING_TO_LEARN, r._.OPEN_TO_TEACH],
        },
    };
