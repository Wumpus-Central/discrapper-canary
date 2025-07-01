n.d(t, { default: () => I });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(442837),
    o = n(46973),
    a = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    p = n(821564),
    f = n(453925),
    m = n(967003),
    g = n(632304),
    b = n(131951),
    _ = n(358085),
    v = n(947150),
    h = n(488021),
    y = n(822556),
    O = n(981631),
    j = n(345655),
    S = n(388032),
    x = n(292538);
function I(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: I = !1, renderInputProfiles: P = !1, renderInputModes: C = !1, renderInputVolume: E = !1, renderOutputVolume: w = !1, renderDeafen: T = !1, minimal: N = !1, onSelect: Z, appContext: A, onInteraction: D } = e,
        { analyticsLocations: k } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k }
    });
    let L = (0, y.Z)(A),
        M = (0, v.Z)(k, N),
        R = (0, h.Z)(k, N),
        F = (0, l.e7)([b.Z], () => b.Z.getActiveInputProfile()),
        U = (0, m.Z)(k),
        V = (0, p.Z)(k),
        B = (0, f.Z)(k),
        Y = (0, g.Z)(k),
        z = o.Yn.DEFAULT,
        W = b.Z.isSelfDeaf(z),
        H = (0, l.e7)([b.Z], () => b.Z.getMode()),
        G = H === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: O.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: Z,
            onInteraction: D,
            className: x.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.intl.string(S.t.ZR1Ss7),
            children: [
                I ? M : null,
                n ? R : null,
                P ? U : null,
                !N && C && F !== j._.STUDIO
                    ? (0, r.jsx)(a.kSQ, {
                          label: S.intl.string(S.t['pS+K2N']),
                          children: V
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        E ? B : null,
                        w ? Y : null,
                        N ? (0, r.jsx)(a.Clw, {}) : null,
                        N && T
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: 'deafen',
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: z,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: W
                                  },
                                  'self-deafen'
                              )
                            : null,
                        N && I && _.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: H === O.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => s.Z.setMode(G, void 0, void 0, { analyticsLocations: k }),
                                  disabled: F === j._.STUDIO
                              })
                            : null,
                        L
                    ]
                })
            ]
        })
    });
}
