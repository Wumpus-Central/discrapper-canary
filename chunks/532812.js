n.d(t, {
    H: () => s,
    S: () => l,
});
var r = n(427164),
    i = n(128064),
    a = n(312870);
let o = (0, r.le)({
        kind: "user",
        name: "2025-11-age-verification-commands-toggles",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (e) => {
        let t = o.useConfig({ location: e }).enabled,
            n = (0, i.pY)("AgeVerificationCommandsTogglesExperiment");
        return (0, a.s)("AgeVerificationCommandsTogglesExperiment") || (t && n);
    },
    l = (e) => {
        let t = o.getConfig({ location: e }).enabled,
            n = (0, i.c_)("AgeVerificationCommandsTogglesExperiment");
        return (0, a.U)("AgeVerificationCommandsTogglesExperiment") || (t && n);
    };
