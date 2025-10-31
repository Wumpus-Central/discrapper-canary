n.d(t, { default: () => _ });
var r = n(951288);
n(647438);
var i = n(990547),
    o = n(442837),
    l = n(46973),
    a = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    p = n(650958),
    m = n(821564),
    f = n(453925),
    b = n(967003),
    v = n(632304),
    g = n(131951),
    y = n(358085),
    j = n(822556),
    O = n(981631),
    h = n(345655),
    x = n(65154),
    E = n(388032),
    P = n(895634);
function _(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: _ = !1,
            renderInputProfiles: w = !1,
            renderInputModes: C = !1,
            renderInputVolume: S = !1,
            renderOutputVolume: I = !1,
            renderDeafen: N = !1,
            minimal: T = !1,
            onSelect: D,
            appContext: Z,
            onInteraction: k,
        } = e,
        { analyticsLocations: M } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: M },
    });
    let A = (0, j.Z)(Z),
        L = (0, p.M)({
            deviceType: x.h7.AUDIO_INPUT,
            analyticsLocations: M,
            asSubmenu: T,
        }),
        R = (0, p.M)({
            deviceType: x.h7.AUDIO_OUTPUT,
            analyticsLocations: M,
            asSubmenu: T,
        }),
        V = (0, o.e7)([g.Z], () => g.Z.getActiveInputProfile()),
        F = (0, b.Z)(M),
        U = (0, m.Z)(M),
        Y = (0, f.Z)(M),
        H = (0, v.Z)(M),
        z = l.Yn.DEFAULT,
        B = g.Z.isSelfDeaf(z),
        G = (0, o.e7)([g.Z], () => g.Z.getMode()),
        W = G === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: O.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: D,
            onInteraction: k,
            className: P.menu,
            onClose: t,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": E.intl.string(E.t.ZR1Ss6),
            children: [
                _ && L,
                n && R,
                w && F,
                !T && C && V !== h._.STUDIO
                    ? (0, r.jsx)(a.kSQ, {
                          label: E.intl.string(E.t["pS+K2L"]),
                          children: U,
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        S ? Y : null,
                        I ? H : null,
                        T ? (0, r.jsx)(a.Clw, {}) : null,
                        T && N
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: "deafen",
                                      label: E.intl.string(E.t.wjcRFX),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: z,
                                              location: "AudioDeviceMenu",
                                          }),
                                      checked: B,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        T && _ && y.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: G === O.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: E.intl.string(E.t.Q8gkVL),
                                  action: () => s.Z.setMode(W, void 0, void 0, { analyticsLocations: M }),
                                  disabled: V === h._.STUDIO,
                              })
                            : null,
                        A,
                    ],
                }),
            ],
        }),
    });
}
