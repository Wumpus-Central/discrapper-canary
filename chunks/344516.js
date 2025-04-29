n.d(t, { default: () => O }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(392711),
    a = n.n(s),
    r = n(442837),
    o = n(481060),
    d = n(846027),
    h = n(825209),
    u = n(600164),
    c = n(313201),
    g = n(687058),
    m = n(253052),
    x = n(382577),
    p = n(131951),
    j = n(36703),
    V = n(981631),
    C = n(65154),
    v = n(388032),
    Z = n(701579),
    b = n(20493);
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
let M = (0, c.hQ)(),
    N = (0, c.hQ)(),
    f = (0, c.hQ)();
class A extends l.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(c.FG, {
            children: (t) =>
                (0, i.jsxs)(u.Z, {
                    className: b.marginBottom4,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            tag: o.RB0.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: v.intl.string(v.t.I1Zuq6)
                            })
                        }),
                        (0, i.jsx)(o.rsf, {
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
            return (0, i.jsx)(o.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                'aria-label': v.intl.string(v.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(o.xJW, {
            title: v.intl.string(v.t['sqUm+v']),
            className: b.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleAutoThresholdChange', (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            T(this, 'handleSensitivityChange', (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function D(e) {
    let t,
        { mediaEngineContext: n, speaking: s = !1 } = e,
        {
            inputVolume: u,
            outputVolume: c,
            inputDeviceId: x,
            outputDeviceId: C,
            inputMode: Z,
            shortcut: T,
            vadThreshold: D,
            vadAutoThreshold: O,
            delay: B
        } = (0, r.cj)([p.Z], () => ({
            inputVolume: p.Z.getInputVolume(),
            outputVolume: p.Z.getOutputVolume(),
            inputDeviceId: p.Z.getInputDeviceId(),
            outputDeviceId: p.Z.getOutputDeviceId(),
            inputMode: p.Z.getMode(n),
            shortcut: p.Z.getModeOptions(n).shortcut,
            vadThreshold: p.Z.getModeOptions(n).threshold,
            vadAutoThreshold: p.Z.getModeOptions(n).autoThreshold,
            delay: p.Z.getModeOptions(n).delay
        })),
        W = (0, g.Z)(),
        I = (0, m.Z)(),
        S = a().first(W),
        F = null != S && S.disabled,
        k = a().first(I),
        R = null != k && k.disabled,
        w = [
            {
                value: V.pM4.VOICE_ACTIVITY,
                name: v.intl.string(v.t.cHCEOD)
            },
            {
                value: V.pM4.PUSH_TO_TALK,
                name: v.intl.string(v.t.Q8gkVF)
            }
        ];
    return (
        (t =
            Z === V.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(o.xJW, {
                              title: v.intl.string(v.t.YkDjVF),
                              className: b.marginBottom20,
                              children: (0, i.jsx)(h.Z, {
                                  defaultValue: T,
                                  onChange: (e) => d.Z.setMode(Z, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(o.xJW, {
                              className: b.marginBottom8,
                              children: [
                                  (0, i.jsx)(o.vwX, {
                                      id: M,
                                      children: v.intl.string(v.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(o.iRW, {
                                      initialValue: B,
                                      onValueChange: (e) => d.Z.setMode(Z, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: V.qhL,
                                      'aria-labelledby': M
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(A, {
                      speaking: s,
                      inputMode: Z,
                      threshold: D,
                      autoThreshold: O,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
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
                (0, i.jsx)(o.xJW, {
                    title: v.intl.string(v.t.hHMYbW),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.q4e, {
                        value: x,
                        onChange: (e) => d.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: a().map(W, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: F
                    })
                }),
                (0, i.jsxs)(o.xJW, {
                    className: b.marginBottom20,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            id: N,
                            children: v.intl.string(v.t.OX2Bnp)
                        }),
                        (0, i.jsx)(o.iRW, {
                            initialValue: (0, j.P)(u),
                            asValueChanges: (e) => d.Z.setInputVolume((0, j.A)(e)),
                            'aria-labelledby': N
                        })
                    ]
                }),
                (0, i.jsx)(o.xJW, {
                    title: v.intl.string(v.t.dl18zc),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.q4e, {
                        value: C,
                        onChange: (e) => d.Z.setOutputDevice(e, { location: 'Voice Settings' }),
                        options: a().map(I, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: R
                    })
                }),
                (0, i.jsxs)(o.xJW, {
                    className: b.marginBottom20,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            id: f,
                            children: v.intl.string(v.t.eATD2N)
                        }),
                        (0, i.jsx)(o.iRW, {
                            initialValue: (0, j.P)(c),
                            maxValue: 200,
                            asValueChanges: (e) => d.Z.setOutputVolume((0, j.A)(e)),
                            'aria-labelledby': f
                        })
                    ]
                }),
                (0, i.jsx)(o.xJW, {
                    title: v.intl.string(v.t['pS+K2N']),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return d.Z.setMode(t, {}, n);
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
function O(e) {
    var t;
    return (
        (0, x.Z)(() => {
            null != V.e3s && e.onClose();
        }),
        (0, i.jsxs)(o.Y0X, {
            transitionState: e.transitionState,
            'aria-label': v.intl.string(v.t.NiTd0d),
            children: [
                (0, i.jsxs)(o.xBx, {
                    children: [
                        (0, i.jsxs)(u.Z.Child, {
                            children: [
                                (0, i.jsx)(o.vwX, {
                                    tag: 'h1',
                                    className: b.marginReset,
                                    children: v.intl.string(v.t.NiTd0d)
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    className: Z.title,
                                    children: e.title
                                })
                            ]
                        }),
                        (0, i.jsx)(u.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(o.olH, { onClick: e.onClose })
                        })
                    ]
                }),
                (0, i.jsx)(o.hzk, { children: (0, i.jsx)(D, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : C.Yn.DEFAULT }) })
            ]
        })
    );
}
