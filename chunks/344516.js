n.d(t, { default: () => S }), n(388685);
var l = n(951288),
    i = n(647438),
    s = n(442837),
    a = n(538534),
    o = n(19217),
    r = n(886025),
    d = n(755721),
    h = n(481060),
    u = n(846027),
    c = n(825209),
    g = n(600164),
    p = n(313201),
    x = n(670863),
    j = n(382577),
    m = n(131951),
    V = n(36703),
    C = n(981631),
    T = n(65154),
    Z = n(388032),
    b = n(476265),
    M = n(197571);
function v(e, t, n) {
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
class A extends i.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, l.jsx)(p.FG, {
            children: (t) =>
                (0, l.jsxs)(g.Z, {
                    className: M.marginBottom4,
                    children: [
                        (0, l.jsx)(h.vwX, {
                            tag: h.RB0.H3,
                            children: (0, l.jsx)("label", {
                                htmlFor: t,
                                children: Z.intl.string(Z.t.I1Zuq6),
                            }),
                        }),
                        (0, l.jsx)(d.T2, {
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
            return (0, l.jsx)(h.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: Z.intl.string(Z.t["sqUm+v"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsxs)(o.C, {
            label: Z.intl.string(Z.t["sqUm+v"]),
            className: M.marginBottom20,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "handleAutoThresholdChange", (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            v(this, "handleSensitivityChange", (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function O(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: o,
            outputVolume: d,
            inputMode: g,
            shortcut: p,
            vadThreshold: j,
            vadAutoThreshold: b,
            delay: M,
        } = (0, s.cj)([m.Z], () => ({
            inputVolume: m.Z.getInputVolume(),
            outputVolume: m.Z.getOutputVolume(),
            inputMode: m.Z.getMode(n),
            shortcut: m.Z.getModeOptions(n).shortcut,
            vadThreshold: m.Z.getModeOptions(n).threshold,
            vadAutoThreshold: m.Z.getModeOptions(n).autoThreshold,
            delay: m.Z.getModeOptions(n).delay,
        })),
        v = [
            {
                value: C.pM4.VOICE_ACTIVITY,
                name: Z.intl.string(Z.t.cHCEOD),
            },
            {
                value: C.pM4.PUSH_TO_TALK,
                name: Z.intl.string(Z.t.Q8gkVF),
            },
        ];
    return (
        (t =
            g === C.pM4.PUSH_TO_TALK
                ? (0, l.jsxs)(h.Kqy, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(r.N, {
                              label: Z.intl.string(Z.t.YkDjVF),
                              children: (0, l.jsx)(c.Z, {
                                  defaultValue: p,
                                  onChange: (e) => u.Z.setMode(g, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(h.iRW, {
                              label: Z.intl.string(Z.t.y0ShVl),
                              initialValue: M,
                              onValueChange: (e) => u.Z.setMode(g, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: C.qhL,
                          }),
                      ],
                  })
                : (0, l.jsx)(A, {
                      speaking: i,
                      inputMode: g,
                      threshold: j,
                      autoThreshold: b,
                      onThresholdChange: (e, t) =>
                          u.Z.setMode(
                              g,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, l.jsxs)(h.Kqy, {
            gap: 20,
            children: [
                (0, l.jsx)(x.j, {
                    label: Z.intl.string(Z.t.hHMYbW),
                    deviceType: T.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(h.iRW, {
                    label: Z.intl.string(Z.t.OX2Bnp),
                    initialValue: (0, V.P)(o),
                    asValueChanges: (e) => u.Z.setInputVolume((0, V.A)(e)),
                }),
                (0, l.jsx)(x.j, {
                    label: Z.intl.string(Z.t.dl18zc),
                    deviceType: T.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(h.iRW, {
                    label: Z.intl.string(Z.t.eATD2N),
                    initialValue: (0, V.P)(d),
                    maxValue: 200,
                    asValueChanges: (e) => u.Z.setOutputVolume((0, V.A)(e)),
                }),
                (0, l.jsx)(a.E, {
                    label: Z.intl.string(Z.t["pS+K2N"]),
                    onChange: (e) => u.Z.setMode(e, {}, n),
                    options: v,
                    value: g,
                }),
                t,
            ],
        })
    );
}
function S(e) {
    var t;
    return (
        (0, j.Z)(() => {
            null != C.e3s && e.onClose();
        }),
        (0, l.jsxs)(h.Y0X, {
            transitionState: e.transitionState,
            "aria-label": Z.intl.string(Z.t.NiTd0d),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, l.jsxs)(h.xBx, {
                    children: [
                        (0, l.jsxs)(g.Z.Child, {
                            children: [
                                (0, l.jsx)(h.vwX, {
                                    tag: "h1",
                                    className: M.marginReset,
                                    children: Z.intl.string(Z.t.NiTd0d),
                                }),
                                (0, l.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    className: b.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, l.jsx)(g.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(h.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, l.jsx)(h.hzk, {
                    children: (0, l.jsx)(O, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : T.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
