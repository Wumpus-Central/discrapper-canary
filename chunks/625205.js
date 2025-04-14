n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(846027),
    u = n(906732),
    m = n(687058),
    g = n(253052),
    p = n(463395),
    h = n(131951),
    f = n(358085),
    b = n(210887),
    N = n(494620),
    x = n(962100),
    _ = n(65154),
    E = n(388032),
    j = n(209782),
    O = n(20493);
let C = f.isWindows() ? ['BTHENUM', 'BTHHFENUM'] : [];
function S() {
    let e,
        t,
        { analyticsLocations: s } = (0, u.ZP)(),
        f = (0, l.e7)([b.Z], () => b.Z.theme),
        {
            canSetInputDevice: S,
            canSetOutputDevice: v,
            inputDeviceId: T,
            outputDeviceId: I
        } = (0, l.cj)([h.Z], () => ({
            canSetInputDevice: h.Z.supports(_.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: h.Z.supports(_.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: h.Z.getInputDeviceId(),
            outputDeviceId: h.Z.getOutputDeviceId()
        })),
        y = (0, m.Z)(),
        A = (0, g.Z)(),
        P = i.useMemo(() => {
            let e = a()(y).find((e) => e.id === T),
                t = a()(A).find((e) => e.id === I),
                n = C.some((t) => {
                    var n;
                    return null == e || null == (n = e.hardwareId) ? void 0 : n.startsWith(t);
                }),
                r = C.some((e) => {
                    var n;
                    return null == t || null == (n = t.hardwareId) ? void 0 : n.startsWith(e);
                });
            return n && r && (null == e ? void 0 : e.containerId) != null && e.containerId === (null == t ? void 0 : t.containerId);
        }, [y, A, T, I]);
    S ||
        (e = (0, r.jsx)(c.R94, {
            type: c.R94.Types.DESCRIPTION,
            className: O.marginTop8,
            children: E.NW.format(E.t['1iK6UV'], { onDownloadClick: () => (0, x.y)('Help Text Input Devices') })
        })),
        v ||
            (t = (0, r.jsx)(c.R94, {
                type: c.R94.Types.DESCRIPTION,
                className: O.marginTop8,
                children: E.NW.format(E.t.Ow0dbG, { onDownloadClick: () => (0, x.y)('Help Text Output Devices') })
            }));
    let R = a()(y).values().first(),
        D = null != R ? R.disabled : null != e,
        Z = a()(A).values().first(),
        w = null != Z ? Z.disabled : null != t;
    function k(e) {
        let t,
            { label: i, value: s } = e;
        if (p.Z.isCertified(s)) {
            let e = (0, o.ap)(f) ? n(561259) : n(887695);
            t = (0, r.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: j.deviceOptionCertified
            });
        }
        return (0, r.jsxs)(
            'span',
            {
                className: j.deviceOption,
                children: [
                    (0, r.jsx)('span', {
                        className: j.deviceOptionLabel,
                        children: p.Z.getCertifiedDeviceName(s, i)
                    }),
                    t
                ]
            },
            s
        );
    }
    function W(e) {
        return k(e[0]);
    }
    return (0, r.jsxs)('div', {
        className: j.devices,
        children: [
            (0, r.jsxs)('div', {
                className: j.deviceColumns,
                children: [
                    (0, r.jsx)('div', {
                        className: j.column,
                        children: (0, r.jsxs)(c.xJW, {
                            title: E.NW.string(E.t.hHMYbW),
                            children: [
                                (0, r.jsx)(c.q4e, {
                                    value: T,
                                    onChange: (e) =>
                                        d.Z.setInputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: s
                                        }),
                                    options: a().map(y, (e) => {
                                        let { id: t, name: n } = e;
                                        return {
                                            value: t,
                                            label: n
                                        };
                                    }),
                                    isDisabled: D,
                                    renderOptionValue: W,
                                    renderOptionLabel: k
                                }),
                                e
                            ]
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: j.column,
                        children: (0, r.jsxs)(c.xJW, {
                            title: E.NW.string(E.t.dl18zc),
                            children: [
                                (0, r.jsx)(c.q4e, {
                                    value: I,
                                    onChange: (e) =>
                                        d.Z.setOutputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: s
                                        }),
                                    options: a().map(A, (e) => {
                                        let { id: t, name: n } = e;
                                        return {
                                            value: t,
                                            label: n
                                        };
                                    }),
                                    isDisabled: w,
                                    renderOptionValue: W,
                                    renderOptionLabel: k
                                }),
                                t
                            ]
                        })
                    })
                ]
            }),
            P &&
                (0, r.jsx)(N.Z, {
                    look: N.z.WARNING,
                    children: E.NW.string(E.t.Ioz3g4)
                })
        ]
    });
}
