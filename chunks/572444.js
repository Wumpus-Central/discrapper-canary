n.d(t, { Z: () => _ }),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(17294),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(539854);
var a = n(951288),
    r = n(647438),
    l = n(345959),
    i = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(846027),
    u = n(304809),
    m = n(670863),
    h = n(72897),
    p = n(131951),
    x = n(246992),
    b = n(65154),
    f = n(25016),
    g = n(866403);
function v(e) {
    let { recording: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c.Text, {
                variant: "text-sm/normal",
                children: ["Duration: ", t.audioBuffer.duration],
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-sm/normal",
                children: ["Sample Rate: ", t.audioBuffer.sampleRate],
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-sm/normal",
                children: ["Noise Suppression: ", t.suppression],
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, a.jsxs)(c.Text, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function j(e) {
    let { recording: t, playing: n, onPlay: r, onStop: l } = e;
    return (0, a.jsx)(c.zF9, {
        collapsibleContent: (0, a.jsx)(v, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, a.jsxs)(c.P3F, {
                onClick: s,
                children: [
                    (0, a.jsxs)(c.Text, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, a.jsx)(c.P3F, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), n ? l() : r(t);
                        },
                        children: n ? (0, a.jsx)(c.fpf, { size: "xxs" }) : (0, a.jsx)(c.o1U, { size: "xxs" }),
                    }),
                    (0, a.jsx)(c.P3F, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation();
                            let n = new Blob([i()(t.audioBuffer)], { type: "audio/wav" }),
                                a = URL.createObjectURL(n),
                                r = document.createElement("a");
                            (r.href = a),
                                (r.download = ""
                                    .concat(t.inputName, "-")
                                    .concat(new Date(t.createdAt).toLocaleString(), ".wav")),
                                r.click(),
                                URL.revokeObjectURL(a);
                        },
                        children: (0, a.jsx)(c._8t, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function _() {
    let { name: e } = (0, h.p6)(b.h7.AUDIO_INPUT),
        [t, n] = r.useState(!1),
        [l, i] = r.useState([]),
        v = (0, s.e7)([p.Z], () => p.Z.getKrispSuppressionLevel()),
        [_, y] = r.useState(null),
        C = r.useRef(null),
        N = r.useRef(null),
        [E, T] = r.useState(0.5),
        {
            krispModels: S,
            krispModelOverride: O,
            inputMode: P,
            echoCancellation: k,
            autoThreshold: R,
            vadUseKrisp: w,
            vadKrispActivationThreshold: I,
            noiseCancellation: Z,
            noiseSuppression: A,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: L,
            noiseCancellationEnableStats: M,
        } = (0, s.cj)([p.Z], () => ({
            krispModels: p.Z.getKrispModels(),
            krispModelOverride: p.Z.getKrispModelOverride(),
            echoCancellation: p.Z.getEchoCancellation(),
            autoThreshold: p.Z.getModeOptions().autoThreshold,
            vadUseKrisp: p.Z.getModeOptions().vadUseKrisp,
            inputMode: p.Z.getMode(),
            vadKrispActivationThreshold: p.Z.getKrispVadActivationThreshold(),
            noiseCancellation: p.Z.getNoiseCancellation(),
            noiseSuppression: p.Z.getNoiseSuppression(),
            noiseSuppressionSupported: p.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.Z.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: p.Z.getKrispEnableStats(),
        })),
        U = Z ? "KRISP" : A ? "STANDARD" : "NONE",
        F = (0, u.N)(),
        G = r.useCallback(() => {
            var e;
            null == (e = C.current) || e.stop(), (C.current = null), y(null);
        }, []);
    function B() {
        p.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function z(e) {
        if ((t && B(), G(), null == F)) return;
        let n = F.createBufferSource();
        (n.buffer = e.audioBuffer),
            (N.current = F.createGain()),
            (N.current.gain.value = E),
            n.connect(N.current),
            N.current.connect(F.destination),
            (n.loop = !0),
            n.start(),
            (C.current = n),
            y(e);
    }
    r.useEffect(() => {
        G();
    }, [G]);
    let V = [];
    return (
        L &&
            V.push({
                label: "Krisp",
                value: "KRISP",
            }),
        D &&
            V.push({
                label: "Standard",
                value: "STANDARD",
            }),
        V.push({
            label: "Disabled",
            value: "NONE",
        }),
        (0, a.jsx)(c.zJl, {
            className: g.panel,
            children: (0, a.jsxs)("div", {
                className: f.innerPanel,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Input Device",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(m.j, {
                            deviceType: b.h7.AUDIO_INPUT,
                            location: "DevToolsKrispTester",
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Noise Cancellation",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(c.q4e, {
                            value: U,
                            onChange: (e) => {
                                d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e);
                            },
                            options: V,
                            popoutLayerContext: x.O$,
                        }),
                    }),
                    "KRISP" === U &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.hjN, {
                                    title: "Krisp Suppression Level",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.iRW, {
                                        initialValue: v,
                                        onValueChange: d.Z.setKrispSuppressionLevel,
                                        minValue: 0,
                                        maxValue: 100,
                                    }),
                                }),
                                (0, a.jsx)(c.hjN, {
                                    title: "Krisp Model Override",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.PhF, {
                                        clearable: !0,
                                        clear: () => {
                                            d.Z.setKrispModelOverride("");
                                        },
                                        isSelected: (e) => e === O,
                                        options: S.map((e) => ({
                                            label: e,
                                            value: e,
                                        })),
                                        select: (e) => {
                                            d.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: x.O$,
                                        serialize: (e) => e,
                                    }),
                                }),
                                (0, a.jsx)(c.hjN, {
                                    title: "Noise Cancellation Stats",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.j7V, {
                                        value: M,
                                        onChange: (e) => d.Z.setNoiseCancellationEnableStats(e),
                                        children: "Enable Stats",
                                    }),
                                }),
                            ],
                        }),
                    P === b.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.hjN, {
                                    title: "VAD Auto Threshold",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.j7V, {
                                        hideBorder: !0,
                                        value: R,
                                        onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                        children: "Auto Threshold",
                                    }),
                                }),
                                R &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c.hjN, {
                                                title: "VAD Krisp Auto Threshold",
                                                tag: c.RB0.H3,
                                                children: (0, a.jsx)(c.j7V, {
                                                    hideBorder: !0,
                                                    value: w,
                                                    onChange: (e) =>
                                                        d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                                    children: "Use Krisp VAD",
                                                }),
                                            }),
                                            w &&
                                                (0, a.jsx)(c.hjN, {
                                                    title: "Krisp VAD Activation Threshold",
                                                    tag: c.RB0.H3,
                                                    children: (0, a.jsx)(c.iRW, {
                                                        initialValue: I,
                                                        onValueChange: (e) =>
                                                            d.Z.setMode(b.pM.VOICE_ACTIVITY, {
                                                                vadKrispActivationThreshold: e,
                                                            }),
                                                        minValue: 0,
                                                        maxValue: 1,
                                                    }),
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, a.jsx)(c.hjN, {
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(c.j7V, {
                            hideBorder: !0,
                            value: k,
                            onChange: (e) => d.Z.setEchoCancellation(e),
                            children: "Echo Cancellation",
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Recorder",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(o.zx, {
                            color: t ? o.zx.Colors.RED : o.zx.Colors.BRAND,
                            onClick: t
                                ? B
                                : function () {
                                      G(),
                                          n(!0),
                                          d.Z.setLoopback("krisp_test", !0),
                                          p.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                              n(!1), d.Z.setLoopback("krisp_test", !1);
                                              let l = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: a,
                                              });
                                              for (let e = 0; e < a; e++) {
                                                  let n = new Float32Array(t.length / a);
                                                  for (let r = 0; r < t.length / a; r++) n[r] = t[r * a + e] / 32768;
                                                  l.copyToChannel(n, e);
                                              }
                                              i((t) => [
                                                  ...t,
                                                  {
                                                      inputName: e,
                                                      audioBuffer: l,
                                                      createdAt: Date.now(),
                                                      suppression: U,
                                                      echoCancellation: k,
                                                      krispSuppressionLevel: v,
                                                  },
                                              ]);
                                          });
                                  },
                            children: t ? "Stop Recording" : "Start Recording",
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Volume",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(c.iRW, {
                            initialValue: E,
                            asValueChanges: function (e) {
                                null != N.current && ((N.current.gain.value = e), T(e));
                            },
                            minValue: 0,
                            maxValue: 1,
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Recordings",
                        tag: c.RB0.H3,
                        children: l.map((e, t) =>
                            (0, a.jsx)(
                                j,
                                {
                                    recording: e,
                                    playing: e === _,
                                    onPlay: z,
                                    onStop: G,
                                },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
