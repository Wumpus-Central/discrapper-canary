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
var a = n(54381),
    r = n(473749),
    l = n(345959),
    i = n.n(l),
    s = n(442837),
    o = n(199849),
    c = n(755721),
    d = n(481060),
    u = n(846027),
    m = n(493773),
    p = n(304809),
    h = n(670863),
    f = n(72897),
    x = n(131951),
    b = n(246992),
    g = n(65154),
    v = n(663380),
    j = n(663618);
function y(e) {
    let { recording: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Duration: ", t.audioBuffer.duration],
            }),
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Sample Rate: ", t.audioBuffer.sampleRate],
            }),
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Noise Suppression: ", t.suppression],
            }),
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function C(e) {
    let { recording: t, playing: n, onPlay: r, onStop: l } = e;
    return (0, a.jsx)(d.zF9, {
        collapsibleContent: (0, a.jsx)(y, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, a.jsxs)(d.P3F, {
                onClick: s,
                children: [
                    (0, a.jsxs)(d.Text, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, a.jsx)(d.P3F, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), n ? l() : r(t);
                        },
                        children: n ? (0, a.jsx)(d.fpf, { size: "xxs" }) : (0, a.jsx)(d.o1U, { size: "xxs" }),
                    }),
                    (0, a.jsx)(d.P3F, {
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
                        children: (0, a.jsx)(d._8t, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function _() {
    let { name: e } = (0, f.p6)(g.h7.AUDIO_INPUT),
        [t, n] = r.useState(!1),
        [l, i] = r.useState([]),
        y = (0, s.e7)([x.Z], () => x.Z.getKrispSuppressionLevel()),
        [_, S] = r.useState(null),
        E = r.useRef(null),
        T = r.useRef(null),
        [O, N] = r.useState(0.5),
        {
            krispModels: w,
            krispModelOverride: P,
            inputMode: I,
            echoCancellation: k,
            autoThreshold: R,
            vadUseKrisp: A,
            vadKrispActivationThreshold: Z,
            noiseCancellation: D,
            noiseSuppression: L,
            noiseSuppressionSupported: M,
            noiseCancellationSupported: U,
            noiseCancellationEnableStats: B,
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
        G = D ? "KRISP" : L ? "STANDARD" : "NONE",
        V = (0, p.N)(),
        H = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), (E.current = null), S(null);
        }, []);
    function z() {
        x.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function W(e) {
        if ((t && z(), H(), null == V)) return;
        let n = V.createBufferSource();
        (n.buffer = e.audioBuffer),
            (T.current = V.createGain()),
            (T.current.gain.value = O),
            n.connect(T.current),
            T.current.connect(V.destination),
            (n.loop = !0),
            n.start(),
            (E.current = n),
            S(e);
    }
    r.useEffect(() => {
        H();
    }, [H]),
        (0, m.zq)(() => {
            u.Z.setMode(x.Z.getMode(), {
                vadDuringPreProcess: null,
                vadKrispActivationThreshold: void 0,
            });
        });
    let K = [];
    return (
        U &&
            K.push({
                label: "Krisp",
                value: "KRISP",
            }),
        M &&
            K.push({
                label: "Standard",
                value: "STANDARD",
            }),
        K.push({
            label: "Disabled",
            value: "NONE",
        }),
        (0, a.jsx)(d.zJl, {
            className: j.panel,
            children: (0, a.jsxs)("div", {
                className: v.innerPanel,
                children: [
                    (0, a.jsx)(d.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(h.j, {
                        label: "Input Device",
                        deviceType: g.h7.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, a.jsx)(o.y6, {
                        label: "Noise Cancellation",
                        value: G,
                        onChange: (e) => {
                            u.Z.setNoiseCancellation("KRISP" === e), u.Z.setNoiseSuppression("STANDARD" === e);
                        },
                        options: K,
                        popoutLayerContext: b.O$,
                    }),
                    "KRISP" === G &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.iRW, {
                                    label: "Krisp Suppression Level",
                                    initialValue: y,
                                    onValueChange: u.Z.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, a.jsx)(o.B6, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    clear: () => {
                                        u.Z.setKrispModelOverride("");
                                    },
                                    isSelected: (e) => e === P,
                                    options: w.map((e) => ({
                                        label: e,
                                        value: e,
                                    })),
                                    select: (e) => {
                                        u.Z.setKrispModelOverride(e);
                                    },
                                    popoutLayerContext: b.O$,
                                    serialize: (e) => e,
                                }),
                                (0, a.jsx)(d.rsf, {
                                    label: "Enable Stats",
                                    checked: B,
                                    onChange: (e) => u.Z.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    I === g.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.rsf, {
                                    label: "Auto Threshold",
                                    checked: R,
                                    onChange: (e) => u.Z.setMode(g.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                R &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(d.rsf, {
                                                label: "Use Krisp VAD",
                                                checked: A,
                                                onChange: (e) => u.Z.setMode(g.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            A &&
                                                (0, a.jsx)(d.iRW, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: Z,
                                                    onValueChange: (e) =>
                                                        u.Z.setMode(g.pM.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, a.jsx)(d.rsf, {
                                    label: "Run Before Processing",
                                    checked: null != F && F,
                                    onChange: (e) => u.Z.setMode(g.pM.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(d.rsf, {
                        label: "Echo Cancellation",
                        checked: k,
                        onChange: (e) => u.Z.setEchoCancellation(e),
                    }),
                    (0, a.jsxs)(d.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: "Recorder",
                            }),
                            (0, a.jsx)(c.zx, {
                                color: t ? c.zx.Colors.RED : c.zx.Colors.BRAND,
                                onClick: t
                                    ? z
                                    : function () {
                                          H(),
                                              n(!0),
                                              u.Z.setLoopback("krisp_test", !0),
                                              x.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                                  n(!1), u.Z.setLoopback("krisp_test", !1);
                                                  let l = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: r,
                                                      numberOfChannels: a,
                                                  });
                                                  for (let e = 0; e < a; e++) {
                                                      let n = new Float32Array(t.length / a);
                                                      for (let r = 0; r < t.length / a; r++)
                                                          n[r] = t[r * a + e] / 32768;
                                                      l.copyToChannel(n, e);
                                                  }
                                                  i((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: l,
                                                          createdAt: Date.now(),
                                                          suppression: G,
                                                          echoCancellation: k,
                                                          krispSuppressionLevel: y,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.iRW, {
                        label: "Volume",
                        initialValue: O,
                        asValueChanges: function (e) {
                            null != T.current && ((T.current.gain.value = e), N(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, a.jsxs)(d.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: "Recordings",
                            }),
                            l.map((e, t) =>
                                (0, a.jsx)(
                                    C,
                                    {
                                        recording: e,
                                        playing: e === _,
                                        onPlay: W,
                                        onStop: H,
                                    },
                                    t,
                                ),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
