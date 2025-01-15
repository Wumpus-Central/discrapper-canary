n.d(t, {
    Z: function () {
        return S;
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
    u = n(600164),
    m = n(687058),
    g = n(253052),
    h = n(463395),
    p = n(131951),
    x = n(210887),
    f = n(962100),
    _ = n(65154),
    E = n(388032),
    C = n(481336),
    T = n(275477);
function S() {
    let e, t;
    let { analyticsLocations: r } = (0, d.ZP)(),
        S = (0, a.e7)([x.Z], () => x.Z.theme),
        {
            canSetInputDevice: b,
            canSetOutputDevice: I,
            inputDeviceId: N,
            outputDeviceId: v
        } = (0, a.cj)([p.Z], () => ({
            canSetInputDevice: p.Z.supports(_.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: p.Z.supports(_.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: p.Z.getInputDeviceId(),
            outputDeviceId: p.Z.getOutputDeviceId()
        })),
        A = (0, m.Z)(),
        j = (0, g.Z)();
    !b &&
        (e = (0, i.jsx)(o.FormText, {
            type: o.FormText.Types.DESCRIPTION,
            className: T.marginTop8,
            children: E.intl.format(E.t['1iK6UV'], { onDownloadClick: () => (0, f.y)('Help Text Input Devices') })
        })),
        !I &&
            (t = (0, i.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: T.marginTop8,
                children: E.intl.format(E.t.Ow0dbG, { onDownloadClick: () => (0, f.y)('Help Text Output Devices') })
            }));
    let O = s()(A).values().first(),
        R = null != O ? O.disabled : null != e,
        P = s()(j).values().first(),
        y = null != P ? P.disabled : null != t;
    function B(e) {
        let t,
            { label: r, value: s } = e;
        if (h.Z.isCertified(s)) {
            let e = (0, l.ap)(S) ? n(561259) : n(887695);
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
                        children: h.Z.getCertifiedDeviceName(s, r)
                    }),
                    t
                ]
            },
            s
        );
    }
    function D(e) {
        return B(e[0]);
    }
    return (0, i.jsxs)(u.Z, {
        className: T.marginBottom20,
        children: [
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: T.marginBottom8,
                        children: E.intl.string(E.t.hHMYbW)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: N,
                        onChange: (e) =>
                            c.Z.setInputDevice(e, {
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
                        isDisabled: R,
                        renderOptionValue: D,
                        renderOptionLabel: B
                    }),
                    e
                ]
            }),
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: T.marginBottom8,
                        children: E.intl.string(E.t.dl18zc)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: v,
                        onChange: (e) =>
                            c.Z.setOutputDevice(e, {
                                location: 'Settings',
                                analyticsLocations: r
                            }),
                        options: s().map(j, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: y,
                        renderOptionValue: D,
                        renderOptionLabel: B
                    }),
                    t
                ]
            })
        ]
    });
}
