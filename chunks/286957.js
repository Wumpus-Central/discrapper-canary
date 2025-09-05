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
        [i._.NOOB]: {
            getText: () => o.intl.string(o.t.JCbfAw),
            icon: l.jrt,
        },
        [i._.LEARNING_THE_ROPES]: {
            getText: () => o.intl.string(o.t.S1X0kp),
            icon: l.jrt,
        },
        [i._.GETTING_GOOD]: {
            getText: () => o.intl.string(o.t.i4LREx),
            icon: l.jrt,
        },
        [i._.SKILLED]: {
            getText: () => o.intl.string(o.t["BQmP7+"]),
            icon: l.jrt,
        },
        [i._.EXPERT]: {
            getText: () => o.intl.string(o.t.RIOFc3),
            icon: l.jrt,
        },
        [i._.MASTER]: {
            getText: () => o.intl.string(o.t.E755U1),
            icon: l.jrt,
        },
        [i._.LIKE_IT]: {
            getText: () => o.intl.string(o.t["AXQ+hY"]),
            icon: l.lbB,
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
        [i._.FRUSTRATED]: {
            getText: () => o.intl.string(o.t.R98Ol5),
            icon: l.kZ9,
        },
        [i._.RAGE_QUITTING]: {
            getText: () => o.intl.string(o.t["NXZ/MT"]),
            icon: l.kZ9,
        },
        [i._.TOO_EASY]: {
            getText: () => o.intl.string(o.t["8105aG"]),
            icon: l.kZ9,
        },
        [i._.LFG]: {
            getText: () => o.intl.string(o.t.DWWAAQ),
            icon: l.iFz,
        },
        [i._.OPEN_TO_PLAY]: {
            getText: () => o.intl.string(o.t.q30PoK),
            icon: l.iFz,
        },
        [i._.LOOKING_FOR_TIPS]: {
            getText: () => o.intl.string(o.t.KQDVvL),
            icon: l.iFz,
        },
        [i._.LOOKING_TO_LEARN]: {
            getText: () => o.intl.string(o.t.zG3Hzc),
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
        tags: [
            i._.NOOB,
            i._.LEARNING_THE_ROPES,
            i._.GETTING_GOOD,
            i._.SKILLED,
            i._.EXPERT,
            i._.MASTER,
            i._.BETTER_THAN_YOU,
        ],
    },
    rating: {
        getLabel: () => o.intl.string(o.t["7/umur"]),
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
        getLabel: () => o.intl.string(o.t["5Dez19"]),
        type: "checkbox",
        tags: [i._.LFG, i._.OPEN_TO_PLAY, i._.LOOKING_FOR_TIPS, i._.LOOKING_TO_LEARN, i._.OPEN_TO_TEACH],
    },
};
