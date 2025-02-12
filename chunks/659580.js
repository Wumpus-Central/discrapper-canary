n.d(t, { default: () => b });
var l = n(200651);
n(192379);
var i = n(990547),
    r = n(442837),
    a = n(46973),
    s = n(481060),
    o = n(846027),
    u = n(410575),
    c = n(906732),
    d = n(213609),
    m = n(821564),
    f = n(453925),
    h = n(632304),
    p = n(131951),
    v = n(358085),
    g = n(947150),
    E = n(488021),
    x = n(822556),
    Z = n(981631),
    S = n(388032),
    C = n(362356);
function b(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: b = !1, renderInputModes: I = !1, renderInputVolume: _ = !1, renderOutputVolume: R = !1, renderDeafen: y = !1, simplified: j = !1, onSelect: N, appContext: w } = e,
        { analyticsLocations: A } = (0, c.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: A }
    });
    let T = (0, x.Z)(w),
        k = (0, g.Z)(A, j),
        O = (0, E.Z)(A, j),
        P = (0, m.Z)(A),
        M = (0, f.Z)(A),
        D = (0, h.Z)(A),
        L = a.Yn.DEFAULT,
        F = p.Z.isSelfDeaf(L),
        U = (0, r.e7)([p.Z], () => p.Z.getMode()),
        z = U === Z.pM4.VOICE_ACTIVITY ? Z.pM4.PUSH_TO_TALK : Z.pM4.VOICE_ACTIVITY;
    return (0, l.jsx)(u.Z, {
        object: Z.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(s.v2r, {
            onSelect: N,
            className: C.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': S.intl.string(S.t.ZR1Ss7),
            children: [
                b ? k : null,
                n ? O : null,
                !j && I
                    ? (0, l.jsx)(s.kSQ, {
                          label: S.intl.string(S.t['pS+K2N']),
                          children: P
                      })
                    : null,
                (0, l.jsxs)(s.kSQ, {
                    children: [
                        _ ? M : null,
                        R ? D : null,
                        j ? (0, l.jsx)(s.Clw, {}) : null,
                        j && y
                            ? (0, l.jsx)(
                                  s.S89,
                                  {
                                      id: 'deafen',
                                      label: S.intl.string(S.t.wjcRFR),
                                      action: () =>
                                          o.Z.toggleSelfDeaf({
                                              context: L,
                                              location: 'AudioDeviceMenu'
                                          }),
                                      checked: F
                                  },
                                  'self-deafen'
                              )
                            : null,
                        j && b && v.isPlatformEmbedded
                            ? (0, l.jsx)(s.S89, {
                                  checked: U === Z.pM4.PUSH_TO_TALK,
                                  id: 'input-mode',
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => o.Z.setMode(z, void 0, void 0, { analyticsLocations: A })
                              })
                            : null,
                        T
                    ]
                })
            ]
        })
    });
}
