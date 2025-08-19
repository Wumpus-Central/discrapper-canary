r.d(t, {
    XV: () => a,
    aE: () => c,
    zK: () => o,
});
var n = r(379405),
    l = r(481060),
    i = r(388032);
let a = {
        [n._.BETTER_THAN_YOU]: {
            getText: () => i.intl.string(i.t.jbIRBA),
            icon: l.jrt,
        },
        [n._.NOOB]: {
            getText: () => i.intl.string(i.t.JCbfAw),
            icon: l.jrt,
        },
        [n._.LEARNING_THE_ROPES]: {
            getText: () => i.intl.string(i.t.S1X0kp),
            icon: l.jrt,
        },
        [n._.GETTING_GOOD]: {
            getText: () => i.intl.string(i.t.i4LREx),
            icon: l.jrt,
        },
        [n._.SKILLED]: {
            getText: () => i.intl.string(i.t["BQmP7+"]),
            icon: l.jrt,
        },
        [n._.EXPERT]: {
            getText: () => i.intl.string(i.t.RIOFc3),
            icon: l.jrt,
        },
        [n._.MASTER]: {
            getText: () => i.intl.string(i.t.E755U1),
            icon: l.jrt,
        },
        [n._.LIKE_IT]: {
            getText: () => i.intl.string(i.t["AXQ+hY"]),
            icon: l.lbB,
        },
        [n._.LOVE_IT]: {
            getText: () => i.intl.string(i.t["1rN7BA"]),
            icon: l.lbB,
        },
        [n._.KIND_OF_LOVE_IT]: {
            getText: () => i.intl.string(i.t.bCBpVl),
            icon: l.lbB,
        },
        [n._.KIND_OF_HATE_IT]: {
            getText: () => i.intl.string(i.t["/WcmcH"]),
            icon: l.kZ9,
        },
        [n._.FRUSTRATED]: {
            getText: () => i.intl.string(i.t.R98Ol5),
            icon: l.kZ9,
        },
        [n._.RAGE_QUITTING]: {
            getText: () => i.intl.string(i.t["NXZ/MT"]),
            icon: l.kZ9,
        },
        [n._.TOO_EASY]: {
            getText: () => i.intl.string(i.t["8105aG"]),
            icon: l.kZ9,
        },
        [n._.LFG]: {
            getText: () => i.intl.string(i.t.DWWAAQ),
            icon: l.iFz,
        },
        [n._.OPEN_TO_PLAY]: {
            getText: () => i.intl.string(i.t.q30PoK),
            icon: l.iFz,
        },
        [n._.LOOKING_FOR_TIPS]: {
            getText: () => i.intl.string(i.t.KQDVvL),
            icon: l.iFz,
        },
        [n._.LOOKING_TO_LEARN]: {
            getText: () => i.intl.string(i.t.zG3Hzc),
            icon: l.iFz,
        },
        [n._.OPEN_TO_TEACH]: {
            getText: () => i.intl.string(i.t["5HhQo6"]),
            icon: l.iFz,
        },
    },
    o = (e) => {
        let t = a[e];
        return null != t ? t : null;
    },
    c = {
        skill_level: {
            getLabel: () => i.intl.string(i.t.MKqADA),
            tags: [
                n._.BETTER_THAN_YOU,
                n._.NOOB,
                n._.LEARNING_THE_ROPES,
                n._.GETTING_GOOD,
                n._.SKILLED,
                n._.EXPERT,
                n._.MASTER,
            ],
        },
        rating: {
            getLabel: () => i.intl.string(i.t["7/umur"]),
            tags: [
                n._.LIKE_IT,
                n._.LOVE_IT,
                n._.KIND_OF_LOVE_IT,
                n._.KIND_OF_HATE_IT,
                n._.FRUSTRATED,
                n._.RAGE_QUITTING,
                n._.TOO_EASY,
            ],
        },
        looking_for: {
            getLabel: () => i.intl.string(i.t["5Dez19"]),
            tags: [n._.LFG, n._.OPEN_TO_PLAY, n._.LOOKING_FOR_TIPS, n._.LOOKING_TO_LEARN, n._.OPEN_TO_TEACH],
        },
    };
