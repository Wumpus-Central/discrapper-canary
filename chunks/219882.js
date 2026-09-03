n.d(t, { J6: () => l, ew: () => s });
var i = n(945810),
    r = n(202541);
let a = (0, i.mj)({
    name: "2026-09-nitro-file-upload-rollout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e) {
    let { location: t } = e;
    return l({ location: t }).enabled ? r.gb : r.f3;
}
function l(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
(0, i.mj)({
    name: "2026-09-non-nitro-file-upload-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
