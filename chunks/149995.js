r.d(t, { LR: () => d, S9: () => o, Se: () => n, Zk: () => a });
var i = r(945810);
let s = (0, i.mj)({
        kind: "user",
        name: "2026-05-kontrolfreek-deprecated-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
        kind: "user",
        name: "2026-05-steelseries-higher-discount-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function a(e) {
    let { location: t } = e,
        { enabled: r } = s.useConfig({ location: t });
    return r;
}
function n(e) {
    let { enabled: t } = s.getConfig({ location: e });
    return t;
}
function o(e) {
    let { location: t } = e,
        { enabled: r } = l.useConfig({ location: t });
    return r;
}
function d(e) {
    let { enabled: t } = l.getConfig({ location: e });
    return t;
}
