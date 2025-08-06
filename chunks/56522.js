n.d(t, { M: () => a });
var r = n(818083),
    i = n(945577);
let l = (0, r.B)({
    kind: "user",
    id: "2025-06_search_desktop_xdm_feedback",
    label: "Search Desktop XDM Feedback Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enables feedback in xDM control and treatment groups",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    let { location: t } = e,
        { enabled: n } = l.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return (0, i.Gc)({ location: t }) && n;
}
