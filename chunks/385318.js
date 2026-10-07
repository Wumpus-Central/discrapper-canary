n.d(t, { default: () => g });
var i = n(477900);
n(582128);
var l = n(562708),
    s = n(17928),
    a = n(205693),
    d = n(980707),
    o = n(477782),
    c = n(827343),
    r = n(820284),
    u = n(688810),
    A = n(139286),
    T = n(270816),
    I = n(1611),
    p = n(486487),
    U = n(110027),
    b = n(298242),
    f = n(192820),
    m = n(723702),
    _ = n(819027),
    h = n(652215),
    S = n(621380),
    v = n(731854),
    x = n(660183),
    O = n(788066);
function g(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
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
        { analyticsLocations: P } = (0, u.Ay)();
    (0, A.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: P },
    });
    let V = (0, _.A)(M),
        X = (0, T.H)({ deviceType: v.oh.AUDIO_INPUT, analyticsLocations: P, asSubmenu: k }),
        B = (0, T.H)({ deviceType: v.oh.AUDIO_OUTPUT, analyticsLocations: P, asSubmenu: k }),
        H = (0, s.bG)([f.Ay], () => f.Ay.getActiveInputProfile()),
        K = (0, U.A)(P),
        w = (0, I.A)(P),
        F = (0, p.A)(P),
        G = (0, b.A)(P),
        R = a.x.DEFAULT,
        Y = f.Ay.isSelfDeaf(R),
        Z = (0, s.bG)([f.Ay], () => f.Ay.getMode()),
        Q = Z === h.TBI.VOICE_ACTIVITY ? h.TBI.PUSH_TO_TALK : h.TBI.VOICE_ACTIVITY;
    return (0, i.jsx)(r.A, {
        object: h.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(d.W, {
            "data-menu-migrated": !0,
            onSelect: L,
            onInteraction: N,
            className: O.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": x.intl.string(x.t.ZR1Ss6),
            children: [
                g && X,
                n && B,
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
                                      action: () =>
                                          c.default.toggleSelfDeaf({ context: R, location: "AudioDeviceMenu" }),
                                      checked: Y,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        k && g && m.isPlatformEmbedded
                            ? (0, i.jsx)(o.sL, {
                                  checked: Z === h.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: x.intl.string(x.t.Q8gkVL),
                                  action: () => c.default.setMode(Q, void 0, void 0, { analyticsLocations: P }),
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
