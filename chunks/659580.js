n.d(t, { default: () => S });
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(442837),
    o = n(46973),
    s = n(481060),
    l = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    f = n(650958),
    _ = n(821564),
    p = n(453925),
    h = n(967003),
    m = n(632304),
    g = n(131951),
    E = n(358085),
    b = n(822556),
    y = n(981631),
    O = n(345655),
    v = n(65154),
    I = n(388032),
    T = n(895634);
function S(e) {
    let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: S = !1,
            renderInputProfiles: A = !1,
            renderInputModes: C = !1,
            renderInputVolume: N = !1,
            renderOutputVolume: R = !1,
            renderDeafen: P = !1,
            minimal: w = !1,
            onSelect: D,
            appContext: x,
            onInteraction: L,
        } = e,
        { analyticsLocations: j } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: j },
    });
    let M = (0, b.Z)(x),
        k = (0, f.M)({
            deviceType: v.h7.AUDIO_INPUT,
            analyticsLocations: j,
            asSubmenu: w,
        }),
        U = (0, f.M)({
            deviceType: v.h7.AUDIO_OUTPUT,
            analyticsLocations: j,
            asSubmenu: w,
        }),
        G = (0, a.e7)([g.Z], () => g.Z.getActiveInputProfile()),
        B = (0, h.Z)(j),
        Z = (0, _.Z)(j),
        V = (0, p.Z)(j),
        F = (0, m.Z)(j),
        H = o.Yn.DEFAULT,
        Y = g.Z.isSelfDeaf(H),
        W = (0, a.e7)([g.Z], () => g.Z.getMode()),
        K = W === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: y.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.v2r, {
            onSelect: D,
            onInteraction: L,
            className: T.menu,
            onClose: t,
            navId: "audio-device-context",
            "aria-label": I.intl.string(I.t.ZR1Ss7),
            children: [
                S && k,
                n && U,
                A && B,
                !w && C && G !== O._.STUDIO
                    ? (0, r.jsx)(s.kSQ, {
                          label: I.intl.string(I.t["pS+K2N"]),
                          children: Z,
                      })
                    : null,
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        N ? V : null,
                        R ? F : null,
                        w ? (0, r.jsx)(s.Clw, {}) : null,
                        w && P
                            ? (0, r.jsx)(
                                  s.S89,
                                  {
                                      id: "deafen",
                                      label: I.intl.string(I.t.wjcRFR),
                                      action: () =>
                                          l.Z.toggleSelfDeaf({
                                              context: H,
                                              location: "AudioDeviceMenu",
                                          }),
                                      checked: Y,
                                  },
                                  "self-deafen",
                              )
                            : null,
                        w && S && E.isPlatformEmbedded
                            ? (0, r.jsx)(s.S89, {
                                  checked: W === y.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: I.intl.string(I.t.Q8gkVF),
                                  action: () => l.Z.setMode(K, void 0, void 0, { analyticsLocations: j }),
                                  disabled: G === O._.STUDIO,
                              })
                            : null,
                        M,
                    ],
                }),
            ],
        }),
    });
}
