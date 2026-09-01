n.d(t, { Pb: () => h, me: () => f, PT: () => m, W3: () => x });
var i,
    l,
    s = n(761915),
    r = n(877784),
    a = n(53788),
    o = n(148795),
    d = n(214947),
    c = n(375708),
    u =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let g = {
        [s.X.BETTER_THAN_YOU]: { getText: () => c.intl.string(c.t.jbIRBE), iconRole: "ribbon" },
        [s.X.CASUAL]: { getText: () => c.intl.string(c.t.xcFFv6), iconRole: "ribbon" },
        [s.X.INTERMEDIATE]: { getText: () => c.intl.string(c.t["A/mIs/"]), iconRole: "ribbon" },
        [s.X.EXPERT]: { getText: () => c.intl.string(c.t.RIOFc2), iconRole: "ribbon" },
        [s.X.OBSESSED]: { getText: () => c.intl.string(c.t.isPJDu), iconRole: "thumbsUp" },
        [s.X.LOVE_IT]: { getText: () => c.intl.string(c.t["1rN7BF"]), iconRole: "thumbsUp" },
        [s.X.KIND_OF_LOVE_IT]: { getText: () => c.intl.string(c.t.bCBpVg), iconRole: "thumbsUp" },
        [s.X.KIND_OF_HATE_IT]: { getText: () => c.intl.string(c.t["/WcmcP"]), iconRole: "thumbsDown" },
        [s.X.RAGE_QUITTING]: { getText: () => c.intl.string(c.t["NXZ/MZ"]), iconRole: "thumbsDown" },
        [s.X.OPEN_TO_PLAY]: { getText: () => c.intl.string(c.t.q30PoH), iconRole: "friends" },
        [s.X.LOOKING_FOR_GROUP]: { getText: () => c.intl.string(c.t.DWWAAQ), iconRole: "friends" },
        [s.X.LOOKING_FOR_TIPS]: { getText: () => c.intl.string(c.t.KQDVvH), iconRole: "friends" },
        [s.X.OPEN_TO_TEACH]: { getText: () => c.intl.string(c.t["5HhQo+"]), iconRole: "friends" },
        [s.X.LOOKING_TO_DISCUSS]: { getText: () => c.intl.string(c.t.GipOCq), iconRole: "friends" },
    },
    m = (function (e) {
        let t = {};
        for (let n of Object.keys(g)) {
            let i = g[n];
            null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
        }
        return t;
    })({ [u.RIBBON]: r.q, [u.THUMBS_UP]: a.G, [u.THUMBS_DOWN]: o.d, [u.FRIENDS]: d.$ });
function x(e) {
    let t = m[e];
    return null != t ? t : null;
}
var f = (((l = {}).RADIO = "radio"), (l.CHECKBOX = "checkbox"), l);
let h = {
    skill_level: {
        getLabel: () => c.intl.string(c.t.MKqADM),
        type: "radio",
        tags: [s.X.CASUAL, s.X.INTERMEDIATE, s.X.EXPERT, s.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => c.intl.string(c.t["7/umul"]),
        type: "checkbox",
        tags: [s.X.OBSESSED, s.X.LOVE_IT, s.X.KIND_OF_LOVE_IT, s.X.KIND_OF_HATE_IT, s.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => c.intl.string(c.t["5Dez17"]),
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
