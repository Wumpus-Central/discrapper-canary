n.d(t, { default: () => O }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(442837),
    a = n(755721),
    r = n(481060),
    o = n(846027),
    d = n(825209),
    h = n(600164),
    u = n(313201),
    c = n(670863),
    g = n(382577),
    x = n(131951),
    m = n(36703),
    p = n(981631),
    j = n(65154),
    V = n(388032),
    C = n(191809),
    T = n(10198);
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
let Z = (0, u.hQ)(),
    M = (0, u.hQ)(),
    b = (0, u.hQ)();
class A extends l.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(u.FG, {
            children: (t) =>
                (0, i.jsxs)(h.Z, {
                    className: T.marginBottom4,
                    children: [
                        (0, i.jsx)(r.vwX, {
                            tag: r.RB0.H3,
                            children: (0, i.jsx)("label", {
                                htmlFor: t,
                                children: V.intl.string(V.t.I1Zuq6),
                            }),
                        }),
                        (0, i.jsx)(a.T2, {
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
            return (0, i.jsx)(r.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                "aria-label": V.intl.string(V.t["sqUm+v"]),
            });
    }
    render() {
        return (0, i.jsxs)(r.xJW, {
            title: V.intl.string(V.t["sqUm+v"]),
            className: T.marginBottom8,
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
function N(e) {
    let t,
        { mediaEngineContext: n, speaking: h = !1 } = e,
        {
            inputVolume: u,
            outputVolume: g,
            inputMode: C,
            shortcut: v,
            vadThreshold: N,
            vadAutoThreshold: O,
            delay: B,
        } = (0, s.cj)([x.Z], () => ({
            inputVolume: x.Z.getInputVolume(),
            outputVolume: x.Z.getOutputVolume(),
            inputMode: x.Z.getMode(n),
            shortcut: x.Z.getModeOptions(n).shortcut,
            vadThreshold: x.Z.getModeOptions(n).threshold,
            vadAutoThreshold: x.Z.getModeOptions(n).autoThreshold,
            delay: x.Z.getModeOptions(n).delay,
        })),
        S = [
            {
                value: p.pM4.VOICE_ACTIVITY,
                name: V.intl.string(V.t.cHCEOD),
            },
            {
                value: p.pM4.PUSH_TO_TALK,
                name: V.intl.string(V.t.Q8gkVF),
            },
        ];
    return (
        (t =
            C === p.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(r.xJW, {
                              title: V.intl.string(V.t.YkDjVF),
                              className: T.marginBottom20,
                              children: (0, i.jsx)(d.Z, {
                                  defaultValue: v,
                                  onChange: (e) => o.Z.setMode(C, { shortcut: e }, n),
                              }),
                          }),
                          (0, i.jsxs)(r.xJW, {
                              className: T.marginBottom8,
                              children: [
                                  (0, i.jsx)(r.vwX, {
                                      id: Z,
                                      children: V.intl.string(V.t.y0ShVl),
                                  }),
                                  (0, i.jsx)(r.iRW, {
                                      initialValue: B,
                                      onValueChange: (e) => o.Z.setMode(C, { delay: e }, n),
                                      onValueRender: (e) =>
                                          e >= 1000
                                              ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                              : "".concat(e.toFixed(0), "ms"),
                                      maxValue: p.qhL,
                                      "aria-labelledby": Z,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(A, {
                      speaking: h,
                      inputMode: C,
                      threshold: N,
                      autoThreshold: O,
                      onThresholdChange: (e, t) =>
                          o.Z.setMode(
                              C,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(r.xJW, {
                    title: V.intl.string(V.t.hHMYbW),
                    className: T.marginBottom20,
                    children: (0, i.jsx)(c.j, {
                        deviceType: j.h7.AUDIO_INPUT,
                        location: "VoiceSettingsModal",
                    }),
                }),
                (0, i.jsxs)(r.xJW, {
                    className: T.marginBottom20,
                    children: [
                        (0, i.jsx)(r.vwX, {
                            id: M,
                            children: V.intl.string(V.t.OX2Bnp),
                        }),
                        (0, i.jsx)(r.iRW, {
                            initialValue: (0, m.P)(u),
                            asValueChanges: (e) => o.Z.setInputVolume((0, m.A)(e)),
                            "aria-labelledby": M,
                        }),
                    ],
                }),
                (0, i.jsx)(r.xJW, {
                    title: V.intl.string(V.t.dl18zc),
                    className: T.marginBottom20,
                    children: (0, i.jsx)(c.j, {
                        deviceType: j.h7.AUDIO_OUTPUT,
                        location: "VoiceSettingsModal",
                    }),
                }),
                (0, i.jsxs)(r.xJW, {
                    className: T.marginBottom20,
                    children: [
                        (0, i.jsx)(r.vwX, {
                            id: b,
                            children: V.intl.string(V.t.eATD2N),
                        }),
                        (0, i.jsx)(r.iRW, {
                            initialValue: (0, m.P)(g),
                            maxValue: 200,
                            asValueChanges: (e) => o.Z.setOutputVolume((0, m.A)(e)),
                            "aria-labelledby": b,
                        }),
                    ],
                }),
                (0, i.jsx)(r.xJW, {
                    title: V.intl.string(V.t["pS+K2N"]),
                    className: T.marginBottom20,
                    children: (0, i.jsx)(a.Gu, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return o.Z.setMode(t, {}, n);
                        },
                        options: S,
                        value: C,
                    }),
                }),
                t,
            ],
        })
    );
}
function O(e) {
    var t;
    return (
        (0, g.Z)(() => {
            null != p.e3s && e.onClose();
        }),
        (0, i.jsxs)(r.Y0X, {
            transitionState: e.transitionState,
            "aria-label": V.intl.string(V.t.NiTd0d),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, i.jsxs)(r.xBx, {
                    children: [
                        (0, i.jsxs)(h.Z.Child, {
                            children: [
                                (0, i.jsx)(r.vwX, {
                                    tag: "h1",
                                    className: T.marginReset,
                                    children: V.intl.string(V.t.NiTd0d),
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    className: C.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, i.jsx)(h.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(r.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, i.jsx)(r.hzk, {
                    children: (0, i.jsx)(N, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : j.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
