(a.d(t, { Z: () => _ }), a(190126), a(368063), a(65234), a(111804), a(490233), a(97749), a(388685), a(17294), a(227481), a(730884), a(20464), a(341884), a(364341), a(629680), a(505025), a(918970), a(121784), a(644351), a(146733), a(539854));
var n = a(255367),
    r = a(73800),
    l = a(345959),
    i = a.n(l),
    s = a(442837),
    o = a(755721),
    c = a(481060),
    d = a(846027),
    u = a(304809),
    m = a(670863),
    x = a(72897),
    p = a(131951),
    h = a(246992),
    b = a(65154),
    f = a(203759),
    v = a(616257);
function j(e) {
    let { recording: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                children: ['Duration: ', t.audioBuffer.duration]
            }),
            (0, n.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                children: ['Num Channels: ', t.audioBuffer.numberOfChannels]
            }),
            (0, n.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                children: ['Sample Rate: ', t.audioBuffer.sampleRate]
            }),
            (0, n.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                children: ['Noise Suppression: ', t.suppression]
            }),
            (0, n.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                children: ['Krisp Suppression Level: ', t.krispSuppressionLevel]
            }),
            (0, n.jsxs)(c.Text, {
                variant: 'text-sm/normal',
                children: ['Echo Cancellation: ', String(t.echoCancellation)]
            })
        ]
    });
}
function g(e) {
    let { recording: t, playing: a, onPlay: r, onStop: l } = e;
    return (0, n.jsx)(c.zF9, {
        collapsibleContent: (0, n.jsx)(j, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, n.jsxs)(c.P3F, {
                onClick: s,
                children: [
                    (0, n.jsxs)(c.Text, {
                        variant: 'text-sm/bold',
                        tag: 'span',
                        children: [t.inputName, ' - ', new Date(t.createdAt).toLocaleString()]
                    }),
                    (0, n.jsx)(c.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : r(t));
                        },
                        children: a ? (0, n.jsx)(c.fpf, { size: 'xxs' }) : (0, n.jsx)(c.o1U, { size: 'xxs' })
                    }),
                    (0, n.jsx)(c.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            e.stopPropagation();
                            let a = new Blob([i()(t.audioBuffer)], { type: 'audio/wav' }),
                                n = URL.createObjectURL(a),
                                r = document.createElement('a');
                            ((r.href = n), (r.download = ''.concat(t.inputName, '-').concat(new Date(t.createdAt).toLocaleString(), '.wav')), r.click(), URL.revokeObjectURL(n));
                        },
                        children: (0, n.jsx)(c._8t, { size: 'xxs' })
                    })
                ]
            });
        }
    });
}
function _() {
    let { name: e } = (0, x.p)(b.h7.AUDIO_INPUT),
        [t, a] = r.useState(!1),
        [l, i] = r.useState([]),
        j = (0, s.e7)([p.Z], () => p.Z.getKrispSuppressionLevel()),
        [_, y] = r.useState(null),
        C = r.useRef(null),
        N = r.useRef(null),
        [O, T] = r.useState(0.5),
        {
            krispModels: E,
            krispModelOverride: S,
            inputMode: P,
            echoCancellation: w,
            autoThreshold: I,
            vadUseKrisp: R,
            vadKrispActivationThreshold: k,
            noiseCancellation: Z,
            noiseSuppression: A,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: L,
            noiseCancellationEnableStats: M
        } = (0, s.cj)([p.Z], () => ({
            krispModels: p.Z.getKrispModels(),
            krispModelOverride: p.Z.getKrispModelOverride(),
            echoCancellation: p.Z.getEchoCancellation(),
            autoThreshold: p.Z.getModeOptions().autoThreshold,
            vadUseKrisp: p.Z.getModeOptions().vadUseKrisp,
            inputMode: p.Z.getMode(),
            vadKrispActivationThreshold: p.Z.getKrispVadActivationThreshold(),
            noiseCancellation: p.Z.getNoiseCancellation(),
            noiseSuppression: p.Z.getNoiseSuppression(),
            noiseSuppressionSupported: p.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.Z.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: p.Z.getKrispEnableStats()
        })),
        U = Z ? 'KRISP' : A ? 'STANDARD' : 'NONE',
        F = (0, u.N)(),
        B = r.useCallback(() => {
            var e;
            (null == (e = C.current) || e.stop(), (C.current = null), y(null));
        }, []);
    function z() {
        p.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function G(e) {
        if ((t && z(), B(), null == F)) return;
        let a = F.createBufferSource();
        ((a.buffer = e.audioBuffer), (N.current = F.createGain()), (N.current.gain.value = O), a.connect(N.current), N.current.connect(F.destination), (a.loop = !0), a.start(), (C.current = a), y(e));
    }
    r.useEffect(() => {
        B();
    }, [B]);
    let V = [];
    return (
        L &&
            V.push({
                label: 'Krisp',
                value: 'KRISP'
            }),
        D &&
            V.push({
                label: 'Standard',
                value: 'STANDARD'
            }),
        V.push({
            label: 'Disabled',
            value: 'NONE'
        }),
        (0, n.jsx)(c.zJl, {
            className: v.panel,
            children: (0, n.jsxs)('div', {
                className: f.innerPanel,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        children: 'Krisp Tester'
                    }),
                    (0, n.jsx)(c.hjN, {
                        title: 'Input Device',
                        tag: c.RB0.H3,
                        children: (0, n.jsx)(m.j, {
                            deviceType: b.h7.AUDIO_INPUT,
                            location: 'DevToolsKrispTester'
                        })
                    }),
                    (0, n.jsx)(c.hjN, {
                        title: 'Noise Cancellation',
                        tag: c.RB0.H3,
                        children: (0, n.jsx)(c.q4e, {
                            value: U,
                            onChange: (e) => {
                                (d.Z.setNoiseCancellation('KRISP' === e), d.Z.setNoiseSuppression('STANDARD' === e));
                            },
                            options: V,
                            popoutLayerContext: h.O$
                        })
                    }),
                    'KRISP' === U &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(c.hjN, {
                                    title: 'Krisp Suppression Level',
                                    tag: c.RB0.H3,
                                    children: (0, n.jsx)(c.iRW, {
                                        initialValue: j,
                                        onValueChange: d.Z.setKrispSuppressionLevel,
                                        minValue: 0,
                                        maxValue: 100
                                    })
                                }),
                                (0, n.jsx)(c.hjN, {
                                    title: 'Krisp Model Override',
                                    tag: c.RB0.H3,
                                    children: (0, n.jsx)(c.PhF, {
                                        clearable: !0,
                                        clear: () => {
                                            d.Z.setKrispModelOverride('');
                                        },
                                        isSelected: (e) => e === S,
                                        options: E.map((e) => ({
                                            label: e,
                                            value: e
                                        })),
                                        select: (e) => {
                                            d.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: h.O$,
                                        serialize: (e) => e
                                    })
                                }),
                                (0, n.jsx)(c.hjN, {
                                    title: 'Noise Cancellation Stats',
                                    tag: c.RB0.H3,
                                    children: (0, n.jsx)(c.j7V, {
                                        value: M,
                                        onChange: (e) => d.Z.setNoiseCancellationEnableStats(e),
                                        children: 'Enable Stats'
                                    })
                                })
                            ]
                        }),
                    P === b.pM.VOICE_ACTIVITY &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(c.hjN, {
                                    title: 'VAD Auto Threshold',
                                    tag: c.RB0.H3,
                                    children: (0, n.jsx)(c.j7V, {
                                        hideBorder: !0,
                                        value: I,
                                        onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                        children: 'Auto Threshold'
                                    })
                                }),
                                I &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.hjN, {
                                                title: 'VAD Krisp Auto Threshold',
                                                tag: c.RB0.H3,
                                                children: (0, n.jsx)(c.j7V, {
                                                    hideBorder: !0,
                                                    value: R,
                                                    onChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                                    children: 'Use Krisp VAD'
                                                })
                                            }),
                                            R &&
                                                (0, n.jsx)(c.hjN, {
                                                    title: 'Krisp VAD Activation Threshold',
                                                    tag: c.RB0.H3,
                                                    children: (0, n.jsx)(c.iRW, {
                                                        initialValue: k,
                                                        onValueChange: (e) => d.Z.setMode(b.pM.VOICE_ACTIVITY, { vadKrispActivationThreshold: e }),
                                                        minValue: 0,
                                                        maxValue: 1
                                                    })
                                                })
                                        ]
                                    })
                            ]
                        }),
                    (0, n.jsx)(c.hjN, {
                        tag: c.RB0.H3,
                        children: (0, n.jsx)(c.j7V, {
                            hideBorder: !0,
                            value: w,
                            onChange: (e) => d.Z.setEchoCancellation(e),
                            children: 'Echo Cancellation'
                        })
                    }),
                    (0, n.jsx)(c.hjN, {
                        title: 'Recorder',
                        tag: c.RB0.H3,
                        children: (0, n.jsx)(o.zx, {
                            color: t ? o.zx.Colors.RED : o.zx.Colors.BRAND,
                            onClick: t
                                ? z
                                : function () {
                                      (B(),
                                          a(!0),
                                          d.Z.setLoopback('krisp_test', !0),
                                          p.Z.getMediaEngine().startRecordingRawSamples((t, n, r) => {
                                              (a(!1), d.Z.setLoopback('krisp_test', !1));
                                              let l = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: n
                                              });
                                              for (let e = 0; e < n; e++) {
                                                  let a = new Float32Array(t.length / n);
                                                  for (let r = 0; r < t.length / n; r++) a[r] = t[r * n + e] / 32768;
                                                  l.copyToChannel(a, e);
                                              }
                                              i((t) => [
                                                  ...t,
                                                  {
                                                      inputName: e,
                                                      audioBuffer: l,
                                                      createdAt: Date.now(),
                                                      suppression: U,
                                                      echoCancellation: w,
                                                      krispSuppressionLevel: j
                                                  }
                                              ]);
                                          }));
                                  },
                            children: t ? 'Stop Recording' : 'Start Recording'
                        })
                    }),
                    (0, n.jsx)(c.hjN, {
                        title: 'Volume',
                        tag: c.RB0.H3,
                        children: (0, n.jsx)(c.iRW, {
                            initialValue: O,
                            asValueChanges: function (e) {
                                null != N.current && ((N.current.gain.value = e), T(e));
                            },
                            minValue: 0,
                            maxValue: 1
                        })
                    }),
                    (0, n.jsx)(c.hjN, {
                        title: 'Recordings',
                        tag: c.RB0.H3,
                        children: l.map((e, t) =>
                            (0, n.jsx)(
                                g,
                                {
                                    recording: e,
                                    playing: e === _,
                                    onPlay: G,
                                    onStop: B
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
