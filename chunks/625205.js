n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(392711),
    r = n.n(s),
    l = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(600164),
    m = n(687058),
    h = n(253052),
    g = n(463395),
    p = n(131951),
    x = n(210887),
    S = n(962100),
    T = n(65154),
    E = n(388032),
    C = n(43824),
    _ = n(232186);
function f() {
    let e, t;
    let { analyticsLocations: s } = (0, d.ZP)(),
        f = (0, l.e7)([x.Z], () => x.Z.theme),
        {
            canSetInputDevice: I,
            canSetOutputDevice: N,
            inputDeviceId: A,
            outputDeviceId: b
        } = (0, l.cj)([p.Z], () => ({
            canSetInputDevice: p.Z.supports(T.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: p.Z.supports(T.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: p.Z.getInputDeviceId(),
            outputDeviceId: p.Z.getOutputDeviceId()
        })),
        v = (0, m.Z)(),
        j = (0, h.Z)();
    !I &&
        (e = (0, i.jsx)(o.FormText, {
            type: o.FormText.Types.DESCRIPTION,
            className: _.marginTop8,
            children: E.intl.format(E.t['1iK6UV'], { onDownloadClick: () => (0, S.y)('Help Text Input Devices') })
        })),
        !N &&
            (t = (0, i.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: _.marginTop8,
                children: E.intl.format(E.t.Ow0dbG, { onDownloadClick: () => (0, S.y)('Help Text Output Devices') })
            }));
    let O = r()(v).values().first(),
        R = null != O ? O.disabled : null != e,
        P = r()(j).values().first(),
        D = null != P ? P.disabled : null != t;
    function y(e) {
        let t,
            { label: s, value: r } = e;
        if (g.Z.isCertified(r)) {
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
                        children: g.Z.getCertifiedDeviceName(r, s)
                    }),
                    t
                ]
            },
            r
        );
    }
    function B(e) {
        return y(e[0]);
    }
    return (0, i.jsxs)(u.Z, {
        className: _.marginBottom20,
        children: [
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: _.marginBottom8,
                        children: E.intl.string(E.t.hHMYbW)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: A,
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
                        isDisabled: R,
                        renderOptionValue: B,
                        renderOptionLabel: y
                    }),
                    e
                ]
            }),
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: _.marginBottom8,
                        children: E.intl.string(E.t.dl18zc)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
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
                        isDisabled: D,
                        renderOptionValue: B,
                        renderOptionLabel: y
                    }),
                    t
                ]
            })
        ]
    });
}
