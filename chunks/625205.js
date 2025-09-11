n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(670863),
    l = n(72897),
    c = n(131951),
    u = n(358085),
    d = n(494620),
    f = n(65154),
    _ = n(388032),
    p = n(282086);
let h = u.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function m() {
    var e, t;
    let { canSetInputDevice: n, canSetOutputDevice: u } = (0, a.cj)([c.Z], () => ({
            canSetInputDevice: c.Z.supports(f.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: c.Z.supports(f.AN.AUDIO_OUTPUT_DEVICE),
        })),
        m = (0, l.p6)(f.h7.AUDIO_INPUT),
        g = (0, l.p6)(f.h7.AUDIO_OUTPUT),
        [E, b] = (0, l.Ls)(f.h7.AUDIO_INPUT, { location: "UserSettingsDevices" }),
        [y, O] = (0, l.Ls)(f.h7.AUDIO_OUTPUT, { location: "UserSettingsDevices" }),
        v = E.concat(b),
        I = y.concat(O),
        T = i.useMemo(() => {
            let e = h.some((e) => {
                    var t;
                    return null == m || null == (t = m.hardwareId) ? void 0 : t.startsWith(e);
                }),
                t = h.some((e) => {
                    var t;
                    return null == g || null == (t = g.hardwareId) ? void 0 : t.startsWith(e);
                });
            return (
                e &&
                t &&
                (null == m ? void 0 : m.containerId) != null &&
                m.containerId === (null == g ? void 0 : g.containerId)
            );
        }, [m, g]),
        S = v[0],
        A = I[0],
        C = null != (e = null == S ? void 0 : S.disabled) ? e : !n,
        N = null != (t = null == A ? void 0 : A.disabled) ? t : !u;
    return (0, r.jsxs)("div", {
        className: p.devices,
        children: [
            (0, r.jsxs)("div", {
                className: p.deviceColumns,
                children: [
                    (0, r.jsx)("div", {
                        className: p.column,
                        children: (0, r.jsx)(o.xJW, {
                            title: _.intl.string(_.t.hHMYbW),
                            children: (0, r.jsx)(s.j, {
                                deviceType: f.h7.AUDIO_INPUT,
                                location: "UserSettingsDevices",
                                hideDeviceTypeIcon: !0,
                                isDisabled: C,
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: p.column,
                        children: (0, r.jsx)(o.xJW, {
                            title: _.intl.string(_.t.dl18zc),
                            children: (0, r.jsx)(s.j, {
                                deviceType: f.h7.AUDIO_OUTPUT,
                                location: "UserSettingsDevices",
                                hideDeviceTypeIcon: !0,
                                isDisabled: N,
                            }),
                        }),
                    }),
                ],
            }),
            T &&
                (0, r.jsx)(d.Z, {
                    look: d.z.WARNING,
                    children: _.intl.string(_.t.Ioz3g4),
                }),
        ],
    });
}
