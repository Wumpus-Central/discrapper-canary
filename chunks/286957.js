n.d(t, {
    XV: () => o,
    aE: () => c,
    zK: () => a,
});
var r = n(379405),
    l = n(481060),
    i = n(388032);
let o = {
        [r._.BETTER_THAN_YOU]: {
            getText: () => i.intl.string(i.t.jbIRBA),
            icon: l.jrt,
        },
        [r._.NOOB]: {
            getText: () => i.intl.string(i.t.JCbfAw),
            icon: l.jrt,
        },
        [r._.LEARNING_THE_ROPES]: {
            getText: () => i.intl.string(i.t.S1X0kp),
            icon: l.jrt,
        },
        [r._.GETTING_GOOD]: {
            getText: () => i.intl.string(i.t.i4LREx),
            icon: l.jrt,
        },
        [r._.SKILLED]: {
            getText: () => i.intl.string(i.t["BQmP7+"]),
            icon: l.jrt,
        },
        [r._.EXPERT]: {
            getText: () => i.intl.string(i.t.RIOFc3),
            icon: l.jrt,
        },
        [r._.MASTER]: {
            getText: () => i.intl.string(i.t.E755U1),
            icon: l.jrt,
        },
        [r._.LIKE_IT]: {
            getText: () => i.intl.string(i.t["AXQ+hY"]),
            icon: l.lbB,
        },
        [r._.LOVE_IT]: {
            getText: () => i.intl.string(i.t["1rN7BA"]),
            icon: l.lbB,
        },
        [r._.KIND_OF_LOVE_IT]: {
            getText: () => i.intl.string(i.t.bCBpVl),
            icon: l.lbB,
        },
        [r._.KIND_OF_HATE_IT]: {
            getText: () => i.intl.string(i.t["/WcmcH"]),
            icon: l.kZ9,
        },
        [r._.FRUSTRATED]: {
            getText: () => i.intl.string(i.t.R98Ol5),
            icon: l.kZ9,
        },
        [r._.RAGE_QUITTING]: {
            getText: () => i.intl.string(i.t["NXZ/MT"]),
            icon: l.kZ9,
        },
        [r._.TOO_EASY]: {
            getText: () => i.intl.string(i.t["8105aG"]),
            icon: l.kZ9,
        },
        [r._.LFG]: {
            getText: () => i.intl.string(i.t.DWWAAQ),
            icon: l.iFz,
        },
        [r._.OPEN_TO_PLAY]: {
            getText: () => i.intl.string(i.t.q30PoK),
            icon: l.iFz,
        },
        [r._.LOOKING_FOR_TIPS]: {
            getText: () => i.intl.string(i.t.KQDVvL),
            icon: l.iFz,
        },
        [r._.LOOKING_TO_LEARN]: {
            getText: () => i.intl.string(i.t.zG3Hzc),
            icon: l.iFz,
        },
        [r._.OPEN_TO_TEACH]: {
            getText: () => i.intl.string(i.t["5HhQo6"]),
            icon: l.iFz,
        },
    },
    a = (e) => {
        let t = o[e];
        return null != t ? t : null;
    },
    c = {
        skill_level: {
            getLabel: () => i.intl.string(i.t.MKqADA),
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
            getLabel: () => i.intl.string(i.t["7/umur"]),
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
            getLabel: () => i.intl.string(i.t["5Dez19"]),
            tags: [r._.LFG, r._.OPEN_TO_PLAY, r._.LOOKING_FOR_TIPS, r._.LOOKING_TO_LEARN, r._.OPEN_TO_TEACH],
        },
    };
