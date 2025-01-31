n.d(t, {
    Am: () => i,
    ZP: () => a,
    aW: () => r
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2023-06_bogo_promotion_gate',
        label: 'BOGO Promotion Manager',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable BOGO Promotion Manager',
                config: { enabled: !0 }
            }
        ]
    }),
    r = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.getCurrentConfig({ location: '489551_2' }, { autoTrackExposure: e });
    },
    a = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.useExperiment({ location: '489551_1' }, { autoTrackExposure: e });
    };
