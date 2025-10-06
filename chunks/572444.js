n.d(t, { Z: () => y }),
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
    i = n(345959),
    l = n.n(i),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(846027),
    u = n(493773),
    m = n(304809),
    p = n(670863),
    h = n(72897),
    x = n(131951),
    f = n(246992),
    b = n(65154),
    g = n(25016),
    v = n(866403);
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
function _(e) {
    let { recording: t, playing: n, onPlay: r, onStop: i } = e;
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
                            e.stopPropagation(), n ? i() : r(t);
                        },
                        children: n ? (0, a.jsx)(c.fpf, { size: "xxs" }) : (0, a.jsx)(c.o1U, { size: "xxs" }),
                    }),
                    (0, a.jsx)(c.P3F, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation();
                            let n = new Blob([l()(t.audioBuffer)], { type: "audio/wav" }),
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
function y() {
    let { name: e } = (0, h.p6)(b.h7.AUDIO_INPUT),
        [t, n] = r.useState(!1),
        [i, l] = r.useState([]),
        j = (0, s.e7)([x.Z], () => x.Z.getKrispSuppressionLevel()),
        [y, C] = r.useState(null),
        E = r.useRef(null),
        S = r.useRef(null),
        [N, T] = r.useState(0.5),
        {
            krispModels: O,
            krispModelOverride: P,
            inputMode: k,
            echoCancellation: I,
            autoThreshold: w,
            vadUseKrisp: R,
            vadKrispActivationThreshold: A,
            noiseCancellation: Z,
            noiseSuppression: D,
            noiseSuppressionSupported: L,
            noiseCancellationSupported: M,
            noiseCancellationEnableStats: U,
            vadDuringPreProcess: F,
        } = (0, s.cj)([x.Z], () => ({
            krispModels: x.Z.getKrispModels(),
            krispModelOverride: x.Z.getKrispModelOverride(),
            echoCancellation: x.Z.getEchoCancellation(),
            autoThreshold: x.Z.getModeOptions().autoThreshold,
            vadUseKrisp: x.Z.getModeOptions().vadUseKrisp,
            inputMode: x.Z.getMode(),
            vadKrispActivationThreshold: x.Z.getKrispVadActivationThreshold(),
            noiseCancellation: x.Z.getNoiseCancellation(),
            noiseSuppression: x.Z.getNoiseSuppression(),
            noiseSuppressionSupported: x.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: x.Z.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: x.Z.getKrispEnableStats(),
            vadDuringPreProcess: x.Z.getModeOptions().vadDuringPreProcess,
        })),
        G = Z ? "KRISP" : D ? "STANDARD" : "NONE",
        B = (0, m.N)(),
        z = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), (E.current = null), C(null);
        }, []);
    function V() {
        x.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function H(e) {
        if ((t && V(), z(), null == B)) return;
        let n = B.createBufferSource();
        (n.buffer = e.audioBuffer),
            (S.current = B.createGain()),
            (S.current.gain.value = N),
            n.connect(S.current),
            S.current.connect(B.destination),
            (n.loop = !0),
            n.start(),
            (E.current = n),
            C(e);
    }
    r.useEffect(() => {
        z();
    }, [z]),
        (0, u.zq)(() => {
            d.Z.setMode(x.Z.getMode(), { vadDuringPreProcess: null });
        });
    let W = [];
    return (
        M &&
            W.push({
                label: "Krisp",
                value: "KRISP",
            }),
        L &&
            W.push({
                label: "Standard",
                value: "STANDARD",
            }),
        W.push({
            label: "Disabled",
            value: "NONE",
        }),
        (0, a.jsx)(c.zJl, {
            className: v.panel,
            children: (0, a.jsxs)("div", {
                className: g.innerPanel,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Input Device",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(p.j, {
                            deviceType: b.h7.AUDIO_INPUT,
                            location: "DevToolsKrispTester",
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Noise Cancellation",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(c.q4e, {
                            value: G,
                            onChange: (e) => {
                                d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e);
                            },
                            options: W,
                            popoutLayerContext: f.O$,
                        }),
                    }),
                    "KRISP" === G &&
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
                                        isSelected: (e) => e === P,
                                        options: O.map((e) => ({
                                            label: e,
                                            value: e,
                                        })),
                                        select: (e) => {
                                            d.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: f.O$,
                                        serialize: (e) => e,
                                    }),
                                }),
                                (0, a.jsx)(c.hjN, {
                                    title: "Noise Cancellation Stats",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.rsf, {
                                        label: "Enable Stats",
                                        checked: U,
                                        onChange: (e) => d.Z.setNoiseCancellationEnableStats(e),
                                    }),
                                }),
                            ],
                        }),
                    k === b.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.hjN, {
                                    title: "VAD Auto Threshold",
                                    tag: c.RB0.H3,
                                    children: (0, a.jsx)(c.rsf, {
                                        label: "Auto Threshold",
                                        checked: w,
                                        onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                    }),
                                }),
                                w &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c.hjN, {
                                                title: "VAD Krisp Auto Threshold",
                                                tag: c.RB0.H3,
                                                children: (0, a.jsx)(c.rsf, {
                                                    label: "Use Krisp VAD",
                                                    checked: R,
                                                    onChange: (e) =>
                                                        d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                                }),
                                            }),
                                            R &&
                                                (0, a.jsx)(c.hjN, {
                                                    title: "Krisp VAD Activation Threshold",
                                                    tag: c.RB0.H3,
                                                    children: (0, a.jsx)(c.iRW, {
                                                        initialValue: A,
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
                                (0, a.jsx)(c.rsf, {
                                    label: "Run Before Processing",
                                    checked: null != F && F,
                                    onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(c.hjN, {
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(c.rsf, {
                            label: "Echo Cancellation",
                            checked: I,
                            onChange: (e) => d.Z.setEchoCancellation(e),
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Recorder",
                        tag: c.RB0.H3,
                        children: (0, a.jsx)(o.zx, {
                            color: t ? o.zx.Colors.RED : o.zx.Colors.BRAND,
                            onClick: t
                                ? V
                                : function () {
                                      z(),
                                          n(!0),
                                          d.Z.setLoopback("krisp_test", !0),
                                          x.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                              n(!1), d.Z.setLoopback("krisp_test", !1);
                                              let i = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: a,
                                              });
                                              for (let e = 0; e < a; e++) {
                                                  let n = new Float32Array(t.length / a);
                                                  for (let r = 0; r < t.length / a; r++) n[r] = t[r * a + e] / 32768;
                                                  i.copyToChannel(n, e);
                                              }
                                              l((t) => [
                                                  ...t,
                                                  {
                                                      inputName: e,
                                                      audioBuffer: i,
                                                      createdAt: Date.now(),
                                                      suppression: G,
                                                      echoCancellation: I,
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
                            initialValue: N,
                            asValueChanges: function (e) {
                                null != S.current && ((S.current.gain.value = e), T(e));
                            },
                            minValue: 0,
                            maxValue: 1,
                        }),
                    }),
                    (0, a.jsx)(c.hjN, {
                        title: "Recordings",
                        tag: c.RB0.H3,
                        children: i.map((e, t) =>
                            (0, a.jsx)(
                                _,
                                {
                                    recording: e,
                                    playing: e === y,
                                    onPlay: H,
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
