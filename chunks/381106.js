n.d(t, { A: () => s });
var l = n(627968),
    i = n(64700),
    a = n(236972),
    r = n(997098);
let s = i.memo(function (e) {
    let { fineTuning: t, fineTuningResolution: n, duration: i } = e,
        { file: s, audio: u } = (0, a.L)();
    return (0, l.jsx)(r.A, {
        file: s,
        audio: u,
        waveformSettings: {
            fineTuning: t,
            fineTuningResolution: n,
            duration: i,
        },
    });
});
