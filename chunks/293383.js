n.d(t, { sk: () => o, Do: () => d }), n(17928), n(441574), n(287809), n(474090);
var i,
    l = n(32206),
    s = n(945810),
    a =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.OPEN_PURCHASE = 1)] = "OPEN_PURCHASE"),
        (i[(i.PAID_PREMIUM_SUBSCRIBERS_ONLY = 2)] = "PAID_PREMIUM_SUBSCRIBERS_ONLY"),
        i);
let r = (0, s.mj)({
    name: "2026-04-collectibles-profile-frames-purchase",
    kind: "user",
    defaultConfig: { bucket: 0 },
    variations: { 0: { bucket: 0 }, 1: { bucket: 1 }, 2: { bucket: 2 } },
});
function o(e) {
    let t = (0, l.c)(e),
        { bucket: n } = r.useConfig({ location: e });
    return t && n !== a.CONTROL;
}
function d(e) {
    let t = (0, l.c)(e),
        { bucket: n } = r.useConfig({ location: e });
    return t && n === a.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
n(788868);
