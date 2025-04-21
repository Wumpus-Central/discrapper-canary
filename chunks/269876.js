n.d(t, { Z: () => C }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    m = n(846027),
    g = n(313201),
    p = n(131951),
    h = n(65154),
    f = n(388032),
    b = n(979385),
    _ = n(251574),
    x = n(893354),
    E = n(20493);
let j = (0, g.hQ)();
function C() {
    let [e, t] = r.useState(-100),
        [n, s] = r.useState(!1),
        { threshold: C, autoThreshold: O } = (0, a.cj)([p.Z], () => p.Z.getModeOptions()),
        {
            inputMode: S,
            automaticVADSupported: v,
            isEnabled: T
        } = (0, a.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            automaticVADSupported: p.Z.supports(h.AN.AUTOMATIC_VAD),
            isEnabled: p.Z.isEnabled()
        }));
    function I(e, n) {
        t(e), s((n & h.Dg.VOICE) === h.Dg.VOICE);
    }
    function N(e, t) {
        m.Z.setMode(S, {
            threshold: e,
            autoThreshold: t
        });
    }
    r.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                p.Z.getMediaEngine().on(o.aB.VoiceActivity, I), e.stop();
            }),
            () => {
                p.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, I), e.stop();
            }
        );
    }, []);
    let y = (0, i.jsx)('section', {
        className: l()(b.inputSensitivityToggle, b.manual),
        children: (0, i.jsx)(u.iRW, {
            initialValue: C + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => N(-((100 - e) * 1), O),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': j,
            children: (0, i.jsxs)('div', {
                className: l()(b.sliderBar, b.microphone, b.inputSensitivityBar, _.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: l()(b.fill, b.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        O &&
            (y = (0, i.jsxs)('section', {
                className: b.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: b.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: l()(b.inputSensitivityBar, b.sliderBar, { [b.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: E.marginBottom8,
                        children: f.intl.string(f.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.xJW, {
            title: f.intl.string(f.t['sqUm+v']),
            titleId: j,
            className: b.sensitivity,
            children: [
                v &&
                    (0, i.jsx)(g.FG, {
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: l()(x.horizontal, E.marginBottom4),
                                children: [
                                    (0, i.jsx)(u.vwX, {
                                        tag: u.RB0.H3,
                                        className: E.marginReset,
                                        children: (0, i.jsx)('label', {
                                            htmlFor: e,
                                            children: f.intl.string(f.t.I1Zuq6)
                                        })
                                    }),
                                    (0, i.jsx)(u.rsf, {
                                        id: e,
                                        checked: O,
                                        onChange: (e) => N(C, e)
                                    })
                                ]
                            })
                    }),
                y,
                !T &&
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: l()(b.inputDisabledWarning, E.marginBottom8),
                        children: f.intl.format(f.t['O13I+P'], { onEnableClick: () => m.Z.enable(!0) })
                    })
            ]
        })
    );
}
