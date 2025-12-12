n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(670863),
    s = n(72897),
    l = n(131951),
    c = n(358085),
    u = n(494620),
    d = n(65154),
    f = n(388032),
    p = n(600402);
let _ = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function m() {
    var e, t;
    let { canSetInputDevice: n, canSetOutputDevice: c } = (0, a.cj)([l.Z], () => ({
            canSetInputDevice: l.Z.supports(d.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: l.Z.supports(d.AN.AUDIO_OUTPUT_DEVICE),
        })),
        m = (0, s.p6)(d.h7.AUDIO_INPUT),
        h = (0, s.p6)(d.h7.AUDIO_OUTPUT),
        [g, E] = (0, s.Ls)(d.h7.AUDIO_INPUT, { location: "UserSettingsDevices" }),
        [b, y] = (0, s.Ls)(d.h7.AUDIO_OUTPUT, { location: "UserSettingsDevices" }),
        O = g.concat(E),
        v = b.concat(y),
        S = i.useMemo(() => {
            let e = _.some((e) => {
                    var t;
                    return null == m || null == (t = m.hardwareId) ? void 0 : t.startsWith(e);
                }),
                t = _.some((e) => {
                    var t;
                    return null == h || null == (t = h.hardwareId) ? void 0 : t.startsWith(e);
                });
            return (
                e &&
                t &&
                (null == m ? void 0 : m.containerId) != null &&
                m.containerId === (null == h ? void 0 : h.containerId)
            );
        }, [m, h]),
        I = O[0],
        T = v[0],
        C = null != (e = null == I ? void 0 : I.disabled) ? e : !n,
        A = null != (t = null == T ? void 0 : T.disabled) ? t : !c;
    return (0, r.jsxs)("div", {
        className: p.devices,
        children: [
            (0, r.jsxs)("div", {
                className: p.deviceColumns,
                children: [
                    (0, r.jsx)("div", {
                        className: p.column,
                        children: (0, r.jsx)(o.j, {
                            label: f.intl.string(f.t.hHMYbb),
                            deviceType: d.h7.AUDIO_INPUT,
                            location: "UserSettingsDevices",
                            hideDeviceTypeIcon: !0,
                            isDisabled: C,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: p.column,
                        children: (0, r.jsx)(o.j, {
                            label: f.intl.string(f.t.dl18zb),
                            deviceType: d.h7.AUDIO_OUTPUT,
                            location: "UserSettingsDevices",
                            hideDeviceTypeIcon: !0,
                            isDisabled: A,
                        }),
                    }),
                ],
            }),
            S &&
                (0, r.jsx)(u.Z, {
                    look: u.z.WARNING,
                    children: f.intl.string(f.t.Ioz3gx),
                }),
        ],
    });
}
