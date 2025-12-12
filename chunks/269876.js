n.d(t, {
    Kq: () => O,
    NP: () => v,
    ZP: () => I,
    t8: () => S,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(46973),
    c = n(846519),
    u = n(692547),
    d = n(481060),
    f = n(846027),
    p = n(313201),
    _ = n(131951),
    m = n(65154),
    h = n(388032),
    g = n(192294),
    E = n(89079),
    b = n(197571);
let y = (0, p.hQ)();
function O() {
    let [e, t] = i.useState(-100),
        [n, r] = i.useState(!1);
    function o(e, n) {
        t(e), r((n & m.Dg.VOICE) === m.Dg.VOICE);
    }
    return (
        i.useEffect(() => {
            let e = new c.V7();
            return (
                e.start(1000, () => {
                    _.Z.getMediaEngine().on(l.aB.VoiceActivity, o), e.stop();
                }),
                () => {
                    _.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, o), e.stop();
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
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: o, ariaLabelledBy: s } = e;
    return (0, r.jsx)("div", {
        className: a()(g.inputSensitivitySlider, n),
        id: i,
        "aria-describedby": o,
        "aria-labelledby": s,
        children: (0, r.jsx)("div", { className: a()(g.inputSensitivityBar, g.sliderBar, { [g.speaking]: t }) }),
    });
}
function S(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: o } = e,
        { threshold: l, autoThreshold: c } = (0, s.cj)([_.Z], () => ({
            threshold: _.Z.getModeOptions().threshold,
            autoThreshold: _.Z.getModeOptions().autoThreshold,
        })),
        p = (0, s.e7)([_.Z], () => _.Z.getMode());
    function m(e, t) {
        f.Z.setMode(p, {
            threshold: e,
            autoThreshold: t,
        });
    }
    return (0, r.jsx)("section", {
        className: a()(g.inputSensitivityToggle, g.manual),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": o,
        children: (0, r.jsx)(d.iRW, {
            initialValue: l + 100,
            onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: (e) => m(-((100 - e) * 1), c),
            barStyles: { background: u.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: u.Z.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": y,
            children: (0, r.jsxs)("div", {
                className: a()(g.sliderBar, g.microphone, g.inputSensitivityBar, E.bar),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(g.fill, g.inputSensitivityBarFill),
                        style: { width: t + 100 + "%" },
                    }),
                    (0, r.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
function I() {
    let { threshold: e, autoThreshold: t } = (0, s.cj)([_.Z], () => ({
            threshold: _.Z.getModeOptions().threshold,
            autoThreshold: _.Z.getModeOptions().autoThreshold,
        })),
        { inputMode: n, automaticVADSupported: i } = (0, s.cj)([_.Z], () => ({
            inputMode: _.Z.getMode(),
            automaticVADSupported: _.Z.supports(m.AN.AUTOMATIC_VAD),
        })),
        { volume: o, isSpeaking: a } = O(),
        l = (0, s.e7)([_.Z], () => _.Z.isEnabled());
    function c(e, t) {
        f.Z.setMode(n, {
            threshold: e,
            autoThreshold: t,
        });
    }
    return (0, r.jsxs)(d.C3N, {
        label: h.intl.string(h.t["sqUm+k"]),
        className: g.sensitivity,
        children: [
            i &&
                (0, r.jsx)(d.rsf, {
                    label: h.intl.string(h.t.I1Zuq0),
                    checked: t,
                    onChange: (t) => c(e, t),
                }),
            t
                ? (0, r.jsxs)("section", {
                      className: g.inputSensitivityToggle,
                      children: [
                          (0, r.jsx)(v, { isSpeaking: a }),
                          (0, r.jsx)(d.Text, {
                              variant: "text-md/normal",
                              className: b.marginBottom8,
                              children: h.intl.string(h.t.W3K5Im),
                          }),
                      ],
                  })
                : (0, r.jsx)(S, { volume: o }),
            !l &&
                (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.WARNING,
                    className: b.marginBottom8,
                    children: h.intl.format(h.t["O13I+O"], { onEnableClick: () => f.Z.enable(!0) }),
                }),
        ],
    });
}
