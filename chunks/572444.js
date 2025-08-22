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
    x = n(72897),
    h = n(131951),
    p = n(246992),
    f = n(65154),
    v = n(653301),
    b = n(451429);
function j(e) {
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
function g(e) {
    let { recording: t, playing: n, onPlay: r, onStop: l } = e;
    return (0, a.jsx)(c.zF9, {
        collapsibleContent: (0, a.jsx)(j, { recording: t }),
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
    let { name: e } = (0, x.p6)(f.h7.AUDIO_INPUT),
        [t, n] = r.useState(!1),
        [l, i] = r.useState([]),
        j = (0, s.e7)([h.Z], () => h.Z.getKrispSuppressionLevel()),
        [_, y] = r.useState(null),
        C = r.useRef(null),
        N = r.useRef(null),
        [E, O] = r.useState(0.5),
        {
            krispModels: T,
            krispModelOverride: S,
            inputMode: P,
            echoCancellation: w,
            autoThreshold: k,
            vadUseKrisp: I,
            vadKrispActivationThreshold: R,
            noiseCancellation: Z,
            noiseSuppression: A,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: L,
            noiseCancellationEnableStats: M,
        } = (0, s.cj)([h.Z], () => ({
            krispModels: h.Z.getKrispModels(),
            krispModelOverride: h.Z.getKrispModelOverride(),
            echoCancellation: h.Z.getEchoCancellation(),
            autoThreshold: h.Z.getModeOptions().autoThreshold,
            vadUseKrisp: h.Z.getModeOptions().vadUseKrisp,
            inputMode: h.Z.getMode(),
            vadKrispActivationThreshold: h.Z.getKrispVadActivationThreshold(),
            noiseCancellation: h.Z.getNoiseCancellation(),
            noiseSuppression: h.Z.getNoiseSuppression(),
            noiseSuppressionSupported: h.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: h.Z.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: h.Z.getKrispEnableStats(),
        })),
        F = Z ? "KRISP" : A ? "STANDARD" : "NONE",
        U = (0, u.N)(),
        z = r.useCallback(() => {
            var e;
            null == (e = C.current) || e.stop(), (C.current = null), y(null);
        }, []);
    function B() {
        h.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function G(e) {
        if ((t && B(), z(), null == U)) return;
        let n = U.createBufferSource();
        (n.buffer = e.audioBuffer),
            (N.current = U.createGain()),
            (N.current.gain.value = E),
            n.connect(N.current),
            N.current.connect(U.destination),
            (n.loop = !0),
            n.start(),
            (C.current = n),
            y(e);
    }
    r.useEffect(() => {
        z();
    }, [z]);
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
            className: b.panel,
            children: (0, a.jsxs)("div", {
                className: v.innerPanel,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Input Device",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(m.j, {
                            deviceType: f.h7.AUDIO_INPUT,
                            location: "DevToolsKrispTester",
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Noise Cancellation",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(c.q4e, {
                            value: F,
                            onChange: (e) => {
                                d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e);
                            },
                            options: V,
                            popoutLayerContext: p.O$,
                        }),
                    }),
                    "KRISP" === F &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.hjN, {
                                    title: "Krisp Suppression Level",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.iRW, {
                                        initialValue: j,
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
                                        isSelected: (e) => e === S,
                                        options: T.map((e) => ({
                                            label: e,
                                            value: e,
                                        })),
                                        select: (e) => {
                                            d.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: p.O$,
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
                    P === f.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.hjN, {
                                    title: "VAD Auto Threshold",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.j7V, {
                                        hideBorder: !0,
                                        value: k,
                                        onChange: (e) => d.Z.setMode(f.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                        children: "Auto Threshold",
                                    }),
                                }),
                                k &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c.hjN, {
                                                title: "VAD Krisp Auto Threshold",
                                                tag: c.RB0.H3,
                                                children: (0, a.jsx)(c.j7V, {
                                                    hideBorder: !0,
                                                    value: I,
                                                    onChange: (e) =>
                                                        d.Z.setMode(f.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                                    children: "Use Krisp VAD",
                                                }),
                                            }),
                                            I &&
                                                (0, a.jsx)(c.hjN, {
                                                    title: "Krisp VAD Activation Threshold",
                                                    tag: c.RB0.H3,
                                                    children: (0, a.jsx)(c.iRW, {
                                                        initialValue: R,
                                                        onValueChange: (e) =>
                                                            d.Z.setMode(f.pM.VOICE_ACTIVITY, {
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
                            value: w,
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
                                      z(),
                                          n(!0),
                                          d.Z.setLoopback("krisp_test", !0),
                                          h.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
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
                                                      suppression: F,
                                                      echoCancellation: w,
                                                      krispSuppressionLevel: j,
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
                                null != N.current && ((N.current.gain.value = e), O(e));
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
                                g,
                                {
                                    recording: e,
                                    playing: e === _,
                                    onPlay: G,
                                    onStop: z,
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
