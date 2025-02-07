n.d(t, { Z: () => T }), n(47120);
var i = n(200651);
n(192379);
var s = n(392711),
    r = n.n(s),
    l = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(687058),
    m = n(253052),
    h = n(463395),
    g = n(131951),
    _ = n(210887),
    x = n(962100),
    p = n(65154),
    E = n(388032),
    C = n(43824),
    f = n(232186);
function T() {
    let e, t;
    let { analyticsLocations: s } = (0, d.ZP)(),
        T = (0, l.e7)([_.Z], () => _.Z.theme),
        {
            canSetInputDevice: N,
            canSetOutputDevice: S,
            inputDeviceId: I,
            outputDeviceId: b
        } = (0, l.cj)([g.Z], () => ({
            canSetInputDevice: g.Z.supports(p.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: g.Z.supports(p.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: g.Z.getInputDeviceId(),
            outputDeviceId: g.Z.getOutputDeviceId()
        })),
        v = (0, u.Z)(),
        j = (0, m.Z)();
    N ||
        (e = (0, i.jsx)(o.R94, {
            type: o.R94.Types.DESCRIPTION,
            className: f.marginTop8,
            children: E.intl.format(E.t['1iK6UV'], { onDownloadClick: () => (0, x.y)('Help Text Input Devices') })
        })),
        S ||
            (t = (0, i.jsx)(o.R94, {
                type: o.R94.Types.DESCRIPTION,
                className: f.marginTop8,
                children: E.intl.format(E.t.Ow0dbG, { onDownloadClick: () => (0, x.y)('Help Text Output Devices') })
            }));
    let A = r()(v).values().first(),
        O = null != A ? A.disabled : null != e,
        R = r()(j).values().first(),
        P = null != R ? R.disabled : null != t;
    function D(e) {
        let t,
            { label: s, value: r } = e;
        if (h.Z.isCertified(r)) {
            let e = (0, a.ap)(T) ? n(561259) : n(887695);
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
                        children: h.Z.getCertifiedDeviceName(r, s)
                    }),
                    t
                ]
            },
            r
        );
    }
    function y(e) {
        return D(e[0]);
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
                            value: I,
                            onChange: (e) =>
                                c.Z.setInputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: s
                                }),
                            options: r().map(v, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            isDisabled: O,
                            renderOptionValue: y,
                            renderOptionLabel: D
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
                            value: b,
                            onChange: (e) =>
                                c.Z.setOutputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: s
                                }),
                            options: r().map(j, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            isDisabled: P,
                            renderOptionValue: y,
                            renderOptionLabel: D
                        }),
                        t
                    ]
                })
            })
        ]
    });
}
