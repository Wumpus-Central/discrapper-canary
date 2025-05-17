n.d(t, { Z: () => v }), n(388685), n(17294), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(539854);
var a = n(255367),
    r = n(73800),
    l = n(392711),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(304809),
    u = n(687058),
    m = n(131951),
    x = n(246992),
    h = n(203759),
    p = n(616257);
function b(e) {
    let { recording: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                children: ['Duration: ', t.audioBuffer.duration]
            }),
            (0, a.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                children: ['Num Channels: ', t.audioBuffer.numberOfChannels]
            }),
            (0, a.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                children: ['Sample Rate: ', t.audioBuffer.sampleRate]
            }),
            (0, a.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                children: ['Noise Suppression: ', t.suppression]
            }),
            (0, a.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                children: ['Echo Cancellation: ', String(t.echoCancellation)]
            })
        ]
    });
}
function f(e) {
    let { recording: t, playing: n, onPlay: r, onStop: l } = e;
    return (0, a.jsx)(o.zF9, {
        collapsibleContent: (0, a.jsx)(b, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, a.jsxs)(o.P3F, {
                onClick: i,
                children: [
                    (0, a.jsxs)(o.Text, {
                        variant: 'text-sm/bold',
                        tag: 'span',
                        children: [t.inputName, ' - ', new Date(t.createdAt).toLocaleString()]
                    }),
                    (0, a.jsx)(o.P3F, {
                        tag: 'span',
                        onClick: (e) => {
                            e.stopPropagation(), n ? l() : r(t);
                        },
                        children: n ? (0, a.jsx)(o.fpf, { size: 'xxs' }) : (0, a.jsx)(o.o1U, { size: 'xxs' })
                    })
                ]
            });
        }
    });
}
function v() {
    let e = (0, u.Z)(),
        [t, n] = r.useState(!1),
        [l, b] = r.useState([]),
        [v, j] = r.useState(null),
        g = r.useRef(null),
        _ = r.useRef(null),
        [y, C] = r.useState(0.000005),
        O = (0, s.e7)([m.Z], () => m.Z.getInputDeviceId()),
        N = (0, s.e7)([m.Z], () => m.Z.getEchoCancellation()),
        {
            noiseCancellation: E,
            noiseSuppression: S,
            noiseSuppressionSupported: T,
            noiseCancellationSupported: P
        } = (0, s.cj)([m.Z], () => ({
            noiseCancellation: m.Z.getNoiseCancellation(),
            noiseSuppression: m.Z.getNoiseSuppression(),
            noiseSuppressionSupported: m.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: m.Z.isNoiseCancellationSupported()
        })),
        k = E ? 'KRISP' : S ? 'STANDARD' : 'NONE',
        w = (0, d.N)(),
        I = r.useCallback(() => {
            var e;
            null == (e = g.current) || e.stop(), (g.current = null), j(null);
        }, []);
    function R() {
        m.Z.getMediaEngine().stopRecordingRawSamples();
    }
    function Z(e) {
        if ((t && R(), I(), null == w)) return;
        let n = w.createBufferSource();
        (n.buffer = e.audioBuffer), (_.current = w.createGain()), (_.current.gain.value = y), n.connect(_.current), _.current.connect(w.destination), (n.loop = !0), n.start(), (g.current = n), j(e);
    }
    r.useEffect(() => {
        I();
    }, [I]);
    let A = [];
    return (
        P &&
            A.push({
                label: 'Krisp',
                value: 'KRISP'
            }),
        T &&
            A.push({
                label: 'Standard',
                value: 'STANDARD'
            }),
        A.push({
            label: 'Disabled',
            value: 'NONE'
        }),
        (0, a.jsx)(o.zJl, {
            className: p.panel,
            children: (0, a.jsxs)('div', {
                className: h.innerPanel,
                children: [
                    (0, a.jsx)(o.Text, {
                        variant: 'text-lg/bold',
                        children: 'Krisp Tester'
                    }),
                    (0, a.jsx)(o.hjN, {
                        title: 'Input Device',
                        tag: o.RB0.H3,
                        children: (0, a.jsx)(o.q4e, {
                            value: O,
                            onChange: (e) => c.Z.setInputDevice(e),
                            options: i().map(e, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            popoutLayerContext: x.O$
                        })
                    }),
                    (0, a.jsx)(o.hjN, {
                        title: 'Noise Cancellation',
                        tag: o.RB0.H3,
                        children: (0, a.jsx)(o.q4e, {
                            value: k,
                            onChange: (e) => {
                                c.Z.setNoiseCancellation('KRISP' === e), c.Z.setNoiseSuppression('STANDARD' === e);
                            },
                            options: A,
                            popoutLayerContext: x.O$
                        })
                    }),
                    (0, a.jsx)(o.hjN, {
                        tag: o.RB0.H3,
                        children: (0, a.jsx)(o.j7V, {
                            hideBorder: !0,
                            value: N,
                            onChange: (e) => c.Z.setEchoCancellation(e),
                            children: 'Echo Cancellation'
                        })
                    }),
                    (0, a.jsx)(o.hjN, {
                        title: 'Recorder',
                        tag: o.RB0.H3,
                        children: (0, a.jsx)(o.zxk, {
                            color: t ? o.zxk.Colors.RED : o.zxk.Colors.BRAND,
                            onClick: t
                                ? R
                                : function () {
                                      I(),
                                          n(!0),
                                          c.Z.setLoopback('krisp_test', !0),
                                          m.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
                                              var l;
                                              n(!1), c.Z.setLoopback('krisp_test', !1);
                                              let i = new AudioBuffer({
                                                  length: t.length,
                                                  sampleRate: r,
                                                  numberOfChannels: a
                                              });
                                              for (let e = 0; e < a; e++) {
                                                  let n = new Float32Array(t.length / a);
                                                  for (let r = 0; r < t.length / a; r++) n[r] = t[r * a + e];
                                                  i.copyToChannel(n, e);
                                              }
                                              let s = null == (l = e[O]) ? void 0 : l.name;
                                              b((e) => [
                                                  ...e,
                                                  {
                                                      inputName: s,
                                                      audioBuffer: i,
                                                      createdAt: Date.now(),
                                                      suppression: k,
                                                      echoCancellation: N
                                                  }
                                              ]);
                                          });
                                  },
                            children: t ? 'Stop Recording' : 'Start Recording'
                        })
                    }),
                    (0, a.jsx)(o.hjN, {
                        title: 'Volume',
                        tag: o.RB0.H3,
                        children: (0, a.jsx)(o.iRW, {
                            initialValue: y,
                            asValueChanges: function (e) {
                                null != _.current && ((_.current.gain.value = e), C(e));
                            },
                            minValue: 0,
                            maxValue: 0.00001
                        })
                    }),
                    (0, a.jsx)(o.hjN, {
                        title: 'Recordings',
                        tag: o.RB0.H3,
                        children: l.map((e, t) =>
                            (0, a.jsx)(
                                f,
                                {
                                    recording: e,
                                    playing: e === v,
                                    onPlay: Z,
                                    onStop: I
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
