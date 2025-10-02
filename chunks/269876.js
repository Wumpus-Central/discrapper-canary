n.d(t, { Z: () => v }), n(388685);
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
    g = n(558254),
    E = n(43404),
    b = n(465106),
    y = n(10198);
let O = (0, _.hQ)();
function v() {
    let [e, t] = i.useState(-100),
        [n, a] = i.useState(!1),
        { threshold: v, autoThreshold: I } = (0, s.cj)([p.Z], () => ({
            threshold: p.Z.getModeOptions().threshold,
            autoThreshold: p.Z.getModeOptions().autoThreshold,
        })),
        {
            inputMode: T,
            automaticVADSupported: S,
            isEnabled: A,
        } = (0, s.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            automaticVADSupported: p.Z.supports(h.AN.AUTOMATIC_VAD),
            isEnabled: p.Z.isEnabled(),
        }));
    function C(e, n) {
        t(e), a((n & h.Dg.VOICE) === h.Dg.VOICE);
    }
    function N(e, t) {
        f.Z.setMode(T, {
            threshold: e,
            autoThreshold: t,
        });
    }
    i.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                p.Z.getMediaEngine().on(l.aB.VoiceActivity, C), e.stop();
            }),
            () => {
                p.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, C), e.stop();
            }
        );
    }, []);
    let R = (0, r.jsx)("section", {
        className: o()(g.inputSensitivityToggle, g.manual),
        children: (0, r.jsx)(d.iRW, {
            initialValue: v + 100,
            onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: (e) => N(-((100 - e) * 1), I),
            barStyles: { background: u.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: u.Z.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": O,
            children: (0, r.jsxs)("div", {
                className: o()(g.sliderBar, g.microphone, g.inputSensitivityBar, E.bar),
                children: [
                    (0, r.jsx)("div", {
                        className: o()(g.fill, g.inputSensitivityBarFill),
                        style: { width: e + 100 + "%" },
                    }),
                    (0, r.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
    return (
        I &&
            (R = (0, r.jsxs)("section", {
                className: g.inputSensitivityToggle,
                children: [
                    (0, r.jsx)("div", {
                        className: g.inputSensitivitySlider,
                        children: (0, r.jsx)("div", {
                            className: o()(g.inputSensitivityBar, g.sliderBar, { [g.speaking]: n }),
                        }),
                    }),
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: y.marginBottom8,
                        children: m.intl.string(m.t.W3K5Ii),
                    }),
                ],
            })),
        (0, r.jsxs)(d.xJW, {
            title: m.intl.string(m.t["sqUm+v"]),
            titleId: O,
            className: g.sensitivity,
            children: [
                S &&
                    (0, r.jsx)(_.FG, {
                        children: (e) =>
                            (0, r.jsxs)("div", {
                                className: o()(b.horizontal, y.marginBottom4),
                                children: [
                                    (0, r.jsx)(d.vwX, {
                                        tag: d.RB0.H3,
                                        className: y.marginReset,
                                        children: (0, r.jsx)("label", {
                                            htmlFor: e,
                                            children: m.intl.string(m.t.I1Zuq6),
                                        }),
                                    }),
                                    (0, r.jsx)(d.rsf, {
                                        id: e,
                                        checked: I,
                                        onChange: (e) => N(v, e),
                                    }),
                                ],
                            }),
                    }),
                R,
                !A &&
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: o()(g.inputDisabledWarning, y.marginBottom8),
                        children: m.intl.format(m.t["O13I+P"], { onEnableClick: () => f.Z.enable(!0) }),
                    }),
            ],
        })
    );
}
