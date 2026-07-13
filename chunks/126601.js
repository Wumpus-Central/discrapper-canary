n.d(t, { E: () => d, K: () => r });
var i,
    l = n(761915),
    s = n(375708),
    r =
        (((i = {}).RIBBON = "ribbon"),
        (i.THUMBS_UP = "thumbsUp"),
        (i.THUMBS_DOWN = "thumbsDown"),
        (i.FRIENDS = "friends"),
        i);
let a = {
    [l.X.BETTER_THAN_YOU]: { getText: () => s.intl.string(s.t.jbIRBE), iconRole: "ribbon" },
    [l.X.CASUAL]: { getText: () => s.intl.string(s.t.xcFFv6), iconRole: "ribbon" },
    [l.X.INTERMEDIATE]: { getText: () => s.intl.string(s.t["A/mIs/"]), iconRole: "ribbon" },
    [l.X.EXPERT]: { getText: () => s.intl.string(s.t.RIOFc2), iconRole: "ribbon" },
    [l.X.OBSESSED]: { getText: () => s.intl.string(s.t.isPJDu), iconRole: "thumbsUp" },
    [l.X.LOVE_IT]: { getText: () => s.intl.string(s.t["1rN7BF"]), iconRole: "thumbsUp" },
    [l.X.KIND_OF_LOVE_IT]: { getText: () => s.intl.string(s.t.bCBpVg), iconRole: "thumbsUp" },
    [l.X.KIND_OF_HATE_IT]: { getText: () => s.intl.string(s.t["/WcmcP"]), iconRole: "thumbsDown" },
    [l.X.RAGE_QUITTING]: { getText: () => s.intl.string(s.t["NXZ/MZ"]), iconRole: "thumbsDown" },
    [l.X.OPEN_TO_PLAY]: { getText: () => s.intl.string(s.t.q30PoH), iconRole: "friends" },
    [l.X.LOOKING_FOR_GROUP]: { getText: () => s.intl.string(s.t.DWWAAQ), iconRole: "friends" },
    [l.X.LOOKING_FOR_TIPS]: { getText: () => s.intl.string(s.t.KQDVvH), iconRole: "friends" },
    [l.X.OPEN_TO_TEACH]: { getText: () => s.intl.string(s.t["5HhQo+"]), iconRole: "friends" },
    [l.X.LOOKING_TO_DISCUSS]: { getText: () => s.intl.string(s.t.GipOCq), iconRole: "friends" },
};
function d(e) {
    let t = {};
    for (let n of Object.keys(a)) {
        let i = a[n];
        null != i && (t[n] = { getText: i.getText, icon: e[i.iconRole] });
    }
    return t;
}
