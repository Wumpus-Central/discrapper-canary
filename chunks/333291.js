n.d(t, {
    P_: () => l,
    o$: () => d,
    yM: () => u,
}),
    n(388685),
    n(781311),
    n(49124);
var r = n(894694);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l() {
    return {
        baseThreshold: 0.5,
        ceiling: 1,
        clipLengthSeconds: 60,
        timelineLengthSeconds: 300,
        signalFatigueMultiplier: 0.7,
        fatigueDecaySeconds: 120,
        minTimeBetweenAutoClips: 15,
        signals: {
            [r.Bs.MANUAL]: {
                importance: 1,
                decay: 1,
                enabled: !0,
                bypassFatigue: !0,
            },
            [r.Bs.DISTRIBUTED]: {
                importance: 0.6,
                decay: 0.3,
                enabled: !0,
            },
            [r.Bs.PHRASE]: {
                enabled: !0,
                phrases: [
                    {
                        patterns: [
                            "alexa",
                            "clip",
                            "clip it",
                            "clip that",
                            "klip",
                            "klip it",
                            "klip that",
                            "flip",
                            "flip that",
                        ],
                        importance: 1,
                        decay: 1,
                        enabled: !0,
                        bypassFatigue: !0,
                        isExplicit: !0,
                    },
                    {
                        patterns: ["holy shit", "holy fuck", "oh my god", "omg", "what", "no way", "are you kidding"],
                        importance: 0.4,
                        decay: 0.5,
                        enabled: !0,
                        amplifiers: [
                            {
                                targetSignals: [r.Bs.YELLING, r.Bs.GAME_EVENT],
                                multiplier: 1.3,
                                timeWindowSeconds: 8,
                            },
                        ],
                    },
                    {
                        patterns: ["fuck", "shit", "damn", "wow"],
                        importance: 0.3,
                        decay: 0.6,
                        enabled: !0,
                    },
                ],
                defaultPhrase: {
                    importance: 0.15,
                    decay: 0.7,
                },
            },
            [r.Bs.YELLING]: {
                importance: 0.18,
                decay: 0.6,
                enabled: !0,
                penalty: 0.2,
                amplifiers: [
                    {
                        targetSignals: [r.Bs.GAME_EVENT],
                        multiplier: 1.4,
                        timeWindowSeconds: 5,
                    },
                ],
            },
            [r.Bs.GAME_EVENT]: {
                enabled: !0,
                eventTypes: {
                    [r.x0.KILL]: {
                        importance: 0.1,
                        decay: 0.4,
                    },
                    [r.x0.MULTIKILL]: {
                        importance: 0.2,
                        decay: 0.3,
                        amplifiers: [
                            {
                                targetSignals: [r.Bs.YELLING, r.Bs.PHRASE],
                                multiplier: 1.5,
                                timeWindowSeconds: 30,
                            },
                        ],
                    },
                    [r.x0.DEATH]: {
                        importance: 0.02,
                        decay: 0.6,
                    },
                    [r.x0.ASSIST]: {
                        importance: 0.05,
                        decay: 0.5,
                    },
                    [r.x0.ITEM]: {
                        importance: 0.01,
                        decay: 0.5,
                    },
                    [r.x0.VICTORY]: {
                        importance: 0.15,
                        decay: 0.2,
                    },
                    [r.x0.DEFEAT]: {
                        importance: 0.15,
                        decay: 0.3,
                    },
                    [r.x0.LEVEL_UP]: {
                        importance: 0.1,
                        decay: 0.4,
                    },
                    [r.x0.TREASURE]: {
                        importance: 0.1,
                        decay: 0.4,
                    },
                    [r.x0.OBJECTIVE_KILL]: {
                        importance: 0.1,
                        decay: 0.3,
                    },
                },
                defaultEventType: {
                    importance: 0.3,
                    decay: 0.5,
                },
            },
            [r.Bs.SPEAKING]: {
                importance: 0,
                decay: 0.8,
                enabled: !0,
            },
            [r.Bs.SOUNDBOARD]: {
                importance: 0.1,
                decay: 0.8,
                enabled: !0,
                penalty: 0.5,
                amplifiers: [
                    {
                        targetSignals: [r.Bs.YELLING],
                        multiplier: 1.5,
                        timeWindowSeconds: 10,
                    },
                ],
            },
        },
        useExponentialDecay: !1,
        debugMode: !1,
    };
}
function c(e) {
    let t = (e, t, n) => Math.max(t, Math.min(n, e)),
        n = (e) =>
            null == e
                ? void 0
                : e.map((e) =>
                      s(a({}, e), {
                          multiplier: t(e.multiplier, 0.1, 5),
                          timeWindowSeconds: t(e.timeWindowSeconds, 0, 60),
                      }),
                  ),
        i = (e) =>
            s(a({}, e), {
                importance: t(e.importance, 0, 1),
                decay: t(e.decay, 0, 1),
                amplifiers: n(e.amplifiers),
            }),
        o = (e) =>
            s(a({}, e), {
                phrases: e.phrases.map((e) =>
                    s(a({}, e), {
                        importance: t(e.importance, 0, 1),
                        decay: t(e.decay, 0, 1),
                        amplifiers: n(e.amplifiers),
                    }),
                ),
                defaultPhrase: s(a({}, e.defaultPhrase), {
                    importance: t(e.defaultPhrase.importance, 0, 1),
                    decay: t(e.defaultPhrase.decay, 0, 1),
                }),
            }),
        l = (e) => {
            let r = (e) =>
                    s(a({}, e), {
                        importance: t(e.importance, 0, 1),
                        decay: t(e.decay, 0, 1),
                        amplifiers: n(e.amplifiers),
                    }),
                i = {};
            for (let [t, n] of Object.entries(e.eventTypes)) null != n && (i[t] = r(n));
            return s(a({}, e), {
                eventTypes: i,
                defaultEventType: r(e.defaultEventType),
            });
        };
    return s(a({}, e), {
        baseThreshold: t(e.baseThreshold, 0, 1),
        ceiling: t(e.ceiling, 0, 1),
        clipLengthSeconds: t(e.clipLengthSeconds, 30, 180),
        timelineLengthSeconds: t(e.timelineLengthSeconds, 60, 600),
        signalFatigueMultiplier: t(e.signalFatigueMultiplier, 0, 1),
        fatigueDecaySeconds: t(e.fatigueDecaySeconds, 0, 300),
        minTimeBetweenAutoClips: t(e.minTimeBetweenAutoClips, 0, 60),
        signals: {
            [r.Bs.MANUAL]: i(e.signals[r.Bs.MANUAL]),
            [r.Bs.DISTRIBUTED]: i(e.signals[r.Bs.DISTRIBUTED]),
            [r.Bs.PHRASE]: o(e.signals[r.Bs.PHRASE]),
            [r.Bs.YELLING]: i(e.signals[r.Bs.YELLING]),
            [r.Bs.GAME_EVENT]: l(e.signals[r.Bs.GAME_EVENT]),
            [r.Bs.SPEAKING]: i(e.signals[r.Bs.SPEAKING]),
            [r.Bs.SOUNDBOARD]: i(e.signals[r.Bs.SOUNDBOARD]),
        },
    });
}
function u(e) {
    return JSON.stringify(e, null, 2);
}
function d(e) {
    return c(JSON.parse(e));
}
