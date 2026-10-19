n.d(t, { FX: () => a, wV: () => l });
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
let s = (0, i.mj)({
    name: "2026-09-build-a-bear-cards",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    let { enabled: t } = s.getConfig({ location: e });
    return t;
}
