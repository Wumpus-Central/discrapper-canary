r.d(t, {
    XV: () => o,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var n,
    i = r(379405),
    a = r(481060),
    l = r(388032);
let o = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => l.intl.string(l.t.jbIRBA),
            icon: a.jrt,
        },
        [i._.NOOB]: {
            getText: () => l.intl.string(l.t.JCbfAw),
            icon: a.jrt,
        },
        [i._.LEARNING_THE_ROPES]: {
            getText: () => l.intl.string(l.t.S1X0kp),
            icon: a.jrt,
        },
        [i._.GETTING_GOOD]: {
            getText: () => l.intl.string(l.t.i4LREx),
            icon: a.jrt,
        },
        [i._.SKILLED]: {
            getText: () => l.intl.string(l.t["BQmP7+"]),
            icon: a.jrt,
        },
        [i._.EXPERT]: {
            getText: () => l.intl.string(l.t.RIOFc3),
            icon: a.jrt,
        },
        [i._.MASTER]: {
            getText: () => l.intl.string(l.t.E755U1),
            icon: a.jrt,
        },
        [i._.LIKE_IT]: {
            getText: () => l.intl.string(l.t["AXQ+hY"]),
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
        [i._.FRUSTRATED]: {
            getText: () => l.intl.string(l.t.R98Ol5),
            icon: a.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => l.intl.string(l.t["NXZ/MT"]),
            icon: a.kZ9,
        },
        [i._.TOO_EASY]: {
            getText: () => l.intl.string(l.t["8105aG"]),
            icon: a.kZ9,
        },
        [i._.LFG]: {
            getText: () => l.intl.string(l.t.DWWAAQ),
            icon: a.iFz,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => l.intl.string(l.t.q30PoK),
            icon: a.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => l.intl.string(l.t.KQDVvL),
            icon: a.iFz,
        },
        [i._.LOOKING_TO_LEARN]: {
            getText: () => l.intl.string(l.t.zG3Hzc),
            icon: a.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => l.intl.string(l.t["5HhQo6"]),
            icon: a.iFz,
        },
    },
    c = (e) => {
        let t = o[e];
        return null != t ? t : null;
    };
var s = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
let u = {
    skill_level: {
        getLabel: () => l.intl.string(l.t.MKqADA),
        type: "radio",
        tags: [
            i._.BETTER_THAN_YOU,
            i._.NOOB,
            i._.LEARNING_THE_ROPES,
            i._.GETTING_GOOD,
            i._.SKILLED,
            i._.EXPERT,
            i._.MASTER,
        ],
    },
    rating: {
        getLabel: () => l.intl.string(l.t["7/umur"]),
        type: "checkbox",
        tags: [
            i._.LIKE_IT,
            i._.LOVE_IT,
            i._.KIND_OF_LOVE_IT,
            i._.KIND_OF_HATE_IT,
            i._.FRUSTRATED,
            i._.RAGE_QUITTING,
            i._.TOO_EASY,
        ],
    },
    looking_for: {
        getLabel: () => l.intl.string(l.t["5Dez19"]),
        type: "checkbox",
        tags: [i._.LFG, i._.OPEN_TO_PLAY, i._.LOOKING_FOR_TIPS, i._.LOOKING_TO_LEARN, i._.OPEN_TO_TEACH],
    },
};
