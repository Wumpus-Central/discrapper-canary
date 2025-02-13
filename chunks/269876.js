n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    h = n(846027),
    m = n(313201),
    g = n(131951),
    x = n(65154),
    _ = n(388032),
    p = n(455655),
    E = n(106850),
    C = n(801194),
    N = n(814632);
let f = (0, m.hQ)();
function I() {
    let [e, t] = s.useState(-100),
        [n, l] = s.useState(!1),
        { threshold: I, autoThreshold: T } = (0, a.cj)([g.Z], () => g.Z.getModeOptions()),
        {
            inputMode: S,
            automaticVADSupported: j,
            isEnabled: v
        } = (0, a.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            automaticVADSupported: g.Z.supports(x.AN.AUTOMATIC_VAD),
            isEnabled: g.Z.isEnabled()
        }));
    function b(e, n) {
        t(e), l((n & x.Dg.VOICE) === x.Dg.VOICE);
    }
    function A(e, t) {
        h.Z.setMode(S, {
            threshold: e,
            autoThreshold: t
        });
    }
    s.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                g.Z.getMediaEngine().on(o.aB.VoiceActivity, b), e.stop();
            }),
            () => {
                g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, b), e.stop();
            }
        );
    }, []);
    let O = (0, i.jsx)('section', {
        className: r()(p.inputSensitivityToggle, p.manual),
        children: (0, i.jsx)(u.iRW, {
            initialValue: I + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => A(-((100 - e) * 1), T),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': f,
            children: (0, i.jsxs)('div', {
                className: r()(p.sliderBar, p.microphone, p.inputSensitivityBar, E.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: r()(p.fill, p.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        T &&
            (O = (0, i.jsxs)('section', {
                className: p.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: p.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: r()(p.inputSensitivityBar, p.sliderBar, { [p.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: N.marginBottom8,
                        children: _.intl.string(_.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.xJW, {
            title: _.intl.string(_.t['sqUm+v']),
            titleId: f,
            className: p.sensitivity,
            children: [
                j &&
                    (0, i.jsx)(m.FG, {
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: r()(C.horizontal, N.marginBottom4),
                                children: [
                                    (0, i.jsx)(u.vwX, {
                                        tag: u.RB0.H3,
                                        className: N.marginReset,
                                        children: (0, i.jsx)('label', {
                                            htmlFor: e,
                                            children: _.intl.string(_.t.I1Zuq6)
                                        })
                                    }),
                                    (0, i.jsx)(u.rsf, {
                                        id: e,
                                        checked: T,
                                        onChange: (e) => A(I, e)
                                    })
                                ]
                            })
                    }),
                O,
                !v &&
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: r()(p.inputDisabledWarning, N.marginBottom8),
                        children: _.intl.format(_.t['O13I+P'], { onEnableClick: () => h.Z.enable(!0) })
                    })
            ]
        })
    );
}
