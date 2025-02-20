n.d(t, { P: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_private_channel_hiding',
    label: 'Private Channel Hiding',
    defaultConfig: {
        enableObfuscation: !1,
        enableIntegrityCheck: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Obfuscation Enabled',
            config: {
                enableObfuscation: !0,
                enableIntegrityCheck: !1
            }
        },
        {
            id: 2,
            label: 'Obfuscation + Integrity Check Enabled',
            config: {
                enableObfuscation: !0,
                enableIntegrityCheck: !0
            }
        }
    ]
});
function i() {
    return r.getCurrentConfig({ location: '1' }).enableObfuscation;
}
