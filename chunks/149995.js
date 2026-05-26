i.d(t, { LR: () => d, S9: () => o, Se: () => n, Zk: () => s });
var r = i(945810);
let l = (0, r.mj)({
        kind: "user",
        name: "2026-05-kontrolfreek-deprecated-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    a = (0, r.mj)({
        kind: "user",
        name: "2026-05-steelseries-higher-discount-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function s(e) {
    let { location: t } = e,
        { enabled: i } = l.useConfig({ location: t });
    return i;
}
function n(e) {
    let { enabled: t } = l.getConfig({ location: e });
    return t;
}
function o(e) {
    let { location: t } = e,
        { enabled: i } = a.useConfig({ location: t });
    return i;
}
function d(e) {
    let { enabled: t } = a.getConfig({ location: e });
    return t;
}
