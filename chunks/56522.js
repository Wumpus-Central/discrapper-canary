n.d(t, {
    K: () => l,
    M: () => s,
});
var r = n(818083),
    i = n(945577);
let o = { enabled: !1 },
    a = (0, r.B)({
        kind: "user",
        id: "2025-06_search_desktop_xdm_feedback",
        label: "Search Desktop XDM Feedback Experiment",
        defaultConfig: o,
        treatments: [
            {
                id: 1,
                label: "Enables feedback in xDM control and treatment groups",
                config: { enabled: !0 },
            },
        ],
    });
function s(e) {
    let { location: t } = e,
        { enabled: n } = a.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return (0, i.Gc)({ location: t }) && n;
}
function l(e) {
    let { location: t } = e,
        { enabled: n } = a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 });
    return (0, i.wn)({ location: t }) && n;
}
