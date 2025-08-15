n.d(t, {
    S: () => o,
    f: () => s,
});
var r = n(647438),
    i = n(818083),
    a = n(46140);
let o = (0, i.B)({
    id: "2025-08_mobile_video_quests_on_desktop",
    kind: "user",
    label: "Mobile Video Quests on Desktop",
    defaultConfig: {
        enabled: !1,
        enrollOnDesktop: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enabled, enrollment occurs on desktop",
            config: {
                enabled: !0,
                enrollOnDesktop: !0,
            },
        },
        {
            id: 2,
            label: "Enabled, enrollment occurs on mobile",
            config: {
                enabled: !0,
                enrollOnDesktop: !1,
            },
        },
    ],
});
function s(e) {
    let { location: t, questFeatures: n } = e,
        i = r.useMemo(() => n.includes(a.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n]);
    return o.useExperiment({ location: t }, { autoTrackExposure: i }).enabled && i;
}
