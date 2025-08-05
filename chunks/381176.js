n.d(t, { h: () => s });
var r = n(73800),
    i = n(818083);
let a = new Date(Date.UTC(2025, 5, 16)),
    o = (0, i.B)({
        id: '2025-06_quest_brand_color_removal',
        kind: 'user',
        label: 'Quest Brand Color Removal',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function s(e) {
    let { questConfig: t, location: n } = e,
        i = r.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= a;
    return o.useExperiment({ location: n }, { autoTrackExposure: i }).enabled && i;
}
