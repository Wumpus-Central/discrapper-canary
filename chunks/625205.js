(n.d(t, { Z: () => _ }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(780384),
    l = n(481060),
    o = n(670863),
    c = n(72897),
    d = n(463395),
    u = n(131951),
    m = n(358085),
    p = n(210887),
    g = n(494620),
    h = n(65154),
    f = n(388032),
    b = n(209782);
let x = m.isWindows() ? ['BTHENUM', 'BTHHFENUM'] : [];
function _() {
    var e, t;
    let m = (0, s.e7)([p.Z], () => p.Z.theme),
        { canSetInputDevice: _, canSetOutputDevice: j } = (0, s.cj)([u.Z], () => ({
            canSetInputDevice: u.Z.supports(h.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: u.Z.supports(h.AN.AUDIO_OUTPUT_DEVICE)
        })),
        E = (0, c.p)(h.h7.AUDIO_INPUT),
        C = (0, c.p)(h.h7.AUDIO_OUTPUT),
        [O, v] = (0, c.L)(h.h7.AUDIO_INPUT, { location: 'UserSettingsDevices' }),
        [S, T] = (0, c.L)(h.h7.AUDIO_OUTPUT, { location: 'UserSettingsDevices' }),
        I = O.concat(v),
        N = S.concat(T),
        y = r.useMemo(() => {
            let e = x.some((e) => {
                    var t;
                    return null == E || null == (t = E.hardwareId) ? void 0 : t.startsWith(e);
                }),
                t = x.some((e) => {
                    var t;
                    return null == C || null == (t = C.hardwareId) ? void 0 : t.startsWith(e);
                });
            return e && t && (null == E ? void 0 : E.containerId) != null && E.containerId === (null == C ? void 0 : C.containerId);
        }, [E, C]),
        A = I[0],
        P = N[0],
        R = null != (e = null == A ? void 0 : A.disabled) ? e : !_,
        D = null != (t = null == P ? void 0 : P.disabled) ? t : !j;
    function Z(e) {
        let t,
            { label: r, value: s } = e;
        if (d.Z.isCertified(s)) {
            let e = (0, a.ap)(m) ? n(561259) : n(887695);
            t = (0, i.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: b.deviceOptionCertified
            });
        }
        return (0, i.jsxs)(
            'span',
            {
                className: b.deviceOption,
                children: [
                    (0, i.jsx)('span', {
                        className: b.deviceOptionLabel,
                        children: d.Z.getCertifiedDeviceName(s, r)
                    }),
                    t
                ]
            },
            s
        );
    }
    return (0, i.jsxs)('div', {
        className: b.devices,
        children: [
            (0, i.jsxs)('div', {
                className: b.deviceColumns,
                children: [
                    (0, i.jsx)('div', {
                        className: b.column,
                        children: (0, i.jsx)(l.xJW, {
                            title: f.intl.string(f.t.hHMYbW),
                            children: (0, i.jsx)(o.j, {
                                deviceType: h.h7.AUDIO_INPUT,
                                location: 'UserSettingsDevices',
                                hideDeviceTypeIcon: !0,
                                isDisabled: R,
                                renderOptionLabel: Z
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: b.column,
                        children: (0, i.jsx)(l.xJW, {
                            title: f.intl.string(f.t.dl18zc),
                            children: (0, i.jsx)(o.j, {
                                deviceType: h.h7.AUDIO_OUTPUT,
                                location: 'UserSettingsDevices',
                                hideDeviceTypeIcon: !0,
                                isDisabled: D,
                                renderOptionLabel: Z
                            })
                        })
                    })
                ]
            }),
            y &&
                (0, i.jsx)(g.Z, {
                    look: g.z.WARNING,
                    children: f.intl.string(f.t.Ioz3g4)
                })
        ]
    });
}
