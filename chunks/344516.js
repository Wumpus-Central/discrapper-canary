n.d(t, { default: () => B }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(442837),
    a = n(538534),
    r = n(755721),
    o = n(481060),
    d = n(846027),
    h = n(825209),
    c = n(600164),
    u = n(313201),
    g = n(670863),
    x = n(382577),
    m = n(131951),
    p = n(36703),
    j = n(981631),
    V = n(65154),
    C = n(388032),
    T = n(476265),
    v = n(197571);
function Z(e, t, n) {
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
let M = (0, u.hQ)(),
    b = (0, u.hQ)(),
    A = (0, u.hQ)();
class N extends l.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(u.FG, {
            children: (t) =>
                (0, i.jsxs)(c.Z, {
                    className: v.marginBottom4,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            tag: o.RB0.H3,
                            children: (0, i.jsx)("label", {
                                htmlFor: t,
                                children: C.intl.string(C.t.I1Zuq6),
                            }),
                        }),
                        (0, i.jsx)(r.T2, {
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
            return (0, i.jsx)(o.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                "aria-label": C.intl.string(C.t["sqUm+v"]),
            });
    }
    render() {
        return (0, i.jsxs)(o.xJW, {
            title: C.intl.string(C.t["sqUm+v"]),
            className: v.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()],
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, "handleAutoThresholdChange", (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            Z(this, "handleSensitivityChange", (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function O(e) {
    let t,
        { mediaEngineContext: n, speaking: r = !1 } = e,
        {
            inputVolume: c,
            outputVolume: u,
            inputMode: x,
            shortcut: T,
            vadThreshold: Z,
            vadAutoThreshold: O,
            delay: B,
        } = (0, s.cj)([m.Z], () => ({
            inputVolume: m.Z.getInputVolume(),
            outputVolume: m.Z.getOutputVolume(),
            inputMode: m.Z.getMode(n),
            shortcut: m.Z.getModeOptions(n).shortcut,
            vadThreshold: m.Z.getModeOptions(n).threshold,
            vadAutoThreshold: m.Z.getModeOptions(n).autoThreshold,
            delay: m.Z.getModeOptions(n).delay,
        })),
        S = [
            {
                value: j.pM4.VOICE_ACTIVITY,
                name: C.intl.string(C.t.cHCEOD),
            },
            {
                value: j.pM4.PUSH_TO_TALK,
                name: C.intl.string(C.t.Q8gkVF),
            },
        ];
    return (
        (t =
            x === j.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(o.xJW, {
                              title: C.intl.string(C.t.YkDjVF),
                              className: v.marginBottom20,
                              children: (0, i.jsx)(h.Z, {
                                  defaultValue: T,
                                  onChange: (e) => d.Z.setMode(x, { shortcut: e }, n),
                              }),
                          }),
                          (0, i.jsxs)("div", {
                              className: v.marginBottom8,
                              children: [
                                  (0, i.jsx)(o.vwX, {
                                      id: M,
                                      children: C.intl.string(C.t.y0ShVl),
                                  }),
                                  (0, i.jsx)(o.iRW, {
                                      initialValue: B,
                                      onValueChange: (e) => d.Z.setMode(x, { delay: e }, n),
                                      onValueRender: (e) =>
                                          e >= 1000
                                              ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                              : "".concat(e.toFixed(0), "ms"),
                                      maxValue: j.qhL,
                                      "aria-labelledby": M,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(N, {
                      speaking: r,
                      inputMode: x,
                      threshold: Z,
                      autoThreshold: O,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
                              x,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: C.intl.string(C.t.hHMYbW),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(g.j, {
                        deviceType: V.h7.AUDIO_INPUT,
                        location: "VoiceSettingsModal",
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            id: b,
                            children: C.intl.string(C.t.OX2Bnp),
                        }),
                        (0, i.jsx)(o.iRW, {
                            initialValue: (0, p.P)(c),
                            asValueChanges: (e) => d.Z.setInputVolume((0, p.A)(e)),
                            "aria-labelledby": b,
                        }),
                    ],
                }),
                (0, i.jsx)(o.xJW, {
                    title: C.intl.string(C.t.dl18zc),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(g.j, {
                        deviceType: V.h7.AUDIO_OUTPUT,
                        location: "VoiceSettingsModal",
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            id: A,
                            children: C.intl.string(C.t.eATD2N),
                        }),
                        (0, i.jsx)(o.iRW, {
                            initialValue: (0, p.P)(u),
                            maxValue: 200,
                            asValueChanges: (e) => d.Z.setOutputVolume((0, p.A)(e)),
                            "aria-labelledby": A,
                        }),
                    ],
                }),
                (0, i.jsx)(o.xJW, {
                    title: C.intl.string(C.t["pS+K2N"]),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.E, {
                        onChange: (e) => d.Z.setMode(e, {}, n),
                        options: S,
                        value: x,
                    }),
                }),
                t,
            ],
        })
    );
}
function B(e) {
    var t;
    return (
        (0, x.Z)(() => {
            null != j.e3s && e.onClose();
        }),
        (0, i.jsxs)(o.Y0X, {
            transitionState: e.transitionState,
            "aria-label": C.intl.string(C.t.NiTd0d),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, i.jsxs)(o.xBx, {
                    children: [
                        (0, i.jsxs)(c.Z.Child, {
                            children: [
                                (0, i.jsx)(o.vwX, {
                                    tag: "h1",
                                    className: v.marginReset,
                                    children: C.intl.string(C.t.NiTd0d),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    className: T.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(o.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, i.jsx)(o.hzk, {
                    children: (0, i.jsx)(O, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : V.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
