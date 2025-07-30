n.d(t, { d: () => l });
var r = n(818083),
    a = n(987338);
let s = (0, r.B)({
    kind: 'guild',
    id: '2025-06_thread_search_partial_name_match',
    label: 'Partial search term matching for thread titles',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Partial search term matching for thread titles',
            config: { enabled: !0 }
        }
    ]
});
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { enabled: r } = s.useExperiment(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: n }
        );
    return r;
}
