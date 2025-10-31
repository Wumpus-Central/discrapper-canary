n.d(t, { Z: () => i });
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-07_announcement_composer",
    label: "announcement composer",
    defaultConfig: { announcementComposer: !1 },
    treatments: [
        {
            id: 1,
            label: "show announcement composer",
            config: { announcementComposer: !0 },
        },
    ],
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 }).announcementComposer;
}
