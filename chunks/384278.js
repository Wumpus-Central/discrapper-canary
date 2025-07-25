n.d(t, {
    M1: () => c,
    NM: () => a
});
var r = n(70956),
    i = n(818083),
    l = n(427164),
    s = n(987338);
let o = (0, l.le)({
        kind: 'user',
        name: '2025-07-typing-indicator-delay',
        defaultConfig: {
            delayMs: 1.5 * r.Z.Millis.SECOND,
            inExperiment: !1
        },
        variations: {
            0: {
                delayMs: 1.5 * r.Z.Millis.SECOND,
                inExperiment: !0
            },
            1: {
                delayMs: 2 * r.Z.Millis.SECOND,
                inExperiment: !0
            },
            2: {
                delayMs: 3 * r.Z.Millis.SECOND,
                inExperiment: !0
            },
            3: {
                delayMs: 1.5 * r.Z.Millis.SECOND,
                inExperiment: !0
            },
            4: {
                delayMs: 2 * r.Z.Millis.SECOND,
                inExperiment: !0
            },
            5: {
                delayMs: 3 * r.Z.Millis.SECOND,
                inExperiment: !0
            }
        }
    }),
    a = (0, i.B)({
        kind: 'user',
        id: '2025-07_typing_indicator_delay',
        label: 'Typing Indicator Delay',
        defaultConfig: {
            delayMs: 1.5 * r.Z.Millis.SECOND,
            inExperiment: !1
        },
        treatments: [
            {
                id: 0,
                label: '1.5 second delay',
                config: {
                    delayMs: 1.5 * r.Z.Millis.SECOND,
                    inExperiment: !0
                }
            },
            {
                id: 1,
                label: '2 second delay',
                config: {
                    delayMs: 2 * r.Z.Millis.SECOND,
                    inExperiment: !0
                }
            },
            {
                id: 2,
                label: '3 second delay',
                config: {
                    delayMs: 3 * r.Z.Millis.SECOND,
                    inExperiment: !0
                }
            },
            {
                id: 3,
                label: '1.5 second delay (overlap)',
                config: {
                    delayMs: 1.5 * r.Z.Millis.SECOND,
                    inExperiment: !0
                }
            },
            {
                id: 4,
                label: '2 second delay (overlap)',
                config: {
                    delayMs: 2 * r.Z.Millis.SECOND,
                    inExperiment: !0
                }
            },
            {
                id: 5,
                label: '3 second delay (overlap)',
                config: {
                    delayMs: 3 * r.Z.Millis.SECOND,
                    inExperiment: !0
                }
            }
        ],
        commonTriggerPoint: s.$P.CONNECTION_OPEN
    }),
    c = (e) => {
        let { delayMs: t, inExperiment: n } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
            { delayMs: r, inExperiment: i } = o.getConfig({ location: e });
        return n
            ? {
                  delayMs: t,
                  inExperiment: !0
              }
            : {
                  delayMs: r,
                  inExperiment: i
              };
    };
