n.d(t, { Z: () => g }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(17294), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(539854);
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
    p = n(72897),
    x = n(131951),
    h = n(246992),
    b = n(203759),
    f = n(616257);
function v(e) {
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
function _(e) {
    let { recording: t, playing: n, onPlay: r, onStop: l } = e;
    return (0, a.jsx)(d.zF9, {
        collapsibleContent: (0, a.jsx)(v, { recording: t }),
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
                            e.stopPropagation(), n ? l() : r(t);
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
                            (r.href = a), (r.download = ''.concat(t.inputName, '-').concat(new Date(t.createdAt).toLocaleString(), '.wav')), r.click(), URL.revokeObjectURL(a);
                        },
                        children: (0, a.jsx)(d._8t, { size: 'xxs' })
                    })
                ]
            });
        }
    });
}
function g() {
    let e = (0, p.zX)(),
        [t, n] = r.useState(!1),
        [l, i] = r.useState([]),
        s = (0, c.e7)([x.Z], () => x.Z.getKrispSuppressionLevel()),
        [v, g] = r.useState(null),
        j = r.useRef(null),
        y = r.useRef(null),
        [C, N] = r.useState(0.5),
        O = (0, c.e7)([x.Z], () => x.Z.getKrispModels()),
        E = (0, c.e7)([x.Z], () => x.Z.getKrispModelOverride()),
        T = (0, c.e7)([x.Z], () => x.Z.getInputDeviceId()),
        S = (0, c.e7)([x.Z], () => x.Z.getEchoCancellation()),
        {
            noiseCancellation: P,
            noiseSuppression: I,
            noiseSuppressionSupported: w,
            noiseCancellationSupported: k
        } = (0, c.cj)([x.Z], () => ({
            noiseCancellation: x.Z.getNoiseCancellation(),
            noiseSuppression: x.Z.getNoiseSuppression(),
            noiseSuppressionSupported: x.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: x.Z.isNoiseCancellationSupported()
        })),
        R = P ? 'KRISP' : I ? 'STANDARD' : 'NONE',
        A = (0, m.N)(),
        Z = r.useCallback(() => {
            var e;
            null == (e = j.current) || e.stop(), (j.current = null), g(null);
        }, []);
    function L() {
        x.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function D(e) {
        if ((t && L(), Z(), null == A)) return;
        let n = A.createBufferSource();
        (n.buffer = e.audioBuffer), (y.current = A.createGain()), (y.current.gain.value = C), n.connect(y.current), y.current.connect(A.destination), (n.loop = !0), n.start(), (j.current = n), g(e);
    }
    r.useEffect(() => {
        Z();
    }, [Z]);
    let M = [];
    return (
        k &&
            M.push({
                label: 'Krisp',
                value: 'KRISP'
            }),
        w &&
            M.push({
                label: 'Standard',
                value: 'STANDARD'
            }),
        M.push({
            label: 'Disabled',
            value: 'NONE'
        }),
        (0, a.jsx)(d.zJl, {
            className: f.panel,
            children: (0, a.jsxs)('div', {
                className: b.innerPanel,
                children: [
                    (0, a.jsx)(d.Text, {
                        variant: 'text-lg/bold',
                        children: 'Krisp Tester'
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Input Device',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.q4e, {
                            value: T,
                            onChange: (e) => u.Z.setInputDevice(e),
                            options: o().map(e, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            popoutLayerContext: h.O$
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Noise Cancellation',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.q4e, {
                            value: R,
                            onChange: (e) => {
                                u.Z.setNoiseCancellation('KRISP' === e), u.Z.setNoiseSuppression('STANDARD' === e);
                            },
                            options: M,
                            popoutLayerContext: h.O$
                        })
                    }),
                    'KRISP' === R &&
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
                                        isSelected: (e) => e === E,
                                        options: O.map((e) => ({
                                            label: e,
                                            value: e
                                        })),
                                        select: (e) => {
                                            u.Z.setKrispModelOverride(e);
                                        },
                                        popoutLayerContext: h.O$,
                                        serialize: (e) => e
                                    })
                                })
                            ]
                        }),
                    (0, a.jsx)(d.hjN, {
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.j7V, {
                            hideBorder: !0,
                            value: S,
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
                                ? L
                                : function () {
                                      Z(),
                                          n(!0),
                                          u.Z.setLoopback('krisp_test', !0),
                                          x.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                              var l, o;
                                              n(!1), u.Z.setLoopback('krisp_test', !1);
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
                                                          return T === t;
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
                                                      suppression: R,
                                                      echoCancellation: S,
                                                      krispSuppressionLevel: s
                                                  }
                                              ]);
                                          });
                                  },
                            children: t ? 'Stop Recording' : 'Start Recording'
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        title: 'Volume',
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.iRW, {
                            initialValue: C,
                            asValueChanges: function (e) {
                                null != y.current && ((y.current.gain.value = e), N(e));
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
                                _,
                                {
                                    recording: e,
                                    playing: e === v,
                                    onPlay: D,
                                    onStop: Z
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
