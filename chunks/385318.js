n.d(t, { default: () => I });
var i = n(627968);
n(64700);
var l = n(110259),
    a = n(17928),
    s = n(205693),
    r = n(550079),
    o = n(477782),
    c = n(827343),
    d = n(820284),
    u = n(688810),
    _ = n(139286),
    p = n(270816),
    h = n(813977),
    A = n(485873),
    m = n(24933),
    g = n(964592),
    x = n(969341),
    f = n(723702),
    C = n(819027),
    E = n(652215),
    j = n(509381),
    b = n(731854),
    N = n(985018),
    T = n(347933);
function I(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: I = !1,
            renderInputProfiles: S = !1,
            renderInputModes: v = !1,
            renderInputVolume: y = !1,
            renderOutputVolume: O = !1,
            renderDeafen: L = !1,
            minimal: R = !1,
            onSelect: U,
            appContext: w,
            onInteraction: P,
        } = e,
        { analyticsLocations: k } = (0, u.Ay)();
    (0, _.A)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k },
    });
    let M = (0, C.A)(w),
        D = (0, p.H)({ deviceType: b.oh.AUDIO_INPUT, analyticsLocations: k, asSubmenu: R }),
        G = (0, p.H)({ deviceType: b.oh.AUDIO_OUTPUT, analyticsLocations: k, asSubmenu: R }),
        V = (0, a.bG)([x.Ay], () => x.Ay.getActiveInputProfile()),
        B = (0, m.A)(k),
        z = (0, h.A)(k),
        K = (0, A.A)(k),
        q = (0, g.A)(k),
        H = s.x.DEFAULT,
        F = x.Ay.isSelfDeaf(H),
        Q = (0, a.bG)([x.Ay], () => x.Ay.getMode()),
        Y = Q === E.TBI.VOICE_ACTIVITY ? E.TBI.PUSH_TO_TALK : E.TBI.VOICE_ACTIVITY;
    return (0, i.jsx)(d.A, {
        object: E.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            onSelect: U,
            onInteraction: P,
            className: T.MK,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": N.intl.string(N.t.ZR1Ss6),
            children: [
                I && D,
                n && G,
                S && B,
                !R && v && V !== j.m.STUDIO
                    ? (0, i.jsx)(o.rX, { label: N.intl.string(N.t["pS+K2L"]), children: z })
                    : null,
                (0, i.jsxs)(o.rX, {
                    children: [
                        y ? K : null,
                        O ? q : null,
                        R ? (0, i.jsx)(o.bX, {}) : null,
                        R && L
                            ? (0, i.jsx)(
                                  o.sL,
                                  {
                                      id: "deafen",
                                      label: N.intl.string(N.t.wjcRFX),
                                      action: () => c.A.toggleSelfDeaf({ context: H, location: "AudioDeviceMenu" }),
                                      checked: F,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        R && I && f.isPlatformEmbedded
                            ? (0, i.jsx)(o.sL, {
                                  checked: Q === E.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: N.intl.string(N.t.Q8gkVL),
                                  action: () => c.A.setMode(Y, void 0, void 0, { analyticsLocations: k }),
                                  disabled: V === j.m.STUDIO,
                              })
                            : null,
                        M,
                    ],
                }),
            ],
        }),
    });
}
