n.d(t, {
    AL: () => i.A,
    RK: () => s,
    sK: () => o,
});
var r = n(600975),
    i = n(766005);
let a = (0, r.C)({
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

function s(e) {
    return a.getCurrentConfig({
        location: e,
    }).enableObfuscation;
}

function o(e) {
    return a.useExperiment({
        location: e,
    }).enableObfuscation;
}
