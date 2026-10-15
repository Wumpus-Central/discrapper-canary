n.d(t, { L: () => r });
let i = (0, n(945810).mj)({
    name: "2026-10-desktop-general-perf",
    kind: "user",
    defaultConfig: { skipSilentDelayEstimatorFfts: !1, processPollingPerf: !1, keepRendererLogFileOpen: !1 },
    variations: {
        0: { skipSilentDelayEstimatorFfts: !1, processPollingPerf: !1, keepRendererLogFileOpen: !1 },
        1: { skipSilentDelayEstimatorFfts: !0, processPollingPerf: !0, keepRendererLogFileOpen: !0 },
    },
});
function r(e) {
    return i.getConfig({ location: e });
}
