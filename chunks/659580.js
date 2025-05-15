n.d(t, { default: () => E });
var r = n(255367);
n(73800);
var l = n(990547),
    i = n(442837),
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
    O = n(358085),
    h = n(947150),
    y = n(488021),
    v = n(822556),
    S = n(981631),
    j = n(345655),
    P = n(388032),
    I = n(292538);
function E(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: E = !1, renderInputProfiles: Z = !1, renderInputModes: x = !1, renderInputVolume: C = !1, renderOutputVolume: T = !1, renderDeafen: A = !1, minimal: N = !1, onSelect: w, appContext: _, onInteraction: D } = e,
        { analyticsLocations: L } = (0, u.ZP)();
    (0, d.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: L }
    });
    let k = (0, v.Z)(_),
        M = (0, h.Z)(L, N),
        U = (0, y.Z)(L, N),
        R = (0, i.e7)([b.Z], () => b.Z.getActiveInputProfile()),
        V = (0, m.Z)(L),
        Y = (0, p.Z)(L),
        F = (0, f.Z)(L),
        B = (0, g.Z)(L),
        G = o.Yn.DEFAULT,
        W = b.Z.isSelfDeaf(G),
        z = (0, i.e7)([b.Z], () => b.Z.getMode()),
        H = z === S.pM4.VOICE_ACTIVITY ? S.pM4.PUSH_TO_TALK : S.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: S.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: w,
            onInteraction: D,
            className: I.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': P.intl.string(P.t.ZR1Ss7),
            children: [
                E ? M : null,
                n ? U : null,
                Z ? V : null,
                !N && x && R !== j._.STUDIO
                    ? (0, r.jsx)(a.kSQ, {
                          label: P.intl.string(P.t['pS+K2N']),
                          children: Y
                      })
                    : null,
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        C ? F : null,
                        T ? B : null,
                        N ? (0, r.jsx)(a.Clw, {}) : null,
                        N && A
                            ? (0, r.jsx)(
                                  a.S89,
                                  {
                                      id: 'deafen',
                                      label: P.intl.string(P.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: G,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: W
                                  },
                                  'self-deafen'
                              )
                            : null,
                        N && E && O.isPlatformEmbedded
                            ? (0, r.jsx)(a.S89, {
                                  checked: z === S.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: P.intl.string(P.t.Q8gkVF),
                                  action: () => s.Z.setMode(H, void 0, void 0, { analyticsLocations: L }),
                                  disabled: R === j._.STUDIO
                              })
                            : null,
                        k
                    ]
                })
            ]
        })
    });
}
