n.d(t, { Z: () => v }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(392711),
    l = n.n(s),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(846027),
    u = n(906732),
    m = n(687058),
    p = n(253052),
    g = n(463395),
    h = n(131951),
    f = n(358085),
    b = n(210887),
    _ = n(494620),
    x = n(962100),
    E = n(65154),
    j = n(388032),
    C = n(209782),
    O = n(20493);
let S = f.isWindows() ? ['BTHENUM', 'BTHHFENUM'] : [];
function v() {
    let e,
        t,
        { analyticsLocations: s } = (0, u.ZP)(),
        f = (0, a.e7)([b.Z], () => b.Z.theme),
        {
            canSetInputDevice: v,
            canSetOutputDevice: T,
            inputDeviceId: N,
            outputDeviceId: I
        } = (0, a.cj)([h.Z], () => ({
            canSetInputDevice: h.Z.supports(E.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: h.Z.supports(E.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: h.Z.getInputDeviceId(),
            outputDeviceId: h.Z.getOutputDeviceId()
        })),
        y = (0, m.Z)(),
        A = (0, p.Z)(),
        P = r.useMemo(() => {
            let e = l()(y).find((e) => e.id === N),
                t = l()(A).find((e) => e.id === I),
                n = S.some((t) => {
                    var n;
                    return null == e || null == (n = e.hardwareId) ? void 0 : n.startsWith(t);
                }),
                i = S.some((e) => {
                    var n;
                    return null == t || null == (n = t.hardwareId) ? void 0 : n.startsWith(e);
                });
            return n && i && (null == e ? void 0 : e.containerId) != null && e.containerId === (null == t ? void 0 : t.containerId);
        }, [y, A, N, I]);
    v ||
        (e = (0, i.jsx)(c.R94, {
            type: c.R94.Types.DESCRIPTION,
            className: O.marginTop8,
            children: j.intl.format(j.t['1iK6UV'], { onDownloadClick: () => (0, x.y)('Help Text Input Devices') })
        })),
        T ||
            (t = (0, i.jsx)(c.R94, {
                type: c.R94.Types.DESCRIPTION,
                className: O.marginTop8,
                children: j.intl.format(j.t.Ow0dbG, { onDownloadClick: () => (0, x.y)('Help Text Output Devices') })
            }));
    let R = l()(y).values().first(),
        D = null != R ? R.disabled : null != e,
        Z = l()(A).values().first(),
        w = null != Z ? Z.disabled : null != t;
    function k(e) {
        let t,
            { label: r, value: s } = e;
        if (g.Z.isCertified(s)) {
            let e = (0, o.ap)(f) ? n(561259) : n(887695);
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
                        children: g.Z.getCertifiedDeviceName(s, r)
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
        className: C.devices,
        children: [
            (0, i.jsxs)('div', {
                className: C.deviceColumns,
                children: [
                    (0, i.jsx)('div', {
                        className: C.column,
                        children: (0, i.jsxs)(c.xJW, {
                            title: j.intl.string(j.t.hHMYbW),
                            children: [
                                (0, i.jsx)(c.q4e, {
                                    value: N,
                                    onChange: (e) =>
                                        d.Z.setInputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: s
                                        }),
                                    options: l().map(y, (e) => {
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
                        className: C.column,
                        children: (0, i.jsxs)(c.xJW, {
                            title: j.intl.string(j.t.dl18zc),
                            children: [
                                (0, i.jsx)(c.q4e, {
                                    value: I,
                                    onChange: (e) =>
                                        d.Z.setOutputDevice(e, {
                                            location: 'Settings',
                                            analyticsLocations: s
                                        }),
                                    options: l().map(A, (e) => {
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
                (0, i.jsx)(_.Z, {
                    look: _.z.WARNING,
                    children: j.intl.string(j.t.Ioz3g4)
                })
        ]
    });
}
