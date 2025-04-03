n.d(t, { Z: () => E }), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
    s = n.n(i),
    a = n(442837),
    l = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(687058),
    m = n(253052),
    g = n(463395),
    p = n(131951),
    h = n(210887),
    f = n(962100),
    b = n(65154),
    N = n(388032),
    x = n(209782),
    _ = n(20493);
function E() {
    let e,
        t,
        { analyticsLocations: i } = (0, d.ZP)(),
        E = (0, a.e7)([h.Z], () => h.Z.theme),
        {
            canSetInputDevice: j,
            canSetOutputDevice: O,
            inputDeviceId: C,
            outputDeviceId: S
        } = (0, a.cj)([p.Z], () => ({
            canSetInputDevice: p.Z.supports(b.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: p.Z.supports(b.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: p.Z.getInputDeviceId(),
            outputDeviceId: p.Z.getOutputDeviceId()
        })),
        v = (0, u.Z)(),
        T = (0, m.Z)();
    j ||
        (e = (0, r.jsx)(o.R94, {
            type: o.R94.Types.DESCRIPTION,
            className: _.marginTop8,
            children: N.NW.format(N.t['1iK6UV'], { onDownloadClick: () => (0, f.y)('Help Text Input Devices') })
        })),
        O ||
            (t = (0, r.jsx)(o.R94, {
                type: o.R94.Types.DESCRIPTION,
                className: _.marginTop8,
                children: N.NW.format(N.t.Ow0dbG, { onDownloadClick: () => (0, f.y)('Help Text Output Devices') })
            }));
    let I = s()(v).values().first(),
        y = null != I ? I.disabled : null != e,
        A = s()(T).values().first(),
        P = null != A ? A.disabled : null != t;
    function R(e) {
        let t,
            { label: i, value: s } = e;
        if (g.Z.isCertified(s)) {
            let e = (0, l.ap)(E) ? n(561259) : n(887695);
            t = (0, r.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: x.deviceOptionCertified
            });
        }
        return (0, r.jsxs)(
            'span',
            {
                className: x.deviceOption,
                children: [
                    (0, r.jsx)('span', {
                        className: x.deviceOptionLabel,
                        children: g.Z.getCertifiedDeviceName(s, i)
                    }),
                    t
                ]
            },
            s
        );
    }
    function D(e) {
        return R(e[0]);
    }
    return (0, r.jsxs)('div', {
        className: x.devices,
        children: [
            (0, r.jsx)('div', {
                className: x.column,
                children: (0, r.jsxs)(o.xJW, {
                    title: N.NW.string(N.t.hHMYbW),
                    children: [
                        (0, r.jsx)(o.q4e, {
                            value: C,
                            onChange: (e) =>
                                c.Z.setInputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: i
                                }),
                            options: s().map(v, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            isDisabled: y,
                            renderOptionValue: D,
                            renderOptionLabel: R
                        }),
                        e
                    ]
                })
            }),
            (0, r.jsx)('div', {
                className: x.column,
                children: (0, r.jsxs)(o.xJW, {
                    title: N.NW.string(N.t.dl18zc),
                    children: [
                        (0, r.jsx)(o.q4e, {
                            value: S,
                            onChange: (e) =>
                                c.Z.setOutputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: i
                                }),
                            options: s().map(T, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            }),
                            isDisabled: P,
                            renderOptionValue: D,
                            renderOptionLabel: R
                        }),
                        t
                    ]
                })
            })
        ]
    });
}
