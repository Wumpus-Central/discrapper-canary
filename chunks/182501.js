n.d(t, { Kr: () => s });
var r = n(987170),
    i = n(722733);
let a = (0, r.Z)({
        id: '2025-07_gif_picker_delay',
        kind: 'user',
        label: 'GIF Picker Delay',
        defaultConfig: {
            enabled: !1,
            delayMs: 0,
            inExperiment: !1
        },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    delayMs: 0,
                    inExperiment: !0
                }
            },
            {
                id: 1,
                label: 'Delay 100 ms',
                config: {
                    enabled: !0,
                    delayMs: 100,
                    inExperiment: !0
                }
            },
            {
                id: 2,
                label: 'Delay 200 ms',
                config: {
                    enabled: !0,
                    delayMs: 200,
                    inExperiment: !0
                }
            },
            {
                id: 3,
                label: 'Control (overlap)',
                config: {
                    enabled: !1,
                    delayMs: 0,
                    inExperiment: !0
                }
            },
            {
                id: 4,
                label: 'Delay 100 ms (overlap)',
                config: {
                    enabled: !0,
                    delayMs: 100,
                    inExperiment: !0
                }
            },
            {
                id: 5,
                label: 'Delay 200 ms (overlap)',
                config: {
                    enabled: !0,
                    delayMs: 200,
                    inExperiment: !0
                }
            }
        ]
    }),
    o = (0, i.Z)({
        name: '2025-07-gif-picker-delay',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            delayMs: 0,
            inExperiment: !1
        },
        variations: {
            0: {
                enabled: !1,
                delayMs: 0,
                inExperiment: !0
            },
            1: {
                enabled: !0,
                delayMs: 100,
                inExperiment: !0
            },
            2: {
                enabled: !0,
                delayMs: 200,
                inExperiment: !0
            },
            3: {
                enabled: !1,
                delayMs: 0,
                inExperiment: !0
            },
            4: {
                enabled: !0,
                delayMs: 100,
                inExperiment: !0
            },
            5: {
                enabled: !0,
                delayMs: 200,
                inExperiment: !0
            }
        }
    }),
    s = (e) => {
        let { enabled: t, delayMs: n, inExperiment: r } = a.getCurrentConfig({ location: e }),
            { enabled: i, delayMs: s, inExperiment: l } = o.getConfig({ location: e });
        return r
            ? {
                  enabled: t,
                  delayMs: n,
                  inExperiment: !0
              }
            : {
                  enabled: i,
                  delayMs: s,
                  inExperiment: l
              };
    };
