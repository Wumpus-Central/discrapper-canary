(n.d(t, { Z: () => _ }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(17294), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(539854));
var a = n(255367),
    r = n(73800),
    l = n(345959),
    i = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(846027),
    m = n(304809),
    x = n(72897),
    h = n(131951),
    p = n(246992),
    b = n(65154),
    f = n(203759),
    v = n(616257);
function j(e) {
    let { recording: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(d.Text, {
                variant: 'text-sm/normal',
                children: ['Duration: ', t.audioBuffer.duration]
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-sm/normal',
                children: ['Num Channels: ', t.audioBuffer.numberOfChannels]
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-sm/normal',
                children: ['Sample Rate: ', t.audioBuffer.sampleRate]
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-sm/normal',
                children: ['Noise Suppression: ', t.suppression]
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-sm/normal',
                children: ['Krisp Suppression Level: ', t.krispSuppressionLevel]
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-sm/normal',
                children: ['Echo Cancellation: ', String(t.echoCancellation)]
            })
        ]
    });
}
function g(e) {
    let { recording: t, playing: n, onPlay: r, onStop: l } = e;
    return (0, a.jsx)(d.zF9, {
        collapsibleContent: (0, a.jsx)(j, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, a.jsxs)(d.P3F, {
                onClick: s,
                children: [
                    (0, a.jsxs)(d.Text, {
                        variant: 'text-sm/bold',
                        tag: 'span',
                        children: [t.inputName, ' - ', new Date(t.createdAt).toLocaleString()]
                    }),
                    (0, a.jsx)(d.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            (e.stopPropagation(), n ? l() : r(t));
                        },
                        children: n ? (0, a.jsx)(d.fpf, { size: 'xxs' }) : (0, a.jsx)(d.o1U, { size: 'xxs' })
                    }),
                    (0, a.jsx)(d.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            e.stopPropagation();
                            let n = new Blob([i()(t.audioBuffer)], { type: 'audio/wav' }),
                                a = URL.createObjectURL(n),
                                r = document.createElement('a');
                            ((r.href = a), (r.download = ''.concat(t.inputName, '-').concat(new Date(t.createdAt).toLocaleString(), '.wav')), r.click(), URL.revokeObjectURL(a));
                        },
                        children: (0, a.jsx)(d._8t, { size: 'xxs' })
                    })
                ]
            });
        }
    });
}
function _() {
    let e = (0, x.zX)({ location: 'DevToolsVoiceFiltersPanel' }),
        [t, n] = r.useState(!1),
        [l, i] = r.useState([]),
        s = (0, c.e7)([h.Z], () => h.Z.getKrispSuppressionLevel()),
        [j, _] = r.useState(null),
        y = r.useRef(null),
        C = r.useRef(null),
        [O, N] = r.useState(0.5),
        {
            krispModels: E,
            krispModelOverride: T,
            inputDeviceId: S,
            inputMode: P,
            echoCancellation: w,
            autoThreshold: I,
            vadUseKrisp: k,
            vadKrispActivationThreshold: R,
            noiseCancellation: A,
            noiseSuppression: Z,
            noiseSuppressionSupported: L,
            noiseCancellationSupported: D
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
            noiseCancellationSupported: h.Z.isNoiseCancellationSupported()
        })),
        M = A ? 'KRISP' : Z ? 'STANDARD' : 'NONE',
        z = (0, m.N)(),
        B = r.useCallback(() => {
            var e;
            (null == (e = y.current) || e.stop(), (y.current = null), _(null));
        }, []);
    function F() {
        h.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function U(e) {
        if ((t && F(), B(), null == z)) return;
        let n = z.createBufferSource();
        ((n.buffer = e.audioBuffer), (C.current = z.createGain()), (C.current.gain.value = O), n.connect(C.current), C.current.connect(z.destination), (n.loop = !0), n.start(), (y.current = n), _(e));
    }
    r.useEffect(() => {
        B();
    }, [B]);
    let G = [];
    return (
        D &&
            G.push({
                label: 'Krisp',
                value: 'KRISP'
            }),
        L &&
            G.push({
                label: 'Standard',
                value: 'STANDARD'
            }),
        G.push({
            label: 'Disabled',
            value: 'NONE'
        }),
        (0, a.jsx)(d.zJl, {
            className: v.panel,
            children: (0, a.jsxs)('div', {
                className: f.innerPanel,
                children: [
                    (0, a.jsx)(d.Text, {
                        variant: 'text-lg/bold',
                        children: 'Krisp Tester'
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Input Device',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.q4e, {
                            value: S,
                            onChange: (e) => u.Z.setInputDevice(e),
                            options: o().map(e, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            popoutLayerContext: p.O$
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Noise Cancellation',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.q4e, {
                            value: M,
                            onChange: (e) => {
                                (u.Z.setNoiseCancellation('KRISP' === e), u.Z.setNoiseSuppression('STANDARD' === e));
                            },
                            options: G,
                            popoutLayerContext: p.O$
                        })
                    }),
                    'KRISP' === M &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.hjN, {
                                    title: 'Krisp Suppression Level',
                                    tag: d.RB0.H3,
                                    children: (0, a.jsx)(d.iRW, {
                                        initialValue: s,
                                        onValueChange: u.Z.setKrispSuppressionLevel,
                                        minValue: 0,
                                        maxValue: 100
                                    })
                                }),
                                (0, a.jsx)(d.hjN, {
                                    title: 'Krisp Model Override',
                                    tag: d.RB0.H3,
                                    children: (0, a.jsx)(d.PhF, {
                                        clearable: !0,
                                        clear: () => {
                                            u.Z.setKrispModelOverride('');
                                        },
                                        isSelected: (e) => e === T,
                                        options: E.map((e) => ({
                                            label: e,
                                            value: e
                                        })),
                                        select: (e) => {
                                            u.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: p.O$,
                                        serialize: (e) => e
                                    })
                                })
                            ]
                        }),
                    P === b.pM.VOICE_ACTIVITY &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.hjN, {
                                    title: 'VAD Auto Threshold',
                                    tag: d.RB0.H3,
                                    children: (0, a.jsx)(d.j7V, {
                                        hideBorder: !0,
                                        value: I,
                                        onChange: (e) => u.Z.setMode(b.pM.VOICE_ACTIVITY, { autoThreshold: e }),
                                        children: 'Auto Threshold'
                                    })
                                }),
                                I &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(d.hjN, {
                                                title: 'VAD Krisp Auto Threshold',
                                                tag: d.RB0.H3,
                                                children: (0, a.jsx)(d.j7V, {
                                                    hideBorder: !0,
                                                    value: k,
                                                    onChange: (e) => u.Z.setMode(b.pM.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                                    children: 'Use Krisp VAD'
                                                })
                                            }),
                                            k &&
                                                (0, a.jsx)(d.hjN, {
                                                    title: 'Krisp VAD Activation Threshold',
                                                    tag: d.RB0.H3,
                                                    children: (0, a.jsx)(d.iRW, {
                                                        initialValue: R,
                                                        onValueChange: (e) => u.Z.setMode(b.pM.VOICE_ACTIVITY, { vadKrispActivationThreshold: e }),
                                                        minValue: 0,
                                                        maxValue: 1
                                                    })
                                                })
                                        ]
                                    })
                            ]
                        }),
                    (0, a.jsx)(d.hjN, {
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.j7V, {
                            hideBorder: !0,
                            value: w,
                            onChange: (e) => u.Z.setEchoCancellation(e),
                            children: 'Echo Cancellation'
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Recorder',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.zxk, {
                            color: t ? d.zxk.Colors.RED : d.zxk.Colors.BRAND,
                            onClick: t
                                ? F
                                : function () {
                                      (B(),
                                          n(!0),
                                          u.Z.setLoopback('krisp_test', !0),
                                          h.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                              var l, o;
                                              (n(!1), u.Z.setLoopback('krisp_test', !1));
                                              let c = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: a
                                              });
                                              for (let e = 0; e < a; e++) {
                                                  let n = new Float32Array(t.length / a);
                                                  for (let r = 0; r < t.length / a; r++) n[r] = t[r * a + e] / 32768;
                                                  c.copyToChannel(n, e);
                                              }
                                              let d =
                                                  null !=
                                                  (o =
                                                      null ==
                                                      (l = e.find((e) => {
                                                          let { id: t } = e;
                                                          return S === t;
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
                                                      suppression: M,
                                                      echoCancellation: w,
                                                      krispSuppressionLevel: s
                                                  }
                                              ]);
                                          }));
                                  },
                            children: t ? 'Stop Recording' : 'Start Recording'
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Volume',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.iRW, {
                            initialValue: O,
                            asValueChanges: function (e) {
                                null != C.current && ((C.current.gain.value = e), N(e));
                            },
                            minValue: 0,
                            maxValue: 1
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Recordings',
                        tag: d.RB0.H3,
                        children: l.map((e, t) =>
                            (0, a.jsx)(
                                g,
                                {
                                    recording: e,
                                    playing: e === j,
                                    onPlay: U,
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
