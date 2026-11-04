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
n.d(
    t,
    {},
    {
        J: function () {
            return (0, r.xl)() && a.getConfig({ location: "quest_bar_circular_progress" }).questRingVisibleSteps;
        },
        L: function (e) {
            return a.getConfig({ location: e });
        },
    },
);
