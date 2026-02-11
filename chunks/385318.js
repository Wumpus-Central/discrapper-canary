n.d(t, { default: () => I });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(311907),
    a = n(205693),
    r = n(397927),
    o = n(827343),
    c = n(820284),
    d = n(688810),
    u = n(139286),
    h = n(48435),
    m = n(813977),
    A = n(485873),
    p = n(24933),
    g = n(964592),
    f = n(430452),
    _ = n(723702),
    E = n(819027),
    C = n(652215),
    x = n(509381),
    S = n(731854),
    T = n(985018),
    N = n(220636);
function I(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: I = !1,
            renderInputProfiles: y = !1,
            renderInputModes: v = !1,
            renderInputVolume: b = !1,
            renderOutputVolume: j = !1,
            renderDeafen: R = !1,
            minimal: M = !1,
            onSelect: D,
            appContext: O,
            onInteraction: L,
        } = e,
        { analyticsLocations: P } = (0, d.Ay)();
    (0, u.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: P },
    });
    let w = (0, E.A)(O),
        k = (0, h.H)({ deviceType: S.oh.AUDIO_INPUT, analyticsLocations: P, asSubmenu: M }),
        U = (0, h.H)({ deviceType: S.oh.AUDIO_OUTPUT, analyticsLocations: P, asSubmenu: M }),
        G = (0, s.bG)([f.Ay], () => f.Ay.getActiveInputProfile()),
        F = (0, p.A)(P),
        H = (0, m.A)(P),
        B = (0, A.A)(P),
        V = (0, g.A)(P),
        K = a.x.DEFAULT,
        W = f.Ay.isSelfDeaf(K),
        z = (0, s.bG)([f.Ay], () => f.Ay.getMode()),
        Y = z === C.TBI.VOICE_ACTIVITY ? C.TBI.PUSH_TO_TALK : C.TBI.VOICE_ACTIVITY;
    return (0, i.jsx)(c.A, {
        object: C.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            onSelect: D,
            onInteraction: L,
            className: N.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": T.intl.string(T.t.ZR1Ss6),
            children: [
                I && k,
                n && U,
                y && F,
                !M && v && G !== x.my.STUDIO
                    ? (0, i.jsx)(r.rXV, { label: T.intl.string(T.t["pS+K2L"]), children: H })
                    : null,
                (0, i.jsxs)(r.rXV, {
                    children: [
                        b ? B : null,
                        j ? V : null,
                        M ? (0, i.jsx)(r.bXX, {}) : null,
                        M && R
                            ? (0, i.jsx)(
                                  r.sLh,
                                  {
                                      id: "deafen",
                                      label: T.intl.string(T.t.wjcRFX),
                                      action: () => o.A.toggleSelfDeaf({ context: K, location: "AudioDeviceMenu" }),
                                      checked: W,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        M && I && _.isPlatformEmbedded
                            ? (0, i.jsx)(r.sLh, {
                                  checked: z === C.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: T.intl.string(T.t.Q8gkVL),
                                  action: () => o.A.setMode(Y, void 0, void 0, { analyticsLocations: P }),
                                  disabled: G === x.my.STUDIO,
                              })
                            : null,
                        w,
                    ],
                }),
            ],
        }),
    });
}
