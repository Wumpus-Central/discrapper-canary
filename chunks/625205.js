n.d(t, { Z: () => C });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(846027),
    c = n(906732),
    d = n(72897),
    u = n(463395),
    m = n(131951),
    g = n(358085),
    p = n(210887),
    h = n(494620),
    f = n(962100),
    b = n(65154),
    _ = n(388032),
    x = n(209782),
    E = n(20493);
let j = g.isWindows() ? ['BTHENUM', 'BTHHFENUM'] : [];
function C() {
    let e,
        t,
        { analyticsLocations: g } = (0, c.ZP)(),
        C = (0, s.e7)([p.Z], () => p.Z.theme),
        {
            canSetInputDevice: O,
            canSetOutputDevice: S,
            inputDeviceId: v,
            outputDeviceId: T
        } = (0, s.cj)([m.Z], () => ({
            canSetInputDevice: m.Z.supports(b.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: m.Z.supports(b.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: m.Z.getInputDeviceId(),
            outputDeviceId: m.Z.getOutputDeviceId()
        })),
        I = (0, d.zX)({ location: 'UserSettingsDevices' }),
        N = (0, d.rB)({ location: 'UserSettingsDevices' }),
        y = r.useMemo(() => {
            let e = I.find((e) => e.id === v),
                t = N.find((e) => e.id === T),
                n = j.some((t) => {
                    var n;
                    return null == e || null == (n = e.hardwareId) ? void 0 : n.startsWith(t);
                }),
                i = j.some((e) => {
                    var n;
                    return null == t || null == (n = t.hardwareId) ? void 0 : n.startsWith(e);
                });
            return n && i && (null == e ? void 0 : e.containerId) != null && e.containerId === (null == t ? void 0 : t.containerId);
        }, [I, N, v, T]);
    O ||
        (e = (0, i.jsx)(a.R94, {
            type: a.R94.Types.DESCRIPTION,
            className: E.marginTop8,
            children: _.intl.format(_.t['1iK6UV'], { onDownloadClick: () => (0, f.y)('Help Text Input Devices') })
        })),
        S ||
            (t = (0, i.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                className: E.marginTop8,
                children: _.intl.format(_.t.Ow0dbG, { onDownloadClick: () => (0, f.y)('Help Text Output Devices') })
            }));
    let A = I[0],
        P = null != A ? A.disabled : null != e,
        R = N[0],
        D = null != R ? R.disabled : null != t;
    function Z(e) {
        let t,
            { label: r, value: s } = e;
        if (u.Z.isCertified(s)) {
            let e = (0, l.ap)(C) ? n(561259) : n(887695);
            t = (0, i.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: x.deviceOptionCertified
            });
        }
        return (0, i.jsxs)(
            'span',
            {
                className: x.deviceOption,
                children: [
                    (0, i.jsx)('span', {
                        className: x.deviceOptionLabel,
                        children: u.Z.getCertifiedDeviceName(s, r)
                    }),
                    t
                ]
            },
            s
        );
    }
    function w(e) {
        return Z(e[0]);
    }
    return (0, i.jsxs)('div', {
        className: x.devices,
        children: [
            (0, i.jsxs)('div', {
                className: x.deviceColumns,
                children: [
                    (0, i.jsx)('div', {
                        className: x.column,
                        children: (0, i.jsxs)(a.xJW, {
                            title: _.intl.string(_.t.hHMYbW),
                            children: [
                                (0, i.jsx)(a.q4e, {
                                    value: v,
                                    onChange: (e) =>
                                        o.Z.setInputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: g
                                        }),
                                    options: I.map((e) => {
                                        let { id: t, name: n } = e;
                                        return {
                                            value: t,
                                            label: n
                                        };
                                    }),
                                    isDisabled: P,
                                    renderOptionValue: w,
                                    renderOptionLabel: Z
                                }),
                                e
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: x.column,
                        children: (0, i.jsxs)(a.xJW, {
                            title: _.intl.string(_.t.dl18zc),
                            children: [
                                (0, i.jsx)(a.q4e, {
                                    value: T,
                                    onChange: (e) =>
                                        o.Z.setOutputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: g
                                        }),
                                    options: N.map((e) => {
                                        let { id: t, name: n } = e;
                                        return {
                                            value: t,
                                            label: n
                                        };
                                    }),
                                    isDisabled: D,
                                    renderOptionValue: w,
                                    renderOptionLabel: Z
                                }),
                                t
                            ]
                        })
                    })
                ]
            }),
            y &&
                (0, i.jsx)(h.Z, {
                    look: h.z.WARNING,
                    children: _.intl.string(_.t.Ioz3g4)
                })
        ]
    });
}
