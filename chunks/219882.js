n.d(t, { J6: () => o, M6: () => d, ew: () => l, rX: () => c });
var i = n(945810),
    r = n(202541);
let a = "NitroFileUploadRollout",
    s = (0, i.mj)({
        name: "2026-09-nitro-file-upload-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l() {
    let { location: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return o({ location: e }).enabled ? r.gb : r.f3;
}
function o() {
    let { location: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s.getConfig({ location: e ?? a });
}
function d(e) {
    let { legacyCopy: t, rolloutCopy: n } = e;
    return o().enabled ? n : t;
}
function c(e) {
    return s.useConfig({ location: e ?? a }).enabled;
}
(0, i.mj)({
    name: "2026-09-non-nitro-file-upload-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
