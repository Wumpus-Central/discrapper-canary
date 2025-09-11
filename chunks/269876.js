n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(46973),
    c = n(846519),
    u = n(692547),
    d = n(755721),
    f = n(481060),
    _ = n(846027),
    p = n(313201),
    h = n(131951),
    m = n(65154),
    g = n(388032),
    E = n(558254),
    b = n(43404),
    y = n(465106),
    O = n(10198);
let v = (0, p.hQ)();
function I() {
    let [e, t] = i.useState(-100),
        [n, a] = i.useState(!1),
        { threshold: I, autoThreshold: T } = (0, s.cj)([h.Z], () => ({
            threshold: h.Z.getModeOptions().threshold,
            autoThreshold: h.Z.getModeOptions().autoThreshold,
        })),
        {
            inputMode: S,
            automaticVADSupported: A,
            isEnabled: C,
        } = (0, s.cj)([h.Z], () => ({
            inputMode: h.Z.getMode(),
            automaticVADSupported: h.Z.supports(m.AN.AUTOMATIC_VAD),
            isEnabled: h.Z.isEnabled(),
        }));
    function N(e, n) {
        t(e), a((n & m.Dg.VOICE) === m.Dg.VOICE);
    }
    function R(e, t) {
        _.Z.setMode(S, {
            threshold: e,
            autoThreshold: t,
        });
    }
    i.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                h.Z.getMediaEngine().on(l.aB.VoiceActivity, N), e.stop();
            }),
            () => {
                h.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, N), e.stop();
            }
        );
    }, []);
    let P = (0, r.jsx)("section", {
        className: o()(E.inputSensitivityToggle, E.manual),
        children: (0, r.jsx)(f.iRW, {
            initialValue: I + 100,
            onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: (e) => R(-((100 - e) * 1), T),
            barStyles: { background: u.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: u.Z.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": v,
            children: (0, r.jsxs)("div", {
                className: o()(E.sliderBar, E.microphone, E.inputSensitivityBar, b.bar),
                children: [
                    (0, r.jsx)("div", {
                        className: o()(E.fill, E.inputSensitivityBarFill),
                        style: { width: e + 100 + "%" },
                    }),
                    (0, r.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
    return (
        T &&
            (P = (0, r.jsxs)("section", {
                className: E.inputSensitivityToggle,
                children: [
                    (0, r.jsx)("div", {
                        className: E.inputSensitivitySlider,
                        children: (0, r.jsx)("div", {
                            className: o()(E.inputSensitivityBar, E.sliderBar, { [E.speaking]: n }),
                        }),
                    }),
                    (0, r.jsx)(f.R94, {
                        type: f.R94.Types.DESCRIPTION,
                        className: O.marginBottom8,
                        children: g.intl.string(g.t.W3K5Ii),
                    }),
                ],
            })),
        (0, r.jsxs)(f.xJW, {
            title: g.intl.string(g.t["sqUm+v"]),
            titleId: v,
            className: E.sensitivity,
            children: [
                A &&
                    (0, r.jsx)(p.FG, {
                        children: (e) =>
                            (0, r.jsxs)("div", {
                                className: o()(y.horizontal, O.marginBottom4),
                                children: [
                                    (0, r.jsx)(f.vwX, {
                                        tag: f.RB0.H3,
                                        className: O.marginReset,
                                        children: (0, r.jsx)("label", {
                                            htmlFor: e,
                                            children: g.intl.string(g.t.I1Zuq6),
                                        }),
                                    }),
                                    (0, r.jsx)(d.T2, {
                                        id: e,
                                        checked: T,
                                        onChange: (e) => R(I, e),
                                    }),
                                ],
                            }),
                    }),
                P,
                !C &&
                    (0, r.jsx)(f.R94, {
                        type: f.R94.Types.DESCRIPTION,
                        className: o()(E.inputDisabledWarning, O.marginBottom8),
                        children: g.intl.format(g.t["O13I+P"], { onEnableClick: () => _.Z.enable(!0) }),
                    }),
            ],
        })
    );
}
