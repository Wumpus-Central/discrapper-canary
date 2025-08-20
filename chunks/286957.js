r.d(t, {
    XV: () => c,
    aE: () => u,
    kd: () => s,
    zK: () => o,
});
var n,
    l = r(379405),
    i = r(481060),
    a = r(388032);
let c = {
        [l._.BETTER_THAN_YOU]: {
            getText: () => a.intl.string(a.t.jbIRBA),
            icon: i.jrt,
        },
        [l._.NOOB]: {
            getText: () => a.intl.string(a.t.JCbfAw),
            icon: i.jrt,
        },
        [l._.LEARNING_THE_ROPES]: {
            getText: () => a.intl.string(a.t.S1X0kp),
            icon: i.jrt,
        },
        [l._.GETTING_GOOD]: {
            getText: () => a.intl.string(a.t.i4LREx),
            icon: i.jrt,
        },
        [l._.SKILLED]: {
            getText: () => a.intl.string(a.t["BQmP7+"]),
            icon: i.jrt,
        },
        [l._.EXPERT]: {
            getText: () => a.intl.string(a.t.RIOFc3),
            icon: i.jrt,
        },
        [l._.MASTER]: {
            getText: () => a.intl.string(a.t.E755U1),
            icon: i.jrt,
        },
        [l._.LIKE_IT]: {
            getText: () => a.intl.string(a.t["AXQ+hY"]),
            icon: i.lbB,
        },
        [l._.LOVE_IT]: {
            getText: () => a.intl.string(a.t["1rN7BA"]),
            icon: i.lbB,
        },
        [l._.KIND_OF_LOVE_IT]: {
            getText: () => a.intl.string(a.t.bCBpVl),
            icon: i.lbB,
        },
        [l._.KIND_OF_HATE_IT]: {
            getText: () => a.intl.string(a.t["/WcmcH"]),
            icon: i.kZ9,
        },
        [l._.FRUSTRATED]: {
            getText: () => a.intl.string(a.t.R98Ol5),
            icon: i.kZ9,
        },
        [l._.RAGE_QUITTING]: {
            getText: () => a.intl.string(a.t["NXZ/MT"]),
            icon: i.kZ9,
        },
        [l._.TOO_EASY]: {
            getText: () => a.intl.string(a.t["8105aG"]),
            icon: i.kZ9,
        },
        [l._.LFG]: {
            getText: () => a.intl.string(a.t.DWWAAQ),
            icon: i.iFz,
        },
        [l._.OPEN_TO_PLAY]: {
            getText: () => a.intl.string(a.t.q30PoK),
            icon: i.iFz,
        },
        [l._.LOOKING_FOR_TIPS]: {
            getText: () => a.intl.string(a.t.KQDVvL),
            icon: i.iFz,
        },
        [l._.LOOKING_TO_LEARN]: {
            getText: () => a.intl.string(a.t.zG3Hzc),
            icon: i.iFz,
        },
        [l._.OPEN_TO_TEACH]: {
            getText: () => a.intl.string(a.t["5HhQo6"]),
            icon: i.iFz,
        },
    },
    o = (e) => {
        let t = c[e];
        return null != t ? t : null;
    };
var s = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
let u = {
    skill_level: {
        getLabel: () => a.intl.string(a.t.MKqADA),
        type: "radio",
        tags: [
            l._.BETTER_THAN_YOU,
            l._.NOOB,
            l._.LEARNING_THE_ROPES,
            l._.GETTING_GOOD,
            l._.SKILLED,
            l._.EXPERT,
            l._.MASTER,
        ],
    },
    rating: {
        getLabel: () => a.intl.string(a.t["7/umur"]),
        type: "checkbox",
        tags: [
            l._.LIKE_IT,
            l._.LOVE_IT,
            l._.KIND_OF_LOVE_IT,
            l._.KIND_OF_HATE_IT,
            l._.FRUSTRATED,
            l._.RAGE_QUITTING,
            l._.TOO_EASY,
        ],
    },
    looking_for: {
        getLabel: () => a.intl.string(a.t["5Dez19"]),
        type: "checkbox",
        tags: [l._.LFG, l._.OPEN_TO_PLAY, l._.LOOKING_FOR_TIPS, l._.LOOKING_TO_LEARN, l._.OPEN_TO_TEACH],
    },
};
