n.d(t, { default: () => I });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(442837),
    a = n(46973),
    o = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    f = n(650958),
    p = n(821564),
    m = n(453925),
    g = n(967003),
    _ = n(632304),
    v = n(131951),
    b = n(358085),
    y = n(822556),
    h = n(981631),
    O = n(345655),
    j = n(65154),
    S = n(388032),
    x = n(292538);
function I(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: I = !1, renderInputProfiles: P = !1, renderInputModes: C = !1, renderInputVolume: w = !1, renderOutputVolume: E = !1, renderDeafen: T = !1, minimal: N = !1, onSelect: Z, appContext: D, onInteraction: A } = e,
        { analyticsLocations: k } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k }
    });
    let L = (0, y.Z)(D),
        M = (0, f.M)({
            deviceType: j.h7.AUDIO_INPUT,
            analyticsLocations: k,
            asSubmenu: N
        }),
        R = (0, f.M)({
            deviceType: j.h7.AUDIO_OUTPUT,
            analyticsLocations: k,
            asSubmenu: N
        }),
        U = (0, l.e7)([v.Z], () => v.Z.getActiveInputProfile()),
        V = (0, g.Z)(k),
        F = (0, p.Z)(k),
        W = (0, m.Z)(k),
        Y = (0, _.Z)(k),
        B = a.Yn.DEFAULT,
        z = v.Z.isSelfDeaf(B),
        G = (0, l.e7)([v.Z], () => v.Z.getMode()),
        H = G === h.pM4.VOICE_ACTIVITY ? h.pM4.PUSH_TO_TALK : h.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: h.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: Z,
            onInteraction: A,
            className: x.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.intl.string(S.t.ZR1Ss7),
            children: [
                I && M,
                n && R,
                P && V,
                !N && C && U !== O._.STUDIO
                    ? (0, r.jsx)(o.kSQ, {
                          label: S.intl.string(S.t['pS+K2N']),
                          children: F
                      })
                    : null,
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        w ? W : null,
                        E ? Y : null,
                        N ? (0, r.jsx)(o.Clw, {}) : null,
                        N && T
                            ? (0, r.jsx)(
                                  o.S89,
                                  {
                                      id: 'deafen',
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: B,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: z
                                  },
                                  'self-deafen'
                              )
                            : null,
                        N && I && b.isPlatformEmbedded
                            ? (0, r.jsx)(o.S89, {
                                  checked: G === h.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => s.Z.setMode(H, void 0, void 0, { analyticsLocations: k }),
                                  disabled: U === O._.STUDIO
                              })
                            : null,
                        L
                    ]
                })
            ]
        })
    });
}
