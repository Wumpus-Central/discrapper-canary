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
    s = n(64700),
    i = n(207898),
    l = n.n(i),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(827343),
    u = n(964486),
    m = n(602674),
    h = n(625841),
    x = n(74848),
    p = n(430452),
    g = n(731854),
    _ = n(442456),
    f = n(661251);
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
    let { recording: t, playing: n, onPlay: s, onStop: i } = e;
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
                            e.stopPropagation(), n ? i() : s(t);
                        },
                        children: n ? (0, a.jsx)(d.E$n, { size: "xxs" }) : (0, a.jsx)(d.udU, { size: "xxs" }),
                    }),
                    (0, a.jsx)(d.DUT, {
                        tag: "span",
                        onClick: (e) => {
                            let n, a, s;
                            e.stopPropagation(),
                                (n = new Blob([l()(t.audioBuffer)], { type: "audio/wav" })),
                                (a = URL.createObjectURL(n)),
                                ((s = document.createElement("a")).href = a),
                                (s.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                s.click(),
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
        [t, n] = s.useState(!1),
        [i, l] = s.useState([]),
        v = (0, r.bG)([p.A], () => p.A.getKrispSuppressionLevel()),
        [j, A] = s.useState(null),
        C = s.useRef(null),
        S = s.useRef(null),
        [T, y] = s.useState(0.5),
        {
            krispModels: N,
            krispModelOverride: E,
            inputMode: I,
            echoCancellation: k,
            autoThreshold: R,
            vadUseKrisp: O,
            vadKrispActivationThreshold: w,
            noiseCancellation: D,
            noiseSuppression: M,
            noiseSuppressionSupported: P,
            noiseCancellationSupported: L,
            noiseCancellationEnableStats: U,
            vadDuringPreProcess: B,
        } = (0, r.cf)([p.A], () => ({
            krispModels: p.A.getKrispModels(),
            krispModelOverride: p.A.getKrispModelOverride(),
            echoCancellation: p.A.getEchoCancellation(),
            autoThreshold: p.A.getModeOptions().autoThreshold,
            vadUseKrisp: p.A.getModeOptions().vadUseKrisp,
            inputMode: p.A.getMode(),
            vadKrispActivationThreshold: p.A.getKrispVadActivationThreshold(),
            noiseCancellation: p.A.getNoiseCancellation(),
            noiseSuppression: p.A.getNoiseSuppression(),
            noiseSuppressionSupported: p.A.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.A.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: p.A.getKrispEnableStats(),
            vadDuringPreProcess: p.A.getModeOptions().vadDuringPreProcess,
        })),
        G = D ? "KRISP" : M ? "STANDARD" : "NONE",
        F = (0, m.v)(),
        V = s.useCallback(() => {
            C.current?.stop(), (C.current = null), A(null);
        }, []);
    function W() {
        p.A.getMediaEngine().stopRecordingRawSamples();
    }
    function H(e) {
        if ((t && W(), V(), null == F)) return;
        let n = F.createBufferSource();
        (n.buffer = e.audioBuffer),
            (S.current = F.createGain()),
            (S.current.gain.value = T),
            n.connect(S.current),
            S.current.connect(F.destination),
            (n.loop = !0),
            n.start(),
            (C.current = n),
            A(e);
    }
    s.useEffect(() => {
        V();
    }, [V]),
        (0, u.l0)(() => {
            c.A.setMode(p.A.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
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
                                    value: E,
                                    options: N.map((e) => ({ label: e, value: e, id: e })),
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
                                    checked: R,
                                    onChange: (e) => c.A.setMode(g.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                R &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(d.dOG, {
                                                label: "Use Krisp VAD",
                                                checked: O,
                                                onChange: (e) => c.A.setMode(g.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            O &&
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
                                              p.A.getMediaEngine().startRecordingRawSamples((t, a, s) => {
                                                  n(!1), c.A.setLoopback("krisp_test", !1);
                                                  let i = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: s,
                                                      numberOfChannels: a,
                                                  });
                                                  for (let e = 0; e < a; e++) {
                                                      let n = new Float32Array(t.length / a);
                                                      for (let s = 0; s < t.length / a; s++)
                                                          n[s] = t[s * a + e] / 32768;
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
                        initialValue: T,
                        asValueChanges: function (e) {
                            null != S.current && ((S.current.gain.value = e), y(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, a.jsxs)(d.BJc, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(d.Text, { variant: "text-sm/semibold", children: "Recordings" }),
                            i.map((e, t) => (0, a.jsx)(b, { recording: e, playing: e === j, onPlay: H, onStop: V }, t)),
                        ],
                    }),
                ],
            }),
        })
    );
}
