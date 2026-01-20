n.d(t, { Z: () => m }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(481060),
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
        [m, p] = r.useState(o.x0.KILL),
        [h, f] = r.useState(1),
        [b, x] = r.useState(""),
        [g, v] = r.useState(""),
        j = r.useCallback(
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
    return (0, a.jsx)(l.Ttm, {
        children: (0, a.jsxs)(l.l09, {
            children: [
                (0, a.jsx)(l.C3N, {
                    label: "Send Test Signals",
                    children: (0, a.jsxs)(l.NIo, {
                        children: [
                            (0, a.jsx)(l.Button, {
                                text: "Manual",
                                onClick: () => c.XK({ type: o.Bs.MANUAL }),
                            }),
                            (0, a.jsx)(l.Button, {
                                text: "Distributed",
                                onClick: () =>
                                    c.XK({
                                        type: o.Bs.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, a.jsx)(l.Button, {
                                text: "Phrase: Clip",
                                onClick: () =>
                                    c.XK({
                                        type: o.Bs.PHRASE,
                                        text: "clip",
                                    }),
                            }),
                            (0, a.jsx)(l.Button, {
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
                (0, a.jsxs)(l.C3N, {
                    label: "Game Event Creator",
                    children: [
                        (0, a.jsxs)(l.NIo, {
                            children: [
                                (0, a.jsx)(l.PhF, {
                                    label: "Event Type",
                                    value: m,
                                    onSelectionChange: (e) => p(e),
                                    options: [
                                        {
                                            id: "kill",
                                            label: "Kill",
                                            value: o.x0.KILL,
                                        },
                                        {
                                            id: "multikill",
                                            label: "Multikill",
                                            value: o.x0.MULTIKILL,
                                        },
                                        {
                                            id: "death",
                                            label: "Death",
                                            value: o.x0.DEATH,
                                        },
                                        {
                                            id: "assist",
                                            label: "Assist",
                                            value: o.x0.ASSIST,
                                        },
                                        {
                                            id: "item",
                                            label: "Item",
                                            value: o.x0.ITEM,
                                        },
                                        {
                                            id: "victory",
                                            label: "Victory",
                                            value: o.x0.VICTORY,
                                        },
                                        {
                                            id: "defeat",
                                            label: "Defeat",
                                            value: o.x0.DEFEAT,
                                        },
                                        {
                                            id: "level_up",
                                            label: "Level Up",
                                            value: o.x0.LEVEL_UP,
                                        },
                                        {
                                            id: "treasure",
                                            label: "Treasure",
                                            value: o.x0.TREASURE,
                                        },
                                        {
                                            id: "objective_kill",
                                            label: "Objective Kill",
                                            value: o.x0.OBJECTIVE_KILL,
                                        },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(l.PhF, {
                                    label: "Importance",
                                    value: h,
                                    onSelectionChange: f,
                                    options: [
                                        {
                                            id: "low",
                                            label: "Low",
                                            value: 0,
                                        },
                                        {
                                            id: "medium",
                                            label: "Medium",
                                            value: 0.5,
                                        },
                                        {
                                            id: "high",
                                            label: "High",
                                            value: 1,
                                        },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                        (0, a.jsx)(l.oil, {
                            label: "Title (optional)",
                            value: b,
                            onChange: x,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, a.jsx)(l.oil, {
                            label: "Description (optional)",
                            value: g,
                            onChange: v,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, a.jsx)(l.Button, {
                            text: "Create Game Event",
                            onClick: () => {
                                c.XK({
                                    type: o.Bs.GAME_EVENT,
                                    eventType: m,
                                    importance: h,
                                    title: b,
                                    description: g,
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(l.izJ, {}),
                (0, a.jsxs)(l.C3N, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, a.jsx)(l.rsf, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => c.So(u(d({}, e), { emotionClassifier: t })),
                        }),
                        (0, a.jsx)(l.rsf, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => c.So(u(d({}, e), { wakeWordDetector: t })),
                        }),
                        (0, a.jsx)(l.rsf, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => c.So(u(d({}, e), { yellDetector: t })),
                        }),
                        (0, a.jsx)(l.rsf, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => c.So(u(d({}, e), { whisperTranscription: t })),
                        }),
                    ],
                }),
                (0, a.jsxs)(l.C3N, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, a.jsx)(l.rsf, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => j("wakeWord"),
                        }),
                        (0, a.jsx)(l.rsf, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => j("emotion"),
                        }),
                        (0, a.jsx)(l.rsf, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => j("yell"),
                        }),
                        (0, a.jsx)(l.rsf, {
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
