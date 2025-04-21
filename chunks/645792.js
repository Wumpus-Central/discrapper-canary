n.d(t, {
    Z: () => i,
    b: () => r
});
let l = (0, n(818083).B)({
        kind: 'user',
        id: '2022-08_back_to_school',
        label: 'Back to School Event',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Back to School experience enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    i = l;
function r() {
    return l.getCurrentConfig({ location: '68acbb_1' }, { autoTrackExposure: !1 }).enabled;
}
