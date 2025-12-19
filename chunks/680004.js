n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(199849),
    s = n(481060),
    o = n(435064),
    c = n(894694),
    d = n(39604);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    let { mlPipelinesEnabled: e } = (0, i.cj)([o.Z], () => ({
            mlPipelinesEnabled: o.Z.getSettings().mlPipelinesEnabled,
        })),
        [t, n] = r.useState(
            () => (
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = {
                        emotion: !1,
                        yell: !1,
                        wakeWord: !1,
                        whisper: !1,
                    }),
                {
                    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
                    emotion: window.__CLIPS_DEBUG__.emotion,
                    yell: window.__CLIPS_DEBUG__.yell,
                    whisper: window.__CLIPS_DEBUG__.whisper,
                }
            ),
        ),
        [p, h] = r.useState(c.x0.KILL),
        [f, x] = r.useState(1),
        [b, g] = r.useState(""),
        [v, j] = r.useState(""),
        y = r.useCallback(
            (e) => {
                let a = !t[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = {
                        emotion: !1,
                        yell: !1,
                        wakeWord: !1,
                        whisper: !1,
                    }),
                    (window.__CLIPS_DEBUG__[e] = a),
                    n((t) => m(u({}, t), { [e]: a }));
            },
            [t],
        );
    return (0, a.jsx)(s.Ttm, {
        children: (0, a.jsxs)(s.l09, {
            children: [
                (0, a.jsx)(s.C3N, {
                    label: "Send Test Signals",
                    children: (0, a.jsxs)(s.NIo, {
                        children: [
                            (0, a.jsx)(s.Button, {
                                text: "Manual",
                                onClick: () => d.XK({ type: c.Bs.MANUAL }),
                            }),
                            (0, a.jsx)(s.Button, {
                                text: "Distributed",
                                onClick: () =>
                                    d.XK({
                                        type: c.Bs.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, a.jsx)(s.Button, {
                                text: "Phrase: Clip",
                                onClick: () =>
                                    d.XK({
                                        type: c.Bs.PHRASE,
                                        text: "clip",
                                    }),
                            }),
                            (0, a.jsx)(s.Button, {
                                text: "Yelling",
                                onClick: () =>
                                    d.XK({
                                        type: c.Bs.YELLING,
                                        userId: "123",
                                    }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(s.C3N, {
                    label: "Game Event Creator",
                    children: [
                        (0, a.jsxs)(s.NIo, {
                            children: [
                                (0, a.jsx)(l.y6, {
                                    label: "Event Type",
                                    value: p,
                                    onChange: (e) => h(e),
                                    options: [
                                        {
                                            label: "Kill",
                                            value: c.x0.KILL,
                                        },
                                        {
                                            label: "Multikill",
                                            value: c.x0.MULTIKILL,
                                        },
                                        {
                                            label: "Death",
                                            value: c.x0.DEATH,
                                        },
                                        {
                                            label: "Assist",
                                            value: c.x0.ASSIST,
                                        },
                                        {
                                            label: "Item",
                                            value: c.x0.ITEM,
                                        },
                                        {
                                            label: "Victory",
                                            value: c.x0.VICTORY,
                                        },
                                        {
                                            label: "Defeat",
                                            value: c.x0.DEFEAT,
                                        },
                                        {
                                            label: "Level Up",
                                            value: c.x0.LEVEL_UP,
                                        },
                                        {
                                            label: "Treasure",
                                            value: c.x0.TREASURE,
                                        },
                                        {
                                            label: "Objective Kill",
                                            value: c.x0.OBJECTIVE_KILL,
                                        },
                                    ],
                                }),
                                (0, a.jsx)(l.y6, {
                                    label: "Importance",
                                    value: f,
                                    onChange: x,
                                    options: [
                                        {
                                            label: "Low",
                                            value: 0,
                                        },
                                        {
                                            label: "Medium",
                                            value: 0.5,
                                        },
                                        {
                                            label: "High",
                                            value: 1,
                                        },
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(s.oil, {
                            label: "Title (optional)",
                            value: b,
                            onChange: g,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, a.jsx)(s.oil, {
                            label: "Description (optional)",
                            value: v,
                            onChange: j,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, a.jsx)(s.Button, {
                            text: "Create Game Event",
                            onClick: () => {
                                d.XK({
                                    type: c.Bs.GAME_EVENT,
                                    eventType: p,
                                    importance: f,
                                    title: b,
                                    description: v,
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(s.izJ, {}),
                (0, a.jsxs)(s.C3N, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, a.jsx)(s.rsf, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => d.So(m(u({}, e), { emotionClassifier: t })),
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => d.So(m(u({}, e), { wakeWordDetector: t })),
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => d.So(m(u({}, e), { yellDetector: t })),
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => d.So(m(u({}, e), { whisperTranscription: t })),
                        }),
                    ],
                }),
                (0, a.jsxs)(s.C3N, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, a.jsx)(s.rsf, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => y("wakeWord"),
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => y("emotion"),
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => y("yell"),
                        }),
                        (0, a.jsx)(s.rsf, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => y("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
