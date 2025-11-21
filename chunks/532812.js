n.d(t, {
    H: () => o,
    S: () => s,
});
var r = n(427164),
    i = n(128064);
let a = (0, r.le)({
        kind: "user",
        name: "2025-11-age-verification-commands-toggles",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (e) => {
        let t = a.useConfig({ location: e }).enabled,
            n = (0, i.pY)("AgeVerificationCommandsTogglesExperiment");
        return t && n;
    },
    s = (e) => {
        let t = a.getConfig({ location: e }).enabled,
            n = (0, i.c_)("AgeVerificationCommandsTogglesExperiment");
        return t && n;
    };
