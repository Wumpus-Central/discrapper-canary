n.d(t, {
    k: () => i,
    o: () => a,
});
let r = (0, n(427164).le)({
    name: "2025-08-enable-september-marketing-moment",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
