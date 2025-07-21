(n.d(t, { default: () => N }), n(388685));
var i = n(255367),
    l = n(73800),
    s = n(442837),
    a = n(481060),
    r = n(846027),
    o = n(825209),
    d = n(600164),
    h = n(313201),
    c = n(670863),
    u = n(382577),
    g = n(131951),
    x = n(36703),
    m = n(981631),
    p = n(65154),
    j = n(388032),
    V = n(701579),
    C = n(20493);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = (0, h.hQ)(),
    Z = (0, h.hQ)(),
    M = (0, h.hQ)();
class b extends l.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(h.FG, {
            children: (t) =>
                (0, i.jsxs)(d.Z, {
                    className: C.marginBottom4,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            tag: a.RB0.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: j.intl.string(j.t.I1Zuq6)
                            })
                        }),
                        (0, i.jsx)(a.rsf, {
                            id: t,
                            checked: e,
                            onChange: this.handleAutoThresholdChange
                        })
                    ]
                })
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, i.jsx)(a.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                'aria-label': j.intl.string(j.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(a.xJW, {
            title: j.intl.string(j.t['sqUm+v']),
            className: C.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()]
        });
    }
    constructor(...e) {
        (super(...e),
            T(this, 'handleAutoThresholdChange', (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            T(this, 'handleSensitivityChange', (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            }));
    }
}
function A(e) {
    let t,
        { mediaEngineContext: n, speaking: d = !1 } = e,
        {
            inputVolume: h,
            outputVolume: u,
            inputMode: V,
            shortcut: T,
            vadThreshold: A,
            vadAutoThreshold: N,
            delay: O
        } = (0, s.cj)([g.Z], () => ({
            inputVolume: g.Z.getInputVolume(),
            outputVolume: g.Z.getOutputVolume(),
            inputMode: g.Z.getMode(n),
            shortcut: g.Z.getModeOptions(n).shortcut,
            vadThreshold: g.Z.getModeOptions(n).threshold,
            vadAutoThreshold: g.Z.getModeOptions(n).autoThreshold,
            delay: g.Z.getModeOptions(n).delay
        })),
        B = [
            {
                value: m.pM4.VOICE_ACTIVITY,
                name: j.intl.string(j.t.cHCEOD)
            },
            {
                value: m.pM4.PUSH_TO_TALK,
                name: j.intl.string(j.t.Q8gkVF)
            }
        ];
    return (
        (t =
            V === m.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(a.xJW, {
                              title: j.intl.string(j.t.YkDjVF),
                              className: C.marginBottom20,
                              children: (0, i.jsx)(o.Z, {
                                  defaultValue: T,
                                  onChange: (e) => r.Z.setMode(V, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(a.xJW, {
                              className: C.marginBottom8,
                              children: [
                                  (0, i.jsx)(a.vwX, {
                                      id: v,
                                      children: j.intl.string(j.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(a.iRW, {
                                      initialValue: O,
                                      onValueChange: (e) => r.Z.setMode(V, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: m.qhL,
                                      'aria-labelledby': v
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(b, {
                      speaking: d,
                      inputMode: V,
                      threshold: A,
                      autoThreshold: N,
                      onThresholdChange: (e, t) =>
                          r.Z.setMode(
                              V,
                              {
                                  threshold: e,
                                  autoThreshold: t
                              },
                              n
                          )
                  })),
        (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: j.intl.string(j.t.hHMYbW),
                    className: C.marginBottom20,
                    children: (0, i.jsx)(c.j, {
                        deviceType: p.h7.AUDIO_INPUT,
                        location: 'VoiceSettingsModal'
                    })
                }),
                (0, i.jsxs)(a.xJW, {
                    className: C.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: Z,
                            children: j.intl.string(j.t.OX2Bnp)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, x.P)(h),
                            asValueChanges: (e) => r.Z.setInputVolume((0, x.A)(e)),
                            'aria-labelledby': Z
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: j.intl.string(j.t.dl18zc),
                    className: C.marginBottom20,
                    children: (0, i.jsx)(c.j, {
                        deviceType: p.h7.AUDIO_OUTPUT,
                        location: 'VoiceSettingsModal'
                    })
                }),
                (0, i.jsxs)(a.xJW, {
                    className: C.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: M,
                            children: j.intl.string(j.t.eATD2N)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, x.P)(u),
                            maxValue: 200,
                            asValueChanges: (e) => r.Z.setOutputVolume((0, x.A)(e)),
                            'aria-labelledby': M
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: j.intl.string(j.t['pS+K2N']),
                    className: C.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return r.Z.setMode(t, {}, n);
                        },
                        options: B,
                        value: V
                    })
                }),
                t
            ]
        })
    );
}
function N(e) {
    var t;
    return (
        (0, u.Z)(() => {
            null != m.e3s && e.onClose();
        }),
        (0, i.jsxs)(a.Y0X, {
            transitionState: e.transitionState,
            'aria-label': j.intl.string(j.t.NiTd0d),
            parentComponent: 'VoiceSettingsModal',
            children: [
                (0, i.jsxs)(a.xBx, {
                    children: [
                        (0, i.jsxs)(d.Z.Child, {
                            children: [
                                (0, i.jsx)(a.vwX, {
                                    tag: 'h1',
                                    className: C.marginReset,
                                    children: j.intl.string(j.t.NiTd0d)
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    className: V.title,
                                    children: e.title
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.olH, { onClick: e.onClose })
                        })
                    ]
                }),
                (0, i.jsx)(a.hzk, { children: (0, i.jsx)(A, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : p.Yn.DEFAULT }) })
            ]
        })
    );
}
