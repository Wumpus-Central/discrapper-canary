n.d(t, { QK: () => a });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-06_contextless_frames',
        label: 'Contextless Frames',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Contextless Frames',
                config: { enabled: !0 }
            }
        ]
    }),
    a = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    };
