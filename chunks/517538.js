n.d(t, { A: () => j }),
    n(323874),
    n(14289),
    n(35956),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073);
var a = n(627968),
    i = n(64700),
    l = n(207898),
    s = n.n(l),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(827343),
    u = n(964486),
    m = n(602674),
    h = n(848222),
    x = n(74848),
    p = n(430452),
    g = n(731854),
    _ = n(359242),
    f = n(793877);
function v(e) {
    let { recording: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(d.Text, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, a.jsxs)(d.Text, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, a.jsxs)(d.Text, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, a.jsxs)(d.Text, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
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
function b(e) {
    let { recording: t, playing: n, onPlay: i, onStop: l } = e;
    return (0, a.jsx)(d.Nt8, {
        collapsibleContent: (0, a.jsx)(v, { recording: t }),
        children: (e) => {
            let { onClick: r } = e;
            return (0, a.jsxs)(d.DUT, {
                onClick: r,
                children: [
                    (0, a.jsxs)(d.Text, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, a.jsx)(d.DUT, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), n ? l() : i(t);
                        },
                        children: n ? (0, a.jsx)(d.E$n, { size: "xxs" }) : (0, a.jsx)(d.udU, { size: "xxs" }),
                    }),
                    (0, a.jsx)(d.DUT, {
                        tag: "span",
                        onClick: (e) => {
                            let n, a, i;
                            e.stopPropagation(),
                                (n = new Blob([s()(t.audioBuffer)], { type: "audio/wav" })),
                                (a = URL.createObjectURL(n)),
                                ((i = document.createElement("a")).href = a),
                                (i.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                i.click(),
                                URL.revokeObjectURL(a);
                        },
                        children: (0, a.jsx)(d.s3U, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function j() {
    let { name: e } = (0, x.x5)(g.oh.AUDIO_INPUT),
        [t, n] = i.useState(!1),
        [l, s] = i.useState([]),
        v = (0, r.bG)([p.Ay], () => p.Ay.getKrispSuppressionLevel()),
        [j, A] = i.useState(null),
        C = i.useRef(null),
        y = i.useRef(null),
        [S, T] = i.useState(0.5),
        {
            krispModels: E,
            krispModelOverride: N,
            inputMode: I,
            echoCancellation: k,
            autoThreshold: O,
            vadUseKrisp: R,
            vadKrispActivationThreshold: w,
            noiseCancellation: D,
            noiseSuppression: M,
            noiseSuppressionSupported: P,
            noiseCancellationSupported: L,
            noiseCancellationEnableStats: U,
            vadDuringPreProcess: B,
        } = (0, r.cf)([p.Ay], () => ({
            krispModels: p.Ay.getKrispModels(),
            krispModelOverride: p.Ay.getKrispModelOverride(),
            echoCancellation: p.Ay.getEchoCancellation(),
            autoThreshold: p.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: p.Ay.getModeOptions().vadUseKrisp,
            inputMode: p.Ay.getMode(),
            vadKrispActivationThreshold: p.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: p.Ay.getNoiseCancellation(),
            noiseSuppression: p.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: p.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: p.Ay.getKrispEnableStats(),
            vadDuringPreProcess: p.Ay.getModeOptions().vadDuringPreProcess,
        })),
        G = D ? "KRISP" : M ? "STANDARD" : "NONE",
        F = (0, m.v)(),
        V = i.useCallback(() => {
            C.current?.stop(), (C.current = null), A(null);
        }, []);
    function W() {
        p.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function H(e) {
        if ((t && W(), V(), null == F)) return;
        let n = F.createBufferSource();
        (n.buffer = e.audioBuffer),
            (y.current = F.createGain()),
            (y.current.gain.value = S),
            n.connect(y.current),
            y.current.connect(F.destination),
            (n.loop = !0),
            n.start(),
            (C.current = n),
            A(e);
    }
    i.useEffect(() => {
        V();
    }, [V]),
        (0, u.l0)(() => {
            c.A.setMode(p.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let K = [];
    return (
        L && K.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        P && K.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        K.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, a.jsx)(d.IpV, {
            className: f.nd,
            children: (0, a.jsxs)("div", {
                className: _.l,
                children: [
                    (0, a.jsx)(d.Text, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, a.jsx)(h.U, {
                        label: "Input Device",
                        deviceType: g.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, a.jsx)(d.l6P, {
                        label: "Noise Cancellation",
                        value: G,
                        onSelectionChange: (e) => {
                            c.A.setNoiseCancellation("KRISP" === e), c.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: K,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === G &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.Apm, {
                                    label: "Krisp Suppression Level",
                                    initialValue: v,
                                    onValueChange: c.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, a.jsx)(d.l6P, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: N,
                                    options: E.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        c.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(d.dOG, {
                                    label: "Enable Stats",
                                    checked: U,
                                    onChange: (e) => c.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    I === g.TB.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.dOG, {
                                    label: "Auto Threshold",
                                    checked: O,
                                    onChange: (e) => c.A.setMode(g.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                O &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(d.dOG, {
                                                label: "Use Krisp VAD",
                                                checked: R,
                                                onChange: (e) => c.A.setMode(g.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            R &&
                                                (0, a.jsx)(d.Apm, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: w,
                                                    onValueChange: (e) =>
                                                        c.A.setMode(g.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, a.jsx)(d.dOG, {
                                    label: "Run Before Processing",
                                    checked: B ?? !1,
                                    onChange: (e) => c.A.setMode(g.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, a.jsx)(d.dOG, {
                        label: "Echo Cancellation",
                        checked: k,
                        onChange: (e) => c.A.setEchoCancellation(e),
                    }),
                    (0, a.jsxs)(d.BJc, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(d.Text, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, a.jsx)(o.$n, {
                                color: t ? o.$n.Colors.RED : o.$n.Colors.BRAND,
                                onClick: t
                                    ? W
                                    : function () {
                                          V(),
                                              n(!0),
                                              c.A.setLoopback("krisp_test", !0),
                                              p.Ay.getMediaEngine().startRecordingRawSamples((t, a, i) => {
                                                  n(!1), c.A.setLoopback("krisp_test", !1);
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
                                                  s((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: l,
                                                          createdAt: Date.now(),
                                                          suppression: G,
                                                          echoCancellation: k,
                                                          krispSuppressionLevel: v,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.Apm, {
                        label: "Volume",
                        initialValue: S,
                        asValueChanges: function (e) {
                            null != y.current && ((y.current.gain.value = e), T(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, a.jsxs)(d.BJc, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(d.Text, { variant: "text-sm/semibold", children: "Recordings" }),
                            l.map((e, t) => (0, a.jsx)(b, { recording: e, playing: e === j, onPlay: H, onStop: V }, t)),
                        ],
                    }),
                ],
            }),
        })
    );
}
