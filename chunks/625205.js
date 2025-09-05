n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    l = n(670863),
    c = n(72897),
    u = n(463395),
    d = n(131951),
    f = n(358085),
    _ = n(210887),
    p = n(494620),
    h = n(65154),
    m = n(388032),
    g = n(282086);
let E = f.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function b() {
    var e, t;
    let f = (0, a.e7)([_.Z], () => _.Z.theme),
        { canSetInputDevice: b, canSetOutputDevice: y } = (0, a.cj)([d.Z], () => ({
            canSetInputDevice: d.Z.supports(h.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: d.Z.supports(h.AN.AUDIO_OUTPUT_DEVICE),
        })),
        O = (0, c.p6)(h.h7.AUDIO_INPUT),
        v = (0, c.p6)(h.h7.AUDIO_OUTPUT),
        [I, T] = (0, c.Ls)(h.h7.AUDIO_INPUT, { location: "UserSettingsDevices" }),
        [S, A] = (0, c.Ls)(h.h7.AUDIO_OUTPUT, { location: "UserSettingsDevices" }),
        C = I.concat(T),
        N = S.concat(A),
        R = i.useMemo(() => {
            let e = E.some((e) => {
                    var t;
                    return null == O || null == (t = O.hardwareId) ? void 0 : t.startsWith(e);
                }),
                t = E.some((e) => {
                    var t;
                    return null == v || null == (t = v.hardwareId) ? void 0 : t.startsWith(e);
                });
            return (
                e &&
                t &&
                (null == O ? void 0 : O.containerId) != null &&
                O.containerId === (null == v ? void 0 : v.containerId)
            );
        }, [O, v]),
        P = C[0],
        w = N[0],
        D = null != (e = null == P ? void 0 : P.disabled) ? e : !b,
        x = null != (t = null == w ? void 0 : w.disabled) ? t : !y;
    function L(e) {
        let t,
            { label: i, value: a } = e;
        if (u.Z.isCertified(a)) {
            let e = (0, o.ap)(f) ? n(561259) : n(887695);
            t = (0, r.jsx)("img", {
                src: e,
                alt: "Certified",
                className: g.deviceOptionCertified,
            });
        }
        return (0, r.jsxs)(
            "span",
            {
                className: g.deviceOption,
                children: [
                    (0, r.jsx)("span", {
                        className: g.deviceOptionLabel,
                        children: u.Z.getCertifiedDeviceName(a, i),
                    }),
                    t,
                ],
            },
            a,
        );
    }
    return (0, r.jsxs)("div", {
        className: g.devices,
        children: [
            (0, r.jsxs)("div", {
                className: g.deviceColumns,
                children: [
                    (0, r.jsx)("div", {
                        className: g.column,
                        children: (0, r.jsx)(s.xJW, {
                            title: m.intl.string(m.t.hHMYbW),
                            children: (0, r.jsx)(l.j, {
                                deviceType: h.h7.AUDIO_INPUT,
                                location: "UserSettingsDevices",
                                hideDeviceTypeIcon: !0,
                                isDisabled: D,
                                renderOptionLabel: L,
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: g.column,
                        children: (0, r.jsx)(s.xJW, {
                            title: m.intl.string(m.t.dl18zc),
                            children: (0, r.jsx)(l.j, {
                                deviceType: h.h7.AUDIO_OUTPUT,
                                location: "UserSettingsDevices",
                                hideDeviceTypeIcon: !0,
                                isDisabled: x,
                                renderOptionLabel: L,
                            }),
                        }),
                    }),
                ],
            }),
            R &&
                (0, r.jsx)(p.Z, {
                    look: p.z.WARNING,
                    children: m.intl.string(m.t.Ioz3g4),
                }),
        ],
    });
}
