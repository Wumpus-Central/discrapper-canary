n.r(t),
    n.d(t, {
        default: function () {
            return Z;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n.n(r),
    o = n(442837),
    a = n(481060),
    d = n(846027),
    u = n(825209),
    h = n(600164),
    c = n(313201),
    m = n(687058),
    g = n(253052),
    p = n(382577),
    b = n(131951),
    f = n(36703),
    C = n(981631),
    x = n(65154),
    v = n(388032),
    R = n(646156),
    _ = n(275477);
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
let D = (0, c.hQ)(),
    E = (0, c.hQ)(),
    I = (0, c.hQ)();
class N extends s.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(c.FG, {
            children: (t) =>
                (0, i.jsxs)(h.Z, {
                    className: _.marginBottom4,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            tag: a.FormTitleTags.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: v.intl.string(v.t.I1Zuq6)
                            })
                        }),
                        (0, i.jsx)(a.Switch, {
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
            return (0, i.jsx)(a.Slider, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                'aria-label': v.intl.string(v.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(a.FormItem, {
            title: v.intl.string(v.t['sqUm+v']),
            className: _.marginBottom8,
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
function T(e) {
    let t,
        { mediaEngineContext: n, speaking: r = !1 } = e,
        {
            inputVolume: h,
            outputVolume: c,
            inputDeviceId: p,
            outputDeviceId: x,
            inputMode: R,
            shortcut: j,
            vadThreshold: T,
            vadAutoThreshold: Z,
            delay: M
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
        O = (0, m.Z)(),
        y = (0, g.Z)(),
        V = l().first(O),
        F = null != V && V.disabled,
        S = l().first(y),
        B = null != S && S.disabled,
        A = [
            {
                value: C.pM4.VOICE_ACTIVITY,
                name: v.intl.string(v.t.cHCEOD)
            },
            {
                value: C.pM4.PUSH_TO_TALK,
                name: v.intl.string(v.t.Q8gkVF)
            }
        ];
    return (
        (t =
            R === C.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(a.FormItem, {
                              title: v.intl.string(v.t.YkDjVF),
                              className: _.marginBottom20,
                              children: (0, i.jsx)(u.Z, {
                                  defaultValue: j,
                                  onChange: (e) => d.Z.setMode(R, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(a.FormItem, {
                              className: _.marginBottom8,
                              children: [
                                  (0, i.jsx)(a.FormTitle, {
                                      id: D,
                                      children: v.intl.string(v.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(a.Slider, {
                                      initialValue: M,
                                      onValueChange: (e) => d.Z.setMode(R, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: C.qhL,
                                      'aria-labelledby': D
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(N, {
                      speaking: r,
                      inputMode: R,
                      threshold: T,
                      autoThreshold: Z,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
                              R,
                              {
                                  threshold: e,
                                  autoThreshold: t
                              },
                              n
                          )
                  })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.FormItem, {
                    title: v.intl.string(v.t.hHMYbW),
                    className: _.marginBottom20,
                    children: (0, i.jsx)(a.SingleSelect, {
                        value: p,
                        onChange: (e) => d.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: l().map(O, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: F
                    })
                }),
                (0, i.jsxs)(a.FormItem, {
                    className: _.marginBottom20,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            id: E,
                            children: v.intl.string(v.t.OX2Bnp)
                        }),
                        (0, i.jsx)(a.Slider, {
                            initialValue: (0, f.P)(h),
                            asValueChanges: (e) => d.Z.setInputVolume((0, f.A)(e)),
                            'aria-labelledby': E
                        })
                    ]
                }),
                (0, i.jsx)(a.FormItem, {
                    title: v.intl.string(v.t.dl18zc),
                    className: _.marginBottom20,
                    children: (0, i.jsx)(a.SingleSelect, {
                        value: x,
                        onChange: (e) => d.Z.setOutputDevice(e, { location: 'Voice Settings' }),
                        options: l().map(y, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: B
                    })
                }),
                (0, i.jsxs)(a.FormItem, {
                    className: _.marginBottom20,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            id: I,
                            children: v.intl.string(v.t.eATD2N)
                        }),
                        (0, i.jsx)(a.Slider, {
                            initialValue: (0, f.P)(c),
                            maxValue: 200,
                            asValueChanges: (e) => d.Z.setOutputVolume((0, f.A)(e)),
                            'aria-labelledby': I
                        })
                    ]
                }),
                (0, i.jsx)(a.FormItem, {
                    title: v.intl.string(v.t['pS+K2N']),
                    className: _.marginBottom20,
                    children: (0, i.jsx)(a.RadioGroup, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return d.Z.setMode(t, {}, n);
                        },
                        options: A,
                        value: R
                    })
                }),
                t
            ]
        })
    );
}
function Z(e) {
    var t;
    return (
        (0, p.Z)(() => {
            null != C.e3s && e.onClose();
        }),
        (0, i.jsxs)(a.ModalRoot, {
            transitionState: e.transitionState,
            'aria-label': v.intl.string(v.t.NiTd0d),
            children: [
                (0, i.jsxs)(a.ModalHeader, {
                    children: [
                        (0, i.jsxs)(h.Z.Child, {
                            children: [
                                (0, i.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: _.marginReset,
                                    children: v.intl.string(v.t.NiTd0d)
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    className: R.title,
                                    children: e.title
                                })
                            ]
                        }),
                        (0, i.jsx)(h.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.ModalCloseButton, { onClick: e.onClose })
                        })
                    ]
                }),
                (0, i.jsx)(a.ModalContent, { children: (0, i.jsx)(T, { mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : x.Yn.DEFAULT }) })
            ]
        })
    );
}
