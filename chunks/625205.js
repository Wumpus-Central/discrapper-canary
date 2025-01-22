n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    s = n.n(r),
    a = n(442837),
    l = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(687058),
    m = n(253052),
    g = n(463395),
    h = n(131951),
    p = n(210887),
    x = n(962100),
    f = n(65154),
    _ = n(388032),
    E = n(43824),
    C = n(232186);
function T() {
    let e, t;
    let { analyticsLocations: r } = (0, d.ZP)(),
        T = (0, a.e7)([p.Z], () => p.Z.theme),
        {
            canSetInputDevice: S,
            canSetOutputDevice: b,
            inputDeviceId: I,
            outputDeviceId: N
        } = (0, a.cj)([h.Z], () => ({
            canSetInputDevice: h.Z.supports(f.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: h.Z.supports(f.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: h.Z.getInputDeviceId(),
            outputDeviceId: h.Z.getOutputDeviceId()
        })),
        v = (0, u.Z)(),
        A = (0, m.Z)();
    !S &&
        (e = (0, i.jsx)(o.FormText, {
            type: o.FormText.Types.DESCRIPTION,
            className: C.marginTop8,
            children: _.intl.format(_.t['1iK6UV'], { onDownloadClick: () => (0, x.y)('Help Text Input Devices') })
        })),
        !b &&
            (t = (0, i.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: C.marginTop8,
                children: _.intl.format(_.t.Ow0dbG, { onDownloadClick: () => (0, x.y)('Help Text Output Devices') })
            }));
    let j = s()(v).values().first(),
        O = null != j ? j.disabled : null != e,
        R = s()(A).values().first(),
        P = null != R ? R.disabled : null != t;
    function D(e) {
        let t,
            { label: r, value: s } = e;
        if (g.Z.isCertified(s)) {
            let e = (0, l.ap)(T) ? n(561259) : n(887695);
            t = (0, i.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: E.deviceOptionCertified
            });
        }
        return (0, i.jsxs)(
            'span',
            {
                className: E.deviceOption,
                children: [
                    (0, i.jsx)('span', {
                        className: E.deviceOptionLabel,
                        children: g.Z.getCertifiedDeviceName(s, r)
                    }),
                    t
                ]
            },
            s
        );
    }
    function y(e) {
        return D(e[0]);
    }
    return (0, i.jsxs)('div', {
        className: E.devices,
        children: [
            (0, i.jsx)('div', {
                className: E.column,
                children: (0, i.jsxs)(o.FormItem, {
                    title: _.intl.string(_.t.hHMYbW),
                    children: [
                        (0, i.jsx)(o.SingleSelect, {
                            value: I,
                            onChange: (e) =>
                                c.Z.setInputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: r
                                }),
                            options: s().map(v, (e) => {
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
                className: E.column,
                children: (0, i.jsxs)(o.FormItem, {
                    title: _.intl.string(_.t.dl18zc),
                    children: [
                        (0, i.jsx)(o.SingleSelect, {
                            value: N,
                            onChange: (e) =>
                                c.Z.setOutputDevice(e, {
                                    location: 'Settings',
                                    analyticsLocations: r
                                }),
                            options: s().map(A, (e) => {
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
