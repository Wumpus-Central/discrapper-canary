l.d(t, { z: () => a });
let n = (0, l(945810).mj)({
    name: "2026-07-collectibles-collabs-filter",
    kind: "user",
    defaultConfig: { collabsFilterEnabled: !1 },
    variations: { 0: { collabsFilterEnabled: !1 }, 1: { collabsFilterEnabled: !0 } },
});
function a(e) {
    return n.useConfig({ location: e }).collabsFilterEnabled;
}
