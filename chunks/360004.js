n.d(t, { d: () => r });
var a = n(818083),
    l = n(987338);
let s = (0, a.B)({
    kind: "guild",
    id: "2025-06_thread_search_partial_name_match",
    label: "Partial search term matching for thread titles",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Partial search term matching for thread titles",
            config: { enabled: !0 },
        },
    ],
});
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { enabled: a } = s.useExperiment(
            {
                guildId: e,
                location: t,
            },
            { autoTrackExposure: n },
        );
    return a;
}
