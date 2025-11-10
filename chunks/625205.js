n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(670863),
    s = n(72897),
    l = n(131951),
    c = n(358085),
    u = n(494620),
    d = n(65154),
    f = n(388032),
    _ = n(28025);
let p = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function h() {
    var e, t;
    let { canSetInputDevice: n, canSetOutputDevice: c } = (0, a.cj)([l.Z], () => ({
            canSetInputDevice: l.Z.supports(d.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: l.Z.supports(d.AN.AUDIO_OUTPUT_DEVICE),
        })),
        h = (0, s.p6)(d.h7.AUDIO_INPUT),
        m = (0, s.p6)(d.h7.AUDIO_OUTPUT),
        [g, E] = (0, s.Ls)(d.h7.AUDIO_INPUT, { location: "UserSettingsDevices" }),
        [b, y] = (0, s.Ls)(d.h7.AUDIO_OUTPUT, { location: "UserSettingsDevices" }),
        O = g.concat(E),
        v = b.concat(y),
        I = i.useMemo(() => {
            let e = p.some((e) => {
                    var t;
                    return null == h || null == (t = h.hardwareId) ? void 0 : t.startsWith(e);
                }),
                t = p.some((e) => {
                    var t;
                    return null == m || null == (t = m.hardwareId) ? void 0 : t.startsWith(e);
                });
            return (
                e &&
                t &&
                (null == h ? void 0 : h.containerId) != null &&
                h.containerId === (null == m ? void 0 : m.containerId)
            );
        }, [h, m]),
        S = O[0],
        T = v[0],
        A = null != (e = null == S ? void 0 : S.disabled) ? e : !n,
        C = null != (t = null == T ? void 0 : T.disabled) ? t : !c;
    return (0, r.jsxs)("div", {
        className: _.devices,
        children: [
            (0, r.jsxs)("div", {
                className: _.deviceColumns,
                children: [
                    (0, r.jsx)("div", {
                        className: _.column,
                        children: (0, r.jsx)(o.j, {
                            label: f.intl.string(f.t.hHMYbb),
                            deviceType: d.h7.AUDIO_INPUT,
                            location: "UserSettingsDevices",
                            hideDeviceTypeIcon: !0,
                            isDisabled: A,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.column,
                        children: (0, r.jsx)(o.j, {
                            label: f.intl.string(f.t.dl18zb),
                            deviceType: d.h7.AUDIO_OUTPUT,
                            location: "UserSettingsDevices",
                            hideDeviceTypeIcon: !0,
                            isDisabled: C,
                        }),
                    }),
                ],
            }),
            I &&
                (0, r.jsx)(u.Z, {
                    look: u.z.WARNING,
                    children: f.intl.string(f.t.Ioz3gx),
                }),
        ],
    });
}
