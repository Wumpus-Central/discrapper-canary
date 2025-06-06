n.d(t, { Z: () => j }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(17294), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(539854);
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
    x = n(687058),
    p = n(131951),
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
                children: ['Echo Cancellation: ', String(t.echoCancellation)]
            })
        ]
    });
}
function g(e) {
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
function j() {
    let e = (0, x.Z)(),
        [t, n] = r.useState(!1),
        [l, i] = r.useState([]),
        [s, v] = r.useState(null),
        j = r.useRef(null),
        _ = r.useRef(null),
        [y, C] = r.useState(0.5),
        N = (0, c.e7)([p.Z], () => p.Z.getInputDeviceId()),
        O = (0, c.e7)([p.Z], () => p.Z.getEchoCancellation()),
        {
            noiseCancellation: E,
            noiseSuppression: T,
            noiseSuppressionSupported: S,
            noiseCancellationSupported: P
        } = (0, c.cj)([p.Z], () => ({
            noiseCancellation: p.Z.getNoiseCancellation(),
            noiseSuppression: p.Z.getNoiseSuppression(),
            noiseSuppressionSupported: p.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.Z.isNoiseCancellationSupported()
        })),
        I = E ? 'KRISP' : T ? 'STANDARD' : 'NONE',
        w = (0, m.N)(),
        k = r.useCallback(() => {
            var e;
            null == (e = j.current) || e.stop(), (j.current = null), v(null);
        }, []);
    function R() {
        p.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function A(e) {
        if ((t && R(), k(), null == w)) return;
        let n = w.createBufferSource();
        (n.buffer = e.audioBuffer), (_.current = w.createGain()), (_.current.gain.value = y), n.connect(_.current), _.current.connect(w.destination), (n.loop = !0), n.start(), (j.current = n), v(e);
    }
    r.useEffect(() => {
        k();
    }, [k]);
    let Z = [];
    return (
        P &&
            Z.push({
                label: 'Krisp',
                value: 'KRISP'
            }),
        S &&
            Z.push({
                label: 'Standard',
                value: 'STANDARD'
            }),
        Z.push({
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
                            value: N,
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
                            value: I,
                            onChange: (e) => {
                                u.Z.setNoiseCancellation('KRISP' === e), u.Z.setNoiseSuppression('STANDARD' === e);
                            },
                            options: Z,
                            popoutLayerContext: h.O$
                        })
                    }),
                    (0, a.jsx)(d.hjN, {
                        tag: d.RB0.H3,
                        children: (0, a.jsx)(d.j7V, {
                            hideBorder: !0,
                            value: O,
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
                                ? R
                                : function () {
                                      k(),
                                          n(!0),
                                          u.Z.setLoopback('krisp_test', !0),
                                          p.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                              var l;
                                              n(!1), u.Z.setLoopback('krisp_test', !1);
                                              let s = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: a
                                              });
                                              for (let e = 0; e < a; e++) {
                                                  let n = new Float32Array(t.length / a);
                                                  for (let r = 0; r < t.length / a; r++) n[r] = t[r * a + e] / 32768;
                                                  s.copyToChannel(n, e);
                                              }
                                              let o = null == (l = e[N]) ? void 0 : l.name;
                                              i((e) => [
                                                  ...e,
                                                  {
                                                      inputName: o,
                                                      audioBuffer: s,
                                                      createdAt: Date.now(),
                                                      suppression: I,
                                                      echoCancellation: O
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
                            initialValue: y,
                            asValueChanges: function (e) {
                                null != _.current && ((_.current.gain.value = e), C(e));
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
                                    playing: e === s,
                                    onPlay: A,
                                    onStop: k
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
