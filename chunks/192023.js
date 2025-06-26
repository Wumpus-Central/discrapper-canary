n.d(t, { h: () => u });
var l = n(73800),
    s = n(818083);
let r = new Date(Date.UTC(2025, 5, 16)),
    i = (0, s.B)({
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
function u(e) {
    let { questConfig: t, location: n } = e,
        s = l.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= r;
    return i.useExperiment({ location: n }, { autoTrackExposure: s }).enabled && s;
}
