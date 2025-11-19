n.d(t, { Z: () => m }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(442837),
    r = n(481060),
    s = n(435064),
    o = n(894694),
    c = n(39604);
function d(e) {
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
function u(e, t) {
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
function m() {
    let { mlPipelinesEnabled: e } = (0, i.cj)([s.Z], () => ({
            mlPipelinesEnabled: s.Z.getSettings().mlPipelinesEnabled,
        })),
        [t, n] = l.useState(
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
        [m, p] = l.useState(o.x0.KILL),
        [h, x] = l.useState(1),
        [g, f] = l.useState(""),
        [b, v] = l.useState(""),
        j = l.useCallback(
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
                    n((t) => u(d({}, t), { [e]: a }));
            },
            [t],
        );
    return (0, a.jsx)(r.Ttm, {
        children: (0, a.jsxs)(r.l09, {
            children: [
                (0, a.jsx)(r.C3N, {
                    label: "Send Test Signals",
                    children: (0, a.jsxs)(r.NIo, {
                        children: [
                            (0, a.jsx)(r.Button, {
                                text: "Manual",
                                onClick: () => c.XK({ type: o.Bs.MANUAL }),
                            }),
                            (0, a.jsx)(r.Button, {
                                text: "Distributed",
                                onClick: () =>
                                    c.XK({
                                        type: o.Bs.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, a.jsx)(r.Button, {
                                text: "Phrase: Clip",
                                onClick: () =>
                                    c.XK({
                                        type: o.Bs.PHRASE,
                                        text: "clip",
                                    }),
                            }),
                            (0, a.jsx)(r.Button, {
                                text: "Yelling",
                                onClick: () =>
                                    c.XK({
                                        type: o.Bs.YELLING,
                                        userId: "123",
                                    }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(r.C3N, {
                    label: "Game Event Creator",
                    children: [
                        (0, a.jsxs)(r.NIo, {
                            children: [
                                (0, a.jsx)(r.q4e, {
                                    label: "Event Type",
                                    value: m,
                                    onChange: (e) => p(e),
                                    options: [
                                        {
                                            label: "Kill",
                                            value: o.x0.KILL,
                                        },
                                        {
                                            label: "Multikill",
                                            value: o.x0.MULTIKILL,
                                        },
                                        {
                                            label: "Death",
                                            value: o.x0.DEATH,
                                        },
                                        {
                                            label: "Assist",
                                            value: o.x0.ASSIST,
                                        },
                                        {
                                            label: "Item",
                                            value: o.x0.ITEM,
                                        },
                                        {
                                            label: "Victory",
                                            value: o.x0.VICTORY,
                                        },
                                        {
                                            label: "Defeat",
                                            value: o.x0.DEFEAT,
                                        },
                                        {
                                            label: "Level Up",
                                            value: o.x0.LEVEL_UP,
                                        },
                                        {
                                            label: "Treasure",
                                            value: o.x0.TREASURE,
                                        },
                                        {
                                            label: "Objective Kill",
                                            value: o.x0.OBJECTIVE_KILL,
                                        },
                                    ],
                                }),
                                (0, a.jsx)(r.q4e, {
                                    label: "Importance",
                                    value: h,
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
                        (0, a.jsx)(r.oil, {
                            label: "Title (optional)",
                            value: g,
                            onChange: f,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, a.jsx)(r.oil, {
                            label: "Description (optional)",
                            value: b,
                            onChange: v,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, a.jsx)(r.Button, {
                            text: "Create Game Event",
                            onClick: () => {
                                c.XK({
                                    type: o.Bs.GAME_EVENT,
                                    eventType: m,
                                    importance: h,
                                    title: g,
                                    description: b,
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(r.izJ, {}),
                (0, a.jsxs)(r.C3N, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, a.jsx)(r.rsf, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => c.So(u(d({}, e), { emotionClassifier: t })),
                        }),
                        (0, a.jsx)(r.rsf, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => c.So(u(d({}, e), { wakeWordDetector: t })),
                        }),
                        (0, a.jsx)(r.rsf, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => c.So(u(d({}, e), { yellDetector: t })),
                        }),
                        (0, a.jsx)(r.rsf, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => c.So(u(d({}, e), { whisperTranscription: t })),
                        }),
                    ],
                }),
                (0, a.jsxs)(r.C3N, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, a.jsx)(r.rsf, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => j("wakeWord"),
                        }),
                        (0, a.jsx)(r.rsf, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => j("emotion"),
                        }),
                        (0, a.jsx)(r.rsf, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => j("yell"),
                        }),
                        (0, a.jsx)(r.rsf, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => j("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
