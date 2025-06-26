n.d(t, { Z: () => O });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(846027),
    c = n(906732),
    d = n(679613),
    u = n(72897),
    m = n(463395),
    g = n(131951),
    p = n(358085),
    h = n(210887),
    f = n(494620),
    b = n(962100),
    _ = n(65154),
    x = n(388032),
    E = n(209782),
    j = n(20493);
let C = p.isWindows() ? ['BTHENUM', 'BTHHFENUM'] : [];
function O() {
    let e,
        t,
        { analyticsLocations: p } = (0, c.ZP)(),
        O = (0, s.e7)([h.Z], () => h.Z.theme),
        {
            canSetInputDevice: S,
            canSetOutputDevice: v,
            inputDeviceId: T,
            outputDeviceId: I
        } = (0, s.cj)([g.Z], () => ({
            canSetInputDevice: g.Z.supports(_.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: g.Z.supports(_.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: g.Z.getInputDeviceId(),
            outputDeviceId: g.Z.getOutputDeviceId()
        })),
        { sortDevicesByFrecency: N } = (0, d._)({ location: 'UserSettingsDevices' }),
        y = (0, u.zX)({ sortDevicesByFrecency: N }),
        A = (0, u.rB)({ sortDevicesByFrecency: N }),
        P = r.useMemo(() => {
            let e = y.find((e) => e.id === T),
                t = A.find((e) => e.id === I),
                n = C.some((t) => {
                    var n;
                    return null == e || null == (n = e.hardwareId) ? void 0 : n.startsWith(t);
                }),
                i = C.some((e) => {
                    var n;
                    return null == t || null == (n = t.hardwareId) ? void 0 : n.startsWith(e);
                });
            return n && i && (null == e ? void 0 : e.containerId) != null && e.containerId === (null == t ? void 0 : t.containerId);
        }, [y, A, T, I]);
    S ||
        (e = (0, i.jsx)(a.R94, {
            type: a.R94.Types.DESCRIPTION,
            className: j.marginTop8,
            children: x.intl.format(x.t['1iK6UV'], { onDownloadClick: () => (0, b.y)('Help Text Input Devices') })
        })),
        v ||
            (t = (0, i.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                className: j.marginTop8,
                children: x.intl.format(x.t.Ow0dbG, { onDownloadClick: () => (0, b.y)('Help Text Output Devices') })
            }));
    let R = y[0],
        D = null != R ? R.disabled : null != e,
        Z = A[0],
        w = null != Z ? Z.disabled : null != t;
    function k(e) {
        let t,
            { label: r, value: s } = e;
        if (m.Z.isCertified(s)) {
            let e = (0, l.ap)(O) ? n(561259) : n(887695);
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
                        children: m.Z.getCertifiedDeviceName(s, r)
                    }),
                    t
                ]
            },
            s
        );
    }
    function L(e) {
        return k(e[0]);
    }
    return (0, i.jsxs)('div', {
        className: E.devices,
        children: [
            (0, i.jsxs)('div', {
                className: E.deviceColumns,
                children: [
                    (0, i.jsx)('div', {
                        className: E.column,
                        children: (0, i.jsxs)(a.xJW, {
                            title: x.intl.string(x.t.hHMYbW),
                            children: [
                                (0, i.jsx)(a.q4e, {
                                    value: T,
                                    onChange: (e) =>
                                        o.Z.setInputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: p
                                        }),
                                    options: y.map((e) => {
                                        let { id: t, name: n } = e;
                                        return {
                                            value: t,
                                            label: n
                                        };
                                    }),
                                    isDisabled: D,
                                    renderOptionValue: L,
                                    renderOptionLabel: k
                                }),
                                e
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: E.column,
                        children: (0, i.jsxs)(a.xJW, {
                            title: x.intl.string(x.t.dl18zc),
                            children: [
                                (0, i.jsx)(a.q4e, {
                                    value: I,
                                    onChange: (e) =>
                                        o.Z.setOutputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: p
                                        }),
                                    options: A.map((e) => {
                                        let { id: t, name: n } = e;
                                        return {
                                            value: t,
                                            label: n
                                        };
                                    }),
                                    isDisabled: w,
                                    renderOptionValue: L,
                                    renderOptionLabel: k
                                }),
                                t
                            ]
                        })
                    })
                ]
            }),
            P &&
                (0, i.jsx)(f.Z, {
                    look: f.z.WARNING,
                    children: x.intl.string(x.t.Ioz3g4)
                })
        ]
    });
}
