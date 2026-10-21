n.d(t, { E5: () => l, kI: () => i });
var r,
    u = n(945810),
    i =
        (((r = {})[(r.STEP_1_LOADED = 0)] = "STEP_1_LOADED"),
        (r[(r.STEP_2_CLICKED_INTERNAL = 1)] = "STEP_2_CLICKED_INTERNAL"),
        (r[(r.STEP_3_CLICKED_EXTERNAL = 2)] = "STEP_3_CLICKED_EXTERNAL"),
        (r[(r.STEP_4_VIEWED_NON_IMPRESSION = 3)] = "STEP_4_VIEWED_NON_IMPRESSION"),
        (r[(r.STEP_5_VIEWED_IMPRESSION = 4)] = "STEP_5_VIEWED_IMPRESSION"),
        r);
let o = (0, u.mj)({
    name: "2026-05-use-ad-analytics-interface",
    kind: "user",
    defaultConfig: { enabled: !1, maxStep: -1 },
    variations: {
        0: { enabled: !1, maxStep: -1 },
        1: { enabled: !0, maxStep: 0 },
        2: { enabled: !0, maxStep: 1 },
        3: { enabled: !0, maxStep: 2 },
        4: { enabled: !0, maxStep: 3 },
        5: { enabled: !0, maxStep: 4 },
    },
});
function l(e, t) {
    let n = o.getConfig({ location: t });
    return n.enabled && e <= n.maxStep;
}
