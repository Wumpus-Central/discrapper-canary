n.d(t, { N: () => i });
let r = (0, n(722733).Z)({
    name: "2025-12-hide-guild-boost-status-tab",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    return r.getConfig({ location: e }).enabled;
}
