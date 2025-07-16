(a.d(t, { Z: () => y }), a(190126), a(368063), a(65234), a(111804), a(490233), a(97749), a(388685), a(17294), a(227481), a(730884), a(20464), a(341884), a(364341), a(629680), a(505025), a(918970), a(121784), a(644351), a(146733), a(539854));
var n = a(255367),
    r = a(73800),
    l = a(345959),
    i = a.n(l),
    s = a(392711),
    o = a.n(s),
    c = a(442837),
    d = a(755721),
    u = a(481060),
    m = a(846027),
    x = a(304809),
    p = a(72897),
    h = a(131951),
    b = a(246992),
    f = a(65154),
    v = a(203759),
    j = a(616257);
function g(e) {
    let { recording: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                children: ['Duration: ', t.audioBuffer.duration]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                children: ['Num Channels: ', t.audioBuffer.numberOfChannels]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                children: ['Sample Rate: ', t.audioBuffer.sampleRate]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                children: ['Noise Suppression: ', t.suppression]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                children: ['Krisp Suppression Level: ', t.krispSuppressionLevel]
            }),
            (0, n.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                children: ['Echo Cancellation: ', String(t.echoCancellation)]
            })
        ]
    });
}
function _(e) {
    let { recording: t, playing: a, onPlay: r, onStop: l } = e;
    return (0, n.jsx)(u.zF9, {
        collapsibleContent: (0, n.jsx)(g, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, n.jsxs)(u.P3F, {
                onClick: s,
                children: [
                    (0, n.jsxs)(u.Text, {
                        variant: 'text-sm/bold',
                        tag: 'span',
                        children: [t.inputName, ' - ', new Date(t.createdAt).toLocaleString()]
                    }),
                    (0, n.jsx)(u.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : r(t));
                        },
                        children: a ? (0, n.jsx)(u.fpf, { size: 'xxs' }) : (0, n.jsx)(u.o1U, { size: 'xxs' })
                    }),
                    (0, n.jsx)(u.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            e.stopPropagation();
                            let a = new Blob([i()(t.audioBuffer)], { type: 'audio/wav' }),
                                n = URL.createObjectURL(a),
                                r = document.createElement('a');
                            ((r.href = n), (r.download = ''.concat(t.inputName, '-').concat(new Date(t.createdAt).toLocaleString(), '.wav')), r.click(), URL.revokeObjectURL(n));
                        },
                        children: (0, n.jsx)(u._8t, { size: 'xxs' })
                    })
                ]
            });
        }
    });
}
function y() {
    let e = (0, p.zX)({ location: 'DevToolsVoiceFiltersPanel' }),
        [t, a] = r.useState(!1),
        [l, i] = r.useState([]),
        s = (0, c.e7)([h.Z], () => h.Z.getKrispSuppressionLevel()),
        [g, y] = r.useState(null),
        C = r.useRef(null),
        N = r.useRef(null),
        [O, T] = r.useState(0.5),
        {
            krispModels: E,
            krispModelOverride: S,
            inputDeviceId: P,
            inputMode: w,
            echoCancellation: I,
            autoThreshold: R,
            vadUseKrisp: k,
            vadKrispActivationThreshold: A,
            noiseCancellation: Z,
            noiseSuppression: D,
            noiseSuppressionSupported: L,
            noiseCancellationSupported: M,
            noiseCancellationEnableStats: F
        } = (0, c.cj)([h.Z], () => ({
            krispModels: h.Z.getKrispModels(),
            krispModelOverride: h.Z.getKrispModelOverride(),
            inputDeviceId: h.Z.getInputDeviceId(),
            echoCancellation: h.Z.getEchoCancellation(),
            autoThreshold: h.Z.getModeOptions().autoThreshold,
            vadUseKrisp: h.Z.getModeOptions().vadUseKrisp,
            inputMode: h.Z.getMode(),
            vadKrispActivationThreshold: h.Z.getKrispVadActivationThreshold(),
            noiseCancellation: h.Z.getNoiseCancellation(),
            noiseSuppression: h.Z.getNoiseSuppression(),
            noiseSuppressionSupported: h.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: h.Z.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: h.Z.getKrispEnableStats()
        })),
        B = Z ? 'KRISP' : D ? 'STANDARD' : 'NONE',
        z = (0, x.N)(),
        U = r.useCallback(() => {
            var e;
            (null == (e = C.current) || e.stop(), (C.current = null), y(null));
        }, []);
    function G() {
        h.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function V(e) {
        if ((t && G(), U(), null == z)) return;
        let a = z.createBufferSource();
        ((a.buffer = e.audioBuffer), (N.current = z.createGain()), (N.current.gain.value = O), a.connect(N.current), N.current.connect(z.destination), (a.loop = !0), a.start(), (C.current = a), y(e));
    }
    r.useEffect(() => {
        U();
    }, [U]);
    let H = [];
    return (
        M &&
            H.push({
                label: 'Krisp',
                value: 'KRISP'
            }),
        L &&
            H.push({
                label: 'Standard',
                value: 'STANDARD'
            }),
        H.push({
            label: 'Disabled',
            value: 'NONE'
        }),
        (0, n.jsx)(u.zJl, {
            className: j.panel,
            children: (0, n.jsxs)('div', {
                className: v.innerPanel,
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: 'text-lg/bold',
                        children: 'Krisp Tester'
                    }),
                    (0, n.jsx)(u.hjN, {
                        title: 'Input Device',
                        tag: u.RB0.H3,
                        children: (0, n.jsx)(u.q4e, {
                            value: P,
                            onChange: (e) => m.Z.setInputDevice(e),
                            options: o().map(e, (e) => {
                                let { id: t, name: a } = e;
                                return {
                                    value: t,
                                    label: a
                                };
                            }),
                            popoutLayerContext: b.O$
                        })
                    }),
                    (0, n.jsx)(u.hjN, {
                        title: 'Noise Cancellation',
                        tag: u.RB0.H3,
                        children: (0, n.jsx)(u.q4e, {
                            value: B,
                            onChange: (e) => {
                                (m.Z.setNoiseCancellation('KRISP' === e), m.Z.setNoiseSuppression('STANDARD' === e));
                            },
                            options: H,
                            popoutLayerContext: b.O$
                        })
                    }),
                    'KRISP' === B &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(u.hjN, {
                                    title: 'Krisp Suppression Level',
                                    tag: u.RB0.H3,
                                    children: (0, n.jsx)(u.iRW, {
                                        initialValue: s,
                                        onValueChange: m.Z.setKrispSuppressionLevel,
                                        minValue: 0,
                                        maxValue: 100
                                    })
                                }),
                                (0, n.jsx)(u.hjN, {
                                    title: 'Krisp Model Override',
                                    tag: u.RB0.H3,
                                    children: (0, n.jsx)(u.PhF, {
                                        clearable: !0,
                                        clear: () => {
                                            m.Z.setKrispModelOverride('');
                                        },
                                        isSelected: (e) => e === S,
                                        options: E.map((e) => ({
                                            label: e,
                                            value: e
                                        })),
                                        select: (e) => {
                                            m.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: b.O$,
                                        serialize: (e) => e
                                    })
                                }),
                                (0, n.jsx)(u.hjN, {
                                    title: 'Noise Cancellation Stats',
                                    tag: u.RB0.H3,
                                    children: (0, n.jsx)(u.j7V, {
                                        value: F,
                                        onChange: (e) => m.Z.setNoiseCancellationEnableStats(e),
                                        children: 'Enable Stats'
                                    })
                                })
                            ]
                        }),
                    w === f.pM.VOICE_ACTIVITY &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(u.hjN, {
                                    title: 'VAD Auto Threshold',
                                    tag: u.RB0.H3,
                                    children: (0, n.jsx)(u.j7V, {
                                        hideBorder: !0,
                                        value: R,
                                        onChange: (e) => m.Z.setMode(f.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                        children: 'Auto Threshold'
                                    })
                                }),
                                R &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(u.hjN, {
                                                title: 'VAD Krisp Auto Threshold',
                                                tag: u.RB0.H3,
                                                children: (0, n.jsx)(u.j7V, {
                                                    hideBorder: !0,
                                                    value: k,
                                                    onChange: (e) => m.Z.setMode(f.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                                    children: 'Use Krisp VAD'
                                                })
                                            }),
                                            k &&
                                                (0, n.jsx)(u.hjN, {
                                                    title: 'Krisp VAD Activation Threshold',
                                                    tag: u.RB0.H3,
                                                    children: (0, n.jsx)(u.iRW, {
                                                        initialValue: A,
                                                        onValueChange: (e) => m.Z.setMode(f.pM.VOICE_ACTIVITY, { vadKrispActivationThreshold: e }),
                                                        minValue: 0,
                                                        maxValue: 1
                                                    })
                                                })
                                        ]
                                    })
                            ]
                        }),
                    (0, n.jsx)(u.hjN, {
                        tag: u.RB0.H3,
                        children: (0, n.jsx)(u.j7V, {
                            hideBorder: !0,
                            value: I,
                            onChange: (e) => m.Z.setEchoCancellation(e),
                            children: 'Echo Cancellation'
                        })
                    }),
                    (0, n.jsx)(u.hjN, {
                        title: 'Recorder',
                        tag: u.RB0.H3,
                        children: (0, n.jsx)(d.zx, {
                            color: t ? d.zx.Colors.RED : d.zx.Colors.BRAND,
                            onClick: t
                                ? G
                                : function () {
                                      (U(),
                                          a(!0),
                                          m.Z.setLoopback('krisp_test', !0),
                                          h.Z.getMediaEngine().startRecordingRawSamples((t, n, r) => {
                                              var l, o;
                                              (a(!1), m.Z.setLoopback('krisp_test', !1));
                                              let c = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: n
                                              });
                                              for (let e = 0; e < n; e++) {
                                                  let a = new Float32Array(t.length / n);
                                                  for (let r = 0; r < t.length / n; r++) a[r] = t[r * n + e] / 32768;
                                                  c.copyToChannel(a, e);
                                              }
                                              let d =
                                                  null !=
                                                  (o =
                                                      null ==
                                                      (l = e.find((e) => {
                                                          let { id: t } = e;
                                                          return P === t;
                                                      }))
                                                          ? void 0
                                                          : l.name)
                                                      ? o
                                                      : '';
                                              i((e) => [
                                                  ...e,
                                                  {
                                                      inputName: d,
                                                      audioBuffer: c,
                                                      createdAt: Date.now(),
                                                      suppression: B,
                                                      echoCancellation: I,
                                                      krispSuppressionLevel: s
                                                  }
                                              ]);
                                          }));
                                  },
                            children: t ? 'Stop Recording' : 'Start Recording'
                        })
                    }),
                    (0, n.jsx)(u.hjN, {
                        title: 'Volume',
                        tag: u.RB0.H3,
                        children: (0, n.jsx)(u.iRW, {
                            initialValue: O,
                            asValueChanges: function (e) {
                                null != N.current && ((N.current.gain.value = e), T(e));
                            },
                            minValue: 0,
                            maxValue: 1
                        })
                    }),
                    (0, n.jsx)(u.hjN, {
                        title: 'Recordings',
                        tag: u.RB0.H3,
                        children: l.map((e, t) =>
                            (0, n.jsx)(
                                _,
                                {
                                    recording: e,
                                    playing: e === g,
                                    onPlay: V,
                                    onStop: U
                                },
                                t
                            )
                        )
                    })
                ]
            })
        })
    );
}
