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
    p = n(821564),
    f = n(453925),
    m = n(967003),
    g = n(632304),
    _ = n(131951),
    v = n(358085),
    b = n(947150),
    h = n(488021),
    y = n(822556),
    O = n(981631),
    j = n(345655),
    x = n(388032),
    S = n(292538);
function I(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: I = !1, renderInputProfiles: P = !1, renderInputModes: C = !1, renderInputVolume: E = !1, renderOutputVolume: w = !1, renderDeafen: T = !1, minimal: N = !1, onSelect: Z, appContext: A, onInteraction: D } = e,
        { analyticsLocations: k } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k }
    });
    let L = (0, y.Z)(A),
        M = (0, b.Z)(k, N),
        R = (0, h.Z)(k, N),
        U = (0, l.e7)([_.Z], () => _.Z.getActiveInputProfile()),
        F = (0, m.Z)(k),
        V = (0, p.Z)(k),
        Y = (0, f.Z)(k),
        W = (0, g.Z)(k),
        B = a.Yn.DEFAULT,
        z = _.Z.isSelfDeaf(B),
        G = (0, l.e7)([_.Z], () => _.Z.getMode()),
        H = G === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: O.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: Z,
            onInteraction: D,
            className: S.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': x.intl.string(x.t.ZR1Ss7),
            children: [
                I ? M : null,
                n ? R : null,
                P ? F : null,
                !N && C && U !== j._.STUDIO
                    ? (0, r.jsx)(o.kSQ, {
                          label: x.intl.string(x.t['pS+K2N']),
                          children: V
                      })
                    : null,
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        E ? Y : null,
                        w ? W : null,
                        N ? (0, r.jsx)(o.Clw, {}) : null,
                        N && T
                            ? (0, r.jsx)(
                                  o.S89,
                                  {
                                      id: 'deafen',
                                      label: x.intl.string(x.t.wjcRFR),
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
                        N && I && v.isPlatformEmbedded
                            ? (0, r.jsx)(o.S89, {
                                  checked: G === O.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: x.intl.string(x.t.Q8gkVF),
                                  action: () => s.Z.setMode(H, void 0, void 0, { analyticsLocations: k }),
                                  disabled: U === j._.STUDIO
                              })
                            : null,
                        L
                    ]
                })
            ]
        })
    });
}
