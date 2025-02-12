n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var s = n(392711),
    l = n.n(s),
    r = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(687058),
    h = n(253052),
    m = n(463395),
    g = n(131951),
    x = n(210887),
    _ = n(962100),
    p = n(65154),
    E = n(388032),
    C = n(170234),
    N = n(483938);
function f() {
    let e, t;
    let { analyticsLocations: s } = (0, d.ZP)(),
        f = (0, r.e7)([x.Z], () => x.Z.theme),
        {
            canSetInputDevice: I,
            canSetOutputDevice: T,
            inputDeviceId: S,
            outputDeviceId: j
        } = (0, r.cj)([g.Z], () => ({
            canSetInputDevice: g.Z.supports(p.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: g.Z.supports(p.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: g.Z.getInputDeviceId(),
            outputDeviceId: g.Z.getOutputDeviceId()
        })),
        v = (0, u.Z)(),
        b = (0, h.Z)();
    I ||
        (e = (0, i.jsx)(o.R94, {
            type: o.R94.Types.DESCRIPTION,
            className: N.marginTop8,
            children: E.intl.format(E.t['1iK6UV'], { onDownloadClick: () => (0, _.y)('Help Text Input Devices') })
        })),
        T ||
            (t = (0, i.jsx)(o.R94, {
                type: o.R94.Types.DESCRIPTION,
                className: N.marginTop8,
                children: E.intl.format(E.t.Ow0dbG, { onDownloadClick: () => (0, _.y)('Help Text Output Devices') })
            }));
    let A = l()(v).values().first(),
        O = null != A ? A.disabled : null != e,
        R = l()(b).values().first(),
        D = null != R ? R.disabled : null != t;
    function P(e) {
        let t,
            { label: s, value: l } = e;
        if (m.Z.isCertified(l)) {
            let e = (0, a.ap)(f) ? n(561259) : n(887695);
            t = (0, i.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: C.deviceOptionCertified
            });
        }
        return (0, i.jsxs)(
            'span',
            {
                className: C.deviceOption,
                children: [
                    (0, i.jsx)('span', {
                        className: C.deviceOptionLabel,
                        children: m.Z.getCertifiedDeviceName(l, s)
                    }),
                    t
                ]
            },
            l
        );
    }
    function y(e) {
        return P(e[0]);
    }
    return (0, i.jsxs)('div', {
        className: C.devices,
        children: [
            (0, i.jsx)('div', {
                className: C.column,
                children: (0, i.jsxs)(o.xJW, {
                    title: E.intl.string(E.t.hHMYbW),
                    children: [
                        (0, i.jsx)(o.q4e, {
                            value: S,
                            onChange: (e) =>
                                c.Z.setInputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: s
                                }),
                            options: l().map(v, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            isDisabled: O,
                            renderOptionValue: y,
                            renderOptionLabel: P
                        }),
                        e
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: C.column,
                children: (0, i.jsxs)(o.xJW, {
                    title: E.intl.string(E.t.dl18zc),
                    children: [
                        (0, i.jsx)(o.q4e, {
                            value: j,
                            onChange: (e) =>
                                c.Z.setOutputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: s
                                }),
                            options: l().map(b, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            isDisabled: D,
                            renderOptionValue: y,
                            renderOptionLabel: P
                        }),
                        t
                    ]
                })
            })
        ]
    });
}
