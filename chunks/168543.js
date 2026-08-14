t.d(e, { c: () => l, l: () => i });
let o = (0, t(945810).mj)({
    name: "2026-08-profile-embed-rendering",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function l(n) {
    let { enabled: e } = o.useConfig({ location: n });
    return e;
}
function i(n) {
    let { enabled: e } = o.getConfig({ location: n });
    return e;
}
