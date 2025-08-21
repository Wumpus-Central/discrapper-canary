r.d(t, {
    XV: () => o,
    aE: () => u,
    kd: () => s,
    zK: () => c,
});
var n,
    i = r(379405),
    l = r(481060),
    a = r(388032);
let o = {
        [i._.BETTER_THAN_YOU]: {
            getText: () => a.intl.string(a.t.jbIRBA),
            icon: l.jrt,
        },
        [i._.NOOB]: {
            getText: () => a.intl.string(a.t.JCbfAw),
            icon: l.jrt,
        },
        [i._.LEARNING_THE_ROPES]: {
            getText: () => a.intl.string(a.t.S1X0kp),
            icon: l.jrt,
        },
        [i._.GETTING_GOOD]: {
            getText: () => a.intl.string(a.t.i4LREx),
            icon: l.jrt,
        },
        [i._.SKILLED]: {
            getText: () => a.intl.string(a.t["BQmP7+"]),
            icon: l.jrt,
        },
        [i._.EXPERT]: {
            getText: () => a.intl.string(a.t.RIOFc3),
            icon: l.jrt,
        },
        [i._.MASTER]: {
            getText: () => a.intl.string(a.t.E755U1),
            icon: l.jrt,
        },
        [i._.LIKE_IT]: {
            getText: () => a.intl.string(a.t["AXQ+hY"]),
            icon: l.lbB,
        },
        [i._.LOVE_IT]: {
            getText: () => a.intl.string(a.t["1rN7BA"]),
            icon: l.lbB,
        },
        [i._.KIND_OF_LOVE_IT]: {
            getText: () => a.intl.string(a.t.bCBpVl),
            icon: l.lbB,
        },
        [i._.KIND_OF_HATE_IT]: {
            getText: () => a.intl.string(a.t["/WcmcH"]),
            icon: l.kZ9,
        },
        [i._.FRUSTRATED]: {
            getText: () => a.intl.string(a.t.R98Ol5),
            icon: l.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => a.intl.string(a.t["NXZ/MT"]),
            icon: l.kZ9,
        },
        [i._.TOO_EASY]: {
            getText: () => a.intl.string(a.t["8105aG"]),
            icon: l.kZ9,
        },
        [i._.LFG]: {
            getText: () => a.intl.string(a.t.DWWAAQ),
            icon: l.iFz,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => a.intl.string(a.t.q30PoK),
            icon: l.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => a.intl.string(a.t.KQDVvL),
            icon: l.iFz,
        },
        [i._.LOOKING_TO_LEARN]: {
            getText: () => a.intl.string(a.t.zG3Hzc),
            icon: l.iFz,
        },
        [i._.OPEN_TO_TEACH]: {
            getText: () => a.intl.string(a.t["5HhQo6"]),
            icon: l.iFz,
        },
    },
    c = (e) => {
        let t = o[e];
        return null != t ? t : null;
    };
var s = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
let u = {
    skill_level: {
        getLabel: () => a.intl.string(a.t.MKqADA),
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
        getLabel: () => a.intl.string(a.t["7/umur"]),
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
        getLabel: () => a.intl.string(a.t["5Dez19"]),
        type: "checkbox",
        tags: [i._.LFG, i._.OPEN_TO_PLAY, i._.LOOKING_FOR_TIPS, i._.LOOKING_TO_LEARN, i._.OPEN_TO_TEACH],
    },
};
