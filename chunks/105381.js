a.d(t, { A: () => T }),
    a(323874),
    a(14289),
    a(35956),
    a(393431),
    a(532706),
    a(42231),
    a(232424),
    a(949626),
    a(767709),
    a(65162),
    a(321073);
var n = a(627968),
    l = a(64700),
    i = a(207898),
    s = a.n(i),
    r = a(311907),
    o = a(862482),
    d = a(834730),
    c = a(311678),
    u = a(939249),
    m = a(113494),
    h = a(782134),
    p = a(32880),
    x = a(573613),
    g = a(691885),
    v = a(106236),
    b = a(243721),
    _ = a(331322),
    f = a(827343),
    j = a(964486),
    A = a(602674),
    y = a(848222),
    C = a(74848),
    E = a(430452),
    S = a(731854),
    N = a(505206),
    k = a(573908);
function I(e) {
    let { recording: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, n.jsxs)(d.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, n.jsxs)(d.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, n.jsxs)(d.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, n.jsxs)(d.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, n.jsxs)(d.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function D(e) {
    let { recording: t, playing: a, onPlay: l, onStop: i } = e;
    return (0, n.jsx)(c.N, {
        collapsibleContent: (0, n.jsx)(I, { recording: t }),
        children: (e) => {
            let { onClick: r } = e;
            return (0, n.jsxs)(u.D, {
                onClick: r,
                children: [
                    (0, n.jsxs)(d.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, n.jsx)(u.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? i() : l(t);
                        },
                        children: a ? (0, n.jsx)(m.E, { size: "xxs" }) : (0, n.jsx)(h.u, { size: "xxs" }),
                    }),
                    (0, n.jsx)(u.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([s()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, n.jsx)(p.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function T() {
    let { name: e } = (0, C.x5)(S.oh.AUDIO_INPUT),
        [t, a] = l.useState(!1),
        [i, s] = l.useState([]),
        c = (0, r.bG)([E.Ay], () => E.Ay.getKrispSuppressionLevel()),
        [u, m] = l.useState(null),
        h = l.useRef(null),
        p = l.useRef(null),
        [I, T] = l.useState(0.5),
        {
            krispModels: w,
            krispModelOverride: O,
            inputMode: R,
            echoCancellation: L,
            autoThreshold: M,
            vadUseKrisp: P,
            vadKrispActivationThreshold: U,
            noiseCancellation: B,
            noiseSuppression: G,
            noiseSuppressionSupported: F,
            noiseCancellationSupported: V,
            noiseCancellationEnableStats: $,
            vadDuringPreProcess: W,
        } = (0, r.cf)([E.Ay], () => ({
            krispModels: E.Ay.getKrispModels(),
            krispModelOverride: E.Ay.getKrispModelOverride(),
            echoCancellation: E.Ay.getEchoCancellation(),
            autoThreshold: E.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: E.Ay.getModeOptions().vadUseKrisp,
            inputMode: E.Ay.getMode(),
            vadKrispActivationThreshold: E.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: E.Ay.getNoiseCancellation(),
            noiseSuppression: E.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: E.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: E.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: E.Ay.getKrispEnableStats(),
            vadDuringPreProcess: E.Ay.getModeOptions().vadDuringPreProcess,
        })),
        H = B ? "KRISP" : G ? "STANDARD" : "NONE",
        z = (0, A.v)(),
        K = l.useCallback(() => {
            h.current?.stop(), (h.current = null), m(null);
        }, []);
    function Y() {
        E.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function q(e) {
        if ((t && Y(), K(), null == z)) return;
        let a = z.createBufferSource();
        (a.buffer = e.audioBuffer),
            (p.current = z.createGain()),
            (p.current.gain.value = I),
            a.connect(p.current),
            p.current.connect(z.destination),
            (a.loop = !0),
            a.start(),
            (h.current = a),
            m(e);
    }
    l.useEffect(() => {
        K();
    }, [K]),
        (0, j.l0)(() => {
            f.A.setMode(E.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let J = [];
    return (
        V && J.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        F && J.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        J.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, n.jsx)(x.Ip, {
            className: N.nd,
            children: (0, n.jsxs)("div", {
                className: k.l,
                children: [
                    (0, n.jsx)(d.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, n.jsx)(y.U, {
                        label: "Input Device",
                        deviceType: S.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, n.jsx)(g.l, {
                        label: "Noise Cancellation",
                        value: H,
                        onSelectionChange: (e) => {
                            f.A.setNoiseCancellation("KRISP" === e), f.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: J,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === H &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(v.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: c,
                                    onValueChange: f.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, n.jsx)(g.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: O,
                                    options: w.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        f.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, n.jsx)(b.d, {
                                    label: "Enable Stats",
                                    checked: $,
                                    onChange: (e) => f.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    R === S.TB.VOICE_ACTIVITY &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(b.d, {
                                    label: "Auto Threshold",
                                    checked: M,
                                    onChange: (e) => f.A.setMode(S.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                M &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(b.d, {
                                                label: "Use Krisp VAD",
                                                checked: P,
                                                onChange: (e) => f.A.setMode(S.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            P &&
                                                (0, n.jsx)(v.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: U,
                                                    onValueChange: (e) =>
                                                        f.A.setMode(S.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, n.jsx)(b.d, {
                                    label: "Run Before Processing",
                                    checked: W ?? !1,
                                    onChange: (e) => f.A.setMode(S.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, n.jsx)(b.d, {
                        label: "Echo Cancellation",
                        checked: L,
                        onChange: (e) => f.A.setEchoCancellation(e),
                    }),
                    (0, n.jsxs)(_.B, {
                        gap: 4,
                        children: [
                            (0, n.jsx)(d.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, n.jsx)(o.$n, {
                                color: t ? o.$n.Colors.RED : o.$n.Colors.BRAND,
                                onClick: t
                                    ? Y
                                    : function () {
                                          K(),
                                              a(!0),
                                              f.A.setLoopback("krisp_test", !0),
                                              E.Ay.getMediaEngine().startRecordingRawSamples((t, n, l) => {
                                                  a(!1), f.A.setLoopback("krisp_test", !1);
                                                  let i = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: l,
                                                      numberOfChannels: n,
                                                  });
                                                  for (let e = 0; e < n; e++) {
                                                      let a = new Float32Array(t.length / n);
                                                      for (let l = 0; l < t.length / n; l++)
                                                          a[l] = t[l * n + e] / 32768;
                                                      i.copyToChannel(a, e);
                                                  }
                                                  s((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: i,
                                                          createdAt: Date.now(),
                                                          suppression: H,
                                                          echoCancellation: L,
                                                          krispSuppressionLevel: c,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, n.jsx)(v.A, {
                        label: "Volume",
                        initialValue: I,
                        asValueChanges: function (e) {
                            null != p.current && ((p.current.gain.value = e), T(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, n.jsxs)(_.B, {
                        gap: 4,
                        children: [
                            (0, n.jsx)(d.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            i.map((e, t) => (0, n.jsx)(D, { recording: e, playing: e === u, onPlay: q, onStop: K }, t)),
                        ],
                    }),
                ],
            }),
        })
    );
}
