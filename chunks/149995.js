i.d(t, { LR: () => d, S9: () => o, Se: () => a, Zk: () => l });
var r = i(945810);
let s = (0, r.mj)({
        kind: "user",
        name: "2026-05-kontrolfreek-deprecated-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    n = (0, r.mj)({
        kind: "user",
        name: "2026-05-steelseries-higher-discount-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l(e) {
    let { location: t } = e,
        { enabled: i } = s.useConfig({ location: t });
    return i;
}
function a(e) {
    let { enabled: t } = s.getConfig({ location: e });
    return t;
}
function o(e) {
    let { location: t } = e,
        { enabled: i } = n.useConfig({ location: t });
    return i;
}
function d(e) {
    let { enabled: t } = n.getConfig({ location: e });
    return t;
}
