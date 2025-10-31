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
    i = n(647438),
    l = n(345959),
    r = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(846027),
    u = n(493773),
    m = n(304809),
    p = n(670863),
    h = n(72897),
    x = n(131951),
    g = n(246992),
    f = n(65154),
    b = n(653301),
    v = n(451429);
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
    let { recording: t, playing: n, onPlay: i, onStop: l } = e;
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
                            e.stopPropagation(), n ? l() : i(t);
                        },
                        children: n ? (0, a.jsx)(c.fpf, { size: "xxs" }) : (0, a.jsx)(c.o1U, { size: "xxs" }),
                    }),
                    (0, a.jsx)(c.P3F, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation();
                            let n = new Blob([r()(t.audioBuffer)], { type: "audio/wav" }),
                                a = URL.createObjectURL(n),
                                i = document.createElement("a");
                            (i.href = a),
                                (i.download = ""
                                    .concat(t.inputName, "-")
                                    .concat(new Date(t.createdAt).toLocaleString(), ".wav")),
                                i.click(),
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
    let { name: e } = (0, h.p6)(f.h7.AUDIO_INPUT),
        [t, n] = i.useState(!1),
        [l, r] = i.useState([]),
        j = (0, s.e7)([x.Z], () => x.Z.getKrispSuppressionLevel()),
        [y, C] = i.useState(null),
        S = i.useRef(null),
        E = i.useRef(null),
        [T, N] = i.useState(0.5),
        {
            krispModels: O,
            krispModelOverride: P,
            inputMode: w,
            echoCancellation: I,
            autoThreshold: k,
            vadUseKrisp: A,
            vadKrispActivationThreshold: R,
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
        B = Z ? "KRISP" : D ? "STANDARD" : "NONE",
        G = (0, m.N)(),
        z = i.useCallback(() => {
            var e;
            null == (e = S.current) || e.stop(), (S.current = null), C(null);
        }, []);
    function H() {
        x.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function V(e) {
        if ((t && H(), z(), null == G)) return;
        let n = G.createBufferSource();
        (n.buffer = e.audioBuffer),
            (E.current = G.createGain()),
            (E.current.gain.value = T),
            n.connect(E.current),
            E.current.connect(G.destination),
            (n.loop = !0),
            n.start(),
            (S.current = n),
            C(e);
    }
    i.useEffect(() => {
        z();
    }, [z]),
        (0, u.zq)(() => {
            d.Z.setMode(x.Z.getMode(), {
                vadDuringPreProcess: null,
                vadKrispActivationThreshold: void 0,
            });
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
                className: b.innerPanel,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(p.j, {
                        label: "Input Device",
                        deviceType: f.h7.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, a.jsx)(c.q4e, {
                        label: "Noise Cancellation",
                        value: B,
                        onChange: (e) => {
                            d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e);
                        },
                        options: W,
                        popoutLayerContext: g.O$,
                    }),
                    "KRISP" === B &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.iRW, {
                                    label: "Krisp Suppression Level",
                                    initialValue: j,
                                    onValueChange: d.Z.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, a.jsx)(c.PhF, {
                                    label: "Krisp Model Override",
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
                                    popoutLayerContext: g.O$,
                                    serialize: (e) => e,
                                }),
                                (0, a.jsx)(c.rsf, {
                                    label: "Enable Stats",
                                    checked: U,
                                    onChange: (e) => d.Z.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    w === f.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.rsf, {
                                    label: "Auto Threshold",
                                    checked: k,
                                    onChange: (e) => d.Z.setMode(f.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                k &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c.rsf, {
                                                label: "Use Krisp VAD",
                                                checked: A,
                                                onChange: (e) => d.Z.setMode(f.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            A &&
                                                (0, a.jsx)(c.iRW, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: R,
                                                    onValueChange: (e) =>
                                                        d.Z.setMode(f.pM.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, a.jsx)(c.rsf, {
                                    label: "Run Before Processing",
                                    checked: null != F && F,
                                    onChange: (e) => d.Z.setMode(f.pM.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(c.rsf, {
                        label: "Echo Cancellation",
                        checked: I,
                        onChange: (e) => d.Z.setEchoCancellation(e),
                    }),
                    (0, a.jsxs)(c.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                children: "Recorder",
                            }),
                            (0, a.jsx)(o.zx, {
                                color: t ? o.zx.Colors.RED : o.zx.Colors.BRAND,
                                onClick: t
                                    ? H
                                    : function () {
                                          z(),
                                              n(!0),
                                              d.Z.setLoopback("krisp_test", !0),
                                              x.Z.getMediaEngine().startRecordingRawSamples((t, a, i) => {
                                                  n(!1), d.Z.setLoopback("krisp_test", !1);
                                                  let l = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: i,
                                                      numberOfChannels: a,
                                                  });
                                                  for (let e = 0; e < a; e++) {
                                                      let n = new Float32Array(t.length / a);
                                                      for (let i = 0; i < t.length / a; i++)
                                                          n[i] = t[i * a + e] / 32768;
                                                      l.copyToChannel(n, e);
                                                  }
                                                  r((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: l,
                                                          createdAt: Date.now(),
                                                          suppression: B,
                                                          echoCancellation: I,
                                                          krispSuppressionLevel: j,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, a.jsx)(c.iRW, {
                        label: "Volume",
                        initialValue: T,
                        asValueChanges: function (e) {
                            null != E.current && ((E.current.gain.value = e), N(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, a.jsxs)(c.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                children: "Recordings",
                            }),
                            l.map((e, t) =>
                                (0, a.jsx)(
                                    _,
                                    {
                                        recording: e,
                                        playing: e === y,
                                        onPlay: V,
                                        onStop: z,
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
