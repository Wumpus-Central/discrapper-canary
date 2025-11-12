n.d(t, {
    B: () => O,
    Z: () => v,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(46973),
    c = n(846519),
    u = n(692547),
    d = n(481060),
    f = n(846027),
    _ = n(313201),
    p = n(131951),
    h = n(65154),
    m = n(388032),
    g = n(192294),
    E = n(89079),
    b = n(197571);
let y = (0, _.hQ)();
function O() {
    let e,
        [t, n] = i.useState(-100),
        [a, _] = i.useState(!1),
        { threshold: O, autoThreshold: v } = (0, s.cj)([p.Z], () => ({
            threshold: p.Z.getModeOptions().threshold,
            autoThreshold: p.Z.getModeOptions().autoThreshold,
        })),
        I = (0, s.e7)([p.Z], () => p.Z.getMode()),
        S = (0, s.e7)([p.Z], () => p.Z.isEnabled());
    function T(e, t) {
        n(e), _((t & h.Dg.VOICE) === h.Dg.VOICE);
    }
    function A(e, t) {
        f.Z.setMode(I, {
            threshold: e,
            autoThreshold: t,
        });
    }
    return (
        i.useEffect(() => {
            let e = new c.V7();
            return (
                e.start(1000, () => {
                    p.Z.getMediaEngine().on(l.aB.VoiceActivity, T), e.stop();
                }),
                () => {
                    p.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, T), e.stop();
                }
            );
        }, []),
        (e = v
            ? (0, r.jsxs)("section", {
                  className: g.inputSensitivityToggle,
                  children: [
                      (0, r.jsx)("div", {
                          className: g.inputSensitivitySlider,
                          children: (0, r.jsx)("div", {
                              className: o()(g.inputSensitivityBar, g.sliderBar, { [g.speaking]: a }),
                          }),
                      }),
                      (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: b.marginBottom8,
                          children: m.intl.string(m.t.W3K5Im),
                      }),
                  ],
              })
            : (0, r.jsx)("section", {
                  className: o()(g.inputSensitivityToggle, g.manual),
                  children: (0, r.jsx)(d.iRW, {
                      initialValue: O + 100,
                      onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
                      onValueChange: (e) => A(-((100 - e) * 1), v),
                      barStyles: { background: u.Z.unsafe_rawColors.GREEN_360.css },
                      fillStyles: { background: u.Z.unsafe_rawColors.YELLOW_300.css },
                      "aria-labelledby": y,
                      children: (0, r.jsxs)("div", {
                          className: o()(g.sliderBar, g.microphone, g.inputSensitivityBar, E.bar),
                          children: [
                              (0, r.jsx)("div", {
                                  className: o()(g.fill, g.inputSensitivityBarFill),
                                  style: { width: t + 100 + "%" },
                              }),
                              (0, r.jsx)("div", { className: "grow" }),
                          ],
                      }),
                  }),
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                e,
                !S &&
                    (0, r.jsx)(d.Wn, {
                        messageType: d.QYI.WARNING,
                        className: b.marginBottom8,
                        children: m.intl.format(m.t["O13I+O"], { onEnableClick: () => f.Z.enable(!0) }),
                    }),
            ],
        })
    );
}
function v() {
    let { threshold: e, autoThreshold: t } = (0, s.cj)([p.Z], () => ({
            threshold: p.Z.getModeOptions().threshold,
            autoThreshold: p.Z.getModeOptions().autoThreshold,
        })),
        { inputMode: n, automaticVADSupported: i } = (0, s.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            automaticVADSupported: p.Z.supports(h.AN.AUTOMATIC_VAD),
        }));
    function a(e, t) {
        f.Z.setMode(n, {
            threshold: e,
            autoThreshold: t,
        });
    }
    return (0, r.jsxs)(d.C3N, {
        label: m.intl.string(m.t["sqUm+k"]),
        className: g.sensitivity,
        children: [
            i &&
                (0, r.jsx)(d.rsf, {
                    label: m.intl.string(m.t.I1Zuq0),
                    checked: t,
                    onChange: (t) => a(e, t),
                }),
            (0, r.jsx)(O, {}),
        ],
    });
}
