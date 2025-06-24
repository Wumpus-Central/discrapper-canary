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
    f = n(821564),
    p = n(453925),
    m = n(967003),
    g = n(632304),
    _ = n(131951),
    b = n(358085),
    v = n(947150),
    h = n(488021),
    y = n(822556),
    O = n(981631),
    j = n(345655),
    S = n(388032),
    x = n(292538);
function I(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: I = !1, renderInputProfiles: C = !1, renderInputModes: P = !1, renderInputVolume: E = !1, renderOutputVolume: w = !1, renderDeafen: T = !1, minimal: N = !1, onSelect: Z, appContext: A, onInteraction: D } = e,
        { analyticsLocations: L } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: L }
    });
    let k = (0, y.Z)(A),
        M = (0, v.Z)(L, N),
        R = (0, h.Z)(L, N),
        F = (0, l.e7)([_.Z], () => _.Z.getActiveInputProfile()),
        U = (0, m.Z)(L),
        V = (0, f.Z)(L),
        B = (0, p.Z)(L),
        Y = (0, g.Z)(L),
        W = a.Yn.DEFAULT,
        z = _.Z.isSelfDeaf(W),
        G = (0, l.e7)([_.Z], () => _.Z.getMode()),
        H = G === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
    return (0, r.jsx)(c.Z, {
        object: O.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: Z,
            onInteraction: D,
            className: x.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.intl.string(S.t.ZR1Ss7),
            children: [
                I ? M : null,
                n ? R : null,
                C ? U : null,
                !N && P && F !== j._.STUDIO
                    ? (0, r.jsx)(o.kSQ, {
                          label: S.intl.string(S.t['pS+K2N']),
                          children: V
                      })
                    : null,
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        E ? B : null,
                        w ? Y : null,
                        N ? (0, r.jsx)(o.Clw, {}) : null,
                        N && T
                            ? (0, r.jsx)(
                                  o.S89,
                                  {
                                      id: 'deafen',
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          s.Z.toggleSelfDeaf({
                                              context: W,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: z
                                  },
                                  'self-deafen'
                              )
                            : null,
                        N && I && b.isPlatformEmbedded
                            ? (0, r.jsx)(o.S89, {
                                  checked: G === O.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => s.Z.setMode(H, void 0, void 0, { analyticsLocations: L }),
                                  disabled: F === j._.STUDIO
                              })
                            : null,
                        k
                    ]
                })
            ]
        })
    });
}
