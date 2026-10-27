n.d(t, { FX: () => a, Hd: () => o, w: () => s, wV: () => d });
var i = n(945810);
let r = (0, i.mj)({
    name: "2026-09-build-a-bear",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function a(e) {
    let { enabled: t } = r.useConfig({ location: e });
    return t;
}
function s(e) {
    let { enabled: t } = r.getConfig({ location: e });
    return t;
}
let l = (0, i.mj)({
    name: "2026-09-build-a-bear-cards",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function o(e) {
    let { enabled: t } = l.useConfig({ location: e });
    return t;
}
function d(e) {
    let { enabled: t } = l.getConfig({ location: e });
    return t;
}
