n.d(t, { default: () => D }), n(388685);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    a = n.n(l),
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
    N = n(65154),
    C = n(388032),
    W = n(621926),
    v = n(971005);
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
let b = (0, c.hQ)(),
    T = (0, c.hQ)(),
    M = (0, c.hQ)();
class f extends s.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(c.FG, {
            children: (t) =>
                (0, i.jsxs)(u.Z, {
                    className: v.marginBottom4,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            tag: o.RB0.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: C.NW.string(C.t.I1Zuq6)
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
                'aria-label': C.NW.string(C.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(o.xJW, {
            title: C.NW.string(C.t['sqUm+v']),
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
        { mediaEngineContext: n, speaking: l = !1 } = e,
        {
            inputVolume: u,
            outputVolume: c,
            inputDeviceId: x,
            outputDeviceId: N,
            inputMode: W,
            shortcut: Z,
            vadThreshold: A,
            vadAutoThreshold: D,
            delay: O
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
        B = (0, g.Z)(),
        I = (0, m.Z)(),
        S = a().first(B),
        F = null != S && S.disabled,
        k = a().first(I),
        R = null != k && k.disabled,
        w = [
            {
                value: V.pM4.VOICE_ACTIVITY,
                name: C.NW.string(C.t.cHCEOD)
            },
            {
                value: V.pM4.PUSH_TO_TALK,
                name: C.NW.string(C.t.Q8gkVF)
            }
        ];
    return (
        (t =
            W === V.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(o.xJW, {
                              title: C.NW.string(C.t.YkDjVF),
                              className: v.marginBottom20,
                              children: (0, i.jsx)(h.Z, {
                                  defaultValue: Z,
                                  onChange: (e) => d.Z.setMode(W, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(o.xJW, {
                              className: v.marginBottom8,
                              children: [
                                  (0, i.jsx)(o.vwX, {
                                      id: b,
                                      children: C.NW.string(C.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(o.iRW, {
                                      initialValue: O,
                                      onValueChange: (e) => d.Z.setMode(W, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: V.qhL,
                                      'aria-labelledby': b
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(f, {
                      speaking: l,
                      inputMode: W,
                      threshold: A,
                      autoThreshold: D,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
                              W,
                              {
                                  threshold: e,
                                  autoThreshold: t
                              },
                              n
                          )
                  })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: C.NW.string(C.t.hHMYbW),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(o.q4e, {
                        value: x,
                        onChange: (e) => d.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: a().map(B, (e) => {
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
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            id: T,
                            children: C.NW.string(C.t.OX2Bnp)
                        }),
                        (0, i.jsx)(o.iRW, {
                            initialValue: (0, j.P)(u),
                            asValueChanges: (e) => d.Z.setInputVolume((0, j.A)(e)),
                            'aria-labelledby': T
                        })
                    ]
                }),
                (0, i.jsx)(o.xJW, {
                    title: C.NW.string(C.t.dl18zc),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(o.q4e, {
                        value: N,
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
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            id: M,
                            children: C.NW.string(C.t.eATD2N)
                        }),
                        (0, i.jsx)(o.iRW, {
                            initialValue: (0, j.P)(c),
                            maxValue: 200,
                            asValueChanges: (e) => d.Z.setOutputVolume((0, j.A)(e)),
                            'aria-labelledby': M
                        })
                    ]
                }),
                (0, i.jsx)(o.xJW, {
                    title: C.NW.string(C.t['pS+K2N']),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return d.Z.setMode(t, {}, n);
                        },
                        options: w,
                        value: W
                    })
                }),
                t
            ]
        })
    );
}
function D(e) {
    var t;
    return (
        (0, x.Z)(() => {
            null != V.e3s && e.onClose();
        }),
        (0, i.jsxs)(o.Y0X, {
            transitionState: e.transitionState,
            'aria-label': C.NW.string(C.t.NiTd0d),
            children: [
                (0, i.jsxs)(o.xBx, {
                    children: [
                        (0, i.jsxs)(u.Z.Child, {
                            children: [
                                (0, i.jsx)(o.vwX, {
                                    tag: 'h1',
                                    className: v.marginReset,
                                    children: C.NW.string(C.t.NiTd0d)
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    className: W.title,
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
                (0, i.jsx)(o.hzk, { children: (0, i.jsx)(A, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : N.Yn.DEFAULT }) })
            ]
        })
    );
}
