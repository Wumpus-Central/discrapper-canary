n.d(t, { A: () => y }),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(927092),
    n(212978),
    n(648691),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(321073);
var a = n(627968),
    l = n(64700),
    i = n(207898),
    r = n.n(i),
    s = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(827343),
    u = n(964486),
    m = n(602674),
    p = n(625841),
    h = n(74848),
    f = n(430452),
    x = n(731854),
    b = n(442456),
    g = n(661251);
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
    let { recording: t, playing: n, onPlay: l, onStop: i } = e;
    return (0, a.jsx)(c.Nt8, {
        collapsibleContent: (0, a.jsx)(v, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, a.jsxs)(c.DUT, {
                onClick: s,
                children: [
                    (0, a.jsxs)(c.Text, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, a.jsx)(c.DUT, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), n ? i() : l(t);
                        },
                        children: n ? (0, a.jsx)(c.E$n, { size: "xxs" }) : (0, a.jsx)(c.udU, { size: "xxs" }),
                    }),
                    (0, a.jsx)(c.DUT, {
                        tag: "span",
                        onClick: (e) => {
                            let n, a, l;
                            e.stopPropagation(),
                                (n = new Blob([r()(t.audioBuffer)], { type: "audio/wav" })),
                                (a = URL.createObjectURL(n)),
                                ((l = document.createElement("a")).href = a),
                                (l.download = ""
                                    .concat(t.inputName, "-")
                                    .concat(new Date(t.createdAt).toLocaleString(), ".wav")),
                                l.click(),
                                URL.revokeObjectURL(a);
                        },
                        children: (0, a.jsx)(c.s3U, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function y() {
    let { name: e } = (0, h.x5)(x.oh.AUDIO_INPUT),
        [t, n] = l.useState(!1),
        [i, r] = l.useState([]),
        v = (0, s.bG)([f.A], () => f.A.getKrispSuppressionLevel()),
        [y, _] = l.useState(null),
        A = l.useRef(null),
        C = l.useRef(null),
        [S, O] = l.useState(0.5),
        {
            krispModels: E,
            krispModelOverride: N,
            inputMode: T,
            echoCancellation: I,
            autoThreshold: w,
            vadUseKrisp: k,
            vadKrispActivationThreshold: P,
            noiseCancellation: R,
            noiseSuppression: D,
            noiseSuppressionSupported: M,
            noiseCancellationSupported: L,
            noiseCancellationEnableStats: U,
            vadDuringPreProcess: B,
        } = (0, s.cf)([f.A], () => ({
            krispModels: f.A.getKrispModels(),
            krispModelOverride: f.A.getKrispModelOverride(),
            echoCancellation: f.A.getEchoCancellation(),
            autoThreshold: f.A.getModeOptions().autoThreshold,
            vadUseKrisp: f.A.getModeOptions().vadUseKrisp,
            inputMode: f.A.getMode(),
            vadKrispActivationThreshold: f.A.getKrispVadActivationThreshold(),
            noiseCancellation: f.A.getNoiseCancellation(),
            noiseSuppression: f.A.getNoiseSuppression(),
            noiseSuppressionSupported: f.A.isNoiseSuppressionSupported(),
            noiseCancellationSupported: f.A.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: f.A.getKrispEnableStats(),
            vadDuringPreProcess: f.A.getModeOptions().vadDuringPreProcess,
        })),
        G = R ? "KRISP" : D ? "STANDARD" : "NONE",
        F = (0, m.v)(),
        V = l.useCallback(() => {
            var e;
            null == (e = A.current) || e.stop(), (A.current = null), _(null);
        }, []);
    function H() {
        f.A.getMediaEngine().stopRecordingRawSamples();
    }
    function W(e) {
        if ((t && H(), V(), null == F)) return;
        let n = F.createBufferSource();
        (n.buffer = e.audioBuffer),
            (C.current = F.createGain()),
            (C.current.gain.value = S),
            n.connect(C.current),
            C.current.connect(F.destination),
            (n.loop = !0),
            n.start(),
            (A.current = n),
            _(e);
    }
    l.useEffect(() => {
        V();
    }, [V]),
        (0, u.l0)(() => {
            d.A.setMode(f.A.getMode(), {
                vadDuringPreProcess: null,
                vadKrispActivationThreshold: void 0,
            });
        });
    let K = [];
    return (
        L &&
            K.push({
                id: "krisp",
                label: "Krisp",
                value: "KRISP",
            }),
        M &&
            K.push({
                id: "standard",
                label: "Standard",
                value: "STANDARD",
            }),
        K.push({
            id: "disabled",
            label: "Disabled",
            value: "NONE",
        }),
        (0, a.jsx)(c.IpV, {
            className: g.nd,
            children: (0, a.jsxs)("div", {
                className: b.l,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-lg/bold",
                        children: "Krisp Tester",
                    }),
                    (0, a.jsx)(p.U, {
                        label: "Input Device",
                        deviceType: x.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, a.jsx)(c.l6P, {
                        label: "Noise Cancellation",
                        value: G,
                        onSelectionChange: (e) => {
                            d.A.setNoiseCancellation("KRISP" === e), d.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: K,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === G &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.Apm, {
                                    label: "Krisp Suppression Level",
                                    initialValue: v,
                                    onValueChange: d.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, a.jsx)(c.l6P, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: N,
                                    options: E.map((e) => ({
                                        label: e,
                                        value: e,
                                        id: e,
                                    })),
                                    onSelectionChange: (e) => {
                                        d.A.setKrispModelOverride(null != e ? e : "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(c.dOG, {
                                    label: "Enable Stats",
                                    checked: U,
                                    onChange: (e) => d.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    T === x.TB.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.dOG, {
                                    label: "Auto Threshold",
                                    checked: w,
                                    onChange: (e) => d.A.setMode(x.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                w &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c.dOG, {
                                                label: "Use Krisp VAD",
                                                checked: k,
                                                onChange: (e) => d.A.setMode(x.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            k &&
                                                (0, a.jsx)(c.Apm, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: P,
                                                    onValueChange: (e) =>
                                                        d.A.setMode(x.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, a.jsx)(c.dOG, {
                                    label: "Run Before Processing",
                                    checked: null != B && B,
                                    onChange: (e) => d.A.setMode(x.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(c.dOG, {
                        label: "Echo Cancellation",
                        checked: I,
                        onChange: (e) => d.A.setEchoCancellation(e),
                    }),
                    (0, a.jsxs)(c.BJc, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                children: "Recorder",
                            }),
                            (0, a.jsx)(o.$n, {
                                color: t ? o.$n.Colors.RED : o.$n.Colors.BRAND,
                                onClick: t
                                    ? H
                                    : function () {
                                          V(),
                                              n(!0),
                                              d.A.setLoopback("krisp_test", !0),
                                              f.A.getMediaEngine().startRecordingRawSamples((t, a, l) => {
                                                  n(!1), d.A.setLoopback("krisp_test", !1);
                                                  let i = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: l,
                                                      numberOfChannels: a,
                                                  });
                                                  for (let e = 0; e < a; e++) {
                                                      let n = new Float32Array(t.length / a);
                                                      for (let l = 0; l < t.length / a; l++)
                                                          n[l] = t[l * a + e] / 32768;
                                                      i.copyToChannel(n, e);
                                                  }
                                                  r((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: i,
                                                          createdAt: Date.now(),
                                                          suppression: G,
                                                          echoCancellation: I,
                                                          krispSuppressionLevel: v,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, a.jsx)(c.Apm, {
                        label: "Volume",
                        initialValue: S,
                        asValueChanges: function (e) {
                            null != C.current && ((C.current.gain.value = e), O(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, a.jsxs)(c.BJc, {
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
                                        onStop: V,
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
