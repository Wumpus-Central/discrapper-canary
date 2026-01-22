n.d(t, {
    Kq: () => O,
    NP: () => v,
    ZP: () => I,
    t8: () => S,
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
    p = n(313201),
    _ = n(131951),
    h = n(65154),
    m = n(388032),
    g = n(948913),
    E = n(440326),
    b = n(478411);
let y = (0, p.hQ)();
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
                    _.Z.getMediaEngine().on(l.aB.VoiceActivity, a), e.stop();
                }),
                () => {
                    _.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, a), e.stop();
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
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: a, ariaLabelledBy: s, disabled: l } = e;
    return (0, r.jsx)("div", {
        className: o()(g.inputSensitivitySlider, n),
        id: i,
        "aria-describedby": a,
        "aria-labelledby": s,
        children: (0, r.jsx)("div", {
            className: o()(g.inputSensitivityBar, g.sliderBar, {
                [g.speaking]: t && !l,
                [g.disabled]: l,
            }),
        }),
    });
}
function S(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: a, disabled: l } = e,
        { threshold: c, autoThreshold: p } = (0, s.cj)([_.Z], () => ({
            threshold: _.Z.getModeOptions().threshold,
            autoThreshold: _.Z.getModeOptions().autoThreshold,
        })),
        h = (0, s.e7)([_.Z], () => _.Z.getMode());
    function m(e, t) {
        f.Z.setMode(h, {
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
            initialValue: c + 100,
            onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: (e) => m(-((100 - e) * 1), p),
            barStyles: { background: u.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: u.Z.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": y,
            disabled: l,
            children: (0, r.jsxs)("div", {
                className: o()(g.sliderBar, g.microphone, g.inputSensitivityBar, E.bar),
                children: [
                    (0, r.jsx)("div", {
                        className: o()(g.fill, g.inputSensitivityBarFill),
                        style: { width: l ? 0 : t + 100 + "%" },
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
            automaticVADSupported: _.Z.supports(h.AN.AUTOMATIC_VAD),
        })),
        { volume: a, isSpeaking: o } = O(),
        l = (0, s.e7)([_.Z], () => _.Z.isEnabled());
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
                : (0, r.jsx)(S, { volume: a }),
            !l &&
                (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.WARNING,
                    className: b.marginBottom8,
                    children: m.intl.format(m.t["O13I+O"], { onEnableClick: () => f.Z.enable(!0) }),
                }),
        ],
    });
}
