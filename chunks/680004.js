n.d(t, { Z: () => f }), n(388685), n(49124), n(539854), n(35282), n(781311);
var a = n(951288),
    r = n(647438),
    l = n(442837),
    i = n(481060),
    o = n(333291),
    s = n(460779),
    c = n(435064),
    d = n(894694),
    u = n(269278),
    m = n(39604),
    p = n(794877),
    h = n(356659);
function x(e) {
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
function g(e, t) {
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
function f() {
    let {
            maxAutoClips: e,
            clips: t,
            clipSignals: n,
            autoClipPhrases: f,
            mlPipelinesEnabled: b,
        } = (0, l.cj)([c.Z], () => ({
            maxAutoClips: c.Z.getSettings().maxAutoClips,
            clips: c.Z.getClips(),
            clipSignals: c.Z.getSettings().clipSignals,
            autoClipPhrases: c.Z.getSettings().autoClipPhrases,
            mlPipelinesEnabled: c.Z.getSettings().mlPipelinesEnabled,
        })),
        v = t.filter((e) => !0 === e.isTemporary),
        [j, _] = r.useState(() => {
            let e = s.Z.read();
            return {
                clippingPressure: e.pressure,
                currentThreshold: e.currentThreshold,
                lastClipTime: e.lastClipTimestamp,
                timeline: e.signals,
            };
        }),
        [y, C] = r.useState([]),
        [S, E] = r.useState([]),
        [T, O] = r.useState(
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
        [N, P] = r.useState(d.x0.KILL),
        [I, w] = r.useState(1),
        [k, R] = r.useState(""),
        [A, D] = r.useState(""),
        [Z, L] = r.useState(""),
        [M, U] = r.useState(!1);
    r.useEffect(() => {
        let e = setInterval(() => {
            let e = s.Z.read();
            if (
                (_({
                    clippingPressure: e.pressure,
                    currentThreshold: e.currentThreshold,
                    lastClipTime: e.lastClipTimestamp,
                    timeline: e.signals,
                }),
                T.yell)
            ) {
                let e = u.Z.getHandlerState("ml-audio-classification");
                (null == e ? void 0 : e.yellHistory) != null && E([...e.yellHistory]);
            } else E([]);
        }, 100);
        return () => clearInterval(e);
    }, [T.yell]);
    let B = r.useCallback(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "signal";
            C((n) =>
                [
                    {
                        message: e,
                        type: t,
                        timestamp: new Date(),
                    },
                    ...n,
                ].slice(0, 50),
            );
        }, []),
        F = r.useCallback(
            async (e) => {
                try {
                    let n = await s.Z.process(e);
                    if (
                        (B(
                            "Signal sent: "
                                .concat(e.type)
                                .concat(
                                    JSON.stringify(e).length > 50
                                        ? " (".concat(JSON.stringify(e).substring(0, 50), "...)")
                                        : " (".concat(JSON.stringify(e), ")"),
                                ),
                            "signal",
                        ),
                        (null == n ? void 0 : n.reason) != null)
                    )
                        if (
                            (null == n ? void 0 : n.reason.includes("Manual clip")) ||
                            (null == n ? void 0 : n.reason.includes("exceeded threshold"))
                        ) {
                            var t;
                            let e = u.Z.getHandlerState("ml-audio-classification"),
                                a = null != (t = null == e ? void 0 : e.emotionHistory) ? t : [];
                            C((e) =>
                                [
                                    {
                                        message: "\u2705 CLIP CREATED: ".concat(n.reason),
                                        type: "clip",
                                        timestamp: new Date(),
                                        emotionHistory: a.length > 0 ? a : void 0,
                                    },
                                    ...e,
                                ].slice(0, 50),
                            );
                        } else B("\u274C No clip: ".concat(n.reason), "signal");
                    let a = s.Z.read();
                    _({
                        clippingPressure: a.pressure,
                        currentThreshold: a.currentThreshold,
                        lastClipTime: a.lastClipTimestamp,
                        timeline: a.signals,
                    });
                } catch (e) {
                    B("\u274C Error: ".concat(e.message), "signal");
                }
            },
            [B],
        ),
        G = r.useCallback(
            (e) => {
                let t = !T[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = {
                        emotion: !1,
                        yell: !1,
                        wakeWord: !1,
                        whisper: !1,
                    }),
                    (window.__CLIPS_DEBUG__[e] = t),
                    O((n) => g(x({}, n), { [e]: t }));
            },
            [T],
        ),
        H = Math.max(j.clippingPressure, j.currentThreshold, 1),
        z = (j.clippingPressure / H) * 100,
        V = (j.currentThreshold / H) * 100,
        W = 0,
        K = 0;
    if (null != j.lastClipTime) {
        let e = (Date.now() - j.lastClipTime) / 1000;
        e < 60 && (K = ((W = +(1 - e / 60)) / H) * 100);
    }
    let q = "Never";
    if (null != j.lastClipTime) {
        let e = Math.floor((Date.now() - j.lastClipTime) / 1000);
        q = "".concat(e, "s ago");
    }
    return (0, a.jsx)(i.Ttm, {
        children: (0, a.jsxs)(i.Kqy, {
            gap: 16,
            style: { padding: "16px" },
            children: [
                (0, a.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Clips Dev Tools",
                }),
                (0, a.jsxs)(i.Kqy, {
                    gap: 12,
                    children: [
                        (0, a.jsxs)(i.Kqy, {
                            gap: 12,
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    children: "Clip Statistics",
                                }),
                                (0, a.jsxs)(i.Text, {
                                    variant: "text-md/normal",
                                    children: [(0, a.jsx)("strong", { children: "Total Clips:" }), " ", t.length],
                                }),
                                (0, a.jsxs)(i.Text, {
                                    variant: "text-md/normal",
                                    children: [
                                        (0, a.jsx)("strong", { children: "Temporary Clips:" }),
                                        " ",
                                        v.length,
                                        " / ",
                                        e,
                                        " max",
                                    ],
                                }),
                                (0, a.jsxs)(i.Text, {
                                    variant: "text-md/normal",
                                    children: [
                                        (0, a.jsx)("strong", { children: "Permanent Clips:" }),
                                        " ",
                                        t.length - v.length,
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 12,
                            children: [
                                (0, a.jsx)(i.rsf, {
                                    label: "Wake Word Debug",
                                    description: "Log wake word detection events to console",
                                    checked: T.wakeWord,
                                    onChange: () => G("wakeWord"),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Emotion Debug",
                                    description: "Log emotion classification events to console",
                                    checked: T.emotion,
                                    onChange: () => G("emotion"),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Yell Debug",
                                    description: "Show yell classification events histogram",
                                    checked: T.yell,
                                    onChange: () => G("yell"),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Whisper Debug",
                                    description: "Log whisper transcription events to console",
                                    checked: T.whisper,
                                    onChange: () => G("whisper"),
                                }),
                            ],
                        }),
                        T.yell &&
                            (0, a.jsxs)(i.Kqy, {
                                gap: 8,
                                children: [
                                    (0, a.jsx)(i.Heading, {
                                        variant: "heading-md/semibold",
                                        children: "Yelling Detection Analysis",
                                    }),
                                    (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        style: { color: "#b9bbbe" },
                                        children: "Yell Confidence and Detection Over Time",
                                    }),
                                    S.length > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("div", {
                                                      style: {
                                                          backgroundColor: "#1e2124",
                                                          borderRadius: "4px",
                                                          padding: "20px 16px 16px 16px",
                                                          height: "400px",
                                                          position: "relative",
                                                      },
                                                      children: (0, a.jsxs)("svg", {
                                                          width: "100%",
                                                          height: "360",
                                                          viewBox: "0 0 800 360",
                                                          preserveAspectRatio: "none",
                                                          style: { display: "block" },
                                                          children: [
                                                              (() => {
                                                                  let e = S.filter((e) => e.debug);
                                                                  if (0 === e.length)
                                                                      return [0, 0.25, 0.5, 0.75, 1].map((e, t) => {
                                                                          let n = 40 + (1 - e) * 280;
                                                                          return (0, a.jsxs)(
                                                                              "g",
                                                                              {
                                                                                  children: [
                                                                                      (0, a.jsx)("line", {
                                                                                          x1: "60",
                                                                                          y1: n,
                                                                                          x2: "780",
                                                                                          y2: n,
                                                                                          stroke: "#333",
                                                                                          strokeWidth: "1",
                                                                                      }),
                                                                                      (0, a.jsx)("text", {
                                                                                          x: "10",
                                                                                          y: n + 5,
                                                                                          fill: "#999",
                                                                                          fontSize: "14",
                                                                                          fontFamily: "monospace",
                                                                                          children: e.toFixed(2),
                                                                                      }),
                                                                                  ],
                                                                              },
                                                                              t,
                                                                          );
                                                                      });
                                                                  let t = e.map((e) => e.debug.dbQuantized),
                                                                      n = e.map((e) => e.debug.thresholdP),
                                                                      r = Math.min(...t, ...n),
                                                                      l = Math.max(...t, ...n),
                                                                      i = l === r ? 1 : l - r;
                                                                  return [0, 0.25, 0.5, 0.75, 1].map((e, t) => {
                                                                      let n = 40 + (1 - e) * 280;
                                                                      return (0, a.jsxs)(
                                                                          "g",
                                                                          {
                                                                              children: [
                                                                                  (0, a.jsx)("line", {
                                                                                      x1: "60",
                                                                                      y1: n,
                                                                                      x2: "780",
                                                                                      y2: n,
                                                                                      stroke: "#333",
                                                                                      strokeWidth: "1",
                                                                                  }),
                                                                                  (0, a.jsx)("text", {
                                                                                      x: "10",
                                                                                      y: n + 5,
                                                                                      fill: "#999",
                                                                                      fontSize: "14",
                                                                                      fontFamily: "monospace",
                                                                                      children: (r + e * i).toFixed(0),
                                                                                  }),
                                                                              ],
                                                                          },
                                                                          t,
                                                                      );
                                                                  });
                                                              })(),
                                                              (0, a.jsx)("line", {
                                                                  x1: "60",
                                                                  y1: "320",
                                                                  x2: "780",
                                                                  y2: "320",
                                                                  stroke: "#555",
                                                                  strokeWidth: "2",
                                                              }),
                                                              (0, a.jsxs)("text", {
                                                                  x: "400",
                                                                  y: "350",
                                                                  fill: "#999",
                                                                  fontSize: "14",
                                                                  textAnchor: "middle",
                                                                  fontFamily: "sans-serif",
                                                                  children: ["Time (samples: ", S.length, ")"],
                                                              }),
                                                              (0, a.jsx)("text", {
                                                                  x: "30",
                                                                  y: "180",
                                                                  fill: "#999",
                                                                  fontSize: "14",
                                                                  textAnchor: "middle",
                                                                  fontFamily: "sans-serif",
                                                                  transform: "rotate(-90 30 180)",
                                                                  children: "Volume (dB quantized)",
                                                              }),
                                                              (() => {
                                                                  let e = S.filter((e) => e.debug);
                                                                  if (0 === e.length) return null;
                                                                  let t = e.map((e) => e.debug.dbQuantized),
                                                                      n = e.map((e) => e.debug.thresholdP),
                                                                      r = Math.min(...t, ...n),
                                                                      l = Math.max(...t, ...n),
                                                                      i = l === r ? 1 : l - r,
                                                                      o = (e) => 40 + (1 - (e - r) / i) * 280,
                                                                      s = [];
                                                                  e.forEach((t, n) => {
                                                                      let a =
                                                                              60 +
                                                                              (n / Math.max(e.length - 1, 1)) * 720,
                                                                          r = o(t.debug.dbQuantized);
                                                                      s.push({
                                                                          x: a,
                                                                          y: r,
                                                                          db: t.debug.dbQuantized,
                                                                          threshold: t.debug.thresholdP,
                                                                          isYelling:
                                                                              t.debug.dbQuantized >= t.debug.thresholdP,
                                                                      });
                                                                  });
                                                                  let c =
                                                                          s.length > 0
                                                                              ? "M ".concat(
                                                                                    s
                                                                                        .map((e) =>
                                                                                            ""
                                                                                                .concat(e.x, ",")
                                                                                                .concat(e.y),
                                                                                        )
                                                                                        .join(" L "),
                                                                                )
                                                                              : "",
                                                                      d = s.map((e) => ({
                                                                          x: e.x,
                                                                          y: o(e.threshold),
                                                                      })),
                                                                      u =
                                                                          d.length > 0
                                                                              ? "M ".concat(
                                                                                    d
                                                                                        .map((e) =>
                                                                                            ""
                                                                                                .concat(e.x, ",")
                                                                                                .concat(e.y),
                                                                                        )
                                                                                        .join(" L "),
                                                                                )
                                                                              : "";
                                                                  return (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                          (0, a.jsx)("path", {
                                                                              d: u,
                                                                              fill: "none",
                                                                              stroke: "#FF6B6B",
                                                                              strokeWidth: "2",
                                                                              strokeDasharray: "8,4",
                                                                              strokeLinejoin: "round",
                                                                          }),
                                                                          (0, a.jsx)("path", {
                                                                              d: c,
                                                                              fill: "none",
                                                                              stroke: "#5B8DEF",
                                                                              strokeWidth: "2",
                                                                              strokeLinejoin: "round",
                                                                          }),
                                                                          s
                                                                              .filter((e) => e.isYelling)
                                                                              .map((e, t) =>
                                                                                  (0, a.jsx)(
                                                                                      "circle",
                                                                                      {
                                                                                          cx: e.x,
                                                                                          cy: e.y,
                                                                                          r: "6",
                                                                                          fill: "#FF6B6B",
                                                                                          opacity: "0.8",
                                                                                      },
                                                                                      t,
                                                                                  ),
                                                                              ),
                                                                      ],
                                                                  });
                                                              })(),
                                                          ],
                                                      }),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                      style: {
                                                          display: "flex",
                                                          gap: "24px",
                                                          alignItems: "center",
                                                          flexWrap: "wrap",
                                                      },
                                                      children: [
                                                          (0, a.jsxs)("div", {
                                                              style: {
                                                                  display: "flex",
                                                                  alignItems: "center",
                                                                  gap: "8px",
                                                              },
                                                              children: [
                                                                  (0, a.jsx)("div", {
                                                                      style: {
                                                                          width: "20px",
                                                                          height: "3px",
                                                                          backgroundColor: "#5B8DEF",
                                                                      },
                                                                  }),
                                                                  (0, a.jsx)(i.Text, {
                                                                      variant: "text-sm/normal",
                                                                      style: { color: "#b9bbbe" },
                                                                      children: "Speech Volume (dB)",
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, a.jsxs)("div", {
                                                              style: {
                                                                  display: "flex",
                                                                  alignItems: "center",
                                                                  gap: "8px",
                                                              },
                                                              children: [
                                                                  (0, a.jsx)("svg", {
                                                                      width: "20",
                                                                      height: "3",
                                                                      children: (0, a.jsx)("line", {
                                                                          x1: "0",
                                                                          y1: "1.5",
                                                                          x2: "20",
                                                                          y2: "1.5",
                                                                          stroke: "#ff6b6b",
                                                                          strokeWidth: "2",
                                                                          strokeDasharray: "4,2",
                                                                      }),
                                                                  }),
                                                                  (0, a.jsx)(i.Text, {
                                                                      variant: "text-sm/normal",
                                                                      style: { color: "#b9bbbe" },
                                                                      children: "P95 Threshold (\xD71.1)",
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, a.jsxs)("div", {
                                                              style: {
                                                                  display: "flex",
                                                                  alignItems: "center",
                                                                  gap: "8px",
                                                              },
                                                              children: [
                                                                  (0, a.jsx)("div", {
                                                                      style: {
                                                                          width: "12px",
                                                                          height: "12px",
                                                                          borderRadius: "50%",
                                                                          backgroundColor: "#FF6B6B",
                                                                          opacity: 0.8,
                                                                      },
                                                                  }),
                                                                  (0, a.jsx)(i.Text, {
                                                                      variant: "text-sm/normal",
                                                                      style: { color: "#b9bbbe" },
                                                                      children: "Yelling Detected",
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(i.Text, {
                                              variant: "text-sm/normal",
                                              style: { color: "#888" },
                                              children:
                                                  "No yell events captured yet. Speak into your microphone to generate events.",
                                          }),
                                ],
                            }),
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: "Auto Clips",
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 12,
                            align: "start",
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-md/semibold",
                                    children: "Max Auto Clips",
                                }),
                                (0, a.jsx)(i.FiK, {
                                    value: e,
                                    minValue: h.qb,
                                    maxValue: h.b0,
                                    onChange: m.W6,
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Enable Manual Signals",
                                    checked: n.enableManualSignals,
                                    onChange: (e) => m.Rr(g(x({}, n), { enableManualSignals: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Enable Distributed Signals",
                                    checked: n.enableDistributedSignals,
                                    onChange: (e) => m.Rr(g(x({}, n), { enableDistributedSignals: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Enable Phrase Signals",
                                    checked: n.enablePhraseSignals,
                                    onChange: (e) => m.Rr(g(x({}, n), { enablePhraseSignals: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Enable Yelling Signals",
                                    checked: n.enableYellingSignals,
                                    onChange: (e) => m.Rr(g(x({}, n), { enableYellingSignals: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Enable Game Signals",
                                    checked: n.enableGameSignals,
                                    onChange: (e) => m.Rr(g(x({}, n), { enableGameSignals: e })),
                                }),
                            ],
                        }),
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: "Auto Clip Trigger Phrases",
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    style: { color: "#b9bbbe" },
                                    children:
                                        "One phrase per line. Used for both wake word and whisper transcription detection.",
                                }),
                                (0, a.jsx)(i.oil, {
                                    defaultValue: f.join(","),
                                    onBlur: (e) => {
                                        let t = e.target.value
                                            .split(",")
                                            .map((e) => e.trim())
                                            .filter((e) => e.length > 0);
                                        m.a2(t);
                                    },
                                    placeholder: "Enter phrases (comma separated)",
                                }),
                                (0, a.jsxs)(i.Text, {
                                    variant: "text-xs/normal",
                                    style: { color: "#888" },
                                    children: ["Current phrases: ", f.length],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)(i.Kqy, {
                    gap: 12,
                    children: [
                        (0, a.jsxs)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: [
                                "Clip Decision Engine",
                                (0, a.jsx)("span", {
                                    style: {
                                        fontSize: "12px",
                                        fontWeight: "normal",
                                        color: "#888",
                                        marginLeft: "8px",
                                    },
                                    children: "(updating every 100ms)",
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-md/semibold",
                                    children: "Current State",
                                }),
                                (0, a.jsxs)("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        gap: "12px",
                                    },
                                    children: [
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-sm/normal",
                                                    style: { color: "#b9bbbe" },
                                                    children: "Clipping Pressure",
                                                }),
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-lg/bold",
                                                    children: j.clippingPressure.toFixed(3),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-sm/normal",
                                                    style: { color: "#b9bbbe" },
                                                    children: "Current Threshold",
                                                }),
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-lg/bold",
                                                    children: j.currentThreshold.toFixed(3),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-sm/normal",
                                                    style: { color: "#b9bbbe" },
                                                    children: "Last Clip",
                                                }),
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-lg/bold",
                                                    children: q,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: "Pressure vs Threshold",
                                }),
                                (0, a.jsxs)("div", {
                                    style: {
                                        position: "relative",
                                        width: "100%",
                                        height: "24px",
                                        backgroundColor: "#2f3136",
                                        borderRadius: "4px",
                                        overflow: "hidden",
                                    },
                                    children: [
                                        K > 0 &&
                                            (0, a.jsx)("div", {
                                                style: {
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    height: "100%",
                                                    width: "".concat(K, "%"),
                                                    backgroundColor: "#ff4444",
                                                    opacity: 0.4,
                                                    transition: "width 0.1s ease-out",
                                                },
                                                title: "Counterforce: "
                                                    .concat(W.toFixed(3), " (suppressing clips for ")
                                                    .concat(60, "s)"),
                                            }),
                                        (0, a.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                height: "100%",
                                                width: "".concat(z, "%"),
                                                backgroundColor: "#667eea",
                                                transition: "width 0.1s ease-out",
                                            },
                                        }),
                                        (0, a.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                left: "".concat(V, "%"),
                                                top: 0,
                                                width: "3px",
                                                height: "100%",
                                                backgroundColor: "#ff6b6b",
                                                transition: "left 0.1s ease-out",
                                            },
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontSize: "11px",
                                        color: "#b9bbbe",
                                    },
                                    children: [
                                        (0, a.jsxs)("span", {
                                            children: [
                                                "Pressure ",
                                                K > 0 && "(\u2212".concat(W.toFixed(2), " counterforce)"),
                                            ],
                                        }),
                                        (0, a.jsx)("span", { children: "Threshold" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsxs)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: ["Active Signals (", j.timeline.length, ")"],
                                }),
                                (0, a.jsx)("div", {
                                    style: {
                                        maxHeight: "300px",
                                        overflowY: "auto",
                                        backgroundColor: "#2f3136",
                                        borderRadius: "4px",
                                        padding: "8px",
                                        fontSize: "11px",
                                        fontFamily: "monospace",
                                    },
                                    children:
                                        0 === j.timeline.length
                                            ? (0, a.jsx)(i.Text, {
                                                  variant: "text-sm/normal",
                                                  style: { color: "#888" },
                                                  children: "No active signals",
                                              })
                                            : (() => {
                                                  let e = [],
                                                      t = 0,
                                                      n = null;
                                                  for (let a = 0; a < j.timeline.length; a++) {
                                                      let r = j.timeline[a];
                                                      r.signal.type === d.Bs.SPEAKING
                                                          ? (0 === t && (n = r), t++)
                                                          : (t > 0 &&
                                                                (1 === t
                                                                    ? e.push({
                                                                          type: "single",
                                                                          event: n,
                                                                      })
                                                                    : e.push({
                                                                          type: "group",
                                                                          count: t,
                                                                          firstEvent: n,
                                                                      }),
                                                                (t = 0),
                                                                (n = null)),
                                                            e.push({
                                                                type: "single",
                                                                event: r,
                                                            }));
                                                  }
                                                  t > 0 &&
                                                      (1 === t
                                                          ? e.push({
                                                                type: "single",
                                                                event: n,
                                                            })
                                                          : e.push({
                                                                type: "group",
                                                                count: t,
                                                                firstEvent: n,
                                                            }));
                                                  let r = (e, t) => {
                                                      let n = s.Z.getInternalState(),
                                                          a = s.Z.getConfig(),
                                                          r = 0;
                                                      switch (e.signal.type) {
                                                          case d.Bs.MANUAL:
                                                          case d.Bs.DISTRIBUTED:
                                                          case d.Bs.YELLING:
                                                          case d.Bs.SPEAKING:
                                                          case d.Bs.SOUNDBOARD:
                                                              r = a.signals[e.signal.type].importance;
                                                              break;
                                                          case d.Bs.PHRASE:
                                                              if ("text" in e.signal) {
                                                                  let t = a.signals[d.Bs.PHRASE],
                                                                      n = e.signal.text.toLowerCase().trim(),
                                                                      l = !1;
                                                                  for (let e of t.phrases)
                                                                      if (
                                                                          e.enabled &&
                                                                          e.patterns.some((e) =>
                                                                              n.includes(e.toLowerCase()),
                                                                          )
                                                                      ) {
                                                                          (r = e.importance), (l = !0);
                                                                          break;
                                                                      }
                                                                  l || (r = t.defaultPhrase.importance);
                                                              }
                                                              break;
                                                          case d.Bs.GAME_EVENT:
                                                              if ("eventType" in e.signal) {
                                                                  var l;
                                                                  let t =
                                                                      a.signals[d.Bs.GAME_EVENT].eventTypes[
                                                                          e.signal.eventType
                                                                      ];
                                                                  r =
                                                                      null != (l = null == t ? void 0 : t.importance)
                                                                          ? l
                                                                          : a.signals[d.Bs.GAME_EVENT].defaultEventType
                                                                                .importance;
                                                              }
                                                      }
                                                      let i = r,
                                                          o = [];
                                                      for (let n of t) {
                                                          let t;
                                                          if (n !== e) {
                                                              switch (n.signal.type) {
                                                                  case d.Bs.MANUAL:
                                                                  case d.Bs.DISTRIBUTED:
                                                                  case d.Bs.YELLING:
                                                                  case d.Bs.SPEAKING:
                                                                  case d.Bs.SOUNDBOARD:
                                                                      t = a.signals[n.signal.type].amplifiers;
                                                                      break;
                                                                  case d.Bs.PHRASE:
                                                                      if ("text" in n.signal) {
                                                                          let e = a.signals[d.Bs.PHRASE],
                                                                              r = n.signal.text.toLowerCase().trim();
                                                                          for (let n of e.phrases)
                                                                              if (
                                                                                  n.enabled &&
                                                                                  n.patterns.some((e) =>
                                                                                      r.includes(e.toLowerCase()),
                                                                                  )
                                                                              ) {
                                                                                  t = n.amplifiers;
                                                                                  break;
                                                                              }
                                                                      }
                                                                      break;
                                                                  case d.Bs.GAME_EVENT:
                                                                      if ("eventType" in n.signal) {
                                                                          let e =
                                                                              a.signals[d.Bs.GAME_EVENT].eventTypes[
                                                                                  n.signal.eventType
                                                                              ];
                                                                          t = null == e ? void 0 : e.amplifiers;
                                                                      }
                                                              }
                                                              if (null != t && 0 !== t.length)
                                                                  for (let a of t) {
                                                                      if (!a.targetSignals.includes(e.signal.type))
                                                                          continue;
                                                                      let t = (n.timestamp - e.timestamp) / 1000;
                                                                      t < 0 ||
                                                                          t > a.timeWindowSeconds ||
                                                                          ((i *= a.multiplier),
                                                                          o.push({
                                                                              from: n.signal.type,
                                                                              multiplier: a.multiplier,
                                                                          }));
                                                                  }
                                                          }
                                                      }
                                                      let c = i * n.fatigue;
                                                      return {
                                                          baseImportance: r,
                                                          amplifiedImportance: i,
                                                          effectiveImportance: c,
                                                          fatigue: n.fatigue,
                                                          amplifications: o,
                                                      };
                                                  };
                                                  return e.map((t, n) => {
                                                      if ("group" === t.type) {
                                                          let l = r(t.firstEvent, j.timeline),
                                                              i = l.effectiveImportance * t.count;
                                                          return (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                  style: {
                                                                      padding: "4px 0",
                                                                      borderBottom:
                                                                          n < e.length - 1
                                                                              ? "1px solid #40444b"
                                                                              : "none",
                                                                      color: "#dcddde",
                                                                  },
                                                                  children: [
                                                                      (0, a.jsxs)("div", {
                                                                          children: [
                                                                              (0, a.jsxs)("span", {
                                                                                  style: {
                                                                                      color: "#7289da",
                                                                                      fontWeight: "bold",
                                                                                  },
                                                                                  children: [t.count, " \xD7 SPEAKING"],
                                                                              }),
                                                                              (0, a.jsxs)("span", {
                                                                                  style: {
                                                                                      color: "#72767d",
                                                                                      marginLeft: "8px",
                                                                                  },
                                                                                  children: [
                                                                                      "pressure: ",
                                                                                      i.toFixed(4),
                                                                                      " (base: ",
                                                                                      l.baseImportance.toFixed(3),
                                                                                      " \xD7",
                                                                                      " ",
                                                                                      t.count,
                                                                                      ")",
                                                                                  ],
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      l.amplifications.length > 0 &&
                                                                          (0, a.jsxs)("div", {
                                                                              style: {
                                                                                  marginLeft: "16px",
                                                                                  fontSize: "10px",
                                                                                  color: "#43b581",
                                                                              },
                                                                              children: [
                                                                                  "\u2191 amplified by:",
                                                                                  " ",
                                                                                  l.amplifications
                                                                                      .map((e) =>
                                                                                          ""
                                                                                              .concat(e.from, " (\xD7")
                                                                                              .concat(
                                                                                                  e.multiplier,
                                                                                                  ")",
                                                                                              ),
                                                                                      )
                                                                                      .join(", "),
                                                                              ],
                                                                          }),
                                                                  ],
                                                              },
                                                              n,
                                                          );
                                                      }
                                                      {
                                                          let l = t.event,
                                                              i = r(l, j.timeline),
                                                              o = l.signal.type;
                                                          return (
                                                              l.signal.type === d.Bs.PHRASE && "text" in l.signal
                                                                  ? (o = 'PHRASE: "'.concat(l.signal.text, '"'))
                                                                  : l.signal.type === d.Bs.GAME_EVENT &&
                                                                    "eventType" in l.signal &&
                                                                    (o = "GAME_EVENT: ".concat(l.signal.eventType)),
                                                              (0, a.jsxs)(
                                                                  "div",
                                                                  {
                                                                      style: {
                                                                          padding: "4px 0",
                                                                          borderBottom:
                                                                              n < e.length - 1
                                                                                  ? "1px solid #40444b"
                                                                                  : "none",
                                                                          color: "#dcddde",
                                                                      },
                                                                      children: [
                                                                          (0, a.jsxs)("div", {
                                                                              children: [
                                                                                  (0, a.jsx)("span", {
                                                                                      style: {
                                                                                          color:
                                                                                              l.signal.type ===
                                                                                              d.Bs.YELLING
                                                                                                  ? "#ff6b6b"
                                                                                                  : "#7289da",
                                                                                          fontWeight: "bold",
                                                                                      },
                                                                                      children: o,
                                                                                  }),
                                                                                  (0, a.jsxs)("span", {
                                                                                      style: {
                                                                                          color: "#72767d",
                                                                                          marginLeft: "8px",
                                                                                      },
                                                                                      children: [
                                                                                          "pressure: ",
                                                                                          i.effectiveImportance.toFixed(
                                                                                              4,
                                                                                          ),
                                                                                          " (base:",
                                                                                          " ",
                                                                                          i.baseImportance.toFixed(3),
                                                                                          i.amplifications.length > 0 &&
                                                                                              " \u2192 amp: ".concat(
                                                                                                  i.amplifiedImportance.toFixed(
                                                                                                      3,
                                                                                                  ),
                                                                                              ),
                                                                                          ", fatigue: \xD7",
                                                                                          i.fatigue.toFixed(3),
                                                                                          ")",
                                                                                      ],
                                                                                  }),
                                                                              ],
                                                                          }),
                                                                          i.amplifications.length > 0 &&
                                                                              (0, a.jsxs)("div", {
                                                                                  style: {
                                                                                      marginLeft: "16px",
                                                                                      fontSize: "10px",
                                                                                      color: "#43b581",
                                                                                  },
                                                                                  children: [
                                                                                      "\u2191 amplified by:",
                                                                                      " ",
                                                                                      i.amplifications
                                                                                          .map((e) =>
                                                                                              ""
                                                                                                  .concat(
                                                                                                      e.from,
                                                                                                      " (\xD7",
                                                                                                  )
                                                                                                  .concat(
                                                                                                      e.multiplier,
                                                                                                      ")",
                                                                                                  ),
                                                                                          )
                                                                                          .join(", "),
                                                                                  ],
                                                                              }),
                                                                      ],
                                                                  },
                                                                  n,
                                                              )
                                                          );
                                                      }
                                                  });
                                              })(),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: "Send Test Signals",
                                }),
                                (0, a.jsxs)("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(3, 1fr)",
                                        gap: "8px",
                                    },
                                    children: [
                                        (0, a.jsx)(i.Button, {
                                            text: "Manual",
                                            onClick: () => F({ type: d.Bs.MANUAL }),
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Distributed",
                                            onClick: () =>
                                                F({
                                                    type: d.Bs.DISTRIBUTED,
                                                    remoteTriggerUserId: "123",
                                                    remoteTriggerClipId: "456",
                                                }),
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Phrase: Alexa",
                                            onClick: () =>
                                                F({
                                                    type: d.Bs.PHRASE,
                                                    text: "alexa",
                                                }),
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Phrase: Klip",
                                            onClick: () =>
                                                F({
                                                    type: d.Bs.PHRASE,
                                                    text: "klip",
                                                }),
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Phrase: Clip",
                                            onClick: () =>
                                                F({
                                                    type: d.Bs.PHRASE,
                                                    text: "clip",
                                                }),
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Phrase: Burr",
                                            onClick: () =>
                                                F({
                                                    type: d.Bs.PHRASE,
                                                    text: "burr",
                                                }),
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Yelling",
                                            onClick: () => F({ type: d.Bs.YELLING }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)(i.Kqy, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px",
                                            },
                                            children: [
                                                (0, a.jsx)(i.q4e, {
                                                    label: "Event Type",
                                                    value: N,
                                                    onChange: (e) => P(e),
                                                    options: [
                                                        {
                                                            label: "Kill",
                                                            value: d.x0.KILL,
                                                        },
                                                        {
                                                            label: "Multikill",
                                                            value: d.x0.MULTIKILL,
                                                        },
                                                        {
                                                            label: "Death",
                                                            value: d.x0.DEATH,
                                                        },
                                                        {
                                                            label: "Assist",
                                                            value: d.x0.ASSIST,
                                                        },
                                                        {
                                                            label: "Item",
                                                            value: d.x0.ITEM,
                                                        },
                                                        {
                                                            label: "Victory",
                                                            value: d.x0.VICTORY,
                                                        },
                                                        {
                                                            label: "Defeat",
                                                            value: d.x0.DEFEAT,
                                                        },
                                                        {
                                                            label: "Level Up",
                                                            value: d.x0.LEVEL_UP,
                                                        },
                                                        {
                                                            label: "Treasure",
                                                            value: d.x0.TREASURE,
                                                        },
                                                        {
                                                            label: "Objective Kill",
                                                            value: d.x0.OBJECTIVE_KILL,
                                                        },
                                                    ],
                                                }),
                                                (0, a.jsx)(i.q4e, {
                                                    label: "Importance",
                                                    value: I,
                                                    onChange: w,
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
                                        (0, a.jsxs)(i.Kqy, {
                                            gap: 8,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "4px",
                                                    },
                                                    children: [
                                                        (0, a.jsx)(i.Text, {
                                                            variant: "text-sm/semibold",
                                                            children: "Title (optional)",
                                                        }),
                                                        (0, a.jsx)("input", {
                                                            type: "text",
                                                            value: k,
                                                            onChange: (e) => R(e.target.value),
                                                            placeholder: "e.g., First Blood",
                                                            style: {
                                                                padding: "8px",
                                                                backgroundColor: "#2f3136",
                                                                border: "1px solid #40444b",
                                                                borderRadius: "4px",
                                                                color: "#dcddde",
                                                                fontSize: "14px",
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "4px",
                                                    },
                                                    children: [
                                                        (0, a.jsx)(i.Text, {
                                                            variant: "text-sm/semibold",
                                                            children: "Description (optional)",
                                                        }),
                                                        (0, a.jsx)("input", {
                                                            type: "text",
                                                            value: A,
                                                            onChange: (e) => D(e.target.value),
                                                            placeholder: "e.g., Killed enemy ADC in bot lane",
                                                            style: {
                                                                padding: "8px",
                                                                backgroundColor: "#2f3136",
                                                                border: "1px solid #40444b",
                                                                borderRadius: "4px",
                                                                color: "#dcddde",
                                                                fontSize: "14px",
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Create Game Event",
                                            onClick: () => {
                                                m.XK({
                                                    type: d.Bs.GAME_EVENT,
                                                    eventType: N,
                                                    importance: I,
                                                    title: k,
                                                    description: A,
                                                }),
                                                    B(
                                                        "Created "
                                                            .concat(N.toUpperCase(), " event (")
                                                            .concat(I, ")")
                                                            .concat(k),
                                                        "info",
                                                    );
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: "Event Log",
                                }),
                                (0, a.jsx)("div", {
                                    style: {
                                        maxHeight: "300px",
                                        overflowY: "auto",
                                        backgroundColor: "#2f3136",
                                        borderRadius: "4px",
                                        padding: "8px",
                                    },
                                    children:
                                        0 === y.length
                                            ? (0, a.jsx)(i.Text, {
                                                  variant: "text-sm/normal",
                                                  style: { color: "#888" },
                                                  children: "No events yet",
                                              })
                                            : y.map((e, t) =>
                                                  (0, a.jsxs)(
                                                      "div",
                                                      {
                                                          style: {
                                                              padding: "8px 0",
                                                              borderBottom:
                                                                  t < y.length - 1 ? "1px solid #40444b" : "none",
                                                          },
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  style: {
                                                                      fontSize: "12px",
                                                                      color:
                                                                          "clip" === e.type
                                                                              ? "#43b581"
                                                                              : "signal" === e.type
                                                                                ? "#b9bbbe"
                                                                                : "#7289da",
                                                                  },
                                                                  children: [
                                                                      (0, a.jsxs)("span", {
                                                                          style: {
                                                                              color: "#72767d",
                                                                              marginRight: "8px",
                                                                          },
                                                                          children: [
                                                                              "[",
                                                                              e.timestamp.toLocaleTimeString(),
                                                                              "]",
                                                                          ],
                                                                      }),
                                                                      e.message,
                                                                  ],
                                                              }),
                                                              null != e.emotionHistory &&
                                                                  e.emotionHistory.length > 0 &&
                                                                  (0, a.jsx)("div", {
                                                                      style: {
                                                                          marginTop: "12px",
                                                                          marginBottom: "8px",
                                                                      },
                                                                      children: (0, a.jsx)(p.Z, {
                                                                          emotionHistory: e.emotionHistory,
                                                                      }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  ),
                                              ),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: "ML Pipelines Enabled",
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Emotion Classifier",
                                    checked: b.emotionClassifier,
                                    onChange: (e) => m.So(g(x({}, b), { emotionClassifier: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Wake Word Detector",
                                    checked: b.wakeWordDetector,
                                    onChange: (e) => m.So(g(x({}, b), { wakeWordDetector: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Yell Detector",
                                    checked: b.yellDetector,
                                    onChange: (e) => m.So(g(x({}, b), { yellDetector: e })),
                                }),
                                (0, a.jsx)(i.rsf, {
                                    label: "Whisper Transcription",
                                    checked: b.whisperTranscription,
                                    onChange: (e) => m.So(g(x({}, b), { whisperTranscription: e })),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(i.Kqy, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: "Decision Engine Config",
                                }),
                                (0, a.jsxs)("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "8px",
                                    },
                                    children: [
                                        (0, a.jsx)(i.Button, {
                                            text: "Export Config",
                                            onClick: () => {
                                                try {
                                                    let e = s.Z.getConfig(),
                                                        t = (0, o.yM)(e);
                                                    L(t), U(!0), B("\u2705 Config exported to textarea below", "info");
                                                } catch (e) {
                                                    B("\u274C Failed to export config: ".concat(e.message), "info");
                                                }
                                            },
                                        }),
                                        (0, a.jsx)(i.Button, {
                                            text: "Import Config",
                                            onClick: () => {
                                                try {
                                                    if ("" === Z.trim())
                                                        return void B("\u274C Config textarea is empty", "info");
                                                    let e = (0, o.o$)(Z);
                                                    m.O0(e), B("\u2705 Config imported successfully", "info");
                                                } catch (e) {
                                                    B("\u274C Failed to import config: ".concat(e.message), "info");
                                                }
                                            },
                                        }),
                                    ],
                                }),
                                M &&
                                    (0, a.jsxs)(i.Kqy, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                },
                                                children: [
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-sm/normal",
                                                        style: { color: "#b9bbbe" },
                                                        children: "Copy from or paste into this textarea",
                                                    }),
                                                    (0, a.jsx)(i.Button, {
                                                        text: "Close",
                                                        onClick: () => {
                                                            U(!1), L("");
                                                        },
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)("textarea", {
                                                value: Z,
                                                onChange: (e) => L(e.target.value),
                                                placeholder: "Paste config JSON here...",
                                                style: {
                                                    width: "100%",
                                                    minHeight: "200px",
                                                    maxHeight: "400px",
                                                    padding: "12px",
                                                    backgroundColor: "#2f3136",
                                                    border: "1px solid #40444b",
                                                    borderRadius: "4px",
                                                    color: "#dcddde",
                                                    fontSize: "12px",
                                                    fontFamily: "monospace",
                                                    resize: "vertical",
                                                },
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
