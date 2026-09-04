n.d(t, { Pb: () => h, me: () => x, PT: () => m, W3: () => f });
var i,
    l,
    s = n(761915),
    r = n(877784),
    a = n(53788),
    o = n(148795),
    d = n(214947),
    u = n(375708),
    c =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let g = {
        [s.X.BETTER_THAN_YOU]: { getText: () => u.intl.string(u.t.jbIRBE), iconRole: "ribbon" },
        [s.X.CASUAL]: { getText: () => u.intl.string(u.t.xcFFv6), iconRole: "ribbon" },
        [s.X.INTERMEDIATE]: { getText: () => u.intl.string(u.t["A/mIs/"]), iconRole: "ribbon" },
        [s.X.EXPERT]: { getText: () => u.intl.string(u.t.RIOFc2), iconRole: "ribbon" },
        [s.X.OBSESSED]: { getText: () => u.intl.string(u.t.isPJDu), iconRole: "thumbsUp" },
        [s.X.LOVE_IT]: { getText: () => u.intl.string(u.t["1rN7BF"]), iconRole: "thumbsUp" },
        [s.X.KIND_OF_LOVE_IT]: { getText: () => u.intl.string(u.t.bCBpVg), iconRole: "thumbsUp" },
        [s.X.KIND_OF_HATE_IT]: { getText: () => u.intl.string(u.t["/WcmcP"]), iconRole: "thumbsDown" },
        [s.X.RAGE_QUITTING]: { getText: () => u.intl.string(u.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [s.X.OPEN_TO_PLAY]: { getText: () => u.intl.string(u.t.q30PoH), iconRole: "friends" },
        [s.X.LOOKING_FOR_GROUP]: { getText: () => u.intl.string(u.t.DWWAAQ), iconRole: "friends" },
        [s.X.LOOKING_FOR_TIPS]: { getText: () => u.intl.string(u.t.KQDVvH), iconRole: "friends" },
        [s.X.OPEN_TO_TEACH]: { getText: () => u.intl.string(u.t["5HhQo+"]), iconRole: "friends" },
        [s.X.LOOKING_TO_DISCUSS]: { getText: () => u.intl.string(u.t.GipOCq), iconRole: "friends" },
    },
    m = (function (e) {
        let t = {};
        for (let n of Object.keys(g)) {
            let i = g[n];
            null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
        }
        return t;
    })({ [c.RIBBON]: r.q, [c.THUMBS_UP]: a.G, [c.THUMBS_DOWN]: o.d, [c.FRIENDS]: d.$ });
function f(e) {
    let t = m[e];
    return null != t ? t : null;
}
var x = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let h = {
    skill_level: {
        getLabel: () => u.intl.string(u.t.MKqADM),
        type: "radio",
        tags: [s.X.CASUAL, s.X.INTERMEDIATE, s.X.EXPERT, s.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => u.intl.string(u.t["7/umul"]),
        type: "checkbox",
        tags: [s.X.OBSESSED, s.X.LOVE_IT, s.X.KIND_OF_LOVE_IT, s.X.KIND_OF_HATE_IT, s.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => u.intl.string(u.t["5Dez17"]),
        type: "checkbox",
        tags: [
            s.X.LOOKING_FOR_GROUP,
            s.X.OPEN_TO_PLAY,
            s.X.LOOKING_FOR_TIPS,
            s.X.OPEN_TO_TEACH,
            s.X.LOOKING_TO_DISCUSS,
        ],
    },
};
