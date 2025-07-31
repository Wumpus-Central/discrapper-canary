(n.d(t, { Z: () => E }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    m = n(846027),
    p = n(313201),
    g = n(131951),
    h = n(65154),
    f = n(388032),
    b = n(979385),
    x = n(251574),
    _ = n(893354),
    j = n(20493);
let O = (0, p.hQ)();
function E() {
    let [e, t] = r.useState(-100),
        [n, s] = r.useState(!1),
        { threshold: E, autoThreshold: C } = (0, l.cj)([g.Z], () => ({
            threshold: g.Z.getModeOptions().threshold,
            autoThreshold: g.Z.getModeOptions().autoThreshold
        })),
        {
            inputMode: v,
            automaticVADSupported: S,
            isEnabled: T
        } = (0, l.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            automaticVADSupported: g.Z.supports(h.AN.AUTOMATIC_VAD),
            isEnabled: g.Z.isEnabled()
        }));
    function N(e, n) {
        (t(e), s((n & h.Dg.VOICE) === h.Dg.VOICE));
    }
    function I(e, t) {
        m.Z.setMode(v, {
            threshold: e,
            autoThreshold: t
        });
    }
    r.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                (g.Z.getMediaEngine().on(o.aB.VoiceActivity, N), e.stop());
            }),
            () => {
                (g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, N), e.stop());
            }
        );
    }, []);
    let y = (0, i.jsx)('section', {
        className: a()(b.inputSensitivityToggle, b.manual),
        children: (0, i.jsx)(u.iRW, {
            initialValue: E + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => I(-((100 - e) * 1), C),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': O,
            children: (0, i.jsxs)('div', {
                className: a()(b.sliderBar, b.microphone, b.inputSensitivityBar, x.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: a()(b.fill, b.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        C &&
            (y = (0, i.jsxs)('section', {
                className: b.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: b.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: a()(b.inputSensitivityBar, b.sliderBar, { [b.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: j.marginBottom8,
                        children: f.intl.string(f.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.xJW, {
            title: f.intl.string(f.t['sqUm+v']),
            titleId: O,
            className: b.sensitivity,
            children: [
                S &&
                    (0, i.jsx)(p.FG, {
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: a()(_.horizontal, j.marginBottom4),
                                children: [
                                    (0, i.jsx)(u.vwX, {
                                        tag: u.RB0.H3,
                                        className: j.marginReset,
                                        children: (0, i.jsx)('label', {
                                            htmlFor: e,
                                            children: f.intl.string(f.t.I1Zuq6)
                                        })
                                    }),
                                    (0, i.jsx)(u.rsf, {
                                        id: e,
                                        checked: C,
                                        onChange: (e) => I(E, e)
                                    })
                                ]
                            })
                    }),
                y,
                !T &&
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: a()(b.inputDisabledWarning, j.marginBottom8),
                        children: f.intl.format(f.t['O13I+P'], { onEnableClick: () => m.Z.enable(!0) })
                    })
            ]
        })
    );
}
