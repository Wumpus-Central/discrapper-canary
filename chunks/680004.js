n.d(t, { Z: () => p }), n(388685), n(35282), n(781311);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(481060),
    s = n(435064),
    o = n(894694),
    c = n(39604),
    d = n(356659);
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
    let {
            maxAutoClips: e,
            clipSignals: t,
            autoClipPhrases: n,
            mlPipelinesEnabled: p,
        } = (0, i.cj)([s.Z], () => ({
            maxAutoClips: s.Z.getSettings().maxAutoClips,
            clipSignals: s.Z.getSettings().clipSignals,
            autoClipPhrases: s.Z.getSettings().autoClipPhrases,
            mlPipelinesEnabled: s.Z.getSettings().mlPipelinesEnabled,
        })),
        [h, x] = r.useState(
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
        [g, f] = r.useState(o.x0.KILL),
        [b, v] = r.useState(1),
        [j, _] = r.useState(""),
        [y, C] = r.useState(""),
        S = r.useCallback(
            (e) => {
                let t = !h[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = {
                        emotion: !1,
                        yell: !1,
                        wakeWord: !1,
                        whisper: !1,
                    }),
                    (window.__CLIPS_DEBUG__[e] = t),
                    x((n) => m(u({}, n), { [e]: t }));
            },
            [h],
        );
    return (0, a.jsxs)(l.Ttm, {
        children: [
            (0, a.jsxs)(l.l09, {
                children: [
                    (0, a.jsxs)(l.C3N, {
                        label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                        children: [
                            (0, a.jsx)(l.rsf, {
                                label: "Wake Word Debug",
                                description: "Log wake word detection events to console",
                                checked: h.wakeWord,
                                onChange: () => S("wakeWord"),
                            }),
                            (0, a.jsx)(l.rsf, {
                                label: "Emotion Debug",
                                description: "Log emotion classification events to console",
                                checked: h.emotion,
                                onChange: () => S("emotion"),
                            }),
                            (0, a.jsx)(l.rsf, {
                                label: "Yell Debug",
                                description: "Show yell classification events histogram",
                                checked: h.yell,
                                onChange: () => S("yell"),
                            }),
                            (0, a.jsx)(l.rsf, {
                                label: "Whisper Debug",
                                description: "Log whisper transcription events to console",
                                checked: h.whisper,
                                onChange: () => S("whisper"),
                            }),
                        ],
                    }),
                    (0, a.jsxs)(l.C3N, {
                        label: "Auto Clips",
                        children: [
                            (0, a.jsx)(l.gNt, {
                                label: "Max Auto Clips",
                                children: (0, a.jsx)(l.FiK, {
                                    value: e,
                                    minValue: d.qb,
                                    maxValue: d.b0,
                                    onChange: c.W6,
                                }),
                            }),
                            (0, a.jsx)(l.rsf, {
                                label: "Enable Distributed Signals",
                                checked: t.enableDistributedSignals,
                                onChange: (e) => c.Rr(m(u({}, t), { enableDistributedSignals: e })),
                            }),
                            (0, a.jsx)(l.rsf, {
                                label: "Enable Phrase Signals",
                                checked: t.enablePhraseSignals,
                                onChange: (e) => c.Rr(m(u({}, t), { enablePhraseSignals: e })),
                            }),
                            (0, a.jsx)(l.rsf, {
                                label: "Enable Game Signals",
                                checked: t.enableGameSignals,
                                onChange: (e) => c.Rr(m(u({}, t), { enableGameSignals: e })),
                            }),
                        ],
                    }),
                    (0, a.jsx)(l.C3N, {
                        label: "Auto Clip Trigger Phrases",
                        description: "Used for both wake word and whisper transcription detection",
                        children: (0, a.jsx)(l.gNt, {
                            label: "Phrases (comma separated)",
                            helperText: "Current phrases: ".concat(n.length),
                            children: (0, a.jsx)(l.oil, {
                                defaultValue: n.join(","),
                                onBlur: (e) => {
                                    let t = e.target.value
                                        .split(",")
                                        .map((e) => e.trim())
                                        .filter((e) => e.length > 0);
                                    c.a2(t);
                                },
                                placeholder: "Enter phrases (comma separated)",
                            }),
                        }),
                    }),
                ],
            }),
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
                            (0, a.jsx)(l.q4e, {
                                label: "Event Type",
                                value: g,
                                onChange: (e) => f(e),
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
                            (0, a.jsx)(l.q4e, {
                                label: "Importance",
                                value: b,
                                onChange: v,
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
                    (0, a.jsx)(l.oil, {
                        label: "Title (optional)",
                        value: j,
                        onChange: _,
                        placeholder: "e.g., First Blood",
                    }),
                    (0, a.jsx)(l.oil, {
                        label: "Description (optional)",
                        value: y,
                        onChange: C,
                        placeholder: "e.g., Killed enemy ADC in bot lane",
                    }),
                    (0, a.jsx)(l.Button, {
                        text: "Create Game Event",
                        onClick: () => {
                            c.XK({
                                type: o.Bs.GAME_EVENT,
                                eventType: g,
                                importance: b,
                                title: j,
                                description: y,
                            });
                        },
                    }),
                ],
            }),
            (0, a.jsxs)(l.C3N, {
                label: "ML Pipelines Enabled",
                children: [
                    (0, a.jsx)(l.rsf, {
                        label: "Emotion Classifier",
                        checked: p.emotionClassifier,
                        onChange: (e) => c.So(m(u({}, p), { emotionClassifier: e })),
                    }),
                    (0, a.jsx)(l.rsf, {
                        label: "Wake Word Detector",
                        checked: p.wakeWordDetector,
                        onChange: (e) => c.So(m(u({}, p), { wakeWordDetector: e })),
                    }),
                    (0, a.jsx)(l.rsf, {
                        label: "Yell Detector",
                        checked: p.yellDetector,
                        onChange: (e) => c.So(m(u({}, p), { yellDetector: e })),
                    }),
                    (0, a.jsx)(l.rsf, {
                        label: "Whisper Transcription",
                        checked: p.whisperTranscription,
                        onChange: (e) => c.So(m(u({}, p), { whisperTranscription: e })),
                    }),
                ],
            }),
        ],
    });
}
