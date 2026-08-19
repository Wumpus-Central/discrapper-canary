i.d(t, { LR: () => d, S9: () => o, Se: () => l, Zk: () => a });
var s = i(945810);
let n = (0, s.mj)({
        kind: "user",
        name: "2026-05-kontrolfreek-deprecated-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    r = (0, s.mj)({
        kind: "user",
        name: "2026-05-steelseries-higher-discount-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function a(e) {
    let { location: t } = e,
        { enabled: i } = n.useConfig({ location: t });
    return i;
}
function l(e) {
    let { enabled: t } = n.getConfig({ location: e });
    return t;
}
function o(e) {
    let { location: t } = e,
        { enabled: i } = r.useConfig({ location: t });
    return i;
}
function d(e) {
    let { enabled: t } = r.getConfig({ location: e });
    return t;
}
