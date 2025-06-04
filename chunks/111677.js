n.d(t, { t: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_flamingo_signed_catalog',
    label: 'Flamingo Signed Catalog',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n, disable: i = !1 } = e,
        { enabled: o } = r.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: i
            }
        );
    return o;
}
