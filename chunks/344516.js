n.d(t, { default: () => y }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    d = n(846027),
    h = n(825209),
    u = n(600164),
    c = n(313201),
    p = n(687058),
    g = n(253052),
    m = n(382577),
    b = n(131951),
    x = n(36703),
    f = n(981631),
    C = n(65154),
    _ = n(388032),
    v = n(395067),
    R = n(483938);
function j(e, t, n) {
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
let E = (0, c.hQ)(),
    D = (0, c.hQ)(),
    N = (0, c.hQ)();
class Z extends s.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(c.FG, {
            children: (t) =>
                (0, i.jsxs)(u.Z, {
                    className: R.marginBottom4,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            tag: a.RB0.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: _.intl.string(_.t.I1Zuq6)
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
                'aria-label': _.intl.string(_.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(a.xJW, {
            title: _.intl.string(_.t['sqUm+v']),
            className: R.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleAutoThresholdChange', (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            j(this, 'handleSensitivityChange', (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function O(e) {
    let t,
        { mediaEngineContext: n, speaking: l = !1 } = e,
        {
            inputVolume: u,
            outputVolume: c,
            inputDeviceId: m,
            outputDeviceId: C,
            inputMode: v,
            shortcut: j,
            vadThreshold: O,
            vadAutoThreshold: y,
            delay: I
        } = (0, o.cj)([b.Z], () => ({
            inputVolume: b.Z.getInputVolume(),
            outputVolume: b.Z.getOutputVolume(),
            inputDeviceId: b.Z.getInputDeviceId(),
            outputDeviceId: b.Z.getOutputDeviceId(),
            inputMode: b.Z.getMode(n),
            shortcut: b.Z.getModeOptions(n).shortcut,
            vadThreshold: b.Z.getModeOptions(n).threshold,
            vadAutoThreshold: b.Z.getModeOptions(n).autoThreshold,
            delay: b.Z.getModeOptions(n).delay
        })),
        V = (0, p.Z)(),
        T = (0, g.Z)(),
        M = r().first(V),
        k = null != M && M.disabled,
        w = r().first(T),
        A = null != w && w.disabled,
        B = [
            {
                value: f.pM4.VOICE_ACTIVITY,
                name: _.intl.string(_.t.cHCEOD)
            },
            {
                value: f.pM4.PUSH_TO_TALK,
                name: _.intl.string(_.t.Q8gkVF)
            }
        ];
    return (
        (t =
            v === f.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(a.xJW, {
                              title: _.intl.string(_.t.YkDjVF),
                              className: R.marginBottom20,
                              children: (0, i.jsx)(h.Z, {
                                  defaultValue: j,
                                  onChange: (e) => d.Z.setMode(v, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(a.xJW, {
                              className: R.marginBottom8,
                              children: [
                                  (0, i.jsx)(a.vwX, {
                                      id: E,
                                      children: _.intl.string(_.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(a.iRW, {
                                      initialValue: I,
                                      onValueChange: (e) => d.Z.setMode(v, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: f.qhL,
                                      'aria-labelledby': E
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(Z, {
                      speaking: l,
                      inputMode: v,
                      threshold: O,
                      autoThreshold: y,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
                              v,
                              {
                                  threshold: e,
                                  autoThreshold: t
                              },
                              n
                          )
                  })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t.hHMYbW),
                    className: R.marginBottom20,
                    children: (0, i.jsx)(a.q4e, {
                        value: m,
                        onChange: (e) => d.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: r().map(V, (e) => {
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
                    className: R.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: D,
                            children: _.intl.string(_.t.OX2Bnp)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, x.P)(u),
                            asValueChanges: (e) => d.Z.setInputVolume((0, x.A)(e)),
                            'aria-labelledby': D
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t.dl18zc),
                    className: R.marginBottom20,
                    children: (0, i.jsx)(a.q4e, {
                        value: C,
                        onChange: (e) => d.Z.setOutputDevice(e, { location: 'Voice Settings' }),
                        options: r().map(T, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: A
                    })
                }),
                (0, i.jsxs)(a.xJW, {
                    className: R.marginBottom20,
                    children: [
                        (0, i.jsx)(a.vwX, {
                            id: N,
                            children: _.intl.string(_.t.eATD2N)
                        }),
                        (0, i.jsx)(a.iRW, {
                            initialValue: (0, x.P)(c),
                            maxValue: 200,
                            asValueChanges: (e) => d.Z.setOutputVolume((0, x.A)(e)),
                            'aria-labelledby': N
                        })
                    ]
                }),
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t['pS+K2N']),
                    className: R.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return d.Z.setMode(t, {}, n);
                        },
                        options: B,
                        value: v
                    })
                }),
                t
            ]
        })
    );
}
function y(e) {
    var t;
    return (
        (0, m.Z)(() => {
            null != f.e3s && e.onClose();
        }),
        (0, i.jsxs)(a.Y0X, {
            transitionState: e.transitionState,
            'aria-label': _.intl.string(_.t.NiTd0d),
            children: [
                (0, i.jsxs)(a.xBx, {
                    children: [
                        (0, i.jsxs)(u.Z.Child, {
                            children: [
                                (0, i.jsx)(a.vwX, {
                                    tag: 'h1',
                                    className: R.marginReset,
                                    children: _.intl.string(_.t.NiTd0d)
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    className: v.title,
                                    children: e.title
                                })
                            ]
                        }),
                        (0, i.jsx)(u.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.olH, { onClick: e.onClose })
                        })
                    ]
                }),
                (0, i.jsx)(a.hzk, { children: (0, i.jsx)(O, { mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : C.Yn.DEFAULT }) })
            ]
        })
    );
}
