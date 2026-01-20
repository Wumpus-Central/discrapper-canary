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
var a = n(54381),
    r = n(473749),
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
    f = n(131951),
    b = n(65154),
    x = n(663380),
    g = n(663618);
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
    let { recording: t, playing: n, onPlay: r, onStop: i } = e;
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
        v = (0, s.e7)([f.Z], () => f.Z.getKrispSuppressionLevel()),
        [y, C] = r.useState(null),
        _ = r.useRef(null),
        S = r.useRef(null),
        [E, T] = r.useState(0.5),
        {
            krispModels: O,
            krispModelOverride: N,
            inputMode: P,
            echoCancellation: w,
            autoThreshold: I,
            vadUseKrisp: k,
            vadKrispActivationThreshold: R,
            noiseCancellation: A,
            noiseSuppression: Z,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: M,
            noiseCancellationEnableStats: L,
            vadDuringPreProcess: U,
        } = (0, s.cj)([f.Z], () => ({
            krispModels: f.Z.getKrispModels(),
            krispModelOverride: f.Z.getKrispModelOverride(),
            echoCancellation: f.Z.getEchoCancellation(),
            autoThreshold: f.Z.getModeOptions().autoThreshold,
            vadUseKrisp: f.Z.getModeOptions().vadUseKrisp,
            inputMode: f.Z.getMode(),
            vadKrispActivationThreshold: f.Z.getKrispVadActivationThreshold(),
            noiseCancellation: f.Z.getNoiseCancellation(),
            noiseSuppression: f.Z.getNoiseSuppression(),
            noiseSuppressionSupported: f.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: f.Z.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: f.Z.getKrispEnableStats(),
            vadDuringPreProcess: f.Z.getModeOptions().vadDuringPreProcess,
        })),
        B = A ? "KRISP" : Z ? "STANDARD" : "NONE",
        F = (0, m.N)(),
        G = r.useCallback(() => {
            var e;
            null == (e = _.current) || e.stop(), (_.current = null), C(null);
        }, []);
    function V() {
        f.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function W(e) {
        if ((t && V(), G(), null == F)) return;
        let n = F.createBufferSource();
        (n.buffer = e.audioBuffer),
            (S.current = F.createGain()),
            (S.current.gain.value = E),
            n.connect(S.current),
            S.current.connect(F.destination),
            (n.loop = !0),
            n.start(),
            (_.current = n),
            C(e);
    }
    r.useEffect(() => {
        G();
    }, [G]),
        (0, u.zq)(() => {
            d.Z.setMode(f.Z.getMode(), {
                vadDuringPreProcess: null,
                vadKrispActivationThreshold: void 0,
            });
        });
    let z = [];
    return (
        M &&
            z.push({
                id: "krisp",
                label: "Krisp",
                value: "KRISP",
            }),
        D &&
            z.push({
                id: "standard",
                label: "Standard",
                value: "STANDARD",
            }),
        z.push({
            id: "disabled",
            label: "Disabled",
            value: "NONE",
        }),
        (0, a.jsx)(c.zJl, {
            className: g.panel,
            children: (0, a.jsxs)("div", {
                className: x.innerPanel,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(p.j, {
                        label: "Input Device",
                        deviceType: b.h7.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, a.jsx)(c.PhF, {
                        label: "Noise Cancellation",
                        value: B,
                        onSelectionChange: (e) => {
                            d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e);
                        },
                        options: z,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === B &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.iRW, {
                                    label: "Krisp Suppression Level",
                                    initialValue: v,
                                    onValueChange: d.Z.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, a.jsx)(c.PhF, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: N,
                                    options: O.map((e) => ({
                                        label: e,
                                        value: e,
                                        id: e,
                                    })),
                                    onSelectionChange: (e) => {
                                        d.Z.setKrispModelOverride(null != e ? e : "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(c.rsf, {
                                    label: "Enable Stats",
                                    checked: L,
                                    onChange: (e) => d.Z.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    P === b.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.rsf, {
                                    label: "Auto Threshold",
                                    checked: I,
                                    onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                I &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c.rsf, {
                                                label: "Use Krisp VAD",
                                                checked: k,
                                                onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            k &&
                                                (0, a.jsx)(c.iRW, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: R,
                                                    onValueChange: (e) =>
                                                        d.Z.setMode(b.pM.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, a.jsx)(c.rsf, {
                                    label: "Run Before Processing",
                                    checked: null != U && U,
                                    onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(c.rsf, {
                        label: "Echo Cancellation",
                        checked: w,
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
                                    ? V
                                    : function () {
                                          G(),
                                              n(!0),
                                              d.Z.setLoopback("krisp_test", !0),
                                              f.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                                  n(!1), d.Z.setLoopback("krisp_test", !1);
                                                  let i = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: r,
                                                      numberOfChannels: a,
                                                  });
                                                  for (let e = 0; e < a; e++) {
                                                      let n = new Float32Array(t.length / a);
                                                      for (let r = 0; r < t.length / a; r++)
                                                          n[r] = t[r * a + e] / 32768;
                                                      i.copyToChannel(n, e);
                                                  }
                                                  l((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: i,
                                                          createdAt: Date.now(),
                                                          suppression: B,
                                                          echoCancellation: w,
                                                          krispSuppressionLevel: v,
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
                        initialValue: E,
                        asValueChanges: function (e) {
                            null != S.current && ((S.current.gain.value = e), T(e));
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
                            i.map((e, t) =>
                                (0, a.jsx)(
                                    j,
                                    {
                                        recording: e,
                                        playing: e === y,
                                        onPlay: W,
                                        onStop: G,
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
