(n.d(t, { default: () => S }), n(388685));
var i = n(255367),
    l = n(73800),
    s = n(442837),
    a = n(481060),
    o = n(846027),
    r = n(825209),
    d = n(600164),
    h = n(313201),
    u = n(72897),
    c = n(382577),
    g = n(131951),
    m = n(36703),
    x = n(981631),
    p = n(65154),
    j = n(388032),
    V = n(701579),
    v = n(20493);
function C(e, t, n) {
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
let Z = (0, h.hQ)(),
    b = (0, h.hQ)(),
    T = (0, h.hQ)();
class M extends l.PureComponent {
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
            className: v.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()]
        });
    }
    constructor(...e) {
        (super(...e),
            C(this, 'handleAutoThresholdChange', (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            C(this, 'handleSensitivityChange', (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            }));
    }
}
function N(e) {
    var t, n, d, h;
    let c,
        { mediaEngineContext: p, speaking: V = !1 } = e,
        {
            inputVolume: C,
            outputVolume: N,
            inputDeviceId: S,
            outputDeviceId: A,
            inputMode: B,
            shortcut: D,
            vadThreshold: O,
            vadAutoThreshold: W,
            delay: f
        } = (0, s.cj)([g.Z], () => ({
            inputVolume: g.Z.getInputVolume(),
            outputVolume: g.Z.getOutputVolume(),
            inputDeviceId: g.Z.getInputDeviceId(),
            outputDeviceId: g.Z.getOutputDeviceId(),
            inputMode: g.Z.getMode(p),
            shortcut: g.Z.getModeOptions(p).shortcut,
            vadThreshold: g.Z.getModeOptions(p).threshold,
            vadAutoThreshold: g.Z.getModeOptions(p).autoThreshold,
            delay: g.Z.getModeOptions(p).delay
        })),
        I = (0, u.zX)({ location: 'VoiceSettingsModal' }),
        F = (0, u.rB)({ location: 'VoiceSettingsModal' }),
        k = null != (d = null == (t = I[0]) ? void 0 : t.disabled) && d,
        R = null != (h = null == (n = F[0]) ? void 0 : n.disabled) && h,
        w = [
            {
                value: x.pM4.VOICE_ACTIVITY,
                name: j.intl.string(j.t.cHCEOD)
            },
            {
                value: x.pM4.PUSH_TO_TALK,
                name: j.intl.string(j.t.Q8gkVF)
            }
        ];
    return (
        (c =
            B === x.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(a.xJW, {
                              title: j.intl.string(j.t.YkDjVF),
                              className: v.marginBottom20,
                              children: (0, i.jsx)(r.Z, {
                                  defaultValue: D,
                                  onChange: (e) => o.Z.setMode(B, { shortcut: e }, p)
                              })
                          }),
                          (0, i.jsxs)(a.xJW, {
                              className: v.marginBottom8,
                              children: [
                                  (0, i.jsx)(a.vwX, {
                                      id: Z,
                                      children: j.intl.string(j.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(a.iRW, {
                                      initialValue: f,
                                      onValueChange: (e) => o.Z.setMode(B, { delay: e }, p),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: x.qhL,
                                      'aria-labelledby': Z
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(M, {
                      speaking: V,
                      inputMode: B,
                      threshold: O,
                      autoThreshold: W,
                      onThresholdChange: (e, t) =>
                          o.Z.setMode(
                              B,
                              {
                                  threshold: e,
                                  autoThreshold: t
                              },
                              p
                          )
                  })),
        (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: j.intl.string(j.t.hHMYbW),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.q4e, {
                        value: S,
                        onChange: (e) => o.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: I.map((e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: k
                    })
                }),
                (0, i.jsxs)(a.xJW, {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: b,
                            children: j.intl.string(j.t.OX2Bnp)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, m.P)(C),
                            asValueChanges: (e) => o.Z.setInputVolume((0, m.A)(e)),
                            'aria-labelledby': b
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: j.intl.string(j.t.dl18zc),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.q4e, {
                        value: A,
                        onChange: (e) => o.Z.setOutputDevice(e, { location: 'Voice Settings' }),
                        options: F.map((e) => {
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
                            id: T,
                            children: j.intl.string(j.t.eATD2N)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, m.P)(N),
                            maxValue: 200,
                            asValueChanges: (e) => o.Z.setOutputVolume((0, m.A)(e)),
                            'aria-labelledby': T
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: j.intl.string(j.t['pS+K2N']),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return o.Z.setMode(t, {}, p);
                        },
                        options: w,
                        value: B
                    })
                }),
                c
            ]
        })
    );
}
function S(e) {
    var t;
    return (
        (0, c.Z)(() => {
            null != x.e3s && e.onClose();
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
                                    className: v.marginReset,
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
                (0, i.jsx)(a.hzk, { children: (0, i.jsx)(N, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : p.Yn.DEFAULT }) })
            ]
        })
    );
}
