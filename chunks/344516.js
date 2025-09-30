n.d(t, { default: () => A }), n(388685);
var l = n(951288),
    i = n(647438),
    s = n(442837),
    a = n(538534),
    o = n(755721),
    r = n(481060),
    d = n(846027),
    h = n(825209),
    u = n(600164),
    c = n(313201),
    g = n(670863),
    p = n(382577),
    x = n(131951),
    j = n(36703),
    m = n(981631),
    V = n(65154),
    C = n(388032),
    T = n(476265),
    Z = n(197571);
function b(e, t, n) {
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
class v extends i.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, l.jsx)(c.FG, {
            children: (t) =>
                (0, l.jsxs)(u.Z, {
                    className: Z.marginBottom4,
                    children: [
                        (0, l.jsx)(r.vwX, {
                            tag: r.RB0.H3,
                            children: (0, l.jsx)("label", {
                                htmlFor: t,
                                children: C.intl.string(C.t.I1Zuq6),
                            }),
                        }),
                        (0, l.jsx)(o.T2, {
                            id: t,
                            checked: e,
                            onChange: this.handleAutoThresholdChange,
                        }),
                    ],
                }),
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, l.jsx)(r.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: C.intl.string(C.t["sqUm+v"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: Z.marginBottom20,
            children: (0, l.jsxs)(r.NIc, {
                label: C.intl.string(C.t["sqUm+v"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "handleAutoThresholdChange", (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            b(this, "handleSensitivityChange", (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function M(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: o,
            outputVolume: u,
            inputMode: c,
            shortcut: p,
            vadThreshold: T,
            vadAutoThreshold: Z,
            delay: b,
        } = (0, s.cj)([x.Z], () => ({
            inputVolume: x.Z.getInputVolume(),
            outputVolume: x.Z.getOutputVolume(),
            inputMode: x.Z.getMode(n),
            shortcut: x.Z.getModeOptions(n).shortcut,
            vadThreshold: x.Z.getModeOptions(n).threshold,
            vadAutoThreshold: x.Z.getModeOptions(n).autoThreshold,
            delay: x.Z.getModeOptions(n).delay,
        })),
        M = [
            {
                value: m.pM4.VOICE_ACTIVITY,
                name: C.intl.string(C.t.cHCEOD),
            },
            {
                value: m.pM4.PUSH_TO_TALK,
                name: C.intl.string(C.t.Q8gkVF),
            },
        ];
    return (
        (t =
            c === m.pM4.PUSH_TO_TALK
                ? (0, l.jsxs)(r.Kqy, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(r.NIc, {
                              label: C.intl.string(C.t.YkDjVF),
                              children: (0, l.jsx)(h.Z, {
                                  defaultValue: p,
                                  onChange: (e) => d.Z.setMode(c, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(r.iRW, {
                              label: C.intl.string(C.t.y0ShVl),
                              initialValue: b,
                              onValueChange: (e) => d.Z.setMode(c, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: m.qhL,
                          }),
                      ],
                  })
                : (0, l.jsx)(v, {
                      speaking: i,
                      inputMode: c,
                      threshold: T,
                      autoThreshold: Z,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
                              c,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, l.jsxs)(r.Kqy, {
            gap: 20,
            children: [
                (0, l.jsx)(g.j, {
                    label: C.intl.string(C.t.hHMYbW),
                    deviceType: V.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(r.iRW, {
                    label: C.intl.string(C.t.OX2Bnp),
                    initialValue: (0, j.P)(o),
                    asValueChanges: (e) => d.Z.setInputVolume((0, j.A)(e)),
                }),
                (0, l.jsx)(g.j, {
                    label: C.intl.string(C.t.dl18zc),
                    deviceType: V.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(r.iRW, {
                    label: C.intl.string(C.t.eATD2N),
                    initialValue: (0, j.P)(u),
                    maxValue: 200,
                    asValueChanges: (e) => d.Z.setOutputVolume((0, j.A)(e)),
                }),
                (0, l.jsx)(a.E, {
                    label: C.intl.string(C.t["pS+K2N"]),
                    onChange: (e) => d.Z.setMode(e, {}, n),
                    options: M,
                    value: c,
                }),
                t,
            ],
        })
    );
}
function A(e) {
    var t;
    return (
        (0, p.Z)(() => {
            null != m.e3s && e.onClose();
        }),
        (0, l.jsxs)(r.Y0X, {
            transitionState: e.transitionState,
            "aria-label": C.intl.string(C.t.NiTd0d),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, l.jsxs)(r.xBx, {
                    children: [
                        (0, l.jsxs)(u.Z.Child, {
                            children: [
                                (0, l.jsx)(r.vwX, {
                                    tag: "h1",
                                    className: Z.marginReset,
                                    children: C.intl.string(C.t.NiTd0d),
                                }),
                                (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    className: T.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, l.jsx)(u.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(r.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, l.jsx)(r.hzk, {
                    children: (0, l.jsx)(M, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : V.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
