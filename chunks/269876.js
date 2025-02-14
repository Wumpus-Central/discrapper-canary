n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    m = n(846027),
    h = n(313201),
    g = n(131951),
    x = n(65154),
    _ = n(388032),
    p = n(575747),
    E = n(106722),
    C = n(179683),
    f = n(483938);
let T = (0, h.hQ)();
function N() {
    let [e, t] = s.useState(-100),
        [n, r] = s.useState(!1),
        { threshold: N, autoThreshold: S } = (0, a.cj)([g.Z], () => g.Z.getModeOptions()),
        {
            inputMode: I,
            automaticVADSupported: b,
            isEnabled: v
        } = (0, a.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            automaticVADSupported: g.Z.supports(x.AN.AUTOMATIC_VAD),
            isEnabled: g.Z.isEnabled()
        }));
    function j(e, n) {
        t(e), r((n & x.Dg.VOICE) === x.Dg.VOICE);
    }
    function A(e, t) {
        m.Z.setMode(I, {
            threshold: e,
            autoThreshold: t
        });
    }
    s.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                g.Z.getMediaEngine().on(o.aB.VoiceActivity, j), e.stop();
            }),
            () => {
                g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, j), e.stop();
            }
        );
    }, []);
    let O = (0, i.jsx)('section', {
        className: l()(p.inputSensitivityToggle, p.manual),
        children: (0, i.jsx)(u.iRW, {
            initialValue: N + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => A(-((100 - e) * 1), S),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': T,
            children: (0, i.jsxs)('div', {
                className: l()(p.sliderBar, p.microphone, p.inputSensitivityBar, E.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: l()(p.fill, p.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        S &&
            (O = (0, i.jsxs)('section', {
                className: p.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: p.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: l()(p.inputSensitivityBar, p.sliderBar, { [p.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: f.marginBottom8,
                        children: _.intl.string(_.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.xJW, {
            title: _.intl.string(_.t['sqUm+v']),
            titleId: T,
            className: p.sensitivity,
            children: [
                b &&
                    (0, i.jsx)(h.FG, {
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: l()(C.horizontal, f.marginBottom4),
                                children: [
                                    (0, i.jsx)(u.vwX, {
                                        tag: u.RB0.H3,
                                        className: f.marginReset,
                                        children: (0, i.jsx)('label', {
                                            htmlFor: e,
                                            children: _.intl.string(_.t.I1Zuq6)
                                        })
                                    }),
                                    (0, i.jsx)(u.rsf, {
                                        id: e,
                                        checked: S,
                                        onChange: (e) => A(N, e)
                                    })
                                ]
                            })
                    }),
                O,
                !v &&
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: l()(p.inputDisabledWarning, f.marginBottom8),
                        children: _.intl.format(_.t['O13I+P'], { onEnableClick: () => m.Z.enable(!0) })
                    })
            ]
        })
    );
}
