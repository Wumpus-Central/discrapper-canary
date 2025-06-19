n.d(t, { default: () => B }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(442837),
    a = n(481060),
    r = n(846027),
    o = n(825209),
    d = n(600164),
    h = n(313201),
    u = n(679613),
    c = n(72897),
    g = n(382577),
    m = n(131951),
    x = n(36703),
    p = n(981631),
    j = n(65154),
    V = n(388032),
    C = n(701579),
    v = n(20493);
function Z(e, t, n) {
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
let b = (0, h.hQ)(),
    T = (0, h.hQ)(),
    M = (0, h.hQ)();
class N extends l.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(h.FG, {
            children: (t) =>
                (0, i.jsxs)(d.Z, {
                    className: v.marginBottom4,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            tag: a.RB0.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: V.intl.string(V.t.I1Zuq6)
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
                'aria-label': V.intl.string(V.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(a.xJW, {
            title: V.intl.string(V.t['sqUm+v']),
            className: v.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()]
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleAutoThresholdChange', (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            Z(this, 'handleSensitivityChange', (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function A(e) {
    let t,
        { mediaEngineContext: n, speaking: d = !1 } = e,
        {
            inputVolume: h,
            outputVolume: g,
            inputDeviceId: j,
            outputDeviceId: C,
            inputMode: Z,
            shortcut: A,
            vadThreshold: B,
            vadAutoThreshold: D,
            delay: O
        } = (0, s.cj)([m.Z], () => ({
            inputVolume: m.Z.getInputVolume(),
            outputVolume: m.Z.getOutputVolume(),
            inputDeviceId: m.Z.getInputDeviceId(),
            outputDeviceId: m.Z.getOutputDeviceId(),
            inputMode: m.Z.getMode(n),
            shortcut: m.Z.getModeOptions(n).shortcut,
            vadThreshold: m.Z.getModeOptions(n).threshold,
            vadAutoThreshold: m.Z.getModeOptions(n).autoThreshold,
            delay: m.Z.getModeOptions(n).delay
        })),
        { sortDevicesByFrecency: S } = (0, u._)({ location: 'VoiceSettingsModal' }),
        W = (0, c.zX)({ sortDevicesByFrecency: S }),
        f = (0, c.rB)({ sortDevicesByFrecency: S }),
        I = W[0],
        F = null != I && I.disabled,
        k = f[0],
        R = null != k && k.disabled,
        w = [
            {
                value: p.pM4.VOICE_ACTIVITY,
                name: V.intl.string(V.t.cHCEOD)
            },
            {
                value: p.pM4.PUSH_TO_TALK,
                name: V.intl.string(V.t.Q8gkVF)
            }
        ];
    return (
        (t =
            Z === p.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(a.xJW, {
                              title: V.intl.string(V.t.YkDjVF),
                              className: v.marginBottom20,
                              children: (0, i.jsx)(o.Z, {
                                  defaultValue: A,
                                  onChange: (e) => r.Z.setMode(Z, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(a.xJW, {
                              className: v.marginBottom8,
                              children: [
                                  (0, i.jsx)(a.vwX, {
                                      id: b,
                                      children: V.intl.string(V.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(a.iRW, {
                                      initialValue: O,
                                      onValueChange: (e) => r.Z.setMode(Z, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: p.qhL,
                                      'aria-labelledby': b
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(N, {
                      speaking: d,
                      inputMode: Z,
                      threshold: B,
                      autoThreshold: D,
                      onThresholdChange: (e, t) =>
                          r.Z.setMode(
                              Z,
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
                    title: V.intl.string(V.t.hHMYbW),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.q4e, {
                        value: j,
                        onChange: (e) => r.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: W.map((e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: F
                    })
                }),
                (0, i.jsxs)(a.xJW, {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: T,
                            children: V.intl.string(V.t.OX2Bnp)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, x.P)(h),
                            asValueChanges: (e) => r.Z.setInputVolume((0, x.A)(e)),
                            'aria-labelledby': T
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: V.intl.string(V.t.dl18zc),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.q4e, {
                        value: C,
                        onChange: (e) => r.Z.setOutputDevice(e, { location: 'Voice Settings' }),
                        options: f.map((e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: R
                    })
                }),
                (0, i.jsxs)(a.xJW, {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: M,
                            children: V.intl.string(V.t.eATD2N)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, x.P)(g),
                            maxValue: 200,
                            asValueChanges: (e) => r.Z.setOutputVolume((0, x.A)(e)),
                            'aria-labelledby': M
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: V.intl.string(V.t['pS+K2N']),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return r.Z.setMode(t, {}, n);
                        },
                        options: w,
                        value: Z
                    })
                }),
                t
            ]
        })
    );
}
function B(e) {
    var t;
    return (
        (0, g.Z)(() => {
            null != p.e3s && e.onClose();
        }),
        (0, i.jsxs)(a.Y0X, {
            transitionState: e.transitionState,
            'aria-label': V.intl.string(V.t.NiTd0d),
            parentComponent: 'VoiceSettingsModal',
            children: [
                (0, i.jsxs)(a.xBx, {
                    children: [
                        (0, i.jsxs)(d.Z.Child, {
                            children: [
                                (0, i.jsx)(a.vwX, {
                                    tag: 'h1',
                                    className: v.marginReset,
                                    children: V.intl.string(V.t.NiTd0d)
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    className: C.title,
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
                (0, i.jsx)(a.hzk, { children: (0, i.jsx)(A, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : j.Yn.DEFAULT }) })
            ]
        })
    );
}
