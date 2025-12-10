n.d(t, { Z: () => C }),
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
    o = n(199849),
    c = n(755721),
    d = n(481060),
    u = n(846027),
    m = n(493773),
    p = n(304809),
    h = n(670863),
    x = n(72897),
    f = n(131951),
    g = n(246992),
    b = n(65154),
    v = n(653301),
    j = n(451429);
function _(e) {
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
function y(e) {
    let { recording: t, playing: n, onPlay: r, onStop: i } = e;
    return (0, a.jsx)(d.zF9, {
        collapsibleContent: (0, a.jsx)(_, { recording: t }),
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
                            e.stopPropagation(), n ? i() : r(t);
                        },
                        children: n ? (0, a.jsx)(d.fpf, { size: "xxs" }) : (0, a.jsx)(d.o1U, { size: "xxs" }),
                    }),
                    (0, a.jsx)(d.P3F, {
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
                        children: (0, a.jsx)(d._8t, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function C() {
    let { name: e } = (0, x.p6)(b.h7.AUDIO_INPUT),
        [t, n] = r.useState(!1),
        [i, l] = r.useState([]),
        _ = (0, s.e7)([f.Z], () => f.Z.getKrispSuppressionLevel()),
        [C, S] = r.useState(null),
        E = r.useRef(null),
        O = r.useRef(null),
        [T, N] = r.useState(0.5),
        {
            krispModels: P,
            krispModelOverride: w,
            inputMode: I,
            echoCancellation: k,
            autoThreshold: R,
            vadUseKrisp: A,
            vadKrispActivationThreshold: D,
            noiseCancellation: Z,
            noiseSuppression: L,
            noiseSuppressionSupported: M,
            noiseCancellationSupported: U,
            noiseCancellationEnableStats: B,
            vadDuringPreProcess: F,
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
        G = Z ? "KRISP" : L ? "STANDARD" : "NONE",
        V = (0, p.N)(),
        H = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), (E.current = null), S(null);
        }, []);
    function W() {
        f.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function z(e) {
        if ((t && W(), H(), null == V)) return;
        let n = V.createBufferSource();
        (n.buffer = e.audioBuffer),
            (O.current = V.createGain()),
            (O.current.gain.value = T),
            n.connect(O.current),
            O.current.connect(V.destination),
            (n.loop = !0),
            n.start(),
            (E.current = n),
            S(e);
    }
    r.useEffect(() => {
        H();
    }, [H]),
        (0, m.zq)(() => {
            u.Z.setMode(f.Z.getMode(), {
                vadDuringPreProcess: null,
                vadKrispActivationThreshold: void 0,
            });
        });
    let q = [];
    return (
        U &&
            q.push({
                label: "Krisp",
                value: "KRISP",
            }),
        M &&
            q.push({
                label: "Standard",
                value: "STANDARD",
            }),
        q.push({
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
                        deviceType: b.h7.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, a.jsx)(o.y6, {
                        label: "Noise Cancellation",
                        value: G,
                        onChange: (e) => {
                            u.Z.setNoiseCancellation("KRISP" === e), u.Z.setNoiseSuppression("STANDARD" === e);
                        },
                        options: q,
                        popoutLayerContext: g.O$,
                    }),
                    "KRISP" === G &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.iRW, {
                                    label: "Krisp Suppression Level",
                                    initialValue: _,
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
                                    isSelected: (e) => e === w,
                                    options: P.map((e) => ({
                                        label: e,
                                        value: e,
                                    })),
                                    select: (e) => {
                                        u.Z.setKrispModelOverride(e);
                                    },
                                    popoutLayerContext: g.O$,
                                    serialize: (e) => e,
                                }),
                                (0, a.jsx)(d.rsf, {
                                    label: "Enable Stats",
                                    checked: B,
                                    onChange: (e) => u.Z.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    I === b.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.rsf, {
                                    label: "Auto Threshold",
                                    checked: R,
                                    onChange: (e) => u.Z.setMode(b.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                R &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(d.rsf, {
                                                label: "Use Krisp VAD",
                                                checked: A,
                                                onChange: (e) => u.Z.setMode(b.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            A &&
                                                (0, a.jsx)(d.iRW, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: D,
                                                    onValueChange: (e) =>
                                                        u.Z.setMode(b.pM.VOICE_ACTIVITY, {
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
                                    onChange: (e) => u.Z.setMode(b.pM.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
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
                                    ? W
                                    : function () {
                                          H(),
                                              n(!0),
                                              u.Z.setLoopback("krisp_test", !0),
                                              f.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                                  n(!1), u.Z.setLoopback("krisp_test", !1);
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
                                                          suppression: G,
                                                          echoCancellation: k,
                                                          krispSuppressionLevel: _,
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
                        initialValue: T,
                        asValueChanges: function (e) {
                            null != O.current && ((O.current.gain.value = e), N(e));
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
                            i.map((e, t) =>
                                (0, a.jsx)(
                                    y,
                                    {
                                        recording: e,
                                        playing: e === C,
                                        onPlay: z,
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
