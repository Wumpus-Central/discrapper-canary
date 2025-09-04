n.d(t, {
    S5: () => c,
    Wk: () => l,
    XV: () => d,
    aE: () => p,
    kd: () => _,
    rR: () => s,
    uX: () => u,
    zK: () => f,
});
var r = n(379405),
    i = n(296009),
    a = n(481060),
    o = n(388032);
let s = [i.l.FAVORITE_GAMES, i.l.CURRENT_GAMES, i.l.WANT_TO_PLAY_GAMES, i.l.PLAYED_GAMES],
    l = {
        [i.l.FAVORITE_GAMES]: () => o.intl.string(o.t.sUQar6),
        [i.l.CURRENT_GAMES]: () => o.intl.string(o.t.SqNnur),
        [i.l.WANT_TO_PLAY_GAMES]: () => o.intl.string(o.t.bWSQwc),
        [i.l.PLAYED_GAMES]: () => o.intl.string(o.t.scOKER),
    },
    c = [i.l.FAVORITE_GAMES],
    u = [i.l.CURRENT_GAMES],
    d = {
        [r._.BETTER_THAN_YOU]: {
            getText: () => o.intl.string(o.t.jbIRBA),
            icon: a.jrt,
        },
        [r._.NOOB]: {
            getText: () => o.intl.string(o.t.JCbfAw),
            icon: a.jrt,
        },
        [r._.LEARNING_THE_ROPES]: {
            getText: () => o.intl.string(o.t.S1X0kp),
            icon: a.jrt,
        },
        [r._.GETTING_GOOD]: {
            getText: () => o.intl.string(o.t.i4LREx),
            icon: a.jrt,
        },
        [r._.SKILLED]: {
            getText: () => o.intl.string(o.t["BQmP7+"]),
            icon: a.jrt,
        },
        [r._.EXPERT]: {
            getText: () => o.intl.string(o.t.RIOFc3),
            icon: a.jrt,
        },
        [r._.MASTER]: {
            getText: () => o.intl.string(o.t.E755U1),
            icon: a.jrt,
        },
        [r._.LIKE_IT]: {
            getText: () => o.intl.string(o.t["AXQ+hY"]),
            icon: a.lbB,
        },
        [r._.LOVE_IT]: {
            getText: () => o.intl.string(o.t["1rN7BA"]),
            icon: a.lbB,
        },
        [r._.KIND_OF_LOVE_IT]: {
            getText: () => o.intl.string(o.t.bCBpVl),
            icon: a.lbB,
        },
        [r._.KIND_OF_HATE_IT]: {
            getText: () => o.intl.string(o.t["/WcmcH"]),
            icon: a.kZ9,
        },
        [r._.FRUSTRATED]: {
            getText: () => o.intl.string(o.t.R98Ol5),
            icon: a.kZ9,
        },
        [r._.RAGE_QUITTING]: {
            getText: () => o.intl.string(o.t["NXZ/MT"]),
            icon: a.kZ9,
        },
        [r._.TOO_EASY]: {
            getText: () => o.intl.string(o.t["8105aG"]),
            icon: a.kZ9,
        },
        [r._.LFG]: {
            getText: () => o.intl.string(o.t.DWWAAQ),
            icon: a.iFz,
        },
        [r._.OPEN_TO_PLAY]: {
            getText: () => o.intl.string(o.t.q30PoK),
            icon: a.iFz,
        },
        [r._.LOOKING_FOR_TIPS]: {
            getText: () => o.intl.string(o.t.KQDVvL),
            icon: a.iFz,
        },
        [r._.LOOKING_TO_LEARN]: {
            getText: () => o.intl.string(o.t.zG3Hzc),
            icon: a.iFz,
        },
        [r._.OPEN_TO_TEACH]: {
            getText: () => o.intl.string(o.t["5HhQo6"]),
            icon: a.iFz,
        },
    },
    f = (e) => {
        let t = d[e];
        return null != t ? t : null;
    };
var _ = (function (e) {
    return (e.RADIO = "radio"), (e.CHECKBOX = "checkbox"), e;
})({});
let p = {
    skill_level: {
        getLabel: () => o.intl.string(o.t.MKqADA),
        type: "radio",
        tags: [
            r._.NOOB,
            r._.LEARNING_THE_ROPES,
            r._.GETTING_GOOD,
            r._.SKILLED,
            r._.EXPERT,
            r._.MASTER,
            r._.BETTER_THAN_YOU,
        ],
    },
    rating: {
        getLabel: () => o.intl.string(o.t["7/umur"]),
        type: "checkbox",
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
        getLabel: () => o.intl.string(o.t["5Dez19"]),
        type: "checkbox",
        tags: [r._.LFG, r._.OPEN_TO_PLAY, r._.LOOKING_FOR_TIPS, r._.LOOKING_TO_LEARN, r._.OPEN_TO_TEACH],
    },
};
