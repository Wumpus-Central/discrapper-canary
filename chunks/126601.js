n.d(t, { E: () => d, K_: () => r, LQ: () => g, Pb: () => u, me: () => c, pK: () => m });
var i,
    l,
    a = n(761915),
    s = n(105292),
    r =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let o = {
    [a.X.BETTER_THAN_YOU]: { getText: () => s.intl.string(s.t.jbIRBE), iconRole: "ribbon" },
    [a.X.CASUAL]: { getText: () => s.intl.string(s.t.xcFFv6), iconRole: "ribbon" },
    [a.X.INTERMEDIATE]: { getText: () => s.intl.string(s.t["A/mIs/"]), iconRole: "ribbon" },
    [a.X.EXPERT]: { getText: () => s.intl.string(s.t.RIOFc2), iconRole: "ribbon" },
    [a.X.OBSESSED]: { getText: () => s.intl.string(s.t.isPJDu), iconRole: "thumbsUp" },
    [a.X.LOVE_IT]: { getText: () => s.intl.string(s.t["1rN7BF"]), iconRole: "thumbsUp" },
    [a.X.KIND_OF_LOVE_IT]: { getText: () => s.intl.string(s.t.bCBpVg), iconRole: "thumbsUp" },
    [a.X.KIND_OF_HATE_IT]: { getText: () => s.intl.string(s.t["/WcmcP"]), iconRole: "thumbsDown" },
    [a.X.RAGE_QUITTING]: { getText: () => s.intl.string(s.t["NXZ/MZ"]), iconRole: "thumbsDown" },
    [a.X.OPEN_TO_PLAY]: { getText: () => s.intl.string(s.t.q30PoH), iconRole: "friends" },
    [a.X.LOOKING_FOR_GROUP]: { getText: () => s.intl.string(s.t.DWWAAQ), iconRole: "friends" },
    [a.X.LOOKING_FOR_TIPS]: { getText: () => s.intl.string(s.t.KQDVvH), iconRole: "friends" },
    [a.X.OPEN_TO_TEACH]: { getText: () => s.intl.string(s.t["5HhQo+"]), iconRole: "friends" },
    [a.X.LOOKING_TO_DISCUSS]: { getText: () => s.intl.string(s.t.GipOCq), iconRole: "friends" },
};
function d(e) {
    let t = {};
    for (let n of Object.keys(o)) {
        let i = o[n];
        null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
    }
    return t;
}
var c = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let u = {
    skill_level: {
        getLabel: () => s.intl.string(s.t.MKqADM),
        type: "radio",
        tags: [a.X.CASUAL, a.X.INTERMEDIATE, a.X.EXPERT, a.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => s.intl.string(s.t["7/umul"]),
        type: "checkbox",
        tags: [a.X.OBSESSED, a.X.LOVE_IT, a.X.KIND_OF_LOVE_IT, a.X.KIND_OF_HATE_IT, a.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => s.intl.string(s.t["5Dez17"]),
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
function m(e, t) {
    let n = Object.values(u).find((e) => {
        let { tags: n } = e;
        return n.includes(t);
    });
    return n?.type === "radio"
        ? [...e.filter((e) => !n.tags.includes(e)), t]
        : e.includes(t)
          ? e.filter((e) => e !== t)
          : [...e, t];
}
function g(e, t) {
    return e.filter((e) => !t.includes(e));
}
