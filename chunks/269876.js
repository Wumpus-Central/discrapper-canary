n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    m = n(846027),
    g = n(313201),
    h = n(131951),
    p = n(65154),
    x = n(388032),
    f = n(897237),
    E = n(587987),
    _ = n(652849),
    C = n(232186);
let T = (0, g.hQ)();
function S() {
    let [e, t] = r.useState(-100),
        [n, s] = r.useState(!1),
        { threshold: S, autoThreshold: b } = (0, l.cj)([h.Z], () => h.Z.getModeOptions()),
        {
            inputMode: I,
            automaticVADSupported: N,
            isEnabled: v
        } = (0, l.cj)([h.Z], () => ({
            inputMode: h.Z.getMode(),
            automaticVADSupported: h.Z.supports(p.AN.AUTOMATIC_VAD),
            isEnabled: h.Z.isEnabled()
        }));
    function A(e, n) {
        t(e), s((n & p.Dg.VOICE) === p.Dg.VOICE);
    }
    function j(e, t) {
        m.Z.setMode(I, {
            threshold: e,
            autoThreshold: t
        });
    }
    r.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                h.Z.getMediaEngine().on(o.aB.VoiceActivity, A), e.stop();
            }),
            () => {
                h.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, A), e.stop();
            }
        );
    }, []);
    let O = (0, i.jsx)('section', {
        className: a()(f.inputSensitivityToggle, f.manual),
        children: (0, i.jsx)(u.Slider, {
            initialValue: S + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => j(-((100 - e) * 1), b),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': T,
            children: (0, i.jsxs)('div', {
                className: a()(f.sliderBar, f.microphone, f.inputSensitivityBar, E.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: a()(f.fill, f.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        b &&
            (O = (0, i.jsxs)('section', {
                className: f.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: f.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: a()(f.inputSensitivityBar, f.sliderBar, { [f.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        className: C.marginBottom8,
                        children: x.intl.string(x.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.FormItem, {
            title: x.intl.string(x.t['sqUm+v']),
            titleId: T,
            className: f.sensitivity,
            children: [
                N &&
                    (0, i.jsx)(g.FG, {
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: a()(_.horizontal, C.marginBottom4),
                                children: [
                                    (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H3,
                                        className: C.marginReset,
                                        children: (0, i.jsx)('label', {
                                            htmlFor: e,
                                            children: x.intl.string(x.t.I1Zuq6)
                                        })
                                    }),
                                    (0, i.jsx)(u.Switch, {
                                        id: e,
                                        checked: b,
                                        onChange: (e) => j(S, e)
                                    })
                                ]
                            })
                    }),
                O,
                !v &&
                    (0, i.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        className: a()(f.inputDisabledWarning, C.marginBottom8),
                        children: x.intl.format(x.t['O13I+P'], { onEnableClick: () => m.Z.enable(!0) })
                    })
            ]
        })
    );
}
