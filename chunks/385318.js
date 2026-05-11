t.d(n, { default: () => g });
var i = t(627968);
t(64700);
var l = t(562708),
    s = t(17928),
    a = t(459838),
    d = t(980707),
    o = t(477782),
    c = t(827343),
    r = t(820284),
    A = t(688810),
    u = t(139286),
    T = t(270816),
    I = t(1611),
    p = t(486487),
    U = t(110027),
    b = t(298242),
    m = t(235058),
    _ = t(723702),
    h = t(819027),
    f = t(652215),
    S = t(509381),
    v = t(731854),
    x = t(375708),
    O = t(347933);
function g(e) {
    let {
            onClose: n,
            renderOutputDevices: t = !1,
            renderInputDevices: g = !1,
            renderInputProfiles: y = !1,
            renderInputModes: D = !1,
            renderInputVolume: E = !1,
            renderOutputVolume: j = !1,
            renderDeafen: C = !1,
            minimal: k = !1,
            onSelect: L,
            appContext: M,
            onInteraction: N,
        } = e,
        { analyticsLocations: P } = (0, A.Ay)();
    (0, u.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: P },
    });
    let V = (0, h.A)(M),
        X = (0, T.H)({ deviceType: v.oh.AUDIO_INPUT, analyticsLocations: P, asSubmenu: k }),
        B = (0, T.H)({ deviceType: v.oh.AUDIO_OUTPUT, analyticsLocations: P, asSubmenu: k }),
        H = (0, s.bG)([m.Ay], () => m.Ay.getActiveInputProfile()),
        K = (0, U.A)(P),
        w = (0, I.A)(P),
        F = (0, p.A)(P),
        G = (0, b.A)(P),
        R = a.x.DEFAULT,
        Y = m.Ay.isSelfDeaf(R),
        Z = (0, s.bG)([m.Ay], () => m.Ay.getMode()),
        Q = Z === f.TBI.VOICE_ACTIVITY ? f.TBI.PUSH_TO_TALK : f.TBI.VOICE_ACTIVITY;
    return (0, i.jsx)(r.A, {
        object: f.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(d.W, {
            "data-menu-migrated": !0,
            onSelect: L,
            onInteraction: N,
            className: O.MK,
            onClose: n,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": x.intl.string(x.t.ZR1Ss6),
            children: [
                g && X,
                t && B,
                y && K,
                !k && D && H !== S.m.STUDIO
                    ? (0, i.jsx)(o.rX, { label: x.intl.string(x.t["pS+K2L"]), children: w })
                    : null,
                (0, i.jsxs)(o.rX, {
                    children: [
                        E ? F : null,
                        j ? G : null,
                        k ? (0, i.jsx)(o.bX, {}) : null,
                        k && C
                            ? (0, i.jsx)(
                                  o.sL,
                                  {
                                      id: "deafen",
                                      label: x.intl.string(x.t.wjcRFX),
                                      action: () => c.A.toggleSelfDeaf({ context: R, location: "AudioDeviceMenu" }),
                                      checked: Y,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        k && g && _.isPlatformEmbedded
                            ? (0, i.jsx)(o.sL, {
                                  checked: Z === f.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: x.intl.string(x.t.Q8gkVL),
                                  action: () => c.A.setMode(Q, void 0, void 0, { analyticsLocations: P }),
                                  disabled: H === S.m.STUDIO,
                              })
                            : null,
                        V,
                    ],
                }),
            ],
        }),
    });
}
