n.d(t, { h: () => o });
var l = n(647438),
    r = n(818083);
let s = new Date(Date.UTC(2025, 5, 16)),
    i = (0, r.B)({
        id: "2025-06_quest_brand_color_removal",
        kind: "user",
        label: "Quest Brand Color Removal",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    });
function o(e) {
    let { questConfig: t, location: n } = e,
        r = l.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= s;
    return i.useExperiment({ location: n }, { autoTrackExposure: r }).enabled && r;
}
