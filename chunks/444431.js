n.d(t, { J: () => l, L: () => s });
var i = n(945810),
    r = n(723702);
let a = (0, i.mj)({
    name: "2026-10-desktop-general-perf",
    kind: "user",
    defaultConfig: {
        skipSilentDelayEstimatorFfts: !1,
        processPollingPerf: !1,
        keepRendererLogFileOpen: !1,
        questRingVisibleSteps: !1,
    },
    variations: {
        0: {
            skipSilentDelayEstimatorFfts: !1,
            processPollingPerf: !1,
            keepRendererLogFileOpen: !1,
            questRingVisibleSteps: !1,
        },
        1: {
            skipSilentDelayEstimatorFfts: !0,
            processPollingPerf: !0,
            keepRendererLogFileOpen: !0,
            questRingVisibleSteps: !0,
        },
    },
});
function s(e) {
    return a.getConfig({ location: e });
}
function l() {
    return (0, r.isDesktop)() && a.getConfig({ location: "quest_bar_circular_progress" }).questRingVisibleSteps;
}
