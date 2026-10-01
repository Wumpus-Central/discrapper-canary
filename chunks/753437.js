n.d(t, { Pb: () => h, me: () => f, PT: () => g, W3: () => x });
var i,
    l,
    a = n(761915),
    s = n(877784),
    r = n(53788),
    d = n(148795),
    o = n(214947),
    c = n(375708),
    u =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let m = {
        [a.X.BETTER_THAN_YOU]: { getText: () => c.intl.string(c.t.jbIRBE), iconRole: "ribbon" },
        [a.X.CASUAL]: { getText: () => c.intl.string(c.t.xcFFv6), iconRole: "ribbon" },
        [a.X.INTERMEDIATE]: { getText: () => c.intl.string(c.t["A/mIs/"]), iconRole: "ribbon" },
        [a.X.EXPERT]: { getText: () => c.intl.string(c.t.RIOFc2), iconRole: "ribbon" },
        [a.X.OBSESSED]: { getText: () => c.intl.string(c.t.isPJDu), iconRole: "thumbsUp" },
        [a.X.LOVE_IT]: { getText: () => c.intl.string(c.t["1rN7BF"]), iconRole: "thumbsUp" },
        [a.X.KIND_OF_LOVE_IT]: { getText: () => c.intl.string(c.t.bCBpVg), iconRole: "thumbsUp" },
        [a.X.KIND_OF_HATE_IT]: { getText: () => c.intl.string(c.t["/WcmcP"]), iconRole: "thumbsDown" },
        [a.X.RAGE_QUITTING]: { getText: () => c.intl.string(c.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [a.X.OPEN_TO_PLAY]: { getText: () => c.intl.string(c.t.q30PoH), iconRole: "friends" },
        [a.X.LOOKING_FOR_GROUP]: { getText: () => c.intl.string(c.t.DWWAAQ), iconRole: "friends" },
        [a.X.LOOKING_FOR_TIPS]: { getText: () => c.intl.string(c.t.KQDVvH), iconRole: "friends" },
        [a.X.OPEN_TO_TEACH]: { getText: () => c.intl.string(c.t["5HhQo+"]), iconRole: "friends" },
        [a.X.LOOKING_TO_DISCUSS]: { getText: () => c.intl.string(c.t.GipOCq), iconRole: "friends" },
    },
    g = (function (e) {
        let t = {};
        for (let n of Object.keys(m)) {
            let i = m[n];
            null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
        }
        return t;
    })({ [u.RIBBON]: s.q, [u.THUMBS_UP]: r.G, [u.THUMBS_DOWN]: d.d, [u.FRIENDS]: o.$ });
function x(e) {
    let t = g[e];
    return null != t ? t : null;
}
var f = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let h = {
    skill_level: {
        getLabel: () => c.intl.string(c.t.MKqADM),
        type: "radio",
        tags: [a.X.CASUAL, a.X.INTERMEDIATE, a.X.EXPERT, a.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => c.intl.string(c.t["7/umul"]),
        type: "checkbox",
        tags: [a.X.OBSESSED, a.X.LOVE_IT, a.X.KIND_OF_LOVE_IT, a.X.KIND_OF_HATE_IT, a.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => c.intl.string(c.t["5Dez17"]),
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
