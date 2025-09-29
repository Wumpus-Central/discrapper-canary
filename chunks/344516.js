n.d(t, { default: () => O }), n(388685);
var l = n(951288),
    i = n(647438),
    s = n(442837),
    a = n(538534),
    o = n(886025),
    r = n(755721),
    d = n(481060),
    h = n(846027),
    u = n(825209),
    c = n(600164),
    g = n(313201),
    p = n(670863),
    x = n(382577),
    j = n(131951),
    m = n(36703),
    V = n(981631),
    C = n(65154),
    T = n(388032),
    Z = n(191809),
    b = n(10198);
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
class M extends i.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, l.jsx)(g.FG, {
            children: (t) =>
                (0, l.jsxs)(c.Z, {
                    className: b.marginBottom4,
                    children: [
                        (0, l.jsx)(d.vwX, {
                            tag: d.RB0.H3,
                            children: (0, l.jsx)("label", {
                                htmlFor: t,
                                children: T.intl.string(T.t.I1Zuq6),
                            }),
                        }),
                        (0, l.jsx)(r.T2, {
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
            return (0, l.jsx)(d.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: T.intl.string(T.t["sqUm+v"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: b.marginBottom20,
            children: (0, l.jsxs)(o.N, {
                label: T.intl.string(T.t["sqUm+v"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
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
function A(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: r,
            outputVolume: c,
            inputMode: g,
            shortcut: x,
            vadThreshold: Z,
            vadAutoThreshold: b,
            delay: v,
        } = (0, s.cj)([j.Z], () => ({
            inputVolume: j.Z.getInputVolume(),
            outputVolume: j.Z.getOutputVolume(),
            inputMode: j.Z.getMode(n),
            shortcut: j.Z.getModeOptions(n).shortcut,
            vadThreshold: j.Z.getModeOptions(n).threshold,
            vadAutoThreshold: j.Z.getModeOptions(n).autoThreshold,
            delay: j.Z.getModeOptions(n).delay,
        })),
        A = [
            {
                value: V.pM4.VOICE_ACTIVITY,
                name: T.intl.string(T.t.cHCEOD),
            },
            {
                value: V.pM4.PUSH_TO_TALK,
                name: T.intl.string(T.t.Q8gkVF),
            },
        ];
    return (
        (t =
            g === V.pM4.PUSH_TO_TALK
                ? (0, l.jsxs)(d.Kqy, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(o.N, {
                              label: T.intl.string(T.t.YkDjVF),
                              children: (0, l.jsx)(u.Z, {
                                  defaultValue: x,
                                  onChange: (e) => h.Z.setMode(g, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(d.iRW, {
                              label: T.intl.string(T.t.y0ShVl),
                              initialValue: v,
                              onValueChange: (e) => h.Z.setMode(g, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: V.qhL,
                          }),
                      ],
                  })
                : (0, l.jsx)(M, {
                      speaking: i,
                      inputMode: g,
                      threshold: Z,
                      autoThreshold: b,
                      onThresholdChange: (e, t) =>
                          h.Z.setMode(
                              g,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, l.jsxs)(d.Kqy, {
            gap: 20,
            children: [
                (0, l.jsx)(p.j, {
                    label: T.intl.string(T.t.hHMYbW),
                    deviceType: C.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.iRW, {
                    label: T.intl.string(T.t.OX2Bnp),
                    initialValue: (0, m.P)(r),
                    asValueChanges: (e) => h.Z.setInputVolume((0, m.A)(e)),
                }),
                (0, l.jsx)(p.j, {
                    label: T.intl.string(T.t.dl18zc),
                    deviceType: C.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.iRW, {
                    label: T.intl.string(T.t.eATD2N),
                    initialValue: (0, m.P)(c),
                    maxValue: 200,
                    asValueChanges: (e) => h.Z.setOutputVolume((0, m.A)(e)),
                }),
                (0, l.jsx)(a.E, {
                    label: T.intl.string(T.t["pS+K2N"]),
                    onChange: (e) => h.Z.setMode(e, {}, n),
                    options: A,
                    value: g,
                }),
                t,
            ],
        })
    );
}
function O(e) {
    var t;
    return (
        (0, x.Z)(() => {
            null != V.e3s && e.onClose();
        }),
        (0, l.jsxs)(d.Y0X, {
            transitionState: e.transitionState,
            "aria-label": T.intl.string(T.t.NiTd0d),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, l.jsxs)(d.xBx, {
                    children: [
                        (0, l.jsxs)(c.Z.Child, {
                            children: [
                                (0, l.jsx)(d.vwX, {
                                    tag: "h1",
                                    className: b.marginReset,
                                    children: T.intl.string(T.t.NiTd0d),
                                }),
                                (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    className: Z.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, l.jsx)(c.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(d.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, l.jsx)(d.hzk, {
                    children: (0, l.jsx)(A, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : C.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
