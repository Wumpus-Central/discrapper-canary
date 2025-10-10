n.d(t, { default: () => M }), n(388685);
var l = n(951288),
    i = n(647438),
    s = n(442837),
    a = n(538534),
    o = n(481060),
    r = n(846027),
    d = n(825209),
    h = n(600164),
    u = n(670863),
    c = n(382577),
    g = n(131951),
    p = n(36703),
    x = n(981631),
    m = n(65154),
    V = n(388032),
    j = n(476265),
    C = n(197571);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class b extends i.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, l.jsx)(h.Z, {
            className: C.marginBottom4,
            children: (0, l.jsx)(o.rsf, {
                label: V.intl.string(V.t.I1Zuq6),
                checked: e,
                onChange: this.handleAutoThresholdChange,
            }),
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, l.jsx)(o.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: V.intl.string(V.t["sqUm+v"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: C.marginBottom20,
            children: (0, l.jsxs)(o.gNt, {
                label: V.intl.string(V.t["sqUm+v"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            T(this, "handleAutoThresholdChange", (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            T(this, "handleSensitivityChange", (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function Z(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: h,
            outputVolume: c,
            inputMode: j,
            shortcut: C,
            vadThreshold: T,
            vadAutoThreshold: Z,
            delay: M,
        } = (0, s.cj)([g.Z], () => ({
            inputVolume: g.Z.getInputVolume(),
            outputVolume: g.Z.getOutputVolume(),
            inputMode: g.Z.getMode(n),
            shortcut: g.Z.getModeOptions(n).shortcut,
            vadThreshold: g.Z.getModeOptions(n).threshold,
            vadAutoThreshold: g.Z.getModeOptions(n).autoThreshold,
            delay: g.Z.getModeOptions(n).delay,
        })),
        v = [
            {
                value: x.pM4.VOICE_ACTIVITY,
                name: V.intl.string(V.t.cHCEOD),
            },
            {
                value: x.pM4.PUSH_TO_TALK,
                name: V.intl.string(V.t.Q8gkVF),
            },
        ];
    return (
        (t =
            j === x.pM4.PUSH_TO_TALK
                ? (0, l.jsxs)(o.Kqy, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(o.gNt, {
                              label: V.intl.string(V.t.YkDjVF),
                              children: (0, l.jsx)(d.Z, {
                                  defaultValue: C,
                                  onChange: (e) => r.Z.setMode(j, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(o.iRW, {
                              label: V.intl.string(V.t.y0ShVl),
                              initialValue: M,
                              onValueChange: (e) => r.Z.setMode(j, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: x.qhL,
                          }),
                      ],
                  })
                : (0, l.jsx)(b, {
                      speaking: i,
                      inputMode: j,
                      threshold: T,
                      autoThreshold: Z,
                      onThresholdChange: (e, t) =>
                          r.Z.setMode(
                              j,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, l.jsxs)(o.Kqy, {
            gap: 20,
            children: [
                (0, l.jsx)(u.j, {
                    label: V.intl.string(V.t.hHMYbW),
                    deviceType: m.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.iRW, {
                    label: V.intl.string(V.t.OX2Bnp),
                    initialValue: (0, p.P)(h),
                    asValueChanges: (e) => r.Z.setInputVolume((0, p.A)(e)),
                }),
                (0, l.jsx)(u.j, {
                    label: V.intl.string(V.t.dl18zc),
                    deviceType: m.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.iRW, {
                    label: V.intl.string(V.t.eATD2N),
                    initialValue: (0, p.P)(c),
                    maxValue: 200,
                    asValueChanges: (e) => r.Z.setOutputVolume((0, p.A)(e)),
                }),
                (0, l.jsx)(a.E, {
                    label: V.intl.string(V.t["pS+K2N"]),
                    onChange: (e) => r.Z.setMode(e, {}, n),
                    options: v,
                    value: j,
                }),
                t,
            ],
        })
    );
}
function M(e) {
    var t;
    return (
        (0, c.Z)(() => {
            null != x.e3s && e.onClose();
        }),
        (0, l.jsxs)(o.Y0X, {
            transitionState: e.transitionState,
            "aria-label": V.intl.string(V.t.NiTd0d),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, l.jsxs)(o.xBx, {
                    children: [
                        (0, l.jsxs)(h.Z.Child, {
                            children: [
                                (0, l.jsx)(o.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: C.marginReset,
                                    children: V.intl.string(V.t.NiTd0d),
                                }),
                                (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    className: j.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, l.jsx)(h.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(o.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.hzk, {
                    children: (0, l.jsx)(Z, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : m.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
