n.d(t, { M: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2023-10_social_proofing_file_size',
    label: 'Social Proofing File Size',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Should show nitro upsell for large files',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.getCurrentConfig({ location: e }).enabled;
}
