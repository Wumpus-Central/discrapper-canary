n.d(t, { Z: () => r });
let i = (0, n(818083).B)({
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
function r(e) {
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 }).announcementComposer;
}
