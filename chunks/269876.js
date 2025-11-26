n.d(t, {
    Kq: () => O,
    NP: () => v,
    ZP: () => T,
    t8: () => I,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
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
    let [e, t] = i.useState(-100),
        [n, r] = i.useState(!1);
    function a(e, n) {
        t(e), r((n & h.Dg.VOICE) === h.Dg.VOICE);
    }
    return (
        i.useEffect(() => {
            let e = new c.V7();
            return (
                e.start(1000, () => {
                    p.Z.getMediaEngine().on(l.aB.VoiceActivity, a), e.stop();
                }),
                () => {
                    p.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, a), e.stop();
                }
            );
        }, []),
        {
            volume: e,
            isSpeaking: n,
        }
    );
}
function v(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: a, ariaLabelledBy: s } = e;
    return (0, r.jsx)("div", {
        className: o()(g.inputSensitivitySlider, n),
        id: i,
        "aria-describedby": a,
        "aria-labelledby": s,
        children: (0, r.jsx)("div", { className: o()(g.inputSensitivityBar, g.sliderBar, { [g.speaking]: t }) }),
    });
}
function I(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: a } = e,
        { threshold: l, autoThreshold: c } = (0, s.cj)([p.Z], () => ({
            threshold: p.Z.getModeOptions().threshold,
            autoThreshold: p.Z.getModeOptions().autoThreshold,
        })),
        _ = (0, s.e7)([p.Z], () => p.Z.getMode());
    function h(e, t) {
        f.Z.setMode(_, {
            threshold: e,
            autoThreshold: t,
        });
    }
    return (0, r.jsx)("section", {
        className: o()(g.inputSensitivityToggle, g.manual),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": a,
        children: (0, r.jsx)(d.iRW, {
            initialValue: l + 100,
            onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: (e) => h(-((100 - e) * 1), c),
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
    });
}
function T() {
    let { threshold: e, autoThreshold: t } = (0, s.cj)([p.Z], () => ({
            threshold: p.Z.getModeOptions().threshold,
            autoThreshold: p.Z.getModeOptions().autoThreshold,
        })),
        { inputMode: n, automaticVADSupported: i } = (0, s.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            automaticVADSupported: p.Z.supports(h.AN.AUTOMATIC_VAD),
        })),
        { volume: a, isSpeaking: o } = O(),
        l = (0, s.e7)([p.Z], () => p.Z.isEnabled());
    function c(e, t) {
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
                    onChange: (t) => c(e, t),
                }),
            t
                ? (0, r.jsxs)("section", {
                      className: g.inputSensitivityToggle,
                      children: [
                          (0, r.jsx)(v, { isSpeaking: o }),
                          (0, r.jsx)(d.Text, {
                              variant: "text-md/normal",
                              className: b.marginBottom8,
                              children: m.intl.string(m.t.W3K5Im),
                          }),
                      ],
                  })
                : (0, r.jsx)(I, { volume: a }),
            !l &&
                (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.WARNING,
                    className: b.marginBottom8,
                    children: m.intl.format(m.t["O13I+O"], { onEnableClick: () => f.Z.enable(!0) }),
                }),
        ],
    });
}
