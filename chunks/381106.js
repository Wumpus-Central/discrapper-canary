l.d(t, { A: () => r });
var n = l(627968),
    a = l(64700),
    i = l(236972),
    s = l(997098);
let r = a.memo(function (e) {
    let { fineTuning: t, fineTuningResolution: l, duration: a } = e,
        { file: r, audio: u } = (0, i.L)();
    return (0, n.jsx)(s.A, {
        file: r,
        audio: u,
        waveformSettings: { fineTuning: t, fineTuningResolution: l, duration: a },
    });
});
