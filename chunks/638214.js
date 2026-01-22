n.d(t, {
    Pp: () => o,
    k8: () => s,
    kQ: () => i.k,
});
var r = n(818083),
    i = n(742151);
let a = (0, r.B)({
    kind: "user",
    id: "2024-08_private_channel_hiding",
    label: "Private Channel Hiding",
    defaultConfig: {
        enableObfuscation: !1,
        enableIntegrityCheck: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Obfuscation Enabled",
            config: {
                enableObfuscation: !0,
                enableIntegrityCheck: !1,
            },
        },
        {
            id: 2,
            label: "Obfuscation + Integrity Check Enabled",
            config: {
                enableObfuscation: !0,
                enableIntegrityCheck: !0,
            },
        },
    ],
});
function o(e) {
    return a.getCurrentConfig({ location: e }).enableObfuscation;
}
function s(e) {
    return a.useExperiment({ location: e }).enableObfuscation;
}
